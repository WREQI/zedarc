var e = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var a = Object.defineProperty,
  o = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != s(t) ? t + "" : t, i),
      i
    );
  },
  r = require("../../utils/getPlatform.js"),
  n = require("./applyStep.js"),
  l = require("../../service/sdk/lib/enum.js"),
  c = require("../enum/trade-history.js"),
  p = require("../enum.js"),
  d = r.getPlatform(),
  h = d.isMiniProgram,
  u = d.isWeixin,
  m = d.isOEM,
  g = {
    progressActXinke: {
      id: "progress_act_xinke",
      date: !1,
      default: { show: "0" },
    },
    transferResult: {
      id: "ui_layer_1718245604881",
      date: !h && "2024-07-19 23:59:59",
      default: { show: "0" },
    },
    flexibleApplyTips: {
      id: "ui_layer_1749866536641",
      date: !!h && "2026-02-27 23:59:59",
      platforms: ["mp-plugin"],
      default: { allpass: 0 },
    },
  };
(exports.BrokerAbt = g),
  (exports.BrokerApply = (function () {
    return t(function e() {
      i(this, e),
        o(this, "captchaLen", 6),
        o(this, "queue", n.queue),
        o(this, "stepConfig", {
          index: {
            bannerImgs: [],
            btnText: "免费在线开户",
            iconList: [
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_card.png",
                text: "银行借记卡",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_id.png",
                text: "二代身份证",
              },
              {
                icon: "https://st.gtimg.com/image/mp-broker/oem/apply/apply_wifi.png",
                text: "网络畅通",
              },
            ],
            disableBind: !1,
          },
          progress: {
            bottomText: "",
            hideThirdBankActSubscribe: !1,
            hideBulletin: !1,
          },
          mobile: {
            protocol: {
              hideCheckBox: !1,
              signText: "本人已详细阅读并同意签署",
              allProtocolName: "",
              tilingList: [],
              mergingList: [],
              modalProtocol: {
                name: "",
                content: "",
                confirmText: "",
                messageType: "",
                cancelText: "",
              },
            },
            bottomText: "",
            certificate: [],
          },
          card: {
            isNewUnionpayAuth: !1,
            unionpayBankcardProtocol: {},
            bottomText: "",
            isSupportCftCard: !1,
          },
          idcard: {
            source: [
              l.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
              l.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
            ],
            id_exp_date: !0,
            id_addr: !1,
            nationality: !1,
            sex: !1,
            quickImport: { enable: !1, autoImport: !1 },
          },
          profile: {
            list: {
              edu: !0,
              job: !0,
              company: !0,
              business: !1,
              job_title_enum: !0,
              income: !0,
              year_income: !1,
              mail_address: !0,
              house_address: !1,
              zip_code: !1,
              org: !1,
              tel: u && !h && !m,
              ctrl: !0,
              benifit: !0,
              credit_record: !0,
              tax: !0,
            },
            ignoreSplitFailure: !0,
            autoSetMailAddressSame: !0,
            useIDAddressSecondConfirm: !1,
            protocol: {
              hideCheckBox: !1,
              signText: "",
              protocolName: "",
              list: [],
            },
          },
          facecheck: { protocol: {} },
          video: {
            sentence:
              "我已阅读并理解开户协议，知晓市场风险，自愿在招商证券开户",
            videoVoice: {
              voiceUrl: "",
              voiceText1: "",
              voiceText2: "",
              duration1: 8,
              duration2: 4,
            },
            isUseH5Video: !0,
            autoUpload: !0,
          },
          password: null,
          risk: {
            ageType: "NORMAL",
            showPeriod: !0,
            showProduct: !1,
            showScore: !1,
            lowestLevelUserCall: "最低类别的保守型投资者",
            additionalDesc: null,
            customDesc: null,
            levelTip: null,
            clearResult: !1,
            showSuitableProtocol: !1,
            protocols: [],
          },
          submit: {
            returnVisit:
              "回访确认：本人自愿开立证券账户，佣金费率万2.5，单笔最低5元(适用于A股、基金)，自行设置账户密码，已阅读并理解风险揭示内容，知晓证券交易规则及风险。",
            insuitableUserShowSuitable: !1,
            waitTime: 0,
            signText: "本人已详细阅读并同意签署",
            protocolName: "全部文件",
            queryCommissionSwitch: !1,
            showTaAccount: !1,
            cancelTipsHA: "",
            cancelTipsSH: "",
            commissionProtocolInfo: {
              hideCheckBox: !0,
              signText: "",
              allProtocolName: "",
              list: [],
            },
            firstProtocolInfo: {
              hideCheckBox: !0,
              signText: "",
              allProtocolName: "",
              list: [],
              computedList: null,
            },
            secondProtocolInfo: {
              hideCheckBox: !0,
              signText: "",
              allProtocolName: "",
              list: [],
            },
            suitableProtocolIds: [],
            extraTips: [],
          },
          advisory: {
            tag: "",
            services: [],
            commissionRate: "",
            openKey: "",
            disclaimer: "",
            tooltip: { show: !1, text: "" },
          },
          questionnaire: { questtions: [] },
        }),
        o(this, "mpInfo", {
          appId: "wx4ffb369b6881ee5e",
          originId: "gh_debd46be9dc3",
        }),
        o(this, "protocol", {
          suitable: "适当性匹配意见及投资者确认书",
          insuitable: "产品或服务风险警示及投资者确认书",
        }),
        o(this, "protocols", []),
        o(this, "supportedBanks", [
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
        o(this, "bankDisplayNameMap"),
        o(this, "specialProtocolBanks", []),
        o(this, "applyRetainInfos", {
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
        o(this, "progressBar"),
        o(this, "requireApplyChannel", !1),
        o(this, "suitableProtocolShowRiskResult", !1),
        o(this, "threePartyDepository", { needSuffix: !1 }),
        o(this, "apply", { needSignProtocol: !1 });
    });
  })()),
  (exports.BrokerBind = (function () {
    return t(function e() {
      i(this, e),
        o(this, "faceCheckReplaceMobile", !1),
        o(this, "accountCalled", "资金账号"),
        o(this, "marginAccountCalled", "融资融券账号"),
        o(this, "findAccountCalled", "账号"),
        o(this, "accountInput", {}),
        o(this, "findAccount", !0),
        o(this, "forgetPwd", !1),
        o(this, "brokerCaptcha", null),
        o(this, "captchaLen", 6),
        o(this, "protocol"),
        o(this, "faceCheckProtocol", []),
        o(this, "headerTip"),
        o(this, "findAccountPullCftInfo");
    });
  })()),
  (exports.BrokerCommon = (function () {
    return t(function e() {
      i(this, e),
        o(this, "PAGE", {
          ASSET: 1,
          TRADESTOCK: 2,
          NEWSTOCK: 3,
          TRADEHISTORY: 4,
          TRADEDETAIL: 5,
          TRADEDEBT: 6,
          TRADEALLOT: 7,
          TRANSFERIN: 8,
          TRANSFEROUT: 9,
          DEBT: 10,
          TRANSFERHISTORY: 11,
          TRANSFERDETAIL: 12,
          DUOTIANQI: 13,
        }),
        o(this, "RISK", {
          1: {
            value: 1,
            text: "C1保守型",
            img: "risk/conservative-white@3x.png",
          },
          2: { value: 2, text: "C2稳健型", img: "risk/balanced-white@3x.png" },
          3: { value: 3, text: "C3平衡型", img: "risk/balanced-white@3x.png" },
          4: { value: 4, text: "C4增长型", img: "risk/positive-white@3x.png" },
          5: { value: 5, text: "C5进取型", img: "risk/radical-white@3x.png" },
          6: {
            value: 6,
            text: "特殊保护型",
            img: "risk/conservative-white@3x.png",
          },
          7: {
            value: 7,
            text: "不完整",
            img: "risk/conservative-white@3x.png",
          },
          8: {
            value: 8,
            text: "未测评",
            img: "risk/conservative-white@3x.png",
          },
          9: {
            value: 9,
            text: "已过期",
            img: "risk/conservative-white@3x.png",
          },
          10: {
            value: 10,
            text: "C1保守型-最低等级",
            img: "risk/conservative-white@3x.png",
          },
          INCOMPLETE: {
            value: 7,
            text: "不完整",
            img: "risk/conservative-white@3x.png",
          },
          NOTEVLUATED: {
            value: 8,
            text: "未测评",
            img: "risk/conservative-white@3x.png",
          },
          EXPIRED: {
            value: 9,
            text: "已过期",
            img: "risk/conservative-white@3x.png",
          },
          BS_LOWEST: {
            value: 10,
            text: "C1保守型-最低等级",
            img: "risk/conservative-white@3x.png",
          },
        }),
        o(this, "INVEST_TERM", {
          USER: {
            0: "短期（0-1年）",
            1: "中期（1-5年）",
            2: "长期（5年以上）",
            97: "短期",
            98: "中期",
            99: "长期",
          },
          PRODUCT: {
            0: "0-1年",
            1: "1年",
            2: "2年",
            3: "3年",
            4: "4年",
            5: "5年",
            6: "6年",
            7: "7年",
            8: "未测评",
            9: "已过期",
            97: "短期",
            98: "中期",
            99: "长期",
          },
        }),
        o(this, "RISK_REMIND", {
          remind: !1,
          0: { enable: !1, strict: !1, text: "未过期" },
          1: { enable: !1, strict: !1, text: "已过期" },
          2: { enable: !1, strict: !1, text: "不完整" },
          3: { enable: !1, strict: !1, text: "未测评" },
          4: { enable: !1, strict: !1, text: "即将到期" },
        }),
        o(this, "foreverExp", "30000101"),
        o(this, "enableComplexPassword", !1),
        o(this, "disableAddressSuggestion", !1),
        o(this, "enableHandleSensitiveInformation", !0),
        o(this, "hideNav"),
        o(this, "enableBiometrics", !1),
        o(this, "biometricsProtocol", "");
    });
  })()),
  (exports.BrokerDictionary = (function () {
    return t(function e() {
      i(this, e),
        o(this, "Enties", {
          account: {
            icon: "all-account",
            name: "账户信息",
            routeName: "AccountPersonal",
            hidden: !1,
          },
          analysis: {
            icon: "all-analysis",
            name: "盈亏分析",
            routeName: "AnalysisIndex",
          },
          setting: {
            icon: "all-setting",
            name: "交易通知",
            routeName: "AccountSetting",
          },
          safesetting: {
            icon: "all-safesetting",
            name: "交易设置",
            routeName: "AccountSafeSetting",
          },
          quickTrade: {
            icon: "all-quick-trade",
            name: "快速买卖",
            routeName: "TradeStock",
          },
          fund: {
            icon: "all-fund",
            name: "出金入金",
            routeName: "TransferFund",
          },
          ipo: { icon: "all-ipo", name: "一键打新", routeName: "NewStock" },
          jxb: {
            icon: "all-jxb",
            name: "余额增值",
            routeName: "ProductJiaXinBao",
          },
          debt: { icon: "all-debt", name: "通用回购", routeName: "Debt" },
          transactions: {
            icon: "all-transactions",
            name: "交易记录",
            routeName: "TradeHistory",
          },
          duotianqi: {
            icon: "all-duotianqi",
            name: "券商理财",
            routeName: "ProductDuoTianQi",
          },
          transfers: {
            icon: "all-transfers",
            name: "资金明细",
            routeName: "TransferHistory",
          },
          changepwd: {
            icon: "all-changepwd",
            name: "修改密码",
            routeName: "BizPwdChange",
          },
          resetpwd: {
            icon: "all-resetpwd",
            name: "重置密码",
            routeName: "BizPwdReset",
          },
          gem: { icon: "all-gem", name: "创业板权限", routeName: "BizGem" },
          st: { icon: "all-st", name: "沪深ST权限", routeName: "BizSt" },
          all: { icon: "all-all", name: "全部", routeName: "AssetAll" },
          kechuang: {
            icon: "all-kechuang",
            name: "科创板权限",
            routeName: "BizKeChuangOpen",
          },
          kechuanggrowth: {
            icon: "all-kechuanggrowth",
            name: "科创成长层",
            routeName: "BizKeChuangGrowthOpen",
          },
          kzz: { icon: "all-kzz", name: "可转债权限", routeName: "BizKzz" },
          debtPermission: {
            icon: "all-debt-permission",
            name: "逆回购权限",
            routeName: "BizDebtIndex",
          },
          changebankcard: {
            icon: "all-changebankcard",
            name: "管理银行卡",
            routeName: "AccountCard",
          },
          shareholder: {
            icon: "all-bind-shareholder",
            name: "添加股东卡",
            routeName: "BizShareHolderBind",
          },
          bstmark: {
            icon: "all-bst",
            name: "K线买卖点",
            routeName: "BstMark",
            hidden: !0,
          },
          autoAddChoose: {
            icon: "all-add",
            name: "委托加自选",
            routeName: "AutoAddChoose",
          },
          updateid: {
            icon: "all-updateid",
            name: "更新身份证",
            routeName: "BizIdUpdate",
          },
          changephone: {
            icon: "all-changephone",
            name: "更换手机号",
            routeName: "BizPhoneUpdate",
          },
          password: {
            icon: "all-password",
            name: "管理密码",
            routeName: "BizPwdIndex",
          },
          risktest: {
            icon: "all-risktest",
            name: "风险测评",
            routeName: "BizRiskUpdateResult",
          },
          fundrecord: {
            icon: "all-fund-record",
            name: "出入金记录",
            routeName: "",
            hidden: !0,
          },
          permission: {
            icon: "all-permission",
            name: "查询交易权限",
            routeName: "BizPermission",
          },
          shareholderRights: {
            icon: "all-shareholder-rights",
            name: "股东权益",
            routeName: "HqShareholderRights",
          },
        }),
        o(this, "APPLY_STEP", {
          ApplyIndex: {
            stat: "trade.apply.homepage",
            title: "开通股票账户",
            config: "index",
          },
          ApplyProgress: {
            stat: "trade.apply.progress",
            title: "提交开户申请",
            config: "progress",
          },
          ApplyRecover: {
            stat: "trade.apply.recover",
            title: "提交开户申请",
            config: "progress",
          },
          ApplyBindMobile: {
            stat: "trade.apply.phone",
            title: "绑定手机号",
            config: "mobile",
            step: "1",
          },
          ApplyBindCard: {
            stat: "trade.apply.bankcard",
            title: "添加银行卡",
            config: "card",
            step: "5",
          },
          ApplyBankAuth: { title: "身份确认", config: "card" },
          ApplyIdCard: {
            stat: "trade.apply.idcard",
            title: "证件上传",
            config: "idcard",
            step: "2,3",
          },
          ApplyProfile: {
            stat: "trade.apply.personaldate",
            title: "信息填写",
            config: "profile",
            step: "9",
          },
          ApplyFacecheck: {
            stat: "trade.apply.facelive",
            title: "身份验证",
            config: "facecheck",
            step: "10",
          },
          ApplyVideo: {
            stat: "trade.apply.video",
            title: "身份验证",
            config: "video",
            step: "4",
          },
          ApplySetPwd: {
            stat: "trade.apply.setpasswd",
            title: "设置密码",
            config: "password",
            step: "6",
          },
          ApplyRiskTest: {
            stat: "trade.apply.riskhomepage",
            title: "风险评测",
            config: "risk",
            step: "7",
          },
          ApplySubmit: {
            stat: "trade.apply.apply",
            title: "确认提交",
            config: "submit",
            step: "8",
          },
          ApplyPreReview: {
            stat: "trade.apply.prereview",
            title: "资料预审",
            config: "prereview",
          },
          ApplyAdvisory: {
            stat: "trade.apply.advisory",
            title: "选择投顾服务",
            config: "advisory",
          },
          ApplyQuestionnaire: {
            stat: "trade.apply.questionnaire",
            title: "问卷回访",
            config: "questionnaire",
            step: "11",
          },
        });
    });
  })()),
  (exports.BrokerHall = (function () {
    return t(function e() {
      i(this, e),
        o(this, "captchaLen", 6),
        o(this, "maskAccountInfo"),
        o(this, "gem"),
        o(this, "st"),
        o(this, "kzz"),
        o(this, "kcOpen"),
        o(this, "account"),
        o(this, "bankcard"),
        o(this, "third"),
        o(this, "risk", !1),
        o(this, "resetpwd"),
        o(this, "supportedBanks", [
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
        o(this, "needCompress", !1),
        o(this, "canShare", !m && !h),
        o(this, "idcard"),
        o(this, "password"),
        o(this, "permissionUnlock");
    });
  })()),
  (exports.BrokerMargin = (function () {
    return t(function e() {
      i(this, e),
        o(this, "protocols", {}),
        o(this, "indicators", []),
        o(this, "ratios", []),
        o(this, "maxRatioValue", 1e7),
        o(this, "lessonIds", []);
    });
  })()),
  (exports.BrokerTrade = (function () {
    return t(function t() {
      var s, a;
      i(this, t),
        o(this, "bankcardchange"),
        o(this, "duotianqi"),
        o(this, "notification"),
        o(this, "checkShareHolderCards"),
        o(this, "checkBJAuthTips", {
          noAccountTips:
            "投资者交易北交所证券前，需通过深圳A股股东卡开通北交所交易账户权限。您未绑定京A股东卡，无法交易北交所证券，请联系券商绑定开通后继续交易",
          noBJAuthTips:
            "投资者交易北交所证券前，需通过深圳A股股东卡开通北交所交易账户权限。您未开通北交所交易权限，无法交易北交所证券，请开通后继续交易",
          BJAuthOpening:
            "北交所交易权限开通后，需要下一个交易日生效，请在下个交易日交易。",
        }),
        o(this, "checkNQAuthTips", {
          noAccountTips:
            "投资者交易退市板证券前，需通过深圳A股股东卡开通股转账户。您未开通股转账户，无法交易退市板证券，请开通后继续交易",
          noGZAuthTips:
            "如需交易退市板证券，需满足相应开通条件后到线下营业部开通交易权限，请联系券商咨询该业务开通条件和流程",
          GZAuthOpening:
            "退市板交易权限开通后，需要下一个交易日生效，请在下个交易日交易。",
        }),
        o(this, "bjTradeFee", {
          commission: 375e-6,
          lowestCommission: 5,
          transferFee: 1e-5,
        }),
        o(this, "ggtTradeFee", {
          commission: 0.003,
          lowestCommission: 5,
          transferFee: 1e-5,
          stampDuty: 0.001,
          tradingFee: 27e-6,
          transactionFee: 565e-7,
          shareSettlementFee: 42e-6,
          shareSettlementMaxFee: 100,
          shareSettlementMinFee: 2,
          financialSecretary: 15e-7,
        }),
        o(this, "nqTradeFee", {
          commission: 8e-4,
          lowestCommission: 5,
          transferFee: 0,
        }),
        o(this, "haTradeFee", {
          commission: 25e-5,
          lowestCommission: 5,
          transferFee: 2e-5,
        }),
        o(this, "saTradeFee", {
          commission: 25e-5,
          lowestCommission: 5,
          transferFee: 0,
        }),
        o(this, "debt"),
        o(this, "history", {
          selectorOptions:
            ((s = {}),
            e(s, c.ETYPE.TRADE, [
              c.TradeType.all,
              c.TradeType.buy,
              c.TradeType.sell,
              c.TradeType.finance,
              c.TradeType.playNew,
            ]),
            e(s, c.ETYPE.BUSINESS, [
              c.BusinessType.all,
              c.BusinessType.stockFund,
              c.BusinessType.debt,
            ]),
            s),
          newSelectorOptions:
            ((a = {}),
            e(a, c.ETYPE.TRADE, [
              c.TradeType.all,
              c.TradeType.buy,
              c.TradeType.sell,
              c.TradeType.finance,
              c.TradeType.playNew,
            ]),
            e(a, c.ETYPE.BUSINESS, [
              c.BusinessType.all,
              c.BusinessType.stock,
              c.BusinessType.fund,
              c.BusinessType.bond,
              c.BusinessType.debt,
            ]),
            a),
        }),
        o(this, "charge", {
          commission: "成交金额*万分之2.5（标准费率）",
          transferFee:
            "成交金额*10万分之1，买卖双向收取（沪市股票过户费单独收取，深市股票过户费已在佣金中包含）",
        }),
        o(this, "investCond", { errorTips: "", supportType: [] }),
        o(this, "condUnsupportType", []),
        o(this, "signProtocolNeedRead", !1),
        o(this, "condProtocolUseImage", !1),
        o(this, "openingSellCondRiskTips", ""),
        o(this, "condProtocolFromBroker", !1),
        o(this, "condProtocolNeedCA", !1),
        o(this, "condRiskTips", []),
        o(this, "debtAutoOrderNeedSetTime", !1),
        o(this, "hideDefaultRiskTips", !1),
        o(this, "enableCondSettingRiskTips", !1),
        o(
          this,
          "chargeTradeFeeTips",
          "注：上海、深圳证券交易所交易佣金含交易经手费、证券业务监管费及证券结算风险基金。更多可能涉及的收费项目请到“中国证券登记结算有限责任公司官方网站-服务支持-收费标准”(|placeholder-link|)进行查看。该费率标准为新开户客户佣金费率标准测算演示，如有疑问可致电|placeholder-brokerTel|详询。"
        ),
        o(this, "fundCharge", {
          bondEtf: [
            { text: "成交金额*万分之2.5（标准费率），" },
            { text: "单笔最低收费5元，", class: "highlight" },
            { text: "买卖双向收取" },
          ],
          currencyEtf: [
            { text: "成交金额*万分之2.5（标准费率），" },
            { text: "单笔最低收费5元，", class: "highlight" },
            { text: "买卖双向收取" },
          ],
        }),
        o(this, "kzzCharge", {
          sz: [{ text: "成交金额*千分之1（标准费率），买卖双向收取" }],
        }),
        o(this, "canContact"),
        o(this, "tradeStock"),
        o(this, "passwordLockMsg", []),
        o(
          this,
          "passwordLockTips",
          "连续错误，账户已被锁定，下一交易日会自动解锁。"
        ),
        o(this, "fullRefreshTips", ""),
        o(this, "halfRefreshTips", ""),
        o(this, "fundRefreshTips", ""),
        o(this, "isHalfRefreshIcon", !1),
        o(this, "canSkipFundCheck", !0),
        o(this, "canTradeMarket", [p.MARKET.SA, p.MARKET.HA]),
        o(this, "bst"),
        o(this, "isDrawerToHalfscreen", !0),
        o(this, "showFundInfoMoreDesc", !1),
        o(this, "balValCalc"),
        o(this, "newMarketFullRelease", { ggt: !1, bj: !1, nq: !1 }),
        o(this, "nqOpenConfig", { authOpenOnline: !1 }),
        o(this, "userinfoBrokerCgi", !1),
        o(this, "chartTool"),
        o(this, "hkNewTickSize");
    });
  })()),
  (exports.BrokerTransfer = (function () {
    return t(function e() {
      i(this, e),
        o(this, "detailTimeSupportSecond"),
        o(this, "transferTime", { startTime: [9, 0, 0], endTime: [16, 0, 0] }),
        o(this, "bindBankcard", { online: !1, noCardTips: "" }),
        o(this, "noSubmit", !1),
        o(this, "bankTime", {}),
        o(this, "activiateGuide"),
        o(this, "transferClassify", [
          { text: "全部", value: "0" },
          { text: "转入", value: "1" },
          { text: "转出", value: "2" },
          { text: "买入", value: "3" },
          { text: "卖出", value: "4" },
          { text: "分红派息", value: "5" },
          { text: "通用回购", value: "6" },
        ]),
        o(this, "fundsRecordsStatus", [
          { text: "全部", value: "0" },
          { text: "成功", value: "3" },
          { text: "失败", value: "4" },
        ]),
        o(this, "transferNewVersionDate", ""),
        o(this, "hideBulletin", !1);
    });
  })()),
  (exports.EProgressTemp = { XINKE: "xinke" });
