require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../model/newstock/useNewStock.js");
require("../config.js");
var r = require("../../../cgi/newstock.js"),
  o = require("../../../stores/app/useNavbar.js"),
  n = {
    name: "NewStock",
    components: {
      QuotaInfo: function () {
        return "./QuotaInfo.js";
      },
      PurchaseList: function () {
        return "./PurchaseList.js";
      },
    },
    props: { stockPerformanceData: { type: Object, default: function () {} } },
    setup: function (n) {
      var a = t.inject("purchaseListData"),
        u = e.PURCHASE_TYPE.ALL,
        s = t.computed(function () {
          var t, e;
          return parseFloat(
            null ==
              (e =
                null == (t = n.stockPerformanceData)
                  ? void 0
                  : t.sub_statis_info_xg)
              ? void 0
              : e.rightBottomTitle,
            10
          );
        }),
        i = t.computed(function () {
          return s.value > 0;
        }),
        c = t.computed(function () {
          return [
            { number: a.maxBuyAmountSh, text: "沪A配额" },
            { number: a.maxBuyAmountSz, text: "深A配额" },
            { number: a.maxBuyAmountKcb, text: "科创板配额" },
            { number: a.maxBuyAmountConv, text: "新债额度" },
          ];
        }),
        p = t.inject("getSubInfo");
      t.onMounted(function () {
        p(r.SUB_INFO_TYPE.STOCK);
      });
      var f = t.storeToRefs(o.useNavbarStore());
      return {
        externalNavBar: f.externalNavBar,
        externalNavBar4Mp: f.externalNavBar4Mp,
        type: u,
        quotaList: c,
        totalProfitUnitAvg: s,
        showProfitUnitAvg: i,
      };
    },
  };
Array ||
  (t.resolveComponent("QuotaInfo") + t.resolveComponent("PurchaseList"))();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, r, o, n, a, u) {
      return t.e(
        { a: n.showProfitUnitAvg },
        n.showProfitUnitAvg
          ? { b: t.t(e.$filters.money.formatNoUnit(n.totalProfitUnitAvg, !0)) }
          : {},
        {
          c: t.p({
            lists: n.quotaList,
            "purchase-type": n.type,
            "show-extra": n.showProfitUnitAvg,
          }),
          d: t.p({ "purchase-type": n.type }),
          e: n.externalNavBar4Mp || n.externalNavBar ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-ac23004d"],
]);
wx.createComponent(a);
