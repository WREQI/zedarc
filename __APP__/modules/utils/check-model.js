Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.checkIphoneModel = function (e, r) {
    var t = e.match(/<iPhone(\d+),\d>/);
    if (t) return Number(t[1]) >= r;
    return !1;
  });
