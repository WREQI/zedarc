var e = function (e, t, a) {
  var r = e.getFullYear(),
    n = e.getMonth() + 1,
    c = e.getDate(),
    g = e.getHours(),
    o = e.getMinutes(),
    l = e.getSeconds();
  return (
    (n = n < 10 ? "0".concat(n) : n),
    (c = c < 10 ? "0".concat(c) : c),
    (g = g < 10 ? "0".concat(g) : g),
    (o = o < 10 ? "0".concat(o) : o),
    (l = l < 10 ? "0".concat(l) : l),
    (t = t || "%Y-%M-%d %h:%m:%s")
      .replace(/%Y/g, r)
      .replace(/%M/g, n)
      .replace(/%d/g, c)
      .replace(/%h/g, g)
      .replace(/%m/g, o)
      .replace(/%s/g, l)
  );
};
exports.timeFormat = function (t) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    r = new Date(),
    n = new Date(r);
  n.setDate(r.getDate() - 1);
  var c,
    g = 1e3 * t,
    o = new Date(g),
    l = r.getTime();
  switch (a) {
    case 0:
      return (
        (c =
          r.getFullYear() !== o.getFullYear()
            ? "%Y-%M-%d %h:%m"
            : r.toDateString() === o.toDateString()
            ? "%h:%m"
            : n.toDateString() === o.toDateString()
            ? "昨天 %h:%m"
            : "%M-%d %h:%m"),
        e(o, c)
      );
    case 1:
    case 2:
      var s = parseInt(l, 10) - parseInt(g, 10),
        i = 6e4,
        D = 36e5;
      if (r.getFullYear() !== o.getFullYear())
        (c = "%Y-%M-%d"), 2 === a && (c = "".concat(c, " %h:%m"));
      else if (r.toDateString() === o.toDateString())
        if (s > 0 && s < D) {
          var u = parseInt(s / i, 10);
          c = u > 0 ? "".concat(u, "分钟前") : "刚刚";
        } else c = "".concat(parseInt(s / D, 10), "小时前");
      else
        (c = n.toDateString() === o.toDateString() ? "昨天" : "%M-%d"),
          2 === a && (c = "".concat(c, " %h:%m"));
      return e(o, c);
  }
};
