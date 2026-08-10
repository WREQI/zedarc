require("../../app.js");
var t = require("../../common/vendor.js"),
  e = {
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
      BrokerFooter: function () {
        return "../BrokerFooter/index.js";
      },
    },
    props: {
      title: { type: String, default: "" },
      actionText: { type: String, default: "确认" },
      action: { type: String, default: "buy" },
      tips: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (t, e) {
      return { emit: e.emit };
    },
  };
Array ||
  (t.resolveComponent("BrokerFooter") + t.resolveComponent("ActionSheet"))();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, r, i, c) {
      return t.e(
        {
          a: t.t(o.title),
          b: t.o(function (t) {
            return r.emit("cancel");
          }),
          c: o.tips && o.tips.length,
        },
        o.tips && o.tips.length
          ? {
              d: t.f(o.tips, function (e, n, o) {
                return { a: t.t(e), b: n };
              }),
            }
          : {},
        {
          e: t.t(o.actionText),
          f: t.n(o.action),
          g: t.o(function (t) {
            return r.emit("confirm");
          }),
          h: t.o(function (t) {
            return r.emit("cancel");
          }),
          i: t.p({
            value: !0,
            "show-title-border-bottom": !1,
            "confirm-button": !1,
            title: "",
            "picker-style": !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-869065fe"],
]);
wx.createComponent(n);
