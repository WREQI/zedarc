var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "yy-icon",
    props: {
      icon: String,
      type: String,
      size: { type: String, default: "default" },
    },
    computed: {
      logo: function () {
        return this.icon
          ? this.icon
          : "close" === this.type
          ? "https://wzq.gtimg.com/resource/images/801d9f219d0065d36bbd75fa79e1c052.png"
          : "https://wzq.gtimg.com/resource/images/66005d6da694ff953b1e2e6f084f5d4a.png";
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, i, r, c) {
        return { a: c.logo, b: e.n("yy-icon-" + n.size) };
      },
    ],
  ]);
wx.createComponent(o);
