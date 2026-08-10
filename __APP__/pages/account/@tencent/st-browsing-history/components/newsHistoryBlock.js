var t = require("../../stock-news-router/index.js"),
  e = require("../../../../../common/vendor.js"),
  r = (e.StockBridge.getPlatform() || {}).isZxg,
  o = {
    props: {
      title: { type: String, default: "" },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    methods: {
      goNewsDetail: function (o) {
        if ((e.StockBridge.report("history.news_list_detail.click"), r))
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: o.id },
          });
        else {
          var i = o.special_type,
            n = o.news_type;
          t.router(n, i, { instance: this, params: o });
        }
      },
    },
  },
  i = e._export_sfc(o, [
    [
      "render",
      function (t, r, o, i, n, a) {
        return {
          a: e.t(o.title),
          b: e.f(o.data, function (t, r, o) {
            return {
              a: e.t(t.title),
              b: e.t(t.source),
              c: r,
              d: e.o(
                function (e) {
                  return a.goNewsDetail(t);
                },
                2428,
                r
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-1e5f3c60"],
  ]);
wx.createComponent(i);
