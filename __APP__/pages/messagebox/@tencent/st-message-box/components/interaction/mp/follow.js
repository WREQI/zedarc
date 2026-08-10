var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  l = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  a = require("index-item-use.js"),
  c = require("../../../../../../../common/vendor.js"),
  s = {
    components: {
      followContent: function () {
        return "../follow-content.js";
      },
    },
    props: { isSelected: { type: Boolean, default: !1 } },
    setup: function () {
      return (function (r, a) {
        for (var c in a || (a = {})) o.call(a, c) && l(r, c, a[c]);
        if (t) {
          var s,
            f = e(t(a));
          try {
            for (f.s(); !(s = f.n()).done; ) {
              c = s.value;
              n.call(a, c) && l(r, c, a[c]);
            }
          } catch (e) {
            f.e(e);
          } finally {
            f.f();
          }
        }
        return r;
      })({}, a.indexItemUse());
    },
  };
Array ||
  (c.resolveComponent("followContent") + c.resolveComponent("st-status"))();
var f = c._export_sfc(s, [
  [
    "render",
    function (e, r, t, o, n, l) {
      return c.e(
        {
          a: c.sr("contentRef", "fd0d9fcf-0"),
          b: c.o(e.refreshSuccess, 2321),
          c: c.o(e.refreshFail, 2322),
          d: c.p({ "is-selected": t.isSelected }),
          e: !e.didLoadData,
        },
        e.didLoadData
          ? {}
          : { f: c.o(e.onErrorRetry, 2323), g: c.p({ type: e.pageStatus }) },
        {
          h: e.refreshTriggered,
          i: c.o(function (r) {
            return e.pullRefresh();
          }, 2324),
          j: c.o(function (r) {
            return e.loadMore();
          }, 2325),
          k: c.o(function () {
            return e.onListScroll && e.onListScroll.apply(e, arguments);
          }, 2326),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fd0d9fcf"],
]);
wx.createComponent(f);
