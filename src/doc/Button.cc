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

#include "Button.h"
#include "Field.h"
#include <iostream>
#include <spdlog/spdlog.h>

using namespace Napi;
using namespace PoDoFo;

using std::cout;
using std::endl;

namespace NoPoDoFo {
Button::Button(PdfField& field)
{
  button = new PdfButton(field);
  dbglog = spdlog::get("dbglog");
}

Button::~Button()
{
  dbglog->debug("Button Cleanup");
  delete button;
}
Napi::Value
Button::GetCaption(const Napi::CallbackInfo& info)
{
  return String::New(info.Env(), button->GetCaption().GetStringUtf8());
}
void
Button::SetCaption(const Napi::CallbackInfo&, const Napi::Value& value)
{
  button->SetCaption(PdfString(value.As<String>().Utf8Value()));
}
}
