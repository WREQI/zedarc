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
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
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
                                    (e.prev = 7), (e.t0 = e.catch(1)), (o = !1);
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
                                                var r = s.dist.urltools.make(
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
        (null == (r = null == (n = getApp().globalData.detect) ? void 0 : n.env)
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
          (null == (r = null == f ? void 0 : f.data) ? void 0 : r.length) > 0
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
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
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
                              arguments.length > 0 && void 0 !== arguments[0]
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
                        ((N = k || (null == (t = c.value) ? void 0 : t.code)),
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
                          null == (o = s.wx$1) ? void 0 : o.getEnterOptionsSync
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
                              (null == (h = c.value) ? void 0 : h.buildH5Ver) ||
                              "",
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
                            (I = null == (P = s.mpReporter) ? void 0 : P.sdk)
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
                      return e.abrupt("return", void i({ name: "ApplyIndex" }));
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
                              arguments.length > 0 && void 0 !== arguments[0]
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
                                  content: r.retmsg || "系统繁忙 请稍后再试",
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
                return t.openEmbeddedMp && t.openEmbeddedMp.apply(t, arguments);
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
