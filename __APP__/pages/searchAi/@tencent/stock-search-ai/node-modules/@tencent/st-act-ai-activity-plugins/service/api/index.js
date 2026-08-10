var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = function (e, n, t) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            c(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            c(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((t = t.apply(e, n)).next());
    });
  },
  t = require("../../../../../../../../../common/vendor.js"),
  r = function () {
    var e, n;
    return (
      (n =
        "mpweapp" === t.ShellTypeEnum.SHY
          ? "https://wzq.tenpay.com"
          : "undefined" != typeof window &&
            window.location &&
            (null == (e = window.location.origin)
              ? void 0
              : e.includes("tenpay.com"))
          ? window.location.origin
          : "https://wzq.tenpay.com"),
      "".concat(n, "/svr/activity/simple_activity")
    );
  },
  o = { headers: { "Content-Type": "application/json" }, forceCallback: !0 };
(exports.aiqTaskAward = function (o) {
  return n(
    exports,
    null,
    e().mark(function n() {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                t.StockBridge.request(
                  "".concat(r(), "/birth13_aiq_taskok?id=").concat(o),
                  t.RequestTypeEnum.GET,
                  {},
                  { doResponse: !1 }
                )
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, n);
    })
  );
}),
  (exports.callAIQShareAPI = function (i) {
    return n(
      exports,
      null,
      e().mark(function n() {
        var a;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (a = { reqid: i }),
                  e.abrupt(
                    "return",
                    t.StockBridge.request(
                      "".concat(r(), "/aiq_share"),
                      t.RequestTypeEnum.GET,
                      a,
                      o
                    )
                      .then(function (e) {
                        return e;
                      })
                      .catch(function (e) {
                        return e;
                      })
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  });
