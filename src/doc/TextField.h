//
// Created by red on 9/11/17.
//

#ifndef NPDF_TEXTFIELD_H
#define NPDF_TEXTFIELD_H

#include "../ValidateArguments.h"
#include "Field.h"
#include <napi.h>
#include <podofo/podofo.h>
#include <string>

namespace NoPoDoFo {
using namespace std;
class TextField : public Napi::ObjectWrap<TextField>
{
public:
  static Napi::FunctionReference constructor;
  explicit TextField(const Napi::CallbackInfo&);
  static void Initialize(Napi::Env& env, Napi::Object& target);
  void SetText(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetText(const Napi::CallbackInfo&);

private:
  unique_ptr<PoDoFo::PdfTextField> text;

};
}
#endif // NPDF_TEXTFIELD_H
