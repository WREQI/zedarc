var e = require("../common/vendor.js");
e.dayjs.locale("zh-cn");
var r = function (r, t) {
    var o = e.dayjs(r).format(t);
    return "Invalid Date" === o ? "" : o;
  },
  t = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r, format: r },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
(exports.format = r), (exports.timeFilters = t);
