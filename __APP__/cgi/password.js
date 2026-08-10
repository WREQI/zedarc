var e = require("../@babel/runtime/helpers/toConsumableArray"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  n = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s,
  o = require("../utils/crypt/state.js"),
  u = require("../config/cgi.js"),
  a = require("./base.js"),
  c = require("../service/aegis/platform/not-wujie.js"),
  l = require("../common/vendor.js"),
  f = {},
  h = {},
  p = new ((function (a) {
    n(v, a);
    var p = i(v);
    function v() {
      return r(this, v), p.apply(this, arguments);
    }
    return (
      t(v, [
        {
          key: "change",
          value: function (e) {
            return this.request(u.API_PASSWD, e, {
              encodeFields: ["tel", "id_number"],
            });
          },
        },
        {
          key: "verify",
          value: function (r) {
            var t = this;
            return new Promise(function (n, i) {
              var o = r && !l.isEmpty(r) ? JSON.stringify(r) : "_defaultList";
              if (h[o]) {
                f[o] = [].concat(e(f[o] || []), [{ resolve: n, reject: i }]);
                try {
                  c.aegisReporter.reportEvent(
                    "event-http-tradepasswd-pending",
                    { ext2: Date.now() }
                  );
                } catch (e) {}
              } else
                h[o] = t
                  .request(u.API_TRADEPASSWD, r, {
                    retLoginInfo: t.retLoginInfo,
                    noSetCookies: t.noSetCookies,
                  })
                  .then(function (e) {
                    delete h[o];
                    for (var r = f[o] || []; (s = r.shift()); ) s.resolve(e);
                    n(e);
                  })
                  .catch(function (e) {
                    delete h[o];
                    for (var r = f[o] || []; (s = r.shift()); ) s.reject(e);
                    i(e), delete f[o];
                  });
            });
          },
        },
        {
          key: "verifyTransfer",
          value: function (e) {
            return this.request(u.API_TRANSFERPASSWD, e);
          },
        },
        {
          key: "shouldCheckPassword",
          value: function (e) {
            var r = this;
            return new Promise(function (t, n) {
              r.request(u.API_TRADEPREPARE, e, {
                retLoginInfo: r.retLoginInfo,
                noSetCookies: r.noSetCookies,
              })
                .then(function (e) {
                  o.resetkey(e), o.setSeed(e.timeseed), t(e);
                })
                .catch(function (e) {
                  return n(e);
                });
            });
          },
        },
      ]),
      v
    );
  })(a.BaseAPI))();
exports.passwordCgi = p;
