require("../../../../../../../../@babel/runtime/helpers/Arrayincludes"),
  (exports.formatZdf = function (r) {
    var e = r;
    return (
      e &&
        !e.includes("+") &&
        (e = "".concat(Number(e) > 0 ? "+" : "").concat(e)),
      "".concat(e, "%")
    );
  });
