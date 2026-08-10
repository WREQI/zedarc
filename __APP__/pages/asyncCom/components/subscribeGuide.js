var t = require("../../../common/vendor.js"),
  e = {
    props: {
      show: { type: Boolean, default: !1 },
      title: { type: String, default: "开启涨幅变动通知" },
      gifImg: {
        type: String,
        default:
          "https://st.gtimg.com/design/712c9e60aacfff057b358796de8326ff.gif",
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
          eventName: "act.subscribe_guide.".concat(e),
        });
      },
      close: function () {
        this.$emit("close");
      },
      goSetting: function () {
        var e = this;
        this.$emit("close"),
          t.wx$1.openSetting({
            success: function () {
              e.$emit("setting");
            },
          });
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, i, s, c) {
        return t.e(
          { a: n.show },
          n.show
            ? {
                b: t.t(n.title),
                c: t.o(function () {
                  return c.close && c.close.apply(c, arguments);
                }, 1228),
                d: "url(" + n.gifImg + ")",
                e: t.o(function () {
                  return c.goSetting && c.goSetting.apply(c, arguments);
                }, 1229),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(o);
