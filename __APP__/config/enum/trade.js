var e,
  n = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var r = require("../enum.js"),
  t = (function (e) {
    return (e.not_open = "0"), (e.opened = "1"), (e.opening = "2"), e;
  })(t || {}),
  o = (function (e) {
    return (e.not_open = "0"), (e.opened = "1"), (e.opening = "2"), e;
  })(o || {}),
  a = (function (e) {
    return (e.not_open = "0"), (e.opened = "1"), (e.opening = "2"), e;
  })(a || {}),
  s =
    (n((e = {}), r.MARKET.HA, "haTradeFee"),
    n(e, r.MARKET.SA, "saTradeFee"),
    n(e, r.MARKET.NQ, "nqTradeFee"),
    n(e, r.MARKET.BJ, "bjTradeFee"),
    n(e, r.MARKET.HK, "ggtTradeFee"),
    e);
(exports.BJAccountStatus = t),
  (exports.DefaultTradeFee = {
    commission: 25e-5,
    lowestCommission: 5,
    transferFee: 0,
  }),
  (exports.GGTAccountStatus = o),
  (exports.GZAccountStatus = a),
  (exports.MarketTradeFeeMap = s);
