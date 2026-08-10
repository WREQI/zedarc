var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../common/vendor.js"),
  n = require("./adapters/uni.js"),
  o = r.createAxiosInstance({ adapter: n.uniAdapterWrap(), timeout: 12e3 });
o.onRequest(function (e) {
  if ("application/json" !== (null == e ? void 0 : e.headers["Content-Type"]))
    return r.dist$1.reqEncode()(e);
}),
  o.onResponse(function (e) {
    return r.index.hideLoading(), e;
  }),
  o.onResponse(function (e) {
    return e;
  }),
  o.onResponseError(r.dist$1.resError()),
  o.onRequest(r.dist$1.reqNoNil()),
  (exports.request = function (r, n) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      s = t.method,
      i = void 0 === s ? "post" : s,
      a = i.toLowerCase();
    return "get" === a
      ? o["".concat(a)](r, e({ params: n }, t))
      : o["".concat(a)](r, n, t);
  });
