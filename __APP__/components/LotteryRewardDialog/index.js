var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  r = require("../MilestoneDialog/constants.js"),
  o = require("../../utils/flyToTargetSelector.js"),
  i = require("../../service/aegis/platform/not-wujie.js"),
  a = require("../../service/stat/mp-weixin.js"),
  c = require("./constants.js"),
  u = require("../../composables/useLotteryReward.js");
require("../../service/sdk/lib/api.js");
var s = require("../../service/sdk/platform/mp-weixin.js"),
  l = require("../../utils/getPlatform.js"),
  p = c.ACTIVE_SCALE - c.INACTIVE_SCALE,
  d = t.defineComponent({
    name: "LotteryRewardDialog",
    components: {
      Overlay: function () {
        return "../../common/components/Overlay/index.js";
      },
      ExciteExposure: function () {
        return "../MilestoneDialog/ExciteExposure.js";
      },
      LotteryRewardCard: function () {
        return "./LotteryRewardCard.js";
      },
      LotteryShareDialog: function () {
        return "./LotteryShareDialog.js";
      },
    },
    props: {
      items: { type: Array, required: !0 },
      scene: { type: String, required: !0 },
      kingKongSelector: { type: String, default: "" },
      purchaseDate: { type: String, default: "" },
    },
    emits: ["close", "exposed", "goto-list"],
    setup: function (d, f) {
      var v,
        h,
        m,
        g = f.emit,
        S = t.getCurrentInstance(),
        E = t.inject("assetIndexComp", null),
        _ = t.ref(0),
        y = t.reactive([]),
        w = t.ref(0),
        C = t.ref(!1),
        A = t.ref(!1),
        T = t.ref(!1),
        x = t.ref(null),
        k = t.ref(!1),
        R = t.ref(null),
        I = !1,
        L = null,
        b = null,
        O = null,
        D = t.computed(function () {
          return d.items.length <= 1;
        }),
        j = t.computed(function () {
          return "detail" !== d.scene;
        }),
        q = t.computed(function () {
          var e = d.items.length;
          return e > 1
            ? "近日中签 ".concat(e, " 只新股，打新欧气爆棚")
            : "好运如期而至，财富顺势启航";
        }),
        F = t.computed(function () {
          if (!x.value) return {};
          var e = x.value,
            n = e.x,
            t = e.y,
            r = e.scale;
          return {
            transform: "translate("
              .concat(n, "px, ")
              .concat(t, "px) scale(")
              .concat(r, ")"),
          };
        }),
        N = null,
        G = 0,
        P = !1,
        U = t.ref("know");
      function M(e) {
        return e && clearTimeout(e), null;
      }
      function V(e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = n(
          e().mark(function n(t) {
            var r;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!A.value) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (
                      ((A.value = !0),
                      (U.value = t),
                      u.deleteIpoRedPoint(),
                      X(),
                      "asset" !== d.scene || !d.kingKongSelector)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (e.next = 6),
                      o.flyToTargetSelector({
                        sourceSelector: ".lottery-reward-dialog__card-wrapper",
                        targetSelector: d.kingKongSelector,
                        componentInstance: S,
                        targetAnchor: "top-right",
                        targetScope: E,
                      })
                    );
                  case 6:
                    if (!(r = e.sent)) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((T.value = !0),
                      (x.value = r),
                      void (b = setTimeout(function () {
                        T.value && Y(t);
                      }, c.FLY_DURATION + 80)))
                    );
                  case 9:
                    O = setTimeout(function () {
                      return Y(t);
                    }, c.FADEOUT_DURATION + 16);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )).apply(this, arguments);
      }
      function Y(e) {
        A.value &&
          ((b = M(b)),
          (O = M(O)),
          g("close", e),
          (T.value = !1),
          (x.value = null));
      }
      var K,
        J = !1;
      function X() {
        if (!J) {
          J = !0;
          try {
            var e =
              "asset" === d.scene
                ? "trade.assetindex.lottery_incentive_popup_brow"
                : "trade.newstocklucky.lottery_incentive_popup_brow";
            a.stat.click(e);
          } catch (e) {
            i.aegisReporter.reportEvent("LOTTERY_DIALOG_EXPOSE_STAT_ERROR", {
              ext4:
                e instanceof Error
                  ? e.stack || e.message
                  : JSON.stringify(e || {}),
            });
          }
        }
      }
      if (l.getPlatform().isMpPlugin) {
        var Z = function () {
          var e =
            "asset" === d.scene
              ? "trade.assetindex.lottery_incentive_popup_capturescreen"
              : "trade.newstocklucky.lottery_incentive_popup_capturescreen";
          a.stat.click(e),
            i.aegisReporter.reportEvent("LOTTERY_DIALOG_ONCAPTURE_SCREEN");
        };
        try {
          null ==
            (m =
              null ==
              (h =
                null == (v = requireMiniProgram()) ? void 0 : v.main2Plugin())
                ? void 0
                : h.onUserCaptureScreen()) || m(Z);
        } catch (e) {
          i.aegisReporter.reportEvent("LOTTERY_DIALOG_ONCAPTURE_SCREEN_ERROR", {
            ext4: JSON.stringify(e),
          });
        }
        t.onBeforeUnmount(function () {
          var e, n, t;
          try {
            null ==
              (t =
                null ==
                (n =
                  null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin())
                  ? void 0
                  : n.offUserCaptureScreen()) || t(Z);
          } catch (e) {
            i.aegisReporter.reportEvent(
              "LOTTERY_DIALOG_OFFCAPTURE_SCREEN_ERROR",
              { ext4: JSON.stringify(e) }
            );
          }
        });
      }
      return (
        t.onMounted(function () {
          (y.length = 0),
            d.items.forEach(function (e, n) {
              y.push(n === _.value ? c.ACTIVE_SCALE : c.INACTIVE_SCALE);
            }),
            t.nextTick$1(function () {
              t.index
                .createSelectorQuery()
                .in(null == S ? void 0 : S.proxy)
                .select(".lottery-reward-dialog__card-inner")
                .boundingClientRect(function (e) {
                  e &&
                    e.width &&
                    e.width > 0 &&
                    (w.value = e.width / (y[0] || c.ACTIVE_SCALE));
                })
                .exec();
            }),
            D.value ||
              (L = setTimeout(function () {
                C.value = !0;
              }, c.AUTOPLAY_START_DELAY)),
            c.preloadShareAssets();
        }),
        t.onBeforeUnmount(function () {
          (L = M(L)), (b = M(b)), (O = M(O));
        }),
        {
          IMAGES: r.IMAGES,
          currentSwiperIndex: _,
          cardScales: y,
          isSingle: D,
          autoplayEnabled: C,
          isClosing: A,
          isFlying: T,
          cardStyle: F,
          showShareDialog: k,
          showCardButton: j,
          subTitle: q,
          handleSwiperChange: function (e) {
            N = e.detail.current;
          },
          handleSwiperTransition: function (e) {
            if (w.value && !(d.items.length <= 1)) {
              var n = e.detail.dx,
                t = Math.abs(n),
                r = d.items.length,
                o = _.value;
              1 === (G += 1) && (P = t > 0.5 * w.value);
              var i = Math.min(t / w.value, 1);
              P && (i = 1 - i);
              var a,
                u = c.ACTIVE_SCALE - i * p,
                s = c.INACTIVE_SCALE + i * p;
              (a = null !== N ? N : n > 0 ? (o + 1) % r : (o - 1 + r) % r),
                d.items.forEach(function (e, n) {
                  y[n] = n === o ? u : n === a ? s : c.INACTIVE_SCALE;
                });
            }
          },
          handleSwiperAnimationFinish: function (e) {
            var n = e.detail.current;
            (G = 0),
              (P = !1),
              (_.value = n),
              (N = null),
              d.items.forEach(function (e, t) {
                y[t] = t === n ? c.ACTIVE_SCALE : c.INACTIVE_SCALE;
              });
          },
          onFlyTransitionEnd: function (e) {
            "transform" === e.propertyName && T.value && Y(U.value);
          },
          onGotoDetail: function () {
            var e,
              n =
                d.purchaseDate ||
                (null == (e = d.items[0]) ? void 0 : e.purchase_date) ||
                "";
            "asset" === d.scene
              ? (g("goto-list", n), V("goto-list"))
              : V("know");
          },
          onKnowClick: function () {
            V("know");
          },
          onShareClick:
            ((K = n(
              e().mark(function n() {
                var r, o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((o = !!(null == (r = R.value)
                              ? void 0
                              : r.snapshotUrl)),
                            a.stat.click(
                              "asset" === d.scene
                                ? "trade.assetindex.lottery_incentive_popup_share_btn_click"
                                : "trade.newstocklucky.lottery_incentive_popup_share_btn_click"
                            ),
                            !o)
                          ) {
                            e.next = 5;
                            break;
                          }
                          (k.value = !0), (e.next = 17);
                          break;
                        case 5:
                          return (
                            t.index.showLoading({ title: "生成中", mask: !0 }),
                            (e.prev = 6),
                            (e.next = 9),
                            new Promise(function (e, n) {
                              var r = t.watch(
                                  function () {
                                    var e;
                                    return null == (e = R.value)
                                      ? void 0
                                      : e.snapshotUrl;
                                  },
                                  function (n) {
                                    n && (r(), clearTimeout(o), e());
                                  },
                                  { immediate: !0 }
                                ),
                                o = setTimeout(function () {
                                  r(),
                                    n(
                                      new Error(
                                        "snapshot wait timeout after ".concat(
                                          8e3,
                                          "ms"
                                        )
                                      )
                                    );
                                }, 8e3);
                            })
                          );
                        case 9:
                          e.next = 14;
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(6)),
                            i.aegisReporter.reportEvent(
                              "LOTTERY_DIALOG_SHARE_WAIT_TIMEOUT",
                              {
                                ext4:
                                  e.t0 instanceof Error
                                    ? e.t0.message
                                    : String(e.t0),
                              }
                            );
                        case 14:
                          return (
                            (e.prev = 14),
                            t.index.hideLoading(),
                            (k.value = !0),
                            e.finish(14)
                          );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[6, 11, 14, 17]]
                );
              })
            )),
            function () {
              return K.apply(this, arguments);
            }),
          onShareBack: function () {
            k.value = !1;
          },
          onShareCloseAll: function () {
            (k.value = !1), V("know");
          },
          onExposed: function () {
            I || ((I = !0), g("exposed"), X());
          },
          shareDialogRef: R,
          handleZXGAppSwipeActionChange: function (e) {
            var n;
            null == (n = s.sdk) || n.handleJSTouchEventFirst(e).catch(t.noop);
          },
        }
      );
    },
  });
Array ||
  (
    t.resolveComponent("Overlay") +
    t.resolveComponent("LotteryRewardCard") +
    t.resolveComponent("ExciteExposure") +
    t.resolveComponent("LotteryShareDialog")
  )();
var f = t._export_sfc(d, [
  [
    "render",
    function (e, n, r, o, i, a) {
      return t.e(
        {
          a: t.p({
            show: !e.isFlying,
            "custom-style": "background-color: rgba(0, 0, 0, 0.8);",
            "z-index": 1e3,
          }),
          b: e.IMAGES.confetti,
          c: t.t(e.subTitle),
          d: e.isSingle,
        },
        e.isSingle
          ? {
              e: t.o(e.onGotoDetail),
              f: t.p({ item: e.items[0], "show-button": e.showCardButton }),
            }
          : {
              g: t.f(e.items, function (n, r, o) {
                return {
                  a: t.o(
                    e.onGotoDetail,
                    "".concat(n.stock_name, "_").concat(n.date, "_").concat(r)
                  ),
                  b: "63d39197-3-" + o + ",63d39197-1",
                  c: t.p({
                    item: n,
                    "show-button": e.showCardButton,
                    count: e.items.length,
                  }),
                  d: "scale(".concat(e.cardScales[r], ")"),
                  e: "".concat(n.stock_name, "_").concat(n.date, "_").concat(r),
                };
              }),
              h: e.autoplayEnabled && !e.isFlying,
              i: e.currentSwiperIndex,
              j: t.o(function () {
                return (
                  e.handleSwiperChange &&
                  e.handleSwiperChange.apply(e, arguments)
                );
              }),
              k: t.o(function (n) {
                return e.handleZXGAppSwipeActionChange(!0);
              }),
              l: t.o(function (n) {
                return e.handleZXGAppSwipeActionChange(!1);
              }),
              m: t.o(function () {
                return (
                  e.handleSwiperTransition &&
                  e.handleSwiperTransition.apply(e, arguments)
                );
              }),
              n: t.o(function () {
                return (
                  e.handleSwiperAnimationFinish &&
                  e.handleSwiperAnimationFinish.apply(e, arguments)
                );
              }),
              o: t.f(e.items, function (n, t, r) {
                return {
                  a: "dot_".concat(t),
                  b: t === e.currentSwiperIndex ? 1 : "",
                };
              }),
            },
        {
          p: t.s(e.cardStyle),
          q: t.o(function () {
            return e.onKnowClick && e.onKnowClick.apply(e, arguments);
          }),
          r: t.o(function () {
            return e.onShareClick && e.onShareClick.apply(e, arguments);
          }),
          s: t.o(e.onExposed),
          t: t.sr("shareDialogRef", "63d39197-4"),
          v: t.o(e.onShareBack),
          w: t.o(e.onShareCloseAll),
          x: t.p({ active: e.showShareDialog, items: e.items, scene: e.scene }),
          y: e.isClosing && !e.isFlying ? 1 : "",
          z: e.isFlying ? 1 : "",
          A: e.showShareDialog ? 1 : "",
          B: t.o(function () {
            return (
              e.onFlyTransitionEnd && e.onFlyTransitionEnd.apply(e, arguments)
            );
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-63d39197"],
]);
wx.createComponent(f);
