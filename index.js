exports.nopodofo = require('bindings')('nopodofo')
exports.CONVERSION = 0.0028346456693
Object.defineProperty(exports, "__esModule", { value: true });
var NPDFActions;
(function (NPDFActions) {
    NPDFActions[NPDFActions["GoTo"] = 0] = "GoTo";
    NPDFActions[NPDFActions["GoToR"] = 1] = "GoToR";
    NPDFActions[NPDFActions["GoToE"] = 2] = "GoToE";
    NPDFActions[NPDFActions["Launch"] = 3] = "Launch";
    NPDFActions[NPDFActions["Thread"] = 4] = "Thread";
    NPDFActions[NPDFActions["URI"] = 5] = "URI";
    NPDFActions[NPDFActions["Sound"] = 6] = "Sound";
    NPDFActions[NPDFActions["Movie"] = 7] = "Movie";
    NPDFActions[NPDFActions["Hide"] = 8] = "Hide";
    NPDFActions[NPDFActions["Named"] = 9] = "Named";
    NPDFActions[NPDFActions["SubmitForm"] = 10] = "SubmitForm";
    NPDFActions[NPDFActions["ResetForm"] = 11] = "ResetForm";
    NPDFActions[NPDFActions["ImportData"] = 12] = "ImportData";
    NPDFActions[NPDFActions["JavaScript"] = 13] = "JavaScript";
    NPDFActions[NPDFActions["SetOCGState"] = 14] = "SetOCGState";
    NPDFActions[NPDFActions["Rendition"] = 15] = "Rendition";
    NPDFActions[NPDFActions["Trans"] = 16] = "Trans";
    NPDFActions[NPDFActions["GoTo3DView"] = 17] = "GoTo3DView";
    NPDFActions[NPDFActions["RichMediaExecute"] = 18] = "RichMediaExecute";
    NPDFActions[NPDFActions["Unknown"] = 255] = "Unknown";
})(NPDFActions = exports.NPDFActions || (exports.NPDFActions = {}));
var NPDFMouseEvent;
(function (NPDFMouseEvent) {
    NPDFMouseEvent[NPDFMouseEvent["up"] = 0] = "up";
    NPDFMouseEvent[NPDFMouseEvent["down"] = 1] = "down";
    NPDFMouseEvent[NPDFMouseEvent["enter"] = 2] = "enter";
    NPDFMouseEvent[NPDFMouseEvent["exit"] = 3] = "exit";
})(NPDFMouseEvent = exports.NPDFMouseEvent || (exports.NPDFMouseEvent = {}));
var NPDFPageEvent;
(function (NPDFPageEvent) {
    NPDFPageEvent[NPDFPageEvent["open"] = 0] = "open";
    NPDFPageEvent[NPDFPageEvent["close"] = 1] = "close";
    NPDFPageEvent[NPDFPageEvent["visible"] = 2] = "visible";
    NPDFPageEvent[NPDFPageEvent["invisible"] = 3] = "invisible";
})(NPDFPageEvent = exports.NPDFPageEvent || (exports.NPDFPageEvent = {}));
var NPDFAnnotationType;
(function (NPDFAnnotationType) {
    NPDFAnnotationType["Text"] = "Text";
    NPDFAnnotationType["Link"] = "Link";
    NPDFAnnotationType["FreeText"] = "FreeText";
    NPDFAnnotationType["Line"] = "Line";
    NPDFAnnotationType["Square"] = "Square";
    NPDFAnnotationType["Circle"] = "Circle";
    NPDFAnnotationType["Polygon"] = "Polygon";
    NPDFAnnotationType["PolyLine"] = "PolyLine";
    NPDFAnnotationType["Highlight"] = "Highlight";
    NPDFAnnotationType["Underline"] = "Underline";
    NPDFAnnotationType["Squiggly"] = "Squiggly";
    NPDFAnnotationType["StrikeOut"] = "StrikeOut";
    NPDFAnnotationType["Stamp"] = "Stamp";
    NPDFAnnotationType["Caret"] = "Caret";
    NPDFAnnotationType["Ink"] = "Ink";
    NPDFAnnotationType["Popup"] = "Popup";
    NPDFAnnotationType["FileAttachment"] = "FileAttachment";
    NPDFAnnotationType["Sound"] = "Sound";
    NPDFAnnotationType["Movie"] = "Movie";
    NPDFAnnotationType["Widget"] = "Widget";
    NPDFAnnotationType["Screen"] = "Screen";
    NPDFAnnotationType["PrinterMark"] = "PrinterMark";
    NPDFAnnotationType["TrapNet"] = "TrapNet";
    NPDFAnnotationType["Watermark"] = "Watermark";
    NPDFAnnotationType["_3D"] = "3D";
    NPDFAnnotationType["RichMedia"] = "RichMedia";
    NPDFAnnotationType["WebMedia"] = "WebMedia";
})(NPDFAnnotationType = exports.NPDFAnnotationType || (exports.NPDFAnnotationType = {}));
var NPDFAnnotation;
(function (NPDFAnnotation) {
    NPDFAnnotation[NPDFAnnotation["Text"] = 0] = "Text";
    NPDFAnnotation[NPDFAnnotation["Link"] = 1] = "Link";
    NPDFAnnotation[NPDFAnnotation["FreeText"] = 2] = "FreeText";
    NPDFAnnotation[NPDFAnnotation["Line"] = 3] = "Line";
    NPDFAnnotation[NPDFAnnotation["Square"] = 4] = "Square";
    NPDFAnnotation[NPDFAnnotation["Circle"] = 5] = "Circle";
    NPDFAnnotation[NPDFAnnotation["Polygon"] = 6] = "Polygon";
    NPDFAnnotation[NPDFAnnotation["PolyLine"] = 7] = "PolyLine";
    NPDFAnnotation[NPDFAnnotation["Highlight"] = 8] = "Highlight";
    NPDFAnnotation[NPDFAnnotation["Underline"] = 9] = "Underline";
    NPDFAnnotation[NPDFAnnotation["Squiggly"] = 10] = "Squiggly";
    NPDFAnnotation[NPDFAnnotation["StrikeOut"] = 11] = "StrikeOut";
    NPDFAnnotation[NPDFAnnotation["Stamp"] = 12] = "Stamp";
    NPDFAnnotation[NPDFAnnotation["Caret"] = 13] = "Caret";
    NPDFAnnotation[NPDFAnnotation["Ink"] = 14] = "Ink";
    NPDFAnnotation[NPDFAnnotation["Popup"] = 15] = "Popup";
    NPDFAnnotation[NPDFAnnotation["FileAttachement"] = 16] = "FileAttachement";
    NPDFAnnotation[NPDFAnnotation["Sound"] = 17] = "Sound";
    NPDFAnnotation[NPDFAnnotation["Movie"] = 18] = "Movie";
    NPDFAnnotation[NPDFAnnotation["Widget"] = 19] = "Widget";
    NPDFAnnotation[NPDFAnnotation["Screen"] = 20] = "Screen";
    NPDFAnnotation[NPDFAnnotation["PrinterMark"] = 21] = "PrinterMark";
    NPDFAnnotation[NPDFAnnotation["TrapNet"] = 22] = "TrapNet";
    NPDFAnnotation[NPDFAnnotation["Watermark"] = 23] = "Watermark";
    NPDFAnnotation[NPDFAnnotation["_3D"] = 24] = "_3D";
    NPDFAnnotation[NPDFAnnotation["RichMedia"] = 25] = "RichMedia";
    NPDFAnnotation[NPDFAnnotation["WebMedia"] = 26] = "WebMedia";
})(NPDFAnnotation = exports.NPDFAnnotation || (exports.NPDFAnnotation = {}));
var NPDFAnnotationFlag;
(function (NPDFAnnotationFlag) {
    NPDFAnnotationFlag[NPDFAnnotationFlag["Invisible"] = 1] = "Invisible";
    NPDFAnnotationFlag[NPDFAnnotationFlag["Hidden"] = 2] = "Hidden";
    NPDFAnnotationFlag[NPDFAnnotationFlag["Print"] = 4] = "Print";
    NPDFAnnotationFlag[NPDFAnnotationFlag["NoZoom"] = 8] = "NoZoom";
    NPDFAnnotationFlag[NPDFAnnotationFlag["NoRotate"] = 16] = "NoRotate";
    NPDFAnnotationFlag[NPDFAnnotationFlag["NoView"] = 32] = "NoView";
    NPDFAnnotationFlag[NPDFAnnotationFlag["ReadOnly"] = 64] = "ReadOnly";
    NPDFAnnotationFlag[NPDFAnnotationFlag["Locked"] = 128] = "Locked";
    NPDFAnnotationFlag[NPDFAnnotationFlag["ToggleNoView"] = 256] = "ToggleNoView";
    NPDFAnnotationFlag[NPDFAnnotationFlag["LockedContents"] = 512] = "LockedContents";
})(NPDFAnnotationFlag = exports.NPDFAnnotationFlag || (exports.NPDFAnnotationFlag = {}));
var NPDFVersion;
(function (NPDFVersion) {
    NPDFVersion[NPDFVersion["Pdf11"] = 0] = "Pdf11";
    NPDFVersion[NPDFVersion["Pdf12"] = 1] = "Pdf12";
    NPDFVersion[NPDFVersion["Pdf13"] = 2] = "Pdf13";
    NPDFVersion[NPDFVersion["Pdf14"] = 3] = "Pdf14";
    NPDFVersion[NPDFVersion["Pdf15"] = 4] = "Pdf15";
    NPDFVersion[NPDFVersion["Pdf16"] = 5] = "Pdf16";
    NPDFVersion[NPDFVersion["Pdf17"] = 6] = "Pdf17";
})(NPDFVersion = exports.NPDFVersion || (exports.NPDFVersion = {}));
var NPDFWriteMode;
(function (NPDFWriteMode) {
    NPDFWriteMode[NPDFWriteMode["Default"] = 1] = "Default";
    NPDFWriteMode[NPDFWriteMode["Compact"] = 2] = "Compact";
})(NPDFWriteMode = exports.NPDFWriteMode || (exports.NPDFWriteMode = {}));
function doubleDigit(v) {
    return `${v}`.length === 1 ? `0${v}` : `${v}`;
}
/**
 * Convert node Date to Pdf Date string
 * @param {Date} d - The Date to convert
 * @returns {string} - d (Date) in pdf string format
 */
exports.pdfDate = function toPDFFormat(d) {
    const offset = d.getTimezoneOffset() / 60;
    let dateString = d.toISOString().replace(/-|T|\.|:/g, '').substr(0, 14);
    return `${dateString}-${doubleDigit(offset)}'00'`;
}
var NPDFDestinationType;
(function (NPDFDestinationType) {
    NPDFDestinationType[NPDFDestinationType["XYZ"] = 0] = "XYZ";
    NPDFDestinationType[NPDFDestinationType["Fit"] = 1] = "Fit";
    NPDFDestinationType[NPDFDestinationType["FitH"] = 2] = "FitH";
    NPDFDestinationType[NPDFDestinationType["FitV"] = 3] = "FitV";
    NPDFDestinationType[NPDFDestinationType["FitR"] = 4] = "FitR";
    NPDFDestinationType[NPDFDestinationType["FitB"] = 5] = "FitB";
    NPDFDestinationType[NPDFDestinationType["FitBH"] = 6] = "FitBH";
    NPDFDestinationType[NPDFDestinationType["FitBV"] = 7] = "FitBV";
    NPDFDestinationType[NPDFDestinationType["Unknown"] = 255] = "Unknown";
})(NPDFDestinationType = exports.NPDFDestinationType || (exports.NPDFDestinationType = {}));
var NPDFDestinationFit;
(function (NPDFDestinationFit) {
    NPDFDestinationFit[NPDFDestinationFit["Fit"] = 0] = "Fit";
    NPDFDestinationFit[NPDFDestinationFit["FitH"] = 1] = "FitH";
    NPDFDestinationFit[NPDFDestinationFit["FitV"] = 2] = "FitV";
    NPDFDestinationFit[NPDFDestinationFit["FitB"] = 3] = "FitB";
    NPDFDestinationFit[NPDFDestinationFit["FitBH"] = 4] = "FitBH";
    NPDFDestinationFit[NPDFDestinationFit["FitBV"] = 5] = "FitBV";
    NPDFDestinationFit[NPDFDestinationFit["Unknown"] = 255] = "Unknown";
})(NPDFDestinationFit = exports.NPDFDestinationFit || (exports.NPDFDestinationFit = {}));
var NPDFFontEncoding;
(function (NPDFFontEncoding) {
    NPDFFontEncoding[NPDFFontEncoding["WinAnsi"] = 1] = "WinAnsi";
    NPDFFontEncoding[NPDFFontEncoding["Standard"] = 2] = "Standard";
    NPDFFontEncoding[NPDFFontEncoding["PdfDoc"] = 3] = "PdfDoc";
    NPDFFontEncoding[NPDFFontEncoding["MacRoman"] = 4] = "MacRoman";
    NPDFFontEncoding[NPDFFontEncoding["MacExpert"] = 5] = "MacExpert";
    NPDFFontEncoding[NPDFFontEncoding["Symbol"] = 6] = "Symbol";
    NPDFFontEncoding[NPDFFontEncoding["ZapfDingbats"] = 7] = "ZapfDingbats";
    NPDFFontEncoding[NPDFFontEncoding["Win1250"] = 8] = "Win1250";
    NPDFFontEncoding[NPDFFontEncoding["Iso88592"] = 9] = "Iso88592";
    NPDFFontEncoding[NPDFFontEncoding["Identity"] = 0] = "Identity";
})(NPDFFontEncoding = exports.NPDFFontEncoding || (exports.NPDFFontEncoding = {}));
var NPDFPageMode;
(function (NPDFPageMode) {
    NPDFPageMode[NPDFPageMode["DontCare"] = 0] = "DontCare";
    NPDFPageMode[NPDFPageMode["UseNone"] = 1] = "UseNone";
    NPDFPageMode[NPDFPageMode["UseThumbs"] = 2] = "UseThumbs";
    NPDFPageMode[NPDFPageMode["UseBookmarks"] = 3] = "UseBookmarks";
    NPDFPageMode[NPDFPageMode["FullScreen"] = 4] = "FullScreen";
    NPDFPageMode[NPDFPageMode["UseOC"] = 5] = "UseOC";
    NPDFPageMode[NPDFPageMode["UseAttachments"] = 6] = "UseAttachments";
})(NPDFPageMode = exports.NPDFPageMode || (exports.NPDFPageMode = {}));
var NPDFPageLayout;
(function (NPDFPageLayout) {
    NPDFPageLayout[NPDFPageLayout["Ignore"] = 0] = "Ignore";
    NPDFPageLayout[NPDFPageLayout["Default"] = 1] = "Default";
    NPDFPageLayout[NPDFPageLayout["SinglePage"] = 2] = "SinglePage";
    NPDFPageLayout[NPDFPageLayout["OneColumn"] = 3] = "OneColumn";
    NPDFPageLayout[NPDFPageLayout["TwoColumnLeft"] = 4] = "TwoColumnLeft";
    NPDFPageLayout[NPDFPageLayout["TwoColumnRight"] = 5] = "TwoColumnRight";
    NPDFPageLayout[NPDFPageLayout["TwoPageLeft"] = 6] = "TwoPageLeft";
    NPDFPageLayout[NPDFPageLayout["TwoPageRight"] = 7] = "TwoPageRight";
})(NPDFPageLayout = exports.NPDFPageLayout || (exports.NPDFPageLayout = {}));
var NPDFCertificatePermission;
(function (NPDFCertificatePermission) {
    NPDFCertificatePermission[NPDFCertificatePermission["NoPerms"] = 1] = "NoPerms";
    NPDFCertificatePermission[NPDFCertificatePermission["FormFill"] = 2] = "FormFill";
    NPDFCertificatePermission[NPDFCertificatePermission["Annotations"] = 3] = "Annotations";
})(NPDFCertificatePermission = exports.NPDFCertificatePermission || (exports.NPDFCertificatePermission = {}));
var NPDFFieldType;
(function (NPDFFieldType) {
    NPDFFieldType[NPDFFieldType["PushButton"] = 0] = "PushButton";
    NPDFFieldType[NPDFFieldType["Checkbox"] = 1] = "Checkbox";
    NPDFFieldType[NPDFFieldType["RadioButton"] = 2] = "RadioButton";
    NPDFFieldType[NPDFFieldType["TextField"] = 3] = "TextField";
    NPDFFieldType[NPDFFieldType["ComboBox"] = 4] = "ComboBox";
    NPDFFieldType[NPDFFieldType["ListBox"] = 5] = "ListBox";
    NPDFFieldType[NPDFFieldType["Signature"] = 6] = "Signature";
    NPDFFieldType[NPDFFieldType["Unknown"] = 255] = "Unknown";
})(NPDFFieldType = exports.NPDFFieldType || (exports.NPDFFieldType = {}));
var NPDFAnnotationAppearance;
(function (NPDFAnnotationAppearance) {
    NPDFAnnotationAppearance[NPDFAnnotationAppearance["normal"] = 0] = "normal";
    NPDFAnnotationAppearance[NPDFAnnotationAppearance["rollover"] = 1] = "rollover";
    NPDFAnnotationAppearance[NPDFAnnotationAppearance["down"] = 2] = "down";
})(NPDFAnnotationAppearance = exports.NPDFAnnotationAppearance || (exports.NPDFAnnotationAppearance = {}));
var ISigFlags;
(function (ISigFlags) {
    ISigFlags[ISigFlags["SignatureExists"] = 1] = "SignatureExists";
    ISigFlags[ISigFlags["AppendOnly"] = 2] = "AppendOnly";
    ISigFlags[ISigFlags["SignatureExistsAppendOnly"] = 3] = "SignatureExistsAppendOnly";
})(ISigFlags = exports.ISigFlags || (exports.ISigFlags = {}));
var NPDFImageFormat;
(function (NPDFImageFormat) {
    NPDFImageFormat[NPDFImageFormat["data"] = 0] = "data";
    NPDFImageFormat[NPDFImageFormat["png"] = 1] = "png";
    NPDFImageFormat[NPDFImageFormat["tiff"] = 2] = "tiff";
    NPDFImageFormat[NPDFImageFormat["jpeg"] = 3] = "jpeg";
})(NPDFImageFormat = exports.NPDFImageFormat || (exports.NPDFImageFormat = {}));
var NPDFName;
(function (NPDFName) {
    NPDFName["A"] = "A";
    NPDFName["AA"] = "AA";
    NPDFName["AC"] = "AC";
    NPDFName["ACRO_FORM"] = "AcroForm";
    NPDFName["ACTUAL_TEXT"] = "ActualText";
    NPDFName["ADBE_PKCS7_DETACHED"] = "adbe.pkcs7.detached";
    NPDFName["ADBE_PKCS7_SHA1"] = "adbe.pkcs7.sha1";
    NPDFName["ADBE_X509_RSA_SHA1"] = "adbe.x509.rsa_sha1";
    NPDFName["ADOBE_PPKLITE"] = "Adobe.PPKLite";
    NPDFName["AESV2"] = "AESV2";
    NPDFName["AESV3"] = "AESV3";
    NPDFName["AFTER"] = "After";
    NPDFName["AIS"] = "AIS";
    NPDFName["ALT"] = "Alt";
    NPDFName["ALPHA"] = "Alpha";
    NPDFName["ALTERNATE"] = "Alternate";
    NPDFName["ANNOT"] = "Annot";
    NPDFName["ANNOTS"] = "Annots";
    NPDFName["ANTI_ALIAS"] = "AntiAlias";
    NPDFName["AP"] = "AP";
    NPDFName["AP_REF"] = "APRef";
    NPDFName["APP"] = "App";
    NPDFName["ART_BOX"] = "ArtBox";
    NPDFName["ARTIFACT"] = "Artifact";
    NPDFName["AS"] = "AS";
    NPDFName["ASCENT"] = "Ascent";
    NPDFName["ASCII_HEX_DECODE"] = "ASCIIHexDecode";
    NPDFName["ASCII_HEX_DECODE_ABBREVIATION"] = "AHx";
    NPDFName["ASCII85_DECODE"] = "ASCII85Decode";
    NPDFName["ASCII85_DECODE_ABBREVIATION"] = "A85";
    NPDFName["ATTACHED"] = "Attached";
    NPDFName["AUTHOR"] = "Author";
    NPDFName["AVG_WIDTH"] = "AvgWidth";
    NPDFName["B"] = "B";
    NPDFName["BACKGROUND"] = "Background";
    NPDFName["BASE_ENCODING"] = "BaseEncoding";
    NPDFName["BASE_FONT"] = "BaseFont";
    NPDFName["BASE_STATE"] = "BaseState";
    NPDFName["BBOX"] = "BBox";
    NPDFName["BC"] = "BC";
    NPDFName["BE"] = "BE";
    NPDFName["BEFORE"] = "Before";
    NPDFName["BG"] = "BG";
    NPDFName["BITS_PER_COMPONENT"] = "BitsPerComponent";
    NPDFName["BITS_PER_COORDINATE"] = "BitsPerCoordinate";
    NPDFName["BITS_PER_FLAG"] = "BitsPerFlag";
    NPDFName["BITS_PER_SAMPLE"] = "BitsPerSample";
    NPDFName["BLACK_IS_1"] = "BlackIs1";
    NPDFName["BLACK_POINT"] = "BlackPoint";
    NPDFName["BLEED_BOX"] = "BleedBox";
    NPDFName["BM"] = "BM";
    NPDFName["BORDER"] = "Border";
    NPDFName["BOUNDS"] = "Bounds";
    NPDFName["BPC"] = "BPC";
    NPDFName["BS"] = "BS";
    NPDFName["BTN"] = "Btn";
    NPDFName["BYTERANGE"] = "ByteRange";
    NPDFName["C"] = "C";
    NPDFName["C0"] = "C0";
    NPDFName["C1"] = "C1";
    NPDFName["CA"] = "CA";
    NPDFName["CA_NS"] = "ca";
    NPDFName["CALGRAY"] = "CalGray";
    NPDFName["CALRGB"] = "CalRGB";
    NPDFName["CAP"] = "Cap";
    NPDFName["CAP_HEIGHT"] = "CapHeight";
    NPDFName["CATALOG"] = "Catalog";
    NPDFName["CCITTFAX_DECODE"] = "CCITTFaxDecode";
    NPDFName["CCITTFAX_DECODE_ABBREVIATION"] = "CCF";
    NPDFName["CENTER_WINDOW"] = "CenterWindow";
    NPDFName["CERT"] = "Cert";
    NPDFName["CF"] = "CF";
    NPDFName["CFM"] = "CFM";
    NPDFName["CH"] = "Ch";
    NPDFName["CHAR_PROCS"] = "CharProcs";
    NPDFName["CHAR_SET"] = "CharSet";
    NPDFName["CICI_SIGNIT"] = "CICI.SignIt";
    NPDFName["CID_FONT_TYPE0"] = "CIDFontType0";
    NPDFName["CID_FONT_TYPE2"] = "CIDFontType2";
    NPDFName["CID_TO_GID_MAP"] = "CIDToGIDMap";
    NPDFName["CID_SET"] = "CIDSet";
    NPDFName["CIDSYSTEMINFO"] = "CIDSystemInfo";
    NPDFName["CL"] = "CL";
    NPDFName["CLR_F"] = "ClrF";
    NPDFName["CLR_FF"] = "ClrFf";
    NPDFName["CMAP"] = "CMap";
    NPDFName["CMAPNAME"] = "CMapName";
    NPDFName["CMYK"] = "CMYK";
    NPDFName["CO"] = "CO";
    NPDFName["COLOR"] = "Color";
    NPDFName["COLOR_BURN"] = "ColorBurn";
    NPDFName["COLOR_DODGE"] = "ColorDodge";
    NPDFName["COLORANTS"] = "Colorants";
    NPDFName["COLORS"] = "Colors";
    NPDFName["COLORSPACE"] = "ColorSpace";
    NPDFName["COLUMNS"] = "Columns";
    NPDFName["COMPATIBLE"] = "Compatible";
    NPDFName["COMPONENTS"] = "Components";
    NPDFName["CONTACT_INFO"] = "ContactInfo";
    NPDFName["CONTENTS"] = "Contents";
    NPDFName["COORDS"] = "Coords";
    NPDFName["COUNT"] = "Count";
    NPDFName["CP"] = "CP";
    NPDFName["CREATION_DATE"] = "CreationDate";
    NPDFName["CREATOR"] = "Creator";
    NPDFName["CROP_BOX"] = "CropBox";
    NPDFName["CRYPT"] = "Crypt";
    NPDFName["CS"] = "CS";
    NPDFName["D"] = "D";
    NPDFName["DA"] = "DA";
    NPDFName["DARKEN"] = "Darken";
    NPDFName["DATE"] = "Date";
    NPDFName["DCT_DECODE"] = "DCTDecode";
    NPDFName["DCT_DECODE_ABBREVIATION"] = "DCT";
    NPDFName["DECODE"] = "Decode";
    NPDFName["DECODE_PARMS"] = "DecodeParms";
    NPDFName["DEFAULT"] = "default";
    NPDFName["DEFAULT_CMYK"] = "DefaultCMYK";
    NPDFName["DEFAULT_GRAY"] = "DefaultGray";
    NPDFName["DEFAULT_RGB"] = "DefaultRGB";
    NPDFName["DESC"] = "Desc";
    NPDFName["DESCENDANT_FONTS"] = "DescendantFonts";
    NPDFName["DESCENT"] = "Descent";
    NPDFName["DEST"] = "Dest";
    NPDFName["DEST_OUTPUT_PROFILE"] = "DestOutputProfile";
    NPDFName["DESTS"] = "Dests";
    NPDFName["DEVICECMYK"] = "DeviceCMYK";
    NPDFName["DEVICEGRAY"] = "DeviceGray";
    NPDFName["DEVICEN"] = "DeviceN";
    NPDFName["DEVICERGB"] = "DeviceRGB";
    NPDFName["DI"] = "Di";
    NPDFName["DIFFERENCE"] = "Difference";
    NPDFName["DIFFERENCES"] = "Differences";
    NPDFName["DIGEST_METHOD"] = "DigestMethod";
    NPDFName["DIGEST_RIPEMD160"] = "RIPEMD160";
    NPDFName["DIGEST_SHA1"] = "SHA1";
    NPDFName["DIGEST_SHA256"] = "SHA256";
    NPDFName["DIGEST_SHA384"] = "SHA384";
    NPDFName["DIGEST_SHA512"] = "SHA512";
    NPDFName["DIRECTION"] = "Direction";
    NPDFName["DISPLAY_DOC_TITLE"] = "DisplayDocTitle";
    NPDFName["DL"] = "DL";
    NPDFName["DM"] = "Dm";
    NPDFName["DOC"] = "Doc";
    NPDFName["DOC_CHECKSUM"] = "DocChecksum";
    NPDFName["DOC_TIME_STAMP"] = "DocTimeStamp";
    NPDFName["DOCMDP"] = "DocMDP";
    NPDFName["DOCUMENT"] = "Document";
    NPDFName["DOMAIN"] = "Domain";
    NPDFName["DOS"] = "DOS";
    NPDFName["DP"] = "DP";
    NPDFName["DR"] = "DR";
    NPDFName["DS"] = "DS";
    NPDFName["DUPLEX"] = "Duplex";
    NPDFName["DUR"] = "Dur";
    NPDFName["DV"] = "DV";
    NPDFName["DW"] = "DW";
    NPDFName["DW2"] = "DW2";
    NPDFName["E"] = "E";
    NPDFName["EARLY_CHANGE"] = "EarlyChange";
    NPDFName["EF"] = "EF";
    NPDFName["EMBEDDED_FDFS"] = "EmbeddedFDFs";
    NPDFName["EMBEDDED_FILES"] = "EmbeddedFiles";
    NPDFName["EMPTY"] = "";
    NPDFName["ENCODE"] = "Encode";
    NPDFName["ENCODED_BYTE_ALIGN"] = "EncodedByteAlign";
    NPDFName["ENCODING"] = "Encoding";
    NPDFName["ENCODING_90MS_RKSJ_H"] = "90ms-RKSJ-H";
    NPDFName["ENCODING_90MS_RKSJ_V"] = "90ms-RKSJ-V";
    NPDFName["ENCODING_ETEN_B5_H"] = "ETen-B5-H";
    NPDFName["ENCODING_ETEN_B5_V"] = "ETen-B5-V";
    NPDFName["ENCRYPT"] = "Encrypt";
    NPDFName["ENCRYPT_META_DATA"] = "EncryptMetadata";
    NPDFName["END_OF_LINE"] = "EndOfLine";
    NPDFName["ENTRUST_PPKEF"] = "Entrust.PPKEF";
    NPDFName["EXCLUSION"] = "Exclusion";
    NPDFName["EXT_G_STATE"] = "ExtGState";
    NPDFName["EXTEND"] = "Extend";
    NPDFName["EXTENDS"] = "Extends";
    NPDFName["F"] = "F";
    NPDFName["F_DECODE_PARMS"] = "FDecodeParms";
    NPDFName["F_FILTER"] = "FFilter";
    NPDFName["FB"] = "FB";
    NPDFName["FDF"] = "FDF";
    NPDFName["FF"] = "Ff";
    NPDFName["FIELDS"] = "Fields";
    NPDFName["FILESPEC"] = "Filespec";
    NPDFName["FILTER"] = "Filter";
    NPDFName["FIRST"] = "First";
    NPDFName["FIRST_CHAR"] = "FirstChar";
    NPDFName["FIT_WINDOW"] = "FitWindow";
    NPDFName["FL"] = "FL";
    NPDFName["FLAGS"] = "Flags";
    NPDFName["FLATE_DECODE"] = "FlateDecode";
    NPDFName["FLATE_DECODE_ABBREVIATION"] = "Fl";
    NPDFName["FONT"] = "Font";
    NPDFName["FONT_BBOX"] = "FontBBox";
    NPDFName["FONT_DESC"] = "FontDescriptor";
    NPDFName["FONT_FAMILY"] = "FontFamily";
    NPDFName["FONT_FILE"] = "FontFile";
    NPDFName["FONT_FILE2"] = "FontFile2";
    NPDFName["FONT_FILE3"] = "FontFile3";
    NPDFName["FONT_MATRIX"] = "FontMatrix";
    NPDFName["FONT_NAME"] = "FontName";
    NPDFName["FONT_STRETCH"] = "FontStretch";
    NPDFName["FONT_WEIGHT"] = "FontWeight";
    NPDFName["FORM"] = "Form";
    NPDFName["FORMTYPE"] = "FormType";
    NPDFName["FRM"] = "FRM";
    NPDFName["FT"] = "FT";
    NPDFName["FUNCTION"] = "Function";
    NPDFName["FUNCTION_TYPE"] = "FunctionType";
    NPDFName["FUNCTIONS"] = "Functions";
    NPDFName["G"] = "G";
    NPDFName["GAMMA"] = "Gamma";
    NPDFName["GROUP"] = "Group";
    NPDFName["GTS_PDFA1"] = "GTS_PDFA1";
    NPDFName["H"] = "H";
    NPDFName["HARD_LIGHT"] = "HardLight";
    NPDFName["HEIGHT"] = "Height";
    NPDFName["HIDE_MENUBAR"] = "HideMenubar";
    NPDFName["HIDE_TOOLBAR"] = "HideToolbar";
    NPDFName["HIDE_WINDOWUI"] = "HideWindowUI";
    NPDFName["HUE"] = "Hue";
    NPDFName["I"] = "I";
    NPDFName["IC"] = "IC";
    NPDFName["ICCBASED"] = "ICCBased";
    NPDFName["ID"] = "ID";
    NPDFName["ID_TREE"] = "IDTree";
    NPDFName["IDENTITY"] = "Identity";
    NPDFName["IDENTITY_H"] = "Identity-H";
    NPDFName["IDENTITY_V"] = "Identity-V";
    NPDFName["IF"] = "IF";
    NPDFName["IM"] = "IM";
    NPDFName["IMAGE"] = "Image";
    NPDFName["IMAGE_MASK"] = "ImageMask";
    NPDFName["INDEX"] = "Index";
    NPDFName["INDEXED"] = "Indexed";
    NPDFName["INFO"] = "Info";
    NPDFName["INKLIST"] = "InkList";
    NPDFName["INTERPOLATE"] = "Interpolate";
    NPDFName["IT"] = "IT";
    NPDFName["ITALIC_ANGLE"] = "ItalicAngle";
    NPDFName["ISSUER"] = "Issuer";
    NPDFName["IX"] = "IX";
    NPDFName["JAVA_SCRIPT"] = "JavaScript";
    NPDFName["JBIG2_DECODE"] = "JBIG2Decode";
    NPDFName["JBIG2_GLOBALS"] = "JBIG2Globals";
    NPDFName["JPX_DECODE"] = "JPXDecode";
    NPDFName["JS"] = "JS";
    NPDFName["K"] = "K";
    NPDFName["KEYWORDS"] = "Keywords";
    NPDFName["KEY_USAGE"] = "KeyUsage";
    NPDFName["KIDS"] = "Kids";
    NPDFName["L"] = "L";
    NPDFName["LAB"] = "Lab";
    NPDFName["LANG"] = "Lang";
    NPDFName["LAST"] = "Last";
    NPDFName["LAST_CHAR"] = "LastChar";
    NPDFName["LAST_MODIFIED"] = "LastModified";
    NPDFName["LC"] = "LC";
    NPDFName["LE"] = "LE";
    NPDFName["LEADING"] = "Leading";
    NPDFName["LEGAL_ATTESTATION"] = "LegalAttestation";
    NPDFName["LENGTH"] = "Length";
    NPDFName["LENGTH1"] = "Length1";
    NPDFName["LENGTH2"] = "Length2";
    NPDFName["LIGHTEN"] = "Lighten";
    NPDFName["LIMITS"] = "Limits";
    NPDFName["LJ"] = "LJ";
    NPDFName["LL"] = "LL";
    NPDFName["LLE"] = "LLE";
    NPDFName["LLO"] = "LLO";
    NPDFName["LOCATION"] = "Location";
    NPDFName["LUMINOSITY"] = "Luminosity";
    NPDFName["LW"] = "LW";
    NPDFName["LZW_DECODE"] = "LZWDecode";
    NPDFName["LZW_DECODE_ABBREVIATION"] = "LZW";
    NPDFName["M"] = "M";
    NPDFName["MAC"] = "Mac";
    NPDFName["MAC_EXPERT_ENCODING"] = "MacExpertEncoding";
    NPDFName["MAC_ROMAN_ENCODING"] = "MacRomanEncoding";
    NPDFName["MARK_INFO"] = "MarkInfo";
    NPDFName["MASK"] = "Mask";
    NPDFName["MATRIX"] = "Matrix";
    NPDFName["MAX_LEN"] = "MaxLen";
    NPDFName["MAX_WIDTH"] = "MaxWidth";
    NPDFName["MCID"] = "MCID";
    NPDFName["MDP"] = "MDP";
    NPDFName["MEDIA_BOX"] = "MediaBox";
    NPDFName["MEASURE"] = "Measure";
    NPDFName["METADATA"] = "Metadata";
    NPDFName["MISSING_WIDTH"] = "MissingWidth";
    NPDFName["MIX"] = "Mix";
    NPDFName["MK"] = "MK";
    NPDFName["ML"] = "ML";
    NPDFName["MM_TYPE1"] = "MMType1";
    NPDFName["MOD_DATE"] = "ModDate";
    NPDFName["MULTIPLY"] = "Multiply";
    NPDFName["N"] = "N";
    NPDFName["NAME"] = "Name";
    NPDFName["NAMES"] = "Names";
    NPDFName["NEED_APPEARANCES"] = "NeedAppearances";
    NPDFName["NEW_WINDOW"] = "NewWindow";
    NPDFName["NEXT"] = "Next";
    NPDFName["NM"] = "NM";
    NPDFName["NON_EFONT_NO_WARN"] = "NonEFontNoWarn";
    NPDFName["NON_FULL_SCREEN_PAGE_MODE"] = "NonFullScreenPageMode";
    NPDFName["NONE"] = "None";
    NPDFName["NORMAL"] = "Normal";
    NPDFName["NUMS"] = "Nums";
    NPDFName["O"] = "O";
    NPDFName["OBJ"] = "Obj";
    NPDFName["OBJ_STM"] = "ObjStm";
    NPDFName["OC"] = "OC";
    NPDFName["OCG"] = "OCG";
    NPDFName["OCGS"] = "OCGs";
    NPDFName["OCPROPERTIES"] = "OCProperties";
    NPDFName["OE"] = "OE";
    NPDFName["OID"] = "OID";
    NPDFName["OFF"] = "OFF";
    NPDFName["Off"] = "Off";
    NPDFName["ON"] = "ON";
    NPDFName["OP"] = "OP";
    NPDFName["OP_NS"] = "op";
    NPDFName["OPEN_ACTION"] = "OpenAction";
    NPDFName["OPEN_TYPE"] = "OpenType";
    NPDFName["OPM"] = "OPM";
    NPDFName["OPT"] = "Opt";
    NPDFName["ORDER"] = "Order";
    NPDFName["ORDERING"] = "Ordering";
    NPDFName["OS"] = "OS";
    NPDFName["OUTLINES"] = "Outlines";
    NPDFName["OUTPUT_CONDITION"] = "OutputCondition";
    NPDFName["OUTPUT_CONDITION_IDENTIFIER"] = "OutputConditionIdentifier";
    NPDFName["OUTPUT_INTENT"] = "OutputIntent";
    NPDFName["OUTPUT_INTENTS"] = "OutputIntents";
    NPDFName["OVERLAY"] = "Overlay";
    NPDFName["P"] = "P";
    NPDFName["PAGE"] = "Page";
    NPDFName["PAGE_LABELS"] = "PageLabels";
    NPDFName["PAGE_LAYOUT"] = "PageLayout";
    NPDFName["PAGE_MODE"] = "PageMode";
    NPDFName["PAGES"] = "Pages";
    NPDFName["PAINT_TYPE"] = "PaintType";
    NPDFName["PANOSE"] = "Panose";
    NPDFName["PARAMS"] = "Params";
    NPDFName["PARENT"] = "Parent";
    NPDFName["PARENT_TREE"] = "ParentTree";
    NPDFName["PARENT_TREE_NEXT_KEY"] = "ParentTreeNextKey";
    NPDFName["PATH"] = "Path";
    NPDFName["PATTERN"] = "Pattern";
    NPDFName["PATTERN_TYPE"] = "PatternType";
    NPDFName["PDF_DOC_ENCODING"] = "PDFDocEncoding";
    NPDFName["PERMS"] = "Perms";
    NPDFName["PG"] = "Pg";
    NPDFName["PRE_RELEASE"] = "PreRelease";
    NPDFName["PREDICTOR"] = "Predictor";
    NPDFName["PREV"] = "Prev";
    NPDFName["PRINT_AREA"] = "PrintArea";
    NPDFName["PRINT_CLIP"] = "PrintClip";
    NPDFName["PRINT_SCALING"] = "PrintScaling";
    NPDFName["PROC_SET"] = "ProcSet";
    NPDFName["PROCESS"] = "Process";
    NPDFName["PRODUCER"] = "Producer";
    NPDFName["PROP_BUILD"] = "Prop_Build";
    NPDFName["PROPERTIES"] = "Properties";
    NPDFName["PS"] = "PS";
    NPDFName["PUB_SEC"] = "PubSec";
    NPDFName["Q"] = "Q";
    NPDFName["QUADPOINTS"] = "QuadPoints";
    NPDFName["R"] = "R";
    NPDFName["RANGE"] = "Range";
    NPDFName["RC"] = "RC";
    NPDFName["RD"] = "RD";
    NPDFName["REASON"] = "Reason";
    NPDFName["REASONS"] = "Reasons";
    NPDFName["REPEAT"] = "Repeat";
    NPDFName["RECIPIENTS"] = "Recipients";
    NPDFName["RECT"] = "Rect";
    NPDFName["REGISTRY"] = "Registry";
    NPDFName["REGISTRY_NAME"] = "RegistryName";
    NPDFName["RENAME"] = "Rename";
    NPDFName["RESOURCES"] = "Resources";
    NPDFName["RGB"] = "RGB";
    NPDFName["RI"] = "RI";
    NPDFName["ROLE_MAP"] = "RoleMap";
    NPDFName["ROOT"] = "Root";
    NPDFName["ROTATE"] = "Rotate";
    NPDFName["ROWS"] = "Rows";
    NPDFName["RUN_LENGTH_DECODE"] = "RunLengthDecode";
    NPDFName["RUN_LENGTH_DECODE_ABBREVIATION"] = "RL";
    NPDFName["RV"] = "RV";
    NPDFName["S"] = "S";
    NPDFName["SA"] = "SA";
    NPDFName["SATURATION"] = "Saturation";
    NPDFName["SCREEN"] = "Screen";
    NPDFName["SE"] = "SE";
    NPDFName["SEPARATION"] = "Separation";
    NPDFName["SET_F"] = "SetF";
    NPDFName["SET_FF"] = "SetFf";
    NPDFName["SHADING"] = "Shading";
    NPDFName["SHADING_TYPE"] = "ShadingType";
    NPDFName["SIG"] = "Sig";
    NPDFName["SIG_FLAGS"] = "SigFlags";
    NPDFName["SIZE"] = "Size";
    NPDFName["SM"] = "SM";
    NPDFName["SMASK"] = "SMask";
    NPDFName["SOFT_LIGHT"] = "SoftLight";
    NPDFName["SOUND"] = "Sound";
    NPDFName["SS"] = "SS";
    NPDFName["ST"] = "St";
    NPDFName["STANDARD_ENCODING"] = "StandardEncoding";
    NPDFName["STATE"] = "State";
    NPDFName["STATE_MODEL"] = "StateModel";
    NPDFName["STATUS"] = "Status";
    NPDFName["STD_CF"] = "StdCF";
    NPDFName["STEM_H"] = "StemH";
    NPDFName["STEM_V"] = "StemV";
    NPDFName["STM_F"] = "StmF";
    NPDFName["STR_F"] = "StrF";
    NPDFName["STRUCT_PARENT"] = "StructParent";
    NPDFName["STRUCT_PARENTS"] = "StructParents";
    NPDFName["STRUCT_TREE_ROOT"] = "StructTreeRoot";
    NPDFName["STYLE"] = "Style";
    NPDFName["SUB_FILTER"] = "SubFilter";
    NPDFName["SUBJ"] = "Subj";
    NPDFName["SUBJECT"] = "Subject";
    NPDFName["SUBJECT_DN"] = "SubjectDN";
    NPDFName["SUBTYPE"] = "Subtype";
    NPDFName["SUPPLEMENT"] = "Supplement";
    NPDFName["SV"] = "SV";
    NPDFName["SV_CERT"] = "SVCert";
    NPDFName["SW"] = "SW";
    NPDFName["SY"] = "Sy";
    NPDFName["SYNCHRONOUS"] = "Synchronous";
    NPDFName["T"] = "T";
    NPDFName["TARGET"] = "Target";
    NPDFName["TEMPLATES"] = "Templates";
    NPDFName["THREADS"] = "Threads";
    NPDFName["THUMB"] = "Thumb";
    NPDFName["TI"] = "TI";
    NPDFName["TILING_TYPE"] = "TilingType";
    NPDFName["TIME_STAMP"] = "TimeStamp";
    NPDFName["TITLE"] = "Title";
    NPDFName["TK"] = "TK";
    NPDFName["TM"] = "TM";
    NPDFName["TO_UNICODE"] = "ToUnicode";
    NPDFName["TR"] = "TR";
    NPDFName["TR2"] = "TR2";
    NPDFName["TRAPPED"] = "Trapped";
    NPDFName["TRANS"] = "Trans";
    NPDFName["TRANSPARENCY"] = "Transparency";
    NPDFName["TREF"] = "TRef";
    NPDFName["TRIM_BOX"] = "TrimBox";
    NPDFName["TRUE_TYPE"] = "TrueType";
    NPDFName["TRUSTED_MODE"] = "TrustedMode";
    NPDFName["TU"] = "TU";
    NPDFName["TX"] = "Tx";
    NPDFName["TYPE"] = "Type";
    NPDFName["TYPE0"] = "Type0";
    NPDFName["TYPE1"] = "Type1";
    NPDFName["TYPE3"] = "Type3";
    NPDFName["U"] = "U";
    NPDFName["UE"] = "UE";
    NPDFName["UF"] = "UF";
    NPDFName["UNCHANGED"] = "Unchanged";
    NPDFName["UNIX"] = "Unix";
    NPDFName["URI"] = "URI";
    NPDFName["URL"] = "URL";
    NPDFName["URL_TYPE"] = "URLType";
    NPDFName["V"] = "V";
    NPDFName["VERISIGN_PPKVS"] = "VeriSign.PPKVS";
    NPDFName["VERSION"] = "Version";
    NPDFName["VERTICES"] = "Vertices";
    NPDFName["VERTICES_PER_ROW"] = "VerticesPerRow";
    NPDFName["VIEW_AREA"] = "ViewArea";
    NPDFName["VIEW_CLIP"] = "ViewClip";
    NPDFName["VIEWER_PREFERENCES"] = "ViewerPreferences";
    NPDFName["VOLUME"] = "Volume";
    NPDFName["VP"] = "VP";
    NPDFName["W"] = "W";
    NPDFName["W2"] = "W2";
    NPDFName["WHITE_POINT"] = "WhitePoint";
    NPDFName["WIDGET"] = "Widget";
    NPDFName["WIDTH"] = "Width";
    NPDFName["WIDTHS"] = "Widths";
    NPDFName["WIN_ANSI_ENCODING"] = "WinAnsiEncoding";
    NPDFName["XFA"] = "XFA";
    NPDFName["X_STEP"] = "XStep";
    NPDFName["XHEIGHT"] = "XHeight";
    NPDFName["XOBJECT"] = "XObject";
    NPDFName["XREF"] = "XRef";
    NPDFName["XREF_STM"] = "XRefStm";
    NPDFName["Y_STEP"] = "YStep";
    NPDFName["YES"] = "Yes";
})(NPDFName = exports.NPDFName || (exports.NPDFName = {}));
var NPDFStokeStyle;
(function (NPDFStokeStyle) {
    NPDFStokeStyle[NPDFStokeStyle["Solid"] = 0] = "Solid";
    NPDFStokeStyle[NPDFStokeStyle["Dash"] = 1] = "Dash";
    NPDFStokeStyle[NPDFStokeStyle["Dot"] = 2] = "Dot";
    NPDFStokeStyle[NPDFStokeStyle["DashDot"] = 3] = "DashDot";
    NPDFStokeStyle[NPDFStokeStyle["DashDotDot"] = 4] = "DashDotDot";
})(NPDFStokeStyle = exports.NPDFStokeStyle || (exports.NPDFStokeStyle = {}));
var NPDFHighlightingMode;
(function (NPDFHighlightingMode) {
    NPDFHighlightingMode[NPDFHighlightingMode["None"] = 0] = "None";
    NPDFHighlightingMode[NPDFHighlightingMode["Invert"] = 1] = "Invert";
    NPDFHighlightingMode[NPDFHighlightingMode["InvertOutline"] = 2] = "InvertOutline";
    NPDFHighlightingMode[NPDFHighlightingMode["Push"] = 3] = "Push";
    NPDFHighlightingMode[NPDFHighlightingMode["Unknown"] = 255] = "Unknown";
})(NPDFHighlightingMode = exports.NPDFHighlightingMode || (exports.NPDFHighlightingMode = {}));
var NPDFFontType;
(function (NPDFFontType) {
    NPDFFontType[NPDFFontType["TrueType"] = 0] = "TrueType";
    NPDFFontType[NPDFFontType["Type1Pfa"] = 1] = "Type1Pfa";
    NPDFFontType[NPDFFontType["Type1Pfb"] = 2] = "Type1Pfb";
    NPDFFontType[NPDFFontType["Type1Base14"] = 3] = "Type1Base14";
    NPDFFontType[NPDFFontType["Type3"] = 4] = "Type3";
})(NPDFFontType = exports.NPDFFontType || (exports.NPDFFontType = {}));
var NPDFColorSpace;
(function (NPDFColorSpace) {
    NPDFColorSpace[NPDFColorSpace["DeviceGray"] = 0] = "DeviceGray";
    NPDFColorSpace[NPDFColorSpace["DeviceRGB"] = 1] = "DeviceRGB";
    NPDFColorSpace[NPDFColorSpace["DeviceCMYK"] = 2] = "DeviceCMYK";
    NPDFColorSpace[NPDFColorSpace["Separation"] = 3] = "Separation";
    NPDFColorSpace[NPDFColorSpace["CieLab"] = 4] = "CieLab";
    NPDFColorSpace[NPDFColorSpace["Indexed"] = 5] = "Indexed";
})(NPDFColorSpace = exports.NPDFColorSpace || (exports.NPDFColorSpace = {}));
var NPDFTextRenderingMode;
(function (NPDFTextRenderingMode) {
    NPDFTextRenderingMode[NPDFTextRenderingMode["Fill"] = 0] = "Fill";
    NPDFTextRenderingMode[NPDFTextRenderingMode["Stroke"] = 1] = "Stroke";
    NPDFTextRenderingMode[NPDFTextRenderingMode["FillAndStroke"] = 2] = "FillAndStroke";
    NPDFTextRenderingMode[NPDFTextRenderingMode["Invisible"] = 3] = "Invisible";
    NPDFTextRenderingMode[NPDFTextRenderingMode["FillToClipPath"] = 4] = "FillToClipPath";
    NPDFTextRenderingMode[NPDFTextRenderingMode["StrokeToClipPath"] = 5] = "StrokeToClipPath";
    NPDFTextRenderingMode[NPDFTextRenderingMode["FillAndStrokeToClipPath"] = 6] = "FillAndStrokeToClipPath";
    NPDFTextRenderingMode[NPDFTextRenderingMode["ToClipPath"] = 7] = "ToClipPath";
})(NPDFTextRenderingMode = exports.NPDFTextRenderingMode || (exports.NPDFTextRenderingMode = {}));
var NPDFLineCapStyle;
(function (NPDFLineCapStyle) {
    NPDFLineCapStyle[NPDFLineCapStyle["Butt"] = 0] = "Butt";
    NPDFLineCapStyle[NPDFLineCapStyle["Round"] = 1] = "Round";
    NPDFLineCapStyle[NPDFLineCapStyle["Square"] = 2] = "Square";
})(NPDFLineCapStyle = exports.NPDFLineCapStyle || (exports.NPDFLineCapStyle = {}));
var NPDFLineJoinStyle;
(function (NPDFLineJoinStyle) {
    NPDFLineJoinStyle[NPDFLineJoinStyle["Miter"] = 0] = "Miter";
    NPDFLineJoinStyle[NPDFLineJoinStyle["Round"] = 1] = "Round";
    NPDFLineJoinStyle[NPDFLineJoinStyle["Bevel"] = 2] = "Bevel";
})(NPDFLineJoinStyle = exports.NPDFLineJoinStyle || (exports.NPDFLineJoinStyle = {}));
/**
 * Top - Align with the top of the containing Rect
 * Center - Aligns Center, uses the set font's font metrics for calculating center
 * Bottom - Aligns with the bottom of the containing Rect
 */
var NPDFVerticalAlignment;
(function (NPDFVerticalAlignment) {
    NPDFVerticalAlignment[NPDFVerticalAlignment["Top"] = 0] = "Top";
    NPDFVerticalAlignment[NPDFVerticalAlignment["Center"] = 1] = "Center";
    NPDFVerticalAlignment[NPDFVerticalAlignment["Bottom"] = 2] = "Bottom";
})(NPDFVerticalAlignment = exports.NPDFVerticalAlignment || (exports.NPDFVerticalAlignment = {}));
/**
 * Left - Does nothing, this is the default behaviour
 * Center - Calculates center using font's font metrics stringWidth operation ( / 2)
 * Right - Calculates center using font's font metrics stringWidth operation
 */
var NPDFAlignment;
(function (NPDFAlignment) {
    NPDFAlignment[NPDFAlignment["Left"] = 0] = "Left";
    NPDFAlignment[NPDFAlignment["Center"] = 1] = "Center";
    NPDFAlignment[NPDFAlignment["Bottom"] = 2] = "Bottom";
})(NPDFAlignment = exports.NPDFAlignment || (exports.NPDFAlignment = {}));
var NPDFBlendMode;
(function (NPDFBlendMode) {
    NPDFBlendMode["Normal"] = "Normal";
    NPDFBlendMode["Multiply"] = "Multiply";
    NPDFBlendMode["Screen"] = "Screen";
    NPDFBlendMode["Overlay"] = "Overlay";
    NPDFBlendMode["Darken"] = "Darken";
    NPDFBlendMode["Lighten"] = "Lighten";
    NPDFBlendMode["ColorDodge"] = "ColorDodge";
    NPDFBlendMode["ColorBurn"] = "ColorBurn";
    NPDFBlendMode["HardLight"] = "HardLight";
    NPDFBlendMode["SoftLight"] = "SoftLight";
    NPDFBlendMode["Difference"] = "Difference";
    NPDFBlendMode["Exclusion"] = "Exclusion";
    NPDFBlendMode["Hue"] = "Hue";
    NPDFBlendMode["Saturation"] = "Saturation";
    NPDFBlendMode["Color"] = "Color";
    NPDFBlendMode["Luminosity"] = "Luminosity";
})(NPDFBlendMode = exports.NPDFBlendMode || (exports.NPDFBlendMode = {}));
var NPDFRenderingIntent;
(function (NPDFRenderingIntent) {
    NPDFRenderingIntent["AbsoluteColorimetric"] = "AbsoluteColorimetric";
    NPDFRenderingIntent["RelativeColorimetric"] = "RelativeColorimetric";
    NPDFRenderingIntent["Perceptual"] = "Perceptual";
    NPDFRenderingIntent["Saturation"] = "Saturation";
})(NPDFRenderingIntent = exports.NPDFRenderingIntent || (exports.NPDFRenderingIntent = {}));
