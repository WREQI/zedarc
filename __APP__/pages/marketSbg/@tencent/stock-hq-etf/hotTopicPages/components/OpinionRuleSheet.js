var n = require("../../../../../../common/vendor.js"),
  e = n.defineComponent({
    name: "OpinionRuleSheet",
    components: {
      OpinionRuleBody: function () {
        return "./OpinionRuleBody.js";
      },
    },
    setup: function () {
      return { isMP: n.StockBridge.ENV === n.EnvTypeEnum.MP };
    },
  });
Array || n.resolveComponent("opinion-rule-body")();
var o = n._export_sfc(e, [
  [
    "render",
    function (e, o, r, t, i, u) {
      return n.e(
        {
          a: n.o(function (n) {
            return e.$emit("close");
          }, 2445),
          b: e.isMP,
        },
        e.isMP
          ? { c: n.o(function () {}, 2446) }
          : { d: n.o(function () {}, 2447) }
      );
    },
  ],
  ["__scopeId", "data-v-41b6c3ef"],
]);
wx.createComponent(o);
