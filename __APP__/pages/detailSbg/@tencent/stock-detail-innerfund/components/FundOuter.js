var t = require("../../stock-hq-data/index.js"),
  e = require("../../../../../common/vendor.js"),
  r = {
    components: {
      FundLCT: function () {
        return "./FundLCT.js";
      },
      FreezeScrollList: function () {
        return "./FreezeScrollList/mp.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      market: { type: String, default: "" },
      scode: { type: String, default: "" },
      symbol: { type: String, default: "" },
      pageType: { type: String, default: "" },
      lct: { type: Boolean, default: !1 },
      fundOuterList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      columnsOuter: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {
      showMore: function () {
        return this.fundOuterList && this.fundOuterList.length > 0;
      },
    },
    methods: {
      reportClickInfo: function (e, r) {
        var o =
          t.utils.isHKMarket(this.market) || t.utils.isUSMarket(this.market)
            ? "stock_gm"
            : "stock_a";
        this.hqBridge.report(
          "hq.stock_fund_outer.tab_stockdetail_click_from_".concat(
            this.pageType
          ),
          {
            stockid: this.symbol,
            related_stockid: e,
            position: r + 1,
            yy_public_str1:
              "zs" === this.pageType
                ? "zs_".concat(e)
                : "".concat(o, "_").concat(e),
          }
        );
      },
      checkMoreOuter: function () {
        if (this.fundOuterList && 0 !== this.fundOuterList.length) {
          if ("wzq" === this.hqBridge.ENV)
            if ("zs" === this.pageType)
              this.hqBridge.routeTo({
                name: "chyFundLctList",
                query: {
                  pageType: this.pageType,
                  market: this.market,
                  scode: this.scode,
                  jumpFrom: this.lct ? "lct" : "",
                },
              });
            else {
              var r = t.utils.getSymbol(this.market, this.scode);
              this.hqBridge.routeTo({
                name: "chyFundList",
                query: {
                  fundType: "outer",
                  boardType: r,
                  pageType: this.pageType,
                  jumpFrom: this.lct ? "lct" : "",
                },
              });
            }
          if (this.hqBridge.ENV === e.EnvTypeEnum.MP) {
            var o = "https://wzq.tenpay.com/mp/v2/index.html#/chy";
            "zs" === this.pageType
              ? this.hqBridge.openExtraWebview(
                  ""
                    .concat(o, "/fundLctList?pageType=")
                    .concat(this.pageType, "&market=")
                    .concat(this.market, "&scode=")
                    .concat(this.scode)
                )
              : this.hqBridge.openExtraWebview(
                  ""
                    .concat(o, "/fundList?fundType=")
                    .concat(encodeURIComponent("outer"), "&boardType=")
                    .concat(encodeURIComponent(this.symbol), "&pageType=")
                    .concat(this.pageType)
                );
          }
        }
      },
    },
  };
Array ||
  (e.resolveComponent("FundLCT") + e.resolveComponent("FreezeScrollList"))();
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, s, i, n) {
      return e.e(
        { a: n.showMore },
        (n.showMore, {}),
        {
          b: e.o(function (t) {
            return n.checkMoreOuter();
          }, 2891),
          c: "zs" === o.pageType,
        },
        "zs" === o.pageType
          ? {
              d: e.sr("fundlct", "7e4bf073-0"),
              e: e.o(n.reportClickInfo, 2892),
              f: e.p({
                scode: o.scode,
                market: o.market,
                "is-page": !1,
                "list-data": o.fundOuterList,
                lct: o.lct,
              }),
            }
          : {
              g: e.o(n.reportClickInfo, 2893),
              h: e.p({
                "fund-type": "outer",
                "list-name": "stockdetail" === o.pageType ? "名称" : "基金名称",
                "page-type": o.pageType,
                "is-page": !1,
                "is-sort": !1,
                "sort-type": "",
                "sort-down": !0,
                "is-show-a-l-l": !1,
                columns: o.columnsOuter,
                "list-data": o.fundOuterList,
                "stock-page-market": o.market,
                lct: o.lct,
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-7e4bf073"],
]);
wx.createComponent(o);
