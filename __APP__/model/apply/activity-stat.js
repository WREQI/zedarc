require("../../app.js"),
  require("../../service/broker.js"),
  require("../../config/enum.js");
var e = require("../../utils/getPlatform.js");
require("../../cgi/base.js");
var r = require("../../config/key.js");
exports.getActivityChannel = function () {
  if ("h5-weixin" !== e.getPlatform().bizPlatform) return {};
  var i = window.sessionStorage.getItem(r.ACTIVITY_BANK_CHANNEL);
  if (!i) return {};
  try {
    return JSON.parse(i);
  } catch (e) {
    return {};
  }
};
