var t = require("../../../../../common/vendor.js"),
  i = {
    light: {
      "--fill-content-layer": "#fff",
      "--color-heavygray": "#262e40",
      "--border-light-divider": "#e9ebf0",
      "--color-midgray": "#475166",
    },
    dark: {
      "--color-heavygray": "#f0f1f5",
      "--fill-content-layer": "#12161f",
      "--border-light-divider": "#191e27",
      "--color-midgray": "#a7b0c4",
    },
  },
  o = {
    dark: "dark",
    black: "dark",
    panda: "dark",
    white: "light",
    blue: "light",
    light: "light",
  },
  e = {
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
        var i = this;
        this.shakeTimeOut ||
          !this.isMini ||
          this.disableTooltips ||
          (this.shakeTimeOut = setTimeout(function () {
            t.wx$1.vibrateShort({ type: "light" }),
              i.shakeTimeOut && clearTimeout(i.shakeTimeOut),
              (i.shakeTimeOut = null);
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
        var i = this;
        this.disableTooltips ||
          (this.isTouching &&
            ((this.isTouching = !1),
            clearTimeout(this.tooltipTimer),
            (this.tooltipTimer = setTimeout(function () {
              i.isTouching || i.hideTooltip();
            }, 4e3)),
            t.StockBridge.busEmit("common-market-lockSwiper", !1)));
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
      chartTouchMove: function (i) {
        if (!this.disableTooltips) {
          if (
            ((this.startTouch = !1),
            "mp" === t.StockBridge.ENV && (null == i ? void 0 : i.touches))
          ) {
            var o = i.touches[0],
              e = o.x,
              h = o.y;
            return (
              (this.touchPosition = { x: e, y: h }),
              void (
                this.showTooltips &&
                i &&
                this.chartObj.showTooltip({ x: e, y: h })
              )
            );
          }
          if (
            ("wzq_light" === t.StockBridge.ENV ||
              "app" === t.StockBridge.ENV) &&
            (null == i ? void 0 : i.touches)
          ) {
            var s = i.touches[0],
              l = i.target.getBoundingClientRect(),
              r = s.clientX - l.left,
              n = s.clientY - l.top;
            (this.touchPosition = { x: r, y: n }),
              this.showTooltips &&
                i &&
                this.chartObj.showTooltip({ x: r, y: n });
          }
        }
      },
    },
  };
(exports.ChartMixin = e),
  (exports.getCSSVariable = function (t, e) {
    var h =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "light";
    return "web" == ("undefined" != typeof document ? "web" : "mp")
      ? getComputedStyle(document.body).getPropertyValue(t)
      : i[o[h] || "light"][t] || "#262e40";
  });
