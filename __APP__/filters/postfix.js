exports.postfix = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return (
    (e = ":percent:" === e ? "%" : e),
    /^-+$/.test(t) || -1 !== [void 0, null, ""].indexOf(t) ? t : t + e
  );
};
