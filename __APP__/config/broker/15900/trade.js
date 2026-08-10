var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  o = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != a(t) ? t + "" : t, r),
      r
    );
  },
  c = require("../index.js"),
  u = require("../../enum.js"),
  l = require("../../../utils/getPlatform.js").getPlatform().isMpPlugin,
  d = [
    "quickTrade",
    "ipo",
    "analysis",
    "shadowAccount",
    "debt",
    "fund",
    "transactions",
    "all",
  ];
l &&
  (d = [
    "quickTrade",
    "ipo",
    "analysis",
    "debt",
    "fund",
    "transactions",
    "transfers",
    "all",
  ]);
var p = new ((function (a) {
  n(c, a);
  var s = i(c);
  function c() {
    var e;
    return (
      t(this, c),
      (e = s.apply(this, arguments)),
      o(r(e), "index", {
        entry: d,
        balanceEntry: [
          "quickTrade",
          "ipo",
          "analysis",
          "duotianqi",
          "fund",
          "debt",
          "transactions",
          "all",
        ],
        duotianqiIsUseComplianceStyle: !0,
        analysisRelease: !0,
        isLiteAssetV2: !0,
        liteAssetV2GrayRatio: 100,
        showLiteAssetTriangle: !0,
      }),
      o(r(e), "all", {
        entry: [
          {
            name: "account",
            title: "账户管理",
            entry: [
              "account",
              "charge",
              "updateid",
              "changephone",
              "shareholder",
              "changebankcard",
              "password",
              "risktest",
              "permission",
            ],
          },
          {
            name: "fund",
            title: "资金管理",
            entry: ["transfers", "fundrecord", "fund"],
          },
          {
            name: "trade",
            title: "交易服务",
            entry: [
              "analysis",
              "transactions",
              "condition",
              "bstmark",
              "ipo",
              "quickTrade",
              "setting",
              "safesetting",
            ],
          },
          {
            name: "wealth",
            title: "投资理财",
            entry: ["debt", "shadowAccount", "aiSelect"],
          },
          {
            name: "authority",
            title: "权限开通",
            entry: ["gem", "kechuang", "kechuanggrowth", "kzz", "st"],
          },
          {
            name: "other",
            title: "其他",
            entry: ["aboutCompany", "aboutProtocol"],
          },
        ],
      }),
      o(r(e), "duotianqi", {
        actEntryName: [
          {
            activityType: "1",
            activityId: "activity_recall",
            entryName: "老友有礼",
          },
        ],
        buyLimitTips: function (e) {
          var t = e.maxBuyMoney,
            r = "activity_recall" === e.activityId ? "老友有礼" : "新客理财";
          return [
            "".concat(r, "权益仅可购买一次。"),
            "单次购买成功后，若未购满"
              .concat(t, "元，剩余")
              .concat(r, "额度也将不再可用。"),
          ];
        },
        index: {
          productName: "国金聚多利",
          featureLabel: ["约定收益", "资金安全", "可提前终止"],
          productDesc: "每个交易日9:15-15:30开售",
        },
        projectInfo: {
          rules: [
            {
              name: "买入",
              desc: "交易日9:15-15:30可购买，购买金额为1000元的整数倍，用户仅限购买一次。",
            },
            { name: "付息规则", desc: "产品到期一次性还本付息。" },
            {
              name: "提前购回",
              desc: "产品购买日T日起至到期日T-1日的交易时间(9:15-14:30)内可发起提前购回，提前购回申请100元起，100元整数倍递增。",
            },
            {
              name: "产品到期",
              desc: "到期日当日本金及收益可用，T+1日资金可取。",
            },
          ],
          features: function () {
            return [
              {
                title: "约定收益，本金保障",
                desc: "收益率事先约定，一旦买入则约定期限内不再变化。本金由国金证券提供足额质押物担保，由中登公司保管，保障资金安全。",
              },
              {
                title: "兼具固定收益和灵活性",
                desc: "收益在每次到期后的下一个交易日自动到账。如急需资金可以提前购回，资金实时可用，下一交易日可取，灵活性高。未到期产品提前购回按照提前购回年化收益率计算。",
              },
              { title: "费用全免", desc: "国金证券不收取任何费用。" },
            ];
          },
          qa: function (e) {
            return [
              {
                q: "Q.聚多利与理财产品有何区别?",
                a: "理财产品通常指银行或证券公司客户将资金集中委托，由产品管理人代其进行投资管理。虽有业绩比较基准/业绩报酬计提基准，但实际收益水平可能会受到投资运作情况的变化产品一定波动，而聚多利产品为质押式报价回购业务，即由证券公司进行报价，因此产品收益比较明确；同时国金证券提供全额质押物作为质押担保，为客户资金提供保障。",
              },
              {
                q: "Q. 购买权限是怎么样的?",
                a: "在国金证券已开立深圳证券交易所证券账户或基金账户的客户，符合资格的投资者需申请开通“聚多利”交易权限，并签署相关协议。开通交易权限后当日即可购买聚多利产品。",
              },
              {
                q: "Q.交易时间是怎么样的？",
                a: "买入时间：交易日9:15-15:30<br/>提前购回时间：交易日9:15-14:30",
              },
              {
                q: "Q.交易金额有何要求？",
                a: "最低购买金额为"
                  .concat(e, "元，超出部分以")
                  .concat(
                    e,
                    "的整数倍增加，提前购回最低申报金额为100元，超出部分以100元的整数倍递增。"
                  ),
              },
              {
                q: "Q.提前购回如何计算收益？",
                a: "提前购回收益=提前购回金额*提前购回年收益率*实际购回天数/365。实际购回天数=提前购回日的下一交易日(不含)-买入日的下一交易日，例如2022年6月21日买入报价回购产品，2022年6月28日提前购回，则实际购回天数为6月22日至6月29日(不含)的天数，即7个自然日。<br/>提前购回年收益率仅适用于计算当前投资周期提前购回收益，不影响已入账收益。对于部分提前购回，剩余本金按照购买日约定年化收益率计算收益。",
              },
            ];
          },
          risk: "请您在使用本栏目功能前务必仔细阅读并透彻理解本协议及风险揭示书。如您不认可，请退出栏目并关闭程序。如您继续使用，您的使用行为将被视为对本协议风险揭示书内容的完全认同并同意承担由此导致的全部风险\n1、本栏目提供的服务内容，均基于市场公开信息或客观数据分析所得，信息或数据来源于交易所等官方发布机构以及部分外购数据源，国金证券不保证信息或数据的淮确性、及时性、真实性和完整性，信息或数据不构成任何个人、机构的观点或判断，不构成任何投资建议或意见，仅供您合理使用；\n2、信息或数据的计算和分析可能会由于软件、硬件、算法等因素导致延迟、错误、遗漏等现象，分析结果仅供参考，不构成任何个人、机构的观点或判断，不构成任何投资建议或意见，国金证券不保证分析结果的准确性、及时性、真实性和完整性，由此造成的风险和损失均由您自行承担；\n3、国金证券有权更换外购数据源或对功能、算法等作出必要调整和升级，国金证券将不再另行通知，您愿接受由此带来的所有影响。风险揭示书的提示事项仅为列举性质，未能详尽列明您\n所面临的全部风险和可能导致损失的所有因素。国金证券不承担因上述任何风险因素导致的任何损害或损失，投资者应自行承担依据栏目服务内容操作所导致的损失，与国金证券无关。",
        },
        tips: {
          desc: "聚多利是国金证券深交所质押式报价回购业务，由证券公司进行报价，产品收益明确。同时国金证券提供全额质押物作为质押担保，为客户资金提供保障。",
          featuresTitle: "本产品具有以下特点：",
          features: [
            "1、门槛低，最低1000元起购；",
            "2、0费用一所有交易不收取手续费和管理费；",
          ],
        },
        record: { showTime: !0 },
        interest_rate: "6.99%",
        isShowNewDuotianqiComponent: !0,
      }),
      o(r(e), "notification", {
        showVibrateSwitch: !0,
        showBeepSwitch: !0,
        audioSrc:
          "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
      }),
      o(r(e), "register", {
        active: !0,
        pricewarn: !0,
        protocol: [
          {
            name: "《沪深证券交易所主板投资风险揭示书》",
            key: "gjzq_regist_main_risk",
          },
        ],
      }),
      o(r(e), "commissionTip", { show: !0 }),
      o(r(e), "investCond", {
        errorTips: "定期定投仅支持沪深A股、ETF",
        supportType: ["A", "F"],
        investTradeTimeList: [
          "10:00",
          "10:30",
          "11:00",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
        ],
      }),
      o(r(e), "signProtocolNeedRead", !1),
      o(r(e), "enableCondSettingRiskTips", !0),
      o(r(e), "fundCharge", {
        bondEtf: [{ text: "免收" }],
        currencyEtf: [{ text: "免收" }],
      }),
      o(r(e), "bst", { type: ["MINUTE", "DAY", "FIVEDAY"] }),
      o(r(e), "showFundInfoMoreDesc", !0),
      o(r(e), "canTradeMarket", [
        u.MARKET.SA,
        u.MARKET.HA,
        u.MARKET.BJ,
        u.MARKET.NQ,
      ]),
      o(r(e), "nqOpenConfig", { authOpenOnline: !0 }),
      o(r(e), "checkNQAuthTips", {
        noAccountTips:
          "投资者交易退市板证券前，需通过深圳A股股东卡开通股转账户。您未开通股转账户，无法交易退市板证券，请开通后继续交易",
        noGZAuthTips:
          "投资者交易退市板证券前，需开通退市板交易权限。您未开通退市交易权限，请开通后继续交易",
        GZAuthOpening:
          "退市板交易权限开通后，需要下一个交易日生效，请在下个交易日交易。",
      }),
      o(r(e), "newMarketFullRelease", { ggt: !1, bj: !1, nq: !1 }),
      o(r(e), "bjTradeFee", {
        commission: 375e-6,
        lowestCommission: 5,
        transferFee: 1e-5,
      }),
      o(r(e), "nqTradeFee", {
        commission: 8e-4,
        lowestCommission: 5,
        transferFee: 0,
      }),
      e
    );
  }
  return e(c);
})(c.BrokerTrade))();
exports.trade = p;
