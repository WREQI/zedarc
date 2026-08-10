require("../../../../../../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../../common/vendor.js"),
  i = require("../mp.js"),
  r = "function" == typeof getApp ? getApp().globalData : {},
  u = {
    name: "Operation",
    components: {
      SearchAiBar: function () {
        return "../../../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
    },
    inject: {
      getShowAiGuideTips: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
      getInviterGuessResult: {
        default: function () {
          return function () {
            return "";
          };
        },
      },
    },
    props: {
      inflow: { type: String, default: "" },
      preText: { type: String, default: "" },
      nextText: { type: String, default: "" },
      ratio: {
        type: Object,
        default: function () {
          return {};
        },
      },
      result: { type: Number, default: 0 },
      prizeTime: { type: String, default: "" },
      FTInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      activityResult: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    options: { styleIsolation: "shared" },
    data: function () {
      return {
        IMG_TIP: i.OPERATION_IMAGES.TIP,
        IMG_TRIANGLE: i.OPERATION_IMAGES.TRIANGLE,
        IMG_RISE_RESULT: i.OPERATION_IMAGES.RISE_RESULT,
        IMG_FALL_RESULT: i.OPERATION_IMAGES.FALL_RESULT,
        RESULT_RISE: i.GUESS_RESULT.RISE,
        RESULT_FALL: i.GUESS_RESULT.FALL,
        GUESS_STATUS_RISE: i.GUESS_STATUS.RISE,
        GUESS_STATUS_FALL: i.GUESS_STATUS.FALL,
        countDown: { hour: "--", min: "--", sec: "--" },
        interval: null,
        reportTimer: null,
        countdownScheduleTimer: null,
      };
    },
    computed: {
      isGuess: function () {
        return this.FTInfo.user_answer && "0" !== this.FTInfo.user_answer;
      },
      showAiGuideTips: function () {
        var t, e;
        return (
          null !=
            (e =
              null == (t = this.getShowAiGuideTips) ? void 0 : t.call(this)) &&
          e
        );
      },
      inviterGuessResultText: function () {
        var t, e;
        return null !=
          (e = null == (t = this.getInviterGuessResult) ? void 0 : t.call(this))
          ? e
          : "";
      },
    },
    watch: {
      FTInfo: {
        immediate: !0,
        handler: function (t) {
          var e = t || {},
            n = e.T_endts,
            i = e.servertime;
          n && i && this.scheduleCountdown(n - i);
        },
      },
    },
    mounted: function () {
      return (
        (t = this),
        null,
        (i = e().mark(function t() {
          var i, r, u, s, o, c;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.inflow &&
                      n.StockBridge.report(
                        "yy.czdupdate_bulletin_board_exposure",
                        { yy_public_str1: "主力净流入" },
                        {}
                      ),
                      (this.preText || this.nextText) &&
                        n.StockBridge.report(
                          "yy.czdupdate_bulletin_board_exposure",
                          { yy_public_str1: "大盘竞猜日期提示" },
                          {}
                        ),
                      0 !== this.result &&
                        ((i = getCurrentPages()),
                        (r = i[i.length - 1] || {}),
                        (u = r.options || {}),
                        (s = u.act_actid),
                        (o = u.act_id),
                        (c = u.act_tid),
                        s &&
                          o &&
                          c &&
                          (this.reportTimer = setTimeout(function () {
                            n.StockBridge.busEmit(
                              "growth-user.behavior.union",
                              { type: "click", event: "guess_change" }
                            );
                          }, 3e3)));
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })),
        new Promise(function (e, n) {
          var r = function (t) {
              try {
                s(i.next(t));
              } catch (t) {
                n(t);
              }
            },
            u = function (t) {
              try {
                s(i.throw(t));
              } catch (t) {
                n(t);
              }
            },
            s = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(r, u);
            };
          s((i = i.apply(t, null)).next());
        })
      );
      var t, i;
    },
    beforeDestroy: function () {
      this.clearCountdown(),
        this.reportTimer &&
          (clearTimeout(this.reportTimer), (this.reportTimer = null));
    },
    methods: {
      onClickAiDialog: function (t) {
        n.StockBridge.busEmit("onClickAiDialog", t);
      },
      bullishBtn: function () {
        n.StockBridge.report("yy.guessrisefall.click_guess_rise", {}, {}),
          this.newsSubscribe(this.GUESS_STATUS_RISE);
      },
      bearishBtn: function () {
        n.StockBridge.report("yy.guessrisefall.click_guess_fall", {}, {}),
          this.newsSubscribe(this.GUESS_STATUS_FALL);
      },
      newsSubscribe: function (t) {
        var e = this;
        this.$emit("guessOpResult", t);
        var i = this.activityResult
          .filter(function (t) {
            return 0 === parseInt(t.status, 10);
          })
          .map(function (t) {
            return t.tmpl_id;
          });
        void 0 !== n.wx$1 &&
          i.length &&
          n.wx$1.requestSubscribeMessage({
            tmplIds: i,
            success: function (t) {
              e.msgSubscribeAll(t);
            },
            fail: function () {},
          });
      },
      msgSubscribeAll: function (e) {
        var n = this;
        Object.entries(e).forEach(function (e) {
          var r = t(e, 2),
            u = r[0];
          if ("accept" === r[1] && Object.values(i.TEMPLATE_IDS).includes(u)) {
            var s = { channel: 0, bid: i.BID_MAP[u], oper: 3, tmpl_id: u };
            n.msgSubscribe(s);
          }
        });
      },
      msgSubscribe: function (t) {
        n.StockBridge.request(
          "".concat(r.CGI_PREFIX, "msg_subscribe.fcgi"),
          "POST",
          t
        ).catch(function () {});
      },
      caclCountDown: function (t) {
        return i.calcCountDown(t);
      },
      startCountdown: function (t) {
        var e = this;
        this.clearCountdown(),
          (this.countDown = this.caclCountDown(t)),
          (this.interval = setInterval(function () {
            (t -= 1) < 0
              ? e.clearCountdown()
              : (e.countDown = e.caclCountDown(t));
          }, 1e3));
      },
      scheduleCountdown: function (t) {
        var e = this;
        (this.countDown = this.caclCountDown(t)),
          (this.countdownScheduleTimer = setTimeout(function () {
            var n = t - 1;
            n > 0 && e.startCountdown(n);
          }, 500));
      },
      clearCountdown: function () {
        this.interval && (clearInterval(this.interval), (this.interval = null)),
          this.countdownScheduleTimer &&
            (clearTimeout(this.countdownScheduleTimer),
            (this.countdownScheduleTimer = null));
      },
      getTDateString: function (t) {
        return i.getTDateString(t);
      },
    },
  };
Array || n.resolveComponent("SearchAiBar")();
var s = n._export_sfc(u, [
  [
    "render",
    function (t, e, i, r, u, s) {
      return n.e(
        { a: s.showAiGuideTips },
        (s.showAiGuideTips, {}),
        {
          b: u.IMG_TIP,
          c: u.IMG_TRIANGLE,
          d: n.o(s.onClickAiDialog, 5289),
          e: n.p({
            scene: s.isGuess ? "postguessrisefall" : "preguessrisefall",
            "report-prefix": "yy.caizhangdie",
            "content-id": "sh000001",
          }),
          f: (i.ratio && i.ratio.riseRate ? i.ratio.riseRate : 50) + "%",
          g: (i.ratio && i.ratio.fallRate ? i.ratio.fallRate : 50) + "%",
          h: n.t(i.ratio && i.ratio.riseRate ? i.ratio.riseRate : "--"),
          i: n.t(i.ratio && i.ratio.fallRate ? i.ratio.fallRate : "--"),
          j: 0 !== i.result,
        },
        0 !== i.result
          ? n.e(
              { k: i.result === u.RESULT_RISE },
              i.result === u.RESULT_RISE ? { l: u.IMG_RISE_RESULT } : {},
              { m: i.result === u.RESULT_FALL },
              i.result === u.RESULT_FALL ? { n: u.IMG_FALL_RESULT } : {}
            )
          : n.e(
              { o: s.inviterGuessResultText.includes("看涨") },
              s.inviterGuessResultText.includes("看涨")
                ? { p: n.t(s.inviterGuessResultText) }
                : {},
              {
                q: n.o(function () {
                  return s.bullishBtn && s.bullishBtn.apply(s, arguments);
                }, 5290),
                r: s.inviterGuessResultText.includes("看跌"),
              },
              s.inviterGuessResultText.includes("看跌")
                ? { s: n.t(s.inviterGuessResultText) }
                : {},
              {
                t: n.o(function () {
                  return s.bearishBtn && s.bearishBtn.apply(s, arguments);
                }, 5291),
              }
            ),
        { v: 0 !== i.result },
        0 !== i.result
          ? { w: n.t(i.prizeTime) }
          : {
              x: n.t(s.getTDateString(i.FTInfo)),
              y: n.t(u.countDown.hour),
              z: n.t(u.countDown.min),
              A: n.t(u.countDown.sec),
            }
      );
    },
  ],
  ["__scopeId", "data-v-5e5c859d"],
]);
wx.createComponent(s);
