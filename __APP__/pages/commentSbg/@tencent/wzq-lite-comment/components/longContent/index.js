var e = require("../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../common/vendor.js"),
  o = {
    name: "longContent",
    components: {
      showMore: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/showMore/index.js";
      },
    },
    inject: { platformType: { default: "" } },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, require: !1 },
      lineClamp: { type: Number, default: 0 },
      showTitle: { type: Boolean, default: !0 },
    },
    data: function () {
      return {};
    },
    computed: {
      platformClass: function () {
        return "wzq" === e.platform ? "wzq" : this.platformType;
      },
    },
    methods: {
      initShowMore: function () {},
      toggleShow: function (e) {
        this.$emit("toggleShow", e);
      },
    },
  };
Array || t.resolveComponent("showMore")();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, r, i, a) {
      return t.e(
        { a: n.showTitle },
        n.showTitle ? { b: t.t(n.itemData.newsTitle) } : {},
        { c: t.t(n.itemData.newsContent), d: "commentDetail" !== n.pageType },
        "commentDetail" !== n.pageType
          ? {
              e: t.sr("showMore", "4cc3619f-0"),
              f: t.o(a.initShowMore, 5554),
              g: t.o(function (e) {
                return a.toggleShow(e);
              }, 5555),
              h: t.p({
                showType: n.itemData.showType,
                "line-clamp": n.lineClamp,
              }),
            }
          : {},
        { i: t.n(a.platformClass), j: t.n(n.pageType) }
      );
    },
  ],
  ["__scopeId", "data-v-4cc3619f"],
]);
wx.createComponent(n);
