var e = require("../../../../../../common/vendor.js"),
  n = {
    inject: ["skin"],
    props: { value: { type: String, default: "" } },
    data: function () {
      return { val: "", maxLength: 16, keyBoardHeight: 0 };
    },
    mounted: function () {
      "请点击添加标注" === this.value
        ? (this.val = "")
        : (this.val = this.value);
    },
    methods: {
      handleValueChange: function (e) {
        var n,
          t = (null == (n = e.target) ? void 0 : n.value) || "";
        this.val = t.substring(0, this.maxLength);
      },
      handleClose: function () {
        this.$emit("close");
      },
      handleSave: function () {
        this.$emit("submit", this.val);
      },
      handleKeyboardHeightChange: function (e) {
        var n = this;
        setTimeout(function () {
          n.keyBoardHeight = e.detail.height;
        });
      },
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, a, i, l, h) {
        return {
          a: l.maxLength,
          b: l.val,
          c: e.o(function () {
            return (
              h.handleValueChange && h.handleValueChange.apply(h, arguments)
            );
          }, 5245),
          d: e.o(function () {
            return (
              h.handleKeyboardHeightChange &&
              h.handleKeyboardHeightChange.apply(h, arguments)
            );
          }, 5246),
          e: e.t(l.val.length),
          f: e.t(l.maxLength),
          g: e.n(l.val.length >= l.maxLength && "input-modal-tips-limit"),
          h: e.o(function () {
            return h.handleClose && h.handleClose.apply(h, arguments);
          }, 5247),
          i: e.o(function () {
            return h.handleSave && h.handleSave.apply(h, arguments);
          }, 5248),
          j: "translateY(-".concat(l.keyBoardHeight, "px)"),
          k: e.o(function () {}, 5249),
          l: e.n("white" !== h.skin && "skin-black"),
          m: e.o(function () {
            return h.handleClose && h.handleClose.apply(h, arguments);
          }, 5250),
        };
      },
    ],
    ["__scopeId", "data-v-a43cbb95"],
  ]);
wx.createComponent(t);
