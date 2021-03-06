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

#ifndef NPDF_PDFFIELD_H
#define NPDF_PDFFIELD_H

#include <iostream>
#include <napi.h>
#include <podofo/podofo.h>
#include "../Defines.h" 

using std::cout;
using std::endl;
using std::string;
using std::vector;
using value = Napi::Value;

namespace NoPoDoFo {

typedef struct AppearanceCtx
{
  PoDoFo::PdfDocument* doc;
  PoDoFo::PdfFont* font;
  int fontSize;
  int pageIndex;
} AppearanceCtx;
class Field
{
public:
  explicit Field(PoDoFo::EPdfField type, const Napi::CallbackInfo& info);
  ~Field();
  value GetType(const Napi::CallbackInfo&);
  value GetFieldName(const Napi::CallbackInfo&);
  void SetFieldName(const Napi::CallbackInfo&, const Napi::Value&);
  value GetAlternateName(const Napi::CallbackInfo&);
  value GetMappingName(const Napi::CallbackInfo&);
  void SetAlternateName(const Napi::CallbackInfo&, const Napi::Value&);
  void SetMappingName(const Napi::CallbackInfo&, const Napi::Value&);
  void SetRequired(const Napi::CallbackInfo&, const Napi::Value&);
  value IsRequired(const Napi::CallbackInfo&);
  void SetReadOnly(const Napi::CallbackInfo&, const Napi::Value&);
  value IsReadOnly(const Napi::CallbackInfo&);
  void SetExport(const Napi::CallbackInfo&, const Napi::Value&);
  value IsExport(const Napi::CallbackInfo&);
  void SetBackground(const Napi::CallbackInfo&);
  void SetBorder(const Napi::CallbackInfo&);
  void SetHighlightingMode(const Napi::CallbackInfo&);
  void SetMouseAction(const Napi::CallbackInfo&);
  void SetPageAction(const Napi::CallbackInfo&);
  value GetAnnotation(const Napi::CallbackInfo&);
  value GetAppearanceStream(const Napi::CallbackInfo&);
  void SetAppearanceStream(const Napi::CallbackInfo&, const Napi::Value&);
  value GetDefaultAppearance(const Napi::CallbackInfo&);
  void SetDefaultAppearance(const Napi::CallbackInfo&, const Napi::Value&);
  value GetJustification(const Napi::CallbackInfo&);
  void SetJustification(const Napi::CallbackInfo&, const Napi::Value&);
  value GetFieldObject(const Napi::CallbackInfo&);
  virtual void RefreshAppearanceStream();
  PoDoFo::PdfField& GetField() { return *field; }
  PoDoFo::PdfDictionary& GetFieldDictionary()
  {
    return field->GetFieldObject()->GetDictionary();
  }
  std::map<std::string, PoDoFo::PdfObject*> GetFieldRefreshKeys(
    PoDoFo::PdfField*);
  PoDoFo::PdfFont* GetDAFont(string_view);
  string fieldName;
  string fieldType;

protected:
  string TypeString();

  // void SetColor(const Napi::CallbackInfo&, std::function<void (double,
  // double, double, double)>);

private:
  PoDoFo::PdfField* field;
  vector<PoDoFo::PdfObject*> children;
  std::shared_ptr<spdlog::logger> dbglog;
};
}
#endif // NPDF_PDFFIELD_H
