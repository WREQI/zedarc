var e = { exports: {} };
e.exports = [
  {
    root: "pages/debt",
    margin: !1,
    pages: [
      {
        path: "index",
        style: {
          navigationBarTitleText: "通用回购",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "Debt",
        busis: ["trade"],
      },
      {
        path: "tips",
        style: {
          navigationBarTitleText: "产品介绍",
          enablePullDownRefresh: !1,
        },
        name: "DebtTips",
        busis: ["trade"],
      },
      {
        path: "auto-order",
        style: {
          navigationBarTitleText: "通用回购自动下单",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "DebtAutoOrder",
        busis: ["trade"],
      },
      {
        path: "auto-intro",
        style: {
          navigationBarTitleText: "通用回购自动下单",
          enablePullDownRefresh: !1,
        },
        name: "DebtAutoIntro",
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
(exports.__CJS__export_default__ = t), (exports.__CJS__import__5__ = a);
