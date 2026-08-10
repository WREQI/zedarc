var e = require("./broker.js"),
  t = require("./stat/mp-weixin.js"),
  a = require("../config/broker/11100/index.js");
exports.toActPage = function () {
  var n = t.stat.getChannel(),
    r = n.fchannel_id_o,
    o = n.fchannel_id_fm_i,
    c = e.tenpayDomain();
  setTimeout(function () {
    location.href = "https://"
      .concat(c, "/activity/page/tradeTransferAct/#/home?stat_data=")
      .concat(r, ".")
      .concat(o, "&broker=")
      .concat(a.brokerConfig.base.code);
  }, 200);
};
