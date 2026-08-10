var e = require("../halfscreen-editor.js"),
  o = require("../../../../../../common/vendor.js"),
  t = {
    props: { emojiType: { type: String, default: "wemo" } },
    computed: {
      emojiArr: function () {
        return "semo" === this.emojiType ? e.emoji.semojiArr : e.emoji.emojiArr;
      },
    },
    methods: {
      tapEmoji: function (e) {
        var o = e.target.dataset.name;
        "del" === o
          ? this.$emit("tapEmoji", "del")
          : o && this.$emit("tapEmoji", "[".concat(o, "]"));
      },
    },
  },
  i = o._export_sfc(t, [
    [
      "render",
      function (e, t, i, r, n, m) {
        return {
          a: o.f(m.emojiArr, function (e, t, i) {
            return {
              a: t,
              b: o.n("eid-" + t),
              c: e,
              d: o.o(
                function () {
                  return m.tapEmoji && m.tapEmoji.apply(m, arguments);
                },
                3913,
                t
              ),
            };
          }),
          b: o.n("wemo" === i.emojiType ? "emoji_btn" : "semoji_btn"),
          c: o.n("wemo" === i.emojiType ? "panel" : "spanel"),
          d: o.o(function () {
            return m.tapEmoji && m.tapEmoji.apply(m, arguments);
          }, 3914),
        };
      },
    ],
    ["__scopeId", "data-v-0d54f8bb"],
  ]);
wx.createComponent(i);
