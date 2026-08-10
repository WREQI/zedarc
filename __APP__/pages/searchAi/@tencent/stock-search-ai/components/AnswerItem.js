var t = require("../../../../../@babel/runtime/helpers/typeof"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  s = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  l = function (t, e, n) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  m = function (t, e) {
    for (var n in e || (e = {})) u.call(e, n) && l(t, n, e[n]);
    if (a) {
      var i,
        o = s(a(e));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          h.call(e, n) && l(t, n, e[n]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return r(t, c(e));
  },
  f = function (t, e, n) {
    return new Promise(function (i, s) {
      var o = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            s(t);
          }
        },
        c = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, r);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  g = require("../utils/StockBridgeWrapper.js"),
  k = require("../../stock-news-sdk/index.js"),
  S = require("../hooks/useComponentConfigHooks.js"),
  v = require("../utils/envUtils.js");
function w(t) {
  return null == t
    ? "Unknown"
    : {
        INTJ: "NT",
        INTP: "NT",
        ENTJ: "NT",
        ENTP: "NT",
        INFJ: "NF",
        INFP: "NF",
        ENFJ: "NF",
        ENFP: "NF",
        ISTJ: "SJ",
        ISFJ: "SJ",
        ESTJ: "SJ",
        ESFJ: "SJ",
        ISTP: "SP",
        ISFP: "SP",
        ESTP: "SP",
        ESFP: "SP",
      }[t.toUpperCase()] || "Unknown";
}
var b = [
    "acctbiz.yongjinbao.com.cn",
    "acctbizapi.yongjinbao.com.cn",
    "acctbizcdn.yongjinbao.com.cn",
    "agreeclouddl.yongjinbao.com.cn",
    "aics.tenpay.com",
    "devzxg.finance.qq.com",
    "captcha.qq.com",
    "dgvs.guosen.com.cn",
    "fchatwebtrade.yongjinbao.com.cn",
    "file.finance.qq.com",
    "gu.qq.com",
    "game.weixin.qq.com",
    "hualin.zxgstock.com",
    "jt.ciccten.com",
    "proxy.finance.qq.com",
    "preproxy.finance.qq.com",
    "r1.pre.ciccten.com",
    "st.gtimg.com",
    "sbc.ciccwm.com",
    "store.gf.com.cn",
    "t-pub.cmschina.com",
    "web.ciccwm.com",
    "webapps.yongjinbao.com.cn",
    "wj.qq.com",
    "weixin.guosen.com.cn",
    "www.e95532.com",
    "www.tencentwm.com",
    "wzq.chinalions.cn",
    "www.txfund.com",
    "wzq.cms-cloud.com.cn",
    "wzq.ciccwm.com",
    "wzq.cmschina.com.cn",
    "wzq.cmschina.com",
    "wzq.gjzq.com.cn",
    "wzq.gf.com.cn",
    "wzq.gtimg.com",
    "wzq.guosen.com.cn",
    "wzq.newone.com.cn",
    "wzqa.chinalions.cn",
    "wzq.tenpay.com",
    "wzqa.ciccwm.com",
    "wzqa.cms-cloud.com.cn",
    "wzqa.gf.com.cn",
    "wzqa.guosen.com.cn",
    "wzqa.gjzq.com.cn",
    "wzqb.chinalions.cn",
    "wzqa.newone.com.cn",
    "wzqb.gf.com.cn",
    "wzqb.cms-cloud.com.cn",
    "wzqb.ciccwm.com",
    "wzqb.gjzq.com.cn",
    "wzqb.guosen.com.cn",
    "wzqb.newone.com.cn",
    "wzqcf.gtimg.com",
    "wzqcloud.ciccwm.com",
    "wzqcloudb.ciccwm.com",
    "wzqclouda.ciccwm.com",
    "wzqgma.chinalions.cn",
    "wzqgm.chinalions.cn",
    "wzqwt.chinalin.com",
    "wzqgmb.chinalions.cn",
    "zqact.chinalin.com",
    "zhaoshang.zxgstock.com",
    "zqact.tenpay.com",
    "zqact01.tenpay.com",
    "zqact02.tenpay.com",
    "zqact03.tenpay.com",
    "zqact04.tenpay.com",
    "zqact05.tenpay.com",
    "zxkf.cmschina.com.cn",
  ],
  q = {
    options: { styleIsolation: "shared" },
    name: "AnswerItem",
    components: {
      AnswerFunctionItem: function () {
        return "../../stock-ai-markdown/components/custom-components/AiAnswerFunctionItem.js";
      },
      AnswerFunctionXuanGu: function () {
        return "./AnswerFunctionXuanGu.js";
      },
      ShareButtonWrapper: function () {
        return "./ShareButtonWrapper.js";
      },
      McpQuoteItem: function () {
        return "./McpQuoteItem.js";
      },
      MarkdownRenderer: function () {
        return "../../stock-ai-markdown/components/markdown-renderer/wrap.js";
      },
      MbtiComponent: function () {
        return "../../stock-ai-markdown/components/custom-components/MbtiComponent.js";
      },
      AiExpertInfoCard: function () {
        return "./expertAnalysis/AiExpertInfoCard.js";
      },
      AnswerProcessPanel: function () {
        return "./AnswerProcessPanel.js";
      },
    },
    props: {
      item: {
        required: !0,
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { required: !0, type: String },
      outerIndex: { required: !0, type: Number },
      searchfrom: { type: String, default: "" },
      curSessionId: { required: !1, type: String, default: "" },
      subScene: { required: !1, type: String, default: "" },
      isViewShareAnswer: { required: !1, type: Boolean, default: !1 },
      useIncrementalModel: { required: !0, type: Boolean, default: !1 },
      mockTradeAbtUser: { required: !1, type: Boolean, default: !1 },
      defaultAiModel: { required: !1, type: String, default: "" },
      hideActions: { required: !1, type: Boolean, default: !1 },
      aiExpert: { required: !1, type: Object, default: null },
    },
    emits: ["disable-outer-auto-scroll"],
    setup: function (t) {
      var e = p.inject("isHalfScreen", !1),
        n = S.useLongPressHooks(t);
      return {
        isHalfScreen: e,
        questionLongPress: n.questionLongPress,
        parseMarkdownToText: n.parseMarkdownToText,
        copyToPasteboard: n.copyToPasteboard,
        hideQuestionLongPressMenu: n.hideQuestionLongPressMenu,
      };
    },
    data: function () {
      return {
        zxgDocs: [],
        outerDocs: [],
        showOuterDocs: !1,
        cacheLaseRecalStr: "",
        cacheLaseQuoteStr: "",
        showThinking: !1,
        thinkingStartTime: -1,
        thinkingEndTime: -1,
        thinkingCoastTime: -1,
        isMP: !0,
        isWzq: !1,
        isWzqXcx: !1,
        isServerXianPin: !1,
        hasClickXianPinChange: !1,
        isHasInnerDocs: !1,
        statusLines: [],
        statusLineIdCounter: 0,
        hasTransitioned: !1,
        statusAnimTimerIds: [],
        quoteLines: [],
        quoteLineIdCounter: 0,
        hasQuoteTransitioned: !1,
        quoteAnimTimerIds: [],
      };
    },
    computed: {
      permissionError: function () {
        return !(!this.item || !this.item.permissionError);
      },
      serverError: function () {
        return !(!this.item || !this.item.serverError);
      },
      answerFinish: function () {
        return !(!this.item || !this.item.answerFinish);
      },
      recal: function () {
        return (this.item && this.item.recal) || "";
      },
      quote: function () {
        return (this.item && this.item.quote) || "";
      },
      reply: function () {
        return (this.item && this.item.reply) || "";
      },
      processSteps: function () {
        return (this.item && this.item.processSteps) || [];
      },
      isTrpcAgentChain: function () {
        return !(
          !this.item || this.item.answerChainMode !== S.ANSWER_CHAIN_TRPC_AGENT
        );
      },
      docs: function () {
        return (this.item && this.item.docs) || [];
      },
      factInnerDocs: function () {
        return (this.item && this.item.factInnerDocs) || [];
      },
      factOuterDocs: function () {
        return (this.item && this.item.factOuterDocs) || [];
      },
      curRequestId: function () {
        return (this.item && this.item.requestId) || "";
      },
      commentStatus: function () {
        return (this.item && this.item.commentStatus) || 0;
      },
      aimodel: function () {
        return (this.item && this.item.aimodel) || this.defaultAiModel || "";
      },
      thinking: function () {
        return (this.item && this.item.thinking) || "";
      },
      sseStatus: function () {
        var t = this.item && this.item.sseStatus;
        return null == t ? S.SseStatus.BEGIN_CONNECT : t;
      },
      offlineQuestion: function () {
        return !(!this.item || !this.item.isOfflineQuestion);
      },
      functionTips: function () {
        return (this.item && this.item.functionTips) || "";
      },
      functionXuanGuTips: function () {
        return (this.item && this.item.functionXuanGuTips) || "";
      },
      functionObj: function () {
        return (this.item && this.item.functionObj) || null;
      },
      serveBusyTips: function () {
        return (this.item && this.item.serveBusyTips) || "";
      },
      mcpQuote: function () {
        var t = this.item && this.item.mcpQuote;
        return null == t ? "正在检索腾讯金融数据库..." : t;
      },
      isMcpAgentMessage: function () {
        return !(!this.item || !this.item.isMcpAgentMessage);
      },
      isSmartServiceMessage: function () {
        return !(!this.item || !this.item.isSmartServiceMessage);
      },
      businessPluginMessage: function () {
        var t = this.item && this.item.businessPluginMessage;
        return null == t ? "" : t;
      },
      newUserPickStock: function () {
        return !(!this.item || !this.item.newUserPickStock);
      },
      serverMessageCode: function () {
        return (this.item && this.item.serverMessageCode) || 0;
      },
      fromHistory: function () {
        return !(!this.item || !this.item.fromHistory);
      },
      illegalQuestion: function () {
        return !(!this.item || !this.item.illegalQuestion);
      },
      canShowXianPinLayout: function () {
        return !1;
      },
      canShowQuoteLoayout: function () {
        return !(
          (this.isTrpcAgentChain && 0 !== this.processSteps.length) ||
          this.serverError ||
          "已暂停生成" === this.reply ||
          this.isEmptyQuoteAnswer ||
          this.isServerError ||
          this.isMcpAgentMessage ||
          this.isSmartServiceMessage
        );
      },
      canShowDisclaimer: function () {
        return (
          this.answerFinish &&
          !this.serverError &&
          "已暂停生成" !== this.reply &&
          "很抱歉，服务器繁忙，请稍后再试试" !== this.reply
        );
      },
      curRecal: function () {
        return this.recal;
      },
      mainThinking: function () {
        return this.thinking;
      },
      isThinkingStreaming: function () {
        return this.sseStatus === S.SseStatus.ON_REASON_CONTENT;
      },
      isReplyStreaming: function () {
        return this.sseStatus === S.SseStatus.ON_CONTENT;
      },
      mainReply: function () {
        return this.reply;
      },
      getAttitudeIconCenter: function () {
        return "" !== this.functionXuanGuTips
          ? "attitudeIconCenterWzq"
          : "attitudeIconCenter";
      },
      arrowIconImage: function () {
        return "https://st.gtimg.com/design/3554240d56e5e6647e543bb5e0fbd279.png";
      },
      rightArrowIcon: function () {
        return "https://st.gtimg.com/design/96f6390ba0d96509e2ff03debf326043.png";
      },
      searchIconImage: function () {
        return "https://st.gtimg.com/design/d7f05fc4c8f0bdbff3e11f835dae330e.png";
      },
      isEmptyQuoteAnswer: function () {
        return (
          0 === this.quote.length &&
          (this.reply.length > 0 || this.thinking.length > 0)
        );
      },
      isServerError: function () {
        return (
          (this.sseStatus === S.SseStatus.ON_ERROR ||
            this.sseStatus === S.SseStatus.ON_CLOSE) &&
          0 === this.reply.length
        );
      },
      getThingTipsText: function () {
        if (this.offlineQuestion || this.isViewShareAnswer || this.fromHistory)
          return "深度思考已完成";
        var t = this.thinkingCoastTime;
        return this.sseStatus === S.SseStatus.ON_REASON_CONTENT
          ? "思考中"
          : -1 === t
          ? "思考已取消..."
          : t > 0 && !this.offlineQuestion
          ? "深度思考已完成（用时".concat(
              Math.round(this.thinkingCoastTime / 1e3),
              "秒）"
            )
          : "深度思考已完成";
      },
      isThinkingStatus: function () {
        return "思考中" === this.getThingTipsText;
      },
      currentStatusText: function () {
        var t,
          e = this.statusLines.find(function (t) {
            return "show" === t.transitionClass;
          });
        return e
          ? e.text
          : (null == (t = this.statusLines[0]) ? void 0 : t.text) || "";
      },
      quoteStatusText: function () {
        return this.getQuoteStr();
      },
      isQuoteRecalStatus: function () {
        return ["正在思考", "正在查阅相关资料"].includes(this.quoteStatusText);
      },
      currentQuoteText: function () {
        var t,
          e = this.quoteLines.find(function (t) {
            return "show" === t.transitionClass;
          });
        return e
          ? e.text
          : (null == (t = this.quoteLines[0]) ? void 0 : t.text) || "";
      },
      xianPinRightArrowSrc: function () {
        return "https://st.gtimg.com/design/0ecf8764d59764f8cd2f7628a289f2e5.png";
      },
      xuanguFunctionObj: function () {
        var t;
        if (null == (t = this.functionObj) ? void 0 : t.content)
          return JSON.parse(this.functionObj.content.message);
      },
      xuanguMbtiFunctionObj: function () {
        return this.functionObj.mbti;
      },
      isMbtiPickStock: function () {
        return this.serverMessageCode === S.SERVER_CODE_MBTI_CHOOSE;
      },
      isMbtiAnswer: function () {
        return this.serverMessageCode === S.SERVER_CODE_MBTI_ANSWER;
      },
      bottomTipsStr: function () {
        return "内容由AI生成，不构成投资建议。请咨询投顾后再操作。";
      },
    },
    watch: {
      getThingTipsText: {
        handler: function (t, e) {
          var n = this;
          if (void 0 === e)
            return (
              (this.statusLineIdCounter += 1),
              void (this.statusLines = [
                {
                  id: this.statusLineIdCounter,
                  text: t,
                  transitionClass: "show",
                },
              ])
            );
          if (t !== e) {
            if (!this.hasTransitioned)
              return (
                (this.hasTransitioned = !0),
                (this.statusLineIdCounter += 1),
                void (this.statusLines = [
                  {
                    id: this.statusLineIdCounter,
                    text: t,
                    transitionClass: "show",
                  },
                ])
              );
            (this.statusLines = this.statusLines
              .filter(function (t) {
                return "show" === t.transitionClass;
              })
              .map(function (t) {
                return d(m({}, t), { transitionClass: "exit-to-top" });
              })),
              (this.statusLineIdCounter += 1);
            var s = {
              id: this.statusLineIdCounter,
              text: t,
              transitionClass: "enter-from-bottom",
            };
            this.statusLines = [].concat(i(this.statusLines), [s]);
            var o =
              "undefined" != typeof requestAnimationFrame
                ? function (t) {
                    var e = requestAnimationFrame(t);
                    n.statusAnimTimerIds.push({ type: "rAF", id: e });
                  }
                : function (t) {
                    var e = setTimeout(t, 16);
                    n.statusAnimTimerIds.push({ type: "timeout", id: e });
                  };
            o(function () {
              o(function () {
                n.statusLines = n.statusLines.map(function (t) {
                  return t.id === s.id
                    ? d(m({}, t), { transitionClass: "show" })
                    : t;
                });
              });
            });
            var r = setTimeout(function () {
              n.statusLines = n.statusLines.filter(function (t) {
                return "exit-to-top" !== t.transitionClass;
              });
            }, 250);
            this.statusAnimTimerIds.push({ type: "timeout", id: r });
          }
        },
        immediate: !0,
      },
      quoteStatusText: {
        handler: function (t, e) {
          var n = this;
          if (void 0 === e)
            return (
              (this.quoteLineIdCounter += 1),
              void (this.quoteLines = [
                {
                  id: this.quoteLineIdCounter,
                  text: t,
                  transitionClass: "show",
                },
              ])
            );
          if (t !== e) {
            if (!this.hasQuoteTransitioned)
              return (
                (this.hasQuoteTransitioned = !0),
                (this.quoteLineIdCounter += 1),
                void (this.quoteLines = [
                  {
                    id: this.quoteLineIdCounter,
                    text: t,
                    transitionClass: "show",
                  },
                ])
              );
            (this.quoteLines = this.quoteLines
              .filter(function (t) {
                return "show" === t.transitionClass;
              })
              .map(function (t) {
                return d(m({}, t), { transitionClass: "exit-to-top" });
              })),
              (this.quoteLineIdCounter += 1);
            var s = {
              id: this.quoteLineIdCounter,
              text: t,
              transitionClass: "enter-from-bottom",
            };
            this.quoteLines = [].concat(i(this.quoteLines), [s]);
            var o =
              "undefined" != typeof requestAnimationFrame
                ? function (t) {
                    var e = requestAnimationFrame(t);
                    n.quoteAnimTimerIds.push({ type: "rAF", id: e });
                  }
                : function (t) {
                    var e = setTimeout(t, 16);
                    n.quoteAnimTimerIds.push({ type: "timeout", id: e });
                  };
            o(function () {
              o(function () {
                n.quoteLines = n.quoteLines.map(function (t) {
                  return t.id === s.id
                    ? d(m({}, t), { transitionClass: "show" })
                    : t;
                });
              });
            });
            var r = setTimeout(function () {
              n.quoteLines = n.quoteLines.filter(function (t) {
                return "exit-to-top" !== t.transitionClass;
              });
            }, 250);
            this.quoteAnimTimerIds.push({ type: "timeout", id: r });
          }
        },
        immediate: !0,
      },
      functionObj: function () {},
      offlineQuestion: {
        handler: function (t) {
          this.offlineQuestion && (this.showThinking = !1);
        },
        immediate: !0,
      },
      sseStatus: function () {
        switch (this.sseStatus) {
          case S.SseStatus.ON_RECALL:
          case S.SseStatus.ON_QUOTE:
            break;
          case S.SseStatus.ON_REASON_CONTENT:
            (this.thinkingStartTime = Date.now()),
              this.fromHistory ||
                this.offlineQuestion ||
                this.isViewShareAnswer ||
                (this.showThinking = !0);
            break;
          case S.SseStatus.ON_CONTENT:
            (this.thinkingEndTime = Date.now()),
              (this.thinkingCoastTime =
                this.thinkingEndTime - this.thinkingStartTime);
            break;
          case S.SseStatus.ON_CLOSE:
          case S.SseStatus.ON_ERROR:
            break;
          case S.SseStatus.ON_SERVER_XP:
            this.isServerXianPin = !0;
        }
      },
      reply: function () {},
      docs: {
        handler: function (t) {
          var e = this;
          this.docs.length > 0 &&
            ((this.zxgDocs = []),
            (this.outerDocs = []),
            this.docs.forEach(function (t) {
              null != t.url &&
              (t.url.startsWith("https://gu.qq.com/") ||
                t.url.startsWith("http://gu.qq.com/") ||
                "" === t.url)
                ? e.zxgDocs.push(t)
                : e.outerDocs.push(t);
            }));
        },
        immediate: !0,
      },
      factInnerDocs: {
        handler: function (t) {
          var e;
          (null == (e = this.factInnerDocs) ? void 0 : e.length) > 0
            ? (this.isHasInnerDocs = !0)
            : (this.isHasInnerDocs = !1);
        },
        immediate: !0,
      },
      factOuterDocs: {
        handler: function (t) {
          var e;
          null == (e = this.factOuterDocs) || e.length;
        },
        immediate: !0,
      },
      answerFinish: function () {
        if (this.answerFinish && !this.isMbtiPickStock) {
          var t = this.getEffectiveAnswerContent();
          this.$emit(
            "check-content",
            this.curRequestId,
            this.outerIndex,
            t,
            this.offlineQuestion,
            this.aimodel,
            this.newUserPickStock,
            this.serverMessageCode
          );
          var e = this.getHrefStockList();
          e &&
            e.length &&
            g.StockBridge.report("base.ai_search.xuangu_stock_expose", {
              requestid: this.curRequestId,
              session: this.curSessionId,
              subScene: this.subScene,
              contentId: e.join(","),
            });
        }
      },
    },
    created: function () {
      (this.thinkingStartTime = Date.now()),
        this.initThinkingState(),
        this.isViewShareAnswer && (this.showThinking = !1),
        this.sseStatus !== S.SseStatus.ON_REASON_CONTENT &&
          this.sseStatus !== S.SseStatus.BEGIN_CONNECT &&
          this.thinking.length > 0 &&
          (this.thinkingCoastTime = 0);
    },
    beforeDestroy: function () {
      this.statusAnimTimerIds.forEach(function (t) {
        var e = t.type,
          n = t.id;
        "timeout" === e
          ? clearTimeout(n)
          : "rAF" === e && cancelAnimationFrame(n);
      }),
        (this.statusAnimTimerIds = []),
        this.quoteAnimTimerIds.forEach(function (t) {
          var e = t.type,
            n = t.id;
          "timeout" === e
            ? clearTimeout(n)
            : "rAF" === e && cancelAnimationFrame(n);
        }),
        (this.quoteAnimTimerIds = []);
    },
    methods: {
      availableDocs: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          e = [this.factInnerDocs, this.factOuterDocs, this.docs].find(
            function (t) {
              return (null == t ? void 0 : t.length) > 0;
            }
          );
        return null == e ? void 0 : e[t - 1];
      },
      getEffectiveAnswerContent: function () {
        return S.getAnswerContentForCheck(this.item);
      },
      getHrefStockList: function () {
        for (
          var t,
            e = /\[([^\]]+)\]\(([^)]+)\)/g,
            n = [],
            i = this.getEffectiveAnswerContent();
          null !== (t = e.exec(i));

        ) {
          var s = t[2] && /stockDetail\?stockcode=([^&#\s]+)/.exec(t[2]);
          s && s.length > 1 && n.push(s[1]);
        }
        return n;
      },
      mdRuleFn: function (t) {
        var e = this;
        (t.renderer.rules.link_open = function (t, n, i, s, o) {
          var r = t[n],
            c = r.attrGet("href");
          if ("@ref" === c)
            return (r.meta = r.meta || {}), (r.meta.isSpecialRef = !0), "";
          if (c && c.startsWith("qqstock")) {
            var a = e.parseQQStockLink(c);
            return !a || e.isSmartServiceMessage
              ? ((r.meta = r.meta || {}),
                (r.meta.isSmartServiceQQStockLink = !0),
                (r.meta.href = c),
                "")
              : ((r.meta = r.meta || {}),
                (r.meta.isQQStockLink = !0),
                (r.meta.params = a),
                "");
          }
          return c && (c.startsWith("http://") || c.startsWith("https://"))
            ? ((r.meta = r.meta || {}),
              (r.meta.isExternalLink = !0),
              (r.meta.href = c),
              "")
            : c && c.startsWith("tel:")
            ? ((r.meta = r.meta || {}),
              (r.meta.isTelLink = !0),
              (r.meta.href = c),
              "")
            : (r.attrSet("class", "_a"), o.renderToken(t, n, i));
        }),
          (t.renderer.rules.text = function (t, n) {
            var i,
              s,
              o,
              r,
              c,
              a,
              u,
              h,
              l,
              m = t[n];
            if (
              n > 0 &&
              "link_open" === t[n - 1].type &&
              (null == (i = t[n - 1].meta) ? void 0 : i.isSpecialRef)
            ) {
              var d = m.content;
              return d
                .split(",")
                .map(function (t) {
                  var n = t.trim();
                  if (!e.availableDocs(Number(n))) return "";
                  var i = n,
                    s = /^\d{2}$/.test(i),
                    o = "_a _quoteLink";
                  return (
                    e.isHasInnerDocs && (o += " _stock-type"),
                    s && (o += " _double-digit"),
                    '<a data-id="'
                      .concat(n, '" data-origin-ref="')
                      .concat(d, '" class="')
                      .concat(o, '">')
                      .concat(i, "</a>")
                  );
                })
                .join("");
            }
            if (
              n > 0 &&
              "link_open" === t[n - 1].type &&
              (null == (s = t[n - 1].meta) ? void 0 : s.isQQStockLink)
            ) {
              var f = m.content,
                p = null == (o = t[n - 1].meta) ? void 0 : o.params,
                g = "_a _".concat(null == p ? void 0 : p.type);
              return "<a data-stock="
                .concat(JSON.stringify(p), ' class="')
                .concat(g, '" data-content="')
                .concat(f, '">')
                .concat(f, "</a>");
            }
            if (
              n > 0 &&
              "link_open" === t[n - 1].type &&
              (null == (r = t[n - 1].meta) ? void 0 : r.isExternalLink)
            ) {
              var k = m.content;
              return '<a href="'
                .concat(
                  null == (c = t[n - 1].meta) ? void 0 : c.href,
                  '" class="',
                  "_a _smart-service-universal-link _external-link",
                  '" target="_blank" rel="noopener noreferrer">'
                )
                .concat(k, "</a>");
            }
            if (
              n > 0 &&
              "link_open" === t[n - 1].type &&
              (null == (a = t[n - 1].meta) ? void 0 : a.isTelLink)
            ) {
              var S = m.content;
              return '<a href="'
                .concat(
                  null == (u = t[n - 1].meta) ? void 0 : u.href,
                  '" class="',
                  "_a _tel-link",
                  '">'
                )
                .concat(S, "</a>");
            }
            if (
              n > 0 &&
              "link_open" === t[n - 1].type &&
              (null == (h = t[n - 1].meta)
                ? void 0
                : h.isSmartServiceQQStockLink)
            ) {
              var v = m.content;
              return '<a href="'
                .concat(
                  null == (l = t[n - 1].meta) ? void 0 : l.href,
                  '" class="',
                  "_a _smart-service-universal-link _smart-service-qqstock-link",
                  '">'
                )
                .concat(v, "</a>");
            }
            return m.content;
          }),
          (t.renderer.rules.link_close = function (t, e, n, i, s) {
            var o, r, c, a, u, h, l, m, d, f;
            return (null == (r = null == (o = t[e - 2]) ? void 0 : o.meta)
              ? void 0
              : r.isSpecialRef) ||
              (null == (a = null == (c = t[e - 2]) ? void 0 : c.meta)
                ? void 0
                : a.isQQStockLink) ||
              (null == (h = null == (u = t[e - 2]) ? void 0 : u.meta)
                ? void 0
                : h.isExternalLink) ||
              (null == (m = null == (l = t[e - 2]) ? void 0 : l.meta)
                ? void 0
                : m.isTelLink) ||
              (null == (f = null == (d = t[e - 2]) ? void 0 : d.meta)
                ? void 0
                : f.isSmartServiceQQStockLink)
              ? ""
              : s.renderToken(t, e, n);
          });
      },
      parseQQStockLink: function (t) {
        var e = decodeURIComponent(t);
        if (!e.startsWith("qqstock://")) return null;
        var i = e.split("?"),
          o = n(i, 2),
          r = o[0],
          c = o[1],
          a = r.replace("qqstock://", ""),
          u = (function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = e.filterEmpty,
              o = void 0 === i || i,
              r = {};
            if (!t) return r;
            var c,
              a = (t.startsWith("?") ? t.slice(1) : t).split("&"),
              u = s(a);
            try {
              for (u.s(); !(c = u.n()).done; ) {
                var h = c.value,
                  l = h.split("="),
                  m = n(l, 2),
                  d = m[0],
                  f = m[1],
                  p = decodeURIComponent(d),
                  g = void 0 === f ? "" : decodeURIComponent(f);
                (o && "" === g) ||
                  (p in r
                    ? Array.isArray(r[p])
                      ? r[p].push(g)
                      : (r[p] = [r[p], g])
                    : (r[p] = g));
              }
            } catch (t) {
              u.e(t);
            } finally {
              u.f();
            }
            return r;
          })(c),
          h = u.stockcode,
          l = u.gdId;
        return "stockDetail" === a && h
          ? { type: "stockDetail", stockcode: h }
          : "stockBasketDetail" === a && l
          ? { type: "stockBasketDetail", gdId: l }
          : "hs-index-etf-page" === a
          ? { type: "etfPageLink" }
          : null;
      },
      parseQQStockLinkMP: function (t) {
        var e = decodeURIComponent(t);
        if (!e.startsWith("qqstock://")) return null;
        var i = e.split("?"),
          o = n(i, 2),
          r = o[0],
          c = o[1],
          a = r.replace("qqstock://", ""),
          u = {};
        if (c) {
          var h,
            l = c.split("&"),
            m = s(l);
          try {
            for (m.s(); !(h = m.n()).done; ) {
              var d = h.value.split("="),
                f = n(d, 2),
                p = f[0],
                g = f[1];
              p && (u[decodeURIComponent(p)] = g ? decodeURIComponent(g) : "");
            }
          } catch (t) {
            m.e(t);
          } finally {
            m.f();
          }
        }
        return { path: a, params: u };
      },
      onLinkClick: function () {
        var t,
          e,
          n,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (
          (this.isSmartServiceMessage &&
            g.StockBridge.report("base.ai_search.smart_service_link_click", {
              searchfrom: this.searchfrom,
              requestid: this.curRequestId,
              session: this.curSessionId,
              url: i,
            }),
          i && i.startsWith("qqstock"))
        ) {
          var s = this.parseQQStockLinkMP(i);
          if (
            (this.$emit("keepWzqPos"),
            "stockDetail" === (null == s ? void 0 : s.path))
          ) {
            var o = function (t) {
                var e = ["sz", "sh", "hk", "us"],
                  n = t.substring(0, 2).toLocaleLowerCase();
                return {
                  stockCode: t.replace(n, ""),
                  stockMarket: -1 === e.indexOf(n) ? n : e.indexOf(n),
                };
              },
              r = o(
                null == (t = null == s ? void 0 : s.params)
                  ? void 0
                  : t.stockcode
              ),
              c = r.stockCode,
              a = r.stockMarket;
            if (
              (g.StockBridge.report("base.ai_search.xuangu_stock_click", {
                requestid: this.curRequestId,
                session: this.curSessionId,
                subScene: this.subScene,
                contentId: c,
              }),
              this.isHalfScreen && this.isWzq)
            ) {
              var u = "https://wzq.tenpay.com/mp/v2/index.html"
                .concat("#/hq/stock/", a, "/")
                .concat(c);
              g.StockBridge.openExtraWebview(u);
            } else
              k.sdk.navigateToStockDetail({
                instance: this,
                stockCode: c,
                stockMarket: a,
                symbol:
                  null == (e = null == s ? void 0 : s.params)
                    ? void 0
                    : e.stockcode,
              });
          } else if ("stockBasketDetail" === (null == s ? void 0 : s.path)) {
            var h =
              null == (n = null == s ? void 0 : s.params) ? void 0 : n.gdId;
            p.StockRouter.routeTo({
              name: "stockBasket_detail",
              query: { gdId: h },
            });
          } else
            "hs-index-etf-page" === (null == s ? void 0 : s.path) &&
              (g.StockBridge.report(
                "base.ai_search.xuangu_content_link_click",
                { requestid: this.curRequestId, session: this.curSessionId }
              ),
              p.StockRouter.routeTo({ name: "hs-index-etf-page", query: {} }));
        } else if (i.startsWith("/pages"))
          i.startsWith("/pages/index")
            ? p.wx$1.reLaunch({ url: i })
            : p.wx$1.navigateTo({ url: i });
        else if (i.startsWith("tel")) {
          var l = i.replace(/^tel:\/?\/?/, "").trim();
          p.wx$1.makePhoneCall({
            phoneNumber: l,
            success: function () {},
            fail: function (t) {},
            complete: function () {},
          });
        } else
          i.startsWith("http") &&
            ((function (t) {
              if (!t || "string" != typeof t) return !1;
              var e = (function (t) {
                try {
                  var e = t.match(/^https?:\/\/([^/:?#]+)/i);
                  return e && e[1] ? e[1] : "";
                } catch (t) {
                  return "";
                }
              })(t);
              return !!e && b.includes(e);
            })(i)
              ? g.StockBridge.openExtraWebview(i)
              : g.StockBridge.toast("链接暂时无法访问，建议更换问法", "none"));
      },
      onQuoteLinkClick: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        g.StockBridge.report("base.ai_search.content_link_click");
        t.href;
        var e = t.dataId,
          n = void 0 === e ? "" : e,
          i = t.dataOriginRef,
          s = void 0 === i ? "" : i;
        this.$emit(
          "on-quote-click",
          this.isMcpAgentMessage,
          this.outerIndex,
          n,
          s
        );
      },
      onContentClick: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = "",
          n = "",
          i = "",
          s = "";
        if (
          ((e = t["data-id"]),
          (i = t["data-stock"]),
          (s = t["data-content"]),
          (n = t["data-origin-ref"]),
          this.isSmartServiceMessage &&
            g.StockBridge.report("base.ai_search.smart_service_link_click", {
              searchfrom: this.searchfrom,
              requestid: this.curRequestId,
              session: this.curSessionId,
              url: "",
            }),
          e && n)
        )
          return (
            this.$emit(
              "on-quote-click",
              this.isMcpAgentMessage,
              this.outerIndex,
              e,
              n
            ),
            g.StockBridge.report("base.ai_search.content_link_click"),
            void this.$emit("keepWzqPos")
          );
        if (i && "string" == typeof i) {
          this.$emit("keepWzqPos");
          try {
            var o = JSON.parse(i);
            if ("stockDetail" === (null == o ? void 0 : o.type)) {
              var r = function (t) {
                  var e = ["sz", "sh", "hk", "us"],
                    n = t.substring(0, 2).toLocaleLowerCase();
                  return {
                    stockCode: t.replace(n, ""),
                    stockMarket: -1 === e.indexOf(n) ? n : e.indexOf(n),
                  };
                },
                c = r(null == o ? void 0 : o.stockcode),
                a = c.stockCode,
                u = c.stockMarket;
              if (
                (g.StockBridge.report("base.ai_search.xuangu_stock_click", {
                  requestid: this.curRequestId,
                  session: this.curSessionId,
                  subScene: this.subScene,
                  contentId: (null == o ? void 0 : o.stockcode) || "",
                }),
                this.isHalfScreen && this.isWzq)
              )
                if (v.IS_LITE_MODE);
                else {
                  var h = "https://wzq.tenpay.com/mp/v2/index.html"
                    .concat("#/hq/stock/", u, "/")
                    .concat(a);
                  g.StockBridge.openExtraWebview(h);
                }
              else
                k.sdk.navigateToStockDetail({
                  instance: this,
                  stockCode: a,
                  stockMarket: u,
                  symbol: null == o ? void 0 : o.stockcode,
                });
            } else if ("stockBasketDetail" === (null == o ? void 0 : o.type)) {
              var l = null == o ? void 0 : o.gdId;
              p.StockRouter.routeTo({
                name: "stockBasket_detail",
                query: { gdId: l },
              });
            } else
              "etfPageLink" === (null == o ? void 0 : o.type) &&
                (g.StockBridge.report(
                  "base.ai_search.xuangu_content_link_click",
                  {
                    requestid: this.curRequestId,
                    session: this.curSessionId,
                    contentId: s,
                  }
                ),
                p.StockRouter.routeTo({
                  name: "hs-index-etf-page",
                  query: {},
                }));
            return;
          } catch (t) {
            return;
          }
        }
      },
      onMBTIvalueChange: function (t) {},
      hideOrShowThinking: function () {
        (this.showThinking = !this.showThinking),
          this.isWzqXcx && this.saveThinkingState(),
          this.showThinking
            ? g.StockBridge.report(
                "base.ai_search.thought_process_expand_click",
                { requestid: this.curRequestId }
              )
            : g.StockBridge.report(
                "base.ai_search.thought_process_putaway_click",
                { requestid: this.curRequestId }
              );
      },
      initThinkingState: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isViewShareAnswer) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void (this.showThinking = !1));
                    case 2:
                      return (t.next = 4), this.getThinkingState();
                    case 4:
                      null !== (n = t.sent)
                        ? (this.showThinking = n)
                        : this.fromHistory || this.offlineQuestion
                        ? (this.showThinking = !1)
                        : (this.showThinking = !0);
                    case 6:
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
      getThinkingState: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n, i, s, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        "ai_thinking_state",
                        (n = null),
                        (t.next = 5),
                        g.StockBridge.getStorageSync("ai_thinking_state")
                      );
                    case 5:
                      if (
                        !(
                          (i = t.sent) &&
                          i.data &&
                          this.curSessionId &&
                          void 0 !== this.outerIndex
                        )
                      ) {
                        t.next = 16;
                        break;
                      }
                      (t.prev = 7), (s = JSON.parse(i.data)), (t.next = 14);
                      break;
                    case 11:
                      return (
                        (t.prev = 11),
                        (t.t0 = t.catch(7)),
                        t.abrupt("return", null)
                      );
                    case 14:
                      (o = s[this.curSessionId]) &&
                        void 0 !== o[this.outerIndex] &&
                        (n = o[this.outerIndex]);
                    case 16:
                      return t.abrupt("return", n);
                    case 19:
                      return (
                        (t.prev = 19),
                        (t.t1 = t.catch(0)),
                        t.abrupt("return", null)
                      );
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [
                [0, 19],
                [7, 11],
              ]
            );
          })
        );
      },
      saveThinkingState: function () {
        return f(
          this,
          null,
          e().mark(function n() {
            var i, s, o, r, c, a, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (i = "ai_thinking_state"),
                        this.curSessionId && void 0 !== this.outerIndex)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (s = String(this.curSessionId)),
                        (o = Number(this.outerIndex)),
                        (r = Boolean(this.showThinking)),
                        (e.next = 9),
                        g.StockBridge.getStorageSync(i)
                      );
                    case 9:
                      if (((c = e.sent), (a = {}), c && c.data))
                        try {
                          a = JSON.parse(c.data);
                        } catch (t) {
                          a = {};
                        }
                      ("object" != t(a) || null === a || Array.isArray(a)) &&
                        (a = {}),
                        a[s] || (a[s] = {}),
                        (a[s][o] = r),
                        (u = Object.keys(a)).length > 50 &&
                          u.slice(0, u.length - 50).forEach(function (t) {
                            delete a[t];
                          }),
                        g.StockBridge.setStorage(
                          i,
                          JSON.stringify(a),
                          function (t) {}
                        ),
                        (e.next = 20);
                      break;
                    case 18:
                      (e.prev = 18), (e.t0 = e.catch(0));
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[0, 18]]
            );
          })
        );
      },
      sendEventShowDisclaimer: function () {
        this.$emit("show-disclaimer");
      },
      clickLikeIncon: function () {
        var t, e;
        if (this.questionLongPress) this.hideQuestionLongPressMenu();
        else if (1 == this.commentStatus)
          this.$emit(
            "cancel-zan",
            this.curRequestId,
            this.outerIndex,
            this.offlineQuestion,
            this.aimodel,
            this.newUserPickStock,
            this.serverMessageCode
          );
        else if (
          (this.$emit(
            "click-zan",
            this.curRequestId,
            this.outerIndex,
            this.offlineQuestion,
            this.aimodel,
            this.newUserPickStock,
            this.serverMessageCode
          ),
          this.isMbtiAnswer)
        ) {
          var n = w(
            null == (e = null == (t = this.functionObj) ? void 0 : t.mbti)
              ? void 0
              : e.value
          );
          g.StockBridge.report("base.ai_search.mbti_answer_content_like", {
            subScene: "newuser_mbti",
            requestid: this.curRequestId,
            mbti_strategy: n,
          });
        }
      },
      clickUnLikeIcon: function () {
        var t, e;
        if (this.questionLongPress) this.hideQuestionLongPressMenu();
        else if (2 == this.commentStatus)
          this.$emit(
            "cancel-cai",
            this.curRequestId,
            this.outerIndex,
            this.offlineQuestion,
            this.aimodel,
            this.newUserPickStock,
            this.serverMessageCode
          );
        else if (
          (this.$emit(
            "click-cai",
            this.curRequestId,
            this.outerIndex,
            this.offlineQuestion,
            this.aimodel,
            this.newUserPickStock,
            this.serverMessageCode
          ),
          this.isMbtiAnswer)
        ) {
          var n = w(
            null == (e = null == (t = this.functionObj) ? void 0 : t.mbti)
              ? void 0
              : e.value
          );
          g.StockBridge.report("base.ai_search.mbti_answer_content_un_like", {
            subScene: "newuser_mbti",
            requestid: this.curRequestId,
            mbti_strategy: n,
          });
        }
      },
      clickCopyAllIcon: function () {
        var t, e;
        if (this.questionLongPress) this.hideQuestionLongPressMenu();
        else {
          if (
            (g.StockBridge.report("jichu.ai_search.answer_copyall_tap", {
              searchfrom: this.searchfrom,
              aimodel: this.aimodel,
              requestid: this.curRequestId,
            }),
            this.isMbtiAnswer)
          ) {
            var n = w(
              null == (e = null == (t = this.functionObj) ? void 0 : t.mbti)
                ? void 0
                : e.value
            );
            g.StockBridge.report("base.ai_search.mbti_answer_copyall_tap", {
              subScene: "newuser_mbti",
              requestid: this.curRequestId,
              mbti_strategy: n,
            });
          }
          var i = this.mainReply,
            s = this.parseMarkdownToText(i);
          this.copyToPasteboard(s, "已全部复制");
        }
      },
      clickShareIcon: function () {
        var t, e, n;
        if (this.questionLongPress) this.hideQuestionLongPressMenu();
        else {
          var i = this.isXuanGuPluginType(this.functionObj),
            s = this.mainReply,
            o =
              (null == s ? void 0 : s.substr(0, 300)) ||
              (i ? this.functionXuanGuTips : ""),
            r = this.parseMarkdownToText(o).replace(/\n/g, ""),
            c =
              "stocklist-mbti" ===
              (null == (t = this.functionObj) ? void 0 : t.name),
            a = {
              answer: r,
              requestId: this.curRequestId,
              functionObj: this.functionObj,
              isMbti: c,
            };
          if (this.isMbtiAnswer) {
            var u = w(
              null == (n = null == (e = this.functionObj) ? void 0 : e.mbti)
                ? void 0
                : n.value
            );
            g.StockBridge.report("base.ai_search.mbti_answer_share_tap", {
              subScene: "newuser_mbti",
              requestid: this.curRequestId,
              mbti_strategy: u,
            });
          }
          this.$emit("share", this.outerIndex, a);
        }
      },
      getCommnetIcon: function (t) {
        return t
          ? 1 == this.commentStatus
            ? "https://st.gtimg.com/design/e4f52965799c6459411f5fe743eff661.png"
            : "https://st.gtimg.com/design/99e7a2766a57d41acdcc4f8be42a5853.png"
          : 2 == this.commentStatus
          ? "https://st.gtimg.com/design/e50020c50d96db25cd7935d9acc46577.png"
          : "https://st.gtimg.com/design/215dc634b48e79cf79d87d4283802444.png";
      },
      getQuoteStr: function () {
        return this.curRecal.length > 0
          ? ((this.cacheLaseRecalStr = this.curRecal), "正在查阅相关资料")
          : this.outerDocs.length === this.docs.length && this.docs.length
          ? "引用".concat(this.outerDocs.length, "篇站外资料作为参考")
          : this.quote.length > 0
          ? ((this.cacheLaseQuoteStr = this.quote), this.quote)
          : this.cacheLaseQuoteStr.length > 0
          ? this.cacheLaseQuoteStr
          : this.cacheLaseRecalStr.length > 0
          ? "正在查阅相关资料"
          : "正在思考";
      },
      canShowViewMoreIcon: function () {
        return this.quote.length > 0 && !this.allOuterLinks();
      },
      canShowViewSearchIcon: function () {
        return (
          this.quote.length > 0 &&
          (this.reply.length > 0 || this.thinking.length > 0)
        );
      },
      allOuterLinks: function () {
        return (
          this.outerDocs.length === this.docs.length && this.docs.length > 0
        );
      },
      jumpToNewsDetail: function (t) {
        if (t.url.length > 0) {
          var e = t.url.match(/id=(\w+)/);
          if (e) {
            var n = e[1];
            if (this.isWzq)
              g.StockBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                  n
                )
              );
            else if ("mpweapp" === p.ShellTypeEnum.MPWAI) {
              var i = "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                    n
                  )
                )
              );
              p.wx$1.navigateTo({ url: i });
            } else k.sdk.navigateToNewsDetail({ instance: this, id: n });
          }
        }
      },
      getQuoteContentList: function () {
        return this.showOuterDocs ? "showQuote" : "goneQuote";
      },
      getArrowIconRotate: function () {
        return this.showOuterDocs ? "rotateArrowIcon" : "defaultArrowIcon";
      },
      getThinkingArrowIconRotate: function () {
        return this.showThinking ? "rotateArrowIcon" : "defaultArrowIcon";
      },
      toggleListDetail: function () {
        this.allOuterLinks() ||
          (0 == this.showOuterDocs
            ? (g.StockBridge.report("jichu.ai_search.expand_answer_news_list", {
                searchfrom: this.searchfrom,
                aimodel: this.aimodel,
              }),
              (this.showOuterDocs = !0))
            : (this.showOuterDocs = !1));
      },
      onClickAgree: function () {
        this.$emit("request-permission-dialog");
      },
      functionItemFinish: function () {
        this.$emit("function-item-finish");
      },
      canShowThinkingLoadingTop: function () {
        return (
          this.sseStatus === S.SseStatus.ON_REASON_CONTENT && !this.showThinking
        );
      },
      canShowThinkingLoadingBottom: function () {
        return (
          this.sseStatus === S.SseStatus.ON_REASON_CONTENT && this.showThinking
        );
      },
      isRecallSseStatus: function () {
        return this.sseStatus === S.SseStatus.ON_RECALL;
      },
      xianPinChangeModelClick: function () {
        var t = this.getNextModelName();
        this.$emit("xian-pin-change-model", t),
          (this.hasClickXianPinChange = !0),
          g.StockBridge.report("jichu.ai_search.xinpin_change_model", {
            aimodel: t,
          });
      },
      getNextModelName: function () {
        return "deepseek" === this.aimodel
          ? "hunyuan-t1"
          : ("hunyuan-t1" === this.aimodel || this.aimodel, "deepseek");
      },
      getNextShowModelName: function () {
        return "deepseek" === this.aimodel
          ? "Hunyuan-T1"
          : "hunyuan-t1" === this.aimodel
          ? "Hunyuan"
          : (this.aimodel, "DeepSeek");
      },
      isXuanGuPluginType: function (t) {
        return (
          t && t.name && ("stockList" === t.name || "stocklist-mbti" === t.name)
        );
      },
      changeToNewSession: function () {
        this.$emit("change-to-new-session", this.fromHistory);
      },
    },
  };
Array ||
  (
    p.resolveComponent("MbtiComponent") +
    p.resolveComponent("ai-expert-info-card") +
    p.resolveComponent("answer-function-xuan-gu") +
    p.resolveComponent("mcp-quote-item") +
    p.resolveComponent("MarkdownRenderer") +
    p.resolveComponent("AnswerProcessPanel") +
    p.resolveComponent("answer-function-item") +
    p.resolveComponent("ShareButtonWrapper")
  )();
var T = p._export_sfc(q, [
  [
    "render",
    function (t, e, n, i, s, o) {
      return p.e(
        { a: o.serveBusyTips },
        o.serveBusyTips ? { b: p.t(o.serveBusyTips) } : {},
        { c: o.functionTips },
        o.functionTips ? { d: p.t(o.functionTips) } : {},
        { e: o.isMbtiPickStock },
        o.isMbtiPickStock
          ? {
              f: p.o(function (e) {
                return t.$emit("select-mbti", e, n.outerIndex);
              }, 3782),
            }
          : p.e(
              { g: o.permissionError },
              o.permissionError
                ? {
                    h: p.o(function () {
                      return (
                        o.onClickAgree && o.onClickAgree.apply(o, arguments)
                      );
                    }, 3783),
                    i: o.rightArrowIcon,
                    j: p.o(function () {
                      return (
                        o.onClickAgree && o.onClickAgree.apply(o, arguments)
                      );
                    }, 3784),
                  }
                : p.e(
                    { k: n.aiExpert },
                    n.aiExpert ? { l: p.p({ expert: n.aiExpert }) } : {},
                    {
                      m:
                        null !== o.functionObj &&
                        o.isXuanGuPluginType(o.functionObj),
                    },
                    null !== o.functionObj &&
                      o.isXuanGuPluginType(o.functionObj)
                      ? {
                          n: p.o(o.functionItemFinish, 3785),
                          o: p.p({
                            theme: n.theme,
                            "function-obj": o.xuanguFunctionObj,
                            "mbti-function-obj": o.xuanguMbtiFunctionObj,
                            "function-type": o.functionObj.name,
                            "function-xuan-gu-tips": o.functionXuanGuTips,
                            position: n.outerIndex,
                            "cur-request-id": o.curRequestId,
                            "cur-session-id": n.curSessionId,
                            reply: o.reply,
                            "sub-scene": n.subScene,
                            thinking: o.thinking,
                            "mock-trade-abt-user": n.mockTradeAbtUser,
                          }),
                        }
                      : {},
                    {
                      p:
                        !o.isTrpcAgentChain &&
                        (o.isMcpAgentMessage || o.isSmartServiceMessage),
                    },
                    o.isTrpcAgentChain ||
                      (!o.isMcpAgentMessage && !o.isSmartServiceMessage)
                      ? {}
                      : {
                          q: p.p({
                            "mcp-quote": o.mcpQuote,
                            reply: o.reply,
                            "fact-inner-docs": o.factInnerDocs,
                            "fact-outer-docs": o.factOuterDocs,
                          }),
                        },
                    { r: o.canShowQuoteLoayout },
                    o.canShowQuoteLoayout
                      ? p.e(
                          {
                            s: p.t(o.currentQuoteText),
                            t: p.f(s.quoteLines, function (t, e, n) {
                              return {
                                a: p.t(t.text),
                                b: t.id,
                                c: p.n(t.transitionClass),
                              };
                            }),
                            v: p.n(o.isQuoteRecalStatus ? "shimmer" : ""),
                            w: o.canShowViewMoreIcon(),
                          },
                          o.canShowViewMoreIcon()
                            ? {
                                x: o.arrowIconImage,
                                y: p.n(o.getArrowIconRotate()),
                              }
                            : {},
                          {
                            z: p.o(function (t) {
                              return o.toggleListDetail();
                            }, 3786),
                            A: p.f(s.zxgDocs, function (t, e, n) {
                              return {
                                a: p.t(e + 1 + ". " + t.title),
                                b: e,
                                c: p.n(
                                  void 0 === t.url || 0 === t.url.length
                                    ? "quoteContentListItemDisable"
                                    : ""
                                ),
                                d: p.o(
                                  function (e) {
                                    return t.url ? o.jumpToNewsDetail(t) : null;
                                  },
                                  3787,
                                  e
                                ),
                              };
                            }),
                            B: s.outerDocs.length > 0,
                          },
                          s.outerDocs.length > 0
                            ? {
                                C: p.t(
                                  "及" + s.outerDocs.length + "篇站外资料"
                                ),
                              }
                            : {},
                          { D: p.n(o.getQuoteContentList()) }
                        )
                      : {},
                    { E: o.thinking.length > 0 },
                    o.thinking.length > 0
                      ? p.e(
                          {
                            F: p.t(o.currentStatusText),
                            G: p.f(s.statusLines, function (t, e, n) {
                              return {
                                a: p.t(t.text),
                                b: t.id,
                                c: p.n(t.transitionClass),
                              };
                            }),
                            H: p.n(o.isThinkingStatus ? "shimmer" : ""),
                            I: o.arrowIconImage,
                            J: p.n(o.getThinkingArrowIconRotate()),
                            K: p.o(function (t) {
                              return o.hideOrShowThinking();
                            }, 3788),
                            L: s.showThinking,
                          },
                          s.showThinking
                            ? {
                                M: p.p({
                                  "streaming-debounce": 16,
                                  content: o.mainThinking,
                                  "is-streaming": o.isThinkingStreaming,
                                  "cur-request-id": o.curRequestId,
                                  "cur-session-id": n.curSessionId,
                                  "sub-scene": n.subScene,
                                  theme: n.theme,
                                  "use-incremental-model":
                                    n.useIncrementalModel,
                                }),
                              }
                            : {}
                        )
                      : {},
                    { N: o.isTrpcAgentChain && o.processSteps.length > 0 },
                    o.isTrpcAgentChain && o.processSteps.length > 0
                      ? {
                          O: p.o(function (e) {
                            return t.$emit("disable-outer-auto-scroll");
                          }, 3789),
                          P: p.p({
                            steps: o.processSteps,
                            "answer-finish": o.answerFinish,
                            "cur-request-id": o.curRequestId,
                            theme: n.theme,
                            "use-incremental-model": n.useIncrementalModel,
                          }),
                        }
                      : {},
                    {
                      Q: p.o(o.onContentClick, 3790),
                      R: p.o(o.onContentClick, 3791),
                      S: p.o(o.onLinkClick, 3792),
                      T: p.o(o.onQuoteLinkClick, 3793),
                      U: p.o(o.onMBTIvalueChange, 3794),
                      V: p.p({
                        "streaming-debounce": 16,
                        content: o.mainReply,
                        "is-streaming": o.isReplyStreaming,
                        "md-rule-fn": o.mdRuleFn,
                        "cur-request-id": o.curRequestId,
                        "cur-session-id": n.curSessionId,
                        "sub-scene": n.subScene,
                        "use-mp-html": o.newUserPickStock,
                        theme: n.theme,
                        position: n.outerIndex,
                        "use-incremental-model": n.useIncrementalModel,
                      }),
                      W:
                        null !== o.functionObj &&
                        !o.isXuanGuPluginType(o.functionObj),
                    },
                    null === o.functionObj ||
                      o.isXuanGuPluginType(o.functionObj)
                      ? {}
                      : {
                          X: p.o(o.functionItemFinish, 3795),
                          Y: p.p({
                            theme: n.theme,
                            "function-obj": o.functionObj,
                            position: n.outerIndex,
                            "cur-request-id": o.curRequestId,
                          }),
                        },
                    { Z: o.canShowXianPinLayout },
                    o.canShowXianPinLayout
                      ? {
                          aa: o.xianPinRightArrowSrc,
                          ab: p.o(function () {
                            return (
                              o.xianPinChangeModelClick &&
                              o.xianPinChangeModelClick.apply(o, arguments)
                            );
                          }, 3796),
                        }
                      : {},
                    { ac: o.canShowDisclaimer && !o.illegalQuestion },
                    o.canShowDisclaimer && !o.illegalQuestion
                      ? p.e(
                          {
                            ad: p.t(o.bottomTipsStr),
                            ae: p.o(function () {
                              return (
                                o.sendEventShowDisclaimer &&
                                o.sendEventShowDisclaimer.apply(o, arguments)
                              );
                            }, 3797),
                            af: !n.isViewShareAnswer && !n.hideActions,
                          },
                          n.isViewShareAnswer || n.hideActions
                            ? {}
                            : p.e(
                                {
                                  ag: o.getCommnetIcon(!0),
                                  ah: p.o(function (t) {
                                    return o.clickLikeIncon();
                                  }, 3798),
                                  ai: o.getCommnetIcon(!1),
                                  aj: p.o(function (t) {
                                    return o.clickUnLikeIcon();
                                  }, 3799),
                                  ak: o.reply.length > 0,
                                },
                                o.reply.length > 0
                                  ? {
                                      al: p.o(function (t) {
                                        return o.clickCopyAllIcon();
                                      }, 3800),
                                    }
                                  : {},
                                {
                                  am: p.o(function (t) {
                                    return o.clickShareIcon();
                                  }, 3801),
                                }
                              )
                        )
                      : {}
                  )
            ),
        { an: o.illegalQuestion && !i.isHalfScreen },
        o.illegalQuestion && !i.isHalfScreen
          ? {
              ao: p.o(function () {
                return (
                  o.changeToNewSession &&
                  o.changeToNewSession.apply(o, arguments)
                );
              }, 3802),
            }
          : {},
        {
          ap: p.n("skin-".concat(n.theme)),
          aq: p.n(s.isHasInnerDocs ? "isHasInnerDocs" : ""),
          ar: p.n(o.newUserPickStock ? "newUserPickStock" : ""),
          as: p.n(s.isMP ? "is-mp" : ""),
          at: p.n(n.useIncrementalModel ? "useIncrementalModel" : ""),
          av: p.n(o.isMcpAgentMessage ? "is-fact" : ""),
          aw: p.n(o.isSmartServiceMessage ? "is-smart-service" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b97f161d"],
]);
wx.createComponent(T);
var I = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1haS9jb21wb25lbnRzL0Fuc3dlckl0ZW0udnVl =
  I),
  (exports.getMbti = w);
