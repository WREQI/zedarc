var e = require("../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "BulletinBar",
    props: {
      text: { type: String, default: "" },
      linkUrl: { type: String, default: "" },
    },
    setup: function (e, n) {
      var t = n.emit;
      return {
        onClose: function () {
          t("close");
        },
        onTextClick: function () {
          t("textClick", e.linkUrl);
        },
      };
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, r, i, c) {
        return {
          a: e.t(n.text),
          b: e.o(function () {
            return n.onTextClick && n.onTextClick.apply(n, arguments);
          }, 4543),
          c: e.o(function () {
            return n.onClose && n.onClose.apply(n, arguments);
          }, 4544),
        };
      },
    ],
    ["__scopeId", "data-v-b576b0cd"],
  ]);
wx.createComponent(t);
