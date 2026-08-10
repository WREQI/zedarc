var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  a = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != n(t) ? t + "" : t, i),
      i
    );
  },
  p = require("../index.js"),
  l = require("../../../utils/getPlatform.js"),
  c = require("../../../stores/protocol/enum.js"),
  g = l.getPlatform().isWeixin,
  m = new ((function (n) {
    r(l, n);
    var s = o(l);
    function l() {
      var e;
      return (
        t(this, l),
        (e = s.apply(this, arguments)),
        a(i(e), "stepConfig", {
          index: null,
          progress: {
            bottomText: "",
            hideThirdBankActSubscribe: !1,
            hideBulletin: !0,
          },
          idcard: {
            id_exp_date: !0,
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
          },
          profile: {
            list: {
              edu: !0,
              job: !0,
              company: !1,
              job_title_enum: !1,
              income: !1,
              year_income: !0,
              mail_address: !0,
              zip_code: !1,
              tel: g && !0,
              ctrl: !0,
              benifit: !0,
              credit_record: !0,
              tax: !0,
            },
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !0,
            autoFillMailAddress: !0,
          },
          facecheck: {
            protocol: {
              newMode: !0,
              useWrapStyle: !1,
              hideCheckBox: !1,
              defaultChecked: !0,
              signText: "我知悉并同意如下授权和签署",
              allProtocolName: "",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK],
              },
              placeholderName: "《人脸信息授权协议》",
              buttonType: "readConfirm",
            },
          },
          video: {
            sentence:
              "我已阅读并理解开户协议，知晓市场风险，自愿在招商证券开户",
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/c46f0dc0a9f23c20aeefe88b19bd32ab.mp3",
              voiceText1:
                "请问您是否已阅读并理解开户协议，知晓证券市场风险，自愿在招商证券开户",
              voiceText2: "请您在“嘀”声后大声回答“是”或“不是”",
              duration1: 9,
              duration2: 6,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          card: {
            isNewUnionpayAuth: !1,
            unionpayBankcardProtocol: {},
            isSupportCftCard: !0,
          },
          risk: {
            ageType: "NORMAL",
            showPeriod: !0,
            lowestLevelUserCall: "最低类别的保守型投资者",
            additionalDesc: null,
            levelTip: null,
          },
          submit: {
            returnVisit:
              "回访确认：本人自愿开立证券账户，佣金费率万2.354，单笔最低5元(适用于A股、基金)，自行设置账户密码，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            waitTime: 3,
            queryCommissionSwitch: !1,
            commissionProtocolInfo: {},
            firstProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "全部文件",
              mergingConfig: { sceneType: [] },
              placeholderName: "开户协议",
            },
            secondProtocolInfo: {},
            confirmationProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人知悉并同意适当性匹配的评估结果",
              tilingConfig: {
                sceneType: [c.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName: "金融产品或金融服务适当性评估结果确认书",
              buttonType: "confirm",
            },
            transcribeConfig: {
              enable: !0,
              introduction: "为保障您的权益，请输入以下声明：",
              content: [
                "本人已详细阅读并充分理解了《客户须知》的各项内容。本人已认真阅读并完全理解以上《证券交易委托风险揭示书》，愿意承担证券市场的各种风险。",
              ],
              protocols: [],
            },
            extraTips: [
              "本人确认账户变动状况，账户未被招商证券从业人员违规操作，不存在全权委托，本人已了解招商证券向本人揭示的风险。",
            ],
          },
        }),
        a(i(e), "mpInfo", {
          appId: "wx821cd4a621f449e7",
          originId: "gh_6b8ef72c1383",
        }),
        a(i(e), "protocol", {
          suitable: "金融产品或金融服务适当性评估结果确认书",
          insuitable: "金融产品或金融服务不适当警示及确认书",
        }),
        a(i(e), "supportedBanks", [
          "ICBC",
          "ABC",
          "BOC",
          "CCB",
          "COMM",
          "CMB",
          "PAB",
          "CEB",
          "GDB",
          "SPDB",
          "HXB",
          "PSBC",
        ]),
        a(i(e), "applyRetainInfos", {
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
        a(i(e), "progressBar", {
          applyTips: [
            {
              turn_tips: [
                {
                  text: "马上可以领取6.88%新客专享理财！",
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
                  text: "微信即可便捷交易，极致炒股体验！",
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
              text: "审核通过即可开启专享理财",
              w_icon:
                "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi.png",
              b_icon:
                "https://st.gtimg.com/image/mp-broker/apply/progressBar/ju-jin-bi-dark.png",
            },
          ],
          benefitTips: {
            text: "开启股票投资",
            w_icon:
              "https://st.gtimg.com/image/mp-broker/apply/progressBar/activity-gift.png",
            b_icon:
              "https://st.gtimg.com/image/mp-broker/apply/progressBar/activity-gift.png",
          },
        }),
        a(i(e), "progressActConfig", {
          type: p.EProgressTemp.XINKE,
          xinke: {
            unreceived: {
              title: "最高可得150元现金",
              subtitle: "6.88%年化无风险收益",
              btnText: "领取",
            },
            received: {
              title: "领取成功",
              subtitle: "开户成功后您可访问微证券资产页查看最高150元现金的权益",
            },
          },
        }),
        a(i(e), "apply", { needSignProtocol: !0 }),
        e
      );
    }
    return e(l);
  })(p.BrokerApply))();
exports.apply = m;
