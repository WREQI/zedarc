var e = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  o = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  c = function (e, n, s) {
    return (
      (function (e, n, s) {
        n in e
          ? a(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: s,
            })
          : (e[n] = s);
      })(e, "symbol" != o(n) ? n + "" : n, s),
      s
    );
  },
  r = new ((function (o) {
    i(r, o);
    var a = t(r);
    function r() {
      var e;
      return (
        n(this, r),
        (e = a.apply(this, arguments)),
        c(s(e), "maskAccountInfo", !0),
        c(s(e), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0 },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !0 },
          degree: { show: !0, enable: !1 },
          mobilephone: { show: !0, enable: !0 },
          contactaddr: { show: !0, enable: !1 },
          job: { show: !0, enable: !1 },
          companyaddr: { show: !0, enable: !1 },
          posttitle: { show: !1, enable: !1 },
          yearincome: { show: !1, enable: !1 },
          cardtailnumber: { show: !0, enable: !0 },
          riskmodel: { show: !0, enable: !0 },
          jobfilter: { enable: !1 },
          profileupdate: { show: !1 },
          cancelaccount: { show: !0 },
        }),
        c(s(e), "gem", {
          openMatchRisk: !1,
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        c(s(e), "st", {
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        c(s(e), "kcOpen", {
          passScore: 80,
          questions: 10,
          maxTestTimes: 9999,
          MININAL_RISK_LEVEL: [2, 3, 4, 5],
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        c(s(e), "kzz", { oneTimeOpen: !0 }),
        c(s(e), "loginInfo", !1),
        c(s(e), "third", {
          enable: !0,
          tccMode: "2",
          needSection: !0,
          entry: {
            openstock:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/openStock/index",
            resetpwd:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/resetPwd/index",
            kzzopen:
              "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/signkzz/index",
            gem: "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/opencyb/index",
            kcb: "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/openkcb/index",
            st: "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/openst/index",
            changephone:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/resetmobile/index",
            idcard:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/updateIdCard/index",
            bankcardchange:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/changebank/index",
            shareholder:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/addAccount/index",
            revokeSh:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/cancelreg/index",
            kechuanggrowth:
              "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/openkcb/index",
            shortTerm:
              "https://weixin.guosen.com.cn/act/actcenter/strategy_tool/dist/pages/wzq_dxzs.html",
            cancelaccount:
              "https://weixin.guosen.com.cn/wxh5/busi/#/pages/cancelaccount/index",
            risk: "https://weixin.guosen.com.cn/wxh5/busi/index.html#/pages/risk/index",
          },
        }),
        c(s(e), "supportedBanks", [
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
        ]),
        c(s(e), "bankcard", {
          changePreCheck: !0,
          startTime: [0, 0],
          endTime: [24, 0],
          checkTradeDay: !1,
        }),
        c(s(e), "password", { checkBrokerUnion: !0 }),
        e
      );
    }
    return e(r);
  })(require("../index.js").BrokerHall))();
exports.hall = r;
