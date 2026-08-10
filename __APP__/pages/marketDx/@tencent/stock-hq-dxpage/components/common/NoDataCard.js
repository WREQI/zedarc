var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    components: {
      TitleBlock: function () {
        return "./TitleBlock.js";
      },
    },
    props: {
      name: { type: String, default: "" },
      text: { type: String, default: "" },
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
  };
Array || e.resolveComponent("title-block")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, o, a, p) {
      return e.e({ a: r.name }, r.name ? { b: e.p({ name: r.name }) } : {}, {
        c: e.t(r.text),
        d: e.n(p.isMp ? "no-data-wrapper-mp" : ""),
      });
    },
  ],
  ["__scopeId", "data-v-b0143628"],
]);
wx.createComponent(n);
