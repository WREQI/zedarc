var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/createClass");
require("../../../app.js");
var n = (function () {
    function n() {
      e(this, n);
    }
    return (
      r(n, [
        {
          key: "encode",
          value: function (e) {
            return (function (e) {
              for (var r = [], n = 0; n < e.length; n += 1) {
                var t = e.charCodeAt(n);
                if (t >= 55296 && t <= 56319 && n + 1 < e.length) {
                  var u = e.charCodeAt(n + 1);
                  u >= 56320 && u <= 57343
                    ? ((t = 65536 + ((t - 55296) << 10) + (u - 56320)),
                      (n += 1))
                    : (t = 65533);
                }
                t < 128
                  ? r.push(t)
                  : t < 2048
                  ? r.push(192 | (t >> 6), 128 | (63 & t))
                  : t < 65536
                  ? r.push(
                      224 | (t >> 12),
                      128 | ((t >> 6) & 63),
                      128 | (63 & t)
                    )
                  : r.push(
                      240 | (t >> 18),
                      128 | ((t >> 12) & 63),
                      128 | ((t >> 6) & 63),
                      128 | (63 & t)
                    );
              }
              return new Uint8Array(r);
            })(e || "");
          },
        },
      ]),
      n
    );
  })(),
  t = "undefined" != typeof globalThis ? globalThis : {};
void 0 === t.TextEncoder && (t.TextEncoder = n);
