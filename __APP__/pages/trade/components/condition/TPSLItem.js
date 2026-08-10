require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/formatter.js"),
  a = require("../../../../model/trade/conditions/tpslFormatter.js"),
  n = require("../../../../config/enum/condition.js"),
  o = require("../../../../model/trade/conditions/utils.js"),
  r = {
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
      showArrow: { type: Boolean, default: !0 },
      showStatus: { type: Boolean, default: !1 },
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      scene: { type: String, default: "" },
    },
    setup: function (r, i) {
      var d = i.emit,
        u = o.useNavigateToQuote(r.data.market, r.data.scode, r.data.name).toHq;
      return {
        emit: d,
        statusText: e.computed(function () {
          return a.statusFormatter(r.data.status);
        }),
        orderPriceText: e.computed(function () {
          return a.orderPriceFormatter(r.data.order_price_type);
        }),
        quantityText: e.computed(function () {
          return a.quantityFormatter(r.data.quantity, r.data.stock_cls);
        }),
        timeConfig: e.computed(function () {
          return t.timeRorRenderFormatter({
            status: r.data.status,
            invalid_time: r.data.invalid_time,
            end_time: r.data.end_time,
          });
        }),
        isRunningScene: e.computed(function () {
          return [
            n.COND_CURRENT_SCENE.assetIndex,
            n.COND_CURRENT_SCENE.condIndex,
          ].includes(r.scene);
        }),
        handleHeaderClick: function () {
          u();
        },
      };
    },
  };
Array ||
  (
    e.resolveComponent("ConditionDetailHeader") +
    e.resolveComponent("ConditionDetailRow") +
    e.resolveComponent("ConditionCard")
  )();
var i = e._export_sfc(r, [
  [
    "render",
    function (t, a, n, o, r, i) {
      return e.e(
        {
          a: e.o(o.handleHeaderClick),
          b: e.p({
            name: n.data.name,
            "type-text": n.data.type_desc,
            market: n.data.market,
            code: n.data.scode,
            "show-arrow": n.showArrow,
            hidefund: n.hidefund,
            "base-price-tag": n.basePriceTag,
          }),
          c: n.showStatus,
        },
        n.showStatus
          ? {
              d: e.p({
                label: "当前状态",
                value: o.statusText,
                hidefund: n.hidefund,
              }),
            }
          : {},
        { e: n.data.base_price },
        n.data.base_price
          ? e.e(
              {
                f: e.t(n.data.base_price),
                g: n.basePriceTag && n.basePriceTag.tagsText,
              },
              n.basePriceTag && n.basePriceTag.tagsText
                ? {
                    h: e.t(n.basePriceTag.tagsText),
                    i: e.t(n.basePriceTag.tagsValueFormatted || ""),
                    j: e.n(
                      n.basePriceTag.tagsValue >= 0
                        ? "cond-baseprice-up"
                        : "cond-baseprice-down"
                    ),
                  }
                : {}
            )
          : {},
        {
          k: e.p({ label: "基准价", hidefund: n.hidefund }),
          l: e.p({
            label: "触发条件",
            value: n.data.order_cond,
            hidefund: n.hidefund,
          }),
          m: e.p({
            label: "委托价格",
            value: o.orderPriceText,
            hidefund: n.hidefund,
          }),
          n: e.p({
            label: "委托数量",
            value: o.quantityText,
            hidefund: n.hidefund,
            last: o.isRunningScene,
          }),
          o: !o.isRunningScene,
        },
        o.isRunningScene
          ? {}
          : {
              p: e.p({
                last: !0,
                label: o.timeConfig.label,
                value: o.timeConfig.time,
                hidefund: n.hidefund,
              }),
            },
        {
          q: e.o(function (e) {
            return o.emit("click");
          }),
          r: e.p({
            "show-border-bottom": n.showBorderBottom,
            "show-border-top": n.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dbce5049"],
]);
wx.createComponent(i);
