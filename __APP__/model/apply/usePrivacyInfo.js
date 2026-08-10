require("../../@babel/runtime/helpers/Objectvalues");
var r,
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var i = require("../../common/vendor.js"),
  a = require("../../cgi/apply.js"),
  u = require("../../cgi/account.js");
require("../../service/broker.js");
var c = require("../../utils/getPlatform.js"),
  s = require("../../utils/index.js"),
  p = require("../../service/aegis/platform/not-wujie.js"),
  l = require("../../common/components/Dialog/index.js"),
  f = require("../../adapter/router.js"),
  g = require("../../config/broker/11100/index.js"),
  v = c.getPlatform(),
  b = v.isZxg,
  y = v.isWeixin,
  A = i.ref(!1),
  C = { BANKCARD: "1", IDCARD: "2" },
  P = (function (r) {
    return (r[(r.APPLY = 0)] = "APPLY"), (r[(r.BIZ = 1)] = "BIZ"), r;
  })(P || {}),
  d = i.reactive((o((r = {}), C.BANKCARD, "0"), o(r, C.IDCARD, "0"), r));
(exports.EScene = P),
  (exports.PrivacySignId = C),
  (exports.usePrivacyInfo = function (r) {
    var o = (function (r) {
      return 0 === r
        ? {
            query: function (r) {
              return a.applyCgi.processApplyAccount(
                a.ACTION.QUERY_CFT_PROTOCOL,
                r
              );
            },
            sign: function (r) {
              return a.applyCgi.processApplyAccount(
                a.ACTION.SIGN_CFT_PROTOCOL,
                r
              );
            },
          }
        : {
            query: function (r) {
              return u.accountCgi.processCftUserinfo(
                n(n({}, r), {}, { action: u.CFT_USERINFO_ACTION.QUERY })
              );
            },
            sign: function (r) {
              return u.accountCgi.processCftUserinfo(
                n(n({}, r), {}, { action: u.CFT_USERINFO_ACTION.SIGN })
              );
            },
          };
    })(r);
    function i() {
      var r = "".concat(g.brokerConfig.base.id.toLowerCase(), "_privacy");
      return y ? (r += "_wzq") : b && (r += "_zxg"), r;
    }
    function c() {
      var r = i();
      return "https://"
        .concat(g.brokerConfig.base.domain)
        .concat(s.getStaticPath(), "#/protocol/vtools-protocol?key=")
        .concat(r);
    }
    var v,
      P,
      h = (function () {
        var r = t(
          e().mark(function r() {
            var t;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (t = []),
                        (r.prev = 1),
                        (r.next = 4),
                        o.query({
                          protocol_id: [C.BANKCARD, C.IDCARD].join("|"),
                        })
                      );
                    case 4:
                      if (((r.t0 = r.sent.sign_status), r.t0)) {
                        r.next = 7;
                        break;
                      }
                      r.t0 = [];
                    case 7:
                      (t = r.t0), (r.next = 13);
                      break;
                    case 10:
                      return (
                        (r.prev = 10),
                        (r.t1 = r.catch(1)),
                        r.abrupt(
                          "return",
                          (p.aegisReporter.reportEvent(
                            "MONITOR-APPLY-ERR_APPLY_QUERY_CFT_FAIL"
                          ),
                          d)
                        )
                      );
                    case 13:
                      return r.abrupt(
                        "return",
                        (t.forEach(function (r) {
                          d[r.id] && (d[r.id] = r.status);
                        }),
                        (A.value = !0),
                        d)
                      );
                    case 14:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [[1, 10]]
            );
          })
        );
        return function () {
          return r.apply(this, arguments);
        };
      })();
    function j(r) {
      return !!d[r] && "1" === d[r];
    }
    function m() {
      return Object.values(d).every(function (r) {
        return "1" === r;
      });
    }
    return {
      isPrivacyStatusInit: A,
      refreshPrivacySignStatus: h,
      getPrivacySignStatus: j,
      setPrivacySignStatus:
        ((P = t(
          e().mark(function r(t) {
            var n, i, a;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (i = t.isSign ? "1" : "0"),
                      (a =
                        null !== (n = t.protocolUrl) && void 0 !== n ? n : c()),
                      (r.next = 3),
                      o.sign({
                        protocol_id: [C.BANKCARD, C.IDCARD].join("|"),
                        protocol_url: Array(2).fill(a).join("|"),
                        sign_flag: Array(2).fill(i).join("|"),
                        dealer_code: g.brokerConfig.base.code,
                      })
                    );
                  case 3:
                    Object.keys(d).forEach(function (r) {
                      d[r] = i;
                    });
                  case 4:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        )),
        function (r) {
          return P.apply(this, arguments);
        }),
      getPrivacySignAllStatus: m,
      getProtocolKey: i,
      getProtocolUrl: c,
      getAuthStatus:
        ((v = t(
          e().mark(function r() {
            var t,
              n,
              o,
              i,
              a = arguments;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        ((t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                        (n = t.isShowErr),
                        (o = void 0 === n || n),
                        (i = t.signId),
                        A.value)
                      ) {
                        r.next = 11;
                        break;
                      }
                      return (r.prev = 2), (r.next = 5), h();
                    case 5:
                      r.next = 11;
                      break;
                    case 7:
                      if (((r.prev = 7), (r.t0 = r.catch(2)), !o)) {
                        r.next = 11;
                        break;
                      }
                      throw (
                        (l.Dialog({
                          message: "个人信息授权协议签署状态查询失败",
                          messageAlign: "justify",
                        }),
                        r.t0)
                      );
                    case 11:
                      return r.abrupt("return", i ? j(i) : m());
                    case 12:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [[2, 7]]
            );
          })
        )),
        function () {
          return v.apply(this, arguments);
        }),
      toProtocol: function () {
        var r = i();
        f.router().push({ name: "VProtocol", query: { key: r } });
      },
    };
  });
