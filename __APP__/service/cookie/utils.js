require("../../@babel/runtime/helpers/Objectvalues");
var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var n = require("../../common/vendor.js"),
  u = ["wzq_qluin", "wzq_qlskey", "wzq_qlappid"],
  i = ["qluin", "qlskey", "qlappid"];
exports.isLogin = function () {
  var t = [].concat(u, i).reduce(function (u, i) {
    return r(r({}, u), {}, e({}, i, n.CookieUniversal().get(i)));
  }, {});
  return (
    Object.values(i).every(function (e) {
      return Boolean(t[e]);
    }) ||
    Object.values(u).every(function (e) {
      return Boolean(t[e]);
    })
  );
};
