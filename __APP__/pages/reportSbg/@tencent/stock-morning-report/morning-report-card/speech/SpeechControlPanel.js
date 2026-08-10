require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  l = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, a, n) {
    return a in e
      ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[a] = n);
  },
  v = function (e, a) {
    for (var t in a || (a = {})) o.call(a, t) && i(e, t, a[t]);
    if (r) {
      var l,
        u = n(r(a));
      try {
        for (u.s(); !(l = u.n()).done; ) {
          t = l.value;
          c.call(a, t) && i(e, t, a[t]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  s = function (e, a, n) {
    return new Promise(function (t, l) {
      var u = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            l(e);
          }
        },
        r = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            l(e);
          }
        },
        o = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(u, r);
        };
      o((n = n.apply(e, a)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  f = require("../../morning-report-card.js"),
  p = require("../../../../js-cookie/src/js.cookie.js");
function h(n) {
  var t = this,
    l = n.getNewsId,
    u = n.getNewsTitle,
    r = n.playerStatus,
    o = n.currentTime,
    c = n.duration,
    i = n.currentPlaybackRateIndex,
    p = n.activeSpeechMode,
    h = n.voiceMode,
    g = n.currentVoiceIds,
    S = n.availableVoices,
    y = n.isSeeking,
    m = n.isLoading,
    P = d.ref(null),
    T = d.ref(""),
    A = d.ref(""),
    _ = d.ref([]),
    E = d.ref(null),
    b = d.ref(!1),
    k = d.ref(!1),
    w = d.ref(null);
  d.ref(null), d.ref(null);
  var I = d.ref(null),
    R = d.ref(0),
    M = d.ref(null),
    N = d.ref(null),
    C = d.ref(null),
    V = d.ref(!1),
    x = function () {
      M.value && (clearInterval(M.value), (M.value = null));
    },
    L = function () {
      var e,
        a,
        n,
        t,
        l,
        u,
        r = w.value,
        o = I.value;
      if (r && o) {
        try {
          null == (e = r.offCanplay) || e.call(r, o.onCanplay);
        } catch (e) {}
        try {
          null == (a = r.offPlay) || a.call(r, o.onPlay);
        } catch (e) {}
        try {
          null == (n = r.offPause) || n.call(r, o.onPause);
        } catch (e) {}
        try {
          null == (t = r.offStop) || t.call(r, o.onStop);
        } catch (e) {}
        try {
          null == (l = r.offEnded) || l.call(r, o.onEnded);
        } catch (e) {}
        try {
          null == (u = r.offError) || u.call(r, o.onError);
        } catch (e) {}
        I.value = null;
      }
    },
    Y = function () {
      var e, a;
      if ((x(), w.value)) {
        L();
        try {
          null == (a = (e = w.value).stop) || a.call(e);
        } catch (e) {}
        w.value = null;
      }
      (r.value = f.SPEECH_PLAYING_STATUS.READY),
        (o.value = 0),
        (b.value = !1),
        (V.value = !1);
    },
    D = function () {
      if (w.value) {
        var e = w.value;
        if (V.value || r.value === f.SPEECH_PLAYING_STATUS.READY) {
          V.value = !1;
          try {
            (e.title = A.value || u() || "微证券 AI 播客"),
              (e.coverImgUrl =
                "https://st.gtimg.com/design/aa64dcfe48029caff7e3c7262e3cd220.png");
            var a = f.PLAYBACK_RATE[i.value];
            void 0 !== a && (e.playbackRate = a), (e.src = T.value);
          } catch (e) {}
          return;
        }
        e.play();
      }
    },
    U = function () {
      var e,
        a,
        n,
        t,
        l,
        v,
        s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        p = Math.max(0, Number(s.startAtMs) || 0),
        h = !1 !== s.autoPlay,
        g = d.wx$1.getBackgroundAudioManager();
      (w.value = g), L(), (R.value += 1);
      var S = R.value;
      (g.title = A.value || u() || "微证券 AI 播客"),
        (g.coverImgUrl =
          "https://st.gtimg.com/design/aa64dcfe48029caff7e3c7262e3cd220.png");
      var P = 0 === p,
        _ = h,
        E = function () {
          var e;
          if (!P) {
            P = !0;
            try {
              null == (e = g.seek) || e.call(g, p / 1e3);
            } catch (e) {}
          }
        },
        b = function () {
          var e;
          if (!_) {
            _ = !0;
            try {
              null == (e = g.pause) || e.call(g);
            } catch (e) {}
          }
        },
        k = f.PLAYBACK_RATE[i.value];
      if (void 0 !== k)
        try {
          g.playbackRate = k;
        } catch (e) {}
      g.src = T.value;
      var N = function () {
          return S !== R.value;
        },
        C = function () {
          N() || ((m.value = !1), E(), b());
        },
        Y = function () {
          N() ||
            ((m.value = !1),
            (V.value = !1),
            (r.value = f.SPEECH_PLAYING_STATUS.PLAYING),
            x(),
            (M.value = setInterval(function () {
              w.value &&
                (y.value ||
                  (o.value = Math.floor(1e3 * (w.value.currentTime || 0))),
                w.value.duration &&
                  (c.value = Math.floor(1e3 * w.value.duration)));
            }, 500)),
            E(),
            b());
        },
        D = function () {
          N() || ((r.value = f.SPEECH_PLAYING_STATUS.PAUSE), x());
        },
        U = function () {
          N() || ((r.value = f.SPEECH_PLAYING_STATUS.PAUSE), x());
        },
        H = function () {
          N() ||
            ((r.value = f.SPEECH_PLAYING_STATUS.READY),
            (o.value = 0),
            (V.value = !0),
            x());
        },
        B = function (e) {
          N() ||
            ((m.value = !1), (r.value = f.SPEECH_PLAYING_STATUS.ERROR), x());
        };
      null == (e = g.onCanplay) || e.call(g, C),
        null == (a = g.onPlay) || a.call(g, Y),
        null == (n = g.onPause) || n.call(g, D),
        null == (t = g.onStop) || t.call(g, U),
        null == (l = g.onEnded) || l.call(g, H),
        null == (v = g.onError) || v.call(g, B),
        (I.value = {
          onCanplay: C,
          onPlay: Y,
          onPause: D,
          onStop: U,
          onEnded: H,
          onError: B,
        });
    },
    H = function () {
      if (!Array.isArray(g.value)) return "";
      var e = g.value
        .map(function (e) {
          return String(e);
        })
        .filter(function (e) {
          return "" !== e;
        });
      return e.length
        ? e
            .slice()
            .sort(function (e, a) {
              var n = Number(e),
                t = Number(a);
              return Number.isFinite(n) && Number.isFinite(t)
                ? n - t
                : e < a
                ? -1
                : e > a
                ? 1
                : 0;
            })
            .join("&")
        : "";
    },
    B = function (e) {
      return (
        Array.isArray(e) &&
        e.length > 0 &&
        e.every(function (e) {
          return e && void 0 !== e.id && null !== e.id && "" !== e.id;
        })
      );
    },
    O = function (a) {
      return !(
        !a ||
        "object" != e(a) ||
        ("string" != typeof a.voices && void 0 === a.type && void 0 === a.speed)
      );
    },
    G = function (e) {
      var a, n;
      try {
        if (!O(e)) return;
        var t = {
          voices: "string" == typeof e.voices ? e.voices : "",
          type: Number(e.type) || 0,
          speed: Number(e.speed) || 1,
        };
        null == (n = (a = d.StockBridge).setStorage) ||
          n.call(a, f.PODCAST_SETTING_STORAGE_KEY, JSON.stringify(t));
      } catch (e) {}
    },
    q = function (e) {
      var a = e || {
        voices: H(),
        type: Number(p.value) || 0,
        speed: f.PLAYBACK_RATE[i.value] || 1,
      };
      return {
        news_id: l() || "",
        user_setting: {
          voices: "string" == typeof a.voices ? a.voices : "",
          type: Number(a.type) || 0,
          speed: Number(a.speed) || 1,
        },
      };
    },
    j = function () {
      return s(
        t,
        null,
        a().mark(function e() {
          var n, t, l, u, i, v;
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0), (l = q()), (e.next = 4), f.getPodcast(l)
                    );
                  case 4:
                    if (
                      ((u = e.sent),
                      void 0 === (i = null == u ? void 0 : u.code) || 0 == +i)
                    ) {
                      e.next = 8;
                      break;
                    }
                    throw new Error(
                      (null == u ? void 0 : u.msg) || "podcast api error"
                    );
                  case 8:
                    if ((v = (null == u ? void 0 : u.data) || {}).audio_url) {
                      e.next = 11;
                      break;
                    }
                    throw new Error("podcast audio_url empty");
                  case 11:
                    Y(),
                      (P.value = v),
                      (T.value = v.audio_url),
                      (A.value = v.title || ""),
                      (_.value = Array.isArray(v.voices)
                        ? v.voices.slice()
                        : []),
                      (o.value = 0),
                      (c.value = Math.floor(1e3 * (Number(v.duration) || 0))),
                      (b.value = !0),
                      (m.value = !0),
                      U(),
                      D(),
                      (r.value = f.SPEECH_PLAYING_STATUS.PLAYING),
                      (e.next = 17);
                    break;
                  case 14:
                    (e.prev = 14),
                      (e.t0 = e.catch(0)),
                      (m.value = !1),
                      (r.value = f.SPEECH_PLAYING_STATUS.ERROR),
                      null == (t = (n = d.StockBridge).toast) ||
                        t.call(n, "AI播客加载失败，请稍后重试", "none");
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 14]]
          );
        })
      );
    },
    K = function () {
      return s(
        t,
        null,
        a().mark(function e() {
          var n, t, l, u;
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!k.value) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (((n = i.value), C.value === n)) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (k.value = !0),
                      (e.prev = 5),
                      (t = {
                        voices: H(),
                        type: Number(p.value) || 0,
                        speed: f.PLAYBACK_RATE[n] || 1,
                      }),
                      (e.next = 9),
                      f.savePodcastSetting(t)
                    );
                  case 9:
                    if (
                      ((l = e.sent),
                      void 0 === (u = null == l ? void 0 : l.code) || 0 == +u)
                    ) {
                      e.next = 13;
                      break;
                    }
                    throw new Error(
                      (null == l ? void 0 : l.msg) || "saveUserSetting error"
                    );
                  case 13:
                    (C.value = n),
                      E.value && (E.value.speed = t.speed),
                      G({ voices: t.voices, type: t.type, speed: t.speed }),
                      (e.next = 18);
                    break;
                  case 16:
                    (e.prev = 16), (e.t0 = e.catch(5));
                  case 18:
                    return (e.prev = 18), (k.value = !1), e.finish(18);
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[5, 16, 18, 21]]
          );
        })
      );
    },
    F = function () {
      var e,
        a,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (T.value) {
        var l = Math.max(0, Number(n) || 0),
          u = !1 !== t.autoPlay;
        if (!w.value)
          return (
            (m.value = !0),
            U({ startAtMs: l, autoPlay: u }),
            void (b.value = !0)
          );
        try {
          l > 0 && (null == (a = (e = w.value).seek) || a.call(e, l / 1e3));
        } catch (e) {}
        u && D();
      }
    };
  return {
    podcastData: P,
    podcastAudioUrl: T,
    podcastTitle: A,
    podcastVoices: _,
    podcastSetting: E,
    podcastReady: b,
    podcastInnerAudioContext: w,
    startPodcast: function () {
      return s(
        t,
        null,
        a().mark(function e() {
          var n, l, u, y, k, I, R;
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (m.value = !0),
                      (r.value = f.SPEECH_PLAYING_STATUS.READY),
                      (o.value = 0),
                      (c.value = 0),
                      (P.value = null),
                      (T.value = ""),
                      (A.value = ""),
                      (_.value = []),
                      (b.value = !1),
                      Y(),
                      (e.prev = 1),
                      (e.next = 4),
                      s(
                        t,
                        null,
                        a().mark(function e() {
                          var n, t, l, u, r;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (n = null),
                                      (t = !1),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      f.getPodcastSetting({})
                                    );
                                  case 4:
                                    (l = e.sent),
                                      (void 0 !==
                                        (u = null == l ? void 0 : l.code) &&
                                        0 != +u) ||
                                        (O(null == l ? void 0 : l.data) &&
                                          ((n = l.data), (t = !0))),
                                      (e.next = 11);
                                    break;
                                  case 9:
                                    (e.prev = 9), (e.t0 = e.catch(1));
                                  case 11:
                                    return (
                                      n ||
                                        ((r = (function () {
                                          var e, a;
                                          try {
                                            var n =
                                              null ==
                                              (a = (e = d.StockBridge)
                                                .getStorage)
                                                ? void 0
                                                : a.call(
                                                    e,
                                                    f.PODCAST_SETTING_STORAGE_KEY
                                                  );
                                            if (!n) return null;
                                            var t = n;
                                            return (
                                              "string" == typeof n &&
                                                (t = JSON.parse(n)),
                                              O(t) ? t : null
                                            );
                                          } catch (e) {
                                            return null;
                                          }
                                        })()) &&
                                          (n = r)),
                                      e.abrupt(
                                        "return",
                                        (n ||
                                          (n = v(
                                            {},
                                            f.DEFAULT_PODCAST_SETTING
                                          )),
                                        (E.value = n),
                                        (function () {
                                          var e =
                                              arguments.length > 0 &&
                                              void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                            a = Number(e.type);
                                          if (
                                            (Number.isNaN(a) ||
                                              (0 !== a && 1 !== a) ||
                                              (p.value = a),
                                            "string" == typeof e.voices)
                                          ) {
                                            var n = e.voices
                                              .split("&")
                                              .map(function (e) {
                                                return e.trim();
                                              })
                                              .filter(function (e) {
                                                return "" !== e;
                                              });
                                            (h.value = n.length > 1 ? 1 : 0),
                                              n.length && (g.value = n);
                                          }
                                          var t = Number(e.speed);
                                          if (!Number.isNaN(t) && t > 0) {
                                            var l = 0,
                                              u = 1 / 0;
                                            f.PLAYBACK_RATE.forEach(function (
                                              e,
                                              a
                                            ) {
                                              var n = Math.abs(e - t);
                                              n < u && ((u = n), (l = a));
                                            }),
                                              (i.value = l),
                                              (C.value = l);
                                            var r = f.PLAYBACK_RATE[l];
                                            w.value &&
                                              (w.value.playbackRate = r);
                                          }
                                        })(n),
                                        t && G(n),
                                        n)
                                      )
                                    );
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 9]]
                          );
                        })
                      )
                    );
                  case 4:
                    return (
                      (u = e.sent), (y = q(u)), (e.next = 8), f.getPodcast(y)
                    );
                  case 8:
                    if (
                      ((k = e.sent),
                      void 0 === (I = null == k ? void 0 : k.code) || 0 == +I)
                    ) {
                      e.next = 12;
                      break;
                    }
                    throw new Error(
                      (null == k ? void 0 : k.msg) || "podcast api error"
                    );
                  case 12:
                    if ((R = (null == k ? void 0 : k.data) || {}).audio_url) {
                      e.next = 15;
                      break;
                    }
                    throw new Error("podcast audio_url empty");
                  case 15:
                    (P.value = R),
                      (T.value = R.audio_url),
                      (A.value = R.title || ""),
                      (_.value = Array.isArray(R.voices)
                        ? R.voices.slice()
                        : []),
                      (c.value = Math.floor(1e3 * (Number(R.duration) || 0))),
                      (b.value = !0),
                      U(),
                      D(),
                      s(
                        t,
                        null,
                        a().mark(function e() {
                          var n, t, l, u, r, o;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!S.value || !S.value.length) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    return (
                                      (t = null),
                                      (l = !1),
                                      (e.prev = 3),
                                      (e.next = 6),
                                      f.getVoiceList({})
                                    );
                                  case 6:
                                    (u = e.sent),
                                      (void 0 !==
                                        (r = null == u ? void 0 : u.code) &&
                                        0 != +r) ||
                                        (B(
                                          null ==
                                            (n = null == u ? void 0 : u.data)
                                            ? void 0
                                            : n.voices
                                        ) &&
                                          ((t = u.data.voices), (l = !0))),
                                      (e.next = 13);
                                    break;
                                  case 11:
                                    (e.prev = 11), (e.t0 = e.catch(3));
                                  case 13:
                                    t ||
                                      ((o = (function () {
                                        var e, a;
                                        try {
                                          var n =
                                            null ==
                                            (a = (e = d.StockBridge).getStorage)
                                              ? void 0
                                              : a.call(
                                                  e,
                                                  f.VOICE_LIST_STORAGE_KEY
                                                );
                                          if (!n) return null;
                                          var t = n;
                                          return (
                                            "string" == typeof n &&
                                              (t = JSON.parse(n)),
                                            B(t) ? t : null
                                          );
                                        } catch (e) {
                                          return null;
                                        }
                                      })()) &&
                                        (t = o)),
                                      t &&
                                        ((S.value = t.slice()),
                                        l &&
                                          (function (e) {
                                            var a, n;
                                            try {
                                              if (!B(e)) return;
                                              null ==
                                                (n = (a = d.StockBridge)
                                                  .setStorage) ||
                                                n.call(
                                                  a,
                                                  f.VOICE_LIST_STORAGE_KEY,
                                                  JSON.stringify(e)
                                                );
                                            } catch (e) {}
                                          })(t));
                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[3, 11]]
                          );
                        })
                      ),
                      (e.next = 21);
                    break;
                  case 18:
                    (e.prev = 18),
                      (e.t0 = e.catch(1)),
                      (m.value = !1),
                      (r.value = f.SPEECH_PLAYING_STATUS.ERROR),
                      null == (l = (n = d.StockBridge).toast) ||
                        l.call(n, "AI播客加载失败，请稍后重试", "none");
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 18]]
          );
        })
      );
    },
    reloadPodcast: j,
    playPodcast: D,
    pausePodcast: function () {
      w.value && w.value.pause();
    },
    destroyPodcastAudio: Y,
    initPodcastAudio: U,
    resumePodcastFromMs: F,
    saveAndReloadPodcast: function () {
      return s(
        t,
        null,
        a().mark(function e() {
          var n, t, l, u, r;
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (k.value) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (k.value = !0),
                      (m.value = !0),
                      Y(),
                      (o.value = 0),
                      (c.value = 0),
                      (e.prev = 2),
                      (l = {
                        voices: H(),
                        type: Number(p.value) || 0,
                        speed: f.PLAYBACK_RATE[i.value] || 1,
                      }),
                      (e.next = 6),
                      f.savePodcastSetting(l)
                    );
                  case 6:
                    if (
                      ((u = e.sent),
                      void 0 === (r = null == u ? void 0 : u.code) || 0 == +r)
                    ) {
                      e.next = 10;
                      break;
                    }
                    throw new Error(
                      (null == u ? void 0 : u.msg) || "saveUserSetting error"
                    );
                  case 10:
                    return G(l), (e.next = 13), j();
                  case 13:
                    e.next = 18;
                    break;
                  case 15:
                    (e.prev = 15),
                      (e.t0 = e.catch(2)),
                      (m.value = !1),
                      null == (t = (n = d.StockBridge).toast) ||
                        t.call(n, "保存设置失败，请稍后重试", "none");
                  case 18:
                    return (e.prev = 18), (k.value = !1), e.finish(18);
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 15, 18, 21]]
          );
        })
      );
    },
    schedulePersistRateSetting: function () {
      N.value && clearTimeout(N.value),
        (N.value = setTimeout(function () {
          (N.value = null), K();
        }, 300));
    },
    flushPersistRateSetting: function () {
      N.value && (clearTimeout(N.value), (N.value = null), K());
    },
    seekPodcastBy: function (e) {
      var a;
      if (c.value) {
        var n = Math.min(c.value, Math.max(0, o.value + e));
        (null == (a = w.value) ? void 0 : a.seek) && w.value.seek(n / 1e3),
          (o.value = n);
      }
    },
    seekPodcastTo: function (e) {
      var a;
      (null == (a = w.value) ? void 0 : a.seek) && w.value.seek(e / 1e3);
    },
    applyPlaybackRate: function (e) {
      var a =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (T.value) {
        var n =
            "boolean" == typeof a.expectPlaying
              ? a.expectPlaying
              : r.value === f.SPEECH_PLAYING_STATUS.PLAYING,
          t = Math.max(0, Number(o.value) || 0);
        Y(), F(t, { autoPlay: n });
      }
    },
  };
}
function g(e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return !1;
  }
  return !0;
}
var S = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    a = e.query,
    t = void 0 === a ? "" : a,
    l = e.responseId,
    u = void 0 === l ? "" : l,
    r = e.voices,
    o = void 0 === r ? [] : r,
    c = e.format,
    i = void 0 === c ? "wav" : c,
    v = e.onmessage,
    s = e.onerror,
    f = e.onclose,
    h = !1,
    S = {
      openid:
        void 0 !== d.wx$1
          ? d.wx$1.getStorageSync("_qluin") || ""
          : p.cookie.get("wzq_qluin") || "",
      query: t,
      response_id: u,
      format: i,
      voices: Array.isArray(o) ? o : [],
    },
    y = function (e) {
      h ||
        (e &&
          (("" === e.event && "" === e.data) ||
            ("function" == typeof v && v(e))));
    },
    m = function (e) {
      h || ("function" == typeof s && s(e));
    },
    P = null,
    T = [],
    A = "",
    _ = function (e) {
      var a = new Uint8Array(e.data),
        t = (function (e, a) {
          for (var n = e.concat(a), t = 0; t < n.length; ) {
            var l = n[t],
              u = void 0;
            if (l <= 127) u = 1;
            else if (192 == (224 & l)) u = 2;
            else if (224 == (240 & l)) u = 3;
            else {
              if (240 != (248 & l)) {
                t += 1;
                continue;
              }
              u = 4;
            }
            if (t + u > n.length) break;
            t += u;
          }
          return { completeBytes: n.slice(0, t), remainBytes: n.slice(t) };
        })(T, Array.from(a)),
        l = t.completeBytes,
        u = t.remainBytes;
      T = u;
      for (var r = "", o = 0; o < l.length; o++) {
        var c = l[o];
        r += "%".concat(c < 16 ? "0" : "").concat(c.toString(16));
      }
      try {
        r = decodeURIComponent(r);
      } catch (e) {
        return;
      }
      if (r) {
        A && ((r = "".concat(A).concat(r)), (A = ""));
        var i,
          v = 0,
          s = r.matchAll(/event:(.*)\ndata:(.*)/g),
          d = n(s);
        try {
          for (d.s(); !(i = d.n()).done; ) {
            var f = i.value;
            v = f.index + f[0].length;
            var p = f[1].trim(),
              h = f[2].trim(),
              S = { event: p, data: h };
            "[DONE]" === h
              ? (y(S), (A = ""))
              : g(h)
              ? y(S)
              : (A = "".concat(A).concat(f[0]));
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
        if (v < r.length) {
          var m = r.slice(v).replace(/^\s+/, "");
          m && (A = "".concat(A).concat(m));
        }
      }
    };
  try {
    (P = d.wx$1.request({
      url: "https://snp.tenpay.com/snpapi/marketReportService/podcastInteraction",
      method: "POST",
      data: S,
      timeout: 3e5,
      enableChunked: !0,
      header: { "Content-Type": "application/json" },
      fail: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        m(e);
      },
      complete: function () {
        h || ("function" == typeof f && f());
      },
    })).onChunkReceived(function (e) {
      var a, n;
      try {
        _(e);
      } catch (e) {
        null == (n = (a = d.StockBridge).aegisReportEvent) ||
          n.call(a, "[stock-morning-report] PodcastInteractionChunkError", {
            errorMessage: null == e ? void 0 : e.message,
          });
      }
    });
  } catch (e) {
    m(e);
  }
  return {
    abort: function () {
      var e, a;
      if (!h) {
        h = !0;
        try {
          P && (null == (e = P.offChunkReceived) || e.call(P)),
            P && (null == (a = P.abort) || a.call(P));
        } catch (e) {}
        (P = null), (T = []), (A = "");
      }
    },
  };
};
function y(e) {
  var a = e.playerStatus,
    n = e.currentPlaybackRateIndex,
    t = e.currentVoiceIds,
    r = e.podcastVoices,
    o = e.podcastData,
    c = e.currentTime,
    i = e.pausePodcast,
    s = e.playPodcast,
    p = e.destroyPodcastAudio,
    h = e.resumePodcastFromMs,
    g = e.getPodcastAudioUrl,
    y = d.ref("default"),
    m = d.ref(!0),
    P = d.ref(null),
    T = d.ref(0),
    A = d.ref([]),
    _ = d.ref(null),
    E = d.ref(!1),
    b = d.ref(!1),
    k = d.ref(!1),
    w = d.ref(0),
    I = d.ref(0),
    R = d.ref(""),
    M = d.ref(!1),
    N = d.ref(0),
    C = d.ref([]),
    V = d.ref(!1),
    x = d.ref(!1),
    L = d.ref(!1),
    Y = d.ref(null),
    D = d.ref(!1),
    U = d.ref(!1),
    H = function () {
      Y.value && (clearInterval(Y.value), (Y.value = null));
    },
    B = function () {
      H(),
        (Y.value = setInterval(function () {
          var e = _.value;
          if (e)
            try {
              var a = Number(e.currentTime);
              Number.isFinite(a) && a >= 0 && (I.value = Math.floor(1e3 * a));
            } catch (e) {}
        }, 300));
    },
    O = function () {
      var e, a, n, t, l, u, r, o, c, i, v, s, d, f, p, h;
      if ((H(), _.value)) {
        try {
          var g = function () {};
          try {
            null == (a = (e = _.value).onEnded) || a.call(e, g);
          } catch (e) {}
          try {
            null == (t = (n = _.value).onError) || t.call(n, g);
          } catch (e) {}
          try {
            null == (u = (l = _.value).onTimeUpdate) || u.call(l, g);
          } catch (e) {}
          try {
            null == (o = (r = _.value).onPlay) || o.call(r, g);
          } catch (e) {}
          try {
            null == (i = (c = _.value).onPause) || i.call(c, g);
          } catch (e) {}
          try {
            null == (s = (v = _.value).onStop) || s.call(v, g);
          } catch (e) {}
          try {
            null == (f = (d = _.value).onCanplay) || f.call(d, g);
          } catch (e) {}
          try {
            null == (h = (p = _.value).pause) || h.call(p);
          } catch (e) {}
        } catch (e) {}
        _.value = null;
      }
    },
    G = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.isError,
        t = void 0 !== n && n;
      O(),
        (A.value = []),
        (E.value = !1),
        (k.value = !1),
        (w.value = 0),
        (I.value = 0),
        (b.value = !1),
        (P.value = null),
        (V.value = !1),
        (x.value = !1),
        (L.value = !1),
        (y.value = "default"),
        (m.value = !0),
        t ||
          (g() &&
            a.value !== f.SPEECH_PLAYING_STATUS.ERROR &&
            ("function" == typeof h
              ? h(N.value || 0, { autoPlay: !0 })
              : D.value || s())),
        (M.value = !1),
        (N.value = 0),
        (D.value = !1),
        (function () {
          var e, a;
          if (C.value.length) {
            var n =
              null == (a = (e = d.wx$1).getFileSystemManager)
                ? void 0
                : a.call(e);
            n
              ? (C.value.forEach(function (e) {
                  try {
                    n.unlink({ filePath: e, fail: function () {} });
                  } catch (e) {}
                }),
                (C.value = []))
              : (C.value = []);
          }
        })();
    };
  function q() {
    if (0 === A.value.length && b.value) return (E.value = !1), void G();
    if (V.value || x.value) E.value = !1;
    else {
      var e = A.value.shift();
      e
        ? ((E.value = !0),
          (function (e) {
            try {
              O();
              var a = d.wx$1.getFileSystemManager(),
                t = ""
                  .concat(d.wx$1.env.USER_DATA_PATH, "/podcast_interact_")
                  .concat(Date.now(), "_")
                  .concat(e.index, ".wav");
              a.writeFile({
                filePath: t,
                data: e.base64,
                encoding: "base64",
                success: function () {
                  var e, a, l, u, r, o;
                  C.value.push(t), (I.value = 0), (k.value = !0);
                  var c = d.wx$1.getBackgroundAudioManager();
                  try {
                    (c.title = "AI 播客互动"),
                      (c.coverImgUrl =
                        "https://st.gtimg.com/design/aa64dcfe48029caff7e3c7262e3cd220.png");
                  } catch (e) {}
                  try {
                    var i = f.PLAYBACK_RATE[n.value];
                    "number" == typeof i &&
                      void 0 !== c.playbackRate &&
                      (c.playbackRate = i);
                  } catch (e) {}
                  try {
                    null == (e = c.onEnded) ||
                      e.call(c, function () {
                        try {
                          var e = Number(c.duration);
                          Number.isFinite(e) &&
                            e > 0 &&
                            (w.value += Math.floor(1e3 * e));
                        } catch (e) {}
                        (I.value = 0), H(), (_.value = null), q();
                      });
                  } catch (e) {}
                  try {
                    null == (a = c.onError) ||
                      a.call(c, function (e) {
                        H(), (_.value = null), q();
                      });
                  } catch (e) {}
                  try {
                    null == (l = c.onTimeUpdate) ||
                      l.call(c, function () {
                        try {
                          I.value = Math.floor(1e3 * (c.currentTime || 0));
                        } catch (e) {}
                      });
                  } catch (e) {}
                  try {
                    null == (u = c.onPlay) ||
                      u.call(c, function () {
                        U.value ||
                          ((V.value = !1), (x.value = !1), (E.value = !0), B());
                      });
                  } catch (e) {}
                  try {
                    null == (r = c.onPause) ||
                      r.call(c, function () {
                        U.value || ((E.value = !1), (V.value = !0), H());
                      });
                  } catch (e) {}
                  (c.src = t), (_.value = c), B();
                  try {
                    null == (o = c.play) || o.call(c);
                  } catch (e) {}
                },
                fail: function (e) {
                  q();
                },
              });
            } catch (e) {
              q();
            }
          })(e))
        : (E.value = !1);
    }
  }
  d.ref(null), d.ref(null), d.ref(-1), d.ref(null);
  var j = function (e) {
      var a;
      if (e) {
        if ("response.created" === e.event || "response.completed" === e.event)
          try {
            var n = "string" == typeof e.data ? JSON.parse(e.data) : e.data,
              t = null == (a = null == n ? void 0 : n.response) ? void 0 : a.id;
            t && (R.value = t);
          } catch (e) {}
        if ("response.completed" === e.event) {
          if (void 0 !== e.reqId && e.reqId !== T.value) return;
          return (
            (b.value = !0),
            (m.value = !0),
            (P.value = null),
            void (E.value || k.value || 0 !== A.value.length || G())
          );
        }
        "response.podcast.segment.added" === e.event &&
          (function (e) {
            var a, n, t;
            try {
              t = "string" == typeof e ? JSON.parse(e) : e;
            } catch (e) {
              return;
            }
            var l = null == t ? void 0 : t.segment,
              u = null == l ? void 0 : l.audio;
            if (u) {
              var r =
                (null == (a = null == l ? void 0 : l.script)
                  ? void 0
                  : a.speaker) || "";
              0 === A.value.length
                ? (y.value = "" === r ? "thinking" : "replying")
                : "" !== r && "thinking" === y.value && (y.value = "replying");
              var o = {
                index:
                  "number" == typeof t.segment_index
                    ? t.segment_index
                    : A.value.length,
                speaker: r,
                text:
                  (null == (n = null == l ? void 0 : l.script)
                    ? void 0
                    : n.text) || "",
                base64: u,
              };
              A.value.push(o),
                A.value.sort(function (e, a) {
                  return e.index - a.index;
                }),
                E.value || V.value || x.value || q();
            }
          })(e.data);
      }
    },
    K = d.computed(function () {
      return m.value || "replying" === y.value;
    });
  return {
    interactStatus: y,
    canStartInteract: m,
    canStartOrInterruptInteract: K,
    interactIsPlaying: E,
    interactAudioPlaying: k,
    interactPlayedDurationMs: w,
    interactCurrentSegmentMs: I,
    startInteractRequest: function (e) {
      var n,
        s,
        h,
        g = "replying" === y.value;
      if (m.value || g) {
        if (P.value) {
          try {
            null == (s = (n = P.value).abort) || s.call(n);
          } catch (e) {}
          P.value = null;
        }
        T.value += 1;
        var C = T.value;
        L.value = !1;
        var Y = k.value || A.value.length > 0 || !!_.value;
        Y &&
          (O(),
          (A.value = []),
          (k.value = !1),
          (E.value = !1),
          (V.value = !1),
          (x.value = !1),
          (w.value = 0),
          (I.value = 0),
          (b.value = !1),
          setTimeout(function () {
            (V.value = !1), (x.value = !1);
          }, 120)),
          (m.value = !1);
        var D = a.value === f.SPEECH_PLAYING_STATUS.PLAYING;
        if (!Y && !M.value) {
          M.value = D;
          try {
            N.value = Number(null == c ? void 0 : c.value) || 0;
          } catch (e) {
            N.value = 0;
          }
        }
        y.value = "received";
        try {
          null == i || i();
        } catch (e) {}
        if (!Y && "function" == typeof p)
          try {
            p();
          } catch (e) {}
        (A.value = []),
          (b.value = !1),
          (E.value = !1),
          (k.value = !1),
          (w.value = 0),
          (I.value = 0);
        var U = function (e) {
            return /^\d+$/.test(e);
          },
          H = Array.isArray(t.value)
            ? t.value
                .map(function (e) {
                  return String(e);
                })
                .filter(function (e) {
                  return "" !== e && U(e);
                })
            : [];
        0 === H.length &&
          Array.isArray(r.value) &&
          (H = r.value
            .map(function (e) {
              var a, n;
              return null !=
                (n =
                  null != (a = null == e ? void 0 : e.id)
                    ? a
                    : null == e
                    ? void 0
                    : e.voice_id)
                ? n
                : "";
            })
            .map(function (e) {
              return String(e);
            })
            .filter(function (e) {
              return "" !== e && U(e);
            })),
          0 === H.length && (H = ["0", "1"].slice());
        var B =
          R.value || (null == (h = o.value) ? void 0 : h.response_id) || "";
        P.value = S({
          query: e,
          responseId: B,
          voices: H,
          format: "wav",
          onmessage: function (e) {
            var a;
            j(((a = v({}, e)), l(a, u({ reqId: C }))));
          },
          onerror: function (e) {
            var a, n;
            C === T.value &&
              (null == (n = (a = d.StockBridge).toast) ||
                n.call(a, "和主播互动失败，请稍后重试", "none"),
              G({ isError: !0 }));
          },
          onclose: function () {
            C === T.value &&
              ((b.value = !0),
              (m.value = !0),
              (P.value = null),
              E.value || k.value || 0 !== A.value.length || G());
          },
        });
      }
    },
    toggleInteractAudioPlay: function () {
      var e, a, n, t;
      if (E.value && _.value) {
        U.value = !0;
        try {
          null == (a = (e = _.value).pause) || a.call(e);
        } catch (e) {}
        return (
          setTimeout(function () {
            U.value = !1;
          }, 0),
          H(),
          (E.value = !1),
          void (V.value = !0)
        );
      }
      if (((V.value = !1), _.value)) {
        U.value = !0;
        try {
          var l = null == (t = (n = _.value).play) ? void 0 : t.call(n);
          l && "function" == typeof l.catch && l.catch(function (e) {}),
            B(),
            (E.value = !0);
        } catch (e) {}
        setTimeout(function () {
          U.value = !1;
        }, 0);
      } else A.value.length > 0 && q();
    },
    abortInteractRequest: function () {
      var e, a;
      if (((T.value += 1), P.value)) {
        try {
          null == (a = (e = P.value).abort) || a.call(e);
        } catch (e) {}
        P.value = null;
      }
      G({ isError: !0 });
    },
    pauseInteractAudioForVoice: function () {
      var e, n;
      if (
        a.value === f.SPEECH_PLAYING_STATUS.PLAYING &&
        !k.value &&
        "default" === y.value
      ) {
        M.value = !0;
        try {
          N.value = Number(null == c ? void 0 : c.value) || 0;
        } catch (e) {
          N.value = 0;
        }
        try {
          null == i || i();
        } catch (e) {}
        L.value = !0;
      }
      if (!k.value) return !1;
      if (!E.value) return !1;
      if (!_.value) return !1;
      U.value = !0;
      try {
        null == (n = (e = _.value).pause) || n.call(e);
      } catch (e) {}
      return (
        setTimeout(function () {
          U.value = !1;
        }, 0),
        H(),
        (E.value = !1),
        (x.value = !0),
        !0
      );
    },
    resumeInteractAudioForVoice: function () {
      var e, a;
      if (L.value) {
        L.value = !1;
        try {
          null == s || s();
        } catch (e) {}
        (M.value = !1), (N.value = 0);
      }
      if (x.value && ((x.value = !1), !V.value))
        if (_.value) {
          U.value = !0;
          try {
            var n = null == (a = (e = _.value).play) ? void 0 : a.call(e);
            n && "function" == typeof n.catch && n.catch(function (e) {}),
              B(),
              (E.value = !0);
          } catch (e) {}
          setTimeout(function () {
            U.value = !1;
          }, 0);
        } else A.value.length > 0 && q();
    },
  };
}
var m = d.defineComponent({
  name: "SpeechControlPanel",
  components: {
    SpeechSpeedSetting: function () {
      return "./SpeechSpeedSetting.js";
    },
    SpeechVoiceSetting: function () {
      return "./SpeechVoiceSetting.js";
    },
    VoiceModal: function () {
      return "./VoiceModal/mp.js";
    },
  },
  props: {
    newsData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    theme: { type: String, default: "white" },
  },
  emits: ["voice-input"],
  setup: function (a, n) {
    var t = n.emit,
      l = d.ref(null),
      u = d.ref(null),
      r = d.getCurrentInstance(),
      o = d.ref(!1),
      c = d.ref(!1),
      i = d.ref(!0),
      v = d.ref(0),
      s = d.ref(f.SPEECH_PLAYING_STATUS.READY),
      p = d.ref(0),
      g = d.ref(0),
      S = d.ref(5),
      m = d.ref(!1),
      P = d.ref(f.SPEECH_PLAYING_STATUS.READY),
      T = d.ref(!1),
      A = d.ref(null),
      _ = d.ref([
        { label: "简洁版", value: 0 },
        { label: "深度版", value: 1 },
      ]),
      E = d.ref(!1),
      b = d.ref(!1),
      k = d.ref([]),
      w = d.ref([]),
      I = d.ref(0),
      R = d.ref(null),
      M = d.ref(null),
      N = d.ref(null),
      C = d.ref(!0),
      V = (function (e) {
        var a = e.isWZQ,
          n = d.ref(!1),
          t = d.ref(""),
          l = d.ref(void 0),
          u = d.ref(!1),
          r = d.ref(null),
          o = function () {
            r.value && (clearTimeout(r.value), (r.value = null));
          },
          c = function (e) {
            if (e || u.value) {
              if (d.wx$1.setPageStyle)
                try {
                  d.wx$1.setPageStyle({
                    style: { overflow: e ? "hidden" : "auto" },
                  });
                } catch (e) {}
              (u.value = e),
                a.value &&
                  (e
                    ? ((l.value =
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop),
                      (document.body.style.overflow = "hidden"),
                      (document.body.style.position = "fixed"),
                      (document.body.style.width = "100%"),
                      (document.body.style.top = -l.value + "px"))
                    : ((document.body.style.overflow = "auto"),
                      (document.body.style.position = "static"),
                      (document.body.style.top = "auto"),
                      void 0 !== l.value && window.scrollTo(0, l.value),
                      (l.value = void 0)));
            }
          };
        return {
          showSpeechHalfScreen: n,
          speechHalfAnimClass: t,
          clearCloseTimer: o,
          setSpeechPageScroll: c,
          openHalfScreen: function () {
            o(), (n.value = !0), (t.value = "fade-enter-active"), c(!0);
          },
          closeHalfScreen: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a = e.onClosed;
            (t.value = "fade-leave-active"),
              o(),
              (r.value = setTimeout(function () {
                (n.value = !1), c(!1), (r.value = null), null == a || a();
              }, 400));
          },
        };
      })({ isWZQ: o }),
      x = V.showSpeechHalfScreen,
      L = V.speechHalfAnimClass,
      Y = V.openHalfScreen,
      D = V.closeHalfScreen,
      U = V.setSpeechPageScroll,
      H = V.clearCloseTimer,
      B = (function (a) {
        a.progressBarRef;
        var n = a.duration,
          t = a.currentTime,
          l = a.onSeekEnd,
          u = a.getIsDisabled,
          r = a.mpContext,
          o = a.mpSelector,
          c = d.ref(!1),
          i = d.ref(0),
          v = d.ref(null),
          s = null,
          f = 0,
          p = function () {
            try {
              return "function" == typeof u && Boolean(u());
            } catch (e) {
              return !1;
            }
          },
          h = function () {
            try {
              (r && "object" == e(r)
                ? d.wx$1.createSelectorQuery().in(r)
                : d.wx$1.createSelectorQuery()
              )
                .select(o || ".speech-half-progress")
                .boundingClientRect()
                .exec(function (e) {
                  e && e[0] && (v.value = e[0]);
                });
            } catch (e) {}
          },
          g = function (e) {
            var a = v.value;
            if (!a || !n.value || null == s) return null;
            var t = a.width || 1,
              l = f + ((e - s) / t) * n.value;
            return Math.floor(Math.min(n.value, Math.max(0, l)));
          };
        return {
          isSeeking: c,
          seekingTime: i,
          onProgressTouchStart: function (e) {
            var a, l;
            if (!p()) {
              var u,
                r =
                  (null == (a = null == e ? void 0 : e.touches)
                    ? void 0
                    : a[0]) ||
                  (null == (l = null == e ? void 0 : e.changedTouches)
                    ? void 0
                    : l[0]);
              r &&
                (v.value || h(),
                (u = r.clientX),
                n.value &&
                  (p() ||
                    ((c.value = !0),
                    (s = u),
                    (f = t.value),
                    (i.value = t.value))));
            }
          },
          onProgressTouchMove: function (e) {
            var a,
              n,
              t =
                (null == (a = null == e ? void 0 : e.touches)
                  ? void 0
                  : a[0]) ||
                (null == (n = null == e ? void 0 : e.changedTouches)
                  ? void 0
                  : n[0]);
            t &&
              (function (e) {
                if (c.value) {
                  var a = g(e);
                  null != a && (i.value = a);
                }
              })(t.clientX);
          },
          onProgressTouchEnd: function (e) {
            var a, n;
            if (c.value) {
              var u =
                (null == (a = null == e ? void 0 : e.changedTouches)
                  ? void 0
                  : a[0]) ||
                (null == (n = null == e ? void 0 : e.touches) ? void 0 : n[0]);
              if (u) {
                var r = g(u.clientX);
                null != r && (i.value = r);
              }
            }
            !(function () {
              if (c.value) {
                var e = i.value;
                (c.value = !1), (s = null), null == l || l(e), (t.value = e);
              }
            })();
          },
          onProgressMouseDown: function (e) {},
          refreshMpRect: h,
          cancelSeek: function () {
            c.value && ((c.value = !1), (s = null), (i.value = 0));
          },
        };
      })({
        progressBarRef: l,
        duration: g,
        currentTime: p,
        getIsDisabled: function () {
          return je.value;
        },
        mpContext: (null == r ? void 0 : r.proxy) || null,
        mpSelector: ".speech-half-progress",
        onSeekEnd: function (e) {
          ce(e);
        },
      }),
      O = B.isSeeking,
      G = B.seekingTime,
      q = B.onProgressTouchStart,
      j = B.onProgressTouchMove,
      K = B.onProgressTouchEnd,
      F = B.onProgressMouseDown,
      z = B.refreshMpRect,
      $ = h({
        getNewsId: function () {
          var e;
          return null == (e = a.newsData) ? void 0 : e.id;
        },
        getNewsTitle: function () {
          var e;
          return null == (e = a.newsData) ? void 0 : e.title;
        },
        playerStatus: s,
        currentTime: p,
        duration: g,
        currentPlaybackRateIndex: S,
        activeSpeechMode: v,
        voiceMode: I,
        currentVoiceIds: k,
        availableVoices: w,
        isSeeking: O,
        isLoading: C,
      }),
      J = $.podcastData,
      Q = $.podcastAudioUrl,
      W = $.podcastTitle,
      X = $.podcastVoices,
      Z = $.podcastReady,
      ee = $.startPodcast,
      ae = $.playPodcast,
      ne = $.pausePodcast,
      te = $.destroyPodcastAudio,
      le = $.saveAndReloadPodcast,
      ue = $.schedulePersistRateSetting,
      re = $.flushPersistRateSetting,
      oe = $.seekPodcastBy,
      ce = $.seekPodcastTo,
      ie = $.applyPlaybackRate,
      ve = $.resumePodcastFromMs,
      se = y({
        playerStatus: s,
        currentPlaybackRateIndex: S,
        currentVoiceIds: k,
        podcastVoices: X,
        podcastData: J,
        currentTime: p,
        pausePodcast: ne,
        playPodcast: ae,
        destroyPodcastAudio: te,
        resumePodcastFromMs: ve,
        getPodcastAudioUrl: function () {
          return Q.value;
        },
      }),
      de = se.interactStatus,
      fe = se.canStartInteract,
      pe = se.canStartOrInterruptInteract,
      he = se.interactIsPlaying,
      ge = se.interactAudioPlaying,
      Se = se.interactPlayedDurationMs,
      ye = se.interactCurrentSegmentMs,
      me = se.startInteractRequest,
      Pe = se.toggleInteractAudioPlay,
      Te = se.abortInteractRequest,
      Ae = se.pauseInteractAudioForVoice,
      _e = se.resumeInteractAudioForVoice,
      Ee = (function (e) {
        var a = e.voiceModalRef,
          n = e.canStartInteract,
          t = e.getNewsId,
          l = e.onRecognizeText,
          u = e.onVoiceStart,
          r = e.onVoiceEmpty,
          o = e.onVoiceCancel,
          c = d.ref(!1),
          i = d.ref(0),
          v = function () {
            return ["mpwzq", "mpweapp"].includes("mpweapp");
          },
          s = function () {
            return !!(null == n ? void 0 : n.value);
          },
          f = function () {
            var e, n, l, r;
            if (
              (d.StockBridge.report(
                "news.information_morningreport.classic_early_report_podcast_interaction_click"
              ),
              !c.value)
            ) {
              c.value = !0;
              try {
                null == u || u();
              } catch (e) {}
              null == (n = (e = d.StockBridge).mtaReport) ||
                n.call(e, {
                  busi: "news",
                  eventName: "speech_voice_press_click",
                  params: { newsid: t() || "" },
                }),
                null ==
                  (r = null == (l = a.value) ? void 0 : l.startRecognize) ||
                  r.call(l);
            }
          },
          p = function () {
            var e, n;
            c.value &&
              ((c.value = !1),
              null == (n = null == (e = a.value) ? void 0 : e.stopRecognize) ||
                n.call(e));
          };
        return {
          isPressed: c,
          onVoiceMouseDown: function (e) {
            var a;
            v() ||
              (s() &&
                (null == (a = null == e ? void 0 : e.preventDefault) ||
                  a.call(e),
                f()));
          },
          onVoiceMouseUp: function (e) {
            var a;
            v() ||
              (c.value &&
                (null == (a = null == e ? void 0 : e.preventDefault) ||
                  a.call(e),
                p()));
          },
          onVoiceTouchStart: function (e) {
            var a;
            if (s()) {
              var n =
                null == (a = null == e ? void 0 : e.touches) ? void 0 : a[0];
              (i.value = n ? n.clientY : 0), f();
            }
          },
          onVoiceTouchMove: function (e) {
            var n,
              t,
              l,
              u = null == (n = null == e ? void 0 : e.touches) ? void 0 : n[0];
            if (u) {
              var r = i.value - u.clientY;
              null == (l = null == (t = a.value) ? void 0 : t.onTouchMove) ||
                l.call(t, r);
            }
          },
          onVoiceTouchEnd: function () {
            c.value && p();
          },
          handleVoiceRecognizeEnd: function (e) {
            var a,
              n,
              u = t() || "";
            if (
              (null == (n = (a = d.StockBridge).mtaReport) ||
                n.call(a, {
                  busi: "news",
                  eventName: e ? "speech_voice_send" : "speech_voice_empty",
                  params: { newsid: u, query: e || "" },
                }),
              e)
            )
              null == l || l(e);
            else
              try {
                null == r || r();
              } catch (e) {}
          },
          handleVoiceRecognizeCancel: function () {
            var e, a;
            (c.value = !1),
              null == (a = (e = d.StockBridge).mtaReport) ||
                a.call(e, {
                  busi: "news",
                  eventName: "speech_voice_cancel",
                  params: { newsid: t() || "" },
                });
            try {
              null == o || o();
            } catch (e) {}
          },
          clearVoiceState: function () {
            var e, n;
            (c.value = !1),
              null == (n = null == (e = a.value) ? void 0 : e.onClose) ||
                n.call(e);
          },
        };
      })({
        voiceModalRef: u,
        canStartInteract: pe,
        getNewsId: function () {
          var e;
          return null == (e = a.newsData) ? void 0 : e.id;
        },
        onRecognizeText: function (e) {
          t("voice-input", e), me(e);
        },
        onVoiceStart: function () {
          Ae();
        },
        onVoiceEmpty: function () {
          _e();
        },
        onVoiceCancel: function () {
          _e();
        },
      }),
      be = Ee.isPressed,
      ke = Ee.onVoiceMouseDown,
      we = Ee.onVoiceMouseUp,
      Ie = Ee.onVoiceTouchStart,
      Re = Ee.onVoiceTouchMove,
      Me = Ee.onVoiceTouchEnd,
      Ne = Ee.handleVoiceRecognizeEnd,
      Ce = Ee.handleVoiceRecognizeCancel,
      Ve = Ee.clearVoiceState,
      xe = (function (e) {
        var a = e.getNewsId,
          n = d.ref(!1);
        return {
          isLiked: n,
          syncLikeStatus: function () {
            var e,
              t,
              l = a();
            if (l) {
              var u =
                (null == (t = (e = d.StockBridge).getStorage)
                  ? void 0
                  : t.call(e, f.SPEECH_LIKE_STATUS_KEY)) || {};
              n.value = !!u[l];
            } else n.value = !1;
          },
          toggleLike: function () {
            var e,
              t,
              l,
              u,
              r,
              o,
              c = a();
            if (c) {
              var i = !n.value,
                v =
                  (null == (t = (e = d.StockBridge).getStorage)
                    ? void 0
                    : t.call(e, f.SPEECH_LIKE_STATUS_KEY)) || {};
              i ? (v[c] = !0) : delete v[c],
                null == (u = (l = d.StockBridge).setStorage) ||
                  u.call(l, f.SPEECH_LIKE_STATUS_KEY, v),
                (n.value = i),
                null == (o = (r = d.StockBridge).mtaReport) ||
                  o.call(r, {
                    busi: "news",
                    eventName: i ? "speech_like_add" : "speech_like_cancel",
                    params: { newsid: c },
                  });
            }
          },
        };
      })({
        getNewsId: function () {
          var e;
          return null == (e = a.newsData) ? void 0 : e.id;
        },
      }),
      Le = xe.isLiked,
      Ye = xe.syncLikeStatus,
      De = xe.toggleLike,
      Ue = d.computed(function () {
        var e;
        return W.value
          ? W.value
          : (null == (e = a.newsData) ? void 0 : e.title)
          ? a.newsData.title.split("|")[1] || a.newsData.title
          : "每日早报";
      }),
      He = d.computed(function () {
        switch (de.value) {
          case "received":
            return "主播收到你的收到问题";
          case "thinking":
            return "主播正在思考中...";
          case "replying":
            return "主播回复中...";
          default:
            return Ue.value;
        }
      }),
      Be = d.computed(function () {
        return "default" === de.value && He.value.length > 14;
      }),
      Oe = d.computed(function () {
        return E.value || b.value;
      }),
      Ge = d.computed(function () {
        return ge.value
          ? he.value
          : s.value === f.SPEECH_PLAYING_STATUS.PLAYING;
      }),
      qe = d.computed(function () {
        return "received" === de.value || "thinking" === de.value;
      }),
      je = d.computed(function () {
        return "default" !== de.value || ge.value;
      }),
      Ke = d.computed(function () {
        if (!g.value) return "0%";
        var e = O.value ? G.value : p.value;
        return "".concat(Math.min(100, Math.max(0, (e / g.value) * 100)), "%");
      }),
      Fe = function (e) {
        var a = Math.max(0, Math.floor((Number(e) || 0) / 1e3)),
          n = a % 60;
        return ""
          .concat(Math.floor(a / 60), ":")
          .concat(n < 10 ? "0".concat(n) : n);
      },
      ze = d.computed(function () {
        if (ge.value) return Fe((Se.value || 0) + (ye.value || 0));
        var e = O.value ? G.value : p.value;
        return Fe(e);
      }),
      $e = d.computed(function () {
        if ("default" !== de.value || ge.value) return "00:00";
        if (!g.value) return "时间加载中...";
        if (g.value > 72e5) return "--:--";
        var e = O.value ? G.value : p.value;
        return "-".concat(Fe(Math.max(0, g.value - e)));
      }),
      Je = function () {
        Y(),
          d.nextTick$1(function () {
            setTimeout(function () {
              return null == z ? void 0 : z();
            }, 300);
          });
      },
      Qe = function () {
        C.value ||
          (Ge.value
            ? ne()
            : s.value !== f.SPEECH_PLAYING_STATUS.ERROR && Q.value
            ? ae()
            : ee());
      },
      We = function () {
        if (M.value) {
          try {
            M.value.pause(), (M.value.src = "");
          } catch (e) {}
          M.value = null;
        }
      },
      Xe = function () {
        var e,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          !n.originalId ||
          n.originalId === (null == (e = a.newsData) ? void 0 : e.id)
        ) {
          var t = n.action || "toggle",
            l = ge.value || "default" !== de.value || !fe.value;
          if ("open" !== t)
            if ("toggle" === t && l) {
              if (qe.value) return;
              ge.value && Pe();
            } else
              x.value
                ? "toggle" === t && Qe()
                : "toggle" === t && Z.value && Q.value
                ? Ge.value
                  ? ne()
                  : s.value === f.SPEECH_PLAYING_STATUS.ERROR
                  ? (Je(), ee())
                  : (Je(), ae())
                : (Je(), ee());
          else {
            if (x.value) return;
            if ((Je(), l)) return;
            (Z.value && Q.value) || ee();
          }
        }
      };
    d.watch(
      function () {
        var e;
        return null == (e = a.newsData) ? void 0 : e.id;
      },
      function () {
        Ye();
      },
      { immediate: !0 }
    );
    var Ze = d.computed(function () {
      return m.value
        ? P.value
        : ge.value || "default" !== de.value
        ? he.value
          ? f.SPEECH_PLAYING_STATUS.PLAYING
          : f.SPEECH_PLAYING_STATUS.PAUSE
        : s.value;
    });
    return (
      d.watch(
        Ze,
        function (e) {
          var n, t, l;
          null == (l = (t = d.StockBridge).busEmit) ||
            l.call(t, f.MORNING_REPORT_SPEECH_STATUS_EVENT, {
              originalId: null == (n = a.newsData) ? void 0 : n.id,
              playStatus: e,
            });
        },
        { immediate: !0 }
      ),
      d.watch(s, function (e) {
        e === f.SPEECH_PLAYING_STATUS.PLAYING &&
          (ge.value || "default" !== de.value) &&
          ne();
      }),
      d.onMounted(function () {
        var e, a;
        null == (a = (e = d.StockBridge).busOn) ||
          a.call(e, f.MORNING_REPORT_SPEECH_PLAY_EVENT, Xe),
          d.StockBridge.report(
            "news.information_morningreport.classic_edition_morning_report_podcast_brow"
          );
      }),
      d.onBeforeUnmount(function () {
        var e, a;
        null == (a = (e = d.StockBridge).busOff) ||
          a.call(e, f.MORNING_REPORT_SPEECH_PLAY_EVENT, Xe),
          H(),
          U(!1),
          Ve(),
          We(),
          re(),
          te(),
          Te();
      }),
      {
        progressBarRef: l,
        voiceModalRef: u,
        showSpeechHalfScreen: x,
        speechHalfAnimClass: L,
        isWZQ: o,
        isWeb: c,
        isMP: i,
        activeSpeechMode: v,
        playerStatus: s,
        currentTime: p,
        duration: g,
        currentPlaybackRateIndex: S,
        speechTabs: _,
        showSettingDialog: E,
        showVoiceDialog: b,
        currentVoiceIds: k,
        isLiked: Le,
        isLoading: C,
        isPressed: be,
        interactStatus: de,
        canStartInteract: fe,
        canStartOrInterruptInteract: pe,
        podcastData: J,
        podcastAudioUrl: Q,
        podcastTitle: W,
        podcastVoices: X,
        availableVoices: w,
        voiceMode: I,
        isSeeking: O,
        seekingTime: G,
        speechHalfTitle: He,
        isTitleMarquee: Be,
        isPanelHidden: Oe,
        isPlaying: Ge,
        isInteractLoadingPhase: qe,
        isSeekDisabled: je,
        progressPercent: Ke,
        currentTimeText: ze,
        remainTimeText: $e,
        formatTime: Fe,
        openSpeechHalfScreen: Je,
        closeSpeechHalfScreen: function () {
          ge.value || "default" !== de.value || !fe.value || Te(), D();
        },
        switchSpeechMode: function (e) {
          var a = v.value;
          (v.value = e),
            1 === e
              ? d.StockBridge.report(
                  "news.information_morningreport.classic_edition_morning_podcast_btn_click"
                )
              : d.StockBridge.report(
                  "news.information_morningreport.classic_early_report_podcast_btn_click"
                ),
            a !== e && ((ge.value || "default" !== de.value) && Te(), le());
        },
        togglePlay: function () {
          ge.value ? Pe() : qe.value || Qe();
        },
        seekBy: function (e) {
          je.value ||
            (e > 0
              ? d.StockBridge.report(
                  "news.information_morningreport.classic_edition_morning_report_fast_click"
                )
              : d.StockBridge.report(
                  "news.information_morningreport.classic_early_report_podcast_rewind_click"
                ),
            oe(e));
        },
        onProgressTouchStart: q,
        onProgressTouchMove: j,
        onProgressTouchEnd: K,
        onProgressMouseDown: F,
        openSettingDialog: function () {
          (E.value = !0),
            d.StockBridge.report(
              "news.information_morningreport.classic_edition_morning_report_podcast_click"
            );
        },
        openVoiceDialog: function () {
          var e, a;
          ge.value || "default" !== de.value
            ? null == (a = (e = d.StockBridge).toast) ||
              a.call(e, "当前为AI实时生成音频，暂不支持切换", "none")
            : ((R.value = {
                voiceMode: I.value,
                voiceIds: Array.isArray(k.value) ? k.value.slice() : [],
              }),
              (b.value = !0));
        },
        handleVoiceVisibleChange: function (e) {
          if (((b.value = e), !e)) {
            We(), (E.value = !1);
            var a = N.value;
            (N.value = null),
              (function () {
                var e = Array.isArray(k.value) ? k.value.slice() : [];
                1 === Number(I.value) &&
                  e.length < 2 &&
                  ((I.value = 0), (k.value = e.slice(0, 1)));
              })(),
              (function () {
                var e = R.value;
                return !(
                  !e ||
                  !Array.isArray(k.value) ||
                  0 === k.value.length ||
                  (e.voiceMode === I.value &&
                    (e.voiceIds || [])
                      .map(function (e) {
                        return String(e);
                      })
                      .sort()
                      .join(",") ===
                      (k.value || [])
                        .map(function (e) {
                          return String(e);
                        })
                        .sort()
                        .join(","))
                );
              })()
                ? ((ge.value || "default" !== de.value) && Te(), le())
                : !0 === a && ae(),
              (R.value = null);
          }
        },
        handleVoiceModeChange: function (e) {
          I.value = Number(e) || 0;
        },
        handleVoiceChange: function (e) {
          var a = e.voiceIds,
            n = e.mode;
          Array.isArray(a) && (k.value = a.slice()),
            void 0 !== n && (I.value = Number(n) || 0);
        },
        handleVoicePreview: function (e) {
          e &&
            (e.sample_audio_url || e.sampleAudioUrl) &&
            (ge.value && he.value && Pe(),
            Ge.value
              ? (null === N.value && (N.value = !0), ne())
              : null === N.value && (N.value = !1));
        },
        toggleLike: De,
        onVoiceMouseDown: ke,
        onVoiceMouseUp: we,
        onVoiceTouchStart: Ie,
        onVoiceTouchMove: Re,
        onVoiceTouchEnd: Me,
        handleVoiceRecognizeEnd: Ne,
        handleVoiceRecognizeCancel: Ce,
        handleRateChange: function (e) {
          var a,
            n,
            t,
            l,
            u = e.rateIndex,
            r = e.rate;
          ge.value || "default" !== de.value
            ? null == (n = (a = d.StockBridge).toast) ||
              n.call(a, "当前为AI实时生成音频，暂不支持调节", "none")
            : (m.value ||
                ((T.value = s.value === f.SPEECH_PLAYING_STATUS.PLAYING),
                (P.value = Ze.value)),
              (S.value = u),
              null == (l = (t = d.StockBridge).setStorage) ||
                l.call(t, f.PLAYBACK_RATE_KEY, u),
              (m.value = !0),
              A.value && (clearTimeout(A.value), (A.value = null)),
              (A.value = setTimeout(function () {
                (A.value = null),
                  ie(r, { expectPlaying: T.value }),
                  setTimeout(function () {
                    m.value = !1;
                  }, 800);
              }, 200)),
              ue());
        },
      }
    );
  },
});
Array ||
  (
    d.resolveComponent("speech-speed-setting") +
    d.resolveComponent("speech-voice-setting") +
    d.resolveComponent("voice-modal")
  )();
var P = d._export_sfc(m, [
  [
    "render",
    function (e, a, n, t, l, u) {
      return d.e(
        { a: e.showSpeechHalfScreen },
        e.showSpeechHalfScreen
          ? d.e(
              {
                b: d.o(function () {
                  return (
                    e.closeSpeechHalfScreen &&
                    e.closeSpeechHalfScreen.apply(e, arguments)
                  );
                }, 3359),
                c: d.f(e.speechTabs, function (a, n, t) {
                  return {
                    a: d.t(a.label),
                    b: "tab-".concat(a.value, "-").concat(e.activeSpeechMode),
                    c: d.n(e.activeSpeechMode === a.value ? "active" : ""),
                    d: d.o(
                      function (n) {
                        return e.switchSpeechMode(a.value);
                      },
                      3360,
                      "tab-".concat(a.value, "-").concat(e.activeSpeechMode)
                    ),
                  };
                }),
                d: d.t(e.speechHalfTitle),
                e: d.n(e.isTitleMarquee ? "marquee" : ""),
                f: e.progressPercent,
                g: "progress-".concat(e.activeSpeechMode),
                h: d.n(e.isSeeking ? "seeking" : ""),
                i: d.o(function () {
                  return (
                    e.onProgressTouchStart &&
                    e.onProgressTouchStart.apply(e, arguments)
                  );
                }, 3361),
                j: d.o(function () {
                  return (
                    e.onProgressTouchMove &&
                    e.onProgressTouchMove.apply(e, arguments)
                  );
                }, 3362),
                k: d.o(function () {
                  return (
                    e.onProgressTouchEnd &&
                    e.onProgressTouchEnd.apply(e, arguments)
                  );
                }, 3363),
                l: d.o(function () {
                  return (
                    e.onProgressTouchEnd &&
                    e.onProgressTouchEnd.apply(e, arguments)
                  );
                }, 3364),
                m: d.o(function () {
                  return (
                    e.onProgressMouseDown &&
                    e.onProgressMouseDown.apply(e, arguments)
                  );
                }, 3365),
                n: d.t(e.currentTimeText),
                o: d.t(e.remainTimeText),
                p: d.o(function () {
                  return (
                    e.openSettingDialog &&
                    e.openSettingDialog.apply(e, arguments)
                  );
                }, 3366),
                q: d.n(e.isSeekDisabled ? "disabled" : ""),
                r: d.o(function (a) {
                  return e.seekBy(-15e3);
                }, 3367),
                s: e.isLoading || e.isInteractLoadingPhase,
              },
              e.isLoading || e.isInteractLoadingPhase
                ? {}
                : {
                    t: d.n(e.isPlaying ? "playing" : ""),
                    v: d.o(function () {
                      return e.togglePlay && e.togglePlay.apply(e, arguments);
                    }, 3368),
                  },
              {
                w: d.n(e.isSeekDisabled ? "disabled" : ""),
                x: d.o(function (a) {
                  return e.seekBy(15e3);
                }, 3369),
                y: d.n(e.isLiked ? "liked" : ""),
                z: d.o(function () {
                  return e.toggleLike && e.toggleLike.apply(e, arguments);
                }, 3370),
                A: d.n(e.canStartOrInterruptInteract ? "" : "disabled"),
                B: d.o(function () {
                  return (
                    e.onVoiceMouseDown && e.onVoiceMouseDown.apply(e, arguments)
                  );
                }, 3371),
                C: d.o(function () {
                  return (
                    e.onVoiceMouseUp && e.onVoiceMouseUp.apply(e, arguments)
                  );
                }, 3372),
                D: d.o(function () {
                  return (
                    e.onVoiceMouseUp && e.onVoiceMouseUp.apply(e, arguments)
                  );
                }, 3373),
                E: d.o(function () {
                  return (
                    e.onVoiceTouchStart &&
                    e.onVoiceTouchStart.apply(e, arguments)
                  );
                }, 3374),
                F: d.o(function () {
                  return (
                    e.onVoiceTouchMove && e.onVoiceTouchMove.apply(e, arguments)
                  );
                }, 3375),
                G: d.o(function () {
                  return (
                    e.onVoiceTouchEnd && e.onVoiceTouchEnd.apply(e, arguments)
                  );
                }, 3376),
                H: d.o(function () {
                  return (
                    e.onVoiceTouchEnd && e.onVoiceTouchEnd.apply(e, arguments)
                  );
                }, 3377),
                I: d.o(function () {}, 3378),
                J: d.o(function () {}, 3379),
                K: d.o(function () {}, 3380),
                L: d.n(e.speechHalfAnimClass),
                M: d.s(e.isPanelHidden ? "visibility:hidden;" : ""),
                N: d.o(function () {
                  return (
                    e.closeSpeechHalfScreen &&
                    e.closeSpeechHalfScreen.apply(e, arguments)
                  );
                }, 3381),
                O: d.o(function () {}, 3382),
                P: d.o(function (a) {
                  return (e.showSettingDialog = a);
                }, 3383),
                Q: d.o(e.handleRateChange, 3384),
                R: d.o(e.openVoiceDialog, 3385),
                S: d.p({
                  visible: e.showSettingDialog,
                  hidden: e.showVoiceDialog,
                  "playback-rate-index": e.currentPlaybackRateIndex,
                  "speech-mode": e.activeSpeechMode,
                  "voice-mode": e.voiceMode,
                  voices: e.podcastVoices,
                }),
                T: d.o(e.handleVoiceVisibleChange, 3386),
                U: d.o(e.handleVoiceModeChange, 3387),
                V: d.o(e.handleVoiceChange, 3388),
                W: d.o(e.handleVoicePreview, 3389),
                X: d.p({
                  visible: e.showVoiceDialog,
                  "speech-mode": e.voiceMode,
                  "voice-ids": e.currentVoiceIds,
                  voices: e.availableVoices,
                }),
                Y: d.sr("voiceModalRef", "a7236487-2"),
                Z: d.o(e.handleVoiceRecognizeEnd, 3390),
                aa: d.o(e.handleVoiceRecognizeCancel, 3391),
                ab: d.p({ theme: e.theme }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a7236487"],
]);
wx.createComponent(P);
