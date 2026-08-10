var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, r, a) {
    return r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a);
  },
  n = function (e, n) {
    for (var i in n || (n = {})) a.call(n, i) && c(e, i, n[i]);
    if (r) {
      var s,
        u = t(r(n));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          i = s.value;
          o.call(n, i) && c(e, i, n[i]);
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
  u = require("../../../stock-markets-base/utils/market.js"),
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
        a = e.emit,
        o = i.getCurrentInstance().proxy || i.getCurrentInstance(),
        c = i.inject("stockBridge"),
        f = i.ref(
          "stocktag-"
            .concat(t.reportPrefix, "-")
            .concat(t.itemIndex, "-")
            .concat(null == (r = t.stockData) ? void 0 : r.symbol)
            .replace(".", "-")
        );
      i.onMounted(function () {
        i.nextTick$1(function () {
          setTimeout(function () {
            t.stockData &&
              new s.VisibilityObserver(
                "#".concat(f.value),
                {
                  once: !0,
                  callback: function (t, e) {
                    t && l("stock_tag_brow");
                  },
                  intersection: { threshold: 0 },
                },
                { context: o }
              );
          }, 300);
        });
      });
      var l = function (e) {
        if (t.reportPrefix) {
          var r = "".concat(t.reportPrefix, ".").concat(e),
            a = t.stockData.symbol;
          c.report(r, n({ stockid: a }, t.ext));
        }
      };
      return {
        tagId: f,
        changePctColor: function (t) {
          try {
            var e = t || {},
              r = e.updown,
              a = e.changePct,
              o = +(r || a);
            if (o) {
              if (+o > 0) return "up";
              if (+o < 0) return "down";
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
              a = e.changePct,
              o = +(r || a);
            if (o) return +o > 0 ? "+".concat(o, "%") : "".concat(o, "%");
          } catch (t) {
            c.aegisReportEvent("MONITOR-NEWS-DISCOVERY-STOCKTAG-FAIL", {
              ext4: JSON.stringify(t || {}),
            });
          }
          return "";
        },
        goToStockDetail: function () {
          if (t.reportPrefix) {
            l("stock_tag_click");
            var e = t.stockData.symbol;
            try {
              i.StockRouter.routeTo({
                name: "stockdetail",
                query: n({}, u.splitSymbol(e)),
              });
            } catch (t) {}
          } else a("onClick");
        },
      };
    },
  },
  l = i._export_sfc(f, [
    [
      "render",
      function (t, e, r, a, o, c) {
        return i.e(
          { a: r.stockData },
          r.stockData
            ? i.e(
                { b: r.stockData.name || r.stockData.cnName },
                r.stockData.name || r.stockData.cnName
                  ? { c: i.t(r.stockData.name || r.stockData.cnName) }
                  : {},
                { d: a.formatChangePct(r.stockData) },
                a.formatChangePct(r.stockData)
                  ? {
                      e: i.t(a.formatChangePct(r.stockData)),
                      f: i.n(a.changePctColor(r.stockData)),
                    }
                  : {},
                {
                  g: i.o(function () {
                    return (
                      a.goToStockDetail && a.goToStockDetail.apply(a, arguments)
                    );
                  }, 5223),
                  h: "".concat(a.tagId),
                  i: i.n(a.tagId),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d94165f5"],
  ]);
wx.createComponent(l);
