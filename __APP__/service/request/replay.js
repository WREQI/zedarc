var e,
  n = require("../../@babel/runtime/helpers/objectWithoutProperties"),
  t = ["url", "data"],
  r = require("../../common/vendor.js"),
  o = require("../../config/cgi.js"),
  i = require("../../components/Password/index.js"),
  c = require("../auth/auth.js"),
  u = require("../auth/auth.type.js"),
  a = require("../../utils/getPlatform.js"),
  s = require("../../config/event.js"),
  l = require("./context.js"),
  d = require("../aegis/utils.js"),
  f = a.getPlatform(),
  h = f.isMpPlugin,
  p = f.isZxg,
  E = [],
  v = [
    o.API_TRADE_SUBMIT,
    o.API_TRADE_CANCEL,
    ((e = o.NEWSTOCK_ORDER), e.replace(/\.f?cgi/, "")),
  ];
function _(e) {
  try {
    var n = E.map(function (e) {
      return { url: m(e.url), routeName: e.routeName || "unknown" };
    });
    if (n && n.length > 0) {
      var t = "";
      try {
        var r = getCurrentPages();
        if (r && r.length > 0) {
          var o = r[r.length - 1];
          t = o.route || o.__route__ || "";
        }
      } catch (e) {
        t = "unknown";
      }
      if (n.length > 20)
        d.reportEventSafely("AUTH_CALLBACK_MONITOR", {
          ext3: "".concat(t, " ").concat(e, ":too_many_urls_").concat(n.length),
        });
      else {
        var i = n
          .map(function (e) {
            return "".concat(e.url, "[").concat(e.routeName, "]");
          })
          .join(",");
        d.reportEventSafely("AUTH_CALLBACK_MONITOR", {
          ext3: "".concat(t, " ").concat(e, ":").concat(i),
        });
      }
    }
  } catch (e) {}
}
function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  try {
    var n = e.split("?")[0],
      t = e.split("?")[1] || "",
      r = [];
    return (
      t.split("&").forEach(function (e) {
        "t" !== e.split("=")[0] && r.push(e);
      }),
      r.length ? "".concat(n, "?").concat(r.join("&")) : n
    );
  } catch (n) {
    return e;
  }
}
(exports.FLAG_NOREPLAY = 2),
  (exports.passwordCheckHandler = function (e, o, a) {
    if (2 & a)
      return new Promise(function (e) {
        i.Password({
          theme: h ? i.THEME.EMBEDDED : i.THEME.FUND,
          needUpdateSeed: !0,
          onSuccess: function (n) {
            e(n),
              r.index.$emit(s.PASSWORD_COMPLETE),
              r.index.$emit(s.PLUGIN_NEED_PWD, !1);
          },
        });
      });
    var d = o.config,
      f = d.url,
      g = d.data,
      T = n(d, t),
      P = {},
      D = g;
    if (
      ((f = f.replace(T.baseURL, "")),
      (g.split("&") || []).forEach(function (e) {
        var n = e.split("=");
        n[0] && (P[decodeURIComponent(n[0])] = decodeURIComponent(n[1]));
      }),
      T.headers && "application/json" === T.headers["Content-Type"])
    )
      try {
        P = JSON.parse(g);
      } catch (e) {}
    return new Promise(function (e, n) {
      var t,
        a = m(f),
        l = D ? "".concat(a, ":").concat(D) : a,
        d = E.findIndex(function (e) {
          return e.id === l;
        }),
        p = "";
      try {
        var g = getCurrentPages();
        if (g && g.length > 0) {
          var A = g[g.length - 1];
          p = A.route || A.__route__ || "";
        }
      } catch (e) {
        p = "unknown";
      }
      -1 === d
        ? E.push({
            id: l,
            url: f,
            routeName: p,
            resolvers: [e],
            rejecters: [n],
          })
        : (E[d].resolvers.push(e), E[d].rejecters.push(n)),
        c.Auth({
          biometricsScene: /^51088820$/.test(
            null == (t = null == o ? void 0 : o.data) ? void 0 : t.retcode
          )
            ? u.BiometricsScene.Login
            : "",
          context: T.comp,
          theme: T.isTrade
            ? i.THEME.TRADE
            : h
            ? i.THEME.EMBEDDED
            : i.THEME.FUND,
          isTrade: T.isTrade,
          showErrorWithNotice: !T.isTrade,
          needUpdateSeed: !0,
          onCancel: function () {
            _("onCancel"), (E = []);
          },
          onHide: function () {
            _("onHide"), (E = []);
          },
          onDestroy: function () {
            _("onDestroy"), (E = []);
          },
          onSuccess: function (e) {
            T.isTrade &&
              -1 < v.indexOf(f) &&
              e.authType === u.LoginType.PASSWORD &&
              (P.psw = e.encodePwd),
              (P.is_replay_req = "1"),
              E.forEach(function (e) {
                var n, t;
                null ==
                  (t =
                    null == (n = null == e ? void 0 : e.resolvers)
                      ? void 0
                      : n.forEach) ||
                  t.call(n, function (e) {
                    return null == e ? void 0 : e();
                  });
              }),
              (null == E
                ? void 0
                : E.some(function (e) {
                    var n, t;
                    return (
                      (null ==
                      (t =
                        null == (n = null == e ? void 0 : e.url)
                          ? void 0
                          : n.indexOf)
                        ? void 0
                        : t.call(n, "home_show.fcgi")) > -1
                    );
                  })) || r.index.$emit(s.PASSWORD_COMPLETE),
              (E = []),
              r.index.$emit(s.PLUGIN_NEED_PWD, !1);
          },
        });
    }).then(function () {
      return (
        p && !l.RequestContext.gmSwitchFlag && (T.adapter = null), e(f, P, T)
      );
    });
  });
