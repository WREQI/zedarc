require("../../app.js"), require("../../service/broker.js");
var r = require("../../config/broker/11100/index.js");
(exports.isBjMarketEntry = function (e) {
  var n, t;
  return !(
    !(null ==
    (t = null == (n = r.brokerConfig.trade) ? void 0 : n.newMarketFullRelease)
      ? void 0
      : t.bj) && "1" !== (null == e ? void 0 : e.bj_market_entry)
  );
}),
  (exports.isGgtMarketEntry = function (e) {
    var n, t;
    return !(
      !(null ==
      (t = null == (n = r.brokerConfig.trade) ? void 0 : n.newMarketFullRelease)
        ? void 0
        : t.ggt) &&
      "1" !== (null == e ? void 0 : e.ggt_market_entry) &&
      "1" !== (null == e ? void 0 : e.ggt_permission_gray)
    );
  }),
  (exports.isNqMarketEntry = function (e) {
    var n, t;
    return !(
      !(null ==
      (t = null == (n = r.brokerConfig.trade) ? void 0 : n.newMarketFullRelease)
        ? void 0
        : t.nq) && "1" !== (null == e ? void 0 : e.nq_market_entry)
    );
  });
