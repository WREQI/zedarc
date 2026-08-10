require("../../../app.js");
var r = require("./base.js"),
  e = require("./apply.js"),
  i = require("./bind.js"),
  a = require("./common.js"),
  s = require("./dictionary.js"),
  n = require("./trade.js"),
  t = require("./hall.js"),
  o = require("./abt.js"),
  u = require("./transfer.js"),
  j = require("./margin.js"),
  q = {
    base: r.base,
    apply: e.apply,
    bind: i.bind,
    common: a.common,
    dictionary: s.dictionary,
    trade: n.trade,
    hall: t.hall,
    abt: o.AbtConfig,
    transfer: u.transfer,
    margin: j.margin,
  };
exports.brokerConfig = q;
