var e = require("../../@babel/runtime/helpers/regeneratorRuntime");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = function (e, t, o) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  a = function (e, i) {
    for (var a in i || (i = {})) r.call(i, a) && c(e, a, i[a]);
    if (o) {
      var s,
        u = t(o(i));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          a = s.value;
          n.call(i, a) && c(e, a, i[a]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  s = require("../../common/vendor.js"),
  u = require("@tencent/stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  l = {
    components: {
      feedbackDetail: function () {
        return "./@tencent/stock-comment-topic/pages/feedback/mp.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      HalfEditor: function () {
        return "../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    setup: function (e, t) {
      var i = s.getCurrentInstance().proxy || s.getCurrentInstance(),
        o = "topic",
        r = u.useHalfEditor(i, e, t, o, {
          postSuccessFunc: function (e) {
            i.refreshSubjectList(e);
          },
        });
      return a({ pageType: o }, r);
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: this.stockBridge,
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
      };
    },
    data: function () {
      var e = this,
        t = new s.HQBridge(),
        i = ["black", "dark"].includes(s.StockBridge.getStorage("user/skin"))
          ? "dark"
          : "light",
        o = s.debounce(
          function () {
            var t, i, o;
            null ==
              (o =
                null == (i = null == (t = e.$refs) ? void 0 : t.topicDetail)
                  ? void 0
                  : i.calculateMultiListHeight) || o.call(i);
          },
          200,
          { leading: !0, trailing: !1 }
        );
      return {
        topicId: "",
        topic: "",
        hqBridge: t,
        stockBridge: s.StockBridge,
        didAgreeUserAgreement: s.Vue.observable({ value: !0 }),
        showPrivacyPolicy: !1,
        newSubjectId: "",
        beforeSubjectScrollTop: 0,
        isEditProcess: !1,
        isSharePage: !1,
        topicPageScrollTop: 0,
        topicAreaTop: 0,
        topicMpNavBarHeight: 0,
        topicAreaDescTop: 0,
        skin: i,
        debouncedCalculateHeight: o,
      };
    },
    computed: {
      isPc: function () {
        var e, t;
        return (
          (null ==
          (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN) || !1
        );
      },
      isHightVersion: function () {
        var e = (getApp().globalData.systemInfo || {}).SDKVersion;
        return s.gte(e, "3.6.1");
      },
      statusBarHeight: function () {
        return (
          (s.wx$1.getWindowInfo && s.wx$1.getWindowInfo()) ||
          s.wx$1.getSystemInfoSync()
        ).statusBarHeight;
      },
      headerAlpha: function () {
        return 0 === this.topicAreaTop
          ? 0
          : this.topicPageScrollTop > 0
          ? this.topicPageScrollTop + this.topicMpNavBarHeight <=
            (this.topicAreaDescTop || this.topicAreaTop)
            ? (this.topicPageScrollTop + this.topicMpNavBarHeight) /
              (this.topicAreaDescTop || this.topicAreaTop)
            : ("dark" === this.skin
                ? s.wx$1.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: "#000000",
                  })
                : s.wx$1.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "#ffffff",
                  }),
              1)
          : (s.wx$1.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: "#000000",
            }),
            0);
      },
      headerOpacityAlpha: function () {
        return 0 === this.topicAreaDescTop
          ? 0
          : this.topicPageScrollTop > 0
          ? this.topicPageScrollTop + this.topicMpNavBarHeight <=
            this.topicAreaDescTop
            ? (this.topicPageScrollTop + this.topicMpNavBarHeight) /
              this.topicAreaDescTop
            : 1
          : 0;
      },
    },
    onLoad: function (e) {
      if (e) {
        this.topicId = e.topicId || "";
        try {
          this.topic = e.topic ? decodeURIComponent(e.topic) : "";
        } catch (t) {
          this.topic = e.topic || "";
        }
        var t = e.__share_flag__;
        this.isSharePage = 1 == +t;
      }
      this.subUserAgreementStatus(),
        this.subscribeCommunityEvent(),
        this.hqBridge.setTitle("社区话题");
    },
    onPageScroll: function (e) {
      var t = e.scrollTop;
      (!this.newSubjectId || this.newSubjectId.length <= 0) &&
        (this.beforeSubjectScrollTop = t),
        this.topicPageScroll(t),
        this.$refs.topicDetail && this.$refs.topicDetail.mpOnPageScroll(t),
        this.debouncedCalculateHeight();
    },
    onShow: function () {
      var e, t;
      this.subUserAgreementStatus(),
        this.newSubjectId &&
          this.newSubjectId.length > 0 &&
          this.updateScrollTop();
      try {
        null == (t = null == (e = this.$refs) ? void 0 : e.topicDetail) ||
          t.checkAndUpdateFeedback();
      } catch (e) {}
      this.onShowHalfEditor(this);
    },
    onHide: function () {
      this.unsubUserAgreementStatus(), this.onHideHalfEditor(this);
    },
    onUnload: function () {
      this.unsubUserAgreementStatus(),
        this.unSubscribeCommunityEvent(),
        this.debouncedCalculateHeight.cancel();
    },
    onReachBottom: function () {
      this.$refs.topicDetail && this.$refs.topicDetail.loadMore();
    },
    methods: {
      goEdit: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.openEditor(a({ type: "topic", topicId: this.topicId }, e));
      },
      updateTopWhenNewSubject: function (e) {
        this.newSubjectId = e;
      },
      refreshSubjectList: function (e) {
        var t;
        if (e && e.comment_id && !(e.comment_id.length <= 0)) {
          var i = { subject_id: e.comment_id };
          this.$refs.topicDetail &&
            (null == (t = this.$refs.topicDetail) || t.addNewSubject(i));
        }
      },
      refreshSubjectComments: function (e) {
        var t;
        e &&
          e.comment_id &&
          e.parent_id &&
          this.$refs.topicDetail &&
          (null == (t = this.$refs.topicDetail) || t.updateTimeLine(e));
      },
      updateScrollTop: function () {
        var e = this;
        if (this.newSubjectId && !(this.newSubjectId.length <= 0))
          var t = setTimeout(function () {
            s.wx$1
              .createSelectorQuery()
              .in(e)
              .select("#topicDetail >>> #comItem_".concat(e.newSubjectId))
              .boundingClientRect(function (t) {
                if (((e.newSubjectId = ""), t)) {
                  var i = t.height;
                  s.wx$1.pageScrollTo({
                    scrollTop: i + e.beforeSubjectScrollTop,
                    duration: 0,
                  });
                }
              })
              .exec(),
              clearTimeout(t);
          }, 300);
      },
      subscribeCommunityEvent: function () {
        this.stockBridge.busOn(
          "community-updateTopWhenNewSubject",
          this.updateTopWhenNewSubject
        );
      },
      unSubscribeCommunityEvent: function () {
        this.stockBridge.busOff(
          "community-updateTopWhenNewSubject",
          this.updateTopWhenNewSubject
        );
      },
      reLogin: function () {
        return (
          (t = this),
          null,
          (i = e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (s.login.isLogin()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", s.login.login());
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t);
          })),
          new Promise(function (e, o) {
            var r = function (e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  o(e);
                }
              },
              n = function (e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              c = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, n);
              };
            c((i = i.apply(t, null)).next());
          })
        );
        var t, i;
      },
      onCheckUserAgreementStatus: function () {
        return (
          !this.didAgreeUserAgreement.value &&
          ((this.showPrivacyPolicy = !0), !0)
        );
      },
      checkUserAgreementStatus: function () {
        var e = !0;
        try {
          var t = s.StockBridge.store.protocolStatus;
          "string" == typeof t && (e = "agree" === t);
        } catch (e) {}
        return (
          (this.didAgreeUserAgreement.value = e), this.updateShareMenu(e), e
        );
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          s.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        s.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      updateShareMenu: function (e) {
        e
          ? s.wx$1.showShareMenu({ menus: ["shareAppMessage"] })
          : s.wx$1.hideShareMenu();
      },
      topicPageScroll: function (e) {
        var t = this;
        (this.topicPageScrollTop = e),
          e < 0 ||
            (0 === this.topicAreaTop &&
              s.wx$1
                .createSelectorQuery()
                .in(this)
                .select("#topicDetail >>> #topicAreaContainer")
                .boundingClientRect(function (e) {
                  if (e) {
                    var i = e.height;
                    t.topicAreaTop = i;
                  }
                })
                .exec(),
            0 === this.topicAreaDescTop &&
              s.wx$1
                .createSelectorQuery()
                .in(this)
                .select("#topicDetail >>> #topicAreaDesc")
                .boundingClientRect(function (e) {
                  if (e) {
                    var i = e.top;
                    t.topicAreaDescTop = Math.max(i, t.topicAreaDescTop);
                  }
                })
                .exec(),
            0 === this.topicMpNavBarHeight &&
              s.wx$1
                .createSelectorQuery()
                .in(this)
                .select("#navBar")
                .boundingClientRect(function (e) {
                  if (e) {
                    var i = e.height;
                    i > 0 && (t.topicMpNavBarHeight = i);
                  }
                })
                .exec());
      },
      goBack: function () {
        s.wx$1.navigateBack();
      },
      goHome: function () {
        s.wx$1.switchTab({ url: "/pages/index/index" });
      },
    },
  };
Array ||
  (
    s.resolveComponent("mp-privacy-dialog") +
    s.resolveComponent("stock-privacy-dialog") +
    s.resolveComponent("feedbackDetail") +
    s.resolveComponent("PrivacyPolicyModal") +
    s.resolveComponent("HalfEditor")
  )();
var h = s._export_sfc(l, [
  [
    "render",
    function (e, t, i, o, r, n) {
      return s.e(
        {
          a: e.rootFontSize,
          b: s.sr("topicDetail", "685c956a-2"),
          c: s.o(n.goEdit, 340),
          d: s.p({
            id: "topicDetail",
            "page-type": o.pageType,
            "topic-id": r.topicId,
            "mp-relogin": n.reLogin,
          }),
          e: s.o(function (e) {
            return (r.showPrivacyPolicy = e);
          }, 341),
          f: s.p({ value: r.showPrivacyPolicy }),
          g: !n.isPc,
        },
        n.isPc
          ? {}
          : s.e(
              { h: n.isPc && !n.isHightVersion },
              n.isPc && !n.isHightVersion
                ? {}
                : r.isSharePage
                ? {
                    l: s.o(function () {
                      return n.goHome && n.goHome.apply(n, arguments);
                    }, 343),
                  }
                : {
                    j: s.n(n.headerAlpha > 0 ? "dark" : ""),
                    k: s.o(function () {
                      return n.goBack && n.goBack.apply(n, arguments);
                    }, 342),
                  },
              {
                i: !r.isSharePage,
                m: s.t(r.topic || "社区话题"),
                n: "".concat(n.headerOpacityAlpha),
                o: "".concat(n.statusBarHeight, "px"),
                p:
                  "dark" === r.skin
                    ? "rgba(18, 22, 31, ".concat(n.headerAlpha, ")")
                    : "rgba(255, 255, 255, ".concat(n.headerAlpha, ")"),
              }
            ),
        { q: e.isShowHalfEditor },
        e.isShowHalfEditor
          ? {
              r: s.sr("halfEditor", "685c956a-4"),
              s: s.o(e.hideHalfEditor, 344),
              t: s.p({ "query-editor": e.queryHalfEditor }),
            }
          : {},
        { v: r.skin }
      );
    },
  ],
  ["__scopeId", "data-v-685c956a"],
]);
(l.__runtimeHooks = 1), wx.createPage(h);
