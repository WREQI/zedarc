var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var a = require("../../service/aegis/platform/not-wujie.js"),
  i = require("../../service/abt/mp-weixin.js"),
  n = require("../../utils/getPlatform.js"),
  s = require("../../common/vendor.js");
require("../../service/sdk/lib/api.js");
var u = require("../../service/sdk/platform/mp-weixin.js");
require("../../service/broker.js");
var o = require("../../service/stat/mp-weixin.js"),
  c = require("../../config/broker/11100/index.js"),
  p = s.ref(!1);
exports.useTradeSplitAbt = function () {
  var s,
    l = n.getPlatform(),
    d = l.isInIframe,
    f = l.isZxg,
    b = global.__embedded__mode || !1,
    v = ".embedded";
  function m(e) {
    return g.apply(this, arguments);
  }
  function g() {
    return (g = t(
      r().mark(function t(n) {
        var s, u;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (s = (function (r) {
                      var t, i, n;
                      try {
                        var s = e({}, r),
                          u =
                            null ==
                            (i =
                              null == (t = s.data) ? void 0 : t[0].report_info)
                              ? void 0
                              : i.moduleCode,
                          o = null == (n = s.module_even_key) ? void 0 : n[u];
                        if ((d || b) && u && o)
                          return (
                            o.brow &&
                              o.brow.length > 0 &&
                              (o.brow = o.brow.map(function (e) {
                                return e.replace(/\.embedded$/, "");
                              })),
                            o.click &&
                              o.click.length > 0 &&
                              (o.click = o.click.map(function (e) {
                                return e.replace(v, "");
                              })),
                            s
                          );
                      } catch (e) {
                        a.aegisReporter.reportEvent(
                          "trade_split_abt_suffix_handle_fail",
                          { ext3: JSON.stringify(e) }
                        );
                      }
                      return r;
                    })((s = JSON.parse(n)))),
                    (r.next = 5),
                    i.ABT.create({ data: s })
                  );
                case 5:
                  return (
                    (u = r.sent),
                    r.abrupt(
                      "return",
                      ((p.value = !0),
                      o.stat.click("trade.trade.embedded_abt.brow"),
                      u)
                    )
                  );
                case 9:
                  return (
                    (r.prev = 9),
                    (r.t0 = r.catch(0)),
                    r.abrupt(
                      "return",
                      ((p.value = !0),
                      a.aegisReporter.reportEvent(
                        "trade_split_abt_create_fail",
                        { ext3: JSON.stringify(r.t0) }
                      ),
                      {})
                    )
                  );
                case 12:
                case "end":
                  return r.stop();
              }
          },
          t,
          null,
          [[0, 9]]
        );
      })
    )).apply(this, arguments);
  }
  return {
    init: m,
    getZxgAppABTInfo:
      ((s = t(
        r().mark(function e() {
          var t, i, n;
          return r().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      (t = c.brokerConfig.common.zxgTradeSplitAbtModuleId),
                      !f ||
                        "function" != typeof u.sdk.getAppDiskStorage ||
                        !t ||
                        p.value)
                    ) {
                      e.next = 8;
                      break;
                    }
                    return (
                      (e.next = 5), u.sdk.getAppDiskStorage("abt_".concat(t))
                    );
                  case 5:
                    (i = e.sent), (n = i.data) && m(n);
                  case 8:
                    e.next = 13;
                    break;
                  case 10:
                    (e.prev = 10),
                      (e.t0 = e.catch(0)),
                      a.aegisReporter.reportEvent(
                        "zxg_app_get_trade_split_abt_fail",
                        { ext3: JSON.stringify(e.t0) }
                      );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 10]]
          );
        })
      )),
      function () {
        return s.apply(this, arguments);
      }),
    isAbtCreate: p,
  };
};
