require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../common/vendor.js"),
  i = require("../../../utils/mixins/privacy.js"),
  r = require("../../../module/delivery/deliveryMixin.js"),
  t = e.useBrokerInfo(),
  n = t.navigateToTrade,
  o = t.highestPriorityDealer,
  s = void 0 === o ? {} : o,
  d = {
    components: {
      PrivacyPolicyModal: function () {
        return "../../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      DeliveryGuideSubscribe: function () {
        return "../../asyncCom/@tencent/st-delivery-guide-subscribe/src/index.js";
      },
      mainIndex: function () {
        return "../@tencent/wzq-search-page/Index.js";
      },
      task: function () {
        return "../../asyncCom/@tencent/st-act-task/components/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
          }
        );
      },
      ThirteenAnniversaryTask: function () {
        return "../../searchAi/@tencent/st-act-ai-activity-plugins/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1haS1hY3Rpdml0eS1wbHVnaW5zL3Rhc2svaW5kZXgudnVl;
          }
        );
      },
    },
    mixins: [i.privacy, r.deliveryMixin],
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: this.stockBridge,
        getAbtInfoUnion: e.AbtInfoAPI.getAbtInfo,
      };
    },
    onLoad: function (e) {
      var i;
      (this.queryData = e),
        (this.showDeliveryGuideSubscibe = !1),
        null == (i = this.hqBridge) ||
          i.busOn("toggleAdded", this.toggleAddedCallback);
    },
    onUnload: function () {
      var e, i;
      (this.showDeliveryGuideSubscibe = !1),
        null == (i = null == (e = this.hqBridge) ? void 0 : e.busOff) ||
          i.call(e, "toggleAdded", this.toggleAddedCallback),
        clearTimeout(this.timer);
    },
    data: function () {
      return {
        hqBridge: new e.HQBridge(),
        queryData: null,
        stockBridge: e.StockBridge,
        showDeliveryGuideSubscibe: !1,
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        timer: null,
      };
    },
    onShow: function () {
      var e, i, r;
      null == (i = null == (e = this.$refs) ? void 0 : e.main) || i.init(),
        (this.showDeliveryGuideSubscibe = !1),
        null == (r = this.hqBridge) ||
          r.busOn("toggleAdded", this.toggleAddedCallback);
    },
    onHide: function () {
      var e, i;
      (this.showDeliveryGuideSubscibe = !1),
        null == (i = null == (e = this.hqBridge) ? void 0 : e.busOff) ||
          i.call(e, "toggleAdded", this.toggleAddedCallback),
        clearTimeout(this.timer);
    },
    methods: {
      toggleAddedCallback: function () {
        this.showDeliveryGuideSubscibe = !0;
      },
      jumpToTradeFunc: function (i) {
        if ("开户" !== i.plateName) {
          if ("交易" === i.plateName) {
            if (
              [e.USERSTATE.HASACCOUNT, e.USERSTATE.HASBUNDLE].includes(
                s.value.userstate
              )
            )
              return void n({
                url: i.url,
                query: { broker: s.value.dealercode },
              });
            e.StockBridge.toast({
              message: "立即开户，解锁新功能",
              duration: 1e3,
            }),
              clearTimeout(this.timer),
              (this.timer = setTimeout(function () {
                n({ name: "ApplyIndex", query: { broker: i.brokers } });
              }, 1e3));
          }
        } else e.wx$1.navigateTo({ url: "/pages/apply/index" });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("mainIndex") +
    e.resolveComponent("PrivacyPolicyModal") +
    e.resolveComponent("DeliveryGuideSubscribe") +
    e.resolveComponent("task") +
    e.resolveComponent("ThirteenAnniversaryTask")
  )();
var a = e._export_sfc(d, [
  [
    "render",
    function (i, r, t, n, o, s) {
      return e.e(
        {
          a: i.rootFontSize,
          b: e.sr("main", "d9719ca6-2"),
          c: e.o(s.jumpToTradeFunc, 361),
          d: e.p({ "query-data": o.queryData, skin: o.skin }),
          e: e.o(function (e) {
            return (i.showPrivacyPolicy = e);
          }, 362),
          f: e.p({ value: i.showPrivacyPolicy }),
          g:
            o.showDeliveryGuideSubscibe &&
            i.premoteMixin &&
            i.premoteMixin.DeliveryGuideSubscribe,
        },
        o.showDeliveryGuideSubscibe &&
          i.premoteMixin &&
          i.premoteMixin.DeliveryGuideSubscribe
          ? { h: e.p({ premote: i.premoteMixin.DeliveryGuideSubscribe }) }
          : {},
        { i: e.p({ mode: "guide" }), j: o.skin }
      );
    },
  ],
  ["__scopeId", "data-v-d9719ca6"],
]);
wx.createPage(a);
