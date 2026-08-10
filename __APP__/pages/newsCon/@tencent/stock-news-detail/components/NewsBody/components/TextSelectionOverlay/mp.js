var t = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  a = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  h = function (t, n) {
    for (var i in n || (n = {})) l.call(n, i) && a(t, i, n[i]);
    if (o) {
      var r,
        h = e(o(n));
      try {
        for (h.s(); !(r = h.n()).done; ) {
          i = r.value;
          s.call(n, i) && a(t, i, n[i]);
        }
      } catch (t) {
        h.e(t);
      } finally {
        h.f();
      }
    }
    return t;
  },
  c = require("../../../../../../../../common/vendor.js"),
  u = require("../../../../../stock-news-core/utils/bus.js"),
  f = c.defineComponent({
    name: "TextSelectionOverlay",
    props: {
      containerSelector: { type: String, default: ".stock-news-container" },
      items: {
        type: Array,
        default: function () {
          return [
            { key: "askAi", label: "问元宝" },
            { key: "copy", label: "复制" },
          ];
        },
      },
      container: { type: Object, default: null },
    },
    emits: ["select"],
    data: function () {
      return {
        currentPid: "",
        paragraphSentences: [],
        containerRect: null,
        startIdx: -1,
        endIdx: -1,
        highlightRects: [],
        menuPosition: { x: 0, y: 0 },
        arrowOffset: 0,
        menuRealWidth: 0,
        menuRealHeight: 0,
        menuVisible: !1,
        menuMeasureToken: 0,
        menuMeasureTimer: null,
        hasSelection: !1,
        showSelectionHandles: !1,
        activeHandle: "",
        overlayTop: 0,
        selectingHandle: !1,
        currentCtx: null,
        selectAllToken: 0,
        selectAllBuffer: [],
        selectAllReceivedPids: {},
        selectAllDebounceTimer: null,
        busEvents: {},
      };
    },
    computed: {
      menuItems: function () {
        return this.items;
      },
      menuStyle: function () {
        return {
          left: "".concat(this.menuPosition.x, "px"),
          top: "".concat(this.menuPosition.y, "px"),
        };
      },
      arrowStyle: function () {
        return { left: "".concat(this.arrowOffset, "px"), transform: "none" };
      },
      leftHandleStyle: function () {
        if (!this.highlightRects.length) return { display: "none" };
        var t = this.highlightRects[0];
        return {
          left: "".concat(t.left, "px"),
          top: "".concat(t.top, "px"),
          height: "".concat(t.height, "px"),
        };
      },
      rightHandleStyle: function () {
        if (!this.highlightRects.length) return { display: "none" };
        var t = this.highlightRects[this.highlightRects.length - 1];
        return {
          left: "".concat(t.left + t.width, "px"),
          top: "".concat(t.top, "px"),
          height: "".concat(t.height, "px"),
        };
      },
      selectedText: function () {
        if (
          !this.paragraphSentences.length ||
          this.startIdx < 0 ||
          this.endIdx < 0
        )
          return "";
        for (
          var t = Math.min(this.startIdx, this.endIdx),
            e = Math.max(this.startIdx, this.endIdx),
            n = "",
            i = t;
          i <= e;
          i += 1
        ) {
          var r = this.paragraphSentences[i];
          r && (n += r.text || "");
        }
        return n;
      },
    },
    mounted: function () {
      (this.busEvents["news-selectAll-result"] = this.onSelectAllResult),
        u.BUS.$on("news-selectAll-result", this.onSelectAllResult);
    },
    beforeDestroy: function () {
      var t = this;
      Object.keys(this.busEvents).forEach(function (e) {
        u.BUS.$off(e, t.busEvents[e]);
      }),
        (this.busEvents = {}),
        this.selectAllDebounceTimer &&
          (clearTimeout(this.selectAllDebounceTimer),
          (this.selectAllDebounceTimer = null)),
        (this.menuMeasureToken += 1),
        this.menuMeasureTimer &&
          (clearTimeout(this.menuMeasureTimer), (this.menuMeasureTimer = null));
    },
    methods: {
      handleParagraphLongpress: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.paragraphId,
          n = t.x,
          i = t.y,
          r = t.sentenceTexts,
          o = t.ctx,
          l = t.scope;
        if (e) {
          var s = Array.isArray(r) ? r : [];
          s.length &&
            (this.currentCtx &&
              this.currentCtx !== o &&
              "function" == typeof this.currentCtx.resetCharMode &&
              this.currentCtx.resetCharMode(),
            (this.currentCtx = o || null),
            this.queryCharRectsAndApply({
              paragraphId: e,
              x: n,
              y: i,
              texts: s,
              ctx: o,
              scope: l,
              attempt: 0,
            }));
        }
      },
      queryCharRectsAndApply: function (t) {
        var e = this,
          n = t.paragraphId,
          i = t.x,
          r = t.y,
          o = t.texts,
          l = t.ctx,
          s = t.scope,
          a = t.attempt,
          h = null;
        if (
          (void 0 !== c.index && c.index.createSelectorQuery
            ? (h = c.index.createSelectorQuery.bind(c.index))
            : void 0 !== c.wx$1 &&
              c.wx$1.createSelectorQuery &&
              (h = c.wx$1.createSelectorQuery.bind(c.wx$1)),
          h)
        ) {
          var u = h();
          0 === a && l
            ? (u = u.in ? u.in(l) : u)
            : 1 === a && s && (u = u.in ? u.in(s) : u),
            u.select("#".concat(n)).boundingClientRect(),
            u
              .selectAll("#".concat(n, " .news-char-mp"))
              .fields({ rect: !0, size: !0, dataset: !0 }),
            u
              .selectAll("#".concat(n, " .news-char-measure"))
              .fields({ rect: !0, size: !0, dataset: !0 }),
            u.exec(function (t) {
              var h = t || [],
                c = h[0],
                u = Array.isArray(h[1]) ? h[1] : [],
                f = function (t) {
                  return !(
                    !t ||
                    "number" != typeof t.left ||
                    !((t.width || 0) > 0 || (t.height || 0) > 0)
                  );
                },
                d = u.filter(f).length,
                p = (Array.isArray(h[2]) ? h[2] : [])
                  .filter(f)
                  .slice()
                  .sort(function (t, e) {
                    return (
                      parseInt((t.dataset && t.dataset.mi) || "0", 10) -
                      parseInt((e.dataset && e.dataset.mi) || "0", 10)
                    );
                  });
              0 === d && a < 2
                ? e.queryCharRectsAndApply({
                    paragraphId: n,
                    x: i,
                    y: r,
                    texts: o,
                    ctx: l,
                    scope: s,
                    attempt: a + 1,
                  })
                : e.applyCharSelection({
                    paragraphId: n,
                    x: i,
                    y: r,
                    texts: o,
                    containerRect: c,
                    charRects: u,
                    measureRects: p,
                  });
            });
        }
      },
      applyCharSelection: function (e) {
        var n = this,
          i = e.paragraphId,
          r = e.x,
          o = e.y,
          l = e.texts,
          s = e.containerRect,
          a = e.charRects,
          h = e.measureRects,
          c = (a || []).filter(function (t) {
            return !(
              !t ||
              "number" != typeof t.left ||
              !((t.width || 0) > 0 || (t.height || 0) > 0)
            );
          });
        if (c.length) {
          var u = c.slice().sort(function (t, e) {
              return (
                parseInt((t.dataset && t.dataset.sidx) || "0", 10) -
                parseInt((e.dataset && e.dataset.sidx) || "0", 10)
              );
            }),
            f = s && "number" == typeof s.left ? s : null,
            d = f
              ? f.left
              : Math.min.apply(
                  Math,
                  t(
                    u.map(function (t) {
                      return t.left;
                    })
                  )
                ),
            p = f
              ? "number" == typeof f.right
                ? f.right
                : f.left + (f.width || 0)
              : Math.max.apply(
                  Math,
                  t(
                    u.map(function (t) {
                      return "number" == typeof t.right
                        ? t.right
                        : t.left + (t.width || 0);
                    })
                  )
                ),
            m = u
              .map(function (t) {
                return t.top;
              })
              .filter(function (t) {
                return "number" == typeof t;
              })
              .sort(function (t, e) {
                return t - e;
              }),
            g = [];
          m.forEach(function (t) {
            var e = g[g.length - 1];
            (void 0 === e || Math.abs(t - e) > 2) && g.push(t);
          });
          for (var x = 0, v = 1; v < g.length; v += 1) {
            var y = g[v] - g[v - 1];
            y > 0 && (0 === x || y < x) && (x = y);
          }
          if (!x) {
            var b = u
              .map(function (t) {
                return t.height || (t.bottom || 0) - (t.top || 0);
              })
              .filter(function (t) {
                return t > 0;
              });
            x = b.length ? Math.min.apply(Math, t(b)) : 22;
          }
          for (
            var M = function (t) {
                return (
                  ("number" == typeof t.bottom
                    ? t.bottom
                    : t.top + (t.height || 0)) -
                    t.top >=
                  1.6 * x
                );
              },
              S = function (t) {
                for (var e = t - 1; e >= 0; e -= 1) if (!M(u[e])) return u[e];
                return null;
              },
              T = function (t) {
                for (var e = 0; e < u.length; e += 1) {
                  var n = u[e];
                  if (!M(n) && Math.abs(n.top - t) <= 2) return n;
                }
                return null;
              },
              A = d,
              I = g.length
                ? g[0]
                : u[0] && "number" == typeof u[0].top
                ? u[0].top
                : null,
              R = 1 / 0,
              w = 0;
            w < u.length;
            w += 1
          ) {
            var H = u[w];
            M(H) ||
              ("number" == typeof I && Math.abs(H.top - I) > 2) ||
              ("number" == typeof H.left && H.left < R && (R = H.left));
          }
          R !== 1 / 0 && (A = R);
          var k = null;
          if (h && h.length >= 2) {
            var C = h[0].left,
              P = h.map(function (t) {
                return t.left - C;
              }),
              E = h.map(function (t) {
                return (
                  ("number" == typeof t.right
                    ? t.right
                    : t.left + (t.width || 0)) - C
                );
              });
            k = { L: P, R: E, count: h.length };
          }
          var $ = function (t, e) {
              for (
                var n = t.top,
                  i =
                    "number" == typeof t.bottom
                      ? t.bottom
                      : t.top + (t.height || 0),
                  r = t.left,
                  o =
                    "number" == typeof t.right
                      ? t.right
                      : t.left + (t.width || 0),
                  l = -1,
                  s = -1,
                  a = 0;
                a < g.length;
                a += 1
              ) {
                var h = g[a];
                -1 === l && n <= h + 2 && (l = a), i > h + 2 && (s = a);
              }
              if (
                (l < 0 && (l = 0), s < l && (s = l), e === u.length - 1 && M(t))
              ) {
                var c = (function (t, e, n, i, r) {
                  if (!k || k.count !== i.length || i.length < 2) return null;
                  var o = k,
                    l = o.L,
                    s = o.R,
                    a = A,
                    h = S(r);
                  if (h && "number" == typeof h.right) {
                    for (
                      var c = g.length ? g[0] : e, u = 0;
                      u < g.length;
                      u += 1
                    )
                      g[u] <= e + 2 && (c = g[u]);
                    a = Math.abs(h.top - c) <= 2 ? h.right : A;
                  }
                  for (var f = g.length ? g[0] : e, d = 0; d < g.length; d += 1)
                    g[d] <= e + 2 && (f = g[d]);
                  var m = T(f),
                    v = m
                      ? ("number" == typeof m.bottom
                          ? m.bottom
                          : m.top + (m.height || 0)) - m.top
                      : x;
                  if (v <= 0) return null;
                  for (var y = [], b = 0, M = 0; b < i.length; ) {
                    var I = 0 === M ? p - a : p - A;
                    if (I <= 0) return null;
                    for (
                      var R = b;
                      R + 1 < i.length && s[R + 1] - l[b] <= I + 0.5;

                    )
                      R += 1;
                    if (
                      (y.push({ start: b, end: R }),
                      (b = R + 1),
                      (M += 1) > i.length)
                    )
                      return null;
                  }
                  if (y.length < 2) return null;
                  var w = [];
                  return (
                    y.forEach(function (t, i) {
                      var r,
                        o,
                        h,
                        c,
                        u = 0 === i,
                        f = i === y.length - 1;
                      if (2 === y.length)
                        (r = u ? e : n - v), (o = u ? e + v : n);
                      else {
                        var d = (n - e - 2 * v) / (y.length - 2);
                        (r = u ? e : f ? n - v : e + v + d * (i - 1)),
                          (o = u ? e + v : f ? n : e + v + d * i);
                      }
                      if (u) (h = a), (c = p);
                      else if (f) {
                        h = A;
                        var m = s[t.end] - l[t.start];
                        c = Math.min(p, Math.max(A + 1, A + m));
                      } else (h = A), (c = p);
                      w.push({ left: h, top: r, right: c, bottom: o });
                    }),
                    w
                  );
                })(0, n, i, (t.dataset && t.dataset.text) || "", e);
                if (c) return c;
              }
              if (l === s) return [{ left: r, top: n, right: o, bottom: i }];
              var f = r,
                d = o,
                m = S(e),
                v = (function (t) {
                  for (var e = t + 1; e < u.length; e += 1)
                    if (!M(u[e])) return u[e];
                  return null;
                })(e);
              if (m && "number" == typeof m.right) {
                var y = g[l];
                f = Math.abs(m.top - y) <= 2 ? m.right : A;
              } else f = A;
              if (v && "number" == typeof v.left) {
                var b = g[s];
                d = Math.abs(v.top - b) <= 2 ? v.left : p;
              } else d = p;
              for (var I = [], R = l; R <= s; R += 1) {
                var w = g[R],
                  H = T(w),
                  C = void 0,
                  P = void 0,
                  E = void 0,
                  $ = void 0;
                H
                  ? ((C = H.top),
                    (P =
                      "number" == typeof H.bottom
                        ? H.bottom
                        : H.top + (H.height || x)))
                  : ((C = w), (P = w + x)),
                  R === l
                    ? ((E = f), ($ = p))
                    : R === s
                    ? ((E = A), ($ = d))
                    : ((E = A), ($ = p)),
                  I.push({ left: E, top: C, right: $, bottom: P });
              }
              return I;
            },
            D = u.map(function (t, e) {
              var n = parseInt(t.dataset && t.dataset.sidx, 10),
                i = Number.isFinite(n) ? n : e;
              return {
                sidx: i,
                text: (t.dataset && t.dataset.text) || l[i] || "",
                rects: $(t, e),
              };
            });
          (this.containerRect = s || null),
            (this.paragraphSentences = D),
            (this.currentPid = i);
          var O = this.findUnitIndexByPoint(r, o);
          O < 0 ||
            ((this.startIdx = O),
            (this.endIdx = O),
            (this.hasSelection = !0),
            (this.showSelectionHandles = !0),
            (this.menuVisible = !1),
            this.refreshHighlight(),
            this.$nextTick(function () {
              n.refreshMenuPosition();
            }));
        }
      },
      findUnitIndexByPoint: function (t, e) {
        for (var n = this.paragraphSentences, i = 0; i < n.length; i += 1)
          for (
            var r = n[i], o = (r && r.rects) || [], l = 0;
            l < o.length;
            l += 1
          ) {
            var s = o[l];
            if (t >= s.left && t <= s.right && e >= s.top && e <= s.bottom)
              return i;
          }
        for (var a = -1, h = 1 / 0, c = 0; c < n.length; c += 1)
          for (
            var u = n[c], f = (u && u.rects) || [], d = 0;
            d < f.length;
            d += 1
          ) {
            var p = f[d],
              m =
                4 * (e < p.top ? p.top - e : e > p.bottom ? e - p.bottom : 0) +
                (t < p.left ? p.left - t : t > p.right ? t - p.right : 0);
            m < h && ((h = m), (a = c));
          }
        return a;
      },
      refreshHighlight: function () {
        if (
          !this.paragraphSentences.length ||
          this.startIdx < 0 ||
          this.endIdx < 0
        )
          this.highlightRects = [];
        else {
          for (
            var t = Math.min(this.startIdx, this.endIdx),
              e = Math.max(this.startIdx, this.endIdx),
              n = [],
              i = t;
            i <= e;
            i += 1
          ) {
            var r = this.paragraphSentences[i];
            r &&
              (r.rects || []).forEach(function (t) {
                n.push({
                  left: t.left,
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                });
              });
          }
          n.sort(function (t, e) {
            return t.top - e.top || t.left - e.left;
          });
          var o = [];
          n.forEach(function (t) {
            var e = t.bottom - t.top,
              n = o.find(function (n) {
                var i = Math.min(n.bottom, t.bottom) - Math.max(n.top, t.top),
                  r = Math.min(n.bottom - n.top, e);
                return i > 0 && i / r > 0.6;
              });
            n
              ? ((n.left = Math.min(n.left, t.left)),
                (n.right = Math.max(n.right, t.right)),
                (n.top = Math.min(n.top, t.top)),
                (n.bottom = Math.max(n.bottom, t.bottom)))
              : o.push(h({}, t));
          }),
            o.sort(function (t, e) {
              return t.top - e.top;
            });
          for (var l = 1; l < o.length; l += 1) {
            var s = o[l - 1],
              a = o[l];
            if (a.top < s.bottom) {
              var c = (s.bottom + a.top) / 2;
              (s.bottom = c), (a.top = c);
            }
          }
          this.highlightRects = o.map(function (t) {
            return {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            };
          });
        }
      },
      refreshMenuPosition: function () {
        this.highlightRects.length
          ? this.computeMenuLayout()
          : (this.menuVisible = !1);
      },
      computeMenuLayout: function () {
        var e = this;
        if (this.highlightRects.length) {
          this.menuMeasureToken += 1;
          var n = this.menuMeasureToken;
          this.menuMeasureTimer &&
            (clearTimeout(this.menuMeasureTimer),
            (this.menuMeasureTimer = null));
          var i = function () {
              return (
                n === e.menuMeasureToken &&
                e.hasSelection &&
                e.highlightRects.length > 0
              );
            },
            r = 375,
            o = 667;
          try {
            var l =
              void 0 !== c.index && c.index.getSystemInfoSync
                ? c.index.getSystemInfoSync()
                : void 0 !== c.wx$1 && c.wx$1.getSystemInfoSync
                ? c.wx$1.getSystemInfoSync()
                : null;
            l &&
              ((r = l.windowWidth || l.screenWidth || r),
              (o = l.windowHeight || l.screenHeight || o));
          } catch (t) {}
          var s = function (n, l) {
              if (i()) {
                var s,
                  a = 10,
                  h =
                    (Math.min.apply(
                      Math,
                      t(
                        e.highlightRects.map(function (t) {
                          return t.left;
                        })
                      )
                    ) +
                      Math.max.apply(
                        Math,
                        t(
                          e.highlightRects.map(function (t) {
                            return t.left + t.width;
                          })
                        )
                      )) /
                    2;
                (s = h <= r / 2 ? 32 : r - n - 32) < a && (s = a);
                var c = Math.max(16, n - 16),
                  u = h - s;
                (u = Math.min(Math.max(u, 16), c)), (e.arrowOffset = u - 10);
                var f = e.highlightRects[0],
                  d = e.highlightRects[e.highlightRects.length - 1],
                  p = f.top,
                  m = d.top + d.height,
                  g = m - p,
                  x = Math.max(p, 0),
                  v = Math.min(m, o),
                  y = x - l - 8;
                if (y < a)
                  if (g >= o / 2) y = a;
                  else {
                    var b = v + 8;
                    y = b + l + a <= o ? b : a;
                  }
                else y + l > o - a && (y = o - l - a);
                (e.menuPosition = { x: s, y: y }), (e.menuVisible = !0);
              }
            },
            a = 96 * this.items.length + 32;
          if (this.menuRealWidth && this.menuRealHeight)
            s(this.menuRealWidth, this.menuRealHeight);
          else {
            var h = null;
            if (
              (void 0 !== c.index && c.index.createSelectorQuery
                ? (h = c.index.createSelectorQuery.bind(c.index))
                : void 0 !== c.wx$1 &&
                  c.wx$1.createSelectorQuery &&
                  (h = c.wx$1.createSelectorQuery.bind(c.wx$1)),
              h)
            ) {
              (this.menuPosition = { x: -9999, y: -9999 }),
                (this.menuVisible = !0);
              this.$nextTick(function () {
                !(function t(n) {
                  if (i()) {
                    var r = h(),
                      o = r.in ? r.in(e) : r;
                    o
                      .select(".text-selection-overlay-mp__menu-content")
                      .boundingClientRect(),
                      o.exec(function (r) {
                        if (i()) {
                          var o = (r && r[0]) || null;
                          if (o && o.width && o.height)
                            return (
                              (e.menuRealWidth = o.width),
                              (e.menuRealHeight = o.height + 10),
                              void s(e.menuRealWidth, e.menuRealHeight)
                            );
                          if (n < 2) {
                            var l = 16 * (n + 1);
                            e.menuMeasureTimer = setTimeout(function () {
                              (e.menuMeasureTimer = null), t(n + 1);
                            }, l);
                          } else s(a, 64);
                        }
                      });
                  }
                })(0);
              });
            } else s(a, 64);
          }
        }
      },
      selectAll: function () {
        var t = this;
        this.currentCtx &&
          "function" == typeof this.currentCtx.resetCharMode &&
          this.currentCtx.resetCharMode(),
          (this.currentCtx = null),
          this.selectAllDebounceTimer &&
            (clearTimeout(this.selectAllDebounceTimer),
            (this.selectAllDebounceTimer = null)),
          (this.selectAllToken += 1);
        var e = this.selectAllToken;
        (this.selectAllBuffer = []),
          (this.selectAllReceivedPids = {}),
          this.$nextTick(function () {
            u.BUS.$emit("news-selectAll-query", { token: e }),
              (t.selectAllDebounceTimer = setTimeout(function () {
                t.finalizeSelectAll(e);
              }, 600));
          });
      },
      onSelectAllResult: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.token,
          i = e.paragraphId,
          r = e.itemIndex,
          o = e.sentences;
        n === this.selectAllToken &&
          i &&
          (this.selectAllReceivedPids[i] ||
            ((this.selectAllReceivedPids[i] = !0),
            this.selectAllBuffer.push({ itemIndex: r, sentences: o }),
            this.selectAllDebounceTimer &&
              clearTimeout(this.selectAllDebounceTimer),
            (this.selectAllDebounceTimer = setTimeout(function () {
              t.finalizeSelectAll(n);
            }, 120))));
      },
      snapParagraphRectsToLineGrid: function (t) {
        var e = Array.isArray(t) ? t : [],
          n = [];
        if (
          (e.forEach(function (t) {
            ((t && t.rects) || []).forEach(function (t) {
              t && "number" == typeof t.top && n.push(t.top);
            });
          }),
          n.length < 2)
        )
          return e;
        n.sort(function (t, e) {
          return t - e;
        });
        var o = [];
        return (
          n.forEach(function (t) {
            var e = o[o.length - 1];
            (void 0 === e || Math.abs(t - e) > 2) && o.push(t);
          }),
          o.length < 2
            ? e
            : e.map(function (t) {
                var e,
                  n = ((t && t.rects) || []).map(function (t) {
                    for (
                      var e =
                          "number" == typeof t.bottom
                            ? t.bottom
                            : t.top + (t.height || 0),
                        n = (function (t) {
                          for (
                            var e = 0, n = 0;
                            n < o.length && o[n] <= t + 2;
                            n += 1
                          )
                            e = n;
                          return e;
                        })(t.top),
                        i = n,
                        r = n;
                      r < o.length && o[r] < e - 2;
                      r += 1
                    )
                      i = r;
                    var l = i + 1 < o.length;
                    return {
                      left: t.left,
                      right: t.right,
                      top: o[n],
                      bottom: l ? o[i + 1] : e,
                    };
                  });
                return (e = h({}, t)), i(e, r({ rects: n }));
              })
        );
      },
      finalizeSelectAll: function (t) {
        var e = this;
        if (t === this.selectAllToken) {
          this.selectAllDebounceTimer &&
            (clearTimeout(this.selectAllDebounceTimer),
            (this.selectAllDebounceTimer = null));
          var n = this.selectAllBuffer;
          if (
            ((this.selectAllBuffer = []),
            (this.selectAllReceivedPids = {}),
            n.length)
          ) {
            n.sort(function (t, e) {
              return (t.itemIndex || 0) - (e.itemIndex || 0);
            });
            var i = [];
            n.forEach(function (t) {
              var n = ((t && t.sentences) || []).slice().sort(function (t, e) {
                return (t.sidx || 0) - (e.sidx || 0);
              });
              e.snapParagraphRectsToLineGrid(n).forEach(function (t) {
                t && i.push(t);
              });
            }),
              i.length &&
                ((this.containerRect = null),
                (this.paragraphSentences = i),
                (this.currentPid = "__all__"),
                (this.startIdx = 0),
                (this.endIdx = i.length - 1),
                (this.hasSelection = !0),
                (this.showSelectionHandles = !1),
                (this.menuVisible = !1),
                this.refreshHighlight(),
                this.$nextTick(function () {
                  e.refreshMenuPosition();
                }));
          }
        }
      },
      onHandleTouchStart: function (t, e) {
        (this.activeHandle = t),
          (this.menuVisible = !1),
          (this.selectingHandle = !0),
          this.handleHandleMove(e);
      },
      onHandleTouchMove: function (t) {
        this.activeHandle && this.handleHandleMove(t);
      },
      handleHandleMove: function (t) {
        var e =
          (t && t.touches && t.touches[0]) ||
          (t && t.changedTouches && t.changedTouches[0]);
        if (e) {
          var n = "number" == typeof e.clientX ? e.clientX : e.pageX,
            i = "number" == typeof e.clientY ? e.clientY : e.pageY,
            r = this.findUnitIndexByPoint(n, i);
          if (!(r < 0)) {
            if ("left" === this.activeHandle) {
              var o = Math.max(this.startIdx, this.endIdx);
              (this.startIdx = Math.min(r, o)), (this.endIdx = o);
            } else {
              var l = Math.min(this.startIdx, this.endIdx);
              (this.startIdx = l), (this.endIdx = Math.max(r, l));
            }
            this.refreshHighlight();
          }
        }
      },
      onHandleTouchEnd: function () {
        var t = this,
          e = this.activeHandle;
        (this.activeHandle = ""),
          (this.selectingHandle = !1),
          e &&
            this.$nextTick(function () {
              t.refreshMenuPosition();
            });
      },
      onMenuItemClick: function (t) {
        if ("share" !== t.key)
          if ("selectAll" !== t.key) {
            var e = this.selectedText;
            this.$emit("select", { action: t.key, text: e }),
              this.clearSelection();
          } else this.selectAll();
        else this.clearSelection();
      },
      clearSelection: function () {
        (this.menuMeasureToken += 1),
          this.menuMeasureTimer &&
            (clearTimeout(this.menuMeasureTimer),
            (this.menuMeasureTimer = null)),
          this.currentCtx &&
            "function" == typeof this.currentCtx.resetCharMode &&
            this.currentCtx.resetCharMode(),
          (this.currentCtx = null),
          (this.hasSelection = !1),
          (this.menuVisible = !1),
          (this.showSelectionHandles = !1),
          (this.highlightRects = []),
          (this.startIdx = -1),
          (this.endIdx = -1),
          (this.currentPid = ""),
          (this.paragraphSentences = []);
      },
    },
  }),
  d = c._export_sfc(f, [
    [
      "render",
      function (t, e, n, i, r, o) {
        return c.e(
          { a: t.hasSelection },
          t.hasSelection
            ? c.e(
                {
                  b: c.f(t.highlightRects, function (t, e, n) {
                    return {
                      a: "h" + e,
                      b: t.left + "px",
                      c: t.top + "px",
                      d: t.width + "px",
                      e: t.height + "px",
                    };
                  }),
                  c: t.hasSelection && t.showSelectionHandles,
                },
                t.hasSelection && t.showSelectionHandles
                  ? {
                      d: c.s(t.leftHandleStyle),
                      e: c.o(function (e) {
                        return t.onHandleTouchStart("left", e);
                      }, 3599),
                      f: c.o(function (e) {
                        return t.onHandleTouchMove(e);
                      }, 3600),
                      g: c.o(function () {
                        return (
                          t.onHandleTouchEnd &&
                          t.onHandleTouchEnd.apply(t, arguments)
                        );
                      }, 3601),
                      h: c.o(function () {
                        return (
                          t.onHandleTouchEnd &&
                          t.onHandleTouchEnd.apply(t, arguments)
                        );
                      }, 3602),
                    }
                  : {},
                { i: t.hasSelection && t.showSelectionHandles },
                t.hasSelection && t.showSelectionHandles
                  ? {
                      j: c.s(t.rightHandleStyle),
                      k: c.o(function (e) {
                        return t.onHandleTouchStart("right", e);
                      }, 3603),
                      l: c.o(function (e) {
                        return t.onHandleTouchMove(e);
                      }, 3604),
                      m: c.o(function () {
                        return (
                          t.onHandleTouchEnd &&
                          t.onHandleTouchEnd.apply(t, arguments)
                        );
                      }, 3605),
                      n: c.o(function () {
                        return (
                          t.onHandleTouchEnd &&
                          t.onHandleTouchEnd.apply(t, arguments)
                        );
                      }, 3606),
                    }
                  : {},
                { o: t.menuVisible },
                t.menuVisible
                  ? {
                      p: c.f(t.menuItems, function (e, n, i) {
                        return c.e(
                          { a: "share" === e.key },
                          "share" === e.key
                            ? {
                                b: c.t(e.label),
                                c: t.selectedText || "",
                                d: c.o(
                                  function (n) {
                                    return t.onMenuItemClick(e);
                                  },
                                  3607,
                                  e.key
                                ),
                              }
                            : {
                                e: c.t(e.label),
                                f: c.o(
                                  function (n) {
                                    return t.onMenuItemClick(e);
                                  },
                                  3608,
                                  e.key
                                ),
                              },
                          { g: e.key }
                        );
                      }),
                      q: c.s(t.arrowStyle),
                      r: c.s(t.menuStyle),
                      s: c.o(function () {}, 3609),
                    }
                  : {},
                { t: t.hasSelection },
                t.hasSelection
                  ? {
                      v: c.o(function () {
                        return (
                          t.clearSelection &&
                          t.clearSelection.apply(t, arguments)
                        );
                      }, 3610),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-4d6ba669"],
  ]);
wx.createComponent(d);
