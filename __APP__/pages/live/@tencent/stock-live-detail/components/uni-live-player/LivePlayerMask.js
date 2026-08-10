var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  a = function (e, t, l) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[t] = l);
  },
  u = function (n, u) {
    for (var o in u || (u = {})) l.call(u, o) && a(n, o, u[o]);
    if (t) {
      var i,
        c = e(t(u));
      try {
        for (c.s(); !(i = c.n()).done; ) {
          o = i.value;
          r.call(u, o) && a(n, o, u[o]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return n;
  },
  o = require("../../../../../../common/vendor.js"),
  i = require("../../../stock-news-core/utils/force2https.js"),
  c = {
    components: {
      LiveInfo: function () {
        return "../LiveInfo.js";
      },
    },
    props: {
      curSliderValue: { type: Number, default: 0 },
      playableTime: { type: Number, default: 0 },
      mute: { type: Boolean, default: !1 },
      playStatus: { type: Object, default: null },
      live: { type: Object, default: null },
    },
    setup: function (e, n) {
      var t = n.emit,
        l = o.getCurrentInstance().proxy || o.getCurrentInstance(),
        r = o.ref(!0),
        a = o.ref(!1),
        u = o.ref(!1),
        c = o.ref({
          backgroundColor: "#DCDFE633",
          activeColor: "#ffffff",
          min: 0,
          max: 100,
          showValue: !1,
          blockSize: 14,
        }),
        s = null,
        p = function () {
          clearTimeout(s);
        },
        d = function () {
          (r.value = !0),
            p(),
            (s = setTimeout(function () {
              r.value = !1;
            }, 5e3));
        },
        v = function (e) {
          t("resumePlayerControls", e), r.value ? (r.value = !1) : d();
        };
      o.watch(
        function () {
          var n;
          return null == (n = e.playStatus) ? void 0 : n.type;
        },
        function () {
          if (e.playStatus) {
            var n = e.playStatus.type;
            if (n)
              switch (n) {
                case "play":
                  (a.value = !0), d();
                  break;
                case "pause":
                case "ended":
                  (a.value = !1), (r.value = !0), p();
                  break;
                case "fullscreenchange":
                  void 0 !== e.playStatus.isFullscreen &&
                    ((u.value = e.playStatus.isFullscreen), d());
                  break;
                case "timeupdate":
                  break;
                default:
                  a.value = !1;
              }
          }
        },
        { immediate: !0 }
      );
      var f = o.computed(function () {
          return Math.min(e.curSliderValue, e.playableTime);
        }),
        y = o.computed(function () {
          var e = f.value;
          if (e > 0) {
            var n = "".concat(parseInt(e / 60, 10)),
              t = "".concat(parseInt(e % 60, 10));
            return ""
              .concat(n.padStart(2, "0"), ":")
              .concat(t.padStart(2, "0"));
          }
          return "00:00";
        }),
        m = o.computed(function () {
          if (e.playableTime > 0) {
            var n = "".concat(parseInt(e.playableTime / 60, 10)),
              t = "".concat(parseInt(e.playableTime % 60, 10));
            return ""
              .concat(n.padStart(2, "0"), ":")
              .concat(t.padStart(2, "0"));
          }
          return "00:00";
        }),
        S = o.ref({
          width: "100%",
          dotSize: 14,
          height: 2,
          direction: "ltr",
          min: 0,
          max: 100,
          interval: 1,
          disabled: !1,
          clickable: !0,
          duration: 0.5,
          lazy: !0,
          tooltip: "none",
          useKeyboard: !1,
          order: !0,
          marks: !1,
          process: !0,
          dotStyle: void 0,
          railStyle: { backgroundColor: "#DCDFE633" },
          processStyle: { backgroundColor: "#ffffff" },
        });
      o.watch(
        function () {
          return e.playableTime;
        },
        function () {
          (S.value.max = e.playableTime), (c.value.max = e.playableTime);
        },
        { immediate: !0 }
      );
      var h = 0,
        b = o.computed(function () {
          var n;
          return 22 === (null == (n = e.live) ? void 0 : n.live_status);
        }),
        g = o.StockBridge.ENV === o.EnvTypeEnum.MP,
        C = o.ref(!1);
      return (
        o.onMounted(function () {
          try {
            if (g) {
              var e = getCurrentPages(),
                n = e[e.length - 1].options.__share_flag__;
              C.value = 1 != +n;
            } else {
              var t = l.$route.query.__share_flag__;
              C.value = 1 != +t;
            }
          } catch (e) {
            C.value = !0;
          }
        }),
        o.onUnmounted(function () {
          p();
        }),
        {
          isPlaying: a,
          isFullScreen: u,
          handleSliderTouchEvent: function (e) {
            t("handleSliderTouchEvent", e);
          },
          sliderOptions: c,
          changeSlide: function (e) {
            t("changeSlide", e);
          },
          onMuteChange: function (e) {
            t("onMuteChange", e);
          },
          onFullScreenEvent: function (e) {
            t("onFullScreenEvent", e);
          },
          toggleLivePlayer: function (e) {
            r.value
              ? (t("toggleLivePlayer", e), a.value && ((r.value = !0), p()))
              : d();
          },
          resumePlayerControls: v,
          showPlayerMask: r,
          currentProgress: y,
          playableDuration: m,
          vueSliderOptions: S,
          vueSliderChangeSlide: function (e) {
            (h = e), t("changeSlide", e);
          },
          vueSliderDragEnd: function (e) {
            h ? (t("changeSlide", h), (h = 0)) : t("changeSlide", e);
          },
          isReviewType: b,
          computCurSliderValue: f,
          isMp: g,
          showBackBtn: C,
          onBackBtnClick: function () {
            var e, n;
            r.value
              ? u.value
                ? t("onFullScreenEvent")
                : g
                ? null == (e = o.wx$1) || e.navigateBack()
                : null == (n = l.$router) || n.back()
              : v();
          },
          forceHttpsAdvanced: i.forceHttpsAdvanced,
        }
      );
    },
  };
Array || (o.resolveComponent("LiveInfo") + o.resolveComponent("VueSlider"))();
var s = o._export_sfc(c, [
  [
    "render",
    function (e, n, t, l, r, a) {
      return o.e(
        { a: !l.isPlaying },
        l.isPlaying ? {} : { b: l.forceHttpsAdvanced(t.live.live_public_img) },
        {
          c: l.showBackBtn,
          d: o.o(function () {
            return l.onBackBtnClick && l.onBackBtnClick.apply(l, arguments);
          }, 5183),
          e: t.live,
        },
        t.live ? { f: o.t(t.live.title) } : {},
        {
          g: o.n(l.isFullScreen ? "fullscreen-btn" : ""),
          h: o.n(l.isPlaying ? "btn-pause" : "btn-play"),
          i: o.o(function () {
            return l.toggleLivePlayer && l.toggleLivePlayer.apply(l, arguments);
          }, 5184),
          j: o.n(21 === t.live.live_status ? "live" : "review"),
          k: o.p({ item: t.live }),
          l: !l.isReviewType,
        },
        l.isReviewType
          ? o.e(
              {
                m: o.t(l.currentProgress),
                n: o.n(t.curSliderValue > 6e3 ? "duration-100" : ""),
                o: l.isMp,
              },
              l.isMp
                ? {
                    p: l.sliderOptions.backgroundColor,
                    q: l.sliderOptions.activeColor,
                    r: t.curSliderValue,
                    s: l.sliderOptions.blockSize,
                    t: l.sliderOptions.min,
                    v: l.sliderOptions.max,
                    w: l.sliderOptions.showValue,
                    x: o.o(function () {
                      return l.changeSlide && l.changeSlide.apply(l, arguments);
                    }, 5185),
                  }
                : {
                    y: o.o(l.vueSliderChangeSlide, 5186),
                    z: o.o(l.vueSliderDragEnd, 5187),
                    A: o.p(
                      u({ value: l.computCurSliderValue }, l.vueSliderOptions)
                    ),
                  },
              {
                B: o.o(function () {
                  return (
                    l.handleSliderTouchEvent &&
                    l.handleSliderTouchEvent.apply(l, arguments)
                  );
                }, 5188),
                C: o.o(function () {
                  return (
                    l.handleSliderTouchEvent &&
                    l.handleSliderTouchEvent.apply(l, arguments)
                  );
                }, 5189),
                D: o.o(function () {}, 5190),
                E: o.t(l.playableDuration),
                F: o.n(t.playableTime > 6e3 ? "duration-100" : ""),
                G: o.n(l.isFullScreen ? "fullscreen-controls" : ""),
              }
            )
          : {},
        {
          H: o.n(l.isFullScreen ? "fullscreen-btn" : ""),
          I: o.n(t.mute ? "mute" : "sound"),
          J: o.o(function () {
            return l.onMuteChange && l.onMuteChange.apply(l, arguments);
          }, 5191),
          K: o.n(l.isFullScreen ? "fullscreen-btn" : ""),
          L: o.n(l.isFullScreen ? "exit-full-screen" : "full-screen"),
          M: o.o(function () {
            return (
              l.onFullScreenEvent && l.onFullScreenEvent.apply(l, arguments)
            );
          }, 5192),
          N: o.n(l.showPlayerMask ? "show-mask" : "hide-mask"),
          O: o.o(function () {
            return (
              l.resumePlayerControls &&
              l.resumePlayerControls.apply(l, arguments)
            );
          }, 5193),
        }
      );
    },
  ],
  ["__scopeId", "data-v-74eddbcd"],
]);
wx.createComponent(s);
