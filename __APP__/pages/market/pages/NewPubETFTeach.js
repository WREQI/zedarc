var e = require("../../../common/vendor.js"),
  t = {
    components: {
      NewpubEtfTeach: function () {
        return "../../marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      return { queryData: null };
    },
    onLoad: function (e) {
      this.queryData = e;
    },
    created: function () {},
    methods: {},
  };
Array ||
  (
    e.resolveComponent("NewpubEtfTeach") +
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, o, a, u) {
      return {
        a: t.rootFontSize,
        b: e.p({ "query-data": a.queryData }),
        c: e.p({ "no-auto": !0 }),
      };
    },
  ],
]);
wx.createPage(n);
