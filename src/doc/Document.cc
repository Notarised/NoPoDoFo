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

#include "Document.h"
#include "../ErrorHandler.h"
#include "../ValidateArguments.h"
#include "../base/Obj.h"
#include "../base/Ref.h"
#include "Font.h"
#include "Page.h"

using namespace Napi;
using namespace PoDoFo;

using std::cout;
using std::endl;

namespace NoPoDoFo {

FunctionReference Document::constructor; // NOLINT

void
Document::Initialize(Napi::Env& env, Napi::Object& target)
{
  HandleScope scope(env);
  Function ctor = DefineClass(
    env,
    "Document",
    { StaticMethod("gc", &Document::GC),
      InstanceAccessor("password", nullptr, &Document::SetPassword),
      InstanceAccessor("encrypt", nullptr, &Document::SetEncrypt),
      InstanceAccessor(
        "pageMode", &Document::GetPageMode, &Document::SetPageMode),
      InstanceAccessor("pageLayout", nullptr, &Document::SetPageLayout),
      InstanceAccessor("printingScale", nullptr, &Document::SetPrintingScale),
      InstanceAccessor("baseURI", nullptr, &Document::SetBaseURI),
      InstanceAccessor("language", nullptr, &Document::SetLanguage),
      InstanceMethod("hideToolbar", &Document::SetHideToolbar),
      InstanceMethod("hideMenubar", &Document::SetHideMenubar),
      InstanceMethod("hideWindowUI", &Document::SetHideWindowUI),
      InstanceMethod("fitWindow", &Document::SetFitWindow),
      InstanceMethod("centerWindow", &Document::SetCenterWindow),
      InstanceMethod("displayDocTitle", &Document::SetDisplayDocTitle),
      InstanceMethod("useFullScreen", &Document::SetUseFullScreen),
      InstanceMethod("attachFile", &Document::AttachFile),
      InstanceMethod("load", &Document::Load),
      InstanceMethod("getPageCount", &Document::GetPageCount),
      InstanceMethod("getPage", &Document::GetPage),
      InstanceMethod("insertExistingPage", &Document::InsertExistingPage),
      InstanceMethod("mergeDocument", &Document::MergeDocument),
      InstanceMethod("deletePage", &Document::DeletePage),
      InstanceMethod("getVersion", &Document::GetVersion),
      InstanceMethod("isLinearized", &Document::IsLinearized),
      InstanceMethod("getWriteMode", &Document::GetWriteMode),
      InstanceMethod("write", &Document::Write),
      InstanceMethod("writeBuffer", &Document::WriteBuffer),
      InstanceMethod("getObjects", &Document::GetObjects),
      InstanceMethod("getObject", &Document::GetObject),
      InstanceMethod("getTrailer", &Document::GetTrailer),
      InstanceMethod("getCatalog", &Document::GetCatalog),
      InstanceMethod("isAllowed", &Document::IsAllowed),
      InstanceMethod("createFont", &Document::CreateFont) });
  constructor = Persistent(ctor);
  constructor.SuppressDestruct();
  target.Set("Document", ctor);
}
Document::Document(const CallbackInfo& info)
  : ObjectWrap(info)
  , BaseDocument()
  , document(new PdfMemDocument())
{
  BaseDocument::SetInstance(document);
}

Document::~Document()
{
  HandleScope scope(Env());
  cout << "Destructing document object." << endl;
  delete document;
  document = nullptr;
}

void
Document::SetPassword(const CallbackInfo& info, const Napi::Value& value)
{
  if (value.IsEmpty() || !value.IsString()) {
    throw Napi::Error::New(info.Env(), "password must be of type string");
  }
  string password = value.As<String>().Utf8Value();
  try {
    document->SetPassword(password);
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  } catch (Error& err) {
    ErrorHandler(err, info);
  }
}

void
Document::DeletePage(const CallbackInfo& info)
{
  AssertFunctionArgs(info, 1, { napi_valuetype::napi_number });
  int pageIndex = info[0].As<Number>();
  try {
    document->GetPagesTree()->DeletePage(pageIndex);
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  }
}

void
Document::MergeDocument(const CallbackInfo& info)
{
  AssertFunctionArgs(info, 1, { napi_valuetype::napi_string });
  string docPath = info[0].As<String>().Utf8Value();
  PdfMemDocument mergedDoc;
  try {
    mergedDoc.Load(docPath.c_str());
  } catch (PdfError& err) {
    if (err.GetError() == ePdfError_InvalidPassword && info.Length() != 2) {
      throw Error::New(info.Env(),
                       "Password required to modify this document. Call "
                       "MergeDocument(filePath, password)");
    } else if (err.GetError() == ePdfError_InvalidPassword &&
               info.Length() == 2 && info[1].IsString()) {
      string password = info[1].As<String>().Utf8Value();
      mergedDoc.SetPassword(password);
    }
  }
  try {
    document->Append(mergedDoc);
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  }
}
void
Document::SetEncrypt(const CallbackInfo& info, const Napi::Value& value)
{
  AssertFunctionArgs(info, 1, { napi_external });
  try {
    const PdfEncrypt* e = value.As<External<PdfEncrypt>>().Data();
    document->SetEncrypted(*e);
  }
  //  try {
  //    AssertFunctionArgs(info, 1, { napi_valuetype::napi_object });
  //    if (!value.IsObject()) {
  //      throw Error::New(info.Env(),
  //                       "Set encrypt requires a single argument of"
  //                       " type Object<{userPassword:string,"
  //                       " ownerPassword:string, protection:Array<string>,"
  //                       " algorithm: string, keyLength: int");
  //    }
  //    auto encryption = value.As<Object>();
  //    string ownerPwd;
  //    string userPwd;
  //    int nperm = 0;
  //    int algoParameter = 0;
  //    int key = 0;
  //    if (!encryption.Has("ownerPassword") || !encryption.Has("keyLength") ||
  //        !encryption.Has("protection") || !encryption.Has("algorithm")) {
  //      throw Error::New(info.Env(), "something is not right");
  //    }
  //    try {
  //      if (encryption.Has("ownerPassword")) {
  //        ownerPwd = encryption.Get("ownerPassword").As<String>().Utf8Value();
  //      }
  //      if (encryption.Has("userPassword")) {
  //        userPwd = encryption.Get("userPassword").As<String>().Utf8Value();
  //      }
  //      if (encryption.Has("protection")) {
  //        if (encryption.Get("protection").IsArray()) {
  //          auto permissions = encryption.Get("protection").As<Array>();
  //          if (!permissions.IsEmpty()) {
  //            for (uint32_t i = 0; i < permissions.Length(); ++i) {
  //              if (permissions.Get(i).IsString()) {
  //                string permission =
  //                permissions.Get(i).As<String>().Utf8Value(); if (permission
  //                == "Copy")
  //                  nperm |= 0x00000010;
  //                else if (permission == "Print")
  //                  nperm |= 0x00000004;
  //                else if (permission == "Edit")
  //                  nperm |= 0x00000008;
  //                else if (permission == "EditNotes")
  //                  nperm |= 0x00000020;
  //                else if (permission == "FillAndSign")
  //                  nperm |= 0x00000100;
  //                else if (permission == "Accessible")
  //                  nperm |= 0x00000200;
  //                else if (permission == "DocAssembly")
  //                  nperm |= 0x00000400;
  //                else if (permission == "HighPrint")
  //                  nperm |= 0x00000800;
  //                else {
  //                  stringstream msg;
  //                  msg << "Unknown permission parameter: " << permission
  //                      << ". Permission must be one or more of: "
  //                      << "[Copy, Print, Edit, EditNotes, FillAndSign, "
  //                         "Accessible, DocAssembly, HighPrint]"
  //                      << endl;
  //                  throw Error::New(info.Env(), msg.str());
  //                }
  //              }
  //            }
  //          }
  //        } else {
  //          throw Error::New(info.Env(), "shit");
  //        }
  //      }
  //      if (encryption.Has("algorithm")) {
  //        // rc4v1 =1 rc4v2 = 2 aesv2 = 4 aesv3 = 8
  //        Napi::Value algoProp = encryption.Get("algorithm");
  //        string algo;
  //        if (algoProp.IsString()) {
  //          algo = algoProp.As<String>().Utf8Value();
  //          if (algo == "rc4v1")
  //            algoParameter = 1;
  //          else if (algo == "rc4v2")
  //            algoParameter = 2;
  //          else if (algo == "aesv2")
  //            algoParameter = 4;
  //          else if (algo == "aesv3")
  //            algoParameter = 8;
  //          else {
  //            stringstream msg;
  //            msg << "Unknown permission parameter: " << algo
  //                << ". Permission must be one or more of: [rc4v1, rc4v2,
  //                aesv2, "
  //                   "aesv3]"
  //                << endl;
  //            throw Error::New(info.Env(), msg.str());
  //          }
  //        }
  //      }
  //      if (encryption.Has("keyLength")) {
  //        // 40 56 80 96 128 256
  //        int keyValues[6] = { 40, 56, 80, 96, 128, 256 };
  //        Napi::Value keyProp = encryption.Get("keyLength");
  //        if (keyProp.IsNumber()) {
  //          key = keyProp.As<Number>();
  //          for (int i = 0; i < 6; ++i) {
  //            if (keyValues[i] == key)
  //              break;
  //            if (keyValues[i] != key && i == 6) {
  //              stringstream msg;
  //              msg
  //                << "Unknown permission parameter: " << key
  //                << ". Permission must be one or more of: [40, 56, 80, 96,
  //                128, "
  //                   "256]"
  //                << endl;
  //              throw Error::New(info.Env(), msg.str());
  //            }
  //          }
  //        }
  //      }
  //    } catch (PdfError& err) {
  //      stringstream msg;
  //      msg << "Parse Encrypt Object failed with error: " << err.GetError()
  //          << endl;
  //      throw Error::New(info.Env(), msg.str());
  //    }
  //    document->SetEncrypted(
  //      userPwd,
  //      ownerPwd,
  //      nperm,
  //      static_cast<PdfEncrypt::EPdfEncryptAlgorithm>(algoParameter),
  //      static_cast<PdfEncrypt::EPdfKeyLength>(key));
  catch (PdfError& err) {
    stringstream msg;
    msg << "PdfMemDocument::SetEncrypt failed with error: " << err.GetError()
        << endl;
    throw Error::New(info.Env(), msg.str());
  }
}
Napi::Value
Document::GetTrailer(const CallbackInfo& info)
{
  const PdfObject* trailerPdObject = document->GetTrailer();
  auto* ptr = const_cast<PdfObject*>(trailerPdObject);
  auto initPtr = Napi::External<PdfObject>::New(info.Env(), ptr);
  auto instance = Obj::constructor.New({ initPtr });
  return instance;
}

Napi::Value
Document::GetCatalog(const CallbackInfo& info)
{
  const PdfObject* catalog = document->GetCatalog();
  auto* ptr = const_cast<PdfObject*>(catalog);
  auto initPtr = Napi::External<PdfObject>::New(info.Env(), ptr);
  auto instance = Obj::constructor.New({ initPtr });
  return instance;
}
/**
 * @brief Document::InsertPage
 * @param info - (OtherDocument: Document, OtherDocPageIndex: int,
 * InsertAtIndex: int): Page
 * @return
 */
Napi::Value
Document::InsertExistingPage(const CallbackInfo& info)
{
  auto pDoc = Document::Unwrap(info[0].As<Object>());
  int pDocIndex = info[1].As<Number>();
  int insertIndex = info[2].As<Number>();
  document->InsertExistingPageAt(pDoc->GetDocument(), pDocIndex, insertIndex);
  PdfPage* page = document->GetPage(insertIndex);
  auto pagePtr = External<PdfPage>::New(info.Env(), page);
  auto instance = Page::constructor.New({ this->Value(), pagePtr });
  return instance;
}

class DocumentWriteAsync : public AsyncWorker
{
public:
  DocumentWriteAsync(Napi::Function& cb, Document& doc, string arg)
    : Napi::AsyncWorker(cb)
    , doc(doc)
    , arg(std::move(arg))
  {}

private:
  Document& doc;
  string arg = "";

  // AsyncWorker interface
protected:
  void Execute() override
  {
    try {
      PdfOutputDevice device(arg.c_str());
      doc.GetDocument()->Write(&device);
    } catch (PdfError& err) {
      SetError(String::New(Env(), ErrorHandler::WriteMsg(err)));
    } catch (Napi::Error& err) {
      SetError(String::New(Env(), ErrorHandler::WriteMsg(err)));
    }
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    Callback().Call({ Env().Null(), String::New(Env(), arg) });
  }
};

Napi::Value
Document::Write(const CallbackInfo& info)
{
  try {
    if (info.Length() == 2 && info[0].IsString() && info[1].IsFunction()) {
      string arg = info[0].As<String>();
      auto cb = info[1].As<Function>();
      DocumentWriteAsync* worker = new DocumentWriteAsync(cb, *this, arg);
      worker->Queue();
    } else {
      throw Error::New(
        info.Env(),
        String::New(info.Env(), "Requires at least a callback argument"));
    }
  } catch (PdfError& err) {
    ErrorHandler(err, info);
  } catch (Napi::Error& err) {
    ErrorHandler(err, info);
  }

  return Env().Undefined();
}

class DocumentLoadAsync : public AsyncWorker
{
public:
  DocumentLoadAsync(Function& cb,
                    Document& doc,
                    string arg,
                    PdfRefCountedInputDevice* refBuffer)
    : AsyncWorker(cb)
    , doc(doc)
    , arg(std::move(arg))
    , refBuffer(refBuffer)
  {}

  void ForUpdate(bool v) { update = v; }
  void SetPassword(string v) { pwd = std::move(v); }
  void SetUseBuffer(bool v) { useBuffer = v; }

private:
  Document& doc;
  PdfRefCountedInputDevice* refBuffer;
  string arg;
  string pwd;
  bool update = false;
  bool useBuffer = false;

  // AsyncWorker interface
protected:
  void Execute() override
  {
    try {
      if (!useBuffer)
        doc.GetDocument()->Load(arg.c_str(), update);
      else {
        doc.GetDocument()->LoadFromDevice(*refBuffer);
      }
    } catch (PdfError& e) {
      if (e.GetError() == ePdfError_InvalidPassword) {
        cout << "password missing" << endl;
        if (pwd.empty())
          SetError("Password required to modify this document");
        else {
          try {
            doc.GetDocument()->SetPassword(pwd);
            cout << "password set" << endl;
          } catch (PdfError& err) {
            cout << "Invalid password" << endl;
            stringstream msg;
            msg << "Invalid password.\n" << err.what() << endl;
            SetError(msg.str());
          }
        }
      } else {
        SetError(ErrorHandler::WriteMsg(e));
      }
    }
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    Callback().Call({ Env().Null(), String::New(Env(), arg) });
  }
};

/**
 * @details Javascript parameters: (file: string|Buffer, cb:Function, update:
 * boolean = false, isBuffer, pwd?: string)
 * @param info
 * @return
 */
Napi::Value
Document::Load(const CallbackInfo& info)
{
  Function cb;
  bool forUpdate, useBuffer = false;
  string source, pwd;
  PdfRefCountedInputDevice* inputDevice = nullptr;

  cb = info[1].As<Function>();
  forUpdate = info[2].As<Boolean>();
  pwd = info[4].As<String>().Utf8Value();
  if (info[3].As<Boolean>()) {
    auto buffer = info[0].As<Buffer<char>>();
    useBuffer = true;
    inputDevice = new PdfRefCountedInputDevice(buffer.Data(), buffer.Length());
  } else {
    source = info[0].As<String>().Utf8Value();
  }

  loadForIncrementalUpdates = forUpdate;
  DocumentLoadAsync* worker =
    new DocumentLoadAsync(cb, *this, source, inputDevice);

  worker->SetPassword(pwd);
  worker->ForUpdate(forUpdate);
  worker->SetUseBuffer(useBuffer);
  worker->Queue();
  return info.Env().Undefined();
}

class DocumentWriteBufferAsync : public AsyncWorker
{
public:
  DocumentWriteBufferAsync(Function& cb, Document& doc)
    : AsyncWorker(cb)
    , doc(doc)
  {}

private:
  Document& doc;
  PdfRefCountedBuffer output;

protected:
  void Execute() override
  {
    PdfOutputDevice device(&output);
    doc.GetDocument()->Write(&device);
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    if (output.GetSize() == 0) {
      SetError("Error, failed to write to buffer");
    }
    Callback().Call(
      { Env().Null(),
        Buffer<char>::Copy(Env(), output.GetBuffer(), output.GetSize()) });
  }
};

Napi::Value
Document::WriteBuffer(const CallbackInfo& info)
{
  AssertFunctionArgs(info, 1, { napi_valuetype::napi_function });
  auto cb = info[0].As<Function>();
  auto* worker = new DocumentWriteBufferAsync(cb, *this);
  worker->Queue();
  return info.Env().Undefined();
}

class GCAsync : public AsyncWorker
{
public:
  GCAsync(const Function& callback, string doc, string pwd, string output)
    : AsyncWorker(callback)
    , doc(std::move(doc))
    , pwd(std::move(pwd))
    , output(std::move(output))
    , size(0)
  {}

protected:
  void Execute() override
  {
    PdfVecObjects vecObjects;
    PdfParser parser(&vecObjects);
    vecObjects.SetAutoDelete(true);
    parser.ParseFile(doc.c_str(), false);
    PdfWriter writer(&parser);
    writer.SetPdfVersion(parser.GetPdfVersion());
    if (parser.GetEncrypted()) {
      writer.SetEncrypted(*(parser.GetEncrypt()));
    }
    if (output.empty()) {
      PdfRefCountedBuffer r;
      PdfOutputDevice device(&r);
      writer.Write(&device);
      value = string(r.GetBuffer());
      size = r.GetSize();
    } else {
      writer.SetWriteMode(ePdfWriteMode_Compact);
      writer.Write(output.c_str());
      size = 0;
      value = output;
    }
  }
  void OnOK() override
  {
    HandleScope scope(Env());
    if (size > 0) {
      auto buffer =
        Buffer<char>::Copy(Env(), value.c_str(), static_cast<size_t>(size));
      Callback().Call({ Env().Null(), buffer });
    }
    Callback().Call({ Env().Null(), String::New(Env(), value) });
  }

private:
  string doc;
  string pwd;
  string output;
  string value;
  long size;
};

Napi::Value
Document::GC(const Napi::CallbackInfo& info)
{
  string source = info[0].As<String>().Utf8Value(), pwd, output;
  pwd = info[1].IsString() ? info[1].As<String>().Utf8Value() : "";
  output = info[2].IsString() ? info[2].As<String>().Utf8Value() : "";
  auto cb = info[3].As<Function>();
  auto worker = new GCAsync(cb, source, pwd, output);
  worker->Queue();
  return info.Env().Undefined();
}
}
