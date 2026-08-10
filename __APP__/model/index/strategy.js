var e = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../app.js");
var a = new Map([
  [30, 50],
  [50, 60],
  [100, 100],
  [200, 150],
  [300, 200],
  [400, 250],
  [500, 300],
  [99999, 1e3],
]);
exports.getPositionStrategy = function (t) {
  var i,
    n = 0,
    l = r(a);
  try {
    for (l.s(); !(i = l.n()).done; ) {
      var o = e(i.value, 2),
        s = o[0],
        u = o[1];
      if (t <= s) {
        n = u;
        break;
      }
    }
  } catch (e) {
    l.e(e);
  } finally {
    l.f();
  }
  return n;
};
