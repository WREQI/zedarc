require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../common/vendor.js"),
  n = require("../../mixins/guess-page-mixin.js"),
  e = {
    account: {
      ANIMATION_PATH:
        "https://st.gtimg.com/design/e02c4b43e003e9c1b810a573ec1b3106.json",
      CANVAS_WIDTH: 210,
      CANVAS_HEIGHT: 160,
      STAT: { SENTIMENT: "IQ000p000a040" },
      JUMP_URL: "https://zqact.tenpay.com/activity/yxzt/casekjpdecj-qygz_lq/",
    },
    follow: {
      ANIMATION_PATH:
        "https://st.gtimg.com/design/cce8c550d45ed52a157771f4951609ce.json",
      CANVAS_WIDTH: 144,
      CANVAS_HEIGHT: 132,
      GUESS_ETFSTAT: {
        0: { GUESS: "IVs00p000a040", REWARD: "Izg00p000a040" },
        1: { GUESS: "IYi00p000b010", REWARD: "I0l00p000b010" },
      },
      PR_TEXT: { 1: "7天", 2: "30天", 3: "90天", 4: "180天" },
    },
  },
  o = {
    name: "GuideModal",
    components: {
      BaseModal: function () {
        return "./base-modal.js";
      },
      lottieCom: function () {
        return "../../../../../../common/lottie.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      type: {
        type: String,
        default: "account",
        validator: function (t) {
          return ["account", "follow"].includes(t);
        },
      },
      modalInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      followInfo: {
        type: Object,
        default: function () {
          return {
            profit_rate: "",
            win_percent: "",
            pr_type: 1,
            abt_info: { data: [{ etfid: "" }] },
            hasAccount: !0,
            ETFIDS: {},
          };
        },
      },
    },
    data: function () {
      return {
        num: "follow" === this.type ? "0.00" : 0,
        showContent: !1,
        timer: null,
        anim: null,
        mplottie: null,
        animInstance: null,
      };
    },
    computed: {
      config: function () {
        return e[this.type];
      },
      titleText: function () {
        return "公众号";
      },
      canvasStyle: function () {
        return "width: "
          .concat(this.config.CANVAS_WIDTH, "rpx;height: ")
          .concat(this.config.CANVAS_HEIGHT, "rpx;");
      },
      formattedNum: function () {
        if ("account" === this.type) {
          var t = this.num;
          return t >= 10 ? String(t) : "0".concat(t);
        }
        return parseFloat(this.num) >= 10 ? this.num : "0".concat(this.num);
      },
      btnText: function () {
        return "account" === this.type
          ? "点击开户"
          : this.hasAccount
          ? "一键跟投相关指数"
          : "闪电开户去实战";
      },
      hasAccount: function () {
        var t, n;
        return (
          null == (n = null == (t = this.followInfo) ? void 0 : t.hasAccount) ||
          n
        );
      },
      prTypeText: function () {
        var t, n, e;
        return (
          (null == (e = this.config.PR_TEXT)
            ? void 0
            : e[
                null != (n = null == (t = this.followInfo) ? void 0 : t.pr_type)
                  ? n
                  : 1
              ]) || ""
        );
      },
      prRate: function () {
        var t;
        return (null == (t = this.followInfo) ? void 0 : t.profit_rate) || "";
      },
      abtInfo: function () {
        var t, n;
        return null == (n = null == (t = this.followInfo) ? void 0 : t.abt_info)
          ? void 0
          : n.data[0];
      },
    },
    mounted: function () {
      "account" === this.type
        ? t.StockBridge.report("yy.czdupgrade.sentimentpopup_brow", {
            fchannel_id_fm_i: this.config.STAT.SENTIMENT,
          })
        : t.StockBridge.report("yy.czdupgrade.akeytofollow.brow"),
        this.initAnimation();
    },
    beforeDestroy: function () {
      this.clearTimer(), this.destroyAnimations();
    },
    methods: {
      jumpToUrl: function (n) {
        n &&
          (/^qqstock:\/\//i.test(n)
            ? (location.href = n)
            : t.StockBridge.locationTo(n, "href"));
      },
      clearTimer: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null));
      },
      destroyAnimations: function () {
        this.anim && (this.anim.destroy(), (this.anim = null)),
          this.animInstance &&
            (this.animInstance.destroy(), (this.animInstance = null));
      },
      handleLottieReady: function (t) {
        (this.mplottie = t), this.createMpLottie();
      },
      createMpLottie: function () {
        var e = this,
          o = t.wx$1.createSelectorQuery().in(this),
          i = ".dapan-lottie-animate";
        o.select(i) &&
          o
            .select(i)
            .node(function (t) {
              var o, i, a;
              if (t.node) {
                var c = t.node,
                  r =
                    (null ==
                    (a =
                      null ==
                      (i = null == (o = getApp()) ? void 0 : o.globalData)
                        ? void 0
                        : i.systemInfo)
                      ? void 0
                      : a.pixelRatio) || 1;
                if (c.getContext("2d")) {
                  var l = c.getContext("2d");
                  (c.width = e.config.CANVAS_WIDTH * r),
                    (c.height = e.config.CANVAS_HEIGHT * r),
                    e.mplottie.setup(c),
                    (e.animInstance = e.mplottie.loadAnimation({
                      loop: !1,
                      autoplay: !0,
                      path: e.config.ANIMATION_PATH,
                      rendererSettings: { context: l },
                    })),
                    e.animInstance.setSpeed(1),
                    e.animInstance.addEventListener(
                      "config_ready",
                      function () {
                        (e.showContent = !0),
                          "follow" === e.type && n.reportPopupViewed();
                      }
                    );
                }
              }
            })
            .exec();
      },
      initAnimation: function () {
        "account" === this.type
          ? this.initAccountAnimation()
          : this.initFollowAnimation();
      },
      initAccountAnimation: function () {
        var t = this,
          n = Math.max(0, Number(this.modalInfo.winPercent) || 0);
        if (n <= 0) this.num = 0;
        else {
          var e = n / 20;
          (this.num = 0),
            (this.timer = setInterval(function () {
              var o = t.num + e;
              if (o >= n) return t.clearTimer(), void (t.num = n);
              t.num = Math.floor(o);
            }, 50));
        }
      },
      initFollowAnimation: function () {
        var t,
          n = this,
          e = parseFloat(
            (null == (t = this.followInfo) ? void 0 : t.win_percent) || "0"
          );
        if (e <= 0) this.num = "0.00";
        else {
          var o = parseFloat((e / 30).toFixed(2));
          o <= 0
            ? (this.num = e.toFixed(2))
            : (this.timer = setInterval(function () {
                var t = parseFloat(n.num) + o;
                if (t >= e) return n.clearTimer(), void (n.num = e.toFixed(2));
                n.num = t.toFixed(2);
              }, 50));
        }
      },
      handleBtnClick: function () {
        "account" === this.type ? this.handleReceive() : this.handleTrade();
      },
      handleReceive: function () {
        var n = this.config.STAT.SENTIMENT,
          e = { broker: "10800", stat: n };
        t.StockBridge.report("yy.czdupgrade.sentimentpopup_btn_click", {
          fchannel_id_fm_i: n,
        }),
          t.sdkBridge.navToApplyStep(e);
      },
      handleTrade: function () {
        var n,
          e,
          o = this.config.GUESS_ETFSTAT[0].GUESS;
        t.StockBridge.report("yy.czdupgrade.akeytofollow.click", {
          fchannel_id_fm_i: o,
        });
        var i = "";
        this.hasAccount
          ? (i =
              (null == (e = null == (n = this.followInfo) ? void 0 : n.ETFIDS)
                ? void 0
                : e.wzq) || "") &&
            setTimeout(function () {
              t.StockBridge.openExtraWebview(i);
            }, 300)
          : t.sdkBridge.navToApplyIndex({ stat: o }).catch(function (n) {
              t.StockBridge.aegisReportEvent(
                "MONITOR-ACT-GUESS-APPLY-SDK-ERROR",
                { ext2: n ? JSON.stringify(n) : "" }
              );
            }),
          this.$emit("close");
      },
      handleClose: function () {
        this.$emit("close");
      },
    },
  };
Array || (t.resolveComponent("lottie-com") + t.resolveComponent("BaseModal"))();
var i = t._export_sfc(o, [
  [
    "render",
    function (n, e, o, i, a, c) {
      return t.e(
        { a: t.t(c.titleText), b: "account" === o.type },
        "account" === o.type
          ? {
              c: t.o(c.handleLottieReady, 3873),
              d: t.s(c.canvasStyle),
              e: t.t(c.formattedNum),
              f: t.t(o.modalInfo.stockName),
              g: a.showContent,
            }
          : {},
        { h: "follow" === o.type },
        "follow" === o.type
          ? {
              i: t.o(c.handleLottieReady, 3874),
              j: t.s(c.canvasStyle),
              k: t.t(c.formattedNum),
              l: a.showContent,
            }
          : {},
        {
          m: t.t(c.btnText),
          n: "follow" === o.type ? 1 : "",
          o: t.o(function () {
            return c.handleBtnClick && c.handleBtnClick.apply(c, arguments);
          }, 3875),
          p: "account" === o.type,
        },
        "account" === o.type ? {} : { q: t.t(c.prTypeText), r: t.t(c.prRate) },
        {
          s: t.n("guide-modal__tip--".concat(o.type)),
          t: t.o(function (t) {
            return n.$emit("update:visible", t);
          }, 3876),
          v: t.o(c.handleClose, 3877),
          w: t.p({
            visible: o.visible,
            "mask-closable": !1,
            "close-position": "outer",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7c66bf5c"],
]);
wx.createComponent(i);
