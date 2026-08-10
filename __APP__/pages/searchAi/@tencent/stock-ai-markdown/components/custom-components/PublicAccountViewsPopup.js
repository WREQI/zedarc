var t = require("../../../stock-news-sdk/index.js"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    name: "PublicAccountViewsPopup",
    props: {
      show: { type: Boolean, default: !1 },
      viewList: {
        type: Array,
        default: function () {
          return [
            {
              quote:
                '"我们必须认识到，AI和算力革命是未来十年科技领域最大的确定性趋势。"',
              avatar:
                "https://img1.baidu.com/it/u=3709586903,1286591012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
              accountName: "宏泽资本",
              articleTitle: "AI与算力深度回调后的再思考：短期...",
              time: "20分钟前",
              article_id: "",
            },
            {
              quote:
                '"可以基本确认的是，围绕AI模型与算力供给的结构性变革，将在未来十年持续重塑全球科技版图。"',
              avatar:
                "https://img0.baidu.com/it/u=2064073662,2845498258&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
              accountName: "金融科普官",
              articleTitle: "从AI与算力回调看机会：短期视角",
              time: "1小时前",
              article_id: "",
            },
            {
              quote:
                '"我们有理由相信，AI技术突破与算力体系扩张，将构成未来十年科技发展最核心、确定的主线。"',
              avatar:
                "https://img2.baidu.com/it/u=1395980100,2999837177&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
              accountName: "智投财经",
              articleTitle: "AI与算力周期调整后的冷静观察：短期",
              time: "1小时前",
              article_id: "",
            },
          ];
        },
      },
      viewCount: { type: Number, default: 3 },
    },
    watch: { show: { handler: function (t, e) {}, immediate: !0 } },
    methods: {
      handleBackdropClick: function () {
        this.$emit("close");
      },
      handleClose: function () {
        this.$emit("close");
      },
      handleItemClick: function (e, i) {
        e.article_id &&
          t.sdk.navigateToNewsDetail({ instance: this, id: e.article_id });
      },
    },
  },
  a = e._export_sfc(i, [
    [
      "render",
      function (t, i, a, o, n, c) {
        return e.e(
          { a: a.show },
          a.show
            ? e.e(
                { b: a.show },
                a.show
                  ? {
                      c: e.o(function () {
                        return (
                          c.handleBackdropClick &&
                          c.handleBackdropClick.apply(c, arguments)
                        );
                      }, 5931),
                    }
                  : {},
                { d: a.show },
                a.show
                  ? {
                      e: e.t(a.viewCount),
                      f: e.o(function () {
                        return (
                          c.handleClose && c.handleClose.apply(c, arguments)
                        );
                      }, 5932),
                      g: e.f(a.viewList, function (t, i, o) {
                        return e.e(
                          {
                            a: e.t(t.quote),
                            b: t.avatar,
                            c: e.t(t.accountName),
                            d: e.t(t.articleTitle),
                            e: e.t(t.time),
                            f: i < a.viewList.length - 1,
                          },
                          (a.viewList.length, {}),
                          {
                            g: i,
                            h: e.o(
                              function (e) {
                                return c.handleItemClick(t, i);
                              },
                              5933,
                              i
                            ),
                          }
                        );
                      }),
                      h: e.o(function () {}, 5934),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ba315dfd"],
  ]);
wx.createComponent(a);
