var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a,
  o,
  u = Object.defineProperty,
  c = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? u(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != s(r) ? r + "" : r, t),
      t
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
  (a = {
    showVibrateSwitch: !0,
    showBeepSwitch: !0,
    audioSrc: "https://wzq.gtimg.com/resources/broker/trade/notify_beep.mp3",
  });
var d = new ((function (s) {
  n(l, s);
  var u = i(l);
  function l() {
    var e;
    return (
      r(this, l),
      (e = u.apply(this, arguments)),
      c(t(e), "index", {
        entry: o,
        assetDesc: {
          freeze: "未成交或资金在途",
          unknownFirst: "其他资产",
          unknownSecond: "详见更多指标说明",
        },
        isLiteAssetV2: !0,
        liteAssetV2GrayRatio: 100,
        showLiteAssetTriangle: !0,
      }),
      c(t(e), "all", {
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
      c(t(e), "notification", a),
      c(t(e), "register", {
        active: !0,
        pricewarn: !0,
        protocol: [{ name: "", key: "" }],
      }),
      c(t(e), "bst", { type: ["MINUTE", "DAY", "FIVEDAY"] }),
      c(t(e), "investCond", {
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
      c(t(e), "condUnsupportType", ["B", "ST"]),
      c(t(e), "signProtocolNeedRead", !0),
      c(t(e), "condRiskTips", [
        "客户现金资产或持仓数量不足导致条件下单交易失败。条件单截止时间内，若发生任何账户体系变更，包括但不限于交易密码修改、身份证号码升级等情况，需要手动将原有条件单删除并重新设置条件单。",
        "条件单截止时间内，如果标的发生除权、除息、已退市、退市整理、暂停上市等风险警示情况，系统对条件单统一做失效处理。",
        "条件触发按照level-1行情，所有条件单将根据行情触达的时间先后顺序进行系统委托，若多个单同时触达则按照埋单的时间先后顺序委托，在极端行情下可能会出现不同程度的委托延迟。",
        "当行情达到触发条件，系统将按照您设置的条件自动提交进行委托，条件单功能会尽量保证稳定可靠的服务，但可能存在因网络传输故障、行情数据错误、代码编写错误以及其他不可抗力因素，导致条件单未被执行或者执行错误。",
        "条件单功能与广发证券其他官方渠道提供的条件单功能独立监控和执行。",
        "如在广发证券多个官方渠道使用条件单功能，可能会存在部分条件单下单不成功的情况，以最终委托成交为准。可在交易记录中查看交易记录。投资有风险，入市需谨慎。",
      ]),
      c(t(e), "condProtocolFromBroker", !0),
      c(t(e), "hideDefaultRiskTips", !0),
      c(t(e), "showFundInfoMoreDesc", !0),
      e
    );
  }
  return e(l);
})(l.BrokerTrade))();
exports.trade = d;
