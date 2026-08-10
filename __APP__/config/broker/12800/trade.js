var e = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o,
  l,
  d,
  c,
  u = Object.defineProperty,
  p = function (e, r, a) {
    return (
      (function (e, r, a) {
        r in e
          ? u(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            })
          : (e[r] = a);
      })(e, "symbol" != s(r) ? r + "" : r, a),
      a
    );
  },
  T = require("../index.js"),
  y = require("../../enum.js"),
  m = require("../../enum/trade-history.js"),
  h = require("./base.js"),
  b = require("../../../utils/getPlatform.js").getPlatform().isOEM;
(c = [
  "quickTrade",
  "ipo",
  "debt",
  "fund",
  "transactions",
  "transfers",
  "account",
  "all",
]),
  (o = [
    "quickTrade",
    "ipo",
    "debt",
    "duotianqi",
    "fund",
    "transactions",
    "transfers",
    "all",
  ]),
  (d = [
    "quickTrade",
    "ipo",
    "debt",
    "fund",
    "transactions",
    "transfers",
    "analysis",
    "all",
  ]),
  (l = {
    showVibrateSwitch: !0,
    showBeepSwitch: !0,
    audioSrc: "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
  });
var f = [
    {
      name: "account",
      title: "账户管理",
      entry: [
        "account",
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
        "debtPermission",
      ],
    },
  ],
  k = new ((function (s) {
    n(T, s);
    var u = i(T);
    function T() {
      var r, n, i;
      return (
        a(this, T),
        (i = u.apply(this, arguments)),
        p(t(i), "index", {
          entry: c,
          balanceEntry: o,
          analysisEntry: d,
          duotianqiIsUseComplianceStyle: !0,
          isLiteAssetV2: !0,
          liteAssetV2GrayRatio: 100,
          showLiteAssetTriangle: !0,
          analysisRelease: !0,
        }),
        p(t(i), "all", { entry: f }),
        p(t(i), "bankcardchange", {
          name: "操作指引",
          key: "zhongjincaifu_yhghzjaqk",
        }),
        p(t(i), "duotianqi", {
          entryName: "新客好礼",
          index: {
            productName: "中金金汇利",
            featureLabel: ["约定收益", "资金安全", "可提前终止"],
            productDesc: "每个交易日9:15-15:30开售 | 1000元起购",
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
            features: [
              {
                title: "约定收益，本金保障",
                desc: "收益率事先约定，一旦买入则约定期限内不再变化。产品由中金财富提供足额质押物，托管于中国结算深圳分公司，保障资金安全。",
              },
              {
                title: "提前购回，灵活方便",
                desc: "客户若有用款需求，可选择提前购回。T日提前购回，资金T日实时可用，T+1日可取，支持全部及部分提前购回。提前购回部分按照“提前购回收益率”计算收益。",
              },
            ],
            qa: [
              {
                q: "Q.质押物具体为何物？",
                a: "中金财富证券主要以符合深交所质押式回购交易相关规定的债券、基金份额及深交所和中国结算认可的其他证券作为质押物。",
              },
              {
                q: "Q.交易时间是怎么样的？",
                a: "购买时间：交易日9:15-11:30、13:00-15:30<br/>提前购回时间：交易日9:15-11:30",
              },
              {
                q: "Q.交易可否撤单？",
                a: "交易买入即成交，不可撤单。客户如需使用资金可选择提前购回。",
              },
              {
                q: "Q.计息规则及资金效率？",
                a: "按实际占用天数计息。产品到期T日可用，T+1日可取。",
              },
            ],
            risk: "本产品非本金保障型产品，具体风险请参阅《风险揭示书》。",
          },
          tips: {
            desc: "金汇利是中国中金财富证券推出的交易所报价回购产品，新客好礼28天期是金汇利中特别面向活动客户的福利产品。该产品属于固定收益类别，是低风险品种。用户投资收益率事先约定，到期获得稳定收益。",
            featuresTitle: "本产品具有以下四个特点：",
            features: [
              "1.约定收益，低风险；",
              "2.起投金额低，投资参与起点为1000元；",
              "3.兼具固定收益和灵活性，产品在持有期内如急需资金可以提前购回，资金实时可用；",
              "4.无认申购费，投资者买入不收取任何费用。",
            ],
          },
          repo: { hideLose: !0 },
          interest_rate: "8.8%",
          isShowNewDuotianqiComponent: !0,
        }),
        p(t(i), "history", {
          selectorOptions:
            ((r = {}),
            e(r, m.ETYPE.TRADE, [
              m.TradeType.all,
              m.TradeType.buy,
              m.TradeType.sell,
              m.TradeType.finance,
              m.TradeType.playNew,
            ]),
            e(r, m.ETYPE.BUSINESS, [
              m.BusinessType.all,
              m.BusinessType.stockFund,
              m.BusinessType.debt,
            ]),
            r),
          newSelectorOptions:
            ((n = {}),
            e(n, m.ETYPE.TRADE, [
              m.TradeType.all,
              m.TradeType.buy,
              m.TradeType.sell,
              m.TradeType.finance,
              m.TradeType.playNew,
            ]),
            e(n, m.ETYPE.BUSINESS, [
              m.BusinessType.all,
              m.BusinessType.stock,
              m.BusinessType.fund,
              m.BusinessType.bond,
              m.BusinessType.debt,
            ]),
            n),
        }),
        p(t(i), "notification", l),
        p(t(i), "repoPermission", {
          checkPermission: !1,
          bindStockHolderCardOnline: !1,
          openRepoPermissionOnline: !0,
          permissionTips:
            "您的账号当前未开通通用回购权限，请先开通权限后再进行交易。如有疑问可联系券商客服:".concat(
              h.base.tel
            ),
          permissionConfirm: "立即开通",
        }),
        p(t(i), "register", {
          active: !0,
          pricewarn: !0,
          modalHeader: "全面实行股票发行注册制\n的提示公告",
          modalText:
            "全面注册制实施后，主要规则变化包括但不限于：沪深A股上市前5个交易日不设涨跌幅限制；连续竞价申报需符合2%价格笼子价格范围；沪市主板新股申购单位调整为500股；沪市主板新增两种市价委托方式等。您在参与交易前，请全面了解相关规则与风险事项，避免遭受损失。了解更多关于全面注册制改革内容请点击",
          protocol: [
            {
              name: "《关于全面实行股票发行注册制的提示公告》",
              key: "zhongjincaifu_regist_announcement",
            },
          ],
        }),
        p(t(i), "investCond", {
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
        p(t(i), "signProtocolNeedRead", !0),
        p(t(i), "condProtocolUseImage", !0),
        p(t(i), "fundCharge", {
          bondEtf: [{ text: "免收" }],
          currencyEtf: [{ text: "免收" }],
        }),
        p(t(i), "canContact", !0),
        p(t(i), "tradeStock", {
          cleanRevokingItemsMapsByReload: !1,
          hideSearchEntry: b,
          hidePositionSwiper: b,
        }),
        p(t(i), "debt", { hideDetail: b }),
        p(t(i), "canTradeMarket", [
          y.MARKET.SA,
          y.MARKET.HA,
          y.MARKET.BJ,
          y.MARKET.NQ,
          y.MARKET.HK,
        ]),
        p(t(i), "showFundInfoMoreDesc", !0),
        p(t(i), "balValCalc", {
          holdDebt: "trade_income",
          holdBalance: "income",
        }),
        p(t(i), "checkShareHolderCards", {
          realTimeQuery: !1,
          canBindOnline: !0,
          noShareHolderCardsTips: "",
        }),
        p(t(i), "newMarketFullRelease", { ggt: !0, bj: !0, nq: !0 }),
        p(t(i), "permissionPanelKeys", [
          "main_board",
          "etf",
          "repo",
          "kzz",
          "nq",
          "bj",
          "ggt",
          "all",
        ]),
        p(t(i), "chartTool", {
          title: "AI波段宝",
          disclaimer: "AI波段宝服务由中金财富证券提供",
        }),
        p(t(i), "hkNewTickSize", !0),
        i
      );
    }
    return r(T);
  })(T.BrokerTrade))();
exports.trade = k;
