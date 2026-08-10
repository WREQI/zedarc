require("../../app.js");
var e = require("../../common/vendor.js");
exports.generateDateRange = function (r, a) {
  for (
    var n = [],
      t = e.dayjs(r, "YYYYMM"),
      o = a || e.dayjs().format("YYYYMM"),
      Y = function () {
        var e = t.format("YYYY"),
          r = t.format("M"),
          a = n.find(function (r) {
            return r.value === e;
          });
        a
          ? a.children.push({ value: "".concat(r, "月") })
          : n.push({ value: e, children: [{ value: "".concat(r, "月") }] }),
          (t = t.add(1, "month"));
      };
    t.isBefore(e.dayjs(o, "YYYYMM").add(1, "month"), "month");

  )
    Y();
  return n;
};
