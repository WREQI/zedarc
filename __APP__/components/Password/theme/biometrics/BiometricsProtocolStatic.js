require("../../../../app.js"), require("../../../../service/broker.js");
var o = require("../../../../common/vendor.js"),
  r = require("../../../../config/broker/10800/index.js"),
  e = {
    components: {
      BiometricsProtocolContainer: function () {
        return "./BiometricsProtocolContainer.js";
      },
      VProtocol: function () {
        return "../../../../bizs/protocol/rich-text-protocol/index.js";
      },
      LoadingProvider: function () {
        return "../../../../bizs/protocol/loading-provider/index.js";
      },
    },
    setup: function (o, e) {
      var t = e.emit;
      return {
        close: function () {
          t("close");
        },
        protocolKey: r.brokerConfig.common.biometricsProtocol,
      };
    },
  };
Array ||
  (
    o.resolveComponent("VProtocol") +
    o.resolveComponent("LoadingProvider") +
    o.resolveComponent("BiometricsProtocolContainer")
  )();
var t = o._export_sfc(e, [
  [
    "render",
    function (r, e, t, n, i, c) {
      return {
        a: o.p({ "protocol-key": n.protocolKey }),
        b: o.o(n.close),
        c: o.p({
          showClose: !0,
          showButton: !1,
          title: "指纹/面容验证服务确认书",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-79aceb0b"],
]);
wx.createComponent(t);
