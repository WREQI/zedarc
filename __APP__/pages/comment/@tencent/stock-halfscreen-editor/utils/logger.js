exports.createLogger = function (n) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = e.enabled,
    o = void 0 === t || t,
    r = (e.showTime, o);
  return {
    log: function () {},
    warn: function () {},
    error: function () {},
    setEnabled: function (n) {
      r = n;
    },
    isEnabled: function () {
      return r && !1;
    },
  };
};
