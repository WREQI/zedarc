var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "VoteultiList",
    components: {
      voteItem: function () {
        return "./VoteItem.js";
      },
    },
    props: {
      voteList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      topicId: { type: String, default: "" },
    },
    setup: function (e, o) {
      var n = o.emit;
      return (
        t.inject("stockBridge", {}),
        t.onMounted(function () {}),
        t.watch(
          function () {
            return e.voteList;
          },
          function (e, o) {
            t.nextTick$1(function () {
              n("renderFinished");
            });
          },
          { immediate: !0, deep: !0 }
        ),
        {
          pickVote: function () {
            n("showCommentGuideModel");
          },
          logoClass: "zxg-logo",
        }
      );
    },
  };
Array || t.resolveComponent("voteItem")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, i, c, r) {
      return t.e(
        {
          a: t.f(n.voteList, function (e, o, c) {
            return {
              a: t.o(i.pickVote, 4225, "vote-index-".concat(o)),
              b: "230bdc0f-0-" + c,
              c: t.p({ item: e, index: o, topicId: n.topicId }),
              d: "vote-index-".concat(o),
            };
          }),
          b: n.voteList && n.voteList.length > 0,
        },
        n.voteList && n.voteList.length > 0 ? { c: t.n(i.logoClass) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-230bdc0f"],
]);
wx.createComponent(o);
