var t = require("../../../stock-community-base/utils/mixins/exposureReport.js"),
  e = require("../../../../../../common/vendor.js"),
  n = {
    name: "LiteComList",
    mixins: [t.exposureReport],
    components: {
      ComItem: function () {
        return "../comItem/index.js";
      },
      noData: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/noData/index.js";
      },
      noNetwork: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/noNetwork/index.js";
      },
    },
    inject: { hqBridge: { default: {} } },
    props: {
      pageType: { type: String, default: "" },
      commentsData: { type: Array, default: [] },
      noNetwork: { type: Boolean, default: !1 },
      isVIP: { type: Boolean, default: !1 },
      itemBottomHandle: {
        type: Array,
        default: function () {
          return [];
        },
      },
      newsId: { type: String, default: null },
    },
    data: function () {
      return {};
    },
    activated: function () {},
    deactivated: function () {},
    beforeDestroy: function () {
      !this.pageType ||
        ("stock" !== this.pageType && "news" !== this.pageType) ||
        "function" != typeof this.removeAllExposureData ||
        this.removeAllExposureData();
    },
    emits: ["reloadData"],
    methods: {
      reloadData: function () {
        this.$emit("reloadData");
      },
      onHandleTapList: function (t, e) {
        this.$emit("onHandleTapList", t, e);
      },
      isLast: function (t) {
        return t === this.commentsData.length - 1;
      },
    },
  };
Array ||
  (
    e.resolveComponent("noNetwork") +
    e.resolveComponent("ComItem") +
    e.resolveComponent("noData")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (t, n, o, a, i, s) {
      return e.e(
        {
          a: o.noNetwork && 0 === o.commentsData.length,
          b: e.o(s.reloadData, 4997),
          c: o.commentsData && o.commentsData.length && !o.isVIP,
        },
        o.commentsData && o.commentsData.length && !o.isVIP
          ? {
              d: e.f(o.commentsData, function (t, n, a) {
                return {
                  a: e.o(
                    function (e) {
                      return s.onHandleTapList(t, e);
                    },
                    4998,
                    t.subject_id
                  ),
                  b: "875ea34c-1-" + a,
                  c: e.p({
                    last: s.isLast(n),
                    pageType: o.pageType,
                    itemData: t,
                    itemBottomHandle: o.itemBottomHandle,
                  }),
                  d: t.subject_id,
                  e: t.subject_id,
                };
              }),
            }
          : {},
        { e: !o.noNetwork && !o.commentsData.length },
        o.noNetwork || o.commentsData.length
          ? {}
          : {
              f: e.p({
                useBlack: !1,
                text: o.isVIP ? "解锁后可查看评论" : "别观望，加入评论",
              }),
            },
        { g: e.n(o.pageType) }
      );
    },
  ],
  ["__scopeId", "data-v-875ea34c"],
]);
wx.createComponent(o);
