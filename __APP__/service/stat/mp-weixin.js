require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../common/vendor.js"),
  a = require("./config.js");
require("../broker.js");
var o = require("../../utils/index.js"),
  s = require("../../config/key.js"),
  u = require("../cookie/mp-weixin.js"),
  c = require("../../utils/getPlatform.js"),
  l = require("./mtaFactory.js"),
  p = require("../../cgi/stat.js"),
  f = require("../../utils/cacheFn.js"),
  g = require("../../router/helper.js"),
  d = require("../aegis/platform/not-wujie.js"),
  v = require("../../config/broker/11100/index.js"),
  h = c.getPlatform().isMpPlugin,
  _ = "",
  m = new u.AdapterCookie(),
  E = null,
  x = null,
  b = null,
  R = null,
  N = null,
  M = null,
  C = i.mtaMp.stat;
i.mtaMp.stat = l.mtaStatFactory(C.bind(i.mtaMp));
var P = i.mtaMp.pgv;
function q(e, t) {
  var n, r;
  if (!e && !t) return "";
  if (t)
    if (((e = e || t.route || ""), o.getIsMpPluginComponent()))
      "pages/index/trade" === e &&
      (null ==
      (r = null == (n = null == t ? void 0 : t.$vm) ? void 0 : n.pluginRoute)
        ? void 0
        : r.value)
        ? (e = t.$vm.pluginRoute.value)
        : "pages/index/index" === e && (e = "pages/asset/index");
    else if (h) {
      var i = "__plugin__/".concat(v.brokerConfig.base.appid, "/");
      (null == e ? void 0 : e.indexOf(i)) > -1 &&
        (e = e.split(i)[1].replace("pages", ""));
    }
  return e ? e.replace(/^pages(\/.*)$/, "$1") : "";
}
function O() {
  var e;
  (e = "zxgxcx" === o.getMpFromSource() ? a.MP_KEYS : a.WZQ_MP_KEYS),
    i.mtaMp.init(
      r(
        r(r({}, e), a.FIT_REPORTER),
        {},
        { statPullDownFresh: !0, statShareApp: !0, statReachBottom: !0 }
      )
    ),
    (E = null),
    (x = null),
    (b = null),
    (R = null),
    (N = null),
    (M = null);
}
(i.mtaMp.pgv = l.mtaPgvFactory(function (e, t, n, r, a) {
  P.bind(i.mtaMp)(e, t, n), (x = { t: Date.now(), v: _ }), y.save(e);
})),
  O();
var y = {
  max: 10,
  pages: [],
  init: function () {
    (null == E ? void 0 : E.v) && (this.pages = E.v.split("|") || []);
  },
  save: function (e) {
    this.pages.length >= this.max && this.pages.shift(),
      this.pages.push(e),
      (E = { v: this.pages.join("|"), t: new Date().getTime() });
  },
  getPages: function () {
    var e = this.pages.length;
    return this.pages
      .slice(e - this.max >= 0 ? e - this.max : 0, this.max)
      .join("|");
  },
};
y.init();
var w,
  A = function (e) {
    return o.isInTimeRange(v.brokerConfig.base.stat.date) && "h5" !== e;
  },
  j = function () {
    var e = m.get("qluin");
    return e && -1 !== e.indexOf("@wx.tenpay.com") ? e : "";
  },
  I = function () {
    var e = {},
      t = getCurrentPages(),
      n = t[t.length - 1];
    (null == n ? void 0 : n.options) && (e = n.options);
    var i = r({}, e);
    return i.stat || i.stat_data || "";
  },
  S = function (e) {
    var t = [];
    t.push(a.BIPLATFORM),
      t.push("v".concat(a.VERSION)),
      t.push(
        "v".concat(a.VERSION).concat(
          (function (e) {
            var t = e.split("/");
            return [t[0], t[1], t.slice(2).join("_")].join("/");
          })(e)
        )
      );
    var n = (b || a.BRIEF.FM.UNKNOWN).split(".");
    return (
      t.push("".concat(a.SYSTEMCODE, "_").concat(n.join("."))),
      "bi://".concat(t.join(".").toLowerCase())
    );
  },
  F = function () {
    var e = I() || M || "",
      t = {};
    return (
      e &&
        e.split(".").length > 1 &&
        e.split(".").forEach(function (e) {
          [a.REGEXP.FMCHANNEL, a.REGEXP.ICHANNEL, a.REGEXP.OCHANNEL].forEach(
            function (n) {
              if (n.test(e)) {
                var r = (function (e) {
                  var t = "";
                  return (
                    a.REGEXP.OCHANNEL.test(e)
                      ? (t = "fchannel_id_o")
                      : a.REGEXP.ICHANNEL.test(e)
                      ? (t = "fchannel_id_fm_i")
                      : a.REGEXP.FMCHANNEL.test(e) && (t = "fchannel_id_fm"),
                    t
                  );
                })(e);
                t[r] = e;
              }
            }
          );
        }),
      r({ fchannel_id_o: M || R || "", fchannel_id_fm_i: N || "" }, t)
    );
  },
  k = function () {
    var e = F();
    return (
      g.isApplyPage(
        (function () {
          var e = getCurrentPages(),
            t = e[e.length - 1];
          return t ? q("", t) : "";
        })()
      ) || (e = r(r({}, e), {}, { fchannel_id_fm_i: "" })),
      e
    );
  },
  L = (function () {
    var s = n(
      e().mark(function n(s) {
        var u,
          c,
          l,
          g,
          d,
          E,
          b,
          R,
          N,
          M,
          C,
          P,
          O,
          y,
          w,
          I,
          F,
          L,
          T,
          G,
          H,
          X,
          B,
          D,
          z,
          $,
          U,
          K = arguments;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((u = K.length > 1 && void 0 !== K[1] ? K[1] : ""),
                    (c = K.length > 2 && void 0 !== K[2] ? K[2] : a.DOMAIN),
                    (l = K.length > 3 && void 0 !== K[3] ? K[3] : {}),
                    (g = K.length > 4 && void 0 !== K[4] ? K[4] : {}),
                    (R = g.syncMonitor),
                    (N = void 0 !== R && R),
                    (M = g.forceReport),
                    (C = void 0 !== M && M),
                    (e.prev = 5),
                    (P = getCurrentPages()),
                    (y = ""),
                    (w = ""),
                    u)
                  ) {
                    e.next = 12;
                    break;
                  }
                  if ((O = P[P.length - 1])) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("return");
                case 11:
                  (u = q("", O)),
                    P.length >= 2 &&
                      ((I = P[P.length - 2] || {}),
                      (F = I.options),
                      (L = void 0 === F ? {} : F),
                      (y = q("", I)),
                      (w = JSON.stringify(L)));
                case 12:
                  if (((T = o.getMpFromSource() || ""), A(T))) {
                    e.next = 15;
                    break;
                  }
                  return e.abrupt("return");
                case 15:
                  if (s) {
                    e.next = 17;
                    break;
                  }
                  return e.abrupt("return");
                case 17:
                  (_ = S(u)),
                    (G = (null == x ? void 0 : x.v) || ""),
                    (H = "".concat(_, "|").concat(G || "")),
                    (X = s.toUpperCase()),
                    (B = s.toLowerCase()),
                    (D = t(a.preserveTags));
                  try {
                    for (D.s(); !(z = D.n()).done; )
                      ($ = z.value),
                        (B === $ ||
                          ("retentionrate.optimization" === $ &&
                            B.indexOf($) >= 0)) &&
                          (X = [a.BIPLATFORM, "V".concat(a.VERSION), s]
                            .join(".")
                            .toUpperCase());
                  } catch (e) {
                    D.e(e);
                  } finally {
                    D.f();
                  }
                  (null == global ? void 0 : global.__embedded__mode) &&
                    u.includes("/quote/quote") &&
                    (X = "".concat(X, ".embedded")),
                    i.mtaMp.stat({
                      tag: X,
                      data: r(
                        r(
                          r(
                            r(
                              {
                                eventName: X,
                                url: u,
                                furl: u,
                                cftuin: j(),
                                openid: f.getWzqOpenid(),
                                qs_openid: m.get("qs_openid"),
                                appname: "qsxcx",
                                scene: (
                                  null == (d = i.wx$1)
                                    ? void 0
                                    : d.getEnterOptionsSync
                                )
                                  ? null == (E = i.wx$1.getEnterOptionsSync())
                                    ? void 0
                                    : E.scene
                                  : "",
                                fchannel_id: H,
                                dealer_code: v.brokerConfig.base.code,
                                rurl: y,
                                rarg: w,
                                fplatform: "mina",
                                fsrcsite: ["wzqxcx", "zxgxcx"].includes(T)
                                  ? T
                                  : "",
                              },
                              h ? { plugin_version: "202607271629" } : {}
                            ),
                            k()
                          ),
                          l
                        ),
                        {},
                        { domain: c }
                      ),
                      forceReport: C,
                    }),
                    (null == (b = v.brokerConfig.base.monitor)
                      ? void 0
                      : b.switch) &&
                      N &&
                      ((U = k()),
                      p.StatAPI.monitorReport({
                        action: "report_source",
                        channel_id_o: U.fchannel_id_o,
                        channel_id_i: U.fchannel_id_fm_i,
                        event_code: (X || "").toLowerCase(),
                        report_info: l.report_info || "",
                      })),
                    (e.next = 28);
                  break;
                case 26:
                  (e.prev = 26), (e.t0 = e.catch(5));
                case 28:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[5, 26]]
        );
      })
    );
    return function (e) {
      return s.apply(this, arguments);
    };
  })(),
  T = {
    click: L,
    page:
      ((w = n(
        e().mark(function t(n, a) {
          var s,
            u,
            c,
            l,
            g,
            d,
            E,
            b,
            R,
            N,
            M,
            C,
            P,
            O,
            w,
            I,
            F,
            L,
            T,
            G = arguments;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((s = G.length > 2 && void 0 !== G[2] ? G[2] : {}),
                      (u = G.length > 3 && void 0 !== G[3] ? G[3] : {}),
                      (d = u.syncMonitor),
                      (E = void 0 !== d && d),
                      (b = u.forceReport),
                      (R = void 0 !== b && b),
                      (e.prev = 3),
                      (N = q(n)),
                      (M = o.getMpFromSource() || ""),
                      ![
                        "platforms/mp-weixin/webview/index",
                        "/quote/quote",
                      ].includes(N) && A(M))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    (_ = S(N)),
                      (C = (null == x ? void 0 : x.v) || ""),
                      (P = "".concat(_, "|").concat(C || "")),
                      (O = r(
                        r(
                          r(
                            {
                              cftuin: j(),
                              openid: f.getWzqOpenid(),
                              qs_openid: m.get("qs_openid"),
                              fchannel_id: "|".concat(P),
                              fpre_event_id: y.getPages(),
                              appname: "qsxcx",
                              scene: (
                                null == (c = i.wx$1)
                                  ? void 0
                                  : c.getEnterOptionsSync
                              )
                                ? null == (l = i.wx$1.getEnterOptionsSync())
                                  ? void 0
                                  : l.scene
                                : "",
                              dealer_code: v.brokerConfig.base.code,
                              fplatform: "mina",
                              fsrcsite: ["wzqxcx", "zxgxcx"].includes(M)
                                ? M
                                : "",
                            },
                            h ? { plugin_version: "202607271629" } : {}
                          ),
                          s
                        ),
                        k()
                      )),
                      a ||
                        ((w = getCurrentPages()).length > 1 &&
                          ((I = w[w.length - 2] || {}),
                          (F = I.options),
                          (L = void 0 === F ? {} : F),
                          (O.rurl = q("", I)),
                          (O.rarg = JSON.stringify(L)))),
                      i.mtaMp.pgv({ path: N, data: O, forceReport: R }),
                      (null == (g = v.brokerConfig.base.monitor)
                        ? void 0
                        : g.switch) &&
                        E &&
                        ((T = k()),
                        p.StatAPI.monitorReport({
                          action: "report_source",
                          channel_id_o: T.fchannel_id_o,
                          channel_id_i: T.fchannel_id_fm_i,
                          event_code: (n || "").toLowerCase(),
                        })),
                      (e.next = 15);
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(3));
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[3, 13]]
          );
        })
      )),
      function (e, t) {
        return w.apply(this, arguments);
      }),
    update: function (e) {
      try {
        var t;
        if ((e && e.query && (t = e.query.stat || e.query.stat_data), !t))
          try {
            var n,
              r = getCurrentPages();
            if (!(r.length >= 1)) return;
            var i = (r[r.length - 1] || {}).options;
            t =
              (n = void 0 === i ? {} : i).stat ||
              n.stat_data ||
              I() ||
              b ||
              a.BRIEF.FM.UNKNOWN ||
              "";
          } catch (e) {
            return;
          }
        switch (t.split(".").length) {
          case 1:
          case 2:
          case 3:
            a.REGEXP.FMCHANNEL.test(t) &&
              (R = a.REGEXP.FMCHANNEL.exec(t)[0] || ""),
              a.REGEXP.ICHANNEL.test(t) &&
                (N = a.REGEXP.ICHANNEL.exec(t)[0] || ""),
              a.REGEXP.OCHANNEL.test(t) &&
                (M = a.REGEXP.OCHANNEL.exec(t)[0] || "");
        }
        (t = [R, N, M].join(".")),
          (b = t),
          m.set(s.BI_COOKIE, t),
          _ && (x = { t: Date.now(), v: _ });
      } catch (e) {}
    },
    getChannel: F,
    getChannelByUrl: I,
    getStorageChannelStr: function () {
      var e = "",
        t = F(),
        n = [t.fchannel_id_o, t.fchannel_id_fm_i].filter(function (e) {
          return e;
        });
      return n.length > 0 && (e = n.join(".")), e;
    },
    getRetPath: q,
    init: O,
    publishNotReportedQueue: function () {
      i.visibilityManager.clear(), i.mtaMp.publishNotReportedQueue();
    },
    flushExposureBatch: i.visibilityManager.flushExposureBatch,
    mtaReport: function (e) {
      var t;
      try {
        var n = null == (t = o.getCurRouteInfo()) ? void 0 : t.name;
        if (!n)
          return void d.aegisReporter.reportEvent(
            "MONITOR-MTA-ROUTE-NAME-EMPTY"
          );
        if (!i.visibilityManager.hasDefaultReportFunction()) {
          i.visibilityManager.setDefaultReportFunction(function (e, t, n) {
            L(e, "", a.DOMAIN, t, n);
          });
        }
        i.visibilityManager.reportByPageName(
          r(r({ busi: "trade" }, e), {}, { routeName: n })
        );
      } catch (e) {
        d.aegisReporter.reportEvent("MONITOR-MTA-REPORT-ERROR", { ext4: e });
      }
    },
  };
exports.stat = T;
