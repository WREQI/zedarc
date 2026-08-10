var e = require("../Index.js"),
  r = require("../../../../../common/vendor.js"),
  t = {
    name: "BrandArea",
    props: {
      showLogoText: { type: Boolean, default: !1 },
      brokerName: { type: String, default: "" },
      bottomText: { type: String, default: "" },
      brokerId: { type: String, default: e.DEFAULT_BROKER },
    },
    computed: {
      computedBrokerId: function () {
        return this.brokerId || e.DEFAULT_BROKER;
      },
      investInfo: function () {
        return e.makeInvestTipInfo(this.computedBrokerId);
      },
      brokerImage: function () {
        var r = e.dealerInfo[this.computedBrokerId];
        return r ? r.img : "";
      },
    },
  },
  o = r._export_sfc(t, [
    [
      "render",
      function (e, t, o, n, a, d) {
        return r.e(
          { a: d.brokerImage },
          d.brokerImage ? { b: d.brokerImage } : {},
          { c: d.investInfo }
        );
      },
    ],
    ["__scopeId", "data-v-dfe60861"],
  ]);
wx.createComponent(o);
