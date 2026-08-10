var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var c = Object.defineProperty,
  s = function (e, t, s) {
    return (
      (function (e, t, i) {
        t in e
          ? c(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != i(t) ? t + "" : t, s),
      s
    );
  },
  a = new ((function () {
    return e(function e() {
      t(this, e),
        s(this, "appid", "wxe1e9715c9b3f7904"),
        s(this, "id", "ZHONGJINCAIFU"),
        s(this, "name", "中金财富"),
        s(this, "fullName", "zhongjincaifu"),
        s(this, "code", 12800),
        s(this, "domain", "wzq.ciccwm.com"),
        s(this, "backupDomain", ["wzqa.ciccwm.com", "wzqb.ciccwm.com"]),
        s(this, "testDomain", ""),
        s(this, "monitor", { switch: !0 }),
        s(this, "stat", { date: !0 }),
        s(this, "loglevel", -1),
        s(this, "sentry", !0),
        s(this, "tel", "95532"),
        s(this, "contactTime", "08:30-18:00"),
        s(this, "speed", { enable: !0 }),
        s(this, "officialAccounts", "中金财富"),
        s(this, "tabBar", {
          color: "var(--text-color-1)",
          selectedColor: "var(--color-red)",
          list: [
            {
              pagePath: "/choose/index",
              text: "自选",
              iconPath: "nav_ic_choose_12800.svg",
              selectedIconPath: "nav_ic_choose_sel_12800.svg",
            },
            {
              pagePath: "/choose/hq",
              text: "行情",
              iconPath: "nav_ic_market_12800.svg",
              selectedIconPath: "nav_ic_market_sel_12800.svg",
            },
            {
              pagePath: "/asset/index",
              text: "交易",
              iconPath: "nav_ic_open_12800.svg",
              selectedIconPath: "nav_ic_open_sel_12800.svg",
            },
            {
              pagePath: "/account/index",
              text: "我的",
              iconPath: "nav_ic_user_12800.svg",
              selectedIconPath: "nav_ic_user_sel_12800.svg",
            },
          ],
        }),
        s(
          this,
          "mpIndex",
          "https://inter.ciccwm.com/ipd/web/commonRichSchool/home?tag=fuwuhao1&short_code=wnZqzC83q9"
        ),
        s(this, "supportLoginCodeInMainXcx", !0);
    });
  })())();
exports.base = a;
