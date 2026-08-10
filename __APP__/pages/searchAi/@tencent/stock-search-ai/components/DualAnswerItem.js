var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  u = function (e, t) {
    for (var r in t || (t = {})) i.call(t, r) && c(e, r, t[r]);
    if (o) {
      var s,
        u = n(o(t));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          r = s.value;
          a.call(t, r) && c(e, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, n) {
    return r(e, s(n));
  },
  p = require("../../../../../common/vendor.js"),
  f = require("../utils/memoryTracking.js"),
  d = require("../hooks/useComponentConfigHooks.js"),
  g = require("../utils/StockBridgeWrapper.js"),
  m = p.defineComponent({
    name: "DualAnswerItem",
    components: {
      AnswerItem: function () {
        return "./AnswerItem.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1haS9jb21wb25lbnRzL0Fuc3dlckl0ZW0udnVl;
        });
      },
    },
    props: {
      curSession: { type: String, required: !0 },
      question: { type: String, required: !0 },
      questionOrigin: { type: String, default: "" },
      contextList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      theme: { type: String, default: "" },
      searchfrom: { type: String, default: "" },
      moduleName: { type: String, default: "" },
      thinking: { type: Number, default: 0 },
      useIncrementalModel: { type: Boolean, default: !1 },
      loginUser: { type: String, default: "" },
      loginOpenId: { type: String, default: "" },
      loginFskey: { type: String, default: "" },
      loginCheck: { type: [String, Number], default: "" },
      requestId1: { type: String, required: !0 },
      requestId2: { type: String, required: !0 },
      enableRag: { type: Boolean, default: !0 },
      outerIndex: { type: Number, default: 0 },
      parentCommentStatus: { type: Number, default: 0 },
      onlineAnswerAbtType: { type: String, default: "" },
      mockTradeAbtUser: { type: Boolean, default: !1 },
      componentPluginArray: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    emits: [
      "prefer",
      "both-finish",
      "content-change",
      "collapse-done",
      "click-zan",
      "cancel-zan",
      "click-cai",
      "cancel-cai",
      "share",
      "on-quote-click",
      "keepWzqPos",
      "change-to-new-session",
      "show-disclaimer",
      "function-item-finish",
      "select-mbti",
      "request-permission-dialog",
      "xian-pin-change-model",
      "deny-answer",
    ],
    setup: function (n, t) {
      var r = this,
        s = t.emit,
        o = p.getCurrentInstance(),
        i = (null == o ? void 0 : o.proxy) || o,
        a = p.reactive({
          recal: "",
          quote: "",
          reply: "",
          thinking: "",
          docs: [],
          factInnerDocs: [],
          factOuterDocs: [],
          answerFinish: !1,
          serverError: !1,
          sseStatus: d.SseStatus.BEGIN_CONNECT,
          functionTips: "",
          functionXuanGuTips: "",
          functionObj: null,
          businessPluginMessage: null,
          newUserPickStock: !1,
          illegalQuestion: !1,
          isOfflineQuestion: !1,
          serveBusyTips: "",
          requestId: n.requestId1,
          serverMessageCode: 0,
          mcpQuote: "",
          isSmartServiceMessage: !1,
          isMcpAgentMessage: !1,
        }),
        c = p.reactive({
          recal: "",
          quote: "",
          reply: "",
          thinking: "",
          docs: [],
          factInnerDocs: [],
          factOuterDocs: [],
          answerFinish: !1,
          serverError: !1,
          sseStatus: d.SseStatus.BEGIN_CONNECT,
          functionTips: "",
          functionXuanGuTips: "",
          functionObj: null,
          businessPluginMessage: null,
          newUserPickStock: !1,
          illegalQuestion: !1,
          isOfflineQuestion: !1,
          serveBusyTips: "",
          requestId: n.requestId2,
          serverMessageCode: 0,
          mcpQuote: "",
          isSmartServiceMessage: !1,
          isMcpAgentMessage: !1,
        }),
        m = p.ref(null),
        h = p.ref(0),
        v = p.ref("choosing"),
        y = !1,
        S = (function () {
          var e = Math.random() < 0.5;
          return { left: e ? "a" : "b", right: e ? "b" : "a" };
        })(),
        b = p.ref(null),
        k = p.computed(function () {
          return a.answerFinish && c.answerFinish;
        }),
        w = p.computed(function () {
          return a.illegalQuestion || c.illegalQuestion;
        }),
        I = null,
        q = null,
        C = "".concat(n.requestId1, "_").concat(n.requestId2),
        M = function (e, t, r) {
          var s = g.StockBridge.getAppValue(),
            o =
              "https://proxy.finance.qq.com/cgi/cgi-bin/openai/sse/search?session="
                .concat(n.curSession, "&request_id=")
                .concat(e, "&app=")
                .concat(s, "&module=")
                .concat(n.moduleName, "&rag=")
                .concat(n.enableRag, "&searchfrom=")
                .concat(n.searchfrom, "&cache=true&gray=xuangu&thinking=")
                .concat(n.thinking);
          return (
            (o = ""
              .concat(o, "&user=")
              .concat(n.loginUser, "&openid=")
              .concat(n.loginOpenId, "&fskey=")
              .concat(n.loginFskey, "&check=")
              .concat(n.loginCheck)),
            (o = "".concat(o, "&extra_version=v2")),
            (o = "".concat(o, "&agent=1")),
            (o = "".concat(o, "&plugin_pos=content")),
            (o = "".concat(o, "&question_src=active")),
            (o = ""
              .concat(o, "&incrementModel=")
              .concat(n.useIncrementalModel ? 1 : 0)),
            (o = "".concat(o, "&blue_tag=true")),
            (o = "".concat(o, "&ab_test=").concat(t)),
            (o = "".concat(o, "&pk_role=").concat(r)),
            (o = "".concat(o, "&group_id=").concat(C))
          );
        },
        O = function (e) {
          var t = "",
            r = "",
            o = function (s) {
              if ("[DONE]" === s)
                return (
                  (e.answerFinish = !0),
                  (e.sseStatus = d.SseStatus.ON_CLOSE),
                  void T()
                );
              try {
                if (d.isRecallReply(s))
                  return (
                    (e.recal = d.parserMessage(s)),
                    void (e.sseStatus = d.SseStatus.ON_RECALL)
                  );
                if (d.isQuoteReply(s)) {
                  var o = d.parserMessage(s);
                  return void (
                    o &&
                    o.length &&
                    ((e.sseStatus = d.SseStatus.ON_QUOTE), (e.quote = o))
                  );
                }
                if (d.isDeltaDocReply(s)) {
                  var i = d.parseDocReply(s);
                  return void (i && i.length > 0 && (e.docs = i));
                }
                if (d.isSmartServiceMessage(s))
                  return (
                    (e.isSmartServiceMessage = !0),
                    void (e.mcpQuote = "正在检索智能客服知识库...")
                  );
                if (d.isMcpQuoteInfoPluginReply(s)) {
                  var a = d.parseCommonAgentComponentName(s),
                    c = d.parserMessage(s),
                    u = [];
                  try {
                    u = JSON.parse(c || "[]");
                  } catch (e) {
                    u = [];
                  }
                  return void ("fact_inner_reference" === a
                    ? (e.factInnerDocs = u)
                    : "fact_outer_reference" === a && (e.factOuterDocs = u));
                }
                if (d.isSubAagentMessage(s))
                  return void (e.isMcpAgentMessage = !0);
                if (d.isSubAagentReply(s)) {
                  var l = d.parserMessage(s);
                  return void (
                    l &&
                    l.length &&
                    ((e.sseStatus = d.SseStatus.ON_QUOTE), (e.mcpQuote = l))
                  );
                }
                if (d.isDeltaContentReply(s)) {
                  var p = d.parserContent(s);
                  return (
                    (t += p),
                    (e.reply = t),
                    void (e.sseStatus = d.SseStatus.ON_CONTENT)
                  );
                }
                if (d.isDeltaReasoningContentReply(s)) {
                  var f = d.parserReasoningContent(s);
                  return (
                    (r += f),
                    (e.thinking = r),
                    void (e.sseStatus = d.SseStatus.ON_REASON_CONTENT)
                  );
                }
                if (
                  d.isFunctionPluginMessage(s) ||
                  d.isXuanGuPluginMessage(s)
                ) {
                  var g = d.parseFunctionPluginMessage(s);
                  return (
                    (t = ""),
                    (r = ""),
                    void (d.isFunctionPluginMessage(s)
                      ? (e.functionTips = g)
                      : (e.functionXuanGuTips = g))
                  );
                }
                if (d.isCommonAgentPluginReply(s, n.componentPluginArray)) {
                  var m = d.parseCommonAgentComponentName(s),
                    h = d.parserMessage(s),
                    v = d.generateComponentContent(m, h),
                    y = e.reply || "";
                  return (t = y.concat(v)), void (e.reply = t);
                }
                if (d.isXuanGuFunctionPluginReply(s)) {
                  var S = d.parseXuanGuFunctionPluginReply(s);
                  return void (e.functionObj = S);
                }
                if (d.isServerCacheMessage(s))
                  return void (e.isOfflineQuestion = !0);
                if (d.isServerBusyMessage(s)) {
                  var b = d.parseServerBusyMessage(s);
                  return void (e.serveBusyTips = b);
                }
                if (
                  d.isFunctionPluginInContentReply(s, n.componentPluginArray)
                ) {
                  var k = d.parseFunctionPluginComponentType(s),
                    w = d.parseFunctionPluginReply(s);
                  w.mockTradeAbtUser = n.mockTradeAbtUser;
                  var I = JSON.stringify(w),
                    q = d.generateComponentContent(k, I),
                    C = e.reply || "";
                  return (t = C.concat(q)), void (e.reply = t);
                }
                if (d.isBusinessPluginMessage(s)) {
                  var M = d.parseBusinessPluginMessage(s);
                  return void (e.businessPluginMessage = M);
                }
                if (d.isNewUserPickStockMessage(s))
                  return void (e.newUserPickStock = !0);
                if (d.isServerCodeMessage(s))
                  return void (e.serverMessageCode =
                    d.parseServerCodeMessage(s));
              } catch (e) {}
            };
          return function (t) {
            var r = t.data;
            ("" === t.event && "" === t.data) ||
              ("message" === t.event
                ? o(r)
                : "param" === t.event
                ? (function (e) {
                    try {
                      if (!d.isParamObj(e)) return;
                      var t = JSON.parse(e);
                      if (t && t.module && n.moduleName !== t.module) {
                        s("xian-pin-change-model", t.module);
                        try {
                          g.StockBridge.report(
                            "jichu.ai_search.model_xianpin",
                            {
                              requestid: t.request_id,
                              session: n.curSession,
                              aimodel: t.module,
                            }
                          );
                        } catch (e) {}
                      }
                    } catch (e) {}
                  })(r)
                : "exception" === t.event
                ? (function (n) {
                    try {
                      var t,
                        r = JSON.parse(n),
                        o = r.msg,
                        i = r.code;
                      1618601004 === i
                        ? ((t = o), (e.illegalQuestion = !0), s("deny-answer"))
                        : 1620053006 === i ||
                          1620053007 === i ||
                          1620053010 === i ||
                          1620053011 === i ||
                          1620053013 === i
                        ? ((t = o),
                          (1620053010 !== i && 1620053011 !== i) ||
                            (e.sseStatus = d.SseStatus.ON_SERVER_XP))
                        : 1618601001 === i
                        ? (t = "请登录后再提问哦。")
                        : (g.StockBridge.aegisReportEvent(
                            "[stock-search-ai] sseMessageError",
                            { serverCode: i, from: "DualAnswerItem" }
                          ),
                          (t = "服务器端异常，请稍后重试。")),
                        (e.reply = t),
                        (e.serverError = !0),
                        (e.answerFinish = !0),
                        T();
                    } catch (e) {}
                  })(r)
                : "error" === t.event &&
                  (e.answerFinish ||
                    ((e.serverError = !0),
                    (e.answerFinish = !0),
                    (e.sseStatus = d.SseStatus.ON_ERROR),
                    e.reply || (e.reply = "很抱歉，服务器繁忙，请稍后再试试"),
                    T())));
          };
        },
        T = function () {
          a.answerFinish && c.answerFinish && s("both-finish");
        },
        A = function (t, s) {
          return (
            (o = r),
            null,
            (i = e().mark(function r() {
              var o, i, a, c, u;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.serverError) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if (t.reply) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        return (
                          (o = (function (e) {
                            var t, r, s, o;
                            n.loginCheck
                              ? ((t = n.loginUser),
                                (r = n.loginOpenId),
                                (s = n.loginFskey),
                                (o = n.loginCheck))
                              : ((t = "zenoscai"),
                                (r = "oA0Gbjk5FACnkjI98WR91uW_p0nY"),
                                (s = "ttttt"),
                                (o = "10"));
                            var i = ""
                                .concat(
                                  "https://proxy.finance.qq.com/cgi/cgi-bin/openai/answer/recheck?",
                                  "user="
                                )
                                .concat(t, "&openid=")
                                .concat(r, "&fskey=")
                                .concat(s, "&check=")
                                .concat(o),
                              a = "";
                            return (
                              (a = "&appid=wx9cf8c670ebd68ce4"),
                              "mpweapp" === p.ShellTypeEnum.MPWAI &&
                                (a = "&appid=wx1559de8bc252bce9"),
                              (i = "".concat(i).concat(a))
                            );
                          })()),
                          (i = {
                            session: n.curSession,
                            requestId: s,
                            user: n.loginOpenId,
                            answer: t.reply,
                            query: n.question,
                            app: g.StockBridge.getAppValue(),
                          }),
                          (e.prev = 5),
                          (e.next = 8),
                          g.StockBridge.request(o, "POST", i, {
                            dataType: "json",
                            header: { "Content-Type": "application/json" },
                          })
                        );
                      case 8:
                        (a = e.sent) &&
                          0 === a.code &&
                          ((c = a.data),
                          1 === c.result &&
                            ((u =
                              c.msg && c.msg.length > 0
                                ? c.msg
                                : "我无法提供相关信息。如果你有其他问题，我会很乐意为你解答。"),
                            (t.reply = u),
                            (t.serverError = !0))),
                          (e.next = 14);
                        break;
                      case 12:
                        (e.prev = 12), (e.t0 = e.catch(5));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[5, 12]]
              );
            })),
            new Promise(function (e, n) {
              var t = function e(t) {
                  try {
                    s(i.next(t));
                  } catch (e) {
                    n(e);
                  }
                },
                r = function (e) {
                  try {
                    s(i.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                s = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(t, r);
                };
              s((i = i.apply(o, null)).next());
            })
          );
          var o, i;
        };
      p.watch(
        function () {
          return a.answerFinish;
        },
        function (e, t) {
          e && !t && A(a, n.requestId1);
        }
      ),
        p.watch(
          function () {
            return c.answerFinish;
          },
          function (e, t) {
            e && !t && A(c, n.requestId2);
          }
        );
      var P = function (e) {
          return function (n) {
            (e.serverError = !0),
              (e.answerFinish = !0),
              (e.sseStatus = d.SseStatus.ON_ERROR),
              e.reply || (e.reply = "很抱歉，服务器繁忙，请稍后再试试"),
              T();
          };
        },
        N = function (e) {
          return function () {
            e.answerFinish ||
              ((e.answerFinish = !0),
              (e.sseStatus = d.SseStatus.ON_CLOSE),
              T());
          };
        },
        _ = p.ref(0),
        R = function () {
          try {
            var e = b.value;
            e && "number" == typeof e.scrollLeft && (_.value = e.scrollLeft);
          } catch (e) {}
        },
        x = function () {
          R();
        };
      p.watch(
        function () {
          return n.parentCommentStatus;
        },
        function (e) {
          h.value = e;
        }
      );
      var F = !1;
      p.watch(
        function () {
          return [a.reply, a.thinking, c.reply, c.thinking];
        },
        function () {
          F && s("content-change");
        }
      ),
        p.onMounted(function () {
          try {
            g.StockBridge.mtaReport({
              busi: "base",
              routeName: "searchai",
              eventName: "ab_version_answer_brow",
            });
          } catch (e) {}
          (function () {
            (I = f.createSseInstance({ enableRetry: !0 })),
              (q = f.createSseInstance({ enableRetry: !0 }));
            var e = M(n.requestId1, S.left, "main"),
              t = M(n.requestId2, S.right, "sub"),
              r = {
                context: n.contextList,
                query: n.question,
                query_origin: n.questionOrigin || n.question,
              },
              s = {
                context: n.contextList,
                query: n.question,
                query_origin: n.questionOrigin || n.question,
              };
            I.fetch(e, {
              method: "POST",
              data: r,
              headers: { "Content-Type": "application/json" },
              onmessage: O(a),
              onerror: P(a),
              onclose: N(a),
            }),
              q.fetch(t, {
                method: "POST",
                data: s,
                headers: { "Content-Type": "application/json" },
                onmessage: O(c),
                onerror: P(c),
                onclose: N(c),
              });
          })(),
            setTimeout(function () {
              F = !0;
            }, 800);
          try {
            g.StockBridge.busOn("common-ai-component-keepwzqpos", x);
          } catch (e) {}
        }),
        p.onActivated(function () {
          var e = _.value;
          e &&
            p.nextTick$1(function () {
              var n = b.value;
              n && "number" == typeof n.scrollLeft && (n.scrollLeft = e),
                (_.value = 0);
            });
        });
      var D = p.watch(k, function (e) {
        e &&
          (p.nextTick$1(function () {
            (function () {
              var e = { session: n.curSession };
              try {
                g.StockBridge.mtaReport({
                  busi: "base",
                  routeName: "searchai",
                  eventName: "like_left_answer_brow",
                  exposure: {
                    selector: ".answer-card__btn--left",
                    context: i,
                    threshold: 0.5,
                  },
                  params: l(u({}, e), {
                    prompttype: S.left,
                    requestid: n.requestId1,
                  }),
                });
              } catch (e) {}
              try {
                g.StockBridge.mtaReport({
                  busi: "base",
                  routeName: "searchai",
                  eventName: "like_right_answer_brow",
                  exposure: {
                    selector: ".answer-card__btn--right",
                    context: i,
                    threshold: 0.5,
                  },
                  params: l(u({}, e), {
                    prompttype: S.right,
                    requestid: n.requestId2,
                  }),
                });
              } catch (e) {}
            })(),
              F && s("content-change"),
              setTimeout(function () {
                F && s("content-change");
              }, 100);
          }),
          D && D());
      });
      return (
        p.onBeforeUnmount(function () {
          I && (I.abort(), (I = null)), q && (q.abort(), (q = null));
          try {
            g.StockBridge.busOff("common-ai-component-keepwzqpos", x);
          } catch (e) {}
        }),
        {
          answerData1: a,
          answerData2: c,
          selectedAnswer: m,
          commentStatus: h,
          displayPhase: v,
          bothFinished: k,
          isIllegal: w,
          swiperRef: b,
          onPrefer: function (e) {
            if (null === m.value) {
              try {
                g.StockBridge.mtaReport({
                  busi: "base",
                  routeName: "searchai",
                  eventName:
                    1 === e
                      ? "like_left_answer_click"
                      : "like_right_answer_click",
                  params: {
                    prompttype: 1 === e ? S.left : S.right,
                    requestid: 1 === e ? n.requestId1 : n.requestId2,
                    session: n.curSession,
                  },
                });
              } catch (e) {}
              (m.value = e), (v.value = "collapsing");
              var t = 1 === e ? a : c;
              s("prefer", {
                selectedIndex: e,
                isAutoSelect: !1,
                requestId1: n.requestId1,
                requestId2: n.requestId2,
                selectedRequestId: 1 === e ? n.requestId1 : n.requestId2,
                selectedAbtType: 1 === e ? S.left : S.right,
                unselectedAbtType: 1 === e ? S.right : S.left,
                answerData: {
                  recal: t.recal,
                  quote: t.quote,
                  reply: t.reply,
                  thinking: t.thinking,
                  docs: t.docs,
                  factInnerDocs: t.factInnerDocs,
                  factOuterDocs: t.factOuterDocs,
                  answerFinish: t.answerFinish,
                  serverError: t.serverError,
                  sseStatus: t.sseStatus,
                  functionTips: t.functionTips,
                  functionXuanGuTips: t.functionXuanGuTips,
                  functionObj: t.functionObj,
                  businessPluginMessage: t.businessPluginMessage,
                  newUserPickStock: t.newUserPickStock,
                  illegalQuestion: t.illegalQuestion,
                  isOfflineQuestion: t.isOfflineQuestion,
                  serveBusyTips: t.serveBusyTips,
                  serverMessageCode: t.serverMessageCode,
                  mcpQuote: t.mcpQuote,
                  isSmartServiceMessage: t.isSmartServiceMessage,
                  isMcpAgentMessage: t.isMcpAgentMessage,
                },
              });
            }
          },
          onCollapseAnimEnd: function () {
            y || ((y = !0), s("collapse-done", { outerIndex: n.outerIndex }));
          },
          onClickZan: function (e, t, r, o, i, a) {
            s("click-zan", e, n.outerIndex, r, o, i, a);
          },
          onCancelZan: function (e, t, r, o, i, a) {
            s("cancel-zan", e, n.outerIndex, r, o, i, a);
          },
          onClickCai: function (e, t, r, o, i, a) {
            s("click-cai", e, n.outerIndex, r, o, i, a);
          },
          onCancelCai: function (e, t, r, o, i, a) {
            s("cancel-cai", e, n.outerIndex, r, o, i, a);
          },
          onShare: function (e, t) {
            s("share", n.outerIndex, t);
          },
          onQuoteClick: function (e, t, r, o) {
            var i = 1 === t ? c : a,
              u = {
                docs: i.docs || [],
                factInnerDocs: i.factInnerDocs || [],
                factOuterDocs: i.factOuterDocs || [],
              };
            s("on-quote-click", e, n.outerIndex, r, o, u);
          },
          onKeepWzqPos: function () {
            R(), s("keepWzqPos");
          },
          onChangeToNewSession: function (e) {
            s("change-to-new-session", e);
          },
          onShowDisclaimer: function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            s.apply(void 0, ["show-disclaimer"].concat(n));
          },
          onFunctionItemFinish: function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            s.apply(void 0, ["function-item-finish"].concat(n));
          },
          onSelectMbti: function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            s.apply(void 0, ["select-mbti"].concat(n));
          },
          onRequestPermissionDialog: function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            s.apply(void 0, ["request-permission-dialog"].concat(n));
          },
          onXianPinChangeModel: function () {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
              n[t] = arguments[t];
            s.apply(void 0, ["xian-pin-change-model"].concat(n));
          },
          abortAll: function () {
            var e = function (e) {
              try {
                e.reply || (e.reply = "已暂停生成"),
                  (e.answerFinish = !0),
                  (e.sseStatus = d.SseStatus.ON_ERROR);
              } catch (e) {}
            };
            try {
              I && I.abort();
            } catch (e) {}
            try {
              q && q.abort();
            } catch (e) {}
            return e(a), e(c), T(), [n.requestId1, n.requestId2];
          },
          updateCommentStatus: function (e) {
            h.value = e;
          },
          autoSelectLeft: function () {
            if (null === m.value) {
              m.value = 1;
              var e = a;
              s("prefer", {
                selectedIndex: 1,
                isAutoSelect: !0,
                requestId1: n.requestId1,
                requestId2: n.requestId2,
                selectedRequestId: n.requestId1,
                selectedAbtType: S.left,
                unselectedAbtType: S.right,
                answerData: {
                  recal: e.recal,
                  quote: e.quote,
                  reply: e.reply,
                  thinking: e.thinking,
                  docs: e.docs,
                  factInnerDocs: e.factInnerDocs,
                  factOuterDocs: e.factOuterDocs,
                  answerFinish: e.answerFinish,
                  serverError: e.serverError,
                  sseStatus: e.sseStatus,
                  functionTips: e.functionTips,
                  functionXuanGuTips: e.functionXuanGuTips,
                  functionObj: e.functionObj,
                  businessPluginMessage: e.businessPluginMessage,
                  newUserPickStock: e.newUserPickStock,
                  illegalQuestion: e.illegalQuestion,
                  isOfflineQuestion: e.isOfflineQuestion,
                  serveBusyTips: e.serveBusyTips,
                  serverMessageCode: e.serverMessageCode,
                  mcpQuote: e.mcpQuote,
                  isSmartServiceMessage: e.isSmartServiceMessage,
                  isMcpAgentMessage: e.isMcpAgentMessage,
                },
              }),
                s("collapse-done", { outerIndex: n.outerIndex });
            }
          },
        }
      );
    },
  });
Array || p.resolveComponent("answer-item")();
var h = p._export_sfc(m, [
  [
    "render",
    function (e, n, t, r, s, o) {
      return p.e(
        {
          a: p.o(e.onClickZan, 4749),
          b: p.o(e.onCancelZan, 4750),
          c: p.o(e.onClickCai, 4751),
          d: p.o(e.onCancelCai, 4752),
          e: p.o(e.onShare, 4753),
          f: p.o(e.onQuoteClick, 4754),
          g: p.o(e.onKeepWzqPos, 4755),
          h: p.o(e.onChangeToNewSession, 4756),
          i: p.o(e.onShowDisclaimer, 4757),
          j: p.o(e.onFunctionItemFinish, 4758),
          k: p.o(e.onSelectMbti, 4759),
          l: p.o(e.onRequestPermissionDialog, 4760),
          m: p.o(e.onXianPinChangeModel, 4761),
          n: p.p({
            item: e.answerData1,
            theme: e.theme,
            outerIndex: 0,
            searchfrom: e.searchfrom,
            curSessionId: e.curSession,
            subScene: "",
            useIncrementalModel: e.useIncrementalModel,
            mockTradeAbtUser: e.mockTradeAbtUser,
            defaultAiModel: e.moduleName,
            hideActions: !0,
          }),
          o: e.bothFinished && !e.isIllegal,
        },
        e.bothFinished && !e.isIllegal
          ? {
              p: p.o(function (n) {
                return e.onPrefer(1);
              }, 4762),
            }
          : {},
        {
          q: p.o(e.onClickZan, 4763),
          r: p.o(e.onCancelZan, 4764),
          s: p.o(e.onClickCai, 4765),
          t: p.o(e.onCancelCai, 4766),
          v: p.o(e.onShare, 4767),
          w: p.o(e.onQuoteClick, 4768),
          x: p.o(e.onKeepWzqPos, 4769),
          y: p.o(e.onChangeToNewSession, 4770),
          z: p.o(e.onShowDisclaimer, 4771),
          A: p.o(e.onFunctionItemFinish, 4772),
          B: p.o(e.onSelectMbti, 4773),
          C: p.o(e.onRequestPermissionDialog, 4774),
          D: p.o(e.onXianPinChangeModel, 4775),
          E: p.p({
            item: e.answerData2,
            theme: e.theme,
            outerIndex: 1,
            searchfrom: e.searchfrom,
            curSessionId: e.curSession,
            subScene: "",
            useIncrementalModel: e.useIncrementalModel,
            mockTradeAbtUser: e.mockTradeAbtUser,
            defaultAiModel: e.moduleName,
            hideActions: !0,
          }),
          F: e.bothFinished && !e.isIllegal,
        },
        e.bothFinished && !e.isIllegal
          ? {
              G: p.o(function (n) {
                return e.onPrefer(2);
              }, 4776),
            }
          : {},
        {
          H: p.n("skin-".concat(e.theme)),
          I: p.n(
            "collapsing" === e.displayPhase
              ? "dual-answer-container--collapse"
              : ""
          ),
          J: p.o(function () {
            return (
              e.onCollapseAnimEnd && e.onCollapseAnimEnd.apply(e, arguments)
            );
          }, 4777),
        }
      );
    },
  ],
  ["__scopeId", "data-v-563737ff"],
]);
wx.createComponent(h);
