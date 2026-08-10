var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = require("../../../../../../common/vendor.js"),
  l = require("../../../stock-news-base/service/market/RelatedStockHelper.js"),
  p = require("../../../stock-news-base/service/market/RelatedStockUtils.js"),
  f = {
    name: "QuoteComponent",
    components: {
      relatedStock: function () {
        return "../../../../../newsSbg/@tencent/stock-news-base/components/relatedStock.js";
      },
    },
    props: {
      stockList: {
        type: Array,
        required: !0,
        validator: function (e) {
          return (
            Array.isArray(e) &&
            e.every(function (e) {
              return "object" == t(e) && null !== e;
            })
          );
        },
      },
      pageName: { type: String, default: "" },
      newsId: { type: String, default: "" },
    },
    emits: ["click", "component-event"],
    setup: function (t, r) {
      r.emit;
      var f = u.ref([]),
        d = null;
      return (
        u.watch(
          function () {
            return t.stockList;
          },
          function (t) {
            !t || t.length;
            var r = [],
              u = [];
            t.forEach(function (e) {
              var t = e.name,
                n = e.symbol;
              r.push(n), u.push({ stock_name: t, stock_code: n });
            }),
              (f.value = u),
              p.RelatedStockUtils.getInstance().requestStockIsInPortfolio(r),
              d || (d = new l.RelatedStockHelper()),
              d.requestQT(r).then(function (r) {
                var u = d.handleQTData(t, r),
                  l = [];
                f.value.forEach(function (t) {
                  var r,
                    p,
                    f = u.find(function (e) {
                      return e.symbol === t.stock_code;
                    });
                  l.push(
                    ((r = (function (t, r) {
                      for (var n in r || (r = {}))
                        c.call(r, n) && i(t, n, r[n]);
                      if (a) {
                        var o,
                          u = e(a(r));
                        try {
                          for (u.s(); !(o = u.n()).done; ) {
                            n = o.value;
                            s.call(r, n) && i(t, n, r[n]);
                          }
                        } catch (e) {
                          u.e(e);
                        } finally {
                          u.f();
                        }
                      }
                      return t;
                    })({}, t)),
                    (p = {
                      chg_percent: (null == f ? void 0 : f.updown) || "",
                    }),
                    n(r, o(p)))
                  );
                }),
                  (f.value = l);
              });
          },
          { immediate: !0 }
        ),
        { stockListData: f }
      );
    },
  };
Array || u.resolveComponent("relatedStock")();
var d = u._export_sfc(f, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return {
        a: u.f(n.stockListData, function (e, t, n) {
          return {
            a: "5cfe26cd-0-" + n,
            b: u.p({
              extra_info: e,
              "report-data": { prefix: "".concat(r.pageName) },
              "news-id": r.newsId,
            }),
            c: t,
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-5cfe26cd"],
]);
wx.createComponent(d);
