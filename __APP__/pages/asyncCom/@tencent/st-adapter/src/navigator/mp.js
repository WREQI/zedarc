var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../common/vendor.js"),
  t = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/,
  a = [
    "/pages/index/index",
    "/pages/index/trade",
    "/pages/index/market",
    "/pages/index/information/main",
    "/pages/index/account/main",
  ];
exports.jump = function (r, i) {
  if ("object" == e(r)) {
    var o, c, u;
    if (!(o = r.path || r.name)) return;
    (c = r.query),
      (u = a.some(function (e) {
        return e === o;
      })),
      (o = (function (e, n) {
        var t = e;
        if (!e) return "";
        if (n) {
          var a = [];
          for (var r in n)
            n.hasOwnProperty(r) && a.push("".concat(r, "=").concat(n[r]));
          t =
            -1 !== e.indexOf("?")
              ? "".concat(e, "&").concat(a.join("&"))
              : "".concat(e, "?").concat(a.join("&"));
        }
        return t;
      })(o, c)) &&
        t.test(o) &&
        (o = "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(o)
        )),
      u ? n.wx$1.switchTab({ url: o }) : n.wx$1.navigateTo({ url: o });
  }
};
