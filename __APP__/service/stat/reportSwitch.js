require("../../app.js");
var t = !1,
  e = !1;
(exports.isReportEnabled = function () {
  return t;
}),
  (exports.isReportSwitchInitialized = function () {
    return e;
  }),
  (exports.updateReportSwitch = function (r) {
    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (e && !i) || ((t = "1" === r || void 0 === r), (e = !0));
  });
