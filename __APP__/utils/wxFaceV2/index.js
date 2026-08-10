var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js");
require("../../service/broker.js"), require("../../service/sdk/lib/api.js");
var t = require("../../service/sdk/platform/mp-weixin.js"),
  a = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../../config/broker/11100/index.js"),
  u = null;
function i(e) {
  var r = e.enabled ? 3e4 : 5e3;
  return (
    (u = { decision: e, expireAt: Date.now() + r }),
    !e.enabled &&
      e.reason &&
      (function (e, r) {
        var n, t, u, i;
        try {
          null ==
            (i = null == (n = a.aegisReporter) ? void 0 : n.reportEvent) ||
            i.call(n, "MONITOR-FACECHECK-V2-DISABLED", {
              ext1: e,
              ext2: "",
              ext3:
                null == (u = null == (t = s.brokerConfig) ? void 0 : t.base)
                  ? void 0
                  : u.code,
            });
        } catch (e) {}
      })(e.reason),
    e
  );
}
exports.isWxFaceV2Enabled = r(
  e().mark(function r() {
    var a,
      s,
      o,
      c,
      l,
      p = arguments;
    return e().wrap(
      function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((a = p.length > 0 && void 0 !== p[0] && p[0]),
                !(u && !a && Date.now() < u.expireAt))
              ) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", u.decision);
            case 3:
              if (
                ((e.prev = 3),
                (l =
                  null == (s = n.wx$1.getSystemInfoSync())
                    ? void 0
                    : s.SDKVersion) && !n.lt(l, "3.8.12"))
              ) {
                e.next = 7;
                break;
              }
              return e.abrupt(
                "return",
                i({ enabled: !1, reason: "sdk_low_version" })
              );
            case 7:
              e.next = 12;
              break;
            case 9:
              return (
                (e.prev = 9),
                (e.t0 = e.catch(3)),
                e.abrupt(
                  "return",
                  i({ enabled: !1, reason: "sdk_low_version" })
                )
              );
            case 12:
              return (
                (e.prev = 12),
                (e.next = 15),
                null == (c = (o = t.sdk).checkIsSupportFaceVerifyV2)
                  ? void 0
                  : c.call(o)
              );
            case 15:
              if (e.sent) {
                e.next = 17;
                break;
              }
              return e.abrupt(
                "return",
                i({ enabled: !1, reason: "sdk_unsupported" })
              );
            case 17:
              e.next = 22;
              break;
            case 19:
              return (
                (e.prev = 19),
                (e.t1 = e.catch(12)),
                e.abrupt(
                  "return",
                  i({ enabled: !1, reason: "sdk_unsupported" })
                )
              );
            case 22:
              return e.abrupt("return", i({ enabled: !0 }));
            case 23:
            case "end":
              return e.stop();
          }
      },
      r,
      null,
      [
        [3, 9],
        [12, 19],
      ]
    );
  })
);
