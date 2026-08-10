var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js"),
  n = require("../prefetch.js"),
  a = "anchor_tip_close_count",
  o = 3.5,
  u = t.defineComponent({
    name: "AnchorTip",
    props: {
      symbol: { type: String, default: "" },
      position: { type: Object, required: !0 },
      text: { type: String, default: "" },
      autoCloseTime: { type: Number, default: 6e3 },
      bubbleOffset: {
        type: Object,
        default: function () {
          return { x: 20, y: 36 };
        },
      },
      anchorCorner: { type: String, default: "top-right" },
      containerWidth: { type: Number, default: 0 },
    },
    emits: ["close"],
    setup: function (u, i) {
      var r,
        c,
        l = this,
        s = i.emit,
        v = t.ref(null),
        f = t.ref(null),
        d = t.ref("entering"),
        p = null,
        m = null,
        h = null,
        x = null,
        y = null,
        g = t.StockBridge.ENV === t.EnvTypeEnum.MP,
        b = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        w = t.ref(t.StockBridge.getStorage(a));
      (w.value && w.value.date === n.getTodayKey()) ||
        (w.value = { date: n.getTodayKey(), count: 0 });
      var S = "anchor-tip-canvas-".concat(Date.now()),
        T = null,
        _ = null,
        C = g
          ? (null == (c = (r = t.wx$1).getSystemInfoSync)
              ? void 0
              : c.call(r).pixelRatio) || 3
          : window.devicePixelRatio || 3,
        k = t.ref(0),
        R = t.ref(0),
        I = t.ref(0),
        D = t.ref(0),
        M = t.computed(function () {
          return u.anchorCorner.startsWith("top");
        }),
        P = t.ref(0),
        q = t.computed(function () {
          if (!u.containerWidth || !P.value) return 0;
          var e = P.value / 2,
            t = u.position.x,
            n = u.containerWidth;
          return t < e ? e - t : n - t < e ? -(e - (n - t)) : 0;
        }),
        B = t.computed(function () {
          return {
            "anchor-tip--entering": "entering" === d.value,
            "anchor-tip--entered": "entered" === d.value,
            "anchor-tip--exiting": "exiting" === d.value,
            "anchor-tip--exited": "exited" === d.value,
          };
        }),
        N = t.computed(function () {
          return {
            position: "absolute",
            left: "".concat(u.position.x + 4, "px"),
            top: "".concat(u.position.y, "px"),
            zIndex: 100,
          };
        }),
        O = t.computed(function () {
          return u.bubbleOffset.y;
        }),
        W = t.computed(function () {
          return 9;
        }),
        j = t.computed(function () {
          return O.value + o + 1;
        }),
        A = t.computed(function () {
          var e = {
            position: "absolute",
            width: "".concat(W.value, "px"),
            height: "".concat(j.value, "px"),
            pointerEvents: "none",
            left: -W.value / 2 + "px",
          };
          return M.value ? (e.top = "-4.5px") : (e.bottom = "-4.5px"), e;
        }),
        E = t.computed(function () {
          var e = "calc(-50% + ".concat(q.value, "px)"),
            t = 8 * (1 - I.value) + "px",
            n = {
              position: "absolute",
              opacity: "".concat(I.value),
              left: "0",
              transform: "translateX("
                .concat(e, ") translateY(")
                .concat(t, ")"),
            };
          return (
            M.value
              ? (n.top = "".concat(u.bubbleOffset.y, "px"))
              : (n.bottom = "".concat(u.bubbleOffset.y, "px")),
            n
          );
        }),
        $ = t.computed(function () {
          var e = 360 * D.value;
          return {
            background: "conic-gradient("
              .concat("#98a0b3", " ")
              .concat(e, "deg, transparent ")
              .concat(e, "deg)"),
          };
        }),
        z = function () {
          var e = W.value / 2;
          return M.value ? { x: e, y: 4.5 } : { x: e, y: j.value - o - 1 };
        },
        K = function () {
          T &&
            (T.clearRect(0, 0, W.value, j.value),
            k.value > 0 &&
              (function (e, t) {
                var n = z(),
                  a = Math.max(0, o * t);
                a > 0 &&
                  (e.beginPath(),
                  e.arc(n.x, n.y, a, 0, 2 * Math.PI),
                  (e.fillStyle = "rgba(38, 46, 64, 0.4)"),
                  e.fill());
              })(T, k.value),
            R.value > 0 &&
              (function (e, t) {
                if (!(t <= 0)) {
                  var n = (function () {
                      var e = z(),
                        t = W.value / 2;
                      return M.value
                        ? {
                            start: { x: t, y: e.y + o },
                            end: { x: t, y: j.value },
                          }
                        : { start: { x: t, y: e.y - o }, end: { x: t, y: 0 } };
                    })(),
                    a = n.start,
                    u = n.end,
                    i = Math.min(1, Math.max(0, t)),
                    r = a.y + (u.y - a.y) * i;
                  e.beginPath(),
                    (e.strokeStyle = "rgba(38, 46, 64, 0.4)"),
                    (e.lineWidth = 1),
                    e.setLineDash([3, 3]),
                    (e.lineCap = "round"),
                    e.moveTo(a.x, a.y),
                    e.lineTo(a.x, r),
                    e.stroke(),
                    e.setLineDash([]);
                }
              })(T, R.value));
        },
        L = function (e) {
          return 1 - Math.pow(1 - e, 3);
        },
        Q = function (e) {
          return Math.pow(e, 3);
        },
        U = function () {
          m && (clearTimeout(m), (m = null));
        },
        V = function () {
          h && (clearTimeout(h), (h = null));
        },
        X = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Y(),
            U(),
            V(),
            (function (e) {
              d.value = "exiting";
              var t = Date.now(),
                n = 200,
                a = 250;
              !(function o() {
                var u = Date.now() - t;
                if (((I.value = u < n ? 1 - Q(u / n) : 0), u > 200)) {
                  var i = u - 200;
                  R.value = i < a ? 1 - Q(i / a) : 0;
                }
                if (u > 450) {
                  var r = u - 450;
                  k.value = r < 200 ? 1 - Q(r / 200) : 0;
                }
                K(),
                  u < 650
                    ? (m = setTimeout(o, 16))
                    : ((d.value = "exited"), e());
              })();
            })(function () {
              t.StockBridge.mtaReport({
                busi: "hq",
                eventName: "mins_anchor_".concat(
                  e ? "auto_close" : "close",
                  "_click"
                ),
                params: { related_stockid: u.symbol },
              }),
                e ||
                  ((w.value.count += 1), t.StockBridge.setStorage(a, w.value)),
                s("close", e);
            });
        },
        Y = function () {
          p && (clearTimeout(p), (p = null));
        };
      return (
        t.onMounted(function () {
          return (
            (n = l),
            null,
            (a = e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = w.value.count >= 2), e.t0)) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 4), t.nextTick$1();
                    case 4:
                      !(function () {
                        if (g)
                          t.wx$1
                            .createSelectorQuery()
                            .in(b)
                            .select("#".concat(S))
                            .fields({ node: !0, size: !0 })
                            .exec(function (e) {
                              var t;
                              (null == (t = null == e ? void 0 : e[0])
                                ? void 0
                                : t.node) &&
                                ((_ = e[0].node),
                                (T = _.getContext("2d")),
                                (_.width = W.value * C),
                                (_.height = j.value * C),
                                T.scale(C, C));
                            });
                        else if (f.value) {
                          var e = f.value;
                          (T = e.getContext("2d")),
                            (e.width = W.value * C),
                            (e.height = j.value * C),
                            (e.style.width = "".concat(W.value, "px")),
                            (e.style.height = "".concat(j.value, "px")),
                            null == T || T.scale(C, C);
                        }
                      })(),
                        g
                          ? t.wx$1
                              .createSelectorQuery()
                              .in(b)
                              .select("#anchor-tip__content")
                              .boundingClientRect(function (e) {
                                (null == e ? void 0 : e.width) &&
                                  (P.value = e.width);
                              })
                              .exec()
                          : v.value && (P.value = v.value.offsetWidth),
                        (x = setTimeout(function () {
                          (function () {
                            d.value = "entering";
                            var e = Date.now(),
                              t = 200,
                              n = 300;
                            !(function a() {
                              var o = Date.now() - e;
                              if (((k.value = o < t ? L(o / t) : 1), o > 200)) {
                                var u = o - 200;
                                R.value = u < n ? L(u / n) : 1;
                              }
                              if (o > 500) {
                                var i = o - 500;
                                I.value = i < 250 ? L(i / 250) : 1;
                              }
                              K(),
                                o < 750
                                  ? (m = setTimeout(a, 16))
                                  : (d.value = "entered");
                            })();
                          })(),
                            (y = setTimeout(function () {
                              u.autoCloseTime > 0 &&
                                ((function () {
                                  if (!(u.autoCloseTime <= 0)) {
                                    var e = Date.now(),
                                      t = u.autoCloseTime;
                                    !(function n() {
                                      var a = Date.now() - e,
                                        o = Math.min(1, a / t);
                                      (D.value = o),
                                        o < 1 && (h = setTimeout(n, 16));
                                    })();
                                  }
                                })(),
                                (p = setTimeout(function () {
                                  X(!0);
                                }, u.autoCloseTime))),
                                t.StockBridge.mtaReport({
                                  busi: "hq",
                                  eventName: "mins_anchor_tip_brow",
                                  params: { related_stockid: u.symbol },
                                  exposure: {
                                    selector: ".anchor-tip__canvas",
                                    context: b,
                                  },
                                });
                            }, 750));
                        }, 50));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, t) {
              var o = function (e) {
                  try {
                    i(a.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                u = function (e) {
                  try {
                    i(a.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(o, u);
                };
              i((a = a.apply(n, null)).next());
            })
          );
          var n, a;
        }),
        t.onBeforeUnmount(function () {
          Y(),
            U(),
            V(),
            x && (clearTimeout(x), (x = null)),
            y && (clearTimeout(y), (y = null));
        }),
        t.onDeactivated(function () {
          Y(),
            U(),
            V(),
            x && (clearTimeout(x), (x = null)),
            y && (clearTimeout(y), (y = null)),
            (d.value = "exited"),
            s("close", !0);
        }),
        {
          contentRef: v,
          canvasRef: f,
          isMP: g,
          canvasId: S,
          animationClass: B,
          containerStyle: N,
          canvasStyle: A,
          contentStyle: E,
          progressRingStyle: $,
          handleClose: X,
          handleAIClick: function () {
            t.StockBridge.mtaReport({
              busi: "hq",
              eventName: "mins_anchor_ai_click",
              params: { related_stockid: u.symbol },
            }),
              s("aiClick");
          },
        }
      );
    },
  }),
  i = t._export_sfc(u, [
    [
      "render",
      function (e, n, a, o, u, i) {
        return {
          a: e.canvasId,
          b: t.s(e.canvasStyle),
          c: t.t(e.text),
          d: t.o(function () {
            return e.handleAIClick && e.handleAIClick.apply(e, arguments);
          }, 6015),
          e: t.s(e.progressRingStyle),
          f: t.o(function (t) {
            return e.handleClose();
          }, 6016),
          g: t.s(e.contentStyle),
          h: t.n(e.animationClass),
          i: t.s(e.containerStyle),
        };
      },
    ],
    ["__scopeId", "data-v-cfdf4807"],
  ]);
wx.createComponent(i);
