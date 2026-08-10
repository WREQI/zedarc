require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../../../model/biz/permission/constants.js"),
  o = require("../../../utils/getPlatform.js"),
  r = e.defineComponent({
    name: "ShareholderCard",
    props: {
      card: { type: Object, required: !0 },
      permissions: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isFlipped: { type: Boolean, default: !1 },
      showShadow: { type: Boolean, default: !1 },
      hideInfo: { type: Boolean, default: !1 },
    },
    emits: ["click", "open"],
    options: { styleIsolation: "shared" },
    setup: function (r, n) {
      var a = n.emit,
        c = e.computed(function () {
          return r.card.cardType;
        }),
        d = e.computed(function () {
          return !!r.card.stockholderCode;
        }),
        i = e.computed(function () {
          var e = r.card.stockholderCode;
          return r.hideInfo && e
            ? e.length >= 4
              ? ""
                  .concat(e.substring(0, 1), "**")
                  .concat(e.substring(e.length - 3))
              : "****"
            : e;
        }),
        l = e.computed(function () {
          var e;
          return null == (e = t.CARD_INFO_MAP[c.value]) ? void 0 : e.prefix;
        }),
        s = e.computed(function () {
          var e;
          return (
            (null == (e = t.CARD_INFO_MAP[c.value]) ? void 0 : e.title) || ""
          );
        }),
        u = e.computed(function () {
          return "".concat(s.value, "股东卡");
        }),
        p = e.computed(function () {
          var e = t.CARD_BG_MAP[c.value];
          return e ? { backgroundImage: "url(".concat(e.front, ")") } : {};
        }),
        h = e.computed(function () {
          var e = t.CARD_BG_MAP[c.value];
          return e ? { backgroundImage: "url(".concat(e.back, ")") } : {};
        }),
        f = o.getPlatform().platform;
      return {
        cardType: c,
        hasStockholderCode: d,
        displayStockholderCode: i,
        marketPrefix: l,
        marketTitle: s,
        cardTitle: u,
        frontStyle: p,
        backStyle: h,
        handleClick: function () {
          a("click");
        },
        handleOpenClick: function (e) {
          r.card.openRoute && a("open", r.card.openRoute, r.card.cardType);
        },
        isIOS: "ios" === f,
        showShadow: e.computed(function () {
          return r.showShadow;
        }),
      };
    },
  }),
  n = e._export_sfc(r, [
    [
      "render",
      function (t, o, r, n, a, c) {
        return e.e(
          { a: t.hasStockholderCode },
          t.hasStockholderCode
            ? {
                b: e.t(t.cardTitle),
                c: e.t(t.marketPrefix),
                d: e.t(t.displayStockholderCode),
                e: e.t(t.card.holderName || "--"),
              }
            : e.e(
                {
                  f: e.t(t.cardTitle),
                  g: e.n(t.isIOS ? "ios" : ""),
                  h: t.card.openRoute,
                },
                t.card.openRoute
                  ? {
                      i: e.o(function () {
                        return (
                          t.handleOpenClick &&
                          t.handleOpenClick.apply(t, arguments)
                        );
                      }),
                    }
                  : {}
              ),
          {
            j: e.s(t.frontStyle),
            k: e.t(t.marketTitle),
            l: t.permissions && t.permissions.length > 0,
          },
          t.permissions && t.permissions.length > 0
            ? {
                m: e.f(t.permissions, function (t, o, r) {
                  return {
                    a: e.t(t.title),
                    b: t.key,
                    c: "1" === t.status ? 1 : "",
                    d: "1" !== t.status ? 1 : "",
                    e: t.title.length > 7 ? 1 : "",
                  };
                }),
                n: 1 === t.permissions.length ? 1 : "",
                o: t.permissions.length <= 3 ? 1 : "",
              }
            : {},
          {
            p: e.s(t.backStyle),
            q: t.showShadow ? 1 : "",
            r: e.n("shareholder-card--".concat(t.cardType)),
            s: e.n({
              "shareholder-card--flipped": t.isFlipped,
              "shareholder-card--unopened": !t.hasStockholderCode,
            }),
            t: e.o(function () {
              return t.handleClick && t.handleClick.apply(t, arguments);
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-d4c0d0b7"],
  ]);
wx.createComponent(n);
