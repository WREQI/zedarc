var t = require("../../../../../../../common/vendor.js"),
  e = {},
  n = {
    inject: ["hqBridge"],
    props: {
      gdData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      columns: {
        type: Array,
        default: function () {
          return [];
        },
      },
      scrollTop: { type: Number, default: 0 },
    },
    data: function () {
      return { showBlock: !0, scrollLeft: 0 };
    },
  };
"function" == typeof e && e(n);
var a = t._export_sfc(n, [
  [
    "render",
    function (e, n, a, o, r, c) {
      return t.e(
        { a: a.gdData && a.gdData.length > 0 },
        a.gdData && a.gdData.length > 0
          ? t.e(
              {
                b: t.f(a.columns, function (e, n, a) {
                  return { a: t.t(e.name), b: e.key };
                }),
                c: r.showBlock,
              },
              (r.showBlock, {}),
              {
                d: a.scrollTop > 24 ? 1 : "",
                e: t.f(a.gdData, function (e, n, a) {
                  return { a: t.t(e.name), b: n };
                }),
                f: t.f(a.gdData, function (e, n, o) {
                  return {
                    a: t.f(a.columns, function (n, a, o) {
                      return {
                        a: t.t(e["".concat(n.key, "_showValue")]),
                        b: n.key,
                        c: t.n(e[n.key + "_className"]),
                        d: t.n(
                          e["".concat(n.key, "_showValue")].length > 9
                            ? "samllFont"
                            : ""
                        ),
                      };
                    }),
                    b: n,
                  };
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-de76055d"],
]);
wx.createComponent(a);
