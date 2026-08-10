require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  o = require("../../../../model/trade/conditions/formatter.js"),
  t = require("../../../../model/trade/conditions/profitFormatter.js"),
  n = require("../../../../model/trade/conditions/transfer-backend/transferRepo.js"),
  r = require("../../../../config/enum/condition.js"),
  d = require("../../../../model/trade/conditions/utils.js"),
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
      ConditionProfit: function () {
        return "./ConditionProfit.js";
      },
    },
    props: {
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      hidefund: { type: Boolean, default: !1 },
      showBorderTop: { type: Boolean, default: !0 },
      showBorderBottom: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (a, i) {
      var u = i.emit,
        c = e.computed(function () {
          return a.data.isRepoCond ? n.transferRepoBase(a.data) : a.data;
        }),
        s = e.computed(function () {
          return o.invalidTimeFormatter(c.value.invalid_time);
        }),
        l = e.computed(function () {
          var e;
          return null == (e = c.value) ? void 0 : e.invalid_reason;
        }),
        p = e.computed(function () {
          return t.orderProfitFormatter(c.value);
        }),
        f = e.computed(function () {
          return a.data.cond_type === r.CondTypesBackEnd.GRID ? "grid" : "";
        }),
        m = d.useNavigateToQuote(
          a.data.market || a.data.trade_market,
          a.data.scode || a.data.stock_code,
          a.data.name || a.data.stock_name
        ).toHq;
      return {
        emit: u,
        invalidReason: l,
        validTime: s,
        renderData: c,
        profit: p,
        condType: f,
        handleHeaderClick: function () {
          m();
        },
      };
    },
  };
Array ||
  (
    e.resolveComponent("ConditionDetailHeader") +
    e.resolveComponent("ConditionDetailRow") +
    e.resolveComponent("ConditionProfit") +
    e.resolveComponent("ConditionCard")
  )();
var i = e._export_sfc(a, [
  [
    "render",
    function (o, t, n, r, d, a) {
      return e.e(
        {
          a: e.o(r.handleHeaderClick),
          b: e.p({
            name: r.renderData.name,
            "type-text": r.renderData.type_desc,
            market: r.renderData.market,
            code: r.renderData.scode,
            hidefund: n.hidefund,
          }),
          c: e.p({
            label: "失效原因",
            value: r.invalidReason,
            hidefund: n.hidefund,
          }),
          d: e.p({
            last: !r.profit,
            label: "失效时间",
            value: r.validTime,
            hidefund: n.hidefund,
          }),
          e: r.profit,
        },
        r.profit
          ? {
              f: e.p({
                value: r.profit,
                type: r.condType,
                hidefund: n.hidefund,
              }),
            }
          : {},
        {
          g: e.o(function (e) {
            return r.emit("click");
          }),
          h: e.p({
            "show-border-bottom": n.showBorderBottom,
            "show-border-top": n.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-23cc5139"],
]);
wx.createComponent(i);
