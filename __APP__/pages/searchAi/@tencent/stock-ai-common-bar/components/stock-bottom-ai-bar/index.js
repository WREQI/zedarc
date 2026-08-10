var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = require("../../../../../../common/vendor.js"),
  u = require("../../hooks/zxg/useAiCommonBarEntry.js"),
  l = i.defineComponent({
    name: "NewsAiBar",
    components: {},
    props: {
      scene: { type: String, default: "" },
      contentId: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      reportInfo: { type: Object, default: null },
      material: { type: Object, default: null },
      forceLite: { type: Boolean, default: !1 },
    },
    setup: function (t, l) {
      var c = l.emit,
        f = i.getCurrentInstance().proxy || i.getCurrentInstance(),
        s = {},
        p = !1,
        h = i._default().env,
        b = h.IS_ZXG,
        d = h.IS_PCWEIXIN;
      return (
        b
          ? (s = u.useSearchBar(t, { emit: c }, f))
          : ((s = u.useSearchBar$1(t, { emit: c }, f)),
            (p = ["mpwzq", "wzqlight"].includes("mpweapp")),
            t.forceLite && (p = !0)),
        i.watch(
          function () {
            return t.contentId;
          },
          function (e, t) {
            e && t && e !== t && s.fetchAIConfigStatus();
          }
        ),
        (function (t, i) {
          for (var u in i || (i = {})) n.call(i, u) && a(t, u, i[u]);
          if (r) {
            var l,
              c = e(r(i));
            try {
              for (c.s(); !(l = c.n()).done; ) {
                u = l.value;
                o.call(i, u) && a(t, u, i[u]);
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
          }
          return t;
        })(
          {
            isLite: p,
            fontLevel: i.computed(function () {
              var e, t;
              if (d) return "";
              var r =
                null ==
                (t = null == (e = s.showSearchBarObj) ? void 0 : e.value.title)
                  ? void 0
                  : t.length;
              return 15 === r
                ? "font-26"
                : 16 === r
                ? "font-24"
                : 17 === r
                ? "font-23"
                : 18 === r
                ? "font-22"
                : r >= 19
                ? "font-21"
                : "";
            }),
          },
          s
        )
      );
    },
  }),
  c = i._export_sfc(l, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return i.e(
          { a: e.showSearchBarList },
          e.showSearchBarList
            ? i.e(
                { b: e.showSearchBarObj.title },
                e.showSearchBarObj.title
                  ? { c: i.t(e.showSearchBarObj.title), d: i.n(e.fontLevel) }
                  : {},
                {
                  e: i.n(e.isLite ? "lite" : ""),
                  f: i.o(function (t) {
                    return e.onClickAiDialog();
                  }, 3024),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-423b52ba"],
  ]);
wx.createComponent(c);
