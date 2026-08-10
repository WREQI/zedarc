var e = { exports: {} };
e.exports = [
  {
    path: "pages/asset/index",
    style: { navigationBarTitleText: "交易", enablePullDownRefresh: !0 },
    buildPlugin: "1",
    name: "AssetIndex",
    busis: ["trade"],
  },
  {
    path: "pages/asset/all",
    style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
    buildPlugin: "1",
    name: "AssetAll",
    busis: ["trade"],
  },
  {
    path: "pages/asset/currency-setting",
    style: {
      navigationBarTitleText: "港股持仓币种设置",
      enablePullDownRefresh: !1,
    },
    buildPlugin: "1",
    name: "CurrencySetting",
    busis: ["trade"],
  },
];
var t = (null == e.exports ? {} : e.exports).default || e.exports,
  a = Object.freeze(
    Object.defineProperty({ __proto__: null, default: t }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = t), (exports.__CJS__import__0__ = a);
