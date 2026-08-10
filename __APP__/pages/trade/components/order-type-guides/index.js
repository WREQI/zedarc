require("../../../../app.js");
var e = require("../../../../model/trade/useConditionEntry.js"),
  n = require("../../../../common/vendor.js"),
  r = require("../../../../config/enum.js"),
  t = {
    components: {
      LimitOrder: function () {
        return "./LimitOrder.js";
      },
      PriceOrder: function () {
        return "./PriceOrder.js";
      },
      InvestOrder: function () {
        return "./InvestOrder.js";
      },
      EnhancedLimitOrder: function () {
        return "./EnhancedLimitOrder.js";
      },
      AtAuctionLimitOrder: function () {
        return "./AtAuctionLimitOrder.js";
      },
      OddOrder: function () {
        return "./OddOrder.js";
      },
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
      Tabbar: function () {
        return "../../../../common/components/Tabbar/index.js";
      },
    },
    props: {
      visible: { type: Boolean, required: !0 },
      currentTab: { type: String, default: r.ORDER_TYPES.LIMIT },
      isGGT: { type: Boolean, default: !1 },
    },
    setup: function (t) {
      var o = n.ref(!1),
        i = e.useConditionEntry().isInvestCondUser,
        a = n.ref(t.currentTab),
        d = n.ref([
          {
            label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.LIMIT],
            value: r.ORDER_TYPES.LIMIT,
          },
          {
            label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.PRICE],
            value: r.ORDER_TYPES.PRICE,
          },
        ]);
      return (
        n.watch(
          function () {
            return i.value;
          },
          function (e) {
            var n = d.value.find(function (e) {
              return e.value === r.ORDER_TYPES.INVEST;
            });
            e
              ? n ||
                d.value.push({
                  label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.INVEST],
                  value: r.ORDER_TYPES.INVEST,
                })
              : n &&
                (d.value = d.value.filter(function (e) {
                  return e.value !== r.ORDER_TYPES.INVEST;
                }));
          },
          { immediate: !0 }
        ),
        n.watch(
          function () {
            return t.isGGT;
          },
          function (e) {
            e &&
              (d.value = [
                {
                  label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.ELO],
                  value: r.ORDER_TYPES.ELO,
                },
                {
                  label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.ALO],
                  value: r.ORDER_TYPES.ALO,
                },
                {
                  label: r.ORDER_TYPES_TEXT[r.ORDER_TYPES.OLO],
                  value: r.ORDER_TYPES.OLO,
                },
              ]);
          },
          { immediate: !0 }
        ),
        {
          orderTypes: r.ORDER_TYPES,
          isInvestCondUser: i,
          tabbar: d,
          tabIndex: a,
          actionSheetVisible: o,
        }
      );
    },
    watch: {
      currentTab: function (e) {
        this.tabIndex = e;
      },
      visible: function (e, n) {
        e !== n && (this.actionSheetVisible = e);
      },
      actionSheetVisible: function (e, n) {
        e !== n && (e || this.handleClose());
      },
    },
    methods: {
      change: function (e) {
        var n = { 0: r.ORDER_TYPES_TEXT.LIMIT, 1: r.ORDER_TYPES_TEXT.PRICE }[e];
        this.$stat.click("trade.asset.order.guides.".concat(n || e));
      },
      handleClose: function () {
        this.$emit("close");
      },
    },
  };
Array ||
  (
    n.resolveComponent("Tabbar") +
    n.resolveComponent("LimitOrder") +
    n.resolveComponent("PriceOrder") +
    n.resolveComponent("InvestOrder") +
    n.resolveComponent("EnhancedLimitOrder") +
    n.resolveComponent("AtAuctionLimitOrder") +
    n.resolveComponent("OddOrder") +
    n.resolveComponent("action-sheet")
  )();
var o = n._export_sfc(t, [
  [
    "render",
    function (e, r, t, o, i, a) {
      return n.e(
        {
          a: n.o(function (e) {
            return (o.tabIndex = e);
          }),
          b: n.o(a.change),
          c: n.p({ value: o.tabIndex, "show-slider": !0, data: o.tabbar }),
          d: o.tabIndex === o.orderTypes.LIMIT,
        },
        (o.tabIndex, o.orderTypes.LIMIT, {}),
        { e: o.tabIndex === o.orderTypes.PRICE },
        (o.tabIndex, o.orderTypes.PRICE, {}),
        { f: o.tabIndex === o.orderTypes.INVEST },
        (o.tabIndex, o.orderTypes.INVEST, {}),
        { g: o.tabIndex === o.orderTypes.ELO },
        (o.tabIndex, o.orderTypes.ELO, {}),
        { h: o.tabIndex === o.orderTypes.ALO },
        (o.tabIndex, o.orderTypes.ALO, {}),
        { i: o.tabIndex === o.orderTypes.OLO },
        (o.tabIndex, o.orderTypes.OLO, {}),
        {
          j: n.o(function (e) {
            return (o.actionSheetVisible = e);
          }),
          k: n.o(a.handleClose),
          l: n.p({
            value: o.actionSheetVisible,
            title: "订单类型说明",
            "picker-style": !0,
            "close-button": !0,
            "confirm-txt": " ",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-183e4562"],
]);
wx.createComponent(o);
