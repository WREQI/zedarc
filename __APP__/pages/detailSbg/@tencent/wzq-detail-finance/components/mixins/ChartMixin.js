require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Math.pow,
  i = require("../../../../../../common/vendor.js"),
  o = {
    data: function () {
      return { touchPosition: { x: 0, y: 0 } };
    },
    watch: {
      tipsData: function (t, i) {
        t && i && t.title !== i.title && this.shakeit();
      },
    },
    methods: {
      shakeit: function () {
        var t = this;
        this.shakeTimeOut ||
          !this.isMini ||
          this.disableTooltips ||
          (this.shakeTimeOut = setTimeout(function () {
            i.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 100));
      },
      hideTooltip: function () {
        var t;
        this.disableTooltips ||
          ((this.showTooltips = !1),
          (this.tipsData = null),
          null == (t = this.chartObj) || t.hideTooltip());
      },
      chartTouchStop: function () {
        var t = this;
        this.disableTooltips ||
          (this.isTouching &&
            ((this.isTouching = !1),
            clearTimeout(this.tooltipTimer),
            (this.tooltipTimer = setTimeout(function () {
              t.isTouching || t.hideTooltip();
            }, 4e3)),
            this.hqBridge.busEmit("lockSwiper", !1)));
      },
      chartTouchStart: function (t) {
        var i = this;
        if (!this.disableTooltips) {
          (this.isTouching = !0), (this.startTouch = !0);
          var o = null == t ? void 0 : t.touches[0];
          (null == t ? void 0 : t.points) &&
            ((o.x = t.points[0].x),
            (o.y = t.points[0].y),
            (this.touchPosition = o)),
            setTimeout(function () {
              (null == t ? void 0 : t.points) &&
                i.isTouching &&
                t &&
                i.startTouch &&
                (i.shakeit(),
                i.chartObj.showTooltip(t.points[0]),
                (i.startTouch = !1));
            }, 500),
            setTimeout(function () {
              i.showTooltips &&
                !i.isTouching &&
                ((i.startTouch = !1), i.hideTooltip());
            }, 150);
        }
      },
      chartTouchMove: function (t) {
        if (!this.disableTooltips) {
          if (
            ((this.startTouch = !1),
            "mp" === this.hqBridge.ENV && (null == t ? void 0 : t.touches))
          ) {
            var i = t.touches[0],
              o = i.x,
              s = i.y;
            return (
              (this.touchPosition = { x: o, y: s }),
              void (
                this.showTooltips &&
                t &&
                this.chartObj.showTooltip({ x: o, y: s })
              )
            );
          }
          if (
            ["wzq_light", "wzq", "app"].includes(this.hqBridge.ENV) &&
            (null == t ? void 0 : t.touches)
          ) {
            var e = t.touches[0],
              h = t.target.getBoundingClientRect(),
              n = e.clientX - h.left,
              u = e.clientY - h.top;
            (this.touchPosition = { x: n, y: u }),
              this.showTooltips &&
                t &&
                this.chartObj.showTooltip({ x: n, y: u });
          }
        }
      },
    },
  };
(exports.ChartMixin = o),
  (exports.formatBigToText = function (t, i, o, s, e) {
    return (
      (t = parseFloat(t || 0)),
      (i = parseInt(i || 1, 10)),
      (o = parseInt(o || 0, 10)),
      (s = parseInt(s || 2, 10)),
      (e = e || ""),
      t < 1e4 * i
        ? (t = t.toFixed(o))
        : t >= 1e4 * i && t < 1e8
        ? (t >= 1e6 && t < 1e7 ? (s = 1) : t >= 1e7 && (s = 0),
          (t = "".concat((t / 1e4).toFixed(s), "万")))
        : (t >= 1e10 && t < 1e11 ? (s = 1) : t >= 1e11 && (s = 0),
          (t = "".concat((t / 1e8).toFixed(s), "亿"))),
      t + e
    );
  }),
  (exports.roundNumber = function (i, o) {
    var s = t(10, o);
    return Math.round(i * s) / s;
  });
