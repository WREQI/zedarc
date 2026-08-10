var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../common/vendor.js");
var t = require("../../service/request/pureRequest.js");
require("../../service/broker.js");
var n = require("../../config/broker/11100/index.js");
exports.useProtocols = function () {
  return {
    getProtocol:
      ((a = r(
        e().mark(function r(a) {
          var o, u, s, c, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (a) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (e.prev = 2),
                      (s = new Date().getTime()),
                      (c = "https://"
                        .concat(n.brokerConfig.base.domain, "/mp/protocol/")
                        .concat(a, ".json?t=")
                        .concat(s)),
                      (e.next = 7),
                      t.request(c, {}, { method: "get" })
                    );
                  case 7:
                    (i = e.sent),
                      (u = (null == i ? void 0 : i.data) || {}),
                      null == (o = null == u ? void 0 : u.data) || o.length,
                      (e.next = 14);
                    break;
                  case 12:
                    (e.prev = 12), (e.t0 = e.catch(2));
                  case 14:
                    return e.abrupt("return", u);
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[2, 12]]
          );
        })
      )),
      function (e) {
        return a.apply(this, arguments);
      }),
  };
  var a;
};
