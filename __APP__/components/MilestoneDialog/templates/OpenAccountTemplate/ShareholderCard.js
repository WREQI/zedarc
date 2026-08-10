require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../constants.js"),
  r = e.defineComponent({
    name: "ShareholderCard",
    props: {
      type: { type: String, required: !0 },
      account: { type: String, required: !0 },
      userName: { type: String, required: !0 },
      isFront: { type: Boolean, default: !1 },
      animationState: { type: String, default: "hidden" },
    },
    setup: function (r) {
      return {
        cardTitle: e.computed(function () {
          return "sh" === r.type ? "沪市股东卡" : "深市股东卡";
        }),
        cardBgImage: e.computed(function () {
          return "sh" === r.type ? t.IMAGES.shCard : t.IMAGES.szCard;
        }),
      };
    },
  }),
  n = e._export_sfc(r, [
    [
      "render",
      function (t, r, n, a, c, o) {
        return {
          a: t.cardBgImage,
          b: e.t(t.cardTitle),
          c: e.t(t.account),
          d: e.t(t.userName),
          e: e.n("stock-card--".concat(t.type)),
          f: e.n(t.isFront ? "stock-card--front" : "stock-card--back"),
          g: e.n("stock-card--".concat(t.animationState)),
        };
      },
    ],
    ["__scopeId", "data-v-e91a2d06"],
  ]);
wx.createComponent(n);
