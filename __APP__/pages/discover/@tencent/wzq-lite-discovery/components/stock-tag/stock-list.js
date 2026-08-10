var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = function (t, c) {
    for (var u in c || (c = {})) n.call(c, u) && a(t, u, c[u]);
    if (r) {
      var i,
        l = e(r(c));
      try {
        for (l.s(); !(i = l.n()).done; ) {
          u = i.value;
          o.call(c, u) && a(t, u, c[u]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return t;
  },
  u = require("../../../../../../common/vendor.js"),
  i = require("../../../stock-news-core/utils/market.js"),
  l = require("../../../stock-markets-base/utils/market.js"),
  f = u.defineComponent({
    props: {
      relateCode: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (e) {
      return (
        u.watch(
          function () {
            return e.relateCode;
          },
          function (e) {},
          { immediate: !0, deep: !0 }
        ),
        {
          tagImg: function (e) {
            var t = (e || {}).symbol;
            return i.getMarketIcon(t);
          },
          changePctColor: function (e) {
            var t = e || {},
              r = t.updown,
              n = t.changePct,
              o = r || n;
            return +o > 0 ? "up" : +o < 0 ? "down" : "";
          },
          formatChangePct: function (e) {
            var t = e || {},
              r = t.updown,
              n = t.changePct,
              o = r || n;
            return +o > 0 ? "+".concat(o, "%") : "".concat(o, "%");
          },
          goToStockDetail: function (e) {
            var t = e.symbol;
            try {
              u.StockRouter.routeTo({
                name: "stockdetail",
                query: c({}, l.splitSymbol(t)),
              });
            } catch (e) {}
          },
        }
      );
    },
  }),
  m = u._export_sfc(f, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return u.e(
          { a: e.relateCode },
          e.relateCode
            ? {
                b: u.f(e.relateCode, function (t, r, n) {
                  return u.e(
                    { a: e.tagImg(t) },
                    e.tagImg(t) ? { b: e.tagImg(t) } : {},
                    {
                      c: u.t(t.name || t.cnName),
                      d: u.t(t.newPrice || t.price),
                      e: u.n(e.changePctColor(t)),
                      f: u.t(e.formatChangePct(t)),
                      g: u.n(e.changePctColor(t)),
                      h: r,
                      i: u.o(
                        function (r) {
                          return e.goToStockDetail(t);
                        },
                        4727,
                        r
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-10fc52d8"],
  ]);
wx.createComponent(m);
