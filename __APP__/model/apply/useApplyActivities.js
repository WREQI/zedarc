var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("./useApply.js"),
  u = require("../../cgi/apply.js");
exports.useApplyActivities = function () {
  var a,
    i,
    c,
    p = null == (a = t.getCurrentInstance()) ? void 0 : a.proxy,
    o = n.useApply(),
    s = o.isRecoverMode,
    l = o.addExcludeStep;
  return {
    onApplyProcessEnter:
      ((c = r(
        e().mark(function t() {
          var n, a, i, c, o;
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((n = p.$route.query),
                    (a = n.act),
                    (i = void 0 === a ? "" : a),
                    (c = n.exclude),
                    (o = n.code),
                    (t.t0 = s.value),
                    t.t0)
                  ) {
                    t.next = 11;
                    break;
                  }
                  if (((t.t1 = "mobile_code" === i && o), !t.t1)) {
                    t.next = 7;
                    break;
                  }
                  return (
                    (t.next = 7),
                    (function () {
                      var t = r(
                        e().mark(function r(t) {
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      u.applyCgi.getPhoneAuthStatus({
                                        type: "dealer",
                                        code: t,
                                      })
                                    );
                                  case 3:
                                    return (e.next = 5), l(["ApplyBindMobile"]);
                                  case 5:
                                    e.next = 9;
                                    break;
                                  case 7:
                                    (e.prev = 7), (e.t0 = e.catch(0));
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            r,
                            null,
                            [[0, 7]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()(o)
                  );
                case 7:
                  if (((t.t2 = c), !t.t2)) {
                    t.next = 11;
                    break;
                  }
                  return (
                    (t.next = 11),
                    (function () {
                      var t = r(
                        e().mark(function r(t) {
                          var n, u, a;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n = { mobile: "ApplyBindMobile" }),
                                    !(
                                      (u = null == t ? void 0 : t.split("+")) &&
                                      u.length > 0
                                    ))
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (a = u
                                      .map(function (e) {
                                        return n[e];
                                      })
                                      .filter(function (e) {
                                        return e;
                                      })),
                                    (e.next = 5),
                                    l(a)
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()(c)
                  );
                case 11:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )),
      function () {
        return c.apply(this, arguments);
      }),
    onApplyStepChange:
      ((i = r(
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return i.apply(this, arguments);
      }),
  };
};
