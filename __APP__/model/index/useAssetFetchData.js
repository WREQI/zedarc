require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/defineProperty"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../common/vendor.js"),
  s = require("../../cgi/asset.js"),
  a = require("../../service/connect/index.js"),
  i = require("../../config/cgi.js"),
  u = require("./useTabBar.js"),
  c = require("../../utils/index.js"),
  l = require("../../config/key.js"),
  d = require("../../config/regexp.js"),
  _ = require("../../common/components/Dialog/index.js"),
  f = require("../../config/enum.js");
require("../../service/broker.js");
var p = require("../../utils/getPlatform.js"),
  v = require("../trade/useBstMark.js"),
  m = require("./useReportAssetData.js"),
  T = require("../kzz/useKzz.js"),
  E = require("../../service/aegis/platform/not-wujie.js"),
  S = require("./useHideFund.js"),
  g = require("../../stores/actconfig/useGovBondsStore.js"),
  R = require("../../components/Password/index.js"),
  h = require("../../stores/user/useUserinfo.js"),
  k = require("../../stores/red-point/useQuickEntry.js"),
  b = require("../../stores/new-stock/useNewStockEntryTip.js"),
  C = require("../act/useGovBondsInfo.js"),
  N = require("../trade/conditions/useFetchNTCondList.js"),
  q = require("../../components/NetworkDetect/useNetworkDetect.js"),
  y = require("../../components/NetworkDetect/constants.js"),
  O = require("../../service/request/cancelTokenConst.js"),
  A = require("../../service/request/cancelTokenManager.js"),
  x = require("../../config/enum/condition.js"),
  B = require("../../service/connect/maps.js"),
  w = require("../../config/broker/11100/index.js");
exports.useAssetFetchData = function (H, I) {
  var D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    j = D.onHomeShowSuccess,
    M = o.getCurrentInstance().proxy;
  p.getPlatform();
  var P = v.useBstMark(),
    L = P.bstOpen,
    F = P.bstHiddenConfig,
    J = T.useKzz(),
    U = J.queryHoldKzzRisk,
    z = g.useGovBondsStore(),
    G = z.setGovBondsInfo,
    K = b.useNewStockEntryTip(),
    W = K.handleNewStock,
    X = C.useGovBondsInfo(),
    V = X.handleDeleteBubbleTip,
    Y = S.useHideFund(),
    Q = Y.restoreHideFund,
    Z = N.useFetchNoTriggerCondList(),
    $ = Z.fetchNoTriggerCondList,
    ee = Z.noTriggerConditions,
    te = Z.fetchStatus,
    re = Z.totalNum,
    ne = Z.condStatusType,
    oe = Z.setCondStatusType,
    se = "0",
    ae = "1",
    ie = 1,
    ue = "",
    ce = null,
    le = o.ref(!0),
    de = o.ref(!1),
    _e = o.ref(!1),
    fe = o.ref(!1),
    pe = o.ref({ status: "0", title: "", content: "", type: se }),
    ve = o.ref(""),
    me = h.useUserinfoStore(),
    Te = o.storeToRefs(me),
    Ee = Te.userinfo,
    Se = k.useQuickEntry();
  function ge() {
    return I.currentTab.value === u.TAB.HISTORY
      ? "1"
      : I.currentTab.value === u.TAB.CONDITION
      ? "2"
      : "0";
  }
  function Re(e) {
    return he.apply(this, arguments);
  }
  function he() {
    return (he = n(
      e().mark(function r(n) {
        var a,
          i,
          u,
          f,
          p,
          v,
          T,
          S,
          g,
          h,
          k,
          b,
          C,
          N,
          A,
          x,
          B,
          I,
          D,
          P,
          J,
          z,
          K,
          X,
          Y,
          Q,
          Z = arguments;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((a = Z.length > 1 && void 0 !== Z[1] && Z[1]),
                    (e.prev = 1),
                    (S = ge()),
                    (g = null),
                    !a ||
                      !(null ==
                      (f =
                        null ==
                        (u = null == (i = w.brokerConfig) ? void 0 : i.trade)
                          ? void 0
                          : u.index)
                        ? void 0
                        : f.homeShowReloadNewCgi))
                  ) {
                    e.next = 10;
                    break;
                  }
                  return (
                    (e.next = 7),
                    s.assetCgi.fetchHomeShowReload(
                      { scene: S, qry_bulletin: "1", action: "reload" },
                      { cancelTokenType: O.CancelTokenType.mark }
                    )
                  );
                case 7:
                  (e.t0 = e.sent), (e.next = 13);
                  break;
                case 10:
                  return (
                    (e.next = 12),
                    s.assetCgi.fetchHomeShow(
                      t(
                        { scene: S, qry_bulletin: "1" },
                        a ? { action: "reload" } : {}
                      ),
                      {
                        shouldNetworkDetect: n,
                        cancelTokenType: O.CancelTokenType.mark,
                      }
                    )
                  );
                case 12:
                  e.t0 = e.sent;
                case 13:
                  if ((g = e.t0)) {
                    e.next = 16;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    void E.aegisReporter.reportEvent(
                      "MONITOR-ASSETINDEX-HOMESHOW-EMPTY-RES"
                    )
                  );
                case 16:
                  return (
                    R.hidePassword(),
                    n &&
                      !a &&
                      (function () {
                        var e;
                        try {
                          (null == M ? void 0 : M.reportPluginTime) &&
                            (null == (e = M.reportPluginTime) ||
                              e.call(M, "home_show_finish"));
                        } catch (e) {}
                      })(),
                    o.get(
                      w.brokerConfig,
                      "trade.tradeStock.cleanRevokingItemsMapsByReload",
                      !1
                    ) && (H.revokingItemsMaps.value = {}),
                    H.updateAssetV2Control(g),
                    (e.next = 21),
                    H.updateByCGI(g)
                  );
                case 21:
                  try {
                    (fe.value = g.available_purchase_num > 0),
                      U(g.holdstock),
                      G(g.gov_bonds_icon || {}),
                      V(),
                      (function (e, t) {
                        try {
                          var r = e.filter(function (e) {
                            return "1" === e.bulletin_status;
                          });
                          if (r.length > 0) {
                            var n = r[0];
                            return (
                              (pe.value.status = n.bulletin_status),
                              (pe.value.title = n.bulletin_title),
                              (pe.value.type = se),
                              void (n.bulletin_content
                                ? (pe.value.content = n.bulletin_content
                                    .replace(/&lt;/g, "<")
                                    .replace(/&gt;/g, ">")
                                    .replace(/&quot;/g, '"'))
                                : (pe.value.content = ""))
                            );
                          }
                          if (t)
                            return void (pe.value = {
                              status: "1",
                              title: "日终清算待完成，资产指标以结算后数据为准",
                              type: ae,
                            });
                          pe.value = {};
                        } catch (e) {
                          E.aegisReporter.reportEvent(
                            "MONITOR-ASSETINDEX-HANDLEBULLETIN-ERR",
                            {
                              ext3:
                                e instanceof Error
                                  ? e.stack || e.message
                                  : JSON.stringify(e || {}),
                            }
                          );
                        }
                      })(
                        g.bulletin || [],
                        "1" === (null == g ? void 0 : g.is_settle_time)
                      ),
                      H.updateRepoCond(g.repo_cond),
                      "1" === (null == (p = g.aics) ? void 0 : p.level)
                        ? (ve.value = "2")
                        : (ve.value =
                            (null == (v = g.aics) ? void 0 : v.level) || "2"),
                      (L.value = "1" === g.bst_status),
                      (function (e) {
                        var t, r, n;
                        try {
                          e.available_purchase_num > 0 &&
                            (c.getCache(l.ASSET_NEWSTOCK_REDPOINT)
                              ? Se.deleteRedPoint(
                                  w.brokerConfig.dictionary.Enties.ipo.routeName
                                )
                              : Se.addRedPoint(
                                  w.brokerConfig.dictionary.Enties.ipo.routeName
                                )),
                            F.value || L.value || Se.isBizClickBefore("bstmark")
                              ? Se.deleteBizHallRedPoint("bstmark")
                              : Se.addBizHallRedPoint("bstmark", !0),
                            "1" === Ee.value.cred_update_notify
                              ? Se.addBizHallRedPoint(
                                  w.brokerConfig.dictionary.Enties.updateid
                                    .routeName
                                )
                              : Se.deleteBizHallRedPoint(
                                  w.brokerConfig.dictionary.Enties.updateid
                                    .routeName
                                ),
                            "1" === Ee.value.newer_shareholder_notify
                              ? (Se.addBizHallRedPoint("newerShareholder", {
                                  type: "bubble",
                                  contentText: "股东卡",
                                }),
                                Se.addBubbleTip(
                                  w.brokerConfig.dictionary.Enties.account
                                    .routeName,
                                  { contentText: "股东卡", isFirstShow: !0 }
                                ))
                              : (Se.deleteBizHallRedPoint("newerShareholder"),
                                Se.deleteBubbleTip(
                                  null ==
                                    (r =
                                      null ==
                                      (t = w.brokerConfig.dictionary.Enties)
                                        ? void 0
                                        : t.account)
                                    ? void 0
                                    : r.routeName
                                )),
                            +(null == (n = null == e ? void 0 : e.fund_reminder)
                              ? void 0
                              : n.pre_num) > 0
                              ? Se.addBubbleTip(
                                  w.brokerConfig.dictionary.Enties.fund
                                    .routeName,
                                  {
                                    contentText: "".concat(
                                      e.fund_reminder.pre_num > 99
                                        ? "99+"
                                        : e.fund_reminder.pre_num,
                                      "笔在途"
                                    ),
                                    isFirstShow: !0,
                                  }
                                )
                              : Se.deleteBubbleTip(
                                  w.brokerConfig.dictionary.Enties.fund
                                    .routeName
                                );
                        } catch (e) {
                          E.aegisReporter.reportEvent(
                            "MONITOR-ASSETINDEX-RENDERREDDOT-ERR",
                            {
                              ext3:
                                e instanceof Error
                                  ? e.stack || e.message
                                  : JSON.stringify(e || {}),
                            }
                          );
                        }
                      })(g),
                      j && j(g),
                      W(g.ipo_win_num || 0);
                  } catch (e) {
                    E.aegisReporter.reportEvent(
                      "MONITOR-ASSETINDEX-BYPATH-ERR",
                      {
                        ext3:
                          e instanceof Error
                            ? e.stack || e.message
                            : JSON.stringify(e || {}),
                      }
                    );
                  }
                  try {
                    _e.value ||
                      ((h = Number(g.fundsinfo.total_money)),
                      (k = Number(g.fundsinfo.hold_val)),
                      (b = Number(g.fundsinfo.can_trade)),
                      (C = m.useReportAssetDataV3(h)),
                      (N = m.useReportAssetDataV3(k)),
                      (A = {
                        totalmoney: C,
                        holdval: N,
                        cantrade: m.useReportAssetDataV3(b),
                      }),
                      H.isAssetV2User() &&
                        ((x =
                          (null == (T = null == H ? void 0 : H.data)
                            ? void 0
                            : T.fundsinfo) || {}),
                        (B = ["2", "5"].includes(
                          null == x ? void 0 : x.asset_status
                        )
                          ? 0
                          : x.bal_val),
                        (I = c.isZeroVal(x.hold_val)
                          ? 0
                          : Math.abs(x.hold_val)),
                        (D = c.isZeroVal(B) ? 0 : Math.abs(B)),
                        (P = c.isZeroVal(x.fe_funds_balance)
                          ? 0
                          : Math.abs(x.fe_funds_balance)),
                        (J = o.__CJS__export_add__(
                          o.__CJS__export_add__(I, D),
                          P
                        )),
                        (A.shareratios =
                          0 === I && 0 === D && 0 === P
                            ? "0,0,0"
                            : ""
                                .concat(
                                  o
                                    .__CJS__export_mul__(
                                      o.__CJS__export_div__(I, J),
                                      100
                                    )
                                    .toFixed(0),
                                  ","
                                )
                                .concat(
                                  o
                                    .__CJS__export_mul__(
                                      o.__CJS__export_div__(D, J),
                                      100
                                    )
                                    .toFixed(0),
                                  ","
                                )
                                .concat(
                                  o
                                    .__CJS__export_mul__(
                                      o.__CJS__export_div__(P, J),
                                      100
                                    )
                                    .toFixed(0)
                                ))),
                      (_e.value = !0),
                      M.$stat.click("trade.asset.data", "", "", A));
                  } catch (e) {
                    E.aegisReporter.reportEvent(
                      "MONITOR-ASSETINDEX-REPORTDATA-ERR",
                      {
                        ext3: JSON.stringify({
                          message: null == e ? void 0 : e.message,
                          stack: null == e ? void 0 : e.stack,
                          name: null == e ? void 0 : e.name,
                        }),
                      }
                    );
                  }
                  return e.abrupt("return", ((de.value = !0), g));
                case 26:
                  if (
                    ((e.prev = 26),
                    (e.t1 = e.catch(1)),
                    (de.value = !0),
                    (z = !d.REGEXP.NEEDLOGIN.test(e.t1.retcode) && n),
                    (K = q.useNetworkDetect()),
                    (X = K.isNetworkDetectSuccess),
                    (Y = K.isNetworkDetectError),
                    (Q = K.syncUIStatus),
                    !z || !Y(e.t1.retcode))
                  ) {
                    e.next = 32;
                    break;
                  }
                  throw (
                    (X(e.t1.retcode) &&
                      (Q(!0),
                      _.Dialog({
                        context: M,
                        message: y.RETMSG_NETWORK_DETECT_REACHABLE,
                        confirmButtonText: "刷新",
                        showCancelButton: !1,
                        onConfirm: function () {
                          Ce({ firstReq: !0 });
                        },
                        onHidden: function () {
                          Q(!1);
                        },
                      })),
                    e.t1)
                  );
                case 32:
                  throw (
                    (z &&
                      _.Dialog({
                        context: M,
                        message: e.t1.retmsg || "网络繁忙 请稍后再试",
                        confirmButtonText: "刷 新",
                        showCancelButton: !0,
                        cancelButtonText: "我知道了",
                        onConfirm: function () {
                          Ce({ firstReq: !0 });
                        },
                      }),
                    e.t1)
                  );
                case 33:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[1, 26]]
        );
      })
    )).apply(this, arguments);
  }
  function ke() {
    return be.apply(this, arguments);
  }
  function be() {
    return (be = n(
      e().mark(function t() {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.prev = 0), I.currentTab.value === u.TAB.CONDITION)) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  return (e.next = 5), $();
                case 5:
                  ne.value === x.CondStatus.WAIT &&
                    H.updateCondTotalNum(re.value),
                    (e.next = 10);
                  break;
                case 8:
                  (e.prev = 8), (e.t0 = e.catch(0));
                case 10:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 8]]
        );
      })
    )).apply(this, arguments);
  }
  function Ce() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.firstReq,
      r = e.reload,
      n = void 0 !== r && r;
    return new Promise(function (e, r) {
      (le.value = !0),
        Ne(),
        Re(t, n)
          .then(function (t) {
            if (t) {
              var r = t.stop_push,
                n = void 0 === r ? "0" : r,
                s = t.stop_refresh,
                i = void 0 === s ? "1" : s,
                u = t.refresh_time,
                c = void 0 === u ? "2" : u,
                d = t.holdstock,
                _ = void 0 === d ? [] : d;
              ke(),
                Q(),
                setTimeout(function () {
                  window && (window.__asset_index_update_stage = !0);
                }, 300),
                o.index.setStorageSync(l.ASSET_HOLDSTOCK_LEN, _.length),
                "0" !== n || A.isRequestUnCompleteWhenRoute(t)
                  ? "0" !== i ||
                    A.isRequestUnCompleteWhenRoute(t) ||
                    ((ue = a.SOURCE.AJAX),
                    a.connector.disableGlobalWebsocket(),
                    (ce = setTimeout(function () {
                      qe();
                    }, 1e3 * c || 0)),
                    E.aegisReporter.reportEvent("GLOBAL_WSS_DISABLED"))
                  : ((ue = a.SOURCE.WEBSOCKET), qe()),
                A.isRequestUnCompleteWhenRoute(t) &&
                  (A.removeUnCompleteFlag(t),
                  E.aegisReporter.reportEvent(
                    "ASSET_UNCOMPLETE_REQ_WHEN_ROUTE"
                  )),
                (le.value = !1),
                e();
            } else le.value = !1;
          })
          .catch(function (e) {
            E.aegisReporter.reportEvent(
              "MONITOR-ASSETINDEX-FETCHSHOWDATA-ERR",
              {
                ext3:
                  e instanceof Error
                    ? e.stack || e.message
                    : JSON.stringify(e || {}),
              }
            ),
              (le.value = !1),
              r(e || new Error("资产数据加载失败"));
          });
    });
  }
  function Ne() {
    ce && (clearTimeout(ce), (ce = null));
  }
  function qe() {
    var o,
      s =
        (r((o = {}), u.TAB.HOLDING, [B.SCHEME.HOME_HOLDSTOCK_TAB]),
        r(o, u.TAB.HISTORY, [B.SCHEME.HOME_ORDERLIST_TAB]),
        r(o, u.TAB.CONDITION, [B.SCHEME.PRICE_CONDITION]),
        o),
      c = s[I.currentTab.value] || [B.SCHEME.NONE];
    a.connector({
      acceptSchemes: s,
      reportScene: "asset",
      source: ue,
      scheme: c,
      options: { scode: H.getScode() },
      beforeRequest: r({}, i.API_ASSET_HOME_REFRESH, function (e) {
        (ie += 1),
          (e.ref_times = ie),
          (e.scene = ge()),
          (e.scode = H.getScode());
      }),
      beforeSend: {},
      connected: function () {},
      disconnected: function () {},
      upgrade: r({}, a.SOURCE.AJAX, function () {
        ie = 0;
      }),
      data: r(
        {
          quotation: function (e) {
            var t = e.secu_info,
              r = e.secu_quote,
              n = e.market_state,
              o = t.market,
              s = t.secu_code,
              a = r.dqj;
            I.currentTab.value === u.TAB.HISTORY &&
              H.updateDqjInHistory({
                code: s,
                market: o,
                dqj: a,
                market_state: n,
              }),
              H.quotationProcessStrategy({ market: o, code: s, dqj: a });
          },
          new_home_push: function (e) {
            H.updateByPush(e);
          },
        },
        i.API_ASSET_HOME_REFRESH,
        function (e) {
          if ("1" === e.need_update_incom && e.slist)
            for (var r = 0; r < e.slist.length; r++) {
              var n = e.slist[r],
                o = "";
              n.market === f.MARKET.SA
                ? (o = e.market_state_s)
                : n.market === f.MARKET.HA
                ? (o = e.market_state_h)
                : n.market === f.MARKET.BJ
                ? (o = e.market_state_bj)
                : n.market === f.MARKET.NQ
                ? (o = e.market_state_nq)
                : n.market === f.MARKET.HK && (o = e.market_state_hk),
                I.currentTab.value === u.TAB.HISTORY &&
                  H.updateDqjInHistory(t(t({}, n), {}, { market_state: o }));
              var s = n.market,
                a = n.code,
                i = n.dqj;
              H.quotationProcessStrategy({ market: s, code: a, dqj: i });
            }
          else
            "0" === e.need_update_incom &&
              H.updateByCGI(e, { forceUpdate: !1, updateCondNum: !1 });
        }
      ),
      error: function (t, r) {
        return n(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    E.aegisReporter.sdk.report({
                      msg: "connect:wss-error-[assetindex]",
                      ext2: t.retcode,
                      ext3:
                        t instanceof Error
                          ? t.stack || t.message
                          : JSON.stringify(t || {}),
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
    hasNewStock: fe,
    REFRESH_COUNT: ie,
    loading: le,
    fetchData: Ce,
    fetchWebsocket: qe,
    clearRefreshTimer: Ne,
    bulletinConfig: pe,
    aicsLevel: ve,
    firstRequestSuc: de,
    fetchCondList: ke,
    noTriggerConditions: ee,
    condFetchStatus: te,
    condStatusType: ne,
    setCondStatusType: oe,
  };
};
