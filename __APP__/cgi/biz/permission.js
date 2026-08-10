var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/inherits"),
  s = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var u = require("../../config/cgi.js"),
  t = new ((function (t) {
    i(a, t);
    var n = s(a);
    function a() {
      return e(this, a), n.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "queryAccountPermission",
          value: function (e) {
            return this.request(u.API_QUERYACCOUNTAUTHORITY, e);
          },
        },
      ]),
      a
    );
  })(require("../base.js").BaseAPI))();
exports.permissionCgi = t;
