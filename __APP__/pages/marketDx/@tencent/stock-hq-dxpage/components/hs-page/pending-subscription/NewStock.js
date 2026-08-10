var t = require("../../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    components: {
      TitleBlock: function () {
        return "../../common/TitleBlock.js";
      },
      PurchaseStockItemTitle: function () {
        return "../../common/purchase/PurchaseStockItemTitle.js";
      },
      PurchaseStockItemCell: function () {
        return "../../common/purchase/PurchaseStockItemCell.js";
      },
    },
    props: {
      itemData: { type: Object, default: function () {} },
      market: { type: String, default: "" },
    },
    data: function () {
      return {
        type: "stock",
        isShowStatusBar: !1,
        foldStatus: "fold",
        statusEnum: {
          fold: { text: "展开全部", arrowClass: "status-arrow-down" },
          unfold: { text: "收起", arrowClass: "status-arrow-up" },
        },
      };
    },
    computed: {
      statusInfo: function () {
        return this.statusEnum[this.foldStatus];
      },
    },
    created: function () {
      this.itemData.data.length > 4 && (this.isShowStatusBar = !0);
    },
    methods: {
      showTeachPop: function (t, e, a) {
        this.$emit("showTeachPop", t, e, a);
      },
      cellDataFormat: function (t) {
        var e = this.itemData.data[t];
        return (
          this.itemData.dataConfig.forEach(function (t, a) {
            e["list".concat(a)] = e[t];
          }),
          e
        );
      },
      switchState: function () {
        (this.foldStatus = "fold" === this.foldStatus ? "unfold" : "fold"),
          "unfold" === this.foldStatus &&
            this.hqBridge.report(
              "hq.daxin_calendar_hstab.pending_subscription_tab_new_stock_unfold_click"
            );
      },
    },
  };
Array ||
  (
    t.resolveComponent("title-block") +
    t.resolveComponent("purchase-stock-item-title") +
    t.resolveComponent("purchase-stock-item-cell")
  )();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, o, n, s, r) {
      return t.e(
        {
          a: t.p({ name: "待申购新股" }),
          b: t.o(r.showTeachPop, 4443),
          c: t.p({
            titleName: o.itemData.titleName,
            data: o.itemData.titleConfig,
            tipConfig: o.itemData.tipConfig,
            cellId: o.itemData.key,
            type: s.type,
          }),
          d: t.f(o.itemData.data, function (e, a, n) {
            return {
              a: a,
              b: "0bdd5b91-2-" + n,
              c: t.p({
                data: r.cellDataFormat(a),
                cellId: o.itemData.key,
                market: o.market,
                type: s.type,
                reportName: o.itemData.reportName,
              }),
            };
          }),
          e: t.n("fold" === s.foldStatus ? "content-wrapper" : ""),
          f: s.isShowStatusBar,
        },
        s.isShowStatusBar
          ? {
              g: t.t(r.statusInfo.text),
              h: t.n(r.statusInfo.arrowClass),
              i: t.o(function () {
                return r.switchState && r.switchState.apply(r, arguments);
              }, 4444),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0bdd5b91"],
]);
wx.createComponent(a);
