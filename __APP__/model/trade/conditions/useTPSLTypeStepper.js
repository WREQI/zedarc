require("../../../app.js");
var e = require("../../../config/enum/condition.js"),
  r = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  (exports.useTPSLTypeStepper = function (p, n) {
    return {
      tpslZyStepperConfig: r.computed(function () {
        return p.zyCondType === e.LimitType.Percent
          ? { spreadAcc: 2, spread: 1, max: 1e4, maxLength: 7 }
          : {
              spreadAcc: n.value.spreadAcc || 2,
              spread: n.value.spread || 0.01,
              max: 9999,
              maxLength: 8,
            };
      }),
      tpslZsStepperConfig: r.computed(function () {
        return p.zsCondType === e.LimitType.Percent
          ? { spreadAcc: 2, spread: 1, max: 100, maxLength: 7 }
          : {
              spreadAcc: n.value.spreadAcc || 2,
              spread: n.value.spread || 0.01,
              max: 9999,
              maxLength: 8,
            };
      }),
    };
  });
