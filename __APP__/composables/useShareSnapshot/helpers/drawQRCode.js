var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"), require("./textEncoderPolyfill.js");
var l = require("../../../common/vendor.js");
exports.makeDrawQRCode = function (n) {
  return (function () {
    var o = r(
      e().mark(function r(o, i, t, u, a) {
        var s, c, v, d, f, m, p, F, h, q, y, b, R, g, j, k;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                for (
                  f =
                    null !== (s = null == a ? void 0 : a.margin) && void 0 !== s
                      ? s
                      : 0,
                    m =
                      null !== (c = null == a ? void 0 : a.dark) && void 0 !== c
                        ? c
                        : "#000000",
                    p =
                      null !== (v = null == a ? void 0 : a.light) &&
                      void 0 !== v
                        ? v
                        : "#FFFFFF",
                    F =
                      null !==
                        (d = null == a ? void 0 : a.errorCorrectionLevel) &&
                      void 0 !== d
                        ? d
                        : "M",
                    h = l.create(o, { errorCorrectionLevel: F }),
                    q = h.modules.size,
                    y = h.modules.data,
                    b = u / (q + 2 * f),
                    n.save(),
                    n.fillStyle = p,
                    n.fillRect(i, t, u, u),
                    n.fillStyle = m,
                    R = 0;
                  R < q;
                  R += 1
                )
                  for (g = 0; g < q; g += 1)
                    y[R * q + g] &&
                      ((j = i + (f + g) * b),
                      (k = t + (f + R) * b),
                      n.fillRect(j, k, b + 0.5, b + 0.5));
                n.restore();
              case 4:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e, r, l, n, i) {
      return o.apply(this, arguments);
    };
  })();
};
