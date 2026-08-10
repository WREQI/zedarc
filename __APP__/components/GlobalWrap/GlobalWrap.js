require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../utils/getPlatform.js"),
  r = require("../../service/stat/mp-weixin.js"),
  o = require("../../model/common/useGlobalLoading.js"),
  n = require("../../stores/app/useNavbar.js"),
  a = require("../../stores/app/useMode.js"),
  i = require("../../stores/app/useColorMode.js"),
  s = require("../../stores/user/useUserinfo.js"),
  u = require("../../service/mpIntercept.js"),
  l = require("../../service/aegis/platform/pageRouteTiming.js"),
  d = require("../../router/helper.js");
require("../../service/broker.js");
var c = require("../../model/report/usePrivatizationReport.js"),
  p = require("../../utils/index.js"),
  f = require("../../config/broker/11100/index.js"),
  v = {
    name: "GlobalWrap",
    props: {
      filePath: { type: String, default: "" },
      defaultTheme: { type: String, default: "" },
      defaultColorMode: { type: String, default: "" },
    },
    setup: function (v) {
      var g;
      o.useGlobalLoading();
      var m = e.getCurrentInstance().proxy,
        x = t.getPlatform(),
        h = x.isMpPlugin,
        M = x.isInIframe,
        P = x.isInZxgXcxH5,
        b = x.isLctXcx,
        C = x.isZxgXcx;
      h && u.initMpPlugin();
      var w = s.useUserinfoStore().forceGetUserInfo,
        j = e.storeToRefs(n.useNavbarStore()),
        q = j.externalNavBar,
        T = j.shownav,
        y = e.storeToRefs(a.useModeStore()).simpleMode,
        R = i.useColorModeStore();
      R.restoreColorMode();
      var _ = e.storeToRefs(R).colorMode,
        k = e.ref(""),
        N = e.ref(h || M),
        S = e.ref(P || b),
        G = e.ref(""),
        I = e.ref(!1),
        D = function () {
          (function () {
            var e,
              t = null == (e = d.getCurrentRoute()) ? void 0 : e.route;
            return !(
              p.getIsMpPluginComponent() &&
              "/asset/index" === v.filePath &&
              t &&
              !["pages/asset/index", "pages/index/trade"].includes(t)
            );
          })() &&
            (e.index.getGlobalWrapCtx = function () {
              return m;
            });
        };
      D(), (k.value = v.defaultTheme ? v.defaultTheme : u.getTheme());
      var B = v.defaultColorMode || u.getColorMode();
      ("greenRise" !== B && "redRise" !== B) || R.setColorMode(B);
      var U = getCurrentPages();
      if ((null == U ? void 0 : U.length) >= 1) {
        u.updateStatData();
        var W = r.stat.getRetPath("", U[U.length - 1]);
        "/trade/stock" === W ||
          d.isApplyPage(W) ||
          (r.stat.page(W || "", void 0, void 0, {
            syncMonitor: d.isApplyPage(W),
          }),
          "/asset/index" === W &&
            (null == (g = c.usePrivatizationReport()) || g.reportPv(W)));
      }
      function A() {
        var e;
        try {
          if (!h || I.value) return;
          I.value = !0;
          var t = getCurrentPages(),
            o = t && t[t.length - 1],
            n = o && o.route;
          if (n && n.includes("__plugin__")) {
            var a = n.match(/__plugin__\/[^/]+\/pages(\/.*)/);
            n = a ? a[1] : n;
          }
          if (!n || !G.value || "pages/index/trade" === n) return;
          var i = { type: "page", url: n, ftime: new Date() - G.value },
            s = (C ? "zxg_xcx" : "wzqxcx") + "_stay_time";
          null == (e = r.stat) || e.click(s, n, void 0, i, { forceReport: !0 });
        } catch (e) {
        } finally {
          I.value = !1;
        }
      }
      e.onHide(function () {
        A();
      }),
        e.onUnload(function () {
          A();
        }),
        e.onBeforeUnmount(function () {
          var t, o;
          e.index.getPluginContext && (e.index.getPluginContext = null),
            e.index.getGlobalWrapCtx && (e.index.getGlobalWrapCtx = null),
            null ==
              (o = null == (t = r.stat) ? void 0 : t.publishNotReportedQueue) ||
              o.call(t);
        }),
        e.onMounted(function () {
          var t, r, o;
          try {
            (G.value = new Date().getTime()),
              (null == m ? void 0 : m.$parent) &&
                (m.$parent.getGlobalWrapCtx = function () {
                  return m;
                });
          } catch (e) {}
          var n =
            null ==
            (r = null == (t = null == m ? void 0 : m.$route) ? void 0 : t.query)
              ? void 0
              : r.showSwitchToast;
          ["1", "2"].includes(n) &&
            (null == (o = e.index) ? void 0 : o.showToast) &&
            setTimeout(function () {
              e.index.showToast({
                title:
                  "1" === n
                    ? "交易券商切换为".concat(f.brokerConfig.base.name)
                    : "当前交易券商切换失败",
                icon: "none",
              });
            }, 1e3);
        }),
        e.onActivated(function () {
          D();
        }),
        e.onPageShow(function () {
          D(),
            l.pageRouteTimingEnd(),
            C &&
              ((k.value = v.defaultTheme ? v.defaultTheme : u.getTheme()),
              u.setSkinConfig(k.value)),
            u.resetGetCurrentPages(),
            ["/account/personal", "/asset/all"].includes(v.filePath) ||
              w()
                .then(function () {})
                .catch(function () {}),
            u.updateStatData();
        });
      var X = e.computed(function () {
        return m.$parent.embeddedMode;
      });
      return {
        theme: k,
        font: "",
        shownav: T,
        externalNavBar: q,
        simpleMode: y,
        colorMode: _,
        isPaddingBottomZero: N,
        isXcxH5: S,
        forceGetUserInfo: w,
        setGlobalWrapCtx: D,
        embeddedMode: X,
      };
    },
  };
Array ||
  (
    e.resolveComponent("Password") +
    e.resolveComponent("NavbarForMp") +
    e.resolveComponent("NetworkDetect")
  )(),
  Math ||
    (
      function () {
        return "../Password/Password.js";
      } +
      function () {
        return "../NavbarForMp/NavbarForMp.js";
      } +
      function () {
        return "../NetworkDetect/NetworkDetect.js";
      }
    )();
var g = e._export_sfc(v, [
  [
    "render",
    function (t, r, o, n, a, i) {
      return e.e(
        {
          a: e.sr("#password-component", "75d297be-0"),
          b: e.p({ id: "password-component" }),
          c: "/asset/index" !== o.filePath,
        },
        "/asset/index" !== o.filePath ? { d: e.p({ skin: n.theme }) } : {},
        {
          e: e.p({ id: "network-detect-component" }),
          f: e.n(
            n.externalNavBar
              ? "trade-container-root external-nav-padding-fix"
              : "trade-container-root"
          ),
          g: e.n(n.embeddedMode ? "trade-container-root--embedded" : ""),
          h: e.n(n.isXcxH5 ? "in-xcx-h5" : ""),
          i: n.theme,
          j: n.simpleMode,
          k: n.colorMode,
          l: n.isPaddingBottomZero,
          m: n.font,
        }
      );
    },
  ],
]);
wx.createComponent(g);
