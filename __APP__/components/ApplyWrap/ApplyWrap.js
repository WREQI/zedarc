require("../../app.js");
var e = require("./hook.js"),
  r = require("../../common/vendor.js");
Array || r.resolveComponent("Loading")();
var n = r._export_sfc(e._sfc_main, [
  [
    "render",
    function (e, n, s, o, i, t) {
      return r.e(
        { a: e.isApplyBusinessInit || "ApplyGuide" === e.$route.name },
        (e.isApplyBusinessInit || e.$route.name, {})
      );
    },
  ],
]);
wx.createComponent(n);
