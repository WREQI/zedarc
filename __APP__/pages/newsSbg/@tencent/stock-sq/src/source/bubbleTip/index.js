var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "BubbleTip",
    props: {
      isShow: { type: Boolean, default: !1 },
      content: { type: String, default: "" },
      autoClose: { type: Boolean, default: !1 },
      autoCloseTime: { type: Number, default: 5e3 },
      isCloseBtnShow: { type: Boolean, default: !1 },
    },
    watch: {
      isShow: function (e) {
        this.show = e;
      },
      show: function (e) {
        var t = this;
        if (e && this.autoClose && this.autoCloseTime > 0) {
          var o = 0,
            n = setInterval(function () {
              5 === (o += 1) && ((t.show = !1), clearInterval(n));
            }, 1e3);
          this.$on("hook:beforeDestroy", function () {
            return clearInterval(n);
          });
        }
      },
    },
    data: function () {
      return { show: !1 };
    },
    created: function () {
      this.show = this.isShow;
    },
    methods: {
      handleClick: function (e) {
        e.stopPropagation();
      },
      closeBubble: function () {
        this.show = !1;
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, a, s, i) {
        return {
          a: e.t(n.content),
          b: e.o(function () {
            return i.closeBubble && i.closeBubble.apply(i, arguments);
          }, 5330),
          c: s.show,
          d: e.o(function () {
            return i.handleClick && i.handleClick.apply(i, arguments);
          }, 5331),
        };
      },
    ],
    ["__scopeId", "data-v-a3ffa8cf"],
  ]);
wx.createComponent(o);
