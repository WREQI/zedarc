require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../apply/profile/utils/index.js"),
  s = function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0",
      s = arguments.length > 1 ? arguments[1] : void 0;
    return +e > 0 && +e < s;
  },
  n = function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0",
      s = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0;
    return +e >= s && +e <= n;
  },
  t = {
    version: "3",
    statements: [
      "本问卷旨在了解您可承受的风险程度等情况，借此协助您选择合适的金融产品和服务类别，以符合您的风险承受能力。测评前，请您务必仔细阅读并确认了解以下内容：",
      "风险承受能力评估是本公司向投资者履行适当性职责的一个必要环节，其目的是使本公司所提供的产品或服务与您的风险承受能力等级相匹配。",
      "本公司将根据您的测评结果评估您的风险承受能力等级，该风险承受能力等级将影响您购买产品或接受服务的范围。您应当如实提供测评相关信息，并对所提供信息的真实性、准确性、完整性负责，否则您应当自行承担相应法律责任，同时本公司有权拒绝向您提供服务或者销售产品。您对风险测评问卷某一问题的具体回答不构成本公司向您提供服务或销售产品时风险评估的唯一依据，也不构成您与本公司就本公司向您提供服务或销售产品之间达成任何约定或协议安排。",
      "本公司建议：当您的各项状况发生重大变化时，您需要对所投资的产品或接受的服务及时进行重新审视，若您不能承受所投资产品或接受服务的投资风险，本公司不建议您继续投资该产品或参与该服务。",
      "本公司特别提醒您：本公司向投资者履行风险承受能力评估等适当性职责，并不能取代您自己的投资判断，也不会降低产品或服务的固有风险。同时，与产品或服务相关的投资风险、履约责任以及费用等将由您自行承担。",
    ],
    prompts: [
      {
        group: "财务状况",
        questions: [
          {
            ask: "您的主要收入来源是",
            answers: [
              "工资、劳务报酬",
              "生产经营所得",
              "利息、股息、转让证券等金融性资产收入",
              "出租、出售房地产等非金融性资产收入",
              "无固定收入",
              "退休、养老金",
            ],
            weakConflicts: {
              A: [
                {
                  key: "job",
                  disabled: ["236", "237"],
                  tips: "此选项与您的职业可能不符，勾选即代表您确认信息无误。",
                },
              ],
              F: [
                {
                  key: "customFn",
                  customFn: function (n) {
                    return s(
                      null == n ? void 0 : n.age,
                      n.sex === e.sexUtil.SEX_TYPE.MALE ? 50 : 45
                    );
                  },
                  tips: "此选项与您的年龄可能不符，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
          {
            ask: "您的家庭年收入情况",
            answers: [
              "小于10万元",
              "10万元-50万元（含10万）",
              "50万元-100万元（含50万）",
              "100万元-300万元（含100万）",
              "大于或等于300万元",
            ],
          },
          {
            ask: "您可用于投资的金融资产数额为",
            answers: [
              "小于20万元人民币",
              "20万-50万元（含20万）人民币",
              "50万-300万元（含50万）人民币",
              "300万-500万元（含300万）人民币",
              "500万-1000万元（含500万）人民币",
              "大于或等于1000万元",
            ],
            weakConflicts: {
              E: [
                {
                  key: "questionConflict",
                  disabled: ["2:A", "2:B"],
                  tips: "此选项与您的家庭年收入情况（第2题）可能不符，勾选即代表您确认信息无误。",
                },
              ],
              F: [
                {
                  key: "questionConflict",
                  disabled: ["2:A", "2:B"],
                  tips: "此选项与您的家庭年收入情况（第2题）可能不符，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
          {
            ask: "最近您家庭预计进行证券投资的资金占家庭现有总资产(不含自住、自用房产及汽车等固定资产)的比例是",
            answers: [
              "10%以下",
              "10%（含10%）－30%",
              "30%（含30%）－50%",
              "50%（含50%）-70%",
              "70%以上（含70%）",
            ],
          },
          {
            ask: "您是否有尚未清偿的数额较大的债务，如有，其性质是",
            answers: [
              "没有",
              "有，亲朋之间借款",
              "有，信用卡欠款、消费信贷等短期信用债务",
              "有，住房抵押贷款等长期定额债务",
            ],
          },
        ],
      },
      {
        group: "投资知识",
        questions: [
          {
            ask: "以下描述中何种最符合您的实际情况：①现在或以前曾从事金融、经济或财会等与金融产品投资相关的工作超过两年；②已取得金融、经济或财会等与金融产品投资相关专业学士以上学位；③取得证券从业资格、期货从业资格、注册会计师证书（CPA）或注册金融分析师证书（CFA）中的一项及以上；",
            answers: [
              "符合上述①至③中的某一项",
              "符合上述①至③中的某两项",
              "上述①至③项均符合",
              "以上均不符合",
            ],
            conflicts: {
              C: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return ["3", "4", "5", "6"].includes(e.edu || "");
                  },
                  tips: "根据您的学历信息，已屏蔽矛盾选项，如需调整可返回重选学历。",
                },
              ],
            },
          },
        ],
      },
      {
        group: "投资经验",
        questions: [
          {
            ask: "您的投资经验可以被概括为",
            answers: [
              "把钱存放银行或购买过现金管理类银行理财、货币市场基金等产品，基本没有其他投资经验",
              "参与过公司债、企业债、股票以及与之对应的公募基金等品种的交易",
              "参与过创业板、科创板、港股通、融资融券、可转债、新三板、北交所股票等产品的交易",
              "参与过私募产品、量化对冲产品、复杂的结构化产品、期货类产品的交易",
            ],
            multiple: !0,
            conflicts: {
              selectFn: function (e) {
                return new Promise(function (s) {
                  var n = [];
                  e.length && (n = e.includes(0) ? [1, 2, 3] : [0]),
                    s({ goNext: !0, selectedDisaledList: n });
                });
              },
            },
          },
          {
            ask: "针对上一题提及的金融产品或服务，您的投资经验为",
            answers: ["2年以下", "2到5年", "5到10年", "10年以上"],
            weakConflicts: {
              D: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return s(null == e ? void 0 : e.age, 26);
                  },
                  tips: "此选项与您的年龄情况可能不符，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
          {
            ask: "有一位投资者一个月内做了15笔交易（同一品种买卖各一次算一笔），您认为这样的交易频率",
            answers: ["偏低", "正常", "偏高", "太高"],
          },
          {
            ask: "过去一年时间内，您购买的不同金融产品或业务服务（含同一类型的不同金融产品或业务服务。其中金融产品包括但不限于银行理财产品、信托产品、基金类产品等，金融业务服务包括但不限于证券、期货、黄金、外汇投资等）的数量是",
            answers: ["5个以下", "6至10个", "11至15个", "16个以上"],
          },
        ],
      },
      {
        group: "投资目标",
        questions: [
          {
            ask: "您用于证券投资的大部分资金不会用作其他用途的时间段为",
            answers: ["0到1年", "1到5年", "无特别要求"],
          },
          {
            ask: "您打算重点参与以下哪些种类的投资品种",
            answers: [
              "债券、货币市场基金、债券基金等固定收益类投资品种",
              "股票、混合型基金、偏股型基金、股票型基金等权益类投资品种",
              "期货、期权、融资融券等",
              "复杂金融产品或服务",
            ],
            multiple: !0,
          },
          {
            ask: "您认为以下哪类投资策略更加符合您目前的投资需求",
            answers: [
              "尽可能保障本金安全，不在乎收益率比较低",
              "产生一定的收益，可以承担一定的投资风险",
              "产生较多的收益，可以承担较大的投资风险",
              "实现资产大幅增长，愿意承担很大的投资风险",
            ],
            weakConflicts: {
              A: [
                {
                  key: "questionConflict",
                  disabled: ["12:B", "12:C", "12:D"],
                  tips: "该选项与您重点参与的投资品种（第12题）不符，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
          {
            ask: "假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为",
            answers: [
              "全部投资于A",
              "大部分投资于A",
              "两种投资各一半",
              "大部分投资于B",
              "全部投资于B",
            ],
            weakConflicts: {
              A: [
                {
                  key: "questionConflict",
                  disabled: ["13:C", "13:D"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
              C: [
                {
                  key: "questionConflict",
                  disabled: ["13:A"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
              D: [
                {
                  key: "questionConflict",
                  disabled: ["13:A"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
              E: [
                {
                  key: "questionConflict",
                  disabled: ["13:A"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
        ],
      },
      {
        group: "风险偏好",
        questions: [
          {
            ask: "您认为自己能承受的最大投资损失是多少",
            answers: [
              "不愿承受任何投资损失",
              "可承受较小的投资损失",
              "可以承受一定，甚至较大的投资损失",
              "可承受超过本金的投资损失",
            ],
            conflicts: {
              A: [{ key: "riskOption", disabled: ["13:B", "13:C", "13:D"] }],
              D: [{ key: "riskOption", disabled: ["13:A"] }],
            },
            weakConflicts: {
              A: [
                {
                  key: "questionConflict",
                  disabled: ["12:B", "12:C", "12:D"],
                  tips: "此选项与您重点参与的投资品种（第12题）不符，勾选即代表您确认信息无误。",
                },
                {
                  key: "questionConflict",
                  disabled: ["14:B", "14:C", "14:D", "14:E"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
              C: [
                {
                  key: "questionConflict",
                  disabled: ["13:A", "14:A"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
              D: [
                {
                  key: "questionConflict",
                  disabled: ["14:A"],
                  tips: "该选项与您第/question-number-placeholder/题选项矛盾，勾选即代表您确认信息无误。",
                },
              ],
            },
          },
          {
            ask: "假设您的投资在1个月内出现10%的亏损时，您通常会怎么做",
            answers: [
              "寻找时机进行补仓",
              "继续持有，等待反弹",
              "部分卖出，降低仓位",
              "立即全部卖出",
            ],
          },
          {
            ask: "您打算将自己的投资回报主要用于",
            answers: [
              "本人养老或医疗",
              "履行扶养、抚养或赡养义务",
              "个体生产经营或证券投资以外的投资行为",
              "改善生活",
              "偿付债务",
            ],
            conflicts: { E: [{ key: "riskOption", disabled: ["5:A"] }] },
          },
        ],
      },
      {
        group: "其他信息",
        questions: [
          {
            ask: "请问您的最高学历是",
            answers: [
              "博士",
              "硕士",
              "本科",
              "大专",
              "中专",
              "高中",
              "初中及以下",
            ],
            hidden: !0,
            prop: "edu",
          },
          {
            ask: "请问您的年龄处于",
            answers: [
              "0-17岁",
              "18-30岁",
              "31-40岁",
              "41-50岁",
              "51-60岁",
              "61-69岁",
              "70岁及以上",
            ],
            prop: "age",
            conflicts: {
              A: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !s(null == e ? void 0 : e.age, 18);
                  },
                },
              ],
              B: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !n(null == e ? void 0 : e.age, 18, 30);
                  },
                },
              ],
              C: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !n(null == e ? void 0 : e.age, 31, 40);
                  },
                },
              ],
              D: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !n(null == e ? void 0 : e.age, 41, 50);
                  },
                },
              ],
              E: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !n(null == e ? void 0 : e.age, 51, 60);
                  },
                },
              ],
              F: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !n(null == e ? void 0 : e.age, 61, 69);
                  },
                },
              ],
              G: [
                {
                  key: "customFn",
                  customFn: function (e) {
                    return !(+(null == e ? void 0 : e.age) >= 70);
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    showConflictsTips: !0,
    selectWeakConflictsTrace: !0,
    resultVarietiesPreText: "适配投资品种",
    varieties: [
      "国债、债券质押式逆回购、债券质押式报价回购、场外货币市场基金等本金遭受损失的可能性低的产品",
      "部分普通债券基金、债券类分级基金A份额、部分场内外基金等本金遭受损失的可能性较低的产品",
      "股票（不包含需要准入资质的股票）、公开发行公司债、企业债、公募基金等本金安全具有一定不确定性的产品",
      "退市整理及风险警示股票、港股通、创业板、科创板、约定购回、可转债和可交债、期权、融资融券等本金面临较大不确定性的产品",
      "债券基金分级B份额、可转债分级基金B份额、股票分级基金B份额、私募股权基金、场外衍生品等结构复杂且本金面临极大不确定性的产品",
    ],
    resultConfirm:
      "具体适配投资品种请参考国金证券官网公示的《风险等级对照表》。<br>本人已经了解并愿意遵守国家有关证券市场管理的法律、法规、规章及相关业务规则，本人在此郑重承诺以上填写的内容真实、准确、完整。若本人提供的信息发生任何重大变化，本人将及时书面通知贵公司。",
  };
exports.riskTest = t;
