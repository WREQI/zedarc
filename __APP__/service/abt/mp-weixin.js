var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var n = require("../../common/vendor.js"),
  a = require("../../utils/index.js"),
  u = n.ABT.create;
n.ABT.create = function (n) {
  var a;
  if (null == (a = n.platforms) ? void 0 : a.includes("mp-plugin"))
    return new Promise(function (a, c) {
      try {
        u(
          t(
            t({}, n),
            {},
            {
              success: function (e) {
                a(t({}, e));
              },
              fail: function (e) {
                c(t({}, e));
              },
              complete: function (e) {
                a(t({}, e));
              },
              abtRequest: function () {
                return r(
                  e().mark(function r() {
                    var t, a;
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              null ==
                                (a = (t = requireMiniProgram().main2Plugin())
                                  .abtRequest)
                                ? void 0
                                : a.call(t, n)
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                  })
                )();
              },
            }
          )
        );
      } catch (e) {}
    });
};
var c = {
  proxy: function (e) {
    try {
      n.ABT.proxy(e);
    } catch (e) {}
  },
  create: n.ABT.create,
  check: function (e) {
    try {
      n.ABT.check(e);
    } catch (e) {}
  },
  clear: function () {
    try {
      n.ABT.clear();
    } catch (e) {}
  },
  getABT: function (t) {
    if (
      (null == t ? void 0 : t.platforms) &&
      t.platforms.includes("mp-plugin") &&
      t &&
      t.id
    )
      return a.isInTimeRange(t.date || !1)
        ? new Promise(
            (function () {
              var a = r(
                e().mark(function r(a) {
                  var u, c;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.ABT.create({
                                moduleID: t.id,
                                platforms: t.platforms,
                              })
                            );
                          case 3:
                            (u = e.sent),
                              (c = u.data),
                              a((c && c[0]) || {}),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0)), a(t.default);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })()
          )
        : t.default;
  },
};
exports.ABT = c;
