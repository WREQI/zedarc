var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = function (t, o, i) {
    return new Promise(function (r, e) {
      var l = function (t) {
          try {
            s(i.next(t));
          } catch (t) {
            e(t);
          }
        },
        n = function (t) {
          try {
            s(i.throw(t));
          } catch (t) {
            e(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(l, n);
        };
      s((i = i.apply(t, o)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  r = require("../../../throttle-debounce/esm/index.js"),
  e = require("../hooks/useComponentConfigHooks.js"),
  l = {
    props: {
      disableScroll: { type: Boolean, default: !1 },
      mainContentHeight: { type: Number, default: 0 },
      isReplying: { type: Boolean, default: !1 },
    },
    setup: function (t) {
      var o = e.useLongPressHooks(t);
      return {
        questionLongPress: o.questionLongPress,
        hideQuestionLongPressMenu: o.hideQuestionLongPressMenu,
      };
    },
    data: function () {
      return {
        isMP: !0,
        mpScrollTop: -1,
        isResumeWzqPos: !1,
        lastMpScrollTop: 0,
        lastH5ScrollTop: 0,
        currentScrollTop: 0,
        enableAutoScrollDown: !0,
        mpScrollWithAnimation: !1,
        isUserTouching: !1,
        forceAutoScrollDownUntil: 0,
        programmaticScrollUntil: 0,
        mpScrollIntoView: "",
        lastDirection: "",
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
        mpSmoothScrollQuerying: !1,
        mpAnchorAnimatingUntil: 0,
        mpAnchorTimer: null,
        mpPendingBottomScroll: !1,
        instantScrollUntil: 0,
        isPinningToBottom: !1,
        mpScrollAnchoring: !1,
        historySettleUntil: 0,
        pinLastScrollHeight: 0,
        pinStableCount: 0,
      };
    },
    created: function () {
      var t = this;
      this.throttledScrollEnd = r.throttle(500, !1, function () {
        t.$emit("scroll-end");
      });
    },
    beforeDestroy: function () {
      this.timerIdH5 && clearTimeout(this.timerIdH5),
        this.timerWzqResume && clearTimeout(this.timerWzqResume),
        this.timerScrollToPrePos && clearTimeout(this.timerScrollToPrePos),
        this.stopFollowGrowing(),
        this.cancelSmoothScroll(),
        this.clearMpAnchorSchedule(),
        this.clearPinTimers();
    },
    methods: {
      onClickMainList: function () {
        i.wx$1.hideKeyboard();
      },
      mpBindDragStart: function () {
        this.questionLongPress
          ? this.hideQuestionLongPressMenu()
          : (this.cancelSmoothScroll(),
            this.clearMpAnchorSchedule(),
            (this.isUserTouching = !0));
      },
      mpBindDragEnd: function (i) {
        return o(
          this,
          null,
          t().mark(function o() {
            var r, e, l, n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.isUserTouching = !1),
                        (r = i.detail || {}),
                        (e = r.scrollTop),
                        (l = void 0 === e ? 0 : e),
                        (t.next = 6),
                        this.getMpListHeight()
                      );
                    case 6:
                      "number" == typeof (n = t.sent) &&
                        "down" === this.lastDirection &&
                        l + this.mainContentHeight + 50 > n &&
                        (this.enableAutoScrollDown = !0);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      mpBindDraging: function () {
        this.cancelSmoothScroll(),
          this.clearMpAnchorSchedule(),
          (this.isUserTouching = !0);
      },
      getMpListHeight: function () {
        var t = this;
        return (
          this.mpListRef ||
            (this.mpListRef = i.wx$1
              .createSelectorQuery()
              .in(this)
              .select(".mpMainList")),
          new Promise(function (o) {
            t.mpListRef
              .boundingClientRect(function (t) {
                o(t ? t.height : null);
              })
              .exec();
          })
        );
      },
      mpBindScroll: function (t) {
        if (
          (this.questionLongPress && this.hideQuestionLongPressMenu(),
          t && t.detail)
        ) {
          var o = t.detail.scrollTop;
          (this.currentScrollTop = o),
            Date.now() < this.forceAutoScrollDownUntil ||
              this.isSmoothScrolling ||
              Date.now() < this.mpAnchorAnimatingUntil ||
              (o > this.lastMpScrollTop
                ? (this.$emit("scroll-direction", "down"),
                  (this.lastDirection = "down"))
                : o < this.lastMpScrollTop &&
                  (this.$emit("scroll-direction", "up"),
                  (this.lastDirection = "up"),
                  Date.now() >= this.forceAutoScrollDownUntil &&
                    this.isUserTouching &&
                    ((this.enableAutoScrollDown = !1),
                    (this.mpScrollWithAnimation = !0),
                    this.stopFollowGrowing()))),
            (this.lastMpScrollTop = o),
            this.$emit("scroll", t);
        }
      },
      h5BindScroll: function (t) {
        this.questionLongPress && this.hideQuestionLongPressMenu();
        var o = t.target;
        if (o) {
          var i = o.scrollTop;
          if (i > this.lastH5ScrollTop)
            this.$emit("scroll-direction", "down"),
              this.isH5NearBottom(o) && (this.enableAutoScrollDown = !0);
          else if (i < this.lastH5ScrollTop) {
            this.$emit("scroll-direction", "up");
            var r = Date.now();
            r < this.forceAutoScrollDownUntil ||
              r < this.programmaticScrollUntil ||
              (this.isUserTouching &&
                ((this.enableAutoScrollDown = !1), this.stopFollowGrowing()));
          }
          (this.lastH5ScrollTop = i), this.$emit("scroll", t);
        }
      },
      isH5NearBottom: function (t) {
        return !!t && t.scrollHeight - t.scrollTop - t.clientHeight <= 100;
      },
      getH5BottomScrollTop: function (t) {
        return Math.max(0, t.scrollHeight - t.clientHeight);
      },
      getBezierCoordinate: function (t, o, i) {
        var r = 1 - t;
        return 3 * r * r * t * o + 3 * r * t * t * i + t * t * t;
      },
      getBezierDerivative: function (t, o, i) {
        var r = 1 - t;
        return 3 * r * r * o + 6 * r * t * (i - o) + 3 * t * t * (1 - i);
      },
      getSpringProgress: function (t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        for (var o = t, i = 0; i < 5; i++) {
          var r = this.getBezierCoordinate(o, 0.22, 0.36),
            e = this.getBezierDerivative(o, 0.22, 0.36);
          if (Math.abs(r - t) < 0.001 || 0 === e) break;
          (o -= (r - t) / e), (o = Math.min(1, Math.max(0, o)));
        }
        return this.getBezierCoordinate(o, 1, 1);
      },
      requestSmoothScrollFrame: function (t) {
        var o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
        (this.smoothScrollFrameType = "timer"),
          (this.smoothScrollFrameId = setTimeout(function () {
            t(Date.now());
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
          (this.shouldRetrySmoothScroll = !1),
          (this.mpSmoothScrollQuerying = !1);
      },
      runWithSmoothScrollThrottle: function (t) {
        var o = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Date.now();
        if (i)
          return (
            this.smoothScrollDelayTimer &&
              (clearTimeout(this.smoothScrollDelayTimer),
              (this.smoothScrollDelayTimer = null)),
            void t()
          );
        var e = 80 - (r - this.lastSmoothScrollTime);
        e <= 0
          ? t()
          : this.smoothScrollDelayTimer ||
            (this.smoothScrollDelayTimer = setTimeout(function () {
              (o.smoothScrollDelayTimer = null), t();
            }, e));
      },
      listTouchStart: function (t) {
        this.questionLongPress
          ? this.hideQuestionLongPressMenu()
          : (this.cancelSmoothScroll(),
            (this.isUserTouching = !0),
            this.$emit("contentTouch", t),
            (this.touchStartY = t.touches[0].clientY));
      },
      listTouchMove: function (t) {
        var o = t.changedTouches[0].clientY - this.touchStartY;
        o > 10
          ? Date.now() >= this.forceAutoScrollDownUntil &&
            ((this.enableAutoScrollDown = !1), this.stopFollowGrowing())
          : o < -10 &&
            this.isH5NearBottom(this.$refs.mainList) &&
            (this.enableAutoScrollDown = !0);
      },
      listTouchEnd: function () {
        var t = this;
        (this.isUserTouching = !1),
          setTimeout(function () {
            t.$emit("scroll-end");
          }, 600);
      },
      finishSmoothScrollWithRetry: function () {
        this.cancelSmoothScrollFrame(), (this.isSmoothScrolling = !1);
        var t =
          this.shouldRetrySmoothScroll &&
          this.enableAutoScrollDown &&
          !this.isUserTouching;
        (this.shouldRetrySmoothScroll = !1), t && this.scrollToBottom(!1, !1);
      },
      snapH5ToBottom: function () {
        var t = this.$refs.mainList;
        if (t) {
          this.cancelSmoothScroll(), (t.style.scrollBehavior = "auto");
          var o = this.getH5BottomScrollTop(t);
          (t.scrollTop = o), (this.lastH5ScrollTop = o);
        }
      },
      animateH5ScrollToBottom: function () {
        var t = this,
          o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = this.$refs.mainList;
        if (i) {
          var r = this.getH5BottomScrollTop(i);
          if (this.isSmoothScrolling && !o)
            return (
              (this.smoothScrollTargetTop = Math.max(
                this.smoothScrollTargetTop,
                r
              )),
              void (this.shouldRetrySmoothScroll = !0)
            );
          this.runWithSmoothScrollThrottle(function () {
            var r = t.getH5BottomScrollTop(i);
            if (Math.abs(r - i.scrollTop) < 2)
              return (i.scrollTop = r), void (t.lastH5ScrollTop = r);
            t.cancelSmoothScroll();
            var e = t.smoothScrollToken;
            (t.lastSmoothScrollTime = Date.now()),
              (t.isSmoothScrolling = !0),
              (t.shouldRetrySmoothScroll = !1),
              (t.smoothScrollStartTime = Date.now()),
              (t.smoothScrollStartTop = i.scrollTop),
              (t.smoothScrollTargetTop = r),
              (i.style.scrollBehavior = "auto");
            var l = o
              ? t.createH5BezierScrollStep(i, e)
              : t.createH5SpringFollowStep(i, e);
            t.requestSmoothScrollFrame(l);
          }, o);
        }
      },
      createH5BezierScrollStep: function (t, o) {
        var i = this;
        return function r() {
          if (i.isSmoothScrolling && o === i.smoothScrollToken) {
            var e = i.getH5BottomScrollTop(t);
            e > i.smoothScrollTargetTop && (i.smoothScrollTargetTop = e);
            var l = Date.now() - i.smoothScrollStartTime,
              n = Math.min(1, l / 280),
              s = i.getSpringProgress(n),
              c =
                i.smoothScrollStartTop +
                (i.smoothScrollTargetTop - i.smoothScrollStartTop) * s;
            if (
              ((t.scrollTop = c),
              (i.lastH5ScrollTop = c),
              n < 1 && Math.abs(i.smoothScrollTargetTop - t.scrollTop) > 1)
            )
              i.requestSmoothScrollFrame(r);
            else {
              var h = i.getH5BottomScrollTop(t);
              (t.scrollTop = h),
                (i.lastH5ScrollTop = h),
                i.finishSmoothScrollWithRetry();
            }
          }
        };
      },
      createH5SpringFollowStep: function (t, o) {
        var i = this,
          r = t.scrollTop,
          e = 0;
        return function l() {
          if (i.isSmoothScrolling && o === i.smoothScrollToken) {
            var n = i.getH5BottomScrollTop(t);
            n > i.smoothScrollTargetTop && (i.smoothScrollTargetTop = n),
              i.smoothScrollTargetTop - r > 24 &&
                (r = i.smoothScrollTargetTop - 24);
            var s = i.smoothScrollTargetTop - r;
            if (Math.abs(s) > 0.3 || Math.abs(e) > 0.3)
              return (
                (r += e = 0.82 * (e + 0.006 * s)),
                (t.scrollTop = Math.round(r)),
                (i.lastH5ScrollTop = t.scrollTop),
                void i.requestSmoothScrollFrame(l)
              );
            var c = i.getH5BottomScrollTop(t);
            (t.scrollTop = c),
              (i.lastH5ScrollTop = c),
              i.finishSmoothScrollWithRetry();
          }
        };
      },
      clearMpAnchorSchedule: function () {
        this.mpAnchorTimer &&
          (clearTimeout(this.mpAnchorTimer), (this.mpAnchorTimer = null)),
          (this.mpPendingBottomScroll = !1),
          (this.mpAnchorAnimatingUntil = 0);
      },
      snapMpToBottom: function () {
        var t = this,
          o = Date.now();
        this.clearMpAnchorSchedule(),
          (this.mpAnchorAnimatingUntil = o + 60),
          (this.mpScrollTop = -1),
          (this.mpScrollWithAnimation = !1),
          (this.mpScrollIntoView =
            "mpBottom1" === this.mpScrollIntoView ? "mpBottom2" : "mpBottom1"),
          (this.forceAutoScrollDownUntil = Math.max(
            this.forceAutoScrollDownUntil,
            this.mpAnchorAnimatingUntil + 100
          )),
          (this.mpAnchorTimer = setTimeout(function () {
            (t.mpAnchorTimer = null),
              (t.mpAnchorAnimatingUntil = 0),
              t.mpPendingBottomScroll &&
                t.enableAutoScrollDown &&
                !t.isUserTouching &&
                ((t.mpPendingBottomScroll = !1), t.snapMpToBottom());
          }, 60));
      },
      fallbackMpScrollToBottom: function () {
        var t = this,
          o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = Date.now();
        i < this.mpAnchorAnimatingUntil && !o
          ? (this.mpPendingBottomScroll = !0)
          : (o && this.clearMpAnchorSchedule(),
            (this.mpPendingBottomScroll = !1),
            (this.mpAnchorAnimatingUntil = i + 340),
            (this.mpScrollTop = -1),
            (this.mpScrollWithAnimation = !0),
            (this.mpScrollIntoView =
              "mpBottom1" === this.mpScrollIntoView
                ? "mpBottom2"
                : "mpBottom1"),
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
      animateMpScrollToBottom: function () {
        var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return o(
          this,
          null,
          t().mark(function e() {
            var l = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (!this.isSmoothScrolling &&
                        !this.mpSmoothScrollQuerying) ||
                      i
                        ? this.runWithSmoothScrollThrottle(function () {
                            return o(
                              l,
                              null,
                              t().mark(function o() {
                                var e,
                                  l,
                                  n,
                                  s,
                                  c,
                                  h,
                                  a,
                                  m,
                                  u,
                                  S,
                                  p,
                                  T = this;
                                return t().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            this.enableAutoScrollDown &&
                                            !this.isUserTouching
                                          ) {
                                            t.next = 2;
                                            break;
                                          }
                                          return t.abrupt("return");
                                        case 2:
                                          return (
                                            i && this.cancelSmoothScroll(),
                                            (e = this.smoothScrollToken),
                                            (this.mpSmoothScrollQuerying = !0),
                                            (l = null),
                                            (t.prev = 6),
                                            (t.next = 9),
                                            this.getScrollViewInfo()
                                          );
                                        case 9:
                                          (l = t.sent), (t.next = 15);
                                          break;
                                        case 12:
                                          (t.prev = 12),
                                            (t.t0 = t.catch(6)),
                                            (l = null);
                                        case 15:
                                          if (e === this.smoothScrollToken) {
                                            t.next = 17;
                                            break;
                                          }
                                          return t.abrupt("return");
                                        case 17:
                                          if (
                                            ((this.mpSmoothScrollQuerying = !1),
                                            l)
                                          ) {
                                            t.next = 19;
                                            break;
                                          }
                                          return t.abrupt(
                                            "return",
                                            void this.fallbackMpScrollToBottom(
                                              r,
                                              i
                                            )
                                          );
                                        case 19:
                                          if (
                                            ((s = (n = l).scrollOffset),
                                            (c = n.boundingClientRect),
                                            (h = c.height || 0),
                                            (a = s.scrollHeight || 0),
                                            (m =
                                              "number" == typeof s.scrollTop
                                                ? s.scrollTop
                                                : this.currentScrollTop),
                                            (u = Math.max(0, a - h)),
                                            !(Math.abs(u - m) < 2))
                                          ) {
                                            t.next = 22;
                                            break;
                                          }
                                          return t.abrupt(
                                            "return",
                                            ((this.mpScrollTop = u),
                                            (this.currentScrollTop = u),
                                            void (this.lastMpScrollTop = u))
                                          );
                                        case 22:
                                          this.cancelSmoothScroll(),
                                            (S = this.smoothScrollToken),
                                            (this.lastSmoothScrollTime =
                                              Date.now()),
                                            (this.isSmoothScrolling = !0),
                                            (this.shouldRetrySmoothScroll = !1),
                                            (this.forceAutoScrollDownUntil =
                                              Math.max(
                                                this.forceAutoScrollDownUntil,
                                                Date.now() + 280 + 100
                                              )),
                                            (this.smoothScrollStartTime =
                                              Date.now()),
                                            (this.smoothScrollStartTop = m),
                                            (this.smoothScrollTargetTop = u),
                                            (this.mpScrollIntoView = ""),
                                            (this.mpScrollWithAnimation = !1),
                                            (p = function t() {
                                              if (
                                                T.isSmoothScrolling &&
                                                S === T.smoothScrollToken
                                              ) {
                                                var o =
                                                    Date.now() -
                                                    T.smoothScrollStartTime,
                                                  i = Math.min(1, o / 280),
                                                  r = T.getSpringProgress(i),
                                                  e =
                                                    T.smoothScrollStartTop +
                                                    (T.smoothScrollTargetTop -
                                                      T.smoothScrollStartTop) *
                                                      r,
                                                  l = Math.round(e);
                                                (T.mpScrollTop = l),
                                                  (T.currentScrollTop = l),
                                                  (T.lastMpScrollTop = l),
                                                  i < 1 &&
                                                  Math.abs(
                                                    T.smoothScrollTargetTop - l
                                                  ) > 1
                                                    ? T.requestSmoothScrollFrame(
                                                        t,
                                                        33
                                                      )
                                                    : ((T.mpScrollTop =
                                                        T.smoothScrollTargetTop),
                                                      (T.currentScrollTop =
                                                        T.smoothScrollTargetTop),
                                                      (T.lastMpScrollTop =
                                                        T.smoothScrollTargetTop),
                                                      T.finishSmoothScrollWithRetry());
                                              }
                                            }),
                                            this.requestSmoothScrollFrame(
                                              p,
                                              33
                                            );
                                        case 27:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  o,
                                  this,
                                  [[6, 12]]
                                );
                              })
                            );
                          }, i)
                        : (this.shouldRetrySmoothScroll = !0);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      scrollToBottom: function () {
        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return o(
          this,
          null,
          t().mark(function o() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (i &&
                          ((this.forceAutoScrollDownUntil = Date.now() + 600),
                          (this.isUserTouching = !1),
                          (this.enableAutoScrollDown = !0)),
                        !this.enableAutoScrollDown || this.isUserTouching)
                      ) {
                        t.next = 4;
                        break;
                      }
                      if (
                        !(
                          Date.now() < this.instantScrollUntil ||
                          Date.now() < this.historySettleUntil
                        )
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.snapToBottomImmediately(),
                        void (
                          this.questionLongPress &&
                          this.hideQuestionLongPressMenu()
                        ))
                      );
                    case 3:
                      this.fallbackMpScrollToBottom(i),
                        this.questionLongPress &&
                          this.hideQuestionLongPressMenu();
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      snapToBottomImmediately: function () {
        this.snapMpToBottom();
      },
      scrollToBottomInstant: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.cancelSmoothScroll(),
          this.clearMpAnchorSchedule(),
          (this.forceAutoScrollDownUntil = Date.now() + 600),
          (this.isUserTouching = !1),
          (this.enableAutoScrollDown = !0),
          t > 0 &&
            (this.instantScrollUntil = Math.max(
              this.instantScrollUntil,
              Date.now() + t
            )),
          this.snapToBottomImmediately(),
          this.questionLongPress && this.hideQuestionLongPressMenu();
      },
      clearPinVerifyTimers: function () {
        this.pinVerifyTimer &&
          (clearTimeout(this.pinVerifyTimer), (this.pinVerifyTimer = null)),
          this.pinSafetyTimer &&
            (clearTimeout(this.pinSafetyTimer), (this.pinSafetyTimer = null));
      },
      clearHistorySettleTimer: function () {
        this.historySettleTimer &&
          (clearTimeout(this.historySettleTimer),
          (this.historySettleTimer = null));
      },
      clearPinTimers: function () {
        this.clearPinVerifyTimers(), this.clearHistorySettleTimer();
      },
      endPinToBottom: function () {
        var t = this.isPinningToBottom;
        this.clearPinVerifyTimers(),
          (this.isPinningToBottom = !1),
          (this.pinStableCount = 0),
          (this.pinLastScrollHeight = 0),
          t && this.$emit("history-pin-end");
      },
      verifyPinnedAtBottom: function () {
        return o(
          this,
          null,
          t().mark(function o() {
            var i,
              r,
              e,
              l,
              n,
              s,
              c,
              h = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.isPinningToBottom) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (i = null),
                        (t.prev = 3),
                        (t.next = 6),
                        this.getScrollViewInfo()
                      );
                    case 6:
                      (i = t.sent), (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(3)), (i = null);
                    case 12:
                      if (this.isPinningToBottom) {
                        t.next = 14;
                        break;
                      }
                      return t.abrupt("return");
                    case 14:
                      if (i) {
                        t.next = 16;
                        break;
                      }
                      return t.abrupt("return", void this.endPinToBottom());
                    case 16:
                      return (
                        (e = (r = i).scrollOffset),
                        (l = r.boundingClientRect),
                        (n = e.scrollHeight || 0),
                        (s = Math.max(0, n - (l.height || 0))),
                        (c = e.scrollTop || 0),
                        t.abrupt(
                          "return",
                          Math.abs(s - c) <= 2
                            ? n !== this.pinLastScrollHeight
                              ? ((this.pinLastScrollHeight = n),
                                (this.pinStableCount = 0),
                                this.snapToBottomImmediately(),
                                void (this.pinVerifyTimer = setTimeout(
                                  function () {
                                    h.verifyPinnedAtBottom();
                                  },
                                  32
                                )))
                              : ((this.pinStableCount += 1),
                                void (this.pinStableCount >= 5
                                  ? this.endPinToBottom()
                                  : (this.pinVerifyTimer = setTimeout(
                                      function () {
                                        h.verifyPinnedAtBottom();
                                      },
                                      32
                                    ))))
                            : ((this.pinStableCount = 0),
                              (this.pinLastScrollHeight = n),
                              this.snapToBottomImmediately(),
                              void (this.pinVerifyTimer = setTimeout(
                                function () {
                                  h.verifyPinnedAtBottom();
                                },
                                32
                              )))
                        )
                      );
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this,
              [[3, 9]]
            );
          })
        );
      },
      pinToBottomForHistory: function () {
        var t = this,
          o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 2e3;
        this.clearPinTimers(),
          (this.pinStableCount = 0),
          (this.pinLastScrollHeight = 0),
          (this.historySettleUntil = Date.now() + o + 400),
          (this.isPinningToBottom = !0),
          (this.mpScrollAnchoring = !0),
          (this.pinSafetyTimer = setTimeout(function () {
            t.endPinToBottom();
          }, 1500)),
          (this.historySettleTimer = setTimeout(function () {
            (t.historySettleTimer = null),
              (t.historySettleUntil = 0),
              (t.mpScrollAnchoring = !1);
          }, o + 400)),
          this.$nextTick(function () {
            t.scrollToBottomInstant(o),
              t.startFollowGrowing(o, !0),
              (t.mpScrollAnchoring = !0),
              t.verifyPinnedAtBottom();
          });
      },
      getWzqScrollPos: function () {
        var t;
        return null == (t = this.$refs.mainList) ? void 0 : t.scrollTop;
      },
      resumeWzqScrollPos: function (t) {
        var o = this;
        this.$refs.mainList &&
          ((this.isResumeWzqPos = !0),
          this.$nextTick(function () {
            o.$refs.mainList.scrollTop = t;
          }),
          clearTimeout(this.timerWzqResume),
          (this.timerWzqResume = setTimeout(function () {
            o.isResumeWzqPos = !1;
          }, 50)));
      },
      scrollToPosition: function (t) {
        var o = this;
        if (this.isMP) {
          this.cancelSmoothScroll(), this.clearMpAnchorSchedule();
          var i = t,
            r = this.mpScrollTop;
          Math.abs(i - r) < 0.1
            ? ((this.mpScrollTop = i + 0.1),
              this.$nextTick(function () {
                o.mpScrollTop = i;
              }))
            : (this.mpScrollTop = i);
        }
      },
      getScrollViewInfo: function () {
        var t = this;
        return this.isMP
          ? new Promise(function (o) {
              var r = i.index.createSelectorQuery().in(t);
              r.select(".scroll-view").scrollOffset(),
                r.select(".scroll-view").boundingClientRect(),
                r.exec(function (t) {
                  t && t[0] && t[1]
                    ? o({ scrollOffset: t[0], boundingClientRect: t[1] })
                    : o(null);
                });
            })
          : Promise.resolve(null);
      },
      getCurrentScrollTop: function () {
        return this.currentScrollTop;
      },
      getEnableAutoScrollDown: function () {
        return this.enableAutoScrollDown;
      },
      getIsAutoScrolling: function () {
        var t = Date.now();
        return (
          this.isSmoothScrolling ||
          t < this.mpAnchorAnimatingUntil ||
          t < this.forceAutoScrollDownUntil
        );
      },
      setEnableAutoScrollDown: function (t) {
        (this.isUserTouching = !1), (this.enableAutoScrollDown = !!t);
      },
      startFollowGrowing: function () {
        var t = this,
          o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1500,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.stopFollowGrowing(!1),
          (this.followGrowingDeadline = Date.now() + o),
          i && (this.instantScrollUntil = Date.now() + o),
          this.setEnableAutoScrollDown(!0),
          this.startMpFollowGrowing(),
          (this.followGrowingTimeoutTimer = setTimeout(function () {
            t.stopFollowGrowing();
          }, o + 50));
      },
      stopFollowGrowing: function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (
          (t && this.cancelSmoothScroll(),
          (this.followGrowingDeadline = 0),
          (this.instantScrollUntil = 0),
          Date.now() >= this.historySettleUntil &&
            (this.mpScrollAnchoring = !1),
          this.followGrowingTimeoutTimer &&
            (clearTimeout(this.followGrowingTimeoutTimer),
            (this.followGrowingTimeoutTimer = null)),
          this.h5ResizeObserver)
        ) {
          try {
            this.h5ResizeObserver.disconnect();
          } catch (t) {}
          this.h5ResizeObserver = null;
        }
        this.h5FollowGrowingTimer &&
          (clearInterval(this.h5FollowGrowingTimer),
          (this.h5FollowGrowingTimer = null)),
          this.mpFollowGrowingTimer &&
            (clearInterval(this.mpFollowGrowingTimer),
            (this.mpFollowGrowingTimer = null));
      },
      startH5FollowGrowing: function () {
        var t = this,
          o = this.$refs.mainList;
        if (o) {
          var i = o.scrollHeight,
            r = function () {
              Date.now() >= t.followGrowingDeadline
                ? t.stopFollowGrowing()
                : o.scrollHeight > i &&
                  ((i = o.scrollHeight), t.scrollToBottom());
            };
          if ("undefined" != typeof ResizeObserver)
            try {
              (this.h5ResizeObserver = new ResizeObserver(function () {
                r();
              })),
                Array.from(o.children).forEach(function (o) {
                  t.h5ResizeObserver.observe(o);
                }),
                this.h5ResizeObserver.observe(o);
            } catch (t) {
              this.h5ResizeObserver = null;
            }
          this.h5FollowGrowingTimer = setInterval(r, 200);
        }
      },
      startMpFollowGrowing: function () {
        var i = this,
          r = 0,
          e = !1;
        this.mpFollowGrowingTimer = setInterval(function () {
          return o(
            i,
            null,
            t().mark(function o() {
              var i;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!(Date.now() >= this.followGrowingDeadline)) {
                          t.next = 4;
                          break;
                        }
                        this.stopFollowGrowing(), (t.next = 18);
                        break;
                      case 4:
                        if (e) {
                          t.next = 18;
                          break;
                        }
                        return (
                          (e = !0),
                          (t.prev = 6),
                          (t.next = 9),
                          this.getMpListHeight()
                        );
                      case 9:
                        "number" == typeof (i = t.sent) &&
                          i > r &&
                          ((r = i), this.scrollToBottom()),
                          (t.next = 15);
                        break;
                      case 13:
                        (t.prev = 13), (t.t0 = t.catch(6));
                      case 15:
                        return (t.prev = 15), (e = !1), t.finish(15);
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                o,
                this,
                [[6, 13, 15, 18]]
              );
            })
          );
        }, 300);
      },
    },
  },
  n = i._export_sfc(l, [
    [
      "render",
      function (t, o, r, e, l, n) {
        return i.e(
          { a: l.isMP },
          l.isMP
            ? {
                b: i.n({ "pinning-to-bottom": l.isPinningToBottom }),
                c: l.mpScrollWithAnimation,
                d: l.mpScrollTop >= 0 ? l.mpScrollTop : "",
                e: l.mpScrollIntoView,
                f: l.mpScrollAnchoring,
                g: i.o(function () {
                  return n.mpBindScroll && n.mpBindScroll.apply(n, arguments);
                }, 4740),
                h: i.o(function () {
                  return (
                    n.mpBindDragStart && n.mpBindDragStart.apply(n, arguments)
                  );
                }, 4741),
                i: i.o(function () {
                  return n.mpBindDragEnd && n.mpBindDragEnd.apply(n, arguments);
                }, 4742),
                j: i.o(function () {
                  return n.mpBindDraging && n.mpBindDraging.apply(n, arguments);
                }, 4743),
                k: i.o(function () {
                  return (
                    n.onClickMainList && n.onClickMainList.apply(n, arguments)
                  );
                }, 4744),
              }
            : {
                l: r.disableScroll ? 1 : "",
                m: l.isResumeWzqPos ? 1 : "",
                n: i.o(function () {
                  return (
                    n.listTouchStart && n.listTouchStart.apply(n, arguments)
                  );
                }, 4745),
                o: i.o(function () {
                  return n.listTouchMove && n.listTouchMove.apply(n, arguments);
                }, 4746),
                p: i.o(function () {
                  return n.listTouchEnd && n.listTouchEnd.apply(n, arguments);
                }, 4747),
                q: i.o(function () {
                  return n.h5BindScroll && n.h5BindScroll.apply(n, arguments);
                }, 4748),
              }
        );
      },
    ],
    ["__scopeId", "data-v-d63a6428"],
  ]);
wx.createComponent(n);
