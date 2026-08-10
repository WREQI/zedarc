var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "RelatedStock",
    components: {
      StockList: function () {
        return "./stock-list.js";
      },
    },
    props: {
      queryEditor: { type: Object, default: function () {} },
      showRelateHq: { type: Boolean, default: !1 },
      live: { type: Object, default: function () {} },
      slist: { type: Object, default: function () {} },
      qtData: { type: Object, default: function () {} },
      innerFundList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      userinfo: { type: Object, default: function () {} },
      isSharePage: { type: Boolean, default: !1 },
    },
    data: function () {
      return { showEditor: !0, triggerBlur: !1 };
    },
    computed: {},
    methods: {
      onHideRelatedStock: function () {
        this.$emit("onHideRelatedStock");
      },
      onBgHide: function () {
        this.$refs.relatedStockList &&
          this.$refs.relatedStockList.onHideRelatedStock();
      },
      manageSelfStock: function (e) {
        this.$emit("manageSelfStock", e);
      },
      dataReport: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", e, t);
      },
    },
  };
Array || e.resolveComponent("stock-list")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, i, a, r) {
      return e.e(
        { a: n.showRelateHq },
        n.showRelateHq
          ? {
              b: e.sr("relatedStockList", "6490904c-0"),
              c: e.o(r.onHideRelatedStock, 4645),
              d: e.o(r.manageSelfStock, 4646),
              e: e.o(r.dataReport, 4647),
              f: e.p({
                live: n.live,
                slist: n.slist,
                "qt-data": n.qtData,
                quotes: n.live && n.live.relate_quotes,
                "inner-fund-list": n.innerFundList,
                userinfo: n.userinfo,
                "is-share-page": n.isSharePage,
              }),
              g: e.o(function () {
                return r.onBgHide && r.onBgHide.apply(r, arguments);
              }, 4648),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6490904c"],
]);
wx.createComponent(o);
