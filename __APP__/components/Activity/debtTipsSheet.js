require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../stores/app/useMode.js"),
  r = require("../../service/stat/mp-weixin.js"),
  s = e.defineComponent({
    __name: "debtTipsSheet",
    props: {
      isDebtAutoOrderEntry: { default: !1 },
      isOrderSetted: { default: !1 },
    },
    emits: ["closeDebtTipsSheet"],
    setup: function (s, i) {
      var o,
        n = i.emit,
        d = null == (o = e.getCurrentInstance()) ? void 0 : o.proxy,
        u = t.useModeStore(),
        c = e.storeToRefs(u).simpleMode;
      function p() {
        r.stat.click("trade.debt.tips_sheet.learnmore_click"),
          d.$router.push({ name: "DebtTips" }),
          n("closeDebtTipsSheet");
      }
      function a() {
        r.stat.click("trade.debt.tips_sheet.entry_setted_click"),
          d.$router.push({
            name: "DebtAutoOrder",
            query: { stat_data: "IDk00p000u001" },
          }),
          n("closeDebtTipsSheet");
      }
      return function (t, r) {
        return e.e(
          { a: e.n(e.unref(c) ? "simple" : ""), b: t.isDebtAutoOrderEntry },
          t.isDebtAutoOrderEntry
            ? e.e({ c: t.isOrderSetted }, t.isOrderSetted ? {} : { d: e.o(a) })
            : {},
          { e: e.o(p) }
        );
      };
    },
  }),
  i = e._export_sfc(s, [["__scopeId", "data-v-6dcc467a"]]);
wx.createComponent(i);
