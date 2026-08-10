var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../common/vendor.js"),
  a = require("../../lib/report.js"),
  u = void 0 !== t.wx$1 && "function" == typeof t.wx$1.request,
  l = {
    props: {
      iid: { type: String, default: "" },
      unit: { type: String, default: "" },
      min: { type: Number, default: 0 },
      max: { type: Number, default: 10 },
      range: { type: Array, default: [0, 10] },
      step: { type: Number, default: 1 },
    },
    setup: function (l, n) {
      var r = n.emit,
        i = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        v = t.ref(0),
        o = t.ref(10),
        f = t.computed(function () {
          return l.max;
        }),
        c = t.computed(function () {
          return l.min;
        }),
        d = t.computed(function () {
          if (l.step) return l.step;
          var e = l.max - l.min;
          return e <= 100 ? 1 : Math.round(e / 100);
        }),
        s = t.ref(null),
        m = t.ref(null),
        h = t.ref(0),
        p = t.ref(0),
        x = t.ref({ left: 0, width: 0 }),
        g = t.ref(null),
        w = t.ref(null),
        V = t.ref({ left: 0, width: 0 }),
        y = t.ref({ left: 0, width: 0 });
      t.watch(
        function () {
          return l.range;
        },
        function (t) {
          var a = e(t, 2),
            u = a[0],
            l = a[1];
          (v.value = u), (o.value = l);
        },
        { immediate: !0 }
      );
      var M = function (e) {
          if (u)
            t.wx$1
              .createSelectorQuery()
              .in(i)
              .select("#cursor-".concat(e))
              .boundingClientRect(function (t) {
                var a = { left: t.left, width: t.width };
                "max" === e ? (y.value = a) : (V.value = a);
              })
              .exec();
          else if (w.value) {
            var a = ("max" === e ? w.value : g.value).getBoundingClientRect(),
              l = { left: a.left, width: a.width };
            "max" === e ? (y.value = l) : (V.value = l);
          }
        },
        b = t.computed(function () {
          return ((v.value - c.value) / (f.value - c.value)) * 100;
        }),
        D = t.computed(function () {
          return ((o.value - c.value) / (f.value - c.value)) * 100;
        }),
        S = t.computed(function () {
          return { left: b.value + "%", width: D.value - b.value + "%" };
        }),
        C = function (e) {
          return e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
        },
        k = function (e) {
          var t = f.value - c.value,
            a = x.value.width,
            u = (v.value - c.value) / t,
            l = (o.value - c.value) / t,
            n = y.value.width / a,
            r = (v.value.toFixed(1).length / f.value.toFixed(1).length) * n,
            i = (o.value.toFixed(1).length / f.value.toFixed(1).length) * n,
            d = V.value.width / a,
            s = 1 - y.value.width / a;
          return "start" === e
            ? (u < d
                ? (u = d)
                : f.value === o.value
                ? u >= s && (u = s)
                : u + i > s
                ? (u = s - i)
                : u + r / 2 >= s && (u = s - r / 2),
              { left: 100 * u + "%" })
            : (c.value === v.value
                ? l < d && (l = d)
                : l < d + r && (l = u < d ? d + r : u + r),
              l > s
                ? (l = s)
                : u + r / 2 > l - i / 2 && (l = l < s && l > s - i ? s : u + r),
              { left: 100 * l + "%" });
        },
        R = t.computed(function () {
          return k("start");
        }),
        T = t.computed(function () {
          return k("end");
        }),
        q = null;
      function $(e) {
        return l.unit
          ? a.formatNoUnit(e, !1, 1, !1)
          : a.formatMoney(e, !1, 1, !1);
      }
      function F(e, a) {
        !q &&
          u &&
          (q = setTimeout(function () {
            t.wx$1.vibrateShort({ type: "light" }),
              q && clearTimeout(q),
              (q = null);
          }, 100)),
          m.value || r("change", l.iid, { start: $(e), end: $(a) });
      }
      return (
        t.onMounted(function () {
          M("min"),
            M("max"),
            (function () {
              if (u)
                t.wx$1
                  .createSelectorQuery()
                  .in(i)
                  .select("#slider-wrapper")
                  .boundingClientRect(function (e) {
                    x.value = { left: e.left, width: e.width };
                  })
                  .exec();
              else if (s.value) {
                var e = s.value.getBoundingClientRect();
                x.value = { left: e.left, width: e.width };
              }
            })();
        }),
        {
          startValue: v,
          endValue: o,
          minValue: c,
          maxValue: f,
          slider: s,
          sliderRect: x,
          cursorMax: w,
          cursorMin: g,
          cursorMaxRect: y,
          cursorMinRect: V,
          startPosition: b,
          endPosition: D,
          rangeStyle: S,
          startLabelStyle: R,
          endLabelStyle: T,
          handleTrackClick: function (e) {
            var t = ((C(e) - x.value.left) / x.value.width) * 100,
              a = Math.round(c.value + (t / 100) * (f.value - c.value)),
              u = Math.floor((a - c.value) / d.value);
            (a = a % d.value > 0.5 ? (u + 1) * d.value : u * d.value),
              Math.abs(a - v.value) < Math.abs(a - o.value)
                ? (v.value = Math.max(c.value, Math.min(o.value - d.value, a)))
                : (o.value = Math.min(f.value, Math.max(v.value + d.value, a))),
              F(v.value, o.value);
          },
          startDrag: function (e, t) {
            e.preventDefault(),
              (m.value = t),
              (h.value = C(e)),
              (p.value = "start" === t ? b.value : D.value);
          },
          handleDrag: function (e) {
            if ((e.preventDefault(), m.value)) {
              var t = ((C(e) - h.value) / x.value.width) * 100,
                a = p.value + t;
              a = Math.max(0, Math.min(100, a));
              var u = c.value + (a / 100) * (f.value - c.value),
                l = Math.floor((u - c.value) / d.value);
              if (
                (u !== f.value &&
                  u !== c.value &&
                  (u = u % d.value > 0.5 ? (l + 1) * d.value : l * d.value),
                "start" === m.value)
              ) {
                var n = Math.max(c.value, Math.min(o.value - d.value, u));
                if (v.value === n) return;
                v.value = n;
              } else {
                var r = Math.min(f.value, Math.max(v.value + d.value, u));
                if (o.value === r) return;
                o.value = r;
              }
              F(v.value, o.value);
            }
          },
          stopDrag: function () {
            (m.value = null), F(v.value, o.value);
          },
          formatValue: $,
        }
      );
    },
  },
  n = t._export_sfc(l, [
    [
      "render",
      function (e, a, u, l, n, r) {
        return t.e(
          {
            a: t.s(l.rangeStyle),
            b: l.startPosition + "%",
            c: t.o(function (e) {
              return l.startDrag(e, "start");
            }, 3527),
            d: t.o(function (e) {
              return l.handleDrag(e);
            }, 3528),
            e: t.o(function (e) {
              return l.stopDrag(e);
            }, 3529),
            f: l.endPosition + "%",
            g: t.o(function (e) {
              return l.startDrag(e, "end");
            }, 3530),
            h: t.o(function (e) {
              return l.handleDrag(e);
            }, 3531),
            i: t.o(function (e) {
              return l.stopDrag(e);
            }, 3532),
            j: t.t(l.formatValue(l.minValue)),
            k: l.minValue === l.startValue ? 1 : "",
            l: l.minValue !== l.startValue,
          },
          l.minValue !== l.startValue
            ? { m: t.t(l.formatValue(l.startValue)), n: t.s(l.startLabelStyle) }
            : {},
          { o: l.maxValue !== l.endValue },
          l.maxValue !== l.endValue
            ? { p: t.t(l.formatValue(l.endValue)), q: t.s(l.endLabelStyle) }
            : {},
          {
            r: t.t(l.formatValue(l.maxValue)),
            s: l.maxValue === l.endValue ? 1 : "",
            t: t.o(function () {
              return (
                l.handleTrackClick && l.handleTrackClick.apply(l, arguments)
              );
            }, 3533),
          }
        );
      },
    ],
    ["__scopeId", "data-v-0e956c97"],
  ]);
wx.createComponent(n);
