require("../@babel/runtime/helpers/Arrayincludes");
var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var t = require("../adapter/getApp.js"),
  n = require("../config/enum.js"),
  o = require("../utils/getPlatform.js"),
  i = require("../router/pageAuth.js"),
  u = require("../pages.js");
require("./broker.js");
var s = require("../stores/user/useUserinfo.js"),
  a = require("./request/unrelyUserinfoList.js"),
  l = require("./request/index.js"),
  c = require("../adapter/router.js"),
  d = require("./aegis/platform/not-wujie.js"),
  p = require("../utils/index.js"),
  v = require("../router/helper.js"),
  f = require("../common/vendor.js"),
  g = require("../config/broker/11100/index.js"),
  O = (function (e) {
    return (
      (e.SUCCESS = "0"),
      (e.USERINFO_CGI_FAIL = "1"),
      (e.NOTACCOUNT_TO_NEEDBOUND = "2"),
      (e.OEM_BOUND_TO_APPLY = "3"),
      (e.OEM_HAS_OFFICIAL_TO_BIND = "4"),
      (e.NOT_NEED_USERINFO = "5"),
      (e.ACCOUNT_SILENT_BIND = "6"),
      e
    );
  })(O || {});
o.getPlatform();
var m = !1,
  N = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = t.options,
      i = void 0 === n ? {} : n,
      a = i.routePath,
      l = i.forceGetUserInfo,
      c = void 0 !== l && l;
    return new Promise(
      (function () {
        var t = r(
          e().mark(function r(t, n) {
            var i, l, O;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = (function () {
                          var e,
                            r,
                            t,
                            n,
                            i,
                            s =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            a = u.__CJS__export_default__(),
                            l = a.routes,
                            c = getCurrentPages(),
                            v = c[c.length - 1] || {},
                            f = s || v.route || "",
                            O = o.getPlatform(),
                            m = O.isMpPlugin;
                          if (p.getIsMpPluginComponent())
                            if (
                              null ==
                              (t =
                                null ==
                                (r =
                                  null == (e = requireMiniProgram())
                                    ? void 0
                                    : e.main2Plugin())
                                  ? void 0
                                  : r.isTabbarPage)
                                ? void 0
                                : t.call(r, v.route)
                            )
                              f =
                                null ==
                                (i =
                                  null == (n = null == v ? void 0 : v.$vm)
                                    ? void 0
                                    : n.pluginRoute)
                                  ? void 0
                                  : i.value;
                            else {
                              var N = "pages/".concat(
                                  g.brokerConfig.base.fullName
                                ),
                                E = "pages/broker";
                              (null == f ? void 0 : f.indexOf(N)) > -1
                                ? (f =
                                    null == f
                                      ? void 0
                                      : f.replace(
                                          "/".concat(
                                            g.brokerConfig.base.fullName
                                          ),
                                          ""
                                        ))
                                : (null == f ? void 0 : f.indexOf(E)) > -1
                                ? (f =
                                    null == f
                                      ? void 0
                                      : f.replace("/".concat(E), ""))
                                : [
                                    "pages/messagebox/home/mainv2",
                                    "pages/message/index",
                                  ].includes(f) && (f = "pages/message/newbox");
                            }
                          else if (m) {
                            var T = "__plugin__/".concat(
                              g.brokerConfig.base.appid,
                              "/"
                            );
                            (null == f ? void 0 : f.indexOf(T)) > -1 &&
                              (f = f.split(T)[1]);
                          }
                          var _ =
                            l.find(function (e) {
                              return (null == e ? void 0 : e.path) === f;
                            }) || {};
                          return (
                            f ||
                              d.aegisReporter.reportEvent(
                                "MONITOR-USERINFO-HANDLER-EMPTY-ROUTE"
                              ),
                            _
                          );
                        })(a)),
                        (l = s.useUserinfoStore()),
                        (O = {}),
                        f.isEmpty(i) &&
                          t({
                            retcode: "0",
                            retmsg: "无异常",
                            userinfo: O,
                            route: i,
                          }),
                        (e.prev = 3),
                        !(null == window ? void 0 : window.__embedded__mode) &&
                          "/system/error" !== (null == i ? void 0 : i.path) &&
                          "SystemError" !== (null == i ? void 0 : i.name) &&
                          "ShareJump" !== (null == i ? void 0 : i.name) &&
                          !v.isNavTransitRoute(i))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t({
                          retcode: "5",
                          retmsg: "无需请求userinfo",
                          userinfo: {},
                          route: i,
                        })
                      );
                    case 6:
                      if (!m) {
                        e.next = 8;
                        break;
                      }
                      throw "上次userinfo请求失败";
                    case 8:
                      return (
                        (e.next = 10),
                        l[c ? "forceGetUserInfo" : "getUserInfo"]({})
                      );
                    case 10:
                      (O = e.sent), (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(3)), (m = !0);
                    case 16:
                      f.isEmpty(O || {})
                        ? n({
                            retcode: "1",
                            retmsg: "userinfo接口请求失败",
                            userinfo: {},
                            route: i,
                          })
                        : ((m = !1),
                          T({ userinfo: O, route: i }) &&
                            n({
                              retcode: "2",
                              retmsg: "当前用户状态不允许访问该页面",
                              userinfo: O,
                              route: i,
                            }),
                          t({
                            retcode: "0",
                            retmsg: "无异常",
                            userinfo: O,
                            route: i,
                          }));
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[3, 13]]
            );
          })
        );
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })()
    );
  },
  E = function () {
    var e,
      r,
      n,
      i,
      u,
      s,
      a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      l = a.retcode,
      p = (a.userinfo, a.route);
    switch ((o.getPlatform(), l)) {
      case "2":
        return (
          c.router().replace({ name: "AccountBind" }),
          void (
            null ==
              (r = null == (e = d.aegisReporter) ? void 0 : e.reportEvent) ||
            r.call(e, "MONITOR-USERINFO-NOTACCOUNT_TO_NEEDBOUND", {
              ext2: JSON.stringify({ exceptionType: l, route: p }),
            })
          )
        );
      case "4":
        return (
          t.getApp().$router.replace({ name: "AccountBind" }),
          void (
            null ==
              (i = null == (n = d.aegisReporter) ? void 0 : n.reportEvent) ||
            i.call(n, "MONITOR-USERINFO-OEM_HAS_OFFICIAL_TO_BIND", {
              ext2: JSON.stringify({ exceptionType: l, route: p }),
            })
          )
        );
      case "3":
        return (
          t.getApp().$router.push({ path: "/asset/index" }),
          void (
            null ==
              (s = null == (u = d.aegisReporter) ? void 0 : u.reportEvent) ||
            s.call(u, "MONITOR-USERINFO-OEM-BOUND-TO-APPLY", {
              ext2: JSON.stringify({ exceptionType: l, route: p }),
            })
          )
        );
      case "6":
        return;
    }
  },
  T = function (e) {
    var r,
      t,
      o,
      u = e.userinfo,
      s = e.route,
      a = void 0 === s ? {} : s;
    return !(
      (function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
          -1 !== [n.USERSTATE.HASBUNDLE, n.USERSTATE.HASACCOUNT].indexOf(e)
        );
      })(null == u ? void 0 : u.userstate) ||
      (null == (r = a.name) ? void 0 : r.startsWith("Apply")) ||
      (null == (t = a.name) ? void 0 : t.startsWith("BizPwd")) ||
      -1 !== ["MessageBox"].indexOf(a.name || "") ||
      -1 !== ["NewMessageBox"].indexOf(a.name || "") ||
      i.isNoOpenCanVisit(null == (o = a.meta) ? void 0 : o.signature)
    );
  };
l.http.onRequest(
  (function () {
    var t = r(
      e().mark(function r(t) {
        var n, o, i, u, s, l;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    !a.unrelyUserinfoList.some(function (e) {
                      return t.url.startsWith(e);
                    })
                  ) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", t);
                case 2:
                  return (
                    (e.prev = 2),
                    (e.next = 5),
                    N({ options: { forceGetUserInfo: !1 } })
                  );
                case 5:
                  e.next = 10;
                  break;
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(2)),
                    e.abrupt(
                      "return",
                      (t.url.startsWith("home_show.fcgi") &&
                        (E(e.t0 || {}),
                        null ==
                          (o =
                            null == (n = d.aegisReporter)
                              ? void 0
                              : n.reportEvent) ||
                          o.call(
                            n,
                            "MONITOR-PLUGIN-HOMESHOW-USERINFO-EXCEPTION",
                            {
                              ext2: JSON.stringify({
                                code:
                                  (null == e.t0 ? void 0 : e.t0.retcode) || "",
                                msg:
                                  (null == e.t0 ? void 0 : e.t0.retmsg) || "",
                              }),
                            }
                          )),
                      "1" !== (null == e.t0 ? void 0 : e.t0.retcode)
                        ? (null ==
                            (l =
                              null == (i = d.aegisReporter)
                                ? void 0
                                : i.reportEvent) ||
                            l.call(i, "MONITOR-REQUEST-NOAUTH-INTERCEPTOR", {
                              ext2: JSON.stringify({
                                url: null == t ? void 0 : t.url,
                                retcode: null == e.t0 ? void 0 : e.t0.retcode,
                                retmsg: null == e.t0 ? void 0 : e.t0.retmsg,
                                route:
                                  null ==
                                  (u = null == e.t0 ? void 0 : e.t0.route)
                                    ? void 0
                                    : u.name,
                                userstate:
                                  null ==
                                  (s = null == e.t0 ? void 0 : e.t0.userinfo)
                                    ? void 0
                                    : s.userstate,
                              }),
                            }),
                          Promise.reject({
                            retcode: "NOAUTH",
                            retmsg: "接口权限错误",
                          }))
                        : t)
                    )
                  );
                case 10:
                  return e.abrupt("return", t);
                case 11:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[2, 7]]
        );
      })
    );
    return function (e) {
      return t.apply(this, arguments);
    };
  })()
),
  (exports.ENUM_EXCEPTION_TYPE = O),
  (exports.abnormalStateAccessHandler = E),
  (exports.userinfoHandler = N);
