var e = require("../../../../../../common/vendor.js");
exports.getEleInfo = function (n, r) {
  return new Promise(function (t) {
    document ||
      e.wx$1
        .createSelectorQuery()
        .in(r)
        .select(n)
        .fields({ node: !0, size: !0, rect: !0 })
        .exec(function (e) {
          var n = (e && e[0]) || {};
          t(n);
        });
  });
};
