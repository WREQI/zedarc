var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "yy-guide",
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
    components: {
      Icon: function () {
        return "../icon/index.js";
      },
    },
    mounted: function () {
      var e = this;
      this.timer && clearTimeout(this.timer),
        (this.timer = setTimeout(function () {
          (e.visible = !1), e.$emit("timeend");
        }, 1e3 * this.duration));
    },
    destroyed: function () {
      this.timer && clearTimeout(this.timer);
    },
  };
Array || e.resolveComponent("Icon")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, n, o, r, s) {
      return e.e(
        { a: r.visible },
        r.visible ? { b: e.p({ logo: n.logo }) } : {}
      );
    },
  ],
]);
wx.createComponent(i);
