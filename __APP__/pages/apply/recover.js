require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../model/apply/useApply.js"),
  r = {
    components: {
      ApplyStatus: function () {
        return "./bizs/applystatus/ApplyStatus.js";
      },
      OldRecover: function () {
        return "./bizs/applystatus/OldRecover.js";
      },
    },
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    sharedComponents: !0,
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    props: { scrollHeight: { type: Number, default: 0 } },
    setup: function (r, o) {
      var n = o.emit,
        p = t.useApply().applyInfo,
        a = e.toRefs(r).scrollHeight;
      e.provide("scrollHeight", a);
      var l = e.computed(function () {
        return p.value.data_audit && p.value.bank_active && p.value.acct_active;
      });
      return (
        e.provide("onPageInit", function () {}),
        e.onMounted(function () {
          n("mounted");
        }),
        { useNewStyle: l }
      );
    },
  };
Array ||
  (
    e.resolveComponent("apply-status") +
    e.resolveComponent("old-recover") +
    e.resolveComponent("ApplyWrap") +
    e.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, n, p, a) {
      return e.e({ a: t.rootFontSize, b: n.useNewStyle }, (n.useNewStyle, {}), {
        c: e.sr("#global-wrap", "0f83a380-0"),
        d: e.p({
          id: "global-wrap",
          filePath: "/apply/recover",
          defaultTheme: "",
        }),
      });
    },
  ],
]);
wx.createPage(o);
