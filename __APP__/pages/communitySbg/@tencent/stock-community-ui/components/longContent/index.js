var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "longContent",
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      itemType: { type: String, default: "" },
    },
    watch: {
      itemData: {
        deep: !0,
        handler: function () {
          var e = this;
          this.$nextTick(function () {
            e.calContentMore();
          });
        },
        immediate: !0,
      },
    },
    data: function () {
      return { showMore: !1 };
    },
    computed: {
      maxHeightClass: function () {
        return "long-content-max-height";
      },
      spanlineHeight: function () {
        return 24;
      },
      maxLineNumber: function () {
        return 3;
      },
      moreMaskClass: function () {
        return "turn" === this.itemType
          ? "long-content-more-mask-nonmain"
          : "long-content-more-mask-main";
      },
      moreTextClass: function () {
        return "turn" === this.itemType
          ? "long-content-more-text-nonmain"
          : "long-content-more-text-main";
      },
    },
    methods: {
      calContentMore: function () {
        var t = this;
        e.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#longContent")
          .boundingClientRect()
          .exec(function (e) {
            if (e && e.length > 0 && e[0]) {
              var n = e[0].height;
              if (n) {
                var o = Math.floor(n / t.spanlineHeight);
                t.showMore = o > t.maxLineNumber;
              } else t.showMore = !1;
            } else t.showMore = !1;
          });
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, a, i) {
        return e.e(
          {
            a: e.t(o.itemData.newsTitle),
            b: e.t(o.itemData.newsContent),
            c: a.showMore,
          },
          a.showMore
            ? { d: e.n(i.moreMaskClass), e: e.n(i.moreTextClass) }
            : {},
          { f: e.n(a.showMore ? i.maxHeightClass : "") }
        );
      },
    ],
    ["__scopeId", "data-v-5394281a"],
  ]);
wx.createComponent(n);
