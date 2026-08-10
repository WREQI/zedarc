var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  o = require("../hooks/useComponentConfigHooks.js"),
  t = require("../hooks/useShareSessionHooks.js"),
  r = require("../hooks/useShareCodeHooks.js"),
  s = require("../utils/StockBridgeWrapper.js"),
  i = {
    components: {
      AnswerItem: function () {
        return "../components/AnswerItem.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1haS9jb21wb25lbnRzL0Fuc3dlckl0ZW0udnVl;
        });
      },
      QuestionItem: function () {
        return "../components/QuestionItem.js";
      },
      ScrollViewWrapper: function () {
        return "../components/ScrollViewWrapper.js";
      },
      ShareAnswerInvalid: function () {
        return "../components/ShareAnswerInvalid.js";
      },
      LinkJumpGuide: function () {
        return "../components/LinkJumpGuide.js";
      },
    },
    props: {
      shareCode: { type: String, default: "" },
      query: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (s) {
      var i,
        a = this,
        u = o.useLongPressHooks(s).handleLongPressMenuTap,
        c = t.useShareSessionHooks(s),
        l = c.isShareSession,
        h = c.saveShareSessionDetail;
      l.value &&
        n.StockBridge.report(
          "jichu.ai_search.officialaccount_dialog_page_visible",
          { requestid: null == (i = s.query) ? void 0 : i.requestId }
        );
      var p = n.computed(function () {
          var e;
          return "mbti" === (null == (e = s.query) ? void 0 : e.shareType);
        }),
        d = n.computed(function () {
          return p.value
            ? "解锁我的专属股票"
            : l.value
            ? "继续对话"
            : "开始对话";
        }),
        m = o.useComponentConfigHooks(),
        w = m.componentPluginArray,
        f = m.fetchComponentConfig,
        v = r.useShareCodeHooks(s, w),
        g = v.fetchShareInfo,
        S = v.isShareAnswerInvalid,
        k = n.ref(null);
      return (
        n.onMounted(function () {
          return (
            (n = a),
            null,
            (o = e().mark(function n() {
              var o, t;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), f();
                    case 2:
                      return (
                        (o = s || s.query || {}),
                        (t = o.shareCode),
                        (e.next = 5),
                        g(t)
                      );
                    case 5:
                      k.value = e.sent;
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, t) {
              var r = function (e) {
                  try {
                    i(o.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                s = function (e) {
                  try {
                    i(o.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, s);
                };
              i((o = o.apply(n, null)).next());
            })
          );
          var n, o;
        }),
        {
          handleLongPressMenuTap: u,
          isShareSession: l,
          saveShareSessionDetail: h,
          isShareMbti: p,
          buttonText: d,
          answerDetail: k,
          isShareAnswerInvalid: S,
        }
      );
    },
    data: function () {
      return {
        showHomeIcon: !1,
        showNavTitle: !0,
        sseStatus: o.SseStatus.ON_CLOSE,
        allQuoteDocs: {},
        showLinkJumpGuide: !1,
      };
    },
    computed: {
      navTitleStyle: function () {
        if (n.wx$1.getMenuButtonBoundingClientRect)
          try {
            var e = n.wx$1.getMenuButtonBoundingClientRect(),
              o = e.top,
              t = e.height;
            return "top: ".concat(o + (t - 44) / 2, "px; height: 44px");
          } catch (e) {}
        return "";
      },
    },
    created: function () {
      try {
        getCurrentPages().length <= 1 && (this.showHomeIcon = !0);
      } catch (e) {}
    },
    methods: {
      goHome: function () {
        "mpweapp" === n.ShellTypeEnum.MPWAI
          ? n.wx$1.redirectTo({
              url: "/pages/index/index?searchfrom=sharewechat",
            })
          : n.wx$1.switchTab({ url: "/pages/index/index" });
      },
      closeCurPage: function () {
        s.StockBridge.exitPage();
      },
      onClickAiTalk: function () {
        if (this.isShareSession) {
          var e = this.query,
            o = e.searchfrom,
            t = e.session;
          this.saveShareSessionDetail(this.answerDetail),
            n.wx$1.redirectTo({
              url: "/pages/searchAi/main?searchfrom="
                .concat(o, "&session=")
                .concat(t),
            });
        } else {
          var r = this.isShareMbti ? "sharecard_mbti" : "sharewechat";
          "mpweapp" === n.ShellTypeEnum.MPWAI
            ? n.wx$1.redirectTo({
                url: "/pages/index/index?searchfrom=".concat(r),
              })
            : n.wx$1.redirectTo({
                url: "/pages/searchAi/main?searchfrom=".concat(r),
              });
        }
      },
      longPress: function () {
        this.handleLongPressMenuTap("copy", this.answerDetail.question);
      },
      onQuoteClick: function (e, n, o, t) {
        (this.allQuoteDocs = {
          innerDocs: this.answerDetail.factInnerDocs || [],
          outerDocs: this.answerDetail.factOuterDocs || [],
          normalDocs: this.answerDetail.docs || [],
          isMcpAgentMessage: e,
          dataOriginRef: t,
        }),
          (this.showLinkJumpGuide = !0);
      },
      handleLinkGuideClose: function () {
        this.showLinkJumpGuide = !1;
      },
    },
  };
Array ||
  (
    n.resolveComponent("question-item") +
    n.resolveComponent("answer-item") +
    n.resolveComponent("scroll-view-wrapper") +
    n.resolveComponent("share-answer-invalid") +
    n.resolveComponent("link-jump-guide")
  )();
var a = n._export_sfc(i, [
  [
    "render",
    function (e, o, t, r, s, i) {
      return n.e(
        { a: s.showNavTitle },
        s.showNavTitle
          ? n.e(
              { b: s.showHomeIcon },
              s.showHomeIcon
                ? {
                    c: n.o(function () {
                      return i.goHome && i.goHome.apply(i, arguments);
                    }, 756),
                  }
                : {
                    d: n.o(function () {
                      return (
                        i.closeCurPage && i.closeCurPage.apply(i, arguments)
                      );
                    }, 757),
                  },
              { e: n.s(i.navTitleStyle) }
            )
          : {},
        { f: r.answerDetail },
        r.answerDetail
          ? {
              g: n.o(i.longPress, 758),
              h: n.p({ "key-word": r.answerDetail.question }),
              i: n.o(i.onQuoteClick, 759),
              j: n.p({
                item: r.answerDetail,
                "use-incremental-model": !0,
                "outer-index": 0,
                theme: "white",
                searchfrom: "sharePage",
                "is-view-share-answer": !0,
              }),
            }
          : (r.isShareAnswerInvalid, {}),
        {
          k: r.isShareAnswerInvalid,
          l: n.t(r.buttonText),
          m: n.o(function () {
            return i.onClickAiTalk && i.onClickAiTalk.apply(i, arguments);
          }, 760),
          n: n.o(i.handleLinkGuideClose, 761),
          o: n.p({
            "all-quote-docs": s.allQuoteDocs,
            show: s.showLinkJumpGuide,
          }),
          p: n.n(s.showNavTitle ? "" : "withoutNav"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3de01010"],
]);
wx.createComponent(a);
