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
  a = new ((function () {
    return e(function e() {
      t(this, e),
        n(this, "appid", "wx5e94b5ebebe246b0"),
        n(this, "id", "GUOSEN"),
        n(this, "name", "国信证券"),
        n(this, "fullName", "guoxin"),
        n(this, "code", 10900),
        n(this, "domain", "wzq.guosen.com.cn"),
        n(this, "backupDomain", ["wzqa.guosen.com.cn", "wzqb.guosen.com.cn"]),
        n(this, "testDomain", "test-guoxin.tentrees.cn"),
        n(this, "monitor", { switch: !1 }),
        n(this, "stat", { date: !0, domain: "wzqdata.guosen.com.cn" }),
        n(this, "loglevel", -1),
        n(this, "sentry", "2020-07-30 22:00:00"),
        n(this, "tel", "95536"),
        n(this, "contactTime", "08:30-18:00"),
        n(this, "speed", { enable: !0 }),
        n(this, "officialAccounts", "国信证券"),
        n(this, "tabBar", {
          color: "var(--text-color-1)",
          selectedColor: "var(--color-red)",
          list: [
            {
              pagePath: "/choose/index",
              text: "自选",
              iconPath: "nav_ic_choose_10900.svg",
              selectedIconPath: "nav_ic_choose_sel_10900.svg",
            },
            {
              pagePath: "/choose/hq",
              text: "行情",
              iconPath: "nav_ic_market_10900.svg",
              selectedIconPath: "nav_ic_market_sel_10900.svg",
            },
            {
              pagePath: "/asset/index",
              text: "交易",
              iconPath: "nav_ic_open_10900.svg",
              selectedIconPath: "nav_ic_open_sel_10900.svg",
            },
            {
              pagePath: "/account/index",
              text: "我的",
              iconPath: "nav_ic_user_10900.svg",
              selectedIconPath: "nav_ic_user_sel_10900.svg",
            },
          ],
        }),
        n(this, "mpIndex", "https://www.guosen.com.cn"),
        n(this, "supportPrivatizationReport", !0),
        n(this, "supportLoginCodeInMainXcx", !0);
    });
  })())();
exports.base = a;
