require("../../../../app.js");
var e = require("./transferInvest.js"),
  r = require("./transferPrice.js"),
  n = require("./transferRepo.js"),
  s = require("../../../../config/enum/condition.js");
exports.transferByType = function (t, a) {
  if (t.isRepoCond) return n.transferRepo(t);
  switch (t.cond_type) {
    case s.CondTypesBackEnd.GRID:
      break;
    case s.CondTypesBackEnd.INVEST:
      return e.transferInvest(t);
    case s.CondTypesBackEnd.PRICE:
      return r.transferPrice(t);
  }
  return t;
};
