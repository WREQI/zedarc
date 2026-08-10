require("../../config/enum.js"),
  require("../../common/vendor.js"),
  (exports.adaptFontSize = function (e, r, a) {
    var s = +e;
    if (!isNaN(s)) {
      var t = r;
      t = t ? Number(t) : 1e8;
      return Math.abs(s) > t ? "adapt-small-size fs-".concat(a) : "";
    }
  });
