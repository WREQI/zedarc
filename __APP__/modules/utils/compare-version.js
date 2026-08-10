Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function (e, t) {
    var r = e.split("."),
      n = t.split("."),
      u = Math.max(e.length, t.length);
    for (; r.length < u; ) r.push("0");
    for (; n.length < u; ) n.push("0");
    for (var l = 0; l < u; l++) {
      var s = +e[l],
        f = +t[l];
      if (s > f) return 1;
      if (s < f) return -1;
    }
    return 0;
  });
