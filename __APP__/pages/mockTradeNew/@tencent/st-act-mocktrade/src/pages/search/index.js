var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var r = Object.defineProperty,
  s = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (t, e, s) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s);
  },
  h = function (t, e, r) {
    return new Promise(function (s, o) {
      var n = function (t) {
          try {
            c(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          try {
            c(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(n, i);
        };
      c((r = r.apply(t, e)).next());
    });
  },
  u = require("../../cp-util/navigator/index.js"),
  l = require("../../utils/tool.js"),
  p = require("../../services/ActTaskController.js"),
  f = require("../../services/BaseController.js"),
  d = require("../../utils/bridgeApi.js"),
  S = require("../../../../../../../common/vendor.js"),
  k = require("../../../../stock-hq-data/index.js"),
  g = require("../../services/SearchController.js"),
  T = "GOT_ASSET_OVERVIEW",
  b = "SEARCH_START",
  m = "SEARCH_SUCCESS",
  y = "GOT_TOP_SEARCHED_STOCKS",
  w = "GOT_SEARCH_HISTORY_DATA",
  I = "ERROR_ALERT",
  M = {
    LIGHT: { class: "pannel-title-light-entry", showArrow: !0 },
    NORMAL: { class: "pannel-title-entry", showArrow: !1 },
  },
  C = ["wzqlight", "mpwzq"],
  v = {
    components: {
      SearchPanel: function () {
        return "../../components/searchPanel.js";
      },
      errorModal: function () {
        return "../../components/errorModal.js";
      },
      Bubble: function () {
        return "../../cp-component/Bubble/mp.js";
      },
      taskLog: function () {
        return "../../components/taskLog.js";
      },
    },
    props: {
      srcsite: { type: String, default: "" },
      initStock: { type: Object, default: function () {} },
      infoParams: { type: Object, default: function () {} },
    },
    data: function () {
      return {
        showBubble: !1,
        currentTab: f.SEARCH_TAB_LIST.SEARCH_HISTORY,
        isLight: C.includes("mpweapp"),
        onePixel: 1,
        searchInput: "",
        searchInited: !1,
        searching: !1,
        chooseStockList: [],
        holdStockList: [],
        searchStockList: [],
        historyStockList: [],
        topSearchedStocks: [],
        searchesLoaded: !1,
        errorMsg: "",
        bubbleNode: "",
        popupConfig: {},
        showLog: !1,
        tasklog: "",
        rankItemWidth: "33.33%",
        MT: null,
        searchDebounce: null,
        searchHistoryCallback: null,
      };
    },
    computed: {
      topSearchedStocksNine: function () {
        var t;
        return null == (t = this.topSearchedStocks) ? void 0 : t.slice(0, 9);
      },
      currentStockList: function () {
        switch (this.currentTab) {
          case f.SEARCH_TAB_LIST.SEARCH_HISTORY:
            return this.historyStockList;
          case f.SEARCH_TAB_LIST.HOLD_STOCK:
            return this.holdStockList;
          case f.SEARCH_TAB_LIST.CHOOSE_STOCK:
            return this.chooseStockList;
        }
      },
      lightEntry: function () {
        return this.isLight ? M.LIGHT : M.NORMAL;
      },
    },
    watch: {
      infoParams: function (t) {
        return h(
          this,
          null,
          e().mark(function r() {
            var s,
              o = this;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        (this.$nextTick(function () {
                          return h(
                            o,
                            null,
                            e().mark(function t() {
                              return e().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        this.bubbleNode =
                                          this.$refs.assetFooter;
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
                        }),
                        !t || !t.act_actid)
                      ) {
                        r.next = 5;
                        break;
                      }
                      return (r.next = 3), this.isShowActTask();
                    case 3:
                      (s = r.sent), (this.showBubble = !!s);
                    case 5:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      searchInput: function (t) {
        this.setSearchInit(), this.searchDebounce(t);
      },
    },
    created: function () {
      return h(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (this.MT = g.createSearchController()),
                      (this.searchDebounce = l.debounce(
                        this.MT.search.bind(this.MT),
                        500
                      )),
                      (this.MT.searchInited = !1),
                      this.isValidStock(this.initStock) &&
                        ((this.searchInput = this.initStock.code),
                        this.setSearchInit()),
                      this.bindListeners(),
                      this.fetchChooseList(),
                      (this.searchHistoryCallback = this.MT.setSearchInit.bind(
                        this.MT,
                        !1
                      )),
                      S.StockBridge.busOn(
                        "growth-mocktrade-update-searchhistorylist",
                        this.searchHistoryCallback
                      );
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
    },
    deactivated: function () {
      this.MT.setSearchInit(!1);
    },
    beforeDestroy: function () {
      this.MT.off(T),
        this.MT.off(b),
        this.MT.off(m),
        this.MT.off(w),
        this.MT.off(I),
        this.MT.off(y),
        (this.MT.searchInited = !1),
        (this.MT.searching = !1),
        (this.searchDebounce = null),
        this.searchHistoryCallback &&
          S.StockBridge.busOff(
            "growth-mocktrade-update-searchhistorylist",
            this.searchHistoryCallback
          ),
        (this.searchHistoryCallback = null);
    },
    methods: {
      fetchChooseList: function () {
        var e = this;
        try {
          d.getChooseList().then(function (r) {
            var h;
            if (null == (h = r.data.grouplist) ? void 0 : h.length) {
              var u = r.data.grouplist[0].stocklist.filter(function (t) {
                return (
                  k.utils.isAMarket(t.type) ||
                  k.utils.isChuangYeStock(t.type) ||
                  k.utils.isKeChuangStock(t.type) ||
                  "ETF" === t.type
                );
              });
              e.chooseStockList = u.map(function (e) {
                var r, h, u, l, p, f;
                return (
                  "sz" == e.market ? (l = 0) : "sh" == e.market && (l = 1),
                  (p = (function (e, r) {
                    for (var s in r || (r = {})) i.call(r, s) && a(e, s, r[s]);
                    if (n) {
                      var o,
                        h = t(n(r));
                      try {
                        for (h.s(); !(o = h.n()).done; ) {
                          s = o.value;
                          c.call(r, s) && a(e, s, r[s]);
                        }
                      } catch (t) {
                        h.e(t);
                      } finally {
                        h.f();
                      }
                    }
                    return e;
                  })({}, e)),
                  (f = {
                    name: (null == (r = e.qt) ? void 0 : r.name) || "",
                    market: l,
                    code: "".concat(
                      null ==
                        (u = (null == (h = e.qt) ? void 0 : h.code) || e.symbol)
                        ? void 0
                        : u.slice(2)
                    ),
                  }),
                  s(p, o(f))
                );
              });
            }
          });
        } catch (t) {}
      },
      toggleTab: function (t) {
        (this.currentTab = t),
          this.MT.report("search", "tab", "click", {
            tab: [f.SEARCH_TAB_LIST[t]],
          });
      },
      onShareAppMessage: function () {
        return {
          title: "我在腾讯模拟炒股周赛赚大了",
          path: "/pages/mockTrade/src/pages/home/index",
          imageUrl: "https://wzq.gtimg.com/image/mp-weapp/index/share-big.jpg",
        };
      },
      isShowActTask: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var r, s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r = !1),
                        !(
                          this.infoParams &&
                          this.infoParams.act_actid &&
                          this.infoParams.act_tid &&
                          this.infoParams.act_id
                        ))
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (
                        (t.next = 4),
                        p.ActTaskController.isTaskDone(this.infoParams)
                      );
                    case 4:
                      (s = t.sent) && s.done && (r = !parseInt(s.done, 10));
                    case 6:
                      return t.abrupt("return", r);
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
      closeBubble: function () {
        this.showBubble = !1;
      },
      isValidStock: function (t) {
        return t && t.code && "--" !== t.code;
      },
      bindListeners: function () {
        var t = this;
        this.MT.on(T, function () {
          t.holdStockList = t.MT.holdStockList;
        }),
          this.MT.on(b, function () {
            t.searching = t.MT.searching;
          }),
          this.MT.on(m, function () {
            (t.searching = t.MT.searching),
              (t.searchStockList = t.MT.searchStockList);
          }),
          this.MT.on(w, function () {
            t.historyStockList = t.MT.historyStockList;
          }),
          this.MT.on(I, function (e) {
            "string" == typeof e && (t.errorMsg = e);
          }),
          this.MT.on(y, function () {
            (t.topSearchedStocks = t.MT.topSearchedStocks),
              (t.searchesLoaded = !0);
          });
      },
      tapSearch: function (t) {
        t && t.stopPropagation(),
          this.setSearchInit(),
          (this.currentTab = f.SEARCH_TAB_LIST.SEARCH_HISTORY),
          this.MT.report("search", "search", "click");
      },
      setSearchInit: function () {
        this.MT.searchInited ||
          (this.MT.setSearchInit(!0),
          (this.searchInited = this.MT.searchInited),
          this.$emit("inited"));
      },
      blurAllInput: function () {
        var t;
        null == (t = this.$refs.searchInput) || t.blur();
      },
      inputBlur: function (t) {
        t &&
          t.target &&
          t.target.tagName &&
          "input" === t.target.tagName.toLowerCase() &&
          window.scrollTo(0, 0);
      },
      clearInput: function () {
        this.MT.report("search", "search", "clear"),
          (this.searchInput = ""),
          this.isValidStock(this.initStock) && this.goStock(this.initStock, !0);
      },
      onTopSearchedStockClick: function (t) {
        var e;
        null == (e = this.$refs.searchInput) || e.blur(),
          this.$emit("goStock", t),
          this.MT.addHistory(t),
          this.MT.report("search", "rank_stock", "tap");
      },
      goStock: function (t) {
        var e,
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null == (e = this.$refs.searchInput) || e.blur(),
          this.MT.report("search", "stock", "go"),
          this.$emit("goStock", t),
          r || this.MT.addHistory(t);
      },
      goHotSearch: function () {
        var t;
        null == (t = this.$refs.searchInput) || t.blur(),
          this.MT.report("search", "rank_entry", "tap"),
          "mpweapp" !== S.ShellTypeEnum.SHY
            ? u.push("mockhot", "hippy", {
                title: "模拟炒股",
                showNav: !0,
                srcsite: this.srcsite,
              })
            : u.push(
                "qqstock://com.tencent.shy.mock_trade/mockhot?srcsite=".concat(
                  this.srcsite
                ),
                "shy",
                { title: "模拟炒股", showNav: !0 }
              );
      },
      showClearModel: function () {
        var t = this;
        S.StockBridge.modal({
          content: "确认删除近期搜索的股票?",
          confirmText: "删除",
          cancelText: "取消",
          confirmColor: this.isLight ? "#E63535" : "#3077EC",
          success: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { confirm: !0 };
            e.confirm && t.clearHistory();
          },
          showCancel: !0,
        });
      },
      clearHistory: function () {
        this.MT.clearHistory();
      },
      hideErrorMsg: function () {
        this.errorMsg = "";
      },
      showTaskLog: function () {
        this.showLog = !0;
      },
      closeTaskLog: function () {
        this.showLog = !1;
      },
    },
  };
Array ||
  (
    S.resolveComponent("bubble") +
    S.resolveComponent("search-panel") +
    S.resolveComponent("error-modal") +
    S.resolveComponent("taskLog")
  )();
var L = S._export_sfc(v, [
  [
    "render",
    function (t, e, r, s, o, n) {
      return S.e(
        {
          a: S.o(function () {
            return n.tapSearch && n.tapSearch.apply(n, arguments);
          }, 3269),
          b: S.o(function () {
            return n.tapSearch && n.tapSearch.apply(n, arguments);
          }, 3270),
          c: o.searchInput,
          d: S.o(function (t) {
            return (o.searchInput = t.target.value);
          }, 3271),
          e: o.searchInput,
        },
        o.searchInput
          ? {
              f: S.o(function () {
                return n.clearInput && n.clearInput.apply(n, arguments);
              }, 3272),
            }
          : {},
        { g: r.infoParams && r.infoParams.act_actid && o.showBubble },
        r.infoParams && r.infoParams.act_actid && o.showBubble
          ? {
              h: S.o(n.closeBubble, 3273),
              i: S.p({
                "bubble-node": o.bubbleNode,
                "cunrrent-index": o.searchInited
                  ? "mocksearch2"
                  : "mocksearch1",
                "info-params": r.infoParams,
                "popup-config": o.popupConfig,
              }),
            }
          : {},
        { j: o.searchInput },
        o.searchInput
          ? {
              k: S.o(n.goStock, 3274),
              l: S.p({
                "stock-list": o.searchStockList,
                search: o.searchInput,
                "empty-tip": !0,
                searching: o.searching,
                "search-inited": o.searchInited,
              }),
            }
          : o.searchInited
          ? S.e(
              { n: o.topSearchedStocks.length > 0 },
              o.topSearchedStocks.length > 0
                ? S.e(
                    { o: n.lightEntry.showArrow },
                    (n.lightEntry.showArrow, {}),
                    {
                      p: S.o(function () {
                        return (
                          n.goHotSearch && n.goHotSearch.apply(n, arguments)
                        );
                      }, 3275),
                      q: S.n(n.lightEntry.class),
                      r: S.f(n.topSearchedStocksNine, function (t, e, r) {
                        return {
                          a: S.t(t.name),
                          b: S.t(t.fullCode),
                          c: e,
                          d: S.o(
                            function (e) {
                              return n.onTopSearchedStockClick(t);
                            },
                            3276,
                            e
                          ),
                        };
                      }),
                      s: o.onePixel,
                      t: o.onePixel,
                      v: o.rankItemWidth,
                    }
                  )
                : {},
              {
                w: S.o(n.goStock, 3277),
                x: S.o(n.showClearModel, 3278),
                y: S.o(n.toggleTab, 3279),
                z: S.p({
                  "current-tab": o.currentTab,
                  "stock-list": n.currentStockList,
                }),
              }
            )
          : {},
        {
          m: o.searchInited,
          A: S.o(n.hideErrorMsg, 3280),
          B: S.p({ msg: o.errorMsg }),
          C: o.showLog,
        },
        o.showLog
          ? { D: S.o(n.closeTaskLog, 3281), E: S.p({ tasklog: o.tasklog }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-72340929"],
]);
wx.createComponent(L);
