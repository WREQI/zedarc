var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../index.js"),
  i = require("../../../utils/getPlatform.js").getPlatform(),
  t = i.isWeixin,
  a =
    (i.isWzqXcx,
    e(
      e({}, r.BrokerAbt),
      {},
      {
        progressActXinke: {
          id: "progress_act_xinke",
          date: !!t && "2024-09-30 23:59:59",
          default: { show: "0" },
        },
        idcard: {
          id: "ui_layer_1715847614625",
          date: "2025-07-15 23:59:59",
          default: { IDcard_info: "1" },
        },
        tradeV4ABT: { id: "ui_layer_1744962136742", platforms: ["mp-plugin"] },
      }
    ));
exports.AbtConfig = a;
