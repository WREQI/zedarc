require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/formatter.js"),
  n = require("../../../../model/trade/conditions/OpeningSellFormatter.js"),
  o = require("../../../../config/enum/condition.js"),
  r = require("../../../../model/trade/conditions/utils.js"),
  a = {
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
    setup: function (a, i) {
      var d = i.emit,
        u = r.useNavigateToQuote(a.data.market, a.data.scode, a.data.name).toHq,
        s = e.computed(function () {
          return n.statusFormatter(a.data.status);
        }),
        c = e.computed(function () {
          return n.triggerTextFormatter(
            a.data.trigger_type,
            a.data.down_type,
            a.data.down_value
          );
        }),
        l = e.computed(function () {
          return t.quantityFormatter(a.data.quantity, a.data.stock_cls);
        }),
        m = e.computed(function () {
          return t.timeRorRenderFormatter({
            status: a.data.status,
            invalid_time: a.data.invalid_time,
            end_time: a.data.end_time,
          });
        });
      return {
        emit: d,
        statusText: s,
        triggerText: c,
        quantityText: l,
        orderPriceText: e.computed(function () {
          return t.orderPriceFormatter(a.data.order_price_type);
        }),
        timeConfig: m,
        isRunningScene: e.computed(function () {
          return [
            o.COND_CURRENT_SCENE.assetIndex,
            o.COND_CURRENT_SCENE.condIndex,
          ].includes(a.scene);
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
var i = e._export_sfc(a, [
  [
    "render",
    function (t, n, o, r, a, i) {
      return e.e(
        {
          a: e.o(r.handleHeaderClick),
          b: e.p({
            name: o.data.name,
            "type-text": o.data.type_desc,
            market: o.data.market,
            code: o.data.scode,
            "show-arrow": o.showArrow,
            hidefund: o.hidefund,
            "base-price-tag": o.basePriceTag,
          }),
          c: o.showStatus,
        },
        o.showStatus
          ? { d: e.p({ label: "当前状态", value: r.statusText }) }
          : {},
        {
          e: e.p({
            label: "触发条件",
            value: r.triggerText,
            hidefund: o.hidefund,
          }),
          f: e.p({
            label: "委托价格",
            value: r.orderPriceText,
            hidefund: o.hidefund,
          }),
          g: e.p({
            label: "委托数量",
            value: r.quantityText,
            last: r.isRunningScene,
            hidefund: o.hidefund,
          }),
          h: !r.isRunningScene,
        },
        r.isRunningScene
          ? {}
          : {
              i: e.p({
                last: !0,
                label: r.timeConfig.label,
                value: r.timeConfig.time,
                hidefund: o.hidefund,
              }),
            },
        {
          j: e.o(function (e) {
            return r.emit("click");
          }),
          k: e.p({
            "show-border-bottom": o.showBorderBottom,
            "show-border-top": o.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-62aca0f2"],
]);
wx.createComponent(i);
