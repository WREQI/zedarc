require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../config/enum/condition.js"),
  t = require("../../../../model/trade/conditions/utils.js"),
  n = require("../../../../common/vendor.js"),
  o = {
    components: {
      ConditionDetailHeader: function () {
        return "../../../../components/DetailHeader/index.js";
      },
      ConditionDetailRow: function () {
        return "../../../../components/DetailRow/index.js";
      },
      ConditionCard: function () {
        return "../../../../components/DetailCard/index.js";
      },
      ConditionProfit: function () {
        return "./ConditionProfit.js";
      },
      DebtAutoOrderTimeGuide: function () {
        return "../../../debt/components/DebtAutoOrderTimeGuide.js";
      },
    },
    emits: ["click"],
    props: {
      basePriceTag: {
        type: Object,
        default: function () {
          return {};
        },
      },
      hidefund: { type: Boolean, default: !1 },
      showBorderTop: { type: Boolean, default: !0 },
      showBorderBottom: { type: Boolean, default: !1 },
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      scene: { type: String, default: "" },
      showTimeGuide: { type: Boolean, default: !1 },
    },
    setup: function (n, o) {
      var d = o.emit,
        a = t.useNavigateToQuote(n.data.market, n.data.scode, n.data.name).toHq;
      return {
        emit: d,
        COND_CURRENT_SCENE: e.COND_CURRENT_SCENE,
        handleHeaderClick: function () {
          a();
        },
      };
    },
  };
Array ||
  (
    n.resolveComponent("ConditionDetailHeader") +
    n.resolveComponent("ConditionDetailRow") +
    n.resolveComponent("DebtAutoOrderTimeGuide") +
    n.resolveComponent("ConditionProfit") +
    n.resolveComponent("ConditionCard")
  )();
var d = n._export_sfc(o, [
  [
    "render",
    function (e, t, o, d, a, i) {
      return n.e(
        {
          a: n.o(d.handleHeaderClick),
          b: n.p({
            name: o.data.name,
            "type-text": o.data.type_desc,
            market: o.data.market,
            code: o.data.scode,
            hidefund: o.hidefund,
            "base-price-tag": o.basePriceTag,
          }),
          c: n.p({
            label: "触发条件",
            value: o.data.triggerCondText,
            hidefund: o.hidefund,
          }),
          d: n.p({ enabled: o.showTimeGuide }),
          e: o.data.orderPriceText,
        },
        o.data.orderPriceText
          ? {
              f: n.p({
                label: "委托价格",
                value: o.data.orderPriceText,
                hidefund: o.hidefund,
              }),
            }
          : {},
        { g: o.data.amountText },
        o.data.amountText
          ? {
              h: n.p({
                last:
                  [
                    d.COND_CURRENT_SCENE.assetIndex,
                    d.COND_CURRENT_SCENE.condIndex,
                  ].includes(o.scene) && !o.data.profit,
                label: o.data.amountLabel,
                value: o.data.amountText,
                hidefund: o.hidefund,
              }),
            }
          : {},
        {
          i: ![
            d.COND_CURRENT_SCENE.assetIndex,
            d.COND_CURRENT_SCENE.condIndex,
          ].includes(o.scene),
        },
        [
          d.COND_CURRENT_SCENE.assetIndex,
          d.COND_CURRENT_SCENE.condIndex,
        ].includes(o.scene)
          ? {}
          : {
              j: n.p({
                last: !o.data.profit,
                label: "有效期至",
                value: o.data.timeText,
                hidefund: o.hidefund,
              }),
            },
        { k: o.data.profit },
        o.data.profit
          ? {
              l: o.scene === d.COND_CURRENT_SCENE.assetIndex ? 1 : "",
              m: n.p({ value: o.data.profit, hidefund: o.hidefund }),
            }
          : {},
        {
          n: n.o(function (e) {
            return d.emit("click");
          }),
          o: n.p({
            "show-border-bottom": o.showBorderBottom,
            "show-border-top": o.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-82c948c4"],
]);
wx.createComponent(d);
