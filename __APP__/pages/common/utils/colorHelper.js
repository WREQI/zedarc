require("../../app.js");
var r = require("../../config/enum.js"),
  e = require("../../stores/app/useColorMode.js"),
  o = "#e63535",
  i = "#1caa3c",
  s = {
    redRise: {
      rise: o,
      drop: i,
      riseBg: "rgba(230,53,53,.05)",
      dropBg: "rgba(28,170,60,.05)",
      riseBgMedium: "rgba(230,53,53,.1)",
      dropBgMedium: "rgba(28,170,60,.1)",
      riseAnim: "#fcd6d6",
      dropAnim: "#cff1d9",
    },
    greenRise: {
      rise: i,
      drop: o,
      riseBg: "rgba(28,170,60,.05)",
      dropBg: "rgba(230,53,53,.05)",
      riseBgMedium: "rgba(28,170,60,.1)",
      dropBgMedium: "rgba(230,53,53,.1)",
      riseAnim: "#cff1d9",
      dropAnim: "#fcd6d6",
    },
  };
(exports.getRiseDropColors = function () {
  return s[e.useColorModeStore().colorMode];
}),
  (exports.redOrGreen = function (e) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      i = "",
      s = +e;
    return (
      (i =
        s < 0
          ? r.Quotes.DROP
          : 0 === s || Number.isNaN(s)
          ? r.Quotes.EQUAL
          : r.Quotes.RISE),
      o ? "".concat(i, " ").concat(o) : i
    );
  });
