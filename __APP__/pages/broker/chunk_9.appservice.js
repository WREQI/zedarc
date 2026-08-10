$gwx35_XC_9 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx35_XC_9 || [];
    function gz$gwx35_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "container"]],
              [1, "data-v-61345e54"],
            ],
            [[7], [3, "h"]],
          ],
        ]);
        Z([3, "__l"]);
        Z([3, "data-v-61345e54"]);
        Z([3, "61345e54-0"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([3, "61345e54-1"]);
        Z(z[5]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "61345e54-2"]);
        Z(z[12]);
      })(__WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx35_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx35_XC_9 = true;
    var x = ["./pages/broker/transfer.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx35_XC_9_1();
      var hEC = _n("view");
      _rz(z, hEC, "class", 0, e, s, gg);
      var cGC = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(hEC, cGC);
      var oFC = _v();
      _(hEC, oFC);
      if (_oz(z, 4, e, s, gg)) {
        oFC.wxVkey = 1;
        var oHC = _v();
        _(oFC, oHC);
        if (_oz(z, 5, e, s, gg)) {
          oHC.wxVkey = 1;
          var lIC = _mz(
            z,
            "web-view-component",
            ["bind:__l", 6, "bindmessage", 1, "class", 2, "uI", 3, "uP", 4],
            [],
            e,
            s,
            gg
          );
          _(oHC, lIC);
        }
        oHC.wxXCkey = 1;
        oHC.wxXCkey = 3;
      } else if (_oz(z, 11, e, s, gg)) {
        oFC.wxVkey = 2;
        var aJC = _v();
        _(oFC, aJC);
        if (_oz(z, 12, e, s, gg)) {
          aJC.wxVkey = 1;
          var tKC = _mz(
            z,
            "st-status",
            ["bind:__l", 13, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(aJC, tKC);
        }
        aJC.wxXCkey = 1;
        aJC.wxXCkey = 3;
      } else {
        oFC.wxVkey = 3;
      }
      oFC.wxXCkey = 1;
      oFC.wxXCkey = 3;
      oFC.wxXCkey = 3;
      _(r, hEC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx35_XC_9";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx35_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/broker/transfer.wxml"] = [
    $gwx35_XC_9,
    "./pages/broker/transfer.wxml",
  ];
else
  __wxAppCode__["pages/broker/transfer.wxml"] = $gwx35_XC_9(
    "./pages/broker/transfer.wxml"
  );
__wxRoute = "pages/broker/transfer";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/broker/transfer.js";
define(
  "pages/broker/transfer.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      t = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      a = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      l = Object.prototype.propertyIsEnumerable,
      c = function (e, n, t) {
        return n in e
          ? r(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[n] = t);
      },
      u = function (e, r) {
        for (var t in r || (r = {})) i.call(r, t) && c(e, t, r[t]);
        if (a) {
          var o,
            u = n(a(r));
          try {
            for (u.s(); !(o = u.n()).done; ) {
              t = o.value;
              l.call(r, t) && c(e, t, r[t]);
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
        }
        return e;
      },
      d = function (e, n, r) {
        return new Promise(function (t, o) {
          var a = function (e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            },
            l = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(a, i);
            };
          l((r = r.apply(e, n)).next());
        });
      },
      s = require("../../common/vendor.js");
    function p(n) {
      return {
        handleWeekly: function () {
          return d(
            this,
            null,
            e().mark(function r() {
              var t = this;
              return e().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return r.abrupt(
                        "return",
                        new Promise(function (r) {
                          return d(
                            t,
                            null,
                            e().mark(function t() {
                              var o;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (o = !1),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          s.sdkBridge.fetchBrokerInfo()
                                        );
                                      case 4:
                                        (o = s.sdkBridge.isMaintain({
                                          broker: n.dealerCode,
                                        })),
                                          (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(1)),
                                          (o = !1);
                                      case 10:
                                        o
                                          ? (r(!0),
                                            s.wx$1.showModal({
                                              title: "很抱歉",
                                              content:
                                                "券商维护中，先去看看投资周报吧",
                                              showCancel: !1,
                                              confirmText: "确认跳转",
                                              success: function (e) {
                                                e.confirm &&
                                                  (function () {
                                                    var e;
                                                    try {
                                                      e =
                                                        s.dist.urltools.param.parse(
                                                          n.originUrl
                                                        );
                                                    } catch (n) {
                                                      e = {};
                                                    }
                                                    var r =
                                                      s.dist.urltools.make(
                                                        "https://zqact03.tenpay.com/activity/page/weeklyreport/#/index",
                                                        e
                                                      );
                                                    s.wx$1.redirectTo({
                                                      url: "/pages/additional/webview/index?url=".concat(
                                                        encodeURIComponent(r)
                                                      ),
                                                    });
                                                  })();
                                              },
                                            }))
                                          : r(!1);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 7]]
                              );
                            })
                          );
                        })
                      );
                    case 1:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
        },
      };
    }
    var v = {
      name: "BrokerTransfer",
      components: {
        WebViewComponent: function () {
          return "../../components/webView.js";
        },
      },
      onLoad: function (e) {
        this.onMountedCommon(e);
      },
      onReady: function () {
        var e;
        null == (e = this.setInitialRenderingCache) || e.call(this, null);
      },
      setup: function () {
        var n,
          r,
          a = s.useBrokerInfo(),
          i = a.navigateToTrade,
          l = a.LINK_TYPE,
          c = a.highestPriorityDealer,
          v = a.isBrokerPluginEnable,
          f = a.getBrokerDomain,
          m = a.fetchData,
          h = a.isDataFetched,
          b =
            (null ==
            (r = null == (n = getApp().globalData.detect) ? void 0 : n.env)
              ? void 0
              : r.IS_PCWEIXIN) || !1;
        function w(n, r) {
          var t = this;
          s.isApplyPath(n) &&
            r &&
            Promise.resolve()
              .then(function () {
                return d(
                  t,
                  null,
                  e().mark(function t() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.t0 = null == h ? void 0 : h.value), e.t0)) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), m();
                          case 4:
                            s.reportBypassCanApply({
                              dealerCode: r,
                              from: "transfer",
                              targetUrl: n,
                              extra: { linkscene: y || "", source: E || "" },
                            });
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                  })
                );
              })
              .catch(function (e) {});
        }
        var g = s.ref("white");
        g.value = s.wx$1.getStorageSync("user/skin") || "white";
        var x,
          k,
          y,
          E,
          R = s.ref(!1),
          _ = s.ref("");
        function O() {
          s.wx$1.reLaunch({ url: "/pages/index/index" });
        }
        return {
          skin: g,
          isGuideToEmbedded: R,
          webviewUrl: _,
          openEmbeddedMp: function () {
            w(x, k),
              i({ url: x, dealercode: k, redirect: !0 }).catch(function (e) {
                var n, r, t;
                s.wx$1.showModal({
                  content: e.retmsg || "系统繁忙 请稍后再试",
                  showCancel: !1,
                }),
                  null ==
                    (t =
                      null == (r = null == (n = s.mpReporter) ? void 0 : n.sdk)
                        ? void 0
                        : r.error) || t.call(r, e);
              });
            var e = s.getCurrentRoute().query;
            (void 0 === e ? {} : e).needback && s.wx$1.navigateBack();
          },
          handleWebviewMessage: function (e) {
            var n,
              r,
              a,
              i,
              l,
              d,
              p,
              v,
              f =
                (null == (n = null == e ? void 0 : e.mp) ? void 0 : n.detail) ||
                (null == e ? void 0 : e.detail);
            if (
              (null == (r = null == f ? void 0 : f.data) ? void 0 : r.length) >
              0
            ) {
              var m = k || (null == (a = c.value) ? void 0 : a.code),
                h = f.data
                  .filter(function (e) {
                    var n;
                    return (
                      "updateCookie" === (null == e ? void 0 : e.event) &&
                      (null == (n = null == e ? void 0 : e.data)
                        ? void 0
                        : n.dealer_code) === +m
                    );
                  })
                  .sort(function (e, n) {
                    var r, t;
                    return (
                      ((null == (r = null == n ? void 0 : n.data)
                        ? void 0
                        : r.time) || 0) -
                      ((null == (t = null == e ? void 0 : e.data)
                        ? void 0
                        : t.time) || 0)
                    );
                  })[0];
              if (null == h ? void 0 : h.data)
                try {
                  !(function (e) {
                    var n,
                      r,
                      t = e.dealer_code;
                    if (t) {
                      var o = s.TRADE_PLUGIN_NAME_MAP[t];
                      if (o)
                        try {
                          null ==
                            (r =
                              null == (n = requirePlugin(o))
                                ? void 0
                                : n.updateBrokerCookie) || r.call(n, e);
                        } catch (e) {}
                    }
                  })(((p = u({}, h.data)), (v = { time: h.time }), t(p, o(v))));
                } catch (e) {
                  null ==
                    (d =
                      null == (l = null == (i = s.mpReporter) ? void 0 : i.sdk)
                        ? void 0
                        : l.error) || d.call(l, e);
                }
            }
          },
          COMMON_PAGE_STATUS: s.COMMON_PAGE_STATUS,
          onMountedCommon: function () {
            return d(this, arguments, function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return e().mark(function r() {
                var t,
                  o,
                  a,
                  d,
                  m,
                  h,
                  C,
                  P,
                  I,
                  T,
                  A,
                  M,
                  N,
                  S,
                  U,
                  B,
                  D,
                  L,
                  G,
                  $,
                  W,
                  j,
                  K,
                  q;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                n = e.dealercode,
                                r = e.url,
                                t = void 0 === r ? "" : r,
                                o = e.linkscene,
                                a = e.source,
                                i = decodeURIComponent(t);
                              (x = i), (k = n), (y = o), (E = a);
                            })(n),
                            x)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void s.wx$1.showModal({
                              content: "跳转路径不合法",
                              showCancel: !1,
                              confirmText: "我知道了",
                              success: function () {
                                var e, n;
                                O(),
                                  null ==
                                    (n =
                                      null == (e = s.mpReporter)
                                        ? void 0
                                        : e.reportEvent) ||
                                    n.call(e, "BROKER-TRANSFER-URL-INVALID");
                              },
                            })
                          );
                        case 2:
                          if (((e.prev = 2), "weekly" !== E)) {
                            e.next = 30;
                            break;
                          }
                          return (
                            (A = p({ dealerCode: k, originUrl: x })),
                            (M = A.handleWeekly),
                            (e.next = 7),
                            M()
                          );
                        case 7:
                          if (!e.sent) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          if (
                            ((N =
                              k || (null == (t = c.value) ? void 0 : t.code)),
                            !x.includes("/pages/analysis/weekly") || !v(N))
                          ) {
                            e.next = 30;
                            break;
                          }
                          if (!(S = f(N))) {
                            e.next = 29;
                            break;
                          }
                          return (
                            (U = x.replace("/pages", "")),
                            (B = "https://".concat(S, "/mp/v2/index.html")),
                            (D = (
                              null == (o = s.wx$1)
                                ? void 0
                                : o.getEnterOptionsSync
                            )
                              ? null == (a = s.wx$1.getEnterOptionsSync())
                                ? void 0
                                : a.scene
                              : ""),
                            (L = {}),
                            (e.prev = 15),
                            (e.next = 18),
                            getApp().globalData.Login.getcode("mp_trade", {
                              dealercode: N,
                              domain: S,
                            })
                          );
                        case 18:
                          (G = e.sent),
                            ($ = (null == G ? void 0 : G.skeySign) || ""),
                            (W = (null == G ? void 0 : G.loginCode) || ""),
                            (L = {
                              login_code: W,
                              skey_sign: $,
                              use_code: W && $ ? "1" : "0",
                            }),
                            (e.next = 27);
                          break;
                        case 24:
                          (e.prev = 24),
                            (e.t0 = e.catch(15)),
                            null ==
                              (m =
                                null == (d = s.mpReporter)
                                  ? void 0
                                  : d.reportEvent) ||
                              m.call(d, "BROKER-TRANSFER-GETCODE-FAILED", {
                                ext2: N,
                                ext3: JSON.stringify(e.t0 || {}),
                              });
                        case 27:
                          return (
                            (j = u(
                              {
                                font: "west",
                                from: "main-miniapp",
                                from_zxgxcx: "1",
                                _buildh5ver:
                                  (null == (h = c.value)
                                    ? void 0
                                    : h.buildH5Ver) || "",
                                cdn_domain_type:
                                  (null == (C = c.value)
                                    ? void 0
                                    : C.cdnDomainType) || "",
                                lite: "0",
                                xcx_scene: D,
                                t: "black" === g.value ? "dark" : "light",
                              },
                              L
                            )),
                            (K = ""
                              .concat(B, "?")
                              .concat(s.stringify(j), "#")
                              .concat(U)),
                            e.abrupt("return", void (_.value = K))
                          );
                        case 29:
                          _.value = "";
                        case 30:
                          e.next = 35;
                          break;
                        case 32:
                          (e.prev = 32),
                            (e.t1 = e.catch(2)),
                            (_.value = ""),
                            null ==
                              (T =
                                null ==
                                (I =
                                  null == (P = s.mpReporter) ? void 0 : P.sdk)
                                  ? void 0
                                  : I.error) || T.call(I, e.t1);
                        case 35:
                          if ("embedded" !== y) {
                            e.next = 37;
                            break;
                          }
                          return e.abrupt("return", void (R.value = !0));
                        case 37:
                          if (!b) {
                            e.next = 46;
                            break;
                          }
                          if (
                            ((e.prev = 38),
                            !decodeURIComponent(x).startsWith("/pages/apply"))
                          ) {
                            e.next = 41;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void i({ name: "ApplyIndex" })
                          );
                        case 41:
                          e.next = 46;
                          break;
                        case 43:
                          return (
                            (e.prev = 43),
                            (e.t2 = e.catch(38)),
                            e.abrupt(
                              "return",
                              (s.wx$1.showModal({
                                content: e.t2.retmsg || "系统繁忙 请稍后再试",
                                showCancel: !1,
                              }),
                              void s.mpReporter.reportEvent(
                                "transfer_apply_error",
                                { ext3: e.t2 }
                              ))
                            )
                          );
                        case 46:
                          (q = (function (e) {
                            if (["msg", "h5"].includes(e))
                              return [
                                l.BROKER_PLUGIN_PAGE,
                                l.BROKER_PLUGIN_COMPONENT,
                                l.TENPAY,
                                l.BROKER_PLUGIN_WEBVIEW,
                              ];
                          })(y)),
                            w(x, k),
                            i({
                              url: x,
                              linkType: q,
                              dealercode: k,
                              redirect: !0,
                            }).catch(function () {
                              var e,
                                n,
                                r =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                              null ==
                                (n =
                                  null == (e = s.mpReporter)
                                    ? void 0
                                    : e.reportEvent) ||
                                n.call(e, "BROKER-TRANSFER-ERR", {
                                  ext3: JSON.stringify(r),
                                }),
                                "ERR_LINKTYPE_INVALID" !== r.retcode
                                  ? s.wx$1.showModal({
                                      content:
                                        r.retmsg || "系统繁忙 请稍后再试",
                                      showCancel: !1,
                                      success: function () {
                                        O();
                                      },
                                    })
                                  : (R.value = !0);
                            });
                        case 48:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [
                    [2, 32],
                    [15, 24],
                    [38, 43],
                  ]
                );
              })();
            });
          },
        };
      },
    };
    Array ||
      (
        s.resolveComponent("mp-privacy-dialog") +
        s.resolveComponent("web-view-component") +
        s.resolveComponent("st-status")
      )();
    var f = s._export_sfc(v, [
      [
        "render",
        function (e, n, r, t, o, a) {
          return s.e(
            { a: e.rootFontSize, b: t.webviewUrl },
            t.webviewUrl
              ? {
                  c: s.o(t.handleWebviewMessage, 403),
                  d: s.p({ "add-params": !1, src: t.webviewUrl }),
                }
              : t.isGuideToEmbedded
              ? {
                  g: s.o(function () {
                    return (
                      t.openEmbeddedMp && t.openEmbeddedMp.apply(t, arguments)
                    );
                  }, 404),
                }
              : { f: s.p({ type: t.COMMON_PAGE_STATUS.LOADING }) },
            { e: !t.isGuideToEmbedded, h: s.n("skin-" + t.skin) }
          );
        },
      ],
      ["__scopeId", "data-v-61345e54"],
    ]);
    wx.createPage(f);
  },
  { isPage: true, isComponent: true, currentFile: "pages/broker/transfer.js" }
);
require("pages/broker/transfer.js");
