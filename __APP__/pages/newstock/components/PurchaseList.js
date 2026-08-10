require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  a = require("../../../model/newstock/useNewStock.js"),
  o = require("../../../model/common/useServerTime.js"),
  c = require("../../../common/components/Dialog/index.js");
require("../../../service/broker.js");
var s = require("../config.js");
require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js");
var i = require("../../../stores/app/useNavbar.js"),
  u = require("../../../config/key.js"),
  l = require("../../../utils/getPlatform.js"),
  p = require("../../../config/broker/11100/index.js"),
  h = {
    name: "PurchaseList",
    components: {
      PurchaseListItem: function () {
        return "./PurchaseListItem.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
      StDivider: function () {
        return "../../../node-modules/@tencent/stock-ui/mp/lib/divider/index.js";
      },
      RegisterRiskPopup: function () {
        return "../../../components/RegisterRiskPopup/index.js";
      },
      ProtocolDialog: function () {
        return "../../../components/ProtocolDialog/ProtocolDialog.js";
      },
    },
    props: { purchaseType: { type: String, default: "" } },
    setup: function (h) {
      var _,
        d = n.getCurrentInstance().proxy,
        f = n.storeToRefs(i.useNavbarStore()),
        P = f.externalNavBar,
        E = f.externalNavBar4Mp,
        T = o.useServerTime().handleMarketOpen,
        v = n.inject("purchaseListData"),
        S = n.inject("purchaseList")(h.purchaseType),
        m = n.inject("orderList")(h.purchaseType),
        C = n.inject("onConfirm"),
        k = n.inject("errorTips")(h.purchaseType),
        g = n.inject("showKcbKzzTip"),
        y = n.inject("selectHandler"),
        A = n.inject("canTrade"),
        b = n.inject("updateTradeStatus"),
        x = n.inject("signNewstockPurchaseRiskProtocol"),
        R = n.ref(!1),
        L = null,
        w = n.ref("新股"),
        D = n.ref("股"),
        Y = n.ref(!1),
        H = n.ref(!1),
        N = n.ref(0),
        U = n.ref(0),
        B = n.ref(""),
        j = n.ref(0),
        W = n.ref(!1),
        q = n.ref(s.RiskCfg.indexTip),
        I = n.ref(s.RiskCfg.confirmTip),
        K = n.ref(s.RiskCfg.confirmTipHeader),
        X = n.ref(!0),
        F = "",
        z = 0;
      l.getPlatform();
      var O = n.computed(function () {
          return S.value.length > 0;
        }),
        M = n.computed(function () {
          return [a.PURCHASE_TYPE.STOCK, a.PURCHASE_TYPE.ALL].includes(
            h.purchaseType
          );
        }),
        Z = n.computed(function () {
          return [a.PURCHASE_TYPE.Debt, a.PURCHASE_TYPE.ALL].includes(
            h.purchaseType
          );
        });
      n.watch(
        function () {
          return h.purchaseType;
        },
        function (e) {
          switch (e) {
            case a.PURCHASE_TYPE.STOCK:
              (w.value = "新股"), (D.value = "股");
              break;
            case a.PURCHASE_TYPE.DEBT:
              (w.value = "新债"), (D.value = "张");
              break;
            default:
              (w.value = ""), (D.value = "");
          }
        },
        { immediate: !0 }
      );
      var $ = n.ref(""),
        G = n.ref(!1);
      function J() {
        var e;
        if (
          (function () {
            var e,
              t =
                (null == (e = p.brokerConfig.hall) ? void 0 : e.newstock) || {},
              r = t.queryByLocalStorage,
              a = void 0 !== r && r,
              o = t.protocolKey;
            return (
              !(void 0 === o ? [] : o).length ||
              (a
                ? n.index.getStorageSync(u.NEWSTOCK_TIPS)
                : !v.needNewStockPurchaseRiskTip)
            );
          })()
        ) {
          var t =
            (r((e = {}), a.PURCHASE_TYPE.STOCK, "stock"),
            r(e, a.PURCHASE_TYPE.DEBT, "debt"),
            r(e, a.PURCHASE_TYPE.ALL, "stock_debt"),
            e);
          if (k.value) W.value = !0;
          else if (((Y.value = !0), h.purchaseType === a.PURCHASE_TYPE.STOCK))
            d.$stat.click("trade.playnew.newstock.entrust");
          else if (h.purchaseType === a.PURCHASE_TYPE.DEBT)
            d.$stat.click("trade.playnew.newbond.entrust");
          else if (h.purchaseType === a.PURCHASE_TYPE.ALL) {
            var o = "";
            m.value.forEach(function (e) {
              "stock_debt" !== o &&
                ((o && o !== t[a.PURCHASE_TYPE.STOCK]) ||
                e.purchase_type === a.PURCHASE_TYPE.DEBT
                  ? (o && o !== t[a.PURCHASE_TYPE.DEBT]) ||
                    e.purchase_type !== a.PURCHASE_TYPE.DEBT
                    ? o && t[e.purchase_type] !== o && (o = "stock_debt")
                    : (o = "debt")
                  : (o = "stock"));
            }),
              ($.value = o),
              d.$stat.click("trade.playnew.today.entrust", void 0, void 0, {
                item_types: $.value,
                all_select: oe.value ? "1" : "0",
              });
          }
        } else G.value = !0;
      }
      function Q() {
        L && (clearTimeout(L), (L = null));
      }
      var V,
        ee,
        te,
        re = n.computed(function () {
          return !!S.value.filter(function (e) {
            return !e._disabled;
          }).length;
        }),
        ne = n.computed(function () {
          return !!S.value.filter(function (e) {
            return e.purchase_type !== a.PURCHASE_TYPE.DEBT && !e._disabled;
          }).length;
        }),
        ae = n.computed(function () {
          return !!S.value.filter(function (e) {
            return e.purchase_type === a.PURCHASE_TYPE.DEBT && !e._disabled;
          }).length;
        }),
        oe = n.computed(function () {
          return (
            re.value &&
            !S.value.some(function (e) {
              return !e._disabled && !e._selected;
            })
          );
        }),
        ce = n.computed(function () {
          if (!ne.value) return !1;
          if (!ae.value) return oe.value;
          var e = !0;
          return (
            (S.value.some(function (e) {
              return (
                !e._disabled &&
                e._selected &&
                e.purchase_type === a.PURCHASE_TYPE.DEBT
              );
            }) ||
              S.value.some(function (e) {
                return (
                  !e._disabled &&
                  !e._selected &&
                  e.purchase_type !== a.PURCHASE_TYPE.DEBT
                );
              })) &&
              (e = !1),
            e
          );
        });
      return (
        !1,
        n.onMounted(
          t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        T({
                          handle: function () {
                            return setTimeout(function () {
                              b();
                            });
                          },
                          unopenDelayExecSec: 5,
                          siestaExec: !0,
                        })
                      );
                    case 2:
                      V = e.sent;
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        ),
        n.onBeforeUnmount(function () {
          Q(), V && (V(), (V = null));
        }),
        {
          PURCHASE_TYPE: a.PURCHASE_TYPE,
          NEW_PURCHASE_TYPE: a.NEW_PURCHASE_TYPE,
          showStock: M,
          showDebt: Z,
          titleText: w,
          unit: D,
          purchaseListData: v,
          hasNewStock: O,
          orderList: m,
          showConfirmDialog: Y,
          canTrade: A,
          updateTradeStatus: b,
          showNewDebtActionSheet: H,
          inputNumIndex: N,
          debtSubmitMaxNum: U,
          debtInputNum: B,
          errorTips: k,
          showErrorDialog: W,
          onRecentPurchase: function (e) {
            h.purchaseType === a.PURCHASE_TYPE.STOCK
              ? d.$stat.click("trade.playnew.newstock.nearplay")
              : h.purchaseType === a.PURCHASE_TYPE.DEBT &&
                d.$stat.click("trade.playnew.newbond.nearplay"),
              d.$router.push({ name: "NewStockDetails", query: { pucode: e } });
          },
          onSelect: function (e, t) {
            var r = e.num,
              n = e.index;
            t === a.NEW_PURCHASE_TYPE.XG_CYB
              ? ((v.purchaseList_xg_cyb[n]._purchaseAmount = r),
                (v.purchaseList_xg_cyb[n]._selected = !0))
              : t === a.NEW_PURCHASE_TYPE.XG_KCB
              ? ((v.purchaseList_xg_kcb[n]._purchaseAmount = r),
                (v.purchaseList_xg_kcb[n]._selected = !0))
              : t === a.NEW_PURCHASE_TYPE.XG_PT &&
                ((v.purchaseList_xg[n]._purchaseAmount = r),
                (v.purchaseList_xg[n]._selected = !0));
          },
          onBuy: J,
          onDialogConfirm:
            ((te = t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((Y.value = !1),
                          (e.t0 = [
                            a.PURCHASE_TYPE.DEBT,
                            a.PURCHASE_TYPE.ALL,
                          ].includes(h.purchaseType)),
                          !e.t0)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 5), g(h.purchaseType);
                      case 5:
                        d.$stat.click(
                          "trade.playnew.today.confirm",
                          void 0,
                          void 0,
                          {
                            item_types: $.value,
                            all_select: oe.value ? "1" : "0",
                          }
                        ),
                          C(h.purchaseType);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )),
            function () {
              return te.apply(this, arguments);
            }),
          onCancel: function () {
            Y.value = !1;
          },
          inputNumDone: function () {
            var e = 0;
            if (0 == +j.value) e = U.value;
            else if (1 == +j.value) {
              if (B.value.length > 0) {
                var t = B.value.charAt(B.value.length - 1);
                if ("0" === B.value || 0 != +t || +B.value > +U.value)
                  return (
                    (B.value = ""),
                    void n.index.showToast({
                      title: "申购数量须为10的倍数，最大不超过".concat(U.value),
                      icon: "none",
                    })
                  );
              }
              if (0 === B.value.length)
                return void n.index.showToast({
                  title: "申购数量须为10的倍数，最大不超过".concat(U.value),
                  icon: "none",
                });
              e = B.value;
            }
            F === a.NEW_PURCHASE_TYPE.XZ_PT
              ? ((v.purchaseList_xz[z]._purchaseAmount = e),
                (v.purchaseList_xz[z]._selected = !0))
              : F === a.NEW_PURCHASE_TYPE.XZ_CYB
              ? ((v.purchaseList_xz_cyb[z]._purchaseAmount = e),
                (v.purchaseList_xz_cyb[z]._selected = !0))
              : F === a.NEW_PURCHASE_TYPE.XZ_KCB &&
                ((v.purchaseList_xz_kcb[z]._purchaseAmount = e),
                (v.purchaseList_xz_kcb[z]._selected = !0)),
              (F = ""),
              (z = ""),
              (B.value = ""),
              (j.value = 0);
          },
          onPickerFunc: function (e) {
            var t = e.type,
              r = e.item,
              n = e.index;
            [
              a.NEW_PURCHASE_TYPE.XZ_PT,
              a.NEW_PURCHASE_TYPE.XZ_CYB,
              a.NEW_PURCHASE_TYPE.XZ_KCB,
            ].includes(t) &&
              ((H.value = r.max_purchase_quantity > 0),
              (z = n),
              (F = t),
              (U.value = r.max_purchase_quantity));
          },
          radioChange: function (e) {
            var t;
            (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value) &&
              ((j.value = +e.detail.value),
              "1" === e.detail.value &&
                (Q(),
                (L = setTimeout(function () {
                  R.value = !0;
                }, 300))));
          },
          handleInputFocus: function () {},
          handleInputBlur: function () {
            B.value.length > 0 &&
              (0 != +B.value.charAt(B.value.length - 1) ||
                +B.value > +U.value) &&
              (B.value = "");
          },
          isAccountSettingShow: !1,
          navToSetting: function () {
            d.$router.push({ name: "AccountSetting" });
          },
          isAllSelected: oe,
          hasAnyCanApply: re,
          hasStockCanApply: ne,
          isOnlyStockSelected: ce,
          debtInputFocus: R,
          selectRadioIndex: j,
          bottomSelect: function (e) {
            e === a.PURCHASE_TYPE.ALL && re.value
              ? (y(a.PURCHASE_TYPE.ALL, !oe.value),
                d.$stat.click(
                  "trade.playnew.bottom.all." +
                    (oe.value ? "select" : "unselect")
                ))
              : e === a.PURCHASE_TYPE.STOCK &&
                ne.value &&
                (y(a.PURCHASE_TYPE.STOCK, !ce.value),
                d.$stat.click(
                  "trade.playnew.bottom.only_stock." +
                    (ce.value ? "select" : "unselect")
                ));
          },
          idxRiskTip: q,
          confirmTip: I,
          confirmTipHeader: K,
          confirmTipFold: X,
          onRiskTipLink: function () {},
          externalNavBar: P,
          externalNavBar4Mp: E,
          showRiskProtocolDialogFlag: G,
          brokerConifg:
            (null == (_ = p.brokerConfig.hall) ? void 0 : _.newstock) || {},
          signRiskProtocol:
            ((ee = t(
              e().mark(function t() {
                var r, a, o, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a =
                              (null == (r = p.brokerConfig.hall)
                                ? void 0
                                : r.newstock) || {}),
                            (o = a.queryByLocalStorage),
                            (s = void 0 !== o && o),
                            (G.value = !1),
                            (e.prev = 2),
                            !s)
                          ) {
                            e.next = 7;
                            break;
                          }
                          n.index.setStorageSync(u.NEWSTOCK_TIPS, "1"),
                            (e.next = 9);
                          break;
                        case 7:
                          return (e.next = 9), x();
                        case 9:
                          J(), (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(2)),
                            c.Dialog({
                              message: e.t0.retmsg || "网络繁忙 请稍后再试",
                            });
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 12]]
                );
              })
            )),
            function () {
              return ee.apply(this, arguments);
            }),
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("PurchaseListItem") +
    n.resolveComponent("Empty") +
    n.resolveComponent("st-divider") +
    n.resolveComponent("MpDialog") +
    n.resolveComponent("action-sheet") +
    n.resolveComponent("RegisterRiskPopup") +
    n.resolveComponent("ProtocolDialog")
  )(),
  Math ||
    (
      function () {
        return "../../../components/Empty/Empty.js";
      } +
      function () {
        return "../../../components/ProtocolDialog/ProtocolDialog.js";
      }
    )();
var _ = n._export_sfc(h, [
  [
    "render",
    function (e, t, r, a, o, c) {
      return n.e(
        { a: a.hasNewStock },
        a.hasNewStock
          ? n.e(
              {
                b: a.purchaseListData.purchaseList_xg.length > 0 && a.showStock,
              },
              a.purchaseListData.purchaseList_xg.length > 0 && a.showStock
                ? {
                    c: n.o(a.onPickerFunc),
                    d: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XG_PT);
                    }),
                    e: n.p({
                      "purchase-list": a.purchaseListData.purchaseList_xg,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XG_PT,
                      "title-str": "普通新股",
                      "market-str": "P",
                    }),
                  }
                : {},
              {
                f:
                  a.purchaseListData.purchaseList_xg_cyb.length > 0 &&
                  a.showStock,
              },
              a.purchaseListData.purchaseList_xg_cyb.length > 0 && a.showStock
                ? {
                    g: n.o(a.onPickerFunc),
                    h: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XG_CYB);
                    }),
                    i: n.p({
                      "purchase-list": a.purchaseListData.purchaseList_xg_cyb,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XG_CYB,
                      "title-str": "创业板新股",
                      "market-str": "创",
                    }),
                  }
                : {},
              {
                j:
                  a.purchaseListData.purchaseList_xg_kcb.length > 0 &&
                  a.showStock,
              },
              a.purchaseListData.purchaseList_xg_kcb.length > 0 && a.showStock
                ? {
                    k: n.o(a.onPickerFunc),
                    l: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XG_KCB);
                    }),
                    m: n.p({
                      "purchase-list": a.purchaseListData.purchaseList_xg_kcb,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XG_KCB,
                      "title-str": "科创板新股",
                      "market-str": "科",
                    }),
                  }
                : {},
              {
                n: a.purchaseListData.purchaseList_xz.length > 0 && a.showDebt,
              },
              a.purchaseListData.purchaseList_xz.length > 0 && a.showDebt
                ? {
                    o: n.o(a.onPickerFunc),
                    p: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XZ_PT);
                    }),
                    q: n.p({
                      "purchase-list": a.purchaseListData.purchaseList_xz,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XZ_PT,
                      "title-str": "普通新债",
                      "market-str": "P",
                    }),
                  }
                : {},
              {
                r:
                  a.purchaseListData.purchaseList_xz_cyb.length > 0 &&
                  a.showDebt,
              },
              a.purchaseListData.purchaseList_xz_cyb.length > 0 && a.showDebt
                ? {
                    s: n.o(a.onPickerFunc),
                    t: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XZ_CYB);
                    }),
                    v: n.p({
                      "title-str": "创业板新债",
                      "purchase-list": a.purchaseListData.purchaseList_xz_cyb,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XZ_CYB,
                      "market-str": "创",
                    }),
                  }
                : {},
              {
                w:
                  a.purchaseListData.purchaseList_xz_kcb.length > 0 &&
                  a.showDebt,
              },
              a.purchaseListData.purchaseList_xz_kcb.length > 0 && a.showDebt
                ? {
                    x: n.o(a.onPickerFunc),
                    y: n.o(function (e) {
                      return a.onSelect(e, a.NEW_PURCHASE_TYPE.XZ_KCB);
                    }),
                    z: n.p({
                      "purchase-list": a.purchaseListData.purchaseList_xz_kcb,
                      "new-purchase-type": a.NEW_PURCHASE_TYPE.XZ_KCB,
                      "title-str": "科创板新债",
                      "market-str": "科",
                    }),
                  }
                : {},
              { A: a.idxRiskTip },
              a.idxRiskTip ? { B: n.t(a.idxRiskTip) } : {}
            )
          : !1 === a.hasNewStock
          ? n.e(
              {
                D: n.p({
                  text: "今日无".concat(a.titleText || "新股/新债", "申购"),
                }),
                E: a.purchaseListData.afterPurchaseList.length,
              },
              a.purchaseListData.afterPurchaseList.length
                ? n.e(
                    {
                      F: n.f(
                        a.purchaseListData.afterPurchaseList,
                        function (t, r, o) {
                          return n.e(
                            {
                              a: n.t(t.name),
                              b: n.t(t.code),
                              c: n.t(e.$filters.marketId(t.market, ".")),
                              d: "2" == t.purchase_type,
                            },
                            (t.purchase_type, {}),
                            {
                              e: n.t(
                                t.issue_price &&
                                  "-" != t.issue_price &&
                                  "0" != t.issue_price &&
                                  "0.00" != t.issue_price
                                  ? t.issue_price + "元"
                                  : "--"
                              ),
                              f: n.t(
                                e.$filters.time.format(t.purchase_date, "MM-DD")
                              ),
                              g: r,
                              h: n.o(function (e) {
                                return a.onRecentPurchase(t.purchase_code);
                              }, r),
                            }
                          );
                        }
                      ),
                      G: a.idxRiskTip,
                    },
                    a.idxRiskTip ? { H: n.t(a.idxRiskTip) } : {}
                  )
                : {}
            )
          : {},
        { C: !1 === a.hasNewStock, I: a.hasNewStock },
        a.hasNewStock
          ? {
              J: a.isAllSelected ? 1 : "",
              K: a.hasAnyCanApply ? "" : 1,
              L: n.n(a.hasAnyCanApply ? "text-color-1" : "text-color-5"),
              M: n.o(function (e) {
                return a.bottomSelect(a.PURCHASE_TYPE.ALL);
              }),
              N: a.isOnlyStockSelected ? 1 : "",
              O: a.hasStockCanApply ? "" : 1,
              P: n.n(a.hasStockCanApply ? "text-color-1" : "text-color-5"),
              Q: n.o(function (e) {
                return a.bottomSelect(a.PURCHASE_TYPE.STOCK);
              }),
              R: n.t(
                a.hasAnyCanApply ? "(".concat(a.orderList.length, ")") : ""
              ),
              S: !a.canTrade,
              T: n.o(function () {
                return a.onBuy && a.onBuy.apply(a, arguments);
              }),
            }
          : {},
        { U: a.isAccountSettingShow },
        a.isAccountSettingShow
          ? {
              V: n.o(function () {
                return a.navToSetting && a.navToSetting.apply(a, arguments);
              }),
            }
          : {},
        {
          W: n.t(a.titleText || "详情"),
          X: n.f(a.orderList, function (e, t, r) {
            return {
              a: n.t(e.name),
              b: n.t(e._purchaseAmount),
              c: n.t(
                a.unit ||
                  (e.purchase_type !== a.PURCHASE_TYPE.DEBT ? "股" : "张")
              ),
              d: t,
            };
          }),
          Y: a.confirmTip,
        },
        a.confirmTip
          ? {
              Z: n.t(a.confirmTipHeader),
              aa: n.t(a.confirmTip),
              ab: a.confirmTipFold ? "" : 1,
              ac: n.t(a.confirmTipFold ? "展开" : "收起"),
              ad: n.o(function (e) {
                return (a.confirmTipFold = !a.confirmTipFold);
              }),
            }
          : {},
        {
          ae: n.o(a.onDialogConfirm),
          af: n.o(a.onCancel),
          ag: n.p({
            visible: a.showConfirmDialog,
            "confirm-button-text": "申购",
            "show-cancel-button": !0,
          }),
          ah: n.t(a.debtSubmitMaxNum),
          ai: 0 === a.selectRadioIndex,
          aj: a.debtInputFocus,
          ak: "10的倍数，最大" + a.debtSubmitMaxNum,
          al: n.o(function () {
            return a.handleInputBlur && a.handleInputBlur.apply(a, arguments);
          }),
          am: n.o(function () {
            return a.handleInputFocus && a.handleInputFocus.apply(a, arguments);
          }),
          an: a.debtInputNum,
          ao: n.o(function (e) {
            return (a.debtInputNum = e.detail.value);
          }),
          ap: 1 === a.selectRadioIndex,
          aq: n.o(function () {
            return a.radioChange && a.radioChange.apply(a, arguments);
          }),
          ar: n.o(function (e) {
            return (a.showNewDebtActionSheet = e);
          }),
          as: n.o(a.inputNumDone),
          at: n.p({
            value: a.showNewDebtActionSheet,
            title: "申购数量",
            subtitle: a.purchaseListData.convAllocateAvg
              ? "近5次新债打新，申购10张中签率为" +
                a.purchaseListData.convAllocateAvg +
                "%"
              : "",
            "picker-style": !0,
            "close-button": !0,
          }),
          av: n.o(function (e) {
            return (a.showErrorDialog = !1);
          }),
          aw: n.p({ visible: a.showErrorDialog, message: a.errorTips }),
          ax: n.p({ type: "daxin" }),
          ay: n.o(a.signRiskProtocol),
          az: n.o(function (e) {
            return (a.showRiskProtocolDialogFlag = !1);
          }),
          aA: n.p({
            visible: a.showRiskProtocolDialogFlag,
            protocols: a.brokerConifg.protocolKey || [],
            "preview-content": a.brokerConifg.previewProtocol || !1,
            "prefix-content":
              "为了更好的使用打新功能，请了解相关业务/产品的规则和风险，且同意并签署",
          }),
          aB: a.hasNewStock ? 1 : "",
          aC: a.externalNavBar4Mp || a.externalNavBar ? 1 : "",
        }
      );
    },
  ],
]);
wx.createComponent(_);
