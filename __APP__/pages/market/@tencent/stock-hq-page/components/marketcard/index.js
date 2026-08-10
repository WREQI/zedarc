require("../../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (t, e, i) {
    return e in t
      ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  h = function (t, e) {
    for (var i in e || (e = {})) o.call(e, i) && l(t, i, e[i]);
    if (a) {
      var n,
        s = r(a(e));
      try {
        for (s.s(); !(n = s.n()).done; ) {
          i = n.value;
          c.call(e, i) && l(t, i, e[i]);
        }
      } catch (t) {
        s.e(t);
      } finally {
        s.f();
      }
    }
    return t;
  },
  u = function (t, e, i) {
    return new Promise(function (n, r) {
      var s = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(s, a);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  f = require("../../Index.js"),
  k = require("../../../stock-hq-core/utils/storage/local.js");
require("../../../../js-cookie/src/js.cookie.js");
var m = require("../../../stock-hq-core/utils/market.js"),
  p = require("../../node-modules/throttle-debounce/esm/index.js"),
  g = require("../../../stock-hq-data/index.js"),
  v = {
    options: { styleIsolation: "shared" },
    components: {
      MarketIndex: function () {
        return "../common/MarketIndex.js";
      },
      PlateCard: function () {
        return "./PlateCard.js";
      },
      CrossBorder: function () {
        return "./CrossBorder.js";
      },
      "st-checkbox": function () {
        return "../common/Checkbox.js";
      },
      Tabbar: function () {
        return "../tabs/mp.js";
      },
      MarketInterpretation: function () {
        return "./market-info-bar/MarketInterpretation.js";
      },
      MarketAnalysis: function () {
        return "./market-analysis/index.js";
      },
      HangqingBar: function () {
        return "./HangqingBar.js";
      },
      FunctionArea: function () {
        return "./hs/function-area/index.js";
      },
      MarketIcon: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/MarketIcon.js";
      },
      EtfRankList: function () {
        return "./etf/RankList.js";
      },
      DaxinCalendar: function () {
        return "./hs/daxin-calendar/index.js";
      },
      WzqInfoModal: function () {
        return "../../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
      Status: function () {
        return "../../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
      PlateContainer: function () {
        return "../plate/plate-container/PlateContainerOne.js";
      },
    },
    inject: {
      hqBridge: { default: function () {} },
      isAccountOpen: {
        default: function () {
          return !1;
        },
      },
      theme: {
        default: function () {
          return "light";
        },
      },
    },
    props: {
      market: { type: String, default: "" },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      helper: { type: Object, default: function () {} },
      tabOnShow: { type: Boolean, default: !0 },
      indexRefreshType: { type: String, default: "" },
      rankFold: { type: Boolean, default: !1 },
      hkVIP: { type: Boolean, default: !1 },
      barHeight: { type: Number, default: 0 },
      outerSwiperHeight: { type: Number, default: 0 },
    },
    data: function () {
      return {
        data: null,
        prevTime: 0,
        currTime: 0,
        stockRank: null,
        isShowStockBrief: !1,
        showBtn: {},
        folded: {},
        isShowBriefTip: !1,
        isBroker: d.isBroker,
        titleOptions: {
          name: "热门板块",
          isShowArrow: !0,
          isShowRedDot: !1,
          isShowDivider: !0,
        },
        showNum: 0,
        listTotal: 500,
        hsRanklistLimit: 50,
        touchEndTimeOut: null,
        curOffset: 0,
        lastPosition: void 0,
        screenRatio: 1,
        winHeight: 0,
        isHsTrading: !1,
        isHkTrading: !1,
        isUsTrading: !0,
        tradeTimer: null,
        hsrankTimer: null,
        hkrankTimer: null,
        itemHeight: 0,
        rankheadHeight: 0,
        timer: null,
        isTradeTime: !1,
        isTabDeactivated: !1,
        isLoop: !0,
        statIndex: 0,
        showStat1: !0,
        showStat2: !0,
        showETFGuide: !1,
        isScrolling: !1,
        scrollEndTimer: null,
        scrollTop: 0,
        lastScrollTop: 0,
        isHorizontalScrolling: !1,
        lastTime: null,
        webscrolltouch: !1,
        functionAreaInfo: {},
        isShowLhbBubble: !1,
        crossBorderETFList: [],
        crossBorderETFListPullingTimer: null,
        lhbBubbleHided: !0,
        daxinCalendarInfo: {},
        isDaxinCalendarShow: !1,
        isShowDaxinCalendarBubble: !1,
        daxinCalendarBubbleTimer: null,
        rankNum: 10,
        marketIndex: 0,
        rankIndex: 0,
        isLoading: !1,
        showTipModal: !1,
        tipModalConfig: {},
        scrollHeight: 550,
        mpTriggered: !1,
        mpRefreshing: !1,
        enabled: !1,
        throttledCalculate: null,
      };
    },
    computed: {
      scrollStyle: function () {
        return "width: 100%; height: ".concat(this.scrollHeight, "px;");
      },
      rankInfo: function () {
        var t, e;
        return (
          (null ==
          (e =
            null == (t = null == this ? void 0 : this.ranks) ? void 0 : t.list)
            ? void 0
            : e[this.rankIndex]) || {}
        );
      },
      ranks: function () {
        return f.RANK_META_INFO[this.market];
      },
      ranksOrderList: function () {
        return this.ranks.list;
      },
      env: function () {
        return d.StockBridge.ENV;
      },
      isShowMarketAnalysis: function () {
        return "HS" === this.market;
      },
      isHsAdvance: function () {
        return "HS" === this.market && "advance" === this.rankInfo.ranking;
      },
      isWzq: function () {
        return !1;
      },
      isHs: function () {
        return "HS" === this.market;
      },
      swiper: function () {
        var t;
        return null == (t = this.$refs.marketIndex) ? void 0 : t.swiper;
      },
      indexPages: function () {
        var t, e;
        return Math.ceil(
          (null == (e = null == (t = this.data) ? void 0 : t.mlist)
            ? void 0
            : e.length) / 3
        );
      },
      allLoaded: function () {
        var t;
        return (
          (null == (t = this.stockRank) ? void 0 : t.length) >= this.listTotal
        );
      },
      hsWzq: function () {
        return this.isHs && this.isWzq;
      },
    },
    watch: {
      barHeight: function (t) {
        this.scrollHeight = this.winHeight - t - 44 * this.screenRatio;
      },
      outerSwiperHeight: function (t) {
        this.scrollHeight = t;
      },
      indexRefreshType: function (t, e) {
        "US" === this.market &&
          ("us" === t && this.handleMarketState(),
          "us" === e && this.clearAllTimer());
      },
      hkVIP: function (t, e) {
        t && !e && this.updateHKRank();
      },
      isHsTrading: function (t) {
        t ? this.judgeTime(!0) : this.clearhsrankTimer();
      },
    },
    created: function () {
      return u(
        this,
        null,
        n().mark(function t() {
          var e,
            i = this;
          return n().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (this.detailApi ||
                        (this.detailApi = new g.DetailApi(function (t) {
                          return d.StockBridge.request(t, "GET");
                        })),
                      this.getData().then(function () {
                        i.$emit("loaded", i.data);
                      }),
                      (t.t0 = "HS" === this.market),
                      !t.t0)
                    ) {
                      t.next = 7;
                      break;
                    }
                    return (t.next = 6), this.handleMarketState();
                  case 6:
                    this.judgeTime();
                  case 7:
                    "HK" === this.market && this.updateHKRank(),
                      ["HK", "US"].includes(this.market) &&
                        this.pullCrossBorderETFList(),
                      (e = k.sls.getItem("hq.hsjtab-advance-rank-brief-show")),
                      d.StockBridge.report(
                        "hq.choose_hq.hsjtab.advance_rank_brief_state",
                        { yy_public_str1: "brief_state", yy_public_int1: +e }
                      );
                    try {
                      this.throttledCalculate = p.throttle(
                        100,
                        this.handleScroll
                      );
                    } catch (t) {
                      d.StockBridge.aegisReportEvent(
                        "MONITOR-STOCK-HQ-THROTTLED-CALCULATE-INIT-ERROR",
                        {
                          ext3: JSON.stringify({
                            market: this.market,
                            isWzq: this.isWzq,
                            errorMessage: t.message,
                            hasThrottle: "function" == typeof p.throttle,
                            hasHandleScroll:
                              "function" == typeof this.handleScroll,
                          }),
                        }
                      ),
                        (this.throttledCalculate = this.handleScroll);
                    }
                    this.checkShowETFGuide();
                  case 13:
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
    destroyed: function () {
      this.clearAllTimer(),
        this.isWzq &&
          this.$refs.scroll &&
          this.$refs.scroll.removeEventListener("scroll", this.onScroll, !0),
        (this.detailApi = null);
    },
    deactivated: function () {
      this.clearAllTimer(), (this.showNum = 0);
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
        var i = (null == getApp ? void 0 : getApp().globalData).rpxToPx(208),
          n =
            (d.wx$1.getWindowInfo && d.wx$1.getWindowInfo()) ||
            d.wx$1.getSystemInfoSync(),
          r = n.screenWidth,
          s = n.screenHeight;
        (this.screenRatio = r / 375),
          (this.winHeight = s),
          (this.scrollHeight =
            this.winHeight - (this.barHeight || i) - 44 * this.screenRatio),
          setTimeout(function () {
            t.enabled = !0;
          }, 1e3);
      }
    },
    methods: {
      chunk: d.chunk,
      mpStartPull: function () {
        this.mpTriggered = !0;
      },
      mpPullEnd: function () {
        this.mpTriggered = !1;
      },
      mpPullRefresh: function () {
        var t = this;
        if ((this.onPullingDown(), !this.mpRefreshing)) {
          this.mpRefreshing = !0;
          var e = setTimeout(function () {
            (t.mpTriggered = !1), (t.mpRefreshing = !1), clearTimeout(e);
          }, 600);
        }
      },
      toggleBrief: function (t) {
        this.isShowStockBrief = t;
      },
      stopSwiperScroll: function () {
        this.$emit("stopSwiperScroll");
      },
      startSwiperScroll: function () {
        this.$emit("startSwiperScroll");
      },
      toggleRank: function () {
        this.$emit("toggleRank");
      },
      clearAllTimer: function () {
        this.cleartradeTimer(),
          this.clearhsrankTimer(),
          this.clearhkrankTimer(),
          this.clearCrossBorderETFListPullingTimer(),
          this.scrollEndTimer &&
            (clearTimeout(this.scrollEndTimer), (this.scrollEndTimer = null));
      },
      cleartradeTimer: function () {
        this.tradeTimer && clearTimeout(this.tradeTimer),
          (this.tradeTimer = null);
      },
      clearhsrankTimer: function () {
        this.hsrankTimer && clearTimeout(this.hsrankTimer),
          (this.hsrankTimer = null);
      },
      clearhkrankTimer: function () {
        this.hkrankTimer && clearTimeout(this.hkrankTimer),
          (this.hkrankTimer = null);
      },
      clearCrossBorderETFListPullingTimer: function () {
        this.crossBorderETFListPullingTimer &&
          clearTimeout(this.crossBorderETFListPullingTimer),
          (this.crossBorderETFListPullingTimer = null);
      },
      switchRankTab: function (t) {
        (this.rankIndex = t),
          (this.curOffset = 0),
          this.getRankList(!0, !1),
          this.scrollIntoView();
        var e = (this.rankInfo || {}).rank;
        ["cje", "zf", "jlr"].includes(e)
          ? d.StockBridge.report("hq.choose_hq.hs_rank_".concat(e))
          : isNaN(e) ||
            d.StockBridge.report(
              "choose.".concat(this.market, "_rank_").concat(e)
            );
      },
      scrollIntoView: function () {
        var t,
          e,
          i,
          n = this;
        (this.isHorizontalScrolling = !0),
          null ==
            (i =
              null == (e = null == (t = this.$refs) ? void 0 : t.tabBar)
                ? void 0
                : e.scrollIntoView) || i.call(e, this.rankIndex),
          this.$nextTick(function () {
            setTimeout(function () {
              n.isHorizontalScrolling = !1;
            }, 100);
          });
      },
      afterSwitchTab: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        (this.marketIndex = e),
          f.isNumber(this.marketIndex) &&
            d.StockBridge.report(
              "hq.choose_hq.".concat(
                this.market.toLowerCase(),
                "tab.index_page_slide"
              ),
              { page: this.marketIndex }
            );
      },
      gotoEtfTab: function () {
        this.$emit("switchToETF");
      },
      showCrossETFTip: function () {
        d.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/mp/v2/index.html#/information/videoDetail?id=VD20241115175732a23ab5ae"
        );
      },
      checkShowETFGuide: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), k.sls.getItem("show-checkmore-etf");
                    case 2:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 5;
                        break;
                      }
                      t.t0 = this.showETFGuide;
                    case 5:
                      if (!t.t0) {
                        t.next = 9;
                        break;
                      }
                      (this.showETFGuide = !1), (t.next = 10);
                      break;
                    case 9:
                      (this.showETFGuide = !0),
                        k.sls.setItem("show-checkmore-etf", !0);
                    case 10:
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
      handleMarketState: function () {
        var t = this;
        return (
          this.cleartradeTimer(),
          new Promise(function (e) {
            !(function i() {
              return u(
                t,
                null,
                n().mark(function t() {
                  return n().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!this.isTabDeactivated) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              (this.cleartradeTimer(), void e())
                            );
                          case 2:
                            return (t.next = 4), this.getTradeTime();
                          case 4:
                            (this.tradeTimer = setTimeout(i, 6e3)), e();
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            })();
          })
        );
      },
      getTradeTime: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e, i, r, s, a, o, c, l, h;
            return n().wrap(
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
                      (a = t.sent),
                        (o = (
                          (null == (e = null == a ? void 0 : a.split)
                            ? void 0
                            : e.call(a, "|")) || []
                        ).map(function (t) {
                          return t.split("_");
                        })),
                        (c = o.filter(function (t) {
                          return "NEWSH" === t[0];
                        })),
                        (l = o.filter(function (t) {
                          return "NEWHK" === t[0];
                        })),
                        (h = o.filter(function (t) {
                          return "NEWUS" === t[0];
                        })),
                        (this.isHsTrading =
                          "open" ===
                          (null == (i = null == c ? void 0 : c[0])
                            ? void 0
                            : i[1])),
                        (this.isHkTrading =
                          "open" ===
                          (null == (r = null == l ? void 0 : l[0])
                            ? void 0
                            : r[1])),
                        (this.isUsTrading =
                          "open" ===
                          (null == (s = null == h ? void 0 : h[0])
                            ? void 0
                            : s[1]));
                    case 10:
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
      judgeTime: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return u(
          this,
          null,
          n().mark(function e() {
            var r,
              s,
              a,
              o,
              c = this;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((this.clearhsrankTimer(), this.isTabDeactivated)) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.prev = 1), (e.next = 4), this.getRankList(!1, !1, t)
                      );
                    case 4:
                      if ((r = e.sent)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (a = (s = r || {}).hsEtf),
                        (o = s.mlist),
                        this.data &&
                          "object" == i(this.data) &&
                          ((this.data.hsEtf = a),
                          "hs" === this.indexRefreshType &&
                            (this.data.mlist = o)),
                        (e.next = 13);
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(1));
                    case 13:
                      return (
                        (e.prev = 13),
                        this.isHsTrading &&
                          !this.isTabDeactivated &&
                          (this.hsrankTimer = setTimeout(function () {
                            return c.judgeTime(!0);
                          }, 5e3)),
                        e.finish(13)
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 11, 13, 16]]
            );
          })
        );
      },
      updateHKRank: function () {
        var t = this;
        if ("HK" === this.market && this.hkVIP) {
          this.clearhkrankTimer();
          !(function e() {
            return u(
              t,
              null,
              n().mark(function t() {
                var i, r, s, a, o, c;
                return n().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (this.isHkTrading && !this.isTabDeactivated) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void this.clearhkrankTimer()
                          );
                        case 2:
                          return (
                            (s = this.rankInfo),
                            (a = s.board),
                            (o = s.ranking),
                            (t.next = 7),
                            f.HqAPI.getMarketData(
                              this.market,
                              { level2: 1 },
                              d.StockBridge
                            )
                          );
                        case 7:
                          (c = t.sent),
                            (this.stockRank =
                              null ==
                              (r =
                                null == (i = null == c ? void 0 : c.stock)
                                  ? void 0
                                  : i[a])
                                ? void 0
                                : r[o]),
                            (this.data = c),
                            (this.hkrankTimer = setTimeout(e, 5e3));
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          })();
        }
      },
      handleScrollToLower: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.rankFold || this.allLoaded), t.t0)) {
                        t.next = 4;
                        break;
                      }
                      return (t.next = 4), this.getRankList(!0);
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
      onScroll: function (t) {
        var e,
          n = this;
        try {
          "function" == typeof this.throttledCalculate
            ? this.throttledCalculate(t)
            : (d.StockBridge.aegisReportEvent(
                "MONITOR-STOCK-HQ-THROTTLED-CALCULATE-ERROR",
                {
                  ext3: JSON.stringify({
                    market: this.market,
                    isWzq: this.isWzq,
                    throttledCalculateType: i(this.throttledCalculate),
                    hasHandleScroll: "function" == typeof this.handleScroll,
                  }),
                }
              ),
              "function" == typeof this.handleScroll && this.handleScroll(t));
        } catch (t) {
          d.StockBridge.aegisReportEvent("MONITOR-STOCK-HQ-ON-SCROLL-ERROR", {
            ext3: JSON.stringify({
              market: this.market,
              isWzq: this.isWzq,
              errorMessage: t.message,
              errorStack: t.stack,
            }),
          });
        }
        if (!this.isHorizontalScrolling) {
          var r =
            (null == (e = null == t ? void 0 : t.target)
              ? void 0
              : e.scrollTop) || 0;
          r !== this.lastScrollTop &&
            ((this.scrollTop = r),
            (this.lastScrollTop = r),
            (this.isScrolling = !0),
            this.scrollEndTimer && clearTimeout(this.scrollEndTimer),
            (this.scrollEndTimer = setTimeout(function () {
              (n.isScrolling = !1), (n.scrollEndTimer = null);
            }, 300)));
        }
      },
      handleScroll: function (t) {
        if ((this.$emit("onTabScroll", t), "HS" === this.market))
          if (this.isWzq) {
            var e = t.target || {},
              i = e.scrollTop,
              n = e.scrollHeight,
              r = e.clientHeight;
            this.rankFold ||
              this.allLoaded ||
              (n - (i + r) < 100 && this.getRankList(!0)),
              this.getCounterNum();
          } else this.getMpCounterNum();
      },
      getStockListTop: function () {
        var t,
          e,
          i,
          n = this;
        if (this.isWzq) {
          var r =
            null ==
            (i =
              null ==
              (e =
                null == (t = this.$refs.stocklist)
                  ? void 0
                  : t.getBoundingClientRect)
                ? void 0
                : e.call(t))
              ? void 0
              : i.top;
          return Promise.resolve("number" == typeof r ? r : 0);
        }
        return new Promise(function (t) {
          try {
            d.wx$1
              .createSelectorQuery()
              .in(n)
              .select(".stock-list")
              .boundingClientRect(function (e) {
                var i;
                t(null != (i = null == e ? void 0 : e.top) ? i : 0);
              })
              .exec();
          } catch (e) {
            t(0);
          }
        });
      },
      getVisibleStartIdx: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e, i, r, s;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (e = this.stockRank || []).length &&
                        this.itemHeight
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", 0);
                    case 3:
                      return (t.next = 5), this.getStockListTop();
                    case 5:
                      if (
                        ((t.t0 = t.sent),
                        (t.t1 = this.rankheadHeight),
                        !((i = t.t0 + t.t1) >= 0))
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return", 0);
                    case 10:
                      return (
                        (r = -i),
                        (s = Math.floor(r / this.itemHeight)),
                        t.abrupt(
                          "return",
                          Math.max(0, Math.min(s, e.length - 1))
                        )
                      );
                    case 12:
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
      getAutoRefreshPageRange: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e, i, r, s, a, o, c, l;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.hsRanklistLimit),
                        (i = (this.stockRank || []).length),
                        (t.next = 4),
                        this.getVisibleStartIdx()
                      );
                    case 4:
                      return (
                        (r = t.sent),
                        (s = Math.min(i, r + Math.max(this.showNum, 1))),
                        (a = Math.max(0, Math.floor(r / e) - 2) * e),
                        (o = (Math.ceil(s / e) + 2) * e),
                        (c = Math.min(o, i, this.listTotal)),
                        (l = Math.min(c - a, this.listTotal - a)),
                        t.abrupt("return", { offset: a, count: Math.max(l, e) })
                      );
                    case 11:
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
      hasVisibleBrief: function (t) {
        if (!t) return !1;
        var e = t.comment;
        return (
          null != e &&
          "--" !== e &&
          ("string" == typeof e
            ? e.trim().length > 0
            : !!Array.isArray(e) &&
              e.some(function (t) {
                return "string" == typeof t && t.trim().length > 0;
              }))
        );
      },
      getBriefText: function (t) {
        if (!this.hasVisibleBrief(t)) return "";
        var e = t.comment;
        return "string" == typeof e
          ? e
          : Array.isArray(e)
          ? e
              .filter(function (t) {
                return "string" == typeof t && t.trim().length > 0;
              })
              .join(" ")
          : "";
      },
      calcBriefAverageItemHeight: function (t) {
        var e = (this.stockRank || []).length;
        if (!e || !t || !t.height) return this.itemHeight;
        var i = t.height - this.rankheadHeight;
        return i <= 0 ? this.itemHeight : i / e;
      },
      getMpCounterNum: function () {
        var t = this;
        d.wx$1
          .createSelectorQuery()
          .in(this)
          .select(".stock-list")
          .boundingClientRect(function (e) {
            if (e) {
              var i = t.rankheadHeight,
                n = t.winHeight - e.top - i - 20 * t.screenRatio,
                r = (t.stockRank || []).length;
              if (t.isShowStockBrief && t.isHsAdvance) {
                var s = t.calcBriefAverageItemHeight(e),
                  a = s ? Math.max(0, Math.floor(n / s)) : 0;
                return (
                  r && e.bottom <= t.winHeight + s && (a = r),
                  (a = Math.min(a, r || a)) >= t.listTotal && (a = t.listTotal),
                  (t.showNum = a),
                  void t.emitCounterNum()
                );
              }
              var o = t.itemHeight,
                c = o ? Math.max(0, Math.floor(n / o)) : 0;
              r && o && e.bottom <= t.winHeight + o && (c = r),
                (c = Math.min(c, r || c)) >= t.listTotal && (c = t.listTotal),
                (t.showNum = c),
                t.emitCounterNum();
            }
          })
          .exec();
      },
      getCounterNum: function () {
        var t,
          e =
            null == (t = this.$refs.stocklist)
              ? void 0
              : t.getBoundingClientRect(),
          i = (null == e ? void 0 : e.top) || 0,
          n = this.rankheadHeight,
          r = this.winHeight - i - n - 20 * this.screenRatio;
        if (this.isShowStockBrief && this.isHsAdvance) {
          var s = this.calcBriefAverageItemHeight(e);
          return (
            (this.showNum = s ? Math.max(0, Math.floor(r / s)) : 0),
            this.showNum >= this.listTotal && (this.showNum = this.listTotal),
            void this.emitCounterNum()
          );
        }
        var a = this.itemHeight;
        (this.showNum = a ? Math.max(0, Math.floor(r / a)) : 0),
          this.showNum >= this.listTotal && (this.showNum = this.listTotal),
          this.emitCounterNum();
      },
      emitCounterNum: function () {
        this.showNum > 0 &&
          this.$emit(
            "changeCounterNum",
            "hsMarket",
            this.showNum,
            this.listTotal
          );
      },
      handleIndexJump: function (t) {
        var e, i;
        if (t) {
          var n =
            null == (i = null == (e = this.data) ? void 0 : e.mlist)
              ? void 0
              : i.find(function (e) {
                  return e.c === t;
                });
          n && this.jumpIndex(n);
        }
      },
      jumpIndex: function (t) {
        if (this.isWzq) {
          var e = {};
          document.querySelector(".yy-redpocket-hq-".concat(t.c)) &&
            (this.$event.$emit("hq.marketcard.stock.clicked", t),
            (e = { act_flow_id: "stk_wave" })),
            g.utils.isFutures(t.m)
              ? d.StockBridge.routeTo({
                  name: "HqStock",
                  params: { market: t.m, code: t.c },
                })
              : d.StockBridge.routeTo({
                  path: "/hq/stock/".concat(t.m, "/").concat(t.c),
                  query: h(
                    {
                      cls: "9",
                      detailTitle: "".concat(t.n, "(").concat(t.c, ")"),
                    },
                    e
                  ),
                });
        } else
          d.StockRouter.routeTo({
            name: "stockdetail",
            query: { market: t.m, scode: t.c },
          });
        d.StockBridge.report(
          "hq.choose_hq.".concat(this.market.toLowerCase(), "tab.index_click"),
          { stockid: g.utils.getSymbol(t.m, t.c) }
        );
      },
      tabActivated: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e,
              i,
              r = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((this.isTabDeactivated = !1),
                        (t.t0 = "HS" === this.market),
                        !t.t0)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (
                        this.isWzq &&
                          this.$nextTick(function () {
                            var t, e;
                            null ==
                              (e =
                                null == (t = r.$refs.scroll)
                                  ? void 0
                                  : t.scrollTo) || e.call(t, 0, r.scrollTop),
                              r.scrollIntoView();
                          }),
                        (t.next = 6),
                        this.handleMarketState()
                      );
                    case 6:
                      this.judgeTime(!0);
                    case 7:
                      "HK" === this.market && this.updateHKRank(),
                        this.isWzq &&
                          -1 !== ["HK", "US"].indexOf(this.market) &&
                          (null ==
                            (i =
                              null == (e = this.$refs.scroll)
                                ? void 0
                                : e.scrollTo) || i.call(e, 0, this.scrollTop),
                          this.scrollIntoView()),
                        ["HK", "US"].includes(this.market) &&
                          (this.clearCrossBorderETFListPullingTimer(),
                          this.pullCrossBorderETFList()),
                        this.checkShowETFGuide();
                    case 11:
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
      tabDeactivated: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.isTabDeactivated = !0),
          "HS" === this.market &&
            (this.clearAllTimer(),
            t &&
              ((this.curOffset = 0),
              (this.stockRank = []),
              this.getRankList(!0, !1))),
          this.clearCrossBorderETFListPullingTimer();
      },
      pullIndex: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isHkTrading && !this.isUsTrading) {
                        t.next = 5;
                        break;
                      }
                      return (
                        (t.next = 3),
                        f.HqAPI.getMarketData(
                          this.market,
                          "HK" === this.market && this.hkVIP
                            ? { level2: 1 }
                            : {},
                          d.StockBridge
                        )
                      );
                    case 3:
                      (e = t.sent),
                        (this.data.mlist = null == e ? void 0 : e.mlist);
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
      judgeTradeTime: function () {
        var t = new Date().toTimeString().slice(0, 5).replace(":", "");
        this.isTradeTime =
          ("HS" === this.market && m.isHSTradeTime(t)) ||
          ("US" === this.market && m.isUSTradeTime(t));
      },
      getData: function () {
        return u(
          this,
          null,
          n().mark(function t() {
            var e,
              i,
              r,
              s,
              a,
              o,
              c,
              l,
              h,
              m,
              p,
              g,
              v,
              T = this;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        (a = this.rankInfo),
                        (o = a.board),
                        (c = a.ranking),
                        "HS" !== this.market)
                      ) {
                        t.next = 17;
                        break;
                      }
                      return (
                        (l = k.sls.getItem("hq-hs-market-store")),
                        6 !==
                          (null == (e = null == l ? void 0 : l.mlist)
                            ? void 0
                            : e.length) && (this.data = l),
                        (h = {
                          offset: this.curOffset,
                          count: this.hsRanklistLimit,
                          rank_type: c,
                        }),
                        (t.next = 8),
                        (function (t, e) {
                          return f.HqAPI.getMarketData("HS", t, e);
                        })(h, d.StockBridge)
                      );
                    case 8:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 11;
                        break;
                      }
                      t.t0 = {};
                    case 11:
                      (m = t.t0),
                        (this.stockRank =
                          (null == (i = null == m ? void 0 : m.stockPage)
                            ? void 0
                            : i.data) || []),
                        (this.data = m),
                        (p = m.concept),
                        (g = m.industry),
                        this.assignItems(
                          this.data,
                          { concept: p, industry: g },
                          3
                        ),
                        k.sls.setItem("hq-hs-market-store", m),
                        setTimeout(function () {
                          return u(
                            T,
                            null,
                            n().mark(function t() {
                              var e = this;
                              return n().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        (this.isShowStockBrief =
                                          !!k.sls.getItem(
                                            "hq.hsjtab-advance-rank-brief-show"
                                          )),
                                          this.$nextTick(function () {
                                            e.initBriefBtn(),
                                              e.getRankItemHeight(),
                                              e.getRankHeadHeight();
                                          });
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
                        }, 1e3),
                        (t.next = 21);
                      break;
                    case 17:
                      return (
                        (t.next = 19),
                        f.HqAPI.getMarketData(
                          this.market,
                          "HK" === this.market && this.hkVIP
                            ? { level2: 1 }
                            : {},
                          d.StockBridge
                        )
                      );
                    case 19:
                      (v = t.sent),
                        (this.stockRank =
                          (null ==
                          (s =
                            null == (r = null == v ? void 0 : v.stock)
                              ? void 0
                              : r[o])
                            ? void 0
                            : s[c]) || []),
                        (this.data = v);
                    case 21:
                      t.next = 25;
                      break;
                    case 23:
                      (t.prev = 23), (t.t1 = t.catch(0));
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 23]]
            );
          })
        );
      },
      getRankHeadHeight: function () {
        var t,
          e,
          i = this;
        this.isWzq
          ? (this.rankheadHeight =
              (null ==
              (e =
                null == (t = this.$refs.rankhead)
                  ? void 0
                  : t.getBoundingClientRect())
                ? void 0
                : e.height) || 0)
          : d.wx$1
              .createSelectorQuery()
              .in(this)
              .select(".rank-head")
              .boundingClientRect(function (t) {
                i.rankheadHeight = (null == t ? void 0 : t.height) || 0;
              })
              .exec();
      },
      getRankItemHeight: function () {
        var t,
          e,
          i,
          n = this;
        this.isWzq
          ? (this.itemHeight =
              (null ==
              (i =
                null == (e = null == (t = this.$refs.rankitem) ? void 0 : t[0])
                  ? void 0
                  : e.getBoundingClientRect())
                ? void 0
                : i.height) || 0)
          : d.wx$1
              .createSelectorQuery()
              .in(this)
              .select(".rank-item")
              .boundingClientRect(function (t) {
                n.itemHeight = (null == t ? void 0 : t.height) || 0;
              })
              .exec();
      },
      getRankList: function (t) {
        var i =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return u(
          this,
          null,
          n().mark(function s() {
            var a,
              o,
              c,
              l,
              h,
              u,
              k,
              m,
              p,
              g,
              v,
              T,
              b,
              w,
              S,
              x,
              H,
              B,
              y,
              R,
              C = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!i || (!this.isLoading && !this.allLoaded)) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt("return");
                    case 2:
                      if (!r || !this.isScrolling) {
                        n.next = 4;
                        break;
                      }
                      return n.abrupt("return");
                    case 4:
                      if (
                        ((this.isLoading = !0),
                        (c = this.rankInfo),
                        (l = c.ranking),
                        (h = c.board),
                        (u = {
                          offset: i
                            ? Math.min(
                                this.curOffset + this.hsRanklistLimit,
                                this.listTotal - this.hsRanklistLimit
                              )
                            : 0,
                          count: this.hsRanklistLimit,
                          rank_type: l,
                          time: Date.now(),
                          rankOnly: t,
                        }),
                        (n.prev = 6),
                        !r)
                      ) {
                        n.next = 21;
                        break;
                      }
                      return (n.next = 10), this.getAutoRefreshPageRange();
                    case 10:
                      for (
                        k = n.sent,
                          m = k.offset,
                          p = k.count,
                          g = this.hsRanklistLimit,
                          v = [],
                          T = m;
                        T < m + p;
                        T += g
                      )
                        (b = Math.min(g, this.listTotal - T)) > 0 &&
                          v.push({ offset: T, count: b });
                      return (
                        (n.next = 18),
                        Promise.all(
                          v.map(function (e) {
                            return f.HqAPI.getStockRank(
                              C.market,
                              {
                                offset: e.offset,
                                count: e.count,
                                rank_type: l,
                                time: Date.now(),
                                rankOnly: t,
                              },
                              d.StockBridge
                            );
                          })
                        )
                      );
                    case 18:
                      return (
                        (w = n.sent),
                        (S = e(this.stockRank || [])),
                        n.abrupt(
                          "return",
                          (v.forEach(function (t, i) {
                            var n,
                              r,
                              s =
                                (null ==
                                (r = null == (n = w[i]) ? void 0 : n.stockPage)
                                  ? void 0
                                  : r.data) || [];
                            if (s.length) {
                              var a = S.slice(0, t.offset),
                                o = S.slice(t.offset + s.length);
                              S = [].concat(e(a), e(s), e(o));
                            }
                          }),
                          (this.stockRank = S),
                          w[0] || {})
                        )
                      );
                    case 21:
                      return (
                        (n.next = 23),
                        f.HqAPI.getStockRank(this.market, u, d.StockBridge)
                      );
                    case 23:
                      if (((n.t0 = n.sent), n.t0)) {
                        n.next = 26;
                        break;
                      }
                      n.t0 = {};
                    case 26:
                      return (
                        (x = n.t0),
                        (H = x.concept),
                        (B = x.industry),
                        (y = x.stockPage),
                        this.isHs
                          ? ((R = (null == y ? void 0 : y.data) || []),
                            (this.curOffset = null == y ? void 0 : y.offset),
                            (this.stockRank = i
                              ? [].concat(e(this.stockRank || []), e(R))
                              : R),
                            !t &&
                              this.assignItems(
                                this.data,
                                { concept: H, industry: B },
                                3
                              ))
                          : (this.stockRank =
                              (null ==
                              (o = null == (a = x.stock) ? void 0 : a[h])
                                ? void 0
                                : o[l]) || []),
                        n.abrupt("return", x)
                      );
                    case 34:
                      throw ((n.prev = 34), (n.t1 = n.catch(6)), n.t1);
                    case 37:
                      return (n.prev = 37), (this.isLoading = !1), n.finish(37);
                    case 40:
                    case "end":
                      return n.stop();
                  }
              },
              s,
              this,
              [[6, 34, 37, 40]]
            );
          })
        );
      },
      formatStockCode: function (e) {
        var i = e.split(".");
        return t(i, 1)[0];
      },
      getColorClass: function (t) {
        var e = +t;
        return e > 0
          ? "color-rise"
          : 0 == +e
          ? "gray"
          : e < 0
          ? "color-drop"
          : void 0;
      },
      getRankFormatText: function (t, e) {
        return t.format ? t.format(e[t.column]) : e[t.column];
      },
      jumpToStock: function (t) {
        var e, i;
        this.isWzq
          ? d.StockBridge.routeTo({
              path: "/hq/stock/".concat(t.market, "/").concat(t.code),
              query: {
                cls: t.cls,
                detailTitle: "".concat(t.name, "(").concat(t.code, ")"),
              },
            })
          : d.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: t.market, scode: t.code },
            });
        var n = g.utils.getSymbol(t.market, t.code);
        d.StockBridge.report(
          "hq.choose_hq.".concat(
            null == (i = null == (e = this.market) ? void 0 : e.toLowerCase)
              ? void 0
              : i.call(e),
            "tab.hot_list_stock_click"
          ),
          { stockid: n }
        );
      },
      onPullingDown: function (t) {
        return u(
          this,
          null,
          n().mark(function e() {
            var i, r, s, a, o, c, l, h, u, k, m, p, g, v, T, b, w, S;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (this.$emit("onPullingDown", t),
                        (this.curOffset = 0),
                        (e.prev = 1),
                        (m = this.rankInfo),
                        (p = m.board),
                        (g = m.ranking),
                        !this.isTabDeactivated)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      if (((v = null), "HS" !== this.market)) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (T = {
                          offset: this.curOffset,
                          count: 50,
                          rank_type: g,
                        }),
                        (e.next = 10),
                        f.HqAPI.getMarketData(this.market, T, d.StockBridge)
                      );
                    case 10:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 13;
                        break;
                      }
                      e.t0 = {};
                    case 13:
                      (v = e.t0),
                        (this.stockRank =
                          (v && v.stockPage && v.stockPage.data) || []),
                        (this.data = v),
                        (w = (b = v).concept),
                        (S = b.industry),
                        this.assignItems(
                          this.data,
                          { concept: w, industry: S },
                          3
                        ),
                        (e.next = 25);
                      break;
                    case 20:
                      return (
                        (e.next = 22),
                        f.HqAPI.getMarketData(
                          this.market,
                          "HK" === this.market && this.hkVIP
                            ? { level2: 1 }
                            : null,
                          d.StockBridge
                        )
                      );
                    case 22:
                      (v = e.sent),
                        (this.stockRank =
                          (null ==
                          (r =
                            null == (i = null == v ? void 0 : v.stock)
                              ? void 0
                              : i[p])
                            ? void 0
                            : r[g]) || []),
                        (this.data = v);
                    case 25:
                      ["HK", "US"].includes(this.market) &&
                        this.pullCrossBorderETFList(),
                        null ==
                          (a =
                            null == (s = this.$refs.marketInterpretation)
                              ? void 0
                              : s.getMarketInfo) || a.call(s),
                        this.refreshSubComponent(),
                        this.isWzq &&
                          (null ==
                            (l =
                              null ==
                              (c =
                                null == (o = null == this ? void 0 : this.$refs)
                                  ? void 0
                                  : o.refresh)
                                ? void 0
                                : c.stopPullDownRefresh) ||
                            l.call(c)),
                        (e.next = 31);
                      break;
                    case 28:
                      (e.prev = 28),
                        (e.t1 = e.catch(1)),
                        this.isWzq &&
                          (null ==
                            (k =
                              null ==
                              (u =
                                null == (h = null == this ? void 0 : this.$refs)
                                  ? void 0
                                  : h.refresh)
                                ? void 0
                                : u.stopPullDownRefresh) ||
                            k.call(u));
                    case 31:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 28]]
            );
          })
        );
      },
      refreshSubComponent: function () {
        var t, e;
        null ==
          (e =
            null == (t = this.$refs.functionArea) ? void 0 : t.refreshLabel) ||
          e.call(t);
      },
      assignItems: function (e, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        e &&
          "object" == i(e) &&
          Object.entries(n).forEach(function (i) {
            var n = t(i, 2),
              s = n[0],
              a = n[1];
            Array.isArray(a) && (e[s] = a.slice(0, Math.max(0, r)));
          });
      },
      pushIndex: function (t) {
        var e = this;
        t.map(function (t) {
          var i,
            n,
            r = t.data,
            s = t.symbol,
            a =
              null == (n = null == (i = e.data) ? void 0 : i.mlist)
                ? void 0
                : n.findIndex(function (t) {
                    return s.includes(t.c);
                  });
          a >= 0 && e.$set(e.data.mlist, a, h(h({}, e.data.mlist[a]), r));
        });
      },
      changeShowState: function () {
        (this.isShowStockBrief = !this.isShowStockBrief),
          k.sls.setItem(
            "hq.hsjtab-advance-rank-brief-show",
            this.isShowStockBrief
          ),
          this.initBriefBtn(),
          this.isShowStockBrief
            ? d.StockBridge.report(
                "hq.choose_hq.hsjtab.advance_rank_brief_select_click"
              )
            : d.StockBridge.report(
                "hq.choose_hq.hsjtab.advance_rank_brief_unselect_click"
              );
      },
      initBriefBtn: function () {
        var t = this;
        this.isShowStockBrief &&
          this.$nextTick(function () {
            return u(
              t,
              null,
              n().mark(function t() {
                var e, i, s;
                return n().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (e = r(this.stockRank || [])), (t.prev = 1), e.s();
                        case 3:
                          if ((i = e.n()).done) {
                            t.next = 9;
                            break;
                          }
                          return (
                            (s = i.value),
                            (t.next = 7),
                            this.checkBriefBtn(s.code)
                          );
                        case 7:
                          t.next = 3;
                          break;
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11), (t.t0 = t.catch(1)), e.e(t.t0);
                        case 14:
                          return (t.prev = 14), e.f(), t.finish(14);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 11, 14, 17]]
                );
              })
            );
          });
      },
      checkBriefBtn: function (t) {
        return u(
          this,
          null,
          n().mark(function e() {
            var i;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (void 0 === this.showBtn[t]) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), this.initCheckBriefBtn(t);
                    case 4:
                      (i = e.sent), this.$set(this.showBtn, t, i);
                    case 6:
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
      initCheckBriefBtn: function (t) {
        var e = this;
        if (this.isWzq) {
          var i =
            this.$refs["stockbrief".concat(t)] &&
            this.$refs["stockbrief".concat(t)][0];
          return i
            ? i.scrollHeight > i.clientHeight + 5
            : void setTimeout(function () {
                e.initCheckBriefBtn(t);
              }, 300);
        }
        return new Promise(function (i) {
          d.wx$1
            .createSelectorQuery()
            .in(e)
            .select('.item-desc[data-id="'.concat(t, '"]'))
            .boundingClientRect(function (n) {
              n
                ? i(n.height > 84)
                : setTimeout(function () {
                    return i(e.initCheckBriefBtn(t));
                  }, 300);
            })
            .exec();
        });
      },
      changeFolded: function (t) {
        (this.folded[t] = !this.folded[t]),
          (this.folded = Object.assign({}, this.folded)),
          this.folded[t]
            ? d.StockBridge.report(
                "hq.choose_hq.hsjtab.advance_rank_brief_unfold_btn_click",
                { yy_public_str1: "".concat(t) }
              )
            : d.StockBridge.report(
                "hq.choose_hq.hsjtab.advance_rank_brief_fold_btn_click",
                { yy_public_str1: "".concat(t) }
              );
      },
      scrollTo: function (t, e) {
        var i = this.$refs.scroll;
        i && i.scrollTo(t, e);
      },
      showCardTip: function () {
        "wzq" !== this.env
          ? ((this.showTipModal = !0),
            (this.tipModalConfig = {
              title: "",
              content: [{ type: "text", text: "按当前时刻涨跌幅排列。" }],
              cancelBtn: "我知道了",
            }))
          : this.$modal.alert({
              content: "按当前时刻涨跌幅排列",
              confirmBtn: "我知道了",
            });
      },
      switchToPlate: function () {
        this.$emit("switchToPlate"),
          this.titleOptions.isShowRedDot &&
            ((this.titleOptions.isShowRedDot = !1),
            (this.titleOptions.text = ""),
            k.sls.setItem("hq.hstab.hot-plate-red-dot-show", !0));
      },
      switchToETF: function () {
        this.$emit("switchToETF"),
          (this.showETFGuide = !1),
          k.sls.setItem("show-checkmore-etf", !0);
      },
      goCrossBorderETF: function () {
        this.$emit("switchToETF", { curActiveTab: 4 });
      },
      getCrossBorderETFList: function () {
        var t = this,
          e = {
            fund_type: "inner",
            board_type: "etf_market_".concat(
              "US" === this.market ? "us" : "hk",
              "_group_by_index"
            ),
            sort_type: "priceRatio",
            direct: "down",
            count: 3,
            label_scene: "etf",
          };
        return f.HqAPI.getETFRankList(d.StockBridge, e).then(function (e) {
          e &&
            0 == +e.code &&
            e.data &&
            e.data.rank_list &&
            (t.crossBorderETFList = e.data.rank_list);
        });
      },
      pullCrossBorderETFList: function () {
        var t = this;
        this.getCrossBorderETFList().finally(function () {
          t.crossBorderETFListPullingTimer = setTimeout(function () {
            return u(
              t,
              null,
              n().mark(function t() {
                return n().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), this.getTradeTime();
                        case 2:
                          this.isHsTrading && !this.isTabDeactivated
                            ? this.pullCrossBorderETFList()
                            : this.clearCrossBorderETFListPullingTimer();
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          }, 5e3);
        });
      },
      daxinCalendarShow: function () {
        this.isDaxinCalendarShow = !0;
      },
      getDaxinCalendarPosition: function () {
        var t = this.$refs.daxinCalendar,
          e = (null == t ? void 0 : t.$el) || {},
          i = e.offsetTop,
          n = void 0 === i ? 0 : i,
          r = e.offsetHeight,
          s = void 0 === r ? 0 : r;
        this.daxinCalendarInfo = { top: n, height: s };
      },
    },
  };
Array ||
  (
    d.resolveComponent("portal-target") +
    d.resolveComponent("market-index") +
    d.resolveComponent("market-interpretation") +
    d.resolveComponent("market-analysis") +
    d.resolveComponent("daxin-calendar") +
    d.resolveComponent("hangqing-bar") +
    d.resolveComponent("function-area") +
    d.resolveComponent("cross-border") +
    d.resolveComponent("plate-card") +
    d.resolveComponent("etf-rank-list") +
    d.resolveComponent("plate-container") +
    d.resolveComponent("Tabbar") +
    d.resolveComponent("st-checkbox") +
    d.resolveComponent("market-icon") +
    d.resolveComponent("status") +
    d.resolveComponent("WzqInfoModal")
  )();
var T = d._export_sfc(v, [
  [
    "render",
    function (t, e, i, n, r, s) {
      return d.e(
        { a: r.data },
        r.data
          ? d.e(
              {
                b: d.f(s.chunk(r.data.mlist, 3), function (t, e, n) {
                  return d.e(
                    {
                      a: d.f(t, function (t, e, r) {
                        return d.e(
                          s.isWzq
                            ? {
                                a: d.n("yy-redpocket-hq-".concat(t.c)),
                                b:
                                  "56fbdb2a-1-" +
                                  n +
                                  "-" +
                                  r +
                                  ",56fbdb2a-0-" +
                                  n +
                                  "-" +
                                  r,
                                c: d.p({
                                  name: "yy-activity-portal-hq-redbag-mcd",
                                  "slot-props": { stock: t },
                                }),
                              }
                            : {},
                          {
                            d: "56fbdb2a-0-" + n + "-" + r,
                            e: d.p({ data: t, market: i.market }),
                            f: e,
                            g: d.o(
                              function (e) {
                                return s.handleIndexJump(t && t.c);
                              },
                              3921,
                              e
                            ),
                          }
                        );
                      }),
                      b: t.length % 3 != 0,
                    },
                    (t.length, {}),
                    { c: e }
                  );
                }),
                c: s.isWzq,
                d: d.n("HS" === i.market ? "market-index-row-new-hs" : ""),
                e: r.marketIndex,
                f: "HK" !== i.market,
                g: d.o(function () {
                  return (
                    s.afterSwitchTab && s.afterSwitchTab.apply(s, arguments)
                  );
                }, 3922),
                h: s.chunk(r.data.mlist, 3).length > 1,
              },
              s.chunk(r.data.mlist, 3).length > 1
                ? {
                    i: d.f(s.chunk(r.data.mlist, 3), function (t, e, i) {
                      return {
                        a: e,
                        b: d.n(r.marketIndex === e ? "cur-dot" : ""),
                      };
                    }),
                  }
                : {}
            )
          : {},
        {
          j: d.sr("marketInterpretation", "56fbdb2a-2"),
          k: d.p({
            market: i.market,
            helper: i.helper,
            "user-info": i.userInfo,
          }),
          l: s.isHs,
        },
        s.isHs ? { m: d.p({ market: i.market, "on-show": i.tabOnShow }) } : {},
        { n: s.isHs },
        s.isHs
          ? { o: d.p({ "user-info": i.userInfo }) }
          : {
              p: d.sr("daxinCalendar", "56fbdb2a-5"),
              q: d.o(s.daxinCalendarShow, 3923),
              r: d.p({
                market: i.market,
                "user-info": i.userInfo,
                "is-show-daxin-calendar-bubble": r.isShowDaxinCalendarBubble,
              }),
            },
        { s: s.isHs },
        s.isHs
          ? {
              t: d.sr("functionArea", "56fbdb2a-6"),
              v: d.o(s.stopSwiperScroll, 3924),
              w: d.o(s.startSwiperScroll, 3925),
              x: d.p({
                "user-info": i.userInfo,
                "is-trading": r.isHsTrading,
                "on-show": i.tabOnShow,
              }),
            }
          : r.crossBorderETFList && r.crossBorderETFList.length
          ? {
              z: d.o(s.showCrossETFTip, 3926),
              A: d.o(s.goCrossBorderETF, 3927),
              B: d.p({
                title: "跨境ETF",
                data: r.crossBorderETFList,
                market: i.market,
                stat: "".concat(i.market, "_crossBorder"),
                "is-show-tip": !0,
                "is-show-guide": s.isAccountOpen,
                "is-account-open": s.isAccountOpen,
              }),
            }
          : {},
        { y: r.crossBorderETFList && r.crossBorderETFList.length, C: r.data },
        r.data
          ? d.e(
              { D: !s.isHs },
              s.isHs
                ? {}
                : d.e(
                    { E: r.data.etf },
                    r.data.etf
                      ? {
                          F: d.p({
                            title: "ETF板块",
                            data: r.data.etf,
                            market: i.market,
                            stat: "".concat(i.market, "_etf"),
                            "plate-id": s.ranks.etf,
                            "show-list": !1,
                          }),
                        }
                      : {},
                    { G: r.data.etf },
                    (r.data.etf, {})
                  ),
              { H: !s.hsWzq && r.data.industry },
              !s.hsWzq && r.data.industry
                ? {
                    I: d.sr("industry", "56fbdb2a-9"),
                    J: d.o(s.showCardTip, 3928),
                    K: d.p({
                      title: "热门行业板块",
                      data: r.data.industry,
                      market: i.market,
                      stat: "".concat(i.market, "_industry"),
                      "plate-id": s.ranks.industry,
                      "show-list": !0,
                      "is-show-tip": !1,
                    }),
                  }
                : {},
              { L: !s.hsWzq && r.data.concept },
              !s.hsWzq && r.data.concept
                ? d.e(
                    { M: r.data.concept },
                    r.data.concept
                      ? {
                          N: d.o(s.showCardTip, 3929),
                          O: d.p({
                            title: "热门概念板块",
                            data: r.data.concept,
                            market: i.market,
                            stat: "".concat(i.market, "_concept"),
                            "plate-id": s.ranks.concept,
                            "show-list": !0,
                            "is-show-tip": !1,
                          }),
                        }
                      : {}
                  )
                : {},
              { P: r.data.hsEtf },
              r.data.hsEtf
                ? d.e(
                    {
                      Q: d.o(s.gotoEtfTab, 3930),
                      R: d.p({ data: r.data.hsEtf, "user-info": i.userInfo }),
                      S: r.data.hsEtf,
                    },
                    (r.data.hsEtf, {})
                  )
                : {},
              { T: s.hsWzq },
              s.hsWzq
                ? d.e(
                    { U: r.data.hotPlate },
                    r.data.hotPlate
                      ? {
                          V: d.o(s.switchToPlate, 3931),
                          W: d.p({
                            "title-options": r.titleOptions,
                            data: r.data.hotPlate,
                            "plate-id": s.ranks.hotPlate,
                            source: "wzq-hs",
                          }),
                        }
                      : {},
                    { X: r.data.hotPlate },
                    (r.data.hotPlate, {})
                  )
                : {},
              { Y: s.isHs },
              (s.isHs, {}),
              { Z: r.stockRank && r.stockRank.length },
              r.stockRank && r.stockRank.length
                ? d.e(
                    {
                      aa: d.sr("tabBar", "56fbdb2a-13"),
                      ab: d.o(s.switchRankTab, 3932),
                      ac: d.o(s.stopSwiperScroll, 3933),
                      ad: d.o(s.startSwiperScroll, 3934),
                      ae: d.p({
                        typeid: "".concat(i.market, "tabs"),
                        "show-more": !1,
                        "cur-index": r.rankIndex,
                        "tab-config": s.ranksOrderList,
                      }),
                      af: s.isHsAdvance,
                    },
                    s.isHsAdvance
                      ? {
                          ag: d.o(s.toggleBrief, 3935),
                          ah: d.p({ value: r.isShowStockBrief }),
                          ai: d.n(r.isShowStockBrief ? "active" : ""),
                          aj: d.o(function (t) {
                            return s.changeShowState();
                          }, 3936),
                        }
                      : {},
                    {
                      ak: d.t(s.rankInfo.title),
                      al: d.f(r.stockRank, function (t, e, n) {
                        return d.e(
                          { a: e < r.rankNum || !i.rankFold },
                          e < r.rankNum || !i.rankFold
                            ? d.e(
                                {
                                  b: d.t(t.name),
                                  c: e,
                                  d: t.name.length >= 8 ? 1 : "",
                                  e: e,
                                  f: "56fbdb2a-15-" + n,
                                  g: d.p({
                                    market: t.market,
                                    type: t.stock_type,
                                  }),
                                  h: d.t(
                                    "--" !== t.code
                                      ? s.formatStockCode(t.code)
                                      : ""
                                  ),
                                  i: e,
                                  j: "1" === t.delay,
                                },
                                (t.delay, {}),
                                { k: t.labels && t.labels.length > 0 },
                                t.labels && t.labels.length > 0
                                  ? {
                                      l: d.f(t.labels, function (t, e, i) {
                                        return {
                                          a: d.t(t.name || ""),
                                          b: "tag" + e,
                                        };
                                      }),
                                    }
                                  : {},
                                {
                                  m: e,
                                  n: e,
                                  o: d.t(t.zjcj),
                                  p: d.n(
                                    s.rankInfo.zxjcolor
                                      ? s.getColorClass(t.zde)
                                      : ""
                                  ),
                                  q: d.t(s.getRankFormatText(s.rankInfo, t)),
                                  r: d.t("--" !== t.zde ? s.rankInfo.pe : ""),
                                  s: d.n(
                                    "1" === s.rankInfo.columnType
                                      ? s.getColorClass(t.zde)
                                      : s.rankInfo.valuecolor
                                      ? s.getColorClass(t[s.rankInfo.column])
                                      : ""
                                  ),
                                  t: d.n("--" === t.name ? "list-holder" : ""),
                                  v: e,
                                  w: d.o(
                                    function (e) {
                                      return (
                                        "--" !== t.name &&
                                        !r.isScrolling &&
                                        s.jumpToStock(t)
                                      );
                                    },
                                    3937,
                                    ""
                                      .concat(t.market, "-")
                                      .concat(t.code, "-")
                                      .concat(e)
                                  ),
                                }
                              )
                            : {},
                          s.isHsAdvance
                            ? d.e(
                                { x: s.hasVisibleBrief(t) },
                                s.hasVisibleBrief(t)
                                  ? d.e(
                                      {
                                        y: d.t(s.getBriefText(t)),
                                        z: e,
                                        A: r.showBtn[t.code],
                                      },
                                      r.showBtn[t.code]
                                        ? {
                                            B: d.t(
                                              r.folded[t.code] ? "收起" : "展开"
                                            ),
                                            C: d.o(
                                              function (e) {
                                                return s.changeFolded(t.code);
                                              },
                                              3938,
                                              ""
                                                .concat(t.market, "-")
                                                .concat(t.code, "-")
                                                .concat(e)
                                            ),
                                          }
                                        : {},
                                      {
                                        D:
                                          r.isShowStockBrief &&
                                          (e < r.rankNum || !i.rankFold),
                                        E: "stockbrief".concat(t.code),
                                        F: "dsc".concat(e),
                                        G: e,
                                        H: d.n(
                                          r.showBtn[t.code]
                                            ? r.folded[t.code]
                                              ? "unfolded"
                                              : "folded"
                                            : ""
                                        ),
                                      }
                                    )
                                  : {},
                                {
                                  I:
                                    r.isShowStockBrief &&
                                    s.hasVisibleBrief(t) &&
                                    !(r.showBtn[t.code] && r.folded[t.code]) &&
                                    (e < r.rankNum || !i.rankFold),
                                },
                                !r.isShowStockBrief ||
                                  !s.hasVisibleBrief(t) ||
                                  (r.showBtn[t.code] && r.folded[t.code]) ||
                                  (!(e < r.rankNum) && i.rankFold)
                                  ? {}
                                  : { J: e }
                              )
                            : {},
                          {
                            K: ""
                              .concat(t.market, "-")
                              .concat(t.code, "-")
                              .concat(e),
                          }
                        );
                      }),
                      am: s.isHsAdvance,
                      an: !s.allLoaded && !i.rankFold && s.isHs,
                    },
                    s.allLoaded || i.rankFold || !s.isHs
                      ? {}
                      : { ao: d.p({ type: "loading" }) },
                    { ap: i.rankFold },
                    i.rankFold
                      ? {
                          aq: d.o(function () {
                            return (
                              s.toggleRank && s.toggleRank.apply(s, arguments)
                            );
                          }, 3939),
                        }
                      : {},
                    { ar: d.n(i.market) }
                  )
                : {}
            )
          : {},
        { as: r.data && r.data.stock },
        (r.data && r.data.stock, {}),
        {
          at: d.s(s.scrollStyle),
          av: r.enabled,
          aw: r.mpTriggered,
          ax: d.o(function () {
            return s.mpStartPull && s.mpStartPull.apply(s, arguments);
          }, 3940),
          ay: d.o(function () {
            return s.mpPullEnd && s.mpPullEnd.apply(s, arguments);
          }, 3941),
          az: d.o(function () {
            return s.mpPullRefresh && s.mpPullRefresh.apply(s, arguments);
          }, 3942),
          aA: d.o(function () {
            return s.onScroll && s.onScroll.apply(s, arguments);
          }, 3943),
          aB: d.o(function () {
            return (
              s.handleScrollToLower && s.handleScrollToLower.apply(s, arguments)
            );
          }, 3944),
          aC: "mp" === s.env,
        },
        "mp" === s.env
          ? d.e(
              { aD: r.showTipModal },
              r.showTipModal
                ? {
                    aE: d.o(function (t) {
                      return (r.showTipModal = !1);
                    }, 3945),
                    aF: d.p({ skin: s.theme, config: r.tipModalConfig }),
                  }
                : {}
            )
          : {},
        { aG: d.n(r.webscrolltouch ? "wrapper-touch" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-56fbdb2a"],
]);
wx.createComponent(T);
var b = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLXBhZ2UvY29tcG9uZW50cy9tYXJrZXRjYXJkL2luZGV4LnZ1ZQ =
  b),
  (exports.queryHSNewBond = function (t) {
    return f.HqAPI.getHSNewBond(t);
  }),
  (exports.queryHSNewStock = function (t) {
    return f.HqAPI.getHSNewStock(t);
  });
