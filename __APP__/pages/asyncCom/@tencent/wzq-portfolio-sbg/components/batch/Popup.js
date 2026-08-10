var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "StPopup",
    props: {
      value: { type: Boolean, default: !1 },
      zIndex: { type: Number, default: 100 },
      maskClosable: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      maskStyle: { type: String, default: "" },
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
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, s, n, a, o) {
        return t.e({ a: o.isSlot }, o.isSlot ? {} : { b: s.content }, {
          c: t.s(s.maskStyle),
          d: t.o(function () {
            return o.maskClick && o.maskClick.apply(o, arguments);
          }, 3498),
          e: a.isVisible,
          f: s.zIndex,
        });
      },
    ],
    ["__scopeId", "data-v-32569969"],
  ]);
wx.createComponent(i);
