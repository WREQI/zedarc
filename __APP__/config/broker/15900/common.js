var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  l = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != n(t) ? t + "" : t, i),
      i
    );
  },
  v = new ((function (n) {
    r(v, n);
    var s = a(v);
    function v() {
      var e;
      return (
        t(this, v),
        (e = s.apply(this, arguments)),
        l(i(e), "enableComplexPassword", !1),
        l(i(e), "RISK", {
          1: {
            value: 1,
            text: "C1（低风险承受）",
            img: "risk/conservative-white@3x.png",
          },
          2: {
            value: 2,
            text: "C2（中低风险承受）",
            img: "risk/balanced-white@3x.png",
          },
          3: {
            value: 3,
            text: "C3（中风险承受）",
            img: "risk/balanced-white@3x.png",
          },
          4: {
            value: 4,
            text: "C4（中高风险承受）",
            img: "risk/positive-white@3x.png",
          },
          5: {
            value: 5,
            text: "C5（高风险承受）",
            img: "risk/radical-white@3x.png",
          },
          7: {
            value: 7,
            text: "不完整",
            img: "risk/conservative-white@3x.png",
          },
          8: {
            value: 8,
            text: "未测评",
            img: "risk/conservative-white@3x.png",
          },
          9: {
            value: 9,
            text: "已过期",
            img: "risk/conservative-white@3x.png",
          },
          10: {
            value: 10,
            text: "C1（最低类别）",
            img: "risk/conservative-white@3x.png",
          },
          20: {
            value: 20,
            text: "专业投资者无需测评",
            img: "risk/conservative-white@3x.png",
            disable: !0,
          },
          21: {
            value: 21,
            text: "专业投资者(已过期)",
            img: "risk/conservative-white@3x.png",
          },
          INCOMPLETE: {
            value: 7,
            text: "不完整",
            img: "risk/conservative-white@3x.png",
          },
          NOTEVLUATED: {
            value: 8,
            text: "未测评",
            img: "risk/conservative-white@3x.png",
          },
          EXPIRED: {
            value: 9,
            text: "已过期",
            img: "risk/conservative-white@3x.png",
          },
          BS_LOWEST: {
            value: 11,
            text: "C1（最低类别）",
            img: "risk/conservative-white@3x.png",
          },
        }),
        l(i(e), "INVEST_TERM", {
          USER: {
            0: "短期（0-1年）",
            1: "中期（1-5年）",
            2: "长期（5年以上）",
            97: "短期",
            98: "中期",
            99: "长期",
          },
          PRODUCT: {
            0: "0-1年",
            1: "1年",
            2: "2年",
            3: "3年",
            4: "4年",
            5: "5年",
            6: "6年",
            7: "7年",
            8: "未测评",
            9: "已过期",
            97: "短期",
            98: "中期",
            99: "长期",
          },
        }),
        l(i(e), "RISK_REMIND", {
          remind: !0,
          third: !0,
          0: { enable: !1, strict: !1, text: "未过期" },
          1: { enable: !0, strict: !1, text: "已过期" },
          2: { enable: !1, strict: !1, text: "不完整" },
          3: { enable: !0, strict: !0, text: "未测评" },
          4: { enable: !0, strict: !1, text: "即将到期" },
        }),
        e
      );
    }
    return e(v);
  })(require("../index.js").BrokerCommon))();
exports.common = v;
