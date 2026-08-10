require("../../stock-hq-core/utils/sign.js");
var t = require("../../../../../common/vendor.js");
require("../../stock-news-core/utils/apiMapping.js"),
  require("../../../js-cookie/src/js.cookie.js"),
  require("../../stock-news-core/utils/knife.js"),
  require("../../stock-crypto-modules-config/dist/index.js");
var e = window ? "mini_h5" : "wzqxcx";
(exports.getBjNqData = function (c, o) {
  var i = ""
    .concat(
      t.getApiFullUrl(
        "ifzqgtimg/stock/corp/Basicinfo/getBasicinfo",
        t.API_HOST_ENUM.PROXY_QQ
      ),
      "?symbol="
    )
    .concat(o, "&app=")
    .concat(e);
  return c.request(i, "GET");
}),
  (exports.getContractDetail = function (c, o) {
    var i = ""
      .concat(
        t.getApiFullUrl(
          "ifzqgtimg/appstock/app/Commodity/getContractDetail",
          t.API_HOST_ENUM.PROXY_QQ
        ),
        "?symbol="
      )
      .concat(o, "&app=")
      .concat(e);
    return c.request(i, "GET");
  }),
  (exports.getDebtData = function (c, o) {
    var i = ""
      .concat(
        t.getApiFullUrl(
          "ifzqgtimg/appstock/app/ReverseRepo/getStockInfo",
          t.API_HOST_ENUM.PROXY_QQ
        ),
        "?&code="
      )
      .concat(o, "&app=")
      .concat(e);
    return c.request(i, "GET");
  }),
  (exports.getDiscountRatio = function (e, c) {
    var o = ""
      .concat(
        t.getApiFullUrl(
          "cgi/cgi-bin/stockminor/etf/get_discount_ratio",
          t.API_HOST_ENUM.PROXY_QQ
        ),
        "?security_code="
      )
      .concat(c.symbol, "&line_spec.fixed_type=")
      .concat(c.fixedType, "&sampling.sampling_type=")
      .concat(c.samplingType || 0, "&sampling.limit=")
      .concat(c.limit || "");
    return e.request(o, "GET");
  }),
  (exports.getEvaluation = function (e, c) {
    var o = ""
      .concat(
        t.getApiFullUrl("zg_evaluation_line.fcgi", t.API_HOST_ENUM.BISHENG),
        "?"
      )
      .concat(c);
    return e.request(o, "GET");
  }),
  (exports.getFundEtfData = function (t, c) {
    var o =
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/fund/baseInfo/innerHomepageXCX?code="
        .concat(c, "&app=")
        .concat(e);
    return t.request(o, "GET", {}, { timeout: 12e3 });
  }),
  (exports.getReturnRatio = function (e, c) {
    var o = ""
      .concat(
        t.getApiFullUrl(
          "cgi/cgi-bin/stockminor/etf/get_return_ratio",
          t.API_HOST_ENUM.PROXY_QQ
        ),
        "?security_code="
      )
      .concat(c.symbol, "&line_spec.fixed_type=")
      .concat(c.fixedType);
    return e.request(o, "GET", {}, { forceCallback: !0, timeout: 12e3 });
  });
