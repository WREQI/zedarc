var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = require("../../../../../../../common/vendor.js"),
  l = require("../../../../../components/HalfChartScreenShell.js"),
  u = {
    name: "ChartSkeleton",
    props: (function (r, c) {
      for (var l in c || (c = {})) n.call(c, l) && a(r, l, c[l]);
      if (t) {
        var u,
          p = e(t(c));
        try {
          for (p.s(); !(u = p.n()).done; ) {
            l = u.value;
            o.call(c, l) && a(r, l, c[l]);
          }
        } catch (e) {
          p.e(e);
        } finally {
          p.f();
        }
      }
      return r;
    })({}, l.CommonProps),
    setup: function (e) {
      return {
        isZxg: c.computed(function () {
          return e.platform === l.PlatformEnum.MPZXG;
        }),
        closeChart: function () {},
      };
    },
  },
  p = c._export_sfc(u, [
    [
      "render",
      function (e, r, t, n, o, a) {
        return {
          a: c.t(e.stockName || "--"),
          b: c.o(function () {
            return n.closeChart && n.closeChart.apply(n, arguments);
          }, 3195),
          c: c.n(n.isZxg ? "chart-skeleton-zxg" : "chart-skeleton-wzq"),
        };
      },
    ],
    ["__scopeId", "data-v-ac232e53"],
  ]);
wx.createComponent(p);
