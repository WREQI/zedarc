require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = {
    components: {
      trade: function () {
        return "./trade.js";
      },
      apply: function () {
        return "./apply.js";
      },
    },
    props: { scenes: { type: String, default: "" }, matchInfo: Object },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || (e.resolveComponent("trade") + e.resolveComponent("apply"))();
var t = e._export_sfc(n, [
  [
    "render",
    function (n, t, o, r, a, c) {
      return e.e(
        { a: "trade" === o.scenes },
        "trade" === o.scenes
          ? {
              b: e.o(c.handleConfirm),
              c: e.o(c.handleCancel),
              d: e.p({ "match-info": o.matchInfo }),
            }
          : "apply" === o.scenes
          ? {
              f: e.o(c.handleConfirm),
              g: e.o(c.handleCancel),
              h: e.p({ "match-info": o.matchInfo }),
            }
          : {},
        { e: "apply" === o.scenes }
      );
    },
  ],
]);
wx.createComponent(t);
