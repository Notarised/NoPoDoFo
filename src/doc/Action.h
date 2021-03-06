//
// Created by oak on 5/19/18.
//

#ifndef NPDF_ACTION_H
#define NPDF_ACTION_H

#include <napi.h>
#include <podofo/podofo.h>
#include <spdlog/logger.h>

namespace NoPoDoFo {

class Action : public Napi::ObjectWrap<Action>
{
public:
  explicit Action(const Napi::CallbackInfo& info);
  ~Action();
  static Napi::FunctionReference constructor;
  static void Initialize(Napi::Env& env, Napi::Object& target);
  Napi::Value GetUri(const Napi::CallbackInfo&);
  Napi::Value GetScript(const Napi::CallbackInfo&);
  Napi::Value GetType(const Napi::CallbackInfo&);
  void SetUri(const Napi::CallbackInfo&, const Napi::Value&);
  void SetScript(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetObject(const Napi::CallbackInfo&);
  void AddToDictionary(const Napi::CallbackInfo&);
  PoDoFo::PdfAction& GetAction() { return *action; }

private:
  PoDoFo::PdfAction* action;
  std::shared_ptr<spdlog::logger> dbglog;
};
}
#endif // NPDF_ACTION_H
