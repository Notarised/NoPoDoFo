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

#ifndef NPDF_DICTIONARY_H
#define NPDF_DICTIONARY_H

#include <napi.h>
#include <podofo/podofo.h>
#include <string>

using std::vector;

namespace NoPoDoFo {
class Dictionary : public Napi::ObjectWrap<Dictionary>
{
public:
  explicit Dictionary(const Napi::CallbackInfo&);
  ~Dictionary();
  static Napi::FunctionReference constructor;
  static void Initialize(Napi::Env& env, Napi::Object& target);
  void AddKey(const Napi::CallbackInfo&);
  Napi::Value GetKey(const Napi::CallbackInfo&);
  Napi::Value GetKeyType(const Napi::CallbackInfo&);
  Napi::Value GetKeys(const Napi::CallbackInfo&);
  Napi::Value RemoveKey(const Napi::CallbackInfo&);
  Napi::Value HasKey(const Napi::CallbackInfo&);
  Napi::Value Clear(const Napi::CallbackInfo&);
  void SetImmutable(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetImmutable(const Napi::CallbackInfo&);
  void SetDirty(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetDirty(const Napi::CallbackInfo&);
  Napi::Value GetKeyAs(const Napi::CallbackInfo&);
  Napi::Value Write(const Napi::CallbackInfo&);
  void WriteSync(const Napi::CallbackInfo&);
  Napi::Value Eq(const Napi::CallbackInfo&);
  PoDoFo::PdfDictionary&
  GetDictionary()
  {
    return init ? *init : self;
  }

private:
  vector<PoDoFo::PdfObject*> children;
  PoDoFo::PdfDictionary& self;
  PoDoFo::PdfDictionary* init = nullptr;
};
}
#endif
