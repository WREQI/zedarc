require("../../../app.js");
var t = require("../../../config/enum/condition.js");
exports.statusFormatter = function (r) {
  return t.CondStatusText[r] || "";
};
