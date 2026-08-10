require("../../app.js");
var e = require("../../common/vendor.js"),
  t = e.defineComponent({
    __name: "TransferOutProgress",
    props: { stateList: { default: [] }, currentProgress: {} },
    setup: function (t) {
      return function (t, r) {
        return {
          a: e.f(t.stateList, function (r, n, s) {
            return e.e(
              {
                a: e.t(r.text),
                b: e.t(t.$filters.format.toCurrency(r.money, 2)),
                c: r.date,
              },
              r.date ? { d: e.t(r.date) } : {},
              {
                e: n,
                f: n === t.currentProgress ? 1 : "",
                g: n == t.stateList.length - 1 ? 1 : "",
              }
            );
          }),
        };
      };
    },
  }),
  r = e._export_sfc(t, [["__scopeId", "data-v-dfa0c547"]]);
wx.createComponent(r);
