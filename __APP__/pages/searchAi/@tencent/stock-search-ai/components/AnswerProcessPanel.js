var t = require("../../../../../common/vendor.js"),
  o = require("../hooks/useComponentConfigHooks.js"),
  e = t.defineComponent({
    name: "AnswerProcessPanel",
    components: {
      AnswerProcessToolTag: function () {
        return "./AnswerProcessToolTag.js";
      },
      AnswerProcessSkillTag: function () {
        return "./AnswerProcessSkillTag.js";
      },
      AnswerProcessThinkingBlock: function () {
        return "./AnswerProcessThinkingBlock.js";
      },
      MarkdownRenderer: function () {
        return "../../stock-ai-markdown/components/markdown-renderer/wrap.js";
      },
    },
    props: {
      steps: {
        type: Array,
        default: function () {
          return [];
        },
      },
      answerFinish: { type: Boolean, default: !1 },
      curRequestId: { type: String, default: "" },
      theme: { type: String, required: !0 },
      useIncrementalModel: { type: Boolean, default: !1 },
    },
    emits: ["disable-outer-auto-scroll"],
    data: function () {
      return {
        expanded: !this.answerFinish,
        isMP: !0,
        hasOverflow: !1,
        bodyContentHeight: 0,
        isBodyContentHeightReady: !1,
        bodyContentHeightLimit: 0,
        enableAutoScrollDown: !0,
        isUserTouching: !1,
        forceAutoScrollDownUntil: 0,
        mpScrollIntoView: "",
        mpScrollWithAnimation: !0,
        currentScrollTop: 0,
        lastMpScrollTop: 0,
        lastH5ScrollTop: 0,
        touchStartY: 0,
        smoothScrollFrameId: null,
        smoothScrollFrameType: "",
        smoothScrollDelayTimer: null,
        smoothScrollStartTime: 0,
        smoothScrollStartTop: 0,
        smoothScrollTargetTop: 0,
        smoothScrollToken: 0,
        isSmoothScrolling: !1,
        lastSmoothScrollTime: 0,
        shouldRetrySmoothScroll: !1,
        mpAnchorAnimatingUntil: 0,
        mpAnchorTimer: null,
        mpPendingBottomScroll: !1,
        mpDirectScrollRestoreTimer: null,
      };
    },
    computed: {
      statusIcon: function () {
        return "https://st.gtimg.com/design/3554240d56e5e6647e543bb5e0fbd279.png";
      },
      isStreaming: function () {
        return !this.answerFinish;
      },
      headerTitle: function () {
        return this.isStreaming ? "进行中" : "已完成";
      },
      visibleSteps: function () {
        return this.steps.filter(function (t) {
          return (
            t.functionType !== o.TOOL_FUNCTION_TYPE_PREPROCESS &&
            ("skill" !== t.type ||
              t.name !== o.HIDDEN_PROCESS_TOOL_NAME_SKILL_LOAD)
          );
        });
      },
      firstThinkingIndex: function () {
        return this.visibleSteps.findIndex(function (t) {
          return "thinking" === t.type;
        });
      },
      leadingThinkingStep: function () {
        var t = this.visibleSteps.find(function (t) {
          return t.isLeading && "thinking" === t.type;
        });
        if (t) return t;
        var o = this.firstThinkingIndex;
        return -1 === o ? null : this.visibleSteps[o];
      },
      collapsibleSteps: function () {
        var t = this.leadingThinkingStep;
        return t
          ? this.visibleSteps.filter(function (o) {
              return o !== t;
            })
          : this.visibleSteps;
      },
      bodyContentStyle: function () {
        return {
          height: this.isBodyContentHeightReady
            ? "".concat(this.bodyContentHeight, "px")
            : "auto",
        };
      },
    },
    watch: {
      answerFinish: function (t, o) {
        t && !o && this.triggerHapticFeedback();
      },
      expanded: function (t) {
        var o = this;
        if (t)
          return (
            (this.enableAutoScrollDown = !0),
            void this.$nextTick(function () {
              o.checkOverflow(), o.jumpToBottom();
            })
          );
        this.cancelSmoothScroll(),
          this.clearMpAnchorSchedule(),
          this.clearMpDirectScrollRestoreTimer();
      },
      collapsibleSteps: {
        handler: function () {
          var t = this;
          this.$nextTick(function () {
            t.checkOverflow(), t.enableAutoScrollDown && t.scrollToBottom();
          });
        },
        deep: !0,
      },
    },
    mounted: function () {
      var t = this;
      this.$nextTick(function () {
        t.checkOverflow();
      });
    },
    beforeDestroy: function () {
      this.cancelSmoothScroll(),
        this.clearMpAnchorSchedule(),
        this.clearMpDirectScrollRestoreTimer();
    },
    methods: {
      getStepKey: function (t, o) {
        return ""
          .concat(t.id || "step", "_")
          .concat("number" == typeof t.callIndex ? t.callIndex : o);
      },
      triggerHapticFeedback: function () {
        if (this.isMP) t.wx$1.vibrateShort({ type: "medium" });
        else if ("undefined" != typeof navigator) {
          var o =
            navigator.vibrate ||
            navigator.webkitVibrate ||
            navigator.mozVibrate;
          null == o || o.call(navigator, 100);
        }
      },
      toggleExpand: function () {
        this.expanded = !this.expanded;
      },
      checkOverflow: function () {
        if (this.expanded)
          if (this.isMP) this.checkMpOverflow();
          else {
            var t = this.$refs.bodyContent,
              o =
                null == t
                  ? void 0
                  : t.querySelector(".answer-process-panel__inner");
            o &&
              this.updateBodyContentHeight(
                o.scrollHeight || o.getBoundingClientRect().height,
                this.getBodyContentHeightLimit(t)
              );
          }
      },
      getBodyContentHeightLimit: function (o) {
        if (this.bodyContentHeightLimit > 0) return this.bodyContentHeightLimit;
        if (!this.isMP && o && "undefined" != typeof window) {
          var e = parseFloat(window.getComputedStyle(o).maxHeight);
          if (!Number.isNaN(e) && e > 0)
            return (this.bodyContentHeightLimit = e), e;
        }
        if (
          this.isMP &&
          void 0 !== t.wx$1 &&
          "function" == typeof t.wx$1.getSystemInfoSync
        ) {
          var n = t.wx$1.getSystemInfoSync();
          return (
            (this.bodyContentHeightLimit =
              (273 * (n.windowWidth || 750)) / 750),
            this.bodyContentHeightLimit
          );
        }
        return 273;
      },
      updateBodyContentHeight: function (t, o) {
        var e = Math.max(0, Math.ceil(t));
        (this.isBodyContentHeightReady && e === this.bodyContentHeight) ||
          (this.bodyContentHeight = e),
          (this.isBodyContentHeightReady = !0),
          (this.hasOverflow = e - o > 1);
      },
      checkMpOverflow: function () {
        var o = this,
          e = t.wx$1.createSelectorQuery().in(this);
        e.select(".answer-process-panel__inner").boundingClientRect(),
          e.exec(function (t) {
            t &&
              t[0] &&
              (o.updateBodyContentHeight(
                t[0].height || 0,
                o.getBodyContentHeightLimit()
              ),
              o.hasOverflow &&
                o.enableAutoScrollDown &&
                !o.isUserTouching &&
                o.scrollToBottom());
          });
      },
      jumpToBottom: function () {
        var t = this;
        if (
          (this.cancelSmoothScroll(), this.clearMpAnchorSchedule(), this.isMP)
        ) {
          this.clearMpDirectScrollRestoreTimer(),
            (this.forceAutoScrollDownUntil = Date.now() + 600),
            (this.mpScrollWithAnimation = !1);
          var o =
            "answerProcessBottom1" === this.mpScrollIntoView
              ? "answerProcessBottom2"
              : "answerProcessBottom1";
          return (
            (this.mpScrollIntoView = ""),
            this.$nextTick(function () {
              t.expanded && (t.mpScrollIntoView = o);
            }),
            void (this.mpDirectScrollRestoreTimer = setTimeout(function () {
              (t.mpScrollWithAnimation = !0),
                (t.mpDirectScrollRestoreTimer = null);
            }, 440))
          );
        }
        var e = this.$refs.bodyContent;
        if (e) {
          var n = this.getH5BottomScrollTop(e);
          (e.style.scrollBehavior = "auto"),
            (e.scrollTop = n),
            (this.lastH5ScrollTop = n);
        }
      },
      scrollToBottom: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
          this.expanded &&
          this.hasOverflow &&
          (t &&
            ((this.forceAutoScrollDownUntil = Date.now() + 600),
            (this.isUserTouching = !1),
            (this.enableAutoScrollDown = !0)),
          this.enableAutoScrollDown && !this.isUserTouching)
        )
          if (this.isMP) {
            if (this.mpDirectScrollRestoreTimer) return;
            this.fallbackMpScrollToBottom(t);
          } else this.animateH5ScrollToBottom(t);
      },
      getH5BottomScrollTop: function (t) {
        return this.hasOverflow
          ? Math.max(0, t.scrollHeight - t.clientHeight)
          : 0;
      },
      isH5NearBottom: function (t) {
        return !!t && t.scrollHeight - t.scrollTop - t.clientHeight <= 30;
      },
      getBezierCoordinate: function (t, o, e) {
        var n = 1 - t;
        return 3 * n * n * t * o + 3 * n * t * t * e + t * t * t;
      },
      getBezierDerivative: function (t, o, e) {
        var n = 1 - t;
        return 3 * n * n * o + 6 * n * t * (e - o) + 3 * t * t * (1 - e);
      },
      getSpringProgress: function (t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        for (var o = t, e = 0; e < 5; e++) {
          var n = this.getBezierCoordinate(o, 0.22, 0.36),
            i = this.getBezierDerivative(o, 0.22, 0.36);
          if (Math.abs(n - t) < 0.001 || 0 === i) break;
          (o -= (n - t) / i), (o = Math.min(1, Math.max(0, o)));
        }
        return this.getBezierCoordinate(o, 1, 1);
      },
      requestSmoothScrollFrame: function (t) {
        var o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
        if (
          !this.isMP &&
          "undefined" != typeof window &&
          "function" == typeof window.requestAnimationFrame
        )
          return (
            (this.smoothScrollFrameType = "raf"),
            void (this.smoothScrollFrameId = window.requestAnimationFrame(
              function () {
                t();
              }
            ))
          );
        (this.smoothScrollFrameType = "timer"),
          (this.smoothScrollFrameId = setTimeout(function () {
            t();
          }, o));
      },
      cancelSmoothScrollFrame: function () {
        this.smoothScrollFrameId &&
          ("raf" === this.smoothScrollFrameType &&
          "undefined" != typeof window &&
          "function" == typeof window.cancelAnimationFrame
            ? window.cancelAnimationFrame(this.smoothScrollFrameId)
            : clearTimeout(this.smoothScrollFrameId),
          (this.smoothScrollFrameId = null),
          (this.smoothScrollFrameType = ""));
      },
      cancelSmoothScroll: function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        (this.smoothScrollToken += 1),
          this.cancelSmoothScrollFrame(),
          t &&
            this.smoothScrollDelayTimer &&
            (clearTimeout(this.smoothScrollDelayTimer),
            (this.smoothScrollDelayTimer = null)),
          (this.isSmoothScrolling = !1),
          (this.shouldRetrySmoothScroll = !1);
      },
      runWithSmoothScrollThrottle: function (t) {
        var o = this,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Date.now();
        if (e)
          return (
            this.smoothScrollDelayTimer &&
              (clearTimeout(this.smoothScrollDelayTimer),
              (this.smoothScrollDelayTimer = null)),
            void t()
          );
        var i = 80 - (n - this.lastSmoothScrollTime);
        i <= 0
          ? t()
          : this.smoothScrollDelayTimer ||
            (this.smoothScrollDelayTimer = setTimeout(function () {
              (o.smoothScrollDelayTimer = null), t();
            }, i));
      },
      finishSmoothScrollWithRetry: function () {
        this.cancelSmoothScrollFrame(), (this.isSmoothScrolling = !1);
        var t =
          this.shouldRetrySmoothScroll &&
          this.enableAutoScrollDown &&
          !this.isUserTouching;
        (this.shouldRetrySmoothScroll = !1), t && this.scrollToBottom();
      },
      animateH5ScrollToBottom: function () {
        var t = this,
          o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = this.$refs.bodyContent;
        if (e) {
          var n = this.getH5BottomScrollTop(e);
          if (this.isSmoothScrolling && !o)
            return (
              (this.smoothScrollTargetTop = Math.max(
                this.smoothScrollTargetTop,
                n
              )),
              void (this.shouldRetrySmoothScroll = !0)
            );
          this.runWithSmoothScrollThrottle(function () {
            var o = t.$refs.bodyContent;
            if (o) {
              var e = t.getH5BottomScrollTop(o);
              if (Math.abs(e - o.scrollTop) < 2)
                return (o.scrollTop = e), void (t.lastH5ScrollTop = e);
              t.cancelSmoothScroll();
              var n = t.smoothScrollToken;
              (t.lastSmoothScrollTime = Date.now()),
                (t.isSmoothScrolling = !0),
                (t.shouldRetrySmoothScroll = !1),
                (t.smoothScrollStartTime = Date.now()),
                (t.smoothScrollStartTop = o.scrollTop),
                (t.smoothScrollTargetTop = e),
                (o.style.scrollBehavior = "auto");
              t.requestSmoothScrollFrame(function o() {
                if (t.isSmoothScrolling && n === t.smoothScrollToken) {
                  var e = t.$refs.bodyContent;
                  if (e) {
                    var i = t.getH5BottomScrollTop(e);
                    i > t.smoothScrollTargetTop &&
                      (t.smoothScrollTargetTop = i);
                    var r = Date.now() - t.smoothScrollStartTime,
                      l = Math.min(1, r / 280),
                      s = t.getSpringProgress(l),
                      c =
                        t.smoothScrollStartTop +
                        (t.smoothScrollTargetTop - t.smoothScrollStartTop) * s;
                    if (
                      ((e.scrollTop = c),
                      (t.lastH5ScrollTop = c),
                      l < 1 &&
                        Math.abs(t.smoothScrollTargetTop - e.scrollTop) > 1)
                    )
                      t.requestSmoothScrollFrame(o);
                    else {
                      var h = t.getH5BottomScrollTop(e);
                      (e.scrollTop = h),
                        (t.lastH5ScrollTop = h),
                        t.finishSmoothScrollWithRetry();
                    }
                  }
                }
              });
            }
          }, o);
        }
      },
      clearMpDirectScrollRestoreTimer: function () {
        this.mpDirectScrollRestoreTimer &&
          (clearTimeout(this.mpDirectScrollRestoreTimer),
          (this.mpDirectScrollRestoreTimer = null));
      },
      clearMpAnchorSchedule: function () {
        this.mpAnchorTimer &&
          (clearTimeout(this.mpAnchorTimer), (this.mpAnchorTimer = null)),
          (this.mpPendingBottomScroll = !1),
          (this.mpAnchorAnimatingUntil = 0);
      },
      fallbackMpScrollToBottom: function () {
        var t = this,
          o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = Date.now();
        e < this.mpAnchorAnimatingUntil && !o
          ? (this.mpPendingBottomScroll = !0)
          : (o && this.clearMpAnchorSchedule(),
            (this.mpPendingBottomScroll = !1),
            (this.mpAnchorAnimatingUntil = e + 340),
            (this.mpScrollWithAnimation = !0),
            (this.mpScrollIntoView =
              "answerProcessBottom1" === this.mpScrollIntoView
                ? "answerProcessBottom2"
                : "answerProcessBottom1"),
            (this.forceAutoScrollDownUntil = Math.max(
              this.forceAutoScrollDownUntil,
              this.mpAnchorAnimatingUntil + 100
            )),
            this.mpAnchorTimer && clearTimeout(this.mpAnchorTimer),
            (this.mpAnchorTimer = setTimeout(function () {
              (t.mpAnchorTimer = null),
                (t.mpAnchorAnimatingUntil = 0),
                t.mpPendingBottomScroll &&
                  t.enableAutoScrollDown &&
                  !t.isUserTouching &&
                  t.fallbackMpScrollToBottom();
            }, 340)));
      },
      onScroll: function () {
        var t = this.$refs.bodyContent;
        if (t) {
          var o = t.scrollTop;
          o > this.lastH5ScrollTop
            ? this.isH5NearBottom(t) && (this.enableAutoScrollDown = !0)
            : o < this.lastH5ScrollTop &&
              Date.now() >= this.forceAutoScrollDownUntil &&
              this.isUserTouching &&
              (this.enableAutoScrollDown = !1),
            (this.lastH5ScrollTop = o);
        }
      },
      onTouchStart: function (t) {
        this.cancelSmoothScroll(),
          (this.isUserTouching = !0),
          this.$emit("disable-outer-auto-scroll"),
          (this.touchStartY = t.touches[0].clientY);
      },
      onTouchMove: function (t) {
        var o = t.changedTouches[0].clientY - this.touchStartY;
        o > 0
          ? Date.now() >= this.forceAutoScrollDownUntil &&
            (this.enableAutoScrollDown = !1)
          : o < 0 &&
            this.isH5NearBottom(this.$refs.bodyContent) &&
            (this.enableAutoScrollDown = !0);
      },
      onTouchEnd: function () {
        this.isUserTouching = !1;
      },
      onMpScroll: function (t) {
        if (t && t.detail) {
          var o = t.detail.scrollTop || 0;
          (this.currentScrollTop = o),
            o < this.lastMpScrollTop &&
              Date.now() >= this.forceAutoScrollDownUntil &&
              this.isUserTouching &&
              (this.enableAutoScrollDown = !1),
            (this.lastMpScrollTop = o);
        }
      },
      onMpDragStart: function () {
        this.cancelSmoothScroll(),
          this.clearMpAnchorSchedule(),
          (this.isUserTouching = !0),
          Date.now() >= this.forceAutoScrollDownUntil &&
            (this.enableAutoScrollDown = !1),
          this.$emit("disable-outer-auto-scroll");
      },
      onMpDragging: function () {
        this.cancelSmoothScroll(),
          this.clearMpAnchorSchedule(),
          (this.isUserTouching = !0);
      },
      onMpDragEnd: function () {
        this.isUserTouching = !1;
      },
      onMpScrollToLower: function () {
        this.enableAutoScrollDown = !0;
      },
    },
  });
Array ||
  (
    t.resolveComponent("MarkdownRenderer") +
    t.resolveComponent("AnswerProcessThinkingBlock") +
    t.resolveComponent("AnswerProcessSkillTag") +
    t.resolveComponent("AnswerProcessToolTag")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (o, e, n, i, r, l) {
      return t.e(
        { a: o.leadingThinkingStep },
        o.leadingThinkingStep
          ? {
              b: t.p({
                "streaming-debounce": 16,
                content: o.leadingThinkingStep.content || "",
                "cur-request-id": o.curRequestId,
                theme: o.theme,
                "use-incremental-model": o.useIncrementalModel,
              }),
            }
          : {},
        { c: o.collapsibleSteps.length > 0 },
        o.collapsibleSteps.length > 0
          ? t.e(
              {
                d: t.t(o.headerTitle),
                e: t.n(
                  o.isStreaming ? "answer-process-panel__title--shimmer" : ""
                ),
                f: o.statusIcon,
                g: t.n(
                  o.expanded
                    ? "answer-process-panel__status-icon--expanded"
                    : ""
                ),
                h: t.o(function () {
                  return o.toggleExpand && o.toggleExpand.apply(o, arguments);
                }, 5031),
                i: o.isMP,
              },
              o.isMP
                ? {
                    j: t.f(o.collapsibleSteps, function (e, n, i) {
                      return t.e(
                        { a: "thinking" === e.type },
                        "thinking" === e.type
                          ? {
                              b: "7ebc4737-1-" + i,
                              c: t.p({
                                step: e,
                                "cur-request-id": o.curRequestId,
                                theme: o.theme,
                                "use-incremental-model": o.useIncrementalModel,
                              }),
                            }
                          : "skill" === e.type
                          ? { e: "7ebc4737-2-" + i, f: t.p({ step: e }) }
                          : "tool" === e.type
                          ? { h: "7ebc4737-3-" + i, i: t.p({ step: e }) }
                          : {},
                        {
                          d: "skill" === e.type,
                          g: "tool" === e.type,
                          j: o.getStepKey(e, n),
                        }
                      );
                    }),
                    k: t.s(o.bodyContentStyle),
                    l: o.mpScrollIntoView,
                    m: o.mpScrollWithAnimation,
                    n: t.o(function () {
                      return o.onMpScroll && o.onMpScroll.apply(o, arguments);
                    }, 5032),
                    o: t.o(function () {
                      return (
                        o.onMpScrollToLower &&
                        o.onMpScrollToLower.apply(o, arguments)
                      );
                    }, 5033),
                    p: t.o(function () {
                      return (
                        o.onMpDragStart && o.onMpDragStart.apply(o, arguments)
                      );
                    }, 5034),
                    q: t.o(function () {
                      return (
                        o.onMpDragging && o.onMpDragging.apply(o, arguments)
                      );
                    }, 5035),
                    r: t.o(function () {
                      return o.onMpDragEnd && o.onMpDragEnd.apply(o, arguments);
                    }, 5036),
                  }
                : {
                    s: t.f(o.collapsibleSteps, function (e, n, i) {
                      return t.e(
                        { a: "thinking" === e.type },
                        "thinking" === e.type
                          ? {
                              b: "7ebc4737-4-" + i,
                              c: t.p({
                                step: e,
                                "cur-request-id": o.curRequestId,
                                theme: o.theme,
                                "use-incremental-model": o.useIncrementalModel,
                              }),
                            }
                          : "skill" === e.type
                          ? { e: "7ebc4737-5-" + i, f: t.p({ step: e }) }
                          : "tool" === e.type
                          ? { h: "7ebc4737-6-" + i, i: t.p({ step: e }) }
                          : {},
                        {
                          d: "skill" === e.type,
                          g: "tool" === e.type,
                          j: o.getStepKey(e, n),
                        }
                      );
                    }),
                    t: t.s(o.bodyContentStyle),
                    v: t.o(function () {
                      return o.onScroll && o.onScroll.apply(o, arguments);
                    }, 5037),
                    w: t.o(function () {
                      return (
                        o.onTouchStart && o.onTouchStart.apply(o, arguments)
                      );
                    }, 5038),
                    x: t.o(function () {
                      return o.onTouchMove && o.onTouchMove.apply(o, arguments);
                    }, 5039),
                    y: t.o(function () {
                      return o.onTouchEnd && o.onTouchEnd.apply(o, arguments);
                    }, 5040),
                  },
              {
                z: t.n(
                  o.hasOverflow ? "answer-process-panel__body--scrollable" : ""
                ),
                A: o.expanded,
              }
            )
          : {},
        { B: t.n(o.theme ? "skin-".concat(o.theme) : "") }
      );
    },
  ],
  ["__scopeId", "data-v-7ebc4737"],
]);
wx.createComponent(n);
