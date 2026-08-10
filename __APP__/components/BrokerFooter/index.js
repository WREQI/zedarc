require("../../app.js"), require("../../service/broker.js");
var e = require("../../stores/user/useUserinfo.js"),
  r = require("../../common/vendor.js"),
  o = require("../../config/broker/11100/index.js"),
  n = {
    setup: function () {
      var n = e.useUserinfoStore(),
        s = r.storeToRefs(n).fundaccountMask;
      return { broker: o.brokerConfig, fundaccountMask: s };
    },
  };
Array || r.resolveComponent("BrokerLogo")(), Math;
var s = r._export_sfc(n, [
  [
    "render",
    function (e, o, n, s, t, u) {
      return {
        a: r.p({ colorful: !0 }),
        b: r.t(s.broker.base.name),
        c: r.t(s.fundaccountMask),
      };
    },
  ],
  ["__scopeId", "data-v-00b686e2"],
]);
wx.createComponent(s);
