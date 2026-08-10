var e = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var c = Object.defineProperty,
  i = function (e, n, i) {
    return (
      (function (e, n, t) {
        n in e
          ? c(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[n] = t);
      })(e, "symbol" != t(n) ? n + "" : n, i),
      i
    );
  },
  s = new ((function () {
    return e(function e() {
      n(this, e),
        i(this, "appid", "wx821cd4a621f449e7"),
        i(this, "id", "CMSCHINA"),
        i(this, "name", "招商证券"),
        i(this, "fullName", "zhaoshang"),
        i(this, "code", 10800),
        i(this, "domain", "wzq.cms-cloud.com.cn"),
        i(this, "backupDomain", [
          "wzq.newone.com.cn",
          "wzqa.newone.com.cn",
          "wzqb.newone.com.cn",
          "wzq.cmschina.com",
          "wzq.cmschina.com.cn",
          "zhaoshang.zxgstock.com",
          "wzq.cms-cloud.com.cn",
          "wzqa.cms-cloud.com.cn",
          "wzqb.cms-cloud.com.cn",
        ]),
        i(this, "testDomain", ""),
        i(this, "monitor", { switch: !0 }),
        i(this, "stat", { date: !0 }),
        i(this, "loglevel", -1),
        i(this, "sentry", !1),
        i(this, "tel", 95565),
        i(this, "contactTime", "08:30-21:00"),
        i(this, "speed", {
          enable: !0,
          DOMAINID1: 22333,
          DOMAINID2: 1,
          ZXG_DOMAINID1: 22425,
          ZXG_DOMAINID2: 1,
        }),
        i(this, "officialAccounts", "未设置"),
        i(this, "supportWxOpenIdBind", !0),
        i(
          this,
          "mpIndex",
          "https://news.newone.com.cn/public/newone/html/zszqjj/index.html"
        ),
        i(this, "supportLoginCodeInMainXcx", !0);
    });
  })())();
exports.base = s;
