require("../app.js");
var n = require("../common/vendor.js"),
  e = null,
  t = null;
(exports.getAccountInfo = function () {
  return t || (t = n.index.getAccountInfoSync());
}),
  (exports.getWindowInfoCompact = function () {
    try {
      return (
        e ||
        (e = n.index.getWindowInfo
          ? n.index.getWindowInfo()
          : n.index.getSystemInfoSync()) ||
        {} ||
        {}
      );
    } catch (n) {
      return {};
    }
  });
