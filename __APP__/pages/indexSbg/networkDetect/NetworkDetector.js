require("../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t,
  r = require("../../../@babel/runtime/helpers/typeof"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/createClass"),
  o = require("../../../@babel/runtime/helpers/defineProperty"),
  c = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  s = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  u = Object.defineProperties,
  E = Object.getOwnPropertyDescriptors,
  p = Object.getOwnPropertySymbols,
  T = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  d = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  f = function (e, t) {
    for (var r in t || (t = {})) T.call(t, r) && d(e, r, t[r]);
    if (p) {
      var n,
        a = s(p(t));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          r = n.value;
          l.call(t, r) && d(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  R = function (e, t) {
    return u(e, E(t));
  },
  N = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, c);
        };
      s((r = r.apply(e, t)).next());
    });
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var O = require("../../../common/vendor.js"),
  _ = "millisec",
  m = "hour";
function C() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
    t = new Date();
  return (
    "sec" === e
      ? t.setMilliseconds(0)
      : "min" === e
      ? t.setSeconds(0, 0)
      : e === m && t.setMinutes(0, 0, 0),
    t.getTime()
  );
}
function I(e, t, r) {
  return N(
    this,
    null,
    c().mark(function n() {
      return c().wrap(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                if (((n.prev = 0), !O.wx$1[e])) {
                  n.next = 5;
                  break;
                }
                return (n.next = 4), r();
              case 4:
                return n.abrupt("return", n.sent);
              case 5:
                O.mpReporter.log("当前微信版本不支持API ".concat(e)),
                  O.mpReporter.reportEvent(
                    "MONITOR-NETWORK-DETECT—WXAPI-NOTFOUND",
                    { ext2: e.toUpperCase() }
                  ),
                  (n.next = 11);
                break;
              case 8:
                (n.prev = 8),
                  (n.t0 = n.catch(0)),
                  O.mpReporter.log(
                    "调用微信的API ".concat(e, " 失败: ").concat(n.t0.message)
                  ),
                  O.mpReporter.reportEvent(
                    "MONITOR-NETWORK-DETECT—WXAPI-FAILED",
                    { ext2: e.toUpperCase() }
                  );
              case 11:
                return n.abrupt("return", t);
              case 12:
              case "end":
                return n.stop();
            }
        },
        n,
        null,
        [[0, 8]]
      );
    })
  );
}
function g() {
  return N(
    this,
    null,
    c().mark(function e() {
      return c().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                I(
                  "getNetworkType",
                  { networkType: "unknown", signalStrength: 0 },
                  function () {
                    return new Promise(function (e, t) {
                      O.wx$1.getNetworkType({
                        success: function (t) {
                          e(t);
                        },
                        fail: function (e) {
                          t(e);
                        },
                      });
                    });
                  }
                )
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
function D() {
  return N(
    this,
    null,
    c().mark(function e() {
      var t, r, n;
      return c().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (t = {}),
                (e.next = 3),
                (function () {
                  return N(
                    this,
                    null,
                    c().mark(function e() {
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                I("getDeviceInfo", {}, function () {
                                  return new Promise(function (e, t) {
                                    try {
                                      e(O.wx$1.getDeviceInfo());
                                    } catch (e) {
                                      t(e);
                                    }
                                  });
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                })()
              );
            case 3:
              return (
                (r = e.sent),
                (e.next = 6),
                (function () {
                  return N(
                    this,
                    null,
                    c().mark(function e() {
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                I("getAppBaseInfo", {}, function () {
                                  return new Promise(function (e, t) {
                                    try {
                                      e(O.wx$1.getAppBaseInfo());
                                    } catch (e) {
                                      t(e);
                                    }
                                  });
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                })()
              );
            case 6:
              return (
                (n = e.sent), e.abrupt("return", (t = f(f(f({}, t), r), n)))
              );
            case 8:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
function v() {
  return N(
    this,
    null,
    c().mark(function e() {
      var t, r, n, a, o, s, i, u, E;
      return c().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (t = {
                  operating_system: "",
                  system_ver: "",
                  app_ver: "",
                  wx_ver: "",
                  browser: "",
                  browser_ver: "",
                }),
                (e.next = 3),
                D()
              );
            case 3:
              if (((r = e.sent), (e.t0 = 0 === Object.keys(r).length), !e.t0)) {
                e.next = 9;
                break;
              }
              return (
                (e.next = 8),
                (function () {
                  return N(
                    this,
                    null,
                    c().mark(function e() {
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                I("getSystemInfoAsync", {}, function () {
                                  return new Promise(function (e, t) {
                                    O.wx$1.getSystemInfoAsync({
                                      success: function (t) {
                                        e(t);
                                      },
                                      fail: function (e) {
                                        t(e);
                                      },
                                    });
                                  });
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                })()
              );
            case 8:
              r = e.sent;
            case 9:
              return (
                (a = (n = r).platform),
                (o = void 0 === a ? "" : a),
                (s = n.system),
                (i = void 0 === s ? "" : s),
                (u = n.version),
                (E = void 0 === u ? "" : u),
                e.abrupt(
                  "return",
                  ((t.operating_system = o),
                  (t.system_ver = i),
                  (t.wx_ver = E),
                  t)
                )
              );
            case 11:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
function h(e) {
  return N(
    this,
    null,
    c().mark(function t() {
      var r, n, a, o, s, i, u, E;
      return c().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.prev = 0),
                  (t.next = 3),
                  (function () {
                    return N(
                      this,
                      null,
                      c().mark(function e() {
                        var t, r, n;
                        return c().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), g();
                              case 2:
                                return (
                                  (t = e.sent),
                                  (r = t.networkType),
                                  (n = void 0 === r ? "" : r),
                                  e.abrupt("return", {
                                    proxy: "",
                                    cookie: 0,
                                    js: 1,
                                    lstorage: 0,
                                    sstorage: 0,
                                    conType: n,
                                  })
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                  })()
                );
              case 3:
                return (r = t.sent), (t.next = 6), v();
              case 6:
                return (
                  (n = t.sent),
                  (a = n.operating_system),
                  (o = n.system_ver),
                  (s = n.app_ver),
                  (i = n.wx_ver),
                  (u = n.browser),
                  (E = n.browser_ver),
                  t.abrupt("return", {
                    channel: e.channel || "",
                    operating_system: a,
                    system_ver: o,
                    app_ver: s,
                    wx_ver: i,
                    browser: u,
                    browser_ver: E,
                    network_type: r.conType,
                    ua_setting: r.proxy,
                    cookie_status: r.cookie,
                    local_storage: r.lstorage,
                    session_storage: r.sstorage,
                    js_status: r.js,
                    record_time: C(),
                  })
                );
              case 16:
                return (
                  (t.prev = 16),
                  (t.t0 = t.catch(0)),
                  t.abrupt(
                    "return",
                    (O.mpReporter.log(
                      "调用网络探测 getDiagnoseInfo 异常: ".concat(t.t0.message)
                    ),
                    O.mpReporter.reportEvent(
                      "MONITOR-NETWORK-DETECT—GETDIAGNOSEINFO-EXCEPTION",
                      { ext3: JSON.stringify(t.t0 || {}) }
                    ),
                    {})
                  )
                );
              case 19:
              case "end":
                return t.stop();
            }
        },
        t,
        null,
        [[0, 16]]
      );
    })
  );
}
function y(e) {
  var t = e;
  if (e && e.endsWith("/mp/v2/")) return t;
  if (t && t.length > 0) {
    var r = e.split("/");
    r && r[0] && r[2] && (t = "".concat(r[0], "//").concat(r[2]));
  }
  return t;
}
var b = function (e) {
    var t = e.match(/^(?:https?):\/\/([^\\/]+)/);
    return t && t.length >= 2 ? t[1] : "";
  },
  w = "zxgxcx",
  x = 500,
  k = "NETWORK_DETECT_DATA_KEY",
  A = (function (e) {
    return (
      (e.REACHABLE = "0"),
      (e.ABROAD_IP = "1"),
      (e.BLACK_IP = "2"),
      (e.UNREACHABLE = "3"),
      e
    );
  })(A || {}),
  S = { 0: "可达", 1: "境外IP", 2: "黑名单", 3: "不可达" },
  W = "NETWORK_DETECT_CANCEL",
  M = "NETWORK_DETECT_FAILED",
  P = "NETWORK_DETECT_REACHABLE",
  K = {
    ERROR_INFO_EMPTY: "ERROR_INFO_EMPTY",
    DONT_NEED_DETECT: "DONT_NEED_DETECT",
    FULL_PATH_EMPTY: "FULL_PATH_EMPTY",
    CGI_NOT_IN_WHITE_LIST: "CGI_NOT_IN_WHITE_LIST",
    ERROR_INFO_NOT_MATCH: "ERROR_INFO_NOT_MATCH",
    ERROR_INFO_MATCH: "ERROR_INFO_MATCH",
    NETWORK_DISCONNECTED: "NETWORK_DISCONNECTED",
    WEAK_NETWORK_IGNORE: "WEAK_NETWORK_IGNORE",
    WEAK_NETWORK: "WEAK_NETWORK",
    DETEFCT_UI_SHOWING: "DETECT_UI_SHOWING",
    REACHABLE_BEFORE_DETECT: "REACHABLE_BEFORE_DETECT",
    MAX_DETECT: "MAX_DETECT",
    DOMAIN_EMPTY: "DOMAIN_EMPTY",
    REPORT_DETECT_FAILED: "REPORT_DETECT_FAILED",
    DETECT_EXCEPTION: "DETECT_EXCEPTION",
    DETECT_REACHABLE: "DETECT_REACHABLE",
    DETECT_UNREACHABLE: "DETECT_UNREACHABLE",
  },
  L = ["none", "offline"],
  U = { weakNet: !1, networkType: "" },
  H = { networkType: "", isConnected: !0 },
  F = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (U.weakNet !== e.weakNet) {
      U = e;
      var t = JSON.stringify(e);
      O.mpReporter.log(
        "当前弱网状态：".concat(U.weakNet ? "弱网" : "强网", " ").concat(t)
      );
    }
  },
  q = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (H.isConnected === e.isConnected && H.networkType === e.networkType) ||
      ((H = e),
      O.mpReporter.log(
        "当前网络"
          .concat(H.isConnected ? "连接中" : "已断开", ", 网络类型：")
          .concat(H.networkType)
      ));
  },
  B = function () {
    var e = function (e, t) {
        I(e, null, function () {
          return new Promise(function (r) {
            O.wx$1[e](t), r(null);
          });
        });
      },
      t = function () {
        var e = "boolean" == typeof H.isConnected && !1 === H.isConnected,
          t = "string" == typeof H.networkType && L.includes(H.networkType);
        return e || t;
      },
      r = function () {
        return Object.assign(
          {
            isWeakNet: "boolean" == typeof U.weakNet && !0 === U.weakNet,
            isNetworkDisconnected: t(),
          },
          U,
          H
        );
      },
      n = function (e) {
        var t = "[不可达]".concat(e);
        O.mpReporter.log(t);
      };
    return {
      networkWeakResult: U,
      networkStatusResult: H,
      initMonitor: function () {
        N(
          exports,
          null,
          c().mark(function e() {
            var t;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), g();
                  case 2:
                    (t = e.sent),
                      (H = Object.assign({}, H, t)),
                      n("当前网络：".concat(JSON.stringify(t)));
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ),
          e("onNetworkWeakChange", F),
          e("onNetworkStatusChange", q);
      },
      stopMonitor: function () {
        e("offNetworkWeakChange", F), e("offNetworkStatusChange", q);
      },
      getPerformanceSnapshot: r,
      logMessage: n,
      reportEvent: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r(),
          a = t || {},
          o = a.ext3;
        O.mpReporter.reportEvent(
          e,
          Object.assign({}, t, {
            ext3: JSON.stringify(
              Object.assign({}, o, { performance: n, version: 2 })
            ),
          })
        );
      },
    };
  },
  j = { name: "可达性", tips: "" },
  G = { name: "域名", tips: "域名未知" },
  $ = { name: "网络连接", tips: "网络状态未知" },
  Y = { name: "网络类型", tips: "网络类型未知" },
  X = { name: "弱网状态", tips: "弱网类型未知" },
  J = {
    Domain: "域名切换",
    NetworkConnected: "网络恢复",
    NetworkType: "网络切换",
    WeakNet: "弱网恢复",
  },
  V = B(),
  z = V.getPerformanceSnapshot,
  Q = V.logMessage;
function Z(e, t, r) {
  var n = r.needReportWhenReachable,
    a = r.performanceBefore,
    o = r.lastDetectResult;
  if (n) {
    var c = z(),
      s = t,
      i = o || {},
      u = i.domain,
      E = i.type,
      p = [
        {
          name: j.name,
          key: "Reachable",
          tips: "上次探测结果: " + (E === P ? "可达" : "不可达"),
          value: E === P,
        },
        {
          name: G.name,
          key: "Domain",
          tips: G.tips,
          valid: "string" == typeof s && "string" == typeof u,
          current: s,
          before: u,
        },
        {
          name: $.name,
          key: "NetworkConnected",
          tips: $.tips,
          valid:
            "boolean" == typeof c.isConnected &&
            "boolean" == typeof a.isConnected,
          current: c.isConnected,
          before: a.isConnected,
        },
        {
          name: Y.name,
          key: "NetworkType",
          tips: Y.tips,
          valid:
            "string" == typeof c.networkType &&
            "string" == typeof a.networkType &&
            !L.includes(c.networkType),
          current: c.networkType,
          before: a.networkType,
        },
        {
          name: X.name,
          key: "WeakNet",
          tips: X.tips,
          valid: "boolean" == typeof c.weakNet && "boolean" == typeof a.weakNet,
          current: c.weakNet,
          before: a.weakNet,
        },
      ],
      T = p.map(function (e) {
        var t = e;
        return (
          "Reachable" === t.key ||
            (t.valid &&
              (t.tips = ""
                .concat(t.name)
                .concat(t.current === t.before ? "相同" : "不同"))),
          t
        );
      }),
      l = p.slice(1).reduce(function (e, t) {
        return (t.valid && t.current !== t.before && J[t.key]) || e;
      }, "网络问题"),
      d = T.map(function (e) {
        return e.tips;
      }).join(", "),
      R = f(
        {
          isDetectReachable: T[0].value,
          lastDetectResult: o,
          reachableReason: l,
          traceId: o.traceId,
          checkResults: d,
        },
        p.slice(1).reduce(function (e, t) {
          return (
            t.valid &&
              ((e["pre".concat(t.key)] = t.before),
              (e["now".concat(t.key)] = t.current)),
            e
          );
        }, {})
      );
    Q(
      "["
        .concat(e, "][")
        .concat(o.traceId, "] 恢复的原因：")
        .concat(l, " ")
        .concat(d)
    ),
      O.mpReporter.reportEvent("MONITOR-NETWORK-DETECT-REACHABLE-REASON", {
        ext2: e,
        ext3: JSON.stringify(R),
      });
  }
}
var ee = 0,
  te = {},
  re = B(),
  ne = re.getPerformanceSnapshot,
  ae = re.logMessage,
  oe = re.reportEvent;
function ce() {
  function e(e) {
    return (
      te[e] ||
        (te[e] = {
          queue: [],
          shouldRestart: !0,
          times: 0,
          detecting: !1,
          domain: "",
          checkDetectReasonWhenRestart: !0,
        }),
      te[e]
    );
  }
  function t(e, t) {
    var r = (0, B().getPerformanceSnapshot)();
    return Object.assign(
      { dealerCode: e.dealerCode, domain: e.domain, traceId: e.traceId },
      t,
      { performance: r }
    );
  }
  return {
    brokerDetectData: te,
    syncUIStatus: function (t) {
      var r = t.dealerCode,
        n = t.show;
      r && ((e(r).isUIShow = n), ae("[".concat(r, "]更新 UI 状态").concat(n)));
    },
    detectIfNeed: function (r) {
      return N(
        this,
        null,
        c().mark(function n() {
          var a, o, s, i, u;
          return c().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (a = r.dealerCode),
                    (o = r.domain),
                    (n.next = 4),
                    (function (r) {
                      return N(
                        this,
                        null,
                        c().mark(function n() {
                          var a,
                            o,
                            s,
                            i,
                            u,
                            E,
                            p,
                            T,
                            l,
                            d,
                            _,
                            m,
                            I,
                            g,
                            D,
                            v,
                            b = this;
                          return c().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (
                                    ((a = r.dealerCode),
                                    (o = r.domain),
                                    (s = r.onStartDetect),
                                    (i = r.onSuccess),
                                    (u = r.reportData),
                                    (E = e(a)),
                                    (p = ne()),
                                    E.detecting ||
                                      E.isUIShow ||
                                      ((E.domain = o),
                                      (E.performanceBefore = p)),
                                    !p.isNetworkDisconnected)
                                  ) {
                                    n.next = 3;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    (oe(
                                      "MONITOR-NETWORK-DETECT-FAILED-NETWORK-DISCONNECTED",
                                      { ext2: a, ext3: { traceId: r.traceId } }
                                    ),
                                    t(r, {
                                      type: W,
                                      detail: {
                                        type: K.NETWORK_DISCONNECTED,
                                        message:
                                          "网络超时，但是此时网络已断开。不触发探测",
                                      },
                                    }))
                                  );
                                case 3:
                                  if (!p.isWeakNet) {
                                    n.next = 6;
                                    break;
                                  }
                                  return (
                                    (T = C()),
                                    (l = (T - ee) / 1e3),
                                    n.abrupt(
                                      "return",
                                      l < 12
                                        ? t(r, {
                                            type: W,
                                            detail: {
                                              type: K.WEAK_NETWORK_IGNORE,
                                              message:
                                                "当前处于弱网，弱网限频：".concat(
                                                  l,
                                                  "s"
                                                ),
                                            },
                                          })
                                        : ((ee = T),
                                          O.wx$1.showToast({
                                            title:
                                              "当前网络不稳定，建议切换至稳定网络",
                                            icon: "none",
                                            duration: 3e3,
                                          }),
                                          t(r, {
                                            type: W,
                                            detail: {
                                              type: K.WEAK_NETWORK,
                                              message: "当前处于弱网, 展示提示",
                                            },
                                          }))
                                    )
                                  );
                                case 6:
                                  if (!E.isUIShow) {
                                    n.next = 8;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    t(r, {
                                      type: "NETWORK_DETECT_IGNORE",
                                      detail: {
                                        type: K.DETEFCT_UI_SHOWING,
                                        message:
                                          "当前域名已经存在探测任务或者结果，忽略本次处理",
                                      },
                                    })
                                  );
                                case 8:
                                  if (!E.lastReachableInfo) {
                                    n.next = 12;
                                    break;
                                  }
                                  if (
                                    ((d = E.lastReachableInfo),
                                    (_ = d.responseTime),
                                    (m = void 0 === _ ? 0 : _),
                                    (I = d.domain),
                                    !((g = m - r.triggerTime) > 0 && o === I))
                                  ) {
                                    n.next = 12;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    (ae(
                                      "["
                                        .concat(
                                          r.dealerCode,
                                          "] 最近一次请求响应时间: "
                                        )
                                        .concat(m, " 请求触发时间: ")
                                        .concat(r.triggerTime, " ")
                                        .concat(g)
                                    ),
                                    oe(
                                      "MONITOR-NETWORK-DETECT-REACHABLE-BEFORE-DETECT",
                                      {
                                        ext2: a,
                                        ext3: { traceId: r.traceId, domain: o },
                                      }
                                    ),
                                    t(r, {
                                      type: W,
                                      detail: {
                                        type: K.REACHABLE_BEFORE_DETECT,
                                        message:
                                          "当前域名探测前已收到同域名成功的请求, 忽略本次处理",
                                      },
                                    }))
                                  );
                                case 12:
                                  if (!(E.times >= 3)) {
                                    n.next = 14;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    (oe(
                                      "MONITOR-NETWORK-DETECT-FAILED-MAX-DETECT",
                                      {
                                        ext2: a,
                                        ext3: { traceId: r.traceId, domain: o },
                                      }
                                    ),
                                    t(r, {
                                      type: M,
                                      detail: {
                                        type: K.MAX_DETECT,
                                        message:
                                          "当前券商不可达探测已经达到最大次数3. 按不可达处理",
                                      },
                                      detectResult: { action: A.UNREACHABLE },
                                    }))
                                  );
                                case 14:
                                  return (
                                    (D = !1),
                                    E.detecting ||
                                      ((D = !0), (E.detecting = !0)),
                                    (v = new Promise(function (n, p) {
                                      return N(
                                        b,
                                        null,
                                        c().mark(function T() {
                                          var l;
                                          return c().wrap(function (T) {
                                            for (;;)
                                              switch ((T.prev = T.next)) {
                                                case 0:
                                                  E.queue.push({
                                                    id: Date.now(),
                                                    options: r,
                                                    resolve: n,
                                                    reject: p,
                                                  }),
                                                    (l = E.shouldRestart) &&
                                                      (E.shouldRestart = !1),
                                                    s && s(l),
                                                    D
                                                      ? (ae(
                                                          "["
                                                            .concat(
                                                              r.dealerCode,
                                                              "]["
                                                            )
                                                            .concat(
                                                              r.traceId,
                                                              "] 探测流程开始: domain="
                                                            )
                                                            .concat(o)
                                                        ),
                                                        oe(
                                                          "MONITOR-NETWORK-DETECT-DETEC-TASK-START",
                                                          {
                                                            ext2: a,
                                                            ext3: {
                                                              domain: o,
                                                              reportData: u,
                                                              traceId:
                                                                r.traceId,
                                                            },
                                                          }
                                                        ),
                                                        (function (r) {
                                                          return N(
                                                            this,
                                                            null,
                                                            c().mark(
                                                              function n() {
                                                                var a,
                                                                  o,
                                                                  s,
                                                                  i,
                                                                  u,
                                                                  E,
                                                                  p,
                                                                  T,
                                                                  l,
                                                                  d,
                                                                  _,
                                                                  m,
                                                                  I,
                                                                  g,
                                                                  D,
                                                                  v;
                                                                return c().wrap(
                                                                  function (n) {
                                                                    for (;;)
                                                                      switch (
                                                                        (n.prev =
                                                                          n.next)
                                                                      ) {
                                                                        case 0:
                                                                          return (
                                                                            (a =
                                                                              r.dealerCode),
                                                                            (o =
                                                                              e(
                                                                                a
                                                                              )),
                                                                            (s =
                                                                              Date.now()),
                                                                            (n.prev = 1),
                                                                            (o.times += 1),
                                                                            (n.next = 5),
                                                                            (function (
                                                                              e
                                                                            ) {
                                                                              return N(
                                                                                this,
                                                                                null,
                                                                                c().mark(
                                                                                  function t() {
                                                                                    var r,
                                                                                      n,
                                                                                      a,
                                                                                      o,
                                                                                      s,
                                                                                      i,
                                                                                      u,
                                                                                      E;
                                                                                    return c().wrap(
                                                                                      function (
                                                                                        t
                                                                                      ) {
                                                                                        for (;;)
                                                                                          switch (
                                                                                            (t.prev =
                                                                                              t.next)
                                                                                          ) {
                                                                                            case 0:
                                                                                              return (
                                                                                                (r =
                                                                                                  Date.now()),
                                                                                                (t.prev = 1),
                                                                                                (n =
                                                                                                  O.useBrokerInfo()),
                                                                                                (a =
                                                                                                  n.fetchAHeadInfo),
                                                                                                (t.next = 6),
                                                                                                a(
                                                                                                  {
                                                                                                    action:
                                                                                                      "user_dealer",
                                                                                                    dealercode:
                                                                                                      "".concat(
                                                                                                        e
                                                                                                      ),
                                                                                                  }
                                                                                                )
                                                                                              );
                                                                                            case 6:
                                                                                              if (
                                                                                                ((o =
                                                                                                  t.sent),
                                                                                                (s =
                                                                                                  o.retcode),
                                                                                                (i =
                                                                                                  o.user_dealer),
                                                                                                (u =
                                                                                                  void 0 ===
                                                                                                  i
                                                                                                    ? {
                                                                                                        domain_list:
                                                                                                          [],
                                                                                                      }
                                                                                                    : i),
                                                                                                O.mpReporter.reportTime(
                                                                                                  "MONITOR-NETWORK-DETECT-AHEAD-SUCCESS-TIME",
                                                                                                  Date.now() -
                                                                                                    r
                                                                                                ),
                                                                                                0 ==
                                                                                                  +s &&
                                                                                                  0 !==
                                                                                                    u
                                                                                                      .domain_list
                                                                                                      .length)
                                                                                              ) {
                                                                                                t.next = 12;
                                                                                                break;
                                                                                              }
                                                                                              return t.abrupt(
                                                                                                "return",
                                                                                                (ae(
                                                                                                  "["
                                                                                                    .concat(
                                                                                                      e,
                                                                                                      "]请求 ahead_info 获取探测域名失败，retcode="
                                                                                                    )
                                                                                                    .concat(
                                                                                                      s
                                                                                                    )
                                                                                                ),
                                                                                                {
                                                                                                  isSuccess:
                                                                                                    !1,
                                                                                                  urlList:
                                                                                                    [],
                                                                                                  error:
                                                                                                    o,
                                                                                                })
                                                                                              );
                                                                                            case 12:
                                                                                              return (
                                                                                                (E =
                                                                                                  u.domain_list
                                                                                                    .split(
                                                                                                      ";"
                                                                                                    )
                                                                                                    .filter(
                                                                                                      function (
                                                                                                        e
                                                                                                      ) {
                                                                                                        return (
                                                                                                          -1 ===
                                                                                                          e.indexOf(
                                                                                                            ".zxgstock.com"
                                                                                                          )
                                                                                                        );
                                                                                                      }
                                                                                                    )
                                                                                                    .map(
                                                                                                      function (
                                                                                                        e
                                                                                                      ) {
                                                                                                        return ""
                                                                                                          .concat(
                                                                                                            e
                                                                                                          )
                                                                                                          .concat(
                                                                                                            "/mp/v2/donot_delete.png"
                                                                                                          );
                                                                                                      }
                                                                                                    )),
                                                                                                t.abrupt(
                                                                                                  "return",
                                                                                                  {
                                                                                                    isSuccess:
                                                                                                      !0,
                                                                                                    urlList:
                                                                                                      E,
                                                                                                  }
                                                                                                )
                                                                                              );
                                                                                            case 16:
                                                                                              return (
                                                                                                (t.prev = 16),
                                                                                                (t.t0 =
                                                                                                  t.catch(
                                                                                                    1
                                                                                                  )),
                                                                                                t.abrupt(
                                                                                                  "return",
                                                                                                  (O.mpReporter.reportTime(
                                                                                                    "MONITOR-NETWORK-DETECT-AHEAD-FAILED-TIME",
                                                                                                    Date.now() -
                                                                                                      r
                                                                                                  ),
                                                                                                  ae(
                                                                                                    "["
                                                                                                      .concat(
                                                                                                        e,
                                                                                                        "]请求 ahead_info 获取探测域名异常，"
                                                                                                      )
                                                                                                      .concat(
                                                                                                        JSON.stringify(
                                                                                                          t.t0 ||
                                                                                                            {}
                                                                                                        )
                                                                                                      )
                                                                                                  ),
                                                                                                  {
                                                                                                    isSuccess:
                                                                                                      !1,
                                                                                                    urlList:
                                                                                                      [],
                                                                                                    error:
                                                                                                      t.t0,
                                                                                                  })
                                                                                                )
                                                                                              );
                                                                                            case 19:
                                                                                            case "end":
                                                                                              return t.stop();
                                                                                          }
                                                                                      },
                                                                                      t,
                                                                                      null,
                                                                                      [
                                                                                        [
                                                                                          1,
                                                                                          16,
                                                                                        ],
                                                                                      ]
                                                                                    );
                                                                                  }
                                                                                )
                                                                              );
                                                                            })(
                                                                              a
                                                                            )
                                                                          );
                                                                        case 5:
                                                                          if (
                                                                            ((i =
                                                                              n.sent),
                                                                            (u =
                                                                              i.isSuccess),
                                                                            (E =
                                                                              i.urlList),
                                                                            (p =
                                                                              i.error),
                                                                            u &&
                                                                              0 !==
                                                                                E.length)
                                                                          ) {
                                                                            n.next = 11;
                                                                            break;
                                                                          }
                                                                          return n.abrupt(
                                                                            "return",
                                                                            t(
                                                                              r,
                                                                              {
                                                                                type: M,
                                                                                detail:
                                                                                  {
                                                                                    type: K.DOMAIN_EMPTY,
                                                                                    message:
                                                                                      "获取探测的域名为空，终止探测",
                                                                                    extra:
                                                                                      p,
                                                                                  },
                                                                                detectResult:
                                                                                  {
                                                                                    action:
                                                                                      A.UNREACHABLE,
                                                                                  },
                                                                                didStartDetect:
                                                                                  !0,
                                                                              }
                                                                            )
                                                                          );
                                                                        case 11:
                                                                          return (
                                                                            (n.next = 13),
                                                                            (function (
                                                                              e
                                                                            ) {
                                                                              return N(
                                                                                this,
                                                                                null,
                                                                                c().mark(
                                                                                  function t() {
                                                                                    var r,
                                                                                      n =
                                                                                        this;
                                                                                    return c().wrap(
                                                                                      function (
                                                                                        t
                                                                                      ) {
                                                                                        for (;;)
                                                                                          switch (
                                                                                            (t.prev =
                                                                                              t.next)
                                                                                          ) {
                                                                                            case 0:
                                                                                              return (
                                                                                                (r =
                                                                                                  e.map(
                                                                                                    function (
                                                                                                      e
                                                                                                    ) {
                                                                                                      return N(
                                                                                                        n,
                                                                                                        null,
                                                                                                        c().mark(
                                                                                                          function t() {
                                                                                                            return c().wrap(
                                                                                                              function (
                                                                                                                t
                                                                                                              ) {
                                                                                                                for (;;)
                                                                                                                  switch (
                                                                                                                    (t.prev =
                                                                                                                      t.next)
                                                                                                                  ) {
                                                                                                                    case 0:
                                                                                                                      return t.abrupt(
                                                                                                                        "return",
                                                                                                                        (function (
                                                                                                                          e
                                                                                                                        ) {
                                                                                                                          return N(
                                                                                                                            this,
                                                                                                                            null,
                                                                                                                            c().mark(
                                                                                                                              function t() {
                                                                                                                                return c().wrap(
                                                                                                                                  function (
                                                                                                                                    t
                                                                                                                                  ) {
                                                                                                                                    for (;;)
                                                                                                                                      switch (
                                                                                                                                        (t.prev =
                                                                                                                                          t.next)
                                                                                                                                      ) {
                                                                                                                                        case 0:
                                                                                                                                          return t.abrupt(
                                                                                                                                            "return",
                                                                                                                                            new Promise(
                                                                                                                                              function (
                                                                                                                                                t,
                                                                                                                                                r
                                                                                                                                              ) {
                                                                                                                                                var n =
                                                                                                                                                  new Date().getTime();
                                                                                                                                                (function (
                                                                                                                                                  e
                                                                                                                                                ) {
                                                                                                                                                  return new Promise(
                                                                                                                                                    function (
                                                                                                                                                      t,
                                                                                                                                                      r
                                                                                                                                                    ) {
                                                                                                                                                      O.wx$1.request(
                                                                                                                                                        R(
                                                                                                                                                          f(
                                                                                                                                                            {},
                                                                                                                                                            e
                                                                                                                                                          ),
                                                                                                                                                          {
                                                                                                                                                            success:
                                                                                                                                                              function (
                                                                                                                                                                e
                                                                                                                                                              ) {
                                                                                                                                                                if (
                                                                                                                                                                  200 !==
                                                                                                                                                                  e.statusCode
                                                                                                                                                                )
                                                                                                                                                                  return r(
                                                                                                                                                                    e
                                                                                                                                                                  );
                                                                                                                                                                t(
                                                                                                                                                                  e
                                                                                                                                                                );
                                                                                                                                                              },
                                                                                                                                                            fail: function (
                                                                                                                                                              e
                                                                                                                                                            ) {
                                                                                                                                                              r(
                                                                                                                                                                e
                                                                                                                                                              );
                                                                                                                                                            },
                                                                                                                                                          }
                                                                                                                                                        )
                                                                                                                                                      );
                                                                                                                                                    }
                                                                                                                                                  );
                                                                                                                                                })(
                                                                                                                                                  {
                                                                                                                                                    url: ""
                                                                                                                                                      .concat(
                                                                                                                                                        e,
                                                                                                                                                        "?"
                                                                                                                                                      )
                                                                                                                                                      .concat(
                                                                                                                                                        C()
                                                                                                                                                      ),
                                                                                                                                                    timeout: 3e3,
                                                                                                                                                    header:
                                                                                                                                                      {
                                                                                                                                                        "content-type":
                                                                                                                                                          "image/png",
                                                                                                                                                      },
                                                                                                                                                    responseType:
                                                                                                                                                      "arraybuffer",
                                                                                                                                                  }
                                                                                                                                                )
                                                                                                                                                  .then(
                                                                                                                                                    function () {
                                                                                                                                                      t(
                                                                                                                                                        {
                                                                                                                                                          result:
                                                                                                                                                            "1",
                                                                                                                                                          url: e,
                                                                                                                                                          httpcode: 200,
                                                                                                                                                          duration:
                                                                                                                                                            new Date().getTime() -
                                                                                                                                                            n,
                                                                                                                                                        }
                                                                                                                                                      );
                                                                                                                                                    }
                                                                                                                                                  )
                                                                                                                                                  .catch(
                                                                                                                                                    function (
                                                                                                                                                      t
                                                                                                                                                    ) {
                                                                                                                                                      var a =
                                                                                                                                                        x;
                                                                                                                                                      t &&
                                                                                                                                                        t.statusCode &&
                                                                                                                                                        (a =
                                                                                                                                                          +t.statusCode),
                                                                                                                                                        r(
                                                                                                                                                          {
                                                                                                                                                            result:
                                                                                                                                                              "0",
                                                                                                                                                            url: e,
                                                                                                                                                            httpcode:
                                                                                                                                                              a,
                                                                                                                                                            duration:
                                                                                                                                                              new Date().getTime() -
                                                                                                                                                              n,
                                                                                                                                                          }
                                                                                                                                                        );
                                                                                                                                                    }
                                                                                                                                                  );
                                                                                                                                              }
                                                                                                                                            )
                                                                                                                                          );
                                                                                                                                        case 1:
                                                                                                                                        case "end":
                                                                                                                                          return t.stop();
                                                                                                                                      }
                                                                                                                                  },
                                                                                                                                  t
                                                                                                                                );
                                                                                                                              }
                                                                                                                            )
                                                                                                                          );
                                                                                                                        })(
                                                                                                                          e
                                                                                                                        ).catch(
                                                                                                                          function (
                                                                                                                            e
                                                                                                                          ) {
                                                                                                                            return e;
                                                                                                                          }
                                                                                                                        )
                                                                                                                      );
                                                                                                                    case 1:
                                                                                                                    case "end":
                                                                                                                      return t.stop();
                                                                                                                  }
                                                                                                              },
                                                                                                              t
                                                                                                            );
                                                                                                          }
                                                                                                        )
                                                                                                      );
                                                                                                    }
                                                                                                  )),
                                                                                                t.abrupt(
                                                                                                  "return",
                                                                                                  Promise.all(
                                                                                                    r
                                                                                                  )
                                                                                                )
                                                                                              );
                                                                                            case 2:
                                                                                            case "end":
                                                                                              return t.stop();
                                                                                          }
                                                                                      },
                                                                                      t
                                                                                    );
                                                                                  }
                                                                                )
                                                                              );
                                                                            })(
                                                                              E
                                                                            )
                                                                          );
                                                                        case 13:
                                                                          return (
                                                                            (T =
                                                                              n.sent),
                                                                            (n.next = 16),
                                                                            (function (
                                                                              e
                                                                            ) {
                                                                              return N(
                                                                                this,
                                                                                arguments,
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  var t =
                                                                                    arguments.length >
                                                                                      1 &&
                                                                                    void 0 !==
                                                                                      arguments[1]
                                                                                      ? arguments[1]
                                                                                      : [];
                                                                                  return c().mark(
                                                                                    function r() {
                                                                                      var n,
                                                                                        a,
                                                                                        o,
                                                                                        s,
                                                                                        i,
                                                                                        u,
                                                                                        E;
                                                                                      return c().wrap(
                                                                                        function (
                                                                                          r
                                                                                        ) {
                                                                                          for (;;)
                                                                                            switch (
                                                                                              (r.prev =
                                                                                                r.next)
                                                                                            ) {
                                                                                              case 0:
                                                                                                return (
                                                                                                  (n =
                                                                                                    Date.now()),
                                                                                                  (r.prev = 1),
                                                                                                  (r.next = 4),
                                                                                                  h(
                                                                                                    {
                                                                                                      channel:
                                                                                                        w,
                                                                                                    }
                                                                                                  )
                                                                                                );
                                                                                              case 4:
                                                                                                return (
                                                                                                  (a =
                                                                                                    r.sent),
                                                                                                  (o =
                                                                                                    {}),
                                                                                                  0 !==
                                                                                                    Object.keys(
                                                                                                      a
                                                                                                    )
                                                                                                      .length &&
                                                                                                    ((s =
                                                                                                      t.map(
                                                                                                        function (
                                                                                                          e
                                                                                                        ) {
                                                                                                          var t =
                                                                                                              e.result,
                                                                                                            r =
                                                                                                              e.url,
                                                                                                            n =
                                                                                                              e.duration,
                                                                                                            a =
                                                                                                              e.httpcode;
                                                                                                          return {
                                                                                                            access_status:
                                                                                                              Number(
                                                                                                                t
                                                                                                              ),
                                                                                                            domain_name:
                                                                                                              y(
                                                                                                                r
                                                                                                              ),
                                                                                                            http_runtime:
                                                                                                              n,
                                                                                                            http_code:
                                                                                                              a >
                                                                                                              0
                                                                                                                ? a
                                                                                                                : x,
                                                                                                          };
                                                                                                        }
                                                                                                      )),
                                                                                                    ((o =
                                                                                                      a).domain_quality =
                                                                                                      s)),
                                                                                                  (i =
                                                                                                    {
                                                                                                      report_action: 1,
                                                                                                      dealercode:
                                                                                                        "".concat(
                                                                                                          e
                                                                                                        ),
                                                                                                      diagnose_info:
                                                                                                        o,
                                                                                                      detect_result:
                                                                                                        t.map(
                                                                                                          function (
                                                                                                            e
                                                                                                          ) {
                                                                                                            return {
                                                                                                              result:
                                                                                                                e.result,
                                                                                                              domain:
                                                                                                                y(
                                                                                                                  e.url
                                                                                                                ),
                                                                                                            };
                                                                                                          }
                                                                                                        ),
                                                                                                    }),
                                                                                                  (r.next = 10),
                                                                                                  O.TradeAPI.reportDetectResult(
                                                                                                    i
                                                                                                  )
                                                                                                );
                                                                                              case 10:
                                                                                                return (
                                                                                                  (u =
                                                                                                    r.sent),
                                                                                                  O.mpReporter.reportTime(
                                                                                                    "MONITOR-NETWORK-DETECT-REPORT-DETECT-SUCCESS-TIME",
                                                                                                    Date.now() -
                                                                                                      n
                                                                                                  ),
                                                                                                  (E =
                                                                                                    u.retcode),
                                                                                                  r.abrupt(
                                                                                                    "return",
                                                                                                    0 !=
                                                                                                      +E
                                                                                                      ? (ae(
                                                                                                          "["
                                                                                                            .concat(
                                                                                                              e,
                                                                                                              "]上报探测结果到后台失败，"
                                                                                                            )
                                                                                                            .concat(
                                                                                                              JSON.stringify(
                                                                                                                u
                                                                                                              )
                                                                                                            )
                                                                                                        ),
                                                                                                        {
                                                                                                          isSuccess:
                                                                                                            !1,
                                                                                                          data: {},
                                                                                                          error:
                                                                                                            u,
                                                                                                        })
                                                                                                      : {
                                                                                                          isSuccess:
                                                                                                            !0,
                                                                                                          data: u,
                                                                                                        }
                                                                                                  )
                                                                                                );
                                                                                              case 16:
                                                                                                return (
                                                                                                  (r.prev = 16),
                                                                                                  (r.t0 =
                                                                                                    r.catch(
                                                                                                      1
                                                                                                    )),
                                                                                                  r.abrupt(
                                                                                                    "return",
                                                                                                    (O.mpReporter.reportTime(
                                                                                                      "MONITOR-NETWORK-DETECT-REPORT-DETECT-FAILED-TIME",
                                                                                                      Date.now() -
                                                                                                        n
                                                                                                    ),
                                                                                                    ae(
                                                                                                      "["
                                                                                                        .concat(
                                                                                                          e,
                                                                                                          "]上报探测结果到后台异常，"
                                                                                                        )
                                                                                                        .concat(
                                                                                                          JSON.stringify(
                                                                                                            r.t0
                                                                                                          )
                                                                                                        )
                                                                                                    ),
                                                                                                    {
                                                                                                      isSuccess:
                                                                                                        !1,
                                                                                                      data: {},
                                                                                                      error:
                                                                                                        r.t0,
                                                                                                    })
                                                                                                  )
                                                                                                );
                                                                                              case 19:
                                                                                              case "end":
                                                                                                return r.stop();
                                                                                            }
                                                                                        },
                                                                                        r,
                                                                                        null,
                                                                                        [
                                                                                          [
                                                                                            1,
                                                                                            16,
                                                                                          ],
                                                                                        ]
                                                                                      );
                                                                                    }
                                                                                  )();
                                                                                }
                                                                              );
                                                                            })(
                                                                              a,
                                                                              T
                                                                            )
                                                                          );
                                                                        case 16:
                                                                          if (
                                                                            ((l =
                                                                              n.sent),
                                                                            (d =
                                                                              l.isSuccess),
                                                                            (_ =
                                                                              l.data),
                                                                            (m =
                                                                              l.error),
                                                                            d &&
                                                                              0 !==
                                                                                Object.keys(
                                                                                  _
                                                                                )
                                                                                  .length)
                                                                          ) {
                                                                            n.next = 22;
                                                                            break;
                                                                          }
                                                                          return n.abrupt(
                                                                            "return",
                                                                            t(
                                                                              r,
                                                                              {
                                                                                type: M,
                                                                                detail:
                                                                                  {
                                                                                    type: K.REPORT_DETECT_FAILED,
                                                                                    message:
                                                                                      "探测结果上报失败，显示不可达",
                                                                                    extra:
                                                                                      m,
                                                                                  },
                                                                                detectResult:
                                                                                  {
                                                                                    action:
                                                                                      A.UNREACHABLE,
                                                                                  },
                                                                                didStartDetect:
                                                                                  !0,
                                                                              }
                                                                            )
                                                                          );
                                                                        case 22:
                                                                          return (
                                                                            (I =
                                                                              Date.now() -
                                                                              s),
                                                                            (g =
                                                                              _.action),
                                                                            (D =
                                                                              g ===
                                                                              A.REACHABLE),
                                                                            (v =
                                                                              S[
                                                                                g
                                                                              ]),
                                                                            n.abrupt(
                                                                              "return",
                                                                              (O.mpReporter.reportTime(
                                                                                "MONITOR-NETWORK-DETECT-DETECT-FINISHED-TIME",
                                                                                I
                                                                              ),
                                                                              t(
                                                                                r,
                                                                                {
                                                                                  type: D
                                                                                    ? P
                                                                                    : "NETWORK_DETECT_UNREACHABLE",
                                                                                  detail:
                                                                                    {
                                                                                      type: D
                                                                                        ? K.DETECT_REACHABLE
                                                                                        : K.DETECT_UNREACHABLE,
                                                                                      message:
                                                                                        "网络探测成功，结果为：".concat(
                                                                                          v
                                                                                        ),
                                                                                    },
                                                                                  detectResult:
                                                                                    _,
                                                                                  didStartDetect:
                                                                                    !0,
                                                                                }
                                                                              ))
                                                                            )
                                                                          );
                                                                        case 26:
                                                                          return (
                                                                            (n.prev = 26),
                                                                            (n.t0 =
                                                                              n.catch(
                                                                                1
                                                                              )),
                                                                            n.abrupt(
                                                                              "return",
                                                                              (ae(
                                                                                "["
                                                                                  .concat(
                                                                                    a,
                                                                                    "]探测流程出现异常，"
                                                                                  )
                                                                                  .concat(
                                                                                    JSON.stringify(
                                                                                      n.t0
                                                                                    )
                                                                                  )
                                                                              ),
                                                                              oe(
                                                                                "MONITOR-NETWORK-DETECT-FAILED-DETECT-EXECPTION",
                                                                                {
                                                                                  ext2: a,
                                                                                  ext3: {
                                                                                    error:
                                                                                      n.t0,
                                                                                    traceId:
                                                                                      r.traceId,
                                                                                    duration:
                                                                                      Date.now() -
                                                                                      s,
                                                                                  },
                                                                                }
                                                                              ),
                                                                              t(
                                                                                r,
                                                                                {
                                                                                  type: M,
                                                                                  detail:
                                                                                    {
                                                                                      type: K.DETECT_EXCEPTION,
                                                                                      message:
                                                                                        "探测流程出现异常，显示不可达",
                                                                                    },
                                                                                  detectResult:
                                                                                    {
                                                                                      action:
                                                                                        A.UNREACHABLE,
                                                                                    },
                                                                                  didStartDetect:
                                                                                    !0,
                                                                                }
                                                                              ))
                                                                            )
                                                                          );
                                                                        case 29:
                                                                        case "end":
                                                                          return n.stop();
                                                                      }
                                                                  },
                                                                  n,
                                                                  null,
                                                                  [[1, 26]]
                                                                );
                                                              }
                                                            )
                                                          );
                                                        })(
                                                          R(f({}, r), {
                                                            domain: o,
                                                          })
                                                        ).then(function (t) {
                                                          oe(
                                                            "MONITOR-NETWORK-DETECT-RESULT",
                                                            {
                                                              ext2: a,
                                                              ext3: Object.assign(
                                                                {},
                                                                t,
                                                                Object.assign(
                                                                  {},
                                                                  u,
                                                                  {
                                                                    domain: o,
                                                                    traceId:
                                                                      r.traceId,
                                                                  }
                                                                )
                                                              ),
                                                            }
                                                          ),
                                                            t.type === P &&
                                                              (function (e, t) {
                                                                var r =
                                                                    t
                                                                      .detectResult
                                                                      .domain,
                                                                  n =
                                                                    O.stripDomainPrePostFix(
                                                                      r
                                                                    ),
                                                                  a = "".concat(
                                                                    e
                                                                  );
                                                                if (n)
                                                                  try {
                                                                    O.mergeBroker(
                                                                      {
                                                                        code: a,
                                                                        domain:
                                                                          n,
                                                                      }
                                                                    );
                                                                    var o =
                                                                        O.useBrokerInfo(),
                                                                      c =
                                                                        o.fetchData;
                                                                    (0,
                                                                    o.updatePluginBrokerInfo)(
                                                                      {
                                                                        dealerCode:
                                                                          e,
                                                                        domain:
                                                                          n,
                                                                      }
                                                                    ),
                                                                      c({}, !0)
                                                                        .catch(
                                                                          function () {}
                                                                        )
                                                                        .finally(
                                                                          function () {}
                                                                        );
                                                                  } catch (t) {
                                                                    ae(
                                                                      "券商"
                                                                        .concat(
                                                                          e,
                                                                          "，处理可达的探测结果异常："
                                                                        )
                                                                        .concat(
                                                                          JSON.stringify(
                                                                            t
                                                                          )
                                                                        )
                                                                    ),
                                                                      oe(
                                                                        "MONITOR-NETWORK-DETECT-PROCESS-RESULT-EXCEPTION",
                                                                        {
                                                                          ext2: e,
                                                                          ext3: {
                                                                            error:
                                                                              t,
                                                                          },
                                                                        }
                                                                      );
                                                                  }
                                                              })(a, t),
                                                            (function (t, r) {
                                                              var n = e(t);
                                                              n.queue.forEach(
                                                                function (e) {
                                                                  e.resolve(r);
                                                                }
                                                              ),
                                                                (n.queue = []),
                                                                (n.shouldRestart =
                                                                  !0),
                                                                (n.detecting =
                                                                  !1);
                                                            })(a, t),
                                                            i && i(t);
                                                        }))
                                                      : ae(
                                                          "["
                                                            .concat(
                                                              r.dealerCode,
                                                              "]["
                                                            )
                                                            .concat(
                                                              r.traceId,
                                                              "] 已存在探测任务，加入队列等待结果: domain="
                                                            )
                                                            .concat(o)
                                                        );
                                                case 3:
                                                case "end":
                                                  return T.stop();
                                              }
                                          }, T);
                                        })
                                      );
                                    })),
                                    n.abrupt(
                                      "return",
                                      v.then(function (e) {
                                        return e;
                                      })
                                    )
                                  );
                                case 18:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                    })(r)
                  );
                case 4:
                  return (
                    (s = n.sent),
                    (i = s.detail),
                    [K.WEAK_NETWORK_IGNORE, K.DETEFCT_UI_SHOWING].includes(
                      i.type
                    ) ||
                      (((u = e(a)).lastDetectResult = f(
                        f({ domain: o }, s),
                        r.reportData || {}
                      )),
                      (u.needReportWhenReachable = !0),
                      O.wx$1.setStorageSync("".concat(k, "_").concat(a), u)),
                    n.abrupt(
                      "return",
                      (i.type === K.WEAK_NETWORK &&
                        oe("MONITOR-NETWORK-DETECT-WEAKNET", {
                          ext2: a,
                          ext3: { traceId: r.traceId, domain: o },
                        }),
                      s)
                    )
                  );
                case 8:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      );
    },
    didReceiveResponse: function () {
      return N(this, arguments, function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return c().mark(function r() {
          var n, a, o, s, i, u, E, p, T, l, d, f;
          return c().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      ((s = (o = t || {}).response),
                      (i = o.dealerCode),
                      (r.prev = 1),
                      (null == (n = null == s ? void 0 : s.config)
                        ? void 0
                        : n.url) &&
                        (null == (a = null == s ? void 0 : s.config)
                          ? void 0
                          : a.baseURL) &&
                        i)
                    ) {
                      r.next = 4;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      void ae(
                        "["
                          .concat(i, "] 响应数据异常: ")
                          .concat(i ? "响应配置不完整" : "缺少券商代码")
                      )
                    );
                  case 4:
                    if (
                      ((u = s.config),
                      (E = u.baseURL),
                      (p = u.url),
                      (T = "".concat(E).concat(p)),
                      (l = b(T)))
                    ) {
                      r.next = 7;
                      break;
                    }
                    return r.abrupt(
                      "return",
                      void ae(
                        "[".concat(
                          i,
                          "] 响应数据异常 domain解析失败，无法分析恢复原因"
                        )
                      )
                    );
                  case 7:
                    if ((d = e(i)).checkDetectReasonWhenRestart) {
                      d.checkDetectReasonWhenRestart = !1;
                      try {
                        (f = O.wx$1.getStorageSync(
                          "".concat(k, "_").concat(i)
                        )) &&
                          f.lastDetectResult &&
                          (ae(
                            "["
                              .concat(i, "][")
                              .concat(f.lastDetectResult.traceId, "] ")
                              .concat(
                                T,
                                " 本地存在未上报的探测结果, 开始上报..."
                              )
                          ),
                          Z(i, l, f),
                          O.wx$1.removeStorageSync(
                            "".concat(k, "_").concat(i)
                          ));
                      } catch (e) {
                        ae(
                          "["
                            .concat(i, "] 上报本地恢复原因异常: ")
                            .concat(e.message)
                        );
                      }
                    }
                    if (
                      ((d.lastReachableInfo = {
                        domain: l,
                        responseTime: Date.now(),
                      }),
                      d.lastDetectResult &&
                        d.lastDetectResult.traceId !== d.lastReportTraceId)
                    ) {
                      r.next = 11;
                      break;
                    }
                    return r.abrupt("return");
                  case 11:
                    ae(
                      "["
                        .concat(i, "][")
                        .concat(d.lastDetectResult.traceId, "] ")
                        .concat(T, " 收到可达请求，开始上报恢复原因")
                    ),
                      Z(i, l, d),
                      (d.needReportWhenReachable = !1),
                      (d.lastReportTraceId = d.lastDetectResult.traceId),
                      O.wx$1.removeStorageSync("".concat(k, "_").concat(i)),
                      (r.next = 17);
                    break;
                  case 14:
                    (r.prev = 14),
                      (r.t0 = r.catch(1)),
                      ae(
                        "["
                          .concat(i, "] 初步分析请求恢复原因异常: ")
                          .concat(r.t0.message)
                      ),
                      oe("MONITOR-NETWORK-DETECT-RECEIVE-RESPONSE-EXCEPTION", {
                        ext2: i,
                        ext3: { error: r.t0 },
                      });
                  case 17:
                  case "end":
                    return r.stop();
                }
            },
            r,
            null,
            [[1, 14]]
          );
        })();
      });
    },
    buildDetectResult: t,
  };
}
var se = {
    UNKNOWN: "UNKNOWN",
    TIMEOUT: "NETWORK_DETECT_TIMEOUT",
    NETWORK_CHANGE: "NETWORK_DETECT_NETWORK_CHANGE",
    NETWORK_DISCONNECT: "NETWORK_DETECT_NETWORK_DISCONNECT",
    NETWORK_INTERRUPTED: "NETWORK_DETECT_NETWORK_INTERRUPTED",
  },
  ie =
    (o((e = {}), se.TIMEOUT, {
      errno: [5],
      request: [
        "fail net::ERR_ADDRESS_UNREACHABLE",
        "fail net::ERR_TIMED_OUT",
        "fail net::ERR_CONNECTION_TIMED_OUT",
        "fail net::ERR_CONNECTION_RESET",
        "fail net::ERR_NAME_NOT_RESOLVED",
        "fail net::ERR_CONNECTION_ABORTED",
        "fail net::ERR_CERT_AUTHORITY_INVALID",
        "fail net::ERR_PROXY_CONNECTION_FAILED",
        "fail net::ERR_TUNNEL_CONNECTION_FAILED",
        "fail net::ERR_SSL_PROTOCOL_ERROR",
        "fail net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH",
      ],
      errcode: [],
      cronetErrorCode: [
        -7, -101, -102, -103, -104, -105, -108, -109, -137, -118, -800, -801,
        -802, -803, -804, -805, -806, -808, -809, -810, -811, -814, -202, -130,
        -113,
      ],
    }),
    o(e, se.NETWORK_CHANGE, {
      errno: [],
      request: ["fail net::ERR_NETWORK_CHANGED"],
      errcode: [10011, -21],
      cronetErrorCode: [-21],
    }),
    o(e, se.NETWORK_DISCONNECT, {
      errno: [],
      request: ["fail net::ERR_INTERNET_DISCONNECTED"],
      errcode: [],
      cronetErrorCode: [-106],
    }),
    o(e, se.NETWORK_INTERRUPTED, {
      errno: [600003],
      request: [],
      errcode: [],
      cronetErrorCode: [],
    }),
    e),
  ue = {};
function Ee(e, t) {
  var r = "".concat(e, "_").concat(t),
    n = ue[r];
  if (n) return Object.assign({}, n);
  var a = { request: "", errcode: "", cronetErrorCode: "", errorMsg: "" };
  600001 == +e &&
    t &&
    (a = (function (e) {
      var t = { request: "", errcode: "", errorMsg: "", cronetErrorCode: "" };
      if (!e) return t;
      try {
        for (
          var r,
            n = /(\w+):\s*([^:]+?)(?=\s+\w+:|$)/g,
            a = {},
            o = e.replace(/::/g, "--");
          null !== (r = n.exec(o));

        ) {
          var c = r[1],
            s = r[2].trim();
          s && (s = s.replace(/--/g, "::")), (a[c] = s || "");
        }
        var i = a.request,
          u = void 0 === i ? "" : i,
          E = a.error_msg,
          p = void 0 === E ? "" : E,
          T = a.errcode,
          l = void 0 === T ? "" : T,
          d = a.cronet_error_code,
          f = void 0 === d ? "" : d;
        (t.request = u),
          (t.errcode = l || ""),
          (t.errorMsg = p || ""),
          (t.cronetErrorCode = f || "");
      } catch (t) {
        var R = JSON.stringify({ error: t, errmsg: e });
        O.mpReporter.log("解析小程序网络请求错误异常".concat(R)),
          O.mpReporter.reportEvent(
            "MONITOR-NETWORK-DETECT-PARSE-REQUEST-ERROR",
            { ext3: R }
          );
      }
      return t;
    })(t));
  var o = (function (e, t, r, n) {
      for (var a = se.UNKNOWN, o = Object.keys(ie), c = 0; c < o.length; c++) {
        var s = o[c],
          i = ie[s],
          u = i.errno || [],
          E = i.request || [],
          p = i.errcode || [],
          T = i.cronetErrorCode || [];
        if (
          u.includes(+e) ||
          (t && E.includes(t)) ||
          (r && p.includes(+r)) ||
          (n && T.includes(+n))
        ) {
          a = s;
          break;
        }
      }
      return a;
    })(e, a.request, a.errcode, a.cronetErrorCode),
    c = Object.assign({}, a, { errno: e, originType: o, type: o });
  return (ue[r] = Object.assign({}, c)), c;
}
var pe =
    (o(
      (t = {}),
      K.ERROR_INFO_NOT_MATCH,
      "MONITOR-NETWORK-DETECT-ERROR-NOT-MATCH"
    ),
    o(t, K.ERROR_INFO_EMPTY, "MONITOR-NETWORK-DETECT-ERROR-EMPTY"),
    t),
  Te = new ((function () {
    function e() {
      n(this, e);
    }
    return (
      a(e, [
        {
          key: "run",
          value: function () {
            return N(
              this,
              null,
              c().mark(function e() {
                var t, r, n, a;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = B()),
                          (r = t.initMonitor),
                          (n = t.reportEvent),
                          r(),
                          (a = !1);
                        try {
                          (a = "1" === O.wx$1.getStorageSync("isRestart")),
                            O.wx$1.setStorageSync("isRestart", "1");
                        } catch (e) {}
                        O.mpReporter.log(
                          "启动网络探测模块 " + (a ? "重启" : "首次进入")
                        ),
                          n("MONITOR-NETWORK-DETECT-START", {
                            ext2: a,
                            ext3: {},
                          });
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
        {
          key: "stop",
          value: function () {
            var e = B(),
              t = e.stopMonitor,
              r = e.reportEvent;
            t(),
              O.mpReporter.log("停止网络探测模块"),
              r("MONITOR-NETWORK-DETECT-STOP");
          },
        },
        {
          key: "executeCommand",
          value: function (e, t) {
            return N(
              this,
              null,
              c().mark(function r() {
                var n, a, o, s, i, u, E;
                return c().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          (n = ce()),
                            (a = n.didReceiveResponse),
                            (o = n.syncUIStatus),
                            (r.t0 = e),
                            (r.next =
                              "DETECT_MP_REQUEST_IF_NEED" === r.t0
                                ? 4
                                : "DETECT_IF_NEED" === r.t0
                                ? 8
                                : "RECEIVE_RESPONSE" === r.t0
                                ? 12
                                : "SYNC_UI_STATUS" === r.t0
                                ? 15
                                : 16);
                          break;
                        case 4:
                          return (
                            (s = Date.now()),
                            (i = Object.assign({}, t, { traceId: s })),
                            (r.next = 7),
                            this.detectMiniProgramRequestIfNeed(i)
                          );
                        case 7:
                          return r.abrupt("return", r.sent);
                        case 8:
                          return (
                            (u = Date.now()),
                            (E = Object.assign({}, t, { traceId: u })),
                            (r.next = 11),
                            this.innerDetectIfNeed(E)
                          );
                        case 11:
                          return r.abrupt("return", r.sent);
                        case 12:
                          return (r.next = 14), a(t);
                        case 14:
                          return r.abrupt("return", r.sent);
                        case 15:
                          o(t);
                        case 16:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  this
                );
              })
            );
          },
        },
        {
          key: "innerDetectIfNeed",
          value: function (e) {
            return N(
              this,
              null,
              c().mark(function t() {
                var r, n;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = ce()),
                          (n = r.detectIfNeed),
                          t.abrupt("return", n(e))
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
        },
        {
          key: "detectMiniProgramRequestIfNeed",
          value: function (e) {
            return N(
              this,
              null,
              c().mark(function t() {
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            this.detectMiniProgramRequestIfNeedWithReport(e)
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "detectMiniProgramRequestIfNeedWithReport",
          value: function (e) {
            return N(
              this,
              null,
              c().mark(function t() {
                var r, n, a, o, s, i, u, E, p, T, l, d;
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            this.innerDetectMiniProgramRequestIfNeed(e)
                          );
                        case 2:
                          (s = t.sent),
                            (i = B()),
                            (u = i.logMessage),
                            (E = i.reportEvent),
                            (p = s.errorInfo),
                            (T = s.detail),
                            (l = s.cgi),
                            T &&
                              T.message &&
                              u(
                                "["
                                  .concat(e.dealerCode, "][")
                                  .concat(e.traceId, "] ")
                                  .concat(T.type, " ")
                                  .concat(T.message, " ")
                                  .concat(JSON.stringify(p || {}), " ")
                              ),
                            (d = pe[T.type]) &&
                              E(d, {
                                ext2: e.dealerCode,
                                ext3: { result: s, cgi: l },
                              });
                          try {
                            null ==
                              (n = null == (r = e.error) ? void 0 : r.config) ||
                              n.baseURL,
                              null ==
                                (o =
                                  null == (a = e.error) ? void 0 : a.config) ||
                                o.url;
                          } catch (e) {}
                          return t.abrupt("return", s);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "innerDetectMiniProgramRequestIfNeed",
          value: function (e) {
            return N(
              this,
              null,
              c().mark(function t() {
                var n,
                  a,
                  o,
                  s,
                  i,
                  u,
                  E,
                  p,
                  T,
                  l,
                  d,
                  N,
                  O,
                  _,
                  m,
                  C,
                  I,
                  g,
                  D,
                  v,
                  h,
                  y,
                  w,
                  x,
                  k,
                  A,
                  S,
                  M,
                  P,
                  L = this;
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((i = ce()),
                            (u = i.detectIfNeed),
                            (E = B()),
                            (p = E.logMessage),
                            (T = E.reportEvent),
                            (l = E.getPerformanceSnapshot),
                            (d = e.error),
                            (N = e.dealerCode),
                            (O = e.traceId),
                            d &&
                              ("number" == typeof d.errno ||
                                "number" == typeof d.errCode) &&
                              d.errMsg &&
                              d.config)
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            ("object" == r(d) &&
                              d.config &&
                              (delete d.config.headers, delete d.config.data),
                            this.buildMiniProgramRequestDetectResult(e, {
                              type: W,
                              detail: {
                                type: K.ERROR_INFO_EMPTY,
                                message: "错误信息缺少关键字段，忽略该错误",
                                extra: { error: d },
                              },
                            }))
                          );
                        case 3:
                          if (
                            ((_ = d.errno),
                            (m = d.errCode),
                            (C = d.errMsg),
                            (I = d.config),
                            (g = I.baseURL),
                            (D = void 0 === g ? "" : g),
                            (v = I.url),
                            (h = void 0 === v ? "" : v),
                            (y = I.triggerTime),
                            (w = I.shouldNetworkDetect),
                            void 0 !== w && w)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.buildMiniProgramRequestDetectResult(e, {
                              type: W,
                              detail: {
                                type: K.DONT_NEED_DETECT,
                                message: "url=".concat(
                                  h,
                                  " 控制不需要触发探测"
                                ),
                              },
                            })
                          );
                        case 6:
                          if (!((x = "".concat(D).concat(h)).length <= 0)) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.buildMiniProgramRequestDetectResult(e, {
                              type: W,
                              detail: {
                                type: K.FULL_PATH_EMPTY,
                                message: "请求的URL信息为空，终止探测检测 "
                                  .concat(D, " ")
                                  .concat(h),
                              },
                            })
                          );
                        case 9:
                          if (
                            ((k = (function (e) {
                              return e &&
                                (e.startsWith("http://") ||
                                  e.startsWith("https://"))
                                ? e
                                    .replace(/#.*$/, "")
                                    .replace(/(\?.*$)/, "")
                                    .split("/")
                                    .pop()
                                : "";
                            })(x)),
                            (A = b(x)),
                            k &&
                              A &&
                              (!e.pathWhiteList || e.pathWhiteList.includes(k)))
                          ) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.buildMiniProgramRequestDetectResult(e, {
                              cgi: k,
                              type: W,
                              detail: {
                                type: K.CGI_NOT_IN_WHITE_LIST,
                                message: "CGI不在白名单内，不触发探测 path = "
                                  .concat(k, " domain = ")
                                  .concat(A),
                              },
                            })
                          );
                        case 12:
                          if ((S = Ee(_ || m, C)).type === se.TIMEOUT) {
                            t.next = 16;
                            break;
                          }
                          return (
                            (M = l()),
                            t.abrupt(
                              "return",
                              ([se.UNKNOWN, se.TIMEOUT].includes(S.type) &&
                                M.isNetworkDisconnected &&
                                (S.type = se.NETWORK_DISCONNECT),
                              this.buildMiniProgramRequestDetectResult(e, {
                                cgi: k,
                                type: W,
                                detail: {
                                  type: K.ERROR_INFO_NOT_MATCH,
                                  message: "错误信息解析不匹配，不触发探测 "
                                    .concat(C, " ")
                                    .concat(S.type),
                                },
                                errorInfo: S,
                              }))
                            )
                          );
                        case 16:
                          (P = {
                            dealerCode: N,
                            domain: A,
                            cgi: k,
                            traceId: O,
                            type: W,
                            detail: {
                              type: K.ERROR_INFO_MATCH,
                              message: "发起探测 cgi="
                                .concat(k, " domain=")
                                .concat(A),
                            },
                            errorInfo: S,
                          }),
                            p(
                              "["
                                .concat(e.dealerCode, "][")
                                .concat(e.traceId, "] 发起探测 cgi=")
                                .concat(k, " domain=")
                                .concat(A, " error=")
                                .concat(C)
                            ),
                            T("MONITOR-NETWORK-DETECT-ERROR-MATCH", {
                              ext2: N,
                              ext3: P,
                            });
                          try {
                            null ==
                              (a = null == (n = e.error) ? void 0 : n.config) ||
                              a.baseURL,
                              null ==
                                (s =
                                  null == (o = e.error) ? void 0 : o.config) ||
                                s.url;
                          } catch (e) {}
                          return t.abrupt(
                            "return",
                            u(
                              R(f({}, e), {
                                domain: A,
                                triggerTime: y,
                                reportData: { parseErrorInfo: S, cgi: k },
                              })
                            ).then(function (t) {
                              t.detail.type === K.NETWORK_DISCONNECTED &&
                                (S.type = se.NETWORK_DISCONNECT);
                              var r = Object.assign({}, t, {
                                cgi: k,
                                errorInfo: S,
                              });
                              return L.buildMiniProgramRequestDetectResult(
                                e,
                                r
                              );
                            })
                          );
                        case 20:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "buildMiniProgramRequestDetectResult",
          value: function (e, t) {
            return (0, ce().buildDetectResult)(e, t);
          },
        },
      ]),
      e
    );
  })())();
exports.default = Te;
