var e,
  t,
  n,
  r,
  i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var s = require("../../../common/vendor.js"),
  l = require("../../../stores/app/useMode.js"),
  d = require("../../../stores/analysis/useAnalysis.js");
require("../../../service/broker.js"),
  require("../../../service/sdk/lib/api.js");
var u = require("../../../service/sdk/platform/mp-weixin.js"),
  c = require("../../../utils/getPlatform.js"),
  p = require("../../../utils/index.js"),
  f = require("../../../service/mpIntercept.js"),
  m = require("../../../config/HalfScreenConst.js"),
  b = require("../../../model/biz/broker-chart/band-assist.js"),
  v = require("../../../model/biz/broker-chart/stock-signal.js"),
  g = require("../../../mixin/platforms/index.js"),
  h = require("../../../config/broker/11100/index.js"),
  k = c.getPlatform(),
  x = k.isMpPlugin,
  w = k.isZxg,
  _ =
    (null == (t = null == (e = h.brokerConfig.trade) ? void 0 : e.chartTool)
      ? void 0
      : t.title) || "",
  C =
    (null == (r = null == (n = h.brokerConfig.trade) ? void 0 : n.chartTool)
      ? void 0
      : r.disclaimer) || "",
  S = s.defineComponent({
    name: "HalfChart",
    sharedComponents: !0,
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    mixins: [g.pluginMixins],
    components: {
      DetailKline: function () {
        return "../../../bizs/analysis/components/detail-kline.js";
      },
      NetworkDetect: function () {
        return "../../../components/NetworkDetect/NetworkDetect.js";
      },
      Password: function () {
        return "../../../components/Password/Password.js";
      },
    },
    props: {
      embedded_stock: { type: String, default: "" },
      embedded_market: { type: String, default: "" },
      embedded_name: { type: String, default: "" },
      embedded_visible: { type: Boolean, default: !1 },
    },
    setup: function (e) {
      var t,
        n = null == (t = s.getCurrentInstance()) ? void 0 : t.proxy,
        r = l.useModeStore(),
        c = s.storeToRefs(r).simpleMode,
        g = d.useAnalysisStore().fetchIncomeDetail,
        h = s.ref(""),
        k = s.ref(p.isDarkTheme()),
        S = m.HALF_SCREEN_BAND_ASSIST_NORMAL_HEIGHT,
        y = b.useBandAssistVisibility({
          scode: e.embedded_stock,
          market: e.embedded_market,
        }),
        P = v.useStockSignalVisibility({
          scode: e.embedded_stock,
          market: e.embedded_market,
        }),
        j = y.isAvailable,
        q = y.isEffective,
        A = P.isAvailable,
        D = P.isEffective,
        M = s.ref(!1),
        T = s.ref(!1),
        I = s.ref(!1),
        H = s.ref(null),
        W = s.computed(function () {
          return { scode: e.embedded_stock, market: e.embedded_market };
        }),
        E = s.ref([]),
        $ = 0,
        G = s.computed(function () {
          return { height: S / 75 + "rem" };
        });
      function N() {
        var e,
          t,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
        if (w)
          try {
            null == (t = (e = u.sdk).setContainerHeight) ||
              t.call(e, { height: n });
          } catch (e) {}
      }
      var R = 0;
      function z() {
        return n;
      }
      if (((global.__embedded__mode = !0), x))
        try {
          (s.index.getGlobalWrapCtx = z),
            (s.index.getPluginContext = z),
            f.initMpPlugin(),
            (h.value = f.getTheme());
          var B = getCurrentPages();
          (null == B ? void 0 : B.length) >= 1 && f.updateStatData();
        } catch (e) {}
      function K() {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = o(
          i().mark(function t() {
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!T.value) {
                      if (((T.value = !0), p.getIsMpPluginComponent())) {
                        (s.index.getPluginContext = z),
                          (s.index.getGlobalWrapCtx = z);
                        try {
                          f.updateStatData();
                        } catch (e) {}
                      }
                      e.embedded_stock &&
                        ((M.value = !0),
                        (function () {
                          var e, t;
                          if (!I.value) {
                            I.value = !0;
                            var r = { passwordingTimeStamp: R };
                            try {
                              null == n || n.$emit("mounted", r);
                            } catch (e) {}
                            try {
                              null == (t = (e = u.sdk).onEmbeddedTradeReady) ||
                                t.call(e, r);
                            } catch (e) {}
                          }
                        })(),
                        o(
                          i().mark(function t() {
                            var n, r, o, s, l, d, u, c, p, f, m;
                            return i().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((n = e.embedded_stock),
                                        (r = e.embedded_market),
                                        n && r)
                                      ) {
                                        t.next = 3;
                                        break;
                                      }
                                      return t.abrupt(
                                        "return",
                                        void (E.value = [])
                                      );
                                    case 3:
                                      (o = ++$),
                                        (s = []),
                                        (l = 0),
                                        (d = null),
                                        (u = null),
                                        (t.prev = 5),
                                        (c = 0);
                                    case 7:
                                      if (!(c < 10)) {
                                        t.next = 23;
                                        break;
                                      }
                                      return (
                                        (p = a(
                                          a(
                                            {
                                              new_logic: "1",
                                              qry_type: "1",
                                              stock_code: n,
                                              trade_market: r,
                                              page_num: l,
                                              page_size: 100,
                                            },
                                            d ? { next_offset: d } : {}
                                          ),
                                          u ? { not_split: u } : {}
                                        )),
                                        (t.next = 11),
                                        g(p)
                                      );
                                    case 11:
                                      if (((f = t.sent), o === $)) {
                                        t.next = 14;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 14:
                                      if (
                                        (m =
                                          null == f
                                            ? void 0
                                            : f.all_trade_list) &&
                                        0 !== m.length
                                      ) {
                                        t.next = 17;
                                        break;
                                      }
                                      return t.abrupt("break", 23);
                                    case 17:
                                      if (
                                        (m.forEach(function (e) {
                                          s.push(
                                            a(
                                              a({}, e),
                                              {},
                                              { trade_type: +e.trade_type }
                                            )
                                          );
                                        }),
                                        (d = f.next_offset || null),
                                        (u = f.not_split || null),
                                        d)
                                      ) {
                                        t.next = 19;
                                        break;
                                      }
                                      return t.abrupt("break", 23);
                                    case 19:
                                      l += 1;
                                    case 20:
                                      c++, (t.next = 7);
                                      break;
                                    case 23:
                                      t.next = 30;
                                      break;
                                    case 25:
                                      if (
                                        ((t.prev = 25),
                                        (t.t0 = t.catch(5)),
                                        o === $)
                                      ) {
                                        t.next = 29;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 29:
                                      return t.abrupt(
                                        "return",
                                        void (E.value = [])
                                      );
                                    case 30:
                                      o === $ &&
                                        (E.value =
                                          s.length > 0
                                            ? [{ ones_trade_detail_list: s }]
                                            : []);
                                    case 31:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[5, 25]]
                            );
                          })
                        )());
                    }
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function U() {}
      function Z() {
        (M.value = !1),
          (T.value = !1),
          (I.value = !1),
          ($ += 1),
          (E.value = []);
      }
      function O() {
        var e;
        (e = Date.now()), (R = e);
      }
      function V() {
        var e;
        null == (e = null == n ? void 0 : n.passwordInstance) || e.close(),
          N(S);
      }
      return (
        s.watch(
          function () {
            return e.embedded_visible;
          },
          function (e) {
            e &&
              !T.value &&
              setTimeout(function () {
                K();
              }, 0);
          }
        ),
        s.onMounted(function () {
          s.index.$on("password:show", O),
            s.index.$on("password:hide", V),
            (null == window ? void 0 : window.__embedded_pageWillAppear)
              ? K()
              : s.index.$once("embedded:pageWillAppear", K),
            s.index.$on("embedded:pageWillDisAppear", U),
            p.getIsMpPluginComponent() && !T.value && e.embedded_visible && K(),
            w &&
              ((function () {
                var e = p.isDarkTheme();
                (k.value = e), (h.value = e ? "dark" : "light");
              })(),
              K(),
              N(S));
        }),
        s.onPageShow(function () {
          p.getIsMpPluginComponent() &&
            ((s.index.getPluginContext = z), (s.index.getGlobalWrapCtx = z));
        }),
        s.onBeforeUnmount(function () {
          s.index.$off("password:show", O),
            s.index.$off("password:hide", V),
            s.index.$off("embedded:pageWillAppear", K),
            s.index.$off("embedded:pageWillDisAppear", U),
            p.getIsMpPluginComponent() &&
              ((s.index.getPluginContext = null),
              (s.index.getGlobalWrapCtx = null));
        }),
        {
          theme: h,
          isDark: k,
          isMpPlugin: x,
          isZxg: w,
          simpleMode: c,
          normalHeight: S,
          isHalfChartAvailable: j,
          isBandAssistEffective: q,
          isStockSignalAvailable: A,
          isStockSignalEffective: D,
          isKlineReady: M,
          quote: H,
          chartOptions: W,
          tradeLists: E,
          containerStyle: G,
          toolTitle: _,
          disclaimerText: C,
          handleShow: K,
          handleHide: U,
          handleUnload: function () {
            var e;
            null == (e = null == n ? void 0 : n.passwordInstance) || e.close(),
              Z();
          },
          resetStore: Z,
          handleClose: function () {
            null == n || n.$emit("close");
          },
          halfScreenInit: function () {
            var e, t;
            null ==
              (t =
                null == (e = null == window ? void 0 : window.parent)
                  ? void 0
                  : e.postMessage) || t.call(e, { event: "mounted" }, "*");
          },
        }
      );
    },
    onShow: function () {
      var e = this;
      return o(
        i().mark(function t() {
          return i().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  e.halfScreenInit();
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )();
    },
    onHide: function () {
      this.handleHide();
    },
    onUnload: function () {
      this.handleUnload();
    },
  });
Array ||
  (
    s.resolveComponent("detail-kline") +
    s.resolveComponent("Password") +
    s.resolveComponent("NetworkDetect") +
    s.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/Password/Password.js";
      } +
      function () {
        return "../../../components/NetworkDetect/NetworkDetect.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var y = s._export_sfc(S, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return s.e(
        { a: e.rootFontSize, b: s.t(e.toolTitle), c: !e.isZxg },
        e.isZxg
          ? {}
          : {
              d: s.o(function () {
                return e.handleClose && e.handleClose.apply(e, arguments);
              }),
            },
        { e: e.isKlineReady },
        e.isKlineReady
          ? {
              f: s.sr("detailKline", "9e6ecf9d-1,9e6ecf9d-0"),
              g: s.p({
                options: e.chartOptions,
                quote: e.quote,
                "trade-lists": e.tradeLists,
                "is-dark": e.isDark,
                "band-assist-available": e.isHalfChartAvailable,
                "band-assist-subscribed": e.isBandAssistEffective,
                "stock-signal-available": e.isStockSignalAvailable,
                "stock-signal-subscribed": e.isStockSignalEffective,
              }),
            }
          : {},
        {
          h: s.t(e.disclaimerText),
          i: s.sr("#password-component", "9e6ecf9d-2,9e6ecf9d-0"),
          j: s.o(e.handleClose),
          k: s.o(e.handleClose),
          l: s.p({
            id: "password-component",
            mask: !1,
            "close-icon": !0,
            isWrapperVisible: e.embedded_visible,
            delayDuration: 350,
          }),
          m: e.isMpPlugin,
        },
        e.isMpPlugin
          ? {
              n: s.sr("#network-detect-component", "9e6ecf9d-3,9e6ecf9d-0"),
              o: s.p({
                id: "network-detect-component",
                "min-height": e.normalHeight,
              }),
            }
          : {},
        {
          p: e.theme,
          q: e.simpleMode,
          r: s.s(e.containerStyle),
          s: s.sr("#global-wrap", "9e6ecf9d-0"),
          t: s.p({
            id: "global-wrap",
            filePath: "/biz/broker-service/half-chart",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9e6ecf9d"],
]);
wx.createPage(y);
