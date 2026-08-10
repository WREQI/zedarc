var e = require("../pages/pro.js"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    props: ["curBrokerCode"],
    setup: function (n, r) {
      var i = r.emit,
        c = t.inject("stockBridge", {}),
        s =
          "mp" === c.ENV ? { IS_WEIXIN: !1, IS_MINA: !1 } : t.dist.detect().env,
        o = s.IS_WEIXIN,
        d = s.IS_MINA,
        Z = o && !d && !1;
      return {
        SlidesText: e.SlidesText,
        SlidesTextWZQ: e.SlidesTextWZQ,
        clickEvent: function () {
          i("click");
        },
        IS_WZQ_ZZ: Z,
        stockBridge: c,
      };
    },
  },
  r = t._export_sfc(n, [
    [
      "render",
      function (e, n, r, i, c, s) {
        return t.e(
          { a: !i.IS_WZQ_ZZ },
          i.IS_WZQ_ZZ
            ? {
                c: t.f(i.SlidesTextWZQ, function (e, n, r) {
                  return { a: t.t(e), b: n };
                }),
              }
            : {
                b: t.f(i.SlidesText, function (e, n, r) {
                  return { a: t.t(e), b: n };
                }),
              },
          {
            d: t.n("mp" === i.stockBridge.ENV ? "slides-out-container-mp" : ""),
            e: t.n(i.IS_WZQ_ZZ ? "slides-out-container-wzq" : ""),
            f: t.n("mp" === i.stockBridge.ENV ? "slides-mp" : ""),
            g: t.n(i.IS_WZQ_ZZ ? "slides-wzq" : ""),
            h: t.n(
              i.IS_WZQ_ZZ && "12800" == r.curBrokerCode ? "slides-wzq-zj" : ""
            ),
            i: t.o(function () {
              return i.clickEvent && i.clickEvent.apply(i, arguments);
            }, 2396),
          }
        );
      },
    ],
    ["__scopeId", "data-v-773ba31e"],
  ]);
wx.createComponent(r);
