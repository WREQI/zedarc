require("../../../../../../common/vendor.js");
var e = require("../knife.js"),
  t = e.sdk.reportAnalytics;
exports.report = function (r) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    o = arguments.length > 2 ? arguments[2] : void 0;
  r &&
    ("zxg" === e.platform
      ? t({ eventName: r, dataObject: a })
      : o.$emit("dataReport", { eventName: r, dataObject: a }));
};
