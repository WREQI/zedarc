require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../../../service/aegis/platform/not-wujie.js");
exports.useFaceDetect = function (r) {
  var l,
    a =
      null !== (l = null == r ? void 0 : r.enabled) && void 0 !== l
        ? l
        : e.ref(!0),
    n = e.getCurrentInstance().proxy,
    u = e.ref(null),
    i = e.ref(null),
    o = e.ref(0),
    v = e.ref(0),
    s = e.ref("未检测到人像，请对准镜头"),
    c = e.ref(null),
    E = e.ref(null),
    T = null,
    f = null,
    O = null,
    h = null,
    I = null,
    A = !1,
    d = null,
    p = {
      timers: new Set(),
      intervals: new Set(),
      addTimer: function (e) {
        return this.timers.add(e), e;
      },
      addInterval: function (e) {
        return this.intervals.add(e), e;
      },
      clearTimer: function (e) {
        this.timers.has(e) && (clearTimeout(e), this.timers.delete(e));
      },
      clearInterval: (function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return (
          (t.toString = function () {
            return e.toString();
          }),
          t
        );
      })(function (e) {
        this.intervals.has(e) && (clearInterval(e), this.intervals.delete(e));
      }),
      clearAll: function () {
        this.timers.forEach(function (e) {
          return clearTimeout(e);
        }),
          this.intervals.forEach(function (e) {
            return clearInterval(e);
          }),
          this.timers.clear(),
          this.intervals.clear();
      },
    };
  function C() {
    var r = (function () {
      if (!d)
        try {
          d = e.wx$1.createCanvasContext("realtimeCanvas", n);
        } catch (e) {
          t.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-CANVAS-CREATE-FAIL",
            { ext2: JSON.stringify(e || {}) }
          );
        }
      return d;
    })();
    if (r)
      try {
        if (
          (r.clearRect(0, 0, o.value, v.value),
          u.value && i.value && o.value && v.value)
        ) {
          var l = u.value.x * o.value,
            a = u.value.y * v.value,
            s = i.value.width * o.value,
            c = i.value.height * v.value;
          r.setStrokeStyle("rgba(230, 53, 53, 0.50)"),
            r.setLineWidth(1),
            r.strokeRect(l, a, s, c);
          r.setStrokeStyle("rgb(230, 53, 53)"),
            r.setLineWidth(2),
            r.beginPath(),
            r.moveTo(l, a + 10),
            r.lineTo(l, a),
            r.lineTo(l + 10, a),
            r.stroke(),
            r.beginPath(),
            r.moveTo(l + s - 10, a),
            r.lineTo(l + s, a),
            r.lineTo(l + s, a + 10),
            r.stroke(),
            r.beginPath(),
            r.moveTo(l, a + c - 10),
            r.lineTo(l, a + c),
            r.lineTo(l + 10, a + c),
            r.stroke(),
            r.beginPath(),
            r.moveTo(l + s - 10, a + c),
            r.lineTo(l + s, a + c),
            r.lineTo(l + s, a + c - 10),
            r.stroke();
        }
        r.draw();
      } catch (e) {
        t.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-CANVAS-DRAW-FAIL", {
          ext2: JSON.stringify(e || {}),
        });
      }
  }
  function R(e) {
    if (e && 1 === e.length) {
      var r = e[0];
      (u.value = r.origin),
        (i.value = r.size),
        (function () {
          if (u.value && i.value && E.value && o.value && v.value) {
            var e = u.value.x * o.value,
              r = u.value.y * v.value,
              l = i.value.width * o.value,
              a = i.value.height * v.value,
              n = E.value;
            e >= n.x &&
            r >= n.y &&
            e + l <= n.x + n.width &&
            r + a <= n.y + n.height
              ? ((s.value = "面部完整在框，录制过程中请保持"),
                "inside" !== c.value &&
                  (t.aegisReporter.reportEvent(
                    "MONITOR-APPLY-VIDEO-FACEDETECT-POS-INSIDE"
                  ),
                  (c.value = "inside"),
                  I && (I(), (I = null))),
                h && (p.clearTimer(h), (h = null)))
              : ((s.value = "面部未完整在录制框中"),
                "outside" !== c.value &&
                  (t.aegisReporter.reportEvent(
                    "MONITOR-APPLY-VIDEO-FACEDETECT-POS-OUTSIDE"
                  ),
                  (c.value = "outside")));
          } else s.value = "未检测到人像，请对准镜头";
        })();
    } else
      e && e.length > 1
        ? ((u.value = null),
          (i.value = null),
          (s.value = "背景复杂或有其他人在录制框中"),
          "multi-face" !== c.value &&
            (t.aegisReporter.reportEvent(
              "MONITOR-APPLY-VIDEO-FACEDETECT-POS-MULTI-FACES"
            ),
            (c.value = "multi-face")))
        : ((u.value = null),
          (i.value = null),
          (s.value = "未检测到人像，请对准镜头"),
          "no-face" !== c.value &&
            (t.aegisReporter.reportEvent(
              "MONITOR-APPLY-VIDEO-FACEDETECT-POS-NO-FACE"
            ),
            (c.value = "no-face")));
    C();
  }
  function P() {
    (u.value = null),
      (i.value = null),
      (s.value = "未检测到人像，请对准镜头"),
      "lost" !== c.value &&
        (t.aegisReporter.reportEvent(
          "MONITOR-APPLY-VIDEO-FACEDETECT-POS-FACE-LOST"
        ),
        (c.value = "lost")),
      C();
  }
  function g(r, l) {
    if (!e.wx$1.createVKSession)
      return (
        t.aegisReporter.reportEvent(
          "MONITOR-APPLY-VIDEO-FACEDETECT-INIT-FAIL-NO-VK"
        ),
        void (null == l || l())
      );
    (O = e.wx$1.createVKSession({
      track: { face: { mode: 2 } },
      version: "v1",
    })).start(function (a) {
      if (a)
        return (
          t.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-FACEDETECT-INIT-FAIL-VK-START"
          ),
          void (null == l || l())
        );
      if (
        (t.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-FACEDETECT-INIT-SUC"),
        !r.value.onCameraFrame)
      )
        return (
          t.aegisReporter.reportEvent(
            "MONITOR-APPLY-VIDEO-FACEDETECT-INIT-FAIL-NO-CAMERAFRAME"
          ),
          void (null == l || l())
        );
      (f = r.value.onCameraFrame(function (e) {
        T || (T = e);
      })).start();
      var u = e.wx$1.createSelectorQuery().in(n);
      u.select(".camera-container").boundingClientRect(),
        u.exec(function (e) {
          if (e[0]) {
            (o.value = e[0].width), (v.value = e[0].height);
            var r = v.value * (710 / 1440),
              a = o.value * (599 / 750),
              n = (o.value - a) / 2,
              u = v.value * (168 / 1440);
            (E.value = { x: n, y: u, width: a, height: r }),
              O.on("updateAnchors", R),
              O.on("removeAnchors", P),
              p.addInterval(
                setInterval(function () {
                  T &&
                    O &&
                    (O.detectFace({
                      frameBuffer: T.data,
                      width: T.width,
                      height: T.height,
                      scoreThreshold: 0.5,
                    }),
                    (T = null));
                }, 500)
              );
          } else
            t.aegisReporter.reportEvent(
              "MONITOR-APPLY-VIDEO-FACEDETECT-INIT-FAIL-NO-CONTAINER"
            ),
              null == l || l();
        });
    });
  }
  function D() {
    if (A) {
      if (
        (t.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-FACEDETECT-STOP"),
        p.clearAll(),
        f)
      )
        try {
          f.stop();
        } catch (e) {}
      if (O)
        try {
          O.off("updateAnchors", R), O.off("removeAnchors", P), O.stop();
        } catch (e) {}
      if (d) {
        try {
          d.clearRect(0, 0, o.value, v.value), d.draw();
        } catch (e) {}
        d = null;
      }
      (T = null),
        (f = null),
        (O = null),
        (h = null),
        (I = null),
        (A = !1),
        (c.value = null),
        (s.value = ""),
        (u.value = null),
        (i.value = null);
    }
  }
  return (
    e.watch(a, function (e) {
      e || D();
    }),
    e.onUnmounted(D),
    {
      faceDetectTips: s,
      faceDetectStatus: c,
      start: function (e, r, l, n) {
        a.value &&
          !A &&
          (t.aegisReporter.reportEvent("MONITOR-APPLY-VIDEO-FACEDETECT-START"),
          n && (I = n),
          g(e, l),
          (A = !0));
      },
      stop: D,
    }
  );
};
