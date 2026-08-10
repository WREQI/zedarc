var e = { exports: {} };
e.exports = [
  {
    root: "pages/analysis",
    margin: !1,
    pages: [
      {
        path: "home",
        style: {
          navigationBarTitleText: "盈亏分析",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisIndex",
        busis: ["trade"],
      },
      {
        path: "analysis-detail",
        style: {
          navigationBarTitleText: "盈亏分析",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisDetail",
        busis: ["trade"],
      },
      {
        path: "detail-interest",
        style: {
          navigationBarTitleText: "盈亏分析",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisDetailInterest",
        busis: ["trade"],
      },
      {
        path: "detail-portrait",
        style: {
          navigationBarTitleText: "投资画像",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisPortraitDetail",
        busis: ["trade"],
      },
      {
        path: "weekly",
        style: {
          navigationBarTitleText: "投资周报",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisWeekly",
        busis: ["trade"],
      },
      {
        path: "history-weekly",
        style: {
          navigationBarTitleText: "往期周报",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisHistoryWeekly",
        busis: ["trade"],
      },
      {
        path: "money-inout",
        style: {
          navigationBarTitleText: "资产轨迹",
          enablePullDownRefresh: !1,
        },
        name: "AnalysisMoneyInout",
        busis: ["trade"],
      },
    ],
  },
];
var t = (null == e.exports ? {} : e.exports).default || e.exports,
  a = Object.freeze(
    Object.defineProperty({ __proto__: null, default: t }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = t), (exports.__CJS__import__2__ = a);
