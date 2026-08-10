var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  i = function (e, o, n) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[o] = n);
  },
  a = require("../../../../../common/vendor.js"),
  c = !1,
  g = !1,
  u = !1,
  s = {
    ENV: a.StockBridge.ENV,
    SHELL: "mpweapp",
    store: {
      get: function () {
        return c ? {} : a.StockBridge.store;
      },
    },
    report: function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      a.StockBridge.report(e, t);
    },
    mtaReport: function (e) {
      a.StockBridge.mtaReport(e);
    },
    request: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "GET",
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return a.StockBridge.request(e, t, o, n);
    },
    setStorage: function (e, t, o) {
      c
        ? shy.invoke("setGlobalStorageAsync", { key: e, data: t }, o)
        : a.StockBridge.setStorage(e, t);
    },
    getStorage: function (e, t) {
      if (c) shy.invoke("getGlobalStorageAsync", { key: e }, t);
      else {
        var o = a.StockBridge.getStorage(e);
        t && t({ data: o });
      }
    },
    getStorageSync: function (e) {
      var t = this;
      return new Promise(function (o) {
        t.getStorage(e, function (e) {
          o(e);
        });
      });
    },
    getCookie: function (e) {
      return a.StockBridge.getCookie(e);
    },
    busOn: function (e, t) {
      a.StockBridge.busOn(e, t);
    },
    busOff: function (e, t) {
      a.StockBridge.busOff(e, t);
    },
    busEmit: function (e) {
      for (
        var t, o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), r = 1;
        r < o;
        r++
      )
        n[r - 1] = arguments[r];
      (t = a.StockBridge).busEmit.apply(t, [e].concat(n));
    },
    toast: function (e, t) {
      a.StockBridge.toast(e, "none", t);
    },
    modal: function (e) {
      a.StockBridge.modal(e);
    },
    routeTo: function (e) {
      a.StockBridge.routeTo(e);
    },
    exitPage: function () {
      if (c) shy.exit(!0);
      else
        try {
          getCurrentPages().length <= 1
            ? a.wx$1.switchTab({ url: "/pages/index/index" })
            : a.wx$1.navigateBack();
        } catch (e) {}
    },
    setBounces: function (e) {
      c && shy.setBounces(e);
    },
    getUserInfo: function (e) {
      if (c) shy.getUserInfo(e);
      else {
        var t = {};
        (t.openid = a.wx$1.getStorageSync("_qluin")),
          (t.fskey = a.wx$1.getStorageSync("_qlskey")),
          (t.check = 10),
          e(t);
      }
    },
    openExtraWebview: function (e) {
      var t, o;
      g &&
      (null ==
      (o =
        null == (t = null == window ? void 0 : window.wx)
          ? void 0
          : t.miniProgram)
        ? void 0
        : o.navigateTo) &&
      !u
        ? window.wx.miniProgram.navigateTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(e)
            ),
          })
        : a.StockBridge.openExtraWebview(e);
    },
    getAppValue: function () {
      return c
        ? /\bAndroid([^;]+)/.test(
            null == navigator ? void 0 : navigator.userAgent
          )
          ? "Android"
          : /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(
              null == navigator ? void 0 : navigator.userAgent
            )
          ? "iOS"
          : "Harmony"
        : "zxg_xcx";
    },
    aegisReportEvent: function (e, t) {
      a.StockBridge.aegisReportEvent(e, t);
    },
    recordLog: function (t, a) {
      c &&
        ("string" == typeof a
          ? shy.invoke("recordLog", { eventName: t, param: a })
          : shy.invoke(
              "recordLog",
              (function (t, a) {
                for (var c in a || (a = {})) n.call(a, c) && i(t, c, a[c]);
                if (o) {
                  var g,
                    u = e(o(a));
                  try {
                    for (u.s(); !(g = u.n()).done; ) {
                      c = g.value;
                      r.call(a, c) && i(t, c, a[c]);
                    }
                  } catch (e) {
                    u.e(e);
                  } finally {
                    u.f();
                  }
                }
                return t;
              })({ eventName: t }, a)
            ));
    },
    setTitle: function (e) {
      a.StockBridge.setTitle(e);
    },
    getSystemInfo: function (e) {
      c && shy.getSystemInfo(e);
    },
    getPlatform: function () {
      return a.StockBridge.getPlatform();
    },
    abtCreate: function (e) {
      var t, o;
      null == (o = (t = a.StockBridge).abtCreate) || o.call(t, e);
    },
    abtWaitCrossLayerReady: function () {
      var e, t;
      return null == (t = (e = a.StockBridge).abtWaitCrossLayerReady)
        ? void 0
        : t.call(e);
    },
  };
exports.StockBridge = s;
