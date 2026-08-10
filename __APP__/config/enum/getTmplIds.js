require("../../app.js");
var E = require("../../utils/getPlatform.js"),
  S = {
    ZXGXCX: {
      TRADE_SUCESS: "tqb9TLDKCukEyPzlZ0FUMVcCuwX5ijO9kjOWBgWx9QU",
      TRADE_FAIL: "BNsbW_ZgCQLoWihAUp5ieusQarDEWjzcpWhJlSuT43Q",
      REVOKING_APPLY: "",
      REVOKING_SUCCESS: "",
      IPO_NOTIFY: "",
      IPO_PURCHASE: "",
      TRANSFER: "",
    },
    WZQXCX: {
      TRADE_SUCESS: "",
      TRADE_FAIL: "",
      REVOKING_APPLY: "",
      REVOKING_SUCCESS: "",
      IPO_NOTIFY: "",
      IPO_PURCHASE: "",
      TRANSFER: "",
    },
  };
exports.getTmplIds = function () {
  return E.getPlatform().isWzqXcx ? S.WZQXCX : S.ZXGXCX;
};
