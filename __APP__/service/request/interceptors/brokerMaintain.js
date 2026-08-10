var r = require("../../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Objectentries"),
  require("../../../app.js");
var n = require("../../../config/errcode.js"),
  t = require("../../aegis/platform/not-wujie.js");
require("../../broker.js");
var i = require("../../../config/broker/11100/index.js"),
  o = "BROKER_NGINX_MAINTAIN",
  a = [/reason=maintain/i, /system\/error/i];
function u(r, n) {
  var t = n.toLowerCase(),
    i = Object.entries(r).find(function (r) {
      return e(r, 1)[0].toLowerCase() === t;
    });
  return i
    ? (function (r) {
        if (null == r) return "";
        if (Array.isArray(r)) {
          var e = r.length > 0 ? r[0] : "";
          return null == e ? "" : String(e);
        }
        return String(r);
      })(i[1])
    : "";
}
function l(r) {
  var e,
    n,
    t = (null == r ? void 0 : r.response) || {},
    i = t.header || {};
  return {
    url: (null == (n = t.config) ? void 0 : n.url) || "",
    status: null !== (e = t.status) && void 0 !== e ? e : "",
    location: u(i, "location"),
  };
}
function s(r) {
  var e,
    n = l(r),
    t = n.status,
    i = n.location,
    o = Number(t);
  return (
    o >= 300 &&
    o < 400 &&
    "string" == typeof (e = i) &&
    a.some(function (r) {
      return r.test(e);
    })
  );
}
function c(r) {
  var e = r;
  return !!e && (!0 === e.isBrokerMaintain || e.retcode === o);
}
(exports.detectBrokerMaintain = function (e) {
  try {
    return e && s(e)
      ? ((function (r) {
          var e, n, o;
          try {
            var a = l(r),
              u = a.url,
              s = a.status,
              c = a.location;
            null ==
              (o = null == (e = t.aegisReporter) ? void 0 : e.reportEvent) ||
              o.call(e, "MONITOR-BROKER-NGINX-MAINTAIN", {
                ext2:
                  (null == (n = i.brokerConfig.base) ? void 0 : n.code) || "",
                ext3: JSON.stringify({ url: u, status: s, location: c }),
              });
          } catch (r) {}
        })(e),
        (function (e) {
          var t,
            a,
            u = e.config || (null == (t = e.response) ? void 0 : t.config),
            l = n.getBrokerNginxMaintainTip(
              null == (a = i.brokerConfig.base) ? void 0 : a.name
            );
          return r(
            {
              retcode: o,
              retmsg: l,
              noRetry: !0,
              data: { retcode: o, retmsg: l, noRetry: !0 },
              isBrokerMaintain: !0,
            },
            u ? { config: u } : {}
          );
        })(e))
      : null;
  } catch (r) {
    return null;
  }
}),
  (exports.isBrokerMaintainError = c),
  (exports.resolveBrokerMaintainErrorTip = function (r) {
    var e, t;
    if (!c(r)) return "";
    var o = r;
    return String(
      (null == o ? void 0 : o.retmsg) ||
        (null == (e = null == o ? void 0 : o.data) ? void 0 : e.retmsg) ||
        n.getBrokerNginxMaintainTip(
          null == (t = i.brokerConfig.base) ? void 0 : t.name
        )
    );
  });
