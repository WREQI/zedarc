require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  a = require("../../service/sdk/lib/enum.js");
require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js");
var i = require("../../service/aegis/platform/not-wujie.js"),
  o = require("../../mixin/platforms/index.js"),
  s = null,
  u = !1,
  c = {
    mixins: [o.pluginMixins],
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function () {
      var a = n.wx$1.getSystemInfoSync().SDKVersion,
        o = n.gt(a, "3.3.0"),
        c = n.getCurrentInstance().proxy,
        l = n.ref("front"),
        p = null,
        f = !1,
        v = null,
        d = null,
        h = null,
        m = null,
        O = n.ref(!1),
        g = n.ref([]),
        x = n.ref(0),
        R = n.ref("身份证不在框内，请调整"),
        P = n.ref(!1),
        A = n.ref(0),
        E = n.ref(0),
        I = n.ref(0),
        T = n.ref(0);
      function S(e) {
        (u = !0),
          (f = !1),
          n.index.hideLoading(),
          n.index.navigateBack({
            success: function () {
              s.emit("acceptDataFromOpenedPage", e);
            },
          });
      }
      function y() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = r(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        var t = n.wx$1.createSelectorQuery().in(c);
                        t.select(".camera-wrap").boundingClientRect(),
                          t.exec(function (t) {
                            if (t[0]) {
                              var r = t[0],
                                n = I.value,
                                a = T.value,
                                i = r.width,
                                o = r.height;
                              if (n && a && i && o) {
                                var s,
                                  u = 0,
                                  c = 0;
                                n / a > i / o
                                  ? (u = (i - n * (s = o / a)) / 2)
                                  : (c = (o - a * (s = i / n)) / 2);
                                var l = 0.9 * r.width,
                                  p = 0.63 * l,
                                  f = r.left + (r.width - l) / 2,
                                  v = r.top + (r.height - p) / 2,
                                  d = {
                                    left: f,
                                    top: v,
                                    right: f + l,
                                    bottom: v + p,
                                  },
                                  h = g.value,
                                  m = h.map(function (e) {
                                    return { x: e.x * s + u, y: e.y * s + c };
                                  }),
                                  O = h.map(function (e) {
                                    return {
                                      x: e.x * s + r.left + u,
                                      y: e.y * s + r.top + c,
                                    };
                                  });
                                e({
                                  tipBox: d,
                                  scaledIdCardBox: m,
                                  scaledIdCardBoxOnScreen: O,
                                });
                              } else e(null);
                            } else e(null);
                          });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      return (
        n.onMounted(function () {
          !(function () {
            try {
              if (!(p = n.index.createCameraContext()))
                return void i.aegisReporter.reportEvent(
                  "MONITOR-APPLY-CREATE-CAMERA-CONTEXT-FAIL"
                );
              if (!o) return;
              (h = p.onCameraFrame(function (e) {
                v || (v = e);
              })) ||
                i.aegisReporter.reportEvent(
                  "MONITOR-APPLY-ON-CAMERA-FRAME-FAIL"
                );
            } catch (e) {
              i.aegisReporter.reportEvent("MONITOR-APPLY-INIT-CAMERA-ERROR", {
                ext2: JSON.stringify(e || {}),
              });
            }
          })(),
            o
              ? ((function () {
                  try {
                    if (
                      !(m = n.wx$1.createVKSession({
                        track: { IDCard: { mode: 2 } },
                        version: "v1",
                      }))
                    )
                      return (
                        i.aegisReporter.reportEvent(
                          "MONITOR-APPLY-CREATE-VK-SESSION-FAIL"
                        ),
                        void (P.value = !1)
                      );
                    m.start(function (a) {
                      if (a)
                        return (
                          i.aegisReporter.reportEvent(
                            "MONITOR-APPLY-TAKE-PHOTO-VK-START-FAIL",
                            { ext2: JSON.stringify(a || {}) }
                          ),
                          void (P.value = !1)
                        );
                      if (((P.value = !0), h))
                        try {
                          h.start();
                        } catch (e) {
                          i.aegisReporter.reportEvent(
                            "MONITOR-APPLY-LISTENER-START-FAIL",
                            { ext2: JSON.stringify(e || {}) }
                          );
                        }
                      var o = n.wx$1.createSelectorQuery().in(c);
                      o.select(".camera-wrap").boundingClientRect(),
                        o.exec(function (e) {
                          e[0] &&
                            ((A.value = e[0].width), (E.value = e[0].height));
                        }),
                        m.on("updateAnchors", function (n) {
                          if (n && n[0]) {
                            var a = n[0];
                            (O.value = !0),
                              (g.value = a.box),
                              r(
                                e().mark(function r() {
                                  var n, a, i, o, s, u, c, l, p;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), y();
                                          case 2:
                                            if ((n = e.sent)) {
                                              e.next = 5;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 5:
                                            if (
                                              ((a = n.tipBox),
                                              (i = n.scaledIdCardBoxOnScreen),
                                              g.value && 4 === g.value.length)
                                            ) {
                                              e.next = 8;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              ((x.value = 2),
                                              void (R.value =
                                                "身份证不在框内，请调整"))
                                            );
                                          case 8:
                                            (o = !0),
                                              (s = t(i)),
                                              (e.prev = 10),
                                              s.s();
                                          case 12:
                                            if ((u = s.n()).done) {
                                              e.next = 22;
                                              break;
                                            }
                                            if (
                                              ((c = u.value),
                                              (l = []),
                                              c.x < a.left
                                                ? l.push("左")
                                                : c.x > a.right && l.push("右"),
                                              c.y < a.top
                                                ? l.push("上")
                                                : c.y > a.bottom &&
                                                  l.push("下"),
                                              !(l.length > 0))
                                            ) {
                                              e.next = 20;
                                              break;
                                            }
                                            return (
                                              (o = !1),
                                              (p = []),
                                              l.includes("上") && p.push("上"),
                                              l.includes("下") && p.push("下"),
                                              l.includes("左") && p.push("左"),
                                              l.includes("右") && p.push("右"),
                                              (R.value = "请将身份证".concat(
                                                p.join(""),
                                                "侧移入框内"
                                              )),
                                              e.abrupt("break", 22)
                                            );
                                          case 20:
                                            e.next = 12;
                                            break;
                                          case 22:
                                            e.next = 27;
                                            break;
                                          case 24:
                                            (e.prev = 24),
                                              (e.t0 = e.catch(10)),
                                              s.e(e.t0);
                                          case 27:
                                            return (
                                              (e.prev = 27), s.f(), e.finish(27)
                                            );
                                          case 30:
                                            x.value = o ? 1 : 2;
                                          case 31:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    r,
                                    null,
                                    [[10, 24, 27, 30]]
                                  );
                                })
                              )();
                          }
                        }),
                        m.on("removeAnchors", function (e) {
                          (O.value = !1), (x.value = 0), (g.value = []);
                        });
                    });
                  } catch (e) {
                    i.aegisReporter.reportEvent("MONITOR-APPLY-INIT-VK-ERROR", {
                      ext2: JSON.stringify(e || {}),
                    }),
                      (P.value = !1);
                  }
                })(),
                (d = setInterval(function () {
                  m &&
                    v &&
                    ((I.value = v.width),
                    (T.value = v.height),
                    m.detectIDCard({
                      frameBuffer: v.data,
                      width: v.width,
                      height: v.height,
                      getAffineImg: !0,
                    }),
                    (v = null));
                }, 500)))
              : i.aegisReporter.reportEvent(
                  "MONITOR-APPLY-TAKE-PHOTO-VK-NOT-SUPPORT"
                );
        }),
        {
          side: l,
          takePhoto: function () {
            if (!p)
              return (
                i.aegisReporter.reportEvent(
                  "MONITOR-APPLY-CAMERA-CONTEXT-NULL"
                ),
                void n.index.showToast({
                  title: "相机初始化失败",
                  icon: "none",
                })
              );
            !o || !P.value || (2 !== x.value && 0 !== x.value)
              ? f ||
                ((f = !0),
                n.index.showLoading({ title: "拍照中" }),
                n.index.vibrateShort({ type: "medium" }),
                p.takePhoto({
                  quality: "high",
                  success: function (e) {
                    i.aegisReporter.reportEvent(
                      "MONITOR-APPLY-TAKE-PHOTO-SUC",
                      { ext2: "".concat(e.tempImagePath) }
                    ),
                      n.index.compressImage({
                        src: e.tempImagePath,
                        quality: 80,
                        success: function (e) {
                          i.aegisReporter.reportEvent(
                            "MONITOR-APPLY-COMPRESS-IMAGE-SUC",
                            { ext2: "".concat(e.tempFilePath) }
                          ),
                            S({ tempFilePaths: [e.tempFilePath] });
                        },
                        fail: function (e) {
                          i.aegisReporter.reportEvent(
                            "MONITOR-APPLY-COMPRESS-IMAGE-FAIL",
                            {
                              ext2: "".concat(e.tempFilePath),
                              ext3: JSON.stringify(e || {}),
                            }
                          ),
                            S(e);
                        },
                      });
                  },
                  fail: function (e) {
                    i.aegisReporter.reportEvent(
                      "MONITOR-APPLY-TAKE-PHOTO-FAIL",
                      {
                        ext2: "".concat(e.tempImagePath),
                        ext3: JSON.stringify(e || {}),
                      }
                    ),
                      S(e);
                  },
                }))
              : y().then(function (e) {
                  e &&
                    i.aegisReporter.reportEvent(
                      "MONITOR-APPLY-TAKE-PHOTO-WHEN-NOT-INSIDE",
                      { ext2: x.value, ext3: JSON.stringify(e || {}) }
                    );
                });
          },
          error: function (e) {
            i.aegisReporter.reportEvent("MONITOR-APPLY-CAMERA-ERROR", {
              ext2: JSON.stringify(e || {}),
            }),
              n.index.showModal({
                title: "温馨提示",
                content: "相机无法使用，请检查相机权限是否开启",
                showCancel: !1,
                success: function () {
                  n.index.navigateBack();
                },
              });
          },
          select: function (e) {
            l.value = e;
          },
          cancel: function () {
            n.index.navigateBack();
          },
          collisionStatus: x,
          collisionFailText: R,
          timer: d,
          listener: h,
          isSupport: o,
          vkAvailable: P,
        }
      );
    },
    onLoad: function (e) {
      (this.side = e.side || "front"),
        (s = this.getOpenerEventChannel()).on(
          "acceptDataFromOpenerPage",
          function (e) {}
        );
    },
    onUnload: function () {
      clearInterval(this.timer),
        this.listener && this.listener.stop(),
        u ||
          s.emit("acceptDataFromOpenedPage", {
            retcode: a.ENUM_SDK_RESULTS.CANCELED,
          });
    },
  };
Array ||
  (
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("ApplyWrap") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var l = n._export_sfc(c, [
  [
    "render",
    function (e, t, r, a, i, o) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.t("front" === a.side ? "人像面" : "国徽面"),
          c: 1 === a.collisionStatus,
        },
        (a.collisionStatus, {}),
        { d: 2 === a.collisionStatus },
        2 === a.collisionStatus ? { e: n.t(a.collisionFailText) } : {},
        {
          f: n.o(function () {
            return a.error && a.error.apply(a, arguments);
          }),
          g: n.n("front" === a.side ? "mask-front" : "mask-back"),
          h: n.o(function () {
            return a.cancel && a.cancel.apply(a, arguments);
          }),
          i: n.o(function () {
            return a.takePhoto && a.takePhoto.apply(a, arguments);
          }),
          j: a.isSupport && a.vkAvailable && 1 !== a.collisionStatus ? 1 : "",
          k: n.p({ id: "mp-dialog" }),
          l: n.sr("#global-wrap", "dec9466c-0"),
          m: n.p({
            id: "global-wrap",
            filePath: "/apply/take-photo",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dec9466c"],
]);
wx.createPage(l);
