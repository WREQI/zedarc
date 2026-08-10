var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, s) {
    return new Promise(function (n, i) {
      var a = function (t) {
          try {
            o(s.next(t));
          } catch (t) {
            i(t);
          }
        },
        r = function (t) {
          try {
            o(s.throw(t));
          } catch (t) {
            i(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, r);
        };
      o((s = s.apply(t, e)).next());
    });
  },
  s = require("../../../../common/vendor.js"),
  n = require("../stock-hq-data/index.js"),
  i = require("api/index.js"),
  a = {
    stockInner: [
      { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
      { name: "净值占比", key: "cfgzb", sort: "posRatio", unit: "%" },
      { name: "成交额", key: "turnover", sort: "turnover", unit: "", big: !0 },
    ],
    inner: [
      { name: "成份股占比", key: "cfgzb", sort: "posRatio", unit: "%" },
      { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
      { name: "成交额", key: "turnover", sort: "turnover", unit: "", big: !0 },
      {
        name: "溢折率",
        key: "yjl",
        sort: "premiumRate",
        unit: "%",
        rateFormat: !0,
      },
      { name: "规模", key: "gm", sort: "dimensions", unit: "", big: !0 },
      { name: "最新价", key: "zxj", sort: "price", unit: "" },
      { name: "成交量(手)", key: "volume", sort: "volume", unit: "", big: !0 },
      {
        name: "5日涨跌幅",
        key: "zdf_d5",
        sort: "priceRatioD5",
        unit: "%",
        rate: !0,
      },
      {
        name: "20日涨跌幅",
        key: "zdf_d20",
        sort: "priceRatioD20",
        unit: "%",
        rate: !0,
      },
      {
        name: "年初至今",
        key: "zdf_y",
        sort: "priceRatioY",
        unit: "%",
        rate: !0,
      },
    ],
    outer: [
      { name: "最新净值", key: "fund_value", sort: "fundValue", unit: "" },
      { name: "日涨幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
      {
        name: "近1周",
        key: "zdf_w1",
        sort: "priceRatioW1",
        unit: "%",
        rate: !0,
      },
      {
        name: "近1月",
        key: "zdf_m1",
        sort: "priceRatioM1",
        unit: "%",
        rate: !0,
      },
      {
        name: "近3月",
        key: "zdf_m3",
        sort: "priceRatioM3",
        unit: "%",
        rate: !0,
      },
      {
        name: "近6月",
        key: "zdf_m6",
        sort: "priceRatioM6",
        unit: "%",
        rate: !0,
      },
      {
        name: "近1年",
        key: "zdf_y1",
        sort: "priceRatioY1",
        unit: "%",
        rate: !0,
      },
      {
        name: "今年以来",
        key: "zdf_y",
        sort: "priceRatioY",
        unit: "%",
        rate: !0,
      },
      {
        name: "成立以来",
        key: "zdf_all",
        sort: "priceRatioAll",
        unit: "%",
        rate: !0,
      },
    ],
    stockOuter: [
      { name: "单位净值", key: "fund_value", sort: "fundValue", unit: "" },
      { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
    ],
    hotInner: [
      { name: "最新价", key: "zxj", sort: "price", unit: "" },
      { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
      { name: "成交额", key: "turnover", sort: "turnover", unit: "", big: !0 },
    ],
  },
  r = {
    components: {
      FundOuter: function () {
        return "./components/FundOuter.js";
      },
      FundInner: function () {
        return "./components/FundInner.js";
      },
      UsEtfList: function () {
        return "./components/UsEtfList.js";
      },
      FreezeScrollList: function () {
        return "./components/FreezeScrollList/mp.js";
      },
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      market: { type: String, default: "" },
      scode: { type: String, default: "" },
      pageType: { type: String, default: "" },
      isTrading: { type: Boolean, default: !1 },
      lct: { type: Boolean, default: !1 },
      isLctApp: { type: Boolean, default: !1 },
      stockType: { type: String, default: "" },
    },
    data: function () {
      return {
        sortType: "priceRatio",
        fundList: [],
        columns: [],
        columnsOuter: [],
        interval: null,
        needSort: !1,
        sortDown: !0,
        dataType: "",
        nodataTip: !1,
        hasInnerData: !1,
        hasOuterData: !0,
        showLctlist: !1,
        fundOuterList: [],
        fundLctOuterList: [],
        hotETFList: [],
        hasUsEtfData: !1,
        isHSTrading: !1,
      };
    },
    computed: {
      symbol: function () {
        var t = n.utils.trimScode(this.scode);
        return n.utils.getSymbol(this.market, t);
      },
      showFundOuter: function () {
        return "plate" !== this.pageType;
      },
      isUsIndex: function () {
        return (
          n.utils.isIndex(this.stockType) && n.utils.isUSMarket(this.market)
        );
      },
      usEtfSymbol: function () {
        return "us.".concat(this.scode);
      },
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var i;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ("plate" === this.pageType
                        ? ((this.sortType = "relevancy"),
                          (this.needSort = !1),
                          (this.dataType = "board"),
                          (this.columns = a.inner || []))
                        : "stockdetail" === this.pageType
                        ? ((this.sortType = "posRatio"),
                          (this.sortDown = !0),
                          (this.needSort = !1),
                          n.utils.isFutures(this.market) ||
                          n.utils.isSPMarket(this.market)
                            ? ((this.dataType = "index"),
                              (this.columns =
                                (null == (i = a.inner) ? void 0 : i.slice(1)) ||
                                []))
                            : ((this.dataType = "stock"),
                              (this.columns = a.stockInner || []),
                              (this.columnsOuter = a.stockOuter || [])))
                        : ((this.sortType = "priceRatio"),
                          (this.needSort = !1),
                          (this.dataType = "index"),
                          (this.columns = a.inner || [])),
                      (this.columnsHot = a.hotInner || []),
                      "zs" !== this.pageType || !this.showFundOuter)
                    ) {
                      t.next = 8;
                      break;
                    }
                    return (t.prev = 1), (t.next = 4), this.getLctData();
                  case 4:
                    t.next = 8;
                    break;
                  case 6:
                    (t.prev = 6), (t.t0 = t.catch(1));
                  case 8:
                    this.getFundData(),
                      this.judgeTime(),
                      this.isUsIndex &&
                        s.StockBridge.busOn(
                          "market-update-marketStatus",
                          this.handleMarketStatusUpdate
                        );
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this,
            [[1, 6]]
          );
        })
      );
    },
    activated: function () {
      this.reportBlockInfo();
    },
    beforeDestroy: function () {
      this.clearRefresh(),
        this.isUsIndex &&
          s.StockBridge.busOff(
            "market-update-marketStatus",
            this.handleMarketStatusUpdate
          );
    },
    methods: {
      clearRefresh: function () {
        this.interval && clearInterval(this.interval);
      },
      judgeTime: function () {
        var t = this;
        (this.isUsIndex
          ? this.isTrading || this.isHSTrading
          : this.isTrading) &&
          (this.interval = setInterval(function () {
            t.getFundData();
          }, 5e3));
      },
      handleMarketStatusUpdate: function (t) {
        var e = this;
        if (this.isUsIndex && t) {
          var s = t.NEWSH;
          if (s) {
            var n = this.isHSTrading;
            (this.isHSTrading = "open" === s.state),
              !n &&
                this.isHSTrading &&
                (this.clearRefresh(),
                this.getFundData(),
                (this.interval = setInterval(function () {
                  e.getFundData();
                }, 5e3))),
              !n || this.isHSTrading || this.isTrading || this.clearRefresh();
          }
        }
      },
      getLctData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        i.FundAPI.queryLCTFundList(this.hqBridge, {
                          scode: this.scode,
                        })
                      );
                    case 2:
                      0 == +(s = t.sent).retcode &&
                        ((this.fundLctOuterList = this.dealLctData(
                          s.index_related_funds || []
                        )),
                        (this.fundLctOuterList =
                          this.fundLctOuterList.slice(0, 5) || [])),
                        this.fundLctOuterList &&
                        this.fundLctOuterList.length > 0
                          ? (this.showLctlist = !0)
                          : (this.showLctlist = !1);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      dealLctData: function (t) {
        return t.map(function (t) {
          return {
            sFundName: t.fund_name,
            sFundCode: t.fund_code,
            l1YearRiseRate: t.rate_key_val,
            lNetValue: t.net_value,
          };
        });
      },
      getFundData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = {
                          board_type: n.utils.hackUSSymbol(this.symbol),
                          data_type: this.dataType,
                          if_trade_null: this.showFundOuter ? "default" : "",
                          if_inner_null:
                            !this.showFundOuter ||
                            ("zs" === this.pageType && !this.showLctlist)
                              ? "default"
                              : "",
                          _appver: "11.7",
                        }),
                        "wzq" === s.StockBridge.ENV &&
                          (a.openid = s.StockBridge.getCookie("wzq_qluin")),
                        "mp" === s.StockBridge.ENV &&
                          ((a.openid = s.StockBridge.getStorage("_qluin")),
                          (a.fskey = s.StockBridge.getStorage("_qlskey"))),
                        (t.next = 4),
                        i.FundAPI.getFundIndexList(this.hqBridge, a)
                      );
                    case 4:
                      (r = t.sent) &&
                        r.data &&
                        (this.$emit("loaded"),
                        (this.fundList = r.data.inner_rank_list || []),
                        (this.fundOuterList =
                          r.data.outer_rank_list_trade || []),
                        (this.hotETFList = r.data.if_null_recommend || [])),
                        this.fundList && this.fundList.length > 0
                          ? (this.hasInnerData = !0)
                          : (this.hasInnerData = !1),
                        "zs" === this.pageType
                          ? (this.hasOuterData = this.showLctlist)
                          : (this.hasOuterData =
                              this.fundOuterList &&
                              this.fundOuterList.length > 0),
                        this.showFundOuter
                          ? this.hasInnerData ||
                            this.hasOuterData ||
                            (this.nodataTip = !0)
                          : this.isUsIndex ||
                            this.hasInnerData ||
                            (this.nodataTip = !0),
                        this.reportBlockInfo();
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      reportClickInfo: function (t, e) {
        var i =
          n.utils.isHKMarket(this.market) || n.utils.isUSMarket(this.market)
            ? "stock_gm"
            : "stock_a";
        s.StockBridge.report(
          "hq.stock_hotfund_inner.tab_stockdetail_click_from_".concat(
            this.pageType
          ),
          {
            stockid: this.symbol,
            related_stockid: t,
            position: e + 1,
            yy_public_str1:
              "zs" === this.pageType
                ? "zs_".concat(t)
                : "".concat(i, "_").concat(t),
          }
        );
      },
      reportBlockInfo: function () {
        var t =
          n.utils.isHKMarket(this.market) || n.utils.isUSMarket(this.market)
            ? "stock_gm"
            : "stock_a";
        this.hasInnerData &&
          s.StockBridge.report(
            "hq.stock_fund_inner.tab_brow_from_".concat(this.pageType),
            {
              stockid: this.symbol,
              yy_public_str1: "zs" === this.pageType ? "zs" : t,
            }
          ),
          this.showFundOuter &&
            this.hasOuterData &&
            s.StockBridge.report(
              "hq.stock_fund_outer.tab_brow_from_".concat(this.pageType),
              {
                stockid: this.symbol,
                yy_public_str1: "zs" === this.pageType ? "zs" : t,
              }
            ),
          this.hasUsEtfData &&
            s.StockBridge.report(
              "hq.stock_us_etf.tab_brow_from_".concat(this.pageType),
              { stockid: this.symbol, yy_public_str1: "zs" }
            ),
          this.nodataTip &&
            this.hotETFList &&
            this.hotETFList.length > 0 &&
            s.StockBridge.report(
              "hq.stock_hotfund_inner.tab_brow_from_".concat(this.pageType),
              {
                stockid: this.symbol,
                yy_public_str1: "zs" === this.pageType ? "zs" : t,
              }
            );
      },
      onUsEtfLoaded: function (t) {
        (this.hasUsEtfData = t > 0),
          !this.isUsIndex ||
            this.hasInnerData ||
            this.hasUsEtfData ||
            (this.nodataTip = !0),
          this.$emit("loaded");
      },
    },
  };
Array ||
  (
    s.resolveComponent("FundOuter") +
    s.resolveComponent("FundInner") +
    s.resolveComponent("FreezeScrollList") +
    s.resolveComponent("NoData") +
    s.resolveComponent("UsEtfList")
  )();
var o = s._export_sfc(r, [
  [
    "render",
    function (t, e, n, i, a, r) {
      return s.e(
        { a: !a.nodataTip },
        a.nodataTip
          ? s.e(
              { h: a.hotETFList && a.hotETFList.length > 0 },
              a.hotETFList && a.hotETFList.length > 0
                ? {
                    i: s.o(r.reportClickInfo, 1993),
                    j: s.p({
                      "is-lct-app": n.isLctApp,
                      "fund-type": "inner",
                      "list-name": "基金名称",
                      "page-type": "stockdetail",
                      "is-page": !1,
                      "is-sort": !1,
                      "sort-type": "",
                      "sort-down": !0,
                      "is-show-a-l-l": !1,
                      columns: t.columnsHot,
                      "list-data": a.hotETFList,
                    }),
                  }
                : {}
            )
          : s.e(
              { b: r.showFundOuter && a.hasOuterData },
              r.showFundOuter && a.hasOuterData
                ? {
                    c: s.p({
                      scode: n.scode,
                      market: n.market,
                      symbol: r.symbol,
                      "page-type": n.pageType,
                      "columns-outer": a.columnsOuter,
                      lct: n.lct,
                      "fund-outer-list":
                        "zs" === n.pageType
                          ? a.fundLctOuterList
                          : a.fundOuterList,
                    }),
                  }
                : {},
              { d: r.showFundOuter && a.hasOuterData && a.hasInnerData },
              (r.showFundOuter && a.hasOuterData && a.hasInnerData, {}),
              { e: a.hasInnerData },
              a.hasInnerData
                ? {
                    f: s.p({
                      "is-lct-app": n.isLctApp,
                      scode: n.scode,
                      market: n.market,
                      symbol: r.symbol,
                      "page-type": n.pageType,
                      columns: a.columns,
                      "list-data": a.fundList,
                      lct: n.lct,
                    }),
                  }
                : {},
              { g: n.lct ? "" : 1 }
            ),
        { k: r.isUsIndex && !a.nodataTip },
        r.isUsIndex && !a.nodataTip
          ? s.e(
              { l: a.hasUsEtfData && a.hasInnerData },
              (a.hasUsEtfData && a.hasInnerData, {}),
              {
                m: s.o(r.onUsEtfLoaded, 1994),
                n: s.p({
                  scode: n.scode,
                  market: n.market,
                  symbol: r.usEtfSymbol,
                  "page-type": n.pageType,
                }),
              }
            )
          : {},
        { o: "plate" === n.pageType },
        (n.pageType, {}),
        {
          p: s.n("stockdetail" === n.pageType ? "stock-detail-fund" : ""),
          q: s.n("plate" === n.pageType ? "nopadding" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-efb746c0"],
]);
wx.createComponent(o);
