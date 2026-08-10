var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  r = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  i = function (e, i) {
    for (var c in i || (i = {})) n.call(i, c) && r(e, c, i[c]);
    if (a) {
      var s,
        m = t(a(i));
      try {
        for (m.s(); !(s = m.n()).done; ) {
          c = s.value;
          o.call(i, c) && r(e, c, i[c]);
        }
      } catch (t) {
        m.e(t);
      } finally {
        m.f();
      }
    }
    return e;
  },
  c = require("../../../../stock-community-base/utils/commentFilter.js"),
  s = require("../../../../stock-community-base/utils/constant.js"),
  m = require("../../../../stock-community-base/utils/api/index.js"),
  p = require("../../../../stock-community-base/utils/knife.js"),
  u = require("../../../../../../../common/vendor.js"),
  l = m.api,
  d = l.goDetail,
  f = l.goNewsDetail,
  h = l.goTopic,
  y = l.goPageCommon,
  b = p.sdk.reportAnalytics,
  g = {
    components: {
      SingleTopic: function () {
        return "../SingleTopic/index.js";
      },
      ScrollBar: function () {
        return "../ScrollBar/index.js";
      },
    },
    data: function () {
      return { rssData: [], readNum: 0 };
    },
    props: {
      topicData: { type: Object, default: function () {} },
      pageType: { type: String, default: "" },
      theme: { type: String, default: "" },
    },
    created: function () {
      this.getComment();
    },
    watch: {
      topicData: function (t, e) {
        t !== e && this.getComment();
      },
    },
    computed: {
      comment: function () {
        return this.topicData.banner_comment || [];
      },
      formatData: function () {
        return c.formatContentData(this.rssData);
      },
      bannerType: function () {
        return this.topicData.type;
      },
    },
    methods: {
      commentReport: function (t) {
        this.$emit("commentReport", t);
      },
      handleTap: function () {
        var t = this.topicData,
          e = t.id,
          a = t.type,
          n = t.url,
          o = t.vorder,
          r = ""
            .concat(s.prefix[this.pageType], ".feedsbanner_dianji")
            .concat("relatedTopic" === a ? "_".concat(a) : ""),
          i = { bannerId: e, position: o };
        switch (
          (this.$emit("commentReport", { eventName: r, data: i }),
          b({ eventName: r, dataObject: i }),
          a)
        ) {
          case "topic":
          case "relatedTopic":
            h({ topicId: e, instance: this });
            break;
          case "post":
            d({ itemId: e, instance: this, pageType: this.pageType });
            break;
          case "news":
            f({ newsid: e, instance: this });
            break;
          default:
            y({ url: n, eventName: "chaolian" });
        }
      },
      getComment: function () {
        var t = this;
        if ("post" === this.bannerType) {
          var e = this.comment,
            a = e.comment_list,
            n = e.view_num;
          if (!a || 0 != +a.code) return;
          this.readNum = +n;
          var o =
            a.data &&
            a.data.hot &&
            "string" != typeof a.data.hot &&
            a.data.hot.rss_list &&
            a.data.hot.rss_list.length > 3
              ? a.data.hot
              : a.data || [];
          this.rssData = o.map(function (t) {
            return i(i({}, t), c.FormatContent(t.content));
          });
        } else
          c.CommentFilter(this.comment, !1, !0).then(function (e) {
            t.rssData = (e.commentsData || []).map(function (t) {
              return i(i({}, t), c.FormatContent(t.content));
            });
            var a = {
              news: t.comment.comment_cnt,
              topic: t.comment.count,
              relatedTopic: t.comment.view_num,
            };
            t.readNum = +a[t.bannerType];
          });
      },
    },
  };
Array ||
  (u.resolveComponent("ScrollBar") + u.resolveComponent("SingleTopic"))();
var D = u._export_sfc(g, [
  [
    "render",
    function (t, e, a, n, o, r) {
      return u.e(
        { a: r.formatData && r.formatData.length },
        r.formatData && r.formatData.length
          ? {
              b: u.p({
                swiperData: r.formatData,
                bgColor: a.topicData.bg_color + "",
              }),
            }
          : {},
        {
          c: u.o(r.commentReport, 5507),
          d: u.p({
            pageType: a.pageType,
            readNum: o.readNum,
            topicData: a.topicData,
            theme: a.theme,
          }),
          e: u.o(function () {
            return r.handleTap && r.handleTap.apply(r, arguments);
          }, 5508),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5f4fe1ed"],
]);
wx.createComponent(D);
