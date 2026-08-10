var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      highlightText: function () {
        return "./highlight-text.js";
      },
    },
    inject: ["hqBridge", "theme"],
    props: {
      item: {
        type: [Object, String],
        default: function () {
          return {};
        },
      },
      keyword: { type: String, default: "" },
      listType: { type: String, default: "aiGuess" },
      index: { type: Number, default: 0 },
      renderSerialNumber: { type: Number, default: 1 },
    },
    methods: {
      jumpAI: function () {
        "isLoading" !== this.item &&
          this.$emit("jumpToDetail", this.item, this.index);
      },
    },
  };
Array || e.resolveComponent("highlight-text")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, r, n, o, m) {
      return e.e(
        { a: "isLoading" === r.item },
        "isLoading" === r.item
          ? {}
          : { b: e.p({ keyword: r.keyword, text: r.item.title || "" }) },
        {
          c: e.n(m.theme),
          d: e.n(r.index < r.renderSerialNumber - 1 && "item-border-bottom"),
          e: e.o(function () {
            return m.jumpAI && m.jumpAI.apply(m, arguments);
          }, 4733),
        }
      );
    },
  ],
  ["__scopeId", "data-v-574b4138"],
]);
wx.createComponent(i);
