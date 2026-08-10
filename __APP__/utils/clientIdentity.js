require("../app.js");
var P = require("./getPlatform.js"),
  C = require("../config/clientIdentityEnum.js"),
  r = require("./index.js"),
  e = P.getPlatform(),
  L = e.platform,
  t = (e.bizPlatform, e.isZxg, e.isZxgHarmony),
  I = e.isOEM,
  i = e.isLctXcx,
  O = e.isSimpleMode,
  s = C.CLI_PLATFORM.MP,
  T = (function (P) {
    switch (s) {
      case C.CLI_PLATFORM.H5:
        return I
          ? C.CLI_PRODUCT.H5.OEM
          : i
          ? C.CLI_PRODUCT.H5.LCT
          : O
          ? C.CLI_PRODUCT.H5.LITE
          : C.CLI_PRODUCT.H5.CLASSIC;
      case C.CLI_PLATFORM.MP:
        return "zxgxcx" === r.getMpFromSource()
          ? C.CLI_PRODUCT.MP.ZXG
          : C.CLI_PRODUCT.MP.WZQ;
      case C.CLI_PLATFORM.APP:
        return t
          ? C.CLI_PRODUCT.APP.HARMONY
          : "ios" === L
          ? C.CLI_PRODUCT.APP.IOS
          : C.CLI_PRODUCT.APP.ANDROID;
      case C.CLI_PLATFORM.QUICKAPP:
        return C.CLI_PRODUCT.QUICKAPP.DEFAULT;
      default:
        return C.CLI_PRODUCT.H5.CLASSIC;
    }
  })();
(exports.cliPlatform = s), (exports.cliProduct = T);
