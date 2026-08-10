var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s,
  o,
  c,
  l,
  u = Object.defineProperty,
  d = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? u(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r);
      })(e, "symbol" != n(t) ? t + "" : t, r),
      r
    );
  },
  p = require("../index.js"),
  m = require("../../../utils/getPlatform.js"),
  y = m.getPlatform().isOEM;
(l = [
  "quickTrade",
  "ipo",
  "debt",
  "fund",
  "transactions",
  "transfers",
  "account",
  "all",
]),
  (s = [
    "quickTrade",
    "ipo",
    "debt",
    "duotianqi",
    "fund",
    "transfers",
    "transactions",
    "all",
  ]),
  (o = [
    "quickTrade",
    "ipo",
    "debt",
    "fund",
    "transactions",
    "transfers",
    "analysis",
    "all",
  ]),
  (c = {
    showVibrateSwitch: !0,
    showBeepSwitch: !0,
    audioSrc: "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
  });
var h = new ((function (n) {
  a(p, n);
  var u = i(p);
  function p() {
    var e;
    return (
      t(this, p),
      (e = u.apply(this, arguments)),
      d(r(e), "index", {
        entry: l,
        balanceEntry: s,
        analysisEntry: o,
        duotianqiIsUseComplianceStyle: !y,
        isLiteAssetV2: !0,
        liteAssetV2GrayRatio: 100,
        showLiteAssetTriangle: !0,
        disableAnalysisShare: !0,
      }),
      d(r(e), "all", {
        entry: [
          {
            name: "account",
            title: "账户管理",
            entry: [
              "account",
              "updateid",
              "changephone",
              "shareholderManage",
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
              "transactions",
              "condition",
              "bstmark",
              "ipo",
              "quickTrade",
              "setting",
              "safesetting",
            ],
          },
          { name: "wealth", title: "投资理财", entry: ["debt"] },
          {
            name: "authority",
            title: "权限开通",
            entry: ["gem", "kechuang", "kechuanggrowth", "kzz", "st"],
          },
        ],
      }),
      d(r(e), "duotianqi", {
        actEntryName: [
          {
            activityType: "1",
            activityId: "activity_recall",
            entryName: "老友有礼",
          },
        ],
        index: {
          productName: "国信金天利2号",
          featureLabel: ["约定收益", "可提前终止", "低风险", "T+1起息"],
          productDesc: "每个交易日9:15-15:30开售",
        },
        projectInfo: {
          purchaseRateLabelTitle: "到期年化收益率",
          rules: function (e, t) {
            var r = t.activityId;
            return [
              {
                name: "买入",
                desc:
                  "每个交易日的9:15至11:30、13:00至15:30，购买金额为1000元的整数倍。" +
                  ("activity_recall" === (void 0 === r ? "" : r)
                    ? "用户仅限购买一次。"
                    : ""),
              },
              { name: "到期", desc: "到期日(T)当天本金可用，T+1日本息可取。" },
              {
                name: "提前购回",
                desc: "可全部提前购回，暂不提供部分提前购回，本金实时可用，本息T+1可取。",
              },
            ];
          },
          features: [
            {
              title: "约定收益、以国信证券自有资产足额质押",
              desc: "约定到期年化收益率，持有期内不变化；国信证券提供足额质押品质押在中国证券登记结算有限公司深圳分公司作为担保。",
            },
            {
              title: "提前购回、灵活方便",
              desc: "到期日前可全部提前购回，本金实时可用，按提前购回年化收益率（0.35%/年）",
            },
          ],
          qa: [
            {
              q: "Q.质押物具体为何物？",
              a: "国信证券主要以符合深交所质押式回购交易相关规定的债券、基金份额及深交所和中国结算认可的其他证券作为质押物。",
            },
            { q: "Q.交易时间是怎么样的？", a: "交易日9:15-11:30、13:00-15:30" },
            {
              q: "Q.交易可否撤单？",
              a: "交易买入即成交，不可撤单。客户如需使用资金可选择提前购回。",
            },
            {
              q: "Q.计息规则及资金效率？",
              a: "按实际占用天数计息。产品到期T日可用。T+1日可取。",
            },
          ],
          risk: "本产品为低风险（R1）、产品期限不超过1年，投资品种为固定收益类。投资者应仔细阅读《风险揭示书》，了解风险和收益特征。",
        },
        tips: {
          desc: "“金天利2号”质押式报价回购特指国信证券开展的深交所质押式报价回购交易业务。国信证券将符合规定的自有资产作为质押物，以质押物折算后的标准券数量所对应金额作为融资的额度，通过报价方式向符合条件的客户融入资金，同时约定在回购到期时向客户返还融入资金、支付相应收益的交易。",
          featuresTitle: "产品特点：",
          features: [
            "1、约定收益、以国信证券自有资产足额质押 <br />\n        约定到期年化收益率，持有期内不变化；国信证券提供足额质押品质押在中国证券登记结算有限公司深圳分公司作为担保。",
            "2、提前购回、灵活方便 <br />\n        到期日前可全部提前购回，本金实时可用，按提前购回年化收益率（0.35%/年）计算收益。",
          ],
        },
        interest_rate: "8.18%",
        isShowNewDuotianqiComponent: !0,
        buyLimitTips: function (e) {
          var t = e.maxBuyMoney;
          return "activity_recall" !== e.activityId
            ? []
            : [
                "老友有礼权益仅可购买一次。",
                "单次购买成功后，若未购满".concat(
                  t,
                  "元，剩余老友有礼额度也将不再可用。"
                ),
              ];
        },
      }),
      d(r(e), "notification", c),
      d(r(e), "register", {
        active: !0,
        pricewarn: !0,
        protocol: [
          { name: "《主板投资风险揭示书》", key: "guosen_regist_main_risk" },
        ],
      }),
      d(r(e), "investCond", {
        errorTips: "定期定投仅支持ETF",
        supportType: ["F"],
        investTradeTimeList: [
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
        ],
      }),
      d(r(e), "signProtocolNeedRead", !0),
      d(
        r(e),
        "openingSellCondRiskTips",
        "【开板卖出-开板立即触发条件单】交易日打开涨停板后触发卖出。【开板卖出-涨停后开板回落条件单】交易日打开涨停板并回落至预设幅度时触发卖出。如果个股T日涨停收盘，T+1日非涨停开盘，也认定为开板。"
      ),
      d(r(e), "condRiskTips", [
        "条件单功能与国信证券其他官方渠道提供的条件单功能独立监控和执行，平台只展示、监控和运营在平台内创建的条件单。如在国信证券多个官方渠道使用条件单功能，可能会存在部分条件单下单不成功的情况，以最终委托成交为准。可在交易记录中查看交易记录。投资有风险，入市需谨慎。",
        "系统默认价格仅参考，不含有任何明示、暗示的投资建议。投资者可自行修改触发价。不论是否使用本服务，投资者均应自主做出投资决策并独立承担投资风险。",
      ]),
      d(r(e), "showFundInfoMoreDesc", !0),
      d(r(e), "condProtocolUseImage", !0),
      d(r(e), "checkShareHolderCards", {
        realTimeQuery: !1,
        canBindOnline: !0,
        noShareHolderCardsTips: "",
      }),
      e
    );
  }
  return e(p);
})(p.BrokerTrade))();
exports.trade = h;
