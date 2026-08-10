var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  s = require("../@babel/runtime/helpers/inherits"),
  _ = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var i = require("./base.js"),
  a = require("../config/cgi.js"),
  u = {
    BST_SETTING: "bst_setting",
    QRY_HISTORY_BST_ANYWAY: "qry_history_bst_anyway",
    HISTORY_BST: "history_bst",
    HISTORY_BST_SPEC: "history_bst_spec",
    QRY_TODAY_BST: "qry_today_bst",
    TODAY_BST_SPEC: "today_bst_spec",
    HAS_BST: "has_bst",
    HAS_BST_TODAY: "has_bst_today",
  },
  S = new ((function (i) {
    s(T, i);
    var S = _(T);
    function T() {
      return r(this, T), S.apply(this, arguments);
    }
    return (
      t(T, [
        {
          key: "getStatus",
          value: function () {
            return this.request(a.API_STOCK_BST, { qry_item: u.BST_SETTING });
          },
        },
        {
          key: "getHistory",
          value: function (r) {
            return this.getBstMark(
              e(e({}, r), {}, { qry_item: u.QRY_HISTORY_BST_ANYWAY })
            );
          },
        },
        {
          key: "getBstMark",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(a.API_STOCK_BST, e);
          },
        },
      ]),
      T
    );
  })(i.BaseAPI))();
(exports.BST_QRY_TYPE = u), (exports.bstCgi = S);
