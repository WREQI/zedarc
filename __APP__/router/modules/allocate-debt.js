var e = { exports: {} };
e.exports = [
  {
    root: "pages/allocate-debt",
    margin: !1,
    pages: [
      {
        path: "result",
        style: { navigationBarTitleText: "配债", enablePullDownRefresh: !1 },
        name: "AllocateDebtResult",
        busis: ["trade"],
      },
      {
        path: "trade",
        style: { navigationBarTitleText: "配债", enablePullDownRefresh: !1 },
        name: "AllocateDebtTrade",
        busis: ["trade"],
      },
      {
        path: "introduce",
        style: {
          navigationBarTitleText: "配债介绍",
          enablePullDownRefresh: !1,
        },
        name: "AllocateDebtIntroduce",
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
(exports.__CJS__export_default__ = t), (exports.__CJS__import__13__ = a);
