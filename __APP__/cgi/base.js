var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/objectSpread2"),
  i = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  n = require("../@babel/runtime/helpers/createClass"),
  o = require("../@babel/runtime/helpers/typeof");
require("../app.js");
var a = Object.defineProperty,
  l = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? a(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != o(r) ? r + "" : r, i),
      i
    );
  },
  u = require("../adapter/getApp.js"),
  c = require("../service/request/index.js");
require("../service/sdk/lib/api.js");
var s = require("../service/sdk/platform/mp-weixin.js"),
  d = require("../common/vendor.js"),
  p = require("../utils/getPlatform.js"),
  m = require("../utils/index.js"),
  v = require("../utils/clientIdentity.js"),
  f = p.getPlatform(),
  h = f.bizPlatform,
  x = f.isInIframe,
  g = (f.isSimpleMode, f.isBrokerXcx),
  _ = f.isInMainXcx,
  b = f.isZxg,
  q = (f.isInZxgXcx, f.isInZxgXcxH5),
  k = f.isEscapeMode,
  I = null,
  P = null;
exports.BaseAPI = (function () {
  function a() {
    t(this, a),
      l(this, "retLoginInfo", x || g || _ || b),
      l(this, "noSetCookies", g || (_ && !q)),
      l(
        this,
        "comeFrom",
        (function () {
          var e, r, i;
          return "wxcc8a51267886fec4" ===
            (null ==
            (i =
              null == (r = null == (e = u.getApp) ? void 0 : e.call(u))
                ? void 0
                : r.globalData)
              ? void 0
              : i.fromAppId)
            ? "5"
            : "zxgxcx" === m.getMpFromSource()
            ? "2"
            : "3";
        })()
      ),
      l(this, "cliPlatform", v.cliPlatform),
      l(this, "cliProduct", v.cliProduct);
  }
  var p;
  return (
    n(a, [
      {
        key: "request",
        value:
          ((p = i(
            e().mark(function i(t) {
              var n,
                o,
                a,
                l,
                p,
                v,
                f,
                x,
                g,
                _ = arguments;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = _.length > 1 && void 0 !== _[1] ? _[1] : {}),
                          (o = _.length > 2 && void 0 !== _[2] ? _[2] : {}),
                          (v = []),
                          o.appendAppClientInfo &&
                            "h5-weixin" !== h &&
                            v.push(
                              new Promise(function (e) {
                                return P
                                  ? e(P)
                                  : s.sdk.clientinfo
                                  ? void s.sdk
                                      .clientinfo()
                                      .then(function (r) {
                                        (P = d.pickBy({
                                          appver: r.appver,
                                          _appver: r.appver,
                                          _appName: r.appName,
                                          client_ip: r.ip,
                                          deviceid: r.devid,
                                          device_id: r.devid,
                                          _devId: r.devid,
                                        })),
                                          e(P);
                                      })
                                      .catch(function (r) {
                                        e({});
                                      })
                                  : e({});
                              })
                            ),
                          !1 !== o.appendRemains &&
                            v.push(
                              new Promise(function (e) {
                                if (I) return e(I);
                                s.sdk
                                  .getSystemInfo()
                                  .then(function (i) {
                                    var t = i.tcc,
                                      n = void 0 === t ? {} : t,
                                      o = i.appVersion,
                                      a = i.os,
                                      l = i.osVersion,
                                      u = void 0 === l ? "" : l,
                                      c = i.ip,
                                      s = i.devId,
                                      p = i.mac,
                                      m = i.idfv,
                                      v = i.appName,
                                      f = u.replace(/[a-zA-Z\s]/g, "");
                                    (I = d.pickBy(
                                      r(
                                        {
                                          _appName: v,
                                          _appver: o,
                                          _osVer: a + f,
                                          _local_ip: c,
                                          _devId: s,
                                          _mac: p,
                                          _feature_code: m,
                                          _buildh5ver: "202607271629",
                                        },
                                        n
                                      )
                                    )),
                                      e(I);
                                  })
                                  .catch(function (r) {
                                    e({});
                                  });
                              })
                            ),
                          (e.next = 6),
                          Promise.all(v)
                        );
                      case 6:
                        return (
                          (f = e.sent),
                          (x = ""),
                          (g = ""),
                          (g = m.getMpFromSource()),
                          e.abrupt(
                            "return",
                            ((x =
                              "wxcc8a51267886fec4" ===
                                (null ==
                                (p =
                                  null ==
                                  (l =
                                    null == (a = u.getApp) ? void 0 : a.call(u))
                                    ? void 0
                                    : l.globalData)
                                  ? void 0
                                  : p.fromAppId) || "zxgxcx" === g
                                ? "zxgxcx"
                                : "wzqxcx"),
                            c
                              .request(
                                d.dist.urltools.make(t, { t: Date.now() }),
                                r(
                                  r(
                                    r(
                                      r(
                                        {},
                                        f.reduce(function (e, i) {
                                          return r(r({}, e), i);
                                        }, {})
                                      ),
                                      n
                                    ),
                                    {},
                                    {
                                      come_from: this.comeFrom,
                                      cli_platform: this.cliPlatform,
                                      cli_product: this.cliProduct,
                                    },
                                    k ? { escape: "1" } : {}
                                  ),
                                  {},
                                  { xcxname: x, plugin_flag: "1" }
                                ),
                                r({ checkLogin: !0 }, o)
                              )
                              .then(function (e) {
                                return e.data;
                              })
                              .catch(this.throwCommonError))
                          )
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                i,
                this
              );
            })
          )),
          function (e) {
            return p.apply(this, arguments);
          }),
      },
      {
        key: "throwCommonError",
        value: function (e) {
          var i;
          if ("NOAUTH" !== (null == e ? void 0 : e.retcode)) {
            var t = e instanceof Error;
            throw r(
              r(
                {
                  retcode: (null == e ? void 0 : e.retcode) || "ERESP",
                  retmsg: "网络繁忙 请稍后再试",
                },
                "object" == o(null == e ? void 0 : e.data) &&
                  null !== (null == e ? void 0 : e.data)
                  ? e.data
                  : {}
              ),
              {},
              {
                status: null == e ? void 0 : e.status,
                statusText: null == e ? void 0 : e.statusText,
                message: null == e ? void 0 : e.message,
                _request_is_cancelled:
                  !0 === (null == e ? void 0 : e.__CANCEL__),
                _request_url:
                  (null == (i = null == e ? void 0 : e.config)
                    ? void 0
                    : i.url) || (null == e ? void 0 : e.url),
                _original_error: t ? { name: e.name, stack: e.stack } : void 0,
              }
            );
          }
        },
      },
    ]),
    a
  );
})();
