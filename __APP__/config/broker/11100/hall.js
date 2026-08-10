var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  l = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var c = Object.defineProperty,
  r = function (e, t, a) {
    return (
      (function (e, t, a) {
        t in e
          ? c(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            })
          : (e[t] = a);
      })(e, "symbol" != n(t) ? t + "" : t, a),
      a
    );
  },
  o = new ((function (n) {
    l(o, n);
    var c = s(o);
    function o() {
      var e;
      return (
        t(this, o),
        (e = c.apply(this, arguments)),
        r(a(e), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0 },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !0 },
          degree: { show: !0, enable: !1 },
          mobilephone: { show: !0, enable: !1 },
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
        r(a(e), "gem", {
          openMatchRisk: !1,
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        r(a(e), "st", {
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        r(a(e), "kcOpen", {
          passScore: 80,
          questions: 10,
          maxTestTimes: 9999,
          MININAL_RISK_LEVEL: [2, 3, 4, 5],
          protocol: {
            match: "适当性评估结果确认书",
            unmatch: "产品或服务不适当警示及投资者确认书",
          },
        }),
        r(a(e), "loginInfo", !1),
        r(a(e), "risk", {
          limitDayText: "1天",
          limitTime: 1,
          queryRealtimeLimit: !0,
        }),
        r(a(e), "kzz", { oneTimeOpen: !0 }),
        r(a(e), "supportedBanks", [
          "ICBC",
          "ABC",
          "BOC",
          "CCB",
          "COMM",
          "CMB",
          "PAB",
          "GDB",
          "SPDB",
          "CEB",
          "HXB",
          "BOJ",
          "BOG",
        ]),
        r(a(e), "newstock", { cancelSelectAll: !0 }),
        r(a(e), "bankcard", {
          changePreCheck: !0,
          emptyCard: { canAddCard: !0 },
        }),
        r(a(e), "third", {
          enable: !0,
          tccMode: "2",
          needSection: !0,
          needOpenid: !0,
          extraOption: { single: "true" },
          entry: {
            idcard:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#gxsfz-loading",
            changephone:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#xghrzsjh-list",
            bankcardchange:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#glyhk-update-notice",
            bankcardadd:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#glyhk-bind-notice",
            changepwd:
              "https://vmalltrans.csc108.com/txYwbl/main#modify-password-controller",
            resetpwd:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#czjymm-notice",
            risk: "https://vmalltrans.csc108.com/txYwbl/main#risk-index-controller",
            gem: "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#cyb-list",
            kzzopen:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#kzz-jumpPage",
            st: "https://vmalltrans.csc108.com/txYwbl/main#jsgp-business-info",
            delisting:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#tszl-loading",
            personal:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#grzlxg-modify-personaldata",
            kcb: "https://vmalltrans.csc108.com/txYwbl/main#technology-index",
            kechuanggrowth:
              "https://vmalltrans.csc108.com/txYwbl/main#technology-index",
            tgvip: "https://raweb.csc108.com/zntgv3/h5/tgvip",
            advisory_sign:
              "https://raweb.csc108.com/orders/new?sourceId=7&redirectMode=5&ch=14&productId=5301000001",
            stockSignal: "https://raweb.csc108.com/zntgv3/h5/tgvip",
            shareholder:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#zqzhjg-notice",
            ggtopen:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#ggt-notice",
            bj: "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#bjs-notice",
            infraFund:
              "https://vmalltrans.csc108.com/txYwbl/subYwbl/main#gm-notice",
          },
        }),
        e
      );
    }
    return e(o);
  })(require("../index.js").BrokerHall))();
exports.hall = o;
