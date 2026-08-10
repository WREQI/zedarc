require("../../../../app.js");
var t = require("../../../../model/trade/conditions/gridFormatter.js"),
  e = require("../../../../common/vendor.js"),
  a = require("../../../../model/trade/conditions/investFormatter.js"),
  n = require("../../../../model/trade/conditions/formatter.js"),
  r = require("../../../../config/enum/condition.js"),
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
    },
    props: {
      showStatus: { type: Boolean, default: !0 },
      showArrow: { type: Boolean, default: !1 },
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      basePriceTag: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (o, i) {
      i.emit;
      var u = e.computed(function () {
          return t.statusFormatter(o.data.status);
        }),
        d = e.computed(function () {
          return n.quantityFormatter(o.data.invest_quantity, o.data.stock_cls);
        }),
        s = e.computed(function () {
          return n.priceFormatter(o.data.max_amount);
        }),
        c = e.computed(function () {
          return a.investPriceRangeFormatter(
            o.data.upper_limit,
            o.data.lower_limit
          );
        }),
        l = e.computed(function () {
          return +o.data.status === r.CondStatus.INVALID;
        }),
        m = e.computed(function () {
          return n.timeRorRenderFormatter({
            status: o.data.status,
            invalid_time: o.data.invalid_time,
            end_time: o.data.end_time,
          });
        }),
        p = e.computed(function () {
          return n.orderPriceFormatter(o.data.buy_price_type);
        });
      return {
        statusText: u,
        investQuantityText: d,
        priceText: s,
        timeConfig: m,
        rangeText: c,
        CondStatus: r.CondStatus,
        isInvalid: l,
        buyPriceText: p,
      };
    },
  };
Array ||
  (
    e.resolveComponent("ConditionDetailHeader") +
    e.resolveComponent("ConditionDetailRow") +
    e.resolveComponent("ConditionCard")
  )();
var i = e._export_sfc(o, [
  [
    "render",
    function (t, a, n, r, o, i) {
      return e.e(
        {
          a: e.p({
            name: n.data.name,
            "type-text": n.data.type_desc,
            market: n.data.market,
            code: n.data.scode,
            "show-arrow": n.showArrow,
            "base-price-tag": n.basePriceTag,
          }),
          b: n.showStatus,
        },
        n.showStatus
          ? { c: e.p({ label: "当前状态", value: r.statusText }) }
          : {},
        {
          d: e.p({ label: "触发条件", value: n.data.order_cond }),
          e: r.rangeText,
        },
        r.rangeText
          ? { f: e.p({ label: "价格区间", value: r.rangeText }) }
          : {},
        {
          g: e.p({ label: "委托价格", value: r.buyPriceText }),
          h: !!n.data.invest_quantity,
        },
        n.data.invest_quantity
          ? { i: e.p({ label: "委托数量", value: r.investQuantityText }) }
          : { j: e.p({ label: "委托金额", value: r.priceText }) },
        {
          k: e.p({
            label: r.timeConfig.label,
            value: r.timeConfig.time,
            last: !0,
          }),
          l: e.p({ "show-border-top": !0 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-4f28c489"],
]);
wx.createComponent(i);
