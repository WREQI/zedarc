var t = require("../../../common/vendor.js"),
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
      report: function (o) {
        t.Request.reportMTAData({
          eventName: "act.follow_guide.".concat(o),
          fchannel_id_fm_i: this.stat,
        });
      },
      cancel: function () {
        this.report("cancel"), this.$emit("close");
      },
      goFollow: function () {
        this.report("confirm"),
          this.$emit("close"),
          t.wx$1.navigateTo({
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
      function (o, e, n, c, a, i) {
        return t.e(
          { a: n.show },
          n.show
            ? {
                b: t.o(function () {
                  return i.cancel && i.cancel.apply(i, arguments);
                }, 1345),
                c: t.o(function () {
                  return i.goFollow && i.goFollow.apply(i, arguments);
                }, 1346),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(e);
