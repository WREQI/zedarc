var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var i = Object.defineProperty,
  n = function (e, t, n) {
    return (
      (function (e, t, s) {
        t in e
          ? i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: s,
            })
          : (e[t] = s);
      })(e, "symbol" != s(t) ? t + "" : t, n),
      n
    );
  },
  o = new ((function () {
    return e(function e() {
      t(this, e),
        n(this, "appid", "wx93273579df1046e3"),
        n(this, "id", "GJZQ"),
        n(this, "name", "国金证券"),
        n(this, "fullName", "guojin"),
        n(this, "code", 15900),
        n(this, "domain", "wzq.gjzq.com.cn"),
        n(this, "backupDomain", [
          "wzqa.gjzq.com.cn",
          "wzqb.gjzq.com.cn",
          "guojin.zxgstock.com",
        ]),
        n(this, "testDomain", "test-guojin.tentrees.cn"),
        n(this, "monitor", { switch: !1 }),
        n(this, "stat", { date: !0 }),
        n(this, "loglevel", -1),
        n(this, "sentry", "2021-11-24 23:59:59"),
        n(this, "tel", "95310"),
        n(this, "contactTime", "08:30-18:00"),
        n(this, "speed", {
          enable: !0,
          DOMAINID1: 22395,
          DOMAINID2: 1,
          ZXG_DOMAINID1: 22427,
          ZXG_DOMAINID2: 1,
        }),
        n(this, "officialAccounts", "国金证券"),
        n(this, "supportWxOpenIdBind", !0),
        n(this, "tabBar", {
          color: "var(--text-color-1)",
          selectedColor: "var(--color-red)",
          list: [
            {
              pagePath: "/choose/index",
              text: "自选",
              iconPath: "nav_ic_choose_15900.svg",
              selectedIconPath: "nav_ic_choose_sel_15900.svg",
            },
            {
              pagePath: "/choose/hq",
              text: "行情",
              iconPath: "nav_ic_market_15900.svg",
              selectedIconPath: "nav_ic_market_sel_15900.svg",
            },
            {
              pagePath: "/asset/index",
              text: "交易",
              iconPath: "nav_ic_open_15900.svg",
              selectedIconPath: "nav_ic_open_sel_15900.svg",
            },
            {
              pagePath: "/account/index",
              text: "我的",
              iconPath: "nav_ic_user_15900.svg",
              selectedIconPath: "nav_ic_user_sel_15900.svg",
            },
          ],
        }),
        n(
          this,
          "mpIndex",
          "https://webapps.yongjinbao.com.cn/yjbwebcommon/common/page/gjInfo.html?utm_term=copyurl"
        );
    });
  })())();
exports.base = o;
