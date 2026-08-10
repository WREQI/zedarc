require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../entities/trade-stock/stocks/a-main-board-stock.js"),
  t = require("../../entities/trade-stock/stocks/etf-fund-stock.js"),
  s = require("../../entities/trade-stock/stocks/other-fund-stock.js"),
  o = require("../../entities/trade-stock/stocks/star-stock.js"),
  n = require("../../entities/trade-stock/stocks/gem-stock.js"),
  r = require("../../entities/trade-stock/stocks/hk-stock.js"),
  i = require("../../entities/trade-stock/stocks/convertible-bonds-stock.js"),
  c = require("../../entities/trade-stock/stocks/special-government-bond-stock.js"),
  k = require("../../entities/trade-stock/stocks/unknow-stock.js"),
  u = require("../../../config/enum.js"),
  d = require("../../entities/trade-stock/stocks/bj-stock.js"),
  a = require("../../entities/trade-stock/stocks/nq-stock.js"),
  l = require("../../../service/aegis/utils.js");
exports.createStock = function (v, q) {
  var j, w, S, p;
  return (null == (j = null == q ? void 0 : q.info) ? void 0 : j.market) ===
    u.MARKET.BJ
    ? new d.BJStock(q)
    : (null == (w = null == q ? void 0 : q.info) ? void 0 : w.market) ===
      u.MARKET.NQ
    ? new a.NQStock(q)
    : (null == (S = null == q ? void 0 : q.info) ? void 0 : S.market) ===
      u.MARKET.HK
    ? new r.HKStock(q)
    : "z" === v
    ? new i.ConvertibleBondsStock(q)
    : "4" === v || "c" === v || "GP-A-CYB" === v
    ? new n.GEMStock(q)
    : "k" === v || "w" === v || "W" === v
    ? new o.STARStock(q)
    : "G" === v
    ? new c.SpecialGovernmentBondStock(q)
    : (["0", "5", "2"].includes(v) ||
        l.reportEventSafely("mon_trade_create_stocktype", {
          ext3: v,
          ext4: null == (p = null == q ? void 0 : q.info) ? void 0 : p.code,
        }),
      (null == q ? void 0 : q.stocktype) &&
      ["ETF", "QDII-ETF"].includes(q.stocktype)
        ? new t.ETFFundStock(q)
        : (null == q ? void 0 : q.stocktype) &&
          ["FJ", "FJ-CX", "LOF", "QDII-LOF", "KJ"].includes(q.stocktype)
        ? new s.OtherFundStock(q)
        : "unknow" === v
        ? new k.UnKnowStock(q)
        : new e.AMainBoardStock(q));
};
