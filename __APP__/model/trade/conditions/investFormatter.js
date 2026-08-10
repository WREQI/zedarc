require("../../../app.js"),
  (exports.investPriceRangeFormatter = function (t, c) {
    return t && c
      ? "".concat(c, "元-").concat(t, "元")
      : t
      ? "区间上限".concat(t, "元")
      : c
      ? "区间下限".concat(c, "元")
      : "";
  });
