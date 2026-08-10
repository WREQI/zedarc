var t = require("../utils/envUtils.js"),
  n = require("../../../../../common/vendor.js"),
  e = {
    props: {
      canShow: { type: Boolean, default: !1 },
      tips: { type: String, default: "" },
      theme: { type: String, default: "white" },
    },
    data: function () {
      return { isLight: t.IS_LITE_MODE };
    },
    computed: {
      closeIconImage: function () {
        return "white" === this.theme
          ? "https://st.gtimg.com/design/a05dd675db4d105dbed144444d77da6a.png"
          : "https://st.gtimg.com/design/3a44df884c45e8c4b183c6518f499537.png";
      },
    },
    methods: {
      onCloseBtn: function () {
        this.$emit("onHide");
      },
      onConfirmBtnClick: function () {
        this.$emit("onHide");
      },
    },
  },
  o = n._export_sfc(e, [
    [
      "render",
      function (t, e, o, i, c, s) {
        return n.e(
          { a: o.canShow },
          o.canShow
            ? {
                b: n.o(function () {
                  return s.onCloseBtn && s.onCloseBtn.apply(s, arguments);
                }, 5056),
                c: s.closeIconImage,
                d: n.o(function () {
                  return s.onCloseBtn && s.onCloseBtn.apply(s, arguments);
                }, 5057),
                e: n.t(o.tips),
                f: n.o(function () {
                  return (
                    s.onConfirmBtnClick &&
                    s.onConfirmBtnClick.apply(s, arguments)
                  );
                }, 5058),
                g: n.n(c.isLight ? "light" : ""),
                h: n.n("skin-".concat(o.theme)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-88095698"],
  ]);
wx.createComponent(o);
