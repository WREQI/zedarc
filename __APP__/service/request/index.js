var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Objectvalues");
var n = require("../../@babel/runtime/helpers/slicedToArray"),
  o = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var i = require("../../common/vendor.js"),
  a = require("../../adapter/getApp.js"),
  s = require("../cookie/mp-weixin.js"),
  c = require("../../config/event.js"),
  u = require("./adapters/uni.js"),
  l = require("./replay.js"),
  d = require("./replay4login.js"),
  p = require("../../config/key.js"),
  g = require("./interceptors/auth.js"),
  f = require("../log/index.js"),
  k = require("../broker.js"),
  v = require("../../config/cgi.js"),
  m = require("./adapters/zxg.js"),
  q = require("../aegis/platform/not-wujie.js"),
  R = require("../cookie/utils.js"),
  x = require("../../adapter/router.js"),
  _ = require("../../utils/getPlatform.js"),
  h = require("./context.js"),
  b = require("./interceptors/handleSensitiveData.js"),
  y = require("../../components/NetworkDetect/useNetworkDetect.js"),
  C = require("./interceptors/brokerMaintain.js"),
  E = require("./reLoginStrategy.js"),
  T = require("./cancelTokenManager.js"),
  j = require("./cancelTokenConst.js"),
  w = require("../../config/broker/11100/index.js"),
  S = _.getPlatform(),
  O = S.isInIframe,
  I = S.isBrokerXcx,
  A = S.isInMainXcx,
  L = S.isZxg,
  F = S.isMpPlugin,
  P = (S.isWeixin, S.bizPlatformVer),
  D = S.platform,
  N = (S.isOEM, new f.Log("request")),
  M = new s.AdapterCookie(),
  G = v.CGI_PREFIX;
(h.RequestContext.adapter = u.uniAdapterWrap(function (e) {
  var t = e;
  if (
    ((t.triggerTime = Date.now()), !(null == t ? void 0 : t.ignoreDomainSync))
  )
    try {
      var r = k.syncDomain(),
        n = "https://".concat(w.brokerConfig.base.domain).concat(v.CGI_PREFIX);
      r && $.setBaseURL(n),
        t.baseURL &&
          -1 === t.baseURL.indexOf(w.brokerConfig.base.domain) &&
          (t.baseURL = n);
    } catch (e) {}
  return t;
})),
  (h.RequestContext.cookieFromHeader = !0),
  (G = "https://".concat(w.brokerConfig.base.domain).concat(v.CGI_PREFIX));
var z = "",
  $ = i.createAxiosInstance(
    o(
      o(
        {},
        h.RequestContext.adapter ? { adapter: h.RequestContext.adapter } : {}
      ),
      {},
      { baseURL: G, method: "post", timeout: 12e3 }
    )
  );
function H(e) {
  try {
    if (!A) return;
    var t = location.host.indexOf("."),
      r = location.host.slice(t),
      o = new Map();
    (document.cookie || "").split(/;\s*/).forEach(function (e) {
      var t = e.split("="),
        r = n(t, 2),
        i = r[0],
        a = r[1];
      i && o.set(i.trim(), a || "");
    }),
      [
        "qlskey",
        "wzq_qlskey",
        "qluin",
        "wzq_qluin",
        "qlappid",
        "wzq_qlappid",
      ].forEach(function (t) {
        var n = e[t],
          i = o.get(t) || "";
        n &&
          i &&
          n !== i &&
          (document.cookie = ""
            .concat(t, "=")
            .concat(n, "; path=/; domain=")
            .concat(r));
      });
  } catch (e) {}
}
($.setAdapter = function (e) {
  this.defaults.adapter = e;
}),
  $.setHeader("Content-Type", "application/x-www-form-urlencoded", ["post"]),
  $.onRequest(function (e) {
    return (
      (null == e ? void 0 : e.notCookies) ||
        (h.RequestContext.cookieFromHeader &&
          (e.headers || (e.headers = {}),
          (e.headers.Cookie = M.getCookiesStr()))),
      e
    );
  }),
  $.onRequest(g.checkLogin),
  $.onRequest(function (e) {
    if ("application/json" !== (null == e ? void 0 : e.headers["Content-Type"]))
      return i.dist$1.reqEncode()(e);
  }),
  $.onRequest(b.encodeFields),
  $.onRequest(i.dist$1.reqNoNil()),
  $.onRequest(function (e) {
    try {
      if (Object.values(j.CancelTokenType).includes(e.cancelTokenType)) {
        var t = i.axios$1.CancelToken.source();
        e.cancelToken = t.token;
        var r = T.cancelTokenManager.addCancelToken(
          e.url,
          t,
          e.cancelTokenType,
          e.data
        );
        e._cancelTokenId = r;
      }
    } catch (e) {}
    return e;
  }),
  $.onRequest(function (e) {
    return h.RequestContext.gmSwitchFlag
      ? (e.url.indexOf("/opersvr") > -1 && i.lt(P, "11.21.0")
          ? (N.info("".concat(e.url, "不走国密链路")), (e.adapter = null))
          : w.brokerConfig.base.gmDomain &&
            w.brokerConfig.base.gmDomain.some(function (t) {
              return e.baseURL.indexOf(t) > -1;
            })
          ? (e.adapter = m.zxgAdapter)
          : (N.info("".concat(e.url, "不走国密链路")), (e.adapter = null)),
        e)
      : e;
  }),
  $.onRequest(function (e) {
    var t;
    try {
      if (!A && !I && !O) return e;
      var r =
          document.cookie ||
          (null == (t = e.headers) ? void 0 : t.Cookie) ||
          "",
        o = e.data || {},
        i = new Map();
      r.split(/[;,]\s*/).forEach(function (e) {
        var t = e.split("="),
          r = n(t, 2),
          o = r[0],
          a = r[1];
        o && i.set(o, a || "");
      });
      var a = i.get("wzq_qlskey") || i.get("qlskey") || "",
        s = o.wzq_qlskey || o.qlskey || "";
      a &&
        s &&
        q.aegisReporter.reportEvent("QLSKEY_DUPLICATE_DETECT", {
          ext2: e.url,
          ext3: JSON.stringify({
            body: Object.keys(o),
            cookie: Array.from(i.keys()),
            isQlskeyMatch: a === s,
          }),
        });
    } catch (e) {}
    return e;
  }),
  $.onResponseError(function (e) {
    var t = C.detectBrokerMaintain(e);
    return Promise.reject(t || e);
  }),
  $.onResponse(function (e) {
    return (0, y.useNetworkDetect().onDetectReceiveResponse)(e);
  }),
  $.onResponseError(function (e) {
    return C.isBrokerMaintainError(e)
      ? Promise.reject(e)
      : (0, y.useNetworkDetect().onDetectResponseError)(e);
  }),
  $.onResponse(function (e) {
    if (h.RequestContext.cookieFromHeader) {
      var t = e.header,
        r = void 0 === t ? {} : t,
        n = r["Set-Cookie"] || r["set-cookie"] || "";
      if (n)
        try {
          var o = n.split(";,")[0].split(";");
          (o[0] = "h_spec=1"), (n += ",".concat(o.join(";"), ";"));
        } catch (e) {}
      M.setCookieFromHeader(n),
        (function () {
          try {
            if (_.isNotSupportStorageAPI(D, P)) return;
            if (!n) return;
            if (-1 === n.indexOf("qlskey") && z) return;
            if (z === n) return;
            i.index.getStorage({
              key: p.COOKIES,
              success: function (e) {
                var t, r, o, i;
                null ==
                  (i =
                    null ==
                    (o =
                      null ==
                      (r =
                        null ==
                        (t =
                          null == requireMiniProgram
                            ? void 0
                            : requireMiniProgram())
                          ? void 0
                          : t.main2Plugin)
                        ? void 0
                        : r.call(t))
                      ? void 0
                      : o.updateBrokerCookie) ||
                  i.call(o, e.data, { code: w.brokerConfig.base.code }),
                  (z = n);
              },
              fail: function (e) {
                q.aegisReporter.sdk.error({
                  msg: "TRADE_SYNC_COOKIE_FAIL",
                  ext3: JSON.stringify(e || {}),
                });
              },
            });
          } catch (e) {
            q.aegisReporter.sdk.error({
              msg: "TRADE_SYNC_COOKIE_FAIL",
              ext3: JSON.stringify(e || {}),
            });
          }
        })();
    }
    return e;
  }),
  $.onResponse(function (e) {
    var t, r;
    return (
      (null == (r = null == (t = i.index) ? void 0 : t.showLoadingInstance)
        ? void 0
        : r.noAutoHide) || i.index.hideLoading(),
      e
    );
  }),
  $.onResponse(function (e) {
    try {
      e.config.url.indexOf("tradepasswd.cgi") > -1 &&
        q.aegisReporter.reportEvent("event-http-tradepasswd-res", {
          ext2: Date.now(),
          ext3: JSON.stringify(e.data),
        });
    } catch (e) {}
    var t = e.data;
    return (
      "string" == typeof t &&
        ((e.data = t.replace(/\\x(\w{2})/g, function (e, t) {
          return "22" === t || "5C" === t
            ? ""
            : String.fromCharCode(parseInt(t, 16));
        })),
        (e.data = e.data.replace(/(\n|\\)/g, ""))),
      e
    );
  }),
  $.onResponse(i.dist$1.resJson()),
  $.onResponse(function (e) {
    var t, r, n, s, c, u, l, d, p, g, f, k, v;
    try {
      !R.isLogin() &&
        e.config.url.indexOf("zxg_login.fcgi") > -1 &&
        q.aegisReporter.reportEvent("js-read-cookie-fail");
    } catch (e) {}
    if (
      (null ==
      (r = null == (t = null == e ? void 0 : e.config) ? void 0 : t.url)
        ? void 0
        : r.startsWith("mini_login.fcgi")) &&
      A &&
      (null == (n = null == e ? void 0 : e.data) ? void 0 : n.login_info)
    ) {
      var m = e.data.login_info,
        x = Object.keys(m)
          .map(function (e) {
            return "".concat(e, "=").concat(m[e]);
          })
          .join(",");
      return (
        M.setCookieFromHeader(x),
        null ==
          (l =
            null ==
            (u =
              null == (c = null == (s = a.getApp) ? void 0 : s.call(a))
                ? void 0
                : c.$sdk)
              ? void 0
              : u.updateCookie) ||
          l.call(u, {
            data: o(
              o({}, e.data.login_info),
              {},
              { dealer_code: w.brokerConfig.base.code }
            ),
          }),
        H(m),
        e
      );
    }
    if (
      (!R.isLogin() || A) &&
      (null == (d = null == e ? void 0 : e.data) ? void 0 : d.login_info)
    ) {
      var _ = L
          ? e.data.login_info
          : i.pick(e.data.login_info, ["qlskey", "wzq_qlskey"]),
        h = Object.keys(_)
          .map(function (e) {
            return "".concat(e, "=").concat(_[e]);
          })
          .join(",");
      M.setCookieFromHeader(h);
      try {
        e.config.url.indexOf("zxg_login.fcgi") > -1 &&
          (R.isLogin()
            ? q.aegisReporter.reportEvent("js-write-cookie-success")
            : q.aegisReporter.reportEvent("js-write-cookie-fail"));
      } catch (e) {}
      null ==
        (k =
          null ==
          (f =
            null == (g = null == (p = a.getApp) ? void 0 : p.call(a))
              ? void 0
              : g.$sdk)
            ? void 0
            : f.updateCookie) ||
        k.call(f, {
          data: o(
            o({}, e.data.login_info),
            {},
            { dealer_code: w.brokerConfig.base.code }
          ),
        });
    }
    return (
      (null == (v = null == e ? void 0 : e.data) ? void 0 : v.login_info) &&
        H(e.data.login_info),
      e
    );
  }),
  $.onResponse(i.dist$1.resNoEmpty()),
  $.onResponse(i.dist$1.resRetcode({ codenames: ["retcode", "code"] })),
  $.onResponse(i.dist$1.resExceptions()),
  $.onResponseError(i.dist$1.resError()),
  $.onResponse(function (e) {
    var t;
    try {
      e.config &&
        Object.values(j.CancelTokenType).includes(e.config.cancelTokenType) &&
        e.config._cancelTokenId &&
        (e.config.cancelTokenType === j.CancelTokenType.mark &&
          e.data &&
          (e.data._request_uncomplete_whenroute_mark =
            null == (t = e.config.cancelToken)
              ? void 0
              : t._request_uncomplete_whenroute_mark),
        T.cancelTokenManager.removeCancelToken(e.config._cancelTokenId));
    } catch (e) {}
    return e;
  }),
  $.onResponse(b.decodeFields);
var Y = {
  "bind_account.fcgi": { data: "action=silent_bind" },
  "userinfo.fcgi": { retcode: 51001010 },
};
$.onResponseError(
  (function () {
    var n = r(
      e().mark(function r(n) {
        var o, i, a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (n.data && 51088863 === n.data.retcode) {
                    n.data.retmsg = "请重新绑定账户";
                    try {
                      x.router().replace({ name: "AccountBind" });
                    } catch (e) {}
                  }
                  if (
                    !n.data ||
                    !/^(50\d\d\d|310|51002)$/.test(n.data.retcode)
                  ) {
                    e.next = 7;
                    break;
                  }
                  if (
                    (q.aegisReporter.sdk.report({
                      msg: "zxg-request:fail",
                      ext2: n.data.retcode,
                      ext3: "".concat(n.data.retmsg, "@").concat(n.config.url),
                      trace: "trace",
                    }),
                    $.setAdapter(null),
                    (h.RequestContext.cookieFromHeader = null),
                    (n.config.adapter = null),
                    (h.RequestContext.gmSwitchFlag = !1),
                    -1 !== n.config.url.indexOf(v.API_TRADEPASSWD) ||
                      -1 !== n.config.url.indexOf(v.API_BIOMETRICS))
                  ) {
                    e.next = 6;
                    break;
                  }
                  return (e.next = 5), d.loginHandler(U, n);
                case 5:
                  return e.abrupt("return", e.sent);
                case 6:
                  n.data.retmsg = "密码校验失败，请重试";
                case 7:
                  if (
                    !n.data ||
                    !/^510010\d\d$/.test(n.data.retcode) ||
                    (function (e) {
                      var t = e.config,
                        r = t.url,
                        n = t.data,
                        o = t.norelogin,
                        i = void 0 !== o && o,
                        a = e.data.retcode;
                      return (
                        i ||
                        Object.keys(Y)
                          .filter(function (e) {
                            return -1 < r.indexOf(e);
                          })
                          .filter(function (e) {
                            return (
                              -1 < n.indexOf(Y[e].data) || a === Y[e].retcode
                            );
                          }).length > 0
                      );
                    })(n)
                  ) {
                    e.next = 17;
                    break;
                  }
                  return (
                    (n.data.retmsg = "登录态异常 请稍后再试"),
                    (e.prev = 9),
                    e.abrupt(
                      "return",
                      F
                        ? E.reLoginStrategyFn[
                            E.RELOGIN_STRATEGY_TYPE.MP_PLUGIN
                          ](U, n)
                        : O
                        ? E.reLoginStrategyFn[E.RELOGIN_STRATEGY_TYPE.IFRAME](
                            U,
                            n
                          )
                        : L
                        ? E.reLoginStrategyFn[E.RELOGIN_STRATEGY_TYPE.ZXG](
                            U,
                            n,
                            { cookie: M }
                          )
                        : E.reLoginStrategyFn[E.RELOGIN_STRATEGY_TYPE.DEFAULT](
                            U,
                            n
                          )
                    )
                  );
                case 13:
                  (e.prev = 13),
                    (e.t0 = e.catch(9)),
                    (a = e.t0),
                    "object" == t(e.t0) &&
                      (a = {
                        retcode:
                          (null == e.t0 ? void 0 : e.t0.retcode) ||
                          (null == (o = null == e.t0 ? void 0 : e.t0.data)
                            ? void 0
                            : o.retcode),
                        retmsg:
                          (null == e.t0 ? void 0 : e.t0.retmsg) ||
                          (null == (i = null == e.t0 ? void 0 : e.t0.data)
                            ? void 0
                            : i.retmsg) ||
                          (null == e.t0 ? void 0 : e.t0.errMsg),
                      }),
                    q.aegisReporter.reportEvent("ERR-LOGIN-FAIL", {
                      ext2: JSON.stringify(a || {}),
                    });
                case 17:
                  return e.abrupt("return", Promise.reject(n));
                case 18:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[9, 13]]
        );
      })
    );
    return function (e) {
      return n.apply(this, arguments);
    };
  })()
),
  $.onResponseError(
    (function () {
      var t = r(
        e().mark(function t(r) {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    !(
                      r.data &&
                      /^51088820|51088866$/.test(r.data.retcode) &&
                      ((t = r),
                      (n = void 0),
                      (n = t.config.checkTradeSession),
                      void 0 === n || n)
                    )
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (
                    N.info(
                      "需要验密, 错误码:"
                        .concat(r.data.retcode, ", 错误提示:")
                        .concat(r.data.retmsg)
                    ),
                    i.index.$emit(c.NEED_TRADE_SESSION),
                    (e.next = 5),
                    l.passwordCheckHandler(U, r)
                  );
                case 5:
                  (e.t0 = e.sent), (e.next = 9);
                  break;
                case 8:
                  e.t0 = Promise.reject(r);
                case 9:
                  return e.abrupt("return", e.t0);
                case 10:
                case "end":
                  return e.stop();
              }
            var t, n;
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })()
  );
var U = function (e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    n = r.method,
    i = void 0 === n ? "post" : n;
  try {
    e.indexOf("tradepasswd.cgi") > -1 &&
      q.aegisReporter.reportEvent("event-http-tradepasswd", {
        ext2: Date.now(),
        ext3: e,
      });
  } catch (e) {}
  r.retLoginInfo && (t = o(o({}, t), {}, { ret_logininfo: 1 })),
    r.noSetCookies && (t = o(o({}, t), {}, { no_set_cookies: 1 })),
    I || A
      ? (t = o(
          o({}, t),
          {},
          { wzq_dealer: w.brokerConfig.base.code },
          (null == r ? void 0 : r.notCookies) ? {} : M.getAll()
        ))
      : O &&
        (t = o(
          o({}, t),
          {},
          { wzq_comefrom: "0", wzq_dealer: w.brokerConfig.base.code },
          R.isLogin() ? {} : M.getAll()
        )),
    (t = o(
      o({}, t),
      {},
      { gm_flag: h.RequestContext.gmSwitchFlag ? "1" : "0" },
      F ? { plugin_version: "202607271629" } : {}
    ));
  var a = i.toLowerCase();
  return "get" === a
    ? $["".concat(a)](e, o({ params: t }, r))
    : $["".concat(a)](e, t, r);
};
(exports.getGmSwitchFlag = function () {
  return h.RequestContext.gmSwitchFlag;
}),
  (exports.http = $),
  (exports.request = U);
