var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../service/cookie/mp-weixin.js");
require("../../service/broker.js");
var i = require("../../service/aegis/platform/not-wujie.js"),
  a = require("../../utils/getPlatform.js"),
  o = require("../../common/vendor.js"),
  s = require("../../service/request/pureRequest.js"),
  c = require("../../config/broker/11100/index.js"),
  u = new n.AdapterCookie();
exports.usePrivatizationReport = function () {
  var n,
    p,
    l = (c.brokerConfig.base || {}).supportPrivatizationReport,
    v = void 0 !== l && l,
    f = a.getPlatform(),
    b = f.isMpPlugin,
    d = f.isZxg,
    k = f.isOEM,
    m = b ? "2" : k ? "3" : d ? "1" : "0";
  function g(e) {
    var r,
      t,
      n = "";
    return (
      null == (t = null == (r = Object.keys(e)) ? void 0 : r.sort()) ||
        t.forEach(function (r) {
          var t = e[r];
          n += "".concat(r, "=").concat(t, "&");
        }),
      (n += "key=5d68d772f722506b98c198b6d462678a"),
      o.md5(n)
    );
  }
  function h(e) {
    return q.apply(this, arguments);
  }
  function q() {
    return (q = t(
      e().mark(function r(t) {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    s.request(
                      "https://".concat(
                        c.brokerConfig.base.stat.domain,
                        "/privatization_report"
                      ),
                      t,
                      {
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                      }
                    )
                  );
                case 3:
                  e.next = 7;
                  break;
                case 5:
                  (e.prev = 5), (e.t0 = e.catch(0));
                case 7:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[0, 5]]
        );
      })
    )).apply(this, arguments);
  }
  return {
    reportClick:
      ((p = t(
        e().mark(function t(n) {
          var a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), v)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (a = {
                        channel: m,
                        dealer_code: c.brokerConfig.base.code,
                        event_id: n,
                        event_type: "click",
                        mtime: +new Date(),
                        openid: u.get("wzq_qluin"),
                      }),
                      (e.next = 6),
                      h(r(r({}, a), {}, { sign: g(a) }))
                    );
                  case 6:
                    e.next = 11;
                    break;
                  case 8:
                    (e.prev = 8),
                      (e.t0 = e.catch(0)),
                      i.aegisReporter.reportEvent(
                        "MONITOR-PRIVATIZATION-REPORT-CLICK",
                        { ext2: JSON.stringify(e.t0 || {}) }
                      );
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 8]]
          );
        })
      )),
      function (e) {
        return p.apply(this, arguments);
      }),
    reportPv:
      ((n = t(
        e().mark(function t(n) {
          var a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), v)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (a = {
                        channel: m,
                        dealer_code: c.brokerConfig.base.code,
                        event_id: n,
                        event_type: "brow",
                        mtime: +new Date(),
                        openid: u.get("wzq_qluin"),
                      }),
                      (e.next = 6),
                      h(r(r({}, a), {}, { sign: g(a) }))
                    );
                  case 6:
                    e.next = 11;
                    break;
                  case 8:
                    (e.prev = 8),
                      (e.t0 = e.catch(0)),
                      i.aegisReporter.reportEvent(
                        "MONITOR-PRIVATIZATION-REPORT-PV",
                        { ext2: JSON.stringify(e.t0 || {}) }
                      );
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 8]]
          );
        })
      )),
      function (e) {
        return n.apply(this, arguments);
      }),
  };
};
