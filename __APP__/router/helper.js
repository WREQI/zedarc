(exports.getCurrentRoute = function () {
  var t = getCurrentPages();
  return t[t.length - 1];
}),
  (exports.getPrevRoute = function () {
    var t = getCurrentPages();
    return t.length > 1 ? t[t.length - 2] : null;
  }),
  (exports.isApplyPage = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return t && t.startsWith("/apply");
  }),
  (exports.isNavTransitRoute = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if ("NavIndex" === (null == t ? void 0 : t.name)) return !0;
    var e = String(
      (null == t ? void 0 : t.path) || (null == t ? void 0 : t.fullPath) || ""
    );
    return /nav\/index/.test(e);
  });
