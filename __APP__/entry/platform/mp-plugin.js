var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../@babel/runtime/helpers/createClass"),
  o = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var a = Object.defineProperty,
  u = require("../../common/vendor.js"),
  s = require("../../service/login/platform/mp-plugin.js"),
  c = require("../../service/sdk/platform/mp-weixin.js"),
  l = require("../../stores/user/useUserinfo.js"),
  p = require("../../config/mpConfig.js"),
  g = require("../../service/navigateMp.js"),
  f = require("../../service/mpIntercept.js"),
  d = require("../../config/key.js"),
  m = require("../../cgi/userinfo.js"),
  v = require("../../adapter/router.js"),
  k = require("../../utils/market.js");
require("../../service/broker.js");
var y = require("../../utils/index.js"),
  b = require("../../service/aegis/platform/not-wujie.js"),
  h = require("../../cgi/platforms/mp-weixin.js"),
  q = require("../../config/broker/11100/index.js");
function _() {
  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
  g.navigateTo({
    url: "/pages/index/trade?isRelaunch=" + (e ? "1" : "0"),
    linkType: p.linkTypeMap.plugin2MainMp,
  });
}
var x = (function () {
  function x() {
    i(this, x),
      (function (e, r, n) {
        (function (e, r, n) {
          r in e
            ? a(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[r] = n);
        })(e, "symbol" != o(r) ? r + "" : r, n);
      })(this, "showTabBar", !1);
  }
  var S, j;
  return (
    t(
      x,
      [
        {
          key: "login",
          get: function () {
            return (s.login || s.__CJS__import__0__).instance();
          },
        },
        {
          key: "sdk",
          get: function () {
            return (c.sdk || c.__CJS__import__1__).default;
          },
        },
        {
          key: "onNavToQuote",
          value: function (e) {
            e.code
              ? g.navigateTo({
                  url: "/pages/quote/quote?".concat(
                    u.lib.stringify(
                      n(
                        {
                          market: k.stockDetailMarketMapWx(e.market),
                          scode: e.code,
                          entrust_type: e.entrust_type,
                          halfscreen: e.halfscreen,
                          trademode: e.trademode,
                          jtime: e.jtime,
                        },
                        y.getQuoteTradeParams(e)
                      )
                    )
                  ),
                  linkType: p.linkTypeMap.plugin2MainMp,
                })
              : b.aegisReporter.sdk.report({
                  msg: "stock_detail scode empty",
                  trace: "trace",
                });
          },
        },
        { key: "onAppRoute", value: function () {} },
        {
          key: "onLaunch",
          value:
            ((j = r(
              e().mark(function r() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        u.index.getStorageSync(d.COOKIES)
                          ? u.index.removeStorageSync(d.PLUGIN_FIRST_OPEN)
                          : u.index.setStorageSync(d.PLUGIN_FIRST_OPEN, "1"),
                          u.index.removeStorageSync(d.RELOGIN),
                          u.index.removeStorageSync(d.RELOGIN_WEBVIEW),
                          m.removeUserInfoRequestFlag();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )),
            function () {
              return j.apply(this, arguments);
            }),
        },
        {
          key: "onBind",
          value: function () {
            var e, r, n;
            function i() {
              var e,
                r,
                n = "user/account_bind_guide";
              "2" !==
                (null == (e = requireMiniProgram().main2Plugin())
                  ? void 0
                  : e.mainMpWx("getStorageSync", n)) &&
                (null == (r = requireMiniProgram().main2Plugin()) ||
                  r.mainMpWx("setStorageSync", n, "1")),
                _();
            }
            null ==
              (n =
                null ==
                (r =
                  null == (e = l.useUserinfoStore())
                    ? void 0
                    : e.forceGetUserInfo())
                  ? void 0
                  : r.then(function () {
                      i();
                    })) ||
              n.catch(function () {
                i();
              });
          },
        },
        {
          key: "onUnBind",
          value: function (e) {
            "unbind" !== (null == e ? void 0 : e.formActionKey)
              ? (f.clearStorageSync(), _())
              : v.router().back();
          },
        },
        {
          key: "clearCookie2Verify",
          value:
            ((S = r(
              e().mark(function r() {
                var n,
                  i,
                  t = this;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = function () {
                              var e;
                              t.login.logout(),
                                null == (e = l.useUserinfoStore()) ||
                                  e.removeUserInfo();
                            }),
                            (e.prev = 1),
                            u.index.showLoading({ title: "退出中" }),
                            (e.next = 5),
                            h.MpWeixinAPI.request(
                              "logout.cgi?nofundcheck=1",
                              {},
                              { checkLogin: !1, method: "GET" }
                            )
                          );
                        case 5:
                          e.next = 10;
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(1)),
                            null == (n = b.aegisReporter) ||
                              n.reportEvent(
                                "MP-PLUGIN-CLEARCOOKIE2VERIFY-ERROR",
                                { ext2: JSON.stringify(e.t0) }
                              );
                        case 10:
                          return (
                            (e.prev = 10),
                            i(),
                            u.index.hideLoading(),
                            _(),
                            e.finish(10)
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 7, 10, 13]]
                );
              })
            )),
            function () {
              return S.apply(this, arguments);
            }),
        },
        {
          key: "jumpUrl",
          value: function (e) {
            u.index.navigateTo({
              url: "plugin-private://"
                .concat(
                  q.brokerConfig.base.appid,
                  "/platforms/mp-weixin/webview/index?url="
                )
                .concat(encodeURIComponent(e.url)),
            });
          },
        },
      ],
      [
        {
          key: "instance",
          value: function () {
            return new x();
          },
        },
      ]
    ),
    x
  );
})();
exports.MpPluginHost = x;
