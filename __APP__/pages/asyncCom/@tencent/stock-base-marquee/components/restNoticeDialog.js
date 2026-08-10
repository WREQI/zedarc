var e = require("../../../../../common/vendor.js"),
  t = {
    name: "detailDialog",
    props: {
      title: { type: String, default: "" },
      content: { type: String, default: "" },
      restDetailData: { type: Array, require: !0 },
      isLite: { type: Boolean, default: !0 },
      value: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
      stockBridge: { type: Object, default: function () {} },
    },
    components: {
      MarketSwiper: function () {
        return "./marketSwiper/mp.js";
      },
    },
    mounted: function () {
      var t, i;
      ((null == (t = this.stockBridge) ? void 0 : t.ENV) ===
        e.EnvTypeEnum.WZQ ||
        e.EnvTypeEnum.WZQ_LITE) &&
        (null == (i = this.stockBridge) ||
          i.busEmit(e.eventList.COMMON_MARQUEE_EVENT, {
            data: { type: "restNoticeDialogShow" },
          }));
    },
    methods: {
      closePicDialog: function () {
        var e;
        this.$emit("input", !1);
        try {
          null == (e = this.$el) || e.remove();
        } catch (e) {}
      },
      clickDialogAdv: function () {
        this.closePicDialog();
      },
    },
  };
Array || e.resolveComponent("market-swiper")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, o, n, a, c) {
      return e.e(
        { a: o.value },
        o.value
          ? {
              b: e.t(o.title),
              c: e.o(function () {
                return c.closePicDialog && c.closePicDialog.apply(c, arguments);
              }, 2413),
              d: e.p({
                isLite: o.isLite,
                restNoticeData: o.restDetailData,
                content: o.content,
              }),
              e: e.o(function () {
                return c.clickDialogAdv && c.clickDialogAdv.apply(c, arguments);
              }, 2414),
              f: e.o(function () {}, 2415),
              g: e.n("black" === o.skin ? "black" : ""),
              h: e.o(function () {
                return c.closePicDialog && c.closePicDialog.apply(c, arguments);
              }, 2416),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-cdde7bc1"],
]);
wx.createComponent(i);
