var t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  h = function (t, e, a) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  d = function (t, n) {
    for (var a in n || (n = {})) s.call(n, a) && h(t, a, n[a]);
    if (i) {
      var o,
        d = e(i(n));
      try {
        for (d.s(); !(o = d.n()).done; ) {
          a = o.value;
          r.call(n, a) && h(t, a, n[a]);
        }
      } catch (t) {
        d.e(t);
      } finally {
        d.f();
      }
    }
    return t;
  },
  c = function (t, e, n) {
    return new Promise(function (a, o) {
      var i = function (t) {
          try {
            r(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            r(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(i, s);
        };
      r((n = n.apply(t, e)).next());
    });
  },
  l = require("../../../../../../../../common/vendor.js"),
  u = require("../../../mixins/guess-page-mixin.js"),
  p = require("../../../../../st-reward-core/utils/rewardTypeUtils.js"),
  g = ["上证指数", "个股", "周冠军", "月冠军"],
  m = { 3: 0, 7: 1, 5: 2, 6: 3 },
  w = ["dapan", "gegu", "weekChampion", "monthChampion"],
  f = [
    {
      className: "lottie-modal__dapan-lottie",
      jsonPath:
        "https://st.gtimg.com/design/bf6c749fa73bdcc229bef2ae8b72a8cb.json",
    },
    {
      className: "lottie-modal__gegu-lottie",
      jsonPath:
        "https://st.gtimg.com/design/39374e3ace8ebb44433cefa6f569988c.json",
    },
    {
      className: "lottie-modal__week-lottie",
      jsonPath:
        "https://st.gtimg.com/design/2f7d07589dd4d57bf4b0e2bac0adc964.json",
    },
    {
      className: "lottie-modal__month-lottie",
      jsonPath:
        "https://st.gtimg.com/design/d1c0d5e433fb7f3a37c0e716323ba7c9.json",
    },
  ],
  I = {
    components: {
      lottieCom: function () {
        return "../../../../../../../common/lottie.js";
      },
    },
    mixins: [
      (function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.hasLottie,
          n = void 0 !== e && e,
          i = n
            ? {
                cntIndex: 0,
                lottieLock: !1,
                dapanResultType: "guessRightHasHelp",
                dapanContent: null,
                dapanShowDate: !1,
                dapanShowRewardBanner: !1,
                dapanMsgShow: !1,
                dapanShowRewardBox: !1,
                dapanShowText1: !1,
                dapanShowRewardList: !1,
                dapanHelpList: [],
                geguShowDate: !1,
                geguShowList: !1,
                geguShowRewardBanner: !1,
                geguShowRewardBox: !1,
                geguMsgShow: !1,
                geguContent: null,
                geguList: [],
                geguResult: "guessRightHasHelp",
                weekChampionBannerShow: !1,
                weekChampionRewardShow: !1,
                weekChampionContent: { value: "", unit: "" },
                monthChampionBannerShow: !1,
                monthChampionRewardShow: !1,
                monthChampionContent: { value: "", unit: "" },
                setIntervalId: 0,
              }
            : {};
        return {
          data: function () {
            return d(
              { stepIndex: 0, modalType: "", closeShow: !1, modalBtnShow: !1 },
              i
            );
          },
          beforeDestroy: function () {
            this.setIntervalId &&
              (clearInterval(this.setIntervalId), (this.setIntervalId = 0)),
              "function" == typeof this.clearLottie && this.clearLottie();
          },
          computed: {
            baseBtnText: function () {
              var t = this.rewardList.length - this.stepIndex - 1;
              return t > 0 ? "查看结果(".concat(t, ")") : "我知道了";
            },
          },
          methods: {
            getLottieId: function (t) {
              var e,
                n,
                a = void 0 !== t ? t : this.stepIndex,
                o =
                  null == (n = null == (e = this.rewardList) ? void 0 : e[a])
                    ? void 0
                    : n.type;
              return m[o];
            },
            getModalType: function (t) {
              return w[t];
            },
            getModalTypeByRewardType: function () {
              var t,
                e,
                n =
                  null == (t = this.rewardList[this.stepIndex])
                    ? void 0
                    : t.type;
              return null == (e = u.REWARD_CONFIG[n]) ? void 0 : e.typeName;
            },
            sendClickReport: function (t, e) {
              l.StockBridge.report(t, e);
            },
            baseCloseModal: function () {
              var t,
                e = n
                  ? g[this.getLottieId()]
                  : null == (t = this.guessContent)
                  ? void 0
                  : t.name;
              this.sendClickReport("yy.czdupgrade.lottie_modal_close.click", {
                yy_public_str1: "".concat(e, "_").concat(this.stepIndex + 1),
              }),
                this.$emit("close");
            },
            baseLookNextReward: function () {
              var t,
                e = n
                  ? g[this.getLottieId()]
                  : null == (t = this.guessContent)
                  ? void 0
                  : t.name;
              this.sendClickReport("yy.czdupgrade.lottie_modal_btn.click", {
                yy_public_str1: e,
              });
            },
            playAnimation: function (t, e) {
              return new Promise(function (n) {
                t.playSegments(e, !0);
                var a = t.addEventListener("complete", function () {
                  n(), a();
                });
              });
            },
            textSplit: function (t, e, n, a) {
              if (t) {
                var o = t.split(":");
                if (!(o.length < 3)) {
                  var i = o[0],
                    s = "1" === o[1] ? "看涨" : "看跌",
                    r = "1" === o[2] ? n : a;
                  return "name" === e
                    ? "".concat(u.truncateByByteLength(i, 11)).concat(s)
                    : "url" === e
                    ? r
                    : void 0;
                }
              }
            },
            dapanLoop: function () {
              (this.cntIndex = 0),
                this.setIntervalId &&
                  (clearInterval(this.setIntervalId), (this.setIntervalId = 0)),
                (this.lottieLock = !1);
            },
            dapanShowContent: function () {
              var t = this,
                e = {
                  guessRightHasHelp: [
                    function () {
                      t.dapanShowText1 = !0;
                    },
                    function () {
                      t.dapanShowRewardBanner = !0;
                    },
                    function () {
                      t.dapanShowRewardBox = !0;
                    },
                    function () {
                      t.dapanShowRewardList = !0;
                    },
                    function () {
                      t.modalBtnShow = !0;
                    },
                  ],
                  noneHelp: [
                    function () {
                      t.dapanShowText1 = !0;
                    },
                    function () {
                      t.dapanShowRewardBanner = !0;
                    },
                    function () {
                      t.dapanShowRewardBox = !0;
                    },
                    function () {
                      t.modalBtnShow = !0;
                    },
                  ],
                  hasHelp: [
                    function () {
                      t.dapanShowText1 = !0;
                    },
                    function () {
                      t.dapanShowRewardBanner = !0;
                    },
                    function () {
                      t.dapanShowRewardBox = !0;
                    },
                    function () {
                      t.modalBtnShow = !0;
                    },
                  ],
                  guessErrorNoneHelp: [
                    function () {
                      t.dapanShowText1 = !0;
                    },
                    function () {
                      t.dapanMsgShow = !0;
                    },
                    function () {
                      t.modalBtnShow = !0;
                    },
                  ],
                }[this.dapanResultType];
              e &&
                (this.setIntervalId = setInterval(function () {
                  if (
                    (t.cntIndex > 0 &&
                      t.cntIndex <= e.length &&
                      e[t.cntIndex - 1](),
                    t.cntIndex === e.length)
                  )
                    return (
                      t.dapanLoop(),
                      "function" == typeof t.createDapanFenwei &&
                        t.createDapanFenwei(),
                      void (t.lottieLock = !1)
                    );
                  t.cntIndex += 1;
                }, 150));
            },
            geguShowContent: function () {
              var t = this,
                e =
                  "guessRightHasHelp" === this.geguResult
                    ? [
                        function () {
                          t.geguShowList = !0;
                        },
                        function () {
                          t.geguShowRewardBanner = !0;
                        },
                        function () {
                          t.geguShowRewardBox = !0;
                        },
                        function () {
                          t.modalBtnShow = !0;
                        },
                      ]
                    : [
                        function () {
                          t.geguShowList = !0;
                        },
                        function () {
                          t.geguMsgShow = !0;
                        },
                        function () {
                          t.modalBtnShow = !0;
                        },
                      ];
              0 === this.cntIndex && (this.geguShowDate = !0),
                (this.setIntervalId = setInterval(function () {
                  if (
                    (t.cntIndex > 0 &&
                      t.cntIndex <= e.length &&
                      e[t.cntIndex - 1](),
                    t.cntIndex === e.length)
                  )
                    return (
                      (t.cntIndex = 0),
                      clearInterval(t.setIntervalId),
                      (t.setIntervalId = 0),
                      "function" == typeof t.createGeguFenwei &&
                        t.createGeguFenwei(),
                      void (t.lottieLock = !1)
                    );
                  t.cntIndex += 1;
                }, 150));
            },
            geguListHandle: function (t, e, n) {
              this.geguList = t
                ? t
                    .split("|")
                    .map(function (t) {
                      var a = t.split(":");
                      if (a.length < 3) return null;
                      var o = a[0],
                        i = "1" === a[1] ? "看涨" : "看跌",
                        s = "1" === a[2] ? e : n;
                      return {
                        name: ""
                          .concat(u.truncateByByteLength(o, 11))
                          .concat(i),
                        url: s,
                      };
                    })
                    .filter(Boolean)
                : [];
            },
            processDapanContent: function (t, e) {
              var n,
                i,
                s = t && "1" === t.results.split(":")[2];
              if (this.dapanContent.reward_desc) {
                if (s) {
                  if (0 !== this.helpList.length) {
                    var r = this.helpList.find(function (e) {
                      return e.id === t.id;
                    });
                    (this.dapanHelpList = (r && r.list) || []),
                      this.dapanHelpList && 0 !== this.dapanHelpList.length
                        ? ((this.dapanResultType = "guessRightHasHelp"),
                          (this.dapanHelpList = this.dapanHelpList.map(
                            function (t) {
                              var e,
                                n = "好友助力",
                                i =
                                  t.nickname.length > 3
                                    ? ""
                                        .concat(
                                          t.nickname.substring(0, 3),
                                          "..."
                                        )
                                        .concat(n)
                                    : "".concat(t.nickname).concat(n);
                              return (e = d({}, t)), a(e, o({ nickname: i }));
                            }
                          )))
                        : (this.dapanResultType = "noneHelp");
                  }
                } else
                  "1" === this.dapanContent.comfort_flag
                    ? (this.dapanResultType = "hasHelp")
                    : (this.dapanResultType = "noneHelp");
                (this.dapanContent.value =
                  "rewardCore" === e ? t.reward_desc : parseInt(t.reward_desc)),
                  (this.dapanContent.unit =
                    "rewardCore" === e
                      ? p.isCash(t.reward_desc)
                        ? ""
                        : "金币"
                      : t.reward_desc.includes("元")
                      ? "元"
                      : "金币");
              } else {
                this.dapanResultType = "guessErrorNoneHelp";
                var h =
                  (null ==
                  (i = null == (n = this.dapanContent) ? void 0 : n.msg)
                    ? void 0
                    : i.split(";")) || [];
                (this.dapanContent.title = h[0] || "温馨提示"),
                  (this.dapanContent.msg =
                    h[1] ||
                    (s
                      ? "来晚一步，与红包擦肩而过"
                      : "多多关注上证指数大盘 可以增加猜对概率哦!"));
              }
            },
            processGeguContent: function (t) {
              var e, n, a, o, i;
              if (
                ((this.geguContent = this.rewardList[this.stepIndex]),
                null == (e = this.geguContent) ? void 0 : e.reward_desc)
              )
                (this.geguResult = "guessRightHasHelp"),
                  "rewardCore" === t
                    ? (this.geguContent.unit = p.isCash(
                        this.geguContent.reward_desc
                      )
                        ? ""
                        : "金币")
                    : ((this.geguContent.value = parseInt(
                        this.geguContent.reward_desc
                      )),
                      (this.geguContent.unit =
                        this.geguContent.reward_desc.includes("元")
                          ? "元"
                          : "金币"));
              else {
                this.geguResult = "guessError";
                var s = (
                    (null ==
                    (a = null == (n = this.geguContent) ? void 0 : n.results)
                      ? void 0
                      : a.split("|")) || []
                  ).every(function (t) {
                    return "2" === t.split(":")[2];
                  }),
                  r =
                    (null ==
                    (i = null == (o = this.geguContent) ? void 0 : o.msg)
                      ? void 0
                      : i.split(";")) || [];
                (this.geguContent.title = r[0] || "温馨提示"),
                  (this.geguContent.msg =
                    r[1] ||
                    (s
                      ? "不要气馁! 持续关注这些股票 可以增加猜对概率哦!"
                      : "来晚一步，与红包擦肩而过"));
              }
            },
            processChampionContent: function (t, e) {
              var n = this,
                a = this.rewardList[this.stepIndex],
                o = t ? "weekChampionContent" : "monthChampionContent",
                i = t ? "weekChampionBannerShow" : "monthChampionBannerShow",
                s = t ? "weekChampionRewardShow" : "monthChampionRewardShow";
              (null == a ? void 0 : a.reward_desc) &&
                ("rewardCore" === e
                  ? ((this[o].value = a.reward_desc),
                    (this[o].unit = p.isCash(a.reward_desc) ? "" : "金币"))
                  : ((this[o].value = parseInt(a.reward_desc)),
                    (this[o].unit = a.reward_desc.includes("元")
                      ? "元"
                      : "金币"))),
                0 === this.cntIndex && (this[i] = !0),
                (this.setIntervalId = setInterval(function () {
                  if (
                    (1 === n.cntIndex && (n[s] = !0),
                    2 === n.cntIndex && (n.modalBtnShow = !0),
                    2 === n.cntIndex)
                  )
                    return (
                      (n.cntIndex = 0),
                      clearInterval(n.setIntervalId),
                      (n.setIntervalId = 0),
                      "function" == typeof n.createChampionFenwei &&
                        n.createChampionFenwei(t),
                      void (n.lottieLock = !1)
                    );
                  n.cntIndex += 1;
                }, 150));
            },
            formatDate: function (t) {
              return t
                ? ""
                    .concat(t.slice(0, 4), "年")
                    .concat(t.slice(4, 6), "月")
                    .concat(t.slice(6, 8), "日")
                : "";
            },
          },
        };
      })({ hasLottie: !0 }),
    ],
    props: ["rewardList", "helpList", "isHelp"],
    data: function () {
      return {
        guessRightIcon:
          "https://st.gtimg.com/design/857ae9603353c7ad85c82416bc124184.png",
        guessErrorIcon:
          "https://st.gtimg.com/design/16b679fba28f14b2a2d181fc7d6589dd.png",
        lottieId: 0,
        lottie: null,
      };
    },
    computed: {
      btnText: function () {
        return this.baseBtnText;
      },
    },
    watch: {
      stepIndex: function () {
        return c(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), this.createLottieInit(this.getLottieId())
                      );
                    case 2:
                      this.modalType = this.getModalType(this.getLottieId());
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
    },
    methods: {
      clearLottie: function () {
        var t = this;
        [
          "dapanLottieItem",
          "geguLottieItem",
          "weekLottieItem",
          "monthLottieItem",
        ].forEach(function (e) {
          t[e] && (t[e].destroy(), (t[e] = null));
        }),
          this.setIntervalId && clearInterval(this.setIntervalId);
      },
      getLottie: function (e) {
        return c(
          this,
          null,
          t().mark(function n() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.lottie = e),
                        (t.next = 3),
                        this.createLottieInit(this.getLottieId())
                      );
                    case 3:
                      this.modalType = this.getModalType(this.getLottieId());
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      sendClickStat: function (t, e) {
        l.StockBridge.report(t, d({}, e));
      },
      textSplit: function (t, e) {
        if (t) {
          var n = t.split(":");
          if (!(n.length < 3)) {
            var a = n[0],
              o = "1" === n[1] ? "看涨" : "看跌",
              i = "1" === n[2] ? this.guessRightIcon : this.guessErrorIcon;
            return "name" === e
              ? "".concat(u.truncateByByteLength(a, 11)).concat(o)
              : "url" === e
              ? i
              : void 0;
          }
        }
      },
      createLottieAPI: function (e, n, a) {
        return c(
          this,
          null,
          t().mark(function o() {
            var i,
              s,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (i = null),
                        (s = l.wx$1.createSelectorQuery().in(this)),
                        e &&
                          s.select(".".concat(e)) &&
                          s.select(".".concat(e)).node() &&
                          s
                            .select(".".concat(e))
                            .node(function (t) {
                              if (t.node) {
                                var e = t.node,
                                  o = getApp().globalData.systemInfo.pixelRatio;
                                if (e.getContext("2d")) {
                                  var s = e.getContext("2d");
                                  return (
                                    (e.width = 448 * o),
                                    (e.height = 784 * o),
                                    r.lottie.setup(e),
                                    (i = r.lottie.loadAnimation({
                                      loop: !1,
                                      autoplay: !0,
                                      path: n,
                                      rendererSettings: { context: s },
                                    })).addEventListener(
                                      "config_ready",
                                      function () {
                                        (r[a] = i),
                                          r.startLottiePlay(r.getLottieId());
                                      }
                                    ),
                                    i
                                  );
                                }
                              }
                            })
                            .exec();
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      createFenweiLottieAPI: function (t, e) {
        var n = this,
          a = null,
          o = l.wx$1.createSelectorQuery().in(this);
        t &&
          o.select(".".concat(t)) &&
          o.select(".".concat(t)).node() &&
          o
            .select(".".concat(t))
            .node(function (t) {
              if (t.node) {
                var o = t.node;
                if (o.getContext("2d")) {
                  var i = o.getContext("2d");
                  return (
                    (o.width = 750),
                    (o.height = 1e3),
                    n.lottie.setup(o),
                    (a = n.lottie.loadAnimation({
                      loop: !0,
                      autoplay: !1,
                      path: e,
                      rendererSettings: { context: i },
                    })).playSegments([0, 38], !0),
                    a
                  );
                }
              }
            })
            .exec();
      },
      createLottieInit: function (e) {
        return c(
          this,
          null,
          t().mark(function n() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      0 === e
                        ? !this.dapanLottieItem &&
                          this.createLottieAPI(
                            f[e].className,
                            f[e].jsonPath,
                            "dapanLottieItem"
                          )
                        : 1 === e
                        ? !this.geguLottieItem &&
                          this.createLottieAPI(
                            f[e].className,
                            f[e].jsonPath,
                            "geguLottieItem"
                          )
                        : 2 === e
                        ? !this.weekLottieItem &&
                          this.createLottieAPI(
                            f[e].className,
                            f[e].jsonPath,
                            "weekLottieItem"
                          )
                        : 3 === e &&
                          !this.monthLottieItem &&
                          this.createLottieAPI(
                            f[e].className,
                            f[e].jsonPath,
                            "monthLottieItem"
                          );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      startLottiePlay: function (e) {
        return c(
          this,
          null,
          t().mark(function n() {
            var a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((this.lottieLock = !0),
                        (t.prev = 1),
                        (a = [
                          { item: this.dapanLottieItem, segment: [0, 8] },
                          { item: this.geguLottieItem, segment: [0, 9] },
                          { item: this.weekLottieItem, segment: [0, 7] },
                          { item: this.monthLottieItem, segment: [0, 10] },
                        ][e]),
                        (t.t0 = a && a.item),
                        !t.t0)
                      ) {
                        t.next = 8;
                        break;
                      }
                      return (
                        a.item.setSpeed(1),
                        (t.next = 8),
                        this.playAnimation(a.item, a.segment)
                      );
                    case 8:
                      this.textfadeOut(e),
                        this.sendClickStat(
                          "yy.czdupgrade.lottie_modal.baoguang",
                          {
                            yy_public_str1: ""
                              .concat(g[e], "_")
                              .concat(this.stepIndex + 1),
                          }
                        );
                    case 10:
                      return (
                        (t.prev = 10), (this.lottieLock = !1), t.finish(10)
                      );
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[1, , 10, 13]]
            );
          })
        );
      },
      finishLottiePlay: function (e) {
        return c(
          this,
          null,
          t().mark(function n() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.lottieLock) {
                        t.next = 48;
                        break;
                      }
                      (this.lottieLock = !0),
                        (this.closeShow = !1),
                        (t.prev = 2),
                        (t.t0 = e),
                        (t.next =
                          0 === t.t0
                            ? 6
                            : 1 === t.t0
                            ? 18
                            : 2 === t.t0
                            ? 29
                            : 3 === t.t0
                            ? 37
                            : 44);
                      break;
                    case 6:
                      if (((t.t1 = this.dapanLottieItem), !t.t1)) {
                        t.next = 17;
                        break;
                      }
                      return (
                        this.dapanLottieItem.setSpeed(0.5),
                        (this.dapanShowDate = !1),
                        (this.dapanShowText1 = !1),
                        (this.dapanShowRewardBanner = !1),
                        (this.dapanMsgShow = !1),
                        (this.dapanShowRewardBox = !1),
                        (this.dapanShowRewardList = !1),
                        (t.next = 17),
                        this.playAnimation(this.dapanLottieItem, [50, 57])
                      );
                    case 17:
                      return t.abrupt("break", 44);
                    case 18:
                      if (((t.t2 = this.geguLottieItem), !t.t2)) {
                        t.next = 28;
                        break;
                      }
                      return (
                        this.geguLottieItem.setSpeed(0.5),
                        (this.geguShowDate = !1),
                        (this.geguShowRewardBanner = !1),
                        (this.geguShowRewardBox = !1),
                        (this.geguMsgShow = !1),
                        (this.geguList = []),
                        (t.next = 28),
                        this.playAnimation(this.geguLottieItem, [49, 55])
                      );
                    case 28:
                      return t.abrupt("break", 44);
                    case 29:
                      if (((t.t3 = this.weekLottieItem), !t.t3)) {
                        t.next = 36;
                        break;
                      }
                      return (
                        this.weekLottieItem.setSpeed(0.5),
                        (this.weekChampionBannerShow = !1),
                        (this.weekChampionRewardShow = !1),
                        (t.next = 36),
                        this.playAnimation(this.weekLottieItem, [53, 59])
                      );
                    case 36:
                      return t.abrupt("break", 44);
                    case 37:
                      if (((t.t4 = this.monthLottieItem), !t.t4)) {
                        t.next = 44;
                        break;
                      }
                      return (
                        this.monthLottieItem.setSpeed(0.5),
                        (this.monthChampionBannerShow = !1),
                        (this.monthChampionRewardShow = !1),
                        (t.next = 44),
                        this.playAnimation(this.monthLottieItem, [55, 58])
                      );
                    case 44:
                      this.stepIndex += 1;
                    case 45:
                      return (
                        (t.prev = 45), (this.lottieLock = !1), t.finish(45)
                      );
                    case 48:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[2, , 45, 48]]
            );
          })
        );
      },
      createDapanFenwei: function () {
        this.createFenweiLottieAPI(
          "lottie-modal__dapan-fenwei",
          "https://st.gtimg.com/design/a5307eb34e6938c866b49fa9b58d99e1.json"
        );
      },
      createGeguFenwei: function () {
        this.createFenweiLottieAPI(
          "lottie-modal__gegu-fenwei",
          "https://st.gtimg.com/design/a5307eb34e6938c866b49fa9b58d99e1.json"
        );
      },
      createChampionFenwei: function (t) {
        var e = t ? "lottie-modal__week-fenwei" : "lottie-modal__month-fenwei";
        this.createFenweiLottieAPI(
          e,
          "https://st.gtimg.com/design/355c20c95ea0d01ea3660e33d0649772.json"
        );
      },
      closeModal: function () {
        this.sendClickStat("yy.czdupgrade.lottie_modal_close.click ", {
          yy_public_str1: ""
            .concat(g[this.getLottieId()], "_")
            .concat(this.stepIndex + 1),
        }),
          this.$emit("close");
      },
      lookNextReward: function () {
        return c(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        1 !== this.rewardList.length &&
                        this.stepIndex !== this.rewardList.length - 1
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.closeModal(),
                        void this.sendClickStat(
                          "yy.czdupgrade.lottie_modal_btn.click",
                          { yy_public_str1: "".concat(g[this.getLottieId()]) }
                        ))
                      );
                    case 2:
                      this.sendClickStat(
                        "yy.czdupgrade.lottie_modal_btn.click",
                        { yy_public_str1: "".concat(g[this.getLottieId()]) }
                      ),
                        this.finishLottiePlay(this.getLottieId());
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      textfadeOut: function (t) {
        switch (
          (this.setIntervalId && clearInterval(this.setIntervalId),
          (this.closeShow = !0),
          t)
        ) {
          case 0:
            this.dapanContent = this.rewardList[this.stepIndex] || {};
            var e = this.dapanContent;
            this.processDapanContent(e, "mp"),
              (this.dapanContent.date = this.formatDate(e.date)),
              (this.dapanContent.name = this.textSplit(e.results, "name")),
              (this.dapanContent.url = this.textSplit(e.results, "url")),
              0 === this.cntIndex && (this.dapanShowDate = !0),
              this.dapanShowContent(),
              this.isHelp.length
                ? l.StockBridge.report(
                    "yy.czdlanew.index.multip.reward.baoguang"
                  )
                : l.StockBridge.report(
                    "yy.czdlanew.index.nomultip.reward.baoguang"
                  );
            break;
          case 1:
            this.processGeguContent("mp"),
              (this.geguContent.date = this.formatDate(this.geguContent.date)),
              this.geguListHandle(
                this.geguContent.results,
                this.guessRightIcon,
                this.guessErrorIcon
              ),
              this.geguShowContent();
            break;
          case 2:
            this.processChampionContent(!0, "mp");
            break;
          case 3:
            this.processChampionContent(!1, "mp");
        }
      },
    },
  };
Array || l.resolveComponent("lottie-com")();
var C = l._export_sfc(I, [
  [
    "render",
    function (t, e, n, a, o, i) {
      return l.e(
        {
          a: l.o(i.getLottie, 3878),
          b: "dapan" === t.modalType,
          c: "dapan" === t.modalType,
          d: t.dapanShowDate,
        },
        t.dapanShowDate
          ? { e: l.t(t.dapanContent.date), f: l.t(t.dapanContent.date) }
          : {},
        { g: t.dapanShowText1 },
        t.dapanShowText1
          ? {
              h: l.t(t.dapanContent.name),
              i: l.n(
                "guessRightHasHelp" !== t.dapanResultType
                  ? "lottie-modal__result-label--active"
                  : ""
              ),
              j: "url(" + t.dapanContent.url + ")",
            }
          : {},
        { k: "guessRightHasHelp" === t.dapanResultType },
        "guessRightHasHelp" === t.dapanResultType
          ? l.e(
              { l: t.dapanShowRewardBanner },
              (t.dapanShowRewardBanner, {}),
              { m: t.dapanShowRewardBox },
              t.dapanShowRewardBox
                ? { n: l.t(t.dapanContent.value), o: l.t(t.dapanContent.unit) }
                : {},
              { p: t.dapanShowRewardList },
              t.dapanShowRewardList
                ? {
                    q: l.t("".concat(t.dapanHelpList.length, "位好友助力")),
                    r: l.f(t.dapanHelpList, function (e, n, a) {
                      return l.e(
                        { a: e.headimgurl },
                        e.headimgurl ? { b: "url(" + e.headimgurl + ")" } : {},
                        {
                          c: l.t(e.nickname),
                          d: l.t(e.reward_desc),
                          e: "dapan-list" + n,
                          f: l.n(
                            n === t.dapanHelpList.length - 1
                              ? "lottie-modal__list-item--last"
                              : ""
                          ),
                        }
                      );
                    }),
                    s: l.n(
                      t.dapanHelpList.length > 3
                        ? "lottie-modal__list-body--scroll"
                        : ""
                    ),
                  }
                : {}
            )
          : "noneHelp" === t.dapanResultType || "hasHelp" === t.dapanResultType
          ? l.e(
              { v: t.dapanShowRewardBanner },
              t.dapanShowRewardBanner
                ? {
                    w: l.n(
                      "noneHelp" === t.dapanResultType
                        ? ""
                        : "lottie-modal__reward-banner--error"
                    ),
                  }
                : {},
              { x: t.dapanShowRewardBox },
              t.dapanShowRewardBox
                ? { y: l.t(t.dapanContent.value), z: l.t(t.dapanContent.unit) }
                : {}
            )
          : "guessErrorNoneHelp" === t.dapanResultType
          ? l.e(
              { B: t.dapanMsgShow },
              t.dapanMsgShow
                ? { C: l.t(t.dapanContent.title), D: l.t(t.dapanContent.msg) }
                : {}
            )
          : {},
        {
          t:
            "noneHelp" === t.dapanResultType || "hasHelp" === t.dapanResultType,
          A: "guessErrorNoneHelp" === t.dapanResultType,
          E: "gegu" === t.modalType,
          F: "gegu" === t.modalType,
          G: t.geguShowDate,
        },
        t.geguShowDate
          ? { H: l.t(t.geguContent.date), I: l.t(t.geguContent.date) }
          : {},
        { J: t.geguShowList },
        t.geguShowList
          ? {
              K: l.f(t.geguList, function (t, e, n) {
                return {
                  a: l.t(t.name),
                  b: "gegu-item" + e,
                  c: "url(" + t.url + ")",
                };
              }),
            }
          : {},
        { L: "guessRightHasHelp" === t.geguResult },
        "guessRightHasHelp" === t.geguResult
          ? l.e(
              { M: t.geguShowRewardBanner },
              (t.geguShowRewardBanner, {}),
              { N: t.geguShowRewardBox },
              t.geguShowRewardBox
                ? { O: l.t(t.geguContent.value), P: l.t(t.geguContent.unit) }
                : {}
            )
          : l.e(
              { Q: t.geguMsgShow },
              t.geguMsgShow
                ? {
                    R: l.t(t.geguContent.title),
                    S: l.t(t.geguContent.msg),
                    T: l.n(
                      t.geguList.length < 4
                        ? "lottie-modal__error-box--short"
                        : ""
                    ),
                  }
                : {}
            ),
        {
          U: "weekChampion" === t.modalType,
          V: "weekChampion" === t.modalType,
          W: t.weekChampionBannerShow,
        },
        (t.weekChampionBannerShow, {}),
        { X: t.weekChampionRewardShow },
        t.weekChampionRewardShow
          ? {
              Y: l.t(t.weekChampionContent.value),
              Z: l.t(t.weekChampionContent.unit),
            }
          : {},
        {
          aa: "monthChampion" === t.modalType,
          ab: "monthChampion" === t.modalType,
          ac: t.monthChampionBannerShow,
        },
        (t.monthChampionBannerShow, {}),
        { ad: t.monthChampionRewardShow },
        t.monthChampionRewardShow
          ? l.e(
              {
                ae: l.t(t.monthChampionContent.value),
                af: l.t(t.monthChampionContent.unit),
                ag: l.n(
                  "元" === t.monthChampionContent.unit
                    ? "lottie-modal__reward-num--cash"
                    : ""
                ),
                ah: "元" !== t.monthChampionContent.unit,
              },
              (t.monthChampionContent.unit, {})
            )
          : {},
        { ai: t.modalBtnShow },
        t.modalBtnShow
          ? {
              aj: l.t(i.btnText),
              ak: l.o(function () {
                return i.lookNextReward && i.lookNextReward.apply(i, arguments);
              }, 3879),
            }
          : {},
        { al: t.closeShow },
        t.closeShow
          ? {
              am: l.o(function () {
                return i.closeModal && i.closeModal.apply(i, arguments);
              }, 3880),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8f0bfb1b"],
]);
wx.createComponent(C);
