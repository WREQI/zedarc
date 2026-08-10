var t = require("../../stock-hq-data/index.js"),
  e = require("../../stock-base/visibilityObserver/index.js"),
  i = require("../../../../../common/vendor.js"),
  r = {
    components: {
      FreezeScrollList: function () {
        return "./FreezeScrollList/mp.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      columns: {
        type: Array,
        default: function () {
          return [];
        },
      },
      listData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      pageType: { type: String, default: "stockdetail" },
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
      symbol: { type: String, default: "" },
      lct: { type: Boolean, default: !1 },
      isLctApp: { type: Boolean, default: !1 },
    },
    data: function () {
      return { VISIBILITY_OBJ: null };
    },
    mounted: function () {
      var t = this;
      this.VISIBILITY_OBJ = new e.VisibilityObserver(
        ".fund-inner-block",
        {
          once: !0,
          callback: function (e, i) {
            var r, n;
            e &&
              t.hqBridge.report("hq.detail.fundtab_topfund_brow", {
                stockid: t.symbol,
                etf_related:
                  null == (n = null == (r = t.listData) ? void 0 : r[0])
                    ? void 0
                    : n.code,
              });
          },
          intersection: { threshold: 0 },
        },
        this
      );
    },
    beforeDestroy: function () {
      var t, e, i;
      null ==
        (i =
          null == (e = null == (t = this.VISIBILITY_OBJ) ? void 0 : t.observer)
            ? void 0
            : e.disconnect) || i.call(e),
        (this.VISIBILITY_OBJ = null);
    },
    methods: {
      reportClickInfo: function (e, i) {
        var r =
          t.utils.isHKMarket(this.market) || t.utils.isUSMarket(this.market)
            ? "stock_gm"
            : "stock_a";
        this.hqBridge.report(
          "hq.stock_fund_inner.tab_stockdetail_click_from_".concat(
            this.pageType
          ),
          {
            stockid: this.symbol,
            related_stockid: e,
            position: i + 1,
            yy_public_str1:
              "zs" === this.pageType
                ? "zs_".concat(e)
                : "".concat(r, "_").concat(e),
          }
        );
      },
      checkMore: function () {
        this.listData &&
          0 !== this.listData.length &&
          ("mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/detail/innerfund",
              query: {
                market: this.market,
                scode: this.scode,
                fundType: "inner",
                boardType: this.symbol,
                pageType: this.pageType,
              },
            }),
          "wzq" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              name: "chyFundList",
              query: {
                fundType: "inner",
                boardType: this.symbol,
                pageType: this.pageType,
                jumpFrom: this.lct ? "lct" : "",
              },
            }),
          "mp" === this.hqBridge.ENV &&
            this.hqBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/chy/fundList?fundType=inner&boardType="
                .concat(this.symbol, "&pageType=")
                .concat(this.pageType)
            ),
          this.hqBridge.report("hq.stock_fund_inner.fund_checkmore", {
            from: this.pageType,
          }));
      },
    },
  };
Array || i.resolveComponent("FreezeScrollList")();
var n = i._export_sfc(r, [
  [
    "render",
    function (t, e, r, n, s, o) {
      return i.e(
        { a: r.listData && r.listData.length > 0 },
        (r.listData && r.listData.length, {}),
        {
          b: i.o(function (t) {
            return o.checkMore();
          }, 2894),
          c: i.o(o.reportClickInfo, 2895),
          d: i.p({
            "fund-type": "inner",
            "list-name": "stockdetail" === r.pageType ? "名称" : "基金名称",
            "page-type": r.pageType,
            "is-page": !1,
            "is-sort": !1,
            "sort-type": "",
            "sort-down": !0,
            "is-show-a-l-l": !1,
            columns: r.columns,
            "list-data": r.listData,
            lct: r.lct,
            "is-lct-app": r.isLctApp,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-77765bea"],
]);
wx.createComponent(n);
