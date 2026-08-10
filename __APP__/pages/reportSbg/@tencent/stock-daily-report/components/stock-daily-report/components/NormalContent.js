var e = require("../defaultWZQ.js"),
  t = require("../../../../../../../common/vendor.js"),
  n = {
    components: {
      BaseTitle: function () {
        return "./BaseTitle.js";
      },
      newsTemplate: function () {
        return "../../../../../../newsCon/@tencent/stock-news-detail/components/newsTemplate/index.js";
      },
    },
    provide: function () {
      return { isFullTeach: !0 };
    },
    props: {
      content: {
        type: Array,
        default: function () {
          return [];
        },
      },
      showAllDetail: { type: Boolean, default: !1 },
      foldable: { type: Boolean, default: !0 },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      title: { type: String, default: "" },
      dailyid: { type: String, default: "" },
    },
    data: function () {
      return { list: [] };
    },
    watch: {
      content: {
        immediate: !0,
        handler: function () {
          var e,
            t = [],
            n = {};
          null == (e = this.content) ||
            e.forEach(function (e, o) {
              o % 2 == 0
                ? ((n.title = e),
                  (n.title.desc = n.title.desc.replace(/[0-9]+、/, " ")),
                  (n.isShowInfo = !0),
                  t.push(n))
                : ((n.info = e), (n = {}));
            }),
            (this.list = t);
        },
      },
      showAllDetail: function (e) {
        var t;
        null == (t = this.list) ||
          t.forEach(function (t) {
            t.isShowInfo = e;
          });
      },
    },
    mounted: function () {},
    methods: {
      replaceSpecialTag: e.replaceSpecialTag,
      clearSpecialTag: e.clearSpecialTag,
      handleTriggerContent: function (e) {
        this.foldable && (e.isShowInfo = !e.isShowInfo),
          this.$emit("onContentClick");
      },
    },
  };
Array ||
  (t.resolveComponent("BaseTitle") + t.resolveComponent("newsTemplate"))();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, i, l, a) {
      return {
        a: t.p({ title: o.title }),
        b: t.f(l.list, function (e, n, i) {
          return {
            a: t.t(n + 1),
            b: e.isShowInfo ? 1 : "",
            c: t.t(a.clearSpecialTag(e.title).replace(/[0-9]+、/, "")),
            d: e.isShowInfo ? 1 : "",
            e: t.o(
              function (t) {
                return a.handleTriggerContent(e);
              },
              4492,
              n
            ),
            f: e.isShowInfo,
            g: "6241b6fe-1-" + i,
            h: t.p({
              "snp-content": e.info,
              "wzq-config": o.wzqConfig,
              "news-id": o.dailyid,
            }),
            i: n,
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-6241b6fe"],
]);
wx.createComponent(o);
