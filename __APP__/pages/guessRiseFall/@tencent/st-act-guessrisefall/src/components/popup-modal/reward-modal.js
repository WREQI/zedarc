var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "RewardModal",
    components: {
      rewardCore: function () {
        return "../../../../../../asyncCom/@tencent/st-reward-core/components/reward.js";
      },
      lottieCom: function () {
        return "../../../../../../common/lottie.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      visible: { type: Boolean, default: !1 },
      rewardDesc: { type: String, default: "" },
      rewardMemo: { type: String, default: "" },
      type: { type: String, default: "guessError" },
    },
    data: function () {
      return {
        isVisible: this.visible,
        popupConfig: null,
        showGiftLottie: !1,
        anim: null,
        lottieMp: null,
      };
    },
    computed: {
      activeType: function () {
        var e;
        return (null == (e = this.popupConfig) ? void 0 : e.type) || this.type;
      },
      activeRewardDesc: function () {
        var e;
        return (
          (null == (e = this.popupConfig) ? void 0 : e.rewardDesc) ||
          this.rewardDesc
        );
      },
      activeRewardMemo: function () {
        var e, t;
        return (
          (null == (e = this.popupConfig) ? void 0 : e.rewardMemo) ||
          (null == (t = this.popupConfig) ? void 0 : t.desc) ||
          this.rewardMemo
        );
      },
      rewardIsCash: function () {
        return (this.activeRewardDesc || "").includes("元");
      },
      showNewCustomer: function () {
        var e;
        return (
          "20001" === (null == (e = this.popupConfig) ? void 0 : e.rewardType)
        );
      },
      isGoldCoin: function () {
        return !this.activeRewardDesc.includes("元");
      },
      rewardNum: function () {
        return parseFloat(this.activeRewardDesc) || 0;
      },
      unit: function () {
        return this.activeRewardDesc
          ? this.activeRewardDesc.includes("元")
            ? "元"
            : "金币"
          : "";
      },
      aboutNum: function () {
        var e = parseInt(this.activeRewardDesc, 10);
        return e < 1e3
          ? "约等于0.1元"
          : "约等于".concat((e / 1e4).toFixed(1), "元");
      },
    },
    watch: {
      visible: function (e) {
        this.isVisible = e;
      },
    },
    beforeDestroy: function () {
      this.anim && (this.anim.destroy(), (this.anim = null));
    },
    methods: {
      showPopup: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this.popupConfig = t),
          (this.isVisible = !0),
          this.$emit("update:visible", !0),
          "reward" === t.type &&
            ((this.showGiftLottie = !1),
            this.$nextTick(function () {
              e.createLottie();
            }));
      },
      open: function () {
        (this.isVisible = !0), this.$emit("update:visible", !0);
      },
      close: function () {
        this.handleGuessErrorClose();
      },
      handleGuessErrorClose: function () {
        var e;
        (this.isVisible = !1),
          this.$emit("update:visible", !1),
          this.$emit("close"),
          "function" ==
            typeof (null == (e = this.popupConfig) ? void 0 : e.onConfirm) &&
            this.popupConfig.onConfirm(),
          (this.popupConfig = null);
      },
      handleWithdraw: function () {
        var e;
        (this.isVisible = !1),
          this.$emit("update:visible", !1),
          this.$emit("close"),
          this.destroyLottie(),
          "function" ==
            typeof (null == (e = this.popupConfig) ? void 0 : e.onConfirm) &&
            this.popupConfig.onConfirm(),
          (this.popupConfig = null);
      },
      handleContinue: function () {
        this.$emit("continue"), this.closeRewardPopup();
      },
      closeRewardPopup: function () {
        (this.isVisible = !1),
          this.$emit("update:visible", !1),
          this.$emit("close"),
          this.destroyLottie(),
          (this.popupConfig = null);
      },
      createLottie: function () {
        var t = this;
        this.destroyLottie(),
          this.$nextTick(function () {
            t.lottieMp &&
              e.wx$1
                .createSelectorQuery()
                .in(t)
                .select(".reward-modal__reward-lottie")
                .node(function (e) {
                  var i, o, n;
                  if (null == e ? void 0 : e.node) {
                    var r = e.node,
                      s =
                        (null ==
                        (n =
                          null ==
                          (o = null == (i = getApp()) ? void 0 : i.globalData)
                            ? void 0
                            : o.systemInfo)
                          ? void 0
                          : n.pixelRatio) || 1;
                    if (r.getContext("2d")) {
                      var a = r.getContext("2d");
                      (r.width = 600 * s),
                        (r.height = 502 * s),
                        t.lottieMp.setup(r),
                        (t.anim = t.lottieMp.loadAnimation({
                          loop: !0,
                          autoplay: !0,
                          path: "https://st.gtimg.com/design/38dbf308b4720b13ef40356358b65399.json",
                          rendererSettings: { context: a },
                        })),
                        t.anim.addEventListener("data_ready", function () {
                          t.showGiftLottie = !0;
                        });
                    }
                  }
                })
                .exec();
          });
      },
      destroyLottie: function () {
        this.anim && (this.anim.destroy(), (this.anim = null)),
          (this.showGiftLottie = !1);
      },
      getLottie: function (e) {
        (this.lottieMp = e),
          this.isVisible && "reward" === this.activeType && this.createLottie();
      },
    },
  };
Array ||
  (e.resolveComponent("lottieCom") + e.resolveComponent("reward-core"))();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, o, n, r, s) {
      return e.e(
        { a: r.isVisible },
        r.isVisible
          ? e.e(
              { b: "reward" === s.activeType },
              "reward" === s.activeType
                ? e.e(
                    {
                      c: e.o(s.getLottie, 3838),
                      d: r.showGiftLottie,
                      e: e.p({ "reward-desc": s.activeRewardDesc }),
                      f: e.p({ "reward-desc": s.activeRewardDesc }),
                      g: s.rewardIsCash,
                    },
                    (s.rewardIsCash, {}),
                    { h: s.showNewCustomer },
                    s.showNewCustomer
                      ? {
                          i: e.o(function () {
                            return (
                              s.handleContinue &&
                              s.handleContinue.apply(s, arguments)
                            );
                          }, 3839),
                        }
                      : {
                          j: e.o(function () {
                            return (
                              s.handleWithdraw &&
                              s.handleWithdraw.apply(s, arguments)
                            );
                          }, 3840),
                          k: e.o(function () {
                            return (
                              s.handleContinue &&
                              s.handleContinue.apply(s, arguments)
                            );
                          }, 3841),
                        },
                    {
                      l: e.o(function () {
                        return (
                          s.closeRewardPopup &&
                          s.closeRewardPopup.apply(s, arguments)
                        );
                      }, 3842),
                    }
                  )
                : "guessError" !== s.activeType && r.popupConfig
                ? e.e(
                    {
                      n: e.o(function () {
                        return (
                          s.closeRewardPopup &&
                          s.closeRewardPopup.apply(s, arguments)
                        );
                      }, 3843),
                      o: r.popupConfig.title,
                    },
                    r.popupConfig.title ? { p: e.t(r.popupConfig.title) } : {},
                    { q: r.popupConfig.desc },
                    r.popupConfig.desc
                      ? {
                          r: r.popupConfig.desc,
                          s: r.popupConfig.title ? "" : 1,
                        }
                      : {},
                    {
                      t: e.o(function () {
                        return (
                          s.closeRewardPopup &&
                          s.closeRewardPopup.apply(s, arguments)
                        );
                      }, 3844),
                    }
                  )
                : e.e(
                    { v: "guessError" === s.activeType },
                    "guessError" === s.activeType
                      ? e.e(
                          {
                            w: e.t(parseFloat(s.activeRewardDesc)),
                            x: !s.isGoldCoin,
                          },
                          s.isGoldCoin ? {} : { y: e.t(s.unit) },
                          {
                            z: "金币" !== s.unit ? 1 : "",
                            A: "金币" === s.unit,
                          },
                          "金币" === s.unit ? { B: e.t(s.aboutNum) } : {},
                          {
                            C: e.t(s.activeRewardMemo),
                            D: e.o(function () {
                              return (
                                s.handleGuessErrorClose &&
                                s.handleGuessErrorClose.apply(s, arguments)
                              );
                            }, 3845),
                          }
                        )
                      : {
                          E: e.t(parseFloat(s.activeRewardDesc)),
                          F: e.t(s.activeRewardMemo),
                          G: e.o(function () {
                            return (
                              s.handleGuessErrorClose &&
                              s.handleGuessErrorClose.apply(s, arguments)
                            );
                          }, 3846),
                        }
                  ),
              {
                m: "guessError" !== s.activeType && r.popupConfig,
                H: e.o(function () {}, 3847),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-77310ab3"],
]);
wx.createComponent(i);
