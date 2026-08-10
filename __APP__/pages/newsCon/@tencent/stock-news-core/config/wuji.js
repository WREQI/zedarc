var e,
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js");
require("../../../js-cookie/src/js.cookie.js"),
  (e = n.mpWuji),
  (exports.getConfigGray = function (t) {
    var i = t.appid,
      o = t.schemaid,
      a = t.rowid,
      c = t.key;
    return new Promise(function (t, u) {
      return (
        (s = exports),
        null,
        (d = r().mark(function () {
          var s, d, p, f, m, l;
          return r().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    (function (r) {
                      var n = r.appid,
                        t = r.schemaid,
                        i = r.rowid;
                      return e.get({ appid: n, schemaid: t, rowid: i });
                    })({ appid: i, schemaid: o, rowid: a })
                  );
                case 2:
                  (s = r.sent),
                    (d = s.code),
                    (p = s.data),
                    200 === d && p
                      ? ((f = p[c]),
                        (m = (function () {
                          var e;
                          return (
                            n.wx$1 && (e = n.wx$1.getStorageSync("_qluin")), e
                          );
                        })()),
                        (l = f.indexOf(m.slice(-1).toLowerCase()) >= 0),
                        t(l))
                      : u(s);
                case 6:
                case "end":
                  return r.stop();
              }
          }, p);
        })),
        new Promise(function (e, r) {
          var n = function e(n) {
              try {
                i(d.next(n));
              } catch (e) {
                r(e);
              }
            },
            t = function (e) {
              try {
                i(d.throw(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(n, t);
            };
          i((d = d.apply(s, null)).next());
        })
      );
      var s, d;
    });
  });
