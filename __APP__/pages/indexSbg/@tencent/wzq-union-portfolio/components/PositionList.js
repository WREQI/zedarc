var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, n) {
    return new Promise(function (r, o) {
      var i = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(i, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  r = require("../store/useStocksStore.js"),
  o = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  i = "position",
  s = {
    sharedComponents: !0,
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    components: {
      MarketIconSprite: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.js";
      },
      CaptionBar: function () {
        return "./CaptionBar/CaptionBar.js";
      },
      StockItemChart: function () {
        return "../../../../asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js";
      },
    },
    props: {
      stockList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tab: {
        type: Object,
        default: function () {
          return {};
        },
      },
      containerHeight: { type: String, default: "100%" },
      isCurrent: { type: Boolean, default: !1 },
      fullUrl: { type: String, default: "" },
      skin: { type: String, default: "white" },
      isMiniChartHide: { type: Boolean, default: void 0 },
      isLite: { type: Boolean, default: !1 },
    },
    emits: ["refresh"],
    setup: function (s, c) {
      var a = this,
        u = c.emit,
        l = n.computed(function () {
          return !0;
        }),
        p = n.computed(function () {
          return s.isLite;
        }),
        f =
          void 0 !== n.wx$1 &&
          "function" == typeof n.wx$1.request &&
          "function" == typeof n.wx$1.getSystemInfoSync,
        d = !1,
        m = !1,
        h = n.ref(!1),
        k = n.ref(!f);
      f &&
        setTimeout(function () {
          return (k.value = !0);
        }, 100);
      var S = n.computed(function () {
          return "width: 100%; height: ".concat(s.containerHeight);
        }),
        y = n.computed(function () {
          return r.formatDataFromPosition(s.stockList || []);
        }),
        v = r.useStocksStore(),
        g = n.computed(function () {
          return (
            p.value || (void 0 !== v.isMiniChartHide && !v.isMiniChartHide)
          );
        }),
        w = o.useViewStore(),
        C = n.computed(function () {
          return w.stockItemHeight || 98.4;
        }),
        b = n.computed(function () {
          var t;
          return (
            !!(
              f &&
              (null == (t = s.containerHeight) ? void 0 : t.includes("px")) &&
              s.stockList.length
            ) &&
            (s.stockList.length + 1) * C.value >= parseFloat(s.containerHeight)
          );
        });
      n.watch(
        function () {
          return s.stockList;
        },
        function (n) {
          return e(
            a,
            null,
            t().mark(function e() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      s.stockList.length && P(n);
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        { deep: !0 }
      ),
        n.watch(
          function () {
            return s.isCurrent;
          },
          function (t) {
            t &&
              s.stockList.length &&
              n.nextTick$1(function () {
                P(s.stockList);
              });
          }
        ),
        n.onMounted(function () {
          P(s.stockList);
        });
      var P = function (n) {
          return e(
            a,
            null,
            t().mark(function e() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = l.value && v.isMiniChartHide), t.t0)) {
                        t.next = 7;
                        break;
                      }
                      if (((t.t1 = n && n.length > 0), !t.t1)) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (t.next = 6),
                        o.StockMiniChartApi.batchGetMiniMins(n, i, s.fullUrl)
                      );
                    case 6:
                      o.StockMiniChartApi.drawStocksMins(n, i);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        M = function () {
          return e(
            a,
            null,
            t().mark(function e() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      u("refresh"), P(s.stockList);
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        };
      return {
        isMPPro: l,
        list: y,
        mpTriggered: h,
        enabled: k,
        mpScrollStyle: S,
        isMiniChartShow: g,
        showMpPlaceHolder: b,
        mpStartPull: function () {
          (h.value = !0),
            f &&
              !0 === d &&
              ((d = !1),
              n.StockBridge && n.StockBridge.busEmit("switchBigTitle", !1));
        },
        mpPullEnd: function () {
          h.value && (h.value = !1);
        },
        onPullRefresh: function () {
          if (!m) {
            M(), (m = !0);
            var t = setTimeout(function () {
              (h.value = !1), (m = !1), clearTimeout(t);
            }, 600);
          }
        },
        onListSort: function (t) {
          var e = t || {},
            n = e.orderBy,
            r = e.order;
          0 !== r
            ? (u("sort", {
                sortKey: { rise_per: "zdf", price: "new_price" }[n] || n,
                sortOrder: 1 === r ? 2 : 1,
              }),
              P(s.stockList))
            : u("sort", { sortOrder: 0 });
        },
        navigateStockDetail: function (t) {
          u("jumpStockDetail", t);
        },
      };
    },
  };
Array ||
  (
    n.resolveComponent("caption-bar") +
    n.resolveComponent("market-icon-sprite") +
    n.resolveComponent("StockItemChart")
  )();
var c = n._export_sfc(s, [
  [
    "render",
    function (t, e, r, o, i, s) {
      return n.e(
        {
          a: n.o(o.onListSort, 2688),
          b: n.p({
            groupId: "position",
            name: "股票(".concat(r.stockList.length, ")"),
          }),
          c: n.f(o.list, function (t, e, i) {
            return n.e(
              {
                a: n.t(t.name || "--"),
                b: n.n(t.name && t.name.length > 14 ? "small" : ""),
                c: "1dc1fd80-1-" + i,
                d: n.p({
                  type: t.type,
                  scode: t.scode,
                  market: t.market,
                  "stock-type": t.stock_type || t.type,
                }),
                e: n.t(t.trimedCode),
                f: 1 === t.delay && (t.HK_INDEX > 20 || void 0 === t.HK_INDEX),
              },
              (1 === t.delay && (t.HK_INDEX > 20 || t.HK_INDEX), {}),
              { g: "1" === t.usable },
              "1" === t.usable
                ? n.e(
                    {
                      h:
                        o.isMiniChartShow &&
                        "退市" !== t.riseDropVal &&
                        "待上市" !== t.riseDropVal &&
                        "待发行" !== t.riseDropVal,
                    },
                    o.isMiniChartShow &&
                      "退市" !== t.riseDropVal &&
                      "待上市" !== t.riseDropVal &&
                      "待发行" !== t.riseDropVal
                      ? {
                          i: "1dc1fd80-2-" + i,
                          j: n.p({
                            "mini-size": !o.isMPPro,
                            "fill-chart": o.isMPPro,
                            "cell-style":
                              t.riseDropChartStyle || t.riseDropStyle,
                            "choose-symbol": t.chooseSymbol,
                            "tab-id": "position",
                            "rise-drop-val": t.riseDropVal,
                            skin: r.skin,
                            "chart-size": o.isMPPro ? "medium" : "mini",
                          }),
                        }
                      : {},
                    {
                      k: n.t(t.priceVal || "--"),
                      l: n.t(t.riseDropVal || "--"),
                      m: n.n(t.riseDropStyle),
                      n: n.n(t.riseDropVal.length > 7 ? "small" : ""),
                    }
                  )
                : {},
              {
                o: n.o(
                  function (e) {
                    return o.navigateStockDetail(t);
                  },
                  2689,
                  t.scode
                ),
                p: t.scode,
              }
            );
          }),
          d: o.showMpPlaceHolder,
        },
        (o.showMpPlaceHolder, {}),
        {
          e: n.s(o.mpScrollStyle),
          f: o.enabled,
          g: "black" === r.skin ? "white" : "black",
          h: o.mpTriggered,
          i: n.o(function () {
            return o.mpStartPull && o.mpStartPull.apply(o, arguments);
          }, 2690),
          j: n.o(function () {
            return o.mpPullEnd && o.mpPullEnd.apply(o, arguments);
          }, 2691),
          k: n.o(function () {
            return o.onPullRefresh && o.onPullRefresh.apply(o, arguments);
          }, 2692),
          l: n.n({ "mp-pro": o.isMPPro }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1dc1fd80"],
]);
wx.createComponent(c);
