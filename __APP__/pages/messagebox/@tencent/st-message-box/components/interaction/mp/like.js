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
  i = require("index-item-use.js"),
  s = require("../../../../../../../common/vendor.js"),
  l = {
    components: {
      likeContent: function () {
        return "../like-content.js";
      },
    },
    props: { isSelected: { type: Boolean, default: !1 } },
    setup: function () {
      return (function (r, i) {
        for (var s in i || (i = {})) n.call(i, s) && a(r, s, i[s]);
        if (t) {
          var l,
            c = e(t(i));
          try {
            for (c.s(); !(l = c.n()).done; ) {
              s = l.value;
              o.call(i, s) && a(r, s, i[s]);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return r;
      })({}, i.indexItemUse());
    },
  };
Array ||
  (s.resolveComponent("likeContent") + s.resolveComponent("st-status"))();
var c = s._export_sfc(l, [
  [
    "render",
    function (e, r, t, n, o, a) {
      return s.e(
        {
          a: s.sr("contentRef", "26d4d476-0"),
          b: s.o(e.refreshSuccess, 2315),
          c: s.o(e.refreshFail, 2316),
          d: s.p({ "is-selected": t.isSelected }),
          e: !e.didLoadData,
        },
        e.didLoadData
          ? {}
          : { f: s.o(e.onErrorRetry, 2317), g: s.p({ type: e.pageStatus }) },
        {
          h: e.refreshTriggered,
          i: s.o(function (r) {
            return e.pullRefresh();
          }, 2318),
          j: s.o(function (r) {
            return e.loadMore();
          }, 2319),
          k: s.o(function () {
            return e.onListScroll && e.onListScroll.apply(e, arguments);
          }, 2320),
        }
      );
    },
  ],
  ["__scopeId", "data-v-26d4d476"],
]);
wx.createComponent(c);
