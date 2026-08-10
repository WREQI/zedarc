require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = {
    props: {
      selectedVal: { type: [String, Number], default: "" },
      selectRange: {
        type: Array,
        default: function () {
          return [];
        },
      },
      disable: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (t, n) {
      var r = n.emit;
      return {
        text: e.computed(function () {
          var e = t.selectRange.find(function (e) {
            return e.value === t.selectedVal;
          });
          return (null == e ? void 0 : e.text) || "";
        }),
        handleClick: function () {
          t.disable || r("click");
        },
      };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, a, c, l) {
        return e.e({ a: e.t(a.text), b: !r.disable }, (r.disable, {}), {
          c: e.o(function () {
            return a.handleClick && a.handleClick.apply(a, arguments);
          }),
        });
      },
    ],
    ["__scopeId", "data-v-90fe59c7"],
  ]);
wx.createComponent(n);
