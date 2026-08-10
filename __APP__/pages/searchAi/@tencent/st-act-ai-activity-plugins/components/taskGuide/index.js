var e = require("../../../../../../common/vendor.js"),
  t = require("../../task/index.js"),
  i = (
    "mp" === e.StockBridge.ENV
      ? { IS_MINA: !0, IS_LCT_XCX: !1 }
      : t.detect().env
  ).IS_LITE_MODE,
  n = {
    props: {
      guide: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { show: !1 };
    },
    computed: {
      isLiteMode: function () {
        return i;
      },
      scaleInfo: function () {
        var t = 375,
          i = 667;
        if ("undefined" != typeof window && window.innerWidth)
          (t = window.innerWidth), (i = window.innerHeight);
        else if (void 0 !== e.index && e.index.getSystemInfoSync) {
          var n = e.index.getSystemInfoSync();
          (t = n.screenWidth || 375), (i = n.screenHeight || 667);
        }
        return { screenWidth: t, screenHeight: i, scale: t / 750 };
      },
      positionOffset: function () {
        if (!this.guide.button) return { offsetY: 0 };
        var e = this.scaleInfo,
          t = e.scale,
          i = e.screenHeight,
          n = (this.guide.button.y || 600) * t,
          o = i - 88 - 10,
          u = 0;
        return n > o && (u = n - o), { offsetY: u };
      },
      imageContainerStyle: function () {
        if (!this.guide.image) return {};
        var e = this.scaleInfo,
          t = e.screenWidth,
          i = e.scale,
          n = this.positionOffset.offsetY,
          o = this.guide.image,
          u = (o.x || t / 2) * i,
          r = (o.y || 0) * i - n,
          s = (o.width || 750) * i,
          a = (o.height || 750) * i;
        return {
          left: void 0 !== o.x ? "".concat(u, "px") : "50%",
          top: "".concat(Math.max(0, r), "px"),
          width: "".concat(s, "px"),
          height: "".concat(a, "px"),
          transform: void 0 !== o.x ? "translate(0, 0)" : "translate(-50%, 0)",
        };
      },
      lightImageStyle: function () {
        if (!this.guide.image) return {};
        var e = this.guide.image,
          t = e.lightSrc || e.src || "";
        return { backgroundImage: t ? "url(".concat(t, ")") : "none" };
      },
      darkImageStyle: function () {
        if (!this.guide.image) return {};
        var e = this.guide.image,
          t = e.darkSrc || e.src || "";
        return { backgroundImage: t ? "url(".concat(t, ")") : "none" };
      },
      buttonStyle: function () {
        if (!this.guide.button) return { top: "600px" };
        var e = this.scaleInfo,
          t = e.screenWidth,
          i = e.scale,
          n = this.positionOffset.offsetY,
          o = this.guide.button,
          u = (o.x || t / 2) * i,
          r = (o.y || 600) * i - n;
        return {
          left: void 0 !== o.x ? "".concat(u, "px") : "50%",
          top: "".concat(Math.max(50, r), "px"),
          transform: void 0 !== o.x ? "translate(0, 0)" : "translate(-50%, 0)",
        };
      },
      buttonText: function () {
        return (this.guide.button && this.guide.button.text) || "立即体验";
      },
    },
    watch: {
      guide: {
        immediate: !0,
        handler: function () {
          this.showGuide();
        },
        deep: !0,
      },
    },
    methods: {
      showGuide: function () {
        this.guide && 0 !== Object.keys(this.guide).length
          ? (this.show = !0)
          : (this.show = !1);
      },
      hideGuide: function () {
        (this.show = !1), this.$emit("hide");
      },
      handleButtonClick: function () {
        this.guide.button &&
          this.guide.button.onClick &&
          this.guide.button.onClick(),
          this.hideGuide();
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (t, i, n, o, u, r) {
        return e.e(
          { a: n.guide && u.show },
          n.guide && u.show
            ? e.e(
                {
                  b:
                    n.guide.image &&
                    (n.guide.image.lightSrc || n.guide.image.src),
                },
                n.guide.image && (n.guide.image.lightSrc || n.guide.image.src)
                  ? { c: e.s(r.lightImageStyle) }
                  : {},
                {
                  d:
                    n.guide.image &&
                    (n.guide.image.darkSrc || n.guide.image.src),
                },
                n.guide.image && (n.guide.image.darkSrc || n.guide.image.src)
                  ? { e: e.s(r.darkImageStyle) }
                  : {},
                {
                  f: e.s(r.imageContainerStyle),
                  g: e.t(r.buttonText),
                  h: e.n({ "guide-button-lite": r.isLiteMode }),
                  i: e.s(r.buttonStyle),
                  j: e.o(function () {
                    return (
                      r.handleButtonClick &&
                      r.handleButtonClick.apply(r, arguments)
                    );
                  }, 3005),
                  k: e.o(function () {}, 3006),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a337a96a"],
  ]);
wx.createComponent(o);
