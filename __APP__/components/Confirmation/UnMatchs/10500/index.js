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
      st: function () {
        return "./st.js";
      },
      gem: function () {
        return "./gem.js";
      },
      kechuang: function () {
        return "./kechuang.js";
      },
      kzz: function () {
        return "./kzz.js";
      },
    },
    props: {
      scenes: { type: String, default: "" },
      matchInfo: Object,
      isShowMatchProtocol: { type: Boolean, default: !0 },
    },
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
    e.resolveComponent("st") +
    e.resolveComponent("gem") +
    e.resolveComponent("kechuang") +
    e.resolveComponent("apply") +
    e.resolveComponent("kzz")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, c, a, s) {
      return e.e(
        { a: "trade" === t.scenes },
        "trade" === t.scenes
          ? {
              b: e.o(s.handleConfirm),
              c: e.o(s.handleCancel),
              d: e.p({ "match-info": t.matchInfo }),
            }
          : "st" === t.scenes
          ? {
              f: e.o(s.handleConfirm),
              g: e.o(s.handleCancel),
              h: e.p({ "match-info": t.matchInfo }),
            }
          : "gem" === t.scenes
          ? {
              j: e.o(s.handleConfirm),
              k: e.o(s.handleCancel),
              l: e.p({ "match-info": t.matchInfo }),
            }
          : "kechuang" === t.scenes
          ? {
              n: e.o(s.handleConfirm),
              o: e.o(s.handleCancel),
              p: e.p({ "match-info": t.matchInfo }),
            }
          : "apply" === t.scenes
          ? {
              r: e.o(s.handleConfirm),
              s: e.o(s.handleCancel),
              t: e.p({
                "match-info": t.matchInfo,
                "is-show-match-protocol": t.isShowMatchProtocol,
              }),
            }
          : "kzz" === t.scenes
          ? {
              w: e.o(s.handleConfirm),
              x: e.o(s.handleCancel),
              y: e.p({ "match-info": t.matchInfo }),
            }
          : {},
        {
          e: "st" === t.scenes,
          i: "gem" === t.scenes,
          m: "kechuang" === t.scenes,
          q: "apply" === t.scenes,
          v: "kzz" === t.scenes,
        }
      );
    },
  ],
]);
wx.createComponent(o);
