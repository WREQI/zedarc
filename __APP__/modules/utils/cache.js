Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = (function () {
  function e() {}
  return (
    (e.set = function (t, n, r) {
      void 0 === r && (r = 0);
      var c = { expire: r, ts: +new Date(), data: n };
      try {
        wx.setStorageSync("".concat(e.prefix).concat(t), c);
      } catch (e) {}
    }),
    (e.get = function (t) {
      var n = "".concat(e.prefix).concat(t),
        r = wx.getStorageSync(n);
      if (!r) return null;
      var c = r.data,
        a = r.ts,
        o = r.expire;
      return o > 0 && +new Date() - a > o ? (e.del(t), null) : c;
    }),
    (e.del = function (t) {
      wx.removeStorageSync("".concat(e.prefix).concat(t));
    }),
    (e.prefix = "__tp_cache_"),
    e
  );
})();
exports.default = e;
