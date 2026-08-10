var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"), require("../../../service/broker.js");
var i = require("./constants.js"),
  o = require("./quoteSnapshot.js"),
  u = require("../../../config/broker/11100/index.js");
function a(e, r) {
  return "".concat(e, "_").concat(r || "all");
}
exports.assemblePermissionStep = (function () {
  var c = t(
    e().mark(function t(c, s) {
      var l, f, p, m, g, d, h, b, v, k, x, y, q;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (0 !== c.length) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", null);
            case 2:
              if (
                ((p = new Map(
                  c.map(function (e) {
                    return [e.excite_id, e.order];
                  })
                )),
                (m = c.map(function (e) {
                  return e.excite_id;
                })),
                0 !== (g = i.mergeMarketExcites(m)).length)
              ) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", null);
            case 5:
              return (
                (d = function (e) {
                  return (function (e, r) {
                    return 0 === e.length
                      ? 0
                      : Math.max.apply(
                          Math,
                          n(
                            e.map(function (e) {
                              return i.resolvePermissionOrder(e, r.get(e));
                            })
                          )
                        );
                  })(e.sourceExciteIds, p);
                }),
                g.sort(function (e, r) {
                  return d(r) - d(e);
                }),
                (h = g.map(function (e) {
                  return {
                    type: "main",
                    config: e.config,
                    sourceExciteIds: e.sourceExciteIds,
                    quote: null,
                  };
                })),
                (b = new Set()),
                g.forEach(function (e) {
                  b.add(a(e.config.permissionKey, e.config.market));
                }),
                (v = !!(null ==
                (f =
                  null == (l = u.brokerConfig.hall)
                    ? void 0
                    : l.permissionUnlock)
                  ? void 0
                  : f.hideLinkageCard)),
                (k = new Map()),
                v ||
                  g.forEach(function (e) {
                    i.resolveLinkageConfigs(e.config).forEach(function (e) {
                      var r = a(e.permissionKey, e.market);
                      b.has(r) || k.has(r) || k.set(r, e);
                    });
                  }),
                (x = s(
                  n(k.values()).map(function (e) {
                    return { permissionKey: e.permissionKey, market: e.market };
                  })
                )
                  .map(function (e) {
                    var r = k.get(a(e.permissionKey, e.market)),
                      n = r ? i.getLinkageTargetConfig(r) : void 0;
                    return n && r
                      ? {
                          type: "linkage",
                          config: n,
                          sourceExciteIds: n.exciteIds,
                          quote: null,
                          linkageTier: r.tier,
                        }
                      : null;
                  })
                  .filter(function (e) {
                    return !!e;
                  })
                  .sort(function (e, r) {
                    return e.config.priority - r.config.priority;
                  })),
                (e.next = 14),
                o.fetchQuoteSnapshots(
                  [].concat(
                    n(
                      h.map(function (e) {
                        return e.config;
                      })
                    ),
                    n(
                      x.map(function (e) {
                        return e.config;
                      })
                    )
                  )
                )
              );
            case 14:
              return (
                (y = e.sent),
                (q = [].concat(
                  n(
                    h.map(function (e) {
                      var n;
                      return r(
                        r({}, e),
                        {},
                        {
                          quote:
                            null !== (n = y[e.config.configKey]) && void 0 !== n
                              ? n
                              : null,
                        }
                      );
                    })
                  ),
                  n(
                    x.map(function (e) {
                      var n;
                      return r(
                        r({}, e),
                        {},
                        {
                          quote:
                            null !== (n = y[e.config.configKey]) && void 0 !== n
                              ? n
                              : null,
                        }
                      );
                    })
                  )
                )),
                e.abrupt(
                  "return",
                  0 === q.length
                    ? null
                    : {
                        permissionCards: q,
                        priority: Math.max.apply(
                          Math,
                          n(
                            c.map(function (e) {
                              return i.resolvePermissionOrder(
                                e.excite_id,
                                e.order
                              );
                            })
                          )
                        ),
                      }
                )
              );
            case 17:
            case "end":
              return e.stop();
          }
      }, t);
    })
  );
  return function (e, r) {
    return c.apply(this, arguments);
  };
})();
