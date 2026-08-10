require("../../../app.js");
var r = require("../../../common/vendor.js"),
  e = require("../../../config/key.js"),
  n = {
    mixins: [require("../../../mixin/platforms/index.js").pluginMixins],
    components: {
      Records: function () {
        return "../components/fund/records.js";
      },
    },
    setup: function () {
      return { firstInit: r.ref(!0) };
    },
    onShow: function () {
      var n, o, i;
      if (this.firstInit)
        return (
          (this.firstInit = !1),
          void r.index.setStorageSync(e.FUND_RECORD_DETAIL_CANCE_ORDER, "0")
        );
      null ==
        (i =
          null == (o = null == (n = this.$refs) ? void 0 : n.recordsRef)
            ? void 0
            : o.handleShow) || i.call(o);
    },
  };
Array || (r.resolveComponent("records") + r.resolveComponent("GlobalWrap"))(),
  Math;
var o = r._export_sfc(n, [
  [
    "render",
    function (e, n, o, i, t, s) {
      return {
        a: e.rootFontSize,
        b: r.sr("recordsRef", "fd55c4ce-1,fd55c4ce-0"),
        c: r.sr("#global-wrap", "fd55c4ce-0"),
        d: r.p({
          id: "global-wrap",
          filePath: "/transfer/fund/records",
          defaultTheme: "",
        }),
      };
    },
  ],
]);
wx.createPage(o);
