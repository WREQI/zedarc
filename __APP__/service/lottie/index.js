exports.getLottie = function () {
  var i, t, e, l;
  return (
    (null ==
    (l =
      null == (t = (i = requireMiniProgram()).main2Plugin)
        ? void 0
        : (e = t.call(i)).getLottie)
      ? void 0
      : l.call(e)) || {}
  );
};
