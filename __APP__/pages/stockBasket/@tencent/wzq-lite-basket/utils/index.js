var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../common/vendor.js");
function n(e) {
  return /[\u4e00-\u9fa5]/.test(e);
}
(exports.allStartWithSamePrefix = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
  if (0 === e.length) return !1;
  for (var r = e[0][t].substring(0, n), i = 1; i < e.length; i++)
    if (e[i][t].substring(0, n) !== r) return !1;
  return !0;
}),
  (exports.fillData = function (n, r) {
    var i = [];
    return (
      r
        .map(function (n) {
          var r = e(n, 2),
            i = r[0],
            a = r[1];
          return [
            t.dayjs("2023-01-01 ".concat(i)),
            t.dayjs(
              parseInt(i, 10) > parseInt(a, 10)
                ? "2023-01-02 ".concat(a)
                : "2023-01-01 ".concat(a)
            ),
          ];
        })
        .forEach(function (t) {
          for (
            var r = e(t, 2),
              a = r[0],
              o = r[1],
              u = a,
              s = !0,
              d = function () {
                var e = u.format("HHmm"),
                  t = n.find(function (t) {
                    return t.minute === e;
                  });
                t
                  ? i.push(t)
                  : i.push({ minute: e, changePct: "", changePctIndex: "" }),
                  (u = u.add(1, "minute")),
                  s && u.hour() >= 0 && u.hour() < a.hour() && (s = !1);
              };
            u.isBefore(o) || u.isSame(o);

          )
            d();
        }),
      i
    );
  }),
  (exports.findDate = function (e, n) {
    var r = t.dayjs(e);
    if (0 === n.length) return { date: "", index: -1 };
    var i = t.dayjs(n[0].date);
    if (i.isAfter(r)) return { date: "", index: -1 };
    if (i.isSame(r)) return { date: "", index: -1 };
    for (var a = 0; a < n.length; a++) {
      var o = t.dayjs(n[a].date);
      if (o.isSame(r, "day"))
        return { date: n[a].date, index: a, isShowLine: !0 };
      if (o.isAfter(r)) return { date: n[a].date, index: a, isShowLine: !0 };
    }
    return { date: n[n.length - 1].date, index: n.length - 1, isShowLine: !1 };
  }),
  (exports.getScreenRatio = function () {
    var e = 0;
    void 0 !== t.wx$1 && t.wx$1.getSystemInfoSync
      ? (e = (
          (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
          t.wx$1.getSystemInfoSync()
        ).screenWidth)
      : (e = Math.min(
          430,
          window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        ));
    return e / 375;
  }),
  (exports.isAllChinese = function (e) {
    for (var t = !0, r = 0; r < e.length; r++)
      if (!n(e[r])) {
        t = !1;
        break;
      }
    return t;
  }),
  (exports.isChineseCharSimple = n),
  (exports.isFromPyq = function () {
    var e = !1;
    try {
      var n = t.wx$1.getLaunchOptionsSync();
      e = 1154 === (null == n ? void 0 : n.scene);
    } catch (n) {}
    return e;
  }),
  (exports.removeDuplicates = function (e) {
    var t = new Set(e);
    return Array.from(t);
  });
