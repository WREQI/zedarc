require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  n = {
    riseFast: {
      selectDesc: "股价 > 5日线 > 10日线 > 20日线",
      signalItems: [
        "买入：看到 MACD 柱子由绿变红买入",
        "卖出：看到 MACD 柱子由红变绿卖出",
      ],
      tips: "Tips：每天最多交易2次，别让频繁操作吃掉你的收益！",
      caption: "（示意图 - 分时图MACD指标）",
    },
    volatile: {
      selectDesc: "股价 > 5日线 > 10日线 > 20日线",
      signalItems: [
        "买入：波动超1.5%，涨幅<0，5分钟K线出实体阳线买入",
        "卖出：波动超1.5%，涨幅>0，5分钟K线出实体阴线卖出",
      ],
      tips: "Tips：每天最多交易2次，别让频繁操作吃掉你的收益！",
      caption: "（示意图 - 5分钟K线）",
    },
    premium: {
      selectDesc: "选择溢折率波动较大、流动性较好的跨境/商品 ETF",
      signalItems: ["溢折率＜30分位考虑买入，溢折率≥50分位考虑卖出"],
      tips: "Tips：每天最多交易2次，别让频繁操作吃掉你的收益！",
      caption: "（示意图 - 简况｜溢折率分析）",
    },
  },
  t = e.defineComponent({
    name: "PracticeMethodSheet",
    components: {
      Tabbar: function () {
        return "../../components/Tabbar.js";
      },
    },
    props: { activeTab: { type: String, default: "riseFast" } },
    emits: ["close"],
    setup: function (t, a) {
      var r = a.emit,
        i = [
          { key: "riseFast", label: "涨的快" },
          { key: "volatile", label: "波动大" },
          { key: "premium", label: "溢折率回归" },
        ],
        o = ["mpwzq", "mpweapp"].includes("mpweapp"),
        s = i.map(function (e) {
          return { name: e.label, key: e.key };
        }),
        c = e.ref(t.activeTab);
      e.watch(
        function () {
          return t.activeTab;
        },
        function (e) {
          c.value = e;
        }
      );
      var l = e.computed(function () {
        var e = i.findIndex(function (e) {
          return e.key === c.value;
        });
        return -1 === e ? 0 : e;
      });
      return {
        tabs: i,
        rankConfig: s,
        tabIndex: l,
        innerTab: c,
        contentByTab: function (e) {
          return n[e] || n.riseFast;
        },
        swiperOptions: { observeParents: !0, observer: !0 },
        switchTab: function (e) {
          var n = i[e];
          n && (c.value = n.key);
        },
        handleSwiperChange: function (e) {
          var n,
            t =
              null == (n = null == e ? void 0 : e.detail) ? void 0 : n.current;
          if (void 0 !== t && t !== l.value) {
            var a = i[t];
            a && (c.value = a.key);
          }
        },
        onClose: function () {
          r("close");
        },
        isMp: o,
      };
    },
  });
Array || e.resolveComponent("Tabbar")();
var a = e._export_sfc(t, [
  [
    "render",
    function (n, t, a, r, i, o) {
      return {
        a: e.o(function () {
          return n.onClose && n.onClose.apply(n, arguments);
        }, 3175),
        b: e.o(n.switchTab, 3176),
        c: e.p({
          "rank-config": n.rankConfig,
          "rank-index": n.tabIndex,
          "align-left": !n.isMp,
        }),
        d: e.f(n.tabs, function (t, a, r) {
          return e.e(
            { a: "premium" !== t.key },
            "premium" !== t.key
              ? { b: e.t(n.contentByTab(t.key).selectDesc) }
              : {},
            {
              c: e.f(n.contentByTab(t.key).signalItems, function (n, t, a) {
                return { a: e.t(n), b: t };
              }),
              d: e.t(n.contentByTab(t.key).tips),
              e: e.n("etf-method__chart-line--".concat(t.key)),
              f: e.t(n.contentByTab(t.key).caption),
              g: e.n("etf-method__slide--".concat(t.key)),
              h: t.key,
            }
          );
        }),
        e: n.tabIndex,
        f: n.swiperOptions,
        g: e.o(function () {
          return (
            n.handleSwiperChange && n.handleSwiperChange.apply(n, arguments)
          );
        }, 3177),
      };
    },
  ],
  ["__scopeId", "data-v-7280c484"],
]);
wx.createComponent(a);
