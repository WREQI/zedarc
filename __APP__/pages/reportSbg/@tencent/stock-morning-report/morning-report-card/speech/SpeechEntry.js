var e = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-news-core/utils/shy/index.js"),
  n = { READY: 0, PLAYING: 1, PAUSE: 2, ERROR: 3, STOPPED: 4 },
  l = [
    0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
  ],
  r = "news-morning-report-speech-play",
  o = "news-morning-report-speech-status",
  i = e.defineComponent({
    name: "SpeechEntry",
    props: [
      "speechInfo",
      "speechIds",
      "originalId",
      "title",
      "aiPodcast",
      "theme",
    ],
    setup: function (i) {
      var t,
        u,
        s = e.inject("env", {}),
        c = e.ref(null),
        d = e.ref(null),
        p = e.ref(null),
        v = e.ref(n.READY),
        f = e.ref(!1),
        g = e.ref(!1),
        P = e.ref(!0),
        I = e.ref(s.IS_ZXG),
        _ = e.ref(0),
        y = e.ref(!1),
        S = e.ref(0),
        h = e.ref(5),
        A = e.computed(function () {
          return v.value === n.PLAYING
            ? "playing"
            : v.value === n.PAUSE
            ? "pause"
            : "ready";
        }),
        w = function () {
          (v.value = n.PLAYING), (y.value = !1);
        },
        E = function () {
          v.value = f.value || y.value ? n.READY : n.PAUSE;
        },
        k = function () {
          (v.value = n.READY), (y.value = !0);
        },
        m = function () {
          var e = i.speechInfo,
            a = e && e.length;
          if (e && a) {
            for (var n = null, l = 0; l < a; l++) {
              var r = e[l];
              if (r && +r.model === _.value) {
                n = r;
                break;
              }
            }
            if (!n)
              for (var o = 0; o < a; o++) {
                var t = e[o];
                if (t && t.play_url) {
                  n = t;
                  break;
                }
              }
            n && ((d.value = n), (S.value = n.play_time || 0));
          }
        },
        b = function () {
          (p.value = e.wx$1.getBackgroundAudioManager()),
            p.value.onEnded(k),
            p.value.onPlay(w),
            p.value.onPause(E),
            p.value.onStop(k),
            p.value.onError(function () {
              f.value = !0;
            });
          var a = e.StockBridge.getStorage("speech_player_playbackRate");
          (a || 0 === a) && ((h.value = +a), (p.value.playbackRate = l[+a]));
        },
        Y = function () {
          var a = i.speechInfo,
            n = a && a.length;
          if ((k(), a && n)) {
            for (var l = !1, r = null, o = 0; o < n; o++) {
              var t = a[o];
              t &&
                (+t.model === _.value && (l = !0), !r && t.play_url && (r = t));
            }
            !l && r && (_.value = +r.model),
              m(),
              d.value &&
                (b(),
                e.StockBridge.report("news.morning_report.speech_button_show", {
                  newsId: i.originalId,
                  newsid: i.originalId,
                }));
          }
        },
        R = function () {
          d.value &&
            d.value.play_url &&
            (p.value || b(),
            f.value && p.value.reload && p.value.reload(),
            v.value === n.READY &&
              ((p.value.title = i.title || "微证券"),
              (p.value.src = d.value.play_url),
              (p.value.coverImgUrl =
                "https://st.gtimg.com/design/aa64dcfe48029caff7e3c7262e3cd220.png")),
            p.value.play(),
            (y.value = !1),
            I.value || (v.value = n.PLAYING),
            e.StockBridge.report("news.morning_report.speech_button_click", {
              newsId: i.originalId,
              newsid: i.originalId,
            }));
        },
        C = function () {
          p.value && p.value.pause(), (v.value = n.PAUSE);
        },
        N = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (e.originalId && e.originalId !== i.originalId) ||
            (void 0 !== e.playStatus && (v.value = e.playStatus));
        };
      return (
        e.watch(
          function () {
            return i.speechInfo;
          },
          function () {
            Y();
          }
        ),
        i.aiPodcast
          ? null == (u = (t = e.StockBridge).busOn) || u.call(t, o, N)
          : I.value &&
            a.shy.subscribeNotification(
              "QSAudioPlayerCallbackNotification",
              "",
              function (e) {
                e &&
                  (function (e) {
                    switch (
                      (e.news_id &&
                        /^ne[s,u,k,j,n,w]SN/.test(e.news_id) &&
                        (e.news_id = e.news_id.substr(3)),
                      e.type)
                    ) {
                      case "progress":
                        e.news_id === i.originalId
                          ? void 0 !== e.model &&
                            e.model !== _.value &&
                            ((_.value = +e.model), m())
                          : k();
                        break;
                      case "syncStatus":
                        e.player_status &&
                          e.news_id === i.originalId &&
                          (+e.player_status === n.PLAYING &&
                            (v.value = n.PLAYING),
                          v.value === n.PLAYING &&
                            +e.player_status === n.PAUSE &&
                            C(),
                          v.value === n.PAUSE &&
                            +e.player_status === n.PLAYING &&
                            R(),
                          v.value === n.READY &&
                            +e.player_status === n.PLAYING &&
                            w(),
                          v.value === n.READY &&
                            +e.player_status === n.PAUSE &&
                            E(),
                          +e.player_status === n.ERROR && ((f.value = !0), E()),
                          +e.player_status === n.STOPPED && k());
                    }
                  })(e);
              },
              !1
            ),
        e.onMounted(function () {
          i.aiPodcast
            ? e.StockBridge.report("news.morning_report.speech_button_show", {
                newsId: i.originalId,
                newsid: i.originalId,
              })
            : a.shy.getSystemInfo(function (e) {
                e && e.audioPlayModel && (_.value = +e.audioPlayModel), Y();
              });
        }),
        e.onUnmounted(function () {
          var a, n;
          i.aiPodcast
            ? null == (n = (a = e.StockBridge).busOff) || n.call(a, o, N)
            : I.value || k();
        }),
        {
          audioRef: c,
          speech: d,
          innerAudioContext: p,
          playStatus: v,
          SPEECH_PLAYING_STATUS: n,
          PLAYBACK_RATE: l,
          playIsError: f,
          isWeb: g,
          isMP: P,
          isAPP: I,
          model: _,
          isStopped: y,
          duration: S,
          currentPlaybackRateIndex: h,
          cardStatusModifier: A,
          switchSpeech: m,
          play: R,
          pause: C,
          onCardClick: function () {
            var a, l;
            if (i.aiPodcast)
              return (
                e.StockBridge.report(
                  "news.morning_report.speech_button_click",
                  { newsId: i.originalId, newsid: i.originalId }
                ),
                void (
                  null == (l = (a = e.StockBridge).busEmit) ||
                  l.call(a, r, { originalId: i.originalId, action: "toggle" })
                )
              );
            d.value || Y(), v.value === n.PLAYING ? C() : R();
          },
          onEntryClick: function () {
            var a, n;
            i.aiPodcast &&
              (e.StockBridge.report("news.morning_report.speech_card_click", {
                newsId: i.originalId,
                newsid: i.originalId,
              }),
              null == (n = (a = e.StockBridge).busEmit) ||
                n.call(a, r, { originalId: i.originalId, action: "open" }));
          },
          onPodcastStatus: N,
        }
      );
    },
  }),
  t = e._export_sfc(i, [
    [
      "render",
      function (a, n, l, r, o, i) {
        return e.e(
          {
            a: e.o(function () {
              return a.onCardClick && a.onCardClick.apply(a, arguments);
            }, 4904),
            b: e.n("speech-card--".concat(a.cardStatusModifier)),
            c: e.o(function () {
              return a.onEntryClick && a.onEntryClick.apply(a, arguments);
            }, 4905),
            d:
              !a.aiPodcast &&
              !a.isMP &&
              !a.isAPP &&
              a.speech &&
              a.speech.play_url,
          },
          a.aiPodcast || a.isMP || a.isAPP || !a.speech || !a.speech.play_url
            ? {}
            : { e: a.speech.play_url }
        );
      },
    ],
    ["__scopeId", "data-v-5a054355"],
  ]);
wx.createComponent(t);
