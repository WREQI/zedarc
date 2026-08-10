require("../../app.js");
var e = require("../../common/vendor.js"),
  n = require("../../model/apply/useApply.js"),
  o = require("../../utils/index.js"),
  t = {
    components: {
      ApplyStatus: function () {
        return "./bizs/applystatus/ApplyStatus.js";
      },
      OldProgress: function () {
        return "./bizs/applystatus/OldProgress.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    sharedComponents: !0,
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    props: { scrollHeight: { type: Number, default: 0 } },
    setup: function (t, r) {
      var p,
        s = r.emit,
        l = null == (p = e.getCurrentInstance()) ? void 0 : p.proxy,
        a = n.useApply().applyInfo,
        u = e.toRefs(t).scrollHeight;
      e.provide("scrollHeight", u);
      var i = e.computed(function () {
        return a.value.data_audit && a.value.bank_active && a.value.acct_active;
      });
      function c() {
        o.getIsMpPluginComponent() &&
          (e.index.getPluginContext = function () {
            return l;
          });
      }
      return (
        e.provide("onPageInit", function () {}),
        e.onMounted(function () {
          c(), s("mounted");
        }),
        e.onPageShow(function () {
          c();
        }),
        { useNewStyle: i, setPluginContext: c }
      );
    },
  };
Array ||
  (
    e.resolveComponent("apply-status") +
    e.resolveComponent("old-progress") +
    e.resolveComponent("mp-dialog") +
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
var r = e._export_sfc(t, [
  [
    "render",
    function (n, o, t, r, p, s) {
      return e.e({ a: n.rootFontSize, b: r.useNewStyle }, (r.useNewStyle, {}), {
        c: e.p({ id: "mp-dialog" }),
        d: e.sr("#global-wrap", "722a02fe-0"),
        e: e.p({
          id: "global-wrap",
          filePath: "/apply/progress",
          defaultTheme: "",
        }),
      });
    },
  ],
]);
wx.createPage(r);
