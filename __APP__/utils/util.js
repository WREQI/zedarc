var t = function (t) {
  return (t = t.toString())[1] ? t : "0" + t;
};
module.exports = {
  formatTime: function (r) {
    var e = r.getFullYear(),
      n = r.getMonth() + 1,
      o = r.getDate(),
      i = r.getHours(),
      a = r.getMinutes(),
      u = r.getSeconds();
    return [e, n, o].map(t).join("/") + " " + [i, a, u].map(t).join(":");
  },
  toUint8Array: function (t) {
    for (
      var r = t.words, e = t.sigBytes, n = new Uint8Array(e), o = 0;
      o < e;
      o++
    ) {
      var i = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
      n[o] = i;
    }
    return n;
  },
};
