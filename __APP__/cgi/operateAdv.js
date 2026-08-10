var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  a = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("./base.js"),
  n = require("../config/cgi.js");
require("../service/broker.js");
var o = require("../config/broker/11100/index.js"),
  u = new ((function (s) {
    a(l, s);
    var u = i(l);
    function l() {
      return r(this, l), u.apply(this, arguments);
    }
    return (
      t(l, [
        {
          key: "fetchOperateAdv",
          value: function () {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return this.request(
              n.API_OPERATE_ADV,
              r,
              e(
                e({}, t),
                {},
                {
                  headers: { "Content-Type": "application/json" },
                  baseURL: "https://".concat(o.brokerConfig.base.domain),
                }
              )
            );
          },
        },
        {
          key: "saveBehaviorLabels",
          value: function (r) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.request(
              n.API_OPERATE_DATA_SAVE,
              { data_type: "behavior_label", records: r },
              e(
                e({}, t),
                {},
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  baseURL: "https://".concat(o.brokerConfig.base.domain),
                }
              )
            );
          },
        },
      ]),
      l
    );
  })(s.BaseAPI))();
exports.operateAdvCgi = u;
