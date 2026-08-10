var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, r, o) {
    return r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[r] = o);
  },
  n = function (e, n) {
    for (var i in n || (n = {})) o.call(n, i) && c(e, i, n[i]);
    if (r) {
      var s,
        u = t(r(n));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          i = s.value;
          a.call(n, i) && c(e, i, n[i]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return e;
  },
  i = require("../../../../../../common/vendor.js"),
  s = require("../../../stock-base/visibilityObserver/index.js"),
  u = require("../../../stock-news-core/utils/market.js"),
  l = require("../../../stock-markets-base/utils/market.js"),
  f = {
    props: {
      stockData: { type: Object, default: null },
      reportPrefix: { type: String, default: "" },
      itemIndex: { type: Number, default: 0 },
      ext: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (t, e) {
      var r,
        o = e.emit,
        a = i.getCurrentInstance().proxy || i.getCurrentInstance(),
        c = i.inject("stockBridge"),
        f = i.ref(
          "stocktag-"
            .concat(t.reportPrefix, "-")
            .concat(t.itemIndex, "-")
            .concat(null == (r = t.stockData) ? void 0 : r.symbol)
            .replace(".", "-")
        ),
        k = i.ref(null);
      i.watch(
        function () {
          return t.stockData;
        },
        function (t, e) {
          var r = t || {},
            o = r.symbol,
            a = r.stock_code;
          (o || a) && (k.value = u.getMarketIcon(o || a));
        },
        { immediate: !0, deep: !0 }
      ),
        i.onMounted(function () {
          i.nextTick$1(function () {
            setTimeout(function () {
              t.stockData &&
                new s.VisibilityObserver(
                  "#".concat(f.value),
                  {
                    once: !0,
                    callback: function (t, e) {
                      t && p("stock_tag_brow");
                    },
                    intersection: { threshold: 0 },
                  },
                  { context: a }
                );
            }, 300);
          });
        });
      var p = function (e) {
        if (t.reportPrefix) {
          var r = "".concat(t.reportPrefix, ".").concat(e),
            o = t.stockData,
            a = o.symbol,
            i = o.stock_code;
          c.report(r, n({ stockid: a || i }, t.ext));
        }
      };
      return {
        tagId: f,
        tagImg: k,
        changePctColor: function (t) {
          try {
            var e = t || {},
              r = e.updown,
              o = e.changePct,
              a = e.price_ratio,
              n = r || o || a;
            if (n) {
              if (+n > 0) return "up";
              if (+n < 0) return "down";
            }
          } catch (t) {
            c.aegisReportEvent("MONITOR-NEWS-DISCOVERY-STOCKTAG-FAIL", {
              ext4: JSON.stringify(t || {}),
            });
          }
          return "";
        },
        formatChangePct: function (t) {
          try {
            var e = t || {},
              r = e.updown,
              o = e.changePct,
              a = e.price_ratio,
              n = r || o || a;
            if (n) return +n > 0 ? "+".concat(n, "%") : "".concat(n, "%");
          } catch (t) {
            c.aegisReportEvent("MONITOR-NEWS-DISCOVERY-STOCKTAG-FAIL", {
              ext4: JSON.stringify(t || {}),
            });
          }
          return "";
        },
        goToStockDetail: function () {
          if (t.reportPrefix) {
            p("stock_tag_click");
            var e = t.stockData,
              r = e.symbol,
              a = e.stock_code;
            try {
              i.StockRouter.routeTo({
                name: "stockdetail",
                query: n({}, l.splitSymbol(r || a)),
              });
            } catch (t) {}
          } else o("onClick");
        },
      };
    },
  },
  k = i._export_sfc(f, [
    [
      "render",
      function (t, e, r, o, a, c) {
        return i.e(
          { a: r.stockData },
          r.stockData
            ? i.e(
                { b: o.tagImg },
                o.tagImg ? { c: o.tagImg } : {},
                { d: r.stockData.name || r.stockData.cnName },
                r.stockData.name || r.stockData.cnName
                  ? { e: i.t(r.stockData.name || r.stockData.cnName) }
                  : {},
                { f: o.formatChangePct(r.stockData) },
                o.formatChangePct(r.stockData)
                  ? {
                      g: i.t(o.formatChangePct(r.stockData)),
                      h: i.n(o.changePctColor(r.stockData)),
                    }
                  : {},
                {
                  i: i.o(function () {
                    return (
                      o.goToStockDetail && o.goToStockDetail.apply(o, arguments)
                    );
                  }, 4725),
                  j: "".concat(o.tagId),
                  k: i.n(o.tagId),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b61079ef"],
  ]);
wx.createComponent(k);
