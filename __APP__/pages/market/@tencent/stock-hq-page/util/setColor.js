var e = require("../../../../market/@tencent/stock-hq-page/Index.js");
(exports.setColor = function (r) {
  return (
    (r = parseFloat(r)),
    e.isNumber(r)
      ? r > 0
        ? "quote-rise"
        : r < 0
        ? "quote-drop"
        : "quote-equal"
      : ""
  );
}),
  (exports.setFontColor = function (r) {
    return (
      (r = parseFloat(r)),
      e.isNumber(r)
        ? r > 0
          ? "color-rise"
          : r < 0
          ? "color-drop"
          : "color-equal"
        : ""
    );
  });
