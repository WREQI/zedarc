var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  r = require("./useMilestoneExcite.js"),
  i = require("./constants.js"),
  o = require("../../service/aegis/platform/not-wujie.js"),
  a = require("../../service/stat/mp-weixin.js"),
  s = require("../../utils/getPlatform.js"),
  l = t.defineComponent({
    name: "MilestoneDialog",
    components: {
      ExciteExposure: function () {
        return "./ExciteExposure.js";
      },
      OpenAccountTemplate: function () {
        return "./templates/OpenAccountTemplate/index.js";
      },
      CarouselTemplate: function () {
        return "./templates/CarouselTemplate/index.js";
      },
      PermissionUnlockTemplate: function () {
        return "./templates/PermissionUnlockTemplate/index.js";
      },
      Overlay: function () {
        return "../../common/components/Overlay/index.js";
      },
    },
    props: {
      allowTypes: {
        type: Array,
        default: function () {
          return [];
        },
      },
      disabled: { type: Boolean, default: !1 },
      operateAdvMap: { type: Object, default: void 0 },
      popupActive: { type: Boolean, default: !0 },
    },
    emits: ["capture-screen", "skip", "close"],
    setup: function (l, u) {
      var p,
        c = u.emit,
        d = r.useMilestoneExcite({
          allowTypes: t.toRef(l, "allowTypes"),
          disabled: t.toRef(l, "disabled"),
          operateAdvMap:
            void 0 !== l.operateAdvMap ? t.toRef(l, "operateAdvMap") : void 0,
        }),
        m = d.currentStep,
        v = d.hasExciteShowing,
        f = d.isClosing,
        E = d.canTriggerExcite,
        g = d.advMap,
        h = d.navigate,
        x = d.fetchExciteInfo,
        C = d.handleExposed,
        S = d.handleClose,
        y = d.isKeChuangOpened,
        O = d.hasNqHolder,
        T = t.computed(function () {
          var e;
          return m.value
            ? "permission" === m.value.mode
              ? (null == (e = m.value.permissionCards)
                  ? void 0
                  : e
                      .map(function (e) {
                        return e.config.configKey;
                      })
                      .join("-")) || "permission"
              : m.value.items
                  .map(function (e) {
                    return e.excite_id;
                  })
                  .join("-")
            : "";
        });
      if (s.getPlatform().isMpPlugin) {
        var _ = function () {
          if (v.value && m.value) {
            var e = m.value.items
              .map(function (e) {
                return e.excite_id;
              })
              .join("_");
            a.stat.click(
              "trade.asset.milestone.capturescreen",
              void 0,
              void 0,
              { excite_ids: e }
            ),
              o.aegisReporter.reportEvent("MILESTONE_DIALOG_ONCAPTURE_SCREEN");
          }
        };
        t.watch(
          v,
          function (e) {
            var n, t, r, i, a, s;
            if (e)
              try {
                null ==
                  (r =
                    null ==
                    (t =
                      null == (n = requireMiniProgram())
                        ? void 0
                        : n.main2Plugin())
                      ? void 0
                      : t.onUserCaptureScreen()) || r(_);
              } catch (e) {
                o.aegisReporter.reportEvent(
                  "MILESTONE_DIALOG_ONCAPTURE_SCREEN_ERROR",
                  { ext4: JSON.stringify(e) }
                );
              }
            else
              try {
                null ==
                  (s =
                    null ==
                    (a =
                      null == (i = requireMiniProgram())
                        ? void 0
                        : i.main2Plugin())
                      ? void 0
                      : a.offUserCaptureScreen()) || s(_);
              } catch (e) {
                o.aegisReporter.reportEvent(
                  "MILESTONE_DIALOG_OFFCAPTURE_SCREEN_ERROR",
                  { ext4: JSON.stringify(e) }
                );
              }
          },
          { immediate: !0 }
        ),
          t.onBeforeUnmount(function () {
            var e, n, t;
            try {
              null ==
                (t =
                  null ==
                  (n =
                    null == (e = requireMiniProgram())
                      ? void 0
                      : e.main2Plugin())
                    ? void 0
                    : n.offUserCaptureScreen()) || t(_);
            } catch (e) {
              o.aegisReporter.reportEvent(
                "MILESTONE_DIALOG_OFFCAPTURE_SCREEN_ERROR",
                { ext4: JSON.stringify(e) }
              );
            }
          });
      }
      function R() {
        S(function () {
          return c("close");
        });
      }
      return {
        currentStep: m,
        hasExciteShowing: v,
        isClosing: f,
        canTriggerExcite: E,
        fetchExciteInfo: x,
        fetchAndEvaluate:
          ((p = n(
            e().mark(function n() {
              var t,
                r,
                i,
                o,
                a = arguments;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                          (r = t.exciteData),
                          (i = void 0 === r ? null : r),
                          (o = t.positionData),
                          (e.prev = 2),
                          (e.next = 5),
                          x({
                            useExternalData: !0,
                            exciteData: i,
                            positionData: o,
                          })
                        );
                      case 5:
                        return (e.prev = 5), v.value || c("skip"), e.finish(5);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[2, , 5, 8]]
              );
            })
          )),
          function () {
            return p.apply(this, arguments);
          }),
        handleExposed: C,
        handleClose: R,
        handleMaskClick: function () {
          var e;
          "permission" !== (null == (e = m.value) ? void 0 : e.mode) && R();
        },
        handlePermissionClose: function () {
          S(function () {
            return c("close");
          });
        },
        isKeChuangOpened: y,
        hasNqHolder: O,
        advMap: g,
        navigate: h,
        stepKey: T,
        overlayStyle: "background: rgba(0, 0, 0, 0.8);",
        ExciteType: i.ExciteType,
      };
    },
  });
Array ||
  (
    t.resolveComponent("Overlay") +
    t.resolveComponent("OpenAccountTemplate") +
    t.resolveComponent("ExciteExposure") +
    t.resolveComponent("CarouselTemplate") +
    t.resolveComponent("PermissionUnlockTemplate")
  )();
var u = t._export_sfc(l, [
  [
    "render",
    function (e, n, r, i, o, a) {
      return t.e(
        { a: e.popupActive && e.hasExciteShowing },
        e.popupActive && e.hasExciteShowing
          ? t.e(
              {
                b: e.isClosing ? 1 : "",
                c: t.p({
                  show: !0,
                  "z-index": 999,
                  "custom-class": "milestone-dialog__overlay",
                  "custom-style": e.overlayStyle,
                }),
                d: e.currentStep,
              },
              e.currentStep
                ? t.e(
                    { e: "solo" === e.currentStep.mode },
                    "solo" === e.currentStep.mode
                      ? t.e(
                          {
                            f:
                              e.currentStep.items[0].excite_id ===
                              e.ExciteType.OPEN_ACCOUNT,
                          },
                          e.currentStep.items[0].excite_id ===
                            e.ExciteType.OPEN_ACCOUNT
                            ? {
                                g: t.o(e.handleClose),
                                h: t.p({
                                  data: e.currentStep.items[0],
                                  "is-closing": e.isClosing,
                                }),
                              }
                            : {},
                          { i: t.o(e.handleExposed) }
                        )
                      : "carousel" === e.currentStep.mode
                      ? {
                          k: t.o(e.handleClose),
                          l: t.o(function (n) {
                            return e.navigate(n.href, { channel: n.channel });
                          }),
                          m: t.p({
                            items: e.currentStep.items,
                            "is-closing": e.isClosing,
                            "operate-adv-map": e.advMap,
                          }),
                          n: t.o(e.handleExposed),
                        }
                      : "permission" === e.currentStep.mode
                      ? {
                          p: t.o(e.handlePermissionClose),
                          q: t.p({
                            cards: e.currentStep.permissionCards,
                            "is-closing": e.isClosing,
                            "is-ke-chuang-opened": e.isKeChuangOpened,
                            "has-nq-holder": e.hasNqHolder,
                          }),
                          r: t.o(e.handleExposed),
                        }
                      : {},
                    {
                      j: "carousel" === e.currentStep.mode,
                      o: "permission" === e.currentStep.mode,
                      s: e.stepKey,
                      t: t.o(function () {
                        return (
                          e.handleMaskClick &&
                          e.handleMaskClick.apply(e, arguments)
                        );
                      }),
                    }
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-07a796ca"],
]);
wx.createComponent(u);
