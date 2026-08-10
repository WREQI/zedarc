var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  o = require("../../../../../../common/vendor.js"),
  u = require("../../hooks/zxg/useAiCommonBarEntry.js"),
  c = o.defineComponent({
    name: "NewsAiBar",
    components: {},
    props: {
      scene: { type: String, default: "" },
      contentId: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      reportInfo: { type: Object, default: null },
      material: { type: Object, default: null },
    },
    setup: function (t, c) {
      var l = c.emit,
        s = o.getCurrentInstance().proxy || o.getCurrentInstance(),
        p = {},
        f = !1;
      return (
        o._default().env.IS_ZXG
          ? (p = u.useSearchBar(t, { emit: l }, s))
          : ((p = u.useSearchBar$1(t, { emit: l }, s)),
            (f = ["mpwzq", "wzqlight"].includes("mpweapp"))),
        o.watch(
          function () {
            return t.contentId;
          },
          function (e, t) {
            e && t && e !== t && p.fetchAIConfigStatus();
          }
        ),
        (function (t, o) {
          for (var u in o || (o = {})) n.call(o, u) && i(t, u, o[u]);
          if (r) {
            var c,
              l = e(r(o));
            try {
              for (l.s(); !(c = l.n()).done; ) {
                u = c.value;
                a.call(o, u) && i(t, u, o[u]);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          }
          return t;
        })({ isLite: f }, p)
      );
    },
  }),
  l = o._export_sfc(c, [
    [
      "render",
      function (e, t, r, n, a, i) {
        return o.e(
          { a: e.showSearchBarList },
          e.showSearchBarList
            ? {
                b: o.f(e.showSearchBarList.slice(0, 3), function (t, r, n) {
                  return {
                    a: o.t(t.title),
                    b: t.uuid,
                    c: o.o(
                      function (r) {
                        return e.onClickAiDialog(t);
                      },
                      5369,
                      t.uuid
                    ),
                  };
                }),
                c: o.n(e.isLite ? "lite" : ""),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-befbded4"],
  ]);
wx.createComponent(l);
