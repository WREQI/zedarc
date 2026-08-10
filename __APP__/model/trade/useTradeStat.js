require("../../app.js");
var e = require("../../utils/getPlatform.js"),
  t = require("../../common/vendor.js"),
  a = require("../../config/enum.js"),
  n = require("../../utils/index.js");
exports.useTradeStat = function (l) {
  var u,
    r = null == (u = t.getCurrentInstance()) ? void 0 : u.proxy,
    d = e.getPlatform(),
    i = d.isInIframe,
    o = d.isZxg,
    c = n.getIsMpPluginComponent(),
    v = !1;
  function s() {
    var e, t, n;
    if (null == (e = l.isTradeReady) ? void 0 : e.value) {
      var u = "default";
      (null == l ? void 0 : l.canSwitchTradeMode) &&
        (u = (null == l ? void 0 : l.tradeMode.value) || a.TRADE_MODE.STANDARD),
        null == r ||
          r.$stat.page("/embedded/trade/stock", void 0, {
            trade_mode: null == u ? void 0 : u.toLowerCase(),
          }),
        v ||
          g(
            null == (n = null == (t = l.tabbar) ? void 0 : t.currentTabIndex)
              ? void 0
              : n.value
          );
    }
  }
  function f() {
    if (i)
      try {
        if (!l.iframeEmbeddedVisible.value) return;
        s();
      } catch (e) {}
  }
  function b() {
    c && s();
  }
  function m() {
    o && s();
  }
  function g(e) {
    var t, a, n, u, d;
    if (void 0 !== e) {
      var i =
        null ==
        (n =
          null == (a = null == (t = l.tabbar) ? void 0 : t.tabs)
            ? void 0
            : a.value)
          ? void 0
          : n[e];
      i &&
        ((v = !0),
        null == r ||
          r.$stat.click("trade.trade.tab.".concat(i.value), void 0, void 0, {
            stockid:
              null ==
              (d = null == (u = null == l ? void 0 : l.trade) ? void 0 : u.code)
                ? void 0
                : d.value,
          }));
    }
  }
  return (
    t.watch(
      function () {
        var e, t;
        return null == (t = null == (e = l.tabbar) ? void 0 : e.currentTabIndex)
          ? void 0
          : t.value;
      },
      function (e) {
        g(e);
      }
    ),
    t.watch(
      function () {
        return l.isTradeReady.value;
      },
      function (e) {
        e && (i && f(), c && b(), o && m());
      }
    ),
    {
      statTabBar: function (e) {
        null == r || r.$stat.click("trade.trade.tab.".concat(e, ".click"));
      },
      statFullScreen: function () {
        var e, t;
        i ||
          c ||
          (null == r || r.$stat.page("/trade/stock"),
          v ||
            g(
              null == (t = null == (e = l.tabbar) ? void 0 : e.currentTabIndex)
                ? void 0
                : t.value
            ));
      },
      statIframeEmbedded: f,
      statPluginEmbedded: b,
      statZxgEmbedded: m,
    }
  );
};
