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

#ifndef NPDF_LISTFIELD_H
#define NPDF_LISTFIELD_H

#include <napi.h>
#include <podofo/podofo.h>
#include <spdlog/logger.h>

namespace NoPoDoFo {
class ListField
{
public:
  explicit ListField(PoDoFo::PdfField&);
  ~ListField();
  void InsertItem(const Napi::CallbackInfo&);
  void RemoveItem(const Napi::CallbackInfo&);
  Napi::Value GetItem(const Napi::CallbackInfo&);
  Napi::Value GetItemCount(const Napi::CallbackInfo&);
  void SetSelectedItem(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetSelectedItem(const Napi::CallbackInfo&);
  Napi::Value IsComboBox(const Napi::CallbackInfo&);
  void SetSpellCheckEnabled(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value IsSpellCheckEnabled(const Napi::CallbackInfo&);
  void SetSorted(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value IsSorted(const Napi::CallbackInfo&);
  void SetMultiSelect(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value IsMultiSelect(const Napi::CallbackInfo&);
  PoDoFo::PdfListField GetListField() { return PoDoFo::PdfListField(field); }

private:
  PoDoFo::PdfField& field;
  std::shared_ptr<spdlog::logger> dbglog;
};
}
#endif
