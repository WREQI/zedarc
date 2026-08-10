var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  s = function (e, r, o) {
    return (
      (function (e, r, o) {
        r in e
          ? a(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[r] = o);
      })(e, "symbol" != n(r) ? r + "" : r, o),
      o
    );
  },
  p = require("../index.js"),
  l = require("../../../utils/getPlatform.js"),
  c = require("../../../service/sdk/lib/enum.js"),
  g = require("../../../stores/protocol/enum.js"),
  m = l.getPlatform().isWeixin,
  u = new ((function (n) {
    i(p, n);
    var a = t(p);
    function p() {
      var e;
      return (
        r(this, p),
        (e = a.apply(this, arguments)),
        s(o(e), "stepConfig", {
          idcard: {
            source: [
              c.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
              c.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
            ],
            id_exp_date: !0,
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
          },
          profile: {
            autoFill: !0,
            list: {
              edu: !0,
              job: !0,
              company: !1,
              job_title_enum: !1,
              income: !1,
              year_income: !0,
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
              onlyShowMpPlugin: !1,
              useWrapStyle: !1,
              hideCheckBox: !1,
              defaultChecked: !0,
              signText: "我知悉并同意如下授权和签署",
              allProtocolName: "",
              placeholderName: "《人脸信息授权协议》",
              buttonType: "readConfirm",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK],
              },
            },
          },
          video: {
            sentence:
              "我已阅读并理解开户协议，知晓市场风险，自愿在华林证券开户",
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/aaab33b76e440ca84c3b89b81f2d372b.mp3",
              voiceText1:
                "请问您是否已阅读并理解开户协议，知晓市场风险，自愿在华林证券开户",
              voiceText2: "请您在“嘀”声后大声回答“是”或“不是”",
              duration1: 8,
              duration2: 5,
            },
            videoVoiceAbt: {
              voiceUrl:
                "https://st.gtimg.com/design/e26fdf042a6bb4ead37fa4e31f7d5c7c.MP3",
              voiceText1:
                "请问您是否已阅读并理解开户协议，知晓市场风险，自愿在华林证券开户",
              voiceText2: "请您在“嘀”声后大声回答“是”或“不是”",
              duration1: 5.5,
              duration2: 3,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          submit: {
            returnVisit:
              "回访确认：本人自愿开立证券账户，佣金费率万2.5，单笔最低5元(适用于A股、基金)，自行设置账户密码，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
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
              signText: "本人知悉并同意适当性匹配的评估结果",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName: "适当性匹配意见及投资者确认书",
              buttonType: "confirm",
            },
            transcribeConfig: {
              enable: !1,
              introduction: "为保障您的权益，请输入以下声明：",
              content: [
                "本人己认真阅读井完全理解以上《证券交易委托风险揭示书》、《客户须知》，愿意承担证券市场的各种风险。",
              ],
              protocols: [],
            },
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
        }),
        s(o(e), "mpInfo", {
          appId: "wx8c0059a9f61679d1",
          originId: "gh_cfedec6a90ca",
        }),
        s(o(e), "supportedBanks", [
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
        s(o(e), "applyRetainInfos", {
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
          cancelCallback: "retainDialogCancel",
        }),
        s(o(e), "progressBar", {
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
        s(o(e), "apply", { needSignProtocol: !0 }),
        e
      );
    }
    return e(p);
  })(p.BrokerApply))();
exports.apply = u;
