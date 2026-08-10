var t = require("../../../../../common/vendor.js"),
  n = {
    props: {
      accountStatus: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
    },
    setup: function (n, o) {
      var e = o.emit;
      return {
        bindAccount: function () {
          e("bindAccount");
        },
        openAccount: function () {
          e("openAccount");
        },
        toTrade: function () {
          e("toTrade");
        },
        showFullButton: ("mp" !== t.inject("stockBridge").ENV
          ? t.dist.detect().env
          : { IS_LCT_XCX: !1 }
        ).IS_LCT_XCX,
      };
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (n, o, e, u, c, r) {
        return t.e(
          { a: !e.accountStatus },
          e.accountStatus
            ? {
                h: t.n(e.theme),
                i: t.o(function () {
                  return u.toTrade && u.toTrade.apply(u, arguments);
                }, 2483),
              }
            : t.e(
                { b: !u.showFullButton },
                u.showFullButton
                  ? {}
                  : {
                      c: t.n(e.theme),
                      d: t.o(function () {
                        return (
                          u.bindAccount && u.bindAccount.apply(u, arguments)
                        );
                      }, 2481),
                    },
                {
                  e: t.n(e.theme),
                  f: t.n(u.showFullButton ? "full-open-btn" : ""),
                  g: t.o(function () {
                    return u.openAccount && u.openAccount.apply(u, arguments);
                  }, 2482),
                }
              )
        );
      },
    ],
    ["__scopeId", "data-v-5591a932"],
  ]);
wx.createComponent(o);
