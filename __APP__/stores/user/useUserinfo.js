var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var o = require("../../common/vendor.js"),
  i = require("../../cgi/userinfo.js"),
  u = require("../../config/key.js"),
  a = require("../../service/stat/reportSwitch.js"),
  s = require("../../config/enum.js"),
  c = require("../../utils/index.js"),
  l = require("../../service/cookie/mp-weixin.js"),
  f = require("../../service/log/index.js");
require("../../service/broker.js");
var p = require("../../service/aegis/platform/not-wujie.js"),
  d = require("../../config/regexp.js"),
  v = require("../../utils/getPlatform.js"),
  g = require("../../common/components/Dialog/index.js"),
  m = require("../../components/Password/theme/biometrics/utils.js"),
  E = require("../../config/broker/11100/index.js"),
  h = new l.AdapterCookie(),
  S = new f.Log("store/userinfo"),
  b = o.defineStore("userinfo", function () {
    var l = o.ref((S.info("userinfo缓存是否有效: false"), {} || {})),
      f = h.get("account_mode");
    void 0 === f &&
      (f =
        n(
          n(
            {},
            o.dist.urltools.param.parse(
              null == location ? void 0 : location.search
            )
          ),
          o.dist.urltools.param.parse(null == location ? void 0 : location.hash)
        ).account_mode || s.E_ACCOUNT_MODE.UNKNOWN);
    var b,
      U,
      y,
      k,
      x,
      _ = o.ref(String(f)),
      A = o.computed(function () {
        var e = l.value.userstate;
        return +e == +s.USERSTATE.HASACCOUNT || +e == +s.USERSTATE.HASBUNDLE;
      }),
      R = o.computed(function () {
        return +l.value.userstate == +s.USERSTATE.VERIFYING;
      }),
      T = o.computed(function () {
        var e = l.value.userstate;
        return +e == +s.USERSTATE.NOACCOUNT || +e == +s.USERSTATE.FAILED;
      });
    function w() {
      var e = h.get(u.SESSION_UIN);
      return e ? "".concat(u.USERINFO, "/").concat(e) : u.USERINFO;
    }
    function N(e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      (l.value = e),
        c.setCache(w(), e, 86400),
        a.updateReportSwitch(null == e ? void 0 : e.sj_temp, r),
        S.info("设置userinfo");
    }
    function O(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (q = t(
        r().mark(function e(t) {
          var a, l, f, h, b, U, y, k, x, _;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      "1" ===
                        o.index.getStorageSync(u.BIZ_USERINFO_FORCE_UPDATE) &&
                        (t || (t = {}),
                        (t.action = "1"),
                        o.index.removeStorageSync(u.BIZ_USERINFO_FORCE_UPDATE)),
                      (e.next = 4),
                      i.httpUserinfo.fetchUserinfo(t)
                    );
                  case 4:
                    N((k = e.sent), !0);
                    try {
                      requireMiniProgram &&
                        (null ==
                          (l =
                            null == (a = requireMiniProgram())
                              ? void 0
                              : a.main2Plugin()) ||
                          l.updateBrokerUserSetting(
                            n(
                              {
                                brokercode: E.brokerConfig.base.code,
                                isTradeEmbedded:
                                  "1" === k.is_trademode_gray &&
                                  "1" === k.trademode,
                                embeddedTradeMode:
                                  "1" === k.order_mode
                                    ? s.TRADE_MODE.QUICKTRADE
                                    : s.TRADE_MODE.STANDARD,
                              },
                              m.getBiometricFlags(k)
                            )
                          ));
                    } catch (e) {
                      null ==
                        (h =
                          null == (f = p.aegisReporter)
                            ? void 0
                            : f.reportEvent) ||
                        h.call(f, "updateBrokerUserSetting-by-userinfo", {
                          ext4:
                            e instanceof Error
                              ? e.stack || e.message
                              : JSON.stringify(e || {}),
                        });
                    }
                    return e.abrupt("return", k);
                  case 10:
                    if (
                      ((e.prev = 10),
                      (e.t0 = e.catch(0)),
                      S.error("force get user info failed", e.t0),
                      (x = v.getPlatform()),
                      !x.isMpPlugin ||
                        (!d.REGEXP.NEEDLOGIN.test(e.t0.retcode) &&
                          !c.getIsMpPluginComponent()))
                    ) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return");
                  case 16:
                    (_ = getCurrentPages()),
                      "TO_PWD_RESET" !== e.t0.retcode &&
                        "oauth/broker" !==
                          (null == (b = null == _ ? void 0 : _[_.length - 1])
                            ? void 0
                            : b.route) &&
                        (g.Dialog({
                          message: e.t0.retmsg || "网络繁忙 请稍后再试",
                        }),
                        null ==
                          (y =
                            null == (U = p.aegisReporter)
                              ? void 0
                              : U.reportEvent) ||
                          y.call(U, "force-getuserinfo-error", {
                            ext4:
                              e.t0 instanceof Error
                                ? e.t0.stack || e.t0.message
                                : JSON.stringify(e.t0 || {}),
                          }));
                  case 18:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 10]]
          );
        })
      )).apply(this, arguments);
    }
    return {
      fundaccountMask: o.computed(function () {
        var e,
          r = null == (e = l.value) ? void 0 : e.fundaccount;
        return r
          ? "".concat(r.substring(0, 1), "**").concat(r.substring(r.length - 3))
          : "";
      }),
      userinfo: l,
      accountMode: _,
      isAccountOpen: A,
      isAccountVerifying: R,
      isAccountNoOpen: T,
      getUserInfo:
        ((x = t(
          r().mark(function e() {
            var t, n;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        "1" !==
                          o.index.getStorageSync(u.BIZ_USERINFO_FORCE_UPDATE))
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), O();
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 5:
                      if (o.isEmpty(l.value)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (a.updateReportSwitch(
                          null == (t = l.value) ? void 0 : t.sj_temp
                        ),
                        l.value)
                      );
                    case 7:
                      return (e.next = 9), i.httpUserinfo.fetchUserinfo();
                    case 9:
                      return (n = e.sent), e.abrupt("return", (N(n), n));
                    case 13:
                      throw (
                        ((e.prev = 13),
                        (e.t0 = e.catch(0)),
                        S.warn(
                          "userinfo get failed, navbar will not be displayed"
                        ),
                        e.t0)
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 13]]
            );
          })
        )),
        function () {
          return x.apply(this, arguments);
        }),
      forceGetUserInfo: O,
      updateUserInfoValue:
        ((k = t(
          r().mark(function t(o) {
            var i, u, a, s;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    (i = o.key),
                      (u = o.value),
                      (a = "string" == typeof i ? e({}, i, u) : i),
                      (s = n(n({}, l.value), a)),
                      (l.value = s),
                      c.setCache(w(), s, 86400);
                  case 3:
                  case "end":
                    return r.stop();
                }
            }, t);
          })
        )),
        function (e) {
          return k.apply(this, arguments);
        }),
      removeUserInfo:
        ((y = t(
          r().mark(function e() {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (l.value = {}), o.index.removeStorageSync(w());
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return y.apply(this, arguments);
        }),
      getAccountMode:
        ((U = t(
          r().mark(function e() {
            var t, n;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = h.get("account_mode")) && (_.value = t),
                        (e.prev = 2),
                        (e.next = 5),
                        marginCgi.getMode()
                      );
                    case 5:
                      (n = e.sent).mode && (_.value = n.mode), (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(2));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 9]]
            );
          })
        )),
        function () {
          return U.apply(this, arguments);
        }),
      setAccountMode:
        ((b = t(
          r().mark(function e(t) {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    sdk.manageDealAccount("change", {
                      accountMode: t.mode,
                      brokerId: "".concat(E.brokerConfig.base.code),
                    }),
                      (_.value = t.mode);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return b.apply(this, arguments);
        }),
      getCacheKey: w,
      getGreyConfigWithName: function (e) {
        var r, t;
        return (
          (null == (t = null == (r = l.value) ? void 0 : r.front_grey_info)
            ? void 0
            : t.find(function (r) {
                return (null == r ? void 0 : r.grey_name) === e;
              })) || {}
        );
      },
    };
  });
exports.useUserinfoStore = b;
