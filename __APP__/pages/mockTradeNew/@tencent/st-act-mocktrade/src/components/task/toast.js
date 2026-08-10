var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      reward: String,
      title: { type: String, default: "任务完成" },
      toastImg: {
        type: String,
        default:
          "https://wzq.gtimg.com/resource/images/dce69f20cda5266b72ce09b5f580fde1.png",
      },
      topPos: String,
    },
    data: function () {
      return { isShowToast: !0 };
    },
    mounted: function () {
      var t = this;
      this.timer = setTimeout(function () {
        (t.isShowToast = !1), t.timer && clearTimeout(t.timer);
      }, 3e3);
    },
    destroyed: function () {
      this.timer && clearTimeout(this.timer);
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, o, i, s, n) {
        return t.e(
          { a: s.isShowToast },
          s.isShowToast
            ? { b: o.toastImg, c: t.t(o.title), d: t.t(o.reward || "--") }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e0c28777"],
  ]);
wx.createComponent(r);
