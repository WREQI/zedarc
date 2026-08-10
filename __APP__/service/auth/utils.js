var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/objectWithoutProperties"),
  i = ["biometricsScene"],
  t = ["biometricsScene"];
require("../../app.js");
var s = require("./auth.type.js"),
  o = require("../../components/Password/index.js"),
  n = require("./counter.js"),
  c = require("../../components/Password/theme/biometrics/utils.js");
(exports.getBiometricsOptions = function (t) {
  var u = t.biometricsScene,
    a = r(t, i);
  return e(
    e({}, a),
    {},
    {
      theme: o.THEME.BIOMETRICS,
      onSuccess: function (e) {
        var r;
        null == (r = null == a ? void 0 : a.onSuccess) ||
          r.call(a, {
            authType: s.LoginType.Biometrics,
            bioResult: null == e ? void 0 : e.bioResult,
          });
        try {
          c.isAutoLoginScene(u) && n.addBiometricsCount();
        } catch (e) {}
      },
    }
  );
}),
  (exports.getPasswordOptions = function (i) {
    var o = i || {},
      n = (o.biometricsScene, r(o, t));
    return e(
      e({}, n),
      {},
      {
        onSuccess: function (r) {
          var i;
          null == (i = null == n ? void 0 : n.onSuccess) ||
            i.call(n, e({ authType: s.LoginType.Password }, r));
        },
      }
    );
  });
