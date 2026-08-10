var t = require("../../../../../common/vendor.js"),
  o = {
    props: {
      show: { type: Boolean, default: !1 },
      stat: { type: String, default: "" },
    },
    watch: {
      show: function (t) {
        t && this.report("show");
      },
    },
    methods: {
      report: function (t) {
        this.$emit("report", { eventName: "act.follow_guide.".concat(t) });
      },
      cancel: function () {
        this.report("cancel"), this.$emit("cancel");
      },
      goFollow: function () {
        this.report("confirm"),
          this.$emit("confirm"),
          t.StockBridge.routeTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=".concat(
                  this.stat
                )
              )
            ),
          });
      },
    },
  },
  e = t._export_sfc(o, [
    [
      "render",
      function (o, e, n, c, r, a) {
        return t.e(
          { a: n.show },
          n.show
            ? {
                b: t.o(function () {
                  return a.cancel && a.cancel.apply(a, arguments);
                }, 3256),
                c: t.o(function () {
                  return a.goFollow && a.goFollow.apply(a, arguments);
                }, 3257),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-34e7aecf"],
  ]);
wx.createComponent(e);
