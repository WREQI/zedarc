(exports.decimal2Percentage = function (t) {
  var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    e = parseFloat(t);
  if (isNaN(e)) return "--";
  var i = Math.abs(e),
    n = "",
    o = Math.min(4, Math.max(0, r));
  return (
    e < 0 ? (n = "-") : e > 0 && a && (n = "+"),
    (n += "".concat((100 * i).toFixed(o), "%"))
  );
}),
  (exports.formatNoDecimal = function (t) {
    var a = +t;
    return isNaN(+t) ? t : String(a).split(".")[0];
  });
