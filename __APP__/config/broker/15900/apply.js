var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  o = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  p = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != n(r) ? r + "" : r, i),
      i
    );
  },
  a = require("../index.js"),
  l = require("../../../utils/getPlatform.js"),
  g = require("../../../service/sdk/lib/enum.js"),
  c = require("../../../stores/protocol/enum.js"),
  m = l.getPlatform().isWeixin,
  d = new ((function (n) {
    o(a, n);
    var s = t(a);
    function a() {
      var e;
      return (
        r(this, a),
        (e = s.apply(this, arguments)),
        p(i(e), "stepConfig", {
          index: null,
          mobile: {
            protocol: {
              newMode: !0,
              hideCheckBox: !1,
              signText: "本人已详细阅读并同意签署",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_BINDMOBILE],
              },
              placeholderName: "《国金证券隐私政策》",
            },
          },
          idcard: {
            id_exp_date: !0,
            source: [
              g.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
              g.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
            ],
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
            targetSize: 1.5,
          },
          progress: { investorEducation: !0 },
          profile: {
            list: {
              edu: !0,
              job: !0,
              company: !1,
              job_title_enum: !1,
              income: !1,
              year_income: !1,
              mail_address: !0,
              zip_code: !1,
              tel: m,
              ctrl: !0,
              benifit: !0,
              credit_record: !0,
              tax: !0,
            },
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !0,
            autoFillMailAddress: !0,
            showConfirmDialog: !0,
          },
          video: {
            sentence: "我自愿在国金证券开户",
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/8c02784869f153b479d65dcd465377bd.mp3",
              voiceText1:
                "请您确认已阅读并理解开户协议，知晓市场风险，自愿在国金证券开户",
              voiceText2: "请在“嘀”声后大声回答“确认”",
              duration1: 7,
              duration2: 3,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          card: {
            isNewUnionpayAuth: !0,
            unionpayBankcardProtocol: {
              newMode: !0,
              hideCheckBox: !1,
              signText: "我已阅读并同意签署",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_UNIONPAY_BANKCARD],
              },
              placeholderName: "《银行卡验证服务个人信息授权》",
            },
            isSupportCftCard: !0,
          },
          risk: {
            showPeriod: !0,
            lowestLevelUserCall: "最低类别的保守型投资者",
            levelTip: {
              1: "您的风险承受能力为C1（低风险承受），您拟投资的地方政府债等场内投资品种为R2(中低风险等级)，A股、B股股票等场内投资品种为R3（中风险等级），高于您的风险承受能力，请您确认已了解上述交易品种的风险，谨慎投资并自行承担一切投资结果。如您点击“确认”，即视为您已经理解本提示内容并主动要求投资上述高于您风险承受能力的交易品种或接受相关服务，国金证券将不再向您逐一进行风险揭示和不适当警示。",
              2: "您的风险承受能力为C2（中低风险承受），您拟投资的A股、B股股票、基金（股票型）等场内投资品种为R3（中风险等级），高于您的风险承受能力，请您确认已了解上述交易品种的风险，谨慎投资并自行承担一切投资结果。如您点击“确认”，即视为您已经理解本提示内容并主动要求投资上述高于您风险承受能力的交易品种或接受相关服务，国金证券将不再向您逐一进行风险揭示和不适当警示。",
            },
          },
          submit: {
            returnVisit:
              "本人自愿开立证券账户，普通账户佣金费率万2.3，单笔最低5元（适用于A股、基金），账户由本人操作，自行设置交易密码和资金密码，国金证券工作人员不存在承诺收益分成等违规言行。本人已阅读并理解《开户协议》和风险揭示等文件的内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !0,
            queryCommissionSwitch: !1,
            commissionProtocolInfo: {},
            firstProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "全部文件",
              mergingConfig: { sceneType: [] },
              placeholderName: "全部文件",
            },
            secondProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText:
                "本人已阅读并完全理解上述协议和有关业务规则的各项内容，特别是其中有关于管辖的约定以及免除或限制证券公司责任的条款和内容的全部及完整含义，愿意承担证券市场的各种风险，对协议之文字表达无任何异议，确认从本人电子签名或双方签章时起该文件生效，并承诺遵守协议之约定。",
            },
            confirmationProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人知悉并同意适当性匹配的评估结果",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName: "风险测评结果确认书",
              buttonType: "confirm",
            },
          },
        }),
        p(i(e), "mpInfo", {
          appId: "wx93273579df1046e3",
          originId: "gh_1ef582daa986",
        }),
        p(i(e), "protocol", {
          suitable: "风险测评结果确认书",
          insuitable: "风险警示及投资者确认书",
        }),
        p(i(e), "supportedBanks", [
          "ICBC",
          "ABC",
          "BOC",
          "CCB",
          "COMM",
          "CMB",
          "CEB",
          "GDB",
          "HXB",
        ]),
        p(i(e), "applyRetainInfos", {
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
        p(i(e), "progressBar", {
          applyTips: [
            {
              turn_tips: [
                {
                  text: "领取专享精选工具，把握投资机会！",
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
                  text: "开户交易股票，赚取更高收益！",
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
                  text: "开户购买通用回购",
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
        p(i(e), "apply", { needSignProtocol: !1 }),
        e
      );
    }
    return e(a);
  })(a.BrokerApply))();
exports.apply = d;
