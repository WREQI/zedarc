var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-news-core/utils/force2https.js"),
  n = { IS_WZQ_XCX: !1 },
  o = n.IS_WZQ_XCX,
  i = n.IS_LITE_MODE,
  r = {
    props: {
      logo: { type: String, default: "" },
      bubbleWhite: { type: String, default: "" },
      bubbleBlack: { type: String, default: "" },
      bubbleMargin: { type: Number, default: 0 },
      tipsText: { type: String, default: "" },
      buttonText: { type: String, default: "" },
      theme: { type: String, default: "blue" },
    },
    computed: {
      rootClass: function () {
        return i || o ? "light" : "";
      },
      indictorImg: function () {
        return i || o
          ? "https://st.gtimg.com/design/17b6a65a86c5aa516d76016bbda1ec6a.png"
          : "https://st.gtimg.com/design/262741dc1393a7a8641a5afa68c0231f.png";
      },
    },
    methods: {
      forceHttpsAdvanced: e.forceHttpsAdvanced,
      onClose: function () {
        this.$emit("onClose");
      },
      onClick: function () {
        this.$emit("onClick");
      },
    },
  },
  c = t._export_sfc(r, [
    [
      "render",
      function (e, n, o, i, r, c) {
        return {
          a: t.t(o.tipsText),
          b: t.t(o.buttonText),
          c: t.o(function () {
            return c.onClick && c.onClick.apply(c, arguments);
          }, 5151),
          d: c.indictorImg,
          e: t.o(function () {
            return c.onClose && c.onClose.apply(c, arguments);
          }, 5152),
          f: t.n(o.theme),
          g: t.n(c.rootClass),
        };
      },
    ],
  ]);
wx.createComponent(c);
