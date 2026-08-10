require("../../../app.js");
var e = require("../../../model/newstock/useNewStock.js"),
  t = require("../../../cgi/newstock.js"),
  a = require("../../../common/vendor.js"),
  o = require("../../../stores/app/useNavbar.js"),
  n = {
    name: "NewStockPerformance",
    components: {
      NewStockPerformanceItem: function () {
        return "./NewStockPerformanceItem.js";
      },
      Loading: function () {
        return "../../../common/components/Loading/index.js";
      },
      Tabbar: function () {
        return "../../../common/components/Tabbar/index.js";
      },
    },
    setup: function () {
      var n = e.useNewStock(),
        r = n.stockPerformanceData,
        s = n.getSubInfo,
        c = a.ref(t.SUB_INFO_TYPE.STOCK),
        i = [
          { label: "新股", value: t.SUB_INFO_TYPE.STOCK },
          { label: "创业板", value: t.SUB_INFO_TYPE.CYB_STOCK },
          { label: "科创板", value: t.SUB_INFO_TYPE.KCB_STOCK },
        ],
        _ = a.ref(0),
        u = a.computed(function () {
          return (
            !(c.value !== t.SUB_INFO_TYPE.STOCK || !r.xgNoData) ||
            !(c.value !== t.SUB_INFO_TYPE.CYB_STOCK || !r.cybNoData) ||
            !(c.value !== t.SUB_INFO_TYPE.KCB_STOCK || !r.kcbNoData)
          );
        });
      a.watch(
        function () {
          return c.value;
        },
        function (e) {
          (_.value = -1),
            setTimeout(function () {
              _.value = 0;
            }, 150),
            ((e === t.SUB_INFO_TYPE.STOCK && a.isEmpty(r.sub_statis_info_xg)) ||
              (e === t.SUB_INFO_TYPE.CYB_STOCK &&
                a.isEmpty(r.sub_statis_info_cyb)) ||
              (e === t.SUB_INFO_TYPE.KCB_STOCK &&
                a.isEmpty(r.sub_statis_info_kcb))) &&
              s(e);
        }
      ),
        s(t.SUB_INFO_TYPE.STOCK);
      var f = a.storeToRefs(o.useNavbarStore()),
        l = f.externalNavBar,
        m = f.externalNavBar4Mp;
      return {
        type: c,
        tabbar: i,
        stockPerformanceData: r,
        getSubInfo: s,
        SUB_INFO_TYPE: t.SUB_INFO_TYPE,
        onScrolltolower: function () {
          r.fetching || u.value || s(c.value);
        },
        noData: u,
        scrollTop: _,
        externalNavBar: l,
        externalNavBar4Mp: m,
      };
    },
  };
Array ||
  (
    a.resolveComponent("Tabbar") +
    a.resolveComponent("NewStockPerformanceItem") +
    a.resolveComponent("Loading") +
    a.resolveComponent("Empty")
  )(),
  Math;
var r = a._export_sfc(n, [
  [
    "render",
    function (e, t, o, n, r, s) {
      return a.e(
        { a: n.stockPerformanceData.hasData },
        n.stockPerformanceData.hasData
          ? a.e(
              {
                b: a.o(function (e) {
                  return (n.type = e);
                }),
                c: a.p({ value: n.type, data: n.tabbar, "show-slider": !0 }),
                d: n.type === n.SUB_INFO_TYPE.STOCK,
                e: a.p({
                  "is-init": n.stockPerformanceData.init,
                  "lists-data": n.stockPerformanceData.xgLists,
                  "sub-statis-info": n.stockPerformanceData.sub_statis_info_xg,
                  "segments-active-index": n.type,
                }),
                f: n.type === n.SUB_INFO_TYPE.CYB_STOCK,
                g: a.p({
                  "is-init": n.stockPerformanceData.init,
                  "lists-data": n.stockPerformanceData.cybLists,
                  "sub-statis-info": n.stockPerformanceData.sub_statis_info_cyb,
                  "segments-active-index": n.type,
                }),
                h: n.type === n.SUB_INFO_TYPE.KCB_STOCK,
                i: a.p({
                  "is-init": n.stockPerformanceData.init,
                  "lists-data": n.stockPerformanceData.kcbLists,
                  "sub-statis-info": n.stockPerformanceData.sub_statis_info_kcb,
                  "segments-active-index": n.type,
                }),
                j: n.noData,
              },
              n.noData ? {} : { k: a.p({ size: "40rpx" }) },
              {
                l: n.scrollTop,
                m: a.o(function () {
                  return (
                    n.onScrolltolower && n.onScrolltolower.apply(n, arguments)
                  );
                }),
              }
            )
          : a.e(
              { n: n.stockPerformanceData.fetching },
              n.stockPerformanceData.fetching
                ? { o: a.p({ size: "40rpx" }) }
                : { p: a.p({ text: "暂无数据" }) }
            ),
        { q: n.externalNavBar4Mp || n.externalNavBar ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-5f48454a"],
]);
wx.createComponent(r);
