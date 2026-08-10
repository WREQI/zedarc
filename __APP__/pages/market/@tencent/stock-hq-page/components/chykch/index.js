require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  e,
  n,
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  c = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  h = Object.defineProperties,
  d = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable,
  p = function (t, e, n) {
    return e in t
      ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  m = function (t, e) {
    for (var n in e || (e = {})) l.call(e, n) && p(t, n, e[n]);
    if (u) {
      var i,
        o = c(u(e));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          f.call(e, n) && p(t, n, e[n]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  g = function (t, e, n) {
    return new Promise(function (i, o) {
      var r = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(r, a);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  y = require("../../../../../../common/vendor.js"),
  w = require("../../Index.js"),
  T = require("../../../stock-hq-data/index.js"),
  k = require("../../../../hqPage_plugin_gen_assets.js"),
  b = new ((function () {
    return r(function t(e) {
      for (var n in (a(this, t), e))
        if (e.hasOwnProperty(n)) {
          if (((this[n] = e[n]), this[e[n]]))
            throw Error("duplicate key and values, ensure they are unique");
          Object.defineProperty(this, e[n], { enumerable: !1, value: n });
        }
    });
  })())({
    STOCK: "0",
    DEBT: "1",
    BOND: "2",
    NEWSTOCK: "3",
    DEPOSITE: "4",
    ALLOT: "5",
    DUOTIANQI: "6",
  });
(b.NAME =
  (o((t = {}), b.STOCK, "股票"),
  o(t, b.DEBT, "通用回购"),
  o(t, b.BOND, "可转债"),
  o(t, b.ALLOT, "配股"),
  o(t, b.NEWSTOCK, "新股"),
  o(t, b.DEPOSITE, "托管"),
  o(t, b.DUOTIANQI, "券商理财"),
  t)),
  (b.UNIT =
    (o((e = {}), b.STOCK, "股"),
    o(e, b.DEBT, "元"),
    o(e, b.BOND, "张"),
    o(e, b.ALLOT, "股"),
    o(e, b.NEWSTOCK, "股"),
    o(e, b.DEPOSITE, ""),
    o(e, b.DUOTIANQI, "元"),
    e));
var q = {
    TYPE: {
      BUY: "1",
      SELL: "2",
      TEXT:
        ((n = {}),
        o(n, b.STOCK, { 1: "买入", 2: "卖出" }),
        o(n, b.DEBT, { 1: "借入", 2: "借出" }),
        o(n, b.BOND, { 1: "买入", 2: "买入" }),
        o(n, b.ALLOTMENT, { 1: "申购", 2: "申购" }),
        o(n, b.NEWSTOXK, { 1: "申购", 2: "申购" }),
        o(n, b.DUOTIANQI, { 1: "买入", 2: "购回" }),
        n),
    },
    STATE: {
      WIP: "0",
      PARTLY: "1",
      PROCESSED: "2",
      NOTTRADEED: "3",
      REVOKING: "5",
      REVOKINGPARTLY: "6",
      REVOKEDPARTLY: "7",
      REVOKED: "8",
      UNKNOWN: "",
      FAILED: "9",
      TEXT: [
        "交易中",
        "部分成交",
        "全部成交",
        "未成交",
        "未知",
        "撤单中",
        "部分撤单中",
        "部成部撤",
        "全部撤单",
        "委托无效",
        "未知",
      ],
    },
  },
  x = function (t) {
    return (t >= "0930" && t <= "1130") || (t >= "1300" && t <= "1500");
  },
  v = {
    options: { styleIsolation: "shared" },
    components: {
      MarketIndex: function () {
        return "../common/MarketIndex.js";
      },
      Compare: function () {
        return "../common/Compare.js";
      },
      Tabbar: function () {
        return "../tabs/mp.js";
      },
      MarketIcon: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/MarketIcon.js";
      },
      KcbEtfCard: function () {
        return "./kch/KcbEtfCard.js";
      },
      WzqInfoModal: function () {
        return "../../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    mixins: [
      {
        filters: {
          bigNumberToText: function (t, e, n) {
            return (
              (n = void 0 === n ? 2 : n),
              (e = e || ""),
              (t =
                (t = parseFloat(t || 0)) < Math.pow(10, 4)
                  ? t.toFixed(n)
                  : t >= Math.pow(10, 4) && t < Math.pow(10, 8)
                  ? "".concat((t / 1e4).toFixed(n), "万")
                  : t >= Math.pow(10, 8) && t < Math.pow(10, 11)
                  ? "".concat((t / 1e8).toFixed(n), "亿")
                  : t >= Math.pow(10, 11) && t < Math.pow(10, 12)
                  ? "".concat((t / 1e11).toFixed(n), "千亿")
                  : t >= Math.pow(10, 12) && t < Math.pow(10, 16)
                  ? "".concat((t / 1e12).toFixed(n), "万亿")
                  : "".concat((t / Math.pow(10, 16)).toFixed(n), "兆")) +
                (e || "")
            );
          },
          getQuotePrefix: function (t, e, n) {
            if (/^[\d.]$/.test(t) || /^[\d.]$/.test(e)) return "peace";
            var i = +t - +e;
            return i < 0 ? "drop" : 0 !== i || n ? "rise" : "peace";
          },
          profitHundredThousands: function (t, e, n) {
            return !t ||
              !e ||
              /\b28\b/.test(n) ||
              /\b91\b/.test(n) ||
              /\b182\b/.test(n)
              ? "-"
              : this.$options.filters.bigNumberToText(
                  e * ((1e5 * t) / 100 / 365),
                  null,
                  3
                );
          },
          btnPrefix: function (t) {
            return q.STATE.NOTTRADEED === t.trade_state
              ? "untrade"
              : q.STATE.FAILED === t.trade_state
              ? "fail"
              : this.data.revoking[t._jsid] ||
                "2" === t.can_cancel ||
                -1 <
                  [q.STATE.REVOKING, q.STATE.REVOKINGPARTLY].indexOf(
                    t.trade_state
                  )
              ? "revoking"
              : t.trade_state === q.STATE.REVOKED
              ? "revoked"
              : "1" === t.can_cancel
              ? "revoke"
              : "1" === t.is_due
              ? "finished"
              : t._isToday || "0" === t.is_due
              ? "pending"
              : void this.logger.warn("unknown record state", t);
          },
          formatDisplayMoney: function (t) {
            return t
              ? this.$options.filters.bigNumberToText(t, "元", t > 1e4 ? 2 : 0)
              : "-";
          },
          profitExpectedRecord: function (t) {
            return isNaN(+t)
              ? "-"
              : this.$options.filters.bigNumberToText(t, "元", 2);
          },
          formatTimeStr: function (t) {
            return t ? t.split(" ")[0] : "未知时间";
          },
        },
      },
    ],
    inject: {
      hqBridge: { default: function () {} },
      theme: {
        default: function () {
          return "light";
        },
      },
      isAccountOpen: {
        default: function () {
          return !1;
        },
      },
    },
    props: {
      type: { type: String, default: "" },
      userInfo: { type: Object, default: function () {} },
      barHeight: { type: Number, default: 0 },
      outerSwiperHeight: { type: Number, default: 0 },
    },
    data: function () {
      var t;
      return {
        isTradeTime: !1,
        info: null,
        chart: null,
        chartData: [],
        newCount: -1,
        newStock: "",
        timer: null,
        rank: 0,
        rankName: "涨幅",
        dataItem: "zdf",
        chyFundType: "inner",
        allStockList: {},
        stockList: [],
        innerFundList: [],
        outerFundList: [],
        fundList: [],
        isBroker: y.isBroker,
        pageScrollTop: 0,
        rankTypeList: [
          {
            id: 0,
            name: "涨幅榜",
            rankName: "涨幅",
            dataItem: "zdf",
            key: "priceRatio_down",
          },
          {
            id: 1,
            name: "跌幅榜",
            rankName: "跌幅",
            dataItem: "zdf",
            key: "priceRatio_up",
          },
          {
            id: 2,
            name: "换手榜",
            rankName: "换手率",
            dataItem: "hsl",
            key: "exchange_down",
          },
          {
            id: 3,
            name: "成交额",
            rankName: "成交额",
            dataItem: "turnover",
            key: "turnover_down",
          },
          {
            id: 4,
            name: "涨速榜",
            rankName: "5分钟涨速",
            dataItem: "speed",
            key: "speed_down",
          },
          {
            id: 5,
            name: "净流入",
            rankName: "主力净流入",
            dataItem: "zljlr",
            key: "netMainIn_down",
          },
          {
            id: 6,
            name: "振幅榜",
            rankName: "振幅",
            dataItem: "zf",
            key: "amplitude_down",
          },
          {
            id: 7,
            name: "量比榜",
            rankName: "量比",
            dataItem: "lb",
            key: "volumeRatio_down",
          },
        ],
        fundTabs: [
          { id: 0, name: "场内基金", key: "inner" },
          { id: 1, name: "场外基金", key: "outer" },
        ],
        fundIndex: 0,
        env: this.hqBridge.ENV,
        webscrolltouch: !1,
        showTipModal: !1,
        tipModalConfig: {},
        scrollHeight: 550,
        mpTriggered: !1,
        mpRefreshing: !1,
        enabled: !1,
        swiperIndex: 0,
        chartHash: "",
        chartConfig: {
          id: "".concat(this.type, "Chart"),
          pixelRatio:
            "mp" === this.hqBridge.ENV
              ? null == (t = y.wx$1.getSystemInfoSync())
                ? void 0
                : t.pixelRatio
              : window.devicePixelRatio,
          padding: 0,
        },
      };
    },
    computed: {
      tabs: function () {
        return this.rankTypeList;
      },
      indexData: function () {
        return this.info && this.info.index && this.info.index[0]
          ? {
              n: this.info.index[0].name,
              price: this.info.index[0].zxj,
              zde:
                this.info.index[0].zd > 0
                  ? "+".concat(this.info.index[0].zd)
                  : this.info.index[0].zd,
              zdf:
                this.info.index[0].zdf > 0
                  ? "+".concat(this.info.index[0].zdf)
                  : this.info.index[0].zdf,
            }
          : {};
      },
      indexKCHData: function () {
        return function (t) {
          if (t)
            return {
              n: t.name,
              price: t.zxj,
              zde: t.zd > 0 ? "+".concat(t.zd) : t.zd,
              zdf: t.zdf > 0 ? "+".concat(t.zdf) : t.zdf,
            };
        };
      },
      boardName: function () {
        return "chy" === this.type ? "创业板" : "科创板";
      },
      fundTitle: function () {
        return [
          "基金名称",
          "inner" === this.fundType ? "最新价" : "最新净值",
          "inner" === this.fundType ? "涨跌幅" : "日涨幅",
        ];
      },
      fundType: function () {
        return "chy" === this.type ? this.chyFundType : "kchFund";
      },
      isShowDaxin: function () {
        return "mini" !== this.hqBridge.ENV;
      },
      isShowFund: function () {
        return "oem" !== this.hqBridge.ENV;
      },
      isH5OrWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isMpWzq: function () {
        return !0;
      },
      swiper: function () {
        var t;
        return null == (t = this.$refs.marketIndex) ? void 0 : t.swiper;
      },
      scrollStyle: function () {
        return "width: 100%; height: ".concat(this.scrollHeight, "px;");
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
    destroyed: function () {
      var t, e;
      clearTimeout(this.timer),
        null == (e = null == (t = this.$refs) ? void 0 : t.scroll) ||
          e.removeEventListener("scroll", this.onScroll, !0);
    },
    created: function () {
      return g(
        this,
        null,
        i().mark(function t() {
          var e,
            n,
            o,
            r,
            a = this;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((e = new Date()
                        .toTimeString()
                        .slice(0, 5)
                        .replace(":", "")),
                      (this.isTradeTime = x(e)),
                      this.getData().then(function () {
                        a.$emit("loaded");
                      }),
                      "mini" === this.hqBridge.ENV)
                    ) {
                      t.next = 13;
                      break;
                    }
                    return (
                      (t.prev = 2),
                      (t.next = 5),
                      w.HqAPI.getHSNewStock(this.hqBridge)
                    );
                  case 5:
                    (n = t.sent),
                      (o = "chy" === this.type ? "CYB" : "KCB"),
                      (r = n.data.sgrq.filter(function (t) {
                        return t.gp_type === "GP-A-".concat(o);
                      })),
                      (this.newCount = r.length),
                      1 === this.newCount && (this.newStock = r[0].name),
                      (t.next = 13);
                    break;
                  case 11:
                    (t.prev = 11), (t.t0 = t.catch(2));
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[2, 11]]
          );
        })
      );
    },
    mounted: function () {
      var t = this;
      if (this.isWzq) {
        var e = document.documentElement.clientWidth || 375;
        (this.screenRatio = e / 375),
          (this.winHeight =
            document.documentElement.clientHeight ||
            document.body.clientHeight),
          this.$refs.scroll &&
            this.$refs.scroll.addEventListener("scroll", this.onScroll, !0);
      } else {
        var n = (null == getApp ? void 0 : getApp().globalData).rpxToPx(208),
          i =
            (y.wx$1.getWindowInfo && y.wx$1.getWindowInfo()) ||
            y.wx$1.getSystemInfoSync(),
          o = i.screenWidth,
          r = i.screenHeight;
        (this.screenRatio = o / 375),
          (this.winHeight = r),
          (this.scrollHeight =
            this.winHeight - (this.barHeight || n) - 44 * this.screenRatio),
          setTimeout(function () {
            t.enabled = !0;
          }, 1e3);
      }
    },
    methods: {
      chunk: y.chunk,
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
      afterSwitchTab: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        this.swiperIndex = e;
        var n = "kch" === this.type ? "kcb" : this.type;
        this.hqBridge.report(
          "hq.choose_hq.".concat(n, ".index_page_slide_click"),
          { page: e }
        );
      },
      getText: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = parseFloat(1e4 * +t || 0);
        return 0 === n
          ? "--"
          : n < 0
          ? "-".concat(T.utils.bigNumberToText(Math.abs(n)), "元")
          : "".concat(e ? "+" : "").concat(T.utils.bigNumberToText(n), "元");
      },
      colorFormat: function (t) {
        var e = +t;
        return e > 0 ? "red" : e < 0 ? "green" : "gray";
      },
      showModelTip: function () {
        "wzq" !== this.env
          ? ((this.showTipModal = !0),
            (this.tipModalConfig = {
              title: "计算方法",
              content: [
                {
                  type: "text",
                  text: "成交额是由".concat(
                    "chy" === this.type ? "创业板指的成份股" : "科创板全部股票",
                    "成交额统计。"
                  ),
                },
              ],
              cancelBtn: "我知道了",
            }),
            y.StockBridge.report(
              "hq.choose_hq.".concat(this.type, "_cje_tip_click")
            ))
          : this.$modal.alert({
              title: "计算方法",
              content:
                '<div class="st-modal-etf">\n                      <div class="content">成交额是由'.concat(
                  "chy" === this.type ? "创业板指的成份股" : "科创板全部股票",
                  "成交额统计。</div>\n                    </div>"
                ),
              confirmBtn: "我知道了",
            });
      },
      tabActivated: function () {
        var t,
          e,
          n = new Date().toTimeString().slice(0, 5).replace(":", "");
        (this.isTradeTime = x(n)),
          this.getData(),
          null == (e = null == (t = this.$refs.scroll) ? void 0 : t.scrollTo) ||
            e.call(t, 0, this.pageScrollTop),
          this.isWzq && this.tabScrollIntoView(this.rank),
          this.$refs.kchetf && this.$refs.kchetf.getListIndexStorage();
      },
      tabDeactivated: function () {
        clearTimeout(this.timer),
          this.$refs.kchetf && this.$refs.kchetf.setListIndexStorage();
      },
      onScroll: function (t) {
        var e;
        this.$emit("onTabScroll", t),
          (this.pageScrollTop =
            null == (e = null == t ? void 0 : t.target) ? void 0 : e.scrollTop);
      },
      tabScrollIntoView: function (t) {
        var e,
          n,
          i = this;
        try {
          if ("undefined" != typeof document) {
            var o =
                (null ==
                (e = null == document ? void 0 : document.documentElement)
                  ? void 0
                  : e.clientWidth) / 2 || 188,
              r = Array.from(document.querySelectorAll(".tabbar-row")),
              a =
                r &&
                r.find(function (t) {
                  return (
                    t.dataset &&
                    ("chy" === i.type
                      ? "chytabs" === t.dataset.typeid
                      : "kchtabs" === t.dataset.typeid)
                  );
                }),
              c =
                this.$refs["tabbar".concat(t)] &&
                (null == (n = this.$refs["tabbar".concat(t)][0])
                  ? void 0
                  : n.$el);
            a && c && c.offsetLeft && (a.scrollLeft = c.offsetLeft - o);
          } else {
            var s = y.wx$1.getSystemInfoSync().windowWidth / 2 || 188;
            y.wx$1
              .createSelectorQuery()
              .selectAll(".tabbar-row")
              .boundingClientRect(function (e) {
                var n = e.find(function (t) {
                    return (
                      t.dataset &&
                      ("chy" === i.type
                        ? "chytabs" === t.dataset.typeid
                        : "kchtabs" === t.dataset.typeid)
                    );
                  }),
                  o = i.selectComponent("#tabbar".concat(t));
                n &&
                  o &&
                  y.index.pageScrollTo({
                    scrollLeft: o.left - s,
                    duration: 300,
                  });
              })
              .exec();
          }
        } catch (t) {}
      },
      refresh: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$emit("onPullingDown"),
                        clearTimeout(this.timer),
                        (t.next = 4),
                        this.getData()
                      );
                    case 4:
                      this.isWzq &&
                        (null ==
                          (o =
                            null ==
                            (n =
                              null == (e = null == this ? void 0 : this.$refs)
                                ? void 0
                                : e.refresh)
                              ? void 0
                              : n.stopPullDownRefresh) ||
                          o.call(n));
                    case 5:
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
      getData: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e,
              n,
              o,
              r,
              a = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), "chy" !== this.type)) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (t.next = 4),
                        w.HqAPI.getChyRank(this.hqBridge, { _appver: "11.10" })
                      );
                    case 4:
                      (t.t0 = t.sent), (t.next = 10);
                      break;
                    case 7:
                      return (
                        (t.next = 9),
                        w.HqAPI.getKchRank(this.hqBridge, { _appver: "11.10" })
                      );
                    case 9:
                      t.t0 = t.sent;
                    case 10:
                      (e = t.t0),
                        (n = e.data),
                        (this.info =
                          ((o = m(
                            m(
                              m(
                                { index: n.index },
                                n.fundflow && n.fundflow.todayFundFlow
                              ),
                              n.updowncount
                            ),
                            n.market
                          )),
                          (r = { etf: n.etf || [] }),
                          h(o, d(r)))),
                        (this.chartData = []),
                        n.fundflow &&
                          n.fundflow.todayFundTrend &&
                          n.fundflow.todayFundTrend.length > 0 &&
                          n.fundflow.todayFundTrend.map(function (t, e) {
                            a.chartData.push({
                              time: e,
                              value: +t.MainNetInflow,
                            });
                          }),
                        !this.isWzq &&
                          this.chartData.length > 0 &&
                          this.$nextTick(function () {
                            return (a.chartHash = String(Math.random()));
                          }),
                        (this.allStockList = n.rank || {}),
                        this.switchRankData(this.rank, !0),
                        "chy" === this.type
                          ? ((this.innerFundList =
                              n.fundrank_inner.priceRatio_down || []),
                            (this.outerFundList =
                              n.fundrank_outer.priceRatio_down || []),
                            this.switchFundType(this.chyFundType, !0))
                          : (this.fundList = (
                              n.fundrank.priceRatio_down || []
                            ).slice(0, 10)),
                        (t.next = 17);
                      break;
                    case 15:
                      (t.prev = 15), (t.t1 = t.catch(0));
                    case 17:
                      this.isTradeTime &&
                        (this.timer = setTimeout(function () {
                          a.getData();
                        }, 5e3));
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 15]]
            );
          })
        );
      },
      drawChart: function (t) {
        var e = t.chart,
          n =
            "mp" === this.hqBridge.ENV
              ? "#e58228"
              : getComputedStyle(document.documentElement).getPropertyValue(
                  "--color-orange"
                );
        e.legend(!1),
          e.tooltip(!1),
          e.source(this.chartData, { time: { min: 0, max: 240 } }),
          e.axis("time", !1),
          e.axis("value", !1),
          e
            .area({ startOnZero: !1 })
            .position("time*value")
            .color(n || "#FF8920"),
          e
            .line()
            .position("time*value")
            .color(n || "#FF891E")
            .size(2),
          e.render();
      },
      switchRankData: function (t, e) {
        (this.rank = t), this.isWzq && this.tabScrollIntoView(this.rank);
        var n =
          this.tabs &&
          this.tabs.find(function (e) {
            return e.id === t;
          });
        if (
          (n &&
            ((this.rankName = n.rankName || ""),
            (this.dataItem = n.dataItem || ""),
            (this.stockList = this.allStockList[n.key] || [])),
          !e)
        ) {
          var i = this.dataItem;
          "zdf" === i && (i = "涨幅" === this.rankName ? "rise" : "fall");
          var o = "chy" === this.type ? "chy" : "kcb";
          this.hqBridge.report(
            "hq.choose_hq.".concat(o, ".").concat(i, "_rank_click")
          );
        }
      },
      switchFundType: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (this.chyFundType = 0 === t ? "inner" : 1 === t ? "outer" : t),
          (this.fundIndex = "inner" === this.chyFundType ? 0 : 1),
          (this.fundList =
            "inner" === this.chyFundType
              ? this.innerFundList
              : this.outerFundList),
          !e && this.hqBridge.report("hq.choose_hq.chy.switch_fund");
      },
      formatRankData: function (t) {
        var e = (+t[this.dataItem]).toFixed(2);
        return (
          "zdf" === this.dataItem
            ? (e = e > 0 ? "+".concat(e) : e)
            : "turnover" === this.dataItem
            ? ("chy" === this.type && (e *= 1e4),
              (e = this.$options.filters.bigNumberToText(e)))
            : "zljlr" === this.dataItem &&
              ((e *= 1e4), (e = this.$options.filters.bigNumberToText(e))),
          "turnover" !== this.dataItem &&
            "lb" !== this.dataItem &&
            "zljlr" !== this.dataItem &&
            (e = "".concat(e, "%")),
          e
        );
      },
      formatFundData: function (t) {
        return "".concat((t = (+t).toFixed(2)) > 0 ? "+".concat(t) : t, "%");
      },
      getPriceClass: function (t) {
        return this.getClass(t.zd);
      },
      getRankDataClass: function (t) {
        var e = "",
          n = t[this.dataItem];
        return (
          ("zdf" !== this.dataItem && "zljlr" !== this.dataItem) ||
            (e = this.getClass(n)),
          e
        );
      },
      getClass: function (t) {
        return +t > 0 ? "red" : 0 == +t ? "gray" : +t < 0 ? "green" : void 0;
      },
      getFontSize: function (t) {
        return "mp" === this.hqBridge.ENV
          ? t.length <= 10
            ? "0.32rem"
            : t.length <= 14
            ? 0.32 - 0.02 * (t.length - 10) + "rem"
            : "0.24rem"
          : t.length <= 10
          ? "0.4rem"
          : t.length <= 14
          ? 0.4 - 0.03 * (t.length - 10) + "rem"
          : "0.28rem";
      },
      gotoStock: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "chy" === this.type ? "0" : "1";
        "wzq" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              name: "HqStock",
              params: { market: n, code: t.code.slice(2) },
              query: {
                detailTitle: ""
                  .concat(t.name, "(")
                  .concat(t.code.substr(2), ")"),
              },
            })
          : "oem" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: "/detail",
              query: { market: n, scode: t.code.slice(2) },
            })
          : "mini" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: "/detail",
              query: { type: n, scode: t.code.slice(2) },
            })
          : y.StockBridge.routeTo({
              url: "/pages/quote/quote?scode="
                .concat(t.code.slice(2), "&market=")
                .concat(n),
            }),
          e ||
            this.hqBridge.report(
              "hq.choose_hq.".concat(
                "chy" === this.type ? "chy" : "kcb",
                ".hot_list_stock_click"
              ),
              { stockid: null == t ? void 0 : t.code }
            );
      },
      gotoIndex: function () {
        "chy" === this.type
          ? (this.hqBridge.report("hq.choose_hq.chy.go_index"),
            this.gotoStock({ code: "sz399006", name: "创业板指" }, !0))
          : (this.hqBridge.report("hq.choose_hq.kcb.go_index"),
            this.gotoStock({ code: "sh000688", name: "科创50" }, !0));
      },
      gotoKCHIndex: function (t) {
        var e = t.code,
          n = t.name;
        "chy" === this.type
          ? this.hqBridge.report("hq.choose_hq.chy.go_index", { stockid: e })
          : this.hqBridge.report("hq.choose_hq.kcb.go_index", { stockid: e }),
          this.gotoStock({ code: e, name: n }, !0);
      },
      gotoFund: function (t) {
        "inner" === this.fundType && this.gotoStock(t);
      },
      gotoNew: function () {
        "wzq" !== this.hqBridge.ENV
          ? this.hqBridge.busEmit("navigateToTrade")
          : this.hqBridge.busEmit("wzq-yijiandaxin", { market: this.type });
      },
      gotoHangqingxinzhai: function () {
        this.hqBridge.report(
          "hq.choose.hq.".concat(this.type, ".calendar_click")
        ),
          y.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?market=hs&type=stock&timestamp=".concat(
              Date.now()
            )
          ),
          this.hqBridge.routeTo({
            path: y.isBroker ? "/wj_hq/hangqingxinzhai" : "/hangqingxinzhai",
            query: { market: "hs", type: "stock", timestamp: Date.now() },
          });
      },
      gotoTeach: function () {
        var t = "chy" === this.type ? "chy" : "kcb";
        this.hqBridge.report("hq.choose_hq.".concat(t, ".wanzhuan")),
          "oem" === this.hqBridge.ENV
            ? this.hqBridge.routeTo({
                path: "/wj_hq/".concat(this.type, "/popularization"),
              })
            : ("mini" === this.hqBridge.ENV || "wzq" === this.hqBridge.ENV) &&
              this.hqBridge.routeTo({
                path: "/".concat(this.type, "/popularization"),
              }),
          y.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/".concat(
              this.type,
              "/popularization"
            )
          );
      },
      gotoFundList: function () {
        var t = "inner" === this.fundType ? "inner" : "outer";
        this.hqBridge.report("hq.choose_hq.chy.more_".concat(t, "_fund")),
          y.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/chy/fundList?fundType=".concat(
              this.fundType,
              "&boardType=GEM"
            )
          ),
          "oem" === this.hqBridge.ENV
            ? this.hqBridge.routeTo({
                path: y.isBroker ? "/wj_hq/chy/fundList" : "/chy/fundList",
                query: { fundType: this.fundType, boardType: "GEM" },
              })
            : ["mini", "wzq"].includes(this.hqBridge.ENV) &&
              this.hqBridge.routeTo({
                path: "/chy/fundList",
                query: { fundType: this.fundType, boardType: "GEM" },
              });
      },
      showTip: function () {
        var t = this.isH5OrWzq ? "h5-or-wzq-modal" : "",
          e = "chy" === this.type ? "创业板" : "科创板";
        this.hqBridge.report("hq.choose_hq.".concat(this.type, ".cjl_toujiao")),
          this.$modal.alert({
            title: "关于".concat(e),
            content: '<div class="st-modal-kch '
              .concat(
                t,
                '">\n                    <div class="title">总成交量/额</div>\n                    <div class="content">所有'
              )
              .concat(
                e,
                '股票当日成交量和成交额的总和。</div>\n                    <div class="title title2">主力净流入</div>\n                    <div class="content">所有'
              )
              .concat(
                e,
                "股票的当日的主力流入与主力流出之差。</div>\n                  </div>"
              ),
            confirmBtn: "我知道了",
          });
      },
      showFundTip: function () {
        if ("wzq" === this.env)
          return (
            this.$modal.alert({
              title: "关于创业板基金",
              content:
                '<div class="st-modal-etf"><div class="content">创业板基金为投资指数成份股，以追踪指数表现的场内外基金。</div></div>',
              confirmBtn: "我知道了",
            }),
            void y.StockBridge.report(
              "hq.choose_hq.".concat(this.type, "_fund_tip_click")
            )
          );
        (this.showTipModal = !0),
          (this.tipModalConfig = {
            title: "关于创业板基金",
            content: [
              {
                type: "text",
                text: "创业板基金为投资指数成份股，以追踪指数表现的场内外基金。",
              },
            ],
            cancelBtn: "我知道了",
          }),
          y.StockBridge.report(
            "hq.choose_hq.".concat(this.type, "_fund_tip_click")
          );
      },
    },
  };
Array ||
  (
    y.resolveComponent("market-index") +
    y.resolveComponent("compare") +
    y.resolveComponent("KcbEtfCard") +
    y.resolveComponent("Tabbar") +
    y.resolveComponent("market-icon") +
    y.resolveComponent("WzqInfoModal")
  )();
var S = y._export_sfc(v, [
  [
    "render",
    function (t, e, n, i, o, r) {
      return y.e(
        { a: o.info },
        o.info
          ? y.e(
              { b: o.info.index },
              o.info.index
                ? y.e(
                    { c: o.info.index && o.info.index.length <= 3 },
                    o.info.index && o.info.index.length <= 3
                      ? {
                          d: y.f(o.info.index, function (t, e, i) {
                            return {
                              a: "0b5f4460-0-" + i,
                              b: y.p({
                                data: r.indexKCHData(t),
                                market: n.type,
                              }),
                              c: e,
                              d: y.o(
                                function (e) {
                                  return r.gotoKCHIndex(t);
                                },
                                3946,
                                e
                              ),
                            };
                          }),
                        }
                      : {},
                    { e: o.info.index && o.info.index.length > 3 },
                    o.info.index && o.info.index.length > 3
                      ? y.e(
                          {
                            f: y.f(
                              r.chunk(o.info.index, 3),
                              function (t, e, i) {
                                return {
                                  a: y.f(t, function (t, e, o) {
                                    return {
                                      a: "0b5f4460-1-" + i + "-" + o,
                                      b: y.p({
                                        data: r.indexKCHData(t),
                                        market: n.type,
                                      }),
                                      c: e,
                                      d: y.o(
                                        function (e) {
                                          return r.gotoKCHIndex(t);
                                        },
                                        3947,
                                        e
                                      ),
                                    };
                                  }),
                                  b: e,
                                };
                              }
                            ),
                            g: o.swiperIndex,
                            h: y.o(function () {
                              return (
                                r.afterSwitchTab &&
                                r.afterSwitchTab.apply(r, arguments)
                              );
                            }, 3948),
                            i: r.chunk(o.info.index, 3).length > 1,
                          },
                          r.chunk(o.info.index, 3).length > 1
                            ? {
                                j: y.f(
                                  r.chunk(o.info.index, 3),
                                  function (t, e, n) {
                                    return {
                                      a: e,
                                      b: y.n(
                                        o.swiperIndex === e ? "cur-dot" : ""
                                      ),
                                    };
                                  }
                                ),
                              }
                            : {}
                        )
                      : {}
                  )
                : {},
              { k: o.info && o.info.amount && o.info.amount.now },
              o.info && o.info.amount && o.info.amount.now
                ? {
                    l: y.t(o.info.amount.now && r.getText(o.info.amount.now)),
                    m: y.o(function () {
                      return (
                        r.showModelTip && r.showModelTip.apply(r, arguments)
                      );
                    }, 3949),
                    n: y.t(
                      o.info.amount.change &&
                        r.getText(o.info.amount.change, !0)
                    ),
                    o: y.n(r.colorFormat(o.info.amount.change)),
                  }
                : {},
              { p: y.t(o.info.up), q: o.info.uplimit > 0 },
              o.info.uplimit > 0 ? { r: y.t(o.info.uplimit) } : {},
              {
                s: y.t(o.info.down),
                t: y.p({
                  red: +o.info.up,
                  green: +o.info.down,
                  normal: +o.info.flat,
                }),
                v: y.n("basic-wrapper-".concat(o.env)),
                w: r.isShowDaxin,
              },
              r.isShowDaxin
                ? y.e(
                    { x: o.newCount > 0 },
                    o.newCount > 0
                      ? y.e(
                          { y: 1 === o.newCount },
                          1 === o.newCount
                            ? { z: y.t(o.newStock) }
                            : { A: y.t(o.newCount), B: y.t(r.boardName) },
                          {
                            C: y.o(function (t) {
                              return r.gotoNew();
                            }, 3950),
                          }
                        )
                      : 0 === o.newCount
                      ? { E: y.t(r.boardName) }
                      : {},
                    {
                      D: 0 === o.newCount,
                      F: y.n(r.isH5OrWzq ? "h5-or-wzq-new-stock" : ""),
                      G: y.o(function (t) {
                        return r.gotoHangqingxinzhai();
                      }, 3951),
                    }
                  )
                : {},
              { H: "ZHONGXIN" !== o.isBroker },
              "ZHONGXIN" !== o.isBroker
                ? {
                    I: y.t(r.boardName),
                    J: k._imports_0,
                    K: y.o(function (t) {
                      return r.gotoTeach();
                    }, 3952),
                  }
                : {},
              { L: "kch" === n.type && o.info.etf && o.info.etf.length > 0 },
              ("kch" === n.type && o.info.etf && o.info.etf.length, {}),
              { M: "kch" === n.type && o.info.etf && o.info.etf.length > 0 },
              "kch" === n.type && o.info.etf && o.info.etf.length > 0
                ? {
                    N: y.sr("kchetf", "0b5f4460-3"),
                    O: y.p({ "etf-data": o.info.etf }),
                  }
                : {},
              {
                P: y.o(r.switchRankData, 3953),
                Q: y.o(function (e) {
                  return t.$emit("stopSwiperScroll");
                }, 3954),
                R: y.o(function (e) {
                  return t.$emit("startSwiperScroll");
                }, 3955),
                S: y.p({
                  "cur-index": o.rank,
                  "tab-config": r.tabs,
                  "show-more": !1,
                }),
                T: y.t(o.rankName),
                U: y.f(o.stockList, function (t, e, i) {
                  return {
                    a: y.t(t.name),
                    b: "0b5f4460-5-" + i,
                    c: y.p({
                      market: "chy" === n.type ? "0" : "1",
                      type: t.stock_type,
                    }),
                    d: y.t(t.code.slice(2)),
                    e: y.t((+t.zxj).toFixed(2)),
                    f: y.n(r.getPriceClass(t)),
                    g: y.t(r.formatRankData(t)),
                    h: y.n(r.getRankDataClass(t)),
                    i: e,
                    j: y.o(
                      function (e) {
                        return r.gotoStock(t);
                      },
                      3956,
                      e
                    ),
                  };
                }),
                V: r.isShowFund && "chy" === n.type,
              },
              r.isShowFund && "chy" === n.type
                ? y.e(
                    { W: y.t(r.boardName), X: "chy" === n.type },
                    "chy" === n.type
                      ? {
                          Y: y.o(function (t) {
                            return r.showFundTip();
                          }, 3957),
                        }
                      : {},
                    { Z: "chy" === n.type },
                    "chy" === n.type
                      ? {
                          aa: y.o(r.switchFundType, 3958),
                          ab: y.p({
                            "cur-index": o.fundIndex,
                            "tab-config": o.fundTabs,
                            "show-more": !1,
                          }),
                        }
                      : {},
                    {
                      ac: y.f(r.fundTitle, function (t, e, n) {
                        return { a: y.t(t), b: t };
                      }),
                      ad: y.f(o.fundList, function (t, e, i) {
                        return y.e(
                          {
                            a: y.t(t.name.slice(0, 14)),
                            b: r.getFontSize(t.name),
                          },
                          "chy" === n.type
                            ? {
                                c: "0b5f4460-7-" + i,
                                d: y.p({
                                  market:
                                    "inner" === o.chyFundType ? "cnjj" : "cwjj",
                                }),
                              }
                            : {
                                e: "0b5f4460-8-" + i,
                                f: y.p({ market: "cwjj" }),
                              },
                          {
                            g: y.t(t.code.slice(2)),
                            h: y.t((+t.fund_value).toFixed(4)),
                            i: y.t(r.formatFundData(t.zdf)),
                            j: y.n(r.getClass(t.zdf)),
                            k: e,
                            l: y.o(
                              function (e) {
                                return r.gotoFund(t);
                              },
                              3959,
                              e
                            ),
                          }
                        );
                      }),
                      ae: "chy" === n.type,
                      af: "chy" === n.type,
                    },
                    "chy" === n.type
                      ? {
                          ag: k._imports_0,
                          ah: y.n(r.isH5OrWzq ? "h5-or-wzq-more" : ""),
                          ai: y.o(function (t) {
                            return r.gotoFundList();
                          }, 3960),
                        }
                      : {}
                  )
                : {}
            )
          : {},
        {
          aj: y.s(r.scrollStyle),
          ak: o.enabled,
          al: o.mpTriggered,
          am: y.o(function () {
            return r.mpStartPull && r.mpStartPull.apply(r, arguments);
          }, 3961),
          an: y.o(function () {
            return r.mpPullEnd && r.mpPullEnd.apply(r, arguments);
          }, 3962),
          ao: y.o(function () {
            return r.mpPullRefresh && r.mpPullRefresh.apply(r, arguments);
          }, 3963),
          ap: y.o(function () {
            return r.onScroll && r.onScroll.apply(r, arguments);
          }, 3964),
          aq: r.isMpWzq,
        },
        r.isMpWzq
          ? y.e(
              { ar: o.showTipModal },
              o.showTipModal
                ? {
                    as: y.o(function (t) {
                      return (o.showTipModal = !1);
                    }, 3965),
                    at: y.p({ skin: r.theme, config: o.tipModalConfig }),
                  }
                : {}
            )
          : {},
        { av: y.n(o.webscrolltouch ? "wrapper-touch" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-0b5f4460"],
]);
wx.createComponent(S);
