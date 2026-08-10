require("../../../../app.js");
var t = require("../../../../model/trade/conditions/gridFormatter.js"),
  e = require("../../../../common/vendor.js"),
  a = require("../../../../model/trade/conditions/formatter.js"),
  o = require("../../../../config/enum/condition.js"),
  n = {
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
      showArrow: { type: Boolean, default: !1 },
      showStatus: { type: Boolean, default: !0 },
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
    setup: function (n, r) {
      r.emit;
      var i = e.computed(function () {
          return t.statusFormatter(n.data.status);
        }),
        d = e.computed(function () {
          return a.timeRorRenderFormatter({
            status: n.data.status,
            invalid_time: n.data.invalid_time,
            end_time: n.data.end_time,
          });
        }),
        u = e.computed(function () {
          return a.priceFormatter(n.data.order_price);
        }),
        s = e.computed(function () {
          return a.quantityFormatter(n.data.quantity, n.data.stock_cls);
        }),
        c = e.computed(function () {
          return +n.data.status === o.CondStatus.INVALID;
        });
      return {
        statusText: i,
        timeConfig: d,
        CondStatus: o.CondStatus,
        priceText: u,
        quantityText: s,
        isInvalid: c,
      };
    },
  };
Array ||
  (
    e.resolveComponent("ConditionDetailHeader") +
    e.resolveComponent("ConditionDetailRow") +
    e.resolveComponent("ConditionCard")
  )();
var r = e._export_sfc(n, [
  [
    "render",
    function (t, a, o, n, r, i) {
      return e.e(
        {
          a: e.p({
            name: o.data.name,
            "type-text": o.data.type_desc,
            market: o.data.market,
            code: o.data.scode,
            "show-arrow": o.showArrow,
            "base-price-tag": o.basePriceTag,
          }),
          b: o.showStatus,
        },
        o.showStatus
          ? { c: e.p({ label: "当前状态", value: n.statusText }) }
          : {},
        {
          d: e.p({ label: "触发条件", value: o.data.order_cond }),
          e: e.p({ label: "委托价格", value: n.priceText }),
          f: e.p({ label: "委托数量", value: n.quantityText }),
          g: e.p({
            label: n.timeConfig.label,
            value: n.timeConfig.time,
            last: !0,
          }),
          h: e.p({ "show-border-top": !0 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-46f091ff"],
]);
wx.createComponent(r);
