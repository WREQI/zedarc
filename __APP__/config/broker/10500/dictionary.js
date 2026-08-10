var e = require("../../../@babel/runtime/helpers/createClass"),
  a = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  t = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o = Object.defineProperty,
  l = new ((function (l) {
    r(u, l);
    var s = i(u);
    function u() {
      var e;
      return (
        a(this, u),
        (e = s.call(this)),
        (function (e, a, n) {
          (function (e, a, n) {
            a in e
              ? o(e, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[a] = n);
          })(e, "symbol" != t(a) ? a + "" : a, n);
        })(n(e), "Enties", {
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
          condition: {
            icon: "all-condition",
            name: "条件单",
            routeName: "ConditionList",
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
          bstmark: {
            icon: "all-bst",
            name: "K线买卖点",
            routeName: "BstMark",
            hidden: !1,
          },
          autoAddChoose: {
            icon: "all-add",
            name: "委托加自选",
            routeName: "AutoAddChoose",
            hidden: !0,
          },
          waiting: { icon: "all-all", name: "敬请期待", routeName: "" },
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
          shareholder: {
            icon: "all-bind-shareholder",
            name: "添加股东卡",
            routeName: "BizShareHolderBind",
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
            routeName: "TransferFundRecords",
          },
          changebankcard: {
            icon: "all-changebankcard",
            name: "管理银行卡",
            routeName: "AccountCard",
          },
          permission: {
            icon: "all-permission",
            name: "查询交易权限",
            routeName: "BizPermission",
          },
          delistKzz: {
            icon: "all-delist-kzz",
            name: "退市整理可转债",
            routeName: "BizBrokerService",
            key: "delistKzz",
          },
          delisting: {
            icon: "all-delist-stock",
            name: "退市整理股票",
            routeName: "BizBrokerService",
            key: "delisting",
          },
          infraFund: {
            icon: "all-infra-fund",
            name: "基础设施基金",
            routeName: "BizBrokerService",
            key: "infraFund",
          },
          shareholderRights: {
            icon: "all-shareholder-rights",
            name: "股东权益",
            routeName: "HqShareholderRights",
          },
        }),
        (e.APPLY_STEP.ApplyProgress.title = "广发证券网上开户"),
        (e.APPLY_STEP.ApplyRecover.title = "广发证券网上开户"),
        e
      );
    }
    return e(u);
  })(require("../index.js").BrokerDictionary))();
exports.dictionary = l;
