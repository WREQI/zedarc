var e = require("../../../../../../common/vendor.js"),
  t = {},
  o = {};
Object.defineProperty(o, "__esModule", { value: !0 }),
  (o.getSystemInfo = function () {
    return Promise.resolve({});
  }),
  (o.getWindowInfo = function () {
    var e = !!n.model.match(/iphone\sx/gi);
    return {
      os: n.system.replace(/\s\d+$/, ""),
      platform: "mpvue",
      isIPhoneX: e,
      pixelRatio: n.pixelRatio,
      windowWidth: n.windowWidth,
      windowHeight: n.windowHeight,
      safeArea: { top: n.statusBarHeight, bottom: e ? 44 : 0 },
    };
  });
var n = e.wx$1.getSystemInfoSync();
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = o;
  Object.keys(t).forEach(function (o) {
    "default" !== o &&
      "__esModule" !== o &&
      ((o in e && e[o] === t[o]) ||
        Object.defineProperty(e, o, {
          enumerable: !0,
          get: function () {
            return t[o];
          },
        }));
  });
})(t),
  (exports.appInfo = t);
