require("../../app.js");
var s = require("../../common/vendor.js"),
  e = {
    name: "CommonResult",
    props: {
      status: { type: String, default: "suc" },
      fullScreen: { type: Boolean, default: !0 },
      simpleMode: { type: Boolean, default: !1 },
      customIconClass: { type: String, default: "" },
    },
  },
  t = s._export_sfc(e, [
    [
      "render",
      function (e, t, u, c, n, o) {
        return s.e(
          { a: u.simpleMode },
          u.simpleMode
            ? s.e(
                { b: "suc" === u.status || "succ" === u.status },
                "suc" === u.status || "succ" === u.status
                  ? { c: s.n(u.customIconClass) }
                  : {}
              )
            : {
                d: s.n(
                  "suc" === u.status || "succ" === u.status
                    ? "icon-check"
                    : "icon-warning"
                ),
                e: s.n(u.customIconClass),
              },
          {
            f: s.n(
              "suc" === u.status || "succ" === u.status
                ? "result-suc"
                : "result-inf"
            ),
            g: u.fullScreen ? "100%" : "",
            h: s.n(u.simpleMode ? "common-result-container__simple-mode" : ""),
          }
        );
      },
    ],
  ]);
wx.createComponent(t);
