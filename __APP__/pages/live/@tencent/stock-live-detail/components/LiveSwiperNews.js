var e = require("../Index.js"),
  t = require("../../../../../common/vendor.js"),
  s = require("../../stock-news-core/utils/force2https.js"),
  n = { IS_WZQ_XCX: !1 },
  i = n.IS_WZQ_XCX,
  o = n.IS_LITE_MODE,
  r = {
    props: ["news_list", "delta_time", "isSharePage"],
    computed: {
      ulRefreshBottom: function () {
        return i || o ? "" : this.isSharePage ? "100px" : "50px";
      },
    },
    methods: {
      forceHttpsAdvanced: s.forceHttpsAdvanced,
      comment_cnt: function (e) {
        return isNaN(e)
          ? ""
          : (e = parseInt(e, 10)) > 9999
          ? "".concat((e / 1e4).toFixed(1), "万")
          : e;
      },
      news_time: function (t) {
        var s =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return e.dateUtils.newsTime(t, s);
      },
      showNewsDetail: function (e) {
        this.$emit("showNewsDetail", e);
      },
    },
  },
  l = t._export_sfc(r, [
    [
      "render",
      function (e, s, n, i, o, r) {
        return t.e(
          {
            a: t.f(n.news_list.list, function (e, s, i) {
              return t.e(
                { a: t.t(e.title), b: t.t(e.source), c: e.comment_num > 0 },
                e.comment_num > 0
                  ? { d: t.t(r.comment_cnt(e.comment_num)) }
                  : {},
                {
                  e: t.t(r.news_time(1e3 * e.publish_time, n.delta_time)),
                  f: e.image,
                },
                e.image ? { g: r.forceHttpsAdvanced(e.image) } : {},
                {
                  h: e.id,
                  i: t.o(
                    function (t) {
                      return r.showNewsDetail(e);
                    },
                    5206,
                    e.id
                  ),
                }
              );
            }),
            b: n.news_list.loaded && 0 == n.news_list.list.length,
          },
          (n.news_list.loaded && n.news_list.list.length, {}),
          { c: n.news_list.limited && n.news_list.list.length > 0 },
          n.news_list.limited && n.news_list.list.length > 0
            ? { d: r.ulRefreshBottom }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-916319d1"],
  ]);
wx.createComponent(l);
