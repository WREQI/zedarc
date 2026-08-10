var e = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  i = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o = Object.defineProperty,
  l = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? o(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != i(r) ? r + "" : r, t),
      t
    );
  },
  c = require("../index.js"),
  p = require("../../enum/trade-history.js"),
  u = require("../../enum.js"),
  T = new ((function (i) {
    a(c, i);
    var o = n(c);
    function c() {
      var r, a, n, i;
      return (
        t(this, c),
        (i = o.apply(this, arguments)),
        l(s(i), "index", {
          entry: [
            "quickTrade",
            "ipo",
            "analysis",
            "debt",
            "fund",
            "transactions",
            "transfers",
            "all",
          ],
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
          isSupportLicaiAnalysis: !0,
          isLiteAssetV2: !0,
          liteAssetV2GrayRatio: 100,
          showLiteAssetTriangle: !0,
        }),
        l(s(i), "all", {
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
            { name: "wealth", title: "投资理财", entry: ["debt"] },
            {
              name: "authority",
              title: "权限开通",
              entry: [
                "gem",
                "kechuang",
                "kechuanggrowth",
                "kzz",
                "st",
                "delisting",
                "delistKzz",
                "infraFund",
              ],
            },
          ],
        }),
        l(s(i), "bankcardchange", {
          name: "操作指引",
          key: "cmschina_yhghzjaqk",
        }),
        l(s(i), "duotianqi", {
          actEntryName: [{ activityType: "1", entryName: "专享理财" }],
          FEATURE_ESTIMATE_PROFIT: !0,
          index: {
            productName: "招商加鑫宝",
            featureLabel: ["约定收益", "资金安全", "可提前终止"],
            productDesc: "交易日09:15-15:30可购买 ｜1000元起售",
          },
          projectInfo: {
            rules: [
              {
                name: "买入",
                desc: "每个交易日09:15至15:30可购买，购买金额为1000元的整数倍。",
              },
              { name: "到期", desc: "到期日(T)当天本息可用，T+1日本息可取。" },
              {
                name: "提前购回",
                desc: "到期日前，可全部或者部分提前购回，购回金额实时可用，本息T+1可取。",
              },
            ],
            features: function (e) {
              var r = [
                {
                  title: "约定收益，本金保障",
                  desc: "收益率事先约定，一旦买入则约定期限内不再变化。本金由招商证券提供足额质押物担保，由中登公司保管，保障资金安全。",
                },
                {
                  title: "兼具固定收益和灵活性",
                  desc: "收益在每次到期后的下一个交易日自动到账。如急需资金可以提前购回，资金实时可用，下一交易日可取，灵活性高。未到期产品提前购回按照提前购回年化收益率计算。",
                },
                { title: "费用全免", desc: "招商证券不收取任何费用。" },
              ];
              return (
                "1" === e.is_bal_new &&
                  r.push({
                    title: "购买期限",
                    desc: "开通招商证券账户或获得专享理财权益后30个自然日内有效。",
                  }),
                r
              );
            },
            qa: function (e) {
              return [
                {
                  q: "Q.“加鑫宝”作为深交所报价回购业务，与银行理财和一般理财产品有何区别？",
                  a: "深交所报价回购属于质押式回购业务，即证券公司提供全额质押物作为质押担保，客户将资金融出给证券公司，获取利息，因此本息收入事先约定，安全有保障。而一般理财产品是指银行或证券公司将客户资金集中，并代其进行投资管理，一般只披露过往业绩或业绩基准。",
                },
                {
                  q: "Q.交易时间是怎么样的？",
                  a: "购买时间：交易日9：15-15：30<br/>提前购回时间：交易日9：15-15：30<br/>终止续作时间：交易日9：15-15：00",
                },
                {
                  q: "Q.交易金额有何要求？",
                  a: "最低购买金额为"
                    .concat(e, "元，超出部分以")
                    .concat(
                      e,
                      "的整数倍增加，提前购回最低申报金额为100元，超出部分以100元的整数倍递增。部分期限产品有更高的起购金额和递增金额要求。"
                    ),
                },
                {
                  q: "Q.提前购回如何计算收益，收益如何到账？",
                  a: "提前购回收益=本金*提前购回年收益率*实际计息天数/365。提前购回当日，本金T+0实时可用，本金和利息T+1可取。",
                },
              ];
            },
            risk: "“加鑫宝”作为深交所质押式报价回购业务，有其自身的特性和风险，上述宣传介绍内容仅描述了业务概况，供投资者参考，投资者做出投资决策前，应认真阅读《招商证券深交所质押式报价回购交易客户协议》和《招商证券深交所质押式报价回购交易风险揭示书》的详细条款并自行承担投资风险。上述宣传介绍文字内容与前述法律文件不一致的，以前述法律文件为准。",
          },
          tips: {
            desc: "招商证券加鑫宝是招商证券提供的多种期限质押式报价回购投资产品。该产品属于固定收益类别，收益远高于用户活期利率。\n      用户投资收益率事先约定，买入后由招商证券承诺固定回报并提供全额抵押物作为质押担保，中国证券结算登记公司进行质押物管理。\n      投资者本金和收益安全可靠。",
            featuresTitle: "本产品具有以下四个特点：",
            features: [
              "1.收益约定，本金保障；",
              "2.起投金额低，加鑫宝的投资参与起点为1000元；",
              "3.兼具固定收益和灵活性，产品在持有期内如急需资金可以提前购回，资金实时可用；",
              "4.费用全免，投资者买入加鑫宝招商证券不收取任何费用。 ",
            ],
          },
          record: { showTime: !0 },
          interest_rate: "6.88%",
          isShowNewDuotianqiComponent: !0,
        }),
        l(s(i), "notification", {
          showVibrateSwitch: !0,
          showBeepSwitch: !0,
          audioSrc:
            "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
        }),
        l(s(i), "register", {
          active: !0,
          pricewarn: !0,
          protocol: [
            {
              name: "《主板投资风险揭示书》",
              key: "cmschina_regist_main_risk",
            },
            {
              name: "《上海证券交易所科创板股票交易风险揭示书》",
              key: "cmschina_kechuang_fxjss",
            },
          ],
        }),
        l(s(i), "etfSub", {
          needSignMatch: !0,
          openMatch: { risk: !0, term: !0, inrange: !0 },
          allowUpdateRisk: !0,
          skipCgiSign: !1,
          protocol: { name: "《ETF认购通用协议》", key: "cmschina_ETFrgtyxy" },
        }),
        l(
          s(i),
          "commissionTip",
          (e(
            (r = {
              show: !0,
              tip: "根据开户佣金费率万分之2.354估算，单笔交易最低5元",
              replenishTip: "若有佣金调整，实际费用以对账单为准",
            }),
            u.MARKET.HK,
            {
              tip: "根据开户佣金费率千分之1估算，单笔交易最低5元",
              replenishTip: "若有佣金调整，实际费用以对账单为准",
            }
          ),
          e(r, u.MARKET.NQ, {
            tip: "根据开户佣金费率千分之2.4估算，单笔交易最低5元",
            replenishTip: "若有佣金调整，实际费用以对账单为准",
          }),
          e(r, u.MARKET.BJ, {
            tip: "根据开户佣金费率千分之1估算",
            replenishTip: "若有佣金调整，实际费用以对账单为准",
          }),
          r)
        ),
        l(s(i), "investCond", {
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
        l(s(i), "signProtocolNeedRead", !1),
        l(s(i), "enableCondSettingRiskTips", !0),
        l(s(i), "history", {
          selectorOptions:
            ((a = {}),
            e(a, p.ETYPE.TRADE, [
              p.TradeType.all,
              p.TradeType.buy,
              p.TradeType.sell,
              p.TradeType.finance,
              p.TradeType.playNew,
              p.TradeType.etfPurchase,
            ]),
            e(a, p.ETYPE.BUSINESS, [
              p.BusinessType.all,
              p.BusinessType.stockFund,
              p.BusinessType.debt,
              p.BusinessType.balance,
            ]),
            a),
          newSelectorOptions:
            ((n = {}),
            e(n, p.ETYPE.TRADE, [
              p.TradeType.all,
              p.TradeType.buy,
              p.TradeType.sell,
              p.TradeType.finance,
              p.TradeType.playNew,
              p.TradeType.etfPurchase,
            ]),
            e(n, p.ETYPE.BUSINESS, [
              p.BusinessType.all,
              p.BusinessType.stock,
              p.BusinessType.fund,
              p.BusinessType.bond,
              p.BusinessType.debt,
              p.BusinessType.balance,
            ]),
            n),
        }),
        l(
          s(i),
          "chargeTradeFeeTips",
          "注：上海、深圳证券交易所交易佣金含交易经手费、证券业务监管费及证券结算风险基金。若加入财富管理计划，佣金费率以财富管理计划及对应套餐的费率为准，详询|placeholder-brokerTel|。\n声明:\n1、本公示为截至当前时刻的收费标准，若后续法律法规和交易所、登记公司的规定及市场情况变化，招商证券将相应对上述佣金标准进行调整并重新公示调整后的内容。\n2、交易经手费、证券业务监管费、过户费、结算费及印花税为代收项目，收费标准以上海、深圳及中国证券登记结算有限责任公司公示为准。更多可能涉及的收费项目请到“中国证券登记结算有限责任公司官方网站-服务支持-收费标准”(|placeholder-link|)进行查看。"
        ),
        l(s(i), "fundCharge", {
          bondEtf: [{ text: "免收" }],
          currencyEtf: [{ text: "免收" }],
        }),
        l(s(i), "canContact", !0),
        l(s(i), "passwordLockMsg", [
          "券商提示：用户已锁定",
          "券商提示：密码验证失败次数已达到最大允许值",
        ]),
        l(
          s(i),
          "passwordLockTips",
          "连续错误，账户已被锁定，下一交易日会自动解锁。"
        ),
        l(s(i), "fullRefreshTips", "，若数据未更新，请手动下拉页面刷新数据"),
        l(s(i), "isHalfRefreshIcon", !0),
        l(s(i), "canSkipFundCheck", !0),
        l(s(i), "bst", { type: ["DAY"] }),
        l(s(i), "canTradeMarket", [
          u.MARKET.SA,
          u.MARKET.HA,
          u.MARKET.HK,
          u.MARKET.BJ,
          u.MARKET.NQ,
        ]),
        l(s(i), "newMarketFullRelease", { ggt: !0, bj: !0, nq: !0 }),
        l(s(i), "bjTradeFee", {
          commission: 0.001,
          lowestCommission: 5,
          transferFee: 1e-5,
        }),
        l(s(i), "nqTradeFee", {
          commission: 1e-4,
          lowestCommission: 5,
          transferFee: 0,
        }),
        l(s(i), "ggtTradeFee", {
          commission: 0.001,
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
        l(s(i), "permissionPanelKeys", [
          "main_board",
          "etf",
          "repo",
          "kzz",
          "nq",
          "bj",
          "ggt",
          "all",
        ]),
        i
      );
    }
    return r(c);
  })(c.BrokerTrade))();
exports.trade = T;
