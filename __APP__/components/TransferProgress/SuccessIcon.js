var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  r = require("../../service/lottie/index.js"),
  a = require("../../utils/getPlatform.js"),
  o = require("../../service/aegis/platform/not-wujie.js"),
  i = n.defineComponent({
    name: "SuccessIcon",
    props: {
      animate: { type: Boolean, default: !1 },
      delay: { type: Number, default: 0 },
    },
    emits: ["animation-complete"],
    setup: function (i, l) {
      var c = l.emit,
        u = "mp-weixin" === a.getPlatform().bizPlatform,
        s = n.getCurrentInstance(),
        p = n.computed(function () {
          return i.animate;
        }),
        d = "success-canvas-"
          .concat(Date.now(), "-")
          .concat(Math.random().toString(36).slice(2, 8)),
        m = null,
        f = n.ref(!1),
        v = null,
        g = null,
        h = null,
        _ = !0;
      function x(e) {
        _ &&
          ((f.value = !0),
          o.aegisReporter.reportEvent("success_icon_lottie_fallback", {
            ext4: e,
          }),
          c("animation-complete"));
      }
      function k() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = t(
          e().mark(function r() {
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (u) {
                      h = setTimeout(function () {
                        _ && !f.value && x("load_timeout");
                      }, 3e3);
                      try {
                        n.index
                          .createSelectorQuery()
                          .in(null == s ? void 0 : s.proxy)
                          .select("#".concat(d))
                          .fields({ node: !0, size: !0 }, function () {})
                          .exec(
                            (function () {
                              var r = t(
                                e().mark(function t(r) {
                                  var a, o, i, l, u, s;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (_ && !f.value) {
                                              e.next = 2;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 2:
                                            if (
                                              null ==
                                              (a = null == r ? void 0 : r[0])
                                                ? void 0
                                                : a.node
                                            ) {
                                              e.next = 4;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              void x("canvas_not_found")
                                            );
                                          case 4:
                                            if (
                                              ((i = r[0].node),
                                              (l = i.getContext("2d")))
                                            ) {
                                              e.next = 7;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              void x("canvas_context_failed")
                                            );
                                          case 7:
                                            return (
                                              (u =
                                                n.index.getSystemInfoSync()
                                                  .pixelRatio || 2),
                                              (i.width = 48 * u),
                                              (i.height = 48 * u),
                                              (e.prev = 9),
                                              (e.next = 12),
                                              m
                                            );
                                          case 12:
                                            (s = e.sent),
                                              null ==
                                                (o =
                                                  null == s
                                                    ? void 0
                                                    : s.setup) || o.call(s, i),
                                              (e.next = 19);
                                            break;
                                          case 16:
                                            return (
                                              (e.prev = 16),
                                              (e.t0 = e.catch(9)),
                                              e.abrupt(
                                                "return",
                                                void x(
                                                  "lottie_setup_error: ".concat(
                                                    String(e.t0)
                                                  )
                                                )
                                              )
                                            );
                                          case 19:
                                            (e.prev = 19),
                                              (v =
                                                (null == s
                                                  ? void 0
                                                  : s.loadAnimation({
                                                      loop: !1,
                                                      autoplay: !1,
                                                      path: "https://st.gtimg.com/image/mp-broker/trade/progress/success-icon.json",
                                                      rendererSettings: {
                                                        context: l,
                                                      },
                                                    })) || null),
                                              (e.next = 26);
                                            break;
                                          case 23:
                                            return (
                                              (e.prev = 23),
                                              (e.t1 = e.catch(19)),
                                              e.abrupt(
                                                "return",
                                                void x(
                                                  "lottie_load_error: ".concat(
                                                    String(e.t1)
                                                  )
                                                )
                                              )
                                            );
                                          case 26:
                                            v
                                              ? (v.addEventListener(
                                                  "data_failed",
                                                  function () {
                                                    _ &&
                                                      !f.value &&
                                                      x("data_failed");
                                                  }
                                                ),
                                                v.addEventListener(
                                                  "complete",
                                                  function () {
                                                    _ &&
                                                      v &&
                                                      !f.value &&
                                                      c("animation-complete");
                                                  }
                                                ),
                                                v.addEventListener(
                                                  "data_ready",
                                                  function () {
                                                    _ &&
                                                      v &&
                                                      !f.value &&
                                                      (h &&
                                                        (clearTimeout(h),
                                                        (h = null)),
                                                      p.value
                                                        ? y()
                                                        : null == v ||
                                                          v.goToAndStop(
                                                            v.totalFrames - 1,
                                                            !0
                                                          ));
                                                  }
                                                ))
                                              : x("lottie_instance_null");
                                          case 27:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [
                                      [9, 16],
                                      [19, 23],
                                    ]
                                  );
                                })
                              );
                              return function (e) {
                                return r.apply(this, arguments);
                              };
                            })()
                          );
                      } catch (e) {
                        x("init_error: ".concat(String(e)));
                      }
                    }
                  case 1:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        )).apply(this, arguments);
      }
      function y() {
        if (_ && v) {
          null == v || v.goToAndStop(0, !0);
          var e = 1e3 * i.delay;
          e > 0
            ? (g = setTimeout(function () {
                null == v || v.play();
              }, e))
            : null == v || v.play();
        }
      }
      return (
        n.watch(p, function (e) {
          u &&
            (e && v
              ? y()
              : !e &&
                v &&
                (g && (clearTimeout(g), (g = null)),
                v &&
                  (null == v || v.stop(),
                  null == v || v.goToAndStop(v.totalFrames - 1, !0))));
        }),
        n.onMounted(function () {
          u && ((m = r.getLottie()), n.nextTick$1(k));
        }),
        n.onBeforeUnmount(function () {
          (_ = !1),
            g && (clearTimeout(g), (g = null)),
            h && (clearTimeout(h), (h = null)),
            v && (null == v || v.destroy(), (v = null));
        }),
        {
          isMiniProgram: u,
          shouldAnimate: p,
          canvasId: d,
          canvasSize: 48,
          isFallback: f,
          FALLBACK_IMG_URL:
            "https://st.gtimg.com/image/mp-broker/trade/transfer/transfer_success.png",
          onCheckAnimationEnd: function () {
            c("animation-complete");
          },
        }
      );
    },
  });
Array || (n.resolveComponent("path") + n.resolveComponent("svg"))();
var l = n._export_sfc(i, [
  [
    "render",
    function (e, t, r, a, o, i) {
      return n.e(
        { a: e.isMiniProgram },
        e.isMiniProgram
          ? n.e(
              {
                b: !e.isFallback,
                c: e.canvasId,
                d: "".concat(e.canvasSize, "px"),
                e: "".concat(e.canvasSize, "px"),
                f: e.isFallback,
              },
              e.isFallback ? { g: e.FALLBACK_IMG_URL } : {}
            )
          : {
              h: n.p({
                d: "M24 1 A23 23 0 1 1 23.99 1",
                stroke: "#1CAA3C",
                "stroke-width": "1",
                fill: "none",
                "stroke-linecap": "round",
              }),
              i: n.o(e.onCheckAnimationEnd),
              j: n.p({
                d: "M17 24.5 L22.25 29 L31 20",
                stroke: "#1CAA3C",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                fill: "none",
              }),
              k: n.p({
                width: "48",
                height: "48",
                viewBox: "-1 -1 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              }),
            },
        { l: e.shouldAnimate ? 1 : "", m: e.isMiniProgram ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-dcc7a258"],
]);
wx.createComponent(l);
