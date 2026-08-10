var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  r = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  s = function (e, t, o) {
    return (
      (function (e, t, o) {
        t in e
          ? n(e, t, {
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
  p = require("../index.js"),
  l = require("./base.js"),
  c = require("../../../utils/getPlatform.js"),
  g = require("../../../stores/protocol/enum.js"),
  m = c.getPlatform().isWeixin,
  d = new ((function (a) {
    i(p, a);
    var n = r(p);
    function p() {
      var e;
      return (
        t(this, p),
        (e = n.apply(this, arguments)),
        s(o(e), "captchaLen", 6),
        s(o(e), "stepConfig", {
          index: {
            bannerImgs: [
              {
                image:
                  "https://st.gtimg.com/image/mp-broker/oem/apply/banner_01_".concat(
                    l.base.code,
                    ".png"
                  ),
              },
              {
                image:
                  "https://st.gtimg.com/image/mp-broker/oem/apply/banner_02_".concat(
                    l.base.code,
                    ".png"
                  ),
              },
            ],
            iconList: [
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_card_".concat(
                  l.base.code,
                  ".png"
                ),
                text: "银行借记卡",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_id_".concat(
                  l.base.code,
                  ".png"
                ),
                text: "二代身份证",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_wifi_".concat(
                  l.base.code,
                  ".png"
                ),
                text: "网络畅通",
              },
            ],
          },
          progress: null,
          idcard: {
            id_exp_date: !0,
            id_addr: !1,
            id_addr_maxlength: 64,
            id_addr_minlength: 8,
            quickImport: { enable: !0, autoImport: !0 },
            needCompress: !0,
            targetSize: 1.5,
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
              tel: m && !0,
              ctrl: !0,
              benifit: !0,
              credit_record: !0,
              tax: !0,
            },
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !1,
            autoFillMailAddress: !1,
            protocol: {
              newMode: !0,
              hideCheckBox: !1,
              useWrapStyle: !0,
              signText:
                "本人确认上述信息的真实、准确和完整，且当这些信息发生变更时，将在30日内通知贵机构，否则本人承担由此造成的不利后果",
              allProtocolName: "",
            },
          },
          facecheck: {
            protocol: {
              newMode: !0,
              hideCheckBox: !1,
              defaultChecked: !1,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "",
              placeholderName: "《人脸识别身份认证规则》",
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
                "https://st.gtimg.com/design/fdc59e6ae2dffe87690d68a20743ee0a.mp3",
              voiceText1:
                "尊敬的客户，请问您是否已阅读并充分理解开户协议条款、知晓证券市场风险并自愿在中信建投证券开户？",
              voiceText2: "请回答“是”或“不是”",
              duration1: 9,
              duration2: 2,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          card: {
            isNewUnionpayAuth: !1,
            unionpayBankcardProtocol: {},
            isSupportCftCard: !0,
            bankPasswordSecurityTips:
              "为保障持卡人账户安全，银行要求验证银行密码才能建立证券账户与银行卡的三方存管关系。银行密码通过加密通道由券商直接发送至银行验证，其它三方无法获取或存储您的密码信息。",
          },
          risk: {
            ageType: "NORMAL",
            showPeriod: !0,
            lowestLevelUserCall: "最低类别的保守型投资者",
            additionalDesc: null,
            levelTip: null,
            clearResult: !0,
            notRetest: !0,
            lowestLevelTip: {
              message:
                "您本次风险测评结果为/*placeholder-levelText*/，A股股票等交易所场内品种的风险等级超出了您的风险承受能力等级。根据投资者适当性管理相关规定，我司暂无法为您开立证券账户。如有疑问，可联系您的开户营业部（023-65305648）或客服电话（400-888-8108）咨询办理。",
              confirmButtonText: "我知道了",
              cancelButtonText: "",
            },
          },
          submit: {
            returnVisit:
              "本人自愿开立证券账户及理财账户，自行设置账户密码，未将账户委托中信建投员工操作，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            queryCommissionSwitch: !1,
            commissionProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "股票佣金率：万2.3/笔，起点5元  ",
              allProtocolName: "",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_COMMISSION_CONFIRM],
              },
            },
            firstProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_FIRST],
              },
            },
            secondProtocolInfo: {
              newMode: !0,
              hideCheckBox: !0,
              signText:
                "本人已知悉并授权同意中信建投证券向北京数字认证股份有限公司以及申请建立三方存管业务的银行提供本人业务申请所涉及的个人信息，",
              allProtocolName: "",
              tilingConfig: {
                sceneType: [g.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_SECOND],
              },
            },
            transcribeConfig: {
              enable: !0,
              introduction:
                "签署开户协议前请您仔细阅读客户合同书，并抄写以下声明(来自客户合同书中第二章客户须知、第三章风险揭示)：",
              content: [
                "本人已认真阅读并完全理解《客户须知》、《风险揭示》中的各项内容，愿意承担证券市场的各种风险。",
              ],
              protocols: [
                { name: "《客户须知》", key: "zhongxinjiantou_khhts" },
                { name: "《风险揭示》", key: "zhongxinjiantou_khhts" },
              ],
            },
            headTips: [
              "沪市A股账户默认新开，深市A股账户默认优先使用您名下最新开立的账户进行加挂，如果没有，将为您新开立账户。",
            ],
            checkBornYearForIncentive: !0,
          },
          advisory: {
            tag: "免费试用30天",
            services: [
              {
                name: "盘中宝（附赠产品）",
                desc: "盘前、盘中推送高价值投资线索",
              },
              { name: "尾盘掘金", desc: "每日尾盘精选超短线机会" },
              {
                name: "北上资金策略",
                desc: "每周精选5只中线机会个股，布局中长期",
              },
              {
                name: "撑压信号",
                desc: "个股支撑位、压力位信号，把握买卖时机",
              },
            ],
            commissionRate: "0.8‰",
            openKey: "advisory_sign",
            disclaimer:
              "特别提示：投资建议仅供参考，不能确保盈利或不发生本金损失，请您合理控制仓位审慎决策，本公司仅在合同期内提供咨询服务。市场有风险，投资需谨慎。",
            tooltip: { show: !0, text: "全账户提佣0.8‰" },
            presignEligibility: { enabled: !0, minRiskLevel: 3 },
          },
        }),
        s(o(e), "mpInfo", {
          appId: "wx8182de72a1713fb5",
          originId: "gh_9f64942ee600",
        }),
        s(o(e), "protocol", {
          suitable: "证券账户开立业务匹配意见及投资者确认书",
          insuitable: "证券账户开立业务风险警示及投资者确认书",
        }),
        s(o(e), "supportedBanks", [
          "ICBC",
          "ABC",
          "BOC",
          "CCB",
          "COMM",
          "CMB",
          "PAB",
          "GDB",
          "SPDB",
          "CEB",
          "HXB",
          "BOJ",
          "BOG",
          "CIB",
          "CMBC",
          "NJCB",
          "BJBANK",
          "BOSH",
          "CITIC",
          "PSBC",
          "NBCB",
          "TJB",
        ]),
        s(o(e), "bankDisplayNameMap", { psbc: "邮储银行" }),
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
        s(o(e), "apply", { needSignProtocol: !1 }),
        e
      );
    }
    return e(p);
  })(p.BrokerApply))();
exports.apply = d;
