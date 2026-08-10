var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  o = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  a = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != s(r) ? r + "" : r, t),
      t
    );
  },
  p = require("../index.js"),
  l = require("../../../utils/getPlatform.js"),
  c = require("../../../stores/protocol/enum.js"),
  g = l.getPlatform().isWeixin,
  m = new Date().getFullYear(),
  b = new ((function (s) {
    o(p, s);
    var n = i(p);
    function p() {
      var e;
      return (
        r(this, p),
        (e = n.apply(this, arguments)),
        a(t(e), "stepConfig", {
          index: null,
          progress: {
            bottomText:
              "开户营业部：总部直属互联网营业部（广州寺右新马路证券营业部）",
          },
          mobile: {
            bottomText:
              "广发证券全国统一热线95575 <br /> 地址:广州天河区马场路26号广发证券大厦 <br />粤ICP备11070729号 广发证券股份有限公司版权所有 <br /> Copyright 2000-".concat(
                m,
                " All Rights Reserved <br /> 支持IPV6 <br /> 投资皆有风险，应谨慎至上"
              ),
          },
          idcard: {
            id_exp_date: !0,
            bottomText:
              "身份证仅用于广发证券开户，如开户后证件过期，请您及时通过自助或临柜方式办理证件更新，以免影响账户使用。",
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
          },
          profile: {
            autoFill: !1,
            list: {
              edu: !0,
              job: !0,
              company: !1,
              job_title_enum: !1,
              income: !1,
              year_income: !1,
              mail_address: !0,
              zip_code: !1,
              tel: g && !0,
              ctrl: !0,
              benifit: !0,
              credit_record: !1,
              tax: !0,
            },
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !1,
            autoFillMailAddress: !1,
            protocol: {
              newMode: !0,
              useWrapStyle: !0,
              hideCheckBox: !1,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "全部文件",
              placeholderName: "全部文件",
              mergingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_PROFILE],
              },
            },
          },
          video: {
            sentence: !1,
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/e09b2c93b5babae1ae3fdbdab6cd9157.mp3",
              voiceText1:
                "请问您是否阅读并理解开户协议，知晓证券市场风险，自愿在广发证券开户",
              voiceText2: "请回答“是”或“不是”",
              duration1: 8,
              duration2: 2,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          card: { isNewUnionpayAuth: !1, isSupportCftCard: !0 },
          risk: {
            ageType: "NORMAL",
            showPeriod: !0,
            lowestLevelUserCall: "特别保护型客户",
            additionalDesc: null,
            levelTip: null,
            showSuitableProtocol: !0,
            warnLowLevelList: ["1", "2", "6", "10"],
            protectTypeTip:
              "您的当前风险等级$levelText低于主板交易权限(R3)要求，您开通证券账户后，将无法买入、申购股票，但仍可以进行通用回购、国债等低风险品种的交易，请确认是否重新测评或继续申请开户。",
            protocols: [
              {
                name: "广发证券客户风险承受能力评估结果确认书",
                key: "guangfa_gfzqkhfxcsnlpgjgqrs",
              },
            ],
          },
          submit: {
            returnVisit:
              "开立证券账户须遵守实名制要求，不得出借自己的证券账户和借用他人证券账户买卖证券。对于违反要求的，中国结算公司将对所涉证券账户采取限制使用、注销等措施，对所涉投资者采取禁止新开户等措施。本人自愿开立证券账户，服务套餐费率万2.5（包括佣金、证券监管费、交易经手费、登记过户费，不包括印花税），自行设置账户密码，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            queryCommissionSwitch: !1,
            cancelTipsSA: "不开通深市A股账户，您将无法购买深圳交易所的股票。",
            cancelTipsHA: "不开通沪市A股账户，您将无法购买上海交易所的股票。",
            commissionProtocolInfo: {},
            firstProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "全部文件",
              placeholderName: "全部文件",
              mergingConfig: { sceneType: [] },
            },
            secondProtocolInfo: {},
            suitableProtocolIds: ["10080", "10081"],
            confirmationProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人知悉并同意适当性匹配的评估结果",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName:
                "广发证券金融产品（服务）适当性风险警示及客户确认书",
              buttonType: "confirm",
            },
            transcribeConfig: {
              enable: !0,
              introduction: "为保障您的权益，请输入以下声明：",
              content: [
                "本人已认真详细阅读并完全充分理解《投资者须知》《风险揭示书》的各项内容，愿意承担证券市场的各种风险。",
              ],
              protocols: [],
            },
            mustFetchedProtocol: !0,
            checkBornYearForIncentive: !0,
          },
          questionnaire: {
            questions: [
              {
                ask: "请问您是{{username}}本人吗?",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips:
                  "非常抱歉，回访问卷必须由客户本人完成，他人不能代替回访。",
              },
              {
                ask: "请问您是自愿通过网上开户方式在广发证券申请开户的吗？",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips: "非常抱歉，非您本人自愿开户，无法为您开通账户。",
              },
              {
                ask: "请问您是本人设置账户密码的吗？（账户密码非常重要，请妥善保管您的账户密码。）",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips:
                  "非常抱歉，账户密码必须由您本人设置，为了您的账户安全，请您重新设置账户密码。",
              },
              {
                ask: "请问是您本人阅读并签署开户协议、风险揭示文件、风险测评问卷的吗？",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips:
                  "非常抱歉，请您重新阅读并签署开户协议和风险揭示文件，完成风险测评问卷，清楚了解相关风险后再进行回访。",
              },
              {
                ask: "我司不存在代您操作账户或者承诺收益分成的情形？",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips:
                  "请不要将您的账户全权委托他人操作，我司员工不得代客户操作账户，请您注意投资风险，及时修改您的账户密码。",
              },
              {
                ask: "请问您了解买卖证券或金融产品的基础知识，清楚知悉并自愿承担该业务相关风险吗？",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips:
                  "证券市场风险较大，请您在了解相关基本知识，清楚相关风险后再申请开户。",
              },
              {
                ask: "我司不会承诺以任何形式进行开户后的返佣、返现（如承诺完成开户后给予一定报酬等），请问我司或第三方工作人员是否存在向您承诺开户后返佣、返现等情形？",
                answers: ["是", "否"],
                correctAns: 1,
                reselectTips:
                  "非常抱歉，承诺以任何形式进行开户后的返佣、返现的行为属于违规行为，不允许进行开户",
              },
              {
                ask: "您提供的联系地址是您的经常居住地地址，且您的联系地址准确完整、真实有效。",
                answers: ["是", "否"],
                correctAns: 0,
                reselectTips: "请您提供准确完整、真实有效的经常居住地地址。",
              },
            ],
            headerTips: "温馨提示：为确保您的权益，回访问卷必须由您本人填写。",
            needSignProtocol: !0,
            protocolText:
              "以上回访问卷均由本人自主填写，且确认问卷所选内容真实有效，并同意与其他开户协议一起进行电子签名。",
            submitBtnText: "提交问卷",
          },
        }),
        a(t(e), "mpInfo", {
          appId: "wx8d36debd2261346f",
          originId: "gh_f3695e718a89",
        }),
        a(t(e), "protocol", {
          suitable: "广发证券金融产品（服务）适当性风险警示及客户确认书",
          insuitable: "广发证券金融产品（服务）适当性风险警示及客户确认书",
        }),
        a(t(e), "supportedBanks", [
          "ICBC",
          "CCB",
          "ABC",
          "GDB",
          "BOC",
          "CMB",
          "SPDB",
          "CEB",
          "HXB",
          "PAB",
          "BOG",
          "DGCB",
          "COMM",
          "NJCB",
          "BOJ",
        ]),
        a(t(e), "applyRetainInfos", {
          enable: "1",
          backgroundImage:
            "https://st.gtimg.com/design/d491255f70d59cda00bfc60fb5aeeb5f.png",
          btnLeft: {
            text: "退出",
            textColor: "#FFFFDAAC",
            backgroundColor: ["#00000000", "#00000000"],
            borderColor: ["#FFF5DFAC", "#FFE2C684"],
          },
          btnRight: {
            text: "继续开户",
            backgroundColor: ["#FFF5DFAC", "#FFE2C684"],
            borderColor: ["#FFF5DFAC", "#FFE2C684"],
            textColor: "#FFE73A39",
          },
        }),
        a(t(e), "suitableProtocolShowRiskResult", !0),
        a(t(e), "showRiskMatchProtocolResult", {
          isDynamicShowProtocol: !0,
          protectType: "6",
        }),
        a(t(e), "progressBar", {
          applyTips: [
            {
              turn_tips: [
                {
                  text: "广发证券网上开户",
                  w_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi.png",
                  b_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi-dark.png",
                },
              ],
            },
            {
              turn_tips: [
                {
                  text: "广发证券网上开户",
                  w_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi.png",
                  b_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi-dark.png",
                },
              ],
            },
            {
              turn_tips: [
                {
                  text: "广发证券网上开户",
                  w_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi.png",
                  b_icon:
                    "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi-dark.png",
                },
              ],
            },
          ],
          auditTips: [
            {
              text: "审核通过即可开启股票投资",
              w_icon:
                "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi.png",
              b_icon:
                "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi-dark.png",
            },
          ],
          benefitTips: {
            text: "开启股票投资",
            w_icon:
              "https://st.gtimg.com/image/mp-broker/apply/progressBar/gold-coin.png",
            b_icon:
              "https://st.gtimg.com/image/mp-broker/apply/progressBar/gold-coin.png",
          },
        }),
        a(t(e), "apply", { needSignProtocol: !1 }),
        e
      );
    }
    return e(p);
  })(p.BrokerApply))();
exports.apply = b;
