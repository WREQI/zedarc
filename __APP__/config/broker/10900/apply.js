var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var p = Object.defineProperty,
  n = function (e, t, o) {
    return (
      (function (e, t, o) {
        t in e
          ? p(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[t] = o);
      })(e, "symbol" != a(t) ? t + "" : t, o),
      o
    );
  },
  s = require("../index.js"),
  c = require("./base.js"),
  l = require("../../../utils/getPlatform.js"),
  g = require("../../../stores/protocol/enum.js"),
  m = l.getPlatform().isWeixin,
  b = new ((function (a) {
    i(s, a);
    var p = r(s);
    function s() {
      var e;
      return (
        t(this, s),
        (e = p.apply(this, arguments)),
        n(o(e), "captchaLen", 6),
        n(o(e), "stepConfig", {
          index: {
            bannerImgs: [
              {
                image:
                  "https://st.gtimg.com/image/mp-broker/oem/apply/banner_03_".concat(
                    c.base.code,
                    ".png"
                  ),
              },
              {
                image:
                  "https://st.gtimg.com/image/mp-broker/oem/apply/banner_02_".concat(
                    c.base.code,
                    ".png"
                  ),
              },
            ],
            iconList: [
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_card_".concat(
                  c.base.code,
                  ".png"
                ),
                text: "银行借记卡",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_id_".concat(
                  c.base.code,
                  ".png"
                ),
                text: "二代身份证",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_wifi_".concat(
                  c.base.code,
                  ".png"
                ),
                text: "网络畅通",
              },
            ],
          },
          progress: { hideThirdBankActSubscribe: !0 },
          card: {
            isNewUnionpayAuth: !1,
            unionpayBankcardProtocol: {},
            isSupportCftCard: !0,
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
              year_income: !1,
              mail_address: !0,
              zip_code: !1,
              tel: m && !0,
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
              defaultChecked: !1,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "开户协议",
              placeholderName: "人脸识别用户信息采集协议",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK],
              },
            },
          },
          video: {
            onvic: !1,
            sentence: !1,
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/eae94d4cc21fbe1a88318cf7aa642dd2.mp3",
              voiceText1:
                "请问您是否已阅读并理解开户协议，知晓市场风险，自愿在国信证券开户",
              voiceText2: "请您在“嘀”声后大声回答“是”或“不是”",
              duration1: 8,
              duration2: 5,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          risk: {
            ageType: "NORMAL",
            showPeriod: !0,
            lowestLevelUserCall: "最低类别的保守型投资者",
            additionalDesc: null,
            levelTip: null,
            risktestTitle: "风险承受能力测评告知",
          },
          submit: {
            returnVisit:
              "本人自愿开立证券账户及理财账户，普通账户佣金费率万2.5，自行设置账户密码，未将账户委托国信员工操作，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            queryCommissionSwitch: !1,
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
            confirmationProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人知悉并同意",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName: "适当性评估结果确认书",
              buttonType: "confirm",
            },
            transcribeConfig: {
              enable: !0,
              introduction: "为保障您的权益，请输入以下声明：",
              content: [
                "本人已认真详细阅读并完全充分理解了《客户须知》、《证券交易委托风险揭示书》、《国信证券服务及产品使用风险揭示书》的各项内容，并同意遵守，愿意承担证券市场的各种风险。",
              ],
              protocols: [],
              isHiddenLinkStyle: !0,
            },
            extraTips: [
              "本人承诺使用本人实名开立的账户进行交易，不违反规定出借自己的证券账户或者借用他人的证券账户从事证券交易。",
            ],
          },
        }),
        n(o(e), "mpInfo", {
          appId: "wx5e94b5ebebe246b0",
          originId: "gh_2952f60cbb87",
        }),
        n(o(e), "protocol", {
          suitable: "适当性评估结果确认书",
          insuitable: "产品或服务不适当警示及投资者确认书",
        }),
        n(o(e), "supportedBanks", [
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
        ]),
        n(o(e), "applyRetainInfos", {
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
        n(o(e), "progressBar", {
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
        n(o(e), "apply", { needSignProtocol: !1 }),
        e
      );
    }
    return e(s);
  })(s.BrokerApply))();
exports.apply = b;
