var e = require("../../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  r = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  a = require("../../../../../../../stock-news-core/utils/request/index.js"),
  c = require("../../../../../../../stock-news-core/utils/tools.js"),
  f = require("../../../../../../../../../../common/vendor.js"),
  d = require("../../../../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  h = require("../../../../../../../../compare-versions/lib/esm/index.js"),
  l = [
    { name: "消息不准", report: "news.detail.news_feedback_0_1" },
    { name: "事实错误", report: "news.detail.news_feedback_0_2" },
    { name: "逻辑错误", report: "news.detail.news_feedback_0_3" },
    { name: "内容重复", report: "news.detail.news_feedback_0_4" },
    { name: "格式异常", report: "news.detail.news_feedback_0_5" },
    { name: "推送太晚", report: "news.detail.news_feedback_0_6" },
  ],
  u = [
    { name: "消息有用", report: "news.detail.news_feedback_1_1" },
    { name: "事实无误", report: "news.detail.news_feedback_1_2" },
    { name: "逻辑无误", report: "news.detail.news_feedback_1_3" },
    { name: "内容精练", report: "news.detail.news_feedback_1_4" },
    { name: "表达流畅", report: "news.detail.news_feedback_1_5" },
    { name: "推送及时", report: "news.detail.news_feedback_1_6" },
  ],
  p = {
    name: "HelpOrNoHelp.vue",
    components: {},
    directives: { "observe-visibility": d.ObserveVisibility },
    props: {
      newsId: { type: String, default: "" },
      theme: { type: String, default: "blue" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      reportData: {
        prefix: { type: String, default: "" },
        fchannel_id_fm_i: { type: String, default: "" },
      },
      brow_y_offset: { type: String, default: "-70px" },
    },
    data: function () {
      return {
        title: "这篇文章是否对您有帮助",
        showAll: !1,
        isShowLeft: !0,
        isShowWordingLeft: !1,
        isShowRight: !0,
        isShowWordingRight: !1,
        showFeedbackPopup: !1,
        popupOffset: 0,
        feedbackType: 1,
        feedbackEditing: !1,
        feedbackDesc: "“感觉没帮助，我想吐槽”",
        feedbackList: l,
        feedbackSelectIndex: [],
        feedbackContent: "",
        appVersion: "",
      };
    },
    created: function () {},
    computed: {
      isIphoneX: function () {
        return (
          !("undefined" == typeof window || !window) &&
          /iphone/gi.test(window.navigator.userAgent) &&
          window.screen.height >= 724
        );
      },
      isShareType: function () {
        return !1;
      },
    },
    mounted: function () {
      var e = this;
      window.addEventListener("focusin", this.onFocusIn),
        window.addEventListener("focusout", this.onFocusOut),
        this.requestFeedBackData()
          .then(function (t) {
            var n = t.data;
            1 == n.need_feedback
              ? ((e.showAll = !0),
                setTimeout(function () {
                  0 == n.score
                    ? e.showUINoHelp(!1)
                    : 1 == n.score
                    ? e.showUIHelp(!1)
                    : e.showUIHelpOrNoHelp();
                }, 10))
              : (e.showAll = !1);
          })
          .catch(function (t) {
            (e.showAll = !1), e.showToast(t.message);
          });
    },
    beforeDestroy: function () {
      window.removeEventListener("focusin", this.onFocusIn),
        window.removeEventListener("focusout", this.onFocusOut);
    },
    methods: {
      onFocusIn: function () {
        this.feedbackEditing = !0;
        var e = document.documentElement && document.documentElement.scrollTop;
        this.popupOffset = e;
      },
      onFocusOut: function () {
        var e = this;
        (this.feedbackEditing = !1),
          this.$nextTick(function () {
            window.scrollTo(0, e.popupOffset);
          });
      },
      checkAppLogin: function () {
        return new Promise(function (e) {
          shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      handleStart: function (e, t) {
        e.preventDefault(),
          e.stopPropagation(),
          this.feedbackSelectIndex.includes(t)
            ? this.feedbackSelectIndex.splice(
                this.feedbackSelectIndex.indexOf(t),
                1
              )
            : this.feedbackSelectIndex.push(t);
      },
      clickFeedback: function (e) {
        this.feedbackSelectIndex.includes(e)
          ? this.feedbackSelectIndex.splice(
              this.feedbackSelectIndex.indexOf(e),
              1
            )
          : this.feedbackSelectIndex.push(e);
      },
      closeFeedback: function () {
        this.showFeedbackPopup = !1;
      },
      submitFeedback: function () {
        var e = this;
        (this.showFeedbackPopup = !1),
          this.feedbackSelectIndex.forEach(function (t) {
            var n = e.feedbackList[t].report,
              i = { newsid: e.newsId };
            n && e.dataReport(n, i);
          }),
          this.modifyDataToServer(this.feedbackType, this.feedbackContent)
            .then(function (t) {
              var n = t;
              n && 0 === n.code
                ? e.showToast("反馈成功".concat(n))
                : e.showToast("反馈失败".concat(n)),
                1 === e.feedbackType
                  ? e.positiveCallback()
                  : 0 === e.feedbackType && e.negativeCallback();
            })
            .catch(function (t) {
              e.showToast(t.message);
            });
      },
      beforeClose: function () {},
      getVisibleSetting: function () {
        var e = this;
        return {
          callback: function (t) {
            t && e.reportBrow();
          },
          once: !0,
          intersection: { threshold: 0.5, rootMargin: this.brow_y_offset },
        };
      },
      reportBrow: function () {
        var e = { newsid: this.newsId };
        this.dataReport("".concat(this.reportData.prefix, ".diting_brow"), e);
      },
      dataReport: function (e, t) {},
      requestFeedBackData: function () {
        var e = c.md5WithTimestampWithPlatform(),
          t =
            "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/queryNewsRecord?news_id=".concat(
              this.newsId
            );
        return a.request(t, e, { method: "get", isShowToast: !1 });
      },
      modifyDataToServer: function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          f = (function (e, n) {
            for (var a in n || (n = {})) s.call(n, a) && r(e, a, n[a]);
            if (i) {
              var c,
                f = t(i(n));
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  a = c.value;
                  o.call(n, a) && r(e, a, n[a]);
                }
              } catch (e) {
                f.e(e);
              } finally {
                f.f();
              }
            }
            return e;
          })(
            { news_id: this.newsId, score: e, detail: n },
            c.md5WithTimestampWithPlatform()
          );
        return a.request(
          "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/newsFeedback",
          f,
          { method: "post", isShowToast: !1 }
        );
      },
      showTitleContent: function (e, t) {
        var n = this;
        if (!t)
          return (
            (this.$refs.titleContent.textContent = e),
            void (this.$refs.titleContent.style.cssText = "opacity: 1;")
          );
        (this.$refs.titleContent.style.cssText =
          "\n        opacity: 0;\n        transition: opacity 0.15s;\n        "),
          setTimeout(function () {
            var i = "\n          opacity: 1;\n        ";
            t && (i += "\n          transition: opacity 0.15s;\n        "),
              (n.$refs.titleContent.textContent = e),
              (n.$refs.titleContent.style.cssText = i);
          }, 150);
      },
      showLeftContent: function (e) {
        var t = "\n          opacity: 1;\n        ";
        e &&
          (t +=
            "\n          transition: opacity 0.15s ease-in-out 0.15s;\n        "),
          (this.$refs.leftContent.style.cssText = t),
          (this.isShowLeft = !0),
          (this.isShowRight = !1);
      },
      showRightContent: function (e) {
        var t = "\n          opacity: 1;\n        ";
        e &&
          (t +=
            "\n          transition: opacity 0.15s ease-in-out 0.15s;\n        "),
          (this.$refs.rightContent.style.cssText = t),
          (this.isShowLeft = !1),
          (this.isShowRight = !0);
      },
      showUIHelp: function (e) {
        try {
          this.showTitleContent("评价成功", e), this.showLeftContent(e);
          var t = "transform: translateX(-20px);";
          e && (t += "transition: transform .4s;"),
            (this.$refs.left.style.cssText = t);
          var n = "linear-gradient(180deg, #FFF 0%, #FFF3E8 100%)";
          "black" === this.theme &&
            (n =
              "linear-gradient(180deg, rgba(255, 137, 30, 0.00) 0%, rgba(255, 137, 30, 0.10) 100%), #12161F");
          var i =
            "\n          border: 1px solid #FF891E;\n          background: ".concat(
              n,
              ";\n        "
            );
          e && (i += "\n          transition: transform .4s;\n        "),
            (this.$refs.leftBox.style.cssText = i);
          var s = "\n          color: #FF891E;\n        ";
          e && (s += "\n          transition: transform .4s;\n        "),
            (this.$refs.leftWord.style.cssText = s);
        } catch (e) {
          this.showToast(e);
        }
      },
      showUINoHelp: function (e) {
        try {
          this.showTitleContent("评价成功", e), this.showRightContent(e);
          var t = "\n          transform: translateX(".concat(
            this.$refs.left.offsetLeft - this.$refs.right.offsetLeft,
            "px);\n        "
          );
          e && (t += "transition: transform .4s;"),
            (this.$refs.right.style.cssText = t);
          var n = "linear-gradient(180deg, #FFF 0%, #E7F0FF 100%)";
          "black" === this.theme &&
            (n =
              "linear-gradient(180deg, rgba(48, 119, 236, 0.00) 0%, rgba(48, 119, 236, 0.10) 100%), rgba(0, 0, 0, 0.20)");
          var i =
            "\n          border: 1px solid #3077EC;\n          background: ".concat(
              n,
              ";\n        "
            );
          e && (i += "\n          transition: transform .4s;\n        "),
            (this.$refs.rightBox.style.cssText = i);
          var s = "\n          color: #3077EC;\n        ";
          e && (s += "\n          transition: transform .4s;\n        "),
            (this.$refs.rightWord.style.cssText = s);
        } catch (e) {
          this.showToast(e);
        }
      },
      configFeedback: function (e) {
        var t = this;
        e !== this.feedbackType && (this.feedbackContent = ""),
          (this.feedbackType = e),
          (this.feedbackSelectIndex = []),
          0 === e
            ? ((this.feedbackDesc = "“感觉没帮助，我想吐槽”"),
              (this.feedbackList = l))
            : 1 === e &&
              ((this.feedbackDesc = "“感觉很有帮助，我想夸夸”"),
              (this.feedbackList = u)),
          (this.showFeedbackPopup = !0),
          this.$nextTick(function () {
            t.$refs.feedbackInput.focus(), t.$refs.feedbackInput.blur();
          });
      },
      feedbackAction: function () {
        return (
          (t = this),
          (n = arguments),
          (i = function () {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
            return e().mark(function i() {
              var s;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.checkAppLogin();
                    case 2:
                      if (!e.sent) {
                        e.next = 6;
                        break;
                      }
                      (t.feedbackType = n),
                        h.compare(t.appVersion, "11.12.0", ">=")
                          ? ((s = encodeURIComponent(
                              JSON.stringify({
                                newsId: t.newsId,
                                fbType: n,
                                action: "newsFeedback",
                              })
                            )),
                            shy.navigateTo({
                              url: "qqstock://GlobalPopDialog?info=".concat(s),
                            }))
                          : t.submitFeedback(),
                        (e.next = 7);
                      break;
                    case 6:
                      shy.login(function (e) {
                        "success" === e.status && t.feedbackAction(n);
                      });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, i);
            })();
          }),
          new Promise(function (e, s) {
            var o = function (e) {
                try {
                  a(i.next(e));
                } catch (e) {
                  s(e);
                }
              },
              r = function (e) {
                try {
                  a(i.throw(e));
                } catch (e) {
                  s(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(o, r);
              };
            a((i = i.apply(t, n)).next());
          })
        );
        var t, n, i;
      },
      helpBtnClick: function () {
        this.isCanClick() && this.feedbackAction(1);
      },
      positiveCallback: function () {
        this.showUIHelp(!0);
        var e = { newsid: this.newsId };
        this.dataReport(
          "".concat(this.reportData.prefix, ".diting_help.click"),
          e
        );
      },
      noHelpBtnClick: function () {
        this.isCanClick() && this.feedbackAction(0);
      },
      negativeCallback: function () {
        this.showUINoHelp(!0);
        var e = { newsid: this.newsId };
        this.dataReport(
          "".concat(this.reportData.prefix, ".diting_nohelp.click"),
          e
        );
      },
      showToast: function (e) {},
      isCanClick: function () {
        return this.isShowLeft && this.isShowRight;
      },
      showUIHelpOrNoHelp: function () {
        (this.isShowLeft = !0), (this.isShowRight = !0);
      },
    },
  };
Array || f.resolveComponent("st-action-sheet")();
var b = f._export_sfc(p, [
  [
    "render",
    function (e, t, n, i, s, o) {
      return f.e(
        { a: s.showAll },
        s.showAll
          ? {
              b: "url(https://st.gtimg.com/design/0e50aab64870ca74713c2bd5fcfb1cd8.png)",
              c: s.isShowLeft ? 1 : 0,
              d: f.o(function () {
                return o.helpBtnClick && o.helpBtnClick.apply(o, arguments);
              }, 5361),
              e: "url(https://st.gtimg.com/design/661ead5d32c116b94d50aeb0c42f112a.png)",
              f: s.isShowRight ? 1 : 0,
              g: f.o(function () {
                return o.noHelpBtnClick && o.noHelpBtnClick.apply(o, arguments);
              }, 5362),
              h: f.t(s.feedbackDesc),
              i: f.o(function () {
                return o.closeFeedback && o.closeFeedback.apply(o, arguments);
              }, 5363),
              j: f.f(
                [s.feedbackList.slice(0, 3), s.feedbackList.slice(3)],
                function (e, t, n) {
                  return {
                    a: f.f(e, function (e, n, i) {
                      return {
                        a: f.t(e.name),
                        b: f.o(
                          function (e) {
                            return o.handleStart(e, 3 * t + n);
                          },
                          5364,
                          n
                        ),
                        c: f.n(
                          s.feedbackSelectIndex.includes(3 * t + n)
                            ? "selected"
                            : "normal"
                        ),
                        d: n,
                        e: f.o(
                          function (e) {
                            return o.clickFeedback(3 * t + n);
                          },
                          5365,
                          n
                        ),
                      };
                    }),
                    b: t,
                  };
                }
              ),
              k: s.feedbackContent,
              l: f.o(function (e) {
                return (s.feedbackContent = e.detail.value);
              }, 5366),
              m: f.o(function () {
                return o.submitFeedback && o.submitFeedback.apply(o, arguments);
              }, 5367),
              n: f.n(o.isIphoneX ? "safearea" : ""),
              o: f.n(o.isShareType ? "share-type" : ""),
              p: f.n(
                o.isIphoneX && s.feedbackEditing && !o.isShareType
                  ? "editing"
                  : ""
              ),
              q: f.o(function (e) {
                return (s.showFeedbackPopup = e);
              }, 5368),
              r: f.p({
                visible: s.showFeedbackPopup,
                "picker-style": !0,
                beforeClose: o.beforeClose,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a1326eb1"],
]);
wx.createComponent(b);
