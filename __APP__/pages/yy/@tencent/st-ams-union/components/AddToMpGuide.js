var t = require("../../../../../common/vendor.js"),
  o = {
    name: "AddToMpGuide",
    props: {
      visible: { type: Boolean, default: !1 },
      config: {
        type: Object,
        default: function () {
          return { delay: 0, autoClose: !0, autoCloseTime: 8e3 };
        },
      },
    },
    data: function () {
      return {
        bubblePosition: {},
        arrowClass: "top-right",
        autoCloseTimer: null,
        menuButtonInfo: null,
        arrowRightOffset: 60,
      };
    },
    watch: {
      visible: function (t) {
        t ? (this.initBubble(), this.startAutoClose()) : this.clearAutoClose();
      },
    },
    mounted: function () {
      this.getMenuButtonInfo(), this.visible && this.initBubble();
    },
    beforeDestroy: function () {
      this.clearAutoClose();
    },
    methods: {
      getMenuButtonInfo: function () {
        try {
          this.menuButtonInfo = t.wx$1.getMenuButtonBoundingClientRect();
        } catch (t) {
          this.menuButtonInfo = { left: 300, top: 20, width: 87, height: 32 };
        }
      },
      initBubble: function () {
        this.calculatePosition(), this.setArrowClass();
      },
      calculatePosition: function () {
        this.menuButtonInfo || this.getMenuButtonInfo();
        var o = this.menuButtonInfo,
          e = o.left,
          i = o.top,
          n = o.width,
          s = t.wx$1.getSystemInfoSync().windowWidth,
          u = e + n / 4,
          l = Math.max(24, i - 100),
          a = s - u - 20 - 10;
        (this.bubblePosition = { right: "20px", top: "".concat(l, "px") }),
          (this.arrowRightOffset = Math.max(12, Math.min(300, a)));
      },
      setArrowClass: function () {
        this.arrowClass = "top-right";
      },
      startAutoClose: function () {
        var t = this;
        this.config.autoClose &&
          this.config.autoCloseTime > 0 &&
          (this.autoCloseTimer = setTimeout(function () {
            t.handleClose();
          }, this.config.autoCloseTime || 8e3));
      },
      clearAutoClose: function () {
        this.autoCloseTimer &&
          (clearTimeout(this.autoCloseTimer), (this.autoCloseTimer = null));
      },
      handleClose: function () {
        this.clearAutoClose(), this.$emit("close");
      },
    },
  },
  e = t._export_sfc(o, [
    [
      "render",
      function (o, e, i, n, s, u) {
        return t.e(
          { a: i.visible },
          i.visible
            ? {
                b: t.o(function () {
                  return u.handleClose && u.handleClose.apply(u, arguments);
                }, 3310),
                c: t.n(s.arrowClass),
                d: s.arrowRightOffset + "px",
                e: t.s(s.bubblePosition),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-065f0fd0"],
  ]);
wx.createComponent(e);
