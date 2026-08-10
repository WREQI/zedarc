require("../../../../app.js");
var e = require("./useBiometricsProtocol.js"),
  o = require("../../../../config/enum/biometrics.js"),
  t = require("../../../../common/vendor.js"),
  r = require("../../password.type.js");
require("../../../../service/broker.js");
var i = require("../../../../config/broker/11100/index.js"),
  n = {
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
    props: {
      biometricsMode: { type: String, required: !0 },
      biometricsCurrentStep: { type: String, required: !0 },
      biometricsInitStep: { type: String, required: !0 },
    },
    setup: function (n, c) {
      var s = c.emit,
        p = e.useBiometricsProtocol(n, s),
        u = p.refuse,
        l = p.agree,
        m = p.toProtocolDetail,
        a = p.handleBack,
        d = t.computed(function () {
          return "开启".concat(o.BioAuthModeText[n.biometricsMode]);
        }),
        b = t.computed(function () {
          return o.BioAuthModeText[n.biometricsMode];
        });
      return {
        title: d,
        refuse: u,
        agree: l,
        toProtocolDetail: m,
        handleBack: a,
        BioAuthModeLongText: o.BioAuthModeLongText,
        BiometricsOpenStep: r.BiometricsOpenStep,
        protocolKey: i.brokerConfig.common.biometricsProtocol,
        biometricsText: b,
      };
    },
  };
Array ||
  (
    t.resolveComponent("BiometricsProtocolContainer") +
    t.resolveComponent("VProtocol") +
    t.resolveComponent("LoadingProvider")
  )();
var c = t._export_sfc(n, [
  [
    "render",
    function (e, o, r, i, n, c) {
      return t.e(
        { a: r.biometricsCurrentStep === i.BiometricsOpenStep.protocol },
        r.biometricsCurrentStep === i.BiometricsOpenStep.protocol
          ? {
              b: t.t(i.BioAuthModeLongText[r.biometricsMode]),
              c: t.t(i.biometricsText),
              d: t.t(i.biometricsText),
              e: t.o(function () {
                return (
                  i.toProtocolDetail && i.toProtocolDetail.apply(i, arguments)
                );
              }),
              f: t.o(i.refuse),
              g: t.o(i.agree),
              h: t.p({ title: i.title }),
            }
          : {
              i: t.p({ "protocol-key": i.protocolKey }),
              j: t.o(i.handleBack),
              k: t.o(i.refuse),
              l: t.o(i.refuse),
              m: t.o(i.agree),
              n: t.p({
                showBack:
                  r.biometricsInitStep !== i.BiometricsOpenStep.protocolDetail,
                showClose: !0,
                title: "指纹/面容验证服务确认书",
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-908b7d6e"],
]);
wx.createComponent(c);
