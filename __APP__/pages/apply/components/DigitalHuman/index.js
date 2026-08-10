require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../../../stores/apply/useDigitalHuman.js");
require("../../../../service/stat/mp-weixin.js");
var u = require("../../../../service/aegis/platform/not-wujie.js"),
  a = {
    props: { videoId: String },
    setup: function (a) {
      var t = e.storeToRefs(n.useDigitalHuman()),
        o = t.isMuted,
        i = t.isSupportDigitalHuman,
        l = t.soundTips,
        r = n.useDigitalHuman(),
        p = r.handleMute,
        c = r.srcMap,
        s = r.subtitleMap,
        v = e.getCurrentInstance().proxy,
        f = e.ref(""),
        d = e.ref(""),
        y = e.ref(""),
        m = e.ref(!1);
      function T(e) {
        i.value && c[e] && ((y.value = e), (f.value = c[e]), (d.value = s[e]));
      }
      var g = null,
        M = e.ref(!1),
        P = e.ref(!1),
        w = e.ref(null),
        b = e.ref(!1);
      function x(e) {
        u.aegisReporter.reportEvent("MONITOR-APPLY-DIGITALHUMAN-".concat(e), {
          ext2: y.value,
        });
      }
      function H() {
        var e;
        i.value &&
          (null == (e = null == g ? void 0 : g.seek) || e.call(g, 0),
          (P.value = !1),
          (b.value = !1));
      }
      function I() {
        i.value &&
          (H(),
          e.nextTick$1(function () {
            var e;
            null == (e = null == g ? void 0 : g.play) || e.call(g);
          }));
      }
      function h() {
        (l.value = !0), (m.value = !1);
      }
      return (
        e.watchEffect(function () {
          T(a.videoId), (P.value = !1);
        }),
        e.onMounted(function () {
          g = e.wx$1.createVideoContext("video", v);
        }),
        e.onActivated(function () {}),
        e.onPageShow(function () {
          I();
        }),
        {
          playing: M,
          isMuted: o,
          videoPlayer: g,
          src: f,
          subtitle: d,
          play: function () {
            i.value &&
              (b.value
                ? (I(), x("replay"))
                : M.value
                ? (g.pause(), x("pause"))
                : (g.play(), x("play")));
          },
          onPlay: function () {
            (m.value = !0 === o.value && !1 === l.value), (M.value = !0);
          },
          onPause: function (e) {
            M.value = !1;
          },
          onHandleMute: function () {
            m.value && h(), p(), o.value ? x("mute") : x("notMute");
          },
          onEnded: function (e) {
            x("playEnded"), (b.value = !0);
          },
          replay: function () {
            i.value && g.play();
          },
          pause: function () {
            i.value && g.pause();
          },
          onTimeupdate: function (e) {
            e.detail.currentTime > 0 && !P.value && (P.value = !0);
          },
          coverremove: P,
          videoRef: w,
          setVideoById: T,
          resetVideo: H,
          isPlayEnded: function () {
            return b.value;
          },
          showTips: m,
          onClickTips: h,
        }
      );
    },
  },
  t = e._export_sfc(a, [
    [
      "render",
      function (n, u, a, t, o, i) {
        return e.e(
          {
            a: t.isMuted,
            b: t.src,
            c: e.o(function () {
              return t.onPlay && t.onPlay.apply(t, arguments);
            }),
            d: e.o(function () {
              return t.onPause && t.onPause.apply(t, arguments);
            }),
            e: e.o(function () {
              return t.play && t.play.apply(t, arguments);
            }),
            f: e.o(function () {
              return t.onEnded && t.onEnded.apply(t, arguments);
            }),
            g: e.o(function () {
              return t.onTimeupdate && t.onTimeupdate.apply(t, arguments);
            }),
            h: !t.coverremove,
          },
          (t.coverremove, {}),
          {
            i: e.t(t.subtitle),
            j: e.n(t.isMuted ? "mute-btn" : "not-mute-btn"),
            k: e.o(function () {
              return t.onHandleMute && t.onHandleMute.apply(t, arguments);
            }),
            l: e.n(t.playing ? "" : "play-btn"),
            m: e.o(function () {
              return t.play && t.play.apply(t, arguments);
            }),
            n: !t.playing,
          },
          (t.playing, {}),
          { o: t.showTips },
          t.showTips
            ? {
                p: e.o(function () {
                  return t.onClickTips && t.onClickTips.apply(t, arguments);
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-7baf993a"],
  ]);
wx.createComponent(t);
