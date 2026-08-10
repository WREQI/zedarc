require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../config/enum.js"),
  t = require("../../common/vendor.js"),
  n = require("../../service/connect/index.js"),
  o = require("../../service/aegis/platform/not-wujie.js"),
  r = {
    components: {
      AllocateDebt: function () {
        return "./components/detail/AllocateDebt.js";
      },
      Stock: function () {
        return "./components/detail/Stock.js";
      },
      Debt: function () {
        return "./components/detail/Debt.js";
      },
      Allot: function () {
        return "./components/detail/Allot.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    setup: function () {
      var e = t.getCurrentInstance().proxy;
      t.provide("curPageContext", e);
    },
    data: function () {
      return { type: "", TARGET: e.TARGET, query: {}, isFirst: !0 };
    },
    onUnload: function () {
      this.handleUnload();
    },
    onShow: function () {
      var e, t;
      this.isFirst ||
        null == (t = null == (e = this.$refs.detail) ? void 0 : e.fetchData) ||
        t.call(e);
    },
    mounted: function () {
      var t = this.$route.query,
        n = void 0 === t ? {} : t;
      (this.query = n),
        (this.type = n.type || "undef"),
        (this.isFirst = !1),
        [
          e.TARGET.STOCK,
          e.TARGET.BOND,
          e.TARGET.DEBT,
          e.TARGET.ALLOT,
          e.TARGET.ALLOCATE_DEBT,
        ].includes(this.type) ||
          o.aegisReporter.reportEvent("TRADE-DETAIL-UNEXPECTED-TYPE", {
            ext2: this.type,
          });
    },
    methods: {
      handleUnload: function () {
        n.unsubscribe();
      },
    },
  };
Array ||
  (
    t.resolveComponent("Stock") +
    t.resolveComponent("Debt") +
    t.resolveComponent("Allot") +
    t.resolveComponent("AllocateDebt") +
    t.resolveComponent("MpDialog") +
    t.resolveComponent("GlobalWrap")
  )(),
  Math;
var i = t._export_sfc(r, [
  [
    "render",
    function (e, n, o, r, i, a) {
      return t.e(
        {
          a: e.rootFontSize,
          b: i.type === i.TARGET.STOCK || i.type === i.TARGET.BOND,
        },
        i.type === i.TARGET.STOCK || i.type === i.TARGET.BOND
          ? { c: t.sr("detail", "53a7ddef-1,53a7ddef-0") }
          : i.type === i.TARGET.DEBT
          ? { e: t.sr("detail", "53a7ddef-2,53a7ddef-0") }
          : i.type === i.TARGET.ALLOT
          ? { g: t.sr("detail", "53a7ddef-3,53a7ddef-0") }
          : i.type === i.TARGET.ALLOCATE_DEBT
          ? { i: t.sr("detail", "53a7ddef-4,53a7ddef-0") }
          : {},
        {
          d: i.type === i.TARGET.DEBT,
          f: i.type === i.TARGET.ALLOT,
          h: i.type === i.TARGET.ALLOCATE_DEBT,
          j: t.p({ id: "mp-dialog" }),
          k: t.sr("#global-wrap", "53a7ddef-0"),
          l: t.p({
            id: "global-wrap",
            filePath: "/trade/detail",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(i);
