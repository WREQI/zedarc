require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../filters/money.js"),
  o = require("../../../../stores/app/useMode.js"),
  n = e.defineComponent({
    name: "DepositCard",
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (n) {
      var r = e.storeToRefs(o.useModeStore()).simpleMode;
      return {
        backgroundImage: e.computed(function () {
          return r.value
            ? "https://st.gtimg.com/design/178e2a23220b0651dcb2fe4b0dfded8d.png"
            : "https://st.gtimg.com/design/6db7c450fe40e78f5583e59e4ecf349d.png";
        }),
        formattedDate: e.computed(function () {
          var e,
            t = null == (e = n.item) ? void 0 : e.time;
          return t && 8 === t.length
            ? ""
                .concat(t.slice(0, 4), "-")
                .concat(t.slice(4, 6), "-")
                .concat(t.slice(6, 8))
            : "";
        }),
        formattedAmount: e.computed(function () {
          var e,
            o = null == (e = n.item) ? void 0 : e.transfer_amount;
          return o ? "¥ ".concat(t.formatNoUnit(o, !1, 2)) : "¥ 0.00";
        }),
      };
    },
  }),
  r = e._export_sfc(n, [
    [
      "render",
      function (t, o, n, r, c, a) {
        return {
          a: e.t(t.formattedAmount),
          b: e.t(t.formattedDate),
          c: "url(".concat(t.backgroundImage, ")"),
        };
      },
    ],
    ["__scopeId", "data-v-6e5b32c3"],
  ]);
wx.createComponent(r);
