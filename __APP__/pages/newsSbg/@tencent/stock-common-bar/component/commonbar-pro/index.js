var e = require("../../../../../../common/vendor.js"),
  n = {
    components: {
      AiBar: function () {
        return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    emits: ["onShowAiDialog", "onEdit", "onGoComment", "onClickShare"],
    mixins: [
      require("../../../stock-community-ui/utils/mixins/securityCheck/index.js")
        .securityCheck,
    ],
    props: {
      contentId: { type: String, default: "" },
      aiScene: { type: String, default: "" },
      aiReportPrefix: { type: String, default: "" },
      aiTheme: { type: String, default: "" },
      aiReportInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showComment: { type: String, default: "" },
      forbidComment: { type: Boolean, default: !1 },
      commentNum: { type: Number, default: 0 },
      showShare: { type: String, default: "default" },
      forwardNum: { type: Number, default: 0 },
    },
    setup: function (n, o) {
      var t = o.emit,
        i = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        r = e.inject("stockBridge"),
        a = e.inject("didAgreeUserAgreement", { value: !0 }),
        u = e.inject("onCheckUserAgreementStatus", function () {}),
        m = e.ref(!1),
        c = e.computed(function () {
          return !n.forbidComment && m.value;
        }),
        s = e.ref(!1),
        l = e.ref(null),
        f = e.computed(function () {
          return n.forbidComment || !n.commentNum
            ? "评论"
            : "".concat(n.commentNum);
        }),
        d = e.computed(function () {
          return "edit" === n.showComment || 0 === n.commentNum;
        }),
        h = function () {
          if ((null == a ? void 0 : a.value) || "function" != typeof u)
            if (n.forbidComment) {
              r.toast("暂不开放评论", "none");
            } else
              i.securityCheck({ eventName: "putSubject" }).then(function () {
                t("onEdit");
              });
          else u();
        },
        p = e.ref(""),
        C = 0,
        w = null;
      return {
        showAiEntry: c,
        onShowAiDialog: function (e) {
          (s.value = !0), (l.value = e);
        },
        onCloseAiDialog: function () {
          (s.value = !1), (l.value = null);
        },
        onShowAiEntry: function () {
          m.value = !0;
        },
        onHideAiEntry: function () {
          m.value = !1;
        },
        showAiDialog: s,
        aiQuestionObj: l,
        stockBridge: r,
        didAgreeUserAgreement: a,
        commentText: f,
        showEditButton: d,
        onClickReplyBar: function () {
          h();
        },
        onClickComment: function () {
          d.value ? h() : t("onGoComment");
        },
        onClickShare: function () {
          t("onClickShare");
        },
        startShareAnim: function (n, o) {
          (C = n > 0 ? n : 6),
            (w = o),
            (p.value = ""),
            e.nextTick$1(function () {
              p.value = "breath-anim";
            });
        },
        animClass: p,
        onAnimationIteration: function () {
          0 === (C -= 1) && ((p.value = ""), w && w());
        },
        showProfilePop: function (e) {
          t("showProfilePop", e);
        },
      };
    },
  };
Array ||
  (e.resolveComponent("AiBar") + e.resolveComponent("half-screen-ai-entry"))();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, i, r, a) {
      return e.e(
        { a: t.aiScene && t.contentId },
        t.aiScene && t.contentId
          ? {
              b: e.o(i.onShowAiDialog, 2140),
              c: e.o(i.onShowAiEntry, 2141),
              d: e.o(i.onHideAiEntry, 2142),
              e: e.p({
                "report-prefix": t.aiReportPrefix,
                "report-info": t.aiReportInfo,
                scene: t.aiScene,
                "content-id": t.contentId,
              }),
            }
          : {},
        { f: i.showAiEntry, g: t.showComment && !i.showAiEntry },
        t.showComment && !i.showAiEntry
          ? e.e({ h: t.forbidComment }, (t.forbidComment, {}), {
              i: e.t(t.forbidComment ? "暂不开放评论" : "谈谈我的想法"),
              j: e.o(function () {
                return (
                  i.onClickReplyBar && i.onClickReplyBar.apply(i, arguments)
                );
              }, 2143),
            })
          : {},
        { k: t.showComment },
        t.showComment
          ? e.e(
              { l: t.forbidComment },
              (t.forbidComment || i.showEditButton, {}),
              {
                m: i.showEditButton,
                n: e.t(i.commentText),
                o: e.n(t.forbidComment ? "forbid" : ""),
                p: e.o(function () {
                  return (
                    i.onClickComment && i.onClickComment.apply(i, arguments)
                  );
                }, 2144),
              }
            )
          : {},
        { q: t.showShare && i.didAgreeUserAgreement },
        t.showShare && i.didAgreeUserAgreement
          ? e.e(
              { r: "default" === t.showShare },
              ("default" === t.showShare || "wx" === t.showShare || t.showShare,
              {}),
              {
                s: "wx" === t.showShare,
                t: "pyq" === t.showShare,
                v: e.n(i.animClass),
                w: e.o(function () {
                  return (
                    i.onAnimationIteration &&
                    i.onAnimationIteration.apply(i, arguments)
                  );
                }, 2145),
                x: t.forwardNum >= 99,
              },
              t.forwardNum >= 99
                ? {}
                : { y: e.t(t.forwardNum ? t.forwardNum : "分享") },
              {
                z: e.o(function () {
                  return i.onClickShare && i.onClickShare.apply(i, arguments);
                }, 2146),
              }
            )
          : {},
        { A: i.showAiDialog && i.aiQuestionObj },
        i.showAiDialog && i.aiQuestionObj
          ? {
              B: e.o(i.onCloseAiDialog, 2147),
              C: e.p({
                "sse-serve-type": "newsSummaryServerHttp",
                theme: t.aiTheme,
                "show-ai-dialog": i.showAiDialog,
                "ai-dialog-question": i.aiQuestionObj.title || "",
                "ai-question-query": i.aiQuestionObj.prompt || "",
                "server-obj": i.aiQuestionObj,
                "source-from": i.aiQuestionObj.scene || t.aiScene,
                "need-preset-question": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-ffa6d5e3"],
]);
wx.createComponent(o);
