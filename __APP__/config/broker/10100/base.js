var i = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  s = function (i, e, s) {
    return (
      (function (i, e, t) {
        e in i
          ? n(i, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (i[e] = t);
      })(i, "symbol" != t(e) ? e + "" : e, s),
      s
    );
  },
  a = new ((function () {
    return i(function i() {
      e(this, i),
        s(this, "appid", "wx8c0059a9f61679d1"),
        s(this, "id", "CHINALIONS"),
        s(this, "name", "华林证券"),
        s(this, "fullName", "hualin"),
        s(this, "code", 10100),
        s(this, "domain", "wzq.chinalions.cn"),
        s(this, "backupDomain", [
          "wzqa.chinalions.cn",
          "wzqb.chinalions.cn",
          "hualin.zxgstock.com",
        ]),
        s(this, "testDomain", ""),
        s(this, "gmDomain", [
          "wzqgm.chinalions.cn",
          "wzqgma.chinalions.cn",
          "wzqgmb.chinalions.cn",
        ]),
        s(this, "monitor", { switch: !0 }),
        s(this, "stat", { date: !0 }),
        s(this, "loglevel", -1),
        s(this, "sentry", "week-3"),
        s(this, "tel", "400-188-3888"),
        s(this, "contactTime", "08:30-18:00"),
        s(this, "speed", {
          enable: !0,
          DOMAINID1: 22394,
          DOMAINID2: 1,
          ZXG_DOMAINID1: 22426,
          ZXG_DOMAINID2: 1,
        }),
        s(this, "officialAccounts", "未设置"),
        s(this, "supportWxOpenIdBind", !0),
        s(this, "mpIndex", "https://ht.chinalin.com/p/about-hl.html"),
        s(this, "supportLoginCodeInMainXcx", !0);
    });
  })())();
exports.base = a;
