var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      msg: { type: String, default: "" },
      btnText: { type: String, default: "我知道了" },
    },
    setup: function (e, t) {
      var n = t.emit;
      return {
        onHideMsg: function () {
          n("hideMsg");
        },
      };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, o, s, i) {
        return e.e(
          { a: r.msg },
          r.msg
            ? {
                b: e.t(r.msg),
                c: e.t(r.btnText),
                d: e.o(function () {
                  return o.onHideMsg && o.onHideMsg.apply(o, arguments);
                }, 2307),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ffd8f141"],
  ]);
wx.createComponent(n);
