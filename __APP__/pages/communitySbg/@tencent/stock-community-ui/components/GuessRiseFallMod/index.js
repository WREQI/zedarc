var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (t, e, n) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e) {
    for (var o in e || (e = {})) a.call(e, o) && c(t, o, e[o]);
    if (i) {
      var r,
        s = n(i(e));
      try {
        for (s.s(); !(r = s.n()).done; ) {
          o = r.value;
          u.call(e, o) && c(t, o, e[o]);
        }
      } catch (t) {
        s.e(t);
      } finally {
        s.f();
      }
    }
    return t;
  },
  h = function (t, e) {
    return r(t, s(e));
  },
  f = function (t, e, n) {
    return new Promise(function (o, r) {
      var s = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        i = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(s, i);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  p = require("../../../stock-community-base/utils/knife.js"),
  m = require("../../utils/service/index.js"),
  g = require("../../../stock-community-base/utils/constant.js"),
  d = require("../../../stock-community-base/utils/api/mini.js"),
  v = require("../../../../../../common/vendor.js");
require("../../../stock-hq-data/api/hostConfig.js");
var w = p.sdk,
  b = w.showToast,
  y = w.setStorage,
  _ = w.getStorage,
  I = w.reportAnalytics,
  x = {
    name: "GuessRiseFallMod",
    components: {
      showModel: function () {
        return "../showModal/index.js";
      },
    },
    props: {
      symbol: { type: String, default: "" },
      stockName: { type: String, default: "" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      reportPrefix: { default: "" },
      R: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
    },
    watch: {
      symbol: {
        immediate: !0,
        handler: function (t, e) {
          t !== e && e && this.getGuessInfo(!0);
        },
      },
    },
    data: function () {
      return {
        guessInfo: null,
        myOpinion: "",
        guidePopShow: !1,
        guidePopText: "可以猜下个交易日的涨跌啦",
        protocolPopShow: !1,
        countDown: { hour: "--", min: "--", sec: "--" },
        popupConfig: { close_pic: 1, bubbleCls: "czd-nextDay" },
        noHeight: !1,
        timeout: null,
        isActive: !1,
      };
    },
    computed: {
      isShow: function () {
        return this.guessInfo && 1 == +this.guessInfo.can_show;
      },
      canGuess: function () {
        return this.guessInfo && 1 == +this.guessInfo.can_guess;
      },
      RFRatio: function () {
        var t = (this.guessInfo && this.guessInfo.global_ratio_list) || [],
          e = {
            riseRate: {
              num: +(
                t.find(function (t) {
                  return "1" === t.data;
                }) || {}
              ).ratio,
            },
            fallRate: {
              num: +(
                t.find(function (t) {
                  return "2" === t.data;
                }) || {}
              ).ratio,
            },
          };
        return (
          e.riseRate.num > e.fallRate.num
            ? ((e.riseRate.level = "high"), (e.fallRate.level = "low"))
            : e.riseRate.num < e.fallRate.num
            ? ((e.riseRate.level = "low"), (e.fallRate.level = "high"))
            : ((e.riseRate.level = "equal"), (e.fallRate.level = "equal")),
          e
        );
      },
      TInfo: function () {
        if (!this.guessInfo) return {};
        var t = this.guessInfo.T_info;
        return (void 0 === t ? [] : t)[0] || {};
      },
      TpInfo: function () {
        if (!this.guessInfo) return {};
        var t = this.guessInfo.T1_info;
        return (void 0 === t ? [] : t)[0] || {};
      },
      FTInfo: function () {
        var t, e, n;
        return ((null == (t = this.TpInfo) ? void 0 : t.user_answer) &&
          (null == (e = this.TInfo) ? void 0 : e.user_answer)) ||
          (null == (n = this.TpInfo) ? void 0 : n.user_answer)
          ? this.TpInfo
          : this.TInfo;
      },
      TDate: function () {
        var t = this.FTInfo.T_resultts,
          e = this.formatDate;
        if (!t) return "";
        var n = new Date(1e3 * t);
        return ""
          .concat(n.getFullYear())
          .concat(e(n.getMonth() + 1))
          .concat(e(n.getDate()));
      },
    },
    created: function () {
      return f(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (this.isActive = !0), (t.next = 3), this.getGuessInfo(!0)
                    );
                  case 3:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    activated: function () {
      (this.isActive = !0), this.getGuessInfo(!0);
    },
    deactivated: function () {
      (this.isActive = !1), clearInterval(this.interval);
    },
    beforeDestroy: function () {
      (this.isActive = !1), clearInterval(this.interval);
    },
    methods: {
      getFontSizeCls: function () {
        var t = this.stockName.length || 4;
        return "".concat(p.platform, "-").concat(t);
      },
      getGuessInfo: function (t, n) {
        return f(
          this,
          null,
          e().mark(function o() {
            var r,
              s,
              i,
              a = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((s = {
                          source: 3,
                          channel: 0,
                          symbol: this.symbol,
                          new_version: 3,
                        }),
                        this.symbol && this.symbol.indexOf("undefined"))
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (e.next = 5), m.getGuessHome(s, this.pUserinfo);
                    case 5:
                      (i = e.sent) &&
                        0 == +i.retcode &&
                        ((this.guessInfo = i),
                        (this.myOpinion = (
                          null == (r = this.TpInfo) ? void 0 : r.user_answer
                        )
                          ? +this.TpInfo.user_answer
                          : +this.TInfo.user_answer),
                        0 === this.myOpinion &&
                          this.handleCountDown(this.FTInfo),
                        t && this.$emit("guessInfoReady", i),
                        this.$nextTick(function () {
                          t && a.setGuidePopShow();
                        })),
                        (this.noHeight = !0),
                        n && n();
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      setGuidePopShow: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = "zxg" === p.platform), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.checkGuideNewBubble();
                    case 4:
                      t.t0 = this.guidePopShow;
                    case 5:
                      if (!t.t0) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.popupConfig = h(l({}, this.popupConfig), {
                          close_pic: 0,
                        })),
                        void (this.guidePopText = "猜涨跌，领红包~"))
                      );
                    case 7:
                      if (
                        "0" !== this.TpInfo.user_answer ||
                        "2" === this.TpInfo.T_status
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 10), _("sq_czd_tradeDate_popShow");
                    case 10:
                      if (
                        ((t.t1 = t.sent),
                        (t.t2 = this.getDate()),
                        t.t1 !== t.t2)
                      ) {
                        t.next = 14;
                        break;
                      }
                      return t.abrupt("return");
                    case 14:
                      (this.guidePopText = "可以竞猜下个交易日涨跌啦"),
                        (this.popupConfig = h(l({}, this.popupConfig), {
                          close_pic: 1,
                        })),
                        setTimeout(function () {
                          (document &&
                            document.querySelector(
                              ".bubble-box.bubble--stock_guessRiseFall_recom"
                            )) ||
                            ((n.guidePopShow = !0),
                            setTimeout(function () {
                              n.guidePopShow = !1;
                            }, 3e3),
                            y("sq_czd_tradeDate_popShow", n.getDate()));
                        }, 3e3);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      checkGuideNewBubble: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n,
              o = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), _("sq_czd_kzz_guideNew_popShow");
                    case 2:
                      (n = t.sent),
                        (this.guidePopShow =
                          (p.isObject(n) || !n) &&
                          this.guessInfo &&
                          "1" === this.guessInfo.is_kzz &&
                          this.canGuess),
                        this.guidePopShow &&
                          (y("sq_czd_kzz_guideNew_popShow", "true"),
                          setTimeout(function () {
                            o.guidePopShow = !1;
                          }, 3e3));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getDate: function () {
        var t = new Date();
        return ""
          .concat(t.getFullYear(), "-")
          .concat(t.getMonth() + 1, "-")
          .concat(t.getDate());
      },
      closeGuideBubble: function () {
        this.guidePopShow = !1;
      },
      handleCountDown: function (t) {
        var e = this,
          n = t.T_endts - t.servertime;
        this.interval && (clearInterval(this.interval), (this.interval = null)),
          this.isActive &&
            (this.interval = setInterval(function () {
              if ((10 === (n -= 1) && e.getGuessInfo(), n < 0))
                return (
                  (e.countDown = null),
                  clearInterval(e.interval),
                  (e.interval = null),
                  void e.getGuessInfo()
                );
              e.countDown = e.caclCountDown(n);
            }, 1e3));
      },
      debounce: function (e) {
        var n = this;
        return function () {
          var o = arguments;
          clearTimeout(n.timeout),
            (n.timeout = setTimeout(function () {
              e.call.apply(e, [n].concat(t(o)));
            }, 500));
        };
      },
      debounceGuess: function (t) {
        this.debounce(this.tapGuess)(t);
      },
      tapGuess: function (t) {
        return f(
          this,
          null,
          e().mark(function n() {
            var o, r, s, i, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = !0),
                        (e.t0 = "zxg" === p.platform && this.R),
                        !e.t0)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), this.R.auth(!0);
                    case 5:
                      o = e.sent;
                    case 6:
                      if (o) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      if (this.canGuess) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      if (
                        ((r = this.guessInfo.guess_times_left),
                        (this.tapAnswer = t),
                        0 === this.myOpinion)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (s = "你已经竞猜过了哦~"),
                        e.abrupt(
                          "return",
                          (b(s, this), void this.$emit("showMyToast", s))
                        )
                      );
                    case 14:
                      if (0 != +r || "sh000001" === this.symbol) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (i = "今日4次个股竞猜机会已用完，明天继续吧~"),
                        e.abrupt(
                          "return",
                          (b(i, this), void this.$emit("showMyToast", i))
                        )
                      );
                    case 17:
                      this.requestGuessOp({ action: 2, user_answer: t }, !0),
                        (a = ""
                          .concat(this.reportPrefix, "_guess_")
                          .concat(1 === t ? "rise" : "fall", "_tap")),
                        this.$emit("czdReport", a),
                        I({
                          eventName: a,
                          dataObject: { stockid: this.symbol || "" },
                        });
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      asignProtocol: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = !0),
                        (t.t0 = "zxg" === p.platform && this.R),
                        !t.t0)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (t.next = 5), this.R.auth(!0);
                    case 5:
                      n = t.sent;
                    case 6:
                      if (n) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return");
                    case 8:
                      return (
                        (t.next = 10),
                        this.requestGuessOp({
                          action: 5,
                          aggrements: "act_rule,reward_rule",
                        })
                      );
                    case 10:
                      (o = t.sent),
                        this.hideProtocolPop(),
                        o &&
                          0 == +o.retcode &&
                          ((this.myOpinion = this.tapAnswer),
                          this.requestGuessOp(
                            { action: 2, user_answer: this.tapAnswer },
                            !0
                          ));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      hideProtocolPop: function () {
        this.protocolPopShow = !1;
      },
      requestGuessOp: function () {
        return f(this, arguments, function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          return e().mark(function r() {
            var s, i, a;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = l(
                        {
                          source: 3,
                          channel: 0,
                          outer_src: 0,
                          new_version: 3,
                          symbol: t.symbol,
                          date: t.TDate,
                        },
                        n
                      )),
                      (e.next = 3),
                      m.putGuessOp(s, t.pUserinfo)
                    );
                  case 3:
                    (i = e.sent),
                      2 === n.action && i && 0 == +i.retcode
                        ? (t.myOpinion = t.tapAnswer)
                        : ((a = i && i.retmsg),
                          b(a || "竞猜失败", t),
                          t.$emit("showMyToast", a || "竞猜失败")),
                      o && t.getGuessInfo();
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, r);
          })();
        });
      },
      toGuessOther: function () {
        d.goPageCommon({
          eventName: "chaolian",
          wxMiniUrl: "/pages/guessRiseFall/main?stat_data=Ihr63p00pn016",
        });
        var t = "".concat(this.reportPrefix, "_guessMore_tap");
        this.$emit("czdReport", t),
          I({ eventName: t, dataObject: { stockid: this.symbol || "" } });
      },
      jumpProtocol: function (t) {
        return f(
          this,
          null,
          e().mark(function n() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (o =
                        "https://zqact.tenpay.com/activity/page/guessRiseFall/#/strategy?tab=".concat(
                          "act_rule" === t ? "rule" : ""
                        )),
                        this.goWebPage({
                          url: o,
                          eventName: "chaolian",
                          chaolian: o,
                        });
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      goWebPage: function (t) {
        return f(this, arguments, function (t) {
          var n = t.url,
            o = t.eventName,
            r = t.chaolian;
          return e().mark(function t() {
            var s;
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (s = {
                      url: g.toWebPage(
                        ""
                          .concat(n, "?stat_data=")
                          .concat(
                            { zxg: "Ihr63p00pn016", wzq: "Ihr63p00qb213" }[
                              p.platform
                            ]
                          )
                      ),
                      eventName: o,
                      chaolian: r,
                    }),
                      d.goPageCommon(s);
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })();
        });
      },
      TDateString: function (t) {
        return this.TResultDateString(t).slice(0, -5);
      },
      TResultDateString: function (t) {
        var e = t.T_resultts,
          n = this.formatDate;
        if (!e) return "";
        var o = new Date(1e3 * e);
        return ""
          .concat(n(o.getMonth() + 1), "月")
          .concat(n(o.getDate()), "日")
          .concat(n(o.getHours()), ":")
          .concat(n(o.getMinutes()));
      },
      caclCountDown: function (t) {
        var e,
          n = this.formatDate,
          o = Math.floor(t / 3600);
        e = t - 3600 * o;
        var r = Math.floor(e / 60);
        e -= 60 * r;
        var s = Math.floor(e);
        return { hour: n(o), min: n(r), sec: n(s) };
      },
      formatDate: function (t) {
        return t < 10 ? "0".concat(t) : "".concat(t);
      },
      getNum: function (t) {
        return t.indexOf("%") > -1 ? parseFloat(t) / 100 : parseFloat(t);
      },
    },
  };
Array || v.resolveComponent("showModel")();
var R = v._export_sfc(x, [
  [
    "render",
    function (t, e, n, o, r, s) {
      return v.e(
        { a: s.isShow },
        s.isShow
          ? v.e(
              { b: r.guessInfo },
              r.guessInfo
                ? v.e(
                    {
                      c: v.t("猜".concat(n.stockName, " 涨还是跌?")),
                      d: v.n(s.getFontSizeCls()),
                      e: s.canGuess,
                    },
                    s.canGuess
                      ? v.e(
                          { f: 0 === r.myOpinion },
                          0 === r.myOpinion
                            ? v.e(
                                { g: r.countDown },
                                r.countDown
                                  ? {
                                      h: v.t(
                                        "".concat(
                                          s.TDateString(s.FTInfo),
                                          "倒计时："
                                        )
                                      ),
                                      i: v.t(r.countDown.hour),
                                      j: v.t(r.countDown.min),
                                      k: v.t(r.countDown.sec),
                                    }
                                  : {}
                              )
                            : {
                                l: v.t(
                                  "".concat(
                                    s.TResultDateString(s.FTInfo),
                                    "公布结果 "
                                  )
                                ),
                                m: v.o(function () {
                                  return (
                                    s.toGuessOther &&
                                    s.toGuessOther.apply(s, arguments)
                                  );
                                }, 4483),
                              }
                        )
                      : {
                          n: v.o(function (t) {
                            return s.jumpProtocol("act_rule");
                          }, 4484),
                          o: v.t(" 去猜其他"),
                          p: v.o(function () {
                            return (
                              s.toGuessOther &&
                              s.toGuessOther.apply(s, arguments)
                            );
                          }, 4485),
                        },
                    {
                      q: v.n(s.RFRatio.riseRate.level),
                      r: v.n(s.RFRatio.fallRate.level),
                      s: v.t(
                        ""
                          .concat(1 === r.myOpinion ? "已" : "", "看涨")
                          .concat(s.RFRatio.riseRate.num, "%")
                      ),
                      t: v.n(s.canGuess ? "" : "grey"),
                      v: v.n(s.RFRatio.riseRate.level),
                      w: v.o(function (t) {
                        return s.debounceGuess(1);
                      }, 4486),
                      x: v.t(
                        ""
                          .concat(2 === r.myOpinion ? "已" : "", "看跌")
                          .concat(s.RFRatio.fallRate.num, "%")
                      ),
                      y: v.n(s.canGuess ? "" : "grey"),
                      z: v.n(s.RFRatio.fallRate.level),
                      A: v.o(function (t) {
                        return s.debounceGuess(2);
                      }, 4487),
                      B: v.n(1 === r.myOpinion && s.canGuess ? "yes" : "no"),
                      C: v.n(2 === r.myOpinion && s.canGuess ? "yes" : "no"),
                      D: r.protocolPopShow,
                    },
                    r.protocolPopShow
                      ? {
                          E: v.o(function (t) {
                            return s.jumpProtocol("act_rule");
                          }, 4488),
                          F: v.o(function (t) {
                            return s.jumpProtocol("reward_rule");
                          }, 4489),
                          G: v.o(s.hideProtocolPop, 4490),
                          H: v.o(s.asignProtocol, 4491),
                          I: v.p({ title: "签协议" }),
                        }
                      : {}
                  )
                : {},
              { J: v.n(r.noHeight ? "" : "minHeight") }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-ffde76f3"],
]);
wx.createComponent(R);
