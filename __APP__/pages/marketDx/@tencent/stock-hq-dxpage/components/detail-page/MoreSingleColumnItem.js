var e = require("../../../../../../common/vendor.js"),
  n = {
    name: "MoreSingleColumnItem",
    inject: ["hqBridge"],
    components: {
      MoreSpanItem: function () {
        return "./MoreSpanItem.js";
      },
    },
    props: { item: { type: Object, require: !1, default: function () {} } },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
  };
Array || e.resolveComponent("MoreSpanItem")();
var r = e._export_sfc(n, [
  [
    "render",
    function (n, r, t, o, a, i) {
      return {
        a: e.p({ label: t.item.name, value: t.item.value }),
        b: e.n(i.isMp ? "container-mp" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-7c3aff5c"],
]);
wx.createComponent(r);
