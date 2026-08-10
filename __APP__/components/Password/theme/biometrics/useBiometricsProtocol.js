require("../../../../app.js");
var t = require("../../../../service/stat/mp-weixin.js");
exports.useBiometricsProtocol = function (e, o) {
  return {
    refuse: function () {
      o("refuse"), t.stat.click("trade.biometrics.protocol.refuse");
    },
    agree: function () {
      o("agree"), t.stat.click("trade.biometrics.protocol.agree");
    },
    toProtocolDetail: function () {
      o("toProtocolDetail"),
        t.stat.click("trade.biometrics.protocol.showdetail");
    },
    handleBack: function () {
      o("hideProtocolDetail"),
        t.stat.click("trade.biometrics.protocoldetail.back");
    },
  };
};
