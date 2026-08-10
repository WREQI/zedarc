require("../../app.js");
var t = require("../../common/vendor.js"),
  o = {
    props: {
      bank: String,
      customClass: String,
      maskStyle: Boolean,
      whiteStyle: Boolean,
    },
    computed: {
      bankLogo: function () {
        return this.bank
          ? this.whiteStyle
            ? "background-image: url(https://st.gtimg.com/image/mp-broker/trade/bank-logo/".concat(
                this.bank,
                "_white.svg)"
              )
            : "background-image: url(https://st.gtimg.com/image/mp-broker/trade/bank-logo/".concat(
                this.bank,
                ".svg)"
              )
          : "";
      },
    },
  },
  e = t._export_sfc(o, [
    [
      "render",
      function (o, e, a, r, s, n) {
        return {
          a: a.customClass,
          b: a.customClass ? 1 : "",
          c: a.maskStyle ? 1 : "",
          d: t.s(n.bankLogo),
        };
      },
    ],
  ]);
wx.createComponent(e);
