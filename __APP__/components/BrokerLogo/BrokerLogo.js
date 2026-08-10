require("../../app.js"), require("../../service/broker.js");
var o = require("../../common/vendor.js"),
  r = require("../../config/broker/11100/index.js"),
  e = {
    props: { customClass: String, colorful: { type: Boolean, default: !0 } },
    computed: {
      brokerLogo: function () {
        return [
          "icon-".concat(r.brokerConfig.base.code),
          this.customClass,
          this.colorful ? "" : "not-colorful",
        ];
      },
    },
  },
  n = o._export_sfc(e, [
    [
      "render",
      function (r, e, n, t, c, s) {
        return { a: o.n(s.brokerLogo) };
      },
    ],
  ]);
wx.createComponent(n);
