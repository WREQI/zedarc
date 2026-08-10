var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  h = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  u = function (t, e) {
    for (var o in e || (e = {})) c.call(e, o) && h(t, o, e[o]);
    if (a) {
      var n,
        r = i(a(e));
      try {
        for (r.s(); !(n = r.n()).done; ) {
          o = n.value;
          l.call(e, o) && h(t, o, e[o]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return r(t, s(e));
  },
  p = function (t, e, o) {
    return new Promise(function (i, n) {
      var r = function (t) {
          try {
            a(o.next(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          try {
            a(o.throw(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(r, s);
        };
      a((o = o.apply(t, e)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  g = require("../node-modules/throttle-debounce/esm/index.js"),
  m = require("../../stock-hq-data/index.js"),
  b = require("../Index.js"),
  k = {
    bond: {
      all: [
        { name: "最新价", key: "zxj", sort: "price", unit: "" },
        { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
        { name: "5分钟涨速", key: "speed", sort: "speed", unit: "%", rate: !0 },
        {
          name: "成交额",
          key: "turnover",
          sort: "turnover",
          unit: "",
          big: !0,
          thousand: !0,
        },
        {
          name: "转股溢价率",
          key: "zgyjl",
          sort: "convertPremiumRate",
          unit: "%",
          rateFormat: !0,
        },
        { name: "转股价值", key: "zgjz", sort: "convertValue", unit: "" },
        {
          name: "剩余规模",
          key: "sygm",
          sort: "remaining",
          unit: "",
          big: !0,
          thousand: !0,
        },
        { name: "换手率", key: "hsl", sort: "exchange", unit: "%" },
        {
          name: "5日涨跌幅",
          key: "zdf_d5",
          sort: "priceRatioD5",
          unit: "%",
          rate: !0,
        },
        { name: "评级", key: "pj", sort: "", unit: "" },
        { name: "正股名称", key: "stock_name", sort: "", unit: "" },
        {
          name: "正股涨速",
          key: "stock_speed",
          sort: "stockSpeed",
          unit: "%",
          rate: !0,
        },
        {
          name: "正股涨幅",
          key: "stock_zdf",
          sort: "stockPriceRatio",
          unit: "%",
          rate: !0,
        },
        { name: "双低", key: "sd", sort: "doubleLow", unit: "" },
        { name: "转股价", key: "zgj", sort: "convertPrice", unit: "" },
        { name: "到期赎回价", key: "dqshj", sort: "callPriceEnd", unit: "" },
        { name: "到期日期", key: "dqrq", sort: "EndDay", unit: "", wide: !0 },
      ],
      gzld: [
        { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
        {
          name: "正股涨幅",
          key: "stock_zdf",
          sort: "stockPriceRatio",
          unit: "%",
          rate: !0,
        },
        {
          name: "转股溢价率",
          key: "zgyjl",
          sort: "convertPremiumRate",
          unit: "%",
          rateFormat: !0,
        },
        {
          name: "剩余规模",
          key: "sygm",
          sort: "remaining",
          unit: "",
          big: !0,
          thousand: !0,
        },
        {
          name: "成交额",
          key: "turnover",
          sort: "turnover",
          unit: "",
          big: !0,
          thousand: !0,
        },
        { name: "换手率", key: "hsl", sort: "exchange", unit: "%" },
        { name: "最新价", key: "zxj", sort: "price", unit: "" },
        { name: "5分钟涨速", key: "speed", sort: "speed", unit: "%", rate: !0 },
        {
          name: "正股涨速",
          key: "stock_speed",
          sort: "stockSpeed",
          unit: "%",
          rate: !0,
        },
        { name: "评级", key: "pj", sort: "", unit: "" },
        { name: "正股名称", key: "stock_name", sort: "", unit: "" },
      ],
      sdtl: [
        { name: "双低", key: "sd", sort: "doubleLow", unit: "" },
        { name: "最新价", key: "zxj", sort: "price", unit: "" },
        {
          name: "转股溢价率",
          key: "zgyjl",
          sort: "convertPremiumRate",
          unit: "%",
          rateFormat: !0,
        },
        { name: "转股价值", key: "zgjz", sort: "convertValue", unit: "" },
        {
          name: "剩余规模",
          key: "sygm",
          sort: "remaining",
          unit: "",
          big: !0,
          thousand: !0,
        },
        {
          name: "成交额",
          key: "turnover",
          sort: "turnover",
          unit: "",
          big: !0,
          thousand: !0,
        },
        { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
        {
          name: "5日涨跌幅",
          key: "zdf_d5",
          sort: "priceRatioD5",
          unit: "%",
          rate: !0,
        },
        { name: "评级", key: "pj", sort: "", unit: "" },
        { name: "正股名称", key: "stock_name", sort: "", unit: "" },
      ],
    },
    etf: [
      { name: "最新价", key: "zxj", sort: "price", unit: "" },
      { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
      {
        name: "成交额",
        key: "turnover",
        sort: "turnover",
        unit: "",
        big: !0,
        thousand: !0,
      },
      {
        name: "场外净申购",
        key: "cwjsg",
        sort: "sharesChange",
        unit: "",
        big: !0,
        bigFormat: !0,
        color: !0,
      },
      { name: "最新规模", key: "gm", sort: "dimensions", unit: "", big: !0 },
      {
        name: "溢折率",
        key: "yjl",
        sort: "premiumRate",
        unit: "%",
        rate: !0,
        rateFormat: !0,
      },
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
  },
  y = b.detect(),
  S = y.os,
  v = y.IS_PCWEIXIN,
  T = {
    code: "--",
    name: "--",
    zxj: "--",
    zdf: "--",
    speed: "--",
    turnover: "--",
    zgyjl: "--",
    zgjz: "--",
    sygm: "--",
    pj: "--",
    stock_name: "--",
    stock_speed: "--",
    stock_zdf: "--",
    sd: "--",
    zgj: "--",
    dqshj: "",
    dqrq: "--",
    hsl: "--",
    zdf_d5: "--",
  },
  w = {
    components: {
      MarketIndex: function () {
        return "../components/common/MarketIndex.js";
      },
      Compare: function () {
        return "../components/common/Compare.js";
      },
      ScrollList: function () {
        return "../components/FreezeScrollList.js";
      },
      NoData: function () {
        return "../components/NoData.js";
      },
      Tabbar: function () {
        return "../components/tabs/mp.js";
      },
    },
    inject: ["isAccountOpen", "hqBridge"],
    props: {
      userInfo: { type: Object, default: function () {} },
      rankFold: { type: Boolean, default: !1 },
      barHeight: { type: Number, default: 0 },
      outerSwiperHeight: { type: Number, default: 0 },
    },
    data: function () {
      return {
        info: {},
        newCount: -1,
        newStock: "",
        bondList: [],
        columns: [],
        showList: !1,
        showTeachBlock: !0,
        showTips: !1,
        showNum: 0,
        sortType: "priceRatio",
        sortDown: !0,
        listLimit: 50,
        offsetChange: !1,
        curOffset: 0,
        screenRatio: 1,
        winHeight: 0,
        lastPosition: void 0,
        showScrollGuide: !1,
        isTrading: !1,
        tradeInterval: null,
        interval: null,
        sgExtend: !0,
        qqExtend: !1,
        averProfit: 0,
        bondSgData: [],
        bondQpData: [],
        subscribeListColums: [
          { name: "债券名称", key: "name", tip: !1 },
          { name: "转股价值", key: "convert_value", tip: !0 },
          { name: "评级", key: "credit_rating", tip: !1 },
          { name: "参考收益率", key: "predict_profit_rate", tip: !0 },
        ],
        scrollTop: 0,
        counterNum: 0,
        listScrollLeft: 0,
        isScrolling: !1,
        scrollEndTimer: null,
        isListHorScroll: !1,
        webscrolltouch: !1,
        tabList: [
          {
            id: 0,
            name: "全部",
            column: "all",
            key: "",
            sort: "priceRatio",
            tips: "可转债交易支持T+0，无印花税",
          },
          {
            id: 1,
            name: "股债联动",
            column: "gzld",
            key: "stock_linkage",
            sort: "stockPriceRatio",
            tips: "T+0套利，用股债关联性赚取正股连板预期",
          },
          {
            id: 2,
            name: "双低套利",
            column: "sdtl",
            key: "double_low_arbitrage",
            sort: "doubleLow",
            tips: "双低指可转债价格低和溢价率低，双低值越低安全性越高",
          },
        ],
        boardType: "convertible",
        filterType: "",
        curActiveTab: 0,
        listMinHeight: 0,
        showNodata: !1,
        firstLeftScroll: !1,
        firstDownScroll: !1,
        endScrollGuideStatus: !0,
        endScrollActive: !0,
        scrollHeight: 550,
        mpTriggered: !1,
        mpRefreshing: !1,
        enabled: !1,
        listtabbarHeight: 0,
        rankheadHeight: 0,
        throttledCalculate: null,
        isModalShow: !1,
        modalConf: { content: "", title: "", tip: "" },
      };
    },
    computed: {
      scrollStyle: function () {
        return "width: 100%; height: ".concat(this.scrollHeight, "px;");
      },
      indexData: function () {
        return this.info && this.info.index
          ? {
              n: this.info.index.name,
              price: this.info.index.price,
              zde:
                this.info.index.price_change > 0
                  ? "+".concat(this.info.index.price_change)
                  : this.info.index.price_change,
              zdf:
                this.info.index.price_ratio > 0
                  ? "+".concat(this.info.index.price_ratio)
                  : this.info.index.price_ratio,
            }
          : {};
      },
      boardData: function () {
        return this.info && this.info.board
          ? {
              n: this.info.board.name,
              price: this.info.board.price,
              zde:
                this.info.board.price_change > 0
                  ? "+".concat(this.info.board.price_change)
                  : this.info.board.price_change,
              zdf:
                this.info.board.price_ratio > 0
                  ? "+".concat(this.info.board.price_ratio)
                  : this.info.board.price_ratio,
            }
          : {};
      },
      curTipText: function () {
        return (
          this.tabList[this.curActiveTab] &&
          this.tabList[this.curActiveTab].tips
        );
      },
      isMp: function () {
        return !0;
      },
      isWzq: function () {
        return !1;
      },
      allLoaded: function () {
        return this.bondList.length >= this.listTotal;
      },
    },
    watch: {
      barHeight: function (t) {
        this.scrollHeight = this.winHeight - t - 44 * this.screenRatio;
      },
      outerSwiperHeight: function (t) {
        this.scrollHeight = t;
      },
    },
    created: function () {
      return p(
        this,
        null,
        o().mark(function t() {
          var e,
            i = this;
          return o().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      S.ios &&
                        S.version <= "11.4.0" &&
                        (this.webscrolltouch = !0),
                      this.detailApi ||
                        (this.detailApi = new m.DetailApi(function (t) {
                          return f.StockBridge.request(t, "get");
                        })),
                      (e =
                        this.tabList[this.curActiveTab] &&
                        this.tabList[this.curActiveTab].column),
                      (this.columns = k.bond && k.bond[e]),
                      (t.prev = 3),
                      (t.next = 6),
                      Promise.all([this.getBondInfo(), this.getTradeTime()])
                    );
                  case 6:
                    return (
                      (t.next = 8),
                      Promise.all([
                        this.getHSNewBond(),
                        this.getQqData(),
                        this.getList(),
                      ])
                    );
                  case 8:
                    this.judgeTime(),
                      this.handleMarketState(),
                      (this.throttledgetList = g.throttle(
                        200,
                        !0,
                        this.loadMoreList()
                      ));
                    try {
                      this.throttledCalculate = g.throttle(
                        100,
                        this.handleScroll
                      );
                    } catch (t) {
                      f.StockBridge.aegisReportEvent(
                        "MONITOR-BOND-RANK-THROTTLED-CALCULATE-INIT-ERROR",
                        {
                          ext3: JSON.stringify({
                            isMp: this.isMp,
                            errorMessage: t.message,
                            hasThrottle: "function" == typeof g.throttle,
                            hasHandleScroll:
                              "function" == typeof this.handleScroll,
                          }),
                        }
                      ),
                        (this.throttledCalculate = this.handleScroll);
                    }
                    this.$nextTick(function () {
                      i.$refs.scroll &&
                        i.$refs.scroll.addEventListener(
                          "scroll",
                          i.onScroll,
                          !0
                        );
                    }),
                      (t.next = 18);
                    break;
                  case 15:
                    (t.prev = 15), (t.t0 = t.catch(3)), this.$emit("loaded");
                  case 18:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[3, 15]]
          );
        })
      );
    },
    mounted: function () {
      var t = this;
      if (this.isMp) {
        var e = (null == getApp ? void 0 : getApp().globalData).rpxToPx(208),
          o =
            (f.wx$1.getWindowInfo && f.wx$1.getWindowInfo()) ||
            f.wx$1.getSystemInfoSync(),
          i = o.screenWidth,
          n = o.screenHeight;
        (this.screenRatio = (i > 390 ? 390 : i) / 375),
          (this.winHeight = n),
          (this.scrollHeight =
            this.winHeight - (this.barHeight || e) - 44 * this.screenRatio);
        var r = setTimeout(function () {
          (t.enabled = !0), clearTimeout(r);
        }, 1e3);
      } else {
        var s = Math.min(
          document.documentElement.clientWidth || 375,
          v ? 430 : 540
        );
        (this.screenRatio = s / 375),
          (this.winHeight = document.body.clientHeight || 0);
      }
      f.StockBridge.report("hq.market.bondmarket_page_show");
    },
    beforeDestroy: function () {
      this.clearRefresh(),
        this.$refs.scroll &&
          this.$refs.scroll.removeEventListener("scroll", this.onScroll, !0),
        (this.detailApi = null);
    },
    deactivated: function () {
      this.clearRefresh();
    },
    methods: {
      mpStartPull: function () {
        this.mpTriggered = !0;
      },
      mpPullEnd: function () {
        this.mpTriggered = !1;
      },
      mpPullRefresh: function () {
        var t = this;
        if ((this.refresh(), !this.mpRefreshing)) {
          this.mpRefreshing = !0;
          var e = setTimeout(function () {
            (t.mpTriggered = !1), (t.mpRefreshing = !1), clearTimeout(e);
          }, 600);
        }
      },
      handleScrollToLower: function () {
        this.rankFold || this.allLoaded || this.onScrollEnd();
      },
      toggleRank: function () {
        this.$emit("toggleRank");
      },
      reportClickInfo: function (t) {
        f.StockBridge.report("hq.choose_hq.bondtab.stocklist_click", {
          stockid: t,
        });
      },
      tabActivated: function () {
        var t = this;
        this.getHSNewBond(),
          this.getQqData(),
          this.judgeTime(),
          this.handleMarketState(),
          this.$nextTick(function () {
            var e, o;
            (t.endScrollGuideStatus = !1),
              (t.endScrollActive = !1),
              null ==
                (o = null == (e = t.$refs.scroll) ? void 0 : e.scrollTo) ||
                o.call(e, 0, t.scrollTop),
              t.$refs.bondBlock &&
                t.$refs.bondBlock.$refs.listScroll &&
                t.$refs.bondBlock.$refs.listScroll.scrollTo(
                  t.listScrollLeft,
                  0
                );
            var i = setTimeout(function () {
              (t.endScrollGuideStatus = !0),
                (t.endScrollActive = !0),
                clearTimeout(i);
            }, 1e3);
          }),
          f.StockBridge.report("hq.market.bondmarket_page_show"),
          f.StockBridge.report("hq.choose_hq.bondtab.dxblock_show"),
          this.bondSgData &&
            this.bondSgData.length > 0 &&
            f.StockBridge.report("hq.choose_hq.bondtab.sgblock_show"),
          this.bondQpData &&
            this.bondQpData.length > 0 &&
            f.StockBridge.report("hq.choose_hq.bondtab.qqblock_show");
      },
      tabDeactivated: function () {
        this.clearRefresh();
      },
      gotoIndex: function () {
        if (this.info && this.info.index && this.info.index.code) {
          var t = m.utils.splitSymbol(this.info.index.code),
            e = t.market,
            o = t.scode;
          f.StockRouter.routeTo({
            name: "stockdetail",
            query: { scode: o, market: e },
          }),
            f.StockBridge.report("hq.choose_hq.bondtab.index_click", {
              stockid: this.info.index.code,
            });
        }
      },
      gotoBoard: function () {
        if (this.info && this.info.board && this.info.board.code) {
          var t = m.utils.splitSymbol(this.info.board.code),
            e = t.market,
            o = t.scode;
          f.StockRouter.routeTo({
            name: "stockdetail",
            query: { scode: o, market: e },
          }),
            f.StockBridge.report("hq.choose_hq.bondtab.board_click", {
              stockid: this.info.board.code,
            });
        }
      },
      goToDetail: function (t, e, o) {
        var i = m.utils.splitSymbol(t),
          n = i.market,
          r = i.scode;
        if (this.isWzq) {
          if ("qqstock" === e)
            f.StockRouter.routeTo({
              name: "stockdetail",
              query: { scode: r, market: n },
            });
          else {
            var s = {
              market: "hs",
              type: "bond",
              stockmodel: JSON.stringify({ name: o.name, symbol: t }),
            };
            "sgstock" === e && (s.isPurchase = 1);
            for (
              var a =
                  "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhaidetail?",
                c = 0,
                l = Object.keys(s);
              c < l.length;
              c++
            ) {
              var h = l[c];
              a += "".concat(h, "=").concat(s[h], "&");
            }
            f.StockBridge.ENV === f.EnvTypeEnum.MP
              ? f.wx$1.navigateTo({
                  url: "/pages/additional/webview/index?url=".concat(
                    encodeURIComponent(a),
                    "&hideShareMenu=1"
                  ),
                })
              : this.$router.push({ path: "/hangqingxinzhaidetail", query: s });
          }
          f.StockBridge.report(
            "hq.choose_hq.bondtab.".concat(e, "_detail_click")
          );
        }
      },
      gotoNew: function () {
        if (
          (f.StockBridge.report("hq.choose_hq.bondtab.yijiansg_click"),
          this.isWzq)
        )
          f.StockBridge.busEmit("wzq-yijiandaxin", { market: "KZZ" });
        else {
          if (this.isAccountOpen)
            return this.isMp
              ? void this.hqBridge.busEmit("navigateToTrade")
              : void f.StockBridge.routeTo({
                  path: "/wj_trade/newstock/index",
                  query: { purchase_type: 2, stat_data: "Imz11p00ry017" },
                });
          if (
            (f.StockBridge.report("hq.choose_hq.bondtab.apply_click", {
              fchannel_id_fm_i: "Imz11p00ry017",
            }),
            this.isMp)
          )
            this.hqBridge.busEmit("navigateToApplyIndex", {
              stat: "Imz11p00ry017",
            });
          else {
            this.$toast("您还没有开通股票账户，请先开通后再申购");
            var t = setTimeout(function () {
              f.StockBridge.routeTo({
                path: "/wj_trade/apply/index",
                query: { purchase_type: 2, stat_data: "Imz11p00ry017" },
              }),
                clearTimeout(t);
            }, 1e3);
          }
        }
      },
      gotoHangqingXinzhai: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "stock",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          o = "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?type="
            .concat(t, "&scroll_pos=")
            .concat(e, "&timestamp=")
            .concat(Date.now(), "&market=hs");
        f.StockBridge.ENV === f.EnvTypeEnum.MP
          ? f.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(o),
                "&hideShareMenu=1"
              ),
            })
          : this.$router.push({
              path: "/hangqingxinzhai",
              query: {
                type: t,
                scroll_pos: e,
                market: "hs",
                timestamp: Date.now(),
              },
            }),
          f.StockBridge.report("hq.choose_hq.bondtab.new_calendar_click");
      },
      handleMarketState: function () {
        var t = this;
        this.tradeInterval && clearInterval(this.tradeInterval),
          (this.tradeInterval = setInterval(function () {
            return p(
              t,
              null,
              o().mark(function t() {
                return o().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.getTradeTime();
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          }, 3e4));
      },
      getTradeTime: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            var e, i, n;
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.detailApi) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (t.next = 4),
                        this.detailApi.getMarketState(
                          { market: 0 },
                          { needProcess: !0 }
                        )
                      );
                    case 4:
                      (i = t.sent),
                        (n = (
                          (null == (e = null == i ? void 0 : i.split)
                            ? void 0
                            : e.call(i, "|")) || []
                        )
                          .map(function (t) {
                            return t.split("_");
                          })
                          .filter(function (t) {
                            return "NEWSH" === t[0];
                          })).length && (this.isTrading = "open" === n[0][1]);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      clearRefresh: function () {
        this.interval && clearInterval(this.interval),
          this.tradeInterval && clearInterval(this.tradeInterval);
      },
      judgeTime: function () {
        var t = this;
        this.interval && clearInterval(this.interval),
          (this.interval = setInterval(function () {
            t.isTrading && (t.getBondInfo(), t.getList(!0));
          }, 5e3));
      },
      getMpCounterNum: function () {
        var t = this;
        f.wx$1
          .createSelectorQuery()
          .in(this)
          .select(".stock-list-wrapper")
          .boundingClientRect(function (e) {
            var o;
            if (e) {
              t.stockListTop = e.top;
              var i =
                  (null == (o = t.$refs.bondBlock) ? void 0 : o.itemHeight) ||
                  48,
                n = t.winHeight - t.stockListTop - i * (t.screenRatio + 0.14);
              (t.counterNum = Math.max(
                0,
                Math.floor(n / (i / (t.screenRatio + 0.11)))
              )),
                t.counterNum >= t.listTotal && (t.counterNum = t.listTotal),
                t.counterNum > 0 &&
                  t.$emit(
                    "changeCounterNum",
                    "bondMarket",
                    t.counterNum,
                    t.listTotal
                  );
            }
          })
          .exec();
      },
      getCounterNum: function () {
        if (this.$refs.stocklist) {
          var t = this.$refs.stocklist.getBoundingClientRect().top;
          this.stockListTop = t;
          var e = this.winHeight - this.stockListTop - 48 * this.screenRatio;
          (this.counterNum = Math.max(
            0,
            Math.round(e / (40 * this.screenRatio))
          )),
            this.counterNum >= this.listTotal &&
              (this.counterNum = this.listTotal),
            this.counterNum > 0 &&
              this.$emit(
                "changeCounterNum",
                "bondMarket",
                this.counterNum,
                this.listTotal
              );
        } else this.getMpCounterNum();
      },
      onScrollEnd: function () {
        (this.curOffset = Math.min(
          this.listLimit + this.curOffset,
          this.listTotal - this.listLimit
        )),
          this.getList(),
          this.judgeTime();
      },
      onScroll: function (t) {
        try {
          "function" == typeof this.throttledCalculate
            ? this.throttledCalculate(t)
            : (f.StockBridge.aegisReportEvent(
                "MONITOR-BOND-RANK-THROTTLED-CALCULATE-ERROR",
                {
                  ext3: JSON.stringify({
                    isMp: this.isMp,
                    throttledCalculateType: e(this.throttledCalculate),
                    hasHandleScroll: "function" == typeof this.handleScroll,
                  }),
                }
              ),
              "function" == typeof this.handleScroll && this.handleScroll(t));
        } catch (t) {
          f.StockBridge.aegisReportEvent("MONITOR-BOND-RANK-ON-SCROLL-ERROR", {
            ext3: JSON.stringify({
              isMp: this.isMp,
              errorMessage: t.message,
              errorStack: t.stack,
            }),
          });
        }
      },
      handleScroll: function (t) {
        this.isMp ? this.getMpCounterNum() : this.onWzqScroll(t);
      },
      onWzqScroll: function (t) {
        return p(
          this,
          null,
          o().mark(function e() {
            var i, n, r, s, a, c, l;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (this.$emit("onTabScroll", t),
                        this.scrollTop !==
                          (null == (i = this.$refs.scroll)
                            ? void 0
                            : i.scrollTop))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return (
                        (this.listScrollLeft =
                          this.$refs.bondBlock &&
                          this.$refs.bondBlock.$refs.listScroll &&
                          this.$refs.bondBlock.$refs.listScroll.scrollLeft),
                        (r =
                          this.tabList[this.curActiveTab] &&
                          this.tabList[this.curActiveTab].key),
                        e.abrupt(
                          "return",
                          ((r = r || "all"),
                          void (
                            !this.firstLeftScroll &&
                            this.endScrollGuideStatus &&
                            (f.StockBridge.report(
                              "hq.choose_hq.bondtab.rank_left_scroll",
                              { listtype: r }
                            ),
                            (this.firstLeftScroll = !0))
                          ))
                        )
                      );
                    case 4:
                      (s = t.target.scrollTop),
                        (a = t.target.clientHeight),
                        (c = t.target.scrollHeight),
                        s + a >= c - 10 && this.handleScrollToLower(),
                        this.getCounterNum(),
                        (this.scrollTop =
                          null == (n = this.$refs.scroll)
                            ? void 0
                            : n.scrollTop),
                        (l =
                          (l =
                            this.tabList[this.curActiveTab] &&
                            this.tabList[this.curActiveTab].key) || "all"),
                        !this.firstDownScroll &&
                          this.endScrollActive &&
                          (f.StockBridge.report(
                            "hq.choose_hq.bondtab.rank_down_scroll",
                            { listtype: l }
                          ),
                          (this.firstDownScroll = !0));
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      scrollGuide: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        f.StockBridge.getStorage("bondlist-scroll-guide")
                      );
                    case 2:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 5;
                        break;
                      }
                      t.t0 = this.showScrollGuide;
                    case 5:
                      if (((t.t1 = t.t0), t.t1)) {
                        t.next = 8;
                        break;
                      }
                      (this.showScrollGuide = !0),
                        (this.endScrollGuideStatus = !1),
                        f.StockBridge.setStorage("bondlist-scroll-guide", !0);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      endScrollGuide: function () {
        this.endScrollGuideStatus = !0;
      },
      touchHorizontalScrollList: function (t) {
        this.isListHorScroll = t;
      },
      refresh: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            var e, i, n, r, s, a;
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$emit("onPullingDown"),
                        (t.prev = 1),
                        (t.next = 4),
                        this.getBondInfo()
                      );
                    case 4:
                      return (t.next = 6), this.getHSNewBond();
                    case 6:
                      return (t.next = 8), this.getQqData();
                    case 8:
                      return (t.next = 10), this.getList();
                    case 10:
                      this.isWzq &&
                        (null ==
                          (n =
                            null ==
                            (i =
                              null == (e = null == this ? void 0 : this.$refs)
                                ? void 0
                                : e.refresh)
                              ? void 0
                              : i.stopPullDownRefresh) ||
                          n.call(i)),
                        (t.next = 16);
                      break;
                    case 13:
                      (t.prev = 13),
                        (t.t0 = t.catch(1)),
                        this.isWzq &&
                          (null ==
                            (a =
                              null ==
                              (s =
                                null == (r = null == this ? void 0 : this.$refs)
                                  ? void 0
                                  : r.refresh)
                                ? void 0
                                : s.stopPullDownRefresh) ||
                            a.call(s));
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[1, 13]]
            );
          })
        );
      },
      loadMoreList: function () {
        if (
          this.showList &&
          this.listTotal > 50 &&
          this.counterNum > this.bondList.length - 50
        ) {
          var t;
          t =
            this.bondList.length + this.listLimit > this.listTotal
              ? this.listTotal - this.bondList.length
              : this.listLimit;
          var e = new Array(t).fill(T);
          (this.bondList = this.bondList.concat(e)),
            (this.bondList = this.bondList.map(function (t, e) {
              return d(u({}, t), { key: e });
            }));
        }
      },
      getList: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return p(
          this,
          null,
          o().mark(function i() {
            var n,
              r,
              s,
              a,
              c,
              l,
              h,
              p,
              f,
              g,
              m,
              k,
              y,
              S = this;
            return o().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (n = new Date().getTime()),
                        (r = {
                          board_type: this.boardType,
                          sort_type: this.sortType,
                          direct: this.sortDown ? "down" : "up",
                          offset: this.curOffset,
                          count: this.listLimit,
                          selector: this.filterType,
                          time: n,
                        }),
                        (this.lastTime = n),
                        e &&
                          ((s = Math.max(0, this.counterNum - 10)),
                          (a = Math.min(
                            this.bondList.length,
                            this.counterNum + 10
                          )),
                          (r.offset = s),
                          (r.count = a - s)),
                        (o.prev = 2),
                        (o.next = 5),
                        b.HqAPI.getBondRankList(r)
                      );
                    case 5:
                      if (
                        ((c = o.sent),
                        r.time === this.lastTime && !this.isScrolling)
                      ) {
                        o.next = 8;
                        break;
                      }
                      return o.abrupt("return");
                    case 8:
                      c && 0 == +c.code && c.data
                        ? ((h = c.data.rank_list),
                          (p = this.listTotal),
                          (this.listTotal = c.data.total || 0),
                          (f = this.listTotal >= 50 ? 50 : this.listTotal),
                          (g =
                            0 === this.bondList.length
                              ? new Array(f).fill(T)
                              : this.bondList),
                          c.data.offset + this.listLimit > this.listTotal &&
                            ((m = this.listTotal - c.data.offset),
                            (h = h.slice(0, m))),
                          e
                            ? ((k = this.bondList.slice(0, r.offset)),
                              (y = this.bondList.slice(r.offset + r.count)),
                              (g = [].concat(t(k), t(h), t(y))))
                            : (l = g).splice.apply(
                                l,
                                [c.data.offset, h.length].concat(t(h))
                              ),
                          this.listTotal !== p &&
                            (g = g.slice(0, this.listTotal)),
                          (this.bondList = g),
                          (this.bondList = this.bondList.map(function (t, e) {
                            return d(u({}, t), { key: e });
                          })),
                          !c.data.rank_list || c.data.rank_list.length <= 0
                            ? ((this.showNodata = !0), (this.showList = !1))
                            : ((this.showNodata = !1), (this.showList = !0)),
                          this.$nextTick(function () {
                            S.scrollGuide();
                          }))
                        : ((this.showNodata = !0), (this.showList = !1)),
                        (o.next = 14);
                      break;
                    case 11:
                      (o.prev = 11),
                        (o.t0 = o.catch(2)),
                        (this.bondList = []),
                        (this.showNodata = !0),
                        (this.showList = !1);
                    case 14:
                    case "end":
                      return o.stop();
                  }
              },
              i,
              this,
              [[2, 11]]
            );
          })
        );
      },
      getHSNewBond: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            var e;
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), b.HqAPI.getHSNewBond();
                    case 2:
                      0 == +(e = t.sent).code &&
                        e.data &&
                        ((this.bondSgData = e.data.jrsg || []),
                        (this.averProfit = e.data.pjmqhlje || "0.00"),
                        (this.newCount = this.bondSgData.length || 0),
                        (this.newStock =
                          this.bondSgData[0] && this.bondSgData[0].name),
                        0 === this.newCount && (this.qqExtend = !0),
                        f.StockBridge.report(
                          "hq.choose_hq.bondtab.dxblock_show"
                        )),
                        this.bondSgData &&
                          this.bondSgData.length > 0 &&
                          f.StockBridge.report(
                            "hq.choose_hq.bondtab.sgblock_show"
                          );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getQqData: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            var e;
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), b.HqAPI.getQqData();
                    case 2:
                      0 == +(e = t.sent).code &&
                        e.data &&
                        (this.bondQpData = e.data),
                        this.bondQpData &&
                          this.bondQpData.length > 0 &&
                          f.StockBridge.report(
                            "hq.choose_hq.bondtab.qqblock_show"
                          );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getBondInfo: function () {
        return p(
          this,
          null,
          o().mark(function t() {
            var e, i;
            return o().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), b.HqAPI.getBondInfo();
                    case 2:
                      (e = t.sent) &&
                        e.data &&
                        (this.$emit("loaded"),
                        (this.info = e.data),
                        f.StockBridge.getStorage("isBondTeachShow") ||
                          f.StockBridge.setStorage("isBondTeachShow", "yes"),
                        "no" ===
                          (i = f.StockBridge.getStorage("isBondTeachShow")) &&
                          ((this.showTeachBlock = !1), (this.showTips = !0)),
                        "yes" === i &&
                          ((this.showTeachBlock = !0), (this.showTips = !1)));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      changeSort: function (t) {
        this.sortType === t
          ? (this.sortDown = !this.sortDown)
          : ((this.sortType = t),
            (this.sortDown = !0),
            "doubleLow" === this.sortType && (this.sortDown = !1)),
          (this.curOffset = 0),
          this.getList(),
          f.StockBridge.report("hq.choose_hq.bondtab.order_click", {
            ordertype: this.sortType,
          });
      },
      toggleSg: function () {
        (this.sgExtend = !this.sgExtend),
          f.StockBridge.report(
            "hq.choose_hq.bondtab.sgblock_" +
              (this.sgExtend ? "extend" : "retract")
          );
      },
      toggleQq: function () {
        (this.qqExtend = !this.qqExtend),
          f.StockBridge.report(
            "hq.choose_hq.bondtab.qqblock_" +
              (this.qqExtend ? "extend" : "retract")
          );
      },
      onSelectStockListTab: function (t) {
        var e = this;
        (this.showList = !1),
          (this.showNodata = !1),
          (this.firstLeftScroll = !1),
          (this.firstDownScroll = !1),
          this.resetListPosition(),
          (this.curActiveTab = t),
          this.tabList[this.curActiveTab] && this.tabList[this.curActiveTab].key
            ? (this.filterType = "".concat(
                this.tabList[this.curActiveTab].key,
                "=1"
              ))
            : (this.filterType = ""),
          (this.sortType =
            this.tabList[this.curActiveTab] &&
            this.tabList[this.curActiveTab].sort),
          (this.sortDown = !0),
          "doubleLow" === this.sortType && (this.sortDown = !1);
        var o =
          this.tabList[this.curActiveTab] &&
          this.tabList[this.curActiveTab].column;
        (this.columns = k.bond && k.bond[o]),
          (this.curOffset = 0),
          (this.listScrollLeft = 0);
        var i =
          this.tabList[this.curActiveTab] &&
          this.tabList[this.curActiveTab].key;
        f.StockBridge.report(
          "hq.choose_hq.bondtab.rank_".concat(i || "all", "_click")
        ),
          this.getList();
        var n = setTimeout(function () {
          e.getCounterNum(), clearTimeout(n);
        }, 500);
      },
      resetListPosition: function () {
        if (!this.isMp) {
          var t =
              this.$refs.stocktab &&
              this.$refs.stocktab.getBoundingClientRect().top,
            e = this.winHeight;
          this.listMinHeight = e - t - 49;
        }
        this.bondList = [];
      },
      openTeach: function () {
        f.StockRouter.routeTo({
          name: "informationSubject",
          query: {
            id: "TN202208022228138326b8b4",
            zxtype: "4",
            articleStyle: "fullTeach",
          },
        }),
          f.StockBridge.report("hq.choose_hq.bondtab.teach_click");
      },
      openILink: function () {
        f.StockBridge.report("hq.choose_hq.bondtab.i_click"),
          f.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN202302080733448061350d",
              articleStyle: "fullTeach",
            },
          });
      },
      closeTeach: function () {
        (this.showTeachBlock = !1),
          (this.showTips = !0),
          f.StockBridge.setStorage("isBondTeachShow", "no"),
          f.StockBridge.report("hq.choose_hq.bondtab.teach_close");
      },
      showModelTip: function () {
        (this.modalConf = {
          title: "成交额",
          content:
            "成交额为国证转债指数成交额，国证转债反应全市场可转债的整体表现。新上市满足选样条件的可转债自次月首个交易日起计入指数。",
          confirmBtn: "我知道了",
        }),
          (this.isModalShow = !0);
      },
      checkSubscribeTip: function (t, e) {
        var o = "",
          i = "";
        "convert_value" === t &&
          ((o =
            "转股价值是指在某一时点，可转债如果转换成股票所对应的股票价值。因为某一时刻的正股价是确定的，所以该时刻的转股价值也可以确定，即转股价值=一张可转债可转股的数量x正股价=债券面值÷转股价格x正股价。"),
          (i =
            "举例说明：如果A公司现在的股价为12元，转股价格为10元，那么此刻:转股价值=100÷10x12=120元。"),
          f.StockBridge.report(
            "hq.choose_hq.bondtab.".concat(e, "_convert_value_tip_click")
          )),
          "predict_profit_rate" === t &&
            ((o =
              "参考收益率=(参考上市价-发行价)/发行价×100%，参考上市价基于可转债转股价值、评级等数据基于数学模型计算， 在上市前每日更新。"),
            (i =
              "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"),
            "qq" === e &&
              ((o =
                "抢权配售的参考收益率=（可转债参考上市价-100）X10张/ （正股股价X10张可转债所需正股数）X100%，数据基于数学模型计算，每日更新最新数据。"),
              (i =
                "免责声明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。")),
            f.StockBridge.report(
              "hq.choose_hq.bondtab.".concat(e, "_profit_rate_tip_click")
            )),
          "predict_price" === t &&
            ((o =
              "参考上市价基于可转债转股价值、评级等数据基于数学模型计算，每日更新最新数据。"),
            (i =
              "免责声明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"),
            f.StockBridge.report(
              "hq.choose_hq.bondtab.".concat(e, "_predict_price_tip_click")
            )),
          (this.modalConf = {
            title: "成交额",
            content: o,
            tip: i,
            confirmBtn: "我知道了",
          }),
          (this.isModalShow = !0);
      },
      checkDxTip: function () {
        f.StockRouter.routeTo({
          name: "informationDetail",
          query: { id: "SN20221124155337833c2440", articleStyle: "fullTeach" },
        }),
          f.StockBridge.report("hq.choose_hq.bondtab.dx_tip_click");
      },
      getText: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          o = parseFloat(1e4 * +t || 0);
        return 0 === o
          ? "--"
          : o < 0
          ? "-".concat(m.utils.bigNumberToText(Math.abs(o)), "元")
          : "".concat(e ? "+" : "").concat(m.utils.bigNumberToText(o), "元");
      },
      colorFormat: function (t) {
        var e = +t;
        return e > 0 ? "red" : e < 0 ? "green" : "gray";
      },
      numFormat: function (t) {
        if (!t || "--" === t) return "--";
        var e = +t;
        return e > 0 ? "+".concat(e, "%") : e < 0 ? "".concat(e, "%") : "0.00%";
      },
      profitColorFilter: function (t) {
        if (!t || 0 === t.length) return "gray";
        var e = t.slice(0, t.length - 1);
        return (e = +e) < 0 ? "green" : e > 0 ? "red" : "gray";
      },
      profitValueFormat: function (t) {
        if (!t || 0 === t.length) return "--";
        var e = t.slice(0, t.length - 1);
        return (
          (e = (e = +e).toFixed(2)) > 0 && (e = "+".concat(e)),
          "".concat(e, "%")
        );
      },
      averProfitFormat: function (t) {
        var e = +t;
        return e > 0 ? "+".concat(e) : t;
      },
      onModalConfirm: function () {
        this.isModalShow = !1;
      },
    },
  };
Array ||
  (
    f.resolveComponent("market-index") +
    f.resolveComponent("compare") +
    f.resolveComponent("Tabbar") +
    f.resolveComponent("ScrollList") +
    f.resolveComponent("NoData")
  )();
var _ = f._export_sfc(w, [
  [
    "render",
    function (t, e, o, i, n, r) {
      return f.e(
        { a: n.info },
        n.info
          ? f.e(
              { b: n.info.index },
              n.info.index
                ? f.e(
                    {
                      c: f.p({ data: r.indexData }),
                      d: f.o(function (t) {
                        return r.gotoIndex();
                      }, 3971),
                      e: f.p({ data: r.boardData }),
                      f: f.o(function (t) {
                        return r.gotoBoard();
                      }, 3972),
                      g: f.t(n.info.kzz_market.avg_price || 0),
                      h: f.t(r.numFormat(n.info.kzz_market.avg_premium_rate)),
                      i: f.n(r.colorFormat(n.info.kzz_market.avg_premium_rate)),
                      j: n.info.index && n.info.pre_compare,
                    },
                    n.info.index && n.info.pre_compare
                      ? {
                          k: f.t(r.getText(n.info.index.turnover)),
                          l: f.o(function () {
                            return (
                              r.showModelTip &&
                              r.showModelTip.apply(r, arguments)
                            );
                          }, 3973),
                          m: f.t(r.getText(n.info.pre_compare.turnover, !0)),
                          n: f.n(r.colorFormat(n.info.pre_compare.turnover)),
                        }
                      : {},
                    { o: n.info.updowncount },
                    n.info.updowncount
                      ? {
                          p: f.t(n.info.updowncount.up),
                          q: f.t(n.info.updowncount.down),
                          r: f.p({
                            red: +n.info.updowncount.up,
                            green: +n.info.updowncount.down,
                            normal: +n.info.updowncount.plat,
                          }),
                        }
                      : {},
                    {
                      s: f.o(function () {
                        return r.checkDxTip && r.checkDxTip.apply(r, arguments);
                      }, 3974),
                      t:
                        n.newCount <= 0 &&
                        n.bondQpData &&
                        n.bondQpData.length <= 0,
                    },
                    (n.newCount <= 0 && n.bondQpData && n.bondQpData.length,
                    {}),
                    {
                      v: f.o(function (t) {
                        return r.gotoHangqingXinzhai("bond", "jrsg");
                      }, 3975),
                      w: n.bondSgData && n.bondSgData.length > 0,
                    },
                    n.bondSgData && n.bondSgData.length > 0
                      ? f.e(
                          {
                            x: f.t(r.averProfitFormat(n.averProfit)),
                            y: f.n(r.colorFormat(n.averProfit)),
                            z: f.n(
                              n.sgExtend ? "img-arrow-up" : "img-arrow-down"
                            ),
                            A: f.o(function (t) {
                              return r.toggleSg();
                            }, 3976),
                            B: n.sgExtend,
                          },
                          n.sgExtend
                            ? {
                                C: f.f(
                                  n.subscribeListColums,
                                  function (t, e, o) {
                                    return f.e(
                                      { a: f.t(t.name), b: t.tip },
                                      t.tip
                                        ? {
                                            c: f.o(
                                              function (e) {
                                                return r.checkSubscribeTip(
                                                  t.key,
                                                  "sg"
                                                );
                                              },
                                              3977,
                                              t.key
                                            ),
                                          }
                                        : {},
                                      { d: t.key }
                                    );
                                  }
                                ),
                                D: f.f(n.bondSgData, function (t, e, o) {
                                  return {
                                    a: f.f(
                                      n.subscribeListColums,
                                      function (e, o, i) {
                                        return {
                                          a: f.t(
                                            "predict_profit_rate" === e.key
                                              ? r.profitValueFormat(t[e.key])
                                              : t[e.key]
                                          ),
                                          b: e.key,
                                          c: f.n(
                                            "predict_profit_rate" === e.key
                                              ? r.profitColorFilter(t[e.key])
                                              : ""
                                          ),
                                          d: f.n(
                                            "predict_profit_rate" === e.key
                                              ? "column-weight"
                                              : ""
                                          ),
                                        };
                                      }
                                    ),
                                    b: t.symbol,
                                    c: f.o(
                                      function (e) {
                                        return r.goToDetail(
                                          t.symbol,
                                          "sgstock",
                                          t
                                        );
                                      },
                                      3978,
                                      t.symbol
                                    ),
                                  };
                                }),
                              }
                            : {},
                          { E: n.sgExtend },
                          n.sgExtend
                            ? {
                                F: f.o(function (t) {
                                  return r.gotoNew();
                                }, 3979),
                              }
                            : {}
                        )
                      : {},
                    { G: n.bondQpData && n.bondQpData.length > 0 },
                    n.bondQpData && n.bondQpData.length > 0
                      ? f.e(
                          {
                            H: f.n(
                              n.qqExtend ? "img-arrow-up" : "img-arrow-down"
                            ),
                            I: f.o(function (t) {
                              return r.toggleQq();
                            }, 3980),
                            J: n.qqExtend,
                          },
                          (n.qqExtend, {}),
                          { K: n.qqExtend },
                          n.qqExtend
                            ? {
                                L: f.f(n.bondQpData, function (t, e, o) {
                                  return f.e(
                                    {
                                      a: f.t(t.underlying_name),
                                      b: f.t(t.bidder_num),
                                      c: f.o(
                                        function (e) {
                                          return r.goToDetail(
                                            t.underlying_code,
                                            "qqstock"
                                          );
                                        },
                                        3981,
                                        e
                                      ),
                                      d: f.t(t.name),
                                      e: f.t(t.bond_num),
                                      f: f.o(
                                        function (e) {
                                          return r.goToDetail(
                                            t.symbol,
                                            "qqbond",
                                            t
                                          );
                                        },
                                        3982,
                                        e
                                      ),
                                      g: 0 === e,
                                    },
                                    {},
                                    {
                                      h: f.o(
                                        function (t) {
                                          return (
                                            0 === e &&
                                            r.checkSubscribeTip(
                                              "predict_price",
                                              "qq"
                                            )
                                          );
                                        },
                                        3983,
                                        e
                                      ),
                                      i: f.t((+t.predict_price).toFixed(3)),
                                      j: f.n(
                                        r.profitColorFilter(t.bidder_profit)
                                      ),
                                      k: 0 === e,
                                    },
                                    {},
                                    {
                                      l: f.o(
                                        function (t) {
                                          return (
                                            0 === e &&
                                            r.checkSubscribeTip(
                                              "predict_profit_rate",
                                              "qq"
                                            )
                                          );
                                        },
                                        3984,
                                        e
                                      ),
                                      m: f.t(
                                        r.profitValueFormat(t.bidder_profit)
                                      ),
                                      n: f.n(
                                        r.profitColorFilter(t.bidder_profit)
                                      ),
                                      o: e !== n.bondQpData.length - 1,
                                    },
                                    (n.bondQpData.length, {}),
                                    { p: e }
                                  );
                                }),
                              }
                            : {},
                          { M: n.qqExtend },
                          (n.qqExtend, {})
                        )
                      : {},
                    { N: n.showTeachBlock },
                    (n.showTeachBlock, {}),
                    { O: n.showTeachBlock },
                    n.showTeachBlock
                      ? {
                          P: f.o(function (t) {
                            return r.openTeach();
                          }, 3985),
                          Q: f.o(function (t) {
                            return r.closeTeach();
                          }, 3986),
                        }
                      : {},
                    {
                      R: f.o(function (t) {
                        return r.openILink();
                      }, 3987),
                      S: f.o(r.onSelectStockListTab, 3988),
                      T: f.p({
                        "cur-index": n.curActiveTab,
                        "tab-config": n.tabList,
                        "show-more": !1,
                      }),
                      U: f.t(r.curTipText),
                      V: n.showList && n.bondList && n.bondList.length > 0,
                    },
                    n.showList && n.bondList && n.bondList.length > 0
                      ? {
                          W: f.sr("bondBlock", "7ce49c94-4"),
                          X: f.o(r.changeSort, 3989),
                          Y: f.o(r.touchHorizontalScrollList, 3990),
                          Z: f.o(r.endScrollGuide, 3991),
                          aa: f.o(r.reportClickInfo, 3992),
                          ab: f.p({
                            "fund-type": "bond",
                            "list-name": "债券名称",
                            "page-type": "hqbondtab",
                            "rank-fold": o.rankFold,
                            "is-page": !1,
                            "is-sort": !0,
                            "sort-type": n.sortType,
                            "sort-down": n.sortDown,
                            "is-show-a-l-l": !1,
                            columns: n.columns,
                            "list-data": n.bondList,
                            "show-scroll-guide": n.showScrollGuide,
                            "is-scrolling": n.isScrolling,
                          }),
                        }
                      : {},
                    { ac: n.bondList && n.bondList.length > 0 && o.rankFold },
                    n.bondList && n.bondList.length > 0 && o.rankFold
                      ? {
                          ad: f.o(function () {
                            return (
                              r.toggleRank && r.toggleRank.apply(r, arguments)
                            );
                          }, 3993),
                        }
                      : {},
                    {
                      ae: n.showNodata ? "0px" : n.listMinHeight + "px",
                      af: n.showNodata,
                    },
                    n.showNodata ? { ag: n.listMinHeight + "px" } : {}
                  )
                : {},
              { ah: n.bondList && n.bondList.length > 0 },
              (n.bondList && n.bondList.length, {}),
              {
                ai: f.s(r.scrollStyle),
                aj: n.enabled,
                ak: n.mpTriggered,
                al: f.o(function () {
                  return r.mpStartPull && r.mpStartPull.apply(r, arguments);
                }, 3994),
                am: f.o(function () {
                  return r.mpPullEnd && r.mpPullEnd.apply(r, arguments);
                }, 3995),
                an: f.o(function () {
                  return r.mpPullRefresh && r.mpPullRefresh.apply(r, arguments);
                }, 3996),
                ao: f.o(function () {
                  return r.onScroll && r.onScroll.apply(r, arguments);
                }, 3997),
                ap: f.o(function () {
                  return (
                    r.handleScrollToLower &&
                    r.handleScrollToLower.apply(r, arguments)
                  );
                }, 3998),
                aq: n.isModalShow,
              },
              n.isModalShow
                ? {
                    ar: f.t(n.modalConf.title),
                    as: f.t(n.modalConf.content),
                    at: f.t(n.modalConf.tip),
                    av: f.o(function () {
                      return (
                        r.onModalConfirm && r.onModalConfirm.apply(r, arguments)
                      );
                    }, 3999),
                    aw: "".concat(n.scrollHeight, "px"),
                  }
                : {},
              { ax: f.n(n.webscrolltouch ? "wrapper-touch" : "") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7ce49c94"],
]);
wx.createComponent(_);
