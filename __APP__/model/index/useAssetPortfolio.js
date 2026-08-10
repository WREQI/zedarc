var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../common/vendor.js"),
  s = require("../../cgi/asset.js"),
  i = require("../../service/connect/index.js"),
  c = require("../../config/cgi.js"),
  u = require("../../service/aegis/platform/not-wujie.js"),
  a = require("./usePluginNeedPwd.js"),
  d = require("../../config/event.js"),
  l = require("../../utils/getPlatform.js"),
  f = require("../../utils/market.js"),
  p = require("./const.js"),
  _ = require("../../service/connect/maps.js"),
  m = 0;
exports.useAssetPortfolio = function (v) {
  var h = "",
    k = 1,
    g = l.getPlatform().isMpPlugin,
    E = a.usePluginNeedPwd().setNeedPwdVal,
    S = n.ref(null);
  n.watch(
    function () {
      return v.data.stock;
    },
    function (e, t) {
      var r = e
        .map(function (e, r) {
          var s,
            i,
            c = null == e ? void 0 : e.new_price,
            u = null == (s = null == t ? void 0 : t[r]) ? void 0 : s.new_price,
            a =
              n.isNil(u) || n.isNil(c)
                ? ""
                : (function (e, t) {
                    return e > t ? "animate-rise" : e < t ? "animate-drop" : "";
                  })(c, u),
            d =
              (null == (i = S.value)
                ? void 0
                : i.find(function (t) {
                    return !(
                      t.code !== e.code ||
                      t.market !== e.market ||
                      (e.stockholder_code &&
                        t.stockholder_code &&
                        t.stockholder_code !== e.stockholder_code)
                    );
                  })) || {},
            l = g ? f.stockDetailMarketMapWx(e.market) : e.market;
          return o(
            o(o({}, d), e),
            {},
            {
              market: l,
              usable: "1",
              status: e.status,
              rise: e.zde,
              price: e.new_price,
              scode: e.code,
              chooseSymbol: ""
                .concat(f.getMarketPYName(e.market))
                .concat(e.code),
              stock_type: e.stocktype,
              listIndex: r,
              animateClass: a,
            }
          );
        })
        .filter(function (e) {
          return e.hold_num > 0;
        });
      S.value = v.sortStockList(
        r,
        v.getSortType() || { key: "hold_val", value: 0 }
      );
    },
    { immediate: !0, deep: !0 }
  );
  var P = n.computed(function () {
      var e;
      return !S.value || 0 === (null == (e = S.value) ? void 0 : e.length);
    }),
    q = n.computed(function () {
      return O.value || "未持有股票";
    }),
    O = n.ref("");
  function A(e) {
    return M.apply(this, arguments);
  }
  function M() {
    return (M = r(
      e().mark(function t(r) {
        var o, c, u, a, l, f, p, _, m;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = (r || {}).reqWebsocket),
                    (c = void 0 === o || o),
                    (e.prev = 1),
                    (e.next = 4),
                    s.assetCgi.fetchAssetInfo()
                  );
                case 4:
                  return (
                    (u = e.sent),
                    (a = u.stop_push),
                    (l = void 0 === a ? "0" : a),
                    (f = u.stop_refresh),
                    (p = void 0 === f ? "1" : f),
                    (_ = u.refresh_time),
                    (m = void 0 === _ ? "2" : _),
                    (e.next = 13),
                    v.updateByCGI(u, { sort: !1 })
                  );
                case 13:
                  setTimeout(function () {
                    window && (window.__asset_portfolio_update_stage = !0);
                  }, 300),
                    g && (E(!1), n.index.$emit(d.PLUGIN_SHOW_PWD, !1)),
                    c &&
                      ("0" === l
                        ? ((h = i.SOURCE.WEBSOCKET), b())
                        : "0" === p &&
                          ((h = i.SOURCE.AJAX),
                          setTimeout(function () {
                            b();
                          }, 1e3 * +m || 0))),
                    (O.value = ""),
                    (e.next = 24);
                  break;
                case 19:
                  if (
                    ((e.prev = 19),
                    (e.t0 = e.catch(1)),
                    !g || "51088820" !== String(e.t0.retcode))
                  ) {
                    e.next = 23;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    void n.index.$emit(d.PLUGIN_NEED_PWD, !0)
                  );
                case 23:
                  (O.value =
                    (null == e.t0 ? void 0 : e.t0.retmsg) ||
                    "网络繁忙 请稍后再试"),
                    n.index.showToast({ title: O.value, icon: "none" });
                case 24:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[1, 19]]
        );
      })
    )).apply(this, arguments);
  }
  function b() {
    i.connector({
      reportScene: "portfolio",
      source: h,
      scheme: [_.SCHEME.HOME_HOLDSTOCK_TAB],
      options: { scode: v.getScode() },
      beforeRequest: t({}, c.API_ASSET_REFRESH, function (e) {
        (k += 1), (e.ref_times = k), (e.scene = "0"), (e.scode = v.getScode());
      }),
      beforeSend: {},
      connected: function () {},
      disconnected: function (e) {
        u.aegisReporter.sdk.report({
          msg: "connect:wss-disconnected",
          ext2: e,
          trace: "trace",
        });
      },
      upgrade: t({}, i.SOURCE.AJAX, function (e) {
        (k = 0),
          u.aegisReporter.sdk.report({
            msg: "connect:wss2ajax",
            ext2: e,
            trace: "trace",
          });
      }),
      data: t(
        {
          quotation: function (e) {
            var t = e.secu_info,
              r = e.secu_quote,
              o = t.market,
              n = t.secu_code,
              s = r.dqj,
              i = r.zdf,
              c = r.zde;
            v.quotationProcessStrategy({
              market: o,
              code: n,
              dqj: s,
              zdf: i,
              zde: c,
            });
          },
          new_home_push: function (e) {
            w((null == e ? void 0 : e.holdstock) || [])
              ? A()
              : v.updateByPush(e, { sort: !1 });
          },
        },
        c.API_ASSET_REFRESH,
        function (e) {
          if ("1" === e.need_update_incom && e.slist)
            for (var t = 0; t < e.slist.length; t++) {
              var r = e.slist[t],
                o = r.market,
                n = r.code,
                s = r.dqj,
                i = r.zdf,
                c = r.zde;
              v.quotationProcessStrategy({
                market: o,
                code: n,
                dqj: s,
                zdf: i,
                zde: c,
              });
            }
          else
            "0" === e.need_update_incom &&
              (w((null == e ? void 0 : e.holdstock) || [])
                ? A()
                : v.updateByCGI(e, { sort: !1 }));
        }
      ),
      error: function (t) {
        return r(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    u.aegisReporter.sdk.report({
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
  function w(e) {
    var t,
      r =
        (null == (t = null == e ? void 0 : e.filter)
          ? void 0
          : t.call(e, function (e) {
              return e.hold_num > 0;
            })) || [],
      o = S.value.length,
      s = r.length;
    return (
      !n.isNil(o) &&
      !n.isNil(s) &&
      o !== s &&
      ((m += 1) <= 3 ||
        (u.aegisReporter.reportEvent(
          "MONITOR-ASSET-PORTFOLIO-HOLDSTOCK-CHANGED-OUTRANGE",
          { ext2: m }
        ),
        !1))
    );
  }
  return {
    TEXT_MAP: p.TEXT_MAP,
    RISE_COLUMN_MODE_MAP: p.RISE_COLUMN_MODE_MAP,
    RISE_COLUMN_MODE_NAME_MAP: p.RISE_COLUMN_MODE_NAME_MAP,
    holdList: S,
    emptyHold: P,
    emptyHoldText: q,
    setHoldStockChangeTimes: function (e) {
      m = e;
    },
    fetchAssetInfo: A,
    fetchWebsocket: b,
    stopWebsocket: function () {
      i.unsubscribe();
    },
  };
};
