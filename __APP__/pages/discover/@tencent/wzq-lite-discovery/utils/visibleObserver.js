require("../../../../../common/vendor.js");
var e = require("../../stock-base/visibilityObserver/index.js");
exports.visibleObserver = function () {
  var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    r = arguments.length > 1 ? arguments[1] : void 0,
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new e.VisibilityObserver(
    i,
    {
      once: !0,
      callback: function (e, i) {
        t(e, i);
      },
      intersection: { threshold: 0 },
    },
    { context: r }
  );
};
