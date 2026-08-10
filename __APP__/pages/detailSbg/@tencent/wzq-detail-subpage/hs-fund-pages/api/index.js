var t = require("../../../../../../common/vendor.js");
(exports.getHsPublicData = function (r, c) {
  var e = t.getApiFullUrl(
    "cgi/cgi-bin/fundflow/hspublic",
    t.API_HOST_ENUM.PROXY_QQ
  );
  return r
    .request(e, "post", c)
    .then(function (t) {
      return t.data || {};
    })
    .catch(function (t) {
      return t;
    });
}),
  (exports.queryRzrqDetail = function (t, r) {
    var c = "https://ifzq.gtimg.cn/appstock/app/rzrq/detail?code="
      .concat(r.symbol, "&p=")
      .concat(r.pageIndex);
    return (
      "mp" === t.ENV && (c = "".concat(c, "&app=wzqxcx")),
      t.request(c, "GET", {}, { forceCallback: !0 })
    );
  });
