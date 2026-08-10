var e = require("../@tencent/st-canvas-image/OffscreenCanvas.js");
exports.getRenderRows = function (t, a, n, r) {
  var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 400,
    i = e.OffscreenCanvasImage.initCanvas().getContext("2d");
  i.font = "".concat(s, " ").concat(r, "px stockFont");
  for (var c = t.split(""), o = [], v = "", f = 0; f < c.length; ) {
    var h = c[f];
    i.measureText(v).width + i.measureText(h).width < a
      ? (v += h)
      : (o.push(v), (v = h)),
      (f += 1);
  }
  if ((o.push(v), o.length > n)) {
    for (
      var u = "...",
        g = i.measureText(u).width,
        d = o[n - 1],
        l = "",
        x = 0,
        m = 0;
      m < d.length;
      m++
    ) {
      var p = d[m],
        w = i.measureText(p).width;
      if (x + w + g >= a) break;
      (l += p), (x += w);
    }
    (l += u), o.splice(n - 1, 1, l);
  }
  return o.slice(0, n);
};
