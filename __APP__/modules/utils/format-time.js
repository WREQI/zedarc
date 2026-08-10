Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function (t) {
    var r = Math.floor(t / 3600),
      a = Math.floor((t - 3600 * r) / 60),
      o = Math.floor(t - 3600 * r - 60 * a);
    return ""
      .concat(r > 0 ? String(r).padStart(2, "0") : "")
      .concat(r > 0 ? ":" : "")
      .concat(String(a).padStart(2, "0"), ":")
      .concat(String(o).padStart(2, "0"));
  });
