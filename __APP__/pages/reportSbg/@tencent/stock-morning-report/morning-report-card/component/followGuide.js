var o = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      show: { type: Boolean, default: !1 },
      stat: { type: String, default: "" },
      wzqConfig: { type: Object, default: null },
    },
    watch: {
      show: function (o) {
        o && this.report("show");
      },
    },
    methods: {
      report: function (t) {
        o.StockBridge.report("act.follow_guide.".concat(t), {});
      },
      cancel: function () {
        this.report("cancel"), this.$emit("cancel");
      },
      goFollow: function () {
        var t, e;
        this.report("confirm"), this.$emit("confirm");
        var n = {
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(
              ""
                .concat(
                  "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat="
                )
                .concat(this.stat)
            )
          ),
        };
        o.wx$1 && o.wx$1.navigateTo
          ? o.wx$1.navigateTo(n)
          : null ==
              (e =
                null == (t = null == window ? void 0 : window.wx)
                  ? void 0
                  : t.miniProgram) || e.navigateTo(n);
      },
    },
  },
  e = o._export_sfc(t, [
    [
      "render",
      function (t, e, n, c, a, i) {
        return o.e(
          { a: n.show },
          n.show
            ? {
                b: o.o(function () {
                  return i.cancel && i.cancel.apply(i, arguments);
                }, 3357),
                c: o.o(function () {
                  return i.goFollow && i.goFollow.apply(i, arguments);
                }, 3358),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-c772ec7e"],
  ]);
wx.createComponent(e);
