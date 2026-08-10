var e = require("../../../../../../../../common/vendor.js"),
  t = {
    name: "showCommentItem",
    components: {
      shortContent: function () {
        return "../../shortContent/index.js";
      },
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
    },
    props: {
      subjectUserId: { type: String, default: "" },
      showType: { type: String, default: "" },
      commentItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      showLabels: {
        type: Array,
        default: function () {
          return [];
        },
      },
      imageRefreshFlag: { default: 0 },
      itemTopHandle: Array,
      itemBottomHandle: Array,
      onHandleTapItem: Function,
    },
    data: function () {
      return { showStart: !1 };
    },
    computed: {
      userType: function () {
        var e, t;
        return (
          (null == (e = this.commentItem) ? void 0 : e.vip_type) ||
          (null == (t = this.commentItem) ? void 0 : t.from_vip_type) ||
          ""
        );
      },
      toUType: function () {
        var e;
        return (null == (e = this.commentItem) ? void 0 : e.to_vip_type) || "";
      },
    },
    methods: {
      initShowMore: function () {
        this.showStart = !0;
      },
      tapPerson: function (e) {
        this.$emit("tapPerson", e);
      },
      tapImage: function (e) {
        this.$emit("tapImage", e);
      },
      tapCommentTail: function (e) {
        this.$emit("tapCommentTail", e);
      },
    },
  };
Array ||
  (e.resolveComponent("itemHeader") + e.resolveComponent("shortContent"))();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, a, m, r) {
      return {
        a: e.o(function (e) {
          return o.onHandleTapItem("tapDetail");
        }, 5153),
        b: e.o(function (e) {
          return o.onHandleTapItem(e);
        }, 5154),
        c: e.p({
          BUS: o.BUS,
          itemData: o.commentItem,
          showLabels: o.showLabels,
          imageRefreshFlag: o.imageRefreshFlag,
          itemTopHandle: o.itemTopHandle,
          pageType: o.pageType,
          itemBottomHandle: o.itemBottomHandle,
          onHandleTapItem: o.onHandleTapItem,
          showImage: !1,
          showOper: !1,
        }),
        d: e.o(r.initShowMore, 5155),
        e: e.o(r.tapImage, 5156),
        f: e.p({ itemType: "comment", itemData: o.commentItem }),
        g: e.o(function (e) {
          return r.tapCommentTail(o.commentItem);
        }, 5157),
      };
    },
  ],
  ["__scopeId", "data-v-c00f3a0d"],
]);
wx.createComponent(n);
