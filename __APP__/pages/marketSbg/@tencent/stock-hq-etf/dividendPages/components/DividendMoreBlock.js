require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var i in t || (t = {})) l.call(t, i) && s(e, i, t[i]);
    if (o) {
      var r,
        a = n(o(t));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          i = r.value;
          u.call(t, i) && s(e, i, t[i]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return r(e, a(t));
  },
  h = function (e, t, n) {
    return new Promise(function (i, r) {
      var a = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        l = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(a, o);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  p = require("../../../stock-hq-data/index.js"),
  m = require("../../utils/common.js"),
  g = require("../../api/index.js"),
  k = require("../DividendDetail.js"),
  v = require("../../../stock-hq-core/utils/f2-fit/tool.js");
function y(e) {
  return null == e || "" === e ? "" : String(e).replace(/[+%,次\s]/g, "");
}
var b = {
    name: {
      value: "name",
      text: "指数过滤",
      isFreeze: !0,
      isStockName: !0,
      autoFontSize: !0,
      className: "col-40 align-left",
      showBtn: !0,
      unit: "",
    },
    dividendRate: {
      value: "dividendRate",
      apiField: "dividend_yield",
      text: "股息率",
      isSort: !0,
      showBtn: !1,
      isPercent: !0,
      className: "col-20 margin-right",
      unit: "%",
      formatValue: m.formatPercentValue,
    },
    yearChange: {
      value: "yearChange",
      apiField: "change_rate_1y",
      text: "近1年涨幅",
      isSort: !0,
      showBtn: !1,
      isPercent: !0,
      isSetColor: !0,
      className: "col-30 margin-right",
      unit: "%",
      rate: !0,
      formatValue: m.formatChangeRateValue,
    },
    dividendCount: {
      value: "dividendCount",
      apiField: "dividend_count_1y",
      text: "近1年分红次数",
      isSort: !0,
      showBtn: !1,
      className: "col-35 margin-right",
      unit: "次",
      formatValue: function (e) {
        return "" === e ? "--" : "".concat(e, "次");
      },
    },
    volatility: {
      value: "volatility",
      apiField: "volatility_1y",
      text: "近1年波动率",
      isSort: !0,
      showBtn: !1,
      isPercent: !0,
      isSetColor: !1,
      className: "col-35 margin-right",
      unit: "%",
      formatValue: m.formatPercentValue,
    },
    turnover: {
      value: "turnover",
      apiField: "turnover",
      text: "成交额",
      isSort: !0,
      showBtn: !1,
      className: "col-30 margin-right",
      unit: "",
      big: !0,
      thousand: !0,
    },
  },
  _ = [
    {
      key: "all",
      name: "全部",
      columns: [
        "name",
        "dividendRate",
        "yearChange",
        "dividendCount",
        "volatility",
        "turnover",
      ],
      defaultSort: { column: "yearChange", orderBy: "DESC" },
    },
    {
      key: "highYield",
      name: "高股息",
      boardType: "high_yield",
      columns: [
        "name",
        "dividendRate",
        "yearChange",
        "dividendCount",
        "volatility",
        "turnover",
      ],
      defaultSort: { column: "dividendRate", orderBy: "DESC" },
    },
    {
      key: "stable",
      name: "稳定分红",
      columns: [
        "name",
        "dividendCount",
        "yearChange",
        "dividendRate",
        "volatility",
        "turnover",
      ],
      defaultSort: { column: "dividendCount", orderBy: "DESC" },
    },
    {
      key: "lowVol",
      name: "红利低波",
      boardType: "low_volatility",
      columns: [
        "name",
        "volatility",
        "yearChange",
        "dividendRate",
        "dividendCount",
        "turnover",
      ],
      defaultSort: { column: "volatility", orderBy: "ASC" },
    },
  ],
  x = {
    tabs: _.map(function (e) {
      return { name: e.name, key: e.key };
    }),
    moreBlockTabs: _.map(function (e) {
      return { name: e.name, key: e.key };
    }),
    getTabDefinition: function (e) {
      return (
        _.find(function (t) {
          return t.key === e;
        }) || null
      );
    },
    getColumn: function (e) {
      return b[e] || null;
    },
    getColumns: function (e) {
      var t = this.getTabDefinition(e);
      return t
        ? t.columns.map(function (e) {
            var n,
              i,
              r = b[e];
            return t.defaultSort && t.defaultSort.column === e
              ? ((n = r),
                (i = t.defaultSort.orderBy),
                d(c({}, n), { orderBy: i }))
              : r;
          })
        : [];
    },
    getMiddleColumn: function (e) {
      var t = this.getTabDefinition(e);
      return t ? b[t.columns[1]] : null;
    },
    formatValue: function (e, t) {
      if (!e) return "--";
      var n = b[t];
      if (!n) return "--";
      var i = e[n.value];
      return null == i || "" === i
        ? "--"
        : n.formatValue
        ? n.formatValue(i)
        : i;
    },
    formatRankItem: function (e) {
      var t = e.symbol || "";
      return {
        chooseSymbol: t,
        code: t,
        codeformat: (p.utils.splitSymbol(t) || {}).scode || t,
        name: e.name || "",
        labels: Array.isArray(e.labels) ? e.labels : [],
        tag: (Array.isArray(e.labels) && e.labels[0] && e.labels[0].name) || "",
        desc: e.selling_point || "",
        dividendRate: y(e.dividend_yield),
        yearChange: y(e.change_rate_1y),
        dividendCount: y(e.dividend_count_1y),
        volatility: y(e.volatility_1y),
        turnover: y(e.turnover),
      };
    },
    getTabConfig: function (e) {
      var t = this.getTabDefinition(e);
      if (!t) return null;
      var n = b[t.columns[1]],
        i = b[t.defaultSort.column];
      return {
        boardType: t.boardType || t.key,
        sortType: null == i ? void 0 : i.apiField,
        sortDirect: "ASC" === t.defaultSort.orderBy ? "up" : "down",
        middleField: null == n ? void 0 : n.value,
        middleLabel: null == n ? void 0 : n.text,
      };
    },
    getRequestParams: function (e) {
      var t = e.key,
        n = e.indexFilter,
        i = e.offset,
        r = void 0 === i ? 0 : i,
        a = e.count,
        o = e.sortColumn,
        l = e.sortDirect,
        u = this.getTabDefinition(t);
      if (!u) return null;
      var s = u.boardType || u.key,
        c = b[u.defaultSort.column],
        d = o ? b[o] : c,
        h = l || ("ASC" === u.defaultSort.orderBy ? "up" : "down");
      return {
        board_type: n ? "".concat(s, "_group_by_index") : s,
        sort_type: null == d ? void 0 : d.apiField,
        offset: r,
        count: a,
        with_selling_point: 1,
        direct: h,
      };
    },
    get columnConfigMap() {
      var e = this;
      return _.reduce(function (t, n) {
        return (t[n.key] = e.getColumns(n.key)), t;
      }, {});
    },
  };
var S = x.moreBlockTabs,
  C = {
    all: "more_bonus_etf_list_brow",
    highYield: "more_bonus_etf_high_dividend_brow",
    stable: "more_bonus_etf_stable_dividend_brow",
    lowVol: "more_bonus_etf_bonus_low_brow",
  };
function w(t) {
  return S.reduce(function (n, i) {
    return d(c({}, n), e({}, i.key, t));
  }, {});
}
var T = {
  options: { styleIsolation: "shared" },
  inject: ["hqBridge"],
  components: {
    Tabbar: function () {
      return "../../components/Tabbar.js";
    },
    stStatus: function () {
      return "../../../../../../node-modules/@tencent/st-status/mp/index.js";
    },
  },
  data: function () {
    return {
      isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
      rankIndex: 0,
      rankConfig: S,
      rankDataMap: S.reduce(function (t, n) {
        return d(c({}, t), e({}, n.key, { list: [], loaded: !1, failed: !1 }));
      }, {}),
      indexFilterMap: w(!0),
      loadingMap: w(!1),
      isSwitchByClick: !1,
      currSwiperHeight: 310,
      isMP: f.StockBridge.ENV === f.EnvTypeEnum.MP,
    };
  },
  mounted: function () {
    var e = this;
    (this.polling = (function (e) {
      var n = e.hqBridge,
        i = e.fetchRankData,
        r = e.getKey,
        a = !1,
        o = !1,
        l = null,
        u = k.createTradeTimePolling({
          hqBridge: n,
          onTradingChange: function (e) {
            var t = e.isTrading;
            a && t ? o || ((o = !0), c(5e3)) : s();
          },
        });
      function s() {
        (o = !1), l && (clearTimeout(l), (l = null));
      }
      function c() {
        var e = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 5e3;
        l && (clearTimeout(l), (l = null)),
          (l = setTimeout(function () {
            return h(
              e,
              null,
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = a && o), !e.t0)) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 4), i(r());
                      case 4:
                        a && o && c(5e3);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          }, n));
      }
      return {
        start: function () {
          a || ((a = !0), i(r()), u.start());
        },
        stop: function () {
          (a = !1), u.stop(), s();
        },
        reschedule: function () {
          o && c(5e3);
        },
      };
    })({
      hqBridge: this.hqBridge,
      fetchRankData: function (t) {
        return e.fetchRankData(t);
      },
      getKey: function () {
        return e.currKey;
      },
    })),
      this.polling.start(),
      this.$nextTick(function () {
        e.setSwiperHeight(e.rankIndex), e.scheduleHeightRetry();
      }),
      this.reportTabBrow(this.currKey);
  },
  activated: function () {
    this.polling && this.polling.start();
  },
  deactivated: function () {
    this.polling && this.polling.stop();
  },
  beforeDestroy: function () {
    this.clearHeightRetry(), this.polling && this.polling.stop();
  },
  computed: {
    currKey: function () {
      var e;
      return (
        (null == (e = this.rankConfig[this.rankIndex]) ? void 0 : e.key) ||
        "all"
      );
    },
    middleColumn: function () {
      return x.getMiddleColumn(this.currKey);
    },
    currentIndexFilter: function () {
      return !1 !== this.indexFilterMap[this.currKey];
    },
  },
  methods: {
    fetchRankData: function (n) {
      return h(
        this,
        null,
        t().mark(function i() {
          var r,
            a,
            o,
            l,
            u,
            s,
            h = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!this.loadingMap[n]) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((
                        (null == (r = this.rankDataMap[n]) ? void 0 : r.list) ||
                        []
                      ).length > 0 ||
                        (this.rankDataMap = d(
                          c({}, this.rankDataMap),
                          e({}, n, {
                            list: k.placeholderRows(3),
                            loaded:
                              (null == (a = this.rankDataMap[n])
                                ? void 0
                                : a.loaded) || !1,
                          })
                        )),
                      (this.loadingMap = d(
                        c({}, this.loadingMap),
                        e({}, n, !0)
                      )),
                      !(l = x.getRequestParams({
                        key: n,
                        indexFilter: this.indexFilterMap[n],
                        offset: 0,
                        count: 3,
                      })))
                    ) {
                      t.next = 20;
                      break;
                    }
                    return (
                      (t.prev = 5),
                      (t.next = 8),
                      g.api.getDividendRankList(this.hqBridge, l)
                    );
                  case 8:
                    if (
                      ((u = t.sent),
                      (this.loadingMap = d(
                        c({}, this.loadingMap),
                        e({}, n, !1)
                      )),
                      0 === Number(null == u ? void 0 : u.code))
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      void (this.rankDataMap = d(
                        c({}, this.rankDataMap),
                        e({}, n, { list: [], loaded: !0 })
                      ))
                    );
                  case 11:
                    (s = (
                      (null == (o = null == u ? void 0 : u.data)
                        ? void 0
                        : o.items) || []
                    ).map(function (e) {
                      return x.formatRankItem(e);
                    })),
                      (this.rankDataMap = d(
                        c({}, this.rankDataMap),
                        e({}, n, { list: s, loaded: !0 })
                      )),
                      this.$nextTick(function () {
                        h.setSwiperHeight(h.rankIndex), h.scheduleHeightRetry();
                      }),
                      (t.next = 18);
                    break;
                  case 15:
                    (t.prev = 15),
                      (t.t0 = t.catch(5)),
                      (this.loadingMap = d(
                        c({}, this.loadingMap),
                        e({}, n, !1)
                      )),
                      (this.rankDataMap = d(
                        c({}, this.rankDataMap),
                        e({}, n, { list: [], loaded: !0, failed: !0 })
                      ));
                  case 18:
                    t.next = 21;
                    break;
                  case 20:
                    this.loadingMap = d(c({}, this.loadingMap), e({}, n, !1));
                  case 21:
                  case "end":
                    return t.stop();
                }
            },
            i,
            this,
            [[5, 15]]
          );
        })
      );
    },
    onErrorRetry: function (t) {
      (this.rankDataMap = d(
        c({}, this.rankDataMap),
        e({}, t, { list: [], loaded: !1, failed: !1 })
      )),
        (this.loadingMap = d(c({}, this.loadingMap), e({}, t, !1))),
        this.fetchRankData(t);
    },
    rankSwitchTab: function (e) {
      var t = this;
      if (e !== this.rankIndex) {
        (this.isSwitchByClick = !0), (this.rankIndex = e);
        var n = this.currKey;
        f.StockBridge.report(
          "hq.etf.etf_dividend_more_".concat(n, "_tab_click")
        ),
          this.reportTabBrow(n),
          this.fetchRankData(n),
          this.polling && this.polling.reschedule(),
          this.$nextTick(function () {
            t.setSwiperHeight(t.rankIndex), t.scheduleHeightRetry();
          });
      }
    },
    rankSwiperChange: function (e) {
      var t = this,
        n = (null == e ? void 0 : e.detail) || {},
        i = n.current;
      if ("touch" === n.source) {
        if (i !== this.rankIndex) {
          this.rankIndex = i || 0;
          var r = this.currKey;
          f.StockBridge.report(
            "hq.etf.etf_dividend_more_".concat(r, "_tab_click")
          ),
            this.reportTabBrow(r),
            this.fetchRankData(r),
            this.polling && this.polling.reschedule(),
            this.$nextTick(function () {
              t.setSwiperHeight(t.rankIndex), t.scheduleHeightRetry();
            });
        }
      } else this.isSwitchByClick = !1;
    },
    setSwiperHeight: function (e) {
      var n = this;
      this.$nextTick(function () {
        return h(
          n,
          null,
          t().mark(function n() {
            var i, r, a, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = this.$refs["list".concat(e, "-wrapper")]),
                        !(r = Array.isArray(i) ? i[0] : i) || !r.offsetHeight)
                      ) {
                        t.next = 5;
                        break;
                      }
                      e === this.rankIndex &&
                        r.offsetHeight !== this.currSwiperHeight &&
                        (this.currSwiperHeight = r.offsetHeight),
                        (t.next = 15);
                      break;
                    case 5:
                      return (
                        (t.prev = 5),
                        (t.next = 8),
                        v.getEleInfo(".ranktop-".concat(e), this)
                      );
                    case 8:
                      (a = t.sent),
                        (o = (null == a ? void 0 : a.height) || 0),
                        e === this.rankIndex &&
                          o &&
                          o !== this.currSwiperHeight &&
                          (this.currSwiperHeight = o),
                        (t.next = 15);
                      break;
                    case 13:
                      (t.prev = 13), (t.t0 = t.catch(5));
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[5, 13]]
            );
          })
        );
      });
    },
    scheduleHeightRetry: function () {
      var e = this;
      this.clearHeightRetry(),
        [50, 200, 500].forEach(function (t) {
          var n = setTimeout(function () {
            e.setSwiperHeight(e.rankIndex);
          }, t);
          (e.heightTimers = e.heightTimers || []), e.heightTimers.push(n);
        });
    },
    clearHeightRetry: function () {
      (this.heightTimers || []).forEach(function (e) {
        return clearTimeout(e);
      }),
        (this.heightTimers = []);
    },
    setZdpClass: m.setZdpClass,
    formatValue: x.formatValue.bind(x),
    toggleIndexFilter: function () {
      var t = this.currKey;
      (this.indexFilterMap = d(
        c({}, this.indexFilterMap),
        e({}, t, !this.indexFilterMap[t])
      )),
        f.StockBridge.mtaReport({
          busi: "hq",
          eventName: "more_bonus_etf_module_index_click",
        }),
        this.fetchRankData(t);
    },
    openTip: function () {
      this.$emit("openTip");
    },
    handleMoreClick: function () {
      f.StockBridge.report("hq.etf.etf_dividend_more_list_click"),
        f.StockBridge.mtaReport({
          busi: "hq",
          eventName: "more_bonus_etf_view_more_click",
        });
      var e = this.currKey || "all",
        t = { curTab: e, indexFilter: this.indexFilterMap[e] ? "1" : "0" };
      f.StockBridge.openExtraWebview(
        "https://wzq.tenpay.com/mp/v2/index.html#/more-dividend-list",
        t
      ),
        this.$emit("gotoMore");
    },
    reportTabBrow: function (e) {
      var t = C[e];
      t && f.StockBridge.mtaReport({ busi: "hq", eventName: t });
    },
    handleStockClick: function (e) {
      if (e) {
        f.StockBridge.report("hq.etf.etf_dividend_detail_stock_click", {
          stockid: e,
        }),
          f.StockBridge.mtaReport({
            busi: "hq",
            eventName: "more_bonus_etf_list_click",
          });
        var t = p.utils.splitSymbol(e) || {},
          n = t.market,
          i = t.scode;
        f.StockRouter.routeTo({
          name: "stockdetail",
          query: { market: n, scode: i },
        });
      }
    },
  },
};
Array || (f.resolveComponent("Tabbar") + f.resolveComponent("st-status"))();
var M = f._export_sfc(T, [
  [
    "render",
    function (e, t, n, i, r, a) {
      return {
        a: f.o(function () {
          return a.handleMoreClick && a.handleMoreClick.apply(a, arguments);
        }, 3579),
        b: f.o(a.rankSwitchTab, 3580),
        c: f.p({
          "rank-index": r.rankIndex,
          "rank-config": r.rankConfig,
          "align-left": !0,
        }),
        d: f.f(r.rankConfig, function (t, n, i) {
          return f.e(
            { a: r.rankDataMap[t.key].list.length },
            r.rankDataMap[t.key].list.length
              ? f.e(
                  {
                    b: a.currentIndexFilter
                      ? "https://st.gtimg.com/design/4b12f8220fdfff20ed5d76f524cf20a6.png"
                      : "https://st.gtimg.com/design/0fa6cabc0e83182bb29ffcc0575ae94c.png",
                    c: f.o(
                      function () {
                        return (
                          a.toggleIndexFilter &&
                          a.toggleIndexFilter.apply(a, arguments)
                        );
                      },
                      3581,
                      n
                    ),
                    d: f.o(
                      function () {
                        return (
                          a.toggleIndexFilter &&
                          a.toggleIndexFilter.apply(a, arguments)
                        );
                      },
                      3582,
                      n
                    ),
                    e: f.o(
                      function () {
                        return a.openTip && a.openTip.apply(a, arguments);
                      },
                      3583,
                      n
                    ),
                    f: a.middleColumn,
                  },
                  a.middleColumn ? { g: f.t(a.middleColumn.text) } : {},
                  {
                    h: f.f(
                      r.rankDataMap[t.key].list.slice(0, 3),
                      function (e, t, n) {
                        return f.e(
                          {
                            a: f.t(e.name || "--"),
                            b: f.t(e.codeformat || e.code || "--"),
                            c: e.tag,
                          },
                          e.tag ? { d: f.t(e.tag) } : {},
                          a.middleColumn
                            ? { e: f.t(a.formatValue(e, a.middleColumn.value)) }
                            : {},
                          {
                            f: f.t(a.formatValue(e, "yearChange")),
                            g: f.n(a.setZdpClass(e.yearChange)),
                            h: !("desc" in e),
                          },
                          "desc" in e && e.desc ? { j: f.t(e.desc) } : {},
                          {
                            i: e.desc,
                            k: t,
                            l: f.o(
                              function (t) {
                                return a.handleStockClick(
                                  e.chooseSymbol || e.code
                                );
                              },
                              3584,
                              t
                            ),
                          }
                        );
                      }
                    ),
                    i: a.middleColumn,
                  }
                )
              : r.rankDataMap[t.key].loaded
              ? f.e(
                  { k: r.rankDataMap[t.key].failed },
                  r.rankDataMap[t.key].failed
                    ? {
                        l: f.o(
                          function (e) {
                            return a.onErrorRetry(t.key);
                          },
                          3585,
                          n
                        ),
                        m: "67a51642-1-" + i,
                        n: f.p({ type: e.COMMON_PAGE_STATUS.ERROR }),
                      }
                    : {}
                )
              : {},
            {
              j: r.rankDataMap[t.key].loaded,
              o: "list".concat(n, "-wrapper"),
              p: f.n("ranktop-".concat(n)),
              q: n,
            }
          );
        }),
        e: r.rankIndex,
        f: "".concat(r.currSwiperHeight, "px"),
        g: f.o(function () {
          return a.rankSwiperChange && a.rankSwiperChange.apply(a, arguments);
        }, 3586),
        h: f.n(r.isLite ? "lite" : "pro"),
      };
    },
  ],
  ["__scopeId", "data-v-67a51642"],
]);
wx.createComponent(M);
