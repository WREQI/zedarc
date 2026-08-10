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
  u = new ((function (n) {
    r(u, n);
    var s = a(u);
    function u() {
      var e;
      return (
        t(this, u),
        (e = s.apply(this, arguments)),
        l(i(e), "foreverExp", "30001231"),
        l(i(e), "enableComplexPassword", !1),
        l(i(e), "RISK", {
          1: {
            value: 1,
            text: "保守型",
            img: "risk/conservative-white@3x.png",
          },
          2: { value: 2, text: "谨慎型", img: "risk/balanced-white@3x.png" },
          3: { value: 3, text: "稳健型", img: "risk/balanced-white@3x.png" },
          4: { value: 4, text: "积极型", img: "risk/positive-white@3x.png" },
          5: { value: 5, text: "激进型", img: "risk/radical-white@3x.png" },
          6: {
            value: 6,
            text: "特殊保护型",
            img: "risk/conservative-white@3x.png",
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
            text: "C1保守型-最低等级",
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
            value: 10,
            text: "C1保守型-最低等级",
            img: "risk/conservative-white@3x.png",
          },
        }),
        l(i(e), "RISK_REMIND", {
          remind: !1,
          0: { enable: !1, strict: !1, text: "未过期" },
          1: { enable: !1, strict: !1, text: "已过期" },
          2: { enable: !1, strict: !1, text: "不完整" },
          3: { enable: !1, strict: !1, text: "未测评" },
          4: { enable: !1, strict: !1, text: "即将到期" },
        }),
        l(i(e), "enableHandleSensitiveInformation", !0),
        l(i(e), "zxgTradeSplitAbtModuleId", "ui_layer_1740987281748"),
        e
      );
    }
    return e(u);
  })(require("../index.js").BrokerCommon))();
exports.common = u;
