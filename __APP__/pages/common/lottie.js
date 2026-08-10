var t = require("lottie-miniprogram/miniprogram_dist/index.js"),
  e = require("../../common/vendor.js"),
  o = "lottie-mounted-node",
  i = null,
  n = {
    props: {
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      path: { type: String, default: "" },
      autoplay: { type: Boolean, default: !1 },
      loop: { type: Boolean, default: !1 },
      canvasId: { type: String, default: o },
      disableScroll: { type: Boolean, default: !1 },
    },
    watch: {
      path: {
        handler: function (t) {
          t && this.lottieAnimationLoad(t);
        },
        immediate: !0,
      },
    },
    created: function () {
      this.$emit("lottieReady", t.lottie);
    },
    mounted: function () {
      this.$emit("canvasLoad");
    },
    methods: {
      lottieAnimationLoad: function (e) {
        var n = this;
        e &&
          this.createSelectorQuery()
            .select("#".concat(o))
            .node(function (o) {
              if (o && o.node) {
                var a = o.node,
                  d = a.getContext("2d");
                (a.width = n.width),
                  (a.height = n.height),
                  t.lottie.setup(a),
                  (i = t.lottie.loadAnimation({
                    rendererSettings: { context: d },
                    loop: n.loop,
                    autoplay: n.autoplay,
                    path: e,
                  })).setSpeed(1),
                  i.addEventListener("complete", function () {
                    n.$emit("complete");
                  });
              }
            })
            .exec();
      },
    },
    beforeDestroy: function () {
      i && i.destroy();
    },
  },
  a = e._export_sfc(n, [
    [
      "render",
      function (t, e, o, i, n, a) {
        return {
          a: o.canvasId,
          b: "".concat(o.width, "px"),
          c: "".concat(o.height, "px"),
          d: o.disableScroll,
        };
      },
    ],
  ]);
wx.createComponent(a);
