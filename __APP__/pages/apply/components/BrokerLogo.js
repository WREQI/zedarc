var e = require("../../../common/vendor.js"),
  o = {
    props: {
      brokerCode: { type: [String, Number], default: "" },
      width: { type: String, default: "100%" },
      height: { type: String, default: "100%" },
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
  r = e._export_sfc(o, [
    [
      "render",
      function (o, r, t, n, c, i) {
        return e.e(
          { a: !!t.brokerCode },
          t.brokerCode
            ? {
                b: "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                  t.brokerCode,
                  ".svg"
                ),
                c: e.n(i.brokerLogo),
                d: t.width,
                e: t.height,
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(r);
