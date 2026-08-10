var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, u) {
      var c = function (e) {
          try {
            o(t.next(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          try {
            o(t.throw(e));
          } catch (e) {
            u(e);
          }
        },
        o = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, a);
        };
      o((t = t.apply(e, r)).next());
    });
  };
require("../../../../../common/vendor.js");
(exports.globalPrivacyCheck = function () {
  return r(
    exports,
    null,
    e().mark(function r() {
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
              case 4:
                e.next = 9;
                break;
              case 6:
                return (
                  (e.prev = 6), (e.t0 = e.catch(1)), e.abrupt("return", !1)
                );
              case 9:
                return e.abrupt("return", !0);
              case 10:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[1, 6]]
      );
    })
  );
}),
  (exports.isH5Native = !1),
  (exports.isPrivacyAgreementAgreed = function () {
    return !0;
  }),
  (exports.sqPrivacyCheck = function () {
    return r(
      exports,
      null,
      e().mark(function r() {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case 4:
                  e.next = 9;
                  break;
                case 6:
                  return (
                    (e.prev = 6), (e.t0 = e.catch(1)), e.abrupt("return", !1)
                  );
                case 9:
                  return e.abrupt("return", !0);
                case 10:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[1, 6]]
        );
      })
    );
  });
