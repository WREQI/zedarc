var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  r = require("./api.js"),
  n = require("../../../common/vendor.js"),
  t = function () {},
  c = {},
  i = {
    get version() {
      return r.API.version;
    },
    reflectAssign: function (e, r) {
      (c[e] = c[e] = []), c[e].push(r);
    },
    reflectApply: function (e, r) {
      (c[e] || []).forEach(function (e) {
        e(r);
      });
    },
    can: function () {
      return Promise.resolve(!0);
    },
    support: function () {
      return this.can.apply(this, arguments);
    },
    parseParams: function (r) {
      var c = e(r, 5),
        i = c[0],
        o = c[1],
        s = c[2],
        u = c[3],
        a = c[4];
      return (
        ((i = n.isPlainObject(i) ? i : {}).success = o || i.success || t),
        (i.error = s || i.error || t),
        (i.cancel = u || i.cancel || t),
        (i.ticker = a || i.ticker || t),
        i
      );
    },
    checkIsSupportSoterAuthentication: function () {},
    checkIsSoterEnrolledInDevice: function () {},
    startSoterAuthentication: function () {},
  };
exports.common = i;
