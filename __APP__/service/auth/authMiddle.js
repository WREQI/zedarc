require("../../app.js");
var e = require("../../components/Password/theme/biometrics/BiometricsSettingFromPassword.js"),
  r = require("./auth.js");
exports.register = function () {
  r.registerBioSettingCreater(e.createBiometricsManager);
};
