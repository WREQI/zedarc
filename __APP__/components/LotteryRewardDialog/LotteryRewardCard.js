require("../../app.js");
var t = require("../../common/vendor.js"),
  e = require("../../stores/app/useMode.js"),
  o = require("../../filters/money.js"),
  r = require("./constants.js"),
  n = require("../../service/stat/mp-weixin.js"),
  a = t.defineComponent({
    name: "LotteryRewardCard",
    components: {
      StockLogo: function () {
        return "../StockLogo/StockLogo.js";
      },
    },
    props: {
      item: { type: Object, required: !0 },
      showButton: { type: Boolean, default: !1 },
      count: { type: Number, default: 1 },
    },
    emits: ["goto-detail"],
    setup: function (a, c) {
      var i = c.emit,
        u = t.storeToRefs(e.useModeStore()).simpleMode,
        s = t.computed(function () {
          return u.value
            ? "lottery-reward-card--simple"
            : "lottery-reward-card--classic";
        }),
        d = t.computed(function () {
          var t,
            e = null == (t = a.item) ? void 0 : t.price;
          return null == e || "" === e ? "--" : o.formatNoUnit(e, !1, 2);
        }),
        l = t.computed(function () {
          var t,
            e = null == (t = a.item) ? void 0 : t.quantity;
          return null == e || "" === e ? "--" : o.formatNoUnit(e, !1, 0);
        }),
        m = t.computed(function () {
          var t,
            e = null == (t = a.item) ? void 0 : t.date;
          return e && 8 === e.length
            ? ""
                .concat(e.slice(0, 4), "-")
                .concat(e.slice(4, 6), "-")
                .concat(e.slice(6, 8))
            : "";
        }),
        p = t.computed(function () {
          return u.value ? r.IMAGES.cardBgSimple : r.IMAGES.cardBgClassic;
        });
      return {
        IMAGES: r.IMAGES,
        skinClass: s,
        formattedPrice: d,
        formattedQty: l,
        formattedDate: m,
        backgroundImage: p,
        gotoDetail: function () {
          n.stat.click(
            "trade.assetindex.lottery_incentive_popup_view_btn_click"
          ),
            i("goto-detail");
        },
      };
    },
  });
Array || t.resolveComponent("StockLogo")(), Math;
var c = t._export_sfc(a, [
  [
    "render",
    function (e, o, r, n, a, c) {
      return t.e(
        {
          a: t.p({
            market: e.item.market,
            code: e.item.stock_code,
            type: e.item.stock_cls,
          }),
          b: t.t(e.item.stock_name),
          c: t.t(e.formattedPrice),
          d: t.t(e.formattedQty),
          e: e.showButton ? 1 : "",
          f: t.t(e.formattedDate),
          g: e.showButton,
        },
        e.showButton
          ? {
              h: t.t(e.count > 1 ? "查看全部" : "去查看"),
              i: t.o(function () {
                return e.gotoDetail && e.gotoDetail.apply(e, arguments);
              }),
            }
          : {},
        { j: t.n(e.skinClass), k: "url(".concat(e.backgroundImage, ")") }
      );
    },
  ],
  ["__scopeId", "data-v-ddad3f6d"],
]);
wx.createComponent(c);
