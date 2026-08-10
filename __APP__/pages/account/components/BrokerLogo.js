var o = require("../../../common/vendor.js"),
  r = {
    props: {
      brokerCode: { type: [String, Number], default: "" },
      customClass: { type: String, default: "" },
      colorful: { type: Boolean, default: !0 },
    },
    computed: {
      brokerLogo: function () {
        return [
          "icon-".concat(this.brokerCode),
          this.customClass,
          this.colorful ? "" : "not-colorful",
        ];
      },
    },
  },
  e = o._export_sfc(r, [
    [
      "render",
      function (r, e, t, c, n, s) {
        return o.e(
          { a: !!t.brokerCode },
          t.brokerCode
            ? {
                b: "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                  t.brokerCode,
                  ".svg"
                ),
                c: o.n(s.brokerLogo),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(e);
