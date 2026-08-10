var e,
  r = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../@babel/runtime/helpers/objectWithoutProperties"),
  i = ["url", "data"],
  u = require("../../common/vendor.js"),
  a = require("../../stores/app/context.js");
require("../broker.js");
var s,
  c,
  l,
  p = require("../../adapter/router.js"),
  f = require("../../config/key.js"),
  I = require("./replay4login.js"),
  g = require("../aegis/platform/not-wujie.js"),
  m = require("../../utils/getPlatform.js"),
  E = require("../../router/helper.js"),
  d = m.getPlatform().isInMainXcx,
  _ = {
    MP_PLUGIN: "MP_PLUGIN",
    IFRAME: "IFRAME",
    H5_WEIXIN: "H5_WEIXIN",
    ZXG: "ZXG",
    MP_WEIXIN: "MP_WEIXIN",
    DEFAULT: "DEFAULT",
  },
  R = function (e, r) {
    var t = r.config,
      n = t.url,
      u = t.data,
      a = o(t, i),
      s = { is_replay_req: "2" };
    return (
      (n = n.replace(a.baseURL, "")),
      (u = (null == u ? void 0 : u.split("&")) || []).forEach(function (e) {
        var r = e.split("=");
        r[0] && (s[decodeURIComponent(r[0])] = decodeURIComponent(r[1]));
      }),
      e(n, s, a)
    );
  },
  v =
    (r((e = {}), _.MP_PLUGIN, function (e, r) {
      var t = a.useAppContext().login;
      return new Promise(function (n, o) {
        t.reLogin(function () {
          R(e, r)
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return o(e);
            });
        }).catch(function (e) {
          return o(r);
        });
      });
    }),
    r(e, _.IFRAME, function (e, r) {
      var t;
      window.parent.postMessage(
        {
          event: "reLoginBroker",
          data: {
            url: null == (t = r.config) ? void 0 : t.url,
            from: "relogin",
            timestamp: new Date().getTime(),
          },
        },
        "*"
      );
    }),
    r(
      e,
      _.H5_WEIXIN,
      ((l = n(
        t().mark(function e(r, n) {
          var o, i;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((o = a.useAppContext()), (i = o.login), !d)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        i.reLogin(
                          function () {
                            R(r, n)
                              .then(function (r) {
                                return e(r);
                              })
                              .catch(function (e) {
                                return t(e);
                              });
                          },
                          { type: u.H5_MAIN_LOGIN_TYPE.BROKER }
                        ).catch(function (e) {
                          return (
                            "RELOGIN_RETRY_LIMIT" ===
                              (null == e ? void 0 : e.retcode) &&
                              p
                                .router()
                                .replace({
                                  name: "SystemError",
                                  query: { reason: "loginlimit" },
                                }),
                            t(n)
                          );
                        });
                      })
                    );
                  case 3:
                    return (
                      (e.prev = 3),
                      (e.next = 6),
                      i.reLogin(null, { type: u.H5_MAIN_LOGIN_TYPE.BROKER })
                    );
                  case 6:
                    e.next = 12;
                    break;
                  case 8:
                    return (
                      (e.prev = 8),
                      (e.t0 = e.catch(3)),
                      "RELOGIN_RETRY_LIMIT" ===
                        (null == e.t0 ? void 0 : e.t0.retcode) &&
                        p
                          .router()
                          .replace({
                            name: "SystemError",
                            query: { reason: "loginlimit" },
                          }),
                      e.abrupt("return", Promise.reject(n))
                    );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[3, 8]]
          );
        })
      )),
      function (e, r) {
        return l.apply(this, arguments);
      })
    ),
    r(
      e,
      _.ZXG,
      ((c = n(
        t().mark(function e(r, n) {
          var o,
            i,
            u,
            s,
            c = arguments;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = c.length > 2 && void 0 !== c[2] ? c[2] : {}),
                    (i = o.cookie).set("wzq_qluin", "", {
                      expires: new Date(0),
                    }),
                    i.set("wzq_qlskey", "", { expires: new Date(0) }),
                    i.set("wzq_qlappid", "", { expires: new Date(0) }),
                    i.set("qluin", "", { expires: new Date(0) }),
                    i.set("qlskey", "", { expires: new Date(0) }),
                    i.set("qlappid", "", { expires: new Date(0) }),
                    (u = a.useAppContext()),
                    (s = u.login),
                    e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        s.reLogin(function () {
                          R(r, n)
                            .then(function (r) {
                              return e(r);
                            })
                            .catch(function (e) {
                              return t(e);
                            });
                        }).catch(function (e) {
                          return (
                            "RELOGIN_RETRY_LIMIT" ===
                              (null == e ? void 0 : e.retcode) &&
                              p
                                .router()
                                .push({
                                  name: "SystemError",
                                  query: { reason: "loginlimit" },
                                }),
                            t(n)
                          );
                        });
                      })
                    )
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e, r) {
        return c.apply(this, arguments);
      })
    ),
    r(
      e,
      _.DEFAULT,
      ((s = n(
        t().mark(function e(r, n) {
          var o, i, s, c, l, m, d, _;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((l = +u.index.getStorageSync(f.RELOGIN) || 0),
                    g.aegisReporter.reportEvent(
                      "BASELOGIN_RELOGIN_RETRY_LIMIT",
                      { ext4: null == n ? void 0 : n.retmsg }
                    ),
                    !(l >= 3))
                  ) {
                    e.next = 4;
                    break;
                  }
                  return (
                    (m = !0),
                    e.abrupt(
                      "return",
                      (((null ==
                      (i = null == (o = E.getCurrentRoute()) ? void 0 : o.route)
                        ? void 0
                        : i.startsWith("pages/devtools/")) ||
                        "h5" ===
                          (null ==
                          (c =
                            null == (s = global.getVm())
                              ? void 0
                              : s.globalData)
                            ? void 0
                            : c.from)) &&
                        (m = !1),
                      m &&
                        p
                          .router()
                          .replace({
                            name: "SystemError",
                            query: { reason: "mploginlimit" },
                          }),
                      Promise.reject(n))
                    )
                  );
                case 4:
                  return (
                    (l += 1),
                    u.index.setStorageSync(f.RELOGIN, String(l)),
                    (d = a.useAppContext()),
                    (_ = d.login),
                    (e.next = 8),
                    _.login(u.H5_MAIN_LOGIN_TYPE.BROKER)
                  );
                case 8:
                  return (e.next = 10), I.loginHandler(r, n);
                case 10:
                  return e.abrupt("return", e.sent);
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e, r) {
        return s.apply(this, arguments);
      })
    ),
    e);
(exports.RELOGIN_STRATEGY_TYPE = _), (exports.reLoginStrategyFn = v);
