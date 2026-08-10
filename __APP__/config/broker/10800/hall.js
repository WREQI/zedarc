var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  c = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var o = Object.defineProperty,
  h = function (e, t, c) {
    return (
      (function (e, t, c) {
        t in e
          ? o(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: c,
            })
          : (e[t] = c);
      })(e, "symbol" != s(t) ? t + "" : t, c),
      c
    );
  },
  r = require("../index.js"),
  i = require("../../../utils/getPlatform.js"),
  l = require("./base.js"),
  m = i.getPlatform(),
  b = (m.isMpPlugin, m.isWeixin),
  p = new ((function (s) {
    a(r, s);
    var o = n(r);
    function r() {
      var e;
      return (
        t(this, r),
        (e = o.apply(this, arguments)),
        h(c(e), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0, enable: b },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !0 },
          degree: { show: !0, enable: !0 },
          mobilephone: { show: !0, enable: !0 },
          contactaddr: { show: !0, enable: !0 },
          job: { show: !0, enable: !0 },
          companyaddr: { show: !0, enable: !0 },
          posttitle: { show: !0, enable: !0 },
          yearincome: { show: !0, enable: !0 },
          cardtailnumber: { show: !0, enable: !0 },
          riskmodel: { show: !0, enable: !0 },
          jobfilter: { enable: !0 },
          profileupdate: { show: !1 },
          accountquery: { show: !0 },
        }),
        h(c(e), "gem", {
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !0, inrange: !0 },
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "金融产品或金融服务适当性评估结果确认书",
            unmatch: "金融产品或金融服务适当性评估结果确认书",
          },
        }),
        h(c(e), "st", {
          protocol: {
            match: "金融产品或金融服务适当性评估结果确认书",
            unmatch: "金融产品或金融服务适当性评估结果确认书",
          },
          signCountDown: 10,
          hasTwoFxjssProtocol: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !0, inrange: !0 },
        }),
        h(c(e), "kzz", {
          signCountDown: 10,
          hasTwoFxjssProtocol: !0,
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !0, inrange: !0 },
        }),
        h(c(e), "kcOpen", {
          passScore: 90,
          questions: 10,
          maxTestTimes: 5,
          MININAL_RISK_LEVEL: [2, 3, 4, 5],
          protocol: {
            match: "金融产品或金融服务适当性评估结果确认书",
            unmatch: "金融产品或金融服务适当性评估结果确认书",
          },
          openMatchRisk: !0,
          openMatch: { risk: !0, term: !0, inrange: !0 },
        }),
        h(c(e), "newstock", {
          kcb: !0,
          booking: {
            protocols: [
              { name: "预约打新风险揭示书", key: "cmschina-yydxfxjss" },
              { name: "预约打新用户服务协议", key: "cmschina-yydxyhfwxy" },
            ],
            matchProtocol: {
              name: "金融产品或金融服务适当性评估结果确认书",
              key: "cmschina_newstock_match",
            },
            need_match: !0,
          },
        }),
        h(c(e), "setting", { debt: !0 }),
        h(c(e), "business", { kcb: !0 }),
        h(c(e), "loginInfo", !0),
        h(c(e), "bstmark", { buttonText: "免费体验" }),
        h(c(e), "resetpwd", {
          isHold: !1,
          holdTips: "",
          holdButton: "",
          holdUrl: "",
          videoProtocol: {
            useWrapStyle: !1,
            hideCheckBox: !1,
            defaultChecked: !1,
            signText: "请阅读并确认签署",
            allProtocolName: "",
            tilingList: [
              { name: "《人脸信息授权协议》", key: "cmschina_rlxxsqxy" },
            ],
          },
        }),
        h(c(e), "risk", {
          protocolInfo: {
            useWrapStyle: !1,
            hideCheckBox: !0,
            signText: "阅读并签署",
            allProtocolName: "",
            tilingList: [
              {
                name: "《金融业务或金融服务适当性后续评估结果告知函》",
                key: "cmschina_risktest_update",
                bizType: "1",
                buttonType: "sign",
              },
            ],
          },
        }),
        h(c(e), "supportedBanks", [
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
        h(c(e), "needCompress", !0),
        h(c(e), "bankcard", {
          changePreCheck: !0,
          emptyCard: { canAddCard: !0 },
        }),
        h(c(e), "third", {
          enable: !0,
          tccMode: "0",
          needSection: !0,
          extraOption: { accesschnl: "wzq" },
          entry: {
            bankcardchange: "https://t-pub.cmschina.com/wzqh5ywbl/sfcg/ghyhk",
            delistKzz: "https://t-pub.cmschina.com/wzqh5ywbl/tszlkzz",
            wakeAccount: "https://t-pub.cmschina.com/wzqh5ywbl/xmjh",
            shareholder: "https://t-pub.cmschina.com/wzqh5ywbl/tjgdk",
            bankcarddelete:
              "https://t-pub.cmschina.com/wzqh5ywbl/removecard/verify",
            changemastercard:
              "https://t-pub.cmschina.com/wzqh5ywbl/zfchange/verify",
            modifyFundLimit: "https://t-pub.cmschina.com/wzqh5ywbl/zjed",
            bankcardadd: "https://t-pub.cmschina.com/wzqh5ywbl/addcard/add",
            risk: "https://t-pub.cmschina.com/app/tgfxcp/#/",
            ggtopen: "https://t-pub.cmschina.com/wzqh5ywbl/ggt",
            kcb: "https://t-pub.cmschina.com/wzqh5ywbl/kcb",
            gem: "https://t-pub.cmschina.com/wzqh5ywbl/ktcyb",
            kechuanggrowth: "https://t-pub.cmschina.com/wzqh5ywbl/kcbcz",
            st: "https://t-pub.cmschina.com/wzqh5ywbl/kzz?type=ststock",
            bj: "https://t-pub.cmschina.com/wzqh5ywbl/gzkh",
            stocktransfer: "https://t-pub.cmschina.com/wzqh5ywbl/tjgdk",
            accountquery: "https://t-pub.cmschina.com/wzqh5ywbl/zqzhcx",
            delisting: "https://t-pub.cmschina.com/wzqh5ywbl/tsgpzl/jieshao",
            infraFund: "https://t-pub.cmschina.com/wzqh5ywbl/jcssjj",
            kzzopen: "https://t-pub.cmschina.com/wzqh5ywbl/kzz",
          },
        }),
        h(c(e), "accountLockConf", {
          buttonName: "重置密码",
          routerName: "BizPwdReset",
          tips: "1.在交易日"
            .concat(l.base.contactTime, "联系")
            .concat(l.base.name, "客服，通过")
            .concat(
              l.base.tel,
              "-5-1-4流程可自助解锁\n      2.点击重置密码进行密码重置，重置成功后会自动解锁（新密码要与旧密码不同）"
            ),
        }),
        h(c(e), "canShare", !1),
        h(c(e), "idcard", { hideBulletin: !0 }),
        h(c(e), "permissionUnlock", { hideLinkageCard: !0 }),
        e
      );
    }
    return e(r);
  })(r.BrokerHall))();
exports.hall = p;
