var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../../common/vendor.js"),
  t = [
    0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
  ],
  u = [
    { value: 0.5, major: !0 },
    { value: 0.6, major: !1 },
    { value: 0.7, major: !1 },
    { value: 0.8, major: !1 },
    { value: 0.9, major: !1 },
    { value: 1, major: !0 },
    { value: 1.1, major: !1 },
    { value: 1.2, major: !1 },
    { value: 1.3, major: !1 },
    { value: 1.4, major: !1 },
    { value: 1.5, major: !0 },
    { value: 1.6, major: !1 },
    { value: 1.7, major: !1 },
    { value: 1.8, major: !1 },
    { value: 1.9, major: !1 },
    { value: 2, major: !0 },
  ],
  o = [
    { value: 0.5, text: "0.5" },
    { value: 1, text: "1.0x" },
    { value: 1.5, text: "1.5x" },
    { value: 2, text: "2.0x" },
  ],
  r = a.defineComponent({
    name: "SpeechSpeedSetting",
    props: {
      visible: { type: Boolean, default: !1 },
      playbackRateIndex: { type: Number, default: 1 },
      speechMode: { type: Number, default: 0 },
      voiceMode: { type: Number, default: 0 },
      voices: {
        type: Array,
        default: function () {
          return [];
        },
      },
      hidden: { type: Boolean, default: !1 },
    },
    emits: ["update:visible", "close", "closed", "rate-change", "voice-open"],
    setup: function (r, l) {
      var c = l.emit,
        i = a.ref(!1),
        v = a.ref(""),
        f = a.ref(null),
        s = a.ref(1),
        d = a.ref(u),
        p = a.ref(o),
        h = a.ref(null),
        m = a.ref(null),
        b = a.ref(!1),
        T = a.ref(-1),
        y = a.getCurrentInstance(),
        g = (null == y ? void 0 : y.proxy) || y || null,
        x = a.computed(function () {
          return "".concat(s.value.toFixed(1), "x");
        }),
        R = a.computed(function () {
          return Array.isArray(r.voices) ? r.voices : [];
        }),
        j = a.computed(function () {
          return 0 === R.value.length
            ? [
                {
                  id: "placeholder",
                  name: "阿灿",
                  avatar_url:
                    "https://st.gtimg.com/design/Cf5b22f0c20fE5bAFc7C5ee7Bc24c2e3.png",
                },
              ]
            : 1 === R.value.length
            ? R.value.slice(0, 1)
            : R.value.slice(0, 2);
        }),
        C = a.computed(function () {
          return j.value
            .map(function (e) {
              return e.name || e.nickname || "";
            })
            .filter(function (e) {
              return e;
            })
            .join("+");
        }),
        k = function () {
          f.value && (clearTimeout(f.value), (f.value = null));
        },
        M = function () {
          var e = Number(r.playbackRateIndex);
          Number.isNaN(e) || void 0 === t[e] || (s.value = t[e]);
        },
        w = function (e) {
          var n = 0,
            a = 1 / 0;
          t.forEach(function (t, u) {
            var o = Math.abs(t - e);
            o < a && ((a = o), (n = u));
          }),
            c("rate-change", { rateIndex: n, rate: t[n] });
        },
        N = function (e) {
          if (!e) return null;
          var n = void 0 !== e.clientX ? e.clientX : e.pageX;
          return "number" == typeof n ? n : null;
        },
        S = function (e) {
          var n = m.value;
          if (!n || "number" != typeof e) return -1;
          var a = n.width || 1,
            t = Math.min(1, Math.max(0, (e - n.left) / a)),
            u = d.value.length,
            o = Math.round(t * u - 0.5);
          return Math.min(u - 1, Math.max(0, o));
        },
        L = function (e) {
          if (!(e < 0 || e === T.value)) {
            var n = d.value[e];
            n && ((T.value = e), w(n.value));
          }
        },
        A = function (t) {
          if (
            void 0 !== a.wx$1 &&
            a.wx$1 &&
            "function" == typeof a.wx$1.createSelectorQuery
          )
            try {
              (g && "object" == n(g)
                ? a.wx$1.createSelectorQuery().in(g)
                : a.wx$1.createSelectorQuery()
              )
                .select(".setting-dialog-rate-ruler")
                .boundingClientRect()
                .exec(function (n) {
                  if (n && n[0]) {
                    var a = e(n, 1)[0];
                    if (((m.value = a), "number" == typeof t)) {
                      var u = S(t);
                      L(u);
                    }
                  }
                });
            } catch (e) {}
        };
      return (
        a.watch(
          function () {
            return r.visible;
          },
          function (e) {
            e
              ? (k(),
                M(),
                (i.value = !0),
                (v.value = "fade-enter-active"),
                a.nextTick$1(function () {
                  setTimeout(function () {
                    i.value && A();
                  }, 350);
                }))
              : i.value &&
                ((v.value = "fade-leave-active"),
                k(),
                (f.value = setTimeout(function () {
                  (i.value = !1), (f.value = null), c("closed");
                }, 300)));
          },
          { immediate: !0 }
        ),
        a.watch(
          function () {
            return r.playbackRateIndex;
          },
          function () {
            M();
          }
        ),
        a.onBeforeUnmount(function () {
          k();
        }),
        {
          showDialog: i,
          dialogAnimClass: v,
          currentPlaybackRate: s,
          rateTicks: d,
          rateLabels: p,
          currentRateText: x,
          voiceList: R,
          displayVoices: j,
          displayVoiceName: C,
          rulerRef: h,
          handleClose: function () {
            c("update:visible", !1), c("close");
          },
          noopTouchMove: function () {},
          isCurrentRateLabel: function (e) {
            return Math.abs(s.value - e) < 0.05;
          },
          isCurrentRateTick: function (e) {
            return Math.abs(s.value - e) < 0.05;
          },
          getLabelText: function (e) {
            var n = o.find(function (n) {
              return Math.abs(n.value - e) < 0.05;
            });
            return n ? n.text : "";
          },
          selectPlaybackRate: w,
          openVoiceDialog: function () {
            c("voice-open");
          },
          onRulerTouchStart: function (e) {
            var n =
                (e && e.touches && e.touches[0]) ||
                (e && e.changedTouches && e.changedTouches[0]),
              a = N(n);
            if (null !== a) {
              (b.value = !0), (T.value = -1);
              var t = S(a);
              L(t), A(a);
            }
          },
          onRulerTouchMove: function (e) {
            var n =
                (e && e.touches && e.touches[0]) ||
                (e && e.changedTouches && e.changedTouches[0]),
              a = N(n);
            if (null !== a)
              if (m.value) {
                var t = S(a);
                L(t);
              } else A(a);
          },
          onRulerTouchEnd: function (e) {
            var n =
                (e && e.changedTouches && e.changedTouches[0]) ||
                (e && e.touches && e.touches[0]),
              a = N(n);
            if (null !== a && m.value) {
              var t = S(a);
              L(t);
            }
            setTimeout(function () {
              (b.value = !1), (T.value = -1);
            }, 50);
          },
          onTickClick: function (e) {
            if (!b.value) {
              var n = "string" == typeof e ? parseInt(e, 10) : e,
                a = d.value[n];
              a && w(a.value);
            }
          },
        }
      );
    },
  }),
  l = a._export_sfc(r, [
    [
      "render",
      function (e, n, t, u, o, r) {
        return a.e(
          { a: e.showDialog },
          e.showDialog
            ? {
                b: a.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 5576),
                c: a.t(e.currentRateText),
                d: a.f(e.rateTicks, function (n, t, u) {
                  return a.e(
                    { a: e.getLabelText(n.value) },
                    e.getLabelText(n.value)
                      ? {
                          b: a.t(e.getLabelText(n.value)),
                          c: a.n(e.isCurrentRateLabel(n.value) ? "active" : ""),
                          d: a.o(
                            function (n) {
                              return e.onTickClick(t);
                            },
                            5577,
                            t
                          ),
                        }
                      : {},
                    { e: t }
                  );
                }),
                e: a.f(e.rateTicks, function (n, t, u) {
                  return {
                    a: a.n(n.major ? "major" : ""),
                    b: a.n(e.isCurrentRateTick(n.value) ? "current" : ""),
                    c: t,
                    d: a.o(
                      function (n) {
                        return e.onTickClick(t);
                      },
                      5578,
                      t
                    ),
                  };
                }),
                f: a.o(function () {
                  return (
                    e.onRulerTouchStart &&
                    e.onRulerTouchStart.apply(e, arguments)
                  );
                }, 5579),
                g: a.o(function () {
                  return (
                    e.onRulerTouchMove && e.onRulerTouchMove.apply(e, arguments)
                  );
                }, 5580),
                h: a.o(function () {
                  return (
                    e.onRulerTouchEnd && e.onRulerTouchEnd.apply(e, arguments)
                  );
                }, 5581),
                i: a.o(function () {
                  return (
                    e.onRulerTouchEnd && e.onRulerTouchEnd.apply(e, arguments)
                  );
                }, 5582),
                j: a.t(1 === e.voiceMode ? "双人模式" : "单人模式"),
                k: a.f(e.displayVoices, function (e, n, a) {
                  return {
                    a: e.id || n,
                    b: e.avatar_url || e.avatar || e.face || "",
                  };
                }),
                l: a.t(e.displayVoiceName),
                m: a.o(function () {
                  return (
                    e.openVoiceDialog && e.openVoiceDialog.apply(e, arguments)
                  );
                }, 5583),
                n: a.o(function () {}, 5584),
                o: a.n(e.dialogAnimClass),
                p: a.s(e.hidden ? "display: none;" : ""),
                q: a.o(function () {
                  return e.handleClose && e.handleClose.apply(e, arguments);
                }, 5585),
                r: a.o(function () {
                  return e.noopTouchMove && e.noopTouchMove.apply(e, arguments);
                }, 5586),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9e4aea91"],
  ]);
wx.createComponent(l);
