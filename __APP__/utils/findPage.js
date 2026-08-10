function e(e, n) {
  return n.findIndex(function (n) {
    var i, r;
    return (
      !(!n || !n.route) &&
      (null ==
      (r = null == (i = null == n ? void 0 : n.route) ? void 0 : i.endsWith)
        ? void 0
        : r.call(i, e))
    );
  });
}
require("../app.js"),
  (exports.findPage = function (n) {
    var i = getCurrentPages(),
      r = -1;
    if ((r = e(n, i)) >= 0)
      return { type: "plugin", index: r, detail: i[r], length: i.length };
    try {
      if (requireMiniProgram) {
        if (!requireMiniProgram().mainPages)
          return { type: "plugin", index: -1, detail: null, length: 0 };
        var t = requireMiniProgram().mainPages();
        return {
          type: "main",
          index: (r = e(n, t)),
          detail: -1 === r ? null : t[r],
          length: t.length,
        };
      }
    } catch (e) {}
    return { type: "h5", index: -1, detail: null, length: 0 };
  });
