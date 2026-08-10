var e = require("../../../utils/hqWSHelper.js"),
  t = require("../../../common/vendor.js"),
  r = {
    components: {
      hqPage: function () {
        return "../@tencent/stock-hq-page/Index.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLXBhZ2UvSW5kZXgudnVl;
        });
      },
    },
    provide: function () {
      return {
        hqWSHelper: e.hqWSHelper,
        shareCardEventName: "hq-index-card-share",
      };
    },
    props: {
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      barHeight: { type: Number, default: 0 },
      titleHeight: { type: Number, default: 44 },
    },
    data: function () {
      return {};
    },
    created: function () {},
    destroyed: function () {},
    methods: {
      pageInit: function () {
        this.$emit("pageInit");
      },
      onTabScroll: function (e) {
        this.$emit("onTabScroll", e);
      },
    },
  };
Array || t.resolveComponent("hqPage")();
var n = t._export_sfc(r, [
  [
    "render",
    function (e, r, n, a, o, i) {
      return {
        a: t.sr("main", "1e8673ce-0"),
        b: t.o(i.onTabScroll, 415),
        c: t.o(i.pageInit, 416),
        d: t.p({
          "bar-height": n.barHeight,
          "query-data": n.queryData,
          "title-height": n.titleHeight,
        }),
      };
    },
  ],
]);
wx.createComponent(n);
