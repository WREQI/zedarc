var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  n = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  a = require("../config/cgi.js"),
  s = new ((function (u) {
    i(o, u);
    var s = n(o);
    function o() {
      return r(this, o), s.apply(this, arguments);
    }
    return (
      t(o, [
        {
          key: "orderInit",
          value: function () {
            return this.request(a.CONDITION_ORDER, { action: "init" });
          },
        },
        {
          key: "orderCreate",
          value: function (r) {
            return this.request(a.CONDITION_ORDER, e({ action: "create" }, r));
          },
        },
        {
          key: "orderUpdate",
          value: function (r) {
            return this.request(a.CONDITION_ORDER, e({ action: "update" }, r));
          },
        },
        {
          key: "orderCancel",
          value: function (e) {
            return this.request(a.CONDITION_ORDER, {
              action: "cancel",
              cond_id: e.cond_id,
            });
          },
        },
        {
          key: "orderQueryInfo",
          value: function (e) {
            return this.request(a.CONDITION_ORDER, {
              action: "qry_info",
              cond_id: e.cond_id,
            });
          },
        },
        {
          key: "orderQueryList",
          value: function (e) {
            return this.request(a.CONDITION_ORDER, {
              action: "qry_list",
              qry_status: e.qry_status,
              page_num: e.page_num,
              page_size: e.page_size,
            });
          },
        },
        {
          key: "queryCondOrderList",
          value: function (e) {
            return this.request(a.CONDITION_ORDER, {
              action: "order_list",
              cond_id: e.cond_id,
              page_num: e.page_num,
              page_size: e.page_size,
            });
          },
        },
      ]),
      o
    );
  })(u.BaseAPI))();
exports.conditionOrderApi = s;
