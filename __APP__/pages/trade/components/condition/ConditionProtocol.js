require("../../../../app.js");
var o = require("../../../../model/trade/conditions/useCondProtocolCheck.js"),
  e = require("../../../../common/vendor.js"),
  n = {
    components: {
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function () {
      var e = o.useCondProtocolCheck().hasCheckBoxClick;
      return {
        hasCheckBoxClick: e,
        handleValueChange: function () {
          e.value = !e.value;
        },
      };
    },
  };
Array ||
  (e.resolveComponent("st-checkbox") + e.resolveComponent("mp-dialog"))(),
  Math;
var r = e._export_sfc(n, [
  [
    "render",
    function (o, n, r, a, t, c) {
      return {
        a: e.p({ value: a.hasCheckBoxClick, size: "small" }),
        b: e.o(function (e) {
          return o.$router.push({ name: "ConditionProtocol" });
        }),
        c: e.o(function () {
          return a.handleValueChange && a.handleValueChange.apply(a, arguments);
        }),
        d: e.p({ id: "condition-order-risk-dialog" }),
      };
    },
  ],
  ["__scopeId", "data-v-d29d77dc"],
]);
wx.createComponent(r);
