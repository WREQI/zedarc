var e = require("../../../../../common/vendor.js"),
  t = {
    name: "VoteCheckBox",
    inject: {
      stockBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: { value: { type: [Boolean, String] } },
    data: function () {
      return {
        wzqImg:
          "https://st.gtimg.com/design/dc7c0bf596c1c48ab5a1b819f0428c1b.png",
        zxgImg:
          "https://st.gtimg.com/design/19bdedcad61e8e37b4091026bace05c4.png",
      };
    },
    computed: {
      colorClass: function () {
        return "zxg-color";
      },
      checkImg: function () {
        return this.zxgImg;
      },
    },
    methods: {
      handleInput: function (e) {
        this.$emit("input", !this.value),
          e.preventDefault(),
          e.stopPropagation();
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, c, o, a, r) {
        return e.e(
          {
            a: c.value,
            b: e.o(function () {
              return r.handleInput && r.handleInput.apply(r, arguments);
            }, 5729),
            c: c.value,
          },
          c.value ? { d: r.checkImg } : {},
          { e: e.n(r.colorClass), f: c.value ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-51c4b287"],
  ]);
wx.createComponent(n);
