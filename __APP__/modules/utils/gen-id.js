Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function (r) {
    for (var t = r || 32, e = "", o = 1; o <= t; o++) {
      var a = Math.floor(16 * Math.random()).toString(16);
      e += a;
    }
    return e;
  });
