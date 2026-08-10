var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t, o) {
    return new Promise(function (n, i) {
      var r = function (e) {
          try {
            a(o.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            a(o.throw(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
        };
      a((o = o.apply(e, t)).next());
    });
  },
  u = require("../../../../../common/vendor.js"),
  d = require("../hooks/useThemeHooks.js"),
  p = {
    name: "HalfScreenAiEntry",
    components: {
      HalfScreenAiView: function () {
        return "./HalfScreenAiView.js";
      },
    },
    props: {
      showAiDialog: Boolean,
      aiDialogQuestion: { type: String, default: "" },
      aiQuestionQuery: { type: String, default: "" },
      theme: { type: String, default: "blue" },
      aiPresetPrompt: {
        type: Object,
        default: function () {
          return {};
        },
      },
      stockCode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      stockType: { type: String, default: "" },
      sourceFrom: { type: String, default: "" },
      serverObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
      aiSrcType: { type: String, default: "" },
      aiHasSafeArea: { type: Boolean, default: !0 },
      sseServeType: { type: String, default: "" },
      shareCode: { type: String, default: "" },
      needAnswer: { type: Boolean, default: !0 },
      stockAdded: { type: Boolean, default: !1 },
      aiExpert: { type: Object, default: null },
      aiReadingContent: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e) {
      var t = u.inject("isLctApp", !1),
        o = u.getCurrentInstance().proxy || u.getCurrentInstance();
      return {
        isLctApp: t,
        halfContainerStyle: d.useThemeHooks(e, o).halfContainerStyle,
      };
    },
    data: function () {
      return {
        animClass: "",
        canShow: !1,
        maskShow: !1,
        maskType: "",
        isWZQ: !1,
        recordscrollTop: void 0,
      };
    },
    computed: {
      maskClass: function () {
        return this.maskShow
          ? "dark" === this.maskType
            ? "dark-mask"
            : "light-mask"
          : "";
      },
    },
    watch: {
      showAiDialog: {
        handler: function (e) {
          var o,
            n = this;
          if (e)
            if (
              u.StockBridge.ENV === u.EnvTypeEnum.MP &&
              "app_lct" ===
                (null == (o = u.StockBridge.store) ? void 0 : o.lctfrom)
            ) {
              var i = "title="
                  .concat(encodeURIComponent(this.aiDialogQuestion), "&prompt=")
                  .concat(encodeURIComponent(this.aiQuestionQuery), "&scene=")
                  .concat(this.sourceFrom, "&needAnswer=")
                  .concat(this.needAnswer, "&serverObj=")
                  .concat(
                    encodeURIComponent(JSON.stringify(this.serverObj)),
                    "&lctfrom=app_lct"
                  ),
                r = "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/semiAi?".concat(
                      i
                    )
                  )
                );
              u.wx$1.navigateTo({ url: r }), this.$emit("onSubscribeTipsClose");
            } else
              this.isLctApp
                ? (this.canShow = !0)
                : (u.StockBridge.busEmit("common-ai-prompt-show", !0),
                  (this.animClass = "fade-enter-active"),
                  this.$nextTick(function () {
                    return l(
                      n,
                      null,
                      t().mark(function e() {
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.canShow = !0;
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
                  }),
                  this.disablePageScroll(!0),
                  this.saveWzqShareConfig());
        },
        immediate: !0,
      },
      aiDialogQuestion: { handler: function (e) {}, immediate: !0 },
    },
    deactivated: function () {
      this.resetBody();
    },
    beforeDestroy: function () {
      this.resetBody();
    },
    methods: {
      resetBody: function () {
        this.isWZQ &&
          ((document.body.style.overflow = "auto"),
          (document.body.style.position = "static"),
          null != this.recordscrollTop &&
            ((document.body.style.top = "auto"),
            window.scrollTo(0, this.recordscrollTop)),
          (this.recordscrollTop = void 0));
      },
      onMaskShow: function (e, t) {
        (this.maskShow = e), (this.maskType = t);
      },
      handleTouchMove: function (e) {},
      emptyHandler: function () {},
      onMaskClick: function () {
        var e, t, o;
        this.maskShow
          ? null ==
              (o =
                null == (t = null == (e = this.$refs) ? void 0 : e.halfaiview)
                  ? void 0
                  : t.onOutMaskClick) || o.call(t)
          : this.closeHalfScreenWindow();
      },
      closeHalfScreenWindow: function () {
        var e,
          t,
          o,
          n = this;
        this.resetWzqShareConfig(),
          this.disablePageScroll(!1),
          null ==
            (o =
              null == (t = null == (e = this.$refs) ? void 0 : e.halfaiview)
                ? void 0
                : t.hideKeyboard) || o.call(t),
          (this.animClass = "fade-leave-active"),
          setTimeout(function () {
            (n.canShow = !1), n.$emit("onSubscribeTipsClose");
          }, 400),
          u.StockBridge.report("jichu.ai_search.half_window_exit", {
            sourceFrom: this.sourceFrom,
          }),
          u.StockBridge.busEmit("common-ai-prompt-show", !1);
      },
      disablePageScroll: function (e) {
        if (u.wx$1.setPageStyle)
          try {
            u.wx$1.setPageStyle({ style: { overflow: e ? "hidden" : "auto" } });
          } catch (e) {}
        this.isWZQ &&
          (e
            ? ((this.recordscrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop),
              (document.body.style.overflow = "hidden"),
              (document.body.style.position = "fixed"),
              (document.body.style.width = "100%"),
              (document.body.style.top = -this.recordscrollTop + "px"))
            : ((document.body.style.overflow = "auto"),
              (document.body.style.position = "static"),
              (document.body.style.top = "auto"),
              window.scrollTo(0, this.recordscrollTop)));
      },
      onShareAiAnswer: function (o) {
        return l(
          this,
          null,
          t().mark(function l() {
            var d,
              p,
              h,
              f = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isWZQ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        u.StockBridge.openShareGuide(),
                        (t.prev = 2),
                        (t.next = 5),
                        generateAiShareParamWZQ(o)
                      );
                    case 5:
                      (d = t.sent),
                        u.StockBridge.userShare(
                          ((p = (function (t, o) {
                            for (var n in o || (o = {}))
                              s.call(o, n) && c(t, n, o[n]);
                            if (r) {
                              var i,
                                l = e(r(o));
                              try {
                                for (l.s(); !(i = l.n()).done; ) {
                                  n = i.value;
                                  a.call(o, n) && c(t, n, o[n]);
                                }
                              } catch (e) {
                                l.e(e);
                              } finally {
                                l.f();
                              }
                            }
                            return t;
                          })({}, d)),
                          (h = {
                            stockid: this.stockCode,
                            successFn: function (e) {
                              u.StockBridge.hideShareGuide(),
                                f.resetWzqShareConfig();
                            },
                          }),
                          n(p, i(h)))
                        ),
                        (t.next = 11);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(2));
                    case 11:
                      t.next = 14;
                      break;
                    case 13:
                      this.$emit("shareAiAnswer", o);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              l,
              this,
              [[2, 9]]
            );
          })
        );
      },
      resetWzqShareConfig: function () {
        this.isWZQ &&
          this.shareConfigDefault &&
          u.StockBridge.userShare(this.shareConfigDefault);
      },
      saveWzqShareConfig: function () {
        this.isWZQ && (this.shareConfigDefault = window.__page_share_config__);
      },
    },
  };
Array || u.resolveComponent("half-screen-ai-view")();
var h = u._export_sfc(p, [
  [
    "render",
    function (e, t, o, n, i, r) {
      return u.e(
        { a: o.showAiDialog },
        o.showAiDialog
          ? u.e(
              { b: i.canShow },
              i.canShow
                ? u.e(
                    {
                      c: u.sr("halfaiview", "0bd62cca-0"),
                      d: u.o(r.onShareAiAnswer, 2041),
                      e: u.o(r.onMaskShow, 2042),
                      f: u.o(r.closeHalfScreenWindow, 2043),
                      g: u.o(function (t) {
                        return e.$emit("toggleAdded");
                      }, 2044),
                      h: u.p({
                        theme: o.theme,
                        "source-from": o.sourceFrom,
                        "ai-dialog-question": o.aiDialogQuestion,
                        "ai-question-query": o.aiQuestionQuery,
                        "ai-preset-prompt": o.aiPresetPrompt,
                        "stock-code": o.stockCode,
                        "stock-name": o.stockName,
                        "stock-type": o.stockType,
                        "server-obj": o.serverObj,
                        "ai-src-type": o.aiSrcType,
                        "ai-has-safe-area": o.aiHasSafeArea,
                        "sse-serve-type": o.sseServeType,
                        "share-code": o.shareCode,
                        "need-answer": o.needAnswer,
                        stockAdded: o.stockAdded,
                        "ai-expert": o.aiExpert,
                        "ai-reading-content": o.aiReadingContent,
                      }),
                      i: u.n(i.isWZQ ? "wzq" : ""),
                      j: u.s(n.halfContainerStyle),
                      k: u.o(function () {
                        return (
                          r.emptyHandler && r.emptyHandler.apply(r, arguments)
                        );
                      }, 2045),
                      l: i.isWZQ && !n.isLctApp,
                    },
                    i.isWZQ && !n.isLctApp
                      ? {
                          m: u.o(function () {
                            return (
                              r.onMaskClick && r.onMaskClick.apply(r, arguments)
                            );
                          }, 2046),
                        }
                      : {},
                    {
                      n: u.n(i.animClass),
                      o: u.n(r.maskClass),
                      p: u.o(function () {
                        return (
                          r.onMaskClick && r.onMaskClick.apply(r, arguments)
                        );
                      }, 2047),
                    }
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0bd62cca"],
]);
wx.createComponent(h);
