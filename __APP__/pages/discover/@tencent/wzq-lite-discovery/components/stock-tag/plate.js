var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  c = function (e, c) {
    for (var u in c || (c = {})) n.call(c, u) && o(e, u, c[u]);
    if (a) {
      var l,
        i = t(a(c));
      try {
        for (i.s(); !(l = i.n()).done; ) {
          u = l.value;
          r.call(c, u) && o(e, u, c[u]);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
    return e;
  },
  u = require("../../../../../../common/vendor.js"),
  l = require("../../../stock-news-core/utils/market.js"),
  i = require("../../../stock-markets-base/utils/market.js"),
  p = u.defineComponent({
    name: "MarketPlate",
    props: {
      eventData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (t) {
      return {
        tagImg: function (t) {
          var e = (t || {}).symbol;
          return l.getMarketIcon(e);
        },
        changePctColor: function (t) {
          var e = t || {},
            a = e.updown,
            n = e.changePct,
            r = a || n;
          return +r > 0 ? "up" : +r < 0 ? "down" : "";
        },
        formatChangePct: function (t) {
          var e = t || {},
            a = e.updown,
            n = e.changePct,
            r = a || n;
          return !r || isNaN(+r)
            ? "--"
            : +r > 0
            ? "+".concat(r, "%")
            : "".concat(r, "%");
        },
        goToStockDetail: function (t) {
          var e = t.symbol;
          try {
            u.StockRouter.routeTo({
              name: "stockdetail",
              query: c({}, i.splitSymbol(e)),
            });
          } catch (t) {}
        },
        plateData: u.computed(function () {
          return t.eventData.plate_info;
        }),
      };
    },
  }),
  f = u._export_sfc(p, [
    [
      "render",
      function (t, e, a, n, r, o) {
        return u.e(
          { a: t.plateData },
          t.plateData
            ? {
                b: u.t(t.plateData.name),
                c: u.t(
                  "".concat(
                    t.plateData.updown || t.plateData.changePct || "--",
                    "%"
                  )
                ),
                d: u.n(t.changePctColor(t.plateData)),
                e: u.f(t.plateData.rankList, function (e, a, n) {
                  return u.e(
                    { a: t.tagImg(e) },
                    t.tagImg(e) ? { b: t.tagImg(e) } : {},
                    {
                      c: u.t(e.name || e.cnName),
                      d: u.t(e.newPrice || e.price),
                      e: u.n(t.changePctColor(e)),
                      f: u.t(t.formatChangePct(e)),
                      g: u.n(t.changePctColor(e)),
                      h: "".concat(e.symbol, "-").concat(a),
                      i: u.o(
                        function (a) {
                          return t.goToStockDetail(e);
                        },
                        4728,
                        "".concat(e.symbol, "-").concat(a)
                      ),
                    }
                  );
                }),
                f: u.t("共".concat(t.plateData.rankListTotal, "只成份股")),
                g: u.o(function (e) {
                  return t.goToStockDetail(t.plateData);
                }, 4729),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a67b56d5"],
  ]);
wx.createComponent(f);
