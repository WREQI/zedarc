var t = require("../Index.js"),
  e = require("../../../../../common/vendor.js"),
  c = {
    name: "Collect",
    props: {
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { isCollected: !1 };
    },
    computed: {
      collectText: function () {
        return this.isCollected ? "已收藏" : "收藏";
      },
    },
    created: function () {
      this.checkCollect();
    },
    mounted: function () {},
    methods: {
      checkCollect: function () {
        var e = this,
          c = this.subjectData.news_id;
        t.checkCollect({ newsid: c }).then(function (t) {
          var c = t.data && 1 === t.data.like;
          e.isCollected = !!c;
        });
      },
      handleClick: function () {
        this.submitCollect();
      },
      submitCollect: function () {
        var e = this,
          c = this.subjectData,
          l = c.news_id,
          o = c.type,
          n = c.title,
          i = void 0 === n ? "" : n,
          s = {
            method: this.isCollected ? "get" : "post",
            action: this.isCollected ? "delLikeNews" : "like",
            newsid: l,
            type: 4 == +o ? 104 : o,
            title: i,
          };
        t.checkCollect(s)
          .then(function () {
            (e.isCollected = !e.isCollected),
              shy.showToast(
                "top",
                e.isCollected ? "可去个人中心查阅" : "已取消收藏"
              );
          })
          .catch(function (t) {});
      },
    },
  },
  l = e._export_sfc(c, [
    [
      "render",
      function (t, c, l, o, n, i) {
        return {
          a: e.n(n.isCollected ? "collected" : "notCollect"),
          b: e.t(i.collectText),
          c: e.o(function () {
            return i.handleClick && i.handleClick.apply(i, arguments);
          }, 4045),
        };
      },
    ],
    ["__scopeId", "data-v-683f1643"],
  ]);
wx.createComponent(l);
