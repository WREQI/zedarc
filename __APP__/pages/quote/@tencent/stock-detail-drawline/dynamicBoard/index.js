var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../@babel/runtime/helpers/assertThisInitialized"),
  o = require("../../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../../@babel/runtime/helpers/createSuper"),
  s = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../../@babel/runtime/helpers/createClass"),
  p = require("../../../../../@babel/runtime/helpers/typeof"),
  h = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  l = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  d = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  y = Math.pow,
  f = function (t, e, i) {
    return e in t
      ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  x = function (t, e) {
    for (var i in e || (e = {})) v.call(e, i) && f(t, i, e[i]);
    if (d) {
      var o,
        n = h(d(e));
      try {
        for (n.s(); !(o = n.n()).done; ) {
          i = o.value;
          g.call(e, i) && f(t, i, e[i]);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
    return t;
  },
  P = function (t, e) {
    return l(t, u(e));
  },
  k = function (t, e, i) {
    return f(t, "symbol" != p(e) ? e + "" : e, i);
  },
  w = require("../../../../../common/vendor.js"),
  m = require("../utils/utils.js");
function b(t, e, i) {
  var o,
    n = {},
    s = n.noTrailing,
    r = void 0 !== s && s,
    a = n.noLeading,
    p = void 0 !== a && a,
    h = n.debounceMode,
    c = void 0 === h ? void 0 : h,
    l = !1,
    u = 0;
  function d() {
    o && clearTimeout(o);
  }
  function v() {
    for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
      n[s] = arguments[s];
    var a = this,
      h = Date.now() - u;
    function v() {
      (u = Date.now()), e.apply(a, n);
    }
    function g() {
      o = void 0;
    }
    l ||
      (p || !c || o || v(),
      d(),
      void 0 === c && h > t
        ? p
          ? ((u = Date.now()), r || (o = setTimeout(c ? g : v, t)))
          : v()
        : !0 !== r && (o = setTimeout(c ? g : v, void 0 === c ? t - h : t)));
  }
  return (
    (v.cancel = function (t) {
      var e = (t || {}).upcomingOnly,
        i = void 0 !== e && e;
      d(), (l = !i);
    }),
    v
  );
}
var T,
  S = { exports: {} };
(T = S),
  w.commonjsGlobal,
  (T.exports = function (t, e, i) {
    e.prototype.isBetween = function (t, e, o, n) {
      var s = i(t),
        r = i(e),
        a = "(" === (n = n || "()")[0],
        p = ")" === n[1];
      return (
        ((a ? this.isAfter(s, o) : !this.isBefore(s, o)) &&
          (p ? this.isBefore(r, o) : !this.isAfter(r, o))) ||
        ((a ? this.isBefore(s, o) : !this.isAfter(s, o)) &&
          (p ? this.isAfter(r, o) : !this.isBefore(r, o)))
      );
    };
  });
var A = S.exports,
  O = w.getDefaultExportFromCjs(A);
w.dayjs.extend(O);
var M = (function () {
    function t(e, i) {
      r(this, t),
        k(this, "view", {}),
        k(this, "props", {}),
        k(this, "isLock", !1),
        k(this, "isShow", !0),
        k(this, "groupId", ""),
        k(this, "layout", {}),
        k(this, "chartData", {}),
        k(this, "guideLine", {}),
        k(this, "config", {}),
        k(this, "options", {}),
        k(this, "collection", []),
        (this.view = e),
        (this.options = i),
        (this.groupId = i.groupId),
        (this.isLock = !1),
        (this.isShow = !0),
        (this.layout = i.layout),
        (this.chartData = i.chartData),
        (this.collection = []),
        (this.props = {
          cornerStrokeWidth: 8,
          strokeUniform: !1,
          cornerStyle: "circle",
          transparentCorners: !1,
          hasBorders: !1,
          cornerSize: i.cornerSize || m.DEFAULT_CORNER_SIZE,
          stroke: i.color || m.DEFAULT_COLOR,
          cornerColor: i.color || m.DEFAULT_COLOR,
          strokeWidth: i.weight || m.DEFAULT_WEIGHT,
        }),
        (this.config = { borderOpacity: m.BORDEROPACITY });
    }
    return (
      a(t, [
        {
          key: "getProps",
          value: function () {
            return this.props;
          },
        },
        {
          key: "setProps",
          value: function (t) {
            var e = t.layout,
              i = t.chartData;
            (this.layout = e), (this.chartData = i);
          },
        },
        {
          key: "getRandomPoint",
          value: function () {
            var t = parseInt((30 * Math.random()).toFixed(2)),
              e = this.view.getCenter();
            return (
              (e.left +=
                parseInt((100 * Math.random()).toFixed(0)) % 2 == 0 ? t : -t),
              (e.top +=
                parseInt((100 * Math.random()).toFixed(0)) % 2 == 0 ? t : -t),
              { x: e.left, y: e.top }
            );
          },
        },
        {
          key: "getBetweenDate",
          value: function (t) {
            var e = w.dayjs(t),
              i = this.options.chartType;
            return ["week", "month", "year"].indexOf(i) > -1
              ? { start: e.startOf(i), end: e.endOf(i) }
              : { start: e.startOf("day"), end: e.endOf("day") };
          },
        },
        {
          key: "getRealCoords",
          value: function (t) {
            var e = this.chartData,
              i = e.xAxis,
              o = e.yAxis,
              n = t.y / this.layout.chart.height,
              s = Math.abs(o.maxMin.max - o.maxMin.min);
            if (i.isContinuous) {
              var r = t.x / this.layout.chart.width,
                a = Math.abs(i.maxMin.max - i.maxMin.min);
              return { x: i.maxMin.min + r * a, y: o.maxMin.max - n * s };
            }
            var p = { x: { value: 0, offset: 0 }, y: o.maxMin.max - n * s },
              h = i.tradeDate.indexOf(i.viewItems[0]),
              c =
                t.x >= 0
                  ? Math.floor(Math.abs(t.x / i.itemWidth))
                  : Math.ceil(Math.abs(t.x / i.itemWidth));
            return (
              t.x >= 0
                ? i.viewItems.length > c
                  ? ((p.x.value = i.viewItems[c] || ""),
                    (p.x.offset = (t.x - i.itemWidth * c) / i.itemWidth))
                  : h + c < i.tradeDate.length
                  ? ((p.x.value = i.tradeDate[h + c] || ""),
                    (p.x.offset = (t.x - i.itemWidth * c) / i.itemWidth))
                  : ((p.x.value = i.tradeDate[i.tradeDate.length - 1] || ""),
                    (p.x.offset =
                      (t.x - i.itemWidth * (i.tradeDate.length - 1 - h)) /
                      i.itemWidth))
                : ((p.x.value = i.tradeDate[h - c] || ""),
                  (p.x.offset = Math.abs(c * i.itemWidth + t.x) / i.itemWidth)),
              p.x.value,
              p
            );
          },
        },
        {
          key: "getPixelCoords",
          value: function (t) {
            var e,
              i = this.chartData,
              o = i.xAxis,
              n = i.yAxis,
              s = Math.abs(n.maxMin.max - n.maxMin.min),
              r = {
                x: 0,
                y: ((n.maxMin.max - t.y) / s) * this.layout.chart.height,
              };
            if (null == (e = t.x) ? void 0 : e.value) {
              var a = o.viewItems.lastIndexOf(t.x.value);
              if (a >= 0) r.x = a * o.itemWidth + o.itemWidth * t.x.offset;
              else {
                var p = o.viewItems[0],
                  h = o.viewItems[o.viewItems.length - 1],
                  c = o.tradeDate.indexOf(p),
                  l = o.tradeDate.indexOf(h),
                  u = o.tradeDate.indexOf(t.x.value);
                if (w.dayjs(t.x.value).isBefore(w.dayjs(p)))
                  r.x = -(c - u - t.x.offset) * o.itemWidth;
                else if (w.dayjs(t.x.value).isAfter(w.dayjs(h))) {
                  var d = o.viewItems.length - (l - c) - 1;
                  r.x = (u - c + t.x.offset + d) * o.itemWidth;
                } else if (
                  w
                    .dayjs(t.x.value)
                    .isBetween(
                      w.dayjs(o.tradeDate[0]),
                      w.dayjs(o.tradeDate[o.tradeDate.length - 1])
                    )
                )
                  for (var v = o.viewItems.length - 1; v >= 0; v--) {
                    var g = o.viewItems[v],
                      y = this.getBetweenDate(g);
                    if (
                      y.start &&
                      y.end &&
                      w.dayjs(t.x.value).isBetween(y.start, y.end)
                    ) {
                      r.x = v * o.itemWidth + o.itemWidth * t.x.offset;
                      break;
                    }
                  }
              }
            }
            return r;
          },
        },
        {
          key: "getTradeDateCoordsRange",
          value: function () {
            var t = this.chartData,
              e = t.xAxis,
              i = t.yAxis,
              o = e.tradeDate[0],
              n = e.tradeDate[e.tradeDate.length - 1],
              s = (i.maxMin.max + i.maxMin.min) / 2,
              r = { x: { value: o, offset: 0 }, y: s },
              a = { x: { value: n, offset: 1 }, y: s },
              p = this.getPixelCoords(r),
              h = this.getPixelCoords(a);
            return { startX: p.x, endX: h.x };
          },
        },
        {
          key: "getAreaPoint",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i = this.layout.chart,
              o = i.width,
              n = i.height;
            return (
              t.x < e && (t.x = e),
              t.x > o - e && (t.x = o - e),
              t.y < e && (t.y = e),
              t.y > n - e && (t.y = n - e),
              t
            );
          },
        },
        {
          key: "objectMovingCheck",
          value: function (t) {
            var e = t.target,
              i = this.layout.chart,
              o = i.width,
              n = i.height;
            e.getBoundingRect().left < 0
              ? ((e.left = Math.max(e.getBoundingRect().left, 0)),
                e.getBoundingRect().top < 0
                  ? (e.top = Math.max(e.getBoundingRect().top, 0))
                  : (e.top = Math.min(
                      e.getBoundingRect().top,
                      n - e.getBoundingRect().height
                    )))
              : e.getBoundingRect().top < 0
              ? ((e.left = Math.min(
                  e.getBoundingRect().left,
                  o - e.getBoundingRect().width
                )),
                (e.top = Math.max(e.getBoundingRect().top, 0)))
              : ((e.left = Math.min(
                  e.getBoundingRect().left,
                  o - e.getBoundingRect().width
                )),
                (e.top = Math.min(
                  e.getBoundingRect().top,
                  n - e.getBoundingRect().height
                )));
          },
        },
        {
          key: "setActive",
          value: function () {
            var t = this.collection.find(function (t) {
              var e;
              return (
                "operatingPoint" === (null == (e = t.extends) ? void 0 : e.type)
              );
            });
            t && this.view.setActiveObject(t);
          },
        },
        {
          key: "updateProps",
          value: function (t) {
            var e,
              i = this;
            this.collection.forEach(function (e) {
              var o,
                n,
                r = JSON.parse(JSON.stringify(t));
              if (t.stroke && (null == (o = e.extends) ? void 0 : o.isBg)) {
                var a = m.hexToRgbArray(t.stroke);
                (r.stroke = "rgba("
                  .concat(a[0], ", ")
                  .concat(a[1], ", ")
                  .concat(a[2], ", ")
                  .concat(i.config.borderOpacity, ")")),
                  delete r.strokeWidth;
              }
              if (
                t.stroke &&
                "text" === (null == (n = e.extends) ? void 0 : n.type)
              ) {
                var p = m.hexToRgbArray(t.stroke);
                r.fillStyle = "rgba("
                  .concat(p[0], ", ")
                  .concat(p[1], ", ")
                  .concat(p[2], ", ")
                  .concat(i.config.borderOpacity, ")");
              }
              Object.entries(r).forEach(function (t) {
                var i,
                  o,
                  n,
                  a = s(t, 2),
                  p = a[0],
                  h = a[1];
                null != h && e.set(p, h),
                  "isLock" === p &&
                    ((null == (o = null == (i = e.extends) ? void 0 : i.type)
                      ? void 0
                      : o.toLowerCase().includes("operatingpoint")) ||
                      (null == (n = e.extends) ? void 0 : n.isBg)) &&
                    e.set("visible", !h && r.visible);
              });
            }),
              this.textPoint &&
                t.text &&
                (null == (e = this.redrawLine) || e.call(this));
          },
        },
      ]),
      t
    );
  })(),
  L = (function () {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      r(this, t),
        k(this, "_id", 0),
        k(this, "left", 0),
        k(this, "top", 0),
        k(this, "visible", !0),
        k(this, "lockMovementX", !1),
        k(this, "lockMovementY", !1),
        k(this, "stroke", m.COLORS[0]),
        k(this, "ratio", 1),
        k(this, "strokeWidth", m.LINEWEIGHT[1]),
        k(this, "strokeAlpha", 1),
        k(this, "__eventListeners", {}),
        Object.assign(this, e),
        (this._id = m.uuid()),
        (this.ratio = m.getPixelRatio()),
        (this.strokeWidth = e.strokeWidth || m.LINEWEIGHT[1]),
        (this.strokeAlpha = e.strokeAlpha || 1),
        (this.stroke = e.stroke || m.COLORS[0]);
    }
    return (
      a(t, [
        {
          key: "set",
          value: function () {
            if (1 === arguments.length) {
              var t = arguments[0];
              for (var e in t) this[e] = t[e];
              return this;
            }
            var i = arguments[1];
            return (this[arguments[0]] = i), this;
          },
        },
        {
          key: "getCenterPoint",
          value: function () {
            return {
              x: this.left + this.width / 2,
              y: this.top + this.height / 2,
            };
          },
        },
        {
          key: "getBoundingRect",
          value: function () {
            return {
              left: this.left,
              top: this.top,
              width: this.width,
              height: this.height,
            };
          },
        },
        {
          key: "_removeEventListener",
          value: function (t, e) {
            if (this.__eventListeners[t]) {
              var i = this.__eventListeners[t];
              if (e) i[i.indexOf(e)] = !1;
              else for (var o = i.length; o--; ) i[o] = !1;
            }
          },
        },
        {
          key: "on",
          value: function (t, e) {
            if (
              (this.__eventListeners || (this.__eventListeners = {}),
              1 === arguments.length)
            )
              for (var i in t) this.on(i, t[i]);
            else
              this.__eventListeners[t] || (this.__eventListeners[t] = []),
                this.__eventListeners[t].push(e);
            return this;
          },
        },
        {
          key: "_once",
          value: function (t, e) {
            var i = function () {
              e.apply(this, arguments), this.off(t, i);
            }.bind(this);
            this.on(t, i);
          },
        },
        {
          key: "once",
          value: function (t, e) {
            if (1 === arguments.length)
              for (var i in t) this._once.call(this, i, t[i]);
            else this._once.call(this, t, e);
            return this;
          },
        },
        {
          key: "off",
          value: function (t, e) {
            if (!this.__eventListeners) return this;
            if (0 === arguments.length)
              for (t in this.__eventListeners)
                this._removeEventListener.call(this, t);
            else if (1 === arguments.length && "object" == p(arguments[0]))
              for (var i in t) this._removeEventListener.call(this, i, t[i]);
            else this._removeEventListener.call(this, t, e);
            return this;
          },
        },
        {
          key: "fire",
          value: function (t, e) {
            if (!this.__eventListeners) return this;
            var i = this.__eventListeners[t];
            if (!i) return this;
            for (var o = 0, n = i.length; o < n; o++)
              i[o] && i[o].call(this, e || {});
            return (
              (this.__eventListeners[t] = i.filter(function (t) {
                return !1 !== t;
              })),
              this
            );
          },
        },
        { key: "render", value: function () {} },
        {
          key: "getCurrentLine",
          value: function () {
            var t;
            return {
              color: this.stroke,
              weight: this.strokeWidth || 2,
              fontSize: this.fontSize || 14,
              isLock: this.isLock || !1,
              shapeType:
                (null == (t = this.extends) ? void 0 : t.shapeType) || "other",
            };
          },
        },
      ]),
      t
    );
  })(),
  R = (function (t) {
    o(s, L);
    var e = n(s);
    function s() {
      var t,
        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = arguments.length > 1 ? arguments[1] : void 0;
      return (
        r(this, s),
        (t = e.call(this, n)),
        k(i(t), "begin", { x: 0, y: 0 }),
        k(i(t), "end", { x: 0, y: 0 }),
        k(i(t), "setListrokeDashArrayneDash", []),
        k(i(t), "points", []),
        (t.points = o),
        (t.strokeDashArray = (null == n ? void 0 : n.strokeDashArray) || []),
        t
      );
    }
    return (
      a(s, [
        {
          key: "setPoints",
          value: function () {
            return (
              Array.isArray(this.points) &&
                this.points.length >= 4 &&
                ((this.begin = { x: this.points[0], y: this.points[1] }),
                (this.end = { x: this.points[2], y: this.points[3] })),
              this
            );
          },
        },
        {
          key: "render",
          value: function (t, e) {
            this.setPoints();
            var i = this.begin,
              o = this.end,
              n = this.strokeDashArray;
            if (
              ((t.lineWidth = this.strokeWidth * e),
              (t.strokeStyle = this.stroke),
              t.beginPath(),
              (null == n ? void 0 : n.length) > 0)
            ) {
              var s = n.map(function (t) {
                return t * e;
              });
              t.setLineDash(s);
            }
            t.moveTo(i.x * e, i.y * e),
              t.lineTo(o.x * e, o.y * e),
              t.stroke(),
              t.setLineDash([]);
          },
        },
        {
          key: "isPointInPath",
          value: function (t) {
            var e = t.x,
              i = t.y;
            return this.distanceToNearestEdge(e, i) < m.SELECTRANGE;
          },
        },
        {
          key: "distanceToNearestEdge",
          value: function (t, e) {
            var i,
              o,
              n = this.begin,
              s = this.end,
              r = s.x - n.x,
              a = s.y - n.y,
              p = Math.sqrt(r * r + a * a),
              h = ((t - n.x) * r + (e - n.y) * a) / (p * p);
            return (
              h < 0
                ? ((i = n.x), (o = n.y))
                : h > 1
                ? ((i = s.x), (o = s.y))
                : ((i = n.x + h * r), (o = n.y + h * a)),
              Math.sqrt(y(t - i, 2) + y(e - o, 2))
            );
          },
        },
      ]),
      s
    );
  })(),
  I = (function (t) {
    o(s, L);
    var e = n(s);
    function s(t) {
      var o;
      return (
        r(this, s),
        (o = e.call(this, t)),
        k(i(o), "outRadius", 12),
        k(i(o), "inRadius", 4),
        k(i(o), "isShowGuideLine", !1),
        k(i(o), "alwaysShowPoint", !1),
        (o.skin = t.skin || "white"),
        (o.outRadius = t.outRadius || 12),
        (o.inRadius = t.inRadius || 4),
        (o.width = 2 * o.outRadius),
        (o.height = 2 * o.outRadius),
        (o.isShowGuideLine = !1),
        (o.alwaysShowPoint = !1),
        o
      );
    }
    return (
      a(s, [
        {
          key: "getCenterPoint",
          value: function () {
            return { x: this.left, y: this.top };
          },
        },
        {
          key: "showGuideLine",
          value: function () {
            this.isShowGuideLine = !0;
          },
        },
        {
          key: "hideGuideLine",
          value: function () {
            this.isShowGuideLine = !1;
          },
        },
        {
          key: "render",
          value: function (t) {
            this.ctx = t;
            var e = m.hexToRgbArray(this.stroke);
            this.isShowGuideLine &&
              (this.drawGuideLine(), this.drawGuideText()),
              this.alwaysShowPoint ||
                this.drawRound({
                  x: this.left,
                  y: this.top,
                  color: "rgba("
                    .concat(e[0], ", ")
                    .concat(e[1], ", ")
                    .concat(e[2], ", 0.1)"),
                  r: this.outRadius,
                }),
              this.drawRound({
                x: this.left,
                y: this.top,
                color: "rgba("
                  .concat(e[0], ", ")
                  .concat(e[1], ", ")
                  .concat(e[2], ", 1)"),
                r: this.inRadius,
              });
          },
        },
        {
          key: "isPointInPath",
          value: function (t) {
            var e = t.x,
              i = t.y;
            return (
              Math.sqrt(y(e - this.left, 2) + y(i - this.top, 2)) <=
              this.outRadius
            );
          },
        },
        {
          key: "drawRound",
          value: function (t) {
            var e = t.x,
              i = t.y,
              o = t.color,
              n = t.r;
            this.ctx.save(),
              this.ctx.beginPath(),
              this.ctx.arc(
                e * this.ratio,
                i * this.ratio,
                n * this.ratio,
                0,
                2 * Math.PI
              ),
              (this.ctx.fillStyle = o),
              this.ctx.fill(),
              this.ctx.restore();
          },
        },
        {
          key: "getRealCoords",
          value: function (t) {
            var e = this.extends.chartData.yAxis,
              i = t.y / this.extends.layout.chart.height,
              o = Math.abs(e.maxMin.max - e.maxMin.min);
            return { y: e.maxMin.max - i * o };
          },
        },
        {
          key: "drawGuideLine",
          value: function () {
            var t = this.extends.layout.chart.width,
              e = this.getCenterPoint(),
              i = e.x,
              o = e.y;
            this.ctx.save(),
              this.ctx.beginPath(),
              this.ctx.moveTo(i * this.ratio, o * this.ratio),
              i <= t / 2
                ? this.ctx.lineTo(t * this.ratio, o * this.ratio)
                : this.ctx.lineTo(0, o * this.ratio),
              (this.ctx.lineWidth = m.GuideLineConfig.weight * this.ratio),
              (this.ctx.strokeStyle = m.GuideLineConfig.color[this.skin]),
              this.ctx.stroke(),
              this.ctx.restore();
          },
        },
        {
          key: "drawGuideText",
          value: function () {
            var t = this.extends.layout.chart.width,
              e = this.getCenterPoint(),
              i = e.x,
              o = e.y,
              n = this.getRealCoords({ x: i, y: o }),
              s = ["black", "dark"],
              r = {
                x: i <= t / 2 ? (t - 45) * this.ratio : 0,
                y: o * this.ratio - 9 * this.ratio,
                fill: { fillStyle: s.includes(this.skin) ? "#171d28" : "#fff" },
                width: 45 * this.ratio,
                height: 18 * this.ratio,
                strokeWidth: 1 * this.ratio,
                stroke: {
                  strokeStyle: s.includes(this.skin) ? "#262e40" : "#dcdfe6",
                },
                radius: 2 * this.ratio,
              };
            m.RadiusRect(
              this.ctx,
              r.x,
              r.y,
              r.width,
              r.height,
              r.radius,
              r.stroke,
              r.fill,
              r.strokeWidth
            ),
              this.ctx.save(),
              (this.ctx.font = 10 * this.ratio + "px Arial"),
              (this.ctx.fillStyle = m.GuideLineConfig.color[this.skin]),
              (this.ctx.textBaseline = "middle"),
              (this.ctx.textAlign = "center"),
              this.ctx.fillText(
                null == n ? void 0 : n.y.toFixed(2),
                r.x + r.width / 2,
                o * this.ratio
              ),
              this.ctx.restore();
          },
        },
      ]),
      s
    );
  })(),
  C = (function (t) {
    o(p, M);
    var s = n(p);
    function p(t, e) {
      var o;
      return (
        r(this, p),
        (o = s.call(this, t, e)),
        k(i(o), "timer", null),
        k(i(o), "collection", []),
        (o.groupId = m.uuid()),
        (o.options = e),
        (o.props = P(x({}, o.props), {
          slope: -0.5,
          hasControls: !1,
          groupId: o.groupId,
        })),
        (o.collection = []),
        o.init(),
        o
      );
    }
    return (
      a(p, [
        {
          key: "init",
          value: function () {
            var t,
              e = this;
            if (null == (t = this.options) ? void 0 : t.initData) {
              var i = this.options.initData,
                o = i.color,
                n = i.isShow,
                s = i.isLock,
                r = i.weight,
                a = i.points,
                p = i.groupId;
              (this.isLock = s),
                (this.isShow = n),
                (this.groupId = p || this.groupId),
                (this.props.groupId = this.groupId),
                (this.props.stroke = o),
                (this.props.strokeWidth = +r),
                (this.props.operatingPoint = a.map(function (t) {
                  var i = e.getPixelCoords(t);
                  return x(x({}, t), i);
                })),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint[0],
                  this.props.operatingPoint[1]
                ));
            } else this.props.operatingPoint = this.initOperatingPoint();
            this.draw();
          },
        },
        {
          key: "initOperatingPoint",
          value: function () {
            var t = [],
              e = this.getRandomPoint(),
              i = e.x,
              o = e.y,
              n = Math.abs(this.props.slope * i) + o;
            return (
              t.push({
                x: i - 50,
                y: (i - 50) * this.props.slope + n,
                isAnchor: !0,
              }),
              t.push({ x: i + 50, y: (i + 50) * this.props.slope + n }),
              t
            );
          },
        },
        {
          key: "operatingPointMoving",
          value: function (t) {
            var e = t.target,
              i = this.getAreaPoint(e.getCenterPoint(), 8);
            (e.left = i.x), (e.top = i.y), e.showGuideLine();
            var o = this.props.operatingPoint.findIndex(function (t) {
              var i;
              return (
                !!t.isAnchor === (null == (i = e.extends) ? void 0 : i.isAnchor)
              );
            });
            this.props.operatingPoint.splice(
              o,
              1,
              x(x({}, this.props.operatingPoint[o]), i)
            ),
              (this.props.slope = m.getLineSlope(
                this.props.operatingPoint[0],
                this.props.operatingPoint[1]
              ));
            var n = this.getEndPoints(i);
            this.collection.map(function (t) {
              var e;
              switch (null == (e = t.extends) ? void 0 : e.type) {
                case "line":
                  t.set({
                    points: [n.x1, n.y1, n.x2, n.y2],
                    top: Math.min(n.y1, n.y2) - t.strokeWidth / 2,
                    left: Math.min(n.x1, n.x2) - t.strokeWidth / 2,
                  });
                  break;
                case "bgline":
                  t.set({
                    points: [n.x1, n.y1, n.x2, n.y2],
                    top: Math.min(n.y1, n.y2) - (t.strokeWidth - 2) / 2,
                    left: Math.min(n.x1, n.x2) - (t.strokeWidth - 2) / 2,
                  });
              }
            }),
              this.view.requestRenderAll();
          },
        },
        {
          key: "lineMoving",
          value: function (t) {
            var e = this,
              i = 0,
              o = 0,
              n = this.getAreaPoint(
                { x: t.e.changedTouches[0].x, y: t.e.changedTouches[0].y },
                8
              ),
              s = this.collection.filter(function (t) {
                var e;
                return (
                  "operatingPoint" ===
                  (null == (e = t.extends) ? void 0 : e.type)
                );
              });
            this.props.tempPointer &&
              ((i = n.x - this.props.tempPointer.x),
              (o = n.y - this.props.tempPointer.y)),
              (this.props.tempPointer = n),
              (this.props.operatingPoint = s.map(function (t) {
                var e = t.getCenterPoint();
                return P(x({}, e), { isAnchor: !!t.extends.isAnchor });
              }));
            var r = this.getEndPoints(this.props.operatingPoint[0]);
            this.collection.map(function (t) {
              var n;
              switch (null == (n = t.extends) ? void 0 : n.type) {
                case "operatingPoint":
                  t.set({ left: t.left + i, top: t.top + o });
                  break;
                case "bgline":
                  t.set({
                    points: [r.x1, r.y1, r.x2, r.y2],
                    left: Math.min(r.x1, r.x2) - parseFloat(t.strokeWidth) / 2,
                    top: Math.min(r.y1, r.y2) - parseFloat(t.strokeWidth) / 2,
                  });
                  break;
                case "line":
                  t.set({
                    points: [r.x1, r.y1, r.x2, r.y2],
                    left:
                      Math.min(r.x1, r.x2) -
                      parseFloat(e.props.strokeWidth) / 2,
                    top:
                      Math.min(r.y1, r.y2) -
                      parseFloat(e.props.strokeWidth) / 2,
                  });
              }
            }),
              this.view.requestRenderAll();
          },
        },
        {
          key: "setSelectStatus",
          value: function (t) {
            var e = this;
            (this.options.isActive = !!t),
              this.collection.map(function (i) {
                var o, n;
                "operatingPoint" ===
                  (null == (o = i.extends) ? void 0 : o.type) &&
                  i.set({ visible: t && !e.isLock && e.isShow }),
                  "bgline" === (null == (n = i.extends) ? void 0 : n.type) &&
                    i.set({ visible: t && !e.isLock && e.isShow });
              }),
              this.view.requestRenderAll();
          },
        },
        {
          key: "setSelectable",
          value: function (t) {
            this.collection.map(function (e) {
              var i;
              switch (null == (i = e.extends) ? void 0 : i.type) {
                case "operatingPoint":
                case "line":
                  e.set({ selectable: t });
              }
            }),
              this.view.requestRenderAll();
          },
        },
        {
          key: "getEndPoints",
          value: function (t) {
            var e = { x1: 0, y1: 0, x2: 0, y2: 0 };
            switch (this.options.shapeType) {
              case "slashLine":
                e = this.getSlashLineEndPoints(t);
                break;
              case "slashRays":
                e = this.getSlashRaysEndPoints();
            }
            return e;
          },
        },
        {
          key: "getSlashLineEndPoints",
          value: function (t) {
            var e = t || this.props.operatingPoint[0],
              i = e.x,
              o = e.y,
              n = this.layout.chart,
              s = n.width,
              r = n.height;
            if (isNaN(this.props.slope)) return { x1: i, y1: 0, x2: i, y2: r };
            var a = o - i * this.props.slope,
              p = { x: -20, y: -20 * this.props.slope + a };
            p.y > r + 20 &&
              ((p.y = r + 20), (p.x = (p.y - a) / this.props.slope)),
              p.y < -20 && ((p.y = -20), (p.x = (p.y - a) / this.props.slope));
            var h = { x: s + 20, y: (s + 20) * this.props.slope + a };
            return (
              h.y < -20 && ((h.y = -20), (h.x = (h.y - a) / this.props.slope)),
              h.y > r + 20 &&
                ((h.y = r + 20), (h.x = (h.y - a) / this.props.slope)),
              { x1: p.x, y1: p.y, x2: h.x, y2: h.y }
            );
          },
        },
        {
          key: "getSlashRaysEndPoints",
          value: function () {
            var t,
              e,
              i = { x1: 0, y1: 0, x2: 0, y2: 0 },
              o = this.props,
              n = o.slope,
              s = o.operatingPoint,
              r = this.layout.chart,
              a = (r.width, r.height);
            if (
              (s.map(function (o) {
                o.isAnchor ? ((t = o), (i.x1 = o.x), (i.y1 = o.y)) : (e = o);
              }),
              isNaN(this.props.slope))
            )
              return t.y >= e.y
                ? { x1: t.x, y1: 0, x2: t.x, y2: t.y }
                : { x1: t.x, y1: t.y, x2: t.x, y2: a };
            var p = t.y - t.x * n;
            return (
              n >= 0
                ? t.x >= e.x
                  ? ((i.x2 = -20), (i.y2 = n * i.x2 + p))
                  : ((i.y2 = a + 20), (i.x2 = (i.y2 - p) / n))
                : t.x >= e.x
                ? ((i.x2 = -20), (i.y2 = n * i.x2 + p))
                : ((i.y2 = -20), (i.x2 = (i.y2 - p) / n)),
              i
            );
          },
        },
        {
          key: "drawOperatingPoint",
          value: function () {
            var t = this;
            this.props.operatingPoint.forEach(function (e) {
              var i = new I({
                skin: t.options.skin,
                top: e.y,
                left: e.x,
                ratio: t.ratio,
                groupId: t.groupId,
                stroke: t.props.stroke,
                visible: t.options.isActive && t.isShow,
                extends: {
                  isAnchor: !!e.isAnchor,
                  type: "operatingPoint",
                  layout: x({}, t.options.layout),
                  chartData: x({}, t.options.chartData),
                },
              });
              i.on({
                moving: function (e) {
                  t.operatingPointMoving(e);
                },
                modified: function (e) {
                  e.target.hideGuideLine(), t.view.requestRenderAll();
                },
                deselected: function (e) {
                  t.setSelectStatus(!1);
                },
                selected: function (e) {
                  t.setSelectStatus(!0);
                },
              }),
                t.collection.push(i);
            });
          },
        },
        {
          key: "drawLine",
          value: function () {
            var t = this,
              e = m.hexToRgbArray(this.props.stroke),
              i = this.getEndPoints(this.props.operatingPoint[0]),
              o = i.x1,
              n = i.y1,
              s = i.x2,
              r = i.y2,
              a = new R(
                [o, n, s, r],
                P(x({}, this.props), {
                  left: Math.min(o, s) - parseFloat(this.props.strokeWidth) / 2,
                  top: Math.min(n, r) - parseFloat(this.props.strokeWidth) / 2,
                  perPixelTargetFind: !0,
                  visible: this.isShow,
                  lockMovementX: this.isLock,
                  lockMovementY: this.isLock,
                  extends: { type: "line" },
                })
              ),
              p = new R([o, n, s, r], {
                groupId: this.groupId,
                stroke: "rgba("
                  .concat(e[0], ", ")
                  .concat(e[1], ", ")
                  .concat(e[2], ", ")
                  .concat(this.config.borderOpacity, ")"),
                strokeWidth: 24,
                hasControls: !1,
                hasBorders: !1,
                left: Math.min(o, s) - 12,
                top: Math.min(n, r) - 12,
                perPixelTargetFind: !0,
                visible: this.options.isActive && this.isShow,
                selectable: !1,
                extends: { type: "bgline", isBg: !0 },
              });
            a.on({
              moving: function (e) {
                t.lineMoving(e);
              },
              deselected: function (e) {
                t.setSelectStatus(!1);
              },
              modified: function () {
                delete t.props.tempPointer;
              },
              selected: function (e) {
                var i = e.e;
                (t.props.tempPointer = i),
                  t.setSelectStatus(!0),
                  setTimeout(function () {
                    t.collection.map(function (e) {
                      var i;
                      "operatingPoint" ===
                        (null == (i = e.extends) ? void 0 : i.type) &&
                        t.view.setActiveObject(e);
                    });
                  }, 50);
              },
            }),
              this.collection.push(a),
              this.collection.push(p);
          },
        },
        {
          key: "getObject",
          value: function () {
            var t = this,
              e = this.collection.find(function (t) {
                var e;
                return "line" === (null == (e = t.extends) ? void 0 : e.type);
              }),
              i = this.collection.filter(function (t) {
                var e;
                return (
                  "operatingPoint" ===
                  (null == (e = t.extends) ? void 0 : e.type)
                );
              });
            return {
              groupId: this.groupId,
              color: m.getColorsIndex(e.stroke),
              weight: e.strokeWidth - 1,
              isShow: this.isShow,
              isLock: this.isLock,
              points: i.map(function (e) {
                var i = t.getRealCoords(e.getCenterPoint());
                return P(x({}, i), { isAnchor: !!e.extends.isAnchor });
              }),
              shapeType: this.options.shapeType,
              isActive: this.options.isActive,
            };
          },
        },
        {
          key: "draw",
          value: function () {
            var t;
            this.drawLine(),
              this.drawOperatingPoint(),
              (t = this.view).add.apply(t, e(this.collection));
          },
        },
        {
          key: "repaint",
          value: function (t, e) {
            var i = this;
            (this.chartData = e.chartData),
              (this.props.operatingPoint = t.points.map(function (t) {
                var e = i.getPixelCoords(t);
                return x(x({}, t), e);
              })),
              (this.props.slope = m.getLineSlope(
                this.props.operatingPoint[0],
                this.props.operatingPoint[1]
              ));
            var o = this.getEndPoints(this.props.operatingPoint[0]),
              n = o.x1,
              s = o.y1,
              r = o.x2,
              a = o.y2;
            this.collection.map(function (t) {
              var e;
              switch (null == (e = t.extends) ? void 0 : e.type) {
                case "operatingPoint":
                  var o = i.props.operatingPoint.find(function (e) {
                    var i;
                    return (
                      e.isAnchor ===
                      (null == (i = t.extends) ? void 0 : i.isAnchor)
                    );
                  });
                  t.set({ left: o.x, top: o.y });
                  break;
                case "line":
                case "bgline":
                  t.set({
                    points: [n, s, r, a],
                    left: Math.min(n, r) - 12,
                    top: Math.min(s, a) - 12,
                  });
              }
            });
          },
        },
      ]),
      p
    );
  })(),
  D = (function (t) {
    o(s, L);
    var e = n(s);
    function s(t) {
      var o;
      return (
        r(this, s),
        (o = e.call(this, t)),
        k(i(o), "width", 0),
        k(i(o), "height", 0),
        (o.width = t.width),
        (o.height = t.height),
        (o.borderRadius = Object.prototype.hasOwnProperty.call(
          t,
          "borderRadius"
        )
          ? t.borderRadius
          : 4),
        o
      );
    }
    return (
      a(s, [
        {
          key: "render",
          value: function (t, e) {
            var i = this.top,
              o = this.left;
            m.RadiusRect(
              t,
              (o + 0.2) * e,
              (i - 0.8) * e,
              this.width * e,
              this.height * e,
              this.borderRadius * e,
              { strokeStyle: this.stroke, alpha: 1 },
              null,
              this.strokeWidth * e
            );
          },
        },
        {
          key: "isPointInPath",
          value: function (t) {
            var e = t.x,
              i = t.y;
            return this.distanceToNearestEdge(e, i) < m.SELECTRANGE;
          },
        },
        {
          key: "distanceToNearestEdge",
          value: function (t, e) {
            var i = this.left + this.width,
              o = this.top + this.height;
            if (t >= this.left && t <= i && e >= this.top && e <= o)
              return Math.min(t - this.left, i - t, e - this.top, o - e);
            var n = Math.max(0, Math.max(this.left - t, t - i)),
              s = Math.max(0, Math.max(this.top - e, e - o));
            return Math.sqrt(n * n + s * s);
          },
        },
      ]),
      s
    );
  })(),
  W = (function (t) {
    o(s, L);
    var e = n(s);
    function s(t) {
      var o;
      return (
        r(this, s),
        (o = e.call(this, t)),
        k(i(o), "text", ""),
        k(i(o), "fontSize", m.FONTSIZE[1]),
        k(i(o), "width", 80),
        k(i(o), "height", 30),
        k(i(o), "fillStyle", "rgba(0, 0, 0, 0)"),
        k(i(o), "type", "text"),
        (o.text = t.text),
        (o.fontSize = t.fontSize),
        (o.fillStyle = t.fillStyle),
        o
      );
    }
    return (
      a(s, [
        {
          key: "render",
          value: function (t, e) {
            var i = this.drawTextBox({
                ctx: t,
                ratio: e,
                text: this.text,
                x: this.left,
                y: this.top,
                fontSize: this.fontSize,
                color: this.stroke,
                fillStyle: this.fillStyle,
              }),
              o = i.width,
              n = i.height;
            (this.width = o), (this.height = n);
          },
        },
        {
          key: "isPointInPath",
          value: function (t) {
            var e = t.x,
              i = t.y,
              o = 3 * this.ratio;
            return (
              e >= this.left - o &&
              e <= this.left + this.width + o &&
              i >= this.top - o &&
              i <= this.top + this.height + o
            );
          },
        },
        {
          key: "drawTextBox",
          value: function (t) {
            var e = t.ctx,
              i = t.ratio,
              o = t.text,
              n = t.x,
              s = t.y,
              r = t.fontSize,
              a = t.color,
              p = t.fillStyle,
              h = void 0 === p ? "rgba(0, 0, 0, 0)" : p;
            e.font = r * i + "px PingFangSC-Medium";
            var c = e.measureText(o).width;
            return (
              (e.fillStyle = h),
              e.fillRect(n * i, s * i, c + 2 * i, (r + 2) * i),
              (e.fillStyle = a),
              (e.textBaseline = "top"),
              e.fillText(o, (n + 1) * i, (s + 1) * i),
              { width: (c + 2 * i) / i, height: r + 2 }
            );
          },
        },
        {
          key: "calTextSize",
          value: function (t, e) {
            t.font = this.fontSize * e + "px PingFangSC-Medium";
            var i = t.measureText(this.text).width;
            (this.width = (i + 2 * e) / e), (this.height = this.fontSize + 2);
          },
        },
      ]),
      s
    );
  })(),
  E = (function (t) {
    o(s, L);
    var e = n(s);
    function s(t, o) {
      var n;
      return (
        r(this, s),
        (n = e.call(this, o)),
        k(i(n), "width", 0),
        k(i(n), "height", 0),
        k(i(n), "shapes", []),
        (n.shapes = t),
        (n.width = o.width),
        (n.height = o.height),
        n
      );
    }
    return (
      a(s, [
        {
          key: "render",
          value: function (t, e) {
            var i = this,
              o = this.top,
              n = this.left;
            Array.isArray(this.shapes) &&
              this.shapes.forEach(function (s) {
                switch (s.extends.type) {
                  case "labelText":
                    s.set({
                      top: o + s.paddingTop - 12,
                      left: n + s.paddingLeft,
                    });
                    break;
                  case "line":
                  case "bgLine":
                    s.set({
                      points: [
                        n + s.left,
                        o + s.top,
                        n + i.width + s.left,
                        o + s.top,
                      ],
                    });
                    break;
                  default:
                    s.set({ top: o + s.paddingTop, left: n + s.paddingLeft });
                }
                !1 !== s.visible && s.render(t, e);
              });
          },
        },
        {
          key: "isPointInPath",
          value: function (t) {
            var e = t.x,
              i = t.y;
            return this.distanceToNearestEdge(e, i) < m.SELECTRANGE;
          },
        },
        {
          key: "distanceToNearestEdge",
          value: function (t, e) {
            var i = this.left + this.width,
              o = this.top + this.height;
            if (t >= this.left && t <= i && e >= this.top && e <= o)
              return Math.min(t - this.left, i - t, e - this.top, o - e);
            var n = Math.max(0, Math.max(this.left - t, t - i)),
              s = Math.max(0, Math.max(this.top - e, e - o));
            return Math.sqrt(n * n + s * s);
          },
        },
        {
          key: "getCurrentLine",
          value: function () {
            for (var t = 0; t < this.shapes.length; t++) {
              var e = this.shapes[t];
              if ("line" === e.extends.type) return e.getCurrentLine();
            }
          },
        },
      ]),
      s
    );
  })(),
  j = {
    slashLine: C,
    slashRays: C,
    rect: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "collection", []),
          k(i(o), "options", {}),
          (o.groupId = m.uuid()),
          (o.options = e);
        var n = m.rectSize,
          a = n.width,
          h = n.height;
        return (
          (o.props = P(x({}, o.props), {
            width: a,
            height: h,
            strokeUniform: !0,
            groupId: o.groupId,
            rx: 4,
            ry: 4,
            pointRadius: 12,
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t,
                e = this;
              (null == (t = this.options) ? void 0 : t.initData)
                ? (this.initProps(this.options.initData),
                  (this.props.operatingPoint = this.options.initData.points.map(
                    function (t) {
                      var i = e.getPixelCoords(t);
                      return x(x({}, t), i);
                    }
                  )))
                : (this.props.operatingPoint = this.initOperatingPoint());
              var i = this.props.operatingPoint;
              (this.props.width = Math.abs(
                Math.max(i[0].x, i[1].x) - Math.min(i[0].x, i[1].x)
              )),
                (this.props.height = Math.abs(
                  Math.max(i[0].y, i[1].y) - Math.min(i[0].y, i[1].y)
                )),
                this.draw();
            },
          },
          {
            key: "initOperatingPoint",
            value: function () {
              var t = this.getRandomPoint();
              return [
                {
                  x: t.x + this.props.width / 2,
                  y: t.y - this.props.height / 2,
                  isAnchor: !0,
                },
                {
                  x: t.x - this.props.width / 2,
                  y: t.y + this.props.height / 2,
                },
              ];
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this,
                e = this.collection.find(function (t) {
                  var e;
                  return (
                    "innerRect" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                i = this.collection.filter(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(e.stroke),
                weight: e.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                isActive: this.options.isActive,
                points: i.map(function (e) {
                  var i = t.getRealCoords({ x: e.left, y: e.top });
                  return P(x({}, i), { isAnchor: !!e.extends.isAnchor });
                }),
                shapeType: this.options.shapeType,
              };
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection
                .find(function (t) {
                  var e;
                  return (
                    "innerRect" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                })
                .set({ selectable: t }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "initProps",
            value: function (t) {
              var e = t.color,
                i = t.isShow,
                o = t.isLock,
                n = t.weight,
                s = t.groupId,
                r = m.hexToRgbArray(e);
              (this.isShow = i),
                (this.isLock = o),
                (this.groupId = s || this.groupId),
                (this.props = P(x({}, this.props), {
                  groupId: this.groupId,
                  strokeWidth: +n,
                  stroke: e,
                  fill: "rgba("
                    .concat(r[0], ", ")
                    .concat(r[1], ", ")
                    .concat(r[2], ", 0)"),
                  cornerStrokeColor: "rgba("
                    .concat(r[0], ", ")
                    .concat(r[1], ", ")
                    .concat(r[2], ", ")
                    .concat(this.config.borderOpacity, ")"),
                  cornerColor: e,
                  lockMovementX: o,
                  lockMovementY: o,
                  hasControls: !o && i,
                }));
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o;
                  switch (null == (o = i.extends) ? void 0 : o.type) {
                    case "outRect":
                    case "operatingPoint":
                      i.set("visible", t && e.isShow && !e.isLock);
                  }
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "moving",
            value: function (t) {
              var e = 0,
                i = 0,
                o = t.target,
                n = this.collection.filter(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                s = this.collection.find(function (t) {
                  var e;
                  return (
                    "outRect" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                r = o.getCenterPoint();
              this.props.tempPointer &&
                ((e = r.x - this.props.tempPointer.x),
                (i = r.y - this.props.tempPointer.y)),
                (this.props.tempPointer = r),
                n.map(function (t) {
                  t.set({ left: t.left + e, top: t.top + i });
                }),
                s.set({ left: o.left, top: o.top }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "objectMovingCheck",
            value: function (t) {
              var e = this.view,
                i = e.width,
                o = e.height,
                n = t;
              this.getTradeDateCoordsRange().endX,
                n.left < 0
                  ? ((n.left = Math.max(8 - n.width, n.left)),
                    n.top < 0
                      ? (n.top = Math.max(8 - n.height, n.top))
                      : (n.top = Math.min(n.top, o - 8)))
                  : ((n.left = Math.min(n.left, i - 8)),
                    n.top < 0
                      ? (n.top = Math.max(8 - n.height, n.top))
                      : (n.top = Math.min(n.top, o - 8)));
            },
          },
          {
            key: "getBoundingRect",
            value: function () {
              var t = this.collection
                .filter(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                })
                .map(function (t) {
                  return t.getCenterPoint();
                });
              return {
                left: Math.min(t[0].x, t[1].x),
                top: Math.min(t[0].y, t[1].y),
                width: Math.abs(t[0].x - t[1].x),
                height: Math.abs(t[0].y - t[1].y),
              };
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e = this,
                i = t.target,
                o = this.getAreaPoint(i.getCenterPoint(), 8);
              (i.left = o.x), (i.top = o.y), i.showGuideLine();
              var n = this.getBoundingRect(),
                s = n.left,
                r = n.top,
                a = n.width,
                p = n.height;
              this.collection.map(function (t) {
                var i;
                "operatingPoint" !==
                  (null == (i = t.extends) ? void 0 : i.type) &&
                  t.set({
                    left: s - e.props.strokeWidth / 2,
                    top: r - e.props.strokeWidth / 2,
                    width: a,
                    height: p,
                  });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              this.props.operatingPoint.map(function (e) {
                var i = new I({
                  skin: t.options.skin,
                  groupId: t.groupId,
                  left: e.x,
                  top: e.y,
                  originX: "center",
                  originY: "center",
                  hasControls: !1,
                  hasBorders: !1,
                  perPixelTargetFind: !0,
                  visible: t.isShow && t.options.isActive,
                  lockMovementX: t.isLock,
                  lockMovementY: t.isLock,
                  stroke: t.props.stroke,
                  outRadius: t.props.pointRadius,
                  extends: {
                    type: "operatingPoint",
                    isAnchor: !!e.isAnchor,
                    layout: x({}, t.options.layout),
                    chartData: x({}, t.options.chartData),
                  },
                });
                i.on({
                  moving: function (e) {
                    t.operatingPointMoving(e);
                  },
                  modified: function (e) {
                    e.target.hideGuideLine(), t.view.requestRenderAll();
                  },
                  deselected: function (e) {
                    t.setSelectStatus(!1);
                  },
                  selected: function (e) {
                    t.setSelectStatus(!0);
                  },
                }),
                  t.collection.push(i);
              });
            },
          },
          {
            key: "drawRect",
            value: function () {
              var t = this,
                e = this.props,
                i = e.operatingPoint,
                o = e.width,
                n = e.height,
                s = e.strokeWidth,
                r = m.hexToRgbArray(this.props.stroke),
                a = Math.min(i[0].x, i[1].x),
                p = Math.min(i[0].y, i[1].y),
                h = new D({
                  groupId: this.groupId,
                  top: p,
                  left: a,
                  width: o,
                  height: n,
                  fill: "rgba("
                    .concat(r[0], ", ")
                    .concat(r[1], ", ")
                    .concat(r[2], ", 0)"),
                  stroke: "rgba("
                    .concat(r[0], ", ")
                    .concat(r[1], ", ")
                    .concat(r[2], ", ")
                    .concat(this.config.borderOpacity, ")"),
                  strokeWidth: 24,
                  selectable: !1,
                  rx: 4,
                  ry: 4,
                  visible: this.options.isActive && this.isShow,
                  extends: { type: "outRect", isBg: !0 },
                }),
                c = new D(
                  P(x({}, this.props), {
                    top: p,
                    left: a,
                    width: o,
                    height: n,
                    fill: "rgba("
                      .concat(r[0], ", ")
                      .concat(r[1], ", ")
                      .concat(r[2], ", 0)"),
                    strokeWidth: s,
                    hasBorders: !1,
                    hasControls: !1,
                    perPixelTargetFind: !0,
                    visible: this.isShow,
                    extends: { type: "innerRect" },
                  })
                );
              c.on({
                moving: function (e) {
                  t.moving(e);
                },
                deselected: function (e) {
                  t.setSelectStatus(!1);
                },
                selected: function (e) {
                  (t.props.tempPointer = e.target.getCenterPoint()),
                    t.setSelectStatus(!0),
                    setTimeout(function () {
                      t.collection.map(function (e) {
                        var i;
                        "operatingPoint" ===
                          (null == (i = e.extends) ? void 0 : i.type) &&
                          t.view.setActiveObject(e);
                      });
                    }, 50);
                },
              }),
                this.collection.push(h),
                this.collection.push(c);
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.drawRect(),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              (this.chartData = e.chartData),
                (this.props.operatingPoint = t.points.map(function (t) {
                  var e = i.getPixelCoords(t);
                  return x(x({}, t), e);
                })),
                (this.props.width = Math.abs(
                  this.props.operatingPoint[0].x -
                    this.props.operatingPoint[1].x
                )),
                (this.props.height = Math.abs(
                  this.props.operatingPoint[0].y -
                    this.props.operatingPoint[1].y
                ));
              var o = Math.min(
                  this.props.operatingPoint[0].x,
                  this.props.operatingPoint[1].x
                ),
                n = Math.min(
                  this.props.operatingPoint[0].y,
                  this.props.operatingPoint[1].y
                );
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "operatingPoint":
                    var s = i.props.operatingPoint.find(function (e) {
                      var i;
                      return (
                        e.isAnchor ===
                        (null == (i = t.extends) ? void 0 : i.isAnchor)
                      );
                    });
                    t.set({ left: s.x, top: s.y });
                    break;
                  case "innerRect":
                  case "outRect":
                    t.set({
                      left: o - i.props.strokeWidth / 2,
                      top: n - i.props.strokeWidth / 2,
                      width: i.props.width,
                      height: i.props.height,
                    });
                }
              });
            },
          },
        ]),
        p
      );
    })(),
    straightLineSegment: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "timer", null),
          k(i(o), "collection", []),
          k(i(o), "options", {}),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            width: 120,
            height: 24,
            groupId: o.groupId,
            hasControls: !0,
            hasBorders: !1,
            extends: { type: "lineGroup" },
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t,
                e = this;
              if (null == (t = this.options) ? void 0 : t.initData) {
                var i = this.options.initData,
                  o = i.color,
                  n = i.weight,
                  s = i.isLock,
                  r = i.isShow,
                  a = i.points,
                  p = i.groupId;
                (this.props.stroke = o),
                  (this.props.cornerColor = o),
                  (this.props.strokeWidth = +n),
                  (this.isLock = !!s),
                  (this.isShow = !!r),
                  (this.props.groupId = p || this.groupId),
                  (this.groupId = this.props.groupId),
                  (this.props.operatingPoint = a.map(function (t) {
                    var i = e.getPixelCoords(t);
                    return x(x({}, t), i);
                  }));
              } else {
                var h = this.getRandomPoint();
                this.props.operatingPoint = [
                  { x: h.x - this.props.width / 2, y: h.y, isAnchor: !0 },
                  { x: h.x + this.props.width / 2, y: h.y },
                ];
              }
              this.draw();
            },
          },
          {
            key: "getEndPoints",
            value: function () {
              var t = this.props.operatingPoint;
              return { x1: t[0].x, y1: t[0].y, x2: t[1].x, y2: t[1].y };
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              this.props.operatingPoint.forEach(function (e) {
                var i = new I({
                  skin: t.options.skin,
                  top: e.y,
                  left: e.x,
                  ratio: t.ratio,
                  groupId: t.groupId,
                  lockMovementX: !1,
                  lockMovementY: !0,
                  stroke: t.props.stroke,
                  visible: t.options.isActive && t.isShow,
                  extends: {
                    isAnchor: !!e.isAnchor,
                    type: "operatingPoint",
                    layout: x({}, t.options.layout),
                    chartData: x({}, t.options.chartData),
                  },
                });
                i.on({
                  moving: function (e) {
                    t.operatingPointMoving(e);
                  },
                  modified: function (e) {
                    e.target.hideGuideLine(), t.view.requestRenderAll();
                  },
                  deselected: function (e) {
                    t.setSelectStatus(!1);
                  },
                  selected: function (e) {
                    t.setSelectStatus(!0);
                  },
                }),
                  t.collection.push(i);
              });
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e = t.target,
                i = e.getCenterPoint();
              e.showGuideLine(),
                this.props.operatingPoint.map(function (t) {
                  e.extends.isAnchor === !!t.isAnchor && (t.x = i.x);
                });
              var o = this.getEndPoints(),
                n = o.x1,
                s = o.y1,
                r = o.x2,
                a = o.y2;
              this.collection.map(function (t) {
                var e;
                ["bgline", "line"].includes(
                  null == (e = t.extends) ? void 0 : e.type
                ) && t.set({ width: Math.abs(r - n), points: [n, s, r, a] });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  "bgline" === (null == (o = i.extends) ? void 0 : o.type) &&
                    i.set("visible", !(e.isLock || !t || !e.isShow)),
                    "operatingPoint" ===
                      (null == (n = i.extends) ? void 0 : n.type) &&
                      i.set("visible", !(e.isLock || !t || !e.isShow));
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "objectMovingCheck",
            value: function (t) {
              t.left < 0
                ? ((t.left = Math.max(t.left, 10 - t.getBoundingRect().width)),
                  t.top < 0
                    ? (t.top = Math.max(t.top, -t.getBoundingRect().height / 2))
                    : (t.top = Math.min(
                        t.top,
                        t.canvas.height - t.getBoundingRect().height / 2
                      )))
                : t.top < 0
                ? ((t.left = Math.min(t.left, t.canvas.width - 10)),
                  (t.top = Math.max(t.top, -t.getBoundingRect().height / 2)))
                : ((t.left = Math.min(t.left, t.canvas.width - 10)),
                  (t.top = Math.min(
                    t.top,
                    t.canvas.height - t.getBoundingRect().height / 2
                  )));
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this,
                e = this.collection.find(function (t) {
                  var e;
                  return "line" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                i = this.props.operatingPoint.map(function (e) {
                  var i = t.getRealCoords(e);
                  return P(x({}, i), { isAnchor: !!e.isAnchor });
                });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(e.stroke),
                weight: e.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                points: i,
                isActive: this.options.isActive,
                shapeType: this.options.shapeType,
              };
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                e.set({ selectable: t });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = t.color,
                i = t.isShow,
                o = t.isLock,
                n = t.weight,
                s = m.hexToRgbArray(e),
                r = this.collection[0];
              (this.isShow = i),
                (this.isLock = o),
                (this.props = P(x({}, this.props), {
                  strokeWidth: +n,
                  stroke: e,
                  fill: "rgba("
                    .concat(s[0], ", ")
                    .concat(s[1], ", ")
                    .concat(s[2], ", 0.1)"),
                  visible: !!i,
                  lockMovementX: o || !i,
                  lockMovementY: o || !i,
                })),
                r
                  .item(0)
                  .set({
                    fill: "rgba("
                      .concat(s[0], ", ")
                      .concat(s[1], ", ")
                      .concat(s[2], ", 0.1)"),
                    visible: !(!this.options.isActive || !i || o),
                  }),
                r
                  .item(1)
                  .set({
                    strokeWidth: +n,
                    stroke: e,
                    top: -parseInt(n) / 2,
                    left: -r.width / 2,
                  }),
                r.set({
                  cornerColor: e,
                  visible: !!i,
                  lockMovementX: o || !i,
                  lockMovementY: o || !i,
                  cornerStrokeColor: "rgba("
                    .concat(s[0], ", ")
                    .concat(s[1], ", ")
                    .concat(s[2], ", 0.1)"),
                  hasControls: i && !o,
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "draw",
            value: function () {
              var t,
                i = this,
                o = m.hexToRgbArray(this.props.stroke),
                n = this.getEndPoints(),
                s = n.x1,
                r = n.y1,
                a = n.x2,
                p = n.y2,
                h = new R(
                  [s, r, a, p],
                  P(x({}, this.props), {
                    left: s,
                    top: r,
                    extends: { type: "line" },
                  })
                ),
                c = new R([s, r, a, p], {
                  groupId: this.groupId,
                  stroke: "rgba("
                    .concat(o[0], ", ")
                    .concat(o[1], ", ")
                    .concat(o[2], ", ")
                    .concat(this.config.borderOpacity, ")"),
                  strokeWidth: 16,
                  hasControls: !1,
                  hasBorders: !1,
                  left: Math.min(s, a),
                  top: Math.min(r, p),
                  opacity: this.options.isActive ? 1 : 0,
                  selectable: !1,
                  visible: this.options.isActive && this.isShow,
                  extends: { type: "bgline", isBg: !0 },
                });
              h.on({
                modified: function (t) {},
                moving: function (t) {
                  return i.lineMoving(t);
                },
                deselected: function (t) {
                  (i.tempPointer = null), i.setSelectStatus(!1);
                },
                selected: function (t) {
                  var e = t.e;
                  (i.tempPointer = e), i.isShow && i.setSelectStatus(!0);
                },
              }),
                this.collection.push(c),
                this.collection.push(h),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e = this;
              t.target;
              var i = this.getAreaPoint(
                  { x: t.e.changedTouches[0].x, y: t.e.changedTouches[0].y },
                  8
                ),
                o = 0,
                n = 0;
              this.tempPointer &&
                ((o = i.x - this.tempPointer.x),
                (n = i.y - this.tempPointer.y)),
                (this.tempPointer = i),
                this.props.operatingPoint.map(function (t) {
                  (t.x += o), (t.y += n);
                }),
                this.collection.map(function (t) {
                  var i;
                  switch (null == (i = t.extends) ? void 0 : i.type) {
                    case "operatingPoint":
                      t.set({ left: t.left + o, top: t.top + n });
                      break;
                    case "line":
                    case "bgline":
                      var s = e.getEndPoints(),
                        r = s.x1,
                        a = s.y1,
                        p = s.x2,
                        h = s.y2;
                      t.set({ width: Math.abs(p - r), points: [r, a, p, h] });
                  }
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getAreaPoint",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i = this.layout.chart,
                o = i.width,
                n = i.height;
              return (
                t.x < e && (t.x = e),
                t.x > o - e && (t.x = o - e),
                t.y < e && (t.y = e),
                t.y > n - e && (t.y = n - e),
                t
              );
            },
          },
          {
            key: "setActive",
            value: function () {
              var t = this.collection[this.collection.length - 1];
              this.view.setActiveObject(t);
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              (this.chartData = e.chartData),
                (this.props.operatingPoint = t.points.map(function (t) {
                  var e = i.getPixelCoords(t);
                  return x(x({}, t), e);
                }));
              var o = this.getEndPoints(),
                n = o.x1,
                s = o.y1,
                r = o.x2,
                a = o.y2;
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "operatingPoint":
                    var o = i.props.operatingPoint.find(function (e) {
                      var i;
                      return (
                        e.isAnchor ===
                        (null == (i = t.extends) ? void 0 : i.isAnchor)
                      );
                    });
                    t.set({ left: o.x, top: o.y });
                    break;
                  case "line":
                  case "bgline":
                    t.set({ points: [n, s, r, a] });
                }
              });
            },
          },
        ]),
        p
      );
    })(),
    goldenSeparate: (function (t) {
      o(h, M);
      var p = n(h);
      function h(t, e) {
        var o;
        return (
          r(this, h),
          (o = p.call(this, t, e)),
          k(i(o), "timer", null),
          k(i(o), "options", {}),
          k(i(o), "collection", []),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), { height: 140, groupId: o.groupId })),
          (o.collection = []),
          o.initProps(),
          o.init(),
          o
        );
      }
      return (
        a(h, [
          {
            key: "initPoints",
            value: function () {
              var t = this,
                e = this.view.getCenter(),
                i = {
                  start: { x: e.left, y: 0, isAnchor: !0 },
                  end: { x: e.left, y: this.view.height },
                };
              if (((this.options.isActive = !0), this.options.initData)) {
                (this.isLock = this.options.initData.isLock),
                  (this.isShow = this.options.initData.isShow),
                  (this.groupId =
                    this.options.initData.groupId || this.groupId),
                  (this.props.groupId = this.groupId),
                  (this.options.isActive = !1);
                var o = this.options.initData.points;
                Array.isArray(o) &&
                  o.map(function (o) {
                    o.isAnchor
                      ? (i.start = P(x({}, t.getPixelCoords(o)), {
                          isAnchor: !0,
                          x: e.left,
                        }))
                      : (i.end = P(x({}, t.getPixelCoords(o)), { x: e.left }));
                  });
              }
              return (this.props.operatingPoint = i), i;
            },
          },
          {
            key: "init",
            value: function () {
              var t = this.initPoints(),
                e = Math.abs(
                  Math.max(t.start.y, t.end.y) - Math.min(t.start.y, t.end.y)
                );
              (this.props.height = e),
                (this.props.flipY = t.start.y > t.end.y),
                this.draw();
            },
          },
          {
            key: "initProps",
            value: function () {
              this.options.initData &&
                ((this.props.stroke = this.options.initData.color),
                (this.props.strokeWidth = this.options.initData.weight),
                (this.props.groupId = this.options.initData.groupId),
                (this.isLock = this.options.initData.isLock),
                (this.isShow = this.options.initData.isShow));
              var t = this.props,
                e = t.stroke,
                i = t.groupId,
                o = t.strokeWidth,
                n = m.hexToRgbArray(e),
                s = {
                  groupId: i,
                  width: this.layout.chart.width,
                  left: 3,
                  height: 24,
                  strokeWidth: 24,
                  hasControls: !1,
                  hasBorders: !1,
                  lockMovementX: !0,
                  lockMovementY: this.isLock,
                  visible: this.isShow,
                },
                r = {
                  stroke: e,
                  strokeWidth: o,
                  strokeDashArray: [5, 3],
                  groupId: i,
                  bgColor: "rgba("
                    .concat(n[0], ", ")
                    .concat(n[1], ", ")
                    .concat(n[2], ", 0.1)"),
                },
                a = {
                  paddingLeft: 0,
                  paddingTop: -7,
                  height: 15,
                  strokeWidth: 1,
                  rx: 4,
                  ry: 4,
                  stroke: "rgba("
                    .concat(n[0], ", ")
                    .concat(n[1], ", ")
                    .concat(n[2], ", 0.6)"),
                  fill: "rgba("
                    .concat(n[0], ", ")
                    .concat(n[1], ", ")
                    .concat(n[2], ", 0.1)"),
                  borderRadius: 2,
                },
                p = {
                  paddingLeft: 5,
                  paddingTop: 6,
                  width: 75,
                  stroke: e,
                  padding: 5,
                  fontSize: 10,
                  fontWeight: 500,
                  fontFamily: "SFProDisplay-Medium",
                  textAlign: "center",
                };
              this.props = P(x({}, this.props), {
                groupProps: s,
                lineProps: r,
                tipRectProps: a,
                textProps: p,
              });
            },
          },
          {
            key: "drawPoints",
            value: function () {
              var t = this,
                e = this.props.operatingPoint;
              [e.start, e.end].map(function (e, i) {
                var o = new I({
                  skin: t.options.skin,
                  groupId: t.props.groupId,
                  left: e.x,
                  top: e.y,
                  perPixelTargetFind: !0,
                  lockMovementX: !0,
                  lockMovementY: t.isLock,
                  visible: t.options.isActive,
                  stroke: t.props.stroke,
                  extends: {
                    pid: t.groupId,
                    type: "operatingPoint",
                    isAnchor: 0 === i,
                    layout: x({}, t.options.layout),
                    chartData: x({}, t.options.chartData),
                  },
                });
                o.on({
                  moving: function (e) {
                    t.operatingPointMoving(e);
                  },
                  modified: function (e) {
                    e.target.hideGuideLine(), t.view.requestRenderAll();
                  },
                  deselected: function (e) {
                    t.setSelectStatus(!1);
                  },
                  selected: function (e) {
                    t.timer && clearTimeout(t.timer), t.setSelectStatus(!0);
                  },
                }),
                  t.collection.push(o);
              });
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e = this,
                i = t.target,
                o = this.getAreaPoint(i.getCenterPoint());
              (i.top = o.y), i.showGuideLine();
              var n = this.collection.filter(function (t) {
                  var e;
                  return (
                    "lineGroup" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                s = { startY: 0, endY: 0 };
              this.collection.map(function (t) {
                var e;
                "operatingPoint" ===
                  (null == (e = t.extends) ? void 0 : e.type) &&
                  (t.extends.isAnchor ? (s.startY = t.top) : (s.endY = t.top));
              }),
                (this.props.flipY = s.startY > s.endY);
              var r = Math.abs(s.startY - s.endY),
                a = Math.min(s.startY, s.endY);
              [0, 0.191, 0.382, 0.5, 0.618, 1].map(function (t, i) {
                var o,
                  s = a + (e.props.flipY ? 1 - t : t) * r;
                if (
                  (n[i].set("top", s),
                  (null == (o = n[i].shapes) ? void 0 : o.length) >= 4)
                ) {
                  var p = e.getRealCoords({ x: 0, y: s }),
                    h = n[i].shapes.find(function (t) {
                      var e;
                      return (
                        "labelText" ===
                        (null == (e = t.extends) ? void 0 : e.type)
                      );
                    });
                  h &&
                    h.set(
                      "text",
                      ""
                        .concat((100 * t).toFixed(1), "% ")
                        .concat(p.y.toFixed(2))
                    );
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  "lineGroup" === i.extends.type &&
                    (null == (o = i.shapes) ? void 0 : o.length) &&
                    i.shapes.map(function (i) {
                      var o;
                      "bgLine" ===
                        (null == (o = i.extends) ? void 0 : o.type) &&
                        i.set("visible", t && !e.isLock && e.isShow);
                    }),
                    "operatingPoint" ===
                      (null == (n = i.extends) ? void 0 : n.type) &&
                      i.set("visible", t && !e.isLock && e.isShow);
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "objectMovingCheck",
            value: function (t) {
              t.getBoundingRect().top < 0
                ? (t.top = Math.max(t.getBoundingRect().top, 0))
                : (t.top = Math.min(
                    t.getBoundingRect().top,
                    this.view.height - t.getBoundingRect().height
                  ));
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e = this,
                i = t.target,
                o = this.props.flipY;
              this.objectMovingCheck(i);
              var n = this.collection.filter(function (t) {
                  var e;
                  return (
                    "lineGroup" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                s = this.collection.filter(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                r = [s[0].getCenterPoint().y, s[1].getCenterPoint().y],
                a = Math.abs(Math.max.apply(Math, r) - Math.min.apply(Math, r));
              [0, 0.191, 0.382, 0.5, 0.618, 1].map(function (t, r) {
                var p,
                  h = i.extends.step;
                if (
                  (o
                    ? (t < i.extends.step
                        ? n[r].set("top", i.top + a * (h - t))
                        : t > i.extends.step &&
                          n[r].set("top", i.top - a * (t - h)),
                      [0, 1].indexOf(t) > -1 &&
                        s.map(function (e) {
                          var o, n;
                          0 === t &&
                            (null == (o = e.extends) ? void 0 : o.isAnchor) &&
                            e.set("top", i.top + a * h),
                            1 !== t ||
                              (null == (n = e.extends) ? void 0 : n.isAnchor) ||
                              e.set("top", i.top - a * (1 - h));
                        }))
                    : (t < i.extends.step
                        ? n[r].set("top", i.top - a * (h - t))
                        : t > i.extends.step &&
                          n[r].set("top", i.top + a * (t - h)),
                      [0, 1].indexOf(t) > -1 &&
                        s.map(function (e) {
                          var o, n;
                          0 === t &&
                            (null == (o = e.extends) ? void 0 : o.isAnchor) &&
                            e.set("top", i.top - a * h),
                            1 !== t ||
                              (null == (n = e.extends) ? void 0 : n.isAnchor) ||
                              e.set("top", i.top + a * (1 - h));
                        })),
                  (null == (p = n[r].shapes) ? void 0 : p.length) > 3)
                ) {
                  var c = n[r].shapes.find(function (t) {
                      var e;
                      return (
                        "labelText" ===
                        (null == (e = t.extends) ? void 0 : e.type)
                      );
                    }),
                    l = e.getRealCoords({ x: 0, y: n[r].getCenterPoint().y });
                  c.set(
                    "text",
                    "".concat((100 * t).toFixed(1), "% ").concat(l.y.toFixed(2))
                  );
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                e.set({ selectable: t });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this,
                e = this.collection
                  .filter(function (t) {
                    var e;
                    return (
                      "operatingPoint" ===
                      (null == (e = t.extends) ? void 0 : e.type)
                    );
                  })
                  .map(function (e) {
                    var i,
                      o = e.getCenterPoint(),
                      n = t.getRealCoords(o);
                    return P(x({}, n), {
                      isAnchor: !!(null == (i = e.extends)
                        ? void 0
                        : i.isAnchor),
                    });
                  });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(this.props.stroke),
                weight: this.props.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                points: e,
                isFlip: this.props.flipY,
                shapeType: this.options.shapeType,
                isActive: this.options.isActive,
              };
            },
          },
          {
            key: "updateProps1",
            value: function (t) {
              var e = this,
                i = t.color,
                o = t.isShow,
                n = t.isLock,
                s = t.weight,
                r = this.collection.filter(function (t) {
                  var e;
                  return (
                    "lineGroup" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                a = this.collection.filter(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                p = m.hexToRgbArray(i);
              (this.isShow = o),
                (this.isLock = n),
                (this.props.stroke = i),
                (this.props.strokeWidth = +s),
                r.map(function (t) {
                  t.shapes.map(function (t, r) {
                    switch (r) {
                      case 0:
                        t.set({
                          stroke: i,
                          strokeWidth: +s,
                          visible: o,
                          top: -parseFloat(s) / 2,
                        });
                        break;
                      case 1:
                        t.set({
                          stroke: "rgba("
                            .concat(p[0], ", ")
                            .concat(p[1], ", ")
                            .concat(p[2], ", 0.1)"),
                          visible: e.options.isActive && o && !n,
                        });
                        break;
                      case 2:
                        t.set({
                          stroke: "rgba("
                            .concat(p[0], ", ")
                            .concat(p[1], ", ")
                            .concat(p[2], ", 0.6)"),
                          fill: "rgba("
                            .concat(p[0], ", ")
                            .concat(p[1], ", ")
                            .concat(p[2], ", 0.1)"),
                        });
                        break;
                      case 3:
                        t.set({ stroke: i });
                    }
                  }),
                    t.set({ visible: o, lockMovementY: n || !o });
                }),
                a.map(function (t) {
                  t._objects[0].set({
                    fill: "rgba("
                      .concat(p[0], ", ")
                      .concat(p[1], ", ")
                      .concat(p[2], ", 0.1)"),
                  }),
                    t._objects[1].set({ fill: i, visible: o && !n }),
                    t.set({
                      visible: e.options.isActive && o && !n,
                      lockMovementY: n || !o,
                    });
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getSteps",
            value: function () {
              var t = this,
                e = this.props,
                i = e.groupProps,
                o = e.lineProps,
                n = e.tipRectProps,
                s = e.textProps,
                r = e.height,
                a = e.flipY,
                p = this.props.operatingPoint,
                h = p.start,
                c = p.end,
                l = Math.min(h.y, c.y),
                u = [];
              return (
                [0, 0.191, 0.382, 0.5, 0.618, 1].map(function (e, p) {
                  var h = a ? 1 - e : e,
                    c = [],
                    d = t.getRealCoords({ x: 0, y: l + h * r }),
                    v = ""
                      .concat((100 * e).toFixed(1), "% ")
                      .concat(d.y.toFixed(2));
                  c.push(
                    new R(
                      [
                        0,
                        l + h * r,
                        t.layout.chart.width + t.layout.chart.left,
                        l + h * r,
                      ],
                      P(x({}, o), {
                        stroke: o.bgColor,
                        strokeWidth: 24,
                        top: -o.strokeWidth / 2,
                        strokeDashArray: [],
                        visible: t.options.isActive && t.isShow,
                        extends: { type: "bgLine", index: p, isBg: !0 },
                      })
                    )
                  ),
                    c.push(
                      new R(
                        [
                          [0, 1].includes(e) ? 0 : 6 * v.length,
                          l + h * r,
                          t.layout.chart.width,
                          l + h * r,
                        ],
                        P(x({}, o), {
                          strokeDashArray: [0, 1].includes(e) ? [] : [5, 3],
                          top: -o.strokeWidth / 2,
                          left: [0, 1].includes(e) ? 0 : 6 * v.length,
                          extends: { type: "line", index: p },
                        })
                      )
                    ),
                    -1 === [0, 1].indexOf(e) &&
                      (c.push(
                        new D(
                          P(x({}, n), {
                            width: 6 * v.length,
                            extends: { type: "labelRect" },
                          })
                        )
                      ),
                      c.push(
                        new W(
                          P(x({ text: v }, s), {
                            extends: { type: "labelText" },
                          })
                        )
                      ));
                  var g = new E(
                    c,
                    P(x({}, i), {
                      top: l + h * r,
                      lockMovementX: !0,
                      lockMovementY: t.isLock,
                      extends: { type: "lineGroup", step: e },
                    })
                  );
                  g.on({
                    moving: function (e) {
                      t.lineMoving(e);
                    },
                    deselected: function (e) {
                      t.setSelectStatus(!1);
                    },
                    selected: function (e) {
                      t.timer && clearTimeout(t.timer),
                        t.setSelectStatus(!0),
                        setTimeout(function () {
                          t.collection.map(function (e) {
                            var i;
                            "operatingPoint" ===
                              (null == (i = e.extends) ? void 0 : i.type) &&
                              t.view.setActiveObject(e);
                          });
                        }, 50);
                    },
                  }),
                    u.push(g),
                    t.collection.push(g);
                }),
                u
              );
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.getSteps(),
                this.drawPoints(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this,
                o = this.view.getCenter();
              (this.chartData = e.chartData),
                t.points.map(function (t) {
                  t.isAnchor
                    ? (i.props.operatingPoint.start = P(
                        x({}, i.getPixelCoords(t)),
                        { isAnchor: !0, x: o.left }
                      ))
                    : (i.props.operatingPoint.end = P(
                        x({}, i.getPixelCoords(t)),
                        { x: o.left }
                      ));
                }),
                (this.props.height = Math.abs(
                  this.props.operatingPoint.start.y -
                    this.props.operatingPoint.end.y
                )),
                (this.props.flipY =
                  this.props.operatingPoint.start.y >
                  this.props.operatingPoint.end.y),
                this.collection.map(function (t) {
                  var e;
                  "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type) &&
                    t.set({
                      top: t.extends.isAnchor
                        ? i.props.operatingPoint.start.y
                        : i.props.operatingPoint.end.y,
                    });
                });
              var n = this.collection.filter(function (t) {
                  var e;
                  return (
                    "lineGroup" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                s = Math.min(
                  this.props.operatingPoint.start.y,
                  this.props.operatingPoint.end.y
                );
              [0, 0.191, 0.382, 0.5, 0.618, 1].map(function (t, e) {
                var o,
                  r = s + (i.props.flipY ? 1 - t : t) * i.props.height;
                if (
                  (n[e].set("top", r),
                  (null == (o = n[e].shapes) ? void 0 : o.length) > 3)
                ) {
                  var a = i.getRealCoords({ x: 0, y: r });
                  n[e].shapes
                    .find(function (t) {
                      var e;
                      return (
                        "labelText" ===
                        (null == (e = t.extends) ? void 0 : e.type)
                      );
                    })
                    .set({
                      text: ""
                        .concat((100 * t).toFixed(1), "% ")
                        .concat(a.y.toFixed(2)),
                    });
                }
              });
            },
          },
          {
            key: "updateProps",
            value: function (t) {
              var e = this;
              t.stroke && (this.props.stroke = t.stroke),
                null != t.isLock && (this.isLock = t.isLock),
                this.collection.forEach(function (i) {
                  var o;
                  (null == (o = i.shapes) ? void 0 : o.length) > 0
                    ? (null != t.isLock && i.set("isLock", t.isLock),
                      i.shapes.forEach(function (i) {
                        e.updateObj(i, t);
                      }))
                    : e.updateObj(i, t);
                });
            },
          },
          {
            key: "updateObj",
            value: function (t, e) {
              var i,
                o,
                n = JSON.parse(JSON.stringify(e));
              if (
                (delete n.fontSize,
                e.stroke && (null == (i = t.extends) ? void 0 : i.isBg))
              ) {
                var r = m.hexToRgbArray(e.stroke);
                (n.stroke = "rgba("
                  .concat(r[0], ", ")
                  .concat(r[1], ", ")
                  .concat(r[2], ", ")
                  .concat(this.config.borderOpacity, ")")),
                  delete n.strokeWidth;
              }
              "labelRect" === (null == (o = t.extends) ? void 0 : o.type) &&
                delete n.strokeWidth,
                Object.entries(n).forEach(function (e) {
                  var i,
                    o,
                    n,
                    r = s(e, 2),
                    a = r[0],
                    p = r[1];
                  t.set(a, p),
                    "isLock" === a &&
                      ((null == (o = null == (i = t.extends) ? void 0 : i.type)
                        ? void 0
                        : o.toLowerCase().includes("operatingpoint")) ||
                        (null == (n = t.extends) ? void 0 : n.isBg)) &&
                      t.set("visible", !p && t.visible);
                });
            },
          },
        ]),
        h
      );
    })(),
    text: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "collection", []),
          k(i(o), "operatingPoint", {}),
          k(i(o), "textPoint", {}),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            groupId: o.groupId,
            strokeUniform: !0,
            text: "请点击添加标注",
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              this.initOperatingPoint(), this.draw();
            },
          },
          {
            key: "initOperatingPoint",
            value: function () {
              var t,
                e = this;
              if (
                ((this.operatingPoint = this.getRandomPoint()),
                (this.textPoint = {
                  x: this.operatingPoint.x - 120,
                  y: this.operatingPoint.y - 60,
                }),
                null == (t = this.options) ? void 0 : t.initData)
              ) {
                var i = this.options.initData,
                  o = i.isLock,
                  n = i.isShow,
                  s = i.color,
                  r = i.text,
                  a = i.fontSize,
                  p = i.weight,
                  h = i.groupId;
                (this.groupId = h || this.groupId),
                  (this.isLock = o),
                  (this.isShow = n),
                  (this.props = P(x({}, this.props), {
                    stroke: s,
                    text: r,
                    strokeWidth: p,
                    fontSize: a,
                  })),
                  this.options.initData.points.map(function (t) {
                    var i = e.getPixelCoords(t),
                      o = i.x,
                      n = i.y;
                    t.isAnchor
                      ? (e.operatingPoint = { x: o, y: n, isAnchor: !0 })
                      : (e.textPoint = { x: o, y: n });
                  });
              }
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                e.set({ selectable: t });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e = 0,
                i = 0,
                o = this.getAreaPoint({
                  x: t.e.changedTouches[0].x,
                  y: t.e.changedTouches[0].y,
                }),
                n = this.collection.find(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                s = this.collection.find(function (t) {
                  var e;
                  return (
                    "fixPoint" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                r = this.collection.find(function (t) {
                  return "text" === t.type;
                });
              this.props.tempPointer &&
                ((e = o.x - this.props.tempPointer.x),
                (i = o.y - this.props.tempPointer.y)),
                (this.props.tempPointer = o),
                n.set({ left: n.left + e, top: n.top + i }),
                s.set({ left: s.left + e, top: s.top + i }),
                r.set({ left: r.left + e, top: r.top + i });
              var a = n.getCenterPoint(),
                p = this.getTextCorner(a, r);
              t.target.set({
                points: [a.x, a.y, p.x, p.y],
                left:
                  Math.min(a.x, p.x) - parseFloat(this.props.strokeWidth) / 2,
                top:
                  Math.min(a.y, p.y) - parseFloat(this.props.strokeWidth) / 2,
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "textMoving",
            value: function (t) {
              this.objectMovingCheck(t);
              var e = this.collection.find(function (t) {
                  var e;
                  return "line" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                i = this.collection
                  .find(function (t) {
                    var e;
                    return (
                      "operatingPoint" ===
                      (null == (e = t.extends) ? void 0 : e.type)
                    );
                  })
                  .getCenterPoint(),
                o = this.getTextCorner(i, t.target);
              e.set("points", [o.x, o.y, i.x, i.y]),
                this.view.requestRenderAll();
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e = t.target,
                i = this.getAreaPoint(e.getCenterPoint(), 8);
              (e.left = i.x), (e.top = i.y);
              var o = this.collection.find(function (t) {
                  var e;
                  return "line" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                n = this.collection.find(function (t) {
                  var e;
                  return "text" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                s = this.collection.find(function (t) {
                  var e;
                  return (
                    "fixPoint" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                });
              (this.operatingPoint = e.getCenterPoint()), e.showGuideLine();
              var r = this.getTextCorner(this.operatingPoint, n);
              o.set("points", [
                r.x,
                r.y,
                this.operatingPoint.x,
                this.operatingPoint.y,
              ]),
                s.set({
                  left: this.operatingPoint.x,
                  top: this.operatingPoint.y,
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this.collection.find(function (t) {
                  var e;
                  return "line" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                e = this.collection.find(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                i = this.collection.find(function (t) {
                  var e;
                  return "text" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                o = [
                  P(x({}, this.getRealCoords(e.getCenterPoint())), {
                    isAnchor: !0,
                  }),
                  x({}, this.getRealCoords({ x: i.left, y: i.top })),
                ];
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(t.stroke),
                weight: t.strokeWidth - 1,
                isLock: this.isLock,
                isShow: this.isShow,
                text: i.text,
                fontSize: m.getFontSizeIndex(i.fontSize),
                points: o,
                shapeType: this.options.shapeType,
                isActive: this.options.isActive,
              };
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              this.collection.map(function (i) {
                var o;
                "operatingPoint" ===
                  (null == (o = i.extends) ? void 0 : o.type) &&
                  i.set({ visible: t && !e.isLock && e.isShow });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = this,
                i = t.color,
                o = t.isLock,
                n = t.isShow,
                s = t.fontSize,
                r = void 0 === s ? 14 : s,
                a = t.weight,
                p = t.text,
                h = m.hexToRgbArray(i);
              if (
                ((this.isLock = o),
                (this.isShow = n),
                (this.props.stroke = i),
                (this.props.fontSize = r),
                (this.props.text = p),
                this.collection.map(function (t) {
                  switch (t.type) {
                    case "line":
                      t.set({
                        stroke: i,
                        cornerColor: i,
                        strokeWidth: +a,
                        cornerStrokeColor: "rgba("
                          .concat(h[0], ", ")
                          .concat(h[1], ", ")
                          .concat(h[2], ", 0.1)"),
                        visible: n,
                        lockMovementX: o || !n,
                        lockMovementY: o || !n,
                      });
                      break;
                    case "text":
                    case "i-text":
                      t.set({
                        fill: i,
                        fontSize: +r,
                        backgroundColor: "rgba("
                          .concat(h[0], ", ")
                          .concat(h[1], ", ")
                          .concat(h[2], ", 0.1)"),
                        visible: n,
                        lockMovementX: o || !n,
                        lockMovementY: o || !n,
                        editable: !o,
                        text: p || t.text || e.props.text,
                      });
                      break;
                    case "group":
                      t
                        .item(0)
                        .set({
                          fill: "rgba("
                            .concat(h[0], ", ")
                            .concat(h[1], ", ")
                            .concat(h[2], ", 0.1)"),
                          visible: n,
                        }),
                        t.item(1).set({ fill: i, visible: n }),
                        t.set({
                          lockMovementX: o || !n,
                          lockMovementY: o || !n,
                        });
                  }
                }),
                p)
              ) {
                var c = this.collection.find(function (t) {
                  var e;
                  return "text" === (null == (e = t.extends) ? void 0 : e.type);
                });
                this.textMoving({ transform: { target: c } });
              }
              this.view.requestRenderAll();
            },
          },
          {
            key: "getTextCorner",
            value: function (t, e) {
              var i = e.left,
                o = e.top,
                n = e.width,
                s = e.height,
                r = t.x,
                a = t.y;
              return r < i
                ? { x: i, y: o + s / 2 }
                : r > i + n
                ? { x: i + n, y: o + s / 2 }
                : a < o
                ? { x: i + n / 2, y: o }
                : { x: i + n / 2, y: o + s };
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this,
                e = this.operatingPoint,
                i = new I({
                  skin: this.options.skin,
                  top: e.y,
                  left: e.x,
                  ratio: this.ratio,
                  groupId: this.groupId,
                  stroke: this.props.stroke,
                  visible: this.options.isActive && this.isShow,
                  extends: {
                    isAnchor: e.isAnchor,
                    type: "operatingPoint",
                    layout: x({}, this.options.layout),
                    chartData: x({}, this.options.chartData),
                    shapeType: this.options.shapeType,
                  },
                }),
                o = new I({
                  top: e.y,
                  left: e.x,
                  ratio: this.ratio,
                  groupId: this.groupId,
                  stroke: this.props.stroke,
                  visible: this.isShow,
                  selectable: !1,
                  inRadius: 4,
                  outRadius: 4,
                  extends: {
                    isAnchor: e.isAnchor,
                    type: "fixPoint",
                    layout: x({}, this.options.layout),
                    chartData: x({}, this.options.chartData),
                    shapeType: this.options.shapeType,
                  },
                });
              i.on({
                moving: function (e) {
                  t.operatingPointMoving(e);
                },
                modified: function (e) {
                  e.target.hideGuideLine(), t.view.requestRenderAll();
                },
                deselected: function (e) {
                  t.setSelectStatus(!1);
                },
                selected: function (e) {
                  t.setSelectStatus(!0);
                },
              }),
                this.collection.push(o),
                this.collection.push(i);
            },
          },
          {
            key: "drawText",
            value: function () {
              var t = this,
                e = this.props,
                i = e.stroke,
                o = e.text,
                n = e.fontSize,
                s = void 0 === n ? 14 : n,
                r = m.hexToRgbArray(i),
                a = new W({
                  text: o,
                  groupId: this.groupId,
                  width: 80,
                  height: 30,
                  left: this.textPoint.x,
                  top: this.textPoint.y,
                  fontSize: s,
                  stroke: i,
                  textAlign: "center",
                  fillStyle: "rgba("
                    .concat(r[0], ", ")
                    .concat(r[1], ", ")
                    .concat(r[2], ", 0.1)"),
                  borderScaleFactor: 2,
                  hasControls: !1,
                  hasBorders: !1,
                  fontFamily: "PingFangSC-Medium",
                  visible: this.isShow,
                  lockMovementX: this.isLock,
                  lockMovementY: this.isLock,
                  charSpacing: 10,
                  extends: { type: "text", shapeType: this.options.shapeType },
                }),
                p = this.view,
                h = p.ctx,
                c = p.ratio;
              a.calTextSize(h, c),
                a.on({
                  moving: function (e) {
                    t.textMoving(e);
                  },
                  modified: function (e) {
                    t.textPoint = { x: a.left, y: a.top };
                  },
                  selected: function (e) {
                    t.setSelectStatus(!0);
                  },
                  deselected: function (e) {
                    t.setSelectStatus(!1);
                  },
                  tap: function (e) {
                    var i, o;
                    null ==
                      (o =
                        null == (i = t.view.instance)
                          ? void 0
                          : i.handleTipTextDoubleClick) || o.call(i, e);
                  },
                }),
                this.collection.push(a);
            },
          },
          {
            key: "drawLine",
            value: function () {
              var t = this,
                e = this.collection.find(function (t) {
                  var e;
                  return "text" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                i = this.getTextCorner(this.operatingPoint, e),
                o = [i.x, i.y, this.operatingPoint.x, this.operatingPoint.y],
                n = new R(
                  o,
                  P(x({}, this.props), {
                    hasBorders: !1,
                    hasControls: !1,
                    strokeDashArray: [5, 3],
                    perPixelTargetFind: !0,
                    visible: this.isShow,
                    lockMovementX: this.isLock,
                    lockMovementY: this.isLock,
                    extends: {
                      type: "line",
                      shapeType: this.options.shapeType,
                    },
                  })
                );
              n.on({
                moving: function (e) {
                  t.lineMoving(e);
                },
                modified: function (t) {},
                deselected: function (e) {
                  delete t.props.tempPointer,
                    (t.options.isActive = !1),
                    t.setSelectStatus(!1);
                },
                selected: function (e) {
                  var i = e.e;
                  (t.props.tempPointer = i),
                    (t.options.isActive = !0),
                    t.setSelectStatus(!0);
                },
              }),
                this.collection.push(n);
            },
          },
          {
            key: "redrawLine",
            value: function () {
              var t = this.view,
                e = t.ctx,
                i = t.ratio,
                o = this.collection.find(function (t) {
                  var e;
                  return "text" === (null == (e = t.extends) ? void 0 : e.type);
                });
              o.calTextSize(e, i);
              var n = this.collection.find(function (t) {
                  var e;
                  return "line" === (null == (e = t.extends) ? void 0 : e.type);
                }),
                s = this.getTextCorner(this.operatingPoint, o);
              n.set({
                points: [
                  s.x,
                  s.y,
                  this.operatingPoint.x,
                  this.operatingPoint.y,
                ],
              });
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.drawText(),
                this.drawLine(),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              (this.chartData = e.chartData),
                this.collection.find(function (t) {
                  return "line" === t.type;
                });
              var o = this.collection.find(function (t) {
                var e;
                return "text" === (null == (e = t.extends) ? void 0 : e.type);
              });
              t.points.map(function (t) {
                var e = i.getPixelCoords(t),
                  o = e.x,
                  n = e.y;
                t.isAnchor
                  ? (i.operatingPoint = { x: o, y: n, isAnchor: !0 })
                  : (i.textPoint = { x: o, y: n });
              }),
                o.set({ left: this.textPoint.x, top: this.textPoint.y });
              var n = this.getTextCorner(this.operatingPoint, o);
              this.collection.map(function (t) {
                switch (t.extends.type) {
                  case "operatingPoint":
                  case "fixPoint":
                    t.set({
                      left: i.operatingPoint.x,
                      top: i.operatingPoint.y,
                    });
                    break;
                  case "line":
                    t.set({
                      points: [
                        n.x,
                        n.y,
                        i.operatingPoint.x,
                        i.operatingPoint.y,
                      ],
                    });
                    break;
                  case "text":
                    t.set({ left: i.textPoint.x, top: i.textPoint.y });
                }
              }),
                this.view.requestRenderAll();
            },
          },
        ]),
        p
      );
    })(),
    slashLineSegment: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "options", {}),
          k(i(o), "timer", null),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            lockScalingFlip: !1,
            strokeUniform: !0,
            groupId: o.groupId,
            slope: -0.5,
          })),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t;
              (this.props.operatingPoint = this.getEndPoints()),
                this.options.initData && this.initProps(this.options.initData),
                this.props.operatingPoint &&
                  (this.props.slope = m.getLineSlope(
                    this.props.operatingPoint.start,
                    this.props.operatingPoint.end
                  )),
                this.draw(),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "initProps",
            value: function (t) {
              if (t) {
                var e = t.color,
                  i = t.isShow,
                  o = t.isLock,
                  n = t.weight,
                  s = m.hexToRgbArray(e);
                (this.isShow = i),
                  (this.isLock = o),
                  (this.props = P(x({}, this.props), {
                    strokeWidth: +n,
                    stroke: e,
                    cornerStrokeColor: "rgba("
                      .concat(s[0], ", ")
                      .concat(s[1], ", ")
                      .concat(s[2], ", 0.4)"),
                    cornerColor: e,
                    opacity: i ? 1 : 0,
                    lockMovementX: o,
                    lockMovementY: o,
                    hasControls: !o && i,
                  }));
              }
            },
          },
          {
            key: "getEndPoints",
            value: function () {
              var t = this.getRandomPoint(),
                e = t.x,
                i = t.y - e * this.props.slope,
                o = {
                  start: {
                    x: e - 100,
                    y: this.props.slope * (e - 100) + i,
                    isAnchor: !0,
                  },
                  end: { x: e + 100, y: this.props.slope * (e + 100) + i },
                };
              if (this.options.initData) {
                var n = this.options.initData.points;
                (o.start = P(x({}, this.getPixelCoords(n[0])), {
                  isAnchor: !0,
                })),
                  (o.end = this.getPixelCoords(n[1]));
              }
              return o;
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this.collection.find(function (t) {
                  var e;
                  return (
                    "segment" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                e = this.props.operatingPoint,
                i = e.start,
                o = e.end;
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(t.stroke),
                weight: t.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                isActive: this.options.isActive,
                points: [
                  P(x({}, this.getRealCoords(i)), { isAnchor: !0 }),
                  this.getRealCoords(o),
                ],
                shapeType: this.options.shapeType,
              };
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  "operatingPoint" ===
                    (null == (o = i.extends) ? void 0 : o.type) &&
                    i.set({ visible: t && !e.isLock && e.isShow }),
                    "line" === (null == (n = i.extends) ? void 0 : n.type) &&
                      i.set({ visible: t && !e.isLock && e.isShow });
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection
                .find(function (t) {
                  var e;
                  return (
                    "segment" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                })
                .set({ selectable: t }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getAreaPoint",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i = this.layout.chart,
                o = i.width,
                n = i.height;
              return (
                t.x < e && (t.x = e),
                t.x > o - e && (t.x = o - e),
                t.y < e && (t.y = e),
                t.y > n - e && (t.y = n - e),
                t
              );
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e = this;
              if (this.props.operatingPoint) {
                var i = this.getAreaPoint(
                    { x: t.e.changedTouches[0].x, y: t.e.changedTouches[0].y },
                    8
                  ),
                  o = 0,
                  n = 0;
                this.tempPointer &&
                  ((o = i.x - this.tempPointer.x),
                  (n = i.y - this.tempPointer.y)),
                  (this.tempPointer = i),
                  [
                    this.props.operatingPoint.start,
                    this.props.operatingPoint.end,
                  ].map(function (t) {
                    (t.x += o), (t.y += n);
                  }),
                  this.collection.map(function (t) {
                    var i;
                    switch (null == (i = t.extends) ? void 0 : i.type) {
                      case "operatingPoint":
                        t.set({ left: t.left + o, top: t.top + n });
                        break;
                      case "segment":
                      case "line":
                        e.props.operatingPoint &&
                          t.set({
                            width: Math.abs(
                              e.props.operatingPoint.start.x -
                                e.props.operatingPoint.end.x
                            ),
                            points: [
                              e.props.operatingPoint.start.x,
                              e.props.operatingPoint.start.y,
                              e.props.operatingPoint.end.x,
                              e.props.operatingPoint.end.y,
                            ],
                          });
                    }
                  }),
                  this.view.requestRenderAll();
              }
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              this.props.operatingPoint &&
                [
                  this.props.operatingPoint.start,
                  this.props.operatingPoint.end,
                ].forEach(function (e) {
                  var i = new I({
                    skin: t.options.skin,
                    top: e.y - parseFloat(t.props.strokeWidth) / 2,
                    left: e.x,
                    ratio: t.ratio,
                    groupId: t.groupId,
                    stroke: t.props.stroke,
                    visible: t.options.isActive && t.isShow,
                    extends: {
                      isAnchor: !!e.isAnchor,
                      type: "operatingPoint",
                      layout: x({}, t.options.layout),
                      chartData: x({}, t.options.chartData),
                    },
                  });
                  i.on({
                    moving: function (e) {
                      t.operatingPointMoving(e);
                    },
                    modified: function (e) {
                      e.target.hideGuideLine(), t.view.requestRenderAll();
                    },
                    deselected: function (e) {
                      t.setSelectStatus(!1);
                    },
                    selected: function (e) {
                      t.setSelectStatus(!0);
                    },
                  }),
                    t.collection.push(i);
                });
            },
          },
          {
            key: "objectMovingCheck",
            value: function (t) {
              var e,
                i = this.options.layout.chart.height,
                o = "lineGroup" === (null == (e = t.extends) ? void 0 : e.type),
                n = o ? 10 : 0,
                s = o ? i - 10 : i;
              t.top < n ? (t.top = n) : t.top > s && (t.top = s);
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e,
                i = this;
              if (this.props.operatingPoint) {
                var o = t.target;
                this.objectMovingCheck(o);
                var n = o.getCenterPoint();
                o.showGuideLine(),
                  (null == (e = o.extends) ? void 0 : e.isAnchor)
                    ? ((this.props.operatingPoint.start.x = n.x),
                      (this.props.operatingPoint.start.y = n.y))
                    : ((this.props.operatingPoint.end.x = n.x),
                      (this.props.operatingPoint.end.y = n.y)),
                  (this.props.slope = m.getLineSlope(
                    this.props.operatingPoint.start,
                    this.props.operatingPoint.end
                  )),
                  this.collection.map(function (t) {
                    var e;
                    "operatingPoint" !==
                      (null == (e = t.extends) ? void 0 : e.type) &&
                      t.set({
                        points: [
                          i.props.operatingPoint.start.x,
                          i.props.operatingPoint.start.y,
                          i.props.operatingPoint.end.x,
                          i.props.operatingPoint.end.y,
                        ],
                      });
                  }),
                  this.view.requestRenderAll();
              }
            },
          },
          {
            key: "draw",
            value: function () {
              var t = this,
                e = this.props.operatingPoint,
                i = e.start,
                o = e.end,
                n = m.hexToRgbArray(this.props.stroke),
                s = new R(
                  [i.x, i.y, o.x, o.y],
                  P(x({}, this.props), {
                    cornerStrokeColor: "rgba("
                      .concat(n[0], ", ")
                      .concat(n[1], ", ")
                      .concat(n[2], ", 0.4)"),
                    perPixelTargetFind: !0,
                    extends: { type: "segment" },
                  })
                );
              s.on({
                modified: function (t) {},
                moving: function (e) {
                  t.lineMoving(e);
                },
                deselected: function (e) {
                  (t.tempPointer = null), t.setSelectStatus(!1);
                },
                selected: function (e) {
                  var i = e.e;
                  (t.tempPointer = i), t.setSelectStatus(!0);
                },
              });
              var r = new R([i.x, i.y, o.x, o.y], {
                groupId: this.groupId,
                stroke: "rgba("
                  .concat(n[0], ", ")
                  .concat(n[1], ", ")
                  .concat(n[2], ", ")
                  .concat(this.config.borderOpacity, ")"),
                strokeWidth: 16,
                hasControls: !1,
                hasBorders: !1,
                left: Math.min(i.x, o.x) + s.strokeWidth / 2,
                top: Math.min(i.y, o.y) + s.strokeWidth / 2,
                opacity: this.options.isActive ? 1 : 0,
                selectable: !1,
                visible: this.options.isActive && this.isShow,
                extends: { type: "line", isBg: !0 },
              });
              this.collection.push(s), this.collection.push(r);
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              (this.chartData = e.chartData),
                t.points.map(function (t) {
                  var e = i.getPixelCoords(t);
                  t.isAnchor
                    ? (i.props.operatingPoint.start = e)
                    : (i.props.operatingPoint.end = e);
                }),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint.start,
                  this.props.operatingPoint.end
                )),
                this.collection.map(function (t) {
                  var e;
                  switch (null == (e = t.extends) ? void 0 : e.type) {
                    case "operatingPoint":
                      t.extends.isAnchor
                        ? t.set({
                            left: i.props.operatingPoint.start.x,
                            top: i.props.operatingPoint.start.y,
                          })
                        : t.set({
                            left: i.props.operatingPoint.end.x,
                            top: i.props.operatingPoint.end.y,
                          });
                      break;
                    case "segment":
                    case "line":
                      t.set({
                        width: Math.abs(
                          i.props.operatingPoint.start.x -
                            i.props.operatingPoint.end.x
                        ),
                        height: Math.abs(
                          i.props.operatingPoint.start.y -
                            i.props.operatingPoint.end.y
                        ),
                        points: [
                          i.props.operatingPoint.start.x,
                          i.props.operatingPoint.start.y,
                          i.props.operatingPoint.end.x,
                          i.props.operatingPoint.end.y,
                        ],
                      });
                  }
                });
            },
          },
        ]),
        p
      );
    })(),
    straightLine: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "timer", null),
          k(i(o), "collection", []),
          k(i(o), "options", {}),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            hasControls: !1,
            groupId: o.groupId,
            lockMovementX: !0,
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t,
                e = this,
                i = this.view.getCenter();
              if (null == (t = this.options) ? void 0 : t.initData) {
                var o = this.options.initData,
                  n = o.isShow,
                  s = o.isLock,
                  r = o.color,
                  a = o.weight,
                  p = o.points,
                  h = o.groupId;
                (this.isShow = !!n),
                  (this.isLock = !!s),
                  (this.props.stroke = r),
                  (this.props.strokeWidth = +a),
                  (this.groupId = h || this.groupId),
                  (this.props.groupId = this.groupId),
                  (this.props.operatingPoint = p.map(function (t) {
                    var o = e.getPixelCoords(t);
                    return P(x(x({}, t), o), { x: i.left });
                  }));
              } else {
                var c = this.getRandomPoint();
                this.props.operatingPoint = [
                  { x: i.left, y: c.y, isAnchor: !0 },
                ];
              }
              this.draw();
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e = t.target;
              this.objectMovingCheck(e);
              var i = e.getCenterPoint();
              e.showGuideLine(), (this.props.operatingPoint = [i]);
              var o = this.getEndPoints(),
                n = o.x1,
                s = o.y1,
                r = o.x2,
                a = o.y2;
              this.collection.map(function (t) {
                var e;
                ["bgLine", "lineGroup"].includes(
                  null == (e = t.extends) ? void 0 : e.type
                ) && t.set("points", [n, s, r, a]);
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "groupMoving",
            value: function (t) {
              var e = this,
                i = t.target;
              this.objectMovingCheck(i),
                (this.props.operatingPoint[0].y = i.top),
                this.collection.map(function (t) {
                  var o, n;
                  if (
                    ("operatingPoint" ===
                      (null == (o = t.extends) ? void 0 : o.type) &&
                      t.set("top", i.top),
                    ["lineGroup", "bgLine"].includes(
                      null == (n = t.extends) ? void 0 : n.type
                    ))
                  ) {
                    var s = e.getEndPoints(),
                      r = s.x1,
                      a = s.y1,
                      p = s.x2,
                      h = s.y2;
                    t.set({ top: i.top, points: [r, a, p, h] });
                  }
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  "operatingPoint" ===
                    (null == (o = i.extends) ? void 0 : o.type) &&
                    i.set("visible", !(!t || e.isLock || !e.isShow)),
                    !1 === i.selectable &&
                      "bgLine" ===
                        (null == (n = i.extends) ? void 0 : n.type) &&
                      i.set("visible", !(!t || e.isLock || !e.isShow));
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getEndPoints",
            value: function () {
              var t = this.props.operatingPoint,
                e = this.layout.chart.width;
              return { x1: 0, y1: t[0].y, x2: e, y2: t[0].y };
            },
          },
          {
            key: "objectMovingCheck",
            value: function (t) {
              var e,
                i = this.options.layout.chart.height,
                o = "lineGroup" === (null == (e = t.extends) ? void 0 : e.type),
                n = o ? 10 : 0,
                s = o ? i - 10 : i;
              t.top < n ? (t.top = n) : t.top > s && (t.top = s);
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                e.set({ selectable: t });
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              this.props.operatingPoint.forEach(function (e) {
                var i = new I({
                  skin: t.options.skin,
                  top: e.y - parseFloat(t.props.strokeWidth) / 2,
                  left: e.x,
                  ratio: t.ratio,
                  groupId: t.groupId,
                  lockMovementX: !0,
                  stroke: t.props.stroke,
                  visible: t.options.isActive && t.isShow,
                  extends: {
                    isAnchor: e.isAnchor,
                    type: "operatingPoint",
                    layout: x({}, t.options.layout),
                    chartData: x({}, t.options.chartData),
                  },
                });
                i.on({
                  moving: function (e) {
                    t.operatingPointMoving(e);
                  },
                  modified: function (e) {
                    e.target.hideGuideLine(), t.view.requestRenderAll();
                  },
                  deselected: function (e) {
                    t.setSelectStatus(!1);
                  },
                  selected: function (e) {
                    t.setSelectStatus(!0);
                  },
                }),
                  t.collection.push(i);
              });
            },
          },
          {
            key: "drawLine",
            value: function () {
              var t = this,
                e = m.hexToRgbArray(this.props.stroke),
                i = this.getEndPoints(),
                o = i.x1,
                n = i.y1,
                s = i.x2,
                r = i.y2,
                a = Math.min(n, r) - parseFloat(this.props.strokeWidth) / 2,
                p = new R(
                  [0, a, this.layout.chart.width + this.layout.chart.left, a],
                  P(x({}, this.props), {
                    left:
                      Math.min(o, s) - parseFloat(this.props.strokeWidth) / 2,
                    top: a,
                    perPixelTargetFind: !0,
                    visible: this.isShow,
                    lockMovementX: !0,
                    lockMovementY: this.isLock,
                    extends: { type: "lineGroup" },
                  })
                ),
                h = new R(
                  [0, a, this.layout.chart.width + this.layout.chart.left, a],
                  {
                    groupId: this.groupId,
                    stroke: "rgba("
                      .concat(e[0], ", ")
                      .concat(e[1], ", ")
                      .concat(e[2], ", ")
                      .concat(this.config.borderOpacity, ")"),
                    strokeWidth: 24,
                    hasControls: !1,
                    hasBorders: !1,
                    left: Math.min(o, s) - 12,
                    top: a,
                    perPixelTargetFind: !0,
                    visible: this.options.isActive && this.isShow,
                    selectable: !1,
                    extends: { type: "bgLine", isBg: !0 },
                  }
                );
              p.on({
                moving: function (e) {
                  t.groupMoving(e);
                },
                deselected: function (e) {
                  t.setSelectStatus(!1);
                },
                selected: function (e) {
                  t.setSelectStatus(!0),
                    setTimeout(function () {
                      t.collection.map(function (e) {
                        var i;
                        "operatingPoint" ===
                          (null == (i = e.extends) ? void 0 : i.type) &&
                          t.view.setActiveObject(e);
                      });
                    }, 50);
                },
              }),
                this.collection.push(h),
                this.collection.push(p);
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this.collection.find(function (t) {
                  var e;
                  return (
                    "operatingPoint" ===
                    (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                e = [this.getRealCoords(t.getCenterPoint())],
                i = this.collection.find(function (t) {
                  var e;
                  return (
                    "lineGroup" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(i.stroke),
                weight: i.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                points: e,
                shapeType: this.options.shapeType,
              };
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.drawLine(),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              (this.chartData = e.chartData),
                (this.props.operatingPoint = t.points.map(function (t) {
                  var e = i.getPixelCoords(t);
                  return x(x({}, t), e);
                }));
              var o = this.getEndPoints(),
                n = o.x1,
                s = o.y1,
                r = o.x2,
                a = o.y2;
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "operatingPoint":
                    t.set({ top: i.props.operatingPoint[0].y });
                    break;
                  case "lineGroup":
                  case "bgLine":
                    t.set({ points: [n, s, r, a] });
                }
              });
            },
          },
        ]),
        p
      );
    })(),
    doubleTrack: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "timer", {}),
          k(i(o), "collection", []),
          k(i(o), "options", {}),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            slope: -0.36,
            dist: 60,
            hasControls: !0,
            groupId: o.groupId,
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t,
                e = this;
              if (null == (t = this.options) ? void 0 : t.initData) {
                var i = this.options.initData,
                  o = i.color,
                  n = i.isShow,
                  s = i.isLock,
                  r = i.weight,
                  a = i.points,
                  p = i.groupId;
                (this.isLock = s),
                  (this.isShow = n),
                  (this.props.stroke = o),
                  (this.props.strokeWidth = +r);
                var h = p || this.groupId;
                (this.groupId = h), (this.props.groupId = h);
                var c = a.map(function (t) {
                  var i = e.getPixelCoords(t);
                  return P(x(x({}, t), i), { type: t.group });
                });
                (this.props.operatingPoint = {}),
                  (this.props.operatingPoint.upperTraceOperatingPoint =
                    c.filter(function (t) {
                      return "upperTraceOperatingPoint" === t.type;
                    })),
                  (this.props.operatingPoint.lowerTraceOperatingPoint =
                    c.filter(function (t) {
                      return "lowerTraceOperatingPoint" === t.type;
                    })),
                  (this.props.slope = m.getLineSlope(c[0], c[1]));
              } else this.props.operatingPoint = this.initOperatingPoint();
              this.draw();
            },
          },
          {
            key: "initOperatingPoint",
            value: function () {
              var t = {
                  upperTraceOperatingPoint: [],
                  lowerTraceOperatingPoint: [],
                },
                e = this.getRandomPoint(),
                i = e.x,
                o = e.y,
                n = m.getParallelVerticalFoot(
                  { x: i, y: o },
                  this.props.slope,
                  this.props.dist / 2,
                  "upper"
                ),
                s = n.y - this.props.slope * n.x;
              t.upperTraceOperatingPoint.push(
                {
                  x: n.x - 50,
                  y: (n.x - 50) * this.props.slope + s,
                  type: "upperTraceOperatingPoint",
                  isAnchor: !0,
                },
                {
                  x: n.x + 50,
                  y: (n.x + 50) * this.props.slope + s,
                  type: "upperTraceOperatingPoint",
                }
              );
              var r = m.getParallelVerticalFoot(
                { x: i, y: o },
                this.props.slope,
                this.props.dist / 2,
                "lower"
              );
              return (
                t.lowerTraceOperatingPoint.push(
                  P(x({}, r), { type: "lowerTraceOperatingPoint" })
                ),
                t
              );
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.drawLine(
                this.props.operatingPoint.upperTraceOperatingPoint[0],
                "upperTrace"
              ),
                this.drawLine(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0],
                  "lowerTrace"
                ),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "setActive",
            value: function () {
              var t = this.collection.find(function (t) {
                var e;
                return (
                  "upperTraceOperatingPoint" ===
                  (null == (e = t.extends) ? void 0 : e.type)
                );
              });
              t && this.view.setActiveObject(t);
            },
          },
          {
            key: "drawLine",
            value: function (t, e) {
              var i = this,
                o = m.hexToRgbArray(this.props.stroke),
                n = this.getEndPoints(t),
                s = n.x1,
                r = n.y1,
                a = n.x2,
                p = n.y2,
                h = new R(
                  [s, r, a, p],
                  P(
                    x(
                      { begin: { x: s, y: r }, end: { x: a, y: p } },
                      this.props
                    ),
                    {
                      hasControls: !1,
                      left:
                        Math.min(s, a) - parseFloat(this.props.strokeWidth) / 2,
                      top:
                        Math.min(r, p) - parseFloat(this.props.strokeWidth) / 2,
                      perPixelTargetFind: !0,
                      visible: this.isShow,
                      lockMovementX: this.isLock,
                      lockMovementY: this.isLock,
                      extends: { type: e },
                    }
                  )
                ),
                c = new R([s, r, a, p], {
                  groupId: this.groupId,
                  stroke: "rgba("
                    .concat(o[0], ", ")
                    .concat(o[1], ", ")
                    .concat(o[2], ", ")
                    .concat(this.config.borderOpacity, ")"),
                  strokeWidth: 24,
                  hasControls: !1,
                  hasBorders: !1,
                  left: Math.min(s, a) - 12,
                  top: Math.min(r, p) - 12,
                  perPixelTargetFind: !0,
                  visible: this.options.isActive && this.isShow,
                  selectable: !1,
                  extends: { type: "".concat(e, "Bgline"), isBg: !0 },
                });
              h.on({
                moving: function (t) {
                  i.lineMoving(t);
                },
                deselected: function (t) {
                  delete i.props.tempPointer, i.setSelectStatus(!1);
                },
                selected: function (t) {
                  var e = t.e;
                  (i.props.tempPointer = e),
                    i.setSelectStatus(!0),
                    setTimeout(function () {
                      i.collection.map(function (t) {
                        var e;
                        (null == (e = t.extends)
                          ? void 0
                          : e.type.includes("OperatingPoint")) &&
                          i.view.setActiveObject(t);
                      });
                    }, 50);
                },
              }),
                this.collection.push(h),
                this.collection.push(c);
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                var i,
                  o = null == (i = e.extends) ? void 0 : i.type;
                switch (
                  (o = o.includes("OperatingPoint")
                    ? "operatingPoint"
                    : o.endsWith("Trace")
                    ? "line"
                    : o)
                ) {
                  case "operatingPoint":
                  case "line":
                    e.set({ selectable: t });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getEndPoints",
            value: function (t) {
              var e = t.x,
                i = t.y,
                o = this.layout.chart,
                n = o.width,
                s = o.height;
              if (isNaN(this.props.slope))
                return { x1: e, y1: 0, x2: e, y2: s };
              var r = i - e * this.props.slope,
                a = { x: -20, y: -20 * this.props.slope + r };
              a.y < -20
                ? ((a.y = -20), (a.x = (a.y - r) / this.props.slope))
                : a.y > s + 20 &&
                  ((a.y = s + 20), (a.x = (a.y - r) / this.props.slope));
              var p = { x: n + 20, y: (n + 20) * this.props.slope + r };
              return (
                p.y < -20 &&
                  ((p.y = -20), (p.x = (p.y - r) / this.props.slope)),
                p.y > s + 20 &&
                  ((p.y = s + 20), (p.x = (p.y - r) / this.props.slope)),
                { x1: a.x, y1: a.y, x2: p.x, y2: p.y }
              );
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              []
                .concat(
                  e(this.props.operatingPoint.upperTraceOperatingPoint),
                  e(this.props.operatingPoint.lowerTraceOperatingPoint)
                )
                .forEach(function (e) {
                  var i = new I({
                    skin: t.options.skin,
                    top: e.y,
                    left: e.x,
                    ratio: t.ratio,
                    groupId: t.groupId,
                    stroke: t.props.stroke,
                    visible: t.options.isActive && t.isShow,
                    extends: {
                      isAnchor: !!e.isAnchor,
                      type: e.type,
                      layout: x({}, t.options.layout),
                      chartData: x({}, t.options.chartData),
                    },
                  });
                  i.on({
                    moving: function (e) {
                      t.operatingPointMoving(e);
                    },
                    modified: function (e) {
                      e.target.hideGuideLine(), t.view.requestRenderAll();
                    },
                    deselected: function (e) {
                      t.setSelectStatus(!1);
                    },
                    selected: function (e) {
                      t.setSelectStatus(!0);
                    },
                  }),
                    t.collection.push(i);
                });
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e = 0,
                i = 0,
                o = this.getAreaPoint(
                  { x: t.e.changedTouches[0].x, y: t.e.changedTouches[0].y },
                  8
                );
              this.props.tempPointer &&
                ((e = o.x - this.props.tempPointer.x),
                (i = o.y - this.props.tempPointer.y)),
                (this.props.tempPointer = o),
                this.updateOperatingPoints("upperTraceOperatingPoint", e, i),
                this.updateOperatingPoints("lowerTraceOperatingPoint", e, i);
              var n = this.getEndPoints(
                  this.props.operatingPoint.upperTraceOperatingPoint[0]
                ),
                s = this.getEndPoints(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0]
                );
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "upperTrace":
                  case "upperTraceBgline":
                    t.set({
                      points: [n.x1, n.y1, n.x2, n.y2],
                      left:
                        Math.min(n.x1, n.x2) - parseFloat(t.strokeWidth) / 2,
                      top: Math.min(n.y1, n.y2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [s.x1, s.y1, s.x2, s.y2],
                      left:
                        Math.min(s.x1, s.x2) - parseFloat(t.strokeWidth) / 2,
                      top: Math.min(s.y1, s.y2) - parseFloat(t.strokeWidth) / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "updateOperatingPoints",
            value: function (t, e, i) {
              var o = this.collection.filter(function (e) {
                var i;
                return (null == (i = e.extends) ? void 0 : i.type) === t;
              });
              o.map(function (t) {
                t.set({ left: t.left + e, top: t.top + i });
              }),
                (this.props.operatingPoint[t] = o.map(function (t) {
                  var e = t.getCenterPoint();
                  return P(x({}, e), {
                    type: t.extends.type,
                    isAnchor: !!t.extends.isAnchor,
                  });
                }));
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e,
                i = t.target,
                o = this.getAreaPoint(i.getCenterPoint(), 8);
              (i.left = o.x),
                (i.top = o.y),
                i.showGuideLine(),
                "upperTraceOperatingPoint" ===
                (null == (e = i.extends) ? void 0 : e.type)
                  ? this.upperTraceOperatingPointMoving(i, o)
                  : this.lowerTraceOperatingPointMoving(o);
            },
          },
          {
            key: "upperTraceOperatingPointMoving",
            value: function (t, e) {
              var i =
                this.props.operatingPoint.upperTraceOperatingPoint.findIndex(
                  function (e) {
                    var i;
                    return (
                      !!e.isAnchor ===
                      (null == (i = t.extends) ? void 0 : i.isAnchor)
                    );
                  }
                );
              this.props.operatingPoint.upperTraceOperatingPoint.splice(
                i,
                1,
                x(
                  x({}, this.props.operatingPoint.upperTraceOperatingPoint[i]),
                  e
                )
              ),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint.upperTraceOperatingPoint[0],
                  this.props.operatingPoint.upperTraceOperatingPoint[1]
                ));
              var o = this.getEndPoints(e),
                n = this.getEndPoints(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0]
                );
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "upperTrace":
                  case "upperTraceBgline":
                    t.set({
                      points: [o.x1, o.y1, o.x2, o.y2],
                      top: Math.min(o.y1, o.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(o.x1, o.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [n.x1, n.y1, n.x2, n.y2],
                      top: Math.min(n.y1, n.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(n.x1, n.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "lowerTraceOperatingPointMoving",
            value: function (t) {
              this.props.operatingPoint.lowerTraceOperatingPoint[0] = t;
              var e = this.getEndPoints(t);
              this.collection.map(function (t) {
                var i;
                switch (null == (i = t.extends) ? void 0 : i.type) {
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [e.x1, e.y1, e.x2, e.y2],
                      top: Math.min(e.y1, e.y2) - t.strokeWidth / 2,
                      left: Math.min(e.x1, e.x2) - t.strokeWidth / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  (null == (o = i.extends)
                    ? void 0
                    : o.type.includes("OperatingPoint")) &&
                    i.set({ visible: t && !e.isLock && e.isShow }),
                    (null == (n = i.extends)
                      ? void 0
                      : n.type.includes("Bgline")) &&
                      i.set({ visible: t && !e.isLock && e.isShow });
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this,
                e = this.collection.find(function (t) {
                  var e;
                  return (
                    "upperTrace" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                i = this.collection.filter(function (t) {
                  var e;
                  return null == (e = t.extends)
                    ? void 0
                    : e.type.includes("OperatingPoint");
                });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(e.stroke),
                weight: e.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                points: i.map(function (e) {
                  var i = t.getRealCoords(e.getCenterPoint());
                  return P(x({}, i), {
                    isAnchor: !!e.extends.isAnchor,
                    group: e.extends.type,
                  });
                }),
                shapeType: this.options.shapeType,
                isActive: this.options.isActive,
              };
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              this.chartData = e.chartData;
              var o = t.points.map(function (t) {
                var e = i.getPixelCoords(t);
                return P(x(x({}, t), e), { type: t.group });
              });
              (this.props.operatingPoint = {
                upperTraceOperatingPoint: o.filter(function (t) {
                  return "upperTraceOperatingPoint" === t.type;
                }),
                lowerTraceOperatingPoint: o.filter(function (t) {
                  return "lowerTraceOperatingPoint" === t.type;
                }),
              }),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint.upperTraceOperatingPoint[0],
                  this.props.operatingPoint.upperTraceOperatingPoint[1]
                )),
                this.collection.map(function (t) {
                  var e;
                  switch (null == (e = t.extends) ? void 0 : e.type) {
                    case "upperTraceOperatingPoint":
                      var o =
                        i.props.operatingPoint.upperTraceOperatingPoint.find(
                          function (e) {
                            var i;
                            return (
                              e.isAnchor ===
                              (null == (i = t.extends) ? void 0 : i.isAnchor)
                            );
                          }
                        );
                      t.set({ left: o.x, top: o.y });
                      break;
                    case "lowerTraceOperatingPoint":
                      t.set({
                        left: i.props.operatingPoint.lowerTraceOperatingPoint[0]
                          .x,
                        top: i.props.operatingPoint.lowerTraceOperatingPoint[0]
                          .y,
                      });
                      break;
                    case "upperTrace":
                    case "upperTraceBgline":
                      var n = i.getEndPoints(
                        i.props.operatingPoint.upperTraceOperatingPoint[0]
                      );
                      t.set({
                        points: [n.x1, n.y1, n.x2, n.y2],
                        left:
                          Math.min(n.x1, n.x2) -
                          ("upperTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                        top:
                          Math.min(n.y1, n.y2) -
                          ("upperTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                      });
                      break;
                    case "lowerTrace":
                    case "lowerTraceBgline":
                      var s = i.getEndPoints(
                        i.props.operatingPoint.lowerTraceOperatingPoint[0]
                      );
                      t.set({
                        points: [s.x1, s.y1, s.x2, s.y2],
                        left:
                          Math.min(s.x1, s.x2) -
                          ("lowerTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                        top:
                          Math.min(s.y1, s.y2) -
                          ("lowerTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                      });
                  }
                });
            },
          },
        ]),
        p
      );
    })(),
    threeTrack: (function (t) {
      o(p, M);
      var s = n(p);
      function p(t, e) {
        var o;
        return (
          r(this, p),
          (o = s.call(this, t, e)),
          k(i(o), "timer", null),
          k(i(o), "collection", []),
          k(i(o), "options", {}),
          (o.groupId = m.uuid()),
          (o.options = e),
          (o.props = P(x({}, o.props), {
            slope: -0.36,
            dist: 80,
            hasControls: !0,
            groupId: o.groupId,
          })),
          (o.collection = []),
          o.init(),
          o
        );
      }
      return (
        a(p, [
          {
            key: "init",
            value: function () {
              var t,
                e = this;
              if (null == (t = this.options) ? void 0 : t.initData) {
                var i = this.options.initData,
                  o = i.color,
                  n = i.isShow,
                  s = i.isLock,
                  r = i.weight,
                  a = i.points,
                  p = i.groupId;
                (this.isLock = s),
                  (this.isShow = n),
                  (this.props.stroke = o),
                  (this.props.strokeWidth = +r),
                  (this.groupId = p || this.groupId),
                  (this.props.groupId = this.groupId);
                var h = a.map(function (t) {
                  var i = e.getPixelCoords(t);
                  return P(x(x({}, t), i), { type: t.group });
                });
                (this.props.operatingPoint = {}),
                  (this.props.operatingPoint.upperTraceOperatingPoint =
                    h.filter(function (t) {
                      return "upperTraceOperatingPoint" === t.type;
                    })),
                  (this.props.operatingPoint.lowerTraceOperatingPoint =
                    h.filter(function (t) {
                      return "lowerTraceOperatingPoint" === t.type;
                    }));
                var c = { x: (h[0].x + h[1].x) / 2, y: (h[0].y + h[1].y) / 2 };
                (this.props.operatingPoint.midTraceOperatingPoint = [
                  { x: (c.x + h[2].x) / 2, y: (c.y + h[2].y) / 2 },
                ]),
                  (this.props.slope = m.getLineSlope(h[0], h[1]));
              } else this.props.operatingPoint = this.initOperatingPoint();
              this.draw();
            },
          },
          {
            key: "initOperatingPoint",
            value: function () {
              var t = {
                  upperTraceOperatingPoint: [],
                  midTraceOperatingPoint: [],
                  lowerTraceOperatingPoint: [],
                },
                e = this.getRandomPoint(),
                i = e.x,
                o = e.y;
              t.midTraceOperatingPoint.push({ x: i, y: o });
              var n = m.getParallelVerticalFoot(
                  { x: i, y: o },
                  this.props.slope,
                  this.props.dist / 2,
                  "upper"
                ),
                s = n.y - this.props.slope * n.x;
              t.upperTraceOperatingPoint.push(
                {
                  x: n.x - 50,
                  y: (n.x - 50) * this.props.slope + s,
                  type: "upperTraceOperatingPoint",
                  isAnchor: !0,
                },
                {
                  x: n.x + 50,
                  y: (n.x + 50) * this.props.slope + s,
                  type: "upperTraceOperatingPoint",
                }
              );
              var r = m.getParallelVerticalFoot(
                { x: i, y: o },
                this.props.slope,
                this.props.dist / 2,
                "lower"
              );
              return (
                t.lowerTraceOperatingPoint.push(
                  P(x({}, r), { type: "lowerTraceOperatingPoint" })
                ),
                t
              );
            },
          },
          {
            key: "draw",
            value: function () {
              var t;
              this.drawLine(
                this.props.operatingPoint.upperTraceOperatingPoint[0],
                "upperTrace"
              ),
                this.drawLine(
                  this.props.operatingPoint.midTraceOperatingPoint[0],
                  "midTrace"
                ),
                this.drawLine(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0],
                  "lowerTrace"
                ),
                this.drawOperatingPoint(),
                (t = this.view).add.apply(t, e(this.collection));
            },
          },
          {
            key: "setActive",
            value: function () {
              var t = this.collection.find(function (t) {
                var e;
                return (
                  "upperTraceOperatingPoint" ===
                  (null == (e = t.extends) ? void 0 : e.type)
                );
              });
              t && this.view.setActiveObject(t);
            },
          },
          {
            key: "setSelectable",
            value: function (t) {
              this.collection.map(function (e) {
                var i,
                  o = null == (i = e.extends) ? void 0 : i.type;
                switch (
                  (o = o.includes("OperatingPoint")
                    ? "operatingPoint"
                    : o.endsWith("Trace")
                    ? "line"
                    : o)
                ) {
                  case "operatingPoint":
                  case "line":
                    e.set({ selectable: t });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "drawLine",
            value: function (t, e) {
              var i = this,
                o = m.hexToRgbArray(this.props.stroke),
                n = this.getEndPoints(t),
                s = n.x1,
                r = n.y1,
                a = n.x2,
                p = n.y2,
                h = new R(
                  [s, r, a, p],
                  P(x({}, this.props), {
                    hasControls: !1,
                    left:
                      Math.min(s, a) - parseFloat(this.props.strokeWidth) / 2,
                    top:
                      Math.min(r, p) - parseFloat(this.props.strokeWidth) / 2,
                    perPixelTargetFind: !0,
                    visible: this.isShow,
                    lockMovementX: this.isLock,
                    lockMovementY: this.isLock,
                    extends: { type: e },
                  })
                ),
                c = new R([s, r, a, p], {
                  groupId: this.groupId,
                  stroke: "rgba("
                    .concat(o[0], ", ")
                    .concat(o[1], ", ")
                    .concat(o[2], ", ")
                    .concat(this.config.borderOpacity, ")"),
                  strokeWidth: 24,
                  hasControls: !1,
                  hasBorders: !1,
                  left: Math.min(s, a) - 12,
                  top: Math.min(r, p) - 12,
                  perPixelTargetFind: !0,
                  visible: this.options.isActive && this.isShow,
                  selectable: !1,
                  extends: { type: "".concat(e, "Bgline"), isBg: !0 },
                });
              h.on({
                moving: function (t) {
                  i.lineMoving(t);
                },
                deselected: function (t) {
                  delete i.props.tempPointer, i.setSelectStatus(!1);
                },
                selected: function (t) {
                  var e = t.e;
                  (i.props.tempPointer = e),
                    i.setSelectStatus(!0),
                    setTimeout(function () {
                      i.collection.map(function (t) {
                        var e;
                        (null == (e = t.extends)
                          ? void 0
                          : e.type.includes("OperatingPoint")) &&
                          i.view.setActiveObject(t);
                      });
                    }, 50);
                },
              }),
                this.collection.push(h),
                this.collection.push(c);
            },
          },
          {
            key: "getEndPoints",
            value: function (t) {
              var e = t.x,
                i = t.y,
                o = this.layout.chart,
                n = o.width,
                s = o.height;
              if (isNaN(this.props.slope))
                return { x1: e, y1: 0, x2: e, y2: s };
              var r = i - e * this.props.slope,
                a = { x: -20, y: -20 * this.props.slope + r };
              a.y < -20
                ? ((a.y = -20), (a.x = (a.y - r) / this.props.slope))
                : a.y > s + 20 &&
                  ((a.y = s + 20), (a.x = (a.y - r) / this.props.slope));
              var p = { x: n + 20, y: (n + 20) * this.props.slope + r };
              return (
                p.y < -20 &&
                  ((p.y = -20), (p.x = (p.y - r) / this.props.slope)),
                p.y > s + 20 &&
                  ((p.y = s + 20), (p.x = (p.y - r) / this.props.slope)),
                { x1: a.x, y1: a.y, x2: p.x, y2: p.y }
              );
            },
          },
          {
            key: "drawOperatingPoint",
            value: function () {
              var t = this;
              []
                .concat(
                  e(this.props.operatingPoint.upperTraceOperatingPoint),
                  e(this.props.operatingPoint.lowerTraceOperatingPoint)
                )
                .forEach(function (e) {
                  var i = new I({
                    skin: t.options.skin,
                    top: e.y,
                    left: e.x,
                    ratio: t.ratio,
                    groupId: t.groupId,
                    stroke: t.props.stroke,
                    visible: t.options.isActive && t.isShow,
                    extends: {
                      type: "".concat(e.type),
                      isAnchor: !!e.isAnchor,
                      layout: x({}, t.options.layout),
                      chartData: x({}, t.options.chartData),
                    },
                  });
                  i.on({
                    moving: function (e) {
                      t.operatingPointMoving(e);
                    },
                    modified: function (e) {
                      e.target.hideGuideLine(), t.view.requestRenderAll();
                    },
                    deselected: function (e) {
                      t.setSelectStatus(!1);
                    },
                    selected: function (e) {
                      t.setSelectStatus(!0);
                    },
                  }),
                    t.collection.push(i);
                });
            },
          },
          {
            key: "lineMoving",
            value: function (t) {
              var e,
                i,
                o = 0,
                n = 0,
                s = this.getAreaPoint(
                  {
                    x: null == (e = t.e.changedTouches[0]) ? void 0 : e.x,
                    y: null == (i = t.e.changedTouches[0]) ? void 0 : i.y,
                  },
                  8
                );
              this.props.tempPointer &&
                ((o = s.x - this.props.tempPointer.x),
                (n = s.y - this.props.tempPointer.y)),
                (this.props.tempPointer = s),
                this.updateOperatingPoints("upperTraceOperatingPoint", o, n),
                this.updateOperatingPoints("lowerTraceOperatingPoint", o, n),
                (this.props.operatingPoint.midTraceOperatingPoint[0] = {
                  x:
                    (this.props.operatingPoint.upperTraceOperatingPoint[0].x +
                      this.props.operatingPoint.lowerTraceOperatingPoint[0].x) /
                    2,
                  y:
                    (this.props.operatingPoint.upperTraceOperatingPoint[0].y +
                      this.props.operatingPoint.lowerTraceOperatingPoint[0].y) /
                    2,
                });
              var r = this.getEndPoints(
                  this.props.operatingPoint.upperTraceOperatingPoint[0]
                ),
                a = this.getEndPoints(
                  this.props.operatingPoint.midTraceOperatingPoint[0]
                ),
                p = this.getEndPoints(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0]
                );
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "upperTrace":
                  case "upperTraceBgline":
                    t.set({
                      points: [r.x1, r.y1, r.x2, r.y2],
                      left:
                        Math.min(r.x1, r.x2) - parseFloat(t.strokeWidth) / 2,
                      top: Math.min(r.y1, r.y2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "midTrace":
                    t.set({
                      points: [a.x1, a.y1, a.x2, a.y2],
                      left:
                        Math.min(a.x1, a.x2) - parseFloat(t.strokeWidth) / 2,
                      top: Math.min(a.y1, a.y2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "midTraceBgline":
                    t.set({
                      points: [a.x1, a.y1, a.x2, a.y2],
                      left: Math.min(a.x1, a.x2) - t.strokeWidth / 2,
                      top: Math.min(a.y1, a.y2) - t.strokeWidth / 2,
                    });
                    break;
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [p.x1, p.y1, p.x2, p.y2],
                      left:
                        Math.min(p.x1, p.x2) - parseFloat(t.strokeWidth) / 2,
                      top: Math.min(p.y1, p.y2) - parseFloat(t.strokeWidth) / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "updateOperatingPoints",
            value: function (t, e, i) {
              var o = this.collection.filter(function (e) {
                var i;
                return (null == (i = e.extends) ? void 0 : i.type) === t;
              });
              o.map(function (t) {
                t.set({ left: t.left + e, top: t.top + i });
              }),
                (this.props.operatingPoint[t] = o.map(function (t) {
                  var e = t.getCenterPoint();
                  return P(x({}, e), {
                    type: t.extends.type,
                    isAnchor: !!t.extends.isAnchor,
                  });
                }));
            },
          },
          {
            key: "operatingPointMoving",
            value: function (t) {
              var e,
                i = t.target,
                o = this.getAreaPoint(i.getCenterPoint(), 8);
              (i.left = o.x),
                (i.top = o.y),
                i.showGuideLine(),
                "upperTraceOperatingPoint" ===
                (null == (e = i.extends) ? void 0 : e.type)
                  ? this.upperTraceOperatingPointMoving(i, o)
                  : this.lowerTraceOperatingPointMoving(o);
            },
          },
          {
            key: "upperTraceOperatingPointMoving",
            value: function (t, e) {
              var i =
                this.props.operatingPoint.upperTraceOperatingPoint.findIndex(
                  function (e) {
                    var i;
                    return (
                      !!e.isAnchor ===
                      (null == (i = t.extends) ? void 0 : i.isAnchor)
                    );
                  }
                );
              this.props.operatingPoint.upperTraceOperatingPoint.splice(
                i,
                1,
                x(
                  x({}, this.props.operatingPoint.upperTraceOperatingPoint[i]),
                  e
                )
              ),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint.upperTraceOperatingPoint[0],
                  this.props.operatingPoint.upperTraceOperatingPoint[1]
                ));
              var o = this.getEndPoints(e),
                n = this.getEndPoints(
                  this.props.operatingPoint.lowerTraceOperatingPoint[0]
                );
              this.props.operatingPoint.midTraceOperatingPoint[0] = {
                x:
                  (e.x +
                    this.props.operatingPoint.lowerTraceOperatingPoint[0].x) /
                  2,
                y:
                  (e.y +
                    this.props.operatingPoint.lowerTraceOperatingPoint[0].y) /
                  2,
              };
              var s = this.getEndPoints(
                this.props.operatingPoint.midTraceOperatingPoint[0]
              );
              this.collection.map(function (t) {
                var e;
                switch (null == (e = t.extends) ? void 0 : e.type) {
                  case "upperTrace":
                  case "upperTraceBgline":
                    t.set({
                      points: [o.x1, o.y1, o.x2, o.y2],
                      top: Math.min(o.y1, o.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(o.x1, o.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "midTrace":
                  case "midTraceBgline":
                    t.set({
                      points: [s.x1, s.y1, s.x2, s.y2],
                      top: Math.min(s.y1, s.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(s.x1, s.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [n.x1, n.y1, n.x2, n.y2],
                      top: Math.min(n.y1, n.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(n.x1, n.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "lowerTraceOperatingPointMoving",
            value: function (t) {
              this.props.operatingPoint.lowerTraceOperatingPoint[0] = t;
              var e = this.getEndPoints(t),
                i = m.VerticalFootCoord(
                  t,
                  this.props.operatingPoint.upperTraceOperatingPoint
                );
              this.props.operatingPoint.midTraceOperatingPoint[0] = {
                x: (t.x + i.x) / 2,
                y: (t.y + i.y) / 2,
              };
              var o = this.getEndPoints(
                this.props.operatingPoint.midTraceOperatingPoint[0]
              );
              this.collection.map(function (t) {
                var i;
                switch (null == (i = t.extends) ? void 0 : i.type) {
                  case "midTrace":
                  case "midTraceBgline":
                    t.set({
                      points: [o.x1, o.y1, o.x2, o.y2],
                      top: Math.min(o.y1, o.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(o.x1, o.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                    break;
                  case "lowerTrace":
                  case "lowerTraceBgline":
                    t.set({
                      points: [e.x1, e.y1, e.x2, e.y2],
                      top: Math.min(e.y1, e.y2) - parseFloat(t.strokeWidth) / 2,
                      left:
                        Math.min(e.x1, e.x2) - parseFloat(t.strokeWidth) / 2,
                    });
                }
              }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "setSelectStatus",
            value: function (t) {
              var e = this;
              (this.options.isActive = !!t),
                this.collection.map(function (i) {
                  var o, n;
                  (null == (o = i.extends)
                    ? void 0
                    : o.type.includes("OperatingPoint")) &&
                    i.set({ visible: t && !e.isLock && e.isShow }),
                    (null == (n = i.extends)
                      ? void 0
                      : n.type.includes("Bgline")) &&
                      i.set({ visible: t && !e.isLock && e.isShow });
                }),
                this.view.requestRenderAll();
            },
          },
          {
            key: "getObject",
            value: function () {
              var t = this,
                e = this.collection.find(function (t) {
                  var e;
                  return (
                    "upperTrace" === (null == (e = t.extends) ? void 0 : e.type)
                  );
                }),
                i = this.collection.filter(function (t) {
                  var e;
                  return null == (e = t.extends)
                    ? void 0
                    : e.type.includes("OperatingPoint");
                });
              return {
                groupId: this.groupId,
                color: m.getColorsIndex(e.stroke),
                weight: e.strokeWidth - 1,
                isShow: this.isShow,
                isLock: this.isLock,
                points: i.map(function (e) {
                  var i = t.getRealCoords(e.getCenterPoint());
                  return P(x({}, i), {
                    isAnchor: !!e.extends.isAnchor,
                    group: e.extends.type,
                  });
                }),
                shapeType: this.options.shapeType,
                isActive: this.options.isActive,
              };
            },
          },
          {
            key: "repaint",
            value: function (t, e) {
              var i = this;
              this.chartData = e.chartData;
              var o = t.points.map(function (t) {
                var e = i.getPixelCoords(t);
                return P(x(x({}, t), e), { type: t.group });
              });
              (this.props.operatingPoint.upperTraceOperatingPoint = o.filter(
                function (t) {
                  return "upperTraceOperatingPoint" === t.type;
                }
              )),
                (this.props.operatingPoint.lowerTraceOperatingPoint = o.filter(
                  function (t) {
                    return "lowerTraceOperatingPoint" === t.type;
                  }
                )),
                (this.props.slope = m.getLineSlope(
                  this.props.operatingPoint.upperTraceOperatingPoint[0],
                  this.props.operatingPoint.upperTraceOperatingPoint[1]
                )),
                this.collection.map(function (t) {
                  var e;
                  switch (null == (e = t.extends) ? void 0 : e.type) {
                    case "upperTraceOperatingPoint":
                      var o =
                        i.props.operatingPoint.upperTraceOperatingPoint.find(
                          function (e) {
                            var i;
                            return (
                              e.isAnchor ===
                              (null == (i = t.extends) ? void 0 : i.isAnchor)
                            );
                          }
                        );
                      t.set({ left: o.x, top: o.y });
                      break;
                    case "lowerTraceOperatingPoint":
                      t.set({
                        left: i.props.operatingPoint.lowerTraceOperatingPoint[0]
                          .x,
                        top: i.props.operatingPoint.lowerTraceOperatingPoint[0]
                          .y,
                      });
                      break;
                    case "upperTrace":
                    case "upperTraceBgline":
                      var n = i.getEndPoints(
                        i.props.operatingPoint.upperTraceOperatingPoint[0]
                      );
                      t.set({
                        points: [n.x1, n.y1, n.x2, n.y2],
                        left:
                          Math.min(n.x1, n.x2) -
                          ("upperTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                        top:
                          Math.min(n.y1, n.y2) -
                          ("upperTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                      });
                      break;
                    case "midTrace":
                    case "midTraceBgline":
                      var s = i.getEndPoints({
                        x:
                          (i.props.operatingPoint.upperTraceOperatingPoint[0]
                            .x +
                            i.props.operatingPoint.lowerTraceOperatingPoint[0]
                              .x) /
                          2,
                        y:
                          (i.props.operatingPoint.upperTraceOperatingPoint[0]
                            .y +
                            i.props.operatingPoint.lowerTraceOperatingPoint[0]
                              .y) /
                          2,
                      });
                      t.set({
                        points: [s.x1, s.y1, s.x2, s.y2],
                        left:
                          Math.min(s.x1, s.x2) -
                          ("midTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                        top:
                          Math.min(s.y1, s.y2) -
                          ("midTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                      });
                      break;
                    case "lowerTrace":
                    case "lowerTraceBgline":
                      var r = i.getEndPoints(
                        i.props.operatingPoint.lowerTraceOperatingPoint[0]
                      );
                      t.set({
                        points: [r.x1, r.y1, r.x2, r.y2],
                        left:
                          Math.min(r.x1, r.x2) -
                          ("lowerTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                        top:
                          Math.min(r.y1, r.y2) -
                          ("lowerTrace" === t.extends.type
                            ? parseFloat(i.props.strokeWidth) / 2
                            : 12),
                      });
                  }
                }),
                this.view.requestRenderAll();
            },
          },
        ]),
        p
      );
    })(),
  },
  F = (function () {
    function t(e) {
      r(this, t),
        k(this, "canvas", null),
        k(this, "ctx", null),
        k(this, "isRendering", !1),
        k(this, "objects", []),
        k(this, "shapes", []),
        k(this, "width", 0),
        k(this, "height", 0),
        k(this, "activeObject", null),
        k(this, "options", null),
        k(this, "ratio", 1),
        k(this, "selectable", !0),
        k(this, "instance", null),
        k(this, "tapCount", 0);
      var i = e.canvas,
        o = e.layout.chart,
        n = o.width,
        s = o.height;
      (this.canvas = i),
        (this.ctx = (function (t) {
          var e;
          return w.StockBridge.ENV === w.EnvTypeEnum.MP ||
            ("object" == p(t) && t.getContext)
            ? t.getContext("2d")
            : null == (e = document.getElementById(t))
            ? void 0
            : e.getContext("2d");
        })(i)),
        (this.width = n),
        (this.height = s),
        (this.options = e),
        (this.instance = e.instance),
        (this.ratio = m.getPixelRatio()),
        this.init();
    }
    return (
      a(t, [
        {
          key: "init",
          value: function () {
            (this.objects = []), (this.activeObject = null);
          },
        },
        {
          key: "getCenter",
          value: function () {
            return {
              left: this.width / 2,
              top: this.height / 2,
              x: this.width / 2,
              y: this.height / 2,
            };
          },
        },
        {
          key: "bringToFront",
          value: function (t) {
            var e = this,
              i = this.objects.filter(function (e) {
                return e.groupId === t.groupId;
              });
            i.length > 0 &&
              ((this.objects = this.objects.filter(function (e) {
                return e.groupId !== t.groupId;
              })),
              i.map(function (t) {
                return e.objects.push(t);
              }));
          },
        },
        {
          key: "setSelectable",
          value: function (t) {
            this.selectable = t;
          },
        },
        { key: "setActiveObject", value: function (t) {} },
        {
          key: "getActiveObject",
          value: function () {
            return this.activeObject;
          },
        },
        {
          key: "loadFromJSON",
          value: function (t) {
            var e = this;
            this.clear(),
              Array.isArray(t) &&
                t.length &&
                (t.map(function (t) {
                  var i = P(x({}, t), {
                      color: m.COLORS[t.color],
                      weight: m.LINEWEIGHT[t.weight],
                      fontSize: m.FONTSIZE[t.fontSize] / 2,
                    }),
                    o = new j[t.shapeType](
                      e,
                      P(x({}, e.options), {
                        shapeType: t.shapeType,
                        initData: i,
                      })
                    );
                  e.shapes.push(o);
                }),
                this.setSelectable(this.options.isDrawing),
                this.requestRenderAll());
          },
        },
        {
          key: "findActiveObject",
          value: function (t) {
            var e;
            if (!this.selectable)
              return (this.activeObject = null), this.activeObject;
            for (var i = null, o = this.objects.length - 1; o >= 0; o--) {
              var n = this.objects[o];
              if (
                !1 !== n.selectable &&
                !1 !== n.visible &&
                (null == (e = n.isPointInPath) ? void 0 : e.call(n, t))
              ) {
                i = n;
                break;
              }
            }
            return (
              this.activeObject
                ? i
                  ? this.activeObject._id !== i._id &&
                    (this.activeObject.fire("deselected", {
                      e: t,
                      target: this.activeObject,
                    }),
                    (this.activeObject = i),
                    !this.activeObject.isLock &&
                      this.activeObject.fire("selected", {
                        e: t,
                        target: this.activeObject,
                      }))
                  : (this.activeObject.fire("deselected", {
                      e: t,
                      target: this.activeObject,
                    }),
                    (this.activeObject = null))
                : i &&
                  ((this.activeObject = i),
                  !this.activeObject.isLock &&
                    this.activeObject.fire("selected", {
                      e: t,
                      target: this.activeObject,
                    })),
              this.requestRenderAll(),
              this.activeObject
            );
          },
        },
        {
          key: "isEmpty",
          value: function () {
            return 0 === this.shapes.length;
          },
        },
        {
          key: "add",
          value: function () {
            return (
              0 === arguments.length ||
                (this.objects.push.apply(this.objects, arguments),
                this.requestRenderAll()),
              this
            );
          },
        },
        {
          key: "remove",
          value: function () {
            var t = this.activeObject || this.getActiveObject();
            if (t)
              return (
                (this.objects = this.objects.filter(function (e) {
                  return e.groupId !== t.groupId;
                })),
                (this.shapes = this.shapes.filter(function (e) {
                  return e.groupId !== t.groupId;
                })),
                this.requestRenderAll(),
                this
              );
          },
        },
        {
          key: "clear",
          value: function () {
            (this.objects = []),
              (this.shapes = []),
              this.ctx.clearRect(
                0,
                0,
                this.width * this.ratio,
                this.height * this.ratio
              );
          },
        },
        {
          key: "renderAll",
          value: function () {
            var t, e, i;
            for (
              this.ctx.clearRect(
                0,
                0,
                this.width * this.ratio,
                this.height * this.ratio
              ),
                e = 0,
                i = this.objects.length;
              e < i;
              ++e
            )
              (null == (t = this.objects[e]) ? void 0 : t.visible) &&
                this.objects[e].render(this.ctx, this.ratio);
          },
        },
        {
          key: "requestRenderAll",
          value: function () {
            var t = this;
            return (
              this.isRendering ||
                (this.isRendering = m.requestAnimFrame(function () {
                  t.renderAndReset();
                }, this.canvas)),
              !0
            );
          },
        },
        {
          key: "renderAndReset",
          value: function () {
            (this.isRendering = !1), this.renderAll();
          },
        },
        {
          key: "draw",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (j[t]) {
              var i = new j[t](
                this,
                P(x(x({}, this.options), e), { isActive: !0, shapeType: t })
              );
              return (
                this.shapes.push(i),
                this.activeObject && this.activeObject.fire("deselected"),
                (this.activeObject = this.objects[this.objects.length - 1]),
                this.activeObject.fire("selected", {
                  e: null,
                  target: this.activeObject,
                }),
                this.requestRenderAll(),
                i
              );
            }
          },
        },
        {
          key: "updateChartProps",
          value: function (t) {
            this.options = x(x({}, this.options), t);
          },
        },
        {
          key: "repaintPosition",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
            Array.isArray(e) &&
              e.forEach(function (e) {
                var i = t.shapes.find(function (t) {
                  return t.groupId === e.groupId;
                });
                i && i.repaint(e, t.options);
              }),
              this.requestRenderAll();
          },
        },
        {
          key: "update",
          value: function (t) {
            if (this.activeObject) {
              var e = this.activeObject.groupId,
                i = this.shapes.find(function (t) {
                  return t.groupId === e;
                });
              i &&
                i.updateProps({
                  strokeWidth: t.weight,
                  stroke: t.color,
                  fontSize: t.fontSize,
                  visible: t.isShow,
                  isLock: t.isLock,
                  text: t.text,
                }),
                this.bringToFront(this.activeObject),
                this.requestRenderAll();
            }
          },
        },
        {
          key: "showAllShapes",
          value: function () {
            this.objects.forEach(function (t) {
              t.visible = !0;
            }),
              this.requestRenderAll();
          },
        },
        {
          key: "toJSON",
          value: function () {
            var t = [];
            return (
              this.shapes.forEach(function (e) {
                var i = e.getObject();
                t.push(i);
              }),
              t
            );
          },
        },
        {
          key: "setAllowTouchScrolling",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.ctx && (this.allowTouchScrolling = t);
          },
        },
        {
          key: "repaintByData",
          value: function (t) {
            var e = this;
            t.forEach(function (t) {
              var i = P(x({}, t), {
                  color: m.COLORS[t.color],
                  weight: m.LINEWEIGHT[t.weight],
                }),
                o = P(x({}, e.options), { initData: i });
              o.shapeType = t.shapeType;
              var n = new j[t.shapeType](e, o);
              e.shapes.push(n);
            }),
              (this.objects = this.shapes.flatMap(function (t) {
                return null == t ? void 0 : t.collection;
              })),
              this.requestRenderAll();
          },
        },
        {
          key: "handleTouchEvent",
          value: function (t) {
            "touchstart" === t.type
              ? this._handleTouchStart(t)
              : "touchmove" === t.type
              ? this._handleTouchMove(t)
              : "touchend" === t.type && this._handleTouchEnd(t);
          },
        },
        {
          key: "_handleTouchStart",
          value: function (t) {
            var e = this;
            if (Array.isArray(t.touches) && t.touches.length) {
              2 === t.touches.length &&
                (clearTimeout(this.tapTimeout), (this.tapCount = 0)),
                (this._touchStartPoint = t.touches[0]);
              var i = this.getActiveObject();
              i && ((this.tapObj = i), (this.tapCount = 1)),
                this.findActiveObject(t.touches[0]),
                (this.tapTimeout = setTimeout(function () {
                  e.tapCount = 0;
                }, 100));
            }
          },
        },
        {
          key: "_handleTouchMove",
          value: function (t) {
            if (
              ((this.tapCount = 0),
              Array.isArray(t.touches) && t.touches.length)
            ) {
              var e = this.getActiveObject();
              if (e && !e.isLock) {
                if (this._touchStartPoint) {
                  var i = t.touches[0].x - this._touchStartPoint.x,
                    o = t.touches[0].y - this._touchStartPoint.y,
                    n = { left: e.left, top: e.top };
                  e.lockMovementX || (n.left += i),
                    e.lockMovementY || (n.top += o),
                    e.set(n),
                    (this._touchStartPoint = t.touches[0]);
                }
                e.fire("moving", { e: t, target: e });
              }
            }
          },
        },
        {
          key: "_handleTouchEnd",
          value: function (t) {
            var e;
            this._touchStartPoint = null;
            var i = this.getActiveObject();
            i &&
              !i.isLock &&
              (i.fire("modified", { e: t, target: i }),
              1 === this.tapCount &&
                (null == (e = this.tapObj) ? void 0 : e.groupId) ===
                  (null == i ? void 0 : i.groupId) &&
                (this.tapObj.fire("tap", { e: t, target: i }),
                clearTimeout(this.tapTimeout)));
          },
        },
        {
          key: "deselectAll",
          value: function () {
            this.activeObject && this.activeObject.fire("deselected");
          },
        },
        {
          key: "backToBrowse",
          value: function () {
            this.objects.forEach(function (t) {
              var e, i;
              (null == (e = t.shapes) ? void 0 : e.length) &&
                (null == (i = t.shapes) ||
                  i.forEach(function (t) {
                    t.set("visible", !0),
                      t.set("isShow", !0),
                      t.fire("deselected");
                  })),
                t.set("visible", !0),
                t.set("isShow", !0),
                t.fire("deselected");
            }),
              (this.activeObject = null),
              this.requestRenderAll();
          },
        },
      ]),
      t
    );
  })(),
  B = {
    name: "drawBoard",
    provide: function () {
      return { skin: this.skin };
    },
    components: {
      LineBox: function () {
        return "./components/lineBox.js";
      },
      ToolBox: function () {
        return "./components/toolBox.js";
      },
      InputModal: function () {
        return "./components/inputModal.js";
      },
    },
    props: {
      options: {
        type: Object,
        default: function () {
          return {};
        },
      },
      layout: {
        type: Object,
        default: function () {
          return {};
        },
      },
      drawlineData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    data: function () {
      return {
        data: [],
        currentLine: {
          color: m.DEFAULT_COLOR,
          weight: m.DEFAULT_WEIGHT,
          fontSize: m.DEFAULT_FONTSIZE,
          isShow: !0,
          isLock: !1,
        },
        windowSize: { windowWidth: 0, windowHeight: 0 },
        isShowToolbar: !1,
        isDrawing: !1,
        isEmpty: !0,
        ratio: m.getPixelRatio(),
        isShowInputModal: !1,
        commonProps: {},
        selectedText: "",
        boardHeight: 0,
      };
    },
    computed: {
      chartStyle: function () {
        var t = this.layout.chart,
          e = t.width,
          i = void 0 === e ? 0 : e,
          o = t.height,
          n = void 0 === o ? 0 : o,
          s = t.left,
          r = void 0 === s ? 0 : s,
          a = t.top,
          p = void 0 === a ? 0 : a;
        return {
          width: "".concat(i, "px"),
          height: "".concat(n, "px"),
          marginLeft: "".concat(r, "px"),
          marginTop: "".concat(p, "px"),
        };
      },
      kType: function () {
        return (
          {
            m1: "minute1",
            m5: "minute5",
            m15: "minute15",
            m30: "minute30",
            m60: "minute60",
            m120: "minute120",
          }[this.options.type] || this.options.type
        );
      },
    },
    watch: {
      layout: function () {
        this.init(),
          Array.isArray(this.data) &&
            this.data.length &&
            ((this.isShowToolbar = !1), this.view.loadFromJSON(this.data));
      },
      options: function (t, e) {
        t.type !== e.type &&
          this.handleChangeType({ currentType: t.type, preType: e.type }),
          this.checkValueChange(t, e) && this.handleAxisValueChange(t);
      },
    },
    mounted: function () {
      if (
        (this.init(),
        this.$emit("inited"),
        w.StockBridge.ENV === w.EnvTypeEnum.MP)
      ) {
        var t = w.wx$1.getSystemInfoSync(),
          e = t.windowWidth,
          i = t.windowHeight;
        this.windowSize = { windowWidth: e, windowHeight: i };
      }
    },
    beforeDestroy: function () {
      this.isDrawing && this.handleSave();
    },
    methods: {
      init: function () {
        return (
          (e = this),
          null,
          (i = t().mark(function () {
            var e,
              i,
              o,
              n,
              s,
              r,
              a,
              p = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.options),
                        (i = e.type),
                        (o = e.xAxis),
                        (n = e.yAxis),
                        (t.next = 6),
                        this.getCanvasElem()
                      );
                    case 6:
                      if (
                        ((s = t.sent),
                        (this.boardHeight = s.top),
                        (s.width = this.layout.chart.width * this.ratio),
                        (s.height = this.layout.chart.height * this.ratio),
                        (s.top = 0),
                        (s.left = 0),
                        (r = {
                          skin: this.skin,
                          isDrawing: this.isDrawing,
                          layout: this.layout,
                          chartType: i,
                          chartData: { xAxis: o, yAxis: n },
                          canvas: s,
                          instance: this,
                        }),
                        (this.view = new F(r)),
                        this.handleReport("init"),
                        (a =
                          this.drawlineData["shape_kline_".concat(this.kType)]))
                      )
                        try {
                          (this.data = JSON.parse(a).data),
                            this.view.loadFromJSON(this.data);
                        } catch (t) {
                          this.data = [];
                        }
                      this.throttleRender = b(1e3 / 60, function () {
                        p.view.repaintPosition(p.data);
                      });
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (t, o) {
            var n = function (t) {
                try {
                  r(i.next(t));
                } catch (t) {
                  o(t);
                }
              },
              s = function (t) {
                try {
                  r(i.throw(t));
                } catch (t) {
                  o(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, s);
              };
            r((i = i.apply(e, null)).next());
          })
        );
        var e, i;
      },
      loadData: function (t) {
        (this.data = Array.isArray(t) ? t : []),
          this.view.loadFromJSON(this.data),
          (this.isEmpty = this.view.isEmpty());
      },
      checkValueChange: function (t, e) {
        var i, o;
        return (
          "".concat(t.yAxis.maxMin.max, "-").concat(t.yAxis.maxMin.min) !==
            "".concat(e.yAxis.maxMin.max, "-").concat(e.yAxis.maxMin.min) ||
          (null == (i = t.xAxis.viewItems) ? void 0 : i.length) !==
            (null == (o = e.xAxis.viewItems) ? void 0 : o.length) ||
          t.xAxis.viewItems.join() !== e.xAxis.viewItems.join() ||
          t.xAxis.itemWidth !== e.xAxis.itemWidth
        );
      },
      handleUpdateData: function (t, e) {
        switch (t) {
          case "add":
            this.data.push(e);
            break;
          case "update":
          case "del":
            this.data = e;
        }
      },
      handleChangeType: function (t) {
        var e = t.currentType,
          i = t.preType;
        this.isDrawing && this.handleSave(i),
          this.view.clear(),
          (this.data = []);
        try {
          this.data = JSON.parse(
            this.drawlineData["shape_kline_".concat(this.kType)]
          ).data;
        } catch (t) {
          this.data = [];
        }
        this.handleReport("kline.changeType.".concat(e)),
          this.view.repaintByData(this.data);
      },
      handleAxisValueChange: function (t) {
        var e = t.xAxis,
          i = t.yAxis,
          o = t.type;
        this.view.updateChartProps({
          isDrawing: this.isDrawing,
          chartType: o,
          chartData: { xAxis: e, yAxis: i },
        }),
          this.view.isEmpty() || this.throttleRender();
      },
      setDrawStatus: function (t) {
        (this.isDrawing = !!t),
          (this.isEmpty = this.view.isEmpty()),
          this.view.setAllowTouchScrolling(!t),
          this.view.setSelectable(this.isDrawing);
      },
      handleToolSelect: function (t, e) {
        var i = (e || {}).action;
        switch (t) {
          case "color":
          case "weight":
            (this.currentLine[t] = i),
              (this.commonProps[t] = isNaN(i) ? i : +i);
            break;
          case "fontSize":
          case "text":
            this.currentLine[t] = i;
            break;
          case "show":
            this.currentLine.isShow = !this.currentLine.isShow;
            break;
          case "lock":
            this.currentLine.isLock = !this.currentLine.isLock;
            break;
          case "delete":
            (this.isShowToolbar = !1),
              this.view.remove(),
              this.handleUpdateData("del", this.view.toJSON()),
              (this.isEmpty = this.view.isEmpty());
        }
        "delete" !== t && this.view.update(this.currentLine),
          this.handleReport(
            "delete" !== t ? "line_update_".concat(t) : "line_".concat(t)
          );
      },
      handleLineSelect: function (t) {
        var e;
        if ((this.handleReport("line_select_".concat(t)), "clear" === t))
          return (
            this.view.clear(),
            (this.isShowToolbar = !1),
            void (this.isEmpty = !0)
          );
        if (this.data.length > 110)
          w.StockBridge.toast(
            "已超过最大画线数量，建议删除部分无效画线",
            "none"
          );
        else {
          this.isEmpty = !1;
          var i = this.view.draw(t, this.commonProps);
          (this.currentLine.shapeType = t),
            "text" === t && (this.currentLine.fontSize = m.DEFAULT_FONTSIZE),
            (this.currentLine.isLock = !1),
            (this.currentLine.isShow = !0),
            null == (e = this.$refs.toolBox) || e.updated(this.currentLine),
            (this.isShowToolbar = !0),
            this.data.push(i.getObject());
        }
      },
      handleDeleteAll: function () {
        (this.isEmpty = !0),
          (this.data = []),
          this.view.clear(),
          this.handleCancel();
      },
      autoSave: function () {
        this.isDrawing && this.handleSave();
      },
      handleSave: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          e = t || this.kType;
        this.view.backToBrowse(), this.setDrawStatus(!1);
        var i = { data: this.view.toJSON(!0) };
        (this.data = JSON.parse(JSON.stringify(i.data))),
          this.handleReport("save"),
          this.$emit("save", { data: i, shapeType: e }),
          (this.isShowToolbar = !1);
      },
      handleToolBar: function (t, e) {
        (this.isShowToolbar = "show" === t),
          e &&
            ((this.currentLine = e),
            (this.isShowInputModal =
              "text" === e.shapeType &&
              "text" === e.activeType &&
              e.isShow &&
              e.showModal));
      },
      resetToolBar: function () {
        (this.currentLine = {
          color: m.DEFAULT_COLOR,
          weight: m.DEFAULT_WEIGHT,
          fontSize: m.DEFAULT_FONTSIZE,
          isShow: !0,
          isLock: !1,
        }),
          (this.commonProps = {}),
          (this.isShowToolbar = !1);
      },
      handleEvent: function (t, e) {
        this.$emit(t, e);
      },
      handleReport: function (t) {
        w.StockBridge.report("hq.stock_detail.drawBoard_".concat(t));
      },
      handleInputClose: function () {
        this.isShowInputModal = !1;
      },
      handleInputSubmit: function (t) {
        this.handleInputClose(), this.handleToolSelect("text", { action: t });
      },
      getCanvasElem: function () {
        var t = this;
        return new Promise(function (e) {
          w.wx$1
            .createSelectorQuery()
            .in(t)
            .select(".draw-board-content")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var i = t[0].node;
              e(i);
            });
        });
      },
      handleTouchEvent: function (t) {
        var e, i, o, n, s;
        if ((this.view.handleTouchEvent(t), this.view.getActiveObject()))
          if ("touchstart" === t.type) {
            var r = this.view.getActiveObject().getCurrentLine(),
              a = r.color,
              p = r.weight,
              h = r.fontSize;
            (this.currentLine = x({ isShow: this.currentLine.isShow }, r)),
              (this.commonProps.color = a),
              (this.commonProps.weight = p),
              (this.commonProps.fontSize = h),
              (this.isShowToolbar = !0),
              null == (i = null == (e = this.$refs) ? void 0 : e.toolBox) ||
                i.updated(this.currentLine);
          } else "touchend" === t.type && (this.data = this.view.toJSON());
        else if (null == (o = this.$refs.lineBox) ? void 0 : o.popupShape)
          null == (n = this.$refs.lineBox) || n.handleBodyClick();
        else {
          (this.isShowToolbar = !1),
            null == (s = this.$refs.toolBox) || s.showPopup("");
          var c = t,
            l = this.layout.chart,
            u = l.left,
            d = void 0 === u ? 0 : u,
            v = l.top,
            g = void 0 === v ? 0 : v;
          "touchend" !== t.type &&
            ((c.touches[0].x = d + c.touches[0].x),
            (c.touches[0].y = g + c.touches[0].y)),
            t.changedTouches.length &&
              "touchmove" !== t.type &&
              ((c.changedTouches[0].x = d + c.changedTouches[0].x),
              (c.changedTouches[0].y = g + c.changedTouches[0].y)),
            this.$emit("handleTouch", c);
        }
      },
      handleTipTextDoubleClick: function (t) {
        var e;
        (this.selectedText = (null == (e = t.target) ? void 0 : e.text) || ""),
          (this.isShowInputModal = !0);
      },
    },
  };
Array ||
  (
    w.resolveComponent("tool-box") +
    w.resolveComponent("line-box") +
    w.resolveComponent("input-modal")
  )();
var q = w._export_sfc(B, [
  [
    "render",
    function (t, e, i, o, n, s) {
      return w.e(
        {
          a: w.s(s.chartStyle),
          b: w.o(function () {
            return s.handleTouchEvent && s.handleTouchEvent.apply(s, arguments);
          }, 3706),
          c: w.o(function () {
            return s.handleTouchEvent && s.handleTouchEvent.apply(s, arguments);
          }, 3707),
          d: w.o(function () {
            return s.handleTouchEvent && s.handleTouchEvent.apply(s, arguments);
          }, 3708),
          e: n.isDrawing,
        },
        n.isDrawing
          ? {
              f: w.sr("toolBox", "4222dd9a-0"),
              g: n.isShowToolbar,
              h: w.o(s.handleToolSelect, 3709),
              i: w.p({
                "curr-value": n.currentLine,
                "window-size": n.windowSize,
              }),
            }
          : {},
        { j: n.isDrawing },
        n.isDrawing
          ? {
              k: w.sr("lineBox", "4222dd9a-1"),
              l: w.o(s.handleLineSelect, 3710),
              m: w.o(s.handleSave, 3711),
              n: w.p({ isEmpty: n.isEmpty }),
            }
          : {},
        { o: n.isShowInputModal },
        n.isShowInputModal
          ? {
              p: w.o(s.handleInputClose, 3712),
              q: w.o(s.handleInputSubmit, 3713),
              r: w.p({ value: n.selectedText }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-4222dd9a"],
]);
wx.createComponent(q);
var _ = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1kcmF3bGluZS9keW5hbWljQm9hcmQvaW5kZXgudnVl =
  _),
  (exports.throttle = b);
