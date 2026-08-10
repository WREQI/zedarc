var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, n, o) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[n] = o);
  },
  p = function (t, n) {
    for (var o in n || (n = {})) i.call(n, o) && c(t, o, n[o]);
    if (r) {
      var p,
        s = e(r(n));
      try {
        for (s.s(); !(p = s.n()).done; ) {
          o = p.value;
          u.call(n, o) && c(t, o, n[o]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return t;
  },
  s = require("../../../../../../common/vendor.js"),
  m = {
    name: "Card",
    components: {
      QuoteComponent: function () {
        return "../custom-components/QuoteComponent.js";
      },
      ToggleComponent: function () {
        return "../custom-components/ToggleComponent.js";
      },
      ComponentUniversal: function () {
        return "../custom-components/ComponentUniversal.js";
      },
    },
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageName: { type: String, default: "" },
      newsId: { type: String, default: "" },
      index: { type: Number, default: 0 },
      curRequestId: { required: !1, type: String, default: "" },
      theme: { required: !0, type: String },
      position: { required: !0, type: Number },
      curSessionId: { required: !1, type: String, default: "" },
      subScene: { required: !1, type: String, default: "" },
      mdRuleFn: { type: Function, default: function () {} },
    },
    data: function () {
      return { contexObj: {} };
    },
    created: function () {
      (this.contexObj.requestId = this.curRequestId),
        (this.contexObj.sessionId = this.curSessionId),
        (this.contexObj.subScene = this.subScene);
    },
    setup: function (e, t) {
      t.emit;
      return {
        generateFunctionItemId: function (t) {
          return "".concat(e.position).concat(t);
        },
      };
    },
  };
Array ||
  (
    s.resolveComponent("QuoteComponent") +
    s.resolveComponent("ToggleComponent") +
    s.resolveComponent("ComponentUniversal")
  )();
var a = s._export_sfc(m, [
  [
    "render",
    function (e, t, r, i, u, c) {
      return s.e(
        { a: "c-quote" === r.item.comp_id },
        "c-quote" === r.item.comp_id
          ? {
              b: s.p(
                ((m = p({}, r.item.props)),
                (a = {
                  inline: r.item.inline,
                  "page-name": r.pageName,
                  "news-id": r.newsId,
                }),
                n(m, o(a)))
              ),
            }
          : {},
        { c: "c-summary-detail" === r.item.comp_id },
        "c-summary-detail" === r.item.comp_id
          ? {
              d: s.p({
                "page-name": r.pageName,
                "news-id": r.newsId,
                data: r.item.props,
                position: r.index,
                "md-rule-fn": r.mdRuleFn,
              }),
            }
          : r.item.comp_id
          ? {
              f: s.p({
                "comp-id": r.item.comp_id,
                "contex-obj": u.contexObj,
                "cur-request-id": r.curRequestId,
                "cur-session-id": r.curSessionId,
                data: r.item.props,
                theme: r.theme,
                position: i.generateFunctionItemId(r.index),
              }),
            }
          : {},
        { e: r.item.comp_id }
      );
      var m, a;
    },
  ],
]);
wx.createComponent(a);
