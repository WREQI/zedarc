var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-news-core/utils/request/index.js"),
  n = {
    components: {
      BaseTitle: function () {
        return "./BaseTitle.js";
      },
      Module: function () {
        return "../../../../../../stock-widget/@tencent/stock-widget/Module.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXdpZGdldC9Nb2R1bGUudnVl;
          }
        );
      },
    },
    provide: function () {
      return {
        helper: {
          env: { __WZQ__: !1, __MP__: !0, __APP__: !1 },
          request: t.request,
          wx: e.wx$1,
        },
      };
    },
    props: ["detail", "wzqConfig", "userinfo"],
    data: function () {
      return {
        isMP: !0,
        showNationDebtHeader: !1,
        showNationDebtBorder: !1,
        showNationDebtExpandBtn: !0,
        reportPageName: "news.noonreport",
        noneMargin: !0,
        item: { id: "##11###moduleStatus=1" },
      };
    },
    created: function () {},
    methods: {
      learnMore: function () {
        this.$emit("statReport", "gznhg_learn_more"),
          e.StockBridge.routeTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/national-debt-index?scrollToTop=true"
              )
            ),
          });
      },
    },
  };
Array ||
  (
    e.resolveComponent("BaseTitle") +
    e.resolveComponent("Module") +
    e.resolveComponent("ModuleHel")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (t, n, o, r, a, i) {
      return e.e(
        {
          a: e.p({ title: "今日通用回购" }),
          b: e.t(o.detail.desc),
          c: e.t(o.detail.button_text),
          d: e.o(function (e) {
            return i.learnMore();
          }, 4482),
          e: a.isMP,
        },
        a.isMP
          ? {
              f: e.p({
                item: a.item,
                userInfo: o.userinfo,
                showNationDebtHeader: a.showNationDebtHeader,
                showNationDebtBorder: a.showNationDebtBorder,
                showNationDebtExpandBtn: a.showNationDebtExpandBtn,
                reportPageName: a.reportPageName,
                nationDebtStatData: "I8900p000a003",
                noneMargin: a.noneMargin,
              }),
            }
          : {
              g: e.p({
                item: a.item,
                userInfo: o.userinfo,
                showNationDebtHeader: a.showNationDebtHeader,
                showNationDebtBorder: a.showNationDebtBorder,
                showNationDebtExpandBtn: a.showNationDebtExpandBtn,
                reportPageName: a.reportPageName,
                nationDebtStatData: "I8900p000a003",
                noneMargin: a.noneMargin,
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-b6e588e5"],
]);
wx.createComponent(o);
