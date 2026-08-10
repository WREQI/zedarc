var t = require("../../../../../common/vendor.js"),
  o = {
    props: {
      show: { type: Boolean, default: !1 },
      configs: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currIdx: { type: Number, default: 0 },
      posInfo: {
        type: Object,
        default: function () {
          return { bottom: 0, arrowMid: 0, left: 0, right: 0 };
        },
      },
      isDockRight: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
    },
    data: function () {
      return { ratio: 1, isH5Pro: !1, isMPPro: !0 };
    },
    computed: {
      left: function () {
        var t = this.posInfo,
          o = t.left,
          e = t.arrowMid,
          n = t.right;
        return this.isDockRight
          ? n - 100 * this.ratio
          : e - o < 80 * this.ratio
          ? o
          : e - 80 * this.ratio;
      },
    },
    watch: {
      show: function (o) {
        o && "mp" !== t.StockBridge.ENV && document.body.appendChild(this.$el);
      },
    },
    created: function () {
      if ("mp" === t.StockBridge.ENV) {
        var o = t.wx$1.getSystemInfoSync().windowWidth;
        this.ratio = o / 375;
      } else this.ratio = window.innerWidth / 375;
    },
    methods: {
      handleSelect: function (o) {
        this.$emit("select", o),
          t.StockBridge.report(
            "hq.portfolio.fliter_".concat(0 === o ? "all" : "change", "_click")
          );
      },
      handleClose: function (t) {
        t.stopPropagation(), this.$emit("close");
      },
    },
  },
  e = t._export_sfc(o, [
    [
      "render",
      function (o, e, n, r, i, c) {
        return t.e(
          { a: n.show },
          n.show
            ? {
                b: "translateX(".concat(
                  n.posInfo.arrowMid - c.left - 4 * i.ratio,
                  "px)"
                ),
                c: t.f(n.configs, function (o, e, r) {
                  return {
                    a: t.t(o.name),
                    b: e,
                    c: t.n(e === n.currIdx ? "selected" : ""),
                    d: t.o(
                      function (t) {
                        return c.handleSelect(e);
                      },
                      3494,
                      e
                    ),
                  };
                }),
                d: "".concat(n.posInfo.bottom + 9 * i.ratio, "px"),
                e: "".concat(c.left, "px"),
                f: t.n({
                  "skin-dark": "black" === n.skin,
                  "h5-pro": i.isH5Pro,
                  "mp-pro": i.isMPPro,
                }),
                g: t.o(function (t) {
                  return c.handleClose(t);
                }, 3495),
                h: t.o(function () {}, 3496),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d9744042"],
  ]);
wx.createComponent(e);
