require("../../../../app.js");
var e = require("../../../../common/components/Dialog/index.js"),
  n = require("../../../../common/vendor.js"),
  t = {
    props: {
      bankAbbr: { type: String, required: !0 },
      bankName: { type: String, required: !0 },
      bankCode: { type: String, required: !0 },
      serialNum: { type: String, required: !0 },
      cardNum: { type: String, required: !0 },
      selected: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      isOnceCard: { type: [Boolean, String], default: !1 },
      lastChosen: { type: Boolean, default: !1 },
      actConfig: { type: Object, default: function () {} },
    },
    emits: ["click"],
    setup: function (t, a) {
      var r = !1;
      return {
        selectCard: function () {
          if (!t.disabled && !t.selected) {
            if (Boolean(t.isOnceCard) && !r)
              return (
                e.Dialog({
                  message: "一张".concat(
                    t.bankName,
                    "银行卡只能在一家券商开户，请确认这张卡没在其他券商开过户"
                  ),
                  confirmBtn: "我知道了",
                }),
                void (r = !0)
              );
            var n = {
              cardSno: t.serialNum,
              bankCode: t.bankCode,
              bankAbbr: t.bankAbbr,
              bankName: t.bankName,
              cardNum: t.cardNum,
            };
            a.emit("click", n);
          }
        },
        bankDesc: n.computed(function () {
          var e;
          return (null == (e = t.actConfig) ? void 0 : e.thirdCustodyCoin)
            ? t.actConfig.thirdCustodyCoin
            : "";
        }),
      };
    },
  };
Array || (n.resolveComponent("BankLogo") + n.resolveComponent("st-checkbox"))(),
  Math ||
    (
      function () {
        return "../../../../components/BankLogo/BankLogo.js";
      } +
      function () {
        return "../../../../components/st-checkbox/st-checkbox.js";
      }
    )();
var a = n._export_sfc(t, [
  [
    "render",
    function (e, t, a, r, o, c) {
      return n.e(
        {
          a: n.p({ bank: a.bankAbbr, "mask-style": !0, "white-style": !0 }),
          b: n.p({ bank: a.bankAbbr, "white-style": !0 }),
          c: n.t(a.bankName),
          d: r.bankDesc,
        },
        r.bankDesc ? { e: n.t(r.bankDesc) } : {},
        { f: !a.disabled },
        a.disabled
          ? {}
          : { g: a.selected ? 1 : "", h: n.p({ value: a.selected }) },
        {
          i: n.o(function () {
            return r.selectCard && r.selectCard.apply(r, arguments);
          }),
          j: n.t(a.cardNum),
          k: a.lastChosen,
        },
        (a.lastChosen, {}),
        {
          l: n.n(a.disabled ? "disabled" : "act-" + a.bankAbbr),
          m: n.o(function () {
            return r.selectCard && r.selectCard.apply(r, arguments);
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9cced1da"],
]);
wx.createComponent(a);
