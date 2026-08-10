require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../common/vendor.js"),
  o = {
    name: "BaseModal",
    props: {
      visible: { type: Boolean, default: !1 },
      maskClosable: { type: Boolean, default: !1 },
      zIndex: { type: Number, default: 101 },
      showClose: { type: Boolean, default: !0 },
      closePosition: {
        type: String,
        default: "outer",
        validator: function (e) {
          return ["inner", "outer", "bottom"].includes(e);
        },
      },
    },
    watch: { visible: { handler: function (e) {}, immediate: !0 } },
    methods: {
      handleClose: function () {
        this.$emit("update:visible", !1), this.$emit("close");
      },
      handleMaskClick: function () {
        this.maskClosable && this.handleClose();
      },
    },
  },
  l = e._export_sfc(o, [
    [
      "render",
      function (o, l, n, s, t, i) {
        return e.e(
          { a: n.visible },
          n.visible
            ? e.e(
                {
                  b: e.o(function () {
                    return (
                      i.handleMaskClick && i.handleMaskClick.apply(i, arguments)
                    );
                  }, 4455),
                  c: n.showClose && "outer" === n.closePosition,
                },
                n.showClose && "outer" === n.closePosition
                  ? {
                      d: e.o(function () {
                        return (
                          i.handleClose && i.handleClose.apply(i, arguments)
                        );
                      }, 4456),
                    }
                  : {},
                { e: n.showClose && "inner" === n.closePosition },
                n.showClose && "inner" === n.closePosition
                  ? {
                      f: e.o(function () {
                        return (
                          i.handleClose && i.handleClose.apply(i, arguments)
                        );
                      }, 4457),
                    }
                  : {},
                { g: n.showClose && "bottom" === n.closePosition },
                n.showClose && "bottom" === n.closePosition
                  ? {
                      h: e.o(function () {
                        return (
                          i.handleClose && i.handleClose.apply(i, arguments)
                        );
                      }, 4458),
                    }
                  : {},
                { i: n.zIndex }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1afb7bd9"],
  ]);
wx.createComponent(l);
