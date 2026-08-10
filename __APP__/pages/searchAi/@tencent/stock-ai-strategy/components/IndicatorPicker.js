require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (e, t, a) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  u = function (e, n) {
    for (var a in n || (n = {})) i.call(n, a) && l(e, a, n[a]);
    if (o) {
      var r,
        u = t(o(n));
      try {
        for (u.s(); !(r = u.n()).done; ) {
          a = r.value;
          c.call(n, a) && l(e, a, n[a]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  s = function (e, t) {
    return a(e, r(t));
  },
  f = require("../../../../../common/vendor.js"),
  v = {
    components: {
      ActionSheet: function () {
        return "../../../../asyncCom/@tencent/stock-ui/mp/action-sheet/index.js";
      },
      RangeSlider: function () {
        return "./Base/RangeSlider.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      conditions: { type: Object, default: {} },
      factors: { type: Object, default: {} },
      indicators: { type: Array, default: [] },
      matches: { type: Number, default: 0 },
    },
    options: { styleIsolation: "shared" },
    setup: function (t, n) {
      var a = n.emit,
        r = f.ref({}),
        o = f.ref({}),
        i = f.ref(!1),
        c = f.ref({}),
        l = f.ref({});
      return (
        f.watch(
          function () {
            return t.factors;
          },
          function (e) {
            r.value = e;
          },
          { immediate: !0 }
        ),
        f.watch(
          function () {
            return t.conditions;
          },
          function (e) {
            o.value = e;
          },
          { immediate: !0 }
        ),
        {
          formatFactorSize: function (e) {
            return e.textWidth > 20 ? "small" : "";
          },
          selectedFactors: r,
          changeFactor: function (t, n) {
            var i = n.id,
              c = s(u({}, r.value), e({}, i, t));
            r.value = c;
            var l = u({}, o.value);
            Object.keys(c).forEach(function (t) {
              var n = c[t],
                a = n.label,
                r = n.value;
              Object.assign(
                l,
                e({}, t, s(u({}, l[t]), { label: a, value: r }))
              );
            }),
              (o.value = l),
              a("change", o.value);
          },
          selectedConditions: o,
          getDefaultRange: function (e) {
            var t = o.value[e.id];
            return JSON.parse(t.value);
          },
          onRangeChange: function (t, n) {
            var r = n.start,
              i = n.end;
            (o.value = s(
              u({}, o.value),
              e(
                {},
                t,
                s(u({}, o.value[t]), {
                  label: "".concat(r, "~").concat(i),
                  value: "[".concat(r, ",").concat(i, "]"),
                })
              )
            )),
              a("change", o.value);
          },
          formatUnit: function (e, t) {
            return ["top", "bottom"].includes(e.operate) ? "" : t;
          },
          onConfirm: function () {
            (i.value = !0),
              (c.value = r.value),
              (l.value = o.value),
              a("confirm", o.value);
          },
          onCancel: function () {
            i.value
              ? ((o.value = l.value), (r.value = c.value))
              : ((o.value = t.conditions), (r.value = t.factors)),
              a("cancel");
          },
          onInput: function (e) {
            e ||
              (i.value
                ? ((o.value = l.value), (r.value = c.value))
                : ((o.value = t.conditions), (r.value = t.factors)),
              a("cancel"));
          },
        }
      );
    },
  };
Array ||
  (f.resolveComponent("range-slider") + f.resolveComponent("action-sheet"))();
var d = f._export_sfc(v, [
  [
    "render",
    function (e, t, n, a, r, o) {
      return f.e(
        { a: n.indicators && n.indicators.length },
        n.indicators && n.indicators.length
          ? f.e(
              { b: n.visible },
              n.visible
                ? {
                    c: f.f(n.indicators, function (e, t, n) {
                      return f.e(
                        { a: f.t(e.label), b: a.selectedConditions[e.id] },
                        a.selectedConditions[e.id]
                          ? {
                              c: f.t(a.selectedConditions[e.id].label),
                              d: f.t(
                                a.formatUnit(a.selectedConditions[e.id], e.unit)
                              ),
                            }
                          : {},
                        { e: "range" === e.typ },
                        "range" === e.typ
                          ? {
                              f: f.o(a.onRangeChange, 2720, t),
                              g: "e4a941c7-1-" + n + ",e4a941c7-0",
                              h: f.p({
                                iid: e.id,
                                unit: e.unit,
                                max: Number(e.range.max),
                                min: Number(e.range.min),
                                range: a.getDefaultRange(e),
                                step: Number(e.range.step),
                              }),
                            }
                          : "selectable" === e.typ
                          ? {
                              j: f.f(e.rows, function (t, n, r) {
                                return {
                                  a: f.f(t, function (t, n, r) {
                                    return {
                                      a: f.t(t ? t.label : ""),
                                      b: n,
                                      c: f.n(
                                        t &&
                                          a.selectedFactors[e.id].value ===
                                            t.value
                                          ? "active"
                                          : ""
                                      ),
                                      d: f.n(t ? "" : "placeholder"),
                                      e: f.n(t ? a.formatFactorSize(t) : ""),
                                      f: f.o(
                                        function (n) {
                                          return a.changeFactor(t, e);
                                        },
                                        2721,
                                        n
                                      ),
                                    };
                                  }),
                                  b: n,
                                };
                              }),
                            }
                          : {},
                        { i: "selectable" === e.typ, k: t }
                      );
                    }),
                    d: f.o(function () {
                      return a.onCancel && a.onCancel.apply(a, arguments);
                    }, 2722),
                    e: f.t(n.matches),
                    f: f.o(function () {
                      return a.onConfirm && a.onConfirm.apply(a, arguments);
                    }, 2723),
                  }
                : {},
              {
                g: f.o(a.onCancel, 2724),
                h: f.o(a.onInput, 2725),
                i: f.p({
                  value: n.visible,
                  maskClosable: !0,
                  title: "更换选股条件",
                  "picker-style": !0,
                  "close-button": !0,
                  "confirm-txt": " ",
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e4a941c7"],
]);
wx.createComponent(d);
