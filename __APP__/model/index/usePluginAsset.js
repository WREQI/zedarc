var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var n = require("../../common/vendor.js"),
  s = require("../../cgi/asset.js"),
  o = require("../../service/connect/index.js"),
  c = require("../../config/cgi.js"),
  i = require("../../service/aegis/platform/not-wujie.js"),
  u = require("./usePluginNeedPwd.js"),
  a = require("../../config/event.js");
require("../../config/enum.js");
var d = require("../../service/connect/maps.js");
exports.usePluginAsset = function (p, f) {
  var m,
    q = "",
    v = 1,
    g = u.usePluginNeedPwd().setNeedPwdVal;
  function _() {
    o.connector({
      reportScene: "assetcard",
      source: q,
      scheme: [d.SCHEME.HOME_HOLDSTOCK_TAB],
      options: { scode: p.getScode() },
      beforeRequest: t({}, c.API_ASSET_REFRESH, function (e) {
        (v += 1), (e.ref_times = v), (e.scene = "0"), (e.scode = p.getScode());
      }),
      beforeSend: {},
      connected: function () {},
      disconnected: function (e) {
        i.aegisReporter.sdk.report({
          msg: "connect:wss-disconnected",
          ext2: e,
          trace: "trace",
        });
      },
      upgrade: t({}, o.SOURCE.AJAX, function (e) {
        (v = 0),
          i.aegisReporter.sdk.report({
            msg: "connect:wss2ajax",
            ext2: e,
            trace: "trace",
          });
      }),
      data: t(
        {
          quotation: function (e) {
            var r = e.secu_info,
              t = e.secu_quote,
              n = r.market,
              s = r.secu_code,
              o = t.dqj,
              c = t.zdf,
              i = t.zsz,
              u = t.zde;
            p.quotationProcessStrategy({ market: n, code: s, dqj: o }),
              p.processQuotationUpdate({
                market: n,
                code: s,
                dqj: o,
                zdf: c,
                zsz: i,
                zde: u,
              });
          },
          new_home_push: function (e) {
            p.updateByPush(e);
          },
        },
        c.API_ASSET_REFRESH,
        function (e) {
          if ("1" === e.need_update_incom && e.slist)
            for (var r = 0; r < e.slist.length; r++) {
              var t = e.slist[r],
                n = t.market,
                s = t.code,
                o = t.dqj,
                c = t.zdf,
                i = t.zsz,
                u = t.zde;
              p.quotationProcessStrategy({ market: n, code: s, dqj: o }),
                p.processQuotationUpdate({
                  market: n,
                  code: s,
                  dqj: o,
                  zdf: c,
                  zsz: i,
                  zde: u,
                });
            }
          else "0" === e.need_update_incom && p.updateByCGI(e);
        }
      ),
      error: function (t) {
        return r(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    i.aegisReporter.sdk.report({
                      msg: "connect:wss-error",
                      ext2: t.retcode,
                      trace: "trace",
                    });
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
    });
  }
  return {
    fetchAssetInfo:
      ((m = r(
        e().mark(function t(c) {
          var i, u, d, f, m, v, l, h, S;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (i = (c || {}).reqWebsocket),
                      (u = void 0 === i || i),
                      (t.prev = 1),
                      (t.next = 4),
                      (function () {
                        var t = r(
                          e().mark(function r(t) {
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      s.assetCgi.fetchAssetInfo(void 0, t)
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, r);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()(null == c ? void 0 : c.requestConfig)
                    );
                  case 4:
                    return (
                      (d = t.sent),
                      (f = d.stop_push),
                      (m = void 0 === f ? "0" : f),
                      (v = d.stop_refresh),
                      (l = void 0 === v ? "1" : v),
                      (h = d.refresh_time),
                      (S = void 0 === h ? "2" : h),
                      (t.next = 13),
                      p.updateByCGI(d)
                    );
                  case 13:
                    g(!1),
                      n.index.$emit(a.PLUGIN_SHOW_PWD, !1),
                      u &&
                        ("0" === m
                          ? ((q = o.SOURCE.WEBSOCKET), _())
                          : "0" === l &&
                            ((q = o.SOURCE.AJAX),
                            setTimeout(function () {
                              _();
                            }, 1e3 * +S || 0))),
                      (t.next = 21);
                    break;
                  case 18:
                    (t.prev = 18),
                      (t.t0 = t.catch(1)),
                      "51088820" == t.t0.retcode &&
                        n.index.$emit(a.PLUGIN_NEED_PWD, !0);
                  case 21:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[1, 18]]
          );
        })
      )),
      function (e) {
        return m.apply(this, arguments);
      }),
    fetchWebsocket: _,
  };
};
