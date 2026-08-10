var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = Object.defineProperty,
  u = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (e, n, t) {
    return n in e
      ? o(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  v = require("../../../../../../../common/vendor.js"),
  s = require("../../../../stock-search-ai/utils/RequestUtils.js"),
  f =
    "function" == typeof requirePlugin ? requirePlugin("QCloudAIVoice") : null,
  d = f && f.speechRecognizerManager ? f.speechRecognizerManager() : null,
  p = void 0 !== d ? d : null,
  m = v.defineComponent({
    name: "VoiceModal",
    props: { theme: { type: String, default: "white" } },
    emits: ["recognize-cancel", "recognize-end"],
    setup: function (o, f) {
      var d = this,
        m = f.emit,
        h = f.expose,
        g = v.ref(!1),
        b = v.ref(!1),
        w = v.ref(""),
        x = v.ref(!1),
        y = v.ref(!1),
        C = v.ref(!1),
        T = v.ref(""),
        z = v.ref(""),
        S = v.ref(null),
        O = v.ref(0),
        _ = v.ref(!1),
        k = v.ref(!1),
        M = v.ref(null),
        R = v.ref(!1),
        P = v.ref(0),
        j = v.ref(!0),
        $ = v.ref(null),
        q = v.ref(!1),
        B = {
          appid: 1255521960,
          engine_model_type: "16k_zh_en",
          voice_format: 1,
          word_info: 2,
          filter_punc: 1,
          needvad: 1,
        },
        I = v.computed(function () {
          return "".concat(z.value || "").concat(T.value || "");
        }),
        A = v.computed(function () {
          return !!I.value;
        }),
        V = v.computed(function () {
          return C.value || A.value || x.value;
        }),
        D = v.computed(function () {
          return C.value ? "cancel" : A.value ? "translate" : "recording";
        }),
        E = v.computed(function () {
          return g.value || b.value;
        }),
        Z = v.computed(function () {
          return b.value ? "" : "root-bottom-mask";
        }),
        U = v.computed(function () {
          return g.value
            ? "panel-bottom-enter"
            : b.value && !g.value
            ? "panel-bottom-leave"
            : "";
        }),
        F = v.computed(function () {
          return C.value ? "松手取消" : "松手发送，上滑取消";
        }),
        H = function (e) {
          try {
            null == e || e();
          } catch (e) {}
        },
        K = function () {
          return H(function () {
            return null == p ? void 0 : p.stop();
          });
        },
        L = function () {
          S.value && (clearTimeout(S.value), (S.value = null));
        },
        N = function () {
          g.value &&
            ((g.value = !1),
            (b.value = !0),
            setTimeout(function () {
              b.value = !1;
            }, 250));
        },
        Q = function () {
          L(),
            (C.value = !1),
            (T.value = ""),
            (z.value = ""),
            (y.value = !1),
            (x.value = !1),
            N();
        },
        G = function () {
          var e, n;
          if (j.value) {
            var t = I.value;
            if (t) m("recognize-end", t);
            else {
              var o =
                Date.now() - O.value < 1e3
                  ? "说话时间太短，请重新输入"
                  : "未识别到文字";
              null == (n = (e = v.wx$1).showToast) ||
                n.call(e, { title: o, icon: "none" }),
                m("recognize-end", "");
            }
            Q();
          } else Q();
        },
        J = function () {
          return (
            (e = d),
            null,
            (n = t().mark(function e() {
              var n, o, u;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (R.value) {
                          e.next = 14;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (R.value = !0),
                          (e.next = 5),
                          s.getTencentCloudAudioToken()
                        );
                      case 5:
                        (n = e.sent) &&
                          n.cloudToken &&
                          ((o = n.cloudToken.timestamp),
                          (u = Date.now() / 1e3),
                          (P.value = o ? u - o : 0),
                          (M.value = n.cloudToken)),
                          (e.next = 11);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(1));
                      case 11:
                        return (e.prev = 11), (R.value = !1), e.finish(11);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 9, 11, 14]]
              );
            })),
            new Promise(function (t, o) {
              var u = function (e) {
                  try {
                    r(n.next(e));
                  } catch (e) {
                    o(e);
                  }
                },
                l = function (e) {
                  try {
                    r(n.throw(e));
                  } catch (e) {
                    o(e);
                  }
                },
                r = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(u, l);
                };
              r((n = n.apply(e, null)).next());
            })
          );
          var e, n;
        },
        W = function () {
          var e, n;
          q.value ||
            ((q.value = !0),
            null == (n = (e = v.wx$1).showModal) ||
              n.call(e, {
                title: "需要录音权限",
                content: "语音交互需要使用麦克风，请在设置中开启录音权限",
                confirmText: "去开启",
                success: function (e) {
                  var n, t;
                  (null == e ? void 0 : e.confirm) &&
                    (null == (t = (n = v.wx$1).openSetting) ||
                      t.call(n, {
                        success: function (e) {
                          var n;
                          $.value = !!(null ==
                          (n = null == e ? void 0 : e.authSetting)
                            ? void 0
                            : n["scope.record"]);
                        },
                      }));
                },
                complete: function () {
                  q.value = !1;
                },
              }));
        },
        X = {
          OnRecognitionStart: function () {
            j.value = !0;
          },
          OnSentenceBegin: function () {},
          OnRecognitionResultChange: function (e) {
            var n;
            (null == e ? void 0 : e.result) &&
              (T.value = "".concat(
                (null == (n = e.result) ? void 0 : n.voice_text_str) || ""
              ));
          },
          OnSentenceEnd: function (e) {
            var n;
            (null == e ? void 0 : e.result) &&
              ((z.value = "".concat(
                (null == (n = e.result) ? void 0 : n.voice_text_str) || ""
              )),
              (T.value = ""));
          },
          OnRecognitionComplete: function () {
            k.value ? Q() : _.value || (G(), (_.value = !0));
          },
          OnError: function (e) {
            var n,
              t,
              o =
                (null == e ? void 0 : e.errMsg) ||
                (null == e ? void 0 : e.message) ||
                "";
            if (
              -120001 === (null == e ? void 0 : e.errCode) ||
              103 === (null == e ? void 0 : e.errno) ||
              o.includes("authorize") ||
              o.includes("permission") ||
              o.includes("auth deny")
            ) {
              K(), Q();
              var u = function () {
                ($.value = !1), W(), m("recognize-cancel");
              };
              null == (t = (n = v.wx$1).getSetting) ||
                t.call(n, {
                  success: function (e) {
                    var n;
                    !0 ===
                    (null == (n = null == e ? void 0 : e.authSetting)
                      ? void 0
                      : n["scope.record"])
                      ? (($.value = !0), m("recognize-cancel"))
                      : u();
                  },
                  fail: u,
                });
            }
          },
        },
        Y = function () {
          var n, t, o, s, f;
          if (p) {
            if (!1 === $.value) return W(), void m("recognize-cancel");
            if (null === $.value)
              return (
                (null == (o = v.wx$1) ? void 0 : o.authorize) &&
                  v.wx$1.authorize({
                    scope: "scope.record",
                    success: function () {
                      $.value = !0;
                    },
                    fail: function () {
                      $.value = !1;
                    },
                  }),
                void m("recognize-cancel")
              );
            if (
              !(M.value && M.value.expire - (Date.now() / 1e3 - P.value) >= 60)
            )
              return (
                J(),
                null == (f = (s = v.wx$1).showToast) ||
                  f.call(s, {
                    title: "正在初始化语音，请稍后重试",
                    icon: "none",
                  }),
                void m("recognize-cancel")
              );
            if (!x.value) {
              (y.value = !0),
                (T.value = ""),
                (z.value = ""),
                (C.value = !1),
                (_.value = !1),
                (k.value = !1),
                L(),
                (S.value = setTimeout(function () {
                  ee();
                }, 3e4)),
                H(function () {
                  var e, n;
                  return null == (n = (e = v.wx$1).vibrateShort)
                    ? void 0
                    : n.call(e, { type: "medium" });
                });
              try {
                p.start(
                  ((d = (function (n, t) {
                    for (var o in t || (t = {})) a.call(t, o) && c(n, o, t[o]);
                    if (r) {
                      var u,
                        l = e(r(t));
                      try {
                        for (l.s(); !(u = l.n()).done; ) {
                          o = u.value;
                          i.call(t, o) && c(n, o, t[o]);
                        }
                      } catch (e) {
                        l.e(e);
                      } finally {
                        l.f();
                      }
                    }
                    return n;
                  })({}, B)),
                  (h = {
                    secretid: M.value.secretId,
                    secretkey: M.value.secretKey,
                    token: M.value.token,
                  }),
                  u(d, l(h)))
                ),
                  (x.value = !0),
                  (g.value = !0),
                  (b.value = !1),
                  (O.value = Date.now());
              } catch (e) {
                Q();
              }
              var d, h;
            }
          } else
            null == (t = (n = v.StockBridge).toast) ||
              t.call(n, "当前环境不支持语音识别");
        },
        ee = function () {
          return (
            (y.value = !1),
            C.value
              ? ((k.value = !0), K(), m("recognize-cancel"), void Q())
              : x.value
              ? ((x.value = !1),
                (_.value = !1),
                void setTimeout(function () {
                  (k.value = !1),
                    K(),
                    setTimeout(function () {
                      _.value || (G(), (_.value = !0));
                    }, 1e3);
                }, 500))
              : (Q(), void m("recognize-cancel"))
          );
        },
        ne = function (e) {
          if (x.value) {
            var n = e > 100;
            C.value !== n &&
              ((C.value = n),
              n &&
                H(function () {
                  var e, n;
                  return null == (n = (e = v.wx$1).vibrateShort)
                    ? void 0
                    : n.call(e, { type: "medium" });
                }));
          }
        },
        te = function () {
          var e, n;
          (g.value = !0),
            (b.value = !1),
            (w.value = ""),
            null == (n = (e = v.StockBridge).mtaReport) ||
              n.call(e, { busi: "news", eventName: "speech_voice_modal_brow" });
        };
      return (
        v.watch(x, function (e) {
          e && !w.value && (w.value = "panel-bubble-enter");
        }),
        v.onMounted(function () {
          !(function () {
            var e;
            if (p)
              try {
                J(),
                  p &&
                    Object.entries(X).forEach(function (e) {
                      var t = n(e, 2),
                        o = t[0],
                        u = t[1];
                      p[o] = u;
                    }),
                  (null == (e = v.wx$1) ? void 0 : e.getSetting) &&
                    v.wx$1.getSetting({
                      success: function (e) {
                        var n,
                          t =
                            null == (n = null == e ? void 0 : e.authSetting)
                              ? void 0
                              : n["scope.record"];
                        $.value = !0 === t || (!1 !== t && null);
                      },
                    });
              } catch (e) {}
          })();
        }),
        v.onBeforeUnmount(function () {
          !(function () {
            if (p) {
              K();
              var e = function () {};
              Object.keys(X).forEach(function (n) {
                p[n] = e;
              });
            }
          })();
        }),
        "function" == typeof h &&
          h({
            startRecognize: Y,
            stopRecognize: ee,
            onTouchMove: ne,
            onShow: te,
            onClose: N,
          }),
        {
          showModal: g,
          isLeaving: b,
          popAnimClass: w,
          isRecording: x,
          isPressed: y,
          isInCancelZone: C,
          voiceText: I,
          hasVoiceText: A,
          showPopBubble: V,
          popBubbleClass: D,
          rootModalCanShow: E,
          rootModalClass: Z,
          bottomModalAnimClass: U,
          tipText: F,
          startRecognize: Y,
          stopRecognize: ee,
          onTouchMove: ne,
          onShow: te,
          onClose: N,
        }
      );
    },
  }),
  h = v._export_sfc(m, [
    [
      "render",
      function (e, n, t, o, u, l) {
        return v.e(
          { a: e.rootModalCanShow },
          e.rootModalCanShow
            ? v.e(
                { b: e.showPopBubble },
                e.showPopBubble
                  ? v.e(
                      { c: e.isInCancelZone },
                      e.isInCancelZone
                        ? {}
                        : e.hasVoiceText
                        ? { e: v.t(e.voiceText || "") }
                        : {},
                      {
                        d: e.hasVoiceText,
                        f: v.n(
                          e.hasVoiceText
                            ? "wave-img--translate"
                            : "wave-img--recording"
                        ),
                        g: v.n(e.popBubbleClass),
                        h: v.n(e.popAnimClass),
                      }
                    )
                  : {},
                {
                  i: v.t(e.tipText),
                  j: v.n(e.isInCancelZone ? "" : "light"),
                  k: v.n(e.bottomModalAnimClass),
                  l: v.n(e.rootModalClass),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-0c5b64c5"],
  ]);
wx.createComponent(h);
