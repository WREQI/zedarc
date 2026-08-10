var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass"),
  u = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  v = function (e, t, n) {
    return new Promise(function (r, u) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            u(e);
          }
        },
        i = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js");
f.privacyAgreement.setBypass(!0);
var y = new f.StockBridgeBus(),
  d = new f.StockBridgeShow(),
  _ = {},
  p = new ((function () {
    function u() {
      var e = this;
      n(this, u),
        (this.ENV = f.EnvTypeEnum.MP),
        (this.SHELL = "mpwzq"),
        (this.privacyAgreement = f.privacyAgreement),
        (this.request = function (t, n, r, u) {
          return f.request(t, n, r, u, e.SHELL);
        }),
        (this.requestSubscribeMessage = f.requestSubscribeMessage),
        (this.getSubscribeStatus = f.getSubscribeStatus);
    }
    return (
      r(u, [
        {
          key: "deliverySdk",
          get: function () {
            var e, t;
            return null ==
              (t = null == (e = f.index) ? void 0 : e.__UNION_BRIDGE__)
              ? void 0
              : t.deliverySdk;
          },
        },
        {
          key: "store",
          get: function () {
            return f.store();
          },
        },
        {
          key: "tradeFunc",
          get: function () {
            var e, t;
            return null ==
              (t = null == (e = f.index) ? void 0 : e.__UNION_BRIDGE__)
              ? void 0
              : t.TradeFunc;
          },
        },
        {
          key: "getInstallState",
          value: function () {
            throw new Error("Method not implemented.");
          },
        },
        {
          key: "launch3rdApp",
          value: function () {
            throw new Error("Method not implemented.");
          },
        },
        {
          key: "routeTo",
          value: function (e) {
            f.wx$1.navigateTo(e);
          },
        },
        { key: "openShareGuide", value: function () {} },
        { key: "hideShareGuide", value: function () {} },
        {
          key: "userShare",
          value: function (e) {
            f.setShareInfo(e);
          },
        },
        {
          key: "report",
          value: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            null == (n = null == (t = f.index) ? void 0 : t.__UNION_BRIDGE__) ||
              n.REPORT_MTA_DATA_MP(e, r, u);
          },
        },
        {
          key: "mtaReport",
          value: function (e) {
            var t, n;
            null == (n = null == (t = f.index) ? void 0 : t.__UNION_BRIDGE__) ||
              n.REPORT_MTA_DATA_MP_NAME(e);
          },
        },
        {
          key: "setTitle",
          value: function (e) {
            f.wx$1.setNavigationBarTitle({ title: e });
          },
        },
        {
          key: "getStorage",
          value: function (e) {
            var t = f.wx$1.getStorageSync(e);
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
          },
        },
        {
          key: "setStorage",
          value: function (e, t) {
            var n = JSON.stringify(t);
            f.wx$1.setStorageSync(e, n);
          },
        },
        {
          key: "getSession",
          value: function (e) {
            var t = _[e];
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
          },
        },
        {
          key: "setSession",
          value: function (e, t) {
            var n = JSON.stringify(t);
            _[e] = n;
          },
        },
        {
          key: "getCookie",
          value: function (e) {
            return "";
          },
        },
        { key: "setCookie", value: function (e, t) {} },
        {
          key: "getZxgLoginInfo",
          value: function (e) {
            return v(
              this,
              null,
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          Promise.resolve("Method not implemented.")
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
        {
          key: "getChannel",
          value: function () {
            var e = "",
              t = this.store.channelId,
              n = void 0 === t ? {} : t,
              r = [n[f.BI_STAT_I] || "", n[f.BI_STAT_O] || ""].filter(function (
                e
              ) {
                return e;
              });
            return r.length > 0 && (e = r.join(".")), e;
          },
        },
        {
          key: "setChannel",
          value: function (e) {
            if (f.BI_STAT_RERGEXP.ICHANNEL.test(e)) {
              var t = (this.store || {}).channelId,
                n = void 0 === t ? {} : t;
              (n[f.BI_STAT_I] = e), this.store.setchannelId(n);
            }
          },
        },
        {
          key: "busOn",
          value: function (e, t) {
            y.$on(e, t);
          },
        },
        {
          key: "busOnce",
          value: function (e, t) {
            y.$once(e, t);
          },
        },
        {
          key: "busOff",
          value: function (e, t) {
            y.$off(e, t);
          },
        },
        {
          key: "busEmit",
          value: function (e, t) {
            y.$emit(e, t);
          },
        },
        {
          key: "toast",
          value: function (e, t, n) {
            d.showToast(e, t, n);
          },
        },
        {
          key: "hideToast",
          value: function (e) {
            d.hideToast(e);
          },
        },
        {
          key: "modal",
          value: function (e) {
            d.showModal(e);
          },
        },
        {
          key: "openExtraWebview",
          value: function (t) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              v =
                ((n = (function (t, n) {
                  for (var r in n || (n = {})) l.call(n, r) && c(t, r, n[r]);
                  if (a) {
                    var u,
                      o = e(a(n));
                    try {
                      for (o.s(); !(u = o.n()).done; ) {
                        r = u.value;
                        s.call(n, r) && c(t, r, n[r]);
                      }
                    } catch (e) {
                      o.e(e);
                    } finally {
                      o.f();
                    }
                  }
                  return t;
                })({}, u)),
                o(n, i({ isLiteMode: !0 })));
            f.openExtraWebview(t, r, v);
          },
        },
        {
          key: "locationTo",
          value: function (e, t) {
            f.locationTo(e, t);
          },
        },
        {
          key: "aegisReportEvent",
          value: function (e, t) {
            var n, r;
            null ==
              (r =
                null == (n = f.index.__UNION_BRIDGE__)
                  ? void 0
                  : n.UNION_AEGIS) || r.reportEvent(e, t);
          },
        },
        {
          key: "aegisReportTime",
          value: function (e, t) {
            var n, r;
            null ==
              (r =
                null == (n = f.index.__UNION_BRIDGE__)
                  ? void 0
                  : n.UNION_AEGIS) || r.reportTime(e, t);
          },
        },
        {
          key: "getCurRouteInfo",
          value: function () {
            return f.getCurRouteInfo();
          },
        },
        {
          key: "preFetchLibApi",
          value: function () {
            return Promise.resolve("");
          },
        },
        {
          key: "abtCreate",
          value: function (e) {
            return f.abtCreate(e);
          },
        },
        {
          key: "abtWaitCrossLayerReady",
          value: function () {
            var e,
              t,
              n =
                null ==
                (t = null == (e = f.index) ? void 0 : e.__UNION_BRIDGE__)
                  ? void 0
                  : t.waitCrossLayerReady;
            return "function" != typeof n
              ? Promise.resolve({ type: "b", ready: !0 })
              : n();
          },
        },
        {
          key: "getPlatform",
          value: function () {
            return f.getPlatform();
          },
        },
        {
          key: "login",
          value: function () {
            var e;
            return null == (e = f.index.__UNION_BRIDGE__) ? void 0 : e.login;
          },
        },
        {
          key: "getLoginInfoUnion",
          value: function () {
            return v(
              this,
              null,
              t().mark(function e() {
                var n, r, u, o;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = { qlskey: "", qluin: "" }),
                            (e.prev = 1),
                            (u =
                              (null == (n = f.index.__UNION_BRIDGE__)
                                ? void 0
                                : n.login) || {}),
                            (e.next = 5),
                            u.getLoginInfo()
                          );
                        case 5:
                          return (
                            (o = e.sent),
                            e.abrupt(
                              "return",
                              ((r.qlskey =
                                (null == o ? void 0 : o.qlskey) || ""),
                              (r.qluin = (null == o ? void 0 : o.qluin) || ""),
                              r)
                            )
                          );
                        case 9:
                          return (
                            (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", r)
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
          },
        },
      ]),
      u
    );
  })())();
exports.StockBridge = p;
