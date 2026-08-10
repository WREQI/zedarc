function e(e) {
  return String(e).padStart(2, "0");
}
require("../app.js"),
  (exports.formatUnixTimeInEast8 = function (t) {
    var r =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "YYYY-MM-DD HH:mm:ss";
    if (!t) return "";
    var n = Number(t);
    if (!Number.isFinite(n)) return "";
    var i = new Date(1e3 * n + 288e5),
      s = {
        YYYY: String(i.getUTCFullYear()),
        MM: e(i.getUTCMonth() + 1),
        DD: e(i.getUTCDate()),
        HH: e(i.getUTCHours()),
        mm: e(i.getUTCMinutes()),
        ss: e(i.getUTCSeconds()),
      };
    return r.replace(/YYYY|MM|DD|HH|mm|ss/g, function (e) {
      return s[e];
    });
  });
