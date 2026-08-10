var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/objectWithoutProperties"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = ["type"];
require("../../app.js");
var a = require("../../common/vendor.js");
require("../../entry/mp.js");
var o = require("../../utils/index.js"),
  u = require("../../pages.js"),
  s = require("../../utils/getPlatform.js"),
  c = require("../../service/navigateMp.js"),
  l = require("../../model/trade/userUserName.js"),
  d = require("../../config/key.js"),
  p = require("../../model/trade/useBstMark.js"),
  f = require("../../stores/app/context.js"),
  g = require("../../service/aegis/platform/not-wujie.js"),
  m = require("../../service/broker.js"),
  v = require("../../service/request/index.js"),
  h = require("../../config/cgi.js"),
  q = require("../../stores/user/useUserinfo.js"),
  _ = require("../../service/cookie/mp-weixin.js"),
  k = require("../../service/hackLifeTimes/index.js"),
  b = require("../../service/connect/index.js"),
  j = require("../../service/request/cancelTokenManager.js"),
  x = require("../../config/broker/11100/index.js"),
  y = {
    handleLinkMainMp: function (e) {
      c.handleLinkMainMp(e);
    },
    getUserName: function () {
      return l.useUserName().userName;
    },
    handleTradeBstMark: function (e) {
      return t(
        n().mark(function r() {
          var t, i;
          return n().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = p.useBstMark()),
                    (i = t.handleTradeBstMark),
                    r.abrupt("return", i(e))
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )();
    },
    getEmbeddedSwitch: function () {
      return t(
        n().mark(function e() {
          var r, t, i, u, s, c, l, d;
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = q.useUserinfoStore()),
                      (t = r.getUserInfo),
                      (e.prev = 1),
                      (e.next = 4),
                      t()
                    );
                  case 4:
                    if (((i = a.storeToRefs(r)), (u = i.userinfo).value)) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 7:
                    if (
                      ((s = u.value),
                      (c = s.is_trademode_gray),
                      (l = s.trademode),
                      !c || !l)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", "1" === c && "1" === l);
                  case 10:
                    return (
                      (d = o.getCache(r.getCacheKey())),
                      e.abrupt(
                        "return",
                        "1" === (null == d ? void 0 : d.is_trademode_gray) &&
                          "1" === (null == d ? void 0 : d.trademode)
                      )
                    );
                  case 14:
                    return (
                      (e.prev = 14), (e.t0 = e.catch(1)), e.abrupt("return", !1)
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 14]]
          );
        })
      )();
    },
    openPluginWebPage: function (n) {
      if (n) {
        var t = n.type,
          a = void 0 === t ? "push" : t,
          o = r(n, i);
        (0, f.useAppContext().useRouter)()[a](e({}, o));
      }
    },
    updateBroker: function (e) {
      var r = e || {},
        n = r.dealerCode,
        t = r.domain,
        i = void 0 === t ? "" : t;
      if (n === x.brokerConfig.base.code)
        try {
          var o = m.stripDomainPrePostFix(i);
          o &&
            o !== x.brokerConfig.base.domain &&
            (m.updateDomain([
              { dealercode: x.brokerConfig.base.code, domain: o },
            ]),
            v.http.setBaseURL("https://".concat(o).concat(h.CGI_PREFIX)),
            a.index.setStorageSync(d.LAST_AVAILABLE_DOMAIN, o));
        } catch (e) {}
    },
    mainAppOnHide: function () {
      b.disconnect(), a.index.removeStorageSync(d.RELOGIN_WEBVIEW);
    },
    mainOnAppRoute: function () {
      j.cancelTokenManager.cancelAllRequests("mini:Route changed");
    },
    updateBrokerCookie: function (e) {
      var r, n, t;
      if (!a.isEmpty(e))
        try {
          var i = new _.AdapterCookie(),
            o = i.get("fe_now"),
            u = i.get("wzq_qluin");
          if (o && e.time > +o && u === e.wzq_qluin) {
            var s = a.pick(e, ["qlskey", "wzq_qlskey"]),
              c = Object.keys(s)
                .map(function (e) {
                  return "".concat(e, "=").concat(s[e]);
                })
                .join(",");
            i.setCookieFromHeader(c);
          }
        } catch (e) {
          null ==
            (t =
              null == (n = null == (r = g.aegisReporter) ? void 0 : r.sdk)
                ? void 0
                : n.error) || t.call(n, e);
        }
    },
  };
(exports.__uniPluginExports = y),
  (exports.setup = function (r) {
    var n = u.__CJS__export_default__().routes;
    Object.defineProperty(r.config.globalProperties, "$route", {
      get: function () {
        return o.getCurRouteInfo();
      },
    }),
      (r.config.errorHandler = function (e, r, n) {
        var t, i, a;
        null ==
          (a =
            null == (i = null == (t = g.aegisReporter) ? void 0 : t.sdk)
              ? void 0
              : i.error) || a.call(i, e);
      }),
      k.getLifeTimeMethods().proxyWxComponent(),
      (r.config.globalProperties.$router = {
        __innerVisit__: !1,
        _getRouterUrl: function (e) {
          var r,
            t = e.name,
            i = e.query,
            a = void 0 === i ? {} : i,
            u = e.path,
            s = void 0 === u ? "" : u;
          if (!t && !s) throw "name和path必须指定一个";
          if (
            (s
              ? (null ==
                (r = n.find(function (e) {
                  return "/".concat(e.path).endsWith(s);
                }))
                  ? void 0
                  : r.path) && (s = r.path)
              : (null ==
                (r = n.find(function (e) {
                  return e.name === t;
                }))
                  ? void 0
                  : r.path) && (s = r.path),
            !(s = s.replace(/^\//, "")))
          )
            throw "path为空，请检查";
          var c = global.getVm().$route;
          return c && c.name === r.name && "SystemError" === r.name
            ? ""
            : o.getMpRetUrl(r, s, a);
        },
        push: function (e) {
          this.__innerVisit__ = !0;
          var r = this._getRouterUrl(e);
          r && c.navigateTo(r);
        },
        replace: function (e) {
          this.__innerVisit__ = !0;
          var r = this._getRouterUrl(e);
          r && c.redirectTo(r);
        },
        back: function (r) {
          var n, t, i, u;
          if (s.getPlatform().isEmbeddedMiniProgram) {
            if (getCurrentPages().length < 2)
              return void c.navigateBackMiniProgram();
          } else if (o.getIsMpPluginComponent())
            return void (
              null ==
                (u =
                  null ==
                  (i =
                    null ==
                    (t =
                      null == (n = requireMiniProgram())
                        ? void 0
                        : n.main2Plugin)
                      ? void 0
                      : t.call(n))
                    ? void 0
                    : i.mainMpWx) || u.call(i, "navigateBack", r)
            );
          a.index.navigateBack(e({ fail: console.error }, r));
        },
      });
  });
