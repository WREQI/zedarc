require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../app.js");
var i = require("../../common/vendor.js"),
  o = require("../../stores/user/useUserinfo.js"),
  u = require("../../cgi/apply.js"),
  s = require("../../cgi/applyInfo.js"),
  c = require("../../config/enum.js"),
  l = require("../../service/aegis/platform/not-wujie.js"),
  p = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var f = require("../../config/key.js"),
  v = require("../../service/stat/mp-weixin.js"),
  d = require("../../stores/protocol/useProtocolMul.js"),
  y = require("../../stores/protocol/enum.js"),
  g = require("../../stores/protocol/broker/11100.js"),
  m = require("../../utils/index.js"),
  h = require("../../service/navigateMp.js"),
  b = require("../../config/broker/11100/index.js"),
  x = c.USERSTATE,
  A = x.HASACCOUNT,
  k = x.HASBUNDLE,
  O = x.NOACCOUNT,
  P = x.FAILED,
  C = i.ref(!1),
  q = i.ref({}),
  I = i.ref(!1),
  L = i.ref(!1),
  j = i.ref("");
function M(e) {
  j.value = Array.isArray(e) ? e.join(",") : String(e || "");
}
var S = [];
function w(e) {
  try {
    if (L.value) return !0;
    var r = (function () {
      var e, r, t;
      if (S.length) return S;
      try {
        var n = (
          (null ==
          (t =
            null == (r = null == (e = b.brokerConfig.apply) ? void 0 : e.queue)
              ? void 0
              : r.applyMode)
            ? void 0
            : t.common) || []
        )
          .map(function (e) {
            var r,
              t,
              n,
              a = e.name;
            return null ==
              (n =
                null ==
                (t =
                  null == (r = b.brokerConfig.dictionary)
                    ? void 0
                    : r.APPLY_STEP)
                  ? void 0
                  : t[a])
              ? void 0
              : n.step;
          })
          .filter(Boolean)
          .flatMap(function (e) {
            return e.split(",");
          });
        S = a(new Set(n));
      } catch (e) {}
      return S;
    })();
    if (!e || !r.length) return !1;
    var t = e.split(",");
    return r.every(function (e) {
      return t.includes(e);
    });
  } catch (e) {
    return !1;
  }
}
var T = null,
  N = "",
  R = function () {};
function E(e) {
  e && (N = e);
}
function _() {
  return U.apply(this, arguments);
}
function U() {
  return (U = n(
    t().mark(function e() {
      var r;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((e.t0 = I.value), e.t0)) {
                e.next = 6;
                break;
              }
              return (
                v.stat.click(
                  "trade.apply.base.commit.first",
                  void 0,
                  void 0,
                  void 0,
                  { syncMonitor: !0 }
                ),
                L.value &&
                  v.stat.click(
                    "trade.apply.base.commit.new",
                    void 0,
                    void 0,
                    void 0,
                    { syncMonitor: !0 }
                  ),
                (e.next = 6),
                u.applyCgi
                  .processApplyAccount(u.ACTION.TOOL, { id: N })
                  .catch(function (e) {})
              );
            case 6:
              return (
                v.stat.click(
                  "trade.apply.base.commit",
                  void 0,
                  void 0,
                  void 0,
                  { syncMonitor: !0 }
                ),
                (e.next = 9),
                n(
                  t().mark(function e() {
                    var r, n, a, i, o, u;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = b.brokerConfig.apply.apply || {}),
                                n.needSignProtocol)
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (
                                ((e.prev = 3),
                                (a = d.useProtocolMulStore()),
                                (i = a.protocols),
                                (o = a.signProtocol),
                                (u = a.fetchProtocolListByBiz),
                                (e.t0 = I.value),
                                !e.t0)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.next = 9),
                                u({
                                  biz: y.ENUM_PROTOCOL_BIZ.APPLY,
                                  forceUpdate: !0,
                                })
                              );
                            case 9:
                              if (
                                ((e.t1 =
                                  null == (r = i[y.ENUM_PROTOCOL_BIZ.APPLY])
                                    ? void 0
                                    : r.length),
                                !e.t1)
                              ) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 13),
                                o({ biz: y.ENUM_PROTOCOL_BIZ.APPLY })
                              );
                            case 13:
                              e.next = 18;
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t2 = e.catch(3)),
                                l.aegisReporter.reportEvent(
                                  "MONITOR-APPLY-SIGN_PROTOCOL-FAIL",
                                  { ext2: JSON.stringify(e.t2 || {}) }
                                );
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 15]]
                    );
                  })
                )()
              );
            case 9:
              r = "";
              try {
                r = g.buildApplySubmitProtocolVer(q.value) || "";
              } catch (e) {
                l.aegisReporter.reportEvent("MONITOR-APPLY-PROTOCOL_VER-FAIL", {
                  ext2: JSON.stringify(e || {}),
                });
              }
              return (
                (e.next = 13),
                u.applyCgi.processApplyAccount(u.ACTION.APPLY, {
                  protocol_ver: r,
                })
              );
            case 13:
              return e.abrupt("return", e.sent);
            case 14:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function B() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  try {
    Object.keys(e).forEach(function (r) {
      return (q.value[r] = e[r]);
    });
  } catch (e) {}
}
function F(e) {
  return Y.apply(this, arguments);
}
function Y() {
  return (Y = n(
    t().mark(function n(a) {
      var u, c, v, d, y, g, x, O, P, j, M, S, T, N;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (((u = a.force), (void 0 !== u && u) || !C.value)) {
                  t.next = 3;
                  break;
                }
                return t.abrupt("return", q.value);
              case 3:
                return (
                  (t.prev = 3),
                  (c = o.useUserinfoStore()),
                  (v = [
                    null == c ? void 0 : c.getUserInfo(),
                    s.applyInfoCgi.get(),
                  ]),
                  (t.next = 8),
                  Promise.all(v)
                );
              case 8:
                if (
                  ((d = t.sent),
                  (y = r(d, 2)),
                  (g = y[0]),
                  (x = g.dealercode),
                  (O = g.dealername),
                  (P = g.userstate),
                  (j = y[1]),
                  [A, k].includes(P) && (j.userstate = P),
                  (q.value = e({ dealercode: x, dealername: O }, j)),
                  (I.value = "1" === q.value.is_reject),
                  (L.value = !I.value && w(q.value.remain_steps)),
                  !I.value)
                ) {
                  t.next = 21;
                  break;
                }
                return (M = q.value.remain_steps), (t.next = 19), Z(M);
              case 19:
                t.next = 25;
                break;
              case 21:
                if (((t.t0 = C.value || I.value), t.t0)) {
                  t.next = 25;
                  break;
                }
                return (t.next = 25), R();
              case 25:
                return t.abrupt("return", ((C.value = !0), q.value));
              case 28:
                throw (
                  ((t.prev = 28),
                  (t.t1 = t.catch(3)),
                  (S = p.getPlatform()),
                  (T = S.isEmbeddedMiniProgram),
                  (N = T
                    ? "网络繁忙，请返回小程序重试"
                    : "网络繁忙，请刷新页面重试"),
                  i.index.showModal({
                    content: N,
                    showCancel: !1,
                    confirmText: "确定",
                    success: function () {
                      var e, r, t, n;
                      if (!T) {
                        var a = getCurrentPages(),
                          o = a[a.length - 1],
                          u = "";
                        return (
                          o &&
                            o.route &&
                            (u = "/"
                              .concat(o.route, "?")
                              .concat(i.lib.stringify(o.options || {}))),
                          u
                            ? m.getIsMpPluginComponent()
                              ? (i.index.removeStorageSync(f.RELOGIN),
                                void (
                                  null ==
                                    (n =
                                      null ==
                                      (t =
                                        null ==
                                        (r =
                                          null == (e = requireMiniProgram())
                                            ? void 0
                                            : e.main2Plugin)
                                          ? void 0
                                          : r.call(e))
                                        ? void 0
                                        : t.mainMpWx) ||
                                  n.call(t, "reLaunch", { url: u })
                                ))
                              : void i.index.reLaunch({ url: u })
                            : void 0
                        );
                      }
                      h.navigateBackMiniProgram({
                        extraData: {
                          path: "/pages/index/trade?dealerCode=".concat(
                            b.brokerConfig.base.code
                          ),
                        },
                      });
                    },
                  }),
                  l.aegisReporter.sdk.report({
                    msg: "apply store action, get apply state failed",
                    ext2: JSON.stringify(t.t1 || ""),
                    trace: "trace",
                  }),
                  t.t1)
                );
              case 32:
              case "end":
                return t.stop();
            }
        },
        n,
        null,
        [[3, 28]]
      );
    })
  )).apply(this, arguments);
}
function D(e) {
  return z.apply(this, arguments);
}
function z() {
  return (z = n(
    t().mark(function e(r) {
      var n,
        a,
        i,
        o,
        s,
        c = arguments;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = c.length > 1 && void 0 !== c[1] ? c[1] : {}),
                (a = c.length > 2 ? c[2] : void 0),
                (e.next = 4),
                u.applyCgi.processApplyAccount(r, n, a)
              );
            case 4:
              return (
                (i = e.sent),
                (o = i.remain_steps),
                M((s = void 0 === o ? "" : o)),
                (e.next = 10),
                Z(s)
              );
            case 10:
              return e.abrupt("return", i);
            case 11:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function G(e) {
  return J.apply(this, arguments);
}
function J() {
  return (J = n(
    t().mark(function e(r) {
      var n,
        a,
        i,
        o,
        s = arguments;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                (e.next = 3),
                u.applyCgi.processBankCards(r, n)
              );
            case 3:
              return (
                (a = e.sent),
                (i = a.remain_steps),
                M((o = void 0 === i ? "" : i)),
                (e.next = 9),
                Z(o)
              );
            case 9:
              return e.abrupt("return", a);
            case 10:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Z(e) {
  return H.apply(this, arguments);
}
function H() {
  return (H = n(
    t().mark(function e(r) {
      var n;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((e.t0 = I.value), !e.t0)) {
                e.next = 4;
                break;
              }
              return (e.next = 4), R({ steps: r });
            case 4:
              if (
                ((n = q.value.userstate),
                ![O, P].includes(n) || (r && 0 !== r.length))
              ) {
                e.next = 9;
                break;
              }
              return (e.next = 8), _();
            case 8:
              return e.abrupt(
                "return",
                void i.index.$emit("applySubmitSuccess")
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function V() {
  return W.apply(this, arguments);
}
function W() {
  return (W = n(
    t().mark(function e() {
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((e.t0 = T), e.t0)) {
                e.next = 6;
                break;
              }
              return (
                (e.next = 4), u.applyCgi.processApplyAccount(u.ACTION.MODE)
              );
            case 4:
              (T = e.sent), (e.t0 = T);
            case 6:
              return e.abrupt("return", e.t0);
            case 7:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function $() {
  (C.value = !1), (q.value = {}), (T = null);
}
function K() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    r = arguments.length > 1 ? arguments[1] : void 0,
    t = e.filter(function (e) {
      return !r || r === e.type;
    });
  return t.map(function (e, r) {
    var n = e.reason,
      a = t.length > 1 ? "".concat(r + 1, "、") : "",
      i = n.includes("。") ? n.indexOf("。") : n.length;
    return { num: a, title: n.substring(0, i + 1), text: n.substring(i + 1) };
  });
}
(exports.setStepChangeListener = function (e) {
  R = e;
}),
  (exports.useApplyInfo = function () {
    return {
      isFetch: C,
      applyInfo: q,
      fetchApplyInfo: F,
      setLocalApplyInfo: B,
      setApplyToolId: E,
      isRecoverMode: I,
      isFirstOpenAccount: L,
      lastRemainSteps: j,
      commitApplyData: D,
      commitBankData: G,
      getMode: V,
      resetApplyInfo: $,
      getFormatFailedReason: K,
    };
  });
