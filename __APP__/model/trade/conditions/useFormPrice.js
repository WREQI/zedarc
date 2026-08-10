var e = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var r = require("../../../common/vendor.js");
require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  (exports.useFormPrice = function (i) {
    var t,
      n = i.order,
      u = i.stock,
      c = i.checkService,
      o = r.ref("");
    return (
      r.watch(o, function () {
        clearTimeout(t),
          (t = setTimeout(function () {
            o.value = "";
          }, 3e3));
      }),
      {
        pricePopoverText: o,
        handlePriceInput: function (r) {
          if (((o.value = ""), (n.price = r), Number(r) <= 0))
            o.value = "价格不能为0";
          else {
            if (!u.value || 0 === Object.keys(u.value).length) return;
            if ((String(r).split(".")[1] || "").length > u.value.spreadAcc)
              return;
            var i = c.checkIsInLimitChgRange(),
              t = e(i, 2),
              a = t[0],
              s = t[1];
            a ||
              (o.value = n.createLimitTips(null == s ? void 0 : s.data.over));
          }
        },
      }
    );
  });
