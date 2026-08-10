var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  s = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  n = require("../config/cgi.js"),
  o = new ((function (u) {
    t(a, u);
    var o = s(a);
    function a() {
      return r(this, a), o.apply(this, arguments);
    }
    return (
      i(a, [
        {
          key: "queryCommissionInfo",
          value: function (e) {
            var r = e.type;
            return this.request(n.API_QRY_PROTOCOL_RECORD, {
              action: "query_commission",
              commission_type: r,
            });
          },
        },
        {
          key: "getProtocolList",
          value: function (r) {
            var i = r.biz,
              t = r.scene_id;
            return this.request(
              n.API_DEALER_PROTOCOL,
              e({ action: "query", busi_type: i }, t ? { scene_id: t } : {})
            );
          },
        },
        {
          key: "signProtocol",
          value: function (r) {
            var i = r.biz,
              t = r.data,
              s = void 0 === t ? { sign_param: "" } : t;
            return this.request(
              n.API_DEALER_PROTOCOL,
              e({ action: "sign", busi_type: i }, s)
            );
          },
        },
        {
          key: "getProtocolUrl",
          value: function (e) {
            var r = e.biz,
              i = e.protocol_id;
            return this.request(n.API_DEALER_PROTOCOL, {
              action: "query",
              busi_type: r,
              protocol_id: i,
            });
          },
        },
      ]),
      a
    );
  })(u.BaseAPI))();
exports.ProtocolCgi = o;
