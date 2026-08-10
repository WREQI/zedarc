require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  a = require("../../config/enum.js"),
  i = require("../../filters/postfix.js"),
  u = require("../../model/index/useHideFund.js"),
  c = require("../../common/components/Dialog/index.js"),
  s = require("../../model/trade/utils.js"),
  d = require("../../model/trade/useCancelOrder.js"),
  T = require("../../service/stat/mp-weixin.js"),
  l = require("../../components/ValueColor/utils.js"),
  _ = require("../../stores/app/useMode.js"),
  f = require("../../model/common/useServerTime.js"),
  m = require("../../service/aegis/platform/not-wujie.js"),
  v = require("./v2/useLongPress.js"),
  y = require("../../service/aegis/utils.js"),
  p = require("../../common/utils/colorHelper.js"),
  A = new Set(),
  g = {
    components: {},
    props: {
      type: {
        type: String,
        default: "done",
        validator: function (e) {
          return ["pending", "done"].indexOf(e) > -1;
        },
      },
      fields: {
        type: Array,
        default: function () {
          return [];
        },
      },
      orderList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (g, h) {
      var k,
        R = o.getCurrentInstance().proxy,
        E = o.inject("assetIndexComp"),
        q = o.inject("pageAssetIndexContext"),
        K = o.inject("revokingItemsMaps"),
        S = d.useCancelOrder().cancelOrder,
        C = u.useHideFund().hidefund,
        I = o.ref({}),
        x = o.ref({}),
        D = o.ref(null),
        b = o.inject("embeddedMode"),
        O = _.useModeStore(),
        L = o.storeToRefs(O).simpleMode,
        N = v.useLongPress(50),
        M = N.longPressActiveKey,
        G = N.onTouchstart,
        F = N.onTouchmove,
        w = N.onTouchcancel,
        j = N.clearLongPressActiveStatus,
        B = v.useLongPress(50),
        P = B.longPressActiveKey,
        U = B.onTouchstart,
        Y = B.onTouchmove,
        Q = B.onTouchcancel,
        H = B.clearLongPressActiveStatus;
      function $(e) {
        return -1 < K.value[e.uniqueKey] || e.isRevoking;
      }
      function X(e, t) {
        x.value[e] ||
          (x.value[e] = {
            hasRevokingFlagRecordTime: 0,
            revokingItemsRecordTime: 0,
          }),
          (x.value[e][t] = Date.now());
      }
      function J(e) {
        var t = R.$route.name;
        "AssetIndex" === t
          ? T.stat.click("trade.asset.".concat(e))
          : ["TradeStock", "TradeStockNew", "TradeEmbedded"].includes(t)
          ? T.stat.click("trade.trade.".concat(e))
          : T.stat.click("trade.other.".concat(e));
      }
      function z(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "28";
        return (String(e).length || 0) > t ? "fs-".concat(n) : "";
      }
      return (
        o.watch(
          function () {
            return g.orderList;
          },
          function (e) {
            try {
              if (!Array.isArray(e)) return;
              e.forEach(function (e) {
                var t;
                (null == e ? void 0 : e.isAfterTrade) &&
                  e.trade_state ===
                    (null == (t = a.TRADE_STATE[e.stock_type])
                      ? void 0
                      : t.FAILED) &&
                  !A.has(e.uniqueKey) &&
                  (A.add(e.uniqueKey),
                  y.reportEventSafely("mon_trade_after_invalid", {
                    ext1: e.code,
                    ext2: e.dqj,
                    ext3: e.trade_time,
                  }));
              });
            } catch (e) {}
          },
          { immediate: !0 }
        ),
        {
          ACTION: a.ACTION,
          TARGET: a.TARGET,
          TRADE_STATE: a.TRADE_STATE,
          TRADE_STATE_TEXT: a.TRADE_STATE_TEXT,
          hidefund: C,
          orderFailReason: D,
          _isRevoking: $,
          showInfoIcon: function (e) {
            return (
              [
                a.TRADE_STATE[e.stock_type].PARTLY,
                a.TRADE_STATE[e.stock_type].NOTTRADEED,
                a.TRADE_STATE[e.stock_type].FAILED,
              ].indexOf(s.getFinalTradeState(e)) > -1
            );
          },
          onCancelOrder:
            ((k = r(
              n().mark(function e(t) {
                var r, o, i, u, s, d, T, l, _;
                return n().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = t.uniqueKey),
                            (function (e) {
                              try {
                                var t = e.uniqueKey,
                                  n = x.value[t];
                                if (!n) return !1;
                                var r = Date.now();
                                if (
                                  !0 === K.value[t] &&
                                  n.revokingItemsRecordTime &&
                                  r - n.revokingItemsRecordTime > 2e4
                                ) {
                                  var o = r - n.revokingItemsRecordTime;
                                  delete K.value[t],
                                    (n.revokingItemsRecordTime = 0),
                                    !0,
                                    y.reportEventSafely(
                                      "mon_trade_revoking_state_timeout_reset",
                                      {
                                        ext1: t,
                                        ext2: "revokingItems",
                                        ext3: String(o),
                                      }
                                    );
                                }
                                if (
                                  !0 === I.value[t] &&
                                  n.hasRevokingFlagRecordTime &&
                                  r - n.hasRevokingFlagRecordTime > 2e4
                                ) {
                                  var a = r - n.hasRevokingFlagRecordTime;
                                  (I.value[t] = !1),
                                    (n.hasRevokingFlagRecordTime = 0),
                                    !0,
                                    y.reportEventSafely(
                                      "mon_trade_revoking_state_timeout_reset",
                                      {
                                        ext1: t,
                                        ext2: "hasRevokingFlag",
                                        ext3: String(a),
                                      }
                                    );
                                }
                              } catch (e) {
                                return !1;
                              }
                            })(t),
                            !$(t))
                          ) {
                            e.next = 6;
                            break;
                          }
                          (o = (function (e) {
                            var t = -1 < K.value[e.uniqueKey],
                              n = !!e.isRevoking;
                            return t && n
                              ? "both"
                              : t
                              ? "frontend"
                              : n
                              ? "backend"
                              : "";
                          })(t)),
                            (i = x.value[r]),
                            (u = (
                              null == i ? void 0 : i.revokingItemsRecordTime
                            )
                              ? String(Date.now() - i.revokingItemsRecordTime)
                              : ""),
                            y.reportEventSafely(
                              "mon_trade_cancel_revoking_blocked",
                              { ext1: r, ext2: o, ext3: u }
                            ),
                            (e.next = 28);
                          break;
                        case 6:
                          if (!I.value[r]) {
                            e.next = 11;
                            break;
                          }
                          (s = x.value[r]),
                            (d = (
                              null == s ? void 0 : s.hasRevokingFlagRecordTime
                            )
                              ? String(Date.now() - s.hasRevokingFlagRecordTime)
                              : ""),
                            y.reportEventSafely(
                              "mon_trade_cancel_flag_blocked",
                              { ext1: r, ext2: d }
                            ),
                            (e.next = 28);
                          break;
                        case 11:
                          return (
                            (I.value[r] = !0),
                            X(r, "hasRevokingFlagRecordTime"),
                            J("cancelorder"),
                            (e.prev = 12),
                            (T = t.market),
                            (e.next = 16),
                            f.useServerTime().getServerTime()
                          );
                        case 16:
                          return (
                            (l = e.sent),
                            (_ = l.marketState),
                            J("cancel_time"),
                            (e.next = 21),
                            S(t, _, E, q, {
                              onBeforeSubmit: function () {
                                if (
                                  -1 ===
                                    [
                                      a.MARKET_STATE.OPEN_AUCTION_NOT_CANCEL,
                                      a.MARKET_STATE.CLOSE_AUCTION,
                                    ].indexOf(_[T]) ||
                                  (_[T] === a.MARKET_STATE.CLOSE_AUCTION &&
                                    (null == t ? void 0 : t.stock_type) ===
                                      a.TARGET.DEBT)
                                ) {
                                  (K.value[r] = !0),
                                    X(r, "revokingItemsRecordTime");
                                  var e = g.orderList.find(function (e) {
                                    return e.uniqueKey === r;
                                  });
                                  e && (e.cancelSubmited = !0);
                                }
                              },
                            })
                          );
                        case 21:
                          h.emit("cancelOrder"), (e.next = 27);
                          break;
                        case 24:
                          (e.prev = 24),
                            (e.t0 = e.catch(12)),
                            delete K.value[r],
                            "PASSWORD_CANCEL" !== e.t0.retcode &&
                              "DIALOG_CANCEL" !== e.t0.retcode &&
                              c.Dialog({ message: e.t0.retmsg }),
                            (e.t0 && e.t0.retcode) ||
                              y.reportEventSafely("mon_trade_cancel_fail", {
                                ext3: e.t0,
                              });
                        case 27:
                          I.value[r] = !1;
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[12, 24]]
                );
              })
            )),
            function (e) {
              return k.apply(this, arguments);
            }),
          onExplain: function (e) {
            var t;
            (t =
              "2" === e.can_cancel ||
              e.trade_state === a.TRADE_STATE[e.stock_type].PARTLY
                ? "1"
                : "2"),
              h.emit("showFailReason", t, e);
          },
          toHq: function (e) {
            j(),
              H(),
              b.value
                ? J("history.click")
                : [a.TARGET.ALLOCATE_DEBT].indexOf(e.stock_type) > -1 ||
                  (J("history.click"),
                  [a.TARGET.DUOTIANQI, a.TARGET.BALANCE].indexOf(e.stock_type) >
                  -1
                    ? "0" === e.balance_time_limit
                      ? R.$router.push({ name: "ProductJiaXinBao" })
                      : R.$router.push({ name: "ProductDuoTianQi" })
                    : o.index.navToQuote(
                        t(
                          t({}, e),
                          {},
                          { isDebt: e.stock_type === a.TARGET.DEBT }
                        )
                      ));
          },
          hasRevokingFlagMap: I,
          orderStateText: function (e) {
            var t =
              a.TRADE_STATE_TEXT[e.stock_type][s.getFinalTradeState(e)] ||
              "未知";
            return (
              e.isAfterTrade &&
                e.trade_state === a.TRADE_STATE[a.TARGET.STOCK].WATITING &&
                (t = "待盘后交易"),
              t
            );
          },
          sholdShowTradeTime: function (e) {
            if (
              e.stock_type === a.TARGET.DUOTIANQI &&
              e.trade_type === a.ACTION.BUY
            )
              return !1;
          },
          redOrGreen: p.redOrGreen,
          adaptFontSize: l.adaptFontSize,
          simpleMode: L,
          getTitleClassName: function (e) {
            var t =
                e.trade_type === a.ACTION.ALLOT && e.pgname ? e.pgname : e.name,
              n = (null == t ? void 0 : t.length) || 0,
              r = L.value ? 4 : 6,
              o = "";
            if (n > (L.value ? 5 : 7)) o = "24";
            else {
              if (!(n > r)) return "";
              o = "28";
            }
            return "fs-".concat(o, " no-line-height");
          },
          getCodeClassName: function (e) {
            var t =
              e.trade_type === a.ACTION.ALLOT && e.pgcode ? e.pgcode : e.code;
            return ((null == t ? void 0 : t.length) || 0) > 6 ? "fs-18" : "";
          },
          adaptFsByCharLen: z,
          adaptFsByCharDiffLen: function (t) {
            for (
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                r = ["24", "28"],
                o = e(n).sort(function (e, t) {
                  return t - e;
                }),
                a = 0;
              a < o.length && a < 2;
              a++
            ) {
              var i = z(t, o[a], r[a]);
              if (i) return i;
            }
            return "";
          },
          getFirst: function (e) {
            return L.value ? e.slice(0, 1) : e;
          },
          actionText: function (e) {
            return (
              (a.ACTION_TEXT[e.stock_type] || a.ACTION_TEXT[a.TARGET.STOCK])[
                e.trade_type
              ] || "未知"
            );
          },
          price: function (e, t) {
            switch (e.stock_type) {
              case a.TARGET.DEBT:
              case a.TARGET.DUOTIANQI:
                return i.postfix(t, "%");
              default:
                return t;
            }
          },
          orderAmont: function (e) {
            switch (e.stock_type) {
              case a.TARGET.DEBT:
              case a.TARGET.DUOTIANQI:
                return "".concat(
                  o.__CJS__export_default__.toCurrency(e.trade_money || 0, 0)
                );
              default:
                return e.trade_num || 0;
            }
          },
          matchAmont: function (e) {
            switch (e.stock_type) {
              case a.TARGET.DEBT:
              case a.TARGET.DUOTIANQI:
                return "".concat(
                  o.__CJS__export_default__.toCurrency(e.total_agree || 0, 0)
                );
              default:
                return e.match_num || 0;
            }
          },
          unit: function (e, t) {
            return e + a.TARGET_UNIT[t.stock_type];
          },
          toDetail: function (e) {
            if ((j(), H(), b.value)) J("history.click");
            else {
              if (
                (T.stat.click("trade.asset.entrust.detail.click"),
                [a.TARGET.DUOTIANQI, a.TARGET.BALANCE].indexOf(e.stock_type) >
                  -1)
              )
                return "0" === e.balance_time_limit
                  ? void R.$router.push({
                      name: "ProductJiaXinBaoIncomeRecordDetailNew",
                      query: {
                        code: e.code,
                        name: e.name,
                        id: e.contract_no,
                        order_date: o.dayjs(e.trade_time).format("YYYYMMDD"),
                        balance_status: e.balance_status,
                        mode: "cgi",
                      },
                    })
                  : void R.$router.push({
                      name: "ProductDuoTianQiTradeRecordDetail",
                      query: {
                        contract_no: e.contract_no,
                        order_date: o.dayjs(e.trade_time).format("YYYYMMDD"),
                        balance_status: e.balance_status,
                      },
                    });
              if ([a.TARGET.DEPOSITE, a.TARGET.NEWSTOCK].includes(e.stock_type))
                m.aegisReporter.reportEvent(
                  "ASSET-INDEX-TODAY-UNEXPECTED-TYPE",
                  { ext2: e.stock_type }
                );
              else {
                var n = {
                  type: e.stock_type,
                  id: e.trans_id,
                  no: e.contract_no,
                  time: e.trade_time,
                  market: e.market || e.type,
                  code: e.code,
                  name: e.name,
                };
                e.stock_type === a.TARGET.DEBT &&
                  +e.balance_status > -1 &&
                  (n = t(t({}, n), {}, { balance_status: e.balance_status })),
                  R.$router.push({ name: "TradeDetail", query: n });
              }
            }
          },
          longPressActiveKey: M,
          onTouchstart: G,
          onTouchmove: F,
          onTouchcancel: w,
          longPressActiveKey4Left: P,
          onTouchstart4Left: U,
          onTouchmove4Left: Y,
          onTouchcancel4Left: Q,
          embeddedMode: b,
          MARKET: a.MARKET,
          showCancelModal: function () {
            c.Dialog({
              title: "",
              message:
                '<p style="text-align:left;">在9:25-9:30及11:30-13:00，交易所接受撤单申报但不马上执行，状态为撤单中，在9:30或13:00开市后若订单未成交会执行撤单；<br />如盘中委托未成交，在收市后点撤单会出现撤单中状态，但撤单不会执行，订单在晚上清算后会自动取消。</p>',
              messageType: "html",
              showCancelButton: !1,
              confirmButtonText: "我知道了",
              onConfirm: function () {
                T.stat.click("trade.asset.cancel_order_expain_confirm_click");
              },
            }),
              T.stat.click("trade.asset.cancel_order_expain_exposed");
          },
        }
      );
    },
  };
Array || o.resolveComponent("MarketLabel")(), Math;
var h = o._export_sfc(g, [
  [
    "render",
    function (e, t, n, r, a, i) {
      return {
        a: o.f(n.orderList, function (t, a, i) {
          return o.e(
            r.hidefund
              ? {}
              : o.e(
                  {
                    a: o.t(r.getFirst(r.actionText(t))),
                    b: o.n("action-" + t.trade_type),
                    c: o.n("stock-" + t.stock_type),
                    d: !r.simpleMode && t.isAfterTrade,
                  },
                  !r.simpleMode && t.isAfterTrade
                    ? {
                        e: o.n(
                          t.trade_type === r.ACTION.AFTER_BUY ? "buy" : "sell"
                        ),
                      }
                    : {}
                ),
            {
              f: o.o(function (e) {
                return r.toHq(t);
              }, t.uniqueKey),
              g: o.o(function (e) {
                return r.onTouchstart4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              h: o.o(function (e) {
                return r.onTouchmove4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              i: o.o(function (e) {
                return r.onTouchcancel4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              j: o.o(function (e) {
                return r.onTouchcancel4Left(e, t.uniqueKey);
              }, t.uniqueKey),
            },
            r.hidefund
              ? {}
              : o.e(
                  {
                    k: o.t(
                      t.trade_type === r.ACTION.ALLOT && t.pgname
                        ? t.pgname
                        : t.name
                    ),
                    l: o.n(r.getTitleClassName(t)),
                    m: r.simpleMode,
                  },
                  r.simpleMode
                    ? {
                        n: "bacf4dcf-0-" + i,
                        o: o.p({ market: t.market }),
                        p: o.t(
                          t.trade_type === r.ACTION.ALLOT && t.pgcode
                            ? t.pgcode
                            : t.code
                        ),
                        q: o.n(r.getCodeClassName(t)),
                      }
                    : {
                        r: o.t(
                          t.trade_type === r.ACTION.ALLOT && t.pgcode
                            ? t.pgcode
                            : t.code
                        ),
                        s: o.t(e.$filters.marketId(t.market, ".")),
                      }
                ),
            {
              t: o.o(function (e) {
                return r.toHq(t);
              }, t.uniqueKey),
              v: o.o(function (e) {
                return r.onTouchstart4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              w: o.o(function (e) {
                return r.onTouchmove4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              x: o.o(function (e) {
                return r.onTouchcancel4Left(e, t.uniqueKey);
              }, t.uniqueKey),
              y: o.o(function (e) {
                return r.onTouchcancel4Left(e, t.uniqueKey);
              }, t.uniqueKey),
            },
            r.hidefund
              ? {}
              : o.e(
                  {
                    z: o.t(
                      e.$filters.defaults(r.price(t, t.order_price), "--")
                    ),
                    A: o.n(
                      r.adaptFsByCharLen(
                        e.$filters.defaults(r.price(t, t.order_price), "--")
                      )
                    ),
                    B: t.stock_type != r.TARGET.DUOTIANQI,
                  },
                  t.stock_type != r.TARGET.DUOTIANQI
                    ? { C: o.t(e.$filters.defaults(r.price(t, t.dqj), "--")) }
                    : {}
                ),
            {
              D: o.o(function (e) {
                return r.onTouchstart(e, t.uniqueKey);
              }, t.uniqueKey),
              E: o.o(function (e) {
                return r.onTouchmove(e, t.uniqueKey);
              }, t.uniqueKey),
              F: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
              G: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
            },
            r.hidefund
              ? {}
              : {
                  H: o.t(r.orderAmont(t)),
                  I: o.n(r.adaptFsByCharDiffLen(r.orderAmont(t), [4, 6])),
                  J: o.t(r.matchAmont(t)),
                },
            {
              K: o.o(function (e) {
                return r.onTouchstart(e, t.uniqueKey);
              }, t.uniqueKey),
              L: o.o(function (e) {
                return r.onTouchmove(e, t.uniqueKey);
              }, t.uniqueKey),
              M: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
              N: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
            },
            r.hidefund
              ? {}
              : o.e(
                  { O: t.isRevokable || r._isRevoking(t) },
                  t.isRevokable || r._isRevoking(t)
                    ? {
                        P: o.t(r._isRevoking(t) ? "撤单中" : "撤单"),
                        Q:
                          r.hasRevokingFlagMap[t.uniqueKey] || r._isRevoking(t)
                            ? 1
                            : "",
                        R: o.o(function (e) {
                          return r.onCancelOrder(t);
                        }, t.uniqueKey),
                      }
                    : {},
                  { S: !t.isRevokable && !r._isRevoking(t) },
                  t.isRevokable || r._isRevoking(t)
                    ? {}
                    : o.e(
                        { T: o.t(r.orderStateText(t)), U: r.showInfoIcon(t) },
                        r.showInfoIcon(t)
                          ? {
                              V: o.o(function (e) {
                                return r.onExplain(t);
                              }, t.uniqueKey),
                            }
                          : {},
                        {
                          W: o.n(r.adaptFsByCharLen(r.orderStateText(t), 4)),
                          X: o.n(r.showInfoIcon(t) ? "fs-24" : ""),
                        }
                      ),
                  {
                    Y: o.t(e.$filters.time.format(t.trade_time, "HH:mm:ss")),
                    Z:
                      !t.isRevokable &&
                      !r._isRevoking(t) &&
                      r.sholdShowTradeTime(t),
                  }
                ),
            {
              aa: o.o(function (e) {
                return r.onTouchstart(e, t.uniqueKey);
              }, t.uniqueKey),
              ab: o.o(function (e) {
                return r.onTouchmove(e, t.uniqueKey);
              }, t.uniqueKey),
              ac: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
              ad: o.o(function (e) {
                return r.onTouchcancel(e, t.uniqueKey);
              }, t.uniqueKey),
              ae:
                "pending" === n.type &&
                t.stock_type === r.TARGET.STOCK &&
                ![r.MARKET.NQ, r.MARKET.HK].includes(t.market),
            },
            "pending" !== n.type ||
              t.stock_type !== r.TARGET.STOCK ||
              [r.MARKET.NQ, r.MARKET.HK].includes(t.market)
              ? {}
              : o.e(
                  { af: !r.hidefund },
                  r.hidefund
                    ? {}
                    : o.e(
                        { ag: r._isRevoking(t) && t.cancelSubmited },
                        r._isRevoking(t) && t.cancelSubmited
                          ? {
                              ah: o.o(function () {
                                return (
                                  r.showCancelModal &&
                                  r.showCancelModal.apply(r, arguments)
                                );
                              }, t.uniqueKey),
                            }
                          : r._isRevoking(t) || "1" !== t.trade_state
                          ? r._isRevoking(t) || "2" !== t.trade_state
                            ? r._isRevoking(t) || "7" !== t.trade_state
                              ? r._isRevoking(t) || "8" !== t.trade_state
                                ? r._isRevoking(t) || "9" !== t.trade_state
                                  ? t.isAutoRevoking && "0" === t.trade_state
                                    ? { ay: o.t(r.unit(t.order_num, t)) }
                                    : { az: o.t(t.submitTip) }
                                  : {}
                                : { av: o.t(r.actionText(t)) }
                              : {
                                  ar: o.t(r.unit(t.cancel_num, t)),
                                  as: o.t(r.unit(t.match_num, t)),
                                }
                            : {
                                ao: o.t(r.actionText(t)),
                                ap: o.t(r.unit(t.order_num, t)),
                              }
                          : {
                              aj: o.t(r.actionText(t)),
                              ak: o.t(r.unit(t.match_num, t)),
                              al: o.t(r.unit(t.not_trade_num, t)),
                              am: o.t(r.actionText(t)),
                            },
                        {
                          ai: !r._isRevoking(t) && "1" === t.trade_state,
                          an: !r._isRevoking(t) && "2" === t.trade_state,
                          aq: !r._isRevoking(t) && "7" === t.trade_state,
                          at: !r._isRevoking(t) && "8" === t.trade_state,
                          aw: !r._isRevoking(t) && "9" === t.trade_state,
                          ax: t.isAutoRevoking && "0" === t.trade_state,
                        }
                      )
                ),
            { aA: t.hasAllocateDebtTips },
            (t.hasAllocateDebtTips, {}),
            {
              aB: o.n(
                t.uniqueKey !== r.longPressActiveKey || r.embeddedMode
                  ? ""
                  : "active-right"
              ),
              aC: o.n(
                t.uniqueKey !== r.longPressActiveKey4Left || r.embeddedMode
                  ? ""
                  : "active-left"
              ),
              aD: o.o(function (e) {
                return r.toDetail(t);
              }, t.uniqueKey),
              aE: t.uniqueKey,
            }
          );
        }),
        b: r.hidefund,
        c: !r.hidefund,
        d: r.hidefund,
        e: r.hidefund,
        f: r.hidefund,
        g: o.n(r.simpleMode ? "" : "border--bottom"),
        h: o.n(r.simpleMode ? "order-list-body__simple-mode" : ""),
        i: o.n("order-list-body__".concat(n.type)),
      };
    },
  ],
  ["__scopeId", "data-v-bacf4dcf"],
]);
wx.createComponent(h);
