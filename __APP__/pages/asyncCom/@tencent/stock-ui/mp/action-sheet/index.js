var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "ActionSheet",
    components: {
      Popup: function () {
        return "../mp-popup/index.js";
      },
    },
    props: {
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
      maskClosable: { type: Boolean, default: !0 },
      closeButton: { type: Boolean, default: !1 },
      cancelTxt: { type: String, default: "取消" },
      pickerStyle: { type: Boolean, default: !1 },
      confirmTxt: { type: String, default: "完成" },
      beforeClose: Function,
      zIndex: String,
    },
    methods: {
      show: function () {
        this.$emit("input", !0);
      },
      hide: function () {
        this.$emit("input", !1);
      },
      maskClick: function () {
        this.maskClosable && this.hide();
      },
      cancel: function () {
        this.hide(), this.$emit("cancel");
      },
      itemClick: function (e, t) {
        this.hide(), this.$emit("select", e, t);
      },
      confirm: function () {
        var e = this;
        this.beforeClose
          ? this.beforeClose(function (t) {
              !1 !== t && (e.hide(), e.$emit("confirm"));
            })
          : (this.hide(), this.$emit("confirm"));
      },
    },
  };
Array || e.resolveComponent("popup")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, i, o, c, l) {
      return e.e(
        { a: i.pickerStyle },
        i.pickerStyle
          ? {
              b: e.o(function () {
                return l.cancel && l.cancel.apply(l, arguments);
              }, 3100),
            }
          : {},
        {
          c: e.t(i.confirmTxt),
          d: e.o(function () {
            return l.confirm && l.confirm.apply(l, arguments);
          }, 3101),
          e: i.title,
          f: i.subtitle,
        },
        i.subtitle ? { g: i.subtitle } : {},
        {
          h: i.pickerStyle || i.title,
          i: e.n(i.subtitle ? "st-action-sheet-header--subtitle" : ""),
          j: e.f(i.data, function (t, n, o) {
            return {
              a: t.content,
              b: n,
              c: e.n(t.class || ""),
              d: e.n(n === i.active ? "st-action-sheet-item_active" : ""),
              e: e.o(
                function (e) {
                  return l.itemClick(t, n);
                },
                3102,
                n
              ),
            };
          }),
          k: !i.pickerStyle,
        },
        i.pickerStyle
          ? {}
          : {
              l: e.t(i.cancelTxt),
              m: e.o(function () {
                return l.cancel && l.cancel.apply(l, arguments);
              }, 3103),
            },
        {
          n: i.value,
          o: e.o(function () {}, 3104),
          p: i.pickerStyle ? 1 : "",
          q: e.o(l.maskClick, 3105),
          r: e.p({
            show: i.value,
            center: !1,
            mask: !0,
            "z-index": i.zIndex,
            position: "bottom",
            maskClosable: i.maskClosable,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fa6e1fc1"],
]);
wx.createComponent(n);
