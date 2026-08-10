var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  u = function (e, a) {
    for (var n in a || (a = {})) r.call(a, n) && c(e, n, a[n]);
    if (o) {
      var u,
        l = t(o(a));
      try {
        for (l.s(); !(u = l.n()).done; ) {
          n = u.value;
          i.call(a, n) && c(e, n, a[n]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return e;
  },
  l = require("../../../../../../common/vendor.js"),
  s = require("../../utils/visibleObserver.js"),
  f = {
    components: {
      StockTag: function () {
        return "../stock-tag/stock-tag.js";
      },
      StockTagLite: function () {
        return "../stock-tag/stock-tag-lite.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemIndex: { type: Number, default: 0 },
    },
    setup: function (t) {
      var e = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        o = l.inject("stockBridge"),
        r = l.inject("qtData"),
        i = l.computed(function () {
          var e;
          return null == (e = t.itemData.info) ? void 0 : e.id;
        }),
        c = l.computed(function () {
          var e;
          return null == (e = t.itemData.info) ? void 0 : e.name;
        }),
        f = l.computed(function () {
          var e = t.itemData.ranking.avgChangePct;
          return "".concat(e > 0 ? "+" : "").concat(e, "%");
        }),
        d = l.ref(!1),
        p = l.computed(function () {
          var e = t.itemData.ranking.avgChangePct;
          return e > 0 ? "red" : e < 0 ? "green" : "gray";
        }),
        v = l.computed(function () {
          var e;
          return 1 === (null == (e = t.itemData.info) ? void 0 : e.showType);
        }),
        m = null;
      l.onUnmounted(function () {
        null == m || m.destroyObserver(), (m = null);
      }),
        l.onMounted(function () {
          setTimeout(function () {
            var a;
            m = s.visibleObserver(
              "#wx-news-item-basket-container-"
                .concat(t.itemIndex, "-")
                .concat(null == (a = t.itemData.info) ? void 0 : a.id),
              e,
              function (e, a) {
                e &&
                  o.report("".concat(t.reportPrefix, ".watchlist_brow"), b());
              }
            );
          }, 300);
        });
      var b = function () {
          var e, o, r;
          return (
            (o = u({}, t.reportParams)),
            (r = {
              watchlist_id: null == (e = t.itemData.info) ? void 0 : e.id,
            }),
            a(o, n(r))
          );
        },
        k = l.computed(function () {
          return "命中我的自选股";
        }),
        g = function (t) {
          var e = t.symbol;
          return h(e);
        },
        h = function (t) {
          return r.value && r.value.length > 0
            ? r.value.find(function (e) {
                return e.symbol === t;
              })
            : null;
        },
        y = l.ref([]),
        D = l.reactive({ value: [] }),
        w = function () {
          if (y.value && 0 !== y.value.length) {
            try {
              for (var t = [], e = 0; e < y.value.length; e++) {
                var a = y.value[e],
                  n = g(a),
                  o = u(u({}, a), n);
                t[e] = o;
              }
              y.value = t;
            } catch (t) {}
            return [];
          }
        };
      l.watch(
        function () {
          return t.itemData;
        },
        function (t, e) {
          var a, n, o, r;
          (null == (a = t.ranking) ? void 0 : a.data) &&
            ((y.value = []),
            null == (n = t.ranking) ||
              n.data.forEach(function (t, e) {
                e < 2 && y.value.push(t.data);
              })),
            (null == (o = null == t ? void 0 : t.watchedData)
              ? void 0
              : o.data) &&
              ((D.value = []),
              (D.value =
                null == (r = null == t ? void 0 : t.watchedData)
                  ? void 0
                  : r.data)),
            w(),
            l.nextTick$1(function () {
              l.nextTick$1(function () {});
            });
        },
        { immediate: !0, deep: !0 }
      ),
        l.watch(
          function () {
            return r;
          },
          function (t, e) {
            w();
          },
          { immediate: !0, deep: !0 }
        );
      var j = l.ref(!1);
      return (
        (j.value = !0),
        {
          basketId: i,
          basketName: c,
          basketZdf: f,
          basketZdfColor: p,
          gotoBasketDetail: function () {
            var e;
            o.report("".concat(t.reportPrefix, ".watchlist_click"), b()),
              null == (e = t.itemData.info) || e.id;
          },
          isDisposableType: v,
          matchTitle: k,
          stockFormatedQtData: g,
          matchedStockList: y,
          portfolioStockList: D,
          moreBlur: d,
          abtHeader: j,
        }
      );
    },
  };
Array ||
  (l.resolveComponent("StockTag") + l.resolveComponent("StockTagLite"))();
var d = l._export_sfc(f, [
  [
    "render",
    function (t, e, a, n, o, r) {
      return l.e(
        { a: n.basketId },
        n.basketId
          ? l.e(
              {
                b:
                  n.portfolioStockList.value &&
                  n.portfolioStockList.value.length > 0,
              },
              n.portfolioStockList.value &&
                n.portfolioStockList.value.length > 0
                ? l.e(
                    { c: l.t(n.matchTitle), d: !n.abtHeader },
                    n.abtHeader
                      ? {
                          f: l.f(
                            n.portfolioStockList.value,
                            function (t, e, a) {
                              return {
                                a: "match-stock-".concat(e),
                                b: l.o(
                                  n.gotoBasketDetail,
                                  4722,
                                  "match-stock-".concat(e)
                                ),
                                c: "bd54c0db-1-" + a,
                                d: l.p({ "stock-data": t }),
                              };
                            }
                          ),
                        }
                      : {
                          e: l.f(
                            n.portfolioStockList.value,
                            function (t, e, a) {
                              return {
                                a: "match-stock-".concat(e),
                                b: l.o(
                                  n.gotoBasketDetail,
                                  4721,
                                  "match-stock-".concat(e)
                                ),
                                c: "bd54c0db-0-" + a,
                                d: l.p({ "stock-data": t }),
                              };
                            }
                          ),
                        },
                    {
                      g: l.n(n.moreBlur ? "more-blur" : ""),
                      h: l.o(function () {
                        return (
                          n.gotoBasketDetail &&
                          n.gotoBasketDetail.apply(n, arguments)
                        );
                      }, 4723),
                    }
                  )
                : l.e(
                    { i: l.t(n.basketName), j: !n.isDisposableType },
                    n.isDisposableType
                      ? {}
                      : { k: l.t(n.basketZdf), l: l.n(n.basketZdfColor) },
                    {
                      m: l.o(function () {
                        return (
                          n.gotoBasketDetail &&
                          n.gotoBasketDetail.apply(n, arguments)
                        );
                      }, 4724),
                    }
                  ),
              {
                n: "wx-news-item-basket-container-"
                  .concat(a.itemIndex, "-")
                  .concat(n.basketId),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-bd54c0db"],
]);
wx.createComponent(d);
