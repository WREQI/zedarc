var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../common/vendor.js"),
  n = require("../../../utils/getPlatform.js").getPlatform().isMpPlugin;
exports.ensureAuthorized = (function () {
  var i = r(
    e().mark(function r(i, u, a) {
      var s, o, c, f;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (s = !0),
                  (e.next = 3),
                  new Promise(function (e) {
                    t.wx$1.getSetting({
                      success: function (r) {
                        e(r);
                      },
                    });
                  })
                );
              case 3:
                if (
                  ((o = e.sent),
                  (c = n ? o.miniprogramAuthSetting : o.authSetting)[i] ||
                    (s = !1),
                  s)
                ) {
                  e.next = 26;
                  break;
                }
                if (void 0 !== c[i]) {
                  e.next = 16;
                  break;
                }
                return (
                  (e.prev = 7),
                  (e.next = 10),
                  (function (e) {
                    var r = n ? "authorizeForMiniProgram" : "authorize";
                    return new Promise(function (n, i) {
                      t.wx$1[r]({
                        scope: e,
                        success: function (e) {
                          n(e);
                        },
                        fail: function (e) {
                          i(e);
                        },
                      });
                    });
                  })(i)
                );
              case 10:
                (s = !0), (e.next = 16);
                break;
              case 13:
                (e.prev = 13), (e.t0 = e.catch(7)), (s = !1);
              case 16:
                if (s) {
                  e.next = 26;
                  break;
                }
                return (e.next = 19), a({ content: u });
              case 19:
                if (!e.sent.confirm) {
                  e.next = 25;
                  break;
                }
                return (
                  (e.next = 22),
                  new Promise(function (e) {
                    t.wx$1.openSetting({
                      success: function (r) {
                        e(r);
                      },
                      fail: function (e) {},
                    });
                  })
                );
              case 22:
                if (!(f = e.sent) || !f.authSetting[i]) {
                  e.next = 25;
                  break;
                }
                return e.abrupt("return", (s = !0));
              case 25:
                throw { scope: i, authorized: s };
              case 26:
                return e.abrupt("return", s);
              case 27:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[7, 13]]
      );
    })
  );
  return function (e, r, t) {
    return i.apply(this, arguments);
  };
})();
