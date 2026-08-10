var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../../@babel/runtime/helpers/toConsumableArray"),
  o = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var l = require("../../../common/vendor.js"),
  a = require("../../../service/cookie/mp-weixin.js"),
  u = require("../../../utils/getPlatform.js"),
  s = require("../../../config/enum.js");
require("../../../service/broker.js");
var d = require("../../../utils/index.js"),
  c = require("../../../service/navigateMp.js"),
  g = require("../../../stores/user/useUserinfo.js"),
  p = require("../../../service/aegis/platform/not-wujie.js"),
  f = require("../../../service/mpIntercept.js"),
  v = require("../../../config/key.js"),
  m = require("../../../stores/app/useMode.js"),
  b = require("../../../config/mpConfig.js"),
  h = require("../../../config/broker/11100/index.js"),
  x = {
    setup: function () {
      var e = u.getPlatform().isMpPlugin;
      return (
        l.onPageShow(function () {
          e && f.resetGetCurrentPages();
        }),
        { isMpPlugin: e }
      );
    },
    data: function () {
      return {
        url: "",
        frompage: "",
        isEmbeddedMiniProgram: u.getPlatform().isEmbeddedMiniProgram,
        theme: "light",
      };
    },
    methods: {
      initWebview: function (u) {
        var s = this;
        return t(
          e().mark(function t() {
            var g,
              f,
              b,
              x,
              k,
              q,
              w,
              M,
              P,
              y,
              _,
              C,
              E,
              S,
              j,
              T,
              U,
              I,
              R,
              O,
              z,
              A,
              W,
              B,
              L,
              N,
              D,
              V,
              $,
              G,
              H,
              J,
              F,
              Z,
              K,
              Q,
              X,
              Y,
              ee;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((S = u.url ? decodeURIComponent(u.url) : ""),
                        (j = u.relogin),
                        (T = void 0 === j ? 0 : j),
                        (U = d.getMpFromSource()),
                        S.startsWith("https%3A") && (S = decodeURIComponent(S)),
                        !S)
                      ) {
                        e.next = 41;
                        break;
                      }
                      if (
                        ((I = S.split("#")),
                        (R = o(I, 2)),
                        (O = R[0]),
                        (z = R[1]),
                        (A = new a.AdapterCookie()),
                        (B = {}),
                        (L = ""),
                        !s.isMpPlugin)
                      ) {
                        e.next = 15;
                        break;
                      }
                      if ("1" !== T) {
                        e.next = 11;
                        break;
                      }
                      if (
                        ((N = +l.index.getStorageSync(v.RELOGIN_WEBVIEW) || 0),
                        !((N += 1) >= 3))
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void l.index.showModal({
                          content: "网络繁忙 请稍后再试",
                          showCancel: !1,
                          confirmText: "我知道了",
                          success: function () {
                            l.index.removeStorageSync(v.RELOGIN_WEBVIEW),
                              l.index.reLaunch({ url: "/pages/index/trade" });
                          },
                        })
                      );
                    case 10:
                      l.index.setStorageSync(v.RELOGIN_WEBVIEW, N);
                    case 11:
                      (D =
                        (null ==
                        (f =
                          null == (g = requireMiniProgram().main2Plugin())
                            ? void 0
                            : g.getBrokerInfo)
                          ? void 0
                          : f.call(g)) || {}),
                        (W =
                          (null ==
                          (x =
                            null ==
                            (b = null == D ? void 0 : D.highestPriorityDealer)
                              ? void 0
                              : b.value)
                            ? void 0
                            : x.buildH5Ver) || ""),
                        (L =
                          (null ==
                          (q =
                            null ==
                            (k = null == D ? void 0 : D.highestPriorityDealer)
                              ? void 0
                              : k.value)
                            ? void 0
                            : q.cdnDomainType) || ""),
                        (e.next = 16);
                      break;
                    case 15:
                      W =
                        (null ==
                        (M =
                          null == (w = global.getVm()) ? void 0 : w.globalData)
                          ? void 0
                          : M.buildH5Ver) || "";
                    case 16:
                      if (
                        ![h.brokerConfig.base.domain]
                          .concat(i(h.brokerConfig.base.backupDomain))
                          .some(function (e) {
                            return O.indexOf(e) > -1;
                          })
                      ) {
                        e.next = 37;
                        break;
                      }
                      if (!s.isMpPlugin) {
                        e.next = 36;
                        break;
                      }
                      if (
                        ((e.prev = 18),
                        (e.t0 =
                          s.$login && "function" == typeof s.$login.login),
                        !e.t0)
                      ) {
                        e.next = 23;
                        break;
                      }
                      return (e.next = 23), s.$login.login();
                    case 23:
                      return (
                        (e.next = 25),
                        null ==
                        (_ =
                          null ==
                          (y =
                            null == (P = requireMiniProgram())
                              ? void 0
                              : P.main2Plugin)
                            ? void 0
                            : y.call(P))
                          ? void 0
                          : _.getCode(h.brokerConfig.base.code)
                      );
                    case 25:
                      (V = e.sent),
                        ($ = (null == V ? void 0 : V.skeySign) || ""),
                        (G = (null == V ? void 0 : V.loginCode) || ""),
                        (B = {
                          login_code: G,
                          skey_sign: $,
                          relogin: 0,
                          use_code: G && $ ? "1" : "0",
                        }),
                        (e.next = 34);
                      break;
                    case 31:
                      (e.prev = 31),
                        (e.t1 = e.catch(18)),
                        p.aegisReporter.reportEvent(
                          "webview_login_get_code_failed_plugin",
                          { ext2: JSON.stringify(e.t1 || {}) }
                        );
                    case 34:
                      e.next = 37;
                      break;
                    case 36:
                      B = [
                        "wzq_qluin",
                        "qluin",
                        "wzq_qlskey",
                        "qlskey",
                        "wzq_qlappid",
                        "qlappid",
                        "account_mode",
                      ].reduce(function (e, i) {
                        return r(r({}, e), {}, n({}, i, A.get(i)));
                      }, {});
                    case 37:
                      (H = (
                        null == (C = l.wx$1) ? void 0 : C.getEnterOptionsSync
                      )
                        ? null == (E = l.wx$1.getEnterOptionsSync())
                          ? void 0
                          : E.scene
                        : ""),
                        (J = m.useModeStore()),
                        (F = J.simpleMode),
                        (Z = l.dist.urltools.make(
                          O,
                          r(
                            r(
                              {
                                font: "west",
                                from: s.isMpPlugin
                                  ? "main-miniapp"
                                  : "broker-miniapp",
                                from_zxgxcx: "zxgxcx" === U ? "1" : "0",
                                _buildh5ver: W,
                                cdn_domain_type: L,
                                lite:
                                  (s.isMpPlugin && "zxgxcx" !== U) ||
                                  (!s.isMpPlugin && F)
                                    ? "1"
                                    : "0",
                                xcx_scene: H,
                                t: s.theme,
                              },
                              B
                            ),
                            u.frompage ? { frompage: u.frompage } : {}
                          )
                        )),
                        (s.url = [Z, z].join("#")),
                        (e.next = 45);
                      break;
                    case 41:
                      if (
                        ((S = h.brokerConfig.base.mpIndex || ""),
                        (S =
                          "https://wzq.tenpay.com/mm/broker-index?url=".concat(
                            encodeURIComponent(S)
                          )))
                      ) {
                        e.next = 43;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        s.isMpPlugin
                          ? void l.index.showModal({
                              content: "url为空，请检查~",
                              showCancel: !1,
                              confirmText: "返回上一页",
                              success: function (e) {
                                e.confirm && s.$router.back();
                              },
                            })
                          : void l.index.showModal({
                              content: "暂不支持小程序开户/交易，请前往".concat(
                                "zxgxcx" === U ? "自选股" : "微证券",
                                "小程序使用"
                              ),
                              showCancel: !1,
                              confirmText: "确定",
                              success: function (e) {
                                e.confirm && c.navigateToZxgMiniProgram();
                              },
                            })
                      );
                    case 43:
                      (K = S.split("#")),
                        (Q = o(K, 2)),
                        (X = Q[0]),
                        (Y = Q[1]),
                        (ee = l.dist.urltools.make(
                          X,
                          r({}, u.frompage ? { frompage: u.frompage } : {})
                        )),
                        (s.url = [ee, Y].join("#"));
                    case 45:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[18, 31]]
            );
          })
        )();
      },
      handleError: function (e) {
        var n, r;
        p.aegisReporter.reportEvent(
          this.isMpPlugin
            ? "webview_load_failed_plugin"
            : "webview_load_failed",
          { ext2: JSON.stringify(e || {}) }
        ),
          this.isMpPlugin &&
            "web-view load failed due to not in domain list" ===
              (null == (n = null == e ? void 0 : e.detail)
                ? void 0
                : n.errMsg) &&
            c.redirectTo({
              url: "/pages/forbidden/webview?url="
                .concat(encodeURIComponent(this.url), "&errUrl=")
                .concat(
                  encodeURIComponent(
                    (null == (r = null == e ? void 0 : e.detail)
                      ? void 0
                      : r.url) || ""
                  )
                ),
              linkType: b.linkTypeMap.plugin2MainMp,
            });
      },
      handleMessage: function (e) {
        var n,
          r,
          i,
          o,
          t,
          u,
          s,
          d,
          c =
            (null == (n = null == e ? void 0 : e.mp) ? void 0 : n.detail) ||
            (null == e ? void 0 : e.detail);
        if (
          this.isMpPlugin &&
          (null == (r = null == c ? void 0 : c.data) ? void 0 : r.length) > 0
        ) {
          var g = c.data
              .filter(function (e) {
                var n;
                return (
                  "updateCookie" === (null == e ? void 0 : e.event) &&
                  (null == (n = null == e ? void 0 : e.data)
                    ? void 0
                    : n.dealer_code) === h.brokerConfig.base.code
                );
              })
              .sort(function (e, n) {
                var r, i;
                return (
                  ((null == (r = null == n ? void 0 : n.data)
                    ? void 0
                    : r.time) || 0) -
                  ((null == (i = null == e ? void 0 : e.data)
                    ? void 0
                    : i.time) || 0)
                );
              })[0],
            f = new a.AdapterCookie(),
            v = f.get("fe_now"),
            m = f.get("wzq_qluin");
          if (
            v &&
            (null == g ? void 0 : g.time) > +v &&
            m ===
              (null == (i = null == g ? void 0 : g.data) ? void 0 : i.wzq_qluin)
          ) {
            var b = l.pick(g.data, ["qlskey", "wzq_qlskey"]),
              x = Object.keys(b)
                .map(function (e) {
                  return "".concat(e, "=").concat(b[e]);
                })
                .join(",");
            f.setCookieFromHeader(x);
          }
          var k = c.data.filter(function (e) {
            return (
              "invalidateBrokerUserSetting" === (null == e ? void 0 : e.event)
            );
          });
          if (k.length > 0)
            try {
              var q = k[k.length - 1],
                w =
                  (null == (o = null == q ? void 0 : q.data)
                    ? void 0
                    : o.brokerCode) || h.brokerConfig.base.code;
              null ==
                (d =
                  null ==
                  (s =
                    null ==
                    (u =
                      null == (t = requireMiniProgram())
                        ? void 0
                        : t.main2Plugin)
                      ? void 0
                      : u.call(t))
                    ? void 0
                    : s.clearBrokerUserSetting) || d.call(s, w);
            } catch (e) {
              p.aegisReporter.reportEvent(
                "clearBrokerUserSetting-from-webview-fail",
                { ext2: JSON.stringify(e || {}) }
              );
            }
        }
      },
    },
    onLoad: function (e) {
      ((this.theme = f.getTheme()),
      this.isMpPlugin && (f.initMpPlugin(), f.setSkinConfig(this.theme)),
      !e.url && this.isEmbeddedMiniProgram)
        ? (0, g.useUserinfoStore().getUserInfo)().then(function (e) {
            var n = e.userstate;
            [s.USERSTATE.HASBUNDLE, s.USERSTATE.HASACCOUNT].indexOf(n) > -1
              ? l.index.reLaunch({ url: "/pages/asset/index" })
              : l.index.reLaunch({ url: "/pages/account/bind" });
          })
        : this.initWebview(e);
    },
  },
  k = l._export_sfc(x, [
    [
      "render",
      function (e, n, r, i, o, t) {
        return l.e(
          { a: o.url },
          o.url
            ? l.e(
                { b: i.isMpPlugin },
                i.isMpPlugin
                  ? {
                      c: o.url,
                      d: l.o(function () {
                        return (
                          t.handleError && t.handleError.apply(t, arguments)
                        );
                      }),
                      e: l.o(function () {
                        return (
                          t.handleMessage && t.handleMessage.apply(t, arguments)
                        );
                      }),
                    }
                  : {
                      f: o.url,
                      g: l.o(function () {
                        return (
                          t.handleError && t.handleError.apply(t, arguments)
                        );
                      }),
                      h: l.o(function () {
                        return (
                          t.handleMessage && t.handleMessage.apply(t, arguments)
                        );
                      }),
                    }
              )
            : {}
        );
      },
    ],
  ]);
wx.createPage(k);
