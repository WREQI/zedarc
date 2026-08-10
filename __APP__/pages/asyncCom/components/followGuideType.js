var t = require("../../../common/vendor.js"),
  e = {
    watch: { title: "基础盯盘设置成功", desc: "关注公众号，解锁全面盯盘" },
    remind: { title: "基础提醒设置成功", desc: "关注公众号，解锁全面提醒" },
  },
  o = {
    props: {
      show: { type: Boolean, default: !1 },
      stat: { type: String, default: "" },
      type: { type: String, default: "watch" },
    },
    computed: {
      titleText: function () {
        var t;
        return (null == (t = e[this.type]) ? void 0 : t.title) || e.watch.title;
      },
      descText: function () {
        var t;
        return (null == (t = e[this.type]) ? void 0 : t.desc) || e.watch.desc;
      },
    },
    watch: {
      show: function (t) {
        t && this.report("show");
      },
    },
    methods: {
      report: function (e) {
        t.Request.reportMTAData({
          eventName: "act.follow_guide.".concat(e),
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
  n = t._export_sfc(o, [
    [
      "render",
      function (e, o, n, c, i, a) {
        return t.e(
          { a: n.show },
          n.show
            ? {
                b: t.t(a.titleText),
                c: t.t(a.descText),
                d: t.o(function () {
                  return a.cancel && a.cancel.apply(a, arguments);
                }, 1335),
                e: t.o(function () {
                  return a.goFollow && a.goFollow.apply(a, arguments);
                }, 1336),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-8f130860"],
  ]);
wx.createComponent(n);
