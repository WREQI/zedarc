require("../../app.js"), require("../../service/broker.js");
var o = require("../../common/vendor.js"),
  r = require("../../config/broker/11100/index.js"),
  e = {
    name: "ServerBroker",
    components: {
      BrokerLogo: function () {
        return "../BrokerLogo/BrokerLogo.js";
      },
    },
    props: {
      fixedv2: Boolean,
      calcSafeArea: Boolean,
      calcNav: Boolean,
      fixed: Boolean,
      colorful: Boolean,
    },
    data: function () {
      return { broker: r.brokerConfig, logoColorful: !1 };
    },
  };
Array || o.resolveComponent("broker-logo")();
var n = o._export_sfc(e, [
  [
    "render",
    function (r, e, n, a, l, c) {
      return {
        a: o.p({ colorful: l.logoColorful }),
        b: o.t(l.broker.base.name || "证券公司"),
        c: n.fixed ? 1 : "",
        d: n.colorful ? 1 : "",
        e: n.fixedv2 ? 1 : "",
        f: n.calcSafeArea ? 1 : "",
        g: n.calcNav ? 1 : "",
      };
    },
  ],
]);
wx.createComponent(n);
