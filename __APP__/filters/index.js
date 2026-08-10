var e = require("../common/vendor.js"),
  r = require("./date.js"),
  t = require("./money.js"),
  a = require("./number.js"),
  i = require("./defaults.js"),
  o = require("./postfix.js"),
  _ = require("./prefix.js"),
  u = require("./market.js"),
  m = require("./marketId.js");
exports.setupFilters = function (s) {
  s.config.globalProperties.$filters = {
    format: {
      fen2yuan: e.__CJS__export_default__.fen2yuan,
      yuan2fen: e.__CJS__export_default__.yuan2fen,
      toText: e.__CJS__export_default__.toText,
      toCurrency: e.__CJS__export_default__.toCurrency,
    },
    time: r.timeFilters,
    money: t.moneyFilters,
    date: r.format,
    defaults: i.defaults,
    postfix: o.postfix,
    prefix: _.prefix,
    marketName: u.marketName,
    marketId: m.marketId,
    numbers: {
      formatNoDecimal: a.formatNoDecimal,
      decimal2Percentage: a.decimal2Percentage,
    },
  };
};
