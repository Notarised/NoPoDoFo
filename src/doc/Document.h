//
// Created by red on 9/6/17.
//

#ifndef NPDF_PDFMEMDOCUMENT_H
#define NPDF_PDFMEMDOCUMENT_H

#include <boost/filesystem.hpp>
#include <napi.h>
#include <podofo/podofo.h>

using namespace std;

class Document : public Napi::ObjectWrap<Document>
{
public:
  explicit Document(const Napi::CallbackInfo& callbackInfo); // constructor
  ~Document() { delete document; }
  string originPdf;

  static void Initialize(Napi::Env& env, Napi::Object& target);
  void Load(const Napi::CallbackInfo&);
  Napi::Value GetPageCount(const Napi::CallbackInfo&);
  Napi::Value GetPage(const Napi::CallbackInfo&);
  void MergeDocument(const Napi::CallbackInfo&);
  void DeletePage(const Napi::CallbackInfo&);
  void SetPassword(const Napi::CallbackInfo&, const Napi::Value&);
  Napi::Value GetVersion(const Napi::CallbackInfo&);
  Napi::Value IsLinearized(const Napi::CallbackInfo&);
  Napi::Value Write(const Napi::CallbackInfo&);
  Napi::Value GetWriteMode(const Napi::CallbackInfo&);
  void SetEncrypted(const Napi::CallbackInfo&);
  Napi::Value GetObjects(const Napi::CallbackInfo&);

  PoDoFo::PdfMemDocument* GetDocument() { return document; }

private:
  PoDoFo::PdfMemDocument* document;
};

#endif // NPDF_PDFMEMDOCUMENT_H
