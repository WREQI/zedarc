var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var r = require("../common/vendor.js");
function n(e, t) {
  return new Promise(function (n) {
    try {
      (t ? r.index.createSelectorQuery().in(t) : r.index.createSelectorQuery())
        .select(e)
        .boundingClientRect(function (e) {
          n(e || null);
        })
        .exec();
    } catch (e) {
      n(null);
    }
  });
}
function u(e) {
  return !!(
    e &&
    "number" == typeof e.width &&
    e.width > 0 &&
    "number" == typeof e.height &&
    e.height > 0
  );
}
exports.flyToTargetSelector = (function () {
  var r = t(
    e().mark(function t(r) {
      var o, i, c, l, a, s, h, p, f, d, x, y, g, b, m, v, w;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (i = r.sourceSelector),
                (c = r.targetSelector),
                (l = r.componentInstance),
                (a = r.targetScale),
                (s = void 0 === a ? 0.05 : a),
                (h = r.targetAnchor),
                (p = void 0 === h ? "center" : h),
                (f = r.targetScope),
                (d = void 0 === f ? null : f),
                (e.next = 11),
                n(
                  i,
                  null !== (o = null == l ? void 0 : l.proxy) && void 0 !== o
                    ? o
                    : null
                )
              );
            case 11:
              return (x = e.sent), (e.next = 14), n(c, null != d ? d : null);
            case 14:
              if (((y = e.sent), u(x) && u(y))) {
                e.next = 17;
                break;
              }
              return e.abrupt("return", null);
            case 17:
              return (
                (b = y),
                (m = (g = x).left + g.width / 2),
                (v = g.top + g.height / 2),
                (w = (function (e, t) {
                  switch (t) {
                    case "top-left":
                      return { x: e.left, y: e.top };
                    case "top-right":
                      return { x: e.left + e.width, y: e.top };
                    case "bottom-left":
                      return { x: e.left, y: e.top + e.height };
                    case "bottom-right":
                      return { x: e.left + e.width, y: e.top + e.height };
                    default:
                      return {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 2,
                      };
                  }
                })(b, p)),
                e.abrupt("return", { x: w.x - m, y: w.y - v, scale: s })
              );
            case 19:
            case "end":
              return e.stop();
          }
      }, t);
    })
  );
  return function (e) {
    return r.apply(this, arguments);
  };
})();
