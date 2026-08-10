var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s,
  o,
  c = Object.defineProperty,
  u = function (e, t, r) {
    return (
      (function (e, t, r) {
        t in e
          ? c(e, t, {
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
  l = require("../index.js");
(o = [
  "quickTrade",
  "ipo",
  "debt",
  "fund",
  "transactions",
  "transfers",
  "account",
  "all",
]),
  (s = {
    showVibrateSwitch: !0,
    showBeepSwitch: !0,
    audioSrc: "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
  });
var d = new ((function (n) {
  i(l, n);
  var c = a(l);
  function l() {
    var e;
    return (
      t(this, l),
      (e = c.apply(this, arguments)),
      u(r(e), "index", {
        entry: o,
        isLiteAssetV2: !0,
        liteAssetV2GrayRatio: 100,
      }),
      u(r(e), "all", {
        entry: [
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
          { name: "wealth", title: "投资理财", entry: ["debt", "tgvip"] },
          {
            name: "authority",
            title: "权限开通",
            entry: ["gem", "kechuang", "kzz", "st", "delisting", "infraFund"],
          },
        ],
      }),
      u(r(e), "duotianqi", {
        entryName: "新客专享",
        xinkeName: "新客专享",
        buyLimitTips: function (e) {
          var t = e.maxBuyMoney;
          return [
            "新客专享权益仅在开始购买当日有效。",
            "如今日购买成功但未满".concat(
              t,
              "元，明日起剩余新客理财额度将不再可用。"
            ),
          ];
        },
        checkBizTypeLimit: !0,
        index: {
          productName: "固收宝（报价回购）",
          featureLabel: ["约定收益", "可提前终止", "低风险", "T+1起息"],
          productDesc: "9:00-15:30可下单，1000元起 ｜ 可用资金即可购买",
        },
        projectInfo: {
          rules: [
            {
              name: "买入",
              desc: "每个交易日的9:15至11:30、13:00至15:30，购买金额为1000元的整数倍。",
            },
            { name: "到期", desc: "到期日(T)当天本金可用，T+1日本息可取。" },
            {
              name: "提前购回",
              desc: "非“1天期”品种在到期前，客户可提前全部或部分赎回本金，赎回后本金T+0实时可用，本息T+1日可取。",
            },
          ],
          features: [
            { title: "足额担保", desc: "中信建投证券提供足额质押物" },
            {
              title: "交易手续费全免",
              desc: "1000元起购，不收取任何交易手续费",
            },
            {
              title: "随取随用  流动性强",
              desc: "可提前赎回；到期后T+0可用，T+1可取",
            },
            {
              title: "资金高效利用  收益不间断",
              desc: "可用资金即可购买，到期日资金可用",
            },
          ],
          qa: [
            {
              q: "Q.质押物具体为何物？",
              a: "中信建投证券主要以符合深交所债券质押式回购交易相关规定的债券；基金份额；深交所和中国结算认可的其他证券；现金。",
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
          risk: "本产品由证券公司提供质押担保，是一种低风险投资品，但投资本产品仍存在风险，请慎重决定。客户在参与报价回购交易前， 应认真阅读《深交所质押式报价回购交易产品资料概览》、《中信建投证券深交所报价回购交易客户协议》及 《中信建投证券股份有限公司深交所报价回购交易风险揭示书》， 如有需要及时向证券公司咨询，并做好风险评估与财务安排，确定自身有足够的风险承受能力， 避免因参与报价回购交易而遭受难以承受的损失。本网站宣传内容仅供参考，如果网站宣传内容与前述法律文件不一致，以法律文件为准。",
        },
        tips: {
          desc: "“固收宝（报价回购）”系列是由中信建投证券推出，经中国证监会和深圳证券交易所批准，限定于中信建投证券与本公司客户之间的质押式报价回购业务。中信建投证券以基金专户份额、债券、现金等自有资产折算后的标准券数量所对应金额作为融资的额度，通过报价方式向符合条件的客户融入资金，同时约定中信建投证券在回购到期时向客户返还融入资金、支付相应收益的交易，是一种以质押物担保的现金管理业务。",
          featuresTitle: "业务特点：",
          features: [
            "1、足额担保 <br />\n        中信建投证券提供足额质押物",
            "2、交易手续费全免 <br />\n        1000元起购，不收取任何交易手续费",
            "3、随取随用  流动性强 <br />\n        可提前赎回；到期后T+0可用，T+1可取",
            "4、资金高效利用  收益不间断 <br />\n        可用资金即可购买，到期日资金可用",
          ],
        },
        record: { showTime: !1 },
        repo: { hideLose: !0 },
        interest_rate: "",
        isShowNewDuotianqiComponent: !0,
      }),
      u(r(e), "notification", s),
      u(r(e), "register", {
        active: !0,
        pricewarn: !0,
        modalText: "全面注册制下证券交易规则变化及风险提示",
        isModalShowDetail: !0,
        protocol: [
          {
            name: "《全面注册制下证券交易规则变化及风险提示》",
            key: "zhongxinjiantou_regist_main_risk",
          },
        ],
      }),
      u(r(e), "signProtocolNeedRead", !0),
      u(r(e), "condProtocolNeedCA", !0),
      u(r(e), "debtAutoOrderNeedSetTime", !0),
      u(r(e), "bst", { type: ["MINUTE", "DAY", "FIVEDAY"] }),
      u(r(e), "chartTool", {
        title: "撑压信号",
        disclaimer: "撑压信号由中信建投证券提供投顾服务",
      }),
      e
    );
  }
  return e(l);
})(l.BrokerTrade))();
exports.trade = d;
