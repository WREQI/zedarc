var t = require("../../../../../common/vendor.js"),
  e = t.getApiFullUrl("ifzqfinance", t.API_HOST_ENUM.PROXY_QQ),
  c = t.getApiFullUrl("ifzqgtimg", t.API_HOST_ENUM.PROXY_QQ);
function n(t) {
  var e = "",
    c = Object.keys(t).length;
  return (
    Object.keys(t).forEach(function (n, o) {
      e =
        o !== c - 1
          ? "".concat(e).concat(n, "=").concat(t[n], "&")
          : "".concat(e).concat(n, "=").concat(t[n]);
    }),
    e
  );
}
(exports.getHSNewConvertibleBondDetail = function (t, c) {
  var o = ""
    .concat(e, "/stock/notice/NewConvertibleBond/getDetail?")
    .concat(n(c));
  return t.request(o);
}),
  (exports.getHSNewStockDetail = function (t, c) {
    var o = "".concat(e, "/stock/notice/ipo/getDetail?").concat(n(c));
    return t.request(o);
  }),
  (exports.getStockHyDetail = function (t, e) {
    var o = "".concat(c, "/appstock/app/stockinfo/getHydetail?").concat(n(e));
    return t.request(o);
  });
