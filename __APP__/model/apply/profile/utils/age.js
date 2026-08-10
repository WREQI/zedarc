var e = { NOMINAL: 0, NORMAL: 1 };
function t(e) {
  return !e || e.length < 14 ? 0 : +e.slice(6, 10);
}
(exports.AGE_TYPE = e),
  (exports.getAge = function (t) {
    var r,
      n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : e.NORMAL,
      i = t.match(/^\d{6}(\d{8})/)[1],
      a = +i.slice(0, 4),
      l = +i.slice(4, 6),
      s = +i.slice(6, 8),
      o = new Date(),
      c = o.getFullYear(),
      g = o.getMonth() + 1,
      u = o.getDate();
    if (n === e.NORMAL) {
      if (c === a) r = 0;
      else {
        var h = c - a;
        r =
          h > 0
            ? g === l
              ? u - s > 0
                ? h
                : h - 1
              : g - l < 0
              ? h - 1
              : h
            : -1;
      }
      return r;
    }
    return 1 + new Date().getFullYear() - t.match(/^\d{6}(\d{4})/)[1];
  }),
  (exports.getBirthYear = t),
  (exports.isBornAfterYear = function (e) {
    var r =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1990;
    return t(e) >= r;
  });
