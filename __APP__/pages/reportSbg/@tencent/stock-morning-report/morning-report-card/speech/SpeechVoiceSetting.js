require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  n = [],
  i = [
    { label: "单人模式", value: 0 },
    { label: "双人模式", value: 1 },
  ],
  t = e.defineComponent({
    name: "SpeechVoiceSetting",
    props: {
      visible: { type: Boolean, default: !1 },
      speechMode: { type: Number, default: 0 },
      voiceIds: {
        type: Array,
        default: function () {
          return [];
        },
      },
      voices: {
        type: Array,
        default: function () {
          return n;
        },
      },
    },
    emits: [
      "update:visible",
      "close",
      "closed",
      "mode-change",
      "voice-change",
      "voice-preview",
      "confirm",
    ],
    setup: function (n, t) {
      var u = t.emit,
        a = e.ref(!1),
        o = e.ref(""),
        l = e.ref(null),
        c = e.ref(0),
        r = e.ref([]),
        v = e.ref(i),
        f = e.computed(function () {
          return Array.isArray(n.voices) ? n.voices : [];
        }),
        d = e.computed(function () {
          return 1 === c.value ? 2 : 1;
        }),
        s = function () {
          l.value && (clearTimeout(l.value), (l.value = null));
        },
        h = function () {
          var e = r.value.slice(),
            n = e
              .map(function (e) {
                return f.value.find(function (n) {
                  return String(n.id) === e;
                });
              })
              .filter(Boolean),
            i = 1 === c.value && e.length < 2 ? 0 : c.value;
          u("voice-change", {
            mode: c.value,
            effectiveMode: i,
            voiceIds: e,
            voiceList: n,
          });
        };
      return (
        e.watch(
          function () {
            return n.visible;
          },
          function (e) {
            e
              ? (s(), (a.value = !0), (o.value = "fade-enter-active"))
              : a.value &&
                ((o.value = "fade-leave-active"),
                s(),
                (l.value = setTimeout(function () {
                  (a.value = !1), (l.value = null), u("closed");
                }, 300)));
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return n.speechMode;
          },
          function (e) {
            c.value = Number(e) || 0;
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return n.voiceIds;
          },
          function (e) {
            Array.isArray(e) &&
              e.length &&
              (r.value = e.slice(0, 2).map(function (e) {
                return String(e);
              }));
          },
          { immediate: !0 }
        ),
        e.onBeforeUnmount(function () {
          s();
        }),
        {
          showDialog: a,
          dialogAnimClass: o,
          activeMode: c,
          selectedVoiceIds: r,
          modeTabs: v,
          voiceList: f,
          maxSelectCount: d,
          handleClose: function () {
            u("update:visible", !1), u("close");
          },
          handleConfirm: function () {
            var e = r.value.slice(),
              n = e
                .map(function (e) {
                  return f.value.find(function (n) {
                    return String(n.id) === e;
                  });
                })
                .filter(Boolean),
              i = 1 === c.value && e.length < 2 ? 0 : c.value;
            u("confirm", {
              mode: c.value,
              effectiveMode: i,
              voiceIds: e,
              voiceList: n,
            }),
              u("update:visible", !1),
              u("close");
          },
          isVoiceChecked: function (e) {
            return r.value.includes(String(e));
          },
          switchMode: function (e) {
            if (c.value !== e) {
              var n = c.value;
              if (
                ((c.value = e),
                0 === e &&
                  r.value.length > 1 &&
                  ((r.value = r.value.slice(0, 1)), h()),
                0 === n && 1 === e)
              ) {
                var i = r.value.slice();
                if (i.length < 2) {
                  var t = f.value.find(function (e) {
                    return e && void 0 !== e.id && !i.includes(String(e.id));
                  });
                  t && (i.push(String(t.id)), (r.value = i), h());
                }
              }
              u("mode-change", e);
            }
          },
          selectVoice: function (e) {
            if (e) {
              var n = String(e.id),
                i = r.value.slice(),
                t = i.indexOf(n);
              if (0 === c.value) {
                if (-1 !== t && 1 === i.length) return;
                u("voice-preview", e), (r.value = [n]);
              } else
                -1 !== t
                  ? (i.splice(t, 1), i.push(n))
                  : (u("voice-preview", e),
                    i.push(n),
                    i.length > 2 && i.shift()),
                  (r.value = i);
              h();
            }
          },
        }
      );
    },
  }),
  u = e._export_sfc(t, [
    [
      "render",
      function (n, i, t, u, a, o) {
        return e.e(
          { a: n.showDialog },
          n.showDialog
            ? {
                b: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 5587),
                c: e.f(n.modeTabs, function (i, t, u) {
                  return {
                    a: e.t(i.label),
                    b: i.value,
                    c: e.n(n.activeMode === i.value ? "active" : ""),
                    d: e.o(
                      function (e) {
                        return n.switchMode(i.value);
                      },
                      5588,
                      i.value
                    ),
                  };
                }),
                d: e.f(n.voiceList, function (i, t, u) {
                  return {
                    a: i.avatar_url || i.avatar || "",
                    b: e.t(i.name),
                    c: e.t(i.description || i.desc || ""),
                    d: e.n(n.isVoiceChecked(i.id) ? "checked" : ""),
                    e: i.id,
                    f: e.n(t === n.voiceList.length - 1 ? "last" : ""),
                    g: e.o(
                      function (e) {
                        return n.selectVoice(i);
                      },
                      5589,
                      i.id
                    ),
                  };
                }),
                e: e.o(function () {
                  return n.handleConfirm && n.handleConfirm.apply(n, arguments);
                }, 5590),
                f: e.o(function () {}, 5591),
                g: e.n(n.dialogAnimClass),
                h: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 5592),
                i: e.o(function () {}, 5593),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-336e9583"],
  ]);
wx.createComponent(u);
