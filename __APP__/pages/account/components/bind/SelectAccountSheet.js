require("../../../../app.js");
var t = require("../../../../common/vendor.js");
Math || t.unref(e)();
var e = function () {
    return "../../../../common/components/ActionSheet/index.js";
  },
  c = t.defineComponent({
    __name: "SelectAccountSheet",
    props: {
      visible: { type: Boolean, default: !1 },
      accounts: {
        default: function () {
          return [];
        },
      },
      accountCalled: { default: "资金账号" },
      currentAccount: { default: "" },
    },
    emits: ["select", "close"],
    setup: function (e, c) {
      var n = c.emit;
      function o() {
        n("close");
      }
      return function (e, c) {
        return {
          a: t.f(e.accounts, function (c, o, u) {
            return t.e(
              { a: t.t(c.account), b: c.account === e.currentAccount },
              (c.account, e.currentAccount, {}),
              {
                c: c.account,
                d: t.o(function (t) {
                  return (function (t) {
                    n("select", t);
                  })(c);
                }, c.account),
              }
            );
          }),
          b: t.o(o),
          c: t.p({
            value: e.visible,
            title: "请选择".concat(e.accountCalled),
            "picker-style": !0,
            "close-button": !0,
          }),
        };
      };
    },
  }),
  n = t._export_sfc(c, [["__scopeId", "data-v-638ff186"]]);
wx.createComponent(n);
