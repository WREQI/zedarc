var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  s = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  t = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var i = Object.defineProperty,
  l = function (e, r, n) {
    return (
      (function (e, r, n) {
        r in e
          ? i(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      })(e, "symbol" != t(r) ? r + "" : r, n),
      n
    );
  },
  a = new ((function (t) {
    s(a, t);
    var i = o(a);
    function a() {
      var e;
      return (
        r(this, a),
        (e = i.apply(this, arguments)),
        l(n(e), "personal", {
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
          profileupdate: { show: !0 },
        }),
        l(n(e), "gem", {
          openMatchRisk: !1,
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "适当性风险警示及客户确认书",
            unmatch: "适当性风险警示及客户确认书",
          },
        }),
        l(n(e), "st", {
          protocol: {
            match: "适当性风险警示及客户确认书",
            unmatch: "适当性风险警示及客户确认书",
          },
        }),
        l(n(e), "kcOpen", {
          afterClosed: !1,
          passScore: 80,
          questions: 10,
          maxTestTimes: 9999,
          MININAL_RISK_LEVEL: [2, 3, 4, 5],
          protocol: {
            match: "适当性风险警示及客户确认书",
            unmatch: "适当性风险警示及客户确认书",
          },
        }),
        l(n(e), "loginInfo", !1),
        l(n(e), "supportedBanks", [
          "ICBC",
          "CCB",
          "ABC",
          "GDB",
          "BOC",
          "CMB",
          "SPDB",
          "CEB",
          "HXB",
          "PAB",
          "BOG",
          "DGCB",
          "COMM",
          "NJCB",
          "BOJ",
          "PSBC",
          "CIB",
          "CMBC",
          "BOSH",
          "CITIC",
          "NBCB",
        ]),
        l(n(e), "bankcard", { changePreCheck: !0 }),
        l(n(e), "third", {
          enable: !0,
          tccMode: "2",
          needSection: !0,
          entry: {
            resetpwd:
              "https://store.gf.com.cn/gfhall/reset-password/#/reset-password/index",
            idcard:
              "https://store.gf.com.cn/super/mobile/#/online/update-idcard",
            kzzopen:
              "https://store.gf.com.cn/super/mobile/#/online/kzz-right-open",
            gem: "https://store.gf.com.cn/super/mobile/#/online/gem-transfer-setting",
            bankcardchange:
              "https://store.gf.com.cn/super/mobile/#/online/third-party-replace/index",
            risk: "https://store.gf.com.cn/super/mobile/#/online/risk-eval",
            changepwd:
              "https://store.gf.com.cn/super/mobile/#/online/password-modify?type=trade",
            kcb: "https://store.gf.com.cn/super/mobile/#/business/open-kcb-guide",
            kechuanggrowth:
              "https://store.gf.com.cn/super/mobile/#/business/open-kcb-guide",
            changephone:
              "https://store.gf.com.cn/super/mobile/#/online/user-data?key=mobileTel",
            personal: "https://store.gf.com.cn/super/mobile/#/online/user-data",
            st: "https://store.gf.com.cn/super/mobile/#/online/risk-warning/index",
            delisting:
              "https://store.gf.com.cn/super/mobile/#/online/delisted-stock-rights/index",
            delistKzz:
              "https://store.gf.com.cn/super/mobile/#/online/delisted-kzz-rights/index",
            infraFund:
              "https://store.gf.com.cn/super/mobile/#/online/reits-setting",
            shareholder:
              "https://store.gf.com.cn/super/mobile/#/online/open-account-setting",
          },
        }),
        e
      );
    }
    return e(a);
  })(require("../index.js").BrokerHall))();
exports.hall = a;
