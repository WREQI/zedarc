var t = require("../../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    components: {
      CategoryContent: function () {
        return "../../common/CategoryContent.js";
      },
      NoDataBlock: function () {
        return "../../common/no-data-block/index.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      accoutOpened: { type: Boolean, default: !1 },
      hasButton: { type: String, default: "" },
    },
    data: function () {
      return { contentData: {}, isEmptyPage: !1 };
    },
    created: function () {
      this.initData();
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      showTeachPop: function (t, e, n) {
        this.$emit("showTeachPop", t, e, n);
      },
      initData: function () {
        var t = this.data,
          e = t.stock,
          n = t.bond;
        (this.contentData = [
          {
            market: "hs",
            type: "stock",
            data: e,
            name: "待申购新股",
            noDataText: "暂无此类新股",
          },
          {
            market: "hs",
            type: "bond",
            data: n,
            name: "待申购新债",
            noDataText: "暂无此类新债",
          },
        ]),
          (this.isEmptyPage = !(e || n));
      },
    },
  };
Array ||
  (
    t.resolveComponent("category-content") + t.resolveComponent("no-data-block")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, a, c, i) {
      return t.e(
        { a: !c.isEmptyPage },
        c.isEmptyPage
          ? {
              d: t.p({
                market: "hs",
                type: "pendingSubscription",
                accoutOpened: o.accoutOpened,
              }),
            }
          : {
              b: t.o(i.showTeachPop, 3048),
              c: t.p({
                contentType: "pendingSubscription",
                contentData: c.contentData,
              }),
            },
        { e: t.n(c.isEmptyPage && i.isMp ? "nodata-wrapper" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-95cb2ba8"],
]);
wx.createComponent(n);
