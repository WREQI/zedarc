var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../common/vendor.js"),
  n = require("../../../../stock-community-base/utils/knife.js"),
  o = require("../../../../stock-community-base/utils/constant.js"),
  i = require("../../utils/mixins/securityCheck/index.js"),
  s = require("../../../../stock-community-base/utils/privacyCheck.js"),
  r = { IS_CCM_XCX: !1 },
  a = r.IS_CCM_XCX,
  c = r.IS_ZXG,
  m = {
    report: { id: "14612209", hash: "t093" },
    briefing: { id: "24988721", hash: "4390" },
  },
  u = {
    name: "MorningReportComList",
    inject: {
      hqBridge: { default: {} },
      onCheckUserAgreementStatus: { default: null },
      didAgreeUserAgreement: { default: {} },
    },
    mixins: [i.securityCheck],
    props: {
      gear: { type: Boolean, default: !1 },
      isShowComment: { type: Boolean, default: !1 },
      detailInfo: {},
      showReplyBar: { type: Boolean, default: !0 },
      enableComment: { type: Boolean, default: !1 },
      userinfo: {},
      newsId: "",
      reportType: { type: String, default: "report" },
    },
    components: {
      ComList: function () {
        return "./comList/index.js";
      },
    },
    data: function () {
      return { isMP: !0, isWZQ: !1, isCCMxcx: a };
    },
    methods: {
      focus: function () {
        this.$refs.fakeInput && this.$refs.fakeInput.focus();
      },
      updateComList: function (e) {
        this.$refs.newsCommentList &&
          this.$refs.newsCommentList.updateComList(e);
      },
      goEdit: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!s.isH5Native) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 3), s.sqPrivacyCheck();
                    case 3:
                      if (e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      if (
                        this.didAgreeUserAgreement.value ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 9:
                      this.hqBridge.report &&
                        this.hqBridge.report(
                          "news.morning_".concat(
                            this.reportType,
                            ".edit_comment"
                          ),
                          { newsid: this.newsId || "" }
                        ),
                        this.securityCheck({ eventName: "putSubject" })
                          .then(function () {
                            n.$emit("goEdit");
                          })
                          .catch(function () {});
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, o) {
            var i = function (e) {
                try {
                  r(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = function (e) {
                try {
                  r(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, s);
              };
            r((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      goFeedback: function () {
        this.hqBridge.report &&
          this.hqBridge.report(
            "news.morning_".concat(this.reportType, ".comment_feedback"),
            { newsid: this.newsId || "" }
          );
        var e = m[this.reportType] || m.report;
        if (this.isMP)
          t.wx$1 &&
            t.wx$1.navigateToMiniProgram &&
            t.wx$1.navigateToMiniProgram({
              appId: "wxebadf544ddae62cb",
              path: "pages/survey/index?sid="
                .concat(e.id, "&hash=")
                .concat(e.hash, "&navigateBackMiniProgram=true"),
            });
        else if (this.isWZQ) {
          var i = "https://wj.qq.com/s2/".concat(e.id, "/").concat(e.hash, "/");
          n.sdk.navigateToPage({ url: i });
        } else
          c &&
            n.sdk.navigateTo({
              url: o.toWebPage(
                "https://wj.qq.com/s2/".concat(e.id, "/").concat(e.hash, "/")
              ),
            });
      },
      handleComitemMore: function (e) {
        this.$emit("commentMore", e);
      },
      setCommentCount: function (e) {
        this.$emit("getCommentCount", e);
      },
      commentReport: function (e) {
        this.$emit("commentReport", e);
      },
      mpOnLoadMore: function () {
        this.$refs.newsCommentList && this.$refs.newsCommentList.mpOnLoadMore();
      },
      comListDataReady: function () {
        this.$emit("comListDataReady");
      },
      goAppStock: function (e) {
        this.$emit("goAppStock", e);
      },
      onHandelTurn: function (e) {
        this.$emit("onHandelTurn", e);
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    },
  };
Array || t.resolveComponent("ComList")();
var h = t._export_sfc(u, [
  [
    "render",
    function (e, n, o, i, s, r) {
      return t.e(
        { a: o.isShowComment && 1 !== o.detailInfo.comment_status },
        o.isShowComment && 1 !== o.detailInfo.comment_status
          ? t.e(
              { b: o.enableComment },
              o.enableComment
                ? t.e(
                    { c: o.showReplyBar },
                    o.showReplyBar
                      ? t.e({ d: !s.isCCMxcx }, (s.isCCMxcx, {}))
                      : {},
                    { e: !s.isCCMxcx },
                    s.isCCMxcx
                      ? {}
                      : {
                          f: t.t(
                            "briefing" === o.reportType ? "我要吐槽" : "反馈"
                          ),
                          g: t.o(function () {
                            return (
                              r.goFeedback && r.goFeedback.apply(r, arguments)
                            );
                          }, 1437),
                        },
                    {
                      h: t.o(function () {
                        return r.goEdit && r.goEdit.apply(r, arguments);
                      }, 1438),
                    }
                  )
                : {}
            )
          : {},
        { i: o.isShowComment && 1 !== o.detailInfo.comment_status },
        o.isShowComment && 1 !== o.detailInfo.comment_status
          ? {
              j: t.sr("newsCommentList", "4045f3de-0"),
              k: t.o(r.goAppStock, 1439),
              l: t.o(r.commentReport, 1440),
              m: t.o(r.handleComitemMore, 1441),
              n: t.o(r.setCommentCount, 1442),
              o: t.o(r.onHandelTurn, 1443),
              p: t.o(r.comListDataReady, 1444),
              q: t.o(r.showProfilePop, 1445),
              r: t.p({
                pageType: "news",
                pUserinfo: o.userinfo,
                newsId: o.newsId,
                newsInfo: o.detailInfo,
              }),
              s: t.n(o.gear ? "gear3" : ""),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-4045f3de"],
]);
wx.createComponent(h);
