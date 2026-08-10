module.exports = {
  main2Plugin: function () {
    return getApp().globalData.main2Plugin;
  },
  mainPages: function () {
    return getCurrentPages();
  },
  switchFlag: { navbarNew: "1", assetNew: "1" },
};
var e = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
exports.utils = e;
