var r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js");
function t(r, e) {
  return new Promise(function (n, t) {
    var a = r.createImage();
    (a.onload = function () {
      return n(a);
    }),
      (a.onerror = function () {
        return t(new Error("createImage failed: ".concat(e)));
      }),
      (a.src = e);
  });
}
exports.makeLoadImage = function (a) {
  return (function () {
    var u = e(
      r().mark(function e(u) {
        var o;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (a) {
                  r.next = 2;
                  break;
                }
                throw new Error("makeLoadImage: canvas is required");
              case 2:
                if (u) {
                  r.next = 4;
                  break;
                }
                throw new Error("loadImage: empty url");
              case 4:
                if (
                  (function (r) {
                    return /^https?:\/\//.test(r);
                  })(u)
                ) {
                  r.next = 6;
                  break;
                }
                return r.abrupt("return", t(a, u));
              case 6:
                return (
                  (r.next = 8),
                  new Promise(function (r, e) {
                    n.index.getImageInfo({
                      src: u,
                      success: function (e) {
                        return r(e.path);
                      },
                      fail: function (r) {
                        return e(
                          new Error(
                            r.errMsg || "getImageInfo failed: ".concat(u)
                          )
                        );
                      },
                    });
                  })
                );
              case 8:
                return (o = r.sent), r.abrupt("return", t(a, o));
              case 10:
              case "end":
                return r.stop();
            }
        }, e);
      })
    );
    return function (r) {
      return u.apply(this, arguments);
    };
  })();
};
