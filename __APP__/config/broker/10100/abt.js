var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../../../utils/getPlatform.js"),
  i = require("../index.js"),
  t = r.getPlatform(),
  a = (t.isWeixin, t.isLightWeb),
  s = t.isWzqXcx,
  u = e(
    e({}, i.BrokerAbt),
    {},
    {
      incentiveUser: {
        id: s ? "ui_layer_1767087277129" : a ? "ui_layer_1767149042691" : "",
        date: s || a ? "2026-09-04 23:59:59" : "",
        default: { feedback: "0" },
        platforms: ["mp-plugin"],
        useTradeAbtCgi: !0,
      },
      preReviewAbt: {
        id: a ? "pre_check_for_openaccount" : "",
        date: a ? "2027-06-27 23:59:59" : "",
        default: { pre_review: "0" },
        platforms: ["h5"],
      },
    }
  );
exports.AbtConfig = u;
