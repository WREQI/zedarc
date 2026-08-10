require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  f = function (e, t) {
    for (var r in t || (t = {})) l.call(t, r) && c(e, r, t[r]);
    if (i) {
      var o,
        a = n(i(t));
      try {
        for (a.s(); !(o = a.n()).done; ) {
          r = o.value;
          u.call(t, r) && c(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return o(e, a(t));
  },
  s = require("../../../../../common/vendor.js");
function d(e, t) {
  return e
    ? t
      ? Array.from(t.segment(e), function (e) {
          return e.segment;
        })
      : Array.from(e)
    : [];
}
function p(e) {
  return "undefined" != typeof window &&
    "function" == typeof window.requestAnimationFrame
    ? window.requestAnimationFrame(e)
    : setTimeout(e, 16);
}
var v = ["black", "dark", "panda"],
  b = s.defineComponent({
    name: "StreamingText",
    props: {
      content: { type: String, default: "" },
      tagClass: { type: [String, Array, Object], default: "" },
      theme: { type: String, default: "" },
      enabled: { type: Boolean, default: !0 },
      initialColor: { type: String, default: "" },
      finalColor: { type: String, default: "currentColor" },
      durationMs: { type: Number, default: 550 },
      settleFallbackMs: { type: Number, default: 1e3 },
    },
    setup: function (n, r) {
      var o = r.emit,
        a = (function (n) {
          var r = s.ref(""),
            o = s.ref([]),
            a = s.computed(function () {
              return o.value
                .map(function (e) {
                  return e.text;
                })
                .join("");
            }),
            i =
              "undefined" != typeof Intl && Intl.Segmenter
                ? new Intl.Segmenter(void 0, { granularity: "grapheme" })
                : null,
            l = new Map(),
            u = new Map(),
            c = 0,
            v = function () {
              l.forEach(function (e) {
                clearTimeout(e);
              }),
                l.clear(),
                u.forEach(function (e) {
                  e.forEach(function (e) {
                    !(function (e) {
                      "undefined" == typeof window ||
                      "function" != typeof window.cancelAnimationFrame
                        ? clearTimeout(e)
                        : window.cancelAnimationFrame(e);
                    })(e);
                  });
                }),
                u.clear();
            },
            b = function (e) {
              v(), (r.value = e), (o.value = []);
            },
            g = function (e) {
              return o.value.some(function (t) {
                return t.id === e;
              });
            },
            y = function (e, t) {
              var n = (u.get(e) || []).filter(function (e) {
                return e !== t;
              });
              n.length > 0 ? u.set(e, n) : u.delete(e);
            },
            h = function (e, n) {
              u.set(e, [].concat(t(u.get(e) || []), [n]));
            },
            w = function (e, t) {
              if (!t || !t.propertyName || "color" === t.propertyName) {
                var n = l.get(e);
                n && (clearTimeout(n), l.delete(e)),
                  (o.value = o.value.map(function (t) {
                    return t.id === e ? m(f({}, t), { completed: !0 }) : t;
                  })),
                  (function () {
                    var e = o.value;
                    if (0 !== e.length && e[0].completed) {
                      for (
                        var t = r.value, n = 0;
                        n < e.length && e[n].completed;

                      )
                        (t += e[n].text), (n += 1);
                      (r.value = t), (o.value = e.slice(n));
                    }
                  })();
              }
            },
            S = function (e) {
              if (e) {
                var r = (c += 1),
                  a = {
                    id: r,
                    text: e,
                    parts: d(e, i),
                    active: !1,
                    completed: !1,
                  };
                (o.value = [].concat(t(o.value), [a])),
                  s.nextTick$1(function () {
                    if (g(r)) {
                      var e = p(function () {
                        if ((y(r, e), g(r))) {
                          var t = p(function () {
                            y(r, t),
                              (function (e) {
                                o.value = o.value.map(function (t) {
                                  return t.id === e
                                    ? m(f({}, t), { active: !0 })
                                    : t;
                                });
                              })(r),
                              (function (e) {
                                var t = l.get(e);
                                t && clearTimeout(t);
                                var r = Math.max(
                                  n.settleFallbackMs
                                    ? n.settleFallbackMs()
                                    : 1e3,
                                  0
                                );
                                l.set(
                                  e,
                                  setTimeout(function () {
                                    return w(e);
                                  }, r)
                                );
                              })(r);
                          });
                          h(r, t);
                        }
                      });
                      h(r, e);
                    }
                  });
              }
            };
          return (
            s.watch(
              [
                n.source,
                function () {
                  return !n.enabled || n.enabled();
                },
              ],
              function (t) {
                var n = e(t, 2),
                  o = n[0],
                  i = n[1],
                  l = String(o || "");
                if (i) {
                  var u = r.value + a.value;
                  l !== u &&
                    (l.startsWith(u) && l.length > u.length
                      ? S(l.slice(u.length))
                      : b(l));
                } else b(l);
              },
              { immediate: !0 }
            ),
            s.onUnmounted(function () {
              v();
            }),
            {
              settledText: r,
              colorSegments: o,
              completeColorSegment: w,
              setFullContent: b,
            }
          );
        })({
          source: function () {
            return n.content;
          },
          enabled: function () {
            return n.enabled;
          },
          settleFallbackMs: function () {
            return n.settleFallbackMs;
          },
        }),
        i = a.settledText,
        l = a.colorSegments,
        u = a.completeColorSegment,
        c = s.computed(function () {
          return n.initialColor
            ? n.initialColor
            : v.includes(n.theme)
            ? "#475166"
            : "#bfc4ce";
        });
      return {
        settledText: i,
        colorSegments: l,
        completeColorSegment: u,
        rootStyle: s.computed(function () {
          return {
            "--stream-text-initial-color": c.value,
            "--stream-text-final-color": n.finalColor,
            "--stream-text-duration": "".concat(n.durationMs, "ms"),
          };
        }),
        handleClick: function (e) {
          o("click", e);
        },
      };
    },
  }),
  g = s._export_sfc(b, [
    [
      "render",
      function (e, t, n, r, o, a) {
        return s.e(
          { a: e.settledText },
          e.settledText ? { b: s.t(e.settledText) } : {},
          {
            c: s.f(e.colorSegments, function (t, n, r) {
              return {
                a: s.f(t.parts, function (n, r, o) {
                  return {
                    a: s.t(n),
                    b: "".concat(t.id, "_").concat(r),
                    c: s.o(
                      function (n) {
                        return e.completeColorSegment(t.id, n);
                      },
                      5812,
                      "".concat(t.id, "_").concat(r)
                    ),
                  };
                }),
                b: t.active ? 1 : "",
                c: t.id,
              };
            }),
            d: s.n(e.tagClass),
            e: s.s(e.rootStyle),
            f: s.o(function () {
              return e.handleClick && e.handleClick.apply(e, arguments);
            }, 5813),
          }
        );
      },
    ],
    ["__scopeId", "data-v-fd14b889"],
  ]);
wx.createComponent(g);
