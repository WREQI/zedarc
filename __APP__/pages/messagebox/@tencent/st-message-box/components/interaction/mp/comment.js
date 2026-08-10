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
  c = require("index-item-use.js"),
  s = require("../../../../../../../common/vendor.js"),
  i = {
    components: {
      commentContent: function () {
        return "../comment-content.js";
      },
    },
    props: { isSelected: { type: Boolean, default: !1 } },
    setup: function () {
      return (function (r, c) {
        for (var s in c || (c = {})) n.call(c, s) && a(r, s, c[s]);
        if (t) {
          var i,
            u = e(t(c));
          try {
            for (u.s(); !(i = u.n()).done; ) {
              s = i.value;
              o.call(c, s) && a(r, s, c[s]);
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
        }
        return r;
      })({}, c.indexItemUse());
    },
  };
Array ||
  (s.resolveComponent("commentContent") + s.resolveComponent("st-status"))();
var u = s._export_sfc(i, [
  [
    "render",
    function (e, r, t, n, o, a) {
      return s.e(
        {
          a: s.sr("contentRef", "a703e7ab-0"),
          b: s.o(e.refreshSuccess, 2309),
          c: s.o(e.refreshFail, 2310),
          d: s.p({ "is-selected": t.isSelected }),
          e: !e.didLoadData,
        },
        e.didLoadData
          ? {}
          : { f: s.o(e.onErrorRetry, 2311), g: s.p({ type: e.pageStatus }) },
        {
          h: e.refreshTriggered,
          i: s.o(function (r) {
            return e.pullRefresh();
          }, 2312),
          j: s.o(function (r) {
            return e.loadMore();
          }, 2313),
          k: s.o(function () {
            return e.onListScroll && e.onListScroll.apply(e, arguments);
          }, 2314),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a703e7ab"],
]);
wx.createComponent(u);
