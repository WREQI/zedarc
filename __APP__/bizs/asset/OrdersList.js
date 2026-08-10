var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var d = require("../../common/vendor.js"),
  n = require("../../config/key.js"),
  t = require("../../stores/app/useMode.js"),
  r = require("../../service/stat/mp-weixin.js"),
  o = require("../../utils/navigator.js"),
  i = [
    { text: "方向" },
    { text: "股票/代码" },
    { text: "委托/现价", align: "right" },
    { text: "委托/成交", align: "right" },
    { key: "status", text: "状态", align: "right" },
  ],
  s = {
    options: { styleIsolation: "shared" },
    components: {
      OrdersListItem: function () {
        return "./OrdersListItem.js";
      },
      ListHeader: function () {
        return "./ListHeader.js";
      },
    },
    setup: function () {
      var e = d.inject("undoneOrderList"),
        n = d.inject("doneOrderList"),
        r = d.inject("combinedOrderList"),
        o = d.inject("embeddedMode"),
        i = t.useModeStore(),
        s = d.storeToRefs(i).simpleMode,
        l = d.computed(function () {
          return n.value.length > 0
            ? {
                "border-bottom-left-radius": 0,
                "border-bottom-right-radius": 0,
              }
            : {};
        });
      return {
        undoneOrderList: e,
        doneOrderList: n,
        combinedOrderList: r,
        embeddedMode: o,
        simpleMode: s,
        undoneOrderListStyle: l,
      };
    },
    data: function () {
      var t = d.index.getStorageSync(n.ASSET_ORDER_LIST_EXPANDED);
      return (
        (null != t && "" !== t) || (t = !0),
        {
          fields: i,
          undoneFields: i.map(function (d) {
            return "status" == d.key ? e(e({}, d), {}, { explain: !0 }) : d;
          }),
          doneOrderListExpanded: t,
        }
      );
    },
    computed: {
      doneOrderIds: function () {
        return this.doneOrderList.map(function (e) {
          return e.uniqueKey;
        });
      },
    },
    methods: {
      onCancelOrder: function () {
        this.$emit("cancelOrder");
      },
      onShowFailReason: function (e, d) {
        r.stat.click("trade.asset.fail_reason_".concat(e, ".click")),
          this.$emit("showFailReason", e, d);
      },
      onExpand: function () {
        this.simpleMode && (this.doneOrderListExpanded = !1),
          (this.doneOrderListExpanded = !this.doneOrderListExpanded),
          d.index.setStorageSync(
            n.ASSET_ORDER_LIST_EXPANDED,
            this.doneOrderListExpanded
          ),
          this.$emit("doneOrderListExpanded", this.doneOrderListExpanded);
      },
      onExplain: function (e) {
        "status" === e.key &&
          (r.stat.click("trade.asset.undone_explain_click"),
          o.hrefToKnowledge(31));
      },
    },
  };
Array ||
  (
    d.resolveComponent("ListHeader") +
    d.resolveComponent("OrdersListItem") +
    d.resolveComponent("Empty")
  )(),
  Math;
var l = d._export_sfc(s, [
  [
    "render",
    function (e, n, t, r, o, i) {
      return d.e(
        { a: !r.embeddedMode },
        r.embeddedMode
          ? d.e(
              { A: r.combinedOrderList.length > 0 },
              r.combinedOrderList.length > 0
                ? {
                    B: d.p({ fields: o.fields, border: !r.simpleMode }),
                    C: d.o(i.onCancelOrder),
                    D: d.o(i.onShowFailReason),
                    E: d.p({
                      type: "pending",
                      fields: o.fields,
                      "order-list": r.combinedOrderList,
                    }),
                    F: d.o(function () {}),
                  }
                : {
                    G: d.p({
                      text: "今日尚未委托",
                      "custom-cls": "adapt-logo-empty ^^adapt-logo-empty",
                    }),
                  }
            )
          : d.e(
              { b: r.undoneOrderList.length > 0 },
              r.undoneOrderList.length > 0
                ? {
                    c: d.o(i.onExplain),
                    d: d.p({ fields: o.undoneFields, border: !r.simpleMode }),
                    e: d.s(r.undoneOrderListStyle),
                    f: d.o(i.onCancelOrder),
                    g: d.o(i.onShowFailReason),
                    h: d.p({
                      id: "undoneOrderList",
                      type: "pending",
                      fields: o.fields,
                      "order-list": r.undoneOrderList,
                    }),
                  }
                : {},
              {
                i: r.doneOrderList.length > 0 && 0 === r.undoneOrderList.length,
              },
              r.doneOrderList.length > 0 && 0 === r.undoneOrderList.length
                ? {
                    j: d.p({
                      "custom-cls": "undone-empty ^undone-empty",
                      "height-fill": !1,
                      text: "没有正在委托的订单",
                      layout: "horizontal",
                    }),
                  }
                : {},
              {
                k:
                  r.doneOrderList.length + r.undoneOrderList.length > 0 &&
                  !r.simpleMode,
              },
              (r.doneOrderList.length + r.undoneOrderList.length > 0 &&
                r.simpleMode,
              {}),
              { l: r.doneOrderList.length > 0 },
              r.doneOrderList.length > 0
                ? d.e(
                    { m: d.t(r.doneOrderList.length), n: !r.simpleMode },
                    r.simpleMode
                      ? {}
                      : {
                          o: d.n(
                            o.doneOrderListExpanded
                              ? "icon-arrow-up"
                              : "icon-arrow-down"
                          ),
                        },
                    {
                      p: d.n(r.simpleMode ? "" : "border--bottom"),
                      q: d.o(function () {
                        return i.onExpand && i.onExpand.apply(i, arguments);
                      }),
                      r: o.doneOrderListExpanded,
                    },
                    o.doneOrderListExpanded
                      ? { s: d.p({ fields: o.fields, border: !r.simpleMode }) }
                      : {},
                    { t: o.doneOrderListExpanded },
                    o.doneOrderListExpanded
                      ? {
                          v: d.o(i.onCancelOrder),
                          w: d.o(i.onShowFailReason),
                          x: d.p({
                            id: "doneOrderList",
                            type: "done",
                            fields: o.fields,
                            "order-list": r.doneOrderList,
                          }),
                        }
                      : {}
                  )
                : {},
              { y: r.doneOrderList.length + r.undoneOrderList.length === 0 },
              r.doneOrderList.length + r.undoneOrderList.length === 0
                ? {
                    z: d.p({
                      "custom-cls": "adapt-logo-empty ^^adapt-logo-empty",
                      "bottom-border-radius": r.simpleMode,
                      text: "今日尚未委托",
                    }),
                  }
                : {}
            ),
        {
          H: d.n(
            r.simpleMode
              ? "order-list-container__simple-mode"
              : "order-list-container__classic-mode"
          ),
          I: d.n(r.embeddedMode ? "order-list-container__embedded-mode" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(l);
