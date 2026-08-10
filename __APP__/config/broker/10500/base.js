var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  i = function (e, t, i) {
    return (
      (function (e, t, a) {
        t in e
          ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            })
          : (e[t] = a);
      })(e, "symbol" != a(t) ? t + "" : t, i),
      i
    );
  },
  c = new ((function () {
    return e(function e() {
      t(this, e),
        i(this, "appid", "wx8d36debd2261346f"),
        i(this, "id", "GUANGFA"),
        i(this, "name", "广发证券"),
        i(this, "fullName", "guangfa"),
        i(this, "code", 10500),
        i(this, "domain", "wzq.gf.com.cn"),
        i(this, "backupDomain", ["wzqa.gf.com.cn", "wzqb.gf.com.cn"]),
        i(this, "testDomain", ""),
        i(this, "monitor", { switch: !1 }),
        i(this, "stat", { date: !0 }),
        i(this, "loglevel", -1),
        i(this, "sentry", "2020-07-30 22:00:00"),
        i(this, "tel", "95575"),
        i(this, "contactTime", "08:30-18:00"),
        i(this, "speed", { enable: !0 }),
        i(this, "officialAccounts", "广发证券"),
        i(this, "tabBar", {
          color: "var(--text-color-1)",
          selectedColor: "var(--color-primary)",
          list: [
            {
              pagePath: "/choose/index",
              text: "自选",
              iconPath: "nav_ic_choose_10500.svg",
              selectedIconPath: "nav_ic_choose_sel_10500.svg",
            },
            {
              pagePath: "/choose/hq",
              text: "行情",
              iconPath: "nav_ic_market_10500.svg",
              selectedIconPath: "nav_ic_market_sel_10500.svg",
            },
            {
              pagePath: "/asset/index",
              text: "交易",
              iconPath: "nav_ic_open_10500.svg",
              selectedIconPath: "nav_ic_open_sel_10500.svg",
            },
            {
              pagePath: "/account/index",
              text: "我的",
              iconPath: "nav_ic_user_10500.svg",
              selectedIconPath: "nav_ic_user_sel_10500.svg",
            },
          ],
        }),
        i(
          this,
          "mpIndex",
          "https://hd.gf.com.cn/magic/eco/runtime/release/63523040349d6e014af4b14f?appType=ytj"
        ),
        i(this, "supportLoginCodeInMainXcx", !0);
    });
  })())();
exports.base = c;
