require("../app.js");
var i = new (require("../service/cookie/mp-weixin.js").AdapterCookie)();
var r = "";
exports.getWzqOpenid = function () {
  var e, n, u;
  if (r) return r;
  var t = i.get("wzq_qluin");
  if (!t) {
    if (r) return r;
    try {
      (t =
        (
          (null ==
          (u =
            null ==
            (n = null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin())
              ? void 0
              : n.getLoginInfo)
            ? void 0
            : u.call(n)) || {}
        ).qluin || ""),
        (r = t);
    } catch (i) {}
  }
  return (r = t), t;
};
