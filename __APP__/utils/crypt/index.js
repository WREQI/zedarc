var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../cgi/trade.js"),
  n = require("../../service/aegis/platform/not-wujie.js");
require("../../service/sdk/lib/api.js");
var i = require("../../service/sdk/platform/mp-weixin.js"),
  s = require("../../service/request/index.js"),
  a = require("../../service/request/interceptors/brokerMaintain.js"),
  c = require("./state.js"),
  o = !1;
function u(e) {
  return p.apply(this, arguments);
}
function p() {
  return (p = r(
    e().mark(function r(t) {
      var a,
        o,
        p,
        g,
        d,
        f,
        l,
        h,
        m,
        v,
        y = arguments;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((a = y.length > 1 && void 0 !== y[1] && y[1]),
                (o = c.getTimeSeed()),
                (p = c.getEncrypt()),
                (g = c.getEncryptExtra()),
                (d = ""),
                (f = ""),
                (l = ""),
                (h = ""),
                (d = p.encode(t, o)),
                g && (f = g.encode(t, o)),
                a || !s.getGmSwitchFlag() || !p.needSign)
              ) {
                e.next = 8;
                break;
              }
              return (
                (e.next = 6),
                ((v = d), i.sdk.gmSign({ plain: v })).catch(function (e) {
                  try {
                    n.aegisReporter.sdk.report({
                      msg: "gmSign:fail",
                      ext2: e.retcode,
                      ext3: e.retmsg,
                      trace: "trace",
                    });
                  } catch (e) {}
                  if ("-1" == e.retcode) return u(t, !0);
                  throw e;
                })
              );
            case 6:
              (m = e.sent), (l = m.pubKey), (h = m.sign), !m.pubKey || m.sign;
            case 8:
              return e.abrupt("return", {
                encodePwd: d,
                encodePwdExtra: f,
                pubKey: l,
                sign: h,
              });
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
exports.cryptPasswd = function e(r) {
  var i,
    s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
    p = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    g = arguments.length > 3 ? arguments[3] : void 0,
    d = c.getTimeSeed(),
    f = c.getEncrypt(),
    l = Boolean(d),
    h = l ? d.hasUsed() : "";
  return new Promise(function (d, m) {
    if (o)
      i = setInterval(function () {
        o || (clearInterval(i), e(r, s).then(d, m));
      }, 200);
    else {
      if (!p && l && !h && f) return d(u(r));
      (function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "trade";
        try {
          return (
            (o = !0),
            new Promise(function (r, i) {
              t.tradeCgi
                .prepare({ scene: e })
                .then(function (e) {
                  if (((o = !1), !e.key))
                    throw (
                      (i({
                        retcode: "EUPTPUBKEY",
                        retmsg: "更新公钥失败, 公钥返回为空",
                      }),
                      new RangeError("publick key is empty"))
                    );
                  c.resetkey(e), c.setSeed(e.timeseed), r(e);
                })
                .catch(function (e) {
                  (o = !1),
                    a.isBrokerMaintainError(e)
                      ? i(e)
                      : i({
                          retcode: "EUPDATESEED",
                          retmsg: "网络繁忙，请重试",
                        }),
                    e instanceof Error &&
                      n.aegisReporter.reportEvent("MONITOR-TRADEPREPARE-FAIL", {
                        ext2: JSON.stringify(e),
                      });
                });
            })
          );
        } finally {
          o = !1;
        }
      })(g)
        .then(function () {
          d(u(r));
        })
        .catch(function (e) {
          m(e);
        });
    }
  });
};
