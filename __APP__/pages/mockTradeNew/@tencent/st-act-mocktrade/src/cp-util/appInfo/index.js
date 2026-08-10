var e = require("../../../../../../../common/vendor.js"),
  t = function () {
    var t, o;
    return (
      e.wx$1.getSystemInfo({
        success: function (e) {
          (t = e.windowWidth), (o = e.windowHeight);
        },
      }),
      { windowHeight: o, windowWidth: t, os: {} }
    );
  },
  o = function (t) {
    var o = e.wx$1.getSystemInfoSync(),
      n = o.screenWidth,
      r = o.screenHeight;
    return Promise.resolve({ width: n, height: r });
  },
  n = function () {
    return Promise.resolve({ tabList: [{ key: "mock" }] });
  },
  r = t,
  i = o;
(exports.getRemoteControlData = n),
  (exports.getWindowInfo = r),
  (exports.measureInWindow = i);
