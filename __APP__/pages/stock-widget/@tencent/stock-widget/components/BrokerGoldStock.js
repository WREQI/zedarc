var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../@babel/runtime/helpers/typeof"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  d = function (t, e, o) {
    return new Promise(function (n, r) {
      var a = function (t) {
          try {
            c(o.next(t));
          } catch (t) {
            r(t);
          }
        },
        i = function (t) {
          try {
            c(o.throw(t));
          } catch (t) {
            r(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, i);
        };
      c((o = o.apply(t, e)).next());
    });
  },
  l = require("../api/index.js"),
  h = require("../../stock-hq-core/utils/market.js"),
  p = require("../Module.js"),
  k = require("../../../../../common/vendor.js"),
  f = {
    inject: {
      helper: {
        default: function () {
          return {};
        },
      },
      hqBridge: {
        default: function () {
          return {};
        },
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      reportPageName: { type: String, default: "" },
      broker: { type: String, default: "" },
      brokerStockRankId: { default: "" },
      newsPublishTime: { type: Number, default: 0 },
      theme: { type: String, default: "white" },
      newsId: { type: String, default: "" },
      accountOpenFlag: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
    },
    components: {
      MarketIcon: function () {
        return "./MarketIcon.js";
      },
    },
    data: function () {
      return {
        topStocksData: [],
        detailStocksData: [],
        mIsExpanded: !1,
        canShowOpenAccountBtn: !1,
        subtitleText: "自选哥为大家梳理了本月券商金股，大家不要错过热门机会。",
        intersectionObserver: null,
        topStocksExposeReported: {},
        availableAddStockList: [],
        detailStockHeight: 0,
        currentTimeStep: 0,
      };
    },
    beforeDestroy: function () {
      this.intersectionObserver && this.intersectionObserver.disconnect();
    },
    computed: {
      openAccountStatData: function () {
        var t = this.env,
          e = t.__APP__,
          o = t.__WZQ__;
        return e ? "Iwy00p000b007" : o ? "INd00p000a036" : "";
      },
      addStockStatData: function () {
        var t = this.env,
          e = t.__APP__,
          o = t.__WZQ__;
        return e ? "IXz00p000l086" : o ? "IAm00p000l085" : "";
      },
      moreText: function () {
        return this.mIsExpanded ? "收起" : "查看全部名单";
      },
      arrowOrientCss: function () {
        return this.mIsExpanded ? "arrow-up" : "arrow-down";
      },
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      isMP: function () {
        return this.env.__MP__;
      },
      isHasOpenAccount: function () {
        return !1 === this.canShowOpenAccountBtn;
      },
      canShowStokRank: function () {
        return (
          this.topStocksData &&
          this.topStocksData.length > 0 &&
          this.detailStocksData &&
          this.detailStocksData.length > 0
        );
      },
      brokerGoldStockMonthHeadSrc: function () {
        return "https://st.gtimg.com/design/".concat(
          p.getGoldStockTitleImgName(
            p.getMonth(this.currentTimeStep),
            this.theme
          )
        );
      },
    },
    created: function () {
      this.getGoldStockData(), this.checkAccountOpen();
    },
    mounted: function () {
      this.isMP && this.report("hq_module_brow");
    },
    methods: {
      contentStyle: function (t, e) {
        var o = 28;
        return (
          e && t && t.length > 4 && (o = 18),
          { marginRight: "".concat(o, "px") }
        );
      },
      getGoldStockData: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var n,
              r,
              a,
              i,
              c,
              s = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        l.StockAPiService.queryBrokerGoldStocks(
                          this.brokerStockRankId,
                          this.helper
                        )
                      );
                    case 3:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 6;
                        break;
                      }
                      t.t0 = {};
                    case 6:
                      if (
                        ((n = t.t0),
                        "object" == o(n.data) &&
                          void 0 !== n.data &&
                          null !== n.data)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.$emit("brokerGoldStockRequestFail")
                      );
                    case 9:
                      n.data.publish_time
                        ? (this.currentTimeStep = n.data.publish_time)
                        : (this.currentTimeStep = this.newsPublishTime),
                        (r = this.helper.env),
                        (a = r.__APP__),
                        (i = !1),
                        a && (i = !0),
                        n.data.hots &&
                          n.data.hots.length > 0 &&
                          (n.data.hots.forEach(function (t) {
                            var e = h.splitSymbol(t.symbol),
                              o = e.market,
                              n = e.scode;
                            (t.market = o),
                              (t.scode = n),
                              (t.brokersStr = t.brokers.join("、")),
                              t.name.split("[") &&
                                (t.name = t.name.split("[")[0]),
                              i && s.queryStockAddedStatusApp(t.symbol),
                              s.availableAddStockList.push(t.symbol);
                          }),
                          (this.topStocksData = n.data.hots || [])),
                        !i &&
                          this.availableAddStockList &&
                          this.availableAddStockList.length > 0 &&
                          ((c = this.availableAddStockList.join(",")),
                          this.queryStockAddedStatus(c)),
                        n.data.details &&
                          n.data.details.length > 0 &&
                          (n.data.details.forEach(function (t) {
                            (t.stocks = t.stocks.map(function (t) {
                              return t.split("[") ? t.split("[")[0] : t;
                            })),
                              (t.stocksStr = t.stocks.join("、"));
                          }),
                          (this.detailStocksData = n.data.details || [])),
                        (this.topStocksData.length <= 0 ||
                          this.detailStocksData.length <= 0) &&
                          this.$emit("brokerGoldStockRequestFail"),
                        this.$nextTick(function () {
                          s.reportExpose();
                        }),
                        (t.next = 19);
                      break;
                    case 16:
                      (t.prev = 16),
                        (t.t1 = t.catch(0)),
                        this.$emit("brokerGoldStockRequestFail");
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 16]]
            );
          })
        );
      },
      checkAccountOpen: function () {
        var t = this,
          e = this.env,
          o = e.__APP__,
          n = e.__WZQ__,
          r = e.__MP__,
          a = this.helper.shy;
        o
          ? a.getUserInfo(function (e) {
              e && "none" !== e.type
                ? t.requestBrokerListData(e)
                : (t.canShowOpenAccountBtn = !0);
            })
          : n
          ? this.userInfo &&
            this.userInfo.userstate &&
            ("0" === this.userInfo.userstate || "3" === this.userInfo.userstate)
            ? (this.canShowOpenAccountBtn = !1)
            : (this.canShowOpenAccountBtn = !0)
          : r && (this.canShowOpenAccountBtn = !this.accountOpenFlag);
      },
      requestBrokerListData: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l.StockAPiService.getBrokerList(e, this.helper)
          .then(function (e) {
            t.resultHandle(e);
          })
          .catch(function (e) {
            t.resultHandle(e);
          });
      },
      resultHandle: function (t) {
        var e = !1,
          o = t.has_bind;
        if (o)
          for (var n = 0; n < o.length; n++) {
            var r = o[n];
            if (1 === parseInt(r.is_default, 10)) {
              e = !0;
              break;
            }
          }
        this.canShowOpenAccountBtn = !e;
      },
      onOpenAccountClick: function () {
        this.report("brokergoldstock_module_openaccount_click");
        var t = this.env,
          e = t.__APP__,
          o = t.__WZQ__;
        if (t.__MP__) {
          var n = "/pages/asset/index?stat_data=".concat(
            this.openAccountStatData
          );
          this.$emit("routeToPage", {
            url: "/pages/broker/transfer?url=".concat(
              encodeURIComponent(n),
              "&linkscene=h5"
            ),
          });
        } else
          e
            ? this.gotoOpenAccountAPPPage()
            : o && this.gotoOpenAccountWzqPage();
      },
      gotoOpenAccountAPPPage: function () {
        var t = this,
          e = this.helper.shy;
        e.getUserInfo(function (o) {
          if (o && "none" !== o.type) {
            var n = "qqstock://GotoTradeTab?info=".concat(
              encodeURIComponent(
                JSON.stringify({ report_channel: "", index: 0 })
              )
            );
            e.navigateTo({ url: n });
          } else
            e.login(function (e) {
              "success" === e.status &&
                setTimeout(function () {
                  t.checkAccountOpen();
                }, 2e3);
            });
        });
      },
      gotoOpenAccountWzqPage: function () {
        var t = this,
          e = "AssetIndex";
        this.isHasOpenAccount ||
          ((e = "ApplyIndex"),
          this.$toast("您还没有开通股票账户，请先开通后再申购")),
          setTimeout(function () {
            t.$emit("routeToPage", {
              name: e,
              query: { stat_data: t.openAccountStatData },
            });
          }, 1e3);
      },
      onFooterClick: function () {
        var t = this;
        if (((this.mIsExpanded = !this.mIsExpanded), this.mIsExpanded))
          this.report("brokergoldstock_module_expand_click"),
            this.$nextTick(function () {
              t.isMP
                ? t.hqBridge.wx
                    .createSelectorQuery()
                    .in(t)
                    .select(".rank-detail-stocks")
                    .boundingClientRect(function (e) {
                      var o = e.height;
                      t.detailStockHeight = o;
                    })
                    .exec()
                : t.$refs.rankDetailRef &&
                  (t.detailStockHeight = t.$refs.rankDetailRef.offsetHeight);
            });
        else if (
          (this.report("brokergoldstock_module_shrink_click"), this.isMP)
        ) {
          var e = this.hqBridge.wx.getStorageSync(
            "miniNewsDetailScrollTop"
          ).scrollTop;
          this.hqBridge.wx.pageScrollTo({
            scrollTop: e - this.detailStockHeight,
            duration: 0,
          });
        } else {
          var o = document.body.scrollTop || document.documentElement.scrollTop;
          document.body &&
            (document.body.scrollTop = o - this.detailStockHeight),
            document.documentElement &&
              (document.documentElement.scrollTop = o - this.detailStockHeight);
        }
      },
      onHotStockListItemClick: function (t) {
        if (this.topStocksData && !(this.topStocksData.length <= 0)) {
          var e = this.topStocksData[t],
            o = {};
          (o.code = e.symbol),
            (o.name = e.name),
            this.report("brokergoldstock_module_stock_click"),
            this.$emit("goToStockDetail", o);
        }
      },
      report: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
      checkAppLogin: function () {
        var t = this;
        return new Promise(function (e) {
          t.helper.shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      queryStockAddedStatusApp: function (t) {
        var e = this;
        this.env.__APP__ &&
          this.helper.shy.checkStockExist(t, function (o) {
            var n = (o || {}).exist;
            (e.added = n), e.updateStocks(t, n);
          });
      },
      queryStockAddedStatus: function (t) {
        return d(
          this,
          null,
          e().mark(function o() {
            var n, r, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.env.__APP__) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (
                        (e.next = 5),
                        l.StockAPiService.queryStocksAddStatus(t, this.helper)
                      );
                    case 5:
                      if ((n = e.sent) && 0 === n.code && n.data)
                        for (a in (r = n.data))
                          t.includes(a) && this.updateStocks(a, r[a]);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      AppToggleAdded: function (t, e) {
        var o = this,
          n = this.helper.shy;
        this.updateStocks(t, e);
        var r = function (n) {
          (n && "fail" !== n.status) || o.updateStocks(t, !e),
            o.addStockReport(e ? "add" : "cancel", t);
        };
        e ? n.addStockToGroup(t, void 0, "1", r) : n.removeStockFromGroup(t, r);
      },
      addStock: function (t, o, n) {
        return d(
          this,
          null,
          e().mark(function r() {
            var a,
              i,
              c,
              s,
              u,
              d,
              h = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (n.stopPropagation(),
                        n.preventDefault(),
                        (a = this.helper),
                        (i = a.env),
                        (c = a.shy),
                        !i.__APP__)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 5), this.checkAppLogin();
                    case 5:
                      if (!e.sent) {
                        e.next = 9;
                        break;
                      }
                      this.AppToggleAdded(t, o), (e.next = 10);
                      break;
                    case 9:
                      c.login(function (e) {
                        "success" === e.status && h.AppToggleAdded(t, o);
                      });
                    case 10:
                      e.next = 24;
                      break;
                    case 12:
                      return (
                        this.updateStocks(t, o),
                        (e.prev = 13),
                        (s = {
                          timestamp: new Date().getTime(),
                          act: o ? "sa" : "sd",
                          grpid: "unlogingrp1",
                          code: t,
                        }),
                        (u = { seq: encodeURIComponent(JSON.stringify([s])) }),
                        (e.next = 18),
                        l.StockAPiService.queryStockAdd(u, this.helper)
                      );
                    case 18:
                      (d = e.sent) && 0 !== d.code && this.updateStocks(t, !o),
                        this.addStockReport(o ? "add" : "cancel", t),
                        (e.next = 24);
                      break;
                    case 22:
                      (e.prev = 22), (e.t0 = e.catch(13));
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this,
              [[13, 22]]
            );
          })
        );
      },
      updateStocks: function (e, o) {
        this.topStocksData = this.topStocksData.map(function (n) {
          return n.symbol === e
            ? ((d = (function (e, o) {
                for (var n in o || (o = {})) c.call(o, n) && u(e, n, o[n]);
                if (i) {
                  var r,
                    a = t(i(o));
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      n = r.value;
                      s.call(o, n) && u(e, n, o[n]);
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                }
                return e;
              })({}, n)),
              r(d, a({ added: o })))
            : n;
          var d;
        });
      },
      addStockReport: function (t, e) {
        var o = {
          fchannel_id_fm_i: this.addStockStatData || "",
          stocklist: e || "",
          newsid: this.newsId || "",
        };
        t && this.report("brokergoldstock_module_stock_".concat(t), o);
      },
      reportExpose: function () {
        var t = this;
        if (this.env.__MP__)
          this.addStockReport(
            "brow",
            this.availableAddStockList && this.availableAddStockList.length > 0
              ? this.availableAddStockList.join(",")
              : ""
          );
        else if (
          window.IntersectionObserver &&
          !(this.availableAddStockList.length < 1)
        ) {
          this.intersectionObserver = new IntersectionObserver(
            function (e) {
              if (
                !(e[0].intersectionRatio < 0.5) &&
                (e[0].target.id.includes("brokerGoldStockTitle") &&
                  (t.report("hq_module_brow", { foperation_purpose: "zixuan" }),
                  t.intersectionObserver.unobserve(
                    t.$refs.brokerGoldStockTitleRef
                  )),
                e[0].target.id.includes("rank-content-"))
              ) {
                var o = e[0].target.id,
                  n = parseInt(o.replace("rank-content-", "")),
                  r = t.availableAddStockList[n];
                r &&
                  !t.topStocksExposeReported[r] &&
                  (t.addStockReport("brow", r),
                  (t.topStocksExposeReported[r] = !0),
                  t.intersectionObserver.unobserve(
                    document.querySelector("#rank-content-".concat(n))
                  ));
              }
            },
            { threshold: [0.5, 1] }
          );
          for (var e = 0; e < this.topStocksData.length; e++)
            this.intersectionObserver.observe(
              document.querySelector("#rank-content-".concat(e))
            );
          this.intersectionObserver.observe(this.$refs.brokerGoldStockTitleRef);
        }
      },
    },
  };
Array || k.resolveComponent("market-icon")();
var S = k._export_sfc(f, [
  [
    "render",
    function (t, e, o, n, r, a) {
      return k.e(
        {
          a:
            r.topStocksData &&
            r.topStocksData.length > 0 &&
            r.detailStocksData &&
            r.detailStocksData.length > 0,
        },
        r.topStocksData &&
          r.topStocksData.length > 0 &&
          r.detailStocksData &&
          r.detailStocksData.length > 0
          ? k.e(
              { b: a.isMP },
              a.isMP
                ? { c: a.brokerGoldStockMonthHeadSrc }
                : k.e(
                    { d: a.brokerGoldStockMonthHeadSrc, e: "black" == o.theme },
                    (o.theme, {})
                  ),
              { f: k.t(r.subtitleText), g: r.canShowOpenAccountBtn },
              r.canShowOpenAccountBtn
                ? {
                    h: k.o(function (t) {
                      return a.onOpenAccountClick();
                    }, 5653),
                  }
                : {},
              { i: r.canShowOpenAccountBtn },
              r.canShowOpenAccountBtn
                ? {
                    j: k.o(function (t) {
                      return a.onOpenAccountClick();
                    }, 5654),
                  }
                : {},
              { k: r.topStocksData && r.topStocksData.length > 0 },
              r.topStocksData && r.topStocksData.length > 0
                ? {
                    l: k.f(r.topStocksData, function (t, e, o) {
                      return k.e(
                        {
                          a: k.t(t.name || ""),
                          b: "5770f1a5-0-" + o,
                          c: k.p({ market: t.market, scode: t.symbol }),
                          d: k.t(t.scode),
                          e: t.name && t.name.length > 4 ? "18px" : "28px",
                          f: k.t(t.count),
                          g: k.t(t.brokersStr),
                          h: t.added,
                        },
                        t.added
                          ? {
                              i: k.o(
                                function (e) {
                                  return a.addStock(t.symbol, !1, e);
                                },
                                5655,
                                e
                              ),
                            }
                          : {
                              j: k.o(
                                function (e) {
                                  return a.addStock(t.symbol, !0, e);
                                },
                                5656,
                                e
                              ),
                            },
                        {
                          k: "rank-content-".concat(e),
                          l: k.o(
                            function (t) {
                              return a.onHotStockListItemClick(e);
                            },
                            5657,
                            e
                          ),
                          m: e,
                        }
                      );
                    }),
                  }
                : {},
              {
                m:
                  r.mIsExpanded &&
                  r.detailStocksData &&
                  r.detailStocksData.length > 0,
              },
              r.mIsExpanded &&
                r.detailStocksData &&
                r.detailStocksData.length > 0
                ? {
                    n: k.f(r.detailStocksData, function (t, e, o) {
                      return { a: k.t(t.name), b: k.t(t.stocksStr), c: e };
                    }),
                  }
                : {},
              {
                o: k.t(a.moreText),
                p: k.n(a.arrowOrientCss),
                q: k.o(function (t) {
                  return a.onFooterClick();
                }, 5658),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5770f1a5"],
]);
wx.createComponent(S);
