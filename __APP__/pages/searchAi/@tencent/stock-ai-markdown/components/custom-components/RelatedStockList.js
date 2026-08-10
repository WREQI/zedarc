var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var n in r || (r = {})) i.call(r, n) && c(e, n, r[n]);
    if (a) {
      var o,
        u = t(a(r));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          n = o.value;
          s.call(r, n) && c(e, n, r[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return n(e, o(t));
  },
  d = require("../../../stock-news-core/utils/market.js"),
  h = require("../../../stock-news-base/service/market/RelatedStockUtils.js"),
  f = require("../../../stock-news-sdk/index.js"),
  p = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-hq-data/index.js"),
  g = {
    name: "RelatedStockList",
    props: {
      source: { type: String, default: "" },
      related_quotes: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    inject: { isHalfScreen: { default: !1 } },
    data: function () {
      return { renderList: [], isWzq: !1, relatedStockChangeListener: null };
    },
    setup: function () {
      return {
        getMarketIcon: d.getMarketIcon,
        ADDED_ICON_URL:
          "https://st.gtimg.com/design/a43fa0f1baa60bd218716cc87089d2f1.png",
        NOT_ADDED_ICON_URL:
          "https://st.gtimg.com/design/f4ce9c1ca279a4d9659ae3ed4100bcfa.png",
      };
    },
    computed: {
      shouldShowComponent: function () {
        return this.related_quotes && this.related_quotes.length > 0;
      },
    },
    watch: {
      related_quotes: {
        handler: function (e) {
          if (e && e.length > 0) {
            var t = e.filter(function (e) {
                if (!e.code) return !1;
                var t = e.code.toLowerCase();
                return t.startsWith("sz") || t.startsWith("sh");
              }),
              r = t.length > 3 ? t.slice(0, 3) : t;
            (this.renderList = r.map(function (e) {
              return {
                symbol: e.code,
                name: e.name,
                changePercent: null,
                isFavorite: !1,
              };
            })),
              this.refresh(),
              this.$emit("dataReady");
          }
        },
        deep: !0,
        immediate: !0,
      },
      $route: {
        handler: function () {
          this.refresh();
        },
        deep: !0,
        immediate: !0,
      },
    },
    onPageShow: function () {
      this.refresh();
    },
    mounted: function () {
      var e = this,
        t = this.related_quotes.map(function (e) {
          return e.code;
        });
      new m.DetailApi(function () {
        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return 1 === r.length
          ? p.StockBridge.request(r[0], "GET", {}, { forceCallback: !0 })
          : (r[3] && (r[3].forceCallback = !0),
            (e = p.StockBridge).request.apply(e, r));
      })
        .getQTs(t, { getAll: !0, encode: "utf8" })
        .then(function (t) {
          e.renderList = e.renderList.map(function (e) {
            var r = e.symbol;
            if (r && t[r]) {
              t[r][3];
              var n = t[r][70];
              return l(u({}, e), { changePercent: n });
            }
            return e;
          });
        }),
        (this.relatedStockChangeListener = function (t) {
          e.updateStockFavoriteStatus(t);
        }),
        p.StockBridge.busOn(
          "news-RelatedStockChange",
          this.relatedStockChangeListener
        );
    },
    beforeDestroy: function () {
      this.relatedStockChangeListener &&
        p.StockBridge.busOff(
          "news-RelatedStockChange",
          this.relatedStockChangeListener
        );
    },
    methods: {
      refresh: function () {
        if (this.renderList && 0 !== this.renderList.length) {
          var e = this.renderList
            .map(function (e) {
              return e.symbol;
            })
            .filter(function (e) {
              return e;
            });
          0 !== e.length &&
            h.RelatedStockUtils.getInstance().requestStockIsInPortfolio(e);
        }
      },
      updateStockFavoriteStatus: function (e) {
        this.renderList = this.renderList.map(function (t) {
          return t.symbol && Object.prototype.hasOwnProperty.call(e, t.symbol)
            ? l(u({}, t), { isFavorite: 1 === e[t.symbol] })
            : t;
        });
      },
      formatChange: function (e) {
        if (null == e) return "--";
        var t = Number(e);
        return t > 0
          ? "+".concat(t.toFixed(2), "%")
          : "".concat(t.toFixed(2), "%");
      },
      getChangeClass: function (e) {
        if (null == e) return "";
        var t = Number(e);
        return t > 0
          ? "related-stock__change--rise"
          : t < 0
          ? "related-stock__change--fall"
          : "";
      },
      handleStockClick: function (e) {
        if (e.symbol) {
          var t = (function (e) {
              var t = ["sz", "sh", "hk", "us"],
                r = e.substring(0, 2).toLocaleLowerCase();
              return {
                stockCode: e.replace(r, ""),
                stockMarket: -1 === t.indexOf(r) ? r : t.indexOf(r),
              };
            })(e.symbol),
            r = t.stockCode,
            n = t.stockMarket;
          if (this.isHalfScreen && this.isWzq) {
            var o = "https://wzq.tenpay.com/mp/v2/index.html"
              .concat("#/hq/stock/", n, "/")
              .concat(r);
            p.StockBridge.openExtraWebview(o);
          } else
            f.sdk.navigateToStockDetail({
              instance: this,
              stockCode: r,
              stockMarket: n,
              symbol: e.symbol,
            });
        }
      },
      handleFavorite: function (t, r) {
        return (
          (n = this),
          null,
          (o = e().mark(function n() {
            var o, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (o = !t.isFavorite),
                        (a = t.symbol),
                        (e.next = 4),
                        h.RelatedStockUtils.getInstance().requestStockToAdd(
                          o,
                          a
                        )
                      );
                    case 4:
                      if (((e.t0 = e.sent), !e.t0)) {
                        e.next = 7;
                        break;
                      }
                      this.$set(
                        this.renderList,
                        r,
                        l(u({}, t), { isFavorite: o })
                      );
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      (e.prev = 9), (e.t1 = e.catch(0));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[0, 9]]
            );
          })),
          new Promise(function (e, t) {
            var r = function (e) {
                try {
                  i(o.next(e));
                } catch (e) {
                  t(e);
                }
              },
              a = function (e) {
                try {
                  i(o.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            i((o = o.apply(n, null)).next());
          })
        );
        var n, o;
      },
    },
  },
  k = p._export_sfc(g, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return p.e(
          { a: a.shouldShowComponent },
          a.shouldShowComponent
            ? {
                b: p.f(o.renderList, function (e, t, r) {
                  return p.e(
                    {
                      a: n.getMarketIcon(e.symbol),
                      b: p.t(e.name),
                      c: p.t(a.formatChange(e.changePercent)),
                      d: p.n(a.getChangeClass(e.changePercent)),
                      e: e.isFavorite,
                    },
                    e.isFavorite
                      ? { f: n.ADDED_ICON_URL }
                      : { g: n.NOT_ADDED_ICON_URL },
                    {
                      h: p.o(
                        function (r) {
                          return a.handleFavorite(e, t);
                        },
                        5899,
                        t
                      ),
                      i: t,
                      j: p.o(
                        function (t) {
                          return a.handleStockClick(e);
                        },
                        5900,
                        t
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-fdc69a82"],
  ]);
wx.createComponent(k);
