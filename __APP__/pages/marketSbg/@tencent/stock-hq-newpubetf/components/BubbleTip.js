var t = require("../../../../../common/vendor.js"),
  e = {
    name: "BubbleTip",
    props: {
      isShow: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      autoClose: { type: Boolean, default: !0 },
      autoCloseTime: { type: Number, default: 5e3 },
      isCloseBtnShow: { type: Boolean, default: !0 },
      arrowPosition: {
        type: String,
        default: "bottom-right",
        validator: function (t) {
          return (
            -1 !==
            [
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
              "right-center",
            ].indexOf(t)
          );
        },
      },
    },
    data: function () {
      return { show: !1 };
    },
    watch: {
      isShow: function (t) {
        this.show = t;
      },
      show: function (t) {
        var e = this;
        if (t && this.autoClose && this.autoCloseTime > 0) {
          var o = 0,
            n = setInterval(function () {
              5 === (o += 1) &&
                ((e.show = !1), clearInterval(n), e.$emit("bubbleClose"));
            }, 1e3);
          this.$on("hook:beforeDestroy", function () {
            return clearInterval(n);
          });
        }
      },
    },
    created: function () {
      this.show = this.isShow;
    },
    methods: {
      handleClick: function () {
        this.$emit("click");
      },
      closeBubble: function () {
        (this.show = !1), this.$emit("close");
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, i, s, r) {
        return t.e(
          { a: s.show },
          s.show
            ? t.e(
                { b: t.t(n.content), c: n.isCloseBtnShow },
                n.isCloseBtnShow
                  ? {
                      d: t.o(function () {
                        return (
                          r.closeBubble && r.closeBubble.apply(r, arguments)
                        );
                      }, 4355),
                    }
                  : {},
                {
                  e: t.n(n.arrowPosition),
                  f: t.o(function () {
                    return r.handleClick && r.handleClick.apply(r, arguments);
                  }, 4356),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-78e03d43"],
  ]);
wx.createComponent(o);
