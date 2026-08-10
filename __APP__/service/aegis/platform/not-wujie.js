require("../../../@babel/runtime/helpers/Arrayincludes");
var e,
  r,
  i,
  o,
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js");
require("../../broker.js");
var l = require("../../../utils/getPlatform.js"),
  u = require("../../../utils/index.js"),
  a = require("../../../utils/cacheFn.js"),
  c = require("../../../utils/system.js"),
  s = require("../../stat/reportSwitch.js"),
  d = require("../../../utils/clientIdentity.js"),
  p = require("../../../config/broker/11100/index.js"),
  v = l.getPlatform(),
  g = v.isQuickApp,
  f = v.isNoProxyEnv,
  m = v.isMpPlugin,
  q = v.bizPlatform,
  w =
    null == (r = null == (e = p.brokerConfig.base) ? void 0 : e.speed)
      ? void 0
      : r.enable,
  b = a.getWzqOpenid(),
  S = [
    "h.trace.qq.com/kv",
    "report.url.cn/sentry",
    "pingtas.qq.com",
    "open.weixin.qq.com/sdk/report",
  ],
  _ = ["h.trace.qq.com/kv"],
  h = ["pingtas.qq.com"],
  k = ["wzqcf.gtimg.com/wuji", "wzqcfgtimgcom/wuji"],
  x = ["Script error", "WeixinOpenTags"];
function y() {
  return !w || !1;
}
var j = "SDK-581c87391e18d617aeb0";
g && (j = "SDK-620b94c23f28f740cbdd"),
  f && (j = "SDK-777e2f156bc206ca54c9"),
  (j = "SDK-2d788cf19180a5f8a858");
var R = c.getAccountInfo();
exports.aegisReporter = void 0;
var P = {
  id: j,
  hostUrl: { url: "https://galileotelemetry.tencent.com/collect" },
  uid: b,
  forceReportErrorLog: !0,
  spa: "mp-weixin" !== q || !y(),
  delay: m ? 5e3 : 1e3,
  enableHttp2: !0,
  plugin: {
    device: !0,
    close: !0,
    aid: !0,
    fId: !1,
    ie: !1,
    pv: !0,
    spa: !0,
    error: !0,
    assetSpeed: !0,
    pagePerformance: !0,
    webVitals: !0,
    session: !0,
    loadPackageSpeed: !0,
    api: { apiDetail: !0 },
    websocket: !0,
  },
  extField: n(
    {
      cli_platform: d.cliPlatform,
      cli_product: d.cliProduct,
      cli_broker: p.brokerConfig.base.code,
      ext1: p.brokerConfig.base.code,
      ext3: JSON.stringify({
        version: m
          ? null == (i = null == R ? void 0 : R.plugin)
            ? void 0
            : i.version
          : null == (o = null == R ? void 0 : R.miniProgram)
          ? void 0
          : o.version,
        _from: u.getMpFromSource(R),
        _env: m ? "plugin" : "xcx",
      }),
    },
    m ? { plugin_version: "202607271629" } : {}
  ),
  onBeforeSend: function (e) {
    var r = [];
    return (
      (function () {
        var e, r, i;
        try {
          var o = a.getWzqOpenid();
          !(null ==
          (i =
            null == (r = null == (e = exports.aegisReporter) ? void 0 : e.sdk)
              ? void 0
              : r.config)
            ? void 0
            : i.uid) &&
            o &&
            exports.aegisReporter.setUin &&
            exports.aegisReporter.setUin(o);
        } catch (e) {}
      })(),
      y() ||
        (s.isReportSwitchInitialized() && !s.isReportEnabled()) ||
        e.forEach(function () {
          var e,
            i,
            o,
            n,
            t,
            l =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if (
            "assetSpeed" !== l.plugin ||
            !S.some(function (e) {
              var r;
              return null == (r = l.url) ? void 0 : r.includes(e);
            })
          ) {
            if ("api" === l.plugin) {
              if (
                h.some(function (e) {
                  var r;
                  return null == (r = l.url) ? void 0 : r.includes(e);
                })
              )
                return;
              if (
                "error" === l.level &&
                l.duration < 1e3 &&
                k.some(function (e) {
                  var r;
                  return null == (r = l.url) ? void 0 : r.includes(e);
                })
              )
                return;
              if (
                "ajax_error" === l.level &&
                _.some(function (e) {
                  var r;
                  return null == (r = l.url) ? void 0 : r.includes(e);
                })
              )
                return;
              if (
                (l.url &&
                  (l.url = l.url.replaceAll(
                    /((wzq_)?qlskey|login_code|skey_sign)%3D((\w|\*)+)%26/g,
                    ""
                  )),
                (l.msg = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    r = e;
                  return (r =
                    null ==
                    (r =
                      null == r
                        ? void 0
                        : r.replace(/reqparam: (\S+)/, function () {
                            return "req param: ";
                          }))
                      ? void 0
                      : r.replace(/resdata: ([\s\S]*)/, function (e, r) {
                          var i, o;
                          try {
                            var n =
                              null == (i = null == r ? void 0 : r.split("\n"))
                                ? void 0
                                : i[0];
                            o = {
                              retcode:
                                null == (o = JSON.parse(n))
                                  ? void 0
                                  : o.retcode,
                              retmsg: null == o ? void 0 : o.retmsg,
                            };
                          } catch (e) {}
                          return "resdata: ".concat(o ? JSON.stringify(o) : "");
                        }));
                })(l.msg)),
                (l.data = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    r = e;
                  if (e)
                    try {
                      var i = JSON.parse(e);
                      (i = {
                        retcode: null == i ? void 0 : i.retcode,
                        retmsg: null == i ? void 0 : i.retmsg,
                      }),
                        (r = JSON.stringify(i));
                    } catch (e) {}
                  return r;
                })(l.data)),
                l.param)
              ) {
                if (
                  null == (e = l.url)
                    ? void 0
                    : e.includes("/cgi-bin/apply_account.fcgi")
                ) {
                  var u =
                    null ==
                    (o =
                      null == (i = l.param)
                        ? void 0
                        : i.match(/action=([^&]+)/))
                      ? void 0
                      : o[1];
                  u &&
                    !(null == (n = l.msg) ? void 0 : n.includes("action=")) &&
                    (l.msg =
                      null == (t = l.msg)
                        ? void 0
                        : t.replace(
                            l.url,
                            "".concat(l.url, "?action=").concat(u)
                          )),
                    (l.url = "".concat(l.url, "?action=").concat(u));
                }
                l.param = "";
              }
            }
            ("error" === l.plugin &&
              "error" === l.level &&
              x.some(function (e) {
                var r;
                return null == (r = l.msg) ? void 0 : r.includes(e);
              })) ||
              r.push(l);
          }
        }),
      r
    );
  },
  urlHandler: function () {
    var e = "",
      r = null == getCurrentPages ? void 0 : getCurrentPages(),
      i =
        (null == r ? void 0 : r[(null == r ? void 0 : r.length) - 1 || 0]) ||
        {},
      o = "".concat(
        t.dist.urltools.param.make((null == i ? void 0 : i.options) || {})
      );
    return (
      (null == i ? void 0 : i.route) &&
        (e = o ? "".concat(i.route, "?").concat(o) : i.route),
      (e = e.replaceAll(
        /((?:wzq_)?qlskey(?:%3D|=)((\w|\*)+)(?:%26|&|$)|login_code(?:%3D|=)((\w|\*)+)(?:%26|&|$)|skey_sign(?:%3D|=)((\w|\*)+)(?:%26|&|$))/g,
        ""
      ))
    );
  },
};
(null == window ? void 0 : window.__POWERED_BY_WUJIE__) &&
window.$aegisReporter &&
window.$aegisRouterHook
  ? (exports.aegisReporter = window.$aegisReporter)
  : (exports.aegisReporter = new t.MpReporter(P));
