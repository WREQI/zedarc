var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      currentList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currentBtnText: { type: String, default: "去开户" },
      theme: { type: String, default: "" },
      openAccountGuiding: { type: Boolean, default: !1 },
    },
    setup: function (e, n) {
      var r = n.emit;
      return {
        dealerAction: function (t) {
          r("dealerAction", t);
        },
        dealerStyle: t.computed(function () {
          return {
            height: e.currentList.length >= 4 ? "407px" : "auto",
            overflowY: e.currentList.length >= 4 ? "scroll" : "auto",
          };
        }),
      };
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, r, c, o, i) {
        return t.e(
          { a: !r.openAccountGuiding },
          r.openAccountGuiding
            ? {}
            : {
                b: t.f(r.currentList, function (e, n, r) {
                  return t.e(
                    { a: e.icon, b: t.t(e.name), c: e.maintain },
                    (e.maintain, {}),
                    {
                      d: t.t(e.desc),
                      e: t.f(e.intro, function (e, n, r) {
                        return { a: t.t(e), b: n };
                      }),
                      f: t.o(
                        function (t) {
                          return c.dealerAction(e.code);
                        },
                        2476,
                        n
                      ),
                      g: n,
                    }
                  );
                }),
                c: t.n(r.theme),
                d: t.t(r.currentBtnText),
                e: t.n(r.theme),
              },
          { f: r.openAccountGuiding },
          r.openAccountGuiding
            ? {
                g: t.f(r.currentList, function (e, n, r) {
                  return t.e(
                    { a: e.icon, b: t.t(e.name), c: e.maintain },
                    (e.maintain, {}),
                    {
                      d: t.t(e.desc),
                      e: n,
                      f: t.o(
                        function (t) {
                          return c.dealerAction(e.code);
                        },
                        2477,
                        n
                      ),
                    }
                  );
                }),
              }
            : {},
          { h: t.s(c.dealerStyle) }
        );
      },
    ],
    ["__scopeId", "data-v-de44205d"],
  ]);
wx.createComponent(n);
