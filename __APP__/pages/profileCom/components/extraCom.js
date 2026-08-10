var e = require("../../../common/vendor.js"),
  o = require("../hooks/useJumpDetail.js");
getApp().globalData;
var t = {
  components: {
    ProtocolUpdateBanner: function () {
      return "../../account/components/protocolBanner.js";
    },
    BrokerActionSheet: function () {
      return "../../apply/components/BrokerActionSheet.js";
    },
    task: function () {
      return "../../asyncCom/@tencent/st-act-task/components/task/index.js".then(
        function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
        }
      );
    },
  },
  inject: ["taskSelector"],
  provide: function () {
    return { stockBridge: this.stockBridge };
  },
  setup: function () {
    var e = o.useJumpDetail();
    return {
      showAccountBrokerSheet: e.showAccountBrokerSheet,
      accountBrokerSheetType: e.accountBrokerSheetType,
      closeAccountBrokerSheet: e.closeAccountBrokerSheet,
      toBrokerLogin: e.toBrokerLogin,
    };
  },
  data: function () {
    return { showTask: !1, stockBridge: e.StockBridge };
  },
  created: function () {
    e.wx$1.showTabBar({});
  },
  onPageShow: function () {
    var e = this;
    this.$nextTick(function () {
      e.showTask = !0;
    }),
      (this.accountBrokerSheetType = "normal");
  },
  onPageHide: function () {
    var o;
    e.wx$1.showTabBar({}),
      (this.showAccountBrokerSheet = !1),
      (this.showTask = !1),
      (null == (o = getApp().globalData) ? void 0 : o.taskConfig) &&
        (getApp().globalData.taskConfig = {});
  },
  detached: function () {
    (this.showAccountBrokerSheet = !1), (this.showTask = !1);
  },
};
Array ||
  (
    e.resolveComponent("broker-action-sheet") +
    e.resolveComponent("ProtocolUpdateBanner") +
    e.resolveComponent("task")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (o, t, n, r, c, s) {
      return e.e(
        {
          a: r.showAccountBrokerSheet,
          b: e.o(r.closeAccountBrokerSheet, 1564),
          c: e.p({ type: r.accountBrokerSheetType }),
          d: c.showTask,
        },
        (c.showTask, {})
      );
    },
  ],
]);
wx.createComponent(n);
