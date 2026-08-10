require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = {
    components: {
      apply: function () {
        return "./apply.js";
      },
      trade: function () {
        return "./trade.js";
      },
      kechuang: function () {
        return "./kechuang.js";
      },
      gem: function () {
        return "./gem.js";
      },
      kzz: function () {
        return "./kzz.js";
      },
      st: function () {
        return "./st.js";
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
    e.resolveComponent("kzz") +
    e.resolveComponent("gem") +
    e.resolveComponent("st")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, a, c, s) {
      return e.e(
        { a: "trade" === t.scenes },
        "trade" === t.scenes
          ? {
              b: e.o(s.handleConfirm),
              c: e.o(s.handleCancel),
              d: e.p({ "match-info": t.matchInfo }),
            }
          : "kechuang" === t.scenes
          ? {
              f: e.o(s.handleConfirm),
              g: e.o(s.handleCancel),
              h: e.p({ "match-info": t.matchInfo }),
            }
          : "apply" === t.scenes
          ? {
              j: e.o(s.handleConfirm),
              k: e.o(s.handleCancel),
              l: e.p({ "match-info": t.matchInfo }),
            }
          : "kzz" === t.scenes
          ? {
              n: e.o(s.handleConfirm),
              o: e.o(s.handleCancel),
              p: e.p({ "match-info": t.matchInfo }),
            }
          : "gem" === t.scenes
          ? {
              r: e.o(s.handleConfirm),
              s: e.o(s.handleCancel),
              t: e.p({ "match-info": t.matchInfo }),
            }
          : "st" === t.scenes
          ? {
              w: e.o(s.handleConfirm),
              x: e.o(s.handleCancel),
              y: e.p({ "match-info": t.matchInfo }),
            }
          : {},
        {
          e: "kechuang" === t.scenes,
          i: "apply" === t.scenes,
          m: "kzz" === t.scenes,
          q: "gem" === t.scenes,
          v: "st" === t.scenes,
        }
      );
    },
  ],
]);
wx.createComponent(o);
