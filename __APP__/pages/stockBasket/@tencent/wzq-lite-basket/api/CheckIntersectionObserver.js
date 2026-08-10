var e = require("../../../../../common/vendor.js");
exports.checkIntersectionObserver = function (r, t) {
  var i =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : function () {},
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  try {
    t
      ? (r.intersectionObserver && r.intersectionObserver.disconnect(),
        (r.intersectionObserver = e.index.createIntersectionObserver(r, {
          observeAll: s,
        })),
        r.intersectionObserver
          .relativeToViewport({ bottom: 0 })
          .observe(t, function (e) {
            e.intersectionRatio < n ||
              0 === e.intersectionRatio ||
              (r.isHasObserved && !s) ||
              ((r.isHasObserved = !0), i && i(e));
          }))
      : r.intersectionObserver &&
        ((r.isHasObserved = !1), r.intersectionObserver.disconnect());
  } catch (e) {
    i && i(0);
  }
};
