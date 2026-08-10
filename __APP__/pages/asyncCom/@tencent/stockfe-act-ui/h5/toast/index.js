var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      logo: {
        type: String,
        default:
          "https://wzq.gtimg.com/resource/images/dce69f20cda5266b72ce09b5f580fde1.png",
      },
      duration: { type: Number, default: 3 },
    },
    data: function () {
      return { visible: !0, timer: null };
    },
    mounted: function () {
      var e = this;
      this.timer = setTimeout(function () {
        (e.visible = !1), e.timer && clearTimeout(e.timer), e.$emit("timeend");
      }, 1e3 * this.duration);
    },
    destroyed: function () {
      this.timer && clearTimeout(this.timer);
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, r, o, n, u) {
        return e.e({ a: n.visible }, n.visible ? { b: r.logo } : {});
      },
    ],
  ]);
wx.createComponent(i);
