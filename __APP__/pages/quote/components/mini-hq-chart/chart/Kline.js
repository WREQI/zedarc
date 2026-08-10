require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  o = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  h = Object.defineProperty,
  l = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  y = function (t, e, i) {
    return e in t
      ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  f = function (t, e) {
    for (var i in e || (e = {})) d.call(e, i) && y(t, i, e[i]);
    if (u) {
      var n,
        o = a(u(e));
      try {
        for (o.s(); !(n = o.n()).done; ) {
          i = n.value;
          p.call(e, i) && y(t, i, e[i]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  m = function (t, e) {
    return l(t, c(e));
  },
  k = function (t, e, i) {
    return y(t, "symbol" != r(e) ? e + "" : e, i);
  },
  g = function (t, e, i) {
    return new Promise(function (n, o) {
      var s = function (t) {
          try {
            a(i.next(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          try {
            a(i.throw(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(s, r);
        };
      a((i = i.apply(t, e)).next());
    });
  },
  S = require("../../../../../common/vendor.js"),
  v = require("../../../@tencent/stock-hq-data/index.js"),
  w = require("./mixins/Share.js"),
  x = require("../../../throttle-debounce/esm/index.js"),
  b = require("../../../@tencent/stock-detail-drawline/utils/utils.js"),
  T = require("../../../utils/remindInfoFormat.js"),
  D = require("../../ChartWrapper.js"),
  I = (function () {
    function t(e, i) {
      o(this, t),
        k(this, "ctx", {}),
        k(this, "ratio", 1),
        (this.ctx = e),
        (this.ratio = e.canvas.width / i.layout.width),
        (this.bounds = {
          left: i.layout.chart.left,
          top: i.layout.chart.top,
          right: i.layout.chart.left + i.layout.chart.width,
          bottom: i.layout.chart.top + i.layout.chart.height,
        }),
        (this.relativeBounds = {
          left: 0,
          right: i.layout.chart.width,
          top: 0,
          bottom: i.layout.chart.height,
        });
    }
    return (
      s(t, [
        {
          key: "clipLine",
          value: function (t, e, i) {
            for (
              var n = i.left,
                o = i.right,
                s = i.top,
                r = i.bottom,
                a = [t.x, t.y, e.x, e.y],
                h = a[0],
                l = a[1],
                c = a[2],
                u = a[3],
                d = function (t, e) {
                  var i = 0;
                  return (
                    t < n ? (i |= 1) : t > o && (i |= 2),
                    e < s ? (i |= 4) : e > r && (i |= 8),
                    i
                  );
                },
                p = d(h, l),
                y = d(c, u),
                f = !1;
              !f;

            )
              if (p | y) {
                if (p & y) break;
                var m = void 0,
                  k = void 0,
                  g = p || y;
                1 & g
                  ? ((m = n),
                    h !== c && (k = l + ((u - l) * (m - h)) / (c - h)))
                  : 2 & g
                  ? ((m = o),
                    h !== c && (k = l + ((u - l) * (m - h)) / (c - h)))
                  : 4 & g
                  ? ((k = s),
                    l !== u && (m = h + ((c - h) * (k - l)) / (u - l)))
                  : 8 & g &&
                    ((k = r),
                    l !== u && (m = h + ((c - h) * (k - l)) / (u - l))),
                  g === p
                    ? (p = d((h = m), (l = k)))
                    : (y = d((c = m), (u = k)));
              } else f = !0;
            return f ? { begin: { x: h, y: l }, end: { x: c, y: u } } : null;
          },
        },
        {
          key: "drawLine",
          value: function (t) {
            var e = this,
              i = t.begin,
              n = t.end,
              o = t.lineWidth,
              s = t.strokeStyle,
              r = t.setLineDash,
              a = void 0 === r ? [] : r,
              h = this.clipLine(
                { x: i.x + this.bounds.left, y: i.y + this.bounds.top },
                { x: n.x + this.bounds.left, y: n.y + this.bounds.top },
                this.bounds
              );
            if (h) {
              var l = h.begin,
                c = h.end;
              if (
                ((this.ctx.lineWidth = o * this.ratio),
                (this.ctx.strokeStyle = s),
                this.ctx.beginPath(),
                (null == a ? void 0 : a.length) > 0)
              ) {
                var u = a.map(function (t) {
                  return t * e.ratio;
                });
                this.ctx.setLineDash(u);
              }
              this.ctx.moveTo(l.x * this.ratio, l.y * this.ratio),
                this.ctx.lineTo(c.x * this.ratio, c.y * this.ratio),
                this.ctx.stroke(),
                this.ctx.setLineDash([]);
            }
          },
        },
        {
          key: "drawRoundRect",
          value: function (t) {
            var e = t.points,
              i = t.lineWidth,
              o = t.strokeStyle,
              s = t.borderRadius,
              r = void 0 === s ? 4 : s;
            if (!(e.length < 2)) {
              var a = n(e, 2),
                h = a[0],
                l = a[1],
                c = Math.min(h.x, l.x),
                u = Math.min(h.y, l.y),
                d = Math.abs(l.x - h.x),
                p = Math.abs(l.y - h.y),
                y = u + this.bounds.top,
                f = c + this.bounds.left - i;
              this.setClipRegion(),
                b.RadiusRect(
                  this.ctx,
                  f * this.ratio,
                  y * this.ratio,
                  d * this.ratio,
                  p * this.ratio,
                  r * this.ratio,
                  { strokeStyle: o, alpha: 1 },
                  null,
                  i * this.ratio
                ),
                this.resetClip();
            }
          },
        },
        {
          key: "drawTextWithBackground",
          value: function (t) {
            var e = t.text,
              i = t.x,
              n = t.y,
              o = t.fontSize,
              s = void 0 === o ? 12 : o,
              r = t.color,
              a = void 0 === r ? "#000" : r,
              h = t.borderWidth,
              l = void 0 === h ? 1 : h,
              c = t.padding,
              u = void 0 === c ? 4 : c,
              d = t.borderRadius,
              p = void 0 === d ? 2 : d;
            this.ctx.font = "500 ".concat(
              s * this.ratio,
              "px PingFangSC-Medium"
            );
            var y = this.ctx.measureText(e).width + u * this.ratio * 2,
              f = 1.5 * s * this.ratio;
            return (
              (this.ctx.globalAlpha = 0.1),
              b.RadiusRect(
                this.ctx,
                (i + this.bounds.left + l) * this.ratio,
                (n + this.bounds.top) * this.ratio,
                y,
                f,
                p * this.ratio,
                { strokeStyle: a, alpha: 0.6 },
                { fillStyle: a, alpha: 0.1 },
                l * this.ratio
              ),
              (this.ctx.globalAlpha = 1),
              (this.ctx.fillStyle = a),
              (this.ctx.textBaseline = "top"),
              this.ctx.fillText(
                e,
                (i + this.bounds.left + u) * this.ratio,
                (n + this.bounds.top + 0.25 * s) * this.ratio
              ),
              { width: y / this.ratio + l, height: f / this.ratio }
            );
          },
        },
        {
          key: "drawTextBox",
          value: function (t) {
            var e = t.text,
              i = t.x,
              n = t.y,
              o = t.fontSize,
              s = void 0 === o ? 12 : o,
              r = t.color,
              a = void 0 === r ? "#000" : r;
            this.ctx.font = s * this.ratio + "px PingFangSC-Medium";
            var h = this.ctx.measureText(e).width;
            return (
              (this.ctx.fillStyle = a),
              (this.ctx.globalAlpha = 0.1),
              this.ctx.fillRect(
                (i + this.bounds.left) * this.ratio,
                (n + this.bounds.top) * this.ratio,
                h + 2 * this.ratio,
                (s + 2) * this.ratio
              ),
              (this.ctx.globalAlpha = 1),
              (this.ctx.fillStyle = a),
              (this.ctx.textBaseline = "top"),
              this.ctx.fillText(
                e,
                (i + this.bounds.left + 1) * this.ratio,
                (n + this.bounds.top + 1) * this.ratio
              ),
              { width: (h + 2 * this.ratio) / this.ratio, height: s + 2 }
            );
          },
        },
        {
          key: "drawRound",
          value: function (t) {
            var e = t.x,
              i = t.y,
              n = t.color,
              o = t.r;
            this.ctx.beginPath(),
              this.ctx.arc(
                (e + this.bounds.left) * this.ratio,
                (i + this.bounds.top) * this.ratio,
                o * this.ratio,
                0,
                2 * Math.PI
              ),
              (this.ctx.fillStyle = n),
              this.ctx.fill();
          },
        },
        {
          key: "setClipRegion",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.bounds,
              e = t.top,
              i = t.left,
              n = t.right,
              o = t.bottom;
            this.ctx.save(),
              this.ctx.beginPath(),
              this.ctx.rect(
                i * this.ratio,
                e * this.ratio,
                (n - i) * this.ratio,
                (o - e) * this.ratio
              ),
              this.ctx.clip();
          },
        },
        {
          key: "resetClip",
          value: function () {
            this.ctx.restore();
          },
        },
      ]),
      t
    );
  })(),
  C = {
    straightLine: function (t, e, i) {
      var n = i.getPixelCoords(e.points[0], i.options);
      t.drawLine({
        begin: { x: 0, y: n.y },
        end: { x: i.options.layout.chart.width, y: n.y },
        strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
        lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
      });
    },
    lineSegment: function (t, e, i) {
      var n = e.points.map(function (t) {
        return i.getPixelCoords(t, i.options);
      });
      t.drawLine({
        begin: { x: n[0].x, y: n[0].y },
        end: { x: n[1].x, y: n[1].y },
        strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
        lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
      });
    },
    slashLine: function (t, e, i) {
      var n = e.points.map(function (t) {
          return i.getPixelCoords(t, i.options);
        }),
        o = b.slashLineInBounds(n, {
          left: 0,
          right: i.options.layout.chart.width,
          top: 0,
          bottom: i.options.layout.chart.height,
        });
      2 === o.length &&
        t.drawLine({
          begin: o[0],
          end: o[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
    },
    slashRays: function (t, e, i) {
      var n = e.points.map(function (t) {
          return m(f({}, i.getPixelCoords(t, i.options)), {
            isAnchor: t.isAnchor,
          });
        }),
        o = e.points.find(function (t) {
          return t.isAnchor;
        }),
        s = i.getPixelCoords(o, i.options),
        r = b.rayInBounds(n, s, {
          left: 0,
          right: i.options.layout.chart.width,
          top: 0,
          bottom: i.options.layout.chart.height,
        });
      2 === r.length &&
        t.drawLine({
          begin: r[0],
          end: r[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
    },
    rect: function (t, e, i) {
      var n = e.points.map(function (t) {
        return i.getPixelCoords(t, i.options);
      });
      t.drawRoundRect({
        points: n,
        strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
        lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
      });
    },
    doubleTrack: function (t, e, i) {
      var n = e.points.filter(function (t) {
          return "upperTraceOperatingPoint" === t.group;
        }),
        o = e.points.filter(function (t) {
          return "lowerTraceOperatingPoint" === t.group;
        }),
        s = n.length > o.length ? n : o,
        r = n.length < o.length ? n[0] : o[0],
        a = s.map(function (t) {
          return i.getPixelCoords(t, i.options);
        }),
        h = i.getPixelCoords(r, i.options),
        l = b.slashLineInBounds(a, t.relativeBounds);
      2 === l.length &&
        t.drawLine({
          begin: l[0],
          end: l[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
      var c = b.parallelLineInBounds(a, h, t.relativeBounds);
      2 === c.length &&
        t.drawLine({
          begin: c[0],
          end: c[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
    },
    threeTrack: function (t, e, i) {
      var n = e.points.filter(function (t) {
          return "upperTraceOperatingPoint" === t.group;
        }),
        o = e.points.filter(function (t) {
          return "lowerTraceOperatingPoint" === t.group;
        }),
        s = n.length > o.length ? n : o,
        r = n.length < o.length ? n[0] : o[0],
        a = s.map(function (t) {
          return i.getPixelCoords(t, i.options);
        }),
        h = i.getPixelCoords(r, i.options),
        l = { x: (a[0].x + h.x) / 2, y: (a[0].y + h.y) / 2 },
        c = b.slashLineInBounds(a, t.relativeBounds);
      2 === c.length &&
        t.drawLine({
          begin: c[0],
          end: c[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
      var u = b.parallelLineInBounds(a, h, t.relativeBounds);
      2 === u.length &&
        t.drawLine({
          begin: u[0],
          end: u[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
      var d = b.parallelLineInBounds(a, l, t.relativeBounds);
      2 === d.length &&
        t.drawLine({
          begin: d[0],
          end: d[1],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
    },
    goldenSeparate: function (t, e, i) {
      var n = e.points.map(function (t) {
          return i.getPixelCoords(t, i.options);
        }),
        o = e.points[0].y - e.points[1].y,
        s = [
          "19.1% ".concat((e.points[0].y - 0.192 * o).toFixed(2)),
          "38.2% ".concat((e.points[0].y - 0.382 * o).toFixed(2)),
          "50.0% ".concat((e.points[0].y - 0.5 * o).toFixed(2)),
          "61.8% ".concat((e.points[0].y - 0.618 * o).toFixed(2)),
        ],
        r = n[1].y - n[0].y,
        a = [
          n[0].y + 0.192 * r,
          n[0].y + 0.382 * r,
          n[0].y + 0.5 * r,
          n[0].y + 0.618 * r,
        ];
      t.setClipRegion(),
        t.drawLine({
          begin: { x: 0, y: n[1].y },
          end: { x: i.options.layout.chart.width, y: n[1].y },
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        }),
        t.drawLine({
          begin: { x: 0, y: n[0].y },
          end: { x: i.options.layout.chart.width, y: n[0].y },
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
        });
      var h = [];
      s.forEach(function (i, n) {
        h.push(
          t.drawTextWithBackground({
            text: i,
            x: 0,
            y: a[n] - 7.5,
            fontSize: 10,
            color: b.COLORS[(null == e ? void 0 : e.color) || 0],
          })
        );
      }),
        a.forEach(function (n, o) {
          t.drawLine({
            begin: { x: h[o].width, y: n },
            end: { x: i.options.layout.chart.width, y: n },
            strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
            lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
            setLineDash: [5, 3],
          });
        }),
        t.resetClip();
    },
    text: function (t, e, i) {
      var n = e.points.map(function (t) {
        return i.getPixelCoords(t, i.options);
      });
      t.setClipRegion();
      var o,
        s = t.drawTextBox({
          text: e.text,
          x: n[1].x,
          y: n[1].y,
          fontSize: b.FONTSIZE[(null == e ? void 0 : e.fontSize) || 0] / 2,
          color: b.COLORS[(null == e ? void 0 : e.color) || 0],
        }),
        r = s.width / 2,
        a = s.height / 2,
        h = [
          { x: n[1].x + r, y: n[1].y },
          { x: n[1].x + s.width, y: n[1].y + a },
          { x: n[1].x + r, y: n[1].y + s.height },
          { x: n[1].x, y: n[1].y + a },
        ];
      (o =
        n[1].x < n[0].x &&
        n[1].x + s.width > n[0].x &&
        n[1].y + s.height < n[0].y
          ? 2
          : n[1].x > n[0].x
          ? 3
          : n[1].x + s.width < n[0].x
          ? 1
          : 0),
        t.drawLine({
          begin: h[o],
          end: n[0],
          strokeStyle: b.COLORS[(null == e ? void 0 : e.color) || 0],
          lineWidth: b.LINEWEIGHT[(null == e ? void 0 : e.weight) || 0],
          setLineDash: [5, 3],
        }),
        t.drawRound({
          x: n[0].x,
          y: n[0].y,
          r: 4,
          color: b.COLORS[(null == e ? void 0 : e.color) || 0],
        }),
        t.resetClip();
    },
  },
  P = function (t, e) {
    try {
      var i = e.ctx.ctx,
        n = new I(i, e),
        o =
          {
            m1: "minute1",
            m5: "minute5",
            m15: "minute15",
            m30: "minute30",
            m60: "minute60",
            m120: "minute120",
          }[e.type] || e.type;
      if (!t || !t["shape_kline_".concat(o)]) return;
      var s = JSON.parse(t["shape_kline_".concat(o)]).data || [],
        r = {
          straightLine: C.straightLine,
          straightLineSegment: C.lineSegment,
          slashLineSegment: C.lineSegment,
          slashLine: C.slashLine,
          slashRays: C.slashRays,
          rect: C.rect,
          doubleTrack: C.doubleTrack,
          threeTrack: C.threeTrack,
          goldenSeparate: C.goldenSeparate,
          text: C.text,
        };
      s.forEach(function (t) {
        if (t.points && t.points.length > 0) {
          var i = r[t.shapeType];
          i && i(n, t, { getPixelCoords: b.getPixelCoords, options: e });
        }
      });
    } catch (t) {}
  },
  L = [
    { key: "ma", value: "MA" },
    { key: "ema", value: "EMA" },
    { key: "boll", value: "BOLL" },
    { key: "sar", value: "SAR" },
    { key: "ene", value: "ENE" },
  ],
  M = [
    { key: "volume", value: "成交量" },
    { key: "cje", value: "成交额" },
    { key: "macd", value: "MACD" },
    { key: "dmi", value: "DMI" },
    { key: "cci", value: "CCI" },
    { key: "wr", value: "WR" },
    { key: "boll", value: "BOLL" },
    { key: "kdj", value: "KDJ" },
    { key: "ema", value: "EMA" },
    { key: "obv", value: "OBV" },
    { key: "rsi", value: "RSI" },
    { key: "sar", value: "SAR" },
    { key: "bias", value: "BIAS" },
    { key: "bbi", value: "BBI" },
    { key: "trix", value: "TRIX" },
    { key: "ene", value: "ENE" },
    { key: "vr", value: "VR" },
    { key: "arbr", value: "ARBR" },
    { key: "psy", value: "PSY" },
    { key: "dma", value: "DMA" },
    { key: "dpo", value: "DPO" },
  ],
  O = {
    oneMonth: { limit: 80, count: 1, unix: "months" },
    threeMonth: { limit: 140, count: 3, unix: "months" },
    halfYear: { limit: 180, count: 6, unix: "months" },
    oneYear: { limit: 310, count: 1, unix: "years" },
    threeYear: { limit: 800, count: 3, unix: "years" },
    fiveYear: { limit: 1350, count: 5, unix: "years" },
    allYear: { limit: 1999 },
  },
  B = null,
  R = getApp().globalData,
  q = {
    components: {
      kline: function () {
        return "../../../@tencent/stock-kline/kline.js";
      },
      NoData: function () {
        return "../../../@tencent/wzq-hq-chart/components/NoData.js";
      },
      Selector: function () {
        return "../components/Selector.js";
      },
      ChipInfoPanel: function () {
        return "../../../@tencent/wzq-hq-chart/components/ChipInfoPanel.js";
      },
      HistoryPanel: function () {
        return "../../../@tencent/wzq-hq-chart/HistoryPanel.js";
      },
      AreaSelectModal: function () {
        return "../../../@tencent/wzq-hq-chart/components/KlineAreaSelectModal.js";
      },
    },
    mixins: [w.Share],
    inject: {
      tradePoint: { default: { canGet: !1, prefetch: null, handle: null } },
      tradeSecret: {
        default: {
          show: !1,
          isSupport: !1,
          prefetch: null,
          handle: null,
          cache: null,
          sync: null,
        },
      },
      tradeLine: { default: { show: !1, isSupport: !1 } },
    },
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      currency: String,
      assertStockType: String,
      kType: { type: String, default: "day" },
      fqType: { type: Number, default: 1 },
      added: Boolean,
      hideChip: Boolean,
      hideIndicator: Boolean,
      disableInteract: Boolean,
      customSetting: Object,
      landscape: Boolean,
      guideMode: String,
      candleType: String,
      closeLineColor: String,
      showStaticDraw: Boolean,
      quote: Object,
      remindSubscribeInfo: Object,
    },
    data: function () {
      return {
        dataStatus: S.COMMON_PAGE_STATUS.LOADING,
        stockType: this.assertStockType || "",
        options: null,
        cacheOptions: {},
        noData: !1,
        touchMode: !1,
        initSelector: !1,
        selectorIndicators: [],
        fixNum: 2,
        indicator: "",
        history: {
          initData: null,
          boundaryMinsDate: 20201009,
          boundaryMinsString: "2020-10-09",
        },
        defaultSetting: D.getDefaultSetting(),
        status: "",
        swipeDirection: null,
        chipPanel: "",
        areaSelectData: null,
        showChipTip: !1,
        mpscrollTop: 0,
        drawBoardLayout: null,
        drawBoardOptions: null,
        drawTab: null,
        drawlineData: null,
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      symbol: function () {
        return v.utils.getSymbol(this.market, this.scode);
      },
      fq: function () {
        return v.utils.isIndex(this.stockType) ||
          v.utils.isHSPlate(this.market) ||
          v.utils.isDebt(this.stockType) ||
          v.utils.isNationalDebt(this.stockType) ||
          v.utils.isTransferableDebt(this.stockType) ||
          v.utils.isWarrants(this.stockType) ||
          v.utils.isFutures(this.market) ||
          v.utils.isSPMarket(this.market) ||
          v.utils.isNQMarket(this.market) ||
          v.utils.isForex(this.market) ||
          /^m\d/.test(this.kType)
          ? 3
          : v.utils.isUSMarket(this.market)
          ? 2 === this.fqType
            ? 1
            : this.fqType
          : this.fqType || 1;
      },
      mainIndicators: function () {
        return L;
      },
      mainIndicator: function () {
        return this.setting.mainIndicator;
      },
      indicators: function () {
        return v.utils.isHKMarket(this.market) &&
          v.utils.isIndex(this.stockType)
          ? M.slice(1)
          : M;
      },
      firstIndicator: function () {
        var t = this.setting.firstIndicator;
        return v.utils.isHKMarket(this.market) &&
          v.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      secondIndicator: function () {
        var t = this.setting.secondIndicator;
        return v.utils.isHKMarket(this.market) &&
          v.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      thirdIndicator: function () {
        var t = this.setting.thirdIndicator;
        return v.utils.isHKMarket(this.market) &&
          v.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      fourthIndicator: function () {
        var t = this.setting.fourthIndicator;
        return v.utils.isHKMarket(this.market) &&
          v.utils.isIndex(this.stockType) &&
          "volume" === t
          ? "cje"
          : t;
      },
      isBCCurrency: function () {
        return v.utils.isBCCurrency(this.market);
      },
      canGetTradeLine: function () {
        return (
          "day" === this.kType &&
          this.tradeLine.isSupport &&
          (this.setting.tradeLine || /tradeLine/.test(this.guideMode))
        );
      },
      isMinuteKline: function () {
        return /^m(1|5|10|15|20|30|60|120)/.test(this.kType);
      },
    },
    watch: {
      touchMode: function (t) {
        t &&
          S.StockBridge.report("hq.detail.chart_touch_cross", {
            stockid: this.symbol,
          });
      },
      showStaticDraw: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      null == (e = this.$refs.chart) || e.handleDraw();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
    created: function () {
      B ||
        (B = new v.DetailApi(function () {
          for (var t, e = arguments.length, i = new Array(e), n = 0; n < e; n++)
            i[n] = arguments[n];
          return 1 === i.length
            ? S.StockBridge.request(i[0], "GET", {}, { forceCallback: !0 })
            : (i[3] && (i[3].forceCallback = !0),
              (t = S.StockBridge).request.apply(t, i));
        })),
        (this.isFirstLoadData = !0),
        this.getInit(this.kType),
        (this.debounceReportPinch = x.debounce(500, this.reportPinch));
    },
    mounted: function () {
      S.StockBridge.busOn("common-pageScroll", this.handlePageScroll);
    },
    beforeUnmount: function () {
      S.StockBridge.busOff("common-pageScroll", this.handlePageScroll),
        (this.options = null);
    },
    methods:
      ((t = {
        getPointPosition: function (t) {
          var e, i;
          return null !=
            (i =
              null == (e = this.$refs.chart) ? void 0 : e.getPointPosition(t))
            ? i
            : null;
        },
        getExRightGapPosition: function () {
          var t,
            e,
            i = this.chartData,
            n =
              null == (e = null == (t = this.options) ? void 0 : t.options)
                ? void 0
                : e.count;
          if (!Array.isArray(i) || 0 === i.length || !n) return null;
          var o = i.slice(Math.max(0, i.length - n));
          if (i[i.length - 1].time !== o[o.length - 1].time) return null;
          var s = o.findIndex(function (t, e) {
            return t.isExRight && e > 0 && e < o.length - 1;
          });
          if (-1 === s) return null;
          var r = o[s],
            a = o[s - 1],
            h = this.getPointPosition(r.time),
            l = this.getPointPosition(a.time);
          if (!h || !l) return null;
          var c = (h.x + l.x) / 2;
          return {
            x: c,
            y: ((h.open.y + h.close.y) / 2 + (l.open.y + l.close.y) / 2) / 2,
            isLeft: c < this.width / 2,
            prevDate: a.time,
            currDate: r.time,
          };
        },
        queryStockAlert: function (t) {
          return S.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/query",
            S.RequestTypeEnum.POST,
            f({}, t),
            { headers: { "Content-Type": "application/json" } }
          ).catch(function (t) {});
        },
        queryPriceRemind: function (t) {
          return g(
            this,
            null,
            i().mark(function e() {
              var n, o, s, r, a, h, l, c, u;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !(
                            v.utils.isHSPlate(this.market) ||
                            v.utils.isBJMarket(this.market) ||
                            v.utils.isNQMarket(this.market) ||
                            v.utils.isUKMarket(this.market) ||
                            v.utils.isCSIndex(this.market) ||
                            v.utils.isFTIndex(this.market) ||
                            v.utils.isFutures(this.market) ||
                            v.utils.isSPMarket(this.market) ||
                            "usHXC" === this.symbol ||
                            "usNBI" === this.symbol ||
                            v.utils.isDebt(this.stockType)
                          )
                        ) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", void t());
                      case 2:
                        if (
                          !this.remindSubscribeInfo ||
                          (this.lastRemindSubscribeInfo &&
                            T.deepEqual(
                              this.remindSubscribeInfo,
                              this.lastRemindSubscribeInfo
                            ))
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          ((this.lastRemindSubscribeInfo =
                            this.remindSubscribeInfo),
                          void t(this.remindSubscribeInfo))
                        );
                      case 4:
                        return (
                          (s = this.market),
                          (r = this.scode),
                          (a = this.symbol),
                          (h = this.stockType),
                          (e.next = 10),
                          this.queryStockAlert({
                            market: s,
                            code: r,
                            is_fund: v.utils.isFund(h) ? 1 : 0,
                            symbol: a.replace(/us\./, "us"),
                            source: 2,
                          })
                        );
                      case 10:
                        if (
                          ((l = e.sent),
                          (c =
                            null ==
                            (o =
                              null == (n = null == l ? void 0 : l.stocks)
                                ? void 0
                                : n[0])
                              ? void 0
                              : o.subscribe_infos))
                        ) {
                          e.next = 14;
                          break;
                        }
                        return e.abrupt("return", void t());
                      case 14:
                        (u = T.getChartRemindData(c, this.quote.dqj))
                          ? t(u)
                          : t();
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
        },
        handlePageScroll: function (t) {
          (this.mpscrollTop = t),
            !this.isShowAreaSelect ||
              t < 250 ||
              this.onAreaSwitch({ isShowAreaSelect: !1, source: "scroll" });
        },
        toggleMacdChecked: function (t) {
          var e;
          this.options &&
            this.options.options &&
            ((this.options.options.setting.macdPattern = t),
            (this.setting.macdPattern = t),
            null == (e = this.$refs.chart) || e.toggleMACDPattern(t),
            this.$emit("updateSetting", this.setting));
        },
        chartFuncChange: function (t) {
          var e,
            i,
            n,
            o,
            s,
            r,
            a = this,
            h = t.func,
            l = t.enabled,
            c = void 0 !== l && l;
          t.value;
          switch (h) {
            case "fq":
              this.$nextTick(function () {
                a.getInit(a.kType, !0, !0);
              });
              break;
            case "chip":
              (this.showChipTip = c), this.onChipSwitch({ isShowChip: c });
              break;
            case "trendLine":
              null == (e = this.$refs.chart) || e.toggleTrendLine(c),
                null == (i = this.$refs.chart) || i.toggleTrendLineMiniWzq(c);
              break;
            case "supportPressureLine":
              null == (n = this.$refs.chart) || n.toggleSupportPressureLine(c);
              break;
            case "areaSelect":
              this.onAreaSwitch({ isShowAreaSelect: c });
              break;
            case "magicNine":
              null == (o = this.$refs.chart) || o.toggleMagicNine(c);
              break;
            case "tradeLine":
              (this.setting.tradeLine = c),
                null == (s = this.$refs.chart) || s.toggleTradeLine(c),
                this.$nextTick(function () {
                  a.getInit(a.kType, !0, !0);
                });
              break;
            case "tradeSecret":
              null == (r = this.$refs.chart) || r.toggleTradeSecret(c);
          }
        },
        handleShowTeach: function () {
          S.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              zxtype: 1,
              id: "SN20221125142509833c65e8",
              articleStyle: "fullTeach",
            },
          });
        },
        showLesson: function () {
          this.$emit("showLesson");
        },
        reportException: function (t) {
          this.$emit("error", t);
        },
        hotfixWxBug: function () {
          var t = this;
          this.landscape ||
            this.$nextTick(function () {
              var e, i;
              null ==
                (i =
                  null == (e = t.$refs.chart) ? void 0 : e.setDisableScroll) ||
                i.call(e, !0),
                setTimeout(function () {
                  var e, i;
                  null ==
                    (i =
                      null == (e = t.$refs.chart)
                        ? void 0
                        : e.setDisableScroll) || i.call(e, !1);
                }, 600);
            });
        },
        disableTouchEvent: function () {
          var t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          (this.disableInteract = t), this.updateData();
        },
        handleShowRemindPop: function (t) {
          this.showRemindPop = t;
        },
        tabActivated: function (t) {
          var e = this;
          t !== this.kType &&
            (this.onAreaSwitch({ isShowAreaSelect: !1 }),
            this.hideHistoryPanel()),
            this.$nextTick(function () {
              e.getInit(e.kType);
            });
        },
        tabDeactivated: function () {},
        updateData: function () {
          this.getInit(this.kType);
        },
        getData: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return g(
            this,
            null,
            i().mark(function o() {
              var s,
                r,
                a,
                h,
                l,
                c,
                u = this;
              return i().wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          n
                            ? (clearTimeout(this.tradePointTimer),
                              (this.tradePointTimer = setTimeout(function () {
                                u.tradePoint.canGet &&
                                  u.tradePoint.prefetch(t, e);
                              }, 1500)))
                            : this.tradePoint.canGet &&
                              this.tradePoint.prefetch(t, e),
                          this.tradeSecret.prefetch &&
                            this.tradeSecret.prefetch(t),
                          (s = S.login.getLoginInfo() || {}),
                          (r = {
                            market: this.market,
                            scode: this.scode,
                            currency: this.currency,
                            fq: this.canGetTradeLine ? 1 : this.fq,
                            end: t,
                            added: this.added || this.landscape ? 1 : 0,
                            opPoints: this.canGetTradeLine,
                            openId: s.qluin,
                            fsKey: s.qlskey,
                          }),
                          (a = {
                            day: 1,
                            week: 2,
                            month: 3,
                            season: 4,
                            year: 5,
                          }[this.kType]),
                          (h = O[this.kType] && O[this.kType].limit),
                          (l = /^m\d/.test(this.kType)
                            ? B.getMinKline(
                                m(f({}, r), { limit: 370, type: this.kType }),
                                { needProcess: !0, useNewUrl: !0 }
                              )
                            : a
                            ? B.getKline(
                                m(f({}, r), { limit: 370, kline: a }),
                                { needProcess: !0 }
                              )
                            : B.getKline(
                                m(f({}, r), {
                                  limit: h,
                                  kline: "allYear" === this.kType ? 2 : 1,
                                }),
                                { needProcess: !0 }
                              )),
                          (i.prev = 2),
                          (i.next = 5),
                          l
                        );
                      case 5:
                        return (
                          (c = i.sent),
                          i.abrupt(
                            "return",
                            (this.isFirstLoadData && "{}" === JSON.stringify(c)
                              ? (this.dataStatus = S.COMMON_PAGE_STATUS.ERROR)
                              : ((this.dataStatus = null),
                                this.isFirstLoadData &&
                                  (this.isFirstLoadData = !1)),
                            c)
                          )
                        );
                      case 9:
                        if (
                          ((i.prev = 9),
                          (i.t0 = i.catch(2)),
                          !i.t0 || -1 != +i.t0.errno)
                        ) {
                          i.next = 13;
                          break;
                        }
                        return i.abrupt("return");
                      case 13:
                        this.dataStatus = S.COMMON_PAGE_STATUS.ERROR;
                      case 14:
                      case "end":
                        return i.stop();
                    }
                },
                o,
                this,
                [[2, 9]]
              );
            })
          );
        },
        retryData: function () {
          (this.dataStatus = S.COMMON_PAGE_STATUS.LOADING), this.getData();
        },
        getInit: function (t, n) {
          var o =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return g(
            this,
            null,
            i().mark(function s() {
              var r, a, h, l, c, u, d, p, y, k, g, S, w, x, b;
              return i().wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (this.noData = !1),
                          (i.next = 3),
                          this.getData("", n, o)
                        );
                      case 3:
                        if (
                          ((d = i.sent),
                          t === this.kType &&
                            (null == (r = null == d ? void 0 : d.raw)
                              ? void 0
                              : r.qt))
                        ) {
                          i.next = 6;
                          break;
                        }
                        return i.abrupt("return");
                      case 6:
                        (p =
                          d.raw.qt.fields || d.raw.qt[this.symbol] || d.raw.qt),
                          (this.stockType = D.getStockType(this.market, p)),
                          (this.fixNum =
                            (null ==
                            (h =
                              null ==
                              (a = this.isBCCurrency
                                ? v.utils.formatCurrency(p[3])
                                : p[3])
                                ? void 0
                                : a.split(".")[1])
                              ? void 0
                              : h.length) || 2),
                          (y = D.getRenderPoint(
                            this.stockType,
                            this.market,
                            this.scode
                          )),
                          (k = Boolean(O[this.kType])),
                          (this.status = v.utils.isForex(this.market)
                            ? ""
                            : p[40]),
                          !["U"].includes(this.status) &&
                          (null == (l = d.chartData) ? void 0 : l.length)
                            ? ((g = this.getChipOptions()),
                              (this.showChipTip = g.isShowChip),
                              (S =
                                k &&
                                this.computeDurationCount(
                                  d.chartData,
                                  O[this.kType].count,
                                  O[this.kType].unix
                                )),
                              (this.chartData = d.chartData),
                              (this.options = {
                                timestamp: Date.now(),
                                data: null,
                                devicePixelRatio: R.systemInfo.devicePixelRatio,
                                platform: R.systemInfo.platform,
                                options: m(
                                  f(
                                    {
                                      layout: this.landscape
                                        ? "kline-landscape"
                                        : "kline-portrait",
                                      skin:
                                        "black" === this.skin
                                          ? "dark"
                                          : "plain",
                                      market: this.market,
                                      scode: this.scode,
                                      type: this.kType,
                                      candleType: this.candleType,
                                      fq: this.isBCCurrency
                                        ? ""
                                        : this.canGetTradeLine
                                        ? 1
                                        : this.fq,
                                      fixNum: this.fixNum,
                                      stockUnit: D.getTradeUnit(
                                        this.stockType,
                                        this.market
                                      ),
                                      count: k ? S : y[2],
                                      queryCount: k ? O[this.kType].limit : 370,
                                      hideIndicator: this.hideIndicator,
                                      useIndicators: this.indicators.map(
                                        function (t) {
                                          return t.key;
                                        }
                                      ),
                                      mainIndicator: this.mainIndicator || "ma",
                                      currIndicator: this.firstIndicator,
                                      secondIndicator: this.secondIndicator,
                                      thirdIndicator: this.thirdIndicator,
                                      fourthIndicator: this.fourthIndicator,
                                      disableInteract: this.disableInteract,
                                      setting: this.setting,
                                      guideMode: this.guideMode,
                                      isSupportTradeSecret:
                                        this.tradeSecret.isSupport,
                                      isSupportTradeLine:
                                        this.tradeLine.isSupport,
                                      disableSwitchMainIndicator:
                                        this.landscape,
                                      isSupportMacdRankEntry:
                                        v.utils.isHSMarket(this.market) ||
                                        v.utils.isHSPlate(this.market),
                                      isSupportRemindPrice:
                                        v.utils.isHSMarket(this.market) ||
                                        v.utils.isHKMarket(this.market) ||
                                        v.utils.isUSMarket(this.market),
                                      enableMinsHistory: !this.landscape,
                                      boundaryMinsDate:
                                        this.history.boundaryMinsDate,
                                      boundaryMinsString:
                                        this.history.boundaryMinsString,
                                      isShowAreaSelect: this.isShowAreaSelect,
                                    },
                                    g
                                  ),
                                  { enableDrawBoard: !0 }
                                ),
                              }),
                              this.closeLineColor &&
                                ((w = "black" === this.skin ? "dark" : "plain"),
                                (this.options.themeSkin = e({}, w, {
                                  close: this.closeLineColor,
                                }))),
                              (x = d.raw.fsStartDate) &&
                                this.options &&
                                this.options.options &&
                                ((b = ""
                                  .concat(x.slice(0, 4), "-")
                                  .concat(x.slice(4, 6), "-")
                                  .concat(x.slice(6))),
                                (this.options.options.boundaryMinsDate = +x),
                                (this.options.options.boundaryMinsString = b),
                                (this.history.boundaryMinsDate = +x),
                                (this.history.boundaryMinsString = b)),
                              this.tradePoint.canGet &&
                                (null == (u = (c = this.tradePoint).handle) ||
                                  u.call(c, !0)),
                              this.tradeSecret.handle &&
                                this.tradeSecret.handle(),
                              this.$emit("onChipSwitch", g.isShowChip))
                            : (this.noData = !0),
                          (this.cacheOptions[this.kType] = this.options),
                          this.$emit("getQTData", p),
                          this.$emit("handleExtra", d.raw);
                      case 12:
                      case "end":
                        return i.stop();
                    }
                },
                s,
                this
              );
            })
          );
        },
        getInitData: function (t) {
          this.hotfixWxBug();
          var e = this.chartData || [];
          t && t(e);
        },
      }),
      e(t, "hotfixWxBug", function () {
        var t = this;
        this.landscape ||
          this.$nextTick(function () {
            var e, i;
            null ==
              (i = null == (e = t.$refs.chart) ? void 0 : e.setDisableScroll) ||
              i.call(e, !0),
              setTimeout(function () {
                var e, i;
                null ==
                  (i =
                    null == (e = t.$refs.chart)
                      ? void 0
                      : e.setDisableScroll) || i.call(e, !1);
              }, 600);
          });
      }),
      e(t, "computeDurationCount", function (t, e, i) {
        if (t.length <= 0) return 0;
        if (!e || !i) return t.length > 1949 ? 1949 : t.length;
        var n = new Date(t[t.length - 1].quoteTime),
          o = new Date(n);
        "months" === i
          ? (o = new Date(o.setMonth(o.getMonth() - e)))
          : "years" === i && (o = new Date(o.setFullYear(o.getFullYear() - e)));
        for (var s = 1, r = t.length - 2; r >= 0; r--) {
          var a = new Date(t[r].quoteTime);
          o.getTime() <= a.getTime() && (s += 1);
        }
        return s;
      }),
      e(t, "getMore", function (t, e) {
        return g(
          this,
          null,
          i().mark(function n() {
            var o, s, r;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (i.next = 2), this.getData(t);
                    case 2:
                      (r = i.sent),
                        e(r.chartData),
                        this.tradePoint.canGet &&
                          (null == (s = (o = this.tradePoint).handle) ||
                            s.call(o, !0)),
                        this.tradeSecret.handle && this.tradeSecret.handle(t);
                    case 4:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this
            );
          })
        );
      }),
      e(t, "getChipOptions", function () {
        var t =
            !Boolean(O[this.kType]) &&
            !this.hideChip &&
            v.utils.isHSMarket(this.market) &&
            ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType),
          e = void 0 !== this.setting.isShowChip;
        return (
          t &&
            !e &&
            v.utils.isHSMarket(this.market) &&
            ((this.setting.isShowChip = !0),
            this.$emit("updateSetting", this.setting)),
          {
            isSupportChip: t,
            isShowChip:
              t &&
              (e ? this.setting.isShowChip : v.utils.isHSMarket(this.market)),
          }
        );
      }),
      e(t, "handleChipInfoChange", function (t) {
        var e = t.layout,
          i = t.chipData;
        isNaN(i.chipTime) ||
          (i.chipTime = S.dayjs(i.chipTime, ["YYYYMMDDHHmm"], !0).format(
            "YYYY-MM-DD HH:mm"
          )),
          (this.chipPanel = { layout: e, chipData: i });
      }),
      e(t, "areaSelectChange", function (t) {
        var e = this.fixNum;
        if (this.isShowAreaSelect && t) {
          var i = ""
              .concat(+t.rangeIncrease > 0 ? "+" : "")
              .concat((100 * t.rangeIncrease).toFixed(2), "%"),
            n =
              !this.isMinuteKline &&
              (v.utils.isHSMarket(this.market) ||
                v.utils.isHKMarket(this.market) ||
                v.utils.isHSPlate(this.market) ||
                v.utils.isCSIndex(this.market));
          (this.areaSelectData = m(f({}, t), {
            startTime: t.startTime,
            endTime: t.endTime,
            startPrice: parseFloat(t.startPrice).toFixed(e),
            endPrice: parseFloat(t.endPrice).toFixed(e),
            maxPrice: parseFloat(t.maxPrice).toFixed(e),
            minPrice: parseFloat(t.minPrice).toFixed(e),
            cje: n ? (+t.cje ? v.utils.bigNumberToText(1e4 * t.cje) : 0) : "--",
            hsl: "".concat(parseFloat(t.hsl).toFixed(2), "%"),
            zf: "".concat(parseFloat(100 * t.zf).toFixed(2), "%"),
            rangeIncrease: i,
            rangeIncreaseClass:
              0 == +t.rangeIncrease
                ? "color-equal"
                : +t.rangeIncrease > 0
                ? "color-rise"
                : "color-drop",
            isMinuteKline: this.isMinuteKline,
            unit: D.getTradeUnit(this.stockType, this.market),
          })),
            (v.utils.isUSMarket(this.market) ||
              v.utils.isHKMarket(this.market) ||
              v.utils.isHSPlate(this.market)) &&
              this.areaSelectData.isMinuteKline &&
              (this.areaSelectData.hsl = "--");
        }
        this.landscape &&
          this.$emit(
            "showAreaSelect",
            this.isShowAreaSelect ? this.areaSelectData : null
          );
      }),
      e(t, "macdRankEntry", function () {
        S.StockBridge.report("hq.stock_detail.kline_macd_rank_enter", {
          stockid: this.symbol,
        }),
          S.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/macd-rank"
          );
      }),
      e(t, "onTouchMove", function (t) {
        var e;
        (this.touchMode = !0),
          (t.fixNum = this.fixNum),
          (t.lastKlineClose = this.chartData[this.chartData.length - 1].close),
          this.$emit("onTouchMove", t),
          (null == (e = this.lastTouchData) ? void 0 : e.quoteTime) !==
            (null == t ? void 0 : t.quoteTime) &&
            ((this.lastTouchData = t), this.shakeit());
      }),
      e(t, "shakeit", function () {
        var t = this;
        this.shakeTimeOut ||
          (this.shakeTimeOut = setTimeout(function () {
            S.wx$1.vibrateShort({ type: "light" }),
              t.shakeTimeOut && clearTimeout(t.shakeTimeOut),
              (t.shakeTimeOut = null);
          }, 200));
      }),
      e(t, "onTouchCancel", function () {
        (this.touchMode = !1), this.$emit("onTouchCancel");
      }),
      e(t, "onTouchEnd", function () {
        var t;
        this.touchMode &&
          this.history.initData &&
          (null == (t = this.$refs.historyPanel) ||
            t.switchByCrossLine(this.lastTouchData)),
          this.swipeDirection &&
            (S.StockBridge.report(
              "stocklist.stock_swipe_".concat(this.swipeDirection),
              { stockid: this.symbol }
            ),
            (this.swipeDirection = null));
      }),
      e(t, "onPinch", function (t) {
        this.$emit("onPinch"), this.debounceReportPinch(t);
      }),
      e(t, "reportPinch", function (t) {
        S.StockBridge.report(
          "hq.stock_detail.pinch_" + (t ? "bigger" : "smaller"),
          { stockid: this.symbol }
        );
      }),
      e(t, "onDoubleTap", function (t) {
        this.tapTimeout &&
          (clearTimeout(this.tapTimeout), (this.tapTimeout = null)),
          this.onAreaSwitch({ isShowAreaSelect: !1 }),
          this.hideHistoryPanel(),
          this.$emit("onDoubleTap", t);
      }),
      e(t, "onPopup", function (t) {
        var e = this;
        if (
          !(
            this.showRemindPop ||
            (this.$refs.selector && this.$refs.selector.popup.show)
          )
        ) {
          this.initSelector = !0;
          var i = "".concat(
            ["main", "first", "second", "third", "fourth"][t],
            "Indicator"
          );
          (this.indicator = this[i]),
            (this.selectorIndicators =
              0 === t ? this.mainIndicators : this.indicators),
            this.$nextTick(function () {
              var i;
              S.StockBridge.busEmit(
                "market-detail-autoHideTradePanel",
                "minsSelector"
              ),
                null == (i = e.$refs.selector) || i.onPopup(t);
            }),
            S.StockBridge.report("hq.stock_detail.indicator_switch_click", {
              stockid: this.symbol,
            });
        }
      }),
      e(t, "onSwitchIndicator", function (t, e) {
        return g(
          this,
          null,
          i().mark(function n() {
            var o, s;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (((i.t0 = this.tradeSecret.sync), !i.t0)) {
                        i.next = 5;
                        break;
                      }
                      return (i.next = 4), this.tradeSecret.sync(t, e);
                    case 4:
                      i.t0 = i.sent;
                    case 5:
                      if (!i.t0) {
                        i.next = 7;
                        break;
                      }
                      return i.abrupt("return");
                    case 7:
                      if (this.options && this.options.options) {
                        i.next = 9;
                        break;
                      }
                      return i.abrupt("return");
                    case 9:
                      (o = "".concat(
                        ["main", "curr", "second", "third", "fourth"][t],
                        "Indicator"
                      )),
                        (s = 1 === t ? "firstIndicator" : o),
                        (this.options.options[o] = e),
                        (this.setting[s] = e),
                        this.$emit("updateSetting", this.setting),
                        S.StockBridge.report(
                          "hq.stock_detail.indicator_area_click",
                          { stockid: this.symbol }
                        );
                    case 11:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this
            );
          })
        );
      }),
      e(t, "switchIndicator", function (t, n) {
        return g(
          this,
          null,
          i().mark(function o() {
            var s, r;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (((i.t0 = this.tradeSecret.sync), !i.t0)) {
                        i.next = 5;
                        break;
                      }
                      return (i.next = 4), this.tradeSecret.sync(t, n);
                    case 4:
                      i.t0 = i.sent;
                    case 5:
                      if (!i.t0) {
                        i.next = 7;
                        break;
                      }
                      return i.abrupt("return");
                    case 7:
                      if (this.options && this.options.options) {
                        i.next = 9;
                        break;
                      }
                      return i.abrupt("return");
                    case 9:
                      (s = "".concat(
                        ["main", "curr", "second", "third", "fourth"][t],
                        "Indicator"
                      )),
                        (r = 1 === t ? "firstIndicator" : s),
                        (this.options = {
                          data: this.options.data,
                          devicePixelRatio: R.systemInfo.devicePixelRatio,
                          platform: R.systemInfo.platform,
                          options: m(f({}, this.options.options), e({}, s, n)),
                        }),
                        (this.setting[r] = n),
                        this.$emit("updateSetting", this.setting),
                        S.StockBridge.report(
                          "hq.stock_detail.indicator_area_click",
                          { stockid: this.symbol }
                        );
                    case 11:
                    case "end":
                      return i.stop();
                  }
              },
              o,
              this
            );
          })
        );
      }),
      e(t, "onTipTap", function (t) {
        this.$parent.HQ_CHART_COMPOSITION && this.$parent.$emit("onTipTap", t);
      }),
      e(t, "hideHistoryPanel", function () {
        this.history.initData = null;
      }),
      e(t, "onBarTap", function (t, e) {
        var i;
        "time" === t
          ? (this.history.initData
              ? null == (i = this.$refs.historyPanel) || i.showPanel(e)
              : (this.history.initData = e),
            S.StockBridge.report(
              "hq.stock_detail.history_mins_open_".concat(e.tapRegion),
              { stockid: this.symbol }
            ))
          : this.$parent.HQ_CHART_COMPOSITION &&
            this.$parent.$emit("onBarTap", t, e);
      }),
      e(t, "onChipSwitch", function (t) {
        var e = t.isShowChip;
        (this.setting.isShowChip = !!e),
          (this.showChipTip = this.setting.isShowChip),
          this.options &&
            this.options.options &&
            ((this.options = m(f({}, this.options), {
              options: m(f({}, this.options.options), { isShowChip: !!e }),
            })),
            this.$emit("onChipSwitch", this.setting.isShowChip),
            this.$emit("updateSetting", this.setting),
            S.StockBridge.report(
              "hq.detail.kline.chip.switch_" + (e ? "show" : "hide"),
              { isShowChip: e }
            ));
      }),
      e(t, "onAreaSwitch", function (t) {
        var e,
          i,
          n = t.isShowAreaSelect;
        this.isShowAreaSelect !== n &&
          (null == (e = this.$refs.historyPanel) || e.hidePanel(),
          n && (null == (i = this.chartData) ? void 0 : i.length) < 2
            ? S.StockBridge.toast("区间统计适用于2根K线以上", "none")
            : ((this.isShowAreaSelect = !!n),
              this.options &&
                this.options.options &&
                ((this.options = m(f({}, this.options), {
                  options: m(f({}, this.options.options), {
                    isShowAreaSelect: n,
                  }),
                })),
                this.$emit("onAreaSwitch", this.isShowAreaSelect),
                S.StockBridge.report(
                  "hq.detail.kline.area_select.switch_" + (n ? "show" : "hide"),
                  { isShowAreaSelect: n }
                ))));
      }),
      e(t, "onSwipeX", function (t) {
        var e = t < 0 ? "left" : "right";
        t && this.swipeDirection && e !== this.swipeDirection
          ? (S.StockBridge.report("stocklist.stock_swipe_".concat(e)),
            (this.swipeDirection = null))
          : (this.swipeDirection = e),
          this.$emit("onSwipeX", t);
      }),
      e(t, "handleInitDrawBoard", function (t) {
        var e = this,
          i = t.layout,
          n = t.options,
          o = t.reload,
          s = void 0 === o || o;
        this.$emit("drawInit", { layout: i, options: n, reload: s }),
          this.queryDrawData(function () {
            e.showStaticDraw && P(e.drawlineData, f({ layout: i }, n)),
              (e.drawTab = n.type);
          });
      }),
      e(t, "queryDrawData", function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : function () {},
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return g(
          this,
          null,
          i().mark(function n() {
            var o, s;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!this.drawlineData || e) {
                        i.next = 2;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        void (null == t || t.call(this))
                      );
                    case 2:
                      if (
                        ((o = S.StockBridge.getStorage("quote_drawline_data")),
                        S.StockBridge.setStorage("quote_drawline_data", ""),
                        !(o && o.timestamp && Date.now() - o.timestamp < 1e3))
                      ) {
                        i.next = 5;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        ((this.drawlineData = o.data),
                        this.$emit("gotDrawData", this.drawlineData),
                        void (null == t || t.call(this, o)))
                      );
                    case 5:
                      return (
                        (i.prev = 5),
                        (i.next = 8),
                        S.batchGet({ subIndex: this.symbol, settingKeys: "" })
                      );
                    case 8:
                      (s = i.sent),
                        (this.drawlineData = null == s ? void 0 : s.settings),
                        this.$emit("gotDrawData", this.drawlineData),
                        null == t || t.call(this, s),
                        (i.next = 15);
                      break;
                    case 12:
                      (i.prev = 12),
                        (i.t0 = i.catch(5)),
                        null == t || t.call(this, null);
                    case 15:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this,
              [[5, 12]]
            );
          })
        );
      }),
      e(t, "updateCacheDrawData", function (t, e) {
        this.drawlineData[t] = e;
      }),
      e(t, "handleBoardOptionChange", function (t) {
        var e = t.layout,
          i = t.options;
        this.$emit("optionChange", { layout: e, options: i }),
          (this.drawBoardLayout = e),
          (this.drawBoardOptions = i),
          this.drawlineData &&
            0 !== Object.keys(this.drawlineData).length &&
            i.type === this.drawTab &&
            this.showStaticDraw &&
            e &&
            P(this.drawlineData, f({ layout: e }, i));
      }),
      e(t, "onDrawEnd", function () {
        this.$emit("onDrawEnd");
      }),
      t),
  };
Array ||
  (
    S.resolveComponent("chip-info-panel") +
    S.resolveComponent("kline") +
    S.resolveComponent("st-status") +
    S.resolveComponent("NoData") +
    S.resolveComponent("Selector") +
    S.resolveComponent("HistoryPanel") +
    S.resolveComponent("AreaSelectModal")
  )();
var A = S._export_sfc(q, [
  [
    "render",
    function (t, e, i, n, o, s) {
      return S.e(
        { a: o.options && !o.dataStatus && !o.noData },
        !o.options || o.dataStatus || o.noData
          ? {}
          : S.e(
              { b: o.chipPanel && !i.landscape && o.showChipTip },
              o.chipPanel && !i.landscape && o.showChipTip
                ? {
                    c: S.o(function (t) {
                      return s.handleShowTeach("chip");
                    }, 3631),
                    d: S.p({
                      kIndex: s.isMinuteKline ? 0 : -1,
                      layout: o.chipPanel.layout,
                      data: o.chipPanel.chipData,
                    }),
                  }
                : {},
              {
                e: S.sr("chart", "c9436035-0"),
                f: S.o(s.onTouchMove, 3632),
                g: S.o(s.onTouchCancel, 3633),
                h: S.o(s.onTouchEnd, 3634),
                i: S.o(s.onSwitchIndicator, 3635),
                j: S.o(s.onPopup, 3636),
                k: S.o(s.onBarTap, 3637),
                l: S.o(s.onTipTap, 3638),
                m: S.o(s.getMore, 3639),
                n: S.o(s.onChipSwitch, 3640),
                o: S.o(s.onAreaSwitch, 3641),
                p: S.o(s.onDoubleTap, 3642),
                q: S.o(s.getInitData, 3643),
                r: S.o(s.onPinch, 3644),
                s: S.o(s.reportException, 3645),
                t: S.o(s.onSwipeX, 3646),
                v: S.o(s.handleChipInfoChange, 3647),
                w: S.o(s.areaSelectChange, 3648),
                x: S.o(s.macdRankEntry, 3649),
                y: S.o(s.handleInitDrawBoard, 3650),
                z: S.o(s.handleBoardOptionChange, 3651),
                A: S.o(s.queryPriceRemind, 3652),
                B: S.o(s.onDrawEnd, 3653),
                C: S.p({
                  id: "chart",
                  width: i.width,
                  height: i.height,
                  options: o.options,
                }),
              }
            ),
        { D: o.dataStatus },
        o.dataStatus
          ? {
              E: S.o(function (t) {
                return s.retryData();
              }, 3654),
              F: S.p({ type: o.dataStatus }),
            }
          : {},
        { G: o.noData },
        o.noData ? { H: S.p({ skin: i.skin, status: o.status }) } : {},
        { I: o.initSelector },
        o.initSelector
          ? {
              J: S.sr("selector", "c9436035-4"),
              K: S.o(s.showLesson, 3655),
              L: S.o(s.toggleMacdChecked, 3656),
              M: S.p({
                type: "kline",
                skin: i.skin,
                indicators: o.selectorIndicators,
                indicator: o.indicator,
              }),
            }
          : {},
        { N: o.history.initData },
        o.history.initData
          ? {
              O: S.sr("historyPanel", "c9436035-5"),
              P: S.o(s.hideHistoryPanel, 3657),
              Q: S.p({
                skin: i.skin,
                market: i.market,
                scode: i.scode,
                fixNum: o.fixNum,
                touchMode: o.touchMode,
                initData: o.history.initData,
                stockType: o.stockType,
                mpscrollTop: o.mpscrollTop,
                boundaryMinsDate: o.history.boundaryMinsDate,
                boundaryMinsString: o.history.boundaryMinsString,
              }),
            }
          : {},
        { R: t.isShowAreaSelect && !i.landscape && o.areaSelectData },
        t.isShowAreaSelect && !i.landscape && o.areaSelectData
          ? {
              S: S.sr("areaSelectModal", "c9436035-6"),
              T: S.o(function (t) {
                return s.onAreaSwitch({
                  isShowAreaSelect: !1,
                  source: "modal",
                });
              }, 3658),
              U: S.p({
                market: i.market,
                stockType: o.stockType,
                data: o.areaSelectData,
              }),
            }
          : {},
        { V: "".concat(i.width, "px"), W: "".concat(i.height, "px") }
      );
    },
  ],
  ["__scopeId", "data-v-c9436035"],
]);
wx.createComponent(A);
