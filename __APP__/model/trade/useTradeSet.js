var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../common/vendor.js");
require("../../service/broker.js");
var a = require("../../cgi/trade.js"),
  o = require("../../service/auth/auth.js"),
  c = require("../../service/auth/auth.type.js"),
  i = require("../../components/Password/index.js"),
  u = require("../../config/broker/11100/index.js");
exports.useTradeSet = function () {
  var s,
    d,
    p = null == (s = n.getCurrentInstance()) ? void 0 : s.proxy,
    l = n.ref(u.brokerConfig.base.domain),
    v = n.ref(""),
    h = n.ref(0);
  function f(e) {
    var r = e.trade_set_domain,
      t = e.trade_order_no;
    (l.value = (function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return e.replace(/^https?:\/\//, "").replace(/\/$/, "");
    })(r || u.brokerConfig.base.domain)),
      (v.value = t);
  }
  function m(e, r) {
    return b.apply(this, arguments);
  }
  function b() {
    return (b = t(
      r().mark(function e(t, o) {
        var c, i, u;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (c = t.market),
                    (i = t.code),
                    (u = t.stockholder_code),
                    (e.prev = 1),
                    (v.value = ""),
                    (h.value = o ? h.value + 1 : 0),
                    (e.t0 = f),
                    (e.next = 6),
                    a.tradeCgi.queryOrderNo({
                      market: c,
                      stock_code: i,
                      stockholder_code: u,
                      retry_time: h.value,
                    })
                  );
                case 6:
                  (e.t1 = e.sent), (0, e.t0)(e.t1), (e.next = 13);
                  break;
                case 10:
                  (e.prev = 10),
                    (e.t2 = e.catch(1)),
                    n.index.showToast({
                      title: e.t2.retmsg || "服务器繁忙 请稍后再试",
                      icon: "none",
                    });
                case 13:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[1, 10]]
        );
      })
    )).apply(this, arguments);
  }
  return {
    orderDomain: l,
    orderId: v,
    setTradeSetInfo: f,
    tradeInitWrapper:
      ((d = t(
        r().mark(function e(t) {
          var n;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 11;
                      break;
                    }
                    return (e.prev = 1), (e.next = 4), t(h.value);
                  case 4:
                    return (n = e.sent), e.abrupt("return", (f(n), n));
                  case 8:
                    throw ((e.prev = 8), (e.t0 = e.catch(1)), e.t0);
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 8]]
          );
        })
      )),
      function (e) {
        return d.apply(this, arguments);
      }),
    tradeSetSubmit: (function () {
      var s = t(
        r().mark(function t(s) {
          var h, f;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      (n.index.showLoading({ title: "提交中" }),
                      (r.t0 = v.value),
                      r.t0)
                    ) {
                      r.next = 5;
                      break;
                    }
                    return (r.next = 5), m(s, !0);
                  case 5:
                    return (
                      (r.prev = 5),
                      (r.next = 8),
                      a.tradeCgi.submit(
                        e(e({}, s), {}, { orderid: v.value }),
                        e(
                          e(
                            {},
                            l.value === u.brokerConfig.base.domain
                              ? void 0
                              : {
                                  baseURL: "https://".concat(
                                    l.value,
                                    "/cgi-bin/"
                                  ),
                                  withCredentials: !0,
                                }
                          ),
                          {},
                          { checkTradeSession: !1, ignoreDomainSync: !0 }
                        )
                      )
                    );
                  case 8:
                    return (h = r.sent), r.abrupt("return", (m(s, !1), h));
                  case 12:
                    if (
                      ((r.prev = 12),
                      (r.t1 = r.catch(5)),
                      m(s, !0),
                      !/^51088820$/.test(null == r.t1 ? void 0 : r.t1.retcode))
                    ) {
                      r.next = 27;
                      break;
                    }
                    return (
                      (r.prev = 15),
                      (r.next = 18),
                      new Promise(function (e, r) {
                        o.Auth({
                          biometricsScene: c.BiometricsScene.TRADE,
                          theme: i.THEME.TRADE,
                          context: p,
                          isTrade: !0,
                          showErrorWithNotice: !1,
                          onSuccess: function (r) {
                            e(r);
                          },
                          onCancel: function () {
                            r({
                              retcode: "pwd_oncancel",
                              retmsg: "用户取消密码验证",
                            });
                          },
                          onHide: function () {
                            r({
                              retcode: "pwd_oncancel",
                              retmsg: "用户取消密码验证",
                            });
                          },
                        });
                      })
                    );
                  case 18:
                    return (
                      (f = r.sent),
                      (r.next = 21),
                      d(e(e({}, s), {}, { token: f.encodePwd }))
                    );
                  case 21:
                    return r.abrupt("return", r.sent);
                  case 24:
                    throw ((r.prev = 24), (r.t2 = r.catch(15)), r.t2);
                  case 27:
                    throw r.t1;
                  case 28:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [
              [5, 12],
              [15, 24],
            ]
          );
        })
      );
      function d(e) {
        return s.apply(this, arguments);
      }
      return d;
    })(),
  };
};
