var e,
  n = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  t = require("../../../../config/enum/condition.js"),
  i = require("../../../../model/trade/conditions/utils.js"),
  r = require("../../../../config/enum.js"),
  d = require("../../../../model/trade/conditions/priceFormatter.js"),
  c = (n((e = {}), r.ACTION.BUY, "buy"), n(e, r.ACTION.SELL, "sell"), e),
  s = {
    components: {
      CondActionSheetBase: function () {
        return "../../../../components/ConfirmActionSheet/index.js";
      },
      InvestDetail: function () {
        return "./InvestDetail.js";
      },
      PriceDetail: function () {
        return "./PriceDetail.js";
      },
      CondResult: function () {
        return "../../../../components/SubmitResult/ActionSheetResult.js";
      },
    },
    props: {
      weakHint: {
        type: Array,
        default: function () {
          return [];
        },
      },
      conditionOrder: {
        type: Object,
        default: function () {
          return {};
        },
      },
      stockInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      hideCloseIcon: { type: Boolean, default: !1 },
    },
    setup: function (e, n) {
      var s = n.emit,
        a = o.get(e.stockInfo, "secu_info.secu_cls", ""),
        u = o.getCurrentInstance().proxy,
        l = o.ref(!1),
        m = o.computed(function () {
          return e.conditionOrder.isInvestCondOrder
            ? {
                name: e.conditionOrder.name,
                type_desc: t.CondTags.IVEST,
                market: e.conditionOrder.market,
                scode: e.conditionOrder.code,
                order_cond:
                  e.conditionOrder.investPeriodText +
                  e.conditionOrder.investTime,
                invest_quantity: e.conditionOrder.investQuantity,
                stock_cls: a,
                invalid_time: i.calcInvestExpireTime(
                  e.conditionOrder.validDayEnum
                ),
                max_amount: e.conditionOrder.maxAmount,
                upper_limit: e.conditionOrder.upperLimit,
                lower_limit: e.conditionOrder.lowerLimit,
                buy_price_type: e.conditionOrder.buyPriceType,
              }
            : {
                name: e.conditionOrder.name,
                type_desc:
                  e.conditionOrder.tradeType === r.ACTION.BUY
                    ? t.CondTags.PRICE_BUY
                    : t.CondTags.PRICE_SELL,
                market: e.conditionOrder.market,
                scode: e.conditionOrder.code,
                order_cond: d.triggerCondFormatter({
                  remindType: e.conditionOrder.remindType,
                  condPrice: e.conditionOrder.condPrice,
                }),
                invalid_time: i.calcExpireTime(e.conditionOrder.validDayEnum),
                order_price: e.conditionOrder.price,
                stock_cls: a,
                quantity: e.conditionOrder.amount,
              };
        }),
        p = o.computed(function () {
          return c[e.conditionOrder.tradeType] || c[r.ACTION.BUY];
        }),
        f = o.debounce(
          function () {
            u.$stat.click(
              "trade.conditon.".concat(
                e.conditionOrder.isInvestCondOrder ? "invest" : "price",
                "_confirm_click"
              )
            ),
              s("confirm");
          },
          1500,
          { leading: !0, trailing: !1 }
        );
      return (
        o.onMounted(function () {
          o.index.$on("condition.result.show", function () {
            l.value = !0;
          });
        }),
        o.onBeforeUnmount(function () {
          o.index.$off("condition.result.show");
        }),
        { showResult: l, action: p, data: m, emit: s, onConfirm: f }
      );
    },
  };
Array ||
  (
    o.resolveComponent("InvestDetail") +
    o.resolveComponent("PriceDetail") +
    o.resolveComponent("CondActionSheetBase") +
    o.resolveComponent("CondResult")
  )();
var a = o._export_sfc(s, [
  [
    "render",
    function (e, n, t, i, r, d) {
      return o.e(
        { a: t.conditionOrder.isInvestCondOrder },
        t.conditionOrder.isInvestCondOrder
          ? { b: o.p({ "show-status": !1, data: i.data }) }
          : { c: o.p({ "show-status": !1, data: i.data }) },
        {
          d: !i.showResult,
          e: o.o(function (e) {
            return i.emit("close");
          }),
          f: o.o(i.onConfirm),
          g: o.p({ title: "订单确认", tips: t.weakHint, action: i.action }),
          h: o.sr("condResult", "5aab37a4-3"),
          i: o.o(function (e) {
            return i.emit("close");
          }),
          j: o.p({ visible: i.showResult, "hide-close-icon": t.hideCloseIcon }),
        }
      );
    },
  ],
]);
wx.createComponent(a);
