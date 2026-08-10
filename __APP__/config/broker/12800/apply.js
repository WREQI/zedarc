var e = require("../../../@babel/runtime/helpers/createClass"),
  o = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var p = Object.defineProperty,
  s = function (e, o, t) {
    return (
      (function (e, o, t) {
        o in e
          ? p(e, o, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[o] = t);
      })(e, "symbol" != n(o) ? o + "" : o, t),
      t
    );
  },
  a = require("../index.js"),
  c = require("./base.js"),
  l = require("../../../utils/getPlatform.js"),
  m = require("../../../stores/protocol/enum.js"),
  g = l.getPlatform(),
  b = g.isWeixin,
  d = g.isOEM,
  u = new ((function (n) {
    i(a, n);
    var p = r(a);
    function a() {
      var e;
      return (
        o(this, a),
        (e = p.apply(this, arguments)),
        s(t(e), "stepConfig", {
          index: {
            bannerImgs: [
              {
                image:
                  "https://st.gtimg.com/image/mp-broker/oem/apply/banner_01_".concat(
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
            btnText: "马上在线开户",
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
          mobile: {
            protocol: {
              newMode: !0,
              hideCheckBox: !1,
              signText: "本人已详细阅读并同意签署",
              tilingConfig: {
                sceneType: [m.ENUM_PROTOCOL_SCENE.APPLY_BINDMOBILE],
              },
              placeholderName: "《隐私政策》",
            },
          },
          idcard: {
            id_exp_date: !0,
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
          },
          progress: null,
          profile: {
            list: {
              edu: !0,
              job: !0,
              company: !0,
              job_title_enum: !0,
              income: !1,
              year_income: !0,
              mail_address: !0,
              zip_code: !1,
              tel: b && !d,
              ctrl: !0,
              benifit: !0,
              credit_record: !0,
              tax: !0,
            },
            optional: ["job_title_enum", "company"],
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !0,
            autoFillMailAddress: !0,
          },
          video: {
            sentence: !1,
            videoVoice: {
              voiceUrl:
                "https://st.gtimg.com/design/3e4009269427987055fdf02ac3244d1d.mp3",
              voiceText1:
                "请问您是否已阅读并理解开户协议，知晓市场风险，自愿在中金财富证券开户",
              voiceText2: "请您在“嘀”声后大声回答“是”或“不是”",
              duration1: 8,
              duration2: 4,
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
            ageType: "NOMINAL",
            showPeriod: !0,
            lowestLevelUserCall: "最低类别的保守型投资者",
            additionalDesc: null,
            levelTip: null,
            lowestLevelTip: {
              message:
                "基于您当前的风险测评结果：/*placeholder-levelText*/，您本次无法开立证券账户进行股票交易，本公司提示您根据自身实际情况审慎选择。详询中金财富客服：95532",
              confirmButtonText: "返回上一步",
              cancelButtonText: "",
            },
          },
          submit: {
            returnVisit:
              "回访确认：本人自愿开立证券账户，佣金费率万$commission，单笔最低5元(适用于A股、基金)，自行设置账户密码，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            queryCommissionSwitch: !0,
            fallbackCommission: "2.5",
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
                sceneType: [m.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION],
              },
              placeholderName: "适当性匹配意见及投资者确认书",
              buttonType: "confirm",
            },
            transcribeConfig: {
              enable: !0,
              introduction: "为了您的权益，请输入以下内容：",
              content: [
                "本人已认真详细阅读并充分理解了所签署的《客户须知》《证券交易委托风险揭示书》等文件的内容，愿意承担证券市场的各种风险。",
              ],
            },
            checkBornYearForIncentive: !0,
          },
          advisory: {
            needConfirmTemplate: !0,
            title: "证券投顾服务",
            product: {
              name: "AI波段宝",
              desc: "捕捉股价中期趋势，助力波段投资",
              moreText: "去了解",
            },
            fee: {
              prefix: "投顾费：全账户提佣",
              rate: "0.2‰",
              suffix: " 首月免投顾费(仅限新客)",
              details: [
                "全账户的佣金率提高0.2‰（含普通、信用账户）",
                "签约后佣金率=基础佣金率+0.2‰，基础佣金率计算以《佣金费率告知及确认书》为准",
              ],
              methodTitle: "收费方式和版本说明：",
              methodDesc:
                "AI波段宝的收费方式分为佣金收费、固定收费，本流程均仅支持佣金收费方式签约。如需采用固定收费方式签约，您可在开户后在微证券进行签约。",
              methodMoreText: "了解更多",
            },
            notices: [
              "友情提示：本开户流程中最多只能签约一个投顾产品，您可根据自身情况和需求选择。",
              "风险揭示：“AI波段宝”本质为证券投资顾问业务，投资建议仅供参考，投资者需自主作出投资决策并独立承担投资风险。“AI波段宝”不能确保投资者获得盈利或本金不受损失。“AI波段宝”为：R3-中风险产品。投资者在接受服务前，请务必仔细阅读相关产品协议、风险揭示书等，并充分理解产品服务内容/功能、相关风险及固有缺陷等，掌握使用方法，请务必关注并了解产品收费规则。请投资者根据自身风险承受能力和投资目标审慎进行选择。市场有风险，投资需谨慎！",
              "点击“去了解>”了解相应产品，签约前请务必充分了解产品、仔细阅读并充分理解相关产品协议及风险揭示书等",
            ],
            introOpenKey: "advisory_intro",
            feeMethodPopup: {
              title: "AI波段宝收费方式说明",
              contents: [
                "由于当前您的账户无资产，只能选择佣金方式签约，您也可以在开户后选择固定收费签约。",
                "费用为:208元/月、508元/季、808元/半年、1408元/年。",
                "签约路径：微证券 → 个股页 → 券商专区 → AI波段宝固定收费方式签约。",
              ],
              confirmText: "我知道了",
            },
            openKey: "advisory_sign",
            presignEligibility: {
              enabled: !0,
              minRiskLevel: 3,
              checkMarkets: !0,
              checkRiskAnswers: !0,
            },
          },
        }),
        s(t(e), "mpInfo", {
          appId: "wxe1e9715c9b3f7904",
          originId: "gh_f5ac4f720fa5",
        }),
        s(t(e), "supportedBanks", [
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
          "BOJ",
        ]),
        s(t(e), "specialProtocolBanks", [
          {
            code: "BOSH",
            keys: [
              "/broker/protocol/zjzq/zjzq_bosh_01.jpg",
              "/broker/protocol/zjzq/zjzq_bosh_02.jpg",
            ],
            type: "img",
          },
        ]),
        s(t(e), "applyRetainInfos", {
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
        s(t(e), "progressBar", {
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
        s(t(e), "apply", { needSignProtocol: !1 }),
        e
      );
    }
    return e(a);
  })(a.BrokerApply))();
exports.apply = u;
