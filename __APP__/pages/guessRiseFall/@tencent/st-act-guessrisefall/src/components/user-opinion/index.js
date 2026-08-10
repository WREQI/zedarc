var t = require("../../../../../../../common/vendor.js");
require("../../mixins/guess-page-mixin.js");
var e = {
  name: "ViewPoint",
  components: {
    opinionItem: function () {
      return "./opinion-item.js";
    },
  },
  props: {
    riseResults: {
      type: Array,
      default: function () {
        return [];
      },
    },
    fallResults: {
      type: Array,
      default: function () {
        return [];
      },
    },
    riseTopic: { type: String, default: "" },
    fallTopic: { type: String, default: "" },
    TDate: { type: String, default: "" },
    commentId: { type: String, default: "" },
    stockInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
    commentAgreement: { type: String, default: "" },
    actId: { type: String, default: "" },
    beforePostComment: { type: Function, default: null },
    beforeTapLike: { type: Function, default: null },
  },
  data: function () {
    return {
      riseList: null,
      fallList: null,
      hasPostActions: !1,
      touchStartY: 0,
    };
  },
  computed: {
    maxOptionCount: function () {
      var t,
        e,
        n = (null == (t = this.riseList) ? void 0 : t.length) || 0,
        i = (null == (e = this.fallList) ? void 0 : e.length) || 0;
      return Math.max(n, i);
    },
  },
  watch: {
    riseResults: {
      handler: function (t) {
        this.riseList = t.filter(function (t) {
          return !t.contents || t.contents.length || t.postImage;
        });
      },
      immediate: !0,
    },
    fallResults: {
      handler: function (t) {
        this.fallList = t.filter(function (t) {
          return !t.contents || t.contents.length || t.postImage;
        });
      },
      immediate: !0,
    },
  },
  created: function () {
    t.StockBridge.report("shequ_caizhangdie_guandian_baoguang");
  },
  methods: {
    getScrollStyle: function (t) {
      var e = (null == t ? void 0 : t.length) || 0;
      if (e <= 0) return {};
      var n = this.hasPostActions ? 132 : 0;
      return { height: "".concat(Math.min(220 * e + n, 710), "px") };
    },
    handleOpinionTouchStart: function (t) {
      var e, n;
      this.touchStartY =
        (null ==
        (n = null == (e = null == t ? void 0 : t.touches) ? void 0 : e[0])
          ? void 0
          : n.clientY) || 0;
    },
    handleOpinionTouchMove: function (t) {
      var e,
        n = null == t ? void 0 : t.currentTarget,
        i = null == (e = null == t ? void 0 : t.touches) ? void 0 : e[0];
      if (n && i) {
        var o = n.scrollHeight || 0,
          l = n.clientHeight || 0;
        if (!(o <= l)) {
          var r = i.clientY - this.touchStartY,
            a = n.scrollTop || 0;
          (r > 0 && a <= 0) || (r < 0 && a + l >= o - 1) || t.stopPropagation();
        }
      }
    },
  },
};
Array || t.resolveComponent("opinion-item")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, i, o, l, r) {
      return t.e(
        { a: l.riseList && l.riseList.length },
        l.riseList && l.riseList.length
          ? {
              b: t.f(l.riseList, function (e, n, o) {
                return {
                  a: "73af494f-0-" + o,
                  b: t.p({
                    "item-data": e,
                    index: n,
                    "topic-id": i.riseTopic,
                    "t-date": i.TDate,
                    "comment-id": i.commentId,
                    "stock-info": i.stockInfo,
                    "before-tap-like": i.beforeTapLike,
                    type: "positive",
                  }),
                  c: e.id || n,
                };
              }),
              c: t.s(r.getScrollStyle(l.riseList)),
            }
          : {},
        { d: l.fallList && l.fallList.length },
        l.fallList && l.fallList.length
          ? {
              e: t.f(l.fallList, function (e, n, o) {
                return {
                  a: "73af494f-1-" + o,
                  b: t.p({
                    "item-data": e,
                    index: n,
                    "topic-id": i.fallTopic,
                    "t-date": i.TDate,
                    "comment-id": i.commentId,
                    "stock-info": i.stockInfo,
                    "before-tap-like": i.beforeTapLike,
                    type: "negative",
                  }),
                  c: e.id || n,
                };
              }),
              f: t.s(r.getScrollStyle(l.fallList)),
            }
          : {},
        { g: t.n("opinion-panel__list--max".concat(r.maxOptionCount)) }
      );
    },
  ],
  ["__scopeId", "data-v-73af494f"],
]);
wx.createComponent(n);
