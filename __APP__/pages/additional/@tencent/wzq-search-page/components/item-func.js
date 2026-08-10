var t = require("../../../../../common/vendor.js"),
  e = {
    components: {
      highlightText: function () {
        return "./highlight-text.js";
      },
    },
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      keyword: { type: String, default: "" },
      index: { type: Number, default: 0 },
      skin: { type: String, default: "white" },
    },
    methods: {
      jumpFunc: function () {
        var t = this.item;
        Object.prototype.hasOwnProperty.call(t, "toShowMore")
          ? this.$emit("showMore", t.toShowMore)
          : this.$emit("jumpToDetail", t, this.index);
      },
    },
  };
Array || t.resolveComponent("highlight-text")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, i, r, c) {
      return {
        a: "url(".concat(
          "white" === n.skin ? n.item.iconWhite : n.item.iconBlack,
          ")"
        ),
        b: t.p({ keyword: n.keyword, text: n.item.functionName || "" }),
        c: t.o(function () {
          return c.jumpFunc && c.jumpFunc.apply(c, arguments);
        }, 4734),
      };
    },
  ],
  ["__scopeId", "data-v-60032e8c"],
]);
wx.createComponent(o);
