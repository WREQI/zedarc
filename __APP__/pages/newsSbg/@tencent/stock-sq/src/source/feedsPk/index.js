var t = require("../../../../stock-community-base/utils/commentFilter.js"),
  n = require("../../../../stock-community-base/utils/api/index.js"),
  a = require("../../../../stock-community-base/utils/knife.js"),
  e = require("../../../../../../../common/vendor.js"),
  o = n.api.goPageCommon,
  i = a.sdk.reportAnalytics,
  r = {
    components: {
      PointPk: function () {
        return "../PointPk/index.js";
      },
      ScrollBar: function () {
        return "../ScrollBar/index.js";
      },
    },
    props: {
      pointData: { type: Object, default: function () {} },
      reportPrefix: { type: String, default: "" },
    },
    computed: {
      ratioData: function () {
        return this.pointData.ratio_list || [];
      },
      vorder: function () {
        return this.pointData.vorder;
      },
      comment: function () {
        return this.pointData.banner_comment || [];
      },
      pointId: function () {
        return this.pointData.id || "";
      },
      formatData: function () {
        var n = this;
        return t.formatContentData(this.rssData).map(function (t) {
          return (
            n.ratioData.forEach(function () {
              t.content = t.content && t.content.replace(/^话题PK/, "");
            }),
            t
          );
        });
      },
    },
    data: function () {
      return { pickPlay: !1, rssData: [] };
    },
    created: function () {
      this.getComment();
    },
    methods: {
      handleTap: function () {
        var t = this.pointData,
          n = t.id,
          a = t.url,
          e = "".concat(this.reportPrefix, ".feedsbanner_dianji"),
          r = { bannerId: n, position: this.vorder };
        this.$emit("commentReport", { eventName: e, data: r }),
          i({ eventName: e, dataObject: r }),
          o({ url: a, eventName: "chaolian" });
      },
      getComment: function () {
        var n = this;
        t.CommentFilter(this.comment, !1, !0).then(function (t) {
          n.rssData = (t && t.commentsData) || [];
        });
      },
      pickPoint: function (t) {
        var n = t.data;
        n && this.putRssPk(n);
      },
      putRssPk: function (t) {
        var n = this;
        this.$cRequest.reportData(
          "".concat(this.reportPrefix, ".pkbanner_canyu"),
          { pointId: t, position: this.vorder }
        ),
          this.$cRequest
            .putRssPk({ attitude: -1, publish_id: t, pk_id: this.pointId })
            .then(function (t) {
              !t || (-101 !== t.data && -1011 !== t.data)
                ? (n.pickPlay = !0)
                : (n.pickPlay = !1);
            });
      },
    },
    watch: {
      pointData: function (t, n) {
        t !== n && this.getComment();
      },
    },
  };
Array || (e.resolveComponent("ScrollBar") + e.resolveComponent("PointPk"))();
var c = e._export_sfc(r, [
  [
    "render",
    function (t, n, a, o, i, r) {
      return e.e(
        { a: r.formatData && r.formatData.length },
        r.formatData && r.formatData.length
          ? { b: e.p({ swiperData: r.formatData, bgColor: "6" }) }
          : {},
        {
          c: e.o(r.pickPoint, 5509),
          d: e.p({ pointData: a.pointData, pickPlay: i.pickPlay }),
          e: e.o(function () {
            return r.handleTap && r.handleTap.apply(r, arguments);
          }, 5510),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6b60bc04"],
]);
wx.createComponent(c);
