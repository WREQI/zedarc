require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../apply/count.js");
exports.useCountDown = function () {
  var n = e.ref(0),
    u = new r.Count(function (e) {
      n.value = e;
    });
  return { countTimeText: n, countTimmer: u };
};
