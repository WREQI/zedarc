var e = require("../../../../../../../common/vendor.js"),
  o = e._export_sfc(
    {
      name: "st-logo",
      props: ["icon", "type", "size"],
      computed: {
        showLogo: function () {
          return (
            this.icon ||
            this.typeMapLogo ||
            "https://wzq.gtimg.com/resource/images/66005d6da694ff953b1e2e6f084f5d4a.png"
          );
        },
        typeMapLogo: function () {
          return "close" === this.type
            ? "https://wzq.gtimg.com/resource/images/801d9f219d0065d36bbd75fa79e1c052.png"
            : "";
        },
      },
    },
    [
      [
        "render",
        function (o, t, n, s, r, c) {
          return {
            a: c.showLogo,
            b: e.n("st-icon-" + n.size),
            c: e.n("st-icon-" + n.size),
          };
        },
      ],
    ]
  );
wx.createComponent(o);
