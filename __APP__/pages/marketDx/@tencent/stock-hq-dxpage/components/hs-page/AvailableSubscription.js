var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    components: {
      CategoryContent: function () {
        return "../common/CategoryContent.js";
      },
      NoDataBlock: function () {
        return "../common/no-data-block/index.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      accoutOpened: { type: Boolean, default: !1 },
    },
    data: function () {
      return { contentData: [], isEmptyPage: !1 };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.initData();
    },
    methods: {
      showTeachPop: function (t, e, a) {
        this.$emit("showTeachPop", t, e, a);
      },
      initData: function () {
        var t = this.data,
          e = t.stock,
          a = t.bond;
        (this.contentData = [
          {
            market: "hs",
            type: "stock",
            data: e,
            name: "今日新股",
            noDataText: "暂无此类新股",
          },
          {
            market: "hs",
            type: "bond",
            data: a,
            name: "今日新债",
            noDataText: "暂无此类新债",
          },
        ]),
          (this.isEmptyPage = !(e || a));
      },
    },
  };
Array ||
  (
    t.resolveComponent("category-content") + t.resolveComponent("no-data-block")
  )();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, n, o, c, i) {
      return t.e(
        { a: !c.isEmptyPage },
        c.isEmptyPage
          ? {
              d: t.p({
                market: "hs",
                type: "availableSubscription",
                accoutOpened: n.accoutOpened,
              }),
            }
          : {
              b: t.o(i.showTeachPop, 3049),
              c: t.p({
                contentType: "common",
                contentData: c.contentData,
                tag: "availableSubscription",
              }),
            },
        { e: t.n(c.isEmptyPage && i.isMp ? "nodata-wrapper" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-764e3285"],
]);
wx.createComponent(a);
