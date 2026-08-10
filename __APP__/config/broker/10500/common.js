var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
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
      })(e, "symbol" != a(t) ? t + "" : t, i),
      i
    );
  },
  u = new ((function (a) {
    r(u, a);
    var s = n(u);
    function u() {
      var e;
      return (
        t(this, u),
        (e = s.apply(this, arguments)),
        l(i(e), "enableComplexPassword", !1),
        l(i(e), "RISK", {
          1: {
            value: 1,
            text: "C1保守型",
            img: "risk/conservative-white@3x.png",
          },
          2: { value: 2, text: "C2谨慎型", img: "risk/balanced-white@3x.png" },
          3: { value: 3, text: "C3稳健型", img: "risk/balanced-white@3x.png" },
          4: { value: 4, text: "C4积极型", img: "risk/positive-white@3x.png" },
          5: { value: 5, text: "C5进取型", img: "risk/radical-white@3x.png" },
          6: {
            value: 6,
            text: "C0特别保护型",
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
            text: "保守型（最低类别）",
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
            text: "保守型（最低类别）",
            img: "risk/conservative-white@3x.png",
          },
        }),
        l(i(e), "INVEST_TERM", {
          USER: {
            0: "短期——1年以内（可开通或购买最短投资期限在1年期以内的业务或产品）",
            1: "中期——3年以内（可开通或购买最短投资期限3年期以内的业务或产品）",
            2: "中长期——在5年以内（可开通或购买最短投资期限5年期以内的业务或产品）",
            3: "期限不限——（可开通或购买最短投资期限为任意期限的业务或产品）",
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
          1: {
            enable: !0,
            strict: !0,
            text: "已过期",
            customDialog: !0,
            title: "适当性结果提醒",
            message:
              "根据适当性管理相关规定，我公司每两年对客户适当性要素进行重新评估，若您未及时完成重新评估，将可能导致您无法继续登录使用账户。",
            confirmButtonText: "去重新评估",
            showCancelButton: !1,
          },
          2: { enable: !1, strict: !1, text: "不完整" },
          3: {
            enable: !0,
            strict: !0,
            text: "未测评",
            customDialog: !0,
            title: "适当性结果提醒",
            message:
              "根据适当性管理相关规定，我公司每两年对客户适当性要素进行重新评估，若您未及时完成重新评估，将可能导致您无法继续登录使用账户。",
            confirmButtonText: "去重新评估",
            showCancelButton: !1,
          },
          4: {
            enable: !0,
            strict: !1,
            text: "即将到期",
            message:
              "您的风险承受能力测评结果即将过期，请及时更新以免影响后续使用证券账户",
          },
        }),
        e
      );
    }
    return e(u);
  })(require("../index.js").BrokerCommon))();
exports.common = u;
