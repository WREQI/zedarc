var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/inherits"),
  s = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var t = require("../../config/cgi.js"),
  u = new ((function (u) {
    i(n, u);
    var a = s(n);
    function n() {
      return e(this, n), a.apply(this, arguments);
    }
    return (
      r(n, [
        {
          key: "searchDepartment",
          value: function (e) {
            return this.request(t.API_SEARCH_BRANCH, e);
          },
        },
      ]),
      n
    );
  })(require("../base.js").BaseAPI))();
exports.cgi = u;
