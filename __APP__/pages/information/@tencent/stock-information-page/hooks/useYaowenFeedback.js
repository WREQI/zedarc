var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  i = function (e, n, r) {
    return new Promise(function (t, c) {
      var a = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            c(e);
          }
        },
        o = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            c(e);
          }
        },
        u = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(a, o);
        };
      u((r = r.apply(e, n)).next());
    });
  },
  s = require("../../../../../common/vendor.js"),
  l = require("../../stock-news-core/utils/loginHelper.js"),
  f = require("../../../@ungap/url-search-params/esm/index.js"),
  p = "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings";
function b() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  return l.getLoginParamsObject(e);
}
function g(e) {
  var n = e.subIndex,
    t = e.settingKeys,
    i = (function (e, n) {
      for (var t in n || (n = {})) a.call(n, t) && u(e, t, n[t]);
      if (c) {
        var i,
          s = r(c(n));
        try {
          for (s.s(); !(i = s.n()).done; ) {
            t = i.value;
            o.call(n, t) && u(e, t, n[t]);
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
      }
      return e;
    })({ subIndex: n, settingKeys: void 0 === t ? "" : t }, b(p));
  return s.StockBridge.request(
    "".concat(p, "/batchget"),
    s.RequestTypeEnum.GET,
    i
  );
}
var d = { headers: { "Content-Type": "application/json" } },
  v = "FEED_RECOM_SETTING_VAL",
  m = "news-FEED_RECOM_SETTING_VAL",
  h = "feedRecomSetting";
exports.useYaowenFeedback = function () {
  var r = this,
    t = s.ref("cancel" !== s.StockBridge.getStorage(v)),
    c = function (e) {
      (t.value = e),
        s.StockBridge.setStorage(v, t.value ? "confirm" : "cancel");
    },
    a = function (e) {
      c("confirm" === e);
    };
  return (
    s.StockBridge.busOn(m, a),
    i(
      r,
      null,
      n().mark(function e() {
        var r, t;
        return n().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    g({ subIndex: "GLOBAL", settingKeys: h })
                  );
                case 3:
                  (r = e.sent), (t = r.settings && r.settings[h]);
                  try {
                    t = t && JSON.parse(t);
                  } catch (e) {}
                  return e.abrupt("return", (c("cancel" !== t), !0));
                case 9:
                  return (
                    (e.prev = 9), (e.t0 = e.catch(0)), e.abrupt("return", !1)
                  );
                case 12:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 9]]
        );
      })
    ),
    s.onBeforeUnmount(function () {
      s.StockBridge.busOff(m, a);
    }),
    {
      yaowenFeedbackEnable: t,
      switchYaoWenFeedBack: function () {
        c(!t.value),
          i(
            r,
            null,
            n().mark(function r() {
              var c;
              return n().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (c = t.value ? "confirm" : "cancel"),
                        (n.next = 3),
                        (function (e) {
                          var n = e.subIndex,
                            r = e.settings,
                            t = b(p),
                            c = new f.URLSearchParams();
                          Object.keys(t).forEach(function (e) {
                            void 0 !== t[e] &&
                              null !== t[e] &&
                              c.append(e, t[e]);
                          });
                          var a = { subIndex: n, settings: r };
                          return s.StockBridge.request(
                            "".concat(p, "/batchset?").concat(c.toString()),
                            s.RequestTypeEnum.POST,
                            a,
                            d
                          );
                        })({
                          subIndex: "GLOBAL",
                          settings: e({}, h, JSON.stringify(c)),
                        })
                      );
                    case 3:
                    case "end":
                      return n.stop();
                  }
              }, r);
            })
          ).catch(console.error),
          s.StockBridge.busEmit(m, t.value ? "confirm" : "cancel");
      },
    }
  );
};
