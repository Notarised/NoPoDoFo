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

#include "StreamDocument.h"
#include "Encrypt.h"

#include <iostream>
#include <spdlog/spdlog.h>

using namespace PoDoFo;
using namespace Napi;

using std::string;

namespace NoPoDoFo {

FunctionReference StreamDocument::constructor; // NOLINT

/**
 * @note Javascript args (filename:string, create:boolean, options: {
 * version:number, writeMode:number, encrypt:External})
 * @brief StreamDocument::StreamDocument
 * @param info
 */
StreamDocument::StreamDocument(const CallbackInfo& info)
  : ObjectWrap(info)
  , BaseDocument(info, false)
{
  dbglog = spdlog::get("dbglog");
  cout << "Stream Document" << endl;
}
StreamDocument::~StreamDocument()
{
 dbglog->debug("StreamDocument Cleanup");
}
void
StreamDocument::Initialize(Napi::Env& env, Napi::Object& target)
{
  HandleScope scope(env);
  Function ctor = DefineClass(
    env,
    "StreamDocument",
    { InstanceMethod("close", &StreamDocument::Close),

      InstanceAccessor("form", &StreamDocument::GetForm, nullptr),
      InstanceAccessor("body", &StreamDocument::GetObjects, nullptr),
      InstanceAccessor("version", &StreamDocument::GetVersion, nullptr),
      InstanceAccessor(
        "pageMode", &StreamDocument::GetPageMode, &StreamDocument::SetPageMode),
      InstanceAccessor("pageLayout", nullptr, &StreamDocument::SetPageLayout),
      InstanceAccessor(
        "printingScale", nullptr, &StreamDocument::SetPrintingScale),
      InstanceAccessor("language", nullptr, &StreamDocument::SetLanguage),
      InstanceAccessor("info", &StreamDocument::GetInfo, nullptr),

      InstanceMethod("getPageCount", &StreamDocument::GetPageCount),
      InstanceMethod("getPage", &StreamDocument::GetPage),
      InstanceMethod("hideToolbar", &StreamDocument::SetHideToolbar),
      InstanceMethod("hideMenubar", &StreamDocument::SetHideMenubar),
      InstanceMethod("hideWindowUI", &StreamDocument::SetHideWindowUI),
      InstanceMethod("fitWindow", &StreamDocument::SetFitWindow),
      InstanceMethod("centerWindow", &StreamDocument::SetCenterWindow),
      InstanceMethod("displayDocTitle", &StreamDocument::SetDisplayDocTitle),
      InstanceMethod("useFullScreen", &StreamDocument::SetUseFullScreen),
      InstanceMethod("attachFile", &StreamDocument::AttachFile),
      InstanceMethod("insertExistingPage", &StreamDocument::InsertExistingPage),
      InstanceMethod("insertPage", &StreamDocument::InsertPage),
      InstanceMethod("append", &StreamDocument::Append),
      InstanceMethod("isLinearized", &StreamDocument::IsLinearized),
      InstanceMethod("getWriteMode", &StreamDocument::GetWriteMode),
      InstanceMethod("getObject", &StreamDocument::GetObject),
      InstanceMethod("isAllowed", &StreamDocument::IsAllowed),
      InstanceMethod("createFont", &StreamDocument::CreateFont),
      InstanceMethod("createFontSubset", &StreamDocument::CreateFontSubset),
      InstanceMethod("getOutlines", &StreamDocument::GetOutlines),
      InstanceMethod("getNames", &StreamDocument::GetNamesTree),
      InstanceMethod("createPage", &StreamDocument::CreatePage),
      InstanceMethod("createPages", &StreamDocument::CreatePages),
      InstanceMethod("createXObject", &StreamDocument::CreateXObject),
      InstanceMethod("getAttachment", &StreamDocument::GetAttachment),
      InstanceMethod("addNamedDestination",
                     &StreamDocument::AddNamedDestination)

    });
  constructor = Napi::Persistent(ctor);
  constructor.SuppressDestruct();
  target.Set("StreamDocument", ctor);
}

Napi::Value
StreamDocument::Close(const CallbackInfo& info)
{
  GetStreamedDocument().Close();
  if (output.empty()) {
    cout << "Streaming to nodejs buffer" << endl;
    return Buffer<char>::Copy(info.Env(),
                              streamDocRefCountedBuffer->GetBuffer(),
                              streamDocRefCountedBuffer->GetSize());
  }
  return String::New(info.Env(), output);
}
void
StreamDocument::Append(const Napi::CallbackInfo& info)
{
  cout << "StreamDocument does not currently support the append operation"
       << endl;
}
Napi::Value
StreamDocument::InsertExistingPage(const Napi::CallbackInfo&)
{
  cout << "StreamDocument does not currently support this operation" << endl;
  return {};
}
}
