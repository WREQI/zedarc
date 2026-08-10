var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: ["curBrokerItem"],
    setup: function (e, r) {
      var n = r.emit,
        i =
          "mp" === t.inject("stockBridge").ENV
            ? { IS_ZXG: !1, IS_WEIXIN: !1, IS_MINA: !1 }
            : t.dist.detect().env,
        c = i.IS_ZXG,
        o = i.IS_WEIXIN,
        u = i.IS_MINA,
        s = t.computed(function () {
          return !1;
        }),
        a = t.computed(function () {
          var t;
          return String(null == (t = e.curBrokerItem) ? void 0 : t.code) || "";
        }),
        f = t.computed(function () {
          var t, r;
          return null == (r = null == (t = e.curBrokerItem) ? void 0 : t.rights)
            ? void 0
            : r
                .filter(function (t) {
                  return t.icon && t.title && t.text;
                })
                .slice(0, 4);
        }),
        l = t.computed(function () {
          return o && !u && !1;
        }),
        d = t.computed(function () {
          return !0;
        });
      return {
        rightsUsable: f,
        rightsEntra: s,
        isLast: function (t) {
          return t === f.value.length - 1;
        },
        curBrokerCode: a,
        isWzq: l,
        clickEvent: function () {
          n("click");
        },
        IS_ZXG: c,
        IS_WEIXIN: o,
        leftRightLayout: d,
      };
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, i, c, o) {
        return t.e(
          { a: i.leftRightLayout },
          i.leftRightLayout
            ? {
                b: t.f(i.rightsUsable, function (e, r, n) {
                  return t.e(
                    {
                      a: e.icon,
                      b: t.n(r % 2 != 0 ? "right-icon-wrapper" : ""),
                      c: t.t(e.title),
                      d: i.rightsEntra && i.isLast(r),
                    },
                    i.rightsEntra && i.isLast(r) ? {} : { e: t.t(e.text) },
                    { f: r }
                  );
                }),
                c: t.n(
                  i.isWzq && "12800" === i.curBrokerCode ? "zhongjincaifu" : ""
                ),
                d: t.n(i.IS_ZXG ? "icon-wrapper-zxg" : ""),
              }
            : {
                e: t.f(i.rightsUsable, function (e, r, n) {
                  return t.e(
                    {
                      a: e.icon,
                      b: t.t(e.title),
                      c: i.rightsEntra && i.isLast(r),
                    },
                    i.rightsEntra && i.isLast(r) ? {} : { d: t.t(e.text) },
                    { e: r }
                  );
                }),
              },
          {
            f: t.o(function () {
              return i.clickEvent && i.clickEvent.apply(i, arguments);
            }, 2383),
          }
        );
      },
    ],
    ["__scopeId", "data-v-3f8dea31"],
  ]);
wx.createComponent(r);
