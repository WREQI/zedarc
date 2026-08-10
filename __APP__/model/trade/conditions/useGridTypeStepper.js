require("../../../app.js");
var e = require("../../../config/enum/condition.js"),
  r = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  (exports.useGridTypeStepper = function (i, n) {
    return {
      gridStepperConfig: r.computed(function () {
        return i.gridType === e.GridType.Percent
          ? { spreadAcc: 2, spread: 1, max: 100, maxLength: 6 }
          : {
              spreadAcc: n.value.spreadAcc || 2,
              spread: n.value.spread || 0.01,
              max: 1e3,
              maxLength: 8,
            };
      }),
    };
  });
