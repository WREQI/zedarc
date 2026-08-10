var t = require("../../../@babel/runtime/helpers/createClass"),
  c = require("../../../@babel/runtime/helpers/classCallCheck"),
  e = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  o = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  m = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  h = function (t, c, e) {
    return (
      (function (t, c, e) {
        c in t
          ? a(t, c, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            })
          : (t[c] = e);
      })(t, "symbol" != m(c) ? c + "" : c, e),
      e
    );
  },
  p = require("../index.js"),
  i = require("../../../utils/getPlatform.js").getPlatform(),
  s = i.isLctXcx,
  r = i.isOEM,
  l = new ((function (m) {
    o(p, m);
    var a = n(p);
    function p() {
      var t;
      return (
        c(this, p),
        (t = a.apply(this, arguments)),
        h(e(t), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0 },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !s },
          degree: { show: !0, enable: !1 },
          mobilephone: { show: !0, enable: !1 },
          contactaddr: { show: !0, enable: !1 },
          job: { show: !0, enable: !1 },
          companyaddr: { show: !0, enable: !1 },
          posttitle: { show: !0, enable: !1 },
          yearincome: { show: !1, enable: !1 },
          cardtailnumber: { show: !0, enable: !0 },
          riskmodel: { show: !0, enable: !0 },
          jobfilter: { enable: !1 },
          profileupdate: { show: !0 },
        }),
        h(e(t), "gem", {
          openMatchRisk: !1,
          allowRiskLevel: [1, 2, 3, 4, 5],
          protocol: {
            match: "适当性匹配意见及投资者确认书",
            unmatch: "产品或服务风险警示及投资者确认书",
          },
          commission: {
            show: !0,
            text: "本人佣金费率详见",
            protocol: [
              {
                name: "《佣金费率告知及确认书》",
                key: "zhongjincaifu_yjflgzjqrs",
                commissionType: "gem",
              },
            ],
          },
        }),
        h(e(t), "st", {
          protocol: {
            match: "适当性匹配意见及投资者确认书",
            unmatch: "产品或服务风险警示及投资者确认书",
          },
          commission: {
            show: !0,
            text: "本人佣金费率详见",
            protocol: [
              {
                name: "《佣金费率告知及确认书》",
                key: "zhongjincaifu_yjflgzjqrs",
                commissionType: "st",
              },
            ],
          },
        }),
        h(e(t), "kcOpen", {
          passScore: 100,
          questions: 10,
          maxTestTimes: 9999,
          MININAL_RISK_LEVEL: [1, 2, 3, 4, 5],
          protocol: {
            match: "适当性匹配意见及投资者确认书",
            unmatch: "产品或服务风险警示及投资者确认书",
          },
          commission: {
            show: !0,
            text: "本人佣金费率详见",
            protocol: [
              {
                name: "《佣金费率告知及确认书》",
                key: "zhongjincaifu_yjflgzjqrs",
                commissionType: "kcb",
              },
            ],
          },
        }),
        h(e(t), "kzz", {
          commission: {
            show: !0,
            text: "本人佣金费率详见",
            protocol: [
              {
                name: "《佣金费率告知及确认书》",
                key: "zhongjincaifu_yjflgzjqrs",
                commissionType: "kzz",
              },
            ],
          },
        }),
        h(e(t), "newstock", { kcb: !0 }),
        h(e(t), "setting", { debt: !0 }),
        h(e(t), "business", { kcb: !0 }),
        h(e(t), "resetpwd", {
          isHold: !0,
          holdTips: "应监管合规要求，请前往中金财富APP进行密码重置",
          holdButton: "下载中金财富APP",
          holdUrl: "https://www.ciccwm.com/ciccwmweb/sjpage/mobile_zzt.html",
        }),
        h(e(t), "loginInfo", !1),
        h(e(t), "supportedBanks", [
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
          "BOJ",
        ]),
        h(e(t), "bankcard", { changePreCheck: !0 }),
        h(e(t), "password", { change: { union: !0 } }),
        h(e(t), "third", {
          enable: !0,
          tccMode: "0",
          needSection: !1,
          needOpenid: !0,
          entry: {
            resetpwd:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://web.ciccwm.com/zzt/app/internet-hall/#/password-reset/entrance"
                )
              ),
            bj: "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
              encodeURIComponent(
                "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=bjs"
              )
            ),
            stocktransfer:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=append"
                )
              ),
            idcard:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=impInfoModify"
                )
              ),
            bankcardchange:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=thirdbank"
                )
              ),
            kzzopen:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=kzzkt"
                )
              ),
            debtopen:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=nhgkt"
                )
              ),
            gem: "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
              encodeURIComponent(
                "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=cyb"
              )
            ),
            kcb: "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
              encodeURIComponent(
                "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=kcb"
              )
            ),
            kechuanggrowth:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=kcbczc"
                )
              ),
            st: "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
              encodeURIComponent(
                "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=fxjs"
              )
            ),
            changephone:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=updatezl"
                )
              ),
            changepwd:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=changepassword"
                )
              ),
            risk: "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
              encodeURIComponent(
                "https://web.ciccwm.com/zzt/app/risk-assessment/index.html#/riskIndex?back=1&channel_fm=wt_005"
              )
            ),
            personal:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=updatezl"
                )
              ),
            shareholder:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=append"
                )
              ),
            MarginReserveRedirect:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=preMarginTrading&style=blue&backurl=https%3A%2F%2Fwzq.ciccwm.com%2Fmp%2Fv2%2Findex.html"
                )
              ),
            applyIndex: r
              ? "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                  encodeURIComponent(
                    "https://web.ciccwm.com/zzt/app/stock/#/kaihu?channel_n=wxfwh"
                  )
                )
              : "",
            assetIndex: r
              ? "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                  encodeURIComponent(
                    "https://web.ciccwm.com/zzt/app/stock/#/trade/home?channel_n=wxfwh"
                  )
                )
              : "",
            bind: r
              ? "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                  encodeURIComponent(
                    "https://web.ciccwm.com/zzt/app/account/#/"
                  )
                )
              : "",
            ggtopen:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://sbc.ciccwm.com/h5/m/ygt/index.html#!/account/jumpPage.html?source=wechat&type=ggtqxkt"
                )
              ),
            jifenProductDetail:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://act.ciccwm.com/visual-creation/render.html?id=3595"
                )
              ),
            bandAssist:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://act.ciccwm.com/visual-creation/render.html?id=3777"
                )
              ),
            bandAssistTenpay:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://inter.ciccwm.com/h5/wzq-web/redirect"
                )
              ),
            bandAssistOrder:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://inter.ciccwm.com/h5/wzq-web/redirect?type=orderDetail"
                )
              ),
            bandAssistFollowUp:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://inter.ciccwm.com/h5/wzq-web/redirect?type=survey"
                )
              ),
            advisory_intro:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://act.ciccwm.com/visual-creation/render.html?id=3821"
                )
              ),
            advisory_sign:
              "https://web.ciccwm.com/zzt/app/login/wxfwh.html?targetUrl=".concat(
                encodeURIComponent(
                  "https://intertest.ciccwm.com/h5/wzq-web/agreement"
                )
              ),
          },
        }),
        t
      );
    }
    return t(p);
  })(p.BrokerHall))();
exports.hall = l;
