var o = require("../../../../../../../common/vendor.js"),
  e = {
    name: "longContent",
    options: { styleIsolation: "shared" },
    components: {
      showMore: function () {
        return "../showMore/index.js";
      },
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {},
    methods: {
      initShowMore: function () {
        var o, e, t;
        null == (t = null == (o = this.$refs) ? void 0 : o.showMore) ||
          t.initShowMore(null == (e = this.$refs) ? void 0 : e.longContentBox);
      },
      toggleShow: function (o) {
        this.$emit("toggleShow", o);
      },
    },
  };
Array || o.resolveComponent("showMore")();
var t = o._export_sfc(e, [
  [
    "render",
    function (e, t, n, r, i, s) {
      return {
        a: o.t(n.itemData.newsTitle),
        b: o.t(n.itemData.newsContent),
        c: o.sr("showMore", "c004da1d-0"),
        d: o.o(s.initShowMore, 3306),
        e: o.o(function (o) {
          return s.toggleShow(o);
        }, 3307),
        f: o.p({ showType: n.itemData.showType }),
      };
    },
  ],
  ["__scopeId", "data-v-c004da1d"],
]);
wx.createComponent(t);
