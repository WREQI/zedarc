var e = require("../../../../../../../../common/vendor.js"),
  t = {
    name: "longContent",
    components: {
      showMore: function () {
        return "../../showMore/index.js";
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
    },
    data: function () {
      return {};
    },
    computed: {
      platformClass: function () {
        return this.platformType;
      },
    },
    methods: {
      initShowMore: function () {},
      toggleShow: function (e) {
        this.$emit("toggleShow", e);
      },
    },
  };
Array || e.resolveComponent("showMore")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, r, a, i) {
      return {
        a: e.t(n.itemData.newsTitle),
        b: e.t(n.itemData.newsContent),
        c: e.sr("showMore", "caeecd13-0"),
        d: e.o(i.initShowMore, 4271),
        e: e.o(function (e) {
          return i.toggleShow(e);
        }, 4272),
        f: e.p({ showType: n.itemData.showType }),
        g: e.n(i.platformClass),
        h: e.n(n.pageType),
      };
    },
  ],
  ["__scopeId", "data-v-caeecd13"],
]);
wx.createComponent(o);
