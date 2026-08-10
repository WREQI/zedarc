var e = { exports: {} };
e.exports = [
  {
    root: "pages/trade",
    pages: [
      {
        path: "stock",
        style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
        buildPlugin: "1",
        name: "TradeStock",
        busis: ["trade"],
      },
      {
        path: "stock-new",
        style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
        buildPlugin: "1",
        name: "TradeStockNew",
        busis: ["trade"],
      },
      {
        path: "stock-embedded",
        style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
        buildPlugin: "1",
        name: "TradeStockEmbedded",
        busis: ["trade"],
      },
      {
        path: "set-position",
        style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
        name: "TradeStockSetPosition",
        busis: ["trade"],
      },
      {
        path: "history",
        style: {
          navigationBarTitleText: "交易记录",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TradeHistory",
        busis: ["trade"],
      },
      {
        path: "history-search",
        style: {
          navigationBarTitleText: "查询交易记录",
          enablePullDownRefresh: !1,
        },
        name: "TradeHistorySearch",
        busis: ["trade"],
      },
      {
        path: "history-search-result",
        style: {
          navigationBarTitleText: "交易记录",
          enablePullDownRefresh: !1,
        },
        name: "TradeHistorySearchResult",
        busis: ["trade"],
      },
      {
        path: "detail",
        style: {
          navigationBarTitleText: "交易详情",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TradeDetail",
        busis: ["trade"],
      },
      {
        path: "etf-subscribe-detail",
        style: {
          navigationBarTitleText: "交易详情",
          enablePullDownRefresh: !1,
        },
        name: "ETFSubscribeDetail",
        busis: ["trade"],
      },
      {
        path: "newstock-detail",
        style: {
          navigationBarTitleText: "交易详情",
          enablePullDownRefresh: !1,
        },
        name: "TradeRecordNewStockDetail",
        busis: ["trade"],
      },
      {
        path: "allot/index",
        margin: !1,
        style: { navigationBarTitleText: "配股", enablePullDownRefresh: !1 },
        name: "TradeAllot",
        busis: ["trade"],
      },
      {
        path: "allot/desc",
        margin: !1,
        style: { navigationBarTitleText: "配股", enablePullDownRefresh: !1 },
        name: "TradeAllotDesc",
        busis: ["trade"],
      },
      {
        path: "allot/result",
        margin: !1,
        style: { navigationBarTitleText: "配股", enablePullDownRefresh: !1 },
        name: "TradeAllotResult",
        busis: ["trade"],
      },
      {
        path: "debt",
        margin: !1,
        style: {
          navigationBarTitleText: "通用回购",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TradeDebt",
        busis: ["trade"],
      },
      {
        path: "debt/result",
        margin: !1,
        style: {
          navigationBarTitleText: "通用回购",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TradeDebtResult",
        busis: ["trade"],
      },
      {
        path: "condition/protocol",
        margin: !1,
        style: {
          navigationBarTitleText: "智能条件单风险揭示说明",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "ConditionProtocol",
        busis: ["trade"],
      },
      {
        path: "condition/ca-validation",
        margin: !1,
        style: { navigationBarTitleText: "CA验证", enablePullDownRefresh: !1 },
        buildPlugin: "1",
        name: "ConditionProtocolCA",
        busis: ["trade"],
      },
      {
        path: "condition/index",
        margin: !1,
        style: { navigationBarTitleText: "条件单", enablePullDownRefresh: !1 },
        buildPlugin: "1",
        name: "ConditionList",
        busis: ["trade"],
      },
      {
        path: "condition/detail",
        margin: !1,
        style: {
          navigationBarTitleText: "条件单详情",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "ConditionDetail",
        busis: ["trade"],
      },
      {
        path: "condition/grid",
        margin: !1,
        style: {
          navigationBarTitleText: "设置网格条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "GridCondition",
        busis: ["trade"],
      },
      {
        path: "condition/grid-guide",
        margin: !1,
        style: {
          navigationBarTitleText: "网格交易介绍",
          enablePullDownRefresh: !1,
        },
        name: "GridConditionGuide",
        busis: ["trade"],
      },
      {
        path: "condition/tpsl",
        margin: !1,
        style: {
          navigationBarTitleText: "设置止盈止损条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "TPSLCondition",
        busis: ["trade"],
      },
      {
        path: "condition/tpsl-guide",
        margin: !1,
        style: {
          navigationBarTitleText: "止盈止损条件单",
          enablePullDownRefresh: !1,
        },
        name: "TPSLConditionGuide",
        busis: ["trade"],
      },
      {
        path: "condition/price",
        margin: !1,
        style: {
          navigationBarTitleText: "设置价格条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "PriceCondition",
        busis: ["trade"],
      },
      {
        path: "condition/invest",
        margin: !1,
        style: {
          navigationBarTitleText: "设置定期定投条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "InvestCondition",
        busis: ["trade"],
      },
      {
        path: "condition/limit-up",
        margin: !1,
        style: {
          navigationBarTitleText: "设置涨停买入条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "LimitUpCondition",
        busis: ["trade"],
      },
      {
        path: "condition/opening-sell",
        margin: !1,
        style: {
          navigationBarTitleText: "设置开板卖出条件单",
          enablePullDownRefresh: !0,
        },
        buildPlugin: "1",
        name: "OpeningSellCondition",
        busis: ["trade"],
      },
      {
        path: "condition/limit-up-guide",
        margin: !1,
        style: {
          navigationBarTitleText: "涨停买入条件单",
          enablePullDownRefresh: !1,
        },
        name: "LimitUpConditionGuide",
        busis: ["trade"],
      },
      {
        path: "condition/opening-sell-guide",
        margin: !1,
        style: {
          navigationBarTitleText: "开板卖出条件单",
          enablePullDownRefresh: !1,
        },
        name: "OpeningSellConditionGuide",
        busis: ["trade"],
      },
      {
        path: "tip",
        style: {
          navigationBarTitleText: "交易费用说明",
          enablePullDownRefresh: !1,
        },
        name: "TradeDetailTip",
        busis: ["trade"],
      },
      {
        path: "rule",
        style: {
          navigationBarTitleText: "交易规则",
          enablePullDownRefresh: !1,
        },
        name: "TradeRule",
        busis: ["trade"],
      },
    ],
  },
];
var t = (null == e.exports ? {} : e.exports).default || e.exports,
  i = Object.freeze(
    Object.defineProperty({ __proto__: null, default: t }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = t), (exports.__CJS__import__11__ = i);
