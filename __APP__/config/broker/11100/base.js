var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var i = Object.defineProperty,
  a = function (e, t, a) {
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
      })(e, "symbol" != s(t) ? t + "" : t, a),
      a
    );
  },
  c = new ((function () {
    return e(function e() {
      t(this, e),
        a(this, "appid", "wx8182de72a1713fb5"),
        a(this, "id", "ZHONGXINJIANTOU"),
        a(this, "name", "中信建投证券"),
        a(this, "fullName", "zhongxinjiantou"),
        a(this, "code", 11100),
        a(this, "domain", "wzq.csc108.com"),
        a(this, "backupDomain", ["wzqa.csc108.com", "wzqb.csc108.com"]),
        a(this, "testDomain", ""),
        a(this, "monitor", { switch: !0 }),
        a(this, "stat", { date: !0 }),
        a(this, "loglevel", -1),
        a(this, "sentry", "2020-07-30 22:00:00"),
        a(this, "tel", "95587"),
        a(this, "contactTime", "08:30-18:00"),
        a(this, "speed", { enable: !0 }),
        a(this, "officialAccounts", "中信建投"),
        a(this, "supportWxOpenIdBind", !0),
        a(this, "tabBar", {
          color: "var(--text-color-1)",
          selectedColor: "var(--color-red)",
          list: [
            {
              pagePath: "/choose/index",
              text: "自选",
              iconPath: "nav_ic_choose_11100.svg",
              selectedIconPath: "nav_ic_choose_sel_11100.svg",
            },
            {
              pagePath: "/choose/hq",
              text: "行情",
              iconPath: "nav_ic_market_11100.svg",
              selectedIconPath: "nav_ic_market_sel_11100.svg",
            },
            {
              pagePath: "/asset/index",
              text: "交易",
              iconPath: "nav_ic_open_11100.svg",
              selectedIconPath: "nav_ic_open_sel_11100.svg",
            },
            {
              pagePath: "/account/index",
              text: "我的",
              iconPath: "nav_ic_user_11100.svg",
              selectedIconPath: "nav_ic_user_sel_11100.svg",
            },
          ],
        }),
        a(this, "mpIndex", "https://e.csc108.com/wxPortal/main");
    });
  })())();
exports.base = c;
