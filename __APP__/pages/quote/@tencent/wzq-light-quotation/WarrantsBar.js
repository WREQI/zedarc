var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = function (t, e, a) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  s = function (t, r) {
    for (var s in r || (r = {})) o.call(r, s) && c(t, s, r[s]);
    if (a) {
      var i,
        l = e(a(r));
      try {
        for (l.s(); !(i = l.n()).done; ) {
          s = i.value;
          n.call(r, s) && c(t, s, r[s]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  i = require("../../../../common/vendor.js"),
  l = require("../stock-hq-data/index.js"),
  u = require("utils.js"),
  p = i.defineComponent({
    props: ["skin", "market", "stockType", "data", "scode"],
    setup: function (e, r) {
      var a = this,
        o = r.emit,
        n = ["mpwzq", "wzqlight"].includes("mpweapp"),
        c = i.ref(null),
        p = i.computed(function () {
          var t,
            r = ((null == (t = e.data) ? void 0 : t.stock) || {}).stock_zde,
            a = void 0 === r ? 0 : r;
          return 0 === parseFloat(a)
            ? "color-equal"
            : parseFloat(a) > 0
            ? "color-rise"
            : "color-drop";
        }),
        d = function () {
          return (
            (r = a),
            null,
            (n = t().mark(function () {
              var r, a, n, l, u, p, d, k, f, v, b;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r =
                          "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HkWarrant/hkw?code=".concat(
                            e.scode
                          )),
                        (t.next = 3),
                        i.StockBridge.request(r, i.RequestTypeEnum.GET, {
                          app: "wzq",
                        })
                      );
                    case 3:
                      if (((a = t.sent), (n = a.data))) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      (l = n.ysbf),
                        (u = void 0 === l ? "" : l),
                        (p = n.sjgg),
                        (d = void 0 === p ? "" : p),
                        (k = n.ggbl),
                        (f = void 0 === k ? "" : k),
                        (v = n.stock),
                        (b = void 0 === v ? {} : v),
                        (n.ysbf = null == u ? void 0 : u.replace(/%/, "")),
                        (n.sjgg = null == d ? void 0 : d.replace(/倍/, "")),
                        (n.ggbl = null == f ? void 0 : f.replace(/倍/, "")),
                        b.stock_code &&
                          ((c.value = s(s({}, e.data), n)), o("loadData", n));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, u);
            })),
            new Promise(function (t, e) {
              var a = function (t) {
                  try {
                    c(n.next(t));
                  } catch (t) {
                    e(t);
                  }
                },
                o = function (t) {
                  try {
                    c(n.throw(t));
                  } catch (t) {
                    e(t);
                  }
                },
                c = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(a, o);
                };
              c((n = n.apply(r, null)).next());
            })
          );
          var r, n;
        };
      return (
        i.onMounted(function () {
          l.utils.isHKMarket(e.market) &&
            l.utils.isWarrants(e.stockType) &&
            d();
        }),
        {
          isLite: n,
          warrantsData: c,
          colorClass: p,
          gotoStock: function () {
            var t,
              r = ((null == (t = e.data) ? void 0 : t.stock) || {}).stock_code;
            u.jumpStockDetail({ market: 2, scode: r });
          },
          getWarrantsData: d,
        }
      );
    },
  }),
  d = i._export_sfc(p, [
    [
      "render",
      function (t, e, r, a, o, n) {
        return i.e(
          { a: t.warrantsData },
          t.warrantsData
            ? {
                b: i.t(t.warrantsData.xgzc),
                c: i.t(t.warrantsData.stock.stock_zxj || ""),
                d: i.n(t.colorClass),
                e: i.t(t.warrantsData.stock.stock_zde > 0 ? "+" : ""),
                f: i.t(t.warrantsData.stock.stock_zde || ""),
                g: i.n(t.colorClass),
                h: i.t(t.warrantsData.stock.stock_zdf > 0 ? "+" : ""),
                i: i.t(t.warrantsData.stock.stock_zdf || ""),
                j: i.n(t.colorClass),
                k: "black" === t.skin ? 1 : "",
                l: i.o(function (e) {
                  return t.gotoStock();
                }, 2754),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-242b5b82"],
  ]);
wx.createComponent(d);
