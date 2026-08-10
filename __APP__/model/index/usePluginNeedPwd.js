require("../../app.js");
var e = require("../../common/vendor.js").ref(!1);
exports.usePluginNeedPwd = function () {
  return {
    needPwd: e,
    setNeedPwdVal: function (r) {
      e.value = r;
    },
  };
};
