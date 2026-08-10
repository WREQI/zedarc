var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../index.js"),
  i = require("../../../utils/getPlatform.js").getPlatform().isZxg,
  t = e(
    e({}, r.BrokerAbt),
    {},
    {
      video: {
        id: "ui_layer_1714961729813",
        date: !!i && "2024-06-30 23:59:59",
        default: { video: "0" },
      },
      idcard: {
        id: "ui_layer_1715847614625",
        date: "2025-07-15 23:59:59",
        default: { IDcard_info: "1" },
      },
    }
  );
exports.AbtConfig = t;
