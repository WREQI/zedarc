var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-base/visibilityObserver/index.js"),
  i = require("../../../stock-community-base/utils/knife.js").sdk.previewImage,
  n = {
    name: "ComponentName",
    components: {
      voteMain: function () {
        return "../../../../../communitySbg/@tencent/wzq-lite-vote/pages/voteMain.js";
      },
    },
    props: {
      item: { type: Object, default: null },
      index: { type: Number, default: 0 },
      topicId: { type: String, default: "" },
    },
    setup: function (n, o) {
      var c = o.emit,
        r = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        u = e.inject("stockBridge");
      e.onMounted(function () {});
      var m = function () {
          var e, t, i;
          return {
            postid: (null == (e = n.item) ? void 0 : e.subject_id) || "",
            vote_id:
              (null == (i = null == (t = n.item) ? void 0 : t.votes)
                ? void 0
                : i.vote_id) || "",
            positionid: n.index,
          };
        },
        d = !1,
        a = null;
      return (
        e.watch(
          function () {
            return n.item;
          },
          function (i, o) {
            e.nextTick$1(function () {
              var e, i;
              null ==
                (i =
                  null == (e = null == a ? void 0 : a.observer)
                    ? void 0
                    : e.disconnect) || i.call(e),
                (a = null),
                (a = new t.VisibilityObserver(
                  "#vote-itme-"
                    .concat(n.index, "-")
                    .concat(n.item.subject_id || ""),
                  {
                    once: !0,
                    callback: function (e, t) {
                      d ||
                        (e &&
                          ((d = !0),
                          u.report("shequ.feedbacktopic.item_brow", m())));
                    },
                    intersection: { threshold: 0 },
                  },
                  { context: r }
                ));
            });
          },
          { deep: !0, immediate: !0 }
        ),
        {
          updateList: function (e) {},
          pickVote: function () {
            c("pickVote"), u.report("shequ.feedbacktopic.pick_vote", m());
          },
          gotoComment: function (t) {
            var i;
            (null == t ? void 0 : t.subject_id) &&
              (u.report("shequ.feedbacktopic.item_click", m()),
              e.StockRouter.routeTo({
                name: "comDetail",
                query: {
                  nid: t.subject_id,
                  voteId:
                    (null == (i = null == t ? void 0 : t.votes)
                      ? void 0
                      : i.vote_id) || "",
                },
              }));
          },
          previewImg: function (e) {
            i({ urls: [e], currentIndex: 0 });
          },
          formatImage: function (e) {
            var t;
            return "string" == typeof e
              ? e.replace(
                  /^(http|https):/,
                  (null == (t = null == document ? void 0 : document.location)
                    ? void 0
                    : t.protocol) || "https:"
                )
              : e;
          },
        }
      );
    },
  };
Array || e.resolveComponent("voteMain")();
var o = e._export_sfc(n, [
  [
    "render",
    function (t, i, n, o, c, r) {
      return e.e(
        { a: n.item },
        n.item
          ? e.e(
              {
                b: e.t(n.item.subject_desc),
                c: n.item.pic && n.item.pic.thumbnail,
              },
              n.item.pic && n.item.pic.thumbnail
                ? {
                    d: o.formatImage(n.item.pic.thumbnail),
                    e: e.o(function (e) {
                      return o.previewImg(
                        n.item.pic.origin || n.item.pic.thumbnail
                      );
                    }, 4888),
                  }
                : {},
              {
                f: e.t(n.item.subject_desc_type),
                g: e.o(o.updateList, 4889),
                h: e.o(o.pickVote, 4890),
                i: e.p({ "vote-info": n.item.votes, "topic-id": n.topicId }),
                j: "vote-itme-"
                  .concat(n.index, "-")
                  .concat(n.item.subject_id || ""),
                k: e.o(function (e) {
                  return o.gotoComment(n.item);
                }, 4891),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-3c204082"],
]);
wx.createComponent(o);
