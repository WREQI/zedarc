var e = navigator && navigator.userAgent.toLowerCase(),
  t = e
    ? {
        wzq: -1 !== e.indexOf("micromessenger"),
        zxg: -1 !== e.indexOf("qqstock"),
        web: -1 !== location.href.indexOf("share"),
        mini: -1 !== e.indexOf("miniProgram"),
      }
    : {};
Object.keys(t).map(function (e) {
  return e;
});
var a = function (e, t, a) {
    var n = e.getFullYear(),
      r = e.getMonth() + 1,
      c = e.getDate(),
      o = e.getHours(),
      i = e.getMinutes(),
      s = e.getSeconds();
    return (
      (r = r < 10 ? "0".concat(r) : r),
      (c = c < 10 ? "0".concat(c) : c),
      (o = o < 10 ? "0".concat(o) : o),
      (i = i < 10 ? "0".concat(i) : i),
      (s = s < 10 ? "0".concat(s) : s),
      (t = t || "%Y-%M-%d %h:%m:%s")
        .replace(/%Y/g, n)
        .replace(/%M/g, r)
        .replace(/%d/g, c)
        .replace(/%h/g, o)
        .replace(/%m/g, i)
        .replace(/%s/g, s)
    );
  },
  n = { exact: 0, relative: 1, combination: 2 };
(exports.date2Str = a),
  (exports.formateDate = function (e) {
    var t = new Date().getTime(),
      a = new Date().setHours(0, 0, 0, 0),
      n = new Date(e.replace(/-/g, "/")).getTime(),
      r = t - n;
    return r > 0 && r < 36e5
      ? parseInt(r / 6e4) > 0
        ? "".concat(parseInt(r / 6e4), "分钟前")
        : "刚刚"
      : r > 36e5 && r < 72e5
      ? "1小时前"
      : r > 72e5 && n > a
      ? "".concat(e.split(" ")[1].substr(0, 5))
      : new Date(n).getFullYear() === new Date().getFullYear()
      ? ""
          .concat(e.split(" ")[0].substr(5, 5).replace("-", "月"), "日 ")
          .concat(e.split(" ")[1].substr(0, 5))
      : ""
          .concat(e.split(" ")[0].substr(0, 4), "年")
          .concat(e.split(" ")[0].substr(5, 5).replace("-", "月"), "日");
  }),
  (exports.formateTime = function (e) {
    var t = new Date().getTime(),
      n = new Date().setHours(0, 0, 0, 0),
      r = 1e3 * e,
      c = new Date(r),
      o = parseInt(t, 10) - parseInt(r, 10);
    return 0 < o && o < 36e5
      ? parseInt(o / 6e4, 10) > 0
        ? "".concat(parseInt(o / 6e4, 10), "分钟前")
        : "刚刚"
      : 36e5 < o && o < 72e5
      ? "1小时前"
      : 72e5 < o && r > n
      ? a(c, "%h:%m")
      : c.getFullYear() === new Date().getFullYear()
      ? a(c, "%M月%d日")
      : a(c, "%Y年%M月%d日");
  }),
  (exports.serializeObject = function (e) {
    if ("string" == typeof e) return e;
    var t = [],
      a = function (e) {
        return encodeURIComponent(e);
      };
    return (
      Object.keys(e).forEach(function (n) {
        null === e[n] || "" === e[n]
          ? t.push("".concat(a(n), "="))
          : void 0 !== e[n] &&
            "" !== e[n] &&
            t.push("".concat(a(n), "=").concat(a(e[n])));
      }),
      t.join("&")
    );
  }),
  (exports.timeFormat = function (e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : n.exact,
      r = new Date(),
      c = new Date(r);
    c.setDate(r.getDate() - 1);
    var o,
      i = 1e3 * e,
      s = new Date(i),
      g = r.getTime();
    switch (t) {
      case n.exact:
        return (
          (o =
            r.getFullYear() !== s.getFullYear()
              ? "%Y-%M-%d %h:%m"
              : r.toDateString() === s.toDateString()
              ? "%h:%m"
              : c.toDateString() === s.toDateString()
              ? "昨天 %h:%m"
              : "%M-%d %h:%m"),
          a(s, o)
        );
      case n.relative:
      case n.combination:
        var l = parseInt(g, 10) - parseInt(i, 10),
          u = 6e4,
          p = 36e5;
        if (r.getFullYear() !== s.getFullYear())
          (o = "%Y-%M-%d"), t === n.combination && (o = "".concat(o, " %h:%m"));
        else if (r.toDateString() === s.toDateString())
          if (l > 0 && l < p) {
            var m = parseInt(l / u, 10);
            o = m > 0 ? "".concat(m, "分钟前") : "刚刚";
          } else o = "".concat(parseInt(l / p, 10), "小时前");
        else
          (o = c.toDateString() === s.toDateString() ? "昨天" : "%M-%d"),
            t === n.combination && (o = "".concat(o, " %h:%m"));
        return a(s, o);
    }
  }),
  (exports.timeFormatType = n);
