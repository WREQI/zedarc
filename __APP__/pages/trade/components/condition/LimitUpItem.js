require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/formatter.js"),
  n = require("../../../../model/trade/conditions/limitUpFormatter.js"),
  a = require("../../../../config/enum/condition.js"),
  o = require("../../../../model/trade/conditions/utils.js"),
  i = {
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
    setup: function (i, r) {
      var d = r.emit,
        u = o.useNavigateToQuote(i.data.market, i.data.scode, i.data.name).toHq;
      return {
        emit: d,
        statusText: e.computed(function () {
          return n.statusFormatter(i.data.status);
        }),
        priceText: e.computed(function () {
          return t.priceFormatter(i.data.max_amount);
        }),
        investQuantityText: e.computed(function () {
          return t.quantityFormatter(i.data.invest_quantity, i.data.stock_cls);
        }),
        timeConfig: e.computed(function () {
          return t.timeRorRenderFormatter({
            status: i.data.status,
            invalid_time: i.data.invalid_time,
            end_time: i.data.end_time,
          });
        }),
        isRunningScene: e.computed(function () {
          return [
            a.COND_CURRENT_SCENE.assetIndex,
            a.COND_CURRENT_SCENE.condIndex,
          ].includes(i.scene);
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
var r = e._export_sfc(i, [
  [
    "render",
    function (t, n, a, o, i, r) {
      return e.e(
        {
          a: e.o(o.handleHeaderClick),
          b: e.p({
            name: a.data.name,
            "type-text": a.data.type_desc,
            market: a.data.market,
            code: a.data.scode,
            "show-arrow": a.showArrow,
            hidefund: a.hidefund,
            "base-price-tag": a.basePriceTag,
          }),
          c: a.showStatus,
        },
        a.showStatus
          ? { d: e.p({ label: "当前状态", value: o.statusText }) }
          : {},
        {
          e: e.p({
            label: "触发条件",
            value: "盘中触达涨停价",
            hidefund: a.hidefund,
          }),
          f: e.p({ label: "委托价格", value: "涨停价", hidefund: a.hidefund }),
          g: !!a.data.invest_quantity,
        },
        a.data.invest_quantity
          ? {
              h: e.p({
                label: "委托数量",
                value: o.investQuantityText,
                last: o.isRunningScene,
                hidefund: a.hidefund,
              }),
            }
          : {
              i: e.p({
                label: "委托金额",
                value: o.priceText,
                last: o.isRunningScene,
                hidefund: a.hidefund,
              }),
            },
        { j: !o.isRunningScene },
        o.isRunningScene
          ? {}
          : {
              k: e.p({
                last: !0,
                label: o.timeConfig.label,
                value: o.timeConfig.time,
                hidefund: a.hidefund,
              }),
            },
        {
          l: e.o(function (e) {
            return o.emit("click");
          }),
          m: e.p({
            "show-border-bottom": a.showBorderBottom,
            "show-border-top": a.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3d734177"],
]);
wx.createComponent(r);
