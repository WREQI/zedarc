var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var u = require("../../common/vendor.js"),
  t = require("../../cgi/apply.js"),
  i = require("../../adapter/router.js"),
  n = u.defineStore("subscribe", function () {
    var n,
      s = u.ref(!1),
      a = !1,
      c = u.ref(""),
      p = function (e) {
        "string" == typeof e && e && c.value !== e && (c.value = e);
      };
    return {
      isSubscribe: s,
      getSubscribeStatus:
        ((n = r(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    a ||
                      (t.applyCgi
                        .querySubscribeInfo()
                        .then(function (e) {
                          s.value = e;
                        })
                        .catch(function () {
                          s.value = !1;
                        }),
                      (a = !0));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function () {
          return n.apply(this, arguments);
        }),
      subscribeApplyFlag: c,
      setSubscribeApplyFlag: p,
      initSubscribeApplyFlag: function () {
        var e = (i.route() || {}).query,
          r = null == e ? void 0 : e.subscribe_apply_flag;
        "string" == typeof r && r && p(r);
      },
      clearSubscribeApplyFlag: function () {
        c.value = "";
      },
    };
  });
exports.useSubscribeStore = n;
