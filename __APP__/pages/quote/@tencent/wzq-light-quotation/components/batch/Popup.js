var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "StPopup",
    props: {
      value: { type: Boolean, default: !1 },
      zIndex: { type: Number, default: 100 },
      maskClosable: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      maskStyle: { type: String, default: "" },
      align: { type: String, default: "center" },
    },
    data: function () {
      return { isVisible: !1 };
    },
    computed: {
      isSlot: function () {
        return t.toRaw(this.$slots).default;
      },
    },
    watch: {
      value: {
        handler: function (t, e) {
          t !== e && (this.isVisible = t);
        },
        immediate: !0,
      },
      isVisible: function (t) {
        this.$emit("input", t);
      },
    },
    methods: {
      maskClick: function (t) {
        this.$emit("mask-click", t), this.maskClosable && (this.isVisible = !0);
      },
      onTouchMove: function (t) {
        "function" == typeof t.stopPropagation && t.stopPropagation();
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, o, a, s) {
        return t.e(
          { a: t.s(i.maskStyle), b: s.isSlot },
          s.isSlot ? { c: t.n(i.align) } : { d: i.content, e: t.n(i.align) },
          {
            f: t.o(function () {
              return s.maskClick && s.maskClick.apply(s, arguments);
            }, 2774),
            g: a.isVisible,
            h: i.zIndex,
            i: t.o(function () {
              return s.onTouchMove && s.onTouchMove.apply(s, arguments);
            }, 2775),
          }
        );
      },
    ],
    ["__scopeId", "data-v-01723b69"],
  ]);
wx.createComponent(n);
