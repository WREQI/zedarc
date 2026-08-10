require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "FooterBar",
    components: {
      AiBar: function () {
        return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js";
      },
    },
    props: {
      scene: { type: String, default: "" },
      contentId: { type: String, default: "" },
      aiReportPrefix: { type: String, default: "hq.hot_topic_detail" },
      aiReportInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isMp: { type: Boolean, default: !1 },
      fixed: { type: Boolean, default: !0 },
    },
    setup: function (t, n) {
      var r = n.emit,
        i = { light: "light", white: "light", black: "dark", dark: "dark" },
        o = ["mpwzq", "mpweapp"].includes("mpweapp"),
        a = {
          light:
            "https://st.gtimg.com/pcm/mp16i5d4_9d81e6b809b5af0a7467b7e70c6dbf2e.svg",
          dark: "https://st.gtimg.com/design/cd51328fb51ac3594b33b953e67518f5.svg",
        },
        l = e.ref(
          o
            ? i[e.wx$1.getStorageSync("user/skin") || "light"]
            : i[document.body.getAttribute("data-theme") || "light"]
        ),
        c = e.computed(function () {
          return a[l.value] || a.light;
        }),
        d = e.ref(null),
        u = e.ref(!1);
      function f() {
        var e,
          t = null == (e = d.value) ? void 0 : e.showSearchBarObj;
        return (null == t ? void 0 : t.value) || t || null;
      }
      return (
        e.onMounted(function () {
          e.StockBridge.report("hq.etfhotspotdetail.ask_yuanbao_entry_brow");
        }),
        {
          shareIcon: c,
          aiBarRef: d,
          isAiEntryShown: u,
          getAiBarQuestion: f,
          getAiBarTitle: function () {
            var e,
              t = null == (e = f()) ? void 0 : e.title;
            return null == t ? "" : String(t).trim();
          },
          handleShowAiEntry: function (e) {
            (u.value = !0), r("ai-show", e);
          },
          handleHideAiEntry: function () {
            (u.value = !1), r("ai-hide");
          },
          handleClickAiDialog: function (e, t) {
            r("ask", e, t);
          },
        }
      );
    },
  });
Array || e.resolveComponent("AiBar")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, i, o, a) {
      return e.e(
        { a: t.scene },
        t.scene
          ? {
              b: e.sr("aiBarRef", "fdf16d42-0"),
              c: e.o(t.handleShowAiEntry, 2441),
              d: e.o(t.handleHideAiEntry, 2442),
              e: e.o(t.handleClickAiDialog, 2443),
              f: e.p({
                scene: t.scene,
                "content-id": t.contentId,
                "report-prefix": t.aiReportPrefix,
                "report-info": t.aiReportInfo,
                "force-lite": !0,
              }),
            }
          : {},
        {
          g: t.shareIcon,
          h: t.isMp ? "share" : null,
          i: e.o(function (e) {
            return t.$emit("share");
          }, 2444),
          j: t.isAiEntryShown,
          k: e.n({ "footer-bar--fixed": t.fixed }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fdf16d42"],
]);
wx.createComponent(n);
