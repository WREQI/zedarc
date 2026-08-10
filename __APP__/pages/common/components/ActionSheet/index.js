require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../utils/index.js"),
  t = require("../../vendor.js"),
  n = {
    name: "ActionSheet",
    components: {
      Popup: function () {
        return "../Popup/index.js";
      },
    },
    props: {
      customPopupStyle: { type: String, default: "" },
      customClass: { type: String, default: "mp-overlay-no-touch" },
      value: { type: Boolean, default: !1 },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      active: { type: Number, default: -1 },
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      showTitleBorderBottom: { type: Boolean, default: !0 },
      maskClosable: { type: Boolean, default: !0 },
      closeButton: { type: Boolean, default: !1 },
      cancelTxt: { type: String, default: "取消" },
      pickerStyle: { type: Boolean, default: !1 },
      confirmTxt: { type: String, default: "完成" },
      beforeClose: Function,
      zIndex: { type: [String, Number], default: 100 },
      confirmButton: { type: Boolean, default: !0 },
      animation: { type: String, default: "mp-slide-up" },
      needMask: { type: Boolean, default: !0 },
      hideCloseIcon: { type: Boolean, default: !1 },
    },
    methods: {
      noop: function () {},
      show: function () {
        this.$emit("input", !0);
      },
      hide: function () {
        this.$emit("input", !1);
      },
      maskClick: function () {
        this.$emit("maskClick"), this.maskClosable && this.hide();
      },
      cancel: function () {
        this.hide(), this.$emit("cancel");
      },
      itemClick: function (e, t) {
        this.hide(), this.$emit("select", e, t);
      },
      confirm: function () {
        var t,
          n = this;
        if (this.beforeClose) {
          var o = this.$parent;
          if (e.getIsMpPluginComponent())
            for (
              var i = 0;
              i < 5 &&
              o.selectComponent &&
              !o.selectComponent(".plugin-component-action-sheet");
              i++
            )
              o = o.$parent;
          else
            ["ApplyWrap", "GlobalWrap"].includes(
              null == (t = null == o ? void 0 : o.$options) ? void 0 : t.name
            ) && (o = this.$root);
          this.beforeClose.bind(o)(function (e) {
            !1 !== e && (n.hide(), n.$emit("confirm"));
          });
        } else this.hide(), this.$emit("confirm");
      },
    },
  };
Array || t.resolveComponent("popup")();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, i, l, a) {
      return t.e(
        { a: o.pickerStyle && o.confirmButton },
        o.pickerStyle && o.confirmButton
          ? {
              b: t.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }),
              c: o.confirmTxt,
              d: t.o(function () {
                return a.confirm && a.confirm.apply(a, arguments);
              }),
            }
          : o.pickerStyle && !o.hideCloseIcon
          ? {
              f: t.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }),
            }
          : {},
        { e: o.pickerStyle && !o.hideCloseIcon, g: o.title, h: o.subtitle },
        o.subtitle ? { i: o.subtitle } : {},
        {
          j: o.pickerStyle || o.title,
          k: t.n(
            o.confirmButton
              ? ""
              : "st-action-sheet-header--simple-mode ^st-action-sheet-header--simple-mode"
          ),
          l: t.n(o.subtitle ? "st-action-sheet-header--subtitle" : ""),
          m: t.n(o.showTitleBorderBottom ? "border-bottom" : ""),
          n: t.f(o.data, function (e, n, i) {
            return {
              a: e.content,
              b: n,
              c: t.n(e.class || ""),
              d: t.n(n === o.active ? "st-action-sheet-item_active" : ""),
              e: t.o(function (t) {
                return a.itemClick(e, n);
              }, n),
            };
          }),
          o: !o.pickerStyle,
        },
        o.pickerStyle
          ? {}
          : {
              p: t.t(o.cancelTxt),
              q: t.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }),
            },
        {
          r: t.o(function () {}),
          s: o.pickerStyle ? 1 : "",
          t: t.o(a.maskClick),
          v: t.p({
            show: o.value,
            center: !1,
            mask: o.needMask,
            "layer-z-index": o.zIndex,
            name: o.animation,
            position: "bottom",
            "mask-closable": o.maskClosable,
            "custom-style": o.customPopupStyle,
            "touch-class": o.customClass,
          }),
        }
      );
    },
  ],
]);
wx.createComponent(o);
