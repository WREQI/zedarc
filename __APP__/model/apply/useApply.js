var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var p = require("./useApplyInfo.js"),
  r = require("./useApplyStep.js"),
  u = require("../../cgi/apply.js");
exports.useApply = function () {
  var s = r.useApplyStep();
  return e(
    e(e({}, p.useApplyInfo()), s),
    {},
    {
      requestApplyAccount: function (e) {
        var p =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u.applyCgi.processApplyAccount(e, p);
      },
    }
  );
};
