require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "ActionSheet",
    components: {
      Popup: function () {
        return "../Popup/index.js";
      },
    },
    props: {
      customPopupStyle: { type: String, default: "" },
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
          if (e.StockBridge.ENV === e.EnvTypeEnum.MP)
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
Array || e.resolveComponent("popup")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, i, l, a) {
      return e.e(
        { a: o.pickerStyle && o.confirmButton },
        o.pickerStyle && o.confirmButton
          ? {
              b: e.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }, 3138),
              c: o.confirmTxt,
              d: e.o(function () {
                return a.confirm && a.confirm.apply(a, arguments);
              }, 3139),
            }
          : o.pickerStyle && !o.hideCloseIcon
          ? {
              f: e.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }, 3140),
            }
          : {},
        { e: o.pickerStyle && !o.hideCloseIcon, g: o.title, h: o.subtitle },
        o.subtitle ? { i: o.subtitle } : {},
        {
          j: o.pickerStyle || o.title,
          k: e.n(
            o.confirmButton
              ? ""
              : "st-action-sheet-header--simple-mode ^st-action-sheet-header--simple-mode"
          ),
          l: e.n(o.subtitle ? "st-action-sheet-header--subtitle" : ""),
          m: e.n(o.showTitleBorderBottom ? "border-bottom" : ""),
          n: e.f(o.data, function (t, n, i) {
            return {
              a: t.content,
              b: n,
              c: e.n(t.class || ""),
              d: e.n(n === o.active ? "st-action-sheet-item_active" : ""),
              e: e.o(
                function (e) {
                  return a.itemClick(t, n);
                },
                3141,
                n
              ),
            };
          }),
          o: !o.pickerStyle,
        },
        o.pickerStyle
          ? {}
          : {
              p: e.t(o.cancelTxt),
              q: e.o(function () {
                return a.cancel && a.cancel.apply(a, arguments);
              }, 3142),
            },
        {
          r: o.pickerStyle ? 1 : "",
          s: e.o(a.maskClick, 3143),
          t: e.p({
            show: o.value,
            center: !1,
            mask: o.needMask,
            "layer-z-index": o.zIndex,
            name: o.animation,
            position: "bottom",
            "mask-closable": o.maskClosable,
            "custom-style": o.customPopupStyle,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-273d64e3"],
]);
wx.createComponent(n);
