require("../../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../../@babel/runtime/helpers/Objectentries");
var n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = function (n, e, t) {
    return new Promise(function (o, r) {
      var i = function (n) {
          try {
            c(t.next(n));
          } catch (n) {
            r(n);
          }
        },
        u = function (n) {
          try {
            c(t.throw(n));
          } catch (n) {
            r(n);
          }
        },
        c = function (n) {
          return n.done ? o(n.value) : Promise.resolve(n.value).then(i, u);
        };
      c((t = t.apply(n, e)).next());
    });
  },
  o = require("../../../../../../common/vendor.js"),
  r = require("../../../../js-cookie/src/js.cookie.js"),
  i = {
    INTJ: "架构师",
    INTP: "逻辑学家",
    ENTJ: "指挥官",
    ENTP: "辩论家",
    INFJ: "提倡者",
    INFP: "调停者",
    ENFJ: "主人公",
    ENFP: "活动家",
    ISTJ: "物流师",
    ISFJ: "守卫者",
    ESTJ: "总经理",
    ESFJ: "执政官",
    ISTP: "鉴赏家",
    ISFP: "探险家",
    ESTP: "企业家",
    ESFP: "表演者",
  },
  u = {
    INTJ: "独立果决，以远见规划未来",
    INTP: "善于思考，追求逻辑和创新",
    ENTJ: "果断自信，天生的领导者",
    ENTP: "聪明机智，充满创新精神",
    INFJ: "有洞察力，追求意义和创造力",
    INFP: "理想主义者，寻求和谐与可能性",
    ENFJ: "热情洋溢，富有感染力的领导者",
    ENFP: "热情活泼，富有想象力和创新精神",
    ISTJ: "实际可靠，注重传统和秩序",
    ISFJ: "温暖细心，乐于奉献",
    ESTJ: "高效务实，注重传统和秩序",
    ESFJ: "热心友善，寻求和谐与合作",
    ISTP: "灵活务实，擅长解决具体问题",
    ISFP: "灵活友善，享受当下的生活",
    ESTP: "灵活机智，喜欢冒险和挑战",
    ESFP: "自发友善，热爱生活和人群",
  },
  c = function (i) {
    return t(
      exports,
      null,
      n().mark(function u() {
        var c, a;
        return n().wrap(function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                return (
                  (u.t0 =
                    "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings/batchset?"),
                  (u.next = 3),
                  t(
                    exports,
                    null,
                    n().mark(function t() {
                      var i;
                      return n().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt(
                                "return",
                                ((i =
                                  "mp" === o.StockBridge.ENV
                                    ? {
                                        check: 11,
                                        app: "wzqxcx",
                                        appid: "wx4ffb369b6881ee5e",
                                        openid:
                                          o.StockBridge.getStorage("_qluin"),
                                        fskey:
                                          o.StockBridge.getStorage("_qlskey"),
                                      }
                                    : {
                                        check: 11,
                                        app: "mini_h5",
                                        appid: "wx9cf8c670ebd68ce4",
                                        openid:
                                          r.js_cookieExports.get("wzq_qluin"),
                                        fskey:
                                          r.js_cookieExports.get("wzq_qlskey"),
                                      }),
                                Object.entries(i)
                                  .filter(function (n) {
                                    var t = e(n, 2),
                                      o = (t[0], t[1]);
                                    return null != o && "" !== o;
                                  })
                                  .map(function (n) {
                                    var t = e(n, 2),
                                      o = t[0],
                                      r = t[1];
                                    return ""
                                      .concat(o, "=")
                                      .concat(encodeURIComponent(String(r)));
                                  })
                                  .join("&"))
                              );
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, t);
                    })
                  )
                );
              case 3:
                return (
                  (u.t1 = u.sent),
                  (c = u.t0.concat.call(u.t0, u.t1)),
                  (a = { openai_mbti: JSON.stringify({ mbti: i }) }),
                  u.abrupt(
                    "return",
                    o.StockBridge.request(
                      c,
                      "POST",
                      { subIndex: "GLOBAL", interflow: !0, settings: a },
                      { headers: { "Content-Type": "application/json" } }
                    )
                  )
                );
              case 7:
              case "end":
                return u.stop();
            }
        }, u);
      })
    );
  },
  a = {
    name: "MbtiComponent",
    props: {
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e, r) {
      var a = this,
        p = r.emit;
      o.StockBridge.report("base.ai_search.mbti_brow", {
        subScene: "newuser_mbti",
      });
      var s = o.ref("initial"),
        l = o.ref(""),
        f = o.ref(1),
        w = o.ref(1),
        k = o.ref(""),
        S = o.ref({ ie: "", pj: "" }),
        v = o.ref([]),
        b = o.ref([
          {
            question: "做一个简单的测试，测测你的MBTI吧～",
            options: ["我更喜欢社交活动", "我更喜欢一个人呆着"],
            dimension: "EI",
          },
          {
            question: "在解决问题时，你更偏向于",
            options: ["使用全新的有潜力的方法", "使用经过验证的有效方法"],
            dimension: "SN",
          },
          {
            question: "在进行决策时，你会优先考虑",
            options: ["这件事是否符合逻辑", "这件事是否让他人感到舒服"],
            dimension: "TF",
          },
          {
            question: "出去旅游时，你更喜欢",
            options: ["做出非常详细的计划并执行", "随性出发，灵活调整行程"],
            dimension: "JP",
          },
        ]),
        d = o.computed(function () {
          var n = S.value,
            e = n.ie,
            t = n.pj;
          return e && t
            ? [
                "".concat(e, "NTJ"),
                "".concat(e, "NFJ"),
                "".concat(e, "NTP"),
                "".concat(e, "NFP"),
                "".concat(e, "STJ"),
                "".concat(e, "SFJ"),
                "".concat(e, "STP"),
                "".concat(e, "SFP"),
              ]
                .filter(function (n) {
                  return n.includes(t);
                })
                .slice(0, 4)
            : [];
        }),
        h = o.debounce(function (e) {
          return t(
            a,
            null,
            n().mark(function t() {
              return n().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.prev = 0), (k.value = e), (n.next = 4), c(e);
                      case 4:
                        p("select-mbti", e), (n.next = 9);
                        break;
                      case 7:
                        (n.prev = 7), (n.t0 = n.catch(0));
                      case 9:
                      case "end":
                        return n.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          );
        }, 500);
      return {
        currentStep: s,
        flowType: l,
        knownStep: f,
        unknownStep: w,
        finalResult: k,
        questions: b,
        availableTypes: d,
        handleKnowMbti: function () {
          (s.value = "process"),
            (l.value = "known"),
            (f.value = 1),
            o.StockBridge.report("base.ai_search.know_mbti_click", {
              subScene: "newuser_mbti",
            });
        },
        handleUnknowMbti: function () {
          (s.value = "process"),
            (l.value = "unknown"),
            (w.value = 1),
            (v.value = []),
            o.StockBridge.report("base.ai_search.unknow_mbti_click", {
              subScene: "newuser_mbti",
            });
        },
        handleKnownChoice: function (n) {
          1 === f.value
            ? ((S.value.ie = n), (f.value = 2))
            : 2 === f.value && ((S.value.pj = n), (f.value = 3));
        },
        handleFinalChoice: function (n) {
          h(n);
        },
        handleUnknownChoice: function (n) {
          if ((v.value.push(n), w.value < 4)) w.value += 1;
          else {
            var e = (function () {
              var n = v.value,
                e = "";
              return (
                (e += 0 === n[0] ? "E" : "I"),
                (e += 0 === n[1] ? "N" : "S"),
                (e += 0 === n[2] ? "T" : "F"),
                (e += 0 === n[3] ? "J" : "P")
              );
            })();
            h(e);
          }
        },
        goBack: function () {
          "known" === l.value
            ? 1 === f.value
              ? ((s.value = "initial"), (l.value = ""))
              : 2 === f.value
              ? ((f.value = 1), (S.value.ie = ""))
              : 3 === f.value && ((f.value = 2), (S.value.pj = ""))
            : "unknown" === l.value &&
              (1 === w.value
                ? ((s.value = "initial"), (l.value = ""), (v.value = []))
                : ((w.value -= 1), v.value.pop()));
        },
        getMbti: h,
        getMbtiTitle: function (n) {
          return i[n] || "未知类型";
        },
        getMbtiDescription: function (n) {
          return u[n] || "根据你的MBTI类型，我们为你推荐相应的投资策略～";
        },
      };
    },
  },
  p = o._export_sfc(a, [
    [
      "render",
      function (n, e, t, r, i, u) {
        return o.e(
          { a: "initial" === r.currentStep },
          "initial" === r.currentStep
            ? {
                b: o.o(function () {
                  return (
                    r.handleKnowMbti && r.handleKnowMbti.apply(r, arguments)
                  );
                }, 5018),
                c: o.o(function () {
                  return (
                    r.handleUnknowMbti && r.handleUnknowMbti.apply(r, arguments)
                  );
                }, 5019),
              }
            : {},
          { d: "process" === r.currentStep && "known" === r.flowType },
          "process" === r.currentStep && "known" === r.flowType
            ? o.e(
                {
                  e: r.knownStep >= 1 ? 1 : "",
                  f: r.knownStep >= 2 ? 1 : "",
                  g: r.knownStep >= 2 ? 1 : "",
                  h: r.knownStep >= 3 ? 1 : "",
                  i: r.knownStep >= 3 ? 1 : "",
                  j: 1 === r.knownStep,
                },
                1 === r.knownStep
                  ? {
                      k: o.o(function (n) {
                        return r.handleKnownChoice("E");
                      }, 5020),
                      l: o.o(function (n) {
                        return r.handleKnownChoice("I");
                      }, 5021),
                      m: o.o(function () {
                        return r.goBack && r.goBack.apply(r, arguments);
                      }, 5022),
                    }
                  : 2 === r.knownStep
                  ? {
                      o: o.o(function (n) {
                        return r.handleKnownChoice("P");
                      }, 5023),
                      p: o.o(function (n) {
                        return r.handleKnownChoice("J");
                      }, 5024),
                      q: o.o(function () {
                        return r.goBack && r.goBack.apply(r, arguments);
                      }, 5025),
                    }
                  : 3 === r.knownStep
                  ? {
                      s: o.f(r.availableTypes, function (n, e, t) {
                        return {
                          a: "https://st.gtimg.com/image/ai/mbti/".concat(
                            n.toLowerCase(),
                            ".png"
                          ),
                          b: n,
                          c: n,
                          d: o.o(
                            function (e) {
                              return r.handleFinalChoice(n);
                            },
                            5026,
                            n
                          ),
                          e: o.n(n),
                        };
                      }),
                      t: o.o(function () {
                        return r.goBack && r.goBack.apply(r, arguments);
                      }, 5027),
                    }
                  : {},
                { n: 2 === r.knownStep, r: 3 === r.knownStep }
              )
            : "process" === r.currentStep && "unknown" === r.flowType
            ? o.e(
                {
                  w: r.unknownStep >= 1 ? 1 : "",
                  x: r.unknownStep >= 2 ? 1 : "",
                  y: r.unknownStep >= 2 ? 1 : "",
                  z: r.unknownStep >= 3 ? 1 : "",
                  A: r.unknownStep >= 3 ? 1 : "",
                  B: r.unknownStep >= 4 ? 1 : "",
                  C: r.unknownStep >= 4 ? 1 : "",
                  D: r.unknownStep <= 4,
                },
                r.unknownStep <= 4
                  ? {
                      E: o.t(r.questions[r.unknownStep - 1].question),
                      F: o.f(
                        r.questions[r.unknownStep - 1].options,
                        function (n, e, t) {
                          return {
                            a: o.t(n),
                            b: e,
                            c: o.o(
                              function (n) {
                                return r.handleUnknownChoice(e);
                              },
                              5028,
                              e
                            ),
                          };
                        }
                      ),
                      G: o.o(function () {
                        return r.goBack && r.goBack.apply(r, arguments);
                      }, 5029),
                    }
                  : {}
              )
            : {},
          { v: "process" === r.currentStep && "unknown" === r.flowType }
        );
      },
    ],
    ["__scopeId", "data-v-30ac6a19"],
  ]);
wx.createComponent(p);
