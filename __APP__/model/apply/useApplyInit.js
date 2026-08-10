var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../stores/apply/useCommonData.js"),
  t = require("../../common/vendor.js");
exports.useApplyInit = function () {
  return {
    initArgs:
      ((s = r(
        e().mark(function r() {
          var s,
            a,
            o,
            u,
            i,
            p = arguments;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (s = p.length > 0 && void 0 !== p[0] ? p[0] : {}),
                    (a = n.useCommonData()),
                    (o = t.storeToRefs(a)),
                    (u = o.applyArgs),
                    (i = s),
                    (u.value = i);
                case 4:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return s.apply(this, arguments);
      }),
  };
  var s;
};
