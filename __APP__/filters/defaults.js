exports.defaults = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "--";
  return Number.isNaN(t) || null == t || "" === t ? e : t;
};
