var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  s = function (e, t) {
    for (var n in t || (t = {})) i.call(t, n) && a(e, n, t[n]);
    if (o) {
      var c,
        s = r(o(t));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          n = c.value;
          u.call(t, n) && a(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  p = function (e, r) {
    return n(e, c(r));
  },
  l = function (e, r, t) {
    return new Promise(function (n, c) {
      var o = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            c(e);
          }
        },
        i = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            c(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((t = t.apply(e, r)).next());
    });
  },
  f = require("./StockBridgeWrapper.js"),
  g = require("../../../../../common/vendor.js");
require("../../stock-community-ui/utils/service/index.js"),
  require("../../../js-cookie/src/js.cookie.js");
var d = require("../../stock-base/service/common/sign.js"),
  v = require("./hostUtils.js"),
  h = function () {
    return "mpweapp" === g.ShellTypeEnum.SHY
      ? "zxg"
      : f.StockBridge.getAppValue();
  },
  k = h,
  m = {
    user: "zenoscai",
    openid: "oA0Gbjk5FACnkjI98WR91uW_p0nY",
    fskey: "ttttt",
    check: "10",
  },
  b = function (e) {
    var r =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (f.StockBridge.ENV === g.EnvTypeEnum.SHY_NATIVE) {
      var c = e;
      return (
        "GET" === r &&
          (c = "".concat(c, "?").concat(
            Object.keys(t)
              .map(function (e) {
                return "".concat(e, "=").concat(t[e]);
              })
              .join("&")
          )),
        new Promise(function (e, r) {
          fetch(c)
            .then(function (e) {
              if (!e.ok) throw new Error("网络响应不正常");
              return e.json();
            })
            .then(function (r) {
              e(r);
            })
            .catch(function (e) {
              r(e);
            });
        })
      );
    }
    return f.StockBridge.request(e, r, t, n);
  };
(exports.buildSignedLoginParams = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    r = e.loginCheck,
    t = e.curUser,
    n = e.curOpenId,
    c = e.curFskey,
    o = e.curCheck,
    i = r ? { user: t, openid: n, fskey: c, check: o } : s({}, m),
    u = "wx9cf8c670ebd68ce4";
  return s(s({ app: k() }, i), u ? { appid: u } : {});
}),
  (exports.checkUserTagrule = function () {
    var r =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "askai_voice";
    return l(
      exports,
      null,
      e().mark(function t() {
        var n, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = "zxg_xcx"),
                    (e.prev = 1),
                    (c = p(s({}, (c = { app: n })), {
                      appid: "".concat(n, "|").concat(r),
                    })),
                    (e.next = 6),
                    f.StockBridge.request(
                      "https://".concat(
                        v.getHost(),
                        "/svr/user/user_service/check_user_tagrule"
                      ),
                      "GET",
                      d.getSignV3({
                        data: p(s({}, c), { t: new Date().getTime() }),
                        method: "get",
                        origin: f.StockBridge.getAppValue(),
                      }),
                      { forceCallback: !0 }
                    )
                  );
                case 6:
                  return e.abrupt("return", e.sent);
                case 9:
                  (e.prev = 9), (e.t0 = e.catch(1));
                case 11:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[1, 9]]
        );
      })
    );
  }),
  (exports.getTencentCloudAudioToken = function () {
    return l(
      exports,
      null,
      e().mark(function r() {
        var t, n;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    new Promise(function (e) {
                      f.StockBridge.getUserInfo(function (r) {
                        e((null == r ? void 0 : r.openid) || "");
                      });
                    })
                  );
                case 3:
                  return (
                    (t = e.sent),
                    (n = new Date().getTime()),
                    (e.next = 7),
                    b(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/openai/cloud/token/get",
                      "GET",
                      d.getSignV3({
                        data: {
                          name: "openai_sts",
                          app: h(),
                          openid: t || "",
                          t: n,
                        },
                        method: "get",
                        origin: f.StockBridge.getAppValue(),
                      }),
                      { forceCallback: !0 }
                    )
                  );
                case 7:
                  return e.abrupt("return", e.sent);
                case 10:
                  (e.prev = 10), (e.t0 = e.catch(0));
                case 12:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[0, 10]]
        );
      })
    );
  }),
  (exports.requestWrapper = b);
