var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../common/vendor.js");
exports.useBulletin = function (i) {
  var t = e({ expire: 7, needPrefix: !0 }, i),
    n = t.needPrefix ? "mp-broker://".concat(t.id) : t.id,
    a = r.ref(!1),
    u = r.index.getStorageSync(n);
  if (u) {
    var o = r.dayjs(u).format("YYYY-MM-DD"),
      d = r.dayjs().format("YYYY-MM-DD");
    r.dayjs(d).diff(o, "days") < t.expire && (a.value = !0);
  }
  return {
    hideBulletin: r.computed(function () {
      return !t.bizShowBulletin.value || a.value;
    }),
    closeBulletin: function () {
      (a.value = !0), r.index.setStorageSync(n, new Date().getTime());
    },
  };
};
