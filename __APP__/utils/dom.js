var e = require("../common/vendor.js"),
  t = require("./index.js");
(exports.getContext = function () {
  var r;
  if (
    t.getIsMpPluginComponent() &&
    (null == (r = e.index) ? void 0 : r.getPluginContext)
  )
    return e.index.getPluginContext();
  var n = getCurrentPages();
  return n[n.length - 1];
}),
  (exports.getScrollEventTarget = function (e) {
    for (
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : window,
        r = e;
      r &&
      "HTML" !== r.tagName &&
      "BODY" !== r.tagName &&
      1 === r.nodeType &&
      r !== t;

    ) {
      var n = document.defaultView.getComputedStyle(r),
        o = n.overflowY;
      if ("scroll" === o || "auto" === o) return r;
      r = r.parentNode;
    }
    return t;
  }),
  (exports.getScrollTop = function (e) {
    return "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  });
