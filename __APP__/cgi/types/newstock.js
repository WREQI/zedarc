require("../../app.js");
var r = (function (r) {
    return (r.STOCK = "0"), (r.DEBT = "1"), (r.KCB = "2"), (r.CYB = "3"), r;
  })(r || {}),
  e = (function (r) {
    return (r.DEBT = "0"), (r.CYB = "1"), (r.KCB = "2"), r;
  })(e || {}),
  t = (function (r) {
    return (
      (r.INIL = "-1"),
      (r.UNFINISHED = "0"),
      (r.WAITING = "1"),
      (r.FINISHED = "2"),
      (r.NO_QUOTA = "3"),
      (r.NO_GEM = "4"),
      (r.NO_KCB = "5"),
      (r.NO_SH = "6"),
      (r.NO_SZ = "7"),
      (r.FIX_GEM = "8"),
      (r.NO_SZ_KZZ = "9"),
      (r.NO_SH_KZZ = "10"),
      (r.NO_KCB_GROWTH = "11"),
      r
    );
  })(t || {});
(exports.EConvType = e),
  (exports.EPurchaseStatus = t),
  (exports.EPurchaseType = r);
