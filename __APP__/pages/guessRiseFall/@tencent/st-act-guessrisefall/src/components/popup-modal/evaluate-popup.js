var e = require("../../../../../../../common/vendor.js"),
  t = {
    PENDANT: "pendant",
    RIGHT_GUIDE: "rightguide",
    MODULE: "module",
    BOTTOM_SUCTION: "bottomsuction",
  },
  a = {
    props: {
      pageid: { type: String, default: "" },
      mpEvaluateType: { type: String, default: "" },
      pendantImg: {
        type: String,
        default:
          "https://st.gtimg.com/design/cbbb71aeeab69561410ba9b6c1489458.png",
      },
      rightGuideImg: {
        type: String,
        default:
          "https://st.gtimg.com/design/1d877973016b97ae7f0176ae0da5d2e9.png",
      },
      isEvaluateGuideVisible: { type: Boolean, default: !0 },
      pendantSize: { type: String, default: "big" },
      btnColor: { type: String, default: "red" },
      moduleImg: {
        type: String,
        default:
          "https://st.gtimg.com/design/2c4cbadde2971fc3a9fafeb7c42b05ef.png",
      },
      bottomSuctionImg: {
        type: String,
        default:
          "https://st.gtimg.com/design/812044b6638bae4c0ddb69ac9a751395.png",
      },
    },
    emits: [
      "update:isEvaluateGuideVisible",
      "hideEvaluateGuide",
      "goEvaluate",
      "onwardEvaluate",
      "bottomEvaluate",
    ],
    data: function () {
      return { EVALUATETYPE: t };
    },
    watch: {
      mpEvaluateType: {
        handler: function (t) {
          t &&
            e.StockBridge.report("yy.mpevaluate.".concat(t, "_brow"), {
              yy_public_str1: this.pageid,
            });
        },
        immediate: !0,
      },
    },
    methods: {
      handleHide: function () {
        e.StockBridge.report("yy.mpevaluate.rightguide_hide_click", {
          yy_public_str1: this.pageid,
        }),
          this.$emit("update:isEvaluateGuideVisible", !1),
          this.$emit("hideEvaluateGuide");
      },
      handleGoEvaluate: function () {
        e.StockBridge.report("yy.mpevaluate.pendant_go_click", {
          yy_public_str1: this.pageid,
        }),
          this.$emit("goEvaluate");
      },
      handleModuleEvaluate: function () {
        e.StockBridge.report("yy.mpevaluate.module_go_click", {
          yy_public_str1: this.pageid,
        }),
          this.$emit("onwardEvaluate");
      },
      handleBottomEvaluate: function () {
        e.StockBridge.report("yy.mpevaluate.bottom_go_click", {
          yy_public_str1: this.pageid,
        }),
          this.$emit("bottomEvaluate");
      },
    },
  },
  i = e._export_sfc(a, [
    [
      "render",
      function (t, a, i, u, n, o) {
        return e.e(
          { a: i.mpEvaluateType === n.EVALUATETYPE.PENDANT },
          i.mpEvaluateType === n.EVALUATETYPE.PENDANT
            ? {
                b: e.n("evaluate-popup__pendant-btn--".concat(i.btnColor)),
                c: e.o(function () {
                  return (
                    o.handleGoEvaluate && o.handleGoEvaluate.apply(o, arguments)
                  );
                }, 3881),
                d: e.n("evaluate-popup__pendant--".concat(i.pendantSize)),
                e: "url(".concat(i.pendantImg, ")"),
              }
            : i.mpEvaluateType === n.EVALUATETYPE.RIGHT_GUIDE
            ? e.e(
                { g: i.isEvaluateGuideVisible },
                i.isEvaluateGuideVisible
                  ? {
                      h: i.rightGuideImg,
                      i: e.o(function () {
                        return o.handleHide && o.handleHide.apply(o, arguments);
                      }, 3882),
                      j: e.o(function () {}, 3883),
                    }
                  : {}
              )
            : i.mpEvaluateType === n.EVALUATETYPE.MODULE
            ? {
                l: e.o(function () {
                  return (
                    o.handleModuleEvaluate &&
                    o.handleModuleEvaluate.apply(o, arguments)
                  );
                }, 3884),
                m: "url(".concat(i.moduleImg, ")"),
              }
            : i.mpEvaluateType === n.EVALUATETYPE.BOTTOM_SUCTION
            ? {
                o: e.o(function () {
                  return (
                    o.handleBottomEvaluate &&
                    o.handleBottomEvaluate.apply(o, arguments)
                  );
                }, 3885),
                p: "url(".concat(i.bottomSuctionImg, ")"),
              }
            : {},
          {
            f: i.mpEvaluateType === n.EVALUATETYPE.RIGHT_GUIDE,
            k: i.mpEvaluateType === n.EVALUATETYPE.MODULE,
            n: i.mpEvaluateType === n.EVALUATETYPE.BOTTOM_SUCTION,
          }
        );
      },
    ],
    ["__scopeId", "data-v-524e888a"],
  ]);
wx.createComponent(i);
