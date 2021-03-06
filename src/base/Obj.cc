/**
 * This file is part of the NoPoDoFo (R) project.
 * Copyright (c) 2017-2018
 * Authors: Cory Mickelson, et al.
 *
 * NoPoDoFo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * NoPoDoFo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "Obj.h"
#include "../ErrorHandler.h"
#include "Array.h"
#include "Dictionary.h"
#include "Ref.h"
#include <spdlog/spdlog.h>

using namespace Napi;
using namespace PoDoFo;

using std::cout;
using std::endl;
using std::string;
using std::stringstream;

namespace NoPoDoFo {

FunctionReference Obj::constructor; // NOLINT

/**
 * Creates a new instance of PdfObject, this object is assigned in the
 * constructor of NoPoDoFo::Object and is removed with the NoPoDoFo::Object
 * instance.
 *
 * @param info
 * @return
 */
PdfObject*
InitObject(const CallbackInfo& info)
{
  if (info.Length() == 0) {
    return new PdfObject();
  }
  if (info.Length() == 1) {
    if (info[0].IsArray()) {
      auto array = info[0].As<Napi::Array>();
      PdfArray pdfArray;
      for (uint32_t i = 0; i < array.Length(); i++) {
        auto ii = array.Get(i);
        if (ii.IsBoolean()) {
          bool x = ii.As<Boolean>();
          pdfArray[i] = x;
        }
        if (ii.IsNumber()) {
          pdfArray[i] = ii.As<Number>().DoubleValue();
        }
        if (ii.IsString()) {
          string x = ii.As<String>().Utf8Value();
          pdfArray[i] = PdfString(x);
        } else {
          Error::New(
            info.Env(),
            "NoPoDoFo currently only supports homogeneous primitive type array")
            .ThrowAsJavaScriptException();
        }
      }
      return new PdfObject(pdfArray);
    }
    if (info[0].IsString()) {
      PdfString s(info[0].As<String>());
      return new PdfObject(s);
    }
    if (info[0].IsNumber()) {
      return new PdfObject(info[0].As<Number>().DoubleValue());
    }
    if (info[0].IsBoolean()) {
      return new PdfObject(info[0].As<Boolean>());
    }
  }
  return new PdfObject();
}
void
Obj::Initialize(Napi::Env& env, Napi::Object& target)
{
  HandleScope scope(env);
  Function ctor = DefineClass(
    env,
    "Object",
    { InstanceAccessor("stream", &Obj::GetStream, nullptr),
      InstanceAccessor("type", &Obj::GetDataType, nullptr),
      InstanceAccessor("length", &Obj::GetObjectLength, nullptr),
      InstanceAccessor("reference", &Obj::Reference, nullptr),
      InstanceAccessor("immutable", &Obj::GetImmutable, &Obj::SetImmutable),
      InstanceMethod("hasStream", &Obj::HasStream),
      InstanceMethod("getOffset", &Obj::GetByteOffset),
      InstanceMethod("write", &Obj::Write),
      InstanceMethod("flateCompressStream", &Obj::FlateCompressStream),
      InstanceMethod("delayedStreamLoad", &Obj::DelayedStreamLoad),
      InstanceMethod("getBool", &Obj::GetBool),
      InstanceMethod("getDictionary", &Obj::GetDictionary),
      InstanceMethod("getNumber", &Obj::GetNumber),
      InstanceMethod("getReal", &Obj::GetReal),
      InstanceMethod("getString", &Obj::GetString),
      InstanceMethod("getName", &Obj::GetName),
      InstanceMethod("getArray", &Obj::GetArray),
      InstanceMethod("getRawData", &Obj::GetRawData),
      InstanceMethod("clear", &Obj::Clear),
      InstanceMethod("resolveIndirectKey", &Obj::MustGetIndirect) });
  constructor = Persistent(ctor);
  constructor.SuppressDestruct();
  target.Set("Object", ctor);
}

Obj::Obj(const Napi::CallbackInfo& info)
  : ObjectWrap<Obj>(info)
  , obj(info.Length() == 1 && info[0].IsExternal()
          ? *info[0].As<External<PdfObject>>().Data()
          : *(init = InitObject(info)))
{
  dbglog = spdlog::get("dbglog");
  if(init != nullptr) {
    dbglog->debug("New Object Created");
  }
}
Obj::~Obj()
{
  dbglog->debug("Object Cleanup");
  HandleScope scope(Env());
  delete init;
}
void
Obj::Clear(const Napi::CallbackInfo& info)
{
  try {
    obj.Clear();
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  }
}
Napi::Value
Obj::GetStream(const CallbackInfo& info)
{
  try {
    if (!obj.HasStream()) {
      stringstream output;
      output << "/tmp/" << obj.Reference().GenerationNumber() << "."
             << obj.Reference().ObjectNumber() << ".txt" << endl;
      const char* outfile = output.str().c_str();
#ifdef NOPODOFO_DEBUG
      cout << "This Object does not have a stream associated with it" << endl;
      cout << "Writing Object to: " << outfile << endl;
#endif
      PdfOutputDevice outDevice(outfile);
      obj.WriteObject(&outDevice, ePdfWriteMode_Clean, nullptr);
      return info.Env().Undefined();
    }
    auto pStream = dynamic_cast<PdfMemStream*>(obj.GetStream());
    auto stream = pStream->Get();
    auto length = pStream->GetLength();
    auto value =
      Buffer<char>::Copy(info.Env(), stream, static_cast<size_t>(length));
    return value;
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  } catch (Napi::Error& err) {
    ErrorHandler(err, info);
  }
  return info.Env().Undefined();
}

Napi::Value
Obj::HasStream(const CallbackInfo& info)
{
  return Napi::Boolean::New(info.Env(), obj.HasStream());
}

Napi::Value
Obj::GetObjectLength(const CallbackInfo& info)
{
  return Napi::Number::New(info.Env(),
                           obj.GetObjectLength(ePdfWriteMode_Default));
}

Napi::Value
Obj::GetImmutable(const CallbackInfo& info)
{
  return Boolean::New(info.Env(), obj.GetImmutable());
}
void
Obj::SetImmutable(const CallbackInfo& info, const Napi::Value& value)
{
  if (value.IsBoolean()) {
    try {
      obj.SetImmutable(value.As<Boolean>());
    } catch (PdfError& err) {
      ErrorHandler(err, info);
    }
  }
}

Napi::Value
Obj::GetDataType(const CallbackInfo& info)
{
  string js;
  if (obj.IsArray()) {
    js = "Array";
  } else if (obj.IsBool()) {
    js = "Boolean";
  } else if (obj.IsDictionary()) {
    js = "Dictionary";
  } else if (obj.IsEmpty()) {
    js = "Empty";
  } else if (obj.IsHexString()) {
    js = "HexString";
  } else if (obj.IsNull()) {
    js = "Null";
  } else if (obj.IsNumber()) {
    js = "Number";
  } else if (obj.IsName()) {
    js = "Name";
  } else if (obj.IsRawData()) {
    js = "RawData";
  } else if (obj.IsReal()) {
    js = "Real";
  } else if (obj.IsReference()) {
    js = "Reference";
  } else if (obj.IsString()) {
    js = "String";
  } else {
    js = "Unknown";
  }
  return Napi::String::New(info.Env(), js);
}

Napi::Value
Obj::Reference(const CallbackInfo& info)
{
  auto r = GetObject().Reference();
  return Ref::constructor.New({ External<PdfReference>::New(info.Env(), &r) });
}

void
Obj::FlateCompressStream(const CallbackInfo& info)
{
  try {
    obj.FlateCompressStream();
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  }
}

void
Obj::DelayedStreamLoad(const CallbackInfo& info)
{
  try {
    obj.DelayedStreamLoad();
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  }
}

Napi::Value
Obj::GetNumber(const CallbackInfo& info)
{
  if (!obj.IsNumber()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as a number");
  }
  return Number::New(info.Env(), obj.GetNumber());
}

Napi::Value
Obj::GetReal(const CallbackInfo& info)
{
  if (!obj.IsReal()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as a number");
  }

  return Number::New(info.Env(), obj.GetReal());
}

Napi::Value
Obj::GetString(const CallbackInfo& info)
{
  if (!obj.IsString() && !obj.IsHexString()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as a String");
  }
  return String::New(info.Env(), obj.GetString().GetStringUtf8());
}

Napi::Value
Obj::GetName(const CallbackInfo& info)
{
  if (!obj.IsName()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as a string");
  }
  try {
    string name = obj.GetName().GetName();
    return String::New(info.Env(), name);
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  } catch (Napi::Error& err) {
    ErrorHandler(err, info);
  }
  return info.Env().Undefined();
}

Napi::Value
Obj::GetArray(const CallbackInfo& info)
{
  if (!obj.IsArray()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as array");
  }
  auto instance = Array::constructor.New(
    { External<PdfArray>::New(info.Env(), &obj.GetArray()),
      Number::New(info.Env(), 1) });
  return instance;
}

Napi::Value
Obj::GetBool(const CallbackInfo& info)
{
  if (!obj.IsNumber()) {
    throw Napi::Error::New(info.Env(), "Obj not accessible as a boolean");
  }
  return Boolean::New(info.Env(), obj.GetBool());
}

Napi::Value
Obj::GetDictionary(const CallbackInfo& info)
{
  if (!obj.IsDictionary()) {
    throw Napi::Error::New(info.Env(), "Obj only accessible as Dictionary");
  }
  return Dictionary::constructor.New(
    { External<PdfObject>::New(info.Env(), &obj), Number::New(info.Env(), 0) });
}

Napi::Value
Obj::GetRawData(const CallbackInfo& info)
{
  if (!obj.IsRawData()) {
    throw Napi::Error::New(info.Env(), "Obj not accessible as a buffer");
  }
  string data = obj.GetRawData().data();
  return Buffer<char>::Copy(info.Env(), data.c_str(), data.length());
}

class ObjOffsetAsync : public Napi::AsyncWorker
{
public:
  ObjOffsetAsync(Napi::Function& cb, Obj* obj, string arg)
    : Napi::AsyncWorker(cb)
    , obj(obj)
    , arg(std::move(arg))
  {}

protected:
  void Execute() override
  {
    try {
      auto o = obj->GetObject();
      value = o.GetByteOffset(arg.c_str(), ePdfWriteMode_Default);
    } catch (PdfError& err) {
      SetError(ErrorHandler::WriteMsg(err));
    } catch (Napi::Error& err) {
      SetError(err.Message());
    }
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    Callback().Call({ Env().Null(), Number::New(Env(), value) });
  }

private:
  Obj* obj;
  string arg;
  long value = -1;
};

Napi::Value
Obj::GetByteOffset(const CallbackInfo& info)
{
  string arg = info[0].As<String>().Utf8Value();
  auto cb = info[1].As<Function>();
  ObjOffsetAsync* worker = new ObjOffsetAsync(cb, this, arg);
  worker->Queue();
  return info.Env().Undefined();
}

class ObjWriteAsync : public Napi::AsyncWorker
{
public:
  ObjWriteAsync(Napi::Function& cb, Obj* obj, string dest)
    : AsyncWorker(cb)
    , obj(obj)
    , arg(std::move(dest))
  {}

protected:
  void Execute() override
  {
    try {
      PdfOutputDevice device(arg.c_str());
      obj->GetObject().WriteObject(&device, ePdfWriteMode_Default, nullptr);
    } catch (PdfError& err) {
      SetError(ErrorHandler::WriteMsg(err));
    } catch (Napi::Error& err) {
      SetError(err.Message());
    }
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    Callback().Call({ Env().Null(), String::New(Env(), arg) });
  }

private:
  Obj* obj;
  string arg;
};

Napi::Value
Obj::Write(const CallbackInfo& info)
{
  auto cb = info[1].As<Function>();
  ObjWriteAsync* worker =
    new ObjWriteAsync(cb, this, info[0].As<String>().Utf8Value());
  worker->Queue();
  return info.Env().Undefined();
}
Napi::Value
Obj::MustGetIndirect(const CallbackInfo& info)
{
  if (info.Length() != 1 && !info[0].IsString()) {
    TypeError::New(info.Env(),
                   "The name of the indirect key is required, this does a "
                   "lookup in a Dictionary, and resolves"
                   "any Indirects to their Object value")
      .ThrowAsJavaScriptException();
  }
  PdfName name = PdfName(info[0].As<String>());
  PdfObject* target = obj.MustGetIndirectKey(name);
  return Obj::constructor.New({ External<PdfObject>::New(info.Env(), target) });
}

}
