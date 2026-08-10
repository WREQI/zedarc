var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../utils/shareUtils.js"),
  s = require("./useComponentConfigHooks.js"),
  t = require("../../../../../common/vendor.js");
exports.useShareCodeHooks = function (r, i) {
  var a = this,
    o = (r || {}).shareCode,
    u = t.ref(!1);
  return {
    fetchShareInfo: function () {
      return (
        (t = a),
        null,
        (r = e().mark(function t() {
          var r,
            a,
            c,
            l,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            M,
            P,
            d,
            C,
            S,
            _,
            b,
            k,
            w,
            F,
            R,
            x,
            A,
            q,
            N,
            I;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = null),
                      (e.prev = 1),
                      (e.next = 4),
                      n.fetchAIShareContent(o)
                    );
                  case 4:
                    if (
                      ((a = e.sent),
                      (c = (a || {}).dialog),
                      (p = (l = c || {}).answer),
                      (g = l.question),
                      (f = l.status),
                      (m = l.model),
                      0 == +f)
                    ) {
                      e.next = 14;
                      break;
                    }
                    return e.abrupt("return", void (u.value = !0));
                  case 14:
                    (h = ""),
                      (v = []),
                      (y = []),
                      (M = []),
                      (P = ""),
                      (d = ""),
                      (C = ""),
                      (S = ""),
                      (_ = {}),
                      (b = ""),
                      (k = !1),
                      (w = ""),
                      (F = !1),
                      (R = !1),
                      (x = []),
                      (A = ""),
                      p &&
                        ((q = JSON.parse(p)),
                        (N = q.dialog_msg_list) &&
                          N.length &&
                          (N.forEach(function (e) {
                            var n = e.msg_type,
                              t = e.msg;
                            if ("ref_docs" === n)
                              (v = (function (e) {
                                try {
                                  return s.parseDocReply(e);
                                } catch (e) {}
                                return [];
                              })(t)) &&
                                v.length &&
                                (P = "引用".concat(v.length, "篇资料作为参考"));
                            else if ("reason_content" === n) d = t;
                            else if ("content" === n)
                              h = "".concat(h).concat(t);
                            else if ("code_msg" === n)
                              s.isFunctionPluginMessage(t)
                                ? (C = s.parseFunctionPluginMessage(t))
                                : s.isXuanGuPluginMessage(t)
                                ? (S = s.parseFunctionPluginMessage(t))
                                : s.isNewUserPickStockMessage(t) && (F = !0);
                            else if ("plugin_content" === n)
                              try {
                                if (
                                  s.isFunctionPluginInContentReply(t, i.value)
                                ) {
                                  var r = s.parseFunctionPluginComponentType(t),
                                    a = s.parseFunctionPluginReply(t),
                                    o = JSON.stringify(a),
                                    u = s.generateComponentContent(r, o);
                                  h = "".concat(h).concat(u);
                                }
                              } catch (e) {}
                            else if ("xuangu_stock_list" === n)
                              try {
                                s.isXuanGuFunctionPluginReply(t) &&
                                  (_ = s.parseXuanGuFunctionPluginReply(t));
                              } catch (e) {}
                            else if ("plugin_type" === n)
                              s.isSubAagentReply(t) && (b = s.parserMessage(t));
                            else if ("sub_agent_intent" === n)
                              s.isSubAagentMessage(t)
                                ? (k = !0)
                                : s.isSmartServiceMessage(t) &&
                                  ((R = !0), (b = "正在检索智能客服知识库..."));
                            else if ("plugin_intent" === n) {
                              if (s.isBusinessPluginMessage(t))
                                try {
                                  w = s.parseBusinessPluginMessage(t);
                                } catch (e) {}
                            } else if ("agent_event" === n || "component" === n)
                              if (s.isCommonAgentPluginReply(t, i.value)) {
                                var c = s.parseCommonAgentComponentName(t),
                                  l = s.parserMessage(t),
                                  p = s.generateComponentContent(c, l);
                                h = "".concat(h).concat(p);
                              } else if (s.isMcpQuoteInfoPluginReply(t)) {
                                var g = s.parseCommonAgentComponentName(t),
                                  f = s.parserMessage(t),
                                  m = [];
                                try {
                                  m = JSON.parse(f || []);
                                } catch (e) {
                                  m = [];
                                }
                                "fact_inner_reference" === g
                                  ? (y = m)
                                  : "fact_outer_reference" === g && (M = m);
                              }
                          }),
                          (I = s.buildHistoryProcessSteps(N)),
                          (x = I.processSteps),
                          (A = I.answerChainMode))),
                      (r = {
                        question: g,
                        quote: P,
                        reply: h,
                        thinking: d,
                        docs: v,
                        factInnerDocs: y,
                        factOuterDocs: M,
                        functionTips: C,
                        functionXuanGuTips: S,
                        functionObj: _,
                        modelName: m,
                        mcpQuote: b,
                        isSmartServiceMessage: R,
                        isMcpAgentMessage: k,
                        businessPluginMessage: w,
                        newUserPickStock: F,
                        answerFinish: !0,
                        serverError: !1,
                        isOfflineQuestion: !0,
                        processSteps: x,
                        answerChainMode: A,
                        useProcessMode: x.length > 0,
                      }),
                      (e.next = 21);
                    break;
                  case 19:
                    (e.prev = 19), (e.t0 = e.catch(1));
                  case 21:
                    return (e.prev = 21), (u.value = !r), e.finish(21);
                  case 24:
                    return e.abrupt("return", r);
                  case 25:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 19, 21, 24]]
          );
        })),
        new Promise(function (e, n) {
          var s = function (e) {
              try {
                a(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (e) {
              try {
                a(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            a = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(s, i);
            };
          a((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    },
    isShareAnswerInvalid: u,
  };
};
