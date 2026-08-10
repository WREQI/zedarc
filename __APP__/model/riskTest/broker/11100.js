require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../utils.js"),
  r = require("../../../config/risk.js"),
  s = require("../../../common/components/Dialog/index.js"),
  a = function (e, n) {
    return +e > 0 && +e < n;
  },
  u = function (e) {
    var n = e.age,
      t = void 0 === n ? "" : n,
      r = e.sex,
      s = void 0 === r ? "" : r,
      a = !1;
    return (
      ([18, 19].includes(+t) || ("1" === s && [20, 21].includes(+t))) &&
        (a = !0),
      a
    );
  };
function i(e) {
  return new Promise(function (n, t) {
    s.Dialog({
      message: e,
      confirmButtonText: "确认",
      cancelButtonText: "重新选择",
      showCancelButton: !0,
      onConfirm: n,
      onCancel: t,
    });
  });
}
var o,
  c,
  l,
  k = {
    version: "31_7.0",
    statements: [
      "本问卷旨在了解您可承受的风险程度等情况，借此协助您选择合适的产品或服务类别，以符合您的风险承受能力。",
      "风险承受能力评估是本公司向投资者履行适当性职责的一个环节，其目的是使本公司所提供的产品或服务与您的风险承受能力等级相匹配。",
      "本公司特别提醒您：本公司向投资者履行风险承受能力评估等适当性职责，并不能取代您自己的投资判断，也不会降低产品或服务的固有风险。同时，与产品或服务相关的投资风险、履约责任以及费用等将由您自行承担。",
      "本公司提示您：本公司根据您提供的信息对您进行风险承受能力评估，开展适当性工作。您应当如实提供相关信息及证明材料，并对所提供的信息和证明材料的真实性、准确性、完整性负责。",
      "本公司建议：当您的各项状况发生重大变化时，需对您所投资的产品及时进行重新审视，以确保您的投资决定与您可承受的投资风险程度等实际情况一致。",
      "本公司在此承诺，对于您在本问卷中所提供的一切信息，本公司将严格按照法律法规要求承担保密义务。除法律法规规定的有权机关依法定程序进行查询以外，本公司保证不会将涉及您的任何信息提供、泄露给任何第三方，或者将相关信息用于违法、不当用途。",
    ],
    prompts: [
      {
        group: "",
        questions: [
          {
            ask: "您的年龄是",
            answers: [
              "17周岁及以下",
              "18-29周岁",
              "30-59周岁",
              "60-69周岁",
              "70周岁及以上",
            ],
            hidden: !0,
            prop: "age",
          },
          {
            ask: "您的最高学历是",
            answers: [
              "初中及以下",
              "高中、中专或大专",
              "大学本科",
              "硕士及以上",
            ],
            hidden: !0,
            prop: "edu",
          },
          {
            ask: "以下金融产品，您投资经验在两年以上的有",
            answers: [
              "国债、货币市场基金等投资品种",
              "债券、债券型基金或其它固定收益类产品",
              "股票、混合型基金、偏股型基金、股票型基金等权益类（股票）投资品种",
              "期货、融资融券、期权、收益互换以及其他复杂金融产品",
              "无",
            ],
            multiple: !0,
            conflicts: {
              A: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return a(e.age, 20);
                  },
                },
              ],
              B: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return a(e.age, 20);
                  },
                },
              ],
              C: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return a(e.age, 20);
                  },
                },
              ],
              D: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return a(e.age, 20);
                  },
                },
              ],
              selectFn: function (e) {
                return new Promise(function (n) {
                  var t = [];
                  e.length && (t = e.includes(4) ? [0, 1, 2, 3] : [4]),
                    n({ goNext: !0, selectedDisaledList: t });
                });
              },
            },
          },
          {
            ask: "（单选题）假设有两种不同的投资：投资A预期获得5%的收益，有可能承担相对可控的损失；投资B预期获得20%的收益，但有可能面临较大的亏损。您将如何分配您的投资资产",
            answers: [
              "全部投资于A",
              "大部分投资于A",
              "两种投资各一半",
              "大部分投资于B",
              "全部投资于B",
            ],
          },
          {
            ask: "（单选题）以下描述中何种符合您对金融产品及其相关风险的实际认知情况",
            answers: [
              "有限：基本没有金融产品及其相关风险方面的知识",
              "一般：对金融产品及其相关风险具有基本的认知和理解",
              "丰富：对金融产品及其相关风险具有丰富的知识和理解（如具备金融、经济、财会、风险管理等与金融产品投资相关的工作经历；已取得金融、经济、投资、财会等相关的专业证书，如证券从业资格、期货从业资格、注册会计师证书（CPA）或注册金融分析师证书（CFA）等；具备金融、经济或财会等与金融产品投资相关的专业学习或学历背景）",
            ],
          },
          {
            ask: "（单选题）您的金融资产数额为",
            answers: [
              "不超过50万元人民币",
              "50万-300万元（不含）人民币",
              "300万-1000万元（不含）人民币",
              "1000万元人民币以上",
            ],
            conflicts: {
              selectFn:
                ((l = n(
                  e().mark(function n(t) {
                    var r,
                      s = arguments;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r =
                                  s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                                t.includes(0) || "237" !== r.job)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                i(
                                  "您本题当前选择的⾦融资产数额较⾼，与您的职业类型【学⽣】匹配度较低，请您根据实际情况确认或修改相关信息。"
                                )
                              );
                            case 5:
                              e.next = 10;
                              break;
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", { goNext: !1 })
                              );
                            case 10:
                              return e.abrupt("return", { goNext: !0 });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 7]]
                    );
                  })
                )),
                function (e) {
                  return l.apply(this, arguments);
                }),
            },
          },
          {
            ask: "（单选题）最近您家庭预计进行证券投资的资金占家庭现有总资产(不含自住、自用房产及汽车等固定资产)的比例是",
            answers: ["10%以下", "10%-30%", "30%－50%", "50%以上"],
          },
          {
            ask: "（单选题）您是否有尚未清偿的数额较大的债务，如有，其性质是",
            answers: [
              "没有",
              "有，住房抵押贷款等长期定额债务",
              "信用卡逾期欠款、消费信贷等短期信用债务",
              "亲朋之间借款",
            ],
          },
          {
            ask: "（单选题）您拟投资的最长投资期限为",
            answers: ["无固定期限", "0到5年", "0到3年", "0到1年"],
            tips: "请结合自身投资需求选择，所选内容将作为您购买产品或接受服务时适当性匹配的重要依据。若您需要投资期限更为灵活，可选择无固定期限。如您后续资金有其他安排，您可重新风测予以调整。",
          },
          {
            ask: "（单选题）您拟投资的投资品种有哪些？①货币基金等货币类、现金管理类品种②债券、债券型基金等固定收益类品种③股票、混合型基金、股票型基金等权益（股票）类投资品种④融资融券、股票期权等信用交易类、杠杆交易类品种⑤复杂的结构化产品、场外衍生品等复杂品种",
            answers: ["①②③④⑤", "①②③④", "①②③", "①②", "①"],
            tips: "请结合自身投资需求选择，所选内容将作为您购买产品或接受服务时的适当性匹配的重要依据。若您需要投资品种更为灵活，可选择涵盖品种最全的选项。如您后续的投资目标与投资需求发生变化，您可重新风测予以调整。",
          },
          {
            ask: "（单选题）当您进行投资时，您可接受的风险收益情况是",
            answers: [
              "尽可能控制风险，不在乎收益率比较低",
              "产生一定的收益，可以承担一定的投资风险",
              "产生较多的收益，可以承担较大的投资风险",
              "实现资产大幅增长，愿意承担很大的投资风险",
            ],
            conflicts: {
              A: [{ key: "riskOption", disabled: ["10:A", "10:B", "10:C"] }],
              D: [{ key: "riskOption", disabled: ["10:D", "10:E"] }],
            },
          },
          {
            ask: "（单选题）投资目的：您打算将自己的投资回报主要用于",
            answers: [
              "改善生活",
              "个体生产经营或证券投资以外的投资行为",
              "履行扶养、抚养或赡养义务",
              "本人养老或医疗",
              "偿付大额债务",
            ],
            conflicts: { E: [{ key: "riskOption", disabled: ["8:A"] }] },
          },
          {
            ask: "（单选题）您家庭的就业状况是",
            answers: [
              "您与配偶均有工作",
              "您有工作，配偶没有工作或已退休",
              "您没有工作或已退休，配偶有工作",
              "您与配偶均没有工作或者均已退休",
              "单身，但有工作",
              "单身，目前没有工作或已退休",
            ],
            conflicts: {
              A: [
                { key: "job", disabled: ["234", "236", "237"] },
                {
                  key: "customFn",
                  customFn: function (e) {
                    return u(e);
                  },
                },
              ],
              B: [
                { key: "job", disabled: ["234", "236", "237"] },
                {
                  key: "customFn",
                  customFn: function (e) {
                    return u(e);
                  },
                },
              ],
              C: [
                { key: "job", unDisabled: ["234", "236", "237"] },
                {
                  key: "customFn",
                  customFn: function (e) {
                    return u(e);
                  },
                },
              ],
              D: [
                { key: "job", unDisabled: ["234", "236", "237"] },
                {
                  key: "customFn",
                  customFn: function (e) {
                    return u(e);
                  },
                },
              ],
              E: [{ key: "job", disabled: ["234", "236", "237"] }],
              F: [{ key: "job", unDisabled: ["234", "236", "237"] }],
            },
          },
          {
            ask: "（单选题）当前，需要由您承担赡养、扶养、抚养费用的人数为",
            answers: ["0-2人", "3-5人", "6人以上"],
          },
          {
            ask: "（单选题）您的主要收入来源是",
            answers: [
              "工资、劳务报酬",
              "生产经营所得",
              "利息、股息、转让证券等收入",
              "出租、出售房地产、家庭或亲属赠予等收入",
              "无固定收入",
            ],
            conflicts: {
              A: [{ key: "job", disabled: ["235", "236", "237"] }],
              B: [
                {
                  key: "job",
                  disabled: ["236", "234", "200", "237", "215", "217", "232"],
                },
              ],
              E: [
                { key: "riskOption", disabled: ["13:A", "13:B", "13:E"] },
                { key: "job", disabled: ["200", "215", "217", "232"] },
              ],
              selectFn:
                ((c = n(
                  e().mark(function n(s) {
                    var a,
                      u,
                      o,
                      c = arguments;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a =
                                  c.length > 1 && void 0 !== c[1] ? c[1] : {}),
                                (u =
                                  c.length > 2 && void 0 !== c[2] ? c[2] : []),
                                (e.prev = 2),
                                (e.t0 =
                                  s.includes(1) &&
                                  [
                                    "205",
                                    "208",
                                    "210",
                                    "211",
                                    "212",
                                    "233",
                                  ].includes(a.job)),
                                !e.t0)
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 7),
                                i(
                                  "您本题当前选择的选项显示您的主要收⼊来源为⽣产经营所得，⽽您填写的职业类型的收⼊形式⼀般为“⼯资收⼊”，两者匹配度较低，请您根据实际情况确认或修改相关信息。"
                                )
                              );
                            case 7:
                              if (!s.includes(2)) {
                                e.next = 18;
                                break;
                              }
                              if ("A" !== u[5]) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (o = (function (e, n) {
                                  var r = t.getRawQuestionList(k, {
                                    withExtra: !0,
                                  });
                                  return t.getQuestionAnswerText(r[5], 0);
                                })()),
                                (e.next = 12),
                                i(
                                  "本题当前选项与您第4题选择的“"
                                    .concat(r.LETTER_MAP[0])
                                    .concat(
                                      o,
                                      "”匹配度较低（不超过 50 万的⾦融资产带来的利息、股息、转让证券等收⼊的数额可能⽆法作为您的主要收⼊来源），请您根据实际情况确认或修改相关信息。"
                                    )
                                )
                              );
                            case 12:
                              e.next = 18;
                              break;
                            case 14:
                              if (((e.t1 = "237" === a.job), !e.t1)) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (e.next = 18),
                                i(
                                  "您本题当前选择的主要收⼊来源与您的职业类型【学⽣】匹配度较低，请您根据实际情况确认或修改相关信息。"
                                )
                              );
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              return (
                                (e.prev = 20),
                                (e.t2 = e.catch(2)),
                                e.abrupt("return", { goNext: !1 })
                              );
                            case 23:
                              return e.abrupt("return", { goNext: !0 });
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 20]]
                    );
                  })
                )),
                function (e) {
                  return c.apply(this, arguments);
                }),
            },
          },
        ],
      },
    ],
    extraPromptsName: "保守型",
    extraPrompts: [
      {
        group: "保守型",
        questions: [
          {
            ask: "（单选题）（本题仅限保守型客户作答）依据监管要求，保守型投资者若不具备完全的民事行为能力则为风险承受能力最低类别投资者，请问您是否具有完全民事行为能力",
            answers: ["是", "否"],
            conflicts: {
              selectFn:
                ((o = n(
                  e().mark(function n(t) {
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.includes(1)) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.prev = 1),
                                (e.next = 4),
                                i(
                                  "您本题当前选择的选项代表您不具备完全⺠事⾏为能⼒（不具备完全⺠事⾏为能⼒的情形包括：（1）不能辨认或不能完全辨认⾃⼰⾏为的成年人；（2）⼗⼋周岁以下的未成年人【但是⼗六周岁以上且以⾃⼰劳动收⼊为主要收⼊来源的未成年人除外】，需请您根据实际情况再次确认或修改相关信息。"
                                )
                              );
                            case 4:
                              e.next = 9;
                              break;
                            case 6:
                              return (
                                (e.prev = 6),
                                (e.t0 = e.catch(1)),
                                e.abrupt("return", { goNext: !1 })
                              );
                            case 9:
                              return e.abrupt("return", { goNext: !0 });
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      n,
                      null,
                      [[1, 6]]
                    );
                  })
                )),
                function (e) {
                  return o.apply(this, arguments);
                }),
            },
          },
          {
            ask: "（单选题）（本题仅限保守型客户作答）依据监管要求，保守型投资者若没有风险容忍度或者不愿意承担任何损失则为风险承受能力最低类别投资者，请问您是否具备一定风险容忍度或者愿意承担投资损失",
            answers: ["是", "否"],
            conflicts: {
              B: [
                {
                  key: "riskOption",
                  disabled: [
                    "10:A",
                    "10:B",
                    "10:C",
                    "10:D",
                    "11:B",
                    "11:C",
                    "11:D",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
    varieties: [
      "结构化、场外衍生品等复杂类",
      "信用交易、杠杆交易类",
      "权益类",
      "固定收益类",
      "现金管理及货币类",
    ],
  };
exports.riskTest = k;
