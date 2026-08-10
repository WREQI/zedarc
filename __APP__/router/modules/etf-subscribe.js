var e = { exports: {} };
e.exports = [
  {
    root: "pages/etf-subscribe",
    margin: !1,
    pages: [
      {
        path: "index",
        style: { navigationBarTitleText: "ETF认购", enablePullDownRefresh: !0 },
        name: "EtfSubscribe",
        busis: ["trade"],
      },
      {
        path: "tips",
        style: { navigationBarTitleText: "新发ETF", enablePullDownRefresh: !1 },
        name: "EtfSubscribeTips",
        busis: ["trade"],
      },
    ],
  },
];
var t = (null == e.exports ? {} : e.exports).default || e.exports,
  r = Object.freeze(
    Object.defineProperty({ __proto__: null, default: t }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = t), (exports.__CJS__import__21__ = r);
