exports.useReportAssetDataV3 = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return 0 == e
    ? "A"
    : e > 0 && e <= 100
    ? "B"
    : e > 100 && e <= 1e3
    ? "C1"
    : e > 1e3 && e <= 1e4
    ? "C2"
    : e > 1e4 && e <= 2e4
    ? "D1a"
    : e > 2e4 && e <= 5e4
    ? "D1b"
    : e > 5e4 && e <= 1e5
    ? "D2"
    : e > 1e5 && e <= 3e5
    ? "E"
    : e > 3e5 && e <= 5e5
    ? "F"
    : e > 5e5 && e <= 1e6
    ? "G1"
    : e > 1e6 && e <= 2e6
    ? "G2"
    : e > 2e6 && e <= 5e6
    ? "G3"
    : e > 5e6
    ? "G4"
    : "-1";
};
