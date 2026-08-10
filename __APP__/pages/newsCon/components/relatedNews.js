var e = require("../../../common/vendor.js"),
  t = {
    props: ["news"],
    methods: {
      getFormattedTime: function (e) {
        if (!e) return "";
        var t = new Date(1e3 * e);
        return (
          t.getFullYear(),
          "".concat(
            t.getMonth() + 1 < 10
              ? "0".concat(t.getMonth() + 1)
              : t.getMonth() + 1,
            "-"
          ) +
            "".concat(
              t.getDate() < 10 ? "0".concat(t.getDate()) : t.getDate(),
              " "
            ) +
            "".concat(
              t.getHours() < 10 ? "0".concat(t.getHours()) : t.getHours(),
              ":"
            ) +
            (t.getMinutes() < 10 ? "0".concat(t.getMinutes()) : t.getMinutes())
        );
      },
      openDetail: function (t) {
        e.wx$1.navigateTo({
          url: "/pages/newsCon/newsDetail/main?id=".concat(t.news_id),
        }),
          e.Request.reportMTAData({
            eventName: "news.mini.detail.relatedNews",
            newsid: t.news_id,
          });
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, a, s) {
        return e.e(
          { a: o.news && o.news.length > 0 },
          o.news && o.news.length > 0
            ? {
                b: e.f(o.news, function (t, n, o) {
                  return e.e(
                    {
                      a: e.t(t.title || t.news_title),
                      b: e.o(
                        function (e) {
                          return s.openDetail(t);
                        },
                        2122,
                        n
                      ),
                      c: t.source,
                    },
                    t.source ? { d: e.t(t.source) } : {},
                    { e: e.t(s.getFormattedTime(t.publish_time)), f: n }
                  );
                }),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(n);
