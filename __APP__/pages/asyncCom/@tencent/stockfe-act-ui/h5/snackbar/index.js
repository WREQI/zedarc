var n = require("../../../../../../common/vendor.js"),
  e = {
    name: "yy-snackbar",
    props: { logo: String, btnText: String, hideBtn: Boolean },
    data: function () {
      return { visible: !0 };
    },
    components: {
      Icon: function () {
        return "../icon/index.js";
      },
      ButtonSelf: function () {
        return "../button/index.js";
      },
    },
    methods: {
      handleClick: function () {
        this.$emit("clik");
      },
      handleClose: function () {
        (this.visible = !1), this.$emit("close");
      },
    },
  };
Array || (n.resolveComponent("Icon") + n.resolveComponent("ButtonSelf"))();
var o = n._export_sfc(e, [
  [
    "render",
    function (e, o, t, i, r, l) {
      return n.e(
        { a: r.visible },
        r.visible
          ? n.e(
              { b: t.logo },
              t.logo ? { c: n.p({ icon: t.logo }) } : {},
              { d: !t.hideBtn },
              t.hideBtn
                ? {}
                : { e: n.o(l.handleClick, 3245), f: n.p({ text: t.btnText }) },
              {
                g: n.o(function () {
                  return l.handleClose && l.handleClose.apply(l, arguments);
                }, 3246),
              }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(o);
