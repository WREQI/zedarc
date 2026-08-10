var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/toConsumableArray"),
  t = require("../@babel/runtime/helpers/objectSpread2"),
  a = require("../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../@babel/runtime/helpers/classCallCheck"),
  s = require("../@babel/runtime/helpers/createClass"),
  n = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var c = require("./base.js"),
  o = require("../utils/getPlatform.js");
require("../service/sdk/lib/api.js");
var l = require("../service/sdk/platform/mp-weixin.js");
require("../service/broker.js");
var p,
  d = require("../config/cgi.js"),
  f = require("../config/broker/11100/index.js"),
  h = require("../common/vendor.js"),
  b = {},
  v = {},
  m = new ((function (c) {
    n(q, c);
    var m = u(q);
    function q() {
      return i(this, q), m.apply(this, arguments);
    }
    return (
      s(q, [
        {
          key: "fetchUserinfo",
          value: function (i) {
            var s = this;
            return new Promise(
              (function () {
                var n = a(
                  e().mark(function a(n, u) {
                    var c, m, q, k, g, j, x, _, I, y, P;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((q = o.getPlatform()),
                                (k = q.isZxg),
                                (g = {}),
                                !k)
                              ) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.prev = 3), (e.next = 6), l.sdk.clientinfo()
                              );
                            case 6:
                              (j = e.sent),
                                (x = j.appName),
                                (_ = j.appver),
                                (g = { _appName: x, _appver: _ }),
                                (e.next = 14);
                              break;
                            case 12:
                              (e.prev = 12), (e.t0 = e.catch(3));
                            case 14:
                              if (!i || "1" !== String(i.action)) {
                                e.next = 27;
                                break;
                              }
                              return (
                                (e.prev = 15),
                                (I = (
                                  null ==
                                  (m =
                                    null == (c = f.brokerConfig)
                                      ? void 0
                                      : c.trade)
                                    ? void 0
                                    : m.userinfoBrokerCgi
                                )
                                  ? d.API_USERINFO_BROKER
                                  : d.API_USERINFO),
                                (e.next = 19),
                                s.request(
                                  I,
                                  t(t({ dealer: 1, detail: 1 }, i), g)
                                )
                              );
                            case 19:
                              (y = e.sent).shareholdercards ||
                                (y.shareholdercards = []),
                                n(y),
                                (e.next = 26);
                              break;
                            case 23:
                              (e.prev = 23), (e.t1 = e.catch(15)), u(e.t1);
                            case 26:
                              return e.abrupt("return");
                            case 27:
                              (P =
                                i && !h.isEmpty(i)
                                  ? JSON.stringify(i)
                                  : "_defaultList"),
                                v[P]
                                  ? (b[P] = [].concat(r(b[P] || []), [
                                      { resolve: n, reject: u },
                                    ]))
                                  : (v[P] = s
                                      .request(
                                        d.API_USERINFO,
                                        t(t({ dealer: 1, detail: 1 }, i), g),
                                        { decodeFields: ["contact_addr_gm"] }
                                      )
                                      .then(function (e) {
                                        e.shareholdercards ||
                                          (e.shareholdercards = []),
                                          delete v[P];
                                        for (
                                          var r = b[P] || [];
                                          (p = r.shift());

                                        )
                                          p.resolve(e);
                                        n(e);
                                      })
                                      .catch(function (e) {
                                        delete v[P];
                                        for (
                                          var r = b[P] || [];
                                          (p = r.shift());

                                        )
                                          p.reject(e);
                                        u(e), delete b[P];
                                      }));
                            case 29:
                            case "end":
                              return e.stop();
                          }
                      },
                      a,
                      null,
                      [
                        [3, 12],
                        [15, 23],
                      ]
                    );
                  })
                );
                return function (e, r) {
                  return n.apply(this, arguments);
                };
              })()
            );
          },
        },
      ]),
      q
    );
  })(c.BaseAPI))();
(exports.httpUserinfo = m),
  (exports.removeUserInfoRequestFlag = function () {
    v = {};
  });
