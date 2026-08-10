var e = require("../../common/vendor.js");
require("../../config/enum.js"),
  require("../../utils/index.js"),
  require("../../cgi/base.js"),
  require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js"),
  require("../../service/broker.js"),
  require("../../service/aegis/platform/not-wujie.js"),
  require("../../common/components/Dialog/index.js"),
  require("../../components/Password/theme/biometrics/utils.js"),
  (exports.calcTicks = function (r, s, i) {
    var o = e.dayjs(),
      a = r ? e.dayjs(r) : o.subtract(2, "day"),
      t = s ? e.dayjs(s) : o,
      u = a.format("YYYYMMDD"),
      c = t.format("YYYYMMDD"),
      n = t.diff(a, "days");
    return 0 === n
      ? [u]
      : 1 === n || (n <= 11 && n % 2 == 1)
      ? [u, c]
      : [u, t.subtract(Math.floor(n / 2), "day").format("YYYYMMDD"), c];
  });
