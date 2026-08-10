require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = {
    components: {
      trade: function () {
        return "./trade.js";
      },
      kechuang: function () {
        return "./kechuang.js";
      },
      apply: function () {
        return "./apply.js";
      },
      kzz: function () {
        return "./kzz.js";
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
Array ||
  (
    e.resolveComponent("trade") +
    e.resolveComponent("kechuang") +
    e.resolveComponent("apply") +
    e.resolveComponent("kzz")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, a, c, t, r) {
      return e.e(
        { a: "trade" === a.scenes },
        "trade" === a.scenes
          ? {
              b: e.o(r.handleConfirm),
              c: e.o(r.handleCancel),
              d: e.p({ "match-info": a.matchInfo }),
            }
          : "kechuang" === a.scenes
          ? {
              f: e.o(r.handleConfirm),
              g: e.o(r.handleCancel),
              h: e.p({ "match-info": a.matchInfo }),
            }
          : "apply" === a.scenes
          ? {
              j: e.o(r.handleConfirm),
              k: e.o(r.handleCancel),
              l: e.p({ "match-info": a.matchInfo }),
            }
          : "kzz" === a.scenes
          ? {
              n: e.o(r.handleConfirm),
              o: e.o(r.handleCancel),
              p: e.p({ "match-info": a.matchInfo }),
            }
          : {},
        {
          e: "kechuang" === a.scenes,
          i: "apply" === a.scenes,
          m: "kzz" === a.scenes,
        }
      );
    },
  ],
]);
wx.createComponent(o);
