require("../../app.js");
var r = require("../../stores/subscribe/useSubscribe.js");
exports.asyncShowMpSub = function (i) {
  var e,
    s,
    u,
    l,
    b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  try {
    var c =
        null ==
        (l =
          null ==
          (u =
            null ==
            (s = null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin)
              ? void 0
              : s.call(e))
            ? void 0
            : u.subscribeApplyInfo)
          ? void 0
          : l.call(u),
      n = c.subscribe,
      o = r.useSubscribeStore(),
      a = o.isSubscribe;
    if (a) return;
    n(i, b);
  } catch (n) {}
};
