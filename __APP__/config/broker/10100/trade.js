var e = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
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
  u = require("../../enum/trade-history.js"),
  p = require("../../enum.js"),
  d = new ((function (i) {
    n(c, i);
    var o = a(c);
    function c() {
      var r, n, a;
      return (
        t(this, c),
        (a = o.apply(this, arguments)),
        l(s(a), "index", {
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
          analysisRelease: !0,
          isNewOperate: !0,
          homeShowReloadNewCgi: !0,
          isLiteAssetV2: !0,
          liteAssetV2GrayRatio: 100,
          showLiteAssetTriangle: !0,
        }),
        l(s(a), "all", {
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
                "delistKzz",
                "infraFund",
              ],
            },
          ],
        }),
        l(s(a), "bankcardchange", {
          name: "操作指引",
          key: "chinalions_yhghzjaqk",
        }),
        l(s(a), "notification", {
          showVibrateSwitch: !0,
          showBeepSwitch: !0,
          audioSrc:
            "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
        }),
        l(s(a), "register", {
          active: !0,
          pricewarn: !0,
          protocol: [
            {
              name: "《上海证券交易所主板投资风险揭示书》",
              key: "chinalions_regist_sh_main_risk",
            },
            {
              name: "《深圳证券交易所主板投资风险揭示书》",
              key: "chinalions_regist_sz_main_risk",
            },
          ],
        }),
        l(s(a), "etfSub", {
          protocol: {
            name: "《ETF认购通用协议》",
            key: "chinalions_ETFrgtyxy",
          },
        }),
        l(s(a), "commissionTip", { show: !0 }),
        l(s(a), "investCond", {
          errorTips: "定期定投仅支持沪深A股、ETF",
          supportType: ["A", "F"],
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
        l(s(a), "signProtocolNeedRead", !1),
        l(s(a), "debtAutoOrderNeedSetTime", !1),
        l(s(a), "condRiskTips", [
          "条件单监控采用交易所提供的level-1行情，刷新频率3秒/次，条件单触发后不代表委托成功，不保证委托成功，以实际委托成交为准。",
        ]),
        l(
          s(a),
          "chargeTradeFeeTips",
          "注：上海、深圳证券交易所交易佣金含交易经手费、证券业务监管费及证券结算风险基金。更多可能涉及的收费项目请到“中国证券登记结算有限责任公司官方网站-服务支持-收费标准”(|placeholder-link|)进行查看。该费率标准为新开户客户佣金费率标准测算演示，如有疑问可致电|placeholder-brokerTel|详询。"
        ),
        l(s(a), "fundCharge", {
          bondEtf: [
            { text: "成交金额*万分之2.5（标准费率），" },
            { text: "单笔最低收费5元，", class: "highlight" },
            { text: "买卖双向收取" },
          ],
          currencyEtf: [{ text: "免收" }],
        }),
        l(s(a), "kzzCharge", {
          sz: [{ text: "成交金额*万分之2（标准费率），买卖双向收取" }],
        }),
        l(s(a), "canContact", !0),
        l(s(a), "passwordLockMsg", [
          "您的账号因多次输入密码错误被冻结，下一交易日会自动解冻",
          "券商提示：账户处于密码锁定状态，将于下一交易日自动解锁。",
        ]),
        l(s(a), "bst", { type: ["MINUTE", "DAY", "FIVEDAY"] }),
        l(s(a), "history", {
          selectorOptions:
            ((r = {}),
            e(r, u.ETYPE.TRADE, [
              u.TradeType.all,
              u.TradeType.buy,
              u.TradeType.sell,
              u.TradeType.finance,
              u.TradeType.playNew,
              u.TradeType.etfPurchase,
            ]),
            e(r, u.ETYPE.BUSINESS, [
              u.BusinessType.all,
              u.BusinessType.stockFund,
              u.BusinessType.debt,
            ]),
            r),
          newSelectorOptions:
            ((n = {}),
            e(n, u.ETYPE.TRADE, [
              u.TradeType.all,
              u.TradeType.buy,
              u.TradeType.sell,
              u.TradeType.finance,
              u.TradeType.playNew,
              u.TradeType.etfPurchase,
            ]),
            e(n, u.ETYPE.BUSINESS, [
              u.BusinessType.all,
              u.BusinessType.stock,
              u.BusinessType.fund,
              u.BusinessType.bond,
              u.BusinessType.debt,
            ]),
            n),
        }),
        l(s(a), "showFundInfoMoreDesc", !0),
        l(s(a), "checkShareHolderCards", {
          realTimeQuery: !1,
          canBindOnline: !0,
          noShareHolderCardsTips: "",
        }),
        l(s(a), "nqOpenConfig", { authOpenOnline: !0 }),
        l(s(a), "checkNQAuthTips", {
          noAccountTips:
            "投资者交易退市板证券前，需通过深圳A股股东卡开通股转账户。您未开通股转账户，无法交易退市板证券，请开通后继续交易",
          noGZAuthTips:
            "投资者交易退市板证券前，需开通退市板交易权限。您未开通退市交易权限，请开通后继续交易",
          GZAuthOpening:
            "退市板交易权限开通后，需要下一个交易日生效，请在下个交易日交易。",
        }),
        l(s(a), "canTradeMarket", [
          p.MARKET.SA,
          p.MARKET.HA,
          p.MARKET.BJ,
          p.MARKET.NQ,
          p.MARKET.HK,
        ]),
        l(s(a), "newMarketFullRelease", { ggt: !0, bj: !0, nq: !0 }),
        l(s(a), "userinfoBrokerCgi", !0),
        l(s(a), "bjTradeFee", {
          commission: 3e-4,
          lowestCommission: 5,
          transferFee: 1e-5,
        }),
        l(s(a), "nqTradeFee", {
          commission: 7e-4,
          lowestCommission: 5,
          transferFee: 0,
        }),
        l(s(a), "ggtTradeFee", {
          commission: 6e-4,
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
        l(s(a), "permissionPanelKeys", [
          "main_board",
          "etf",
          "repo",
          "kzz",
          "nq",
          "bj",
          "ggt",
          "all",
        ]),
        a
      );
    }
    return r(c);
  })(c.BrokerTrade))();
exports.trade = d;
