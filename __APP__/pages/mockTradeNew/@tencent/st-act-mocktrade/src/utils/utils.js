var t = "#282d36";
(exports.getMarketIcon = function (t) {
  if (!t) return "";
  var e = t.slice(0, 2).toLowerCase();
  return "sz" === e
    ? "https://st.gtimg.com/design/d7d4f4e4c27d0545a4da372644279b32.png"
    : "sh" === e
    ? "https://st.gtimg.com/design/416c914c32b39fb649a84e11a63b7107.png"
    : "";
}),
  (exports.getNumColor = function (e) {
    try {
      var r = +String(e).replace(/[^0-9\.\-]/g, "");
      return isNaN(r) ? t : r > 0 ? "#e63535" : r < 0 ? "#1caa3d" : t;
    } catch (r) {
      return t;
    }
  });
