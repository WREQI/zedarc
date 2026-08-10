var e = require("../../../../../common/vendor.js"),
  t = e._export_sfc(
    {
      name: "WxClawHintBubble",
      computed: {
        isH5Shell: function () {
          return !1;
        },
        isZxgXcx: function () {
          return !0;
        },
        arrowStyle: function () {
          return this.isH5Shell ? { marginLeft: "0px" } : null;
        },
      },
      methods: {
        emitBubbleClick: function () {
          this.$emit("bubble-click");
        },
        emitClose: function () {
          this.$emit("close");
        },
      },
    },
    [
      [
        "render",
        function (t, i, n, r, o, l) {
          return {
            a: l.isZxgXcx ? 1 : "",
            b: e.s(l.arrowStyle),
            c: e.o(function () {
              return l.emitClose && l.emitClose.apply(l, arguments);
            }, 4874),
            d: e.o(function () {
              return l.emitBubbleClick && l.emitBubbleClick.apply(l, arguments);
            }, 4875),
          };
        },
      ],
      ["__scopeId", "data-v-f9aeef27"],
    ]
  );
wx.createComponent(t);
