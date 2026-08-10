var e = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  o = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var r = Object.defineProperty,
  s = function (e, n, t) {
    return (
      (function (e, n, t) {
        n in e
          ? r(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[n] = t);
      })(e, "symbol" != o(n) ? n + "" : n, t),
      t
    );
  },
  c = require("../index.js"),
  p = require("../../../utils/getPlatform.js"),
  h = require("./base.js"),
  l = p.getPlatform().isWeixin,
  w = new ((function (o) {
    a(c, o);
    var r = i(c);
    function c() {
      var e;
      return (
        n(this, c),
        (e = r.apply(this, arguments)),
        s(t(e), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0, enable: l },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !0 },
          degree: { show: !0, enable: !0 },
          mobilephone: { show: !0, enable: !0 },
          contactaddr: { show: !0, enable: !0 },
          job: { show: !0, enable: !0 },
          companyaddr: { show: !0, enable: !0 },
          posttitle: { show: !0, enable: !0 },
          yearincome: { show: !1, enable: !1 },
          cardtailnumber: { show: !0, enable: !0 },
          riskmodel: { show: !0, enable: !0 },
          jobfilter: { enable: !0 },
          profileupdate: { show: !1 },
        }),
        s(t(e), "gem", {
          openReturnQuestion: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !1, inrange: !1 },
          allowUpdateRisk: !0,
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "创业板适当性匹配意见及投资者确认书",
            unmatch: "创业板风险警示及投资者确认书",
          },
        }),
        s(t(e), "st", {
          protocol: {
            match: "适当性匹配意见及投资者确认书",
            unmatch: "适当性匹配意见及投资者确认书",
          },
          openReturnQuestion: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !1, inrange: !1 },
          allowUpdateRisk: !0,
        }),
        s(t(e), "kzz", {
          openReturnQuestion: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !1, inrange: !1 },
          allowUpdateRisk: !0,
        }),
        s(t(e), "kcOpen", {
          passScore: 80,
          questions: 10,
          maxTestTimes: 9999,
          MININAL_RISK_LEVEL: [2, 3, 4, 5],
          protocol: {
            match: "适当性匹配意见及投资者确认书",
            unmatch: "适当性匹配意见及投资者确认书",
          },
          openReturnQuestion: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !1, inrange: !1 },
          allowUpdateRisk: !0,
        }),
        s(t(e), "newstock", {
          kcb: !0,
          booking: {
            protocols: [{ name: "预约打新风险揭示书", key: "hulin-yydxfxjss" }],
          },
        }),
        s(t(e), "setting", { debt: !0 }),
        s(t(e), "business", { kcb: !0 }),
        s(t(e), "loginInfo", !1),
        s(t(e), "supportedBanks", [
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
        s(t(e), "needCompress", !0),
        s(t(e), "bankcard", {
          changePreCheck: !0,
          emptyCard: { canAddCard: !0 },
        }),
        s(t(e), "third", {
          enable: !0,
          tccMode: "2",
          needSection: !0,
          needOpenid: !0,
          entry: {
            bankcardchange:
              "https://wzqwt.chinalin.com/wt_h5_app/depositoryManage",
            accountUnlock: "https://wzqwt.chinalin.com/wt_h5_app/unableToLogin",
            bankcardadd:
              "https://wzqwt.chinalin.com/wt_h5_app/depositoryManage",
            shareholder:
              "https://wzqwt.chinalin.com/wt_h5_app/openAccountAdd/0",
            bj: "https://wzqwt.chinalin.com/wt_h5_app/bjStockRotation",
            stocktransfer:
              "https://wzqwt.chinalin.com/wt_h5_app/openGzAccountAdd/0",
            stocktransferAuth:
              "https://wzqwt.chinalin.com/wt_h5_app/lwStockRotationPage?BUSINESS_ID=4196",
            MarginAssetIndex:
              "https://wzq2r.chinalions.cn/app/margin-trading/index.html#/home",
            MarginTradeIndex:
              "https://wzq2r.chinalions.cn/app/margin-trading/index.html#/trading/buy?type=collateral",
            MarginIpoIndex:
              "https://wzq2r.chinalions.cn/app/margin-trading/index.html#/ipo/subscription/newstock",
            MarginFundTransfer:
              "https://wzq2r.chinalions.cn/app/margin-trading/index.html#/bank-transfer?tab=in",
            MarginReserveRedirect: "https://msmt.chinalin.com/transition#/",
            kechuanggrowth:
              "https://wzqwt.chinalin.com/wt_h5_app/optionOpenAcct?BUSINESS_ID=4227",
            kcb: "https://wzqwt.chinalin.com/wt_h5_app/innovationPage?type=0",
            ggtopen:
              "https://wzqwt.chinalin.com/wt_h5_app/optionOpenAcct?BUSINESS_ID=4223",
            delistKzz:
              "https://wzqwt.chinalin.com/wt_h5_app/promotionPage?BUSINESS_ID=4225",
            infraFund:
              "https://wzqwt.chinalin.com/wt_h5_app/convertInfrastructurePage/00",
          },
        }),
        s(t(e), "accountLockConf", {
          buttonName: "密码解锁",
          routerName: "BizAccountUnlock",
          tips: "1.在交易日"
            .concat(h.base.contactTime, "拨打")
            .concat(h.base.name, "客服：")
            .concat(
              h.base.tel,
              "\n      2.点击密码解锁，按照页面提示完成操作即可快速解锁"
            ),
        }),
        e
      );
    }
    return e(c);
  })(c.BrokerHall))();
exports.hall = w;
