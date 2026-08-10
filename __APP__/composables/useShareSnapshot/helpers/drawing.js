require("../../../app.js");
function e(e, t, a, n, r, i) {
  var o = t,
    l = o.naturalWidth || o.width || 0,
    c = o.naturalHeight || o.height || 0;
  if (l && c) {
    var s = Math.max(r / l, i / c),
      u = l * s,
      f = c * s,
      d = a + (r - u) / 2,
      h = n + (i - f) / 2;
    e.drawImage(t, d, h, u, f);
  } else e.drawImage(t, a, n, r, i);
}
(exports.drawCircleImage = function (t, a) {
  return function (n, r, i, o) {
    var l = o / 2,
      c = (function (e, t) {
        var a = Math.max(1, Math.round(e * t));
        if ("undefined" != typeof document) {
          var n = document.createElement("canvas");
          (n.width = a), (n.height = a);
          var r = n.getContext("2d");
          return r ? (r.scale(t, t), { surface: n, ctx: r }) : null;
        }
        var i = globalThis.wx;
        if (null == i ? void 0 : i.createOffscreenCanvas) {
          var o = i.createOffscreenCanvas({ type: "2d", width: a, height: a }),
            l = o.getContext("2d");
          return l ? (l.scale(t, t), { surface: o, ctx: l }) : null;
        }
        return null;
      })(o, a);
    if (c) {
      var s = c.surface,
        u = c.ctx;
      return (
        u.clearRect(0, 0, o, o),
        u.save(),
        u.beginPath(),
        u.arc(l, l, l, 0, 2 * Math.PI),
        u.closePath(),
        u.clip(),
        e(u, n, 0, 0, o, o),
        u.restore(),
        void t.drawImage(s, r, i, o, o)
      );
    }
    t.save(),
      t.beginPath(),
      t.arc(r + l, i + l, l, 0, 2 * Math.PI),
      t.closePath(),
      t.clip(),
      e(t, n, r, i, o, o),
      t.restore();
  };
}),
  (exports.drawRoundRect = function (e) {
    return function (t, a, n, r, i, o) {
      var l,
        c = Math.min(i, n / 2, r / 2);
      e.save(),
        e.beginPath(),
        e.moveTo(t + c, a),
        e.lineTo(t + n - c, a),
        e.arcTo(t + n, a, t + n, a + c, c),
        e.lineTo(t + n, a + r - c),
        e.arcTo(t + n, a + r, t + n - c, a + r, c),
        e.lineTo(t + c, a + r),
        e.arcTo(t, a + r, t, a + r - c, c),
        e.lineTo(t, a + c),
        e.arcTo(t, a, t + c, a, c),
        e.closePath(),
        (null == o ? void 0 : o.fill) && ((e.fillStyle = o.fill), e.fill()),
        (null == o ? void 0 : o.stroke) &&
          ((e.lineWidth = null !== (l = o.lineWidth) && void 0 !== l ? l : 1),
          (e.strokeStyle = o.stroke),
          e.stroke()),
        e.restore();
    };
  }),
  (exports.drawText = function (e) {
    return function (t, a, n, r) {
      var i = r.fontSize,
        o = r.color,
        l = r.fontWeight,
        c = void 0 === l ? "normal" : l,
        s = r.textAlign,
        u = void 0 === s ? "left" : s,
        f = r.textBaseline,
        d = void 0 === f ? "top" : f,
        h = r.fontFamily,
        v =
          void 0 === h
            ? 'stockFont, -apple-system, BlinkMacSystemFont, Roboto, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", sans-serif'
            : h,
        g = r.maxWidth,
        x = r.lineHeight,
        m = x && "top" === d ? n + (x - i) / 2 : n;
      e.save(),
        (e.font = "".concat(c, " ").concat(i, "px ").concat(v)),
        (e.textAlign = u),
        (e.textBaseline = d),
        (e.fillStyle = o);
      var p = t;
      if (g && e.measureText(t).width > g) {
        for (var T = 0, w = t.length; T < w; ) {
          var P = (T + w + 1) >> 1,
            S = t.slice(0, P) + "…";
          e.measureText(S).width <= g ? (T = P) : (w = P - 1);
        }
        p = t.slice(0, T) + "…";
      }
      e.fillText(p, a, m), e.restore();
    };
  });
