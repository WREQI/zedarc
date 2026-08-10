exports.transferMarketToTrade = function (r) {
  var t = { nq: "12", bj: "13", hk: "14" };
  return t[r] ? t[r] : r;
};
