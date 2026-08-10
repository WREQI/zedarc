var e = require("../@babel/runtime/helpers/slicedToArray");
require("../@babel/runtime/helpers/Objectentries");
var r = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  n = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var c = require("./base.js"),
  u = require("../config/cgi.js"),
  s = new ((function (c) {
    t(a, c);
    var s = n(a);
    function a() {
      return r(this, a), s.apply(this, arguments);
    }
    return (
      i(a, [
        {
          key: "queryExciteInfo",
          value: function (e) {
            var r = { action: "query_excite" };
            return (
              e && e.length > 0 && (r.excite_id = e.join("|")),
              this.request(u.API_GROW_EXCITE, r)
            );
          },
        },
        {
          key: "confirmExciteShow",
          value: function (e) {
            return this.request(u.API_GROW_EXCITE, {
              action: "excite_show_confirm",
              excite_id: e.join("|"),
            });
          },
        },
        {
          key: "confirmExciteFinish",
          value: function (r, i) {
            return this.request(u.API_GROW_EXCITE, {
              action: "excite_finish",
              excite_id: r,
              excite_info: Object.entries(i)
                .map(function (r) {
                  var i = e(r, 2),
                    t = i[0],
                    n = i[1];
                  return ""
                    .concat(encodeURIComponent(t), "=")
                    .concat(encodeURIComponent(n));
                })
                .join("&"),
            });
          },
        },
      ]),
      a
    );
  })(c.BaseAPI))();
exports.growExciteAPI = s;
