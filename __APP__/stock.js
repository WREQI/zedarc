require("@babel/runtime/helpers/Arrayincludes");
var e = require("@babel/runtime/helpers/regeneratorRuntime"),
  t = require("@babel/runtime/helpers/asyncToGenerator"),
  r = require("@babel/runtime/helpers/objectSpread2"),
  n = require("@babel/runtime/helpers/slicedToArray");
require("app.js");
var a = require("./common/vendor.js"),
  o = require("./config/enum.js"),
  i = require("./config/enum/asset.js"),
  u = require("./model/index/useAsset.js"),
  d = require("./model/kzz/useKzz.js"),
  l = require("./model/index/useTabBar.js"),
  s = require("./model/trade/useTrade.js"),
  c = require("./model/trade/useConditionEntry.js"),
  v = require("./model/trade/conditions/price-utils.js"),
  p = require("./model/trade/useFetchData.js"),
  f = require("./model/trade/useTradeStat.js"),
  h = require("./utils/index.js"),
  T = require("./service/log/index.js"),
  m = require("./service/connect/index.js");
require("./service/broker.js");
var E = require("./config/key.js"),
  S = require("./model/trade/useAutoAddChoose.js"),
  _ = require("./components/PopupSelect/usePopupSelect.js"),
  g = require("./pages/trade/components/order-type-guides/useTypeGudies.js"),
  R = require("./model/trade/useConditionOrderTrade.js"),
  b = require("./service/aegis/platform/not-wujie.js"),
  A = require("./config/event.js"),
  D = require("./service/connect/maps.js"),
  k = require("./router/helper.js"),
  C = require("./utils/getPlatform.js");
require("./service/sdk/lib/api.js");
var w = require("./service/sdk/platform/mp-weixin.js"),
  P = require("./stores/app/useMode.js"),
  O = require("./stores/user/useUserinfo.js"),
  y = require("./service/mpIntercept.js"),
  x = require("./service/stat/mp-weixin.js"),
  I = require("./model/trade/useMinChart.js"),
  M = require("./common/components/Dialog/index.js"),
  N = require("./service/stat/config.js"),
  B = require("./config/HalfScreenConst.js"),
  L = require("./model/trade/useSwitch.js"),
  H = require("./components/BulletinBar/useBulletin.js"),
  $ = require("./utils/system.js"),
  q = require("./pages/trade/utils.js"),
  U = require("./utils/navigator.js"),
  F = require("./model/trade/conditions/utils.js"),
  Y = require("./model/trade/useSplitMode.js"),
  G = require("./model/trade/useTradeSplitAbt.js"),
  j = require("./model/trade/useTradeV4ABT.js"),
  W = require("./utils/market.js"),
  K = require("./model/trade/useExchangeRate.js"),
  V = require("./components/NetworkDetect/useNetworkDetect.js"),
  Z = require("./model/trade/useSwitchTradeMode.js"),
  Q = require("./model/trade/useReportDelay.js"),
  z = require("./mixin/platforms/index.js"),
  J = require("./service/aegis/utils.js"),
  X = require("./service/request/cancelTokenManager.js"),
  ee = require("./config/broker/11100/index.js"),
  te = new T.Log("trade/view"),
  re = { allocate_debt: !1, stock: !0, debt: !1, balance: !1, outbalance: !1 },
  ne = C.getPlatform(),
  ae = ne.isMpPlugin,
  oe = ne.isZxg;
exports.createStock = function () {
  var T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    ne = T.initPlugin,
    ie = void 0 !== ne && ne;
  return {
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    mixins: [z.pluginMixins],
    setup: function (T) {
      var D, V;
      try {
        var z = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Fe.value ||
                          a.index
                            .createSelectorQuery()
                            .in(Pe)
                            .select(".classic-stock-tab")
                            .boundingClientRect(function (e) {
                              if (e && e.top) {
                                var t = $.getWindowInfoCompact().windowHeight,
                                  r = e.top - (t - 200);
                                a.isNumber(r) &&
                                  r > 0 &&
                                  a.index.pageScrollTo({
                                    scrollTop: r + Yr.value,
                                    duration: 100,
                                  });
                              }
                            })
                            .exec();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          X = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Ke.handleChangeTab(1),
                            (e.prev = 1),
                            a.index.showLoading({ title: "查询中" }),
                            (e.next = 5),
                            Lr({ isThrowError: !0 })
                          );
                        case 5:
                          a.index.hideLoading(), z(), (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            a.index.hideLoading(),
                            M.Dialog({
                              message: "网络繁忙，您可通过手动刷新再次尝试",
                              context: Pe,
                            });
                        case 12:
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
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          te = (function () {
            var r = t(
              e().mark(function t(r) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(function (e) {
                            a.index
                              .createSelectorQuery()
                              .in(Pe)
                              .select(r)
                              .boundingClientRect(function (t) {
                                e(t);
                              })
                              .exec();
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
          ne = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!kr.value) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 3), Ze.signFirstTradeConfirm();
                        case 3:
                          e.next = 6;
                          break;
                        case 5:
                          (Ze.showConfirmation.value = !1),
                            nt.matchType ===
                            o.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO
                              ? Ze.checkTradeRequest()
                              : nt.matchType ===
                                  o.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO &&
                                this.$refs.tradeForm.onBuy();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          ue = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          je.checkAndReportStaleRevokingItems(
                            "trade_stock_pulldown_refresh"
                          ),
                          (Ue.value = !0),
                          (e.next = 4),
                          Promise.all([
                            Mt({ isManualRefresh: !0 }),
                            h.sleep(800),
                          ])
                        );
                      case 4:
                        (Ue.value = !1), a.index.stopPullDownRefresh();
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          de = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Pe.$stat.click("trade.trade.safesetting"),
                          (e.next = 3),
                          h.sleep(100)
                        );
                      case 3:
                        Pe.$router.push({ name: "AccountSafeSetting" });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          le = (function () {
            var r = t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Ze.hasSubmittedFlag.value
                            ? Pe.$stat.click(
                                "trade.trade.toasset".concat(
                                  Ze.hasSubmittedFlag.value
                                )
                              )
                            : Pe.$stat.click("trade.trade.toasset"),
                          (e.next = 3),
                          h.sleep(100)
                        );
                      case 3:
                        Pe.$router.push({ path: "/asset/index" });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function () {
              return r.apply(this, arguments);
            };
          })(),
          se = (function () {
            var r = t(
              e().mark(function t(r) {
                var n, a, i, u, d, l;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!it.value.isGGT) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          (rt.setTradeOrderType(r.value),
                          void (Ke.currentDropdownIndex.value =
                            null ==
                            (a =
                              null == (n = Ke.dropDownOption.value)
                                ? void 0
                                : n.dropDown)
                              ? void 0
                              : a.findIndex(function (e) {
                                  return e.value === r.value;
                                })))
                        );
                      case 2:
                        null ==
                          (u = null == (i = Pe.$refs) ? void 0 : i.tradeForm) ||
                          u.allInputBlur(),
                          Be.value &&
                            [
                              o.TRADE_MODE.STANDARD,
                              o.TRADE_MODE.QUICKTRADE,
                            ].includes(r.value) &&
                            (x.stat.click(
                              "trade.trade.dropdown.trade_mode",
                              void 0,
                              void 0,
                              {
                                trade_mode:
                                  null == (d = r.value)
                                    ? void 0
                                    : d.toLowerCase(),
                              }
                            ),
                            fe(r.value)),
                          x.stat.click(
                            "trade.trade.dropdown.click",
                            void 0,
                            void 0,
                            {
                              tab_type:
                                null == (l = r.value)
                                  ? void 0
                                  : l.toLowerCase(),
                            }
                          ),
                          (Dt.value = r.value);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
          ce = function (e) {
            $e = e;
          },
          ve = function () {
            return Pe;
          },
          pe = function () {
            try {
              a.index.getStorageSync(E.TRADE_MODE_SWITCH_BUBBLE_TIPS) ||
                ((pt.value = !0),
                a.index.setStorageSync(E.TRADE_MODE_SWITCH_BUBBLE_TIPS, !0));
            } catch (e) {}
          },
          fe = function (e) {
            Ne.value !== e && (Le(e), at(Ot.value, e));
          },
          he = function (e) {
            sr.value ||
              Tn.value ||
              (Ze.strategy.value !== Br.value && (Ze.strategy.value = Br.value),
              [
                o.ORDER_TYPES.LIMIT,
                o.ORDER_TYPES.ALO,
                o.ORDER_TYPES.ELO,
                o.ORDER_TYPES.OLO,
              ].includes(zr.value)
                ? (Ze.price.value = e)
                : zr.value === o.ORDER_TYPES.PRICE &&
                  a.index.$emit(A.QUOTES_CLICK_PRICE_CHANGE, e));
          },
          Te = function (e) {
            if (e.code && e.market) {
              (Ze.code.value = e.code),
                (Ze.market.value = W.transferMarketToTrade(e.market)),
                (Ze.name.value = decodeURIComponent(
                  decodeURIComponent(e.name || "")
                )),
                (Ze.defaultName.value =
                  Ze.name.value ||
                  decodeURIComponent(decodeURIComponent(e.df_name || ""))),
                (Ze.defaultDqj.value = decodeURIComponent(
                  decodeURIComponent(e.df_dqj || "")
                )),
                "sell" === e.entrust_type
                  ? ((Ze.action.value = o.ACTION.SELL), (mn.value = !0))
                  : "buy" === e.entrust_type &&
                    ((Ze.action.value = o.ACTION.BUY), (mn.value = !0));
              try {
                W.validateMarkets.includes(Ze.market.value) ||
                  J.reportEventSafely("mon_trade_invalid_market", {
                    ext3: "invalid_market:"
                      .concat(e.market, ",transfered:")
                      .concat(Ze.market.value),
                    ext4: "code:".concat(e.code),
                  }),
                  /^\d{6}$/.test(e.code) ||
                    /^\d{5}$/.test(e.code) ||
                    J.reportEventSafely("mon_trade_invalid_code", {
                      ext3: "invalid_code:".concat(e.code),
                      ext4: "market:".concat(e.market),
                    });
              } catch (e) {}
            }
          },
          me = function () {
            setTimeout(function () {
              m.connector.source === m.SOURCE.AJAX && Nt();
            }, 1e3);
          },
          Ee = function () {
            var e;
            sr.value
              ? null == (e = Pe.$refs.confirmRef) || e.onClose()
              : a.index.$emit("embedded:clickHeaderBackButton");
          },
          Se = function (e) {
            var t, r, n, a, i, u, d, s;
            if (
              !(
                (e && e.checkPWDScenes === o.CHECK_PWD_SCENES.continueTrade) ||
                un
              )
            )
              try {
                (un = !0),
                  (Dt.value = Be.value ? Ne.value : l.TRADE_TAB_TYPE.STANDARD),
                  Ze.isTrading.value &&
                    Pe.passwordInstance &&
                    (null == (t = Pe.passwordInstance) || t.close()),
                  Ze.isTrading.value && (Ze.isTrading.value = !1),
                  sr.value && ((Ze.errorTips.value = []), (sr.value = !1)),
                  Tn.value &&
                    (De.value
                      ? null == (r = Pe.$refs.resultRef) || r.backTrade(!1)
                      : null ==
                          (a =
                            null == (n = Pe.$refs)
                              ? void 0
                              : n.classicTradeResult) || a.autoClose()),
                  Zt.value &&
                    (null ==
                      (d =
                        null ==
                        (u = null == (i = Pe.$refs) ? void 0 : i.tradeForm)
                          ? void 0
                          : u.allInputBlur) ||
                      d.call(u));
                try {
                  var c = M.Dialog.isShow({ context: Pe }),
                    v = null == (s = Ze.currentCheckReject) ? void 0 : s.value;
                  c &&
                    (v
                      ? (Ze.currentCheckReject.value("due to close pannel"),
                        M.Dialog.hideOnly({ context: Pe }),
                        b.aegisReporter.reportEvent(
                          "mon_trade_dialogreject_called"
                        ))
                      : b.aegisReporter.reportEvent("mon_trade_nohide_dialog"));
                } catch (e) {
                  b.aegisReporter.reportEvent("mon_trade_hidedialog_error", {
                    ext3: e,
                  });
                }
                Pe.$emit("close"), Pe.$stat.click("trade.trade.close_click");
              } finally {
                un = !1;
              }
          },
          _e = function () {
            (Ot.value = !0),
              Fe.value &&
                ae &&
                (Ze.action.value =
                  "sell" === T.embedded_entrust_type
                    ? o.ACTION.SELL
                    : o.ACTION.BUY),
              (a.index.__number_keyboard_instance = null);
          },
          ge = function () {
            Se(),
              ae
                ? setTimeout(function () {
                    xr.value && (xr.value = !1);
                  }, 500)
                : setTimeout(function () {
                    (xr.value = !1),
                      (null == Fe ? void 0 : Fe.value) &&
                        Pe.$sdk.setContainerHeight({
                          height: tr.value ? sn.value : vn.value,
                        });
                  }, 200);
          },
          Re = function (e) {
            var t = o.INDEPENDENT_PAGE_CONFIG[e];
            t
              ? Pe.$router.push({
                  name: t,
                  query: {
                    code: Ze.code.value,
                    market: Ze.market.value,
                    name: encodeURIComponent(Ze.name.value || ""),
                  },
                })
              : Pe.$router.push({
                  name: "TradeStock",
                  query: {
                    order_type: e || o.ORDER_TYPES.PRICE,
                    code: Ze.code.value,
                    market: Ze.market.value,
                    name: encodeURIComponent(Ze.name.value || ""),
                    cond_info: encodeURIComponent(
                      JSON.stringify({ trade_type: Ze.action.value })
                    ),
                  },
                });
          },
          be = function () {
            vr.value &&
              ("function" == typeof vr.value && vr.value(), (vr.value = null));
          },
          Ae = P.useModeStore(),
          De = a.storeToRefs(Ae).simpleMode,
          ke = Q.useReportDelay({
            timeout: 2e3,
            eventName: "mon_trade_setup_timeout",
          }),
          Ce = ke.startMonitor,
          we = ke.markTaskCompleted;
        Ce(), (global.__embedded__mode = T.embedded);
        var Pe = a.getCurrentInstance().proxy;
        a.provide("curPageContext", Pe),
          a.provide("kzzRiskDialogPageContext", Pe);
        var Oe = a.ref(!1),
          ye = a.ref(!1),
          xe = a.ref(!1),
          Ie = a.ref(""),
          Me = Z.useSwitchTradeMode(),
          Ne = Me.tradeMode,
          Be = Me.canSwitchTradeMode,
          Le = Me.updateTradeMode,
          He = Me.initTradeMode,
          $e = 0;
        if (ie) {
          try {
            (a.index.getGlobalWrapCtx = ve),
              (a.index.getPluginContext = ve),
              y.initMpPlugin(),
              (Ie.value = y.getTheme());
            var qe = getCurrentPages();
            (null == qe ? void 0 : qe.length) >= 1 && y.updateStatData();
          } catch (e) {
            J.reportEventSafely("mon_trade_initplugin_fail", { ext3: e });
          }
          a.watch(
            function () {
              return T.embedded_price;
            },
            function (e) {
              var t = e.price;
              e.status;
              T.embedded_visible && he(t);
            },
            { deep: !0 }
          );
        }
        var Ue = a.ref(!1),
          Fe = a.ref(global.__embedded__mode || !1),
          Ye = a.ref(!0),
          Ge = a.computed(function () {
            return it.value.isTradingHour;
          }),
          je = u.useAsset(Ge, function () {
            Ot.value || Ke.handleChangeTab(1);
          }),
          We = a.computed(function () {
            var e = je.data.stock.length;
            return e ? "(".concat(e, ")") : "";
          }),
          Ke = l.useTabbar(
            {
              numHolding: We,
              numHistory: je.numStockHistory,
              numCondition: je.numCondition,
            },
            Fe.value ? l.TAB.TRADE : l.TAB.HISTORY,
            T.embedded
          ),
          Ve = a.computed(function () {
            if (Vt.value && ae) {
              var e = $.getWindowInfoCompact().statusBarHeight;
              if (e && a.isNumber(e)) return { top: "".concat(e, "px") };
            }
            return {};
          }),
          Ze = s.useTrade(
            function (e) {
              setTimeout(function () {
                je.addOrderRecord(e), me();
              }, 1);
            },
            {
              refreshToday: X,
              tradeSuccess: function (e) {
                var t =
                  De.value && Fe.value
                    ? Pe.$refs.resultRef
                    : Pe.$refs.classicTradeResult;
                (null == t ? void 0 : t.tradeSuccess) && t.tradeSuccess(e);
              },
              tradeSubmit: function (e) {
                var t =
                  De.value && Fe.value
                    ? Pe.$refs.resultRef
                    : Pe.$refs.classicTradeResult;
                (null == t ? void 0 : t.tradeSubmit) && t.tradeSubmit(e);
              },
              tradeFail: function (e) {
                var t =
                  De.value && Fe.value
                    ? Pe.$refs.resultRef
                    : Pe.$refs.classicTradeResult;
                (null == t ? void 0 : t.tradeFail) && t.tradeFail(e);
              },
              tradeSubmitSuccess: function (e) {
                S.zxgAddStock(e);
              },
              isConditionEntryInTradeResult: function () {
                var e, t, r;
                try {
                  if (!Tt.value || !it.value) return !1;
                  var a = v.checkStock({
                    stockCls:
                      null == (e = it.value.quote) ? void 0 : e.stock_cls,
                    isST: it.value.isST,
                    market:
                      null ==
                      (r = null == (t = it.value.quote) ? void 0 : t.info)
                        ? void 0
                        : r.market,
                    quote: it.value.quote,
                  });
                  return n(a, 1)[0];
                } catch (e) {}
                return !1;
              },
            }
          );
        try {
          He({
            embeddedMode: Fe.value,
            tradeModeInitialVal: T.embeddedTradeMode,
            market: T.embedded_market,
            stockType: T.embedded_stock_type,
          });
        } catch (e) {
          b.aegisReporter.reportEvent("trade_init_trade_mode_error", {
            ext3: JSON.stringify(e),
          });
        }
        var Qe = f.useTradeStat({
            isTradeReady: ye,
            iframeEmbeddedVisible: Oe,
            tabbar: Ke,
            trade: Ze,
            tradeMode: Ne,
            canSwitchTradeMode: Be.value,
          }),
          ze = Qe.statTabBar,
          Je = Qe.statFullScreen,
          Xe = Qe.statIframeEmbedded,
          et = Qe.statPluginEmbedded,
          tt = Qe.statZxgEmbedded,
          rt = Ze.order,
          nt = Ze.tradeAuth,
          at = Ze.initOrderInfo,
          ot = Ze.resetPriceStrategy,
          it = Ze.stock,
          ut = I.useMinChart(Ze);
        Ze.action.value =
          "sell" === T.embedded_entrust_type ? o.ACTION.SELL : o.ACTION.BUY;
        var dt = d.useKzz(),
          lt = O.useUserinfoStore(),
          st = a.storeToRefs(lt).userinfo,
          ct = lt.getUserInfo,
          vt = a.computed(function () {
            return Ze.code.value && Ze.market.value
              ? { code: Ze.code.value, market: Ze.market.value }
              : {};
          });
        a.watch(Ke.currentTab, function (e) {
          var t, r, n;
          e === l.TAB.CONDITION &&
            (Lt(),
            Pe.$stat.click("trade.trade.cond.tab", void 0, void 0, {
              stockid:
                null == (t = null == Ze ? void 0 : Ze.code) ? void 0 : t.value,
            })),
            Fe.value &&
              (Tn.value ||
                null ==
                  (n =
                    null == (r = Pe.$refs.tradeForm)
                      ? void 0
                      : r.allInputBlur) ||
                n.call(r));
        });
        var pt = a.ref(!1),
          ft = a.ref(!1),
          ht = c.useConditionEntry(),
          Tt = ht.isConditionEntry,
          mt = ht.ASSET_TAB_MAX_SHOW,
          Et = ht.isInvestCondUser,
          St = ht.shouldShowStrategy,
          _t = ht.isUserInfoReady,
          gt = ht.isGridCondUser,
          Rt = ht.isTPSLCondUser,
          bt = ht.condNum,
          At = ht.checkBeforeJump,
          Dt = a.ref(l.TRADE_TAB_TYPE.STANDARD);
        a.watchEffect(function () {
          Be.value
            ? (pe(), (Dt.value = Ne.value))
            : Ze.market.value === o.MARKET.HK &&
              (function () {
                try {
                  a.index.getStorageSync(E.TRADE_TABBAR_DROPDOWN_BUBBLE_TIPS) ||
                    ((ft.value = !0),
                    a.index.setStorageSync(
                      E.TRADE_TABBAR_DROPDOWN_BUBBLE_TIPS,
                      !0
                    ));
                } catch (e) {}
              })();
        }),
          a.watchEffect(function () {
            if (!it.value.isGGT && Ze.market.value != o.MARKET.HK)
              if (Be.value) {
                var e = rt.isBuyAction
                    ? l.TRADE_TAB_TYPE.MONEY
                    : l.TRADE_TAB_TYPE.AMOUNT,
                  t = [
                    {
                      label: l.labelNameMap[e],
                      value: o.TRADE_MODE.QUICKTRADE,
                      subLabel: l.subLabelMap[e],
                    },
                    {
                      label: l.labelNameMap[l.TRADE_TAB_TYPE.STANDARD],
                      value: o.TRADE_MODE.STANDARD,
                      subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.STANDARD],
                    },
                  ];
                Tt.value &&
                  t.push({
                    label: l.labelNameMap[l.TRADE_TAB_TYPE.CONDITION],
                    value: l.TRADE_TAB_TYPE.CONDITION,
                    subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.CONDITION],
                  }),
                  (Ke.dropDownOption.value = {
                    dropDown: t,
                    dropDownSelected: Dt.value,
                  });
              } else
                Ke.dropDownOption.value = {
                  dropDown: Tt.value
                    ? [
                        {
                          label: l.labelNameMap[l.TRADE_TAB_TYPE.STANDARD],
                          value: l.TRADE_TAB_TYPE.STANDARD,
                          subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.STANDARD],
                        },
                        {
                          label: l.labelNameMap[l.TRADE_TAB_TYPE.CONDITION],
                          value: l.TRADE_TAB_TYPE.CONDITION,
                          subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.CONDITION],
                        },
                      ]
                    : [],
                  dropDownSelected: Dt.value || l.TRADE_TAB_TYPE.STANDARD,
                };
          }),
          a.watch(
            function () {
              return Ne.value;
            },
            function (e) {
              e !== o.TRADE_MODE.STANDARD &&
                Ze.setPriceByStrategy(o.STRATEGY.MANUAL);
            },
            { immediate: !0 }
          );
        var kt = L.useSwitch(),
          Ct = a.ref(""),
          wt = p.useFetchData(Ze, dt, je, Ke, Ue, ut, Ne),
          Pt = wt.tradeBulletinConfig,
          Ot = wt.firstUpdate,
          yt = wt.fetchTradeShow,
          xt = wt.fetchWebsocket,
          It = wt.fetchTradeReload,
          Mt = wt.initMethods,
          Nt = wt.fetchPositionAndOrder,
          Bt = wt.noPushDataTimer,
          Lt = wt.fetchCondList,
          Ht = wt.noTriggerConditions,
          $t = wt.condFetchStatus,
          qt = wt.clearNoTargetPushTimmer,
          Ut = wt.cancelValidatePushData,
          Ft = wt.condStatusType,
          Yt = wt.setCondStatusType,
          Gt = Y.useSplitMode(Fe.value).isClassicTradeSplitMode,
          jt = G.useTradeSplitAbt(),
          Wt = (jt.init, jt.isAbtCreate, jt.getZxgAppABTInfo),
          Kt = j.useTradeV4ABT(),
          Vt = Kt.isTradeV4,
          Zt = (Kt.tradeVersion, a.ref(!1)),
          Qt = E.TRADE_STOCK_BULLETIN,
          zt = a.computed(function () {
            var e;
            return (
              "1" ===
                (null == (e = null == Pt ? void 0 : Pt.value)
                  ? void 0
                  : e.status) && !Ct.value
            );
          }),
          Jt = H.useBulletin({
            expire: 1,
            id: Qt,
            needPrefix: !1,
            bizShowBulletin: zt,
          }),
          Xt = Jt.hideBulletin,
          er = Jt.closeBulletin,
          tr = a.computed(function () {
            return !Xt.value || Ct.value;
          }),
          rr = R.useConditionOrderTrade(Ze),
          nr = rr.resetFormFlag,
          ar = K.useExchangeRate(),
          or = ar.exchangeRate,
          ir = ar.fetchExchangeRate;
        a.provide("isAssetIndex", !1),
          a.provide("forceShowFund", !0),
          a.provide("trade", Ze),
          a.provide("minChart", ut),
          a.provide("assetIndexComp", Pe),
          a.provide("assetData", je.data),
          a.provide("conditionOrderTrade", rr),
          a.provide("undoneOrderList", je.undoneOrderList),
          a.provide("doneOrderList", je.doneOrderList),
          a.provide("combinedOrderList", je.combinedOrderList),
          a.provide("revokingItemsMaps", je.revokingItemsMaps),
          a.provide("newPriceMap", je.newPriceMap),
          a.provide("noTriggerConditionList", Ht),
          a.provide("condStatusType", Ft),
          a.provide("setCondStatusType", Yt),
          a.provide("condFetchStatus", $t),
          a.provide("fetchCondList", Lt),
          a.provide("numCondition", je.numCondition),
          a.provide("onStockListSort", je.onStockListSort),
          a.provide("embeddedMode", Fe),
          a.provide("simpleMode", De),
          a.provide("getParentElePosition", te);
        var ur = a.ref(!1),
          dr = a.ref(!1),
          lr = a.ref(!0),
          sr = a.ref(!1),
          cr = a.ref(!1),
          vr = a.ref(null),
          pr = a.ref(!1),
          fr = a.ref(!1),
          hr = a.computed(function () {
            return Ze.code.value && Ze.market.value;
          }),
          Tr = a.computed(function () {
            return ur.value || !hr.value;
          }),
          mr = a.computed(function () {
            return (
              De.value ||
              [o.ORDER_TYPES.PRICE, o.ORDER_TYPES.INVEST].includes(zr.value)
            );
          }),
          Er = a.computed(function () {
            return o.ORDER_QUOTE_INFO_LABEL[zr.value] || "";
          }),
          Sr = a.computed(function () {
            var e, t, r;
            if (!hr.value) return "";
            switch (null == (e = it.value.secu_info) ? void 0 : e.status) {
              case o.STOCK_STATE.DELISTED:
              case o.STOCK_STATE.SUSPENDED:
              case o.STOCK_STATE.SUSPENSION:
                return "";
              case o.STOCK_STATE.NORMAL:
              default:
                return (
                  (null == (r = (t = it.value).getMarketTips)
                    ? void 0
                    : r.call(t, it.value.market_state)) || ""
                );
            }
          }),
          _r = a.computed(function () {
            return (
              !ur.value &&
              !it.value.isNewStock &&
              ![o.ORDER_TYPES.PRICE, o.ORDER_TYPES.INVEST].includes(zr.value)
            );
          }),
          gr = a.computed(function () {
            return Sr.value;
          }),
          Rr = a.computed(function () {
            var e, t;
            return (
              ![o.ORDER_TYPES.PRICE, o.ORDER_TYPES.INVEST].includes(zr.value) &&
              !(null ==
              (t = null == (e = ee.brokerConfig) ? void 0 : e.trade.tradeStock)
                ? void 0
                : t.hidePositionSwiper) &&
              !ur.value
            );
          }),
          br = a.computed(function () {
            var e, t;
            return !(
              (![o.ORDER_TYPES.PRICE, o.ORDER_TYPES.INVEST].includes(
                zr.value
              ) &&
                De.value) ||
              rr.conditionOrder.isUpdate ||
              (null ==
              (t = null == (e = ee.brokerConfig) ? void 0 : e.trade.tradeStock)
                ? void 0
                : t.hideSearchEntry)
            );
          }),
          Ar = a.computed(function () {
            var e, t;
            return !(null ==
            (t = null == (e = ee.brokerConfig) ? void 0 : e.trade.tradeStock)
              ? void 0
              : t.hidePositionSwiper);
          }),
          Dr = a.computed(function () {
            var e,
              t,
              r = 0,
              n = i.ASSET_EMPTY_HEIGHT,
              a = De.value ? 135 : 120;
            if (0 === Ke.currentTabIndex.value) {
              var o = ["stock"],
                u = o.reduce(function (e, t) {
                  return e + Boolean(je.data[t].length);
                }, 0),
                d = o.reduce(function (e, t) {
                  return e + je.data[t].length;
                }, 0),
                l = o.reduce(function (e, t) {
                  var r;
                  return (
                    e +
                    (null == (r = je.data[t])
                      ? void 0
                      : r.filter(function (e) {
                          return !!e.allotment;
                        }).length)
                  );
                }, 0);
              r = 0 === d ? n : (d - l) * a + 195 * l + 56 * u + 16 * (u - 1);
            } else if (2 === Ke.currentTabIndex.value) {
              var s = (null == (e = Ht.value) ? void 0 : e[Ft.value]) || [],
                c = Math.min(null == s ? void 0 : s.length, mt);
              if (c) {
                for (var v = 0, p = 0; p < c; p++)
                  v += F.calcCondItemHeight(s[p]);
                r = v + i.CONDITION_OPERATION_HEIGHT;
              } else r = i.TRADE_ASSET_EMPTY_HEIGHT;
              "done" !== (null == (t = $t.value) ? void 0 : t[Ft.value]) &&
                (r = i.TRADE_ASSET_EMPTY_HEIGHT);
            } else if (0 === je.data.history.length) r = n;
            else {
              var f =
                  je.undoneOrderList.value.length > 0
                    ? 172 * je.undoneOrderList.value.length + 56
                    : 120,
                h =
                  je.doneOrderList.value.length > 0
                    ? 118 * je.doneOrderList.value.length + 56 + 70
                    : 120;
              je.doneOrderList.value.length > 0
                ? ((r = f + 24 + (lr.value ? h : 70)), De.value && (r -= 24))
                : (r = f);
            }
            return (r + i.LOGO_PLACEHOLDER_HEIGHT) / 75 + "rem";
          });
        a.watch(
          function () {
            return T.embedded_visible;
          },
          function (e, t) {
            e
              ? (setTimeout(function () {
                  Pe.handleShow();
                }, 0),
                et())
              : (ce(0), t && Se());
          },
          { immediate: !0 }
        ),
          a.watch(
            function () {
              return sr.value;
            },
            function (e) {
              !De.value ||
                e ||
                Fe ||
                (Pe.$refs.tradeForm.showConfirmDialog = !1);
              var t;
              (t = e ? cn.value : tr.value ? sn.value : vn.value),
                Pe.$emit("showConfirmDialogChange", { val: e, height: t });
            }
          );
        var kr = a.computed(function () {
            return !1;
          }),
          Cr = a.computed(function () {
            return kr.value || Ze.showConfirmation.value;
          }),
          wr = a.computed(function () {
            return kr.value
              ? {
                  scenes: "first-trade",
                  matchType: o.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO,
                }
              : Ze.showConfirmation.value
              ? { scenes: "trade", matchType: nt.matchType }
              : {};
          }),
          Pr = a.computed(function () {
            return "请联系"
              .concat(ee.brokerConfig.base.name, "客服")
              .concat(ee.brokerConfig.base.tel);
          }),
          Or = a.computed(function () {
            return !1;
          }),
          yr = a.computed(function () {
            var e,
              t = null == (e = lt.userinfo) ? void 0 : e.fundaccount;
            return t
              ? ""
                  .concat(t.substring(0, 1), "**")
                  .concat(t.substring(t.length - 3))
              : "";
          }),
          xr = a.ref(!1),
          Ir = a.computed(function () {
            var e, t;
            return (
              (null == (t = null == (e = it.value) ? void 0 : e.quote)
                ? void 0
                : t.stock_cls) || ""
            );
          }),
          Mr = a.computed(function () {
            return !(!Ze.errorTips.value || !Ze.errorTips.value.length);
          }),
          Nr = a.computed(function () {
            return Mr.value && sr.value && !Tn.value;
          }),
          Br = a.ref(o.STRATEGY.MANUAL);
        a.provide("prevStrategy", Br),
          a.watch(
            function () {
              return Ze.strategy.value;
            },
            function (e) {
              [o.STRATEGY.MANUAL, o.STRATEGY.AFTER_CLOSED].indexOf(e) > -1 &&
                (Br.value = e);
            },
            { immediate: !0 }
          );
        var Lr = a.throttle(
          (function () {
            var r = t(
              e().mark(function t(r) {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          je.checkAndReportStaleRevokingItems(
                            "trade_stock_force_refresh"
                          ),
                          (Ue.value = !0),
                          (e.next = 4),
                          Promise.all([It(r), Lt(), h.sleep(800)])
                        );
                      case 4:
                        Ue.value = !1;
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
          2e3
        );
        a.watch(
          function () {
            return T.embedded_entrust_type;
          },
          function (e) {
            var t;
            Te({
              code: Ze.code.value,
              market: Ze.market.value,
              name: Ze.name.value,
              df_dqj:
                T.df_dqj || (null == (t = Pe.$route.query) ? void 0 : t.df_dqj),
              entrust_type: e,
            });
          }
        );
        var Hr = a.watch(
            function () {
              return T.multiBroker;
            },
            function (e) {
              e &&
                (Pe.$stat.click("trade.trade.togglebroker_brow"),
                Pe.$nextTick(function () {
                  Hr();
                }));
            },
            { immediate: !0 }
          ),
          $r = a.watch(
            function () {
              return kt.showSwitch.value;
            },
            function (e) {
              e &&
                (Pe.$stat.click("trade.trade.togglebroker_brow"),
                Pe.$nextTick(function () {
                  $r();
                }));
            },
            { immediate: !0 }
          ),
          qr = a.ref(!1),
          Ur = a.ref(null),
          Fr = a.ref(""),
          Yr = a.ref(0);
        a.provide("pageScrollTop", Yr);
        var Gr = a.ref(o.ORDER_POPUP_LIST);
        a.watch(
          function () {
            return _t.value;
          },
          function (e) {
            var t, r;
            if (e) {
              var n = Gr.value.findIndex(function (e) {
                return e.value === o.ORDER_TYPES.INVEST;
              });
              Et.value
                ? n < 0 &&
                  Gr.value.push({
                    value: o.ORDER_TYPES.INVEST,
                    text: o.ORDER_TYPES_TEXT[o.ORDER_TYPES.INVEST],
                  })
                : n >= 0 && Gr.value.splice(n, 1);
              var i = Gr.value.findIndex(function (e) {
                return e.value === o.ORDER_TYPES.GRID;
              });
              gt.value && i < 0
                ? Gr.value.push({
                    value: o.ORDER_TYPES.GRID,
                    text: o.ORDER_TYPES_TEXT[o.ORDER_TYPES.GRID],
                  })
                : !gt.value && i >= 0 && Gr.value.splice(i, 1);
              var u = Gr.value.findIndex(function (e) {
                return e.value === o.ORDER_TYPES.TPSL;
              });
              Rt.value && u < 0
                ? Gr.value.push({
                    value: o.ORDER_TYPES.TPSL,
                    text: o.ORDER_TYPES_TEXT[o.ORDER_TYPES.TPSL],
                  })
                : !Rt.value && u >= 0 && Gr.value.splice(u, 1);
            }
            var d = a.dayjs(),
              l = (null == (t = lt.userinfo) ? void 0 : t.start_trade_time)
                ? 1e3 * lt.userinfo.start_trade_time
                : "",
              s = (null == (r = lt.userinfo) ? void 0 : r.audit_time)
                ? 1e3 * lt.userinfo.audit_time
                : "";
            if (
              l &&
              s &&
              d.isBefore(a.dayjs(l)) &&
              d.isSame(s, "day") &&
              "1" !== a.index.getStorageSync(E.TRADE_STOCK_NEW_USER_GUIDE)
            ) {
              var c = C.getPlatform().isOEM;
              (Ct.value = "交易所规定，新开户需下一个交易日("
                .concat(a.dayjs(l).format("MM月DD日"), ")才能买卖股票。")
                .concat(c ? "" : "您可先了解如何选股，用于后续投资。")),
                Pe.$stat.click("trade.trade.new_user_guide_bulltin_exposed");
            } else Ct.value = "";
          },
          { immediate: !0 }
        );
        var jr = a.computed(function () {
          return it.value.isGGT;
        });
        a.watch(
          [
            function () {
              return it.value.isGGT;
            },
            function () {
              return Ze.market.value;
            },
          ],
          function (e) {
            var t = n(e, 2),
              r = t[0],
              a = t[1];
            try {
              if (r || a == o.MARKET.HK) {
                var i = [
                    {
                      label: l.labelNameMap[l.TRADE_TAB_TYPE.GGT_ELO],
                      subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.GGT_ELO],
                      value: o.ORDER_TYPES.ELO,
                    },
                    {
                      label: l.labelNameMap[l.TRADE_TAB_TYPE.GGT_ALO],
                      subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.GGT_ALO],
                      value: o.ORDER_TYPES.ALO,
                    },
                    {
                      label: l.labelNameMap[l.TRADE_TAB_TYPE.GGT_OLO],
                      subLabel: l.subLabelMap[l.TRADE_TAB_TYPE.GGT_OLO],
                      value: o.ORDER_TYPES.OLO,
                    },
                  ],
                  u = [o.ORDER_TYPES.ELO, o.ORDER_TYPES.ALO],
                  d = 0,
                  s = it.value.market_state;
                void 0 === s ||
                  [
                    o.MARKET_STATE.MORNING_OPENED,
                    o.MARKET_STATE.SIESTA,
                    o.MARKET_STATE.AFTERNOON_OPENED,
                    o.MARKET_STATE.NOT_OPEN,
                    o.MARKET_STATE.CLOSED,
                  ].includes(s) ||
                  (d = 1),
                  rt.setTradeOrderType(u[d]),
                  (Ke.tradeLabelName.value = "下单"),
                  (Ke.dropDownOption.value = { dropDown: i }),
                  (Ke.currentDropdownIndex.value = d),
                  void 0 !== s && ir();
              }
            } catch (e) {
              J.reportEventSafely("mon_trade_ggt_ordertypelist_error", {
                ext3: e,
              });
            }
          }
        ),
          a.watch(
            function () {
              return or.value;
            },
            function (e) {
              e && rt.setExchangeRate(e.sell_rate);
            }
          );
        var Wr = _.usePopupSelect({
            list: Gr.value,
            direction: { verticle: "down", horizontal: "right" },
          }),
          Kr = Wr.list,
          Vr = Wr.show,
          Zr = Wr.direction,
          Qr = Wr.positionStyle,
          zr = Wr.selectedKey,
          Jr = Wr.selectedText,
          Xr = Wr.handleDisplayClick,
          en = (Wr.handleFilterItemClick, Wr.hideSelectPopup),
          tn = Wr.setSelectedKey;
        a.watch(
          function () {
            return zr.value;
          },
          function (e) {
            var t = o.ORDER_PAGE_TITLE[e];
            t &&
              "function" == typeof w.sdk.setPageTitle &&
              (w.sdk.setPageTitle({ title: t }),
              setTimeout(function () {
                w.sdk.setPageTitle({ title: t });
              }, 100));
          },
          { immediate: !0 }
        );
        var rn = g.usePopupSelect(),
          nn = rn.showTypeGuides,
          an = rn.handleTypeGuidesShow,
          on = rn.handleTypeGuidesHide,
          un = !1;
        null == (V = (D = w.sdk).onUpdateTradeInfo) ||
          V.call(D, function (e) {
            he(e.price);
          });
        var dn = a.computed(function () {
            return tr.value
              ? De.value
                ? B.getSimpleFormHeight().with_keyboard_bulletin
                : B.getClassicFormHeight(Gt.value ? "" : "notSplit")
                    .with_keyboard_bulletin
              : T.focusHeight ||
                  B.getHalfHeightWithKeyBoard({
                    simpleMode: De.value,
                    version: Gt.value ? "" : "notSplit",
                  });
          }),
          ln = a.computed(function () {
            return tr.value ? sn.value : vn.value;
          }),
          sn = a.computed(function () {
            return De.value
              ? B.getSimpleFormHeight().with_bulletin
              : B.getClassicFormHeight().with_bulletin;
          }),
          cn = a.computed(function () {
            var e = De.value
              ? B.getSimpleFormHeight()
              : B.getClassicFormHeight();
            return Nr.value ? e.confirm_with_error_tip : e.normal;
          }),
          vn = a.computed(function () {
            return De.value
              ? B.getSimpleFormHeight().normal
              : B.getClassicFormHeight().normal;
          }),
          pn = a.computed(function () {
            if (ae && Fe.value) {
              var e = B.getHeightKey({
                isKeyBoard: Zt.value,
                isBulletin: tr.value,
              });
              return (
                (De.value
                  ? B.getSimpleFormHeight()[e]
                  : B.getClassicFormHeight(Gt.value ? "" : "notSplit")[e]) ||
                void 0
              );
            }
          }),
          fn = a.computed(function () {
            return pn.value ? { height: pn.value / 75 + "rem" } : {};
          });
        a.watch(
          function () {
            return tr.value;
          },
          function () {
            Pe.embeddedMode &&
              Pe.$sdk.setContainerHeight({
                height: B.getEmbeddedFormHeight({
                  isKeyBoard: Zt.value,
                  isBulletin: tr.value,
                  simpleMode: De.value,
                  version: Gt.value ? "" : "notSplit",
                }),
              });
          }
        ),
          _e();
        var hn = (Pe.$route.query || {}).order_type;
        hn && tn(hn);
        var Tn = a.ref(!1);
        a.watch(
          function () {
            return Tn.value;
          },
          function (e) {
            e && Fe.value && Pe.$sdk.setContainerHeight({ height: cn.value });
          }
        ),
          a.onPageShow(function () {
            h.getIsMpPluginComponent() &&
              ((a.index.getPluginContext = ve),
              (null == Fe ? void 0 : Fe.value) &&
                (a.index.getGlobalWrapCtx = ve),
              T.embedded_visible && Pe.handleShow());
          });
        var mn = a.ref(!1);
        return (
          a.onDeactivated(function () {
            mn.value = !1;
          }),
          a.onPageHide(function () {
            h.getIsMpPluginComponent() && be("onPageHide");
          }),
          we(),
          r(
            r(
              r(
                r(
                  {
                    isZxg: oe,
                    isMpPlugin: ae,
                    tradeResultVisible: Tn,
                    handleTradeResultVisible: function (e) {
                      Tn.value = e;
                    },
                  },
                  kt
                ),
                {},
                {
                  broker: ee.brokerConfig,
                  showBulletin: Ye,
                  positionController: re,
                  isConditionEntry: Tt,
                  isShowCondStrategy: xr,
                  isInvestCondUser: Et,
                  changeToConditionTab: function () {
                    Ke.handleChangeTab(2);
                  },
                  initForm: function (e) {
                    var t = e;
                    t || (t = zr),
                      t.value === o.ORDER_TYPES.LIMIT
                        ? (Object.assign(Pe.$route.query, {
                            order_type: o.ORDER_TYPES.LIMIT,
                          }),
                          Ze.resetForm())
                        : (Object.assign(Pe.$route.query, {
                            order_type: t.value,
                          }),
                          rr.initOrderFront(!0));
                  },
                  setSelectedKey: tn,
                  conditionOrderTrade: rr,
                  showConditionConfirm: rr.confirmDialog,
                  pageSignAndOrder: rr.pageSignAndOrder,
                  ORDER_TYPES: o.ORDER_TYPES,
                  showTypeGuides: nn,
                  handleTypeGuidesShow: an,
                  handleTypeGuidesHide: on,
                  orderTypePopupList: Kr,
                  orderTypePopupShow: Vr,
                  direction: Zr,
                  positionStyle: Qr,
                  selectedKey: zr,
                  selectedText: Jr,
                  handleDisplayClick: Xr,
                  handleOrderTypeSelect: function (e) {
                    var t;
                    if ((rt && rt.setTradeOrderType(e), !it.value.isGGT)) {
                      var n = Pe.holder,
                        a = {};
                      hr.value &&
                        ((a = {
                          code: Ze.code.value,
                          market: Ze.market.value,
                          name: encodeURIComponent(Ze.name.value),
                        }),
                        (Ot.value = !0));
                      var i = o.INDEPENDENT_PAGE_CONFIG[e.value];
                      try {
                        if (
                          At(e.value, {
                            stockInfo:
                              null == (t = it.value) ? void 0 : t.quote,
                            assetData: je.data.stock,
                          })
                        )
                          return;
                      } catch (e) {}
                      if (i)
                        return (
                          Pe.$router.push({ name: i, query: r({}, a) }),
                          void en()
                        );
                      var u = "";
                      e.value === o.ORDER_TYPES.INVEST &&
                        (u = N.INVEST_COND_SCENE_CONFIG.tradeStock),
                        Pe.$stat.click(
                          "trade.trade.cond.enter_select_".concat(e.value),
                          void 0,
                          void 0,
                          { fchannel_id_fm_i: u }
                        ),
                        Pe.$router.push({
                          name: "TradeStock",
                          query: r(
                            r(r({}, a), n ? { holder: n } : {}),
                            {},
                            { order_type: e.value }
                          ),
                        });
                    }
                  },
                  swiperHeight: Dr,
                  data: je.data,
                  isShowInput: Tr,
                  searching: ur,
                  onSetPrice: he,
                  onSetAmount: function (e) {
                    [
                      o.ORDER_TYPES.LIMIT,
                      o.ORDER_TYPES.ALO,
                      o.ORDER_TYPES.ELO,
                      o.ORDER_TYPES.OLO,
                    ].includes(zr.value)
                      ? (Ze.amount.value = e)
                      : zr.value === o.ORDER_TYPES.PRICE &&
                        a.index.$emit(A.QUOTES_CLICK_AMOUNT_CHANGE, e);
                  },
                  onSwiperChange: function (e) {
                    var t;
                    null == (t = null == Pe ? void 0 : Pe.$forceUpdate) ||
                      t.call(Pe),
                      e.detail.source && Ke.handleChangeTab(e.detail.current);
                  },
                  onForceRefresh: Lr,
                  loading: Ue,
                  setTradeStockBaseInfo: Te,
                  handleClickSearchResult: function (e) {
                    "g" !== e.class
                      ? ((ur.value = !1),
                        (Pe.stockholder || Ze.holder.value) &&
                          ((Pe.stockholder = ""), (Ze.holder.value = "")),
                        Te(e))
                      : Pe.$router.push({
                          type: "redirectTo",
                          name: "TradeDebt",
                          query: { code: e.code, market: e.market },
                        });
                  },
                  onSearchStateChange: function (e) {
                    ur.value = e;
                  },
                  tradeTips: Sr,
                  bullteinTips: gr,
                  showFixedQuote: dr,
                  initMethods: Mt,
                  showFiveTrans: _r,
                  handlerEvoked: me,
                  orderFailReasonType: Fr,
                  currentFailedOrder: Ur,
                  isOrderFailReasonShow: qr,
                  onShowOrderFailReason: function (e, t) {
                    "string" == typeof e &&
                      ((Fr.value = e), (Ur.value = t), (qr.value = !0));
                  },
                  fetchTradeShow: yt,
                  fetchWebsocket: xt,
                },
                Ze
              ),
              {},
              { tradeAuth: nt },
              Ke
            ),
            {},
            {
              ACTION: o.ACTION,
              confirmationConfirm: ne,
              confirmationCancel: function () {
                Ze.showConfirmation.value = !1;
              },
              confirmCfg: wr,
              showFirstTradeConfirm: kr,
              isShowTradeConfirm: Cr,
              doneOrderListExpanded: lr,
              onDoneOrderListExpanded: function (e) {
                (lr.value = e),
                  Pe.$stat.click(
                    "trade.trade.expanded." + (e ? "open" : "close")
                  );
              },
              customerService: Pr,
              toRule: function () {
                Pe.$router.push({ name: "KcbExplain" });
              },
              noPushDataTimer: Bt,
              clearNoTargetPushTimmer: qt,
              cancelValidatePushData: Ut,
              handleToAsset: function () {
                var e,
                  t,
                  n = Pe.code,
                  o = Pe.market,
                  i = Pe.holder;
                a.index.setStorageSync(
                  E.ASSET_BACK_BUTTON,
                  r(
                    {
                      code: n,
                      market: o,
                      holder: i,
                      price: Ze.price.value,
                      amount: Ze.amount.value,
                    },
                    ut.showMinChart.value
                      ? { minChart: ut.showMinChart.value }
                      : {}
                  )
                ),
                  Pe.$stat.click("trade.trade.toasset");
                var u = k.getPrevRoute();
                (
                  null ==
                  (t =
                    null == (e = null == u ? void 0 : u.route)
                      ? void 0
                      : e.includes)
                    ? void 0
                    : t.call(e, "/asset/index")
                )
                  ? a.index.navigateBack()
                  : ae
                  ? Pe.$router.push({ name: "AssetIndex" })
                  : a.index.reLaunch({ url: "/pages/asset/index" });
              },
              handlePullDownRefresh: ue,
              handlePageScroll: function (e) {
                var t = e.scrollTop;
                (Yr.value = e.scrollTop),
                  gr.value && _r.value
                    ? (dr.value = t > 120)
                    : (dr.value = t > 90);
              },
              wujieEnv: Or,
              resetFormFlag: nr,
              embeddedMode: Fe,
              fundaccount: yr,
              goToSafeSetting: de,
              handleToAssetEmbedded: le,
              onShowConfirmDialog: function (e) {
                sr.value = e;
              },
              isShowConfirmDialog: sr,
              onClickHeaderBack: Ee,
              stockCls: Ir,
              onClickDropDown: se,
              simpleMode: De,
              quoteUseSimpleMode: mr,
              quoteInfoLabel: Er,
              closeTradeStock: Se,
              showToggleBrokerPopup: function () {
                Pe.$emit("showToggleBrokerPopup"),
                  Pe.$stat.click("trade.trade.togglebroker_click");
              },
              getUserInfo: ct,
              userinfo: st,
              firstUpdate: Ot,
              initOrderInfo: at,
              resetPriceStrategy: ot,
              resetStore: _e,
              resetDailog: function () {},
              tradeStockStore: Ze,
              goToCreateCond: function (e) {
                var t,
                  r = e.orderType;
                try {
                  if (
                    At(r, {
                      stockInfo: null == (t = it.value) ? void 0 : t.quote,
                      assetData: je.data.stock,
                    })
                  )
                    return;
                } catch (e) {}
                ge(),
                  ae
                    ? setTimeout(function () {
                        Re(r);
                      }, 100)
                    : Re(r);
              },
              handleCreateCond: function () {
                if (
                  (Pe.$stat.click("trade.condition.create_cond_btn_click"),
                  St.value)
                )
                  return (
                    (null == Fe ? void 0 : Fe.value) &&
                      Pe.$sdk.setContainerHeight({
                        height: q.getStrategyHeight(bt.value),
                      }),
                    void (xr.value = !0)
                  );
                Re(o.ORDER_TYPES.PRICE);
              },
              closeCondStrategy: ge,
              hasPageShow: cr,
              hasUsedFullScreenQuery: xe,
              checkQueryConsistency: function (e) {
                try {
                  if (!e.code || !e.market) return;
                  var t = {};
                  Ze.code.value &&
                    Ze.code.value !== e.code &&
                    (t.ext3 = "code:"
                      .concat(Ze.code.value, "!=")
                      .concat(e.code));
                  var n = W.transferMarketToTrade(e.market);
                  if (
                    (Ze.market.value &&
                      Ze.market.value !== n &&
                      (t.ext4 = "market:"
                        .concat(Ze.market.value, "!=")
                        .concat(n)),
                    e.entrust_type)
                  ) {
                    var a =
                      "sell" === e.entrust_type ? o.ACTION.SELL : o.ACTION.BUY;
                    Ze.action.value !== a &&
                      (t.ext5 = "entrust_type:"
                        .concat(Ze.action.value, "!=")
                        .concat(a));
                  }
                  if (e.name) {
                    var i = decodeURIComponent(decodeURIComponent(e.name));
                    Ze.name.value !== i &&
                      (t.ext6 = "name:".concat(Ze.name.value, "!=").concat(i));
                  }
                  Object.keys(t).length > 0 &&
                    J.reportEventSafely(
                      "mon_trade_query_inconsistent",
                      r({}, t)
                    );
                } catch (e) {}
              },
              stockWatchIns: vr,
              clearStockWatchRef: be,
              hasAppEmbeddedHidden: pr,
              hasHalfScreenDisappeared: fr,
              showPositionSwiper: Rr,
              isShowSearchEntry: br,
              isShowSafeSetting: Ar,
              isHalfRefreshIcon: ee.brokerConfig.trade.isHalfRefreshIcon,
              tradeBulletinConfig: Pt,
              hideBulletin: Xt,
              closeBulletin: er,
              bizShowBulletin: zt,
              tradeBulletin: Qt,
              tradeFormBlurHeight: ln,
              tradeFormFocusHeight: dn,
              tradeHalfScreenNormalHeightWithBulletin: sn,
              tradeHalfScreenNormalHeight: vn,
              showBulletinContent: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = "",
                  r = "",
                  n = !1;
                if ("trade" === e)
                  (t = Pt.value.content || ""),
                    (r = Pt.value.title || ""),
                    Pe.$stat.click("trade.trade.trade_bulltin_show_detail");
                else if ("newUser" === e) {
                  var a = C.getPlatform(),
                    o = a.isOEM;
                  (n = !o),
                    (t = Ct.value || ""),
                    Pe.$stat.click(
                      "trade.trade.new_user_guide_bulltin_show_detail"
                    );
                }
                t &&
                  M.Dialog({
                    title: r,
                    message: '<p style="text-align:left;">'.concat(t, "</p>"),
                    messageType: "html",
                    showCancelButton: n,
                    confirmButtonText: n ? "去选股" : "知道了",
                    cancelButtonText: n ? "知道了" : "",
                    context: Pe,
                    onConfirm: function () {
                      n &&
                        (x.stat.click(
                          "trade.trade.new_user_guide_bulltin_to_srategy"
                        ),
                        setTimeout(function () {
                          U.hrefToStrategyIndex();
                        }, 200));
                    },
                  });
              },
              refreshToday: X,
              isErrorTipsHeight: Nr,
              curShowBulletin: tr,
              TRADE_STOCK_NEW_USER_GUIDE: E.TRADE_STOCK_NEW_USER_GUIDE,
              newUserGuideBulltin: Ct,
              closeNewUserGuideBulletin: function () {
                (Ct.value = ""),
                  a.index.setStorageSync(E.TRADE_STOCK_NEW_USER_GUIDE, "1"),
                  Pe.$stat.click("trade.trade.new_user_guide_bulltin_close");
              },
              statTabBar: ze,
              statFullScreen: Je,
              statIframeEmbedded: Xe,
              statPluginEmbedded: et,
              statZxgEmbedded: tt,
              iframeEmbeddedVisible: Oe,
              isTradeReady: ye,
              addGlobalEvents: function () {
                var e, t, r, n;
                a.index.$on("embedded:clickFiveTransPrice", he),
                  a.index.$on("password:show", function () {
                    ce(Date.now());
                  }),
                  a.index.$on("password:hide", function (e) {
                    var t;
                    (e &&
                      e.checkPWDScenes === o.CHECK_PWD_SCENES.continueTrade) ||
                      (Fe.value &&
                        ((t = sr.value
                          ? cn.value
                          : B.getEmbeddedFormHeight({
                              isKeyBoard: Zt.value,
                              isBulletin: tr.value,
                              simpleMode: De.value,
                              version: Gt.value ? "" : "notSplit",
                            })),
                        Pe.$sdk.setContainerHeight({ height: t })));
                  }),
                  a.index.$on("embedded:embeddedClose", function () {
                    var e, t;
                    if (Fe.value && !De.value) {
                      if (Tn.value)
                        return void (
                          null ==
                            (t =
                              null == (e = Pe.$refs)
                                ? void 0
                                : e.classicTradeResult) || t.autoClose()
                        );
                      sr.value && Ee();
                    }
                  }),
                  a.index.$on("hit-predictive", function () {
                    Nt();
                  }),
                  a.index.$on("notify-click", function (e) {
                    e.trade_state === o.TRADE_BASE_STATE.PARTLY ||
                    e.trade_state === o.TRADE_BASE_STATE.PROCESSED
                      ? Ke.handleChangeTab(0)
                      : Ke.handleChangeTab(1);
                  }),
                  h.getIsMpPluginComponent() &&
                    Fe.value &&
                    De.value &&
                    ((null == (e = Pe.$refs) ? void 0 : e.resultRef) ||
                      null ==
                        (n =
                          null ==
                          (r = null == (t = b.aegisReporter) ? void 0 : t.sdk)
                            ? void 0
                            : r.error) ||
                      n.call(r, { msg: "TRADE_RESULT_APPEND_FAIL" }));
              },
              removeGlobalEvents: function () {
                a.index.$off("embedded:clickFiveTransPrice"),
                  a.index.$off("password:show"),
                  a.index.$off("password:hide"),
                  a.index.$off("hit-predictive"),
                  a.index.$off("notify-click"),
                  a.index.$off("embedded:embeddedClose");
              },
              condNum: bt,
              stockInfo: it,
              isClassicTradeSplitMode: Gt,
              getZxgAppABTInfo: Wt,
              condFetchStatus: $t,
              fetchCondList: Lt,
              isTradeV4: Vt,
              pluginSimpleEmbeddedFormStyle: fn,
              pluginSimpleEmbeddedFormHeight: pn,
              handleTradeFormFocus: function () {
                Zt.value = !0;
              },
              handleTradeFormBlur: function () {
                Zt.value = !1;
              },
              currentActiveStock: vt,
              customNotifyStyle: Ve,
              isGGT: jr,
              handleStockHolderChange: function (e) {
                (Ze.tradeAccount.ggt_stockholder_code = e),
                  (Ze.tradeAccount.stockholder_code = e);
                var t = Pe.stockholder;
                (Pe.stockholder = e),
                  (Ze.holder.value = e),
                  t && t !== e && yt();
              },
              exchangeRate: or,
              tradeMode: Ne,
              TRADE_MODE: o.TRADE_MODE,
              switchTradeMode: fe,
              showBubbleTipsFlag4SwitchTradeMode: pt,
              initBubbleTipsFlag4SwitchTradeMode: pe,
              showBubbleTipsFlag4TabBarDropDown: ft,
              onTabClick: function (e) {
                (pt.value = !1), (ft.value = !1), "holding" !== e && ze(e);
              },
              getPasswordingTimeStamp: function () {
                return $e;
              },
              curTradeTabType: Dt,
              TRADE_TAB_TYPE: l.TRADE_TAB_TYPE,
              destroyAssetInnerAudioContext: je.destroyAssetInnerAudioContext,
              checkAndReportStaleRevokingItems:
                je.checkAndReportStaleRevokingItems,
              theme: Ie,
              closeTradePopup: function () {
                var e, t;
                sr.value &&
                  ((Ze.isTrading.value = !1), (Ze.errorTips.value = [])),
                  (Pe.$refs.tradeForm.showConfirmDialog = !1),
                  Tn.value &&
                    (null ==
                      (t =
                        null == (e = Pe.$refs)
                          ? void 0
                          : e.classicTradeResult) ||
                      t.autoClose());
              },
              handleJumpToCond: function () {
                Ot.value = !0;
              },
              getGlobalWrapCtx: ve,
              hasInitAction: mn,
            }
          )
        );
      } catch (e) {
        return J.reportEventSafely("mon_trade_setup_error", { ext3: e }), {};
      }
    },
    mounted: function () {
      var r = this;
      return t(
        e().mark(function t() {
          var n, o;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  r.$emit("compmounted"),
                    (n = C.getPlatform()),
                    (o = n.isZxg) &&
                      r.embeddedMode &&
                      (a.index.$on("App:onHide", r.handleZxgEmbeddedAppHide),
                      a.index.$on("App:onShow", r.handleZxgAppEmbeddedShow)),
                    !h.getIsMpPluginComponent() ||
                      r.embeddedMode ||
                      r.hasPageShow ||
                      r.handleShow(),
                    o &&
                      r.embeddedMode &&
                      (r.getUserInfoInEmbedded(),
                      r.handleShow(),
                      r.getZxgAppABTInfo());
                case 3:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    methods: {
      handleZxgEmbeddedAppHide: function () {
        this.hasAppEmbeddedHidden = !0;
      },
      handleZxgAppEmbeddedShow: function () {
        this.hasAppEmbeddedHidden && (this.loading || this.fetchWebsocket()),
          (this.hasAppEmbeddedHidden = !1);
      },
      reportHalfScreenReappear: function () {
        try {
          if (!this.hasHalfScreenDisappeared) return;
          J.reportEventSafely("mon_trade_half_reappear", {
            ext3: this.code,
            ext4: this.market,
            ext5: JSON.stringify({
              first_update: !!this.firstUpdate,
              trade_mode: this.tradeMode,
              action: this.action,
            }),
          }),
            (this.hasHalfScreenDisappeared = !1);
        } catch (e) {}
      },
      handleShow: function () {
        var r = this;
        return t(
          e().mark(function i() {
            var u, d, l, s, c, v, p, f, T, S, _, g;
            return e().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    if (
                      ((r.hasPageShow = !0),
                      r.checkAndReportStaleRevokingItems("trade_stock"),
                      r.addGlobalEvents(),
                      h.getIsMpPluginComponent() &&
                        ((a.index.getPluginContext = r.getGlobalWrapCtx),
                        a.isEmpty(
                          null == (u = r.tradeStockStore) ? void 0 : u.stock
                        ) && (r.firstUpdate = !0),
                        y.updateStatData()),
                      te.info("on show"),
                      m.updateExpectScheme(["9++7", "10++7", "8++7"]),
                      D.handleMapsBeforeConnect("TradeStock"),
                      r.pageSignAndOrder(),
                      (c = r.$route.query || {}),
                      (v = c.holder),
                      (p = c.order_type),
                      (f = c.trade_params),
                      p &&
                        (r.setSelectedKey(p),
                        [o.ORDER_TYPES.PRICE, o.ORDER_TYPES.INVEST].includes(
                          p
                        ) &&
                          (r.pageSignAndOrder(),
                          r.changeToConditionTab(),
                          null == (d = r.conditionOrderTrade) || d.resetForm(),
                          J.reportEventSafely("mon_trade_cond_logic"))),
                      (T = {}),
                      f)
                    )
                      try {
                        T = JSON.parse(decodeURIComponent(f));
                      } catch (e) {}
                    r.stockholder ||
                      (r.stockholder =
                        v || (null == T ? void 0 : T.holder) || ""),
                      r.embeddedMode
                        ? r.setTradeStockBaseInfo({
                            code: r.embedded_stock,
                            market: r.embedded_market,
                            entrust_type: r.embedded_entrust_type,
                            name: r.embedded_name,
                            df_dqj: r.df_dqj,
                          })
                        : r.hasUsedFullScreenQuery && r.code
                        ? r.checkQueryConsistency(r.$route.query)
                        : (r.setTradeStockBaseInfo(r.$route.query),
                          (r.hasUsedFullScreenQuery = !0));
                    try {
                      (null !=
                        (S = a.index.getStorageSync(
                          E.ASSET_ORDER_LIST_EXPANDED
                        )) &&
                        "" !== S) ||
                        (S = !0),
                        (r.doneOrderListExpanded = S);
                    } catch (e) {}
                    r.stockWatchIns ||
                      (r.stockWatchIns = r.$watch(
                        function () {
                          return "".concat(r.code, ";").concat(r.market);
                        },
                        (function () {
                          var a = t(
                            e().mark(function t(a, i) {
                              var u, d, l, s, c;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((u = a.split(";")),
                                        (d = n(u, 2)),
                                        (l = d[0]),
                                        (s = d[1]),
                                        !l || !s)
                                      ) {
                                        e.next = 12;
                                        break;
                                      }
                                      return (
                                        te.info(
                                          "切换股票: "
                                            .concat(i, " -> ")
                                            .concat(a)
                                        ),
                                        (r.loading = !0),
                                        (c = !1),
                                        i && i !== a && (c = !0),
                                        (e.next = 7),
                                        r.initMethods({
                                          isManualRefresh: !1,
                                          resetFirstUpdate: c,
                                        })
                                      );
                                    case 7:
                                      r.selectedKey !== o.ORDER_TYPES.LIMIT &&
                                        (r.initForm(), (r.resetFormFlag = !0)),
                                        (r.loading = !1),
                                        r.isTradeReady || (r.isTradeReady = !0),
                                        (e.next = 14);
                                      break;
                                    case 12:
                                      return (
                                        (e.next = 14),
                                        r.initMethodsWithoutStock()
                                      );
                                    case 14:
                                      r.$emit("mounted", {
                                        passwordingTimeStamp:
                                          r.getPasswordingTimeStamp(),
                                      });
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e, t) {
                            return a.apply(this, arguments);
                          };
                        })(),
                        { immediate: !0 }
                      )),
                      (null ==
                      (s =
                        null == (l = r.$refs)
                          ? void 0
                          : l.privacyProtocolDialog)
                        ? void 0
                        : s.signProtocolDialog) &&
                        r.$refs.privacyProtocolDialog.signProtocolDialog(),
                      r.showBubbleTipsFlag4SwitchTradeMode &&
                        (_ = setTimeout(function () {
                          (r.showBubbleTipsFlag4SwitchTradeMode = !1),
                            clearTimeout(_);
                        }, 3e3)),
                      r.showBubbleTipsFlag4TabBarDropDown &&
                        (g = setTimeout(function () {
                          (r.showBubbleTipsFlag4TabBarDropDown = !1),
                            clearTimeout(g);
                        }, 2e3));
                  case 9:
                  case "end":
                    return i.stop();
                }
            }, i);
          })
        )();
      },
      initMethodsWithoutStock: function () {
        var r = this;
        return t(
          e().mark(function t() {
            var n, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), r.fetchTradeShow();
                    case 3:
                      (n = e.sent),
                        X.isRequestUnCompleteWhenRoute(n) || r.fetchWebsocket(),
                        X.isRequestUnCompleteWhenRoute(n) &&
                          (X.removeUnCompleteFlag(n),
                          b.aegisReporter.reportEvent(
                            "TRADE_UNCOMPLETE_REQ_WHEN_ROUTE_NOSTOCK"
                          )),
                        (e.next = 11);
                      break;
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        ae &&
                          ((a = V.useNetworkDetect()),
                          (0, a.handleNetworkDetectError)(
                            null,
                            e.t0,
                            function () {
                              r.initMethodsWithoutStock();
                            }
                          )),
                        e.t0)
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 7]]
            );
          })
        )();
      },
      handleUnload: function () {
        var e, t;
        clearTimeout(this.noPushDataTimer),
          null == (e = this.clearNoTargetPushTimmer) || e.call(this),
          null == (t = this.cancelValidatePushData) || t.call(this),
          m.updateExpectScheme([]),
          m.unsubscribe(),
          this.resetStore(),
          this.clearStockWatchRef("unload"),
          this.removeGlobalEvents();
      },
      handleHide: function () {
        var e, t;
        clearTimeout(this.noPushDataTimer),
          null == (e = this.clearNoTargetPushTimmer) || e.call(this),
          null == (t = this.cancelValidatePushData) || t.call(this),
          m.updateExpectScheme([]),
          m.unsubscribe(),
          this.clearStockWatchRef("handleHide"),
          this.removeGlobalEvents();
      },
      getUserInfoInEmbedded: function () {
        var r = this;
        return t(
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), r.getUserInfo();
                    case 3:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      e.t0 = {};
                    case 6:
                      if (
                        ((n = e.t0),
                        a.isEmpty(n) ||
                          -1 !==
                            [
                              o.USERSTATE.HASBUNDLE,
                              o.USERSTATE.HASACCOUNT,
                            ].indexOf(n.userstate))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (w.sdk.notifyUserState(),
                        void (
                          "1" !==
                            (null == window
                              ? void 0
                              : window.__ignore_userstate) &&
                          r.$router.push("/apply/index")
                        ))
                      );
                    case 9:
                      e.next = 13;
                      break;
                    case 11:
                      (e.prev = 11), (e.t1 = e.catch(0));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 11]]
            );
          })
        )();
      },
      halfScreenInit: function () {
        var r = this;
        window.parent.postMessage({ event: "mounted" }, "*"),
          (null == window ? void 0 : window.__embedded_pageWillAppear)
            ? (this.getUserInfoInEmbedded(),
              this.handleShow(),
              this.hasListenPageWillAppear ||
                ((this.iframeEmbeddedVisible = !0), this.statIframeEmbedded()))
            : a.index.$once("embedded:pageWillAppear", function () {
                r.getUserInfoInEmbedded(), r.handleShow();
              }),
          this.hasListenPageWillAppear ||
            (a.index.$on(
              "embedded:pageWillAppear",
              t(
                e().mark(function t() {
                  var n, a, o, i, u;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          r.hasHalfScreenDisappeared &&
                            (r.resetPriceStrategy(),
                            r.reportHalfScreenReappear()),
                            r.initOrderInfo(r.firstUpdate, r.tradeMode),
                            (u = !!(null ==
                            (a = null == (n = r.$refs) ? void 0 : n.tradeForm)
                              ? void 0
                              : a.inputBoxFocus)),
                            (r.isShowCondStrategy ||
                              (r.curShowBulletin &&
                                !r.isShowConfirmDialog &&
                                !u)) &&
                              (r.$sdk.setContainerHeight({
                                height: r.curShowBulletin
                                  ? r.tradeHalfScreenNormalHeightWithBulletin
                                  : r.tradeHalfScreenNormalHeight,
                              }),
                              (r.isShowCondStrategy = !1)),
                            (r.iframeEmbeddedVisible = !0),
                            r.statIframeEmbedded(),
                            (null ==
                            (i =
                              null == (o = null == r ? void 0 : r.$refs)
                                ? void 0
                                : o.tradeForm)
                              ? void 0
                              : i.showAmountPopup) &&
                              (r.$refs.tradeForm.showAmountPopup = !1);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })
              )
            ),
            a.index.$on(
              "embedded:pageWillDisAppear",
              t(
                e().mark(function t() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (r.iframeEmbeddedVisible = !1),
                            (r.hasHalfScreenDisappeared = !0),
                            r.closeTradeStock();
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })
              )
            ),
            (this.hasListenPageWillAppear = !0)),
          C.getPlatform().isZxg && this.embeddedMode && this.statZxgEmbedded();
      },
    },
    onShow: function () {
      var r = this;
      return t(
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  r.embeddedMode
                    ? r.halfScreenInit()
                    : (r.handleShow(), r.statFullScreen());
                case 1:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    beforeUnmount: function () {
      var e, t;
      C.getPlatform().isZxg &&
        this.embeddedMode &&
        (a.index.$off("App:onHide", this.handleZxgEmbeddedAppHide),
        a.index.$off("App:onShow", this.handleZxgAppEmbeddedShow)),
        h.getIsMpPluginComponent() &&
          ((a.index.getPluginContext = null),
          this.embeddedMode && (a.index.getGlobalWrapCtx = null)),
        (null == (e = this.conditionOrderTrade)
          ? void 0
          : e.clearInvestCondTimeout) &&
          this.conditionOrderTrade.clearInvestCondTimeout(),
        this.destroyAssetInnerAudioContext(),
        (this.hasUsedFullScreenQuery = !1),
        null == (t = this.clearReference) || t.call(this);
    },
    onPullDownRefresh: function () {
      var r = this;
      return t(
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  r.handlePullDownRefresh();
                case 1:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    onPageScroll: function (e) {
      this.handlePageScroll(e);
    },
    onUnload: function () {
      this.handleUnload();
    },
    onHide: function () {
      this.handleHide();
    },
  };
};
