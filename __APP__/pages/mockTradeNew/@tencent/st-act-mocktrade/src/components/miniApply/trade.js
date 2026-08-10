require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, a) {
    return new Promise(function (u, n) {
      var r = function (e) {
          try {
            o(a.next(e));
          } catch (e) {
            n(e);
          }
        },
        i = function (e) {
          try {
            o(a.throw(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          return e.done ? u(e.value) : Promise.resolve(e.value).then(r, i);
        };
      o((a = a.apply(e, t)).next());
    });
  },
  a = require("../../../../../../../common/vendor.js"),
  u = require("api.js"),
  n = require("../../services/BaseController.js"),
  r = require("../../services/fundQt.js");
function i(i, o) {
  var l,
    c = o.emit,
    s =
      (null == (l = a.getCurrentInstance()) ? void 0 : l.proxy) ||
      a.getCurrentInstance(),
    v = ["mpwzq", "wzqlight"].includes("mpweapp"),
    f = a.ref({}),
    p = a.ref({}),
    d = a.ref(0),
    m = a.computed(function () {
      var e, t;
      if (!(null == (e = p.value) ? void 0 : e.fundAvailable)) return 0;
      var a = (null == (t = f.value) ? void 0 : t.unit) || 100,
        u = j.value || 0;
      return 0 === u ? 0 : N(+p.value.fundAvailable, u, a);
    }),
    y = a.ref(!0),
    T = a.ref(null);
  setTimeout(function () {
    y.value = !1;
  }, 5e3);
  var h = a.ref(!1),
    k = a.ref([
      { id: 1, name: "限价", displayName: "限 价" },
      { id: 2, name: "跟最新价", displayName: "最 新" },
      { id: 3, name: "跟买一价", displayName: "买 一" },
      { id: 4, name: "跟卖一价", displayName: "卖 一" },
    ]),
    b = a.ref({ id: 1, name: "限价", displayName: "限 价" }),
    I = a.computed(function () {
      switch (f.value.state) {
        case n.STOCK_STATE.DELISTED:
        case n.STOCK_STATE.SUSPENDED:
        case n.STOCK_STATE.SUSPENSION:
          return !1;
        case n.STOCK_STATE.NORMAL:
        default:
          switch (+f.value.marketState) {
            case n.MARKET_STATE.BEFORE_OPEN_BID:
            case n.MARKET_STATE.BEFORE_CLOSE_BID:
            case n.MARKET_STATE.OPEN_MORNING:
            case n.MARKET_STATE.OPEN_AFTERNOON:
            case n.MARKET_STATE.AFTER_PREPARE:
            case n.MARKET_STATE.AFTER_TRADING:
              return !0;
            default:
              return !1;
          }
      }
    });
  function g(a) {
    var u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t(
      this,
      null,
      e().mark(function t() {
        var o, l, c, s, v, p, d, m, y;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((o = a.secu_quote.zde),
                  (l = o && "-" === o.toString()[0]),
                  (c = a.secu_info.secu_cls),
                  (s = "k" === c),
                  (v =
                    a.secu_info.secu_code ||
                    S.value.id
                      .replace(/^[a-z]{2}/i, "")
                      .replace(/\.[a-z]{2}$/i, "")),
                  (p = +a.secu_info.market),
                  (d = String(
                    n.MARKET_CODE[p] || S.value.id.slice(0, 2)
                  ).toUpperCase()),
                  !i.feeFeatureEnabled || !r.shouldQueryFundQt(c, v))
                ) {
                  e.next = 13;
                  break;
                }
                return (e.next = 10), r.getFundQtInfo(v);
              case 10:
                (e.t0 = e.sent), (e.next = 14);
                break;
              case 13:
                e.t0 = null;
              case 14:
                (m = e.t0),
                  (f.value = {
                    code: v,
                    market: p,
                    marketCN: d,
                    name: a.secu_info.secu_name,
                    price: a.secu_quote.dqj,
                    fivebuy1: a.five_trans.mrjg1,
                    fivesell1: a.five_trans.mcjg1,
                    zde: a.secu_quote.zde,
                    zdf: a.secu_quote.zdf + "%",
                    isFall: l,
                    ceil: a.secu_info.price_ceiling,
                    floor: a.secu_info.price_floor,
                    unit: a.secu_info.trd_unit,
                    spread: a.secu_info.spread,
                    state: a.secu_info.status,
                    cls: c,
                    fundType: (null == m ? void 0 : m.fundType) || "",
                    fundTypeName: (null == m ? void 0 : m.fundTypeName) || "",
                    isMoneyFund: !!(null == m ? void 0 : m.isMoneyFund),
                    spreadAcc: 2,
                    symbol: a.secu_info.symbol,
                    marketState: a.market_state,
                    marketStateCN:
                      n.STOCK_STATE_CN[a.secu_info.status] ||
                      n.MARKET_STATE_CN[n.MARKET_STATE[a.market_state]] ||
                      "",
                    stockType: a.secu_info.stocktype,
                    isKCB: s,
                  }),
                  u &&
                    ((A.value = f.value.price.toString().split("")),
                    (y = s ? 200 : 100),
                    (P.value = y.toString().split("")));
              case 16:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
  }
  function _(e) {
    p.value = {
      assetInterval: e.asset_interval,
      orderInterval: e.order_interval,
      tradeToken: e.token,
      stockSellableNum: +e.stock_avl_qty,
      fundAvailable: e.fund_avl_bal,
    };
    var t = f.value.unit || 100,
      a = parseFloat(f.value.price) || 0;
    d.value = N(+p.value.fundAvailable, a, t);
  }
  function N(e, t) {
    var a =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
    if (0 === t) return 0;
    if (!i.feeFeatureEnabled) {
      var u = "k" === f.value.cls,
        o = Math.floor(e / t / a) * a;
      return u ? (o >= n.FRONTEND_MIN_UNIT.KCB_MIN_UINT ? o : 0) : o || 0;
    }
    return r.calBuyableNumWithFee(e, t, a, {
      cls: f.value.cls,
      isMoneyFund: f.value.isMoneyFund,
      market: f.value.market,
    });
  }
  var S = a.ref({ scene: "", type: "", id: "" });
  function F() {
    return t(
      this,
      null,
      e().mark(function t() {
        var n, r, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((function () {
                    if ("mp" === a.StockBridge.ENV) {
                      var e = getCurrentPages(),
                        t = e[e.length - 1];
                      t &&
                        t.options &&
                        (S.value = {
                          scene: t.options.scene,
                          type: t.options.type,
                          id: t.options.id,
                        });
                    } else
                      S.value = {
                        scene: s.$route.query.scene,
                        type: s.$route.query.type,
                        id: s.$route.query.id,
                      };
                  })(),
                  "fromai" !== S.value.scene ||
                    "gp" !== S.value.type ||
                    !S.value.id)
                ) {
                  e.next = 14;
                  break;
                }
                return (e.next = 3), u.getStockInfo(S.value.id);
              case 3:
                return (r = e.sent), (e.next = 6), g(r, !0);
              case 6:
                return (
                  (e.t0 = _), (e.next = 9), u.initTrade(S.value.id, i.gameId)
                );
              case 9:
                if (
                  ((e.t1 = e.sent),
                  (0, e.t0)(e.t1),
                  !(null == (n = null == r ? void 0 : r.secu_info)
                    ? void 0
                    : n.secu_name))
                ) {
                  e.next = 14;
                  break;
                }
                (o =
                  "mp" !== a.StockBridge.ENV &&
                  a.StockBridge.getSession("click-rule-4ai")) &&
                  sessionStorage.removeItem("click-rule-4ai"),
                  c("show", f.value, o),
                  C();
              case 14:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
  }
  var w = null;
  function C() {
    w && (clearInterval(w), (w = null)),
      I.value &&
        i.visible &&
        (w = setInterval(function () {
          I.value && i.visible
            ? (function () {
                t(
                  this,
                  null,
                  e().mark(function t() {
                    var a;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                u.getStockInfo(S.value.id)
                              );
                            case 3:
                              return (a = e.sent), (e.next = 6), g(a);
                            case 6:
                              e.next = 10;
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
                );
              })()
            : E();
        }, 3e3));
  }
  function E() {
    w && (clearInterval(w), (w = null));
  }
  var x = a.watch(
      function () {
        return i.visible;
      },
      function (e) {
        e && I.value ? C() : E();
      }
    ),
    A = a.ref(["0", ".", "0", "0"]),
    P = a.ref(["1", "0", "0"]),
    q = a.ref(!1),
    B = a.ref(""),
    K = a.computed(function () {
      return "ETF" === f.value.stockType;
    }),
    M = a.computed(function () {
      return K.value ? 3 : 2;
    }),
    R = a.computed(function () {
      return A.value.join("") || "0";
    }),
    O = a.computed(function () {
      return P.value.join("") || "0";
    }),
    j = a.computed(function () {
      var e = parseFloat(R.value);
      return isNaN(e) ? 0 : e;
    }),
    D = a.computed(function () {
      var e = parseInt(O.value);
      return isNaN(e) ? 0 : e;
    });
  function $(e) {
    (A.value = e),
      1 !== b.value.id && (b.value = k.value[0]),
      "price" === V.value && q.value && H();
  }
  function Q() {
    var e = R.value,
      t = M.value;
    if (e && "0" !== e) {
      var a = parseFloat(e);
      if (isNaN(a)) {
        var u = f.value.price || 0,
          n = parseFloat(u).toFixed(t);
        A.value = n.split("");
      } else {
        var r = a.toFixed(t);
        A.value = r.split("");
      }
    } else {
      var i = f.value.price || 0,
        o = parseFloat(i).toFixed(t);
      A.value = o.split("");
    }
  }
  function z() {
    var e = O.value,
      t = f.value.isKCB ? 200 : 100,
      a = parseInt(e, 10);
    if (e && 0 !== a && !isNaN(a)) {
      var u = Math.min(Math.max(1, a), 9999999999);
      P.value = u.toString().split("");
    } else P.value = t.toString().split("");
  }
  var L = a.ref(!1),
    V = a.ref(""),
    W = a.ref(!1),
    U = null;
  function G() {
    U && (clearTimeout(U), (U = null));
  }
  function H() {
    G(),
      (W.value = !0),
      (U = setTimeout(function () {
        (W.value = !1), (U = null);
      }, 3e3));
  }
  var J = a.computed(function () {
      if (!W.value) return !1;
      var e = R.value,
        t = j.value,
        a = parseFloat(f.value.price),
        u = parseFloat(f.value.ceil),
        n = parseFloat(f.value.floor);
      return (
        !(!e.endsWith(".") && "." !== e && "" !== e) ||
        0 === t ||
        (!(!t || isNaN(t)) && (t > u || t < n || t !== a))
      );
    }),
    X = a.computed(function () {
      var e = R.value,
        t = j.value,
        a = parseFloat(f.value.price),
        u = parseFloat(f.value.ceil),
        n = parseFloat(f.value.floor);
      return e.endsWith(".") || "." === e || "" === e
        ? "价格格式错误，请调整"
        : 0 === t
        ? "价格不能为0，请调整"
        : t > u
        ? "委托价高于涨停价，交易可能无效"
        : t < n
        ? "委托价低于跌停价，交易可能无效"
        : t > a
        ? "高于现价".concat((((t - a) / a) * 100).toFixed(2), "%")
        : t < a
        ? "低于现价".concat((((a - t) / a) * 100).toFixed(2), "%")
        : "";
    }),
    Y = a.computed(function () {
      var e = R.value,
        t = j.value,
        a = parseFloat(f.value.ceil),
        u = parseFloat(f.value.floor);
      return e.endsWith(".") ||
        "." === e ||
        "" === e ||
        0 === t ||
        t > a ||
        t < u
        ? "error"
        : "info";
    }),
    Z = a.watch(X, function (e, t) {
      W.value && e && e !== t && H();
    }),
    ee = a.ref(!1),
    te = null;
  function ae() {
    te && (clearTimeout(te), (te = null));
  }
  function ue() {
    ae(),
      (ee.value = !0),
      (te = setTimeout(function () {
        (ee.value = !1), (te = null);
      }, 3e3));
  }
  var ne = a.computed(function () {
      if (!ee.value) return !1;
      var e = D.value,
        t = f.value.isKCB;
      return (
        !isNaN(e) &&
        (t ? 0 === e || (e > 0 && e < 200) : 0 === e || e < 100 || e % 100 != 0)
      );
    }),
    re = a.computed(function () {
      var e = D.value;
      return f.value.isKCB
        ? e >= 0 && e < 200
          ? "最少交易200股"
          : ""
        : 0 === e || e < 100 || e % 100 != 0
        ? "数量需为100或其整倍数"
        : "";
    }),
    ie = a.watch(re, function (e, t) {
      ee.value && e && e !== t && ue();
    });
  F();
  var oe = ["mockdeal", "mockhot", "mockresult", "mockrank"],
    le = null;
  return (
    s.$route &&
      (le = a.watch(
        function () {
          return {
            path: s.$route.path,
            name: s.$route.name,
            query: s.$route.query,
          };
        },
        function (e, t) {
          if (
            !(
              (t && e.path === t.path) ||
              "mocktrade" !== e.name ||
              oe.includes(null == t ? void 0 : t.name)
            )
          ) {
            var a = e.query || {};
            "fromai" === a.scene && "gp" === a.type && a.id && F();
          }
        },
        { immediate: !1 }
      )),
    a.onUnmounted(function () {
      G(), ae(), E(), le && le(), x && x(), Z && Z(), ie && ie();
    }),
    {
      stockInfo: f,
      tradeOpen: I,
      stockBuyNumMax: d,
      stockBuyNumMaxByInputPrice: m,
      showTip: y,
      closeTip: function () {
        y.value = !1;
      },
      setPriceToLimit: function (e) {
        var t = "ceil" === e ? f.value.ceil : f.value.floor;
        t &&
          (1 !== b.value.id && (b.value = k.value[0]),
          (A.value = t.toString().split("")),
          H());
      },
      selectPosition: function (e) {
        var t,
          a = m.value,
          u = f.value.isKCB;
        switch (e) {
          case "全仓":
            t = a;
            break;
          case "半仓":
            t = Math.floor(a / 2);
            break;
          case "1/4":
            t = Math.floor(a / 4);
            break;
          default:
            t = 0;
        }
        u && t > 0 && t < 200
          ? (t = 200)
          : !u && t > 0 && t < 100
          ? (t = 100)
          : !u && t > 0 && (t = 100 * Math.floor(t / 100)),
          (P.value = t.toString().split(""));
      },
      handleBuy: function () {
        var e = D.value,
          t = j.value,
          u = f.value.isKCB;
        if (
          (a.StockBridge.report("trade.mocktrade.aiminiapply.buyclick"),
          0 === t || !t)
        )
          return (
            a.StockBridge.modal({
              content: "委托价格不能为0",
              confirmText: "我知道了",
              showCancel: !1,
              title: "",
            }),
            void (A.value = f.value.price.toString().split(""))
          );
        if (e > m.value)
          if (i.feeFeatureEnabled) {
            var n = r.calculateFee({
                cls: f.value.cls,
                isMoneyFund: f.value.isMoneyFund,
                market: f.value.market,
                direction: "buy",
                price: t,
                quantity: e,
              }),
              o = n.settlementAmount - parseFloat(p.value.fundAvailable || "0"),
              l = {
                diff: r.formatFee(o),
                fee: r.formatFee(n.totalFee),
                maxBuy: m.value,
              };
            (T.value = l), c("fund-insufficient", l);
          } else
            a.StockBridge.modal({
              content: "资金不足，当前最大可买为".concat(m.value, "股"),
              confirmText: "我知道了",
              showCancel: !1,
              title: "",
            });
        else {
          if (u) {
            if (e < 200)
              return void a.StockBridge.modal({
                content: "根据交易规则，科创板股票最少交易200股",
                confirmText: "我知道了",
                showCancel: !1,
                title: "",
              });
          } else if (e % 100 != 0 || 0 === e)
            return void a.StockBridge.modal({
              content:
                "根据交易规则，股票最少买入100股，买入数量需为100及其整倍数",
              confirmText: "我知道了",
              showCancel: !1,
              title: "",
            });
          c("changeTradeType", "confirm", {
            name: f.value.name,
            fullCode: "".concat(f.value.code, ".").concat(f.value.marketCN),
            stockCode: f.value.code,
            market: f.value.market,
            price: R.value,
            quantity: O.value,
            amount: (j.value * D.value).toFixed(M.value),
            floorStop:
              Number(R.value) <= Number(f.value.floor) ? f.value.floor : "",
            ceilStop:
              Number(R.value) >= Number(f.value.ceil) ? f.value.ceil : "",
            tradeToken: p.value.tradeToken,
            gameId: i.gameId,
            symbol: f.value.symbol,
          });
        }
      },
      tradeInfo: p,
      showPriceTypeDialog: h,
      tradePriceMap: k,
      nowTradePriceType: b,
      togglePriceType: function () {
        h.value = !h.value;
      },
      handleDialogClick: function (e) {
        e.stopPropagation();
      },
      setTradePriceType: function (e) {
        switch (((b.value = e), (h.value = !1), e.id)) {
          case 1:
            (j.value && 0 !== j.value) ||
              (A.value = f.value.price.toString().split(""));
            break;
          case 2:
            A.value = f.value.price.toString().split("");
            break;
          case 3:
            A.value = f.value.fivebuy1.toString().split("");
            break;
          case 4:
            A.value = f.value.fivesell1.toString().split("");
        }
      },
      price: R,
      quantity: O,
      priceArray: A,
      quantityArray: P,
      priceValue: j,
      quantityValue: D,
      isInputFocused: q,
      focusedInputId: B,
      updatePriceArray: $,
      updateQuantityArray: function (e) {
        (P.value = e), "quantity" === V.value && q.value && ue();
      },
      adjustPrice: function (e) {
        var t = j.value,
          a = M.value,
          u = 3 === a ? 9999.999 : 9999.99,
          n = +(t + e).toFixed(a),
          r = (n = Math.max(0, Math.min(n, u))).toFixed(a);
        1 !== b.value.id && (b.value = k.value[0]),
          (A.value = r.split("")),
          H();
      },
      adjustQuantity: function (e) {
        var t = D.value,
          a = e;
        f.value.isKCB &&
          (a =
            t > 200
              ? e > 0
                ? 1
                : -1
              : 200 === t
              ? e > 0
                ? 1
                : -200
              : e > 0
              ? 200 - t
              : -t);
        var u = Math.max(0, Math.min(t + a, 9999999999));
        (P.value = u.toString().split("")), ue();
      },
      onInputFocus: function (e) {
        V.value &&
          V.value !== e &&
          ("price" === V.value
            ? (Q(), G(), (W.value = !1))
            : "quantity" === V.value && (z(), ae(), (ee.value = !1))),
          (q.value = !0),
          (V.value = e),
          (B.value = e),
          (L.value = !0),
          "price" === e ? H() : "quantity" === e && ue();
      },
      onInputBlur: function () {
        "price" === V.value
          ? (G(), (W.value = !1))
          : "quantity" === V.value && (z(), ae(), (ee.value = !1)),
          setTimeout(function () {
            L.value || ((q.value = !1), (V.value = ""), (B.value = ""));
          }, 100);
      },
      formatPriceToTwoDecimals: Q,
      formatQuantity: z,
      showKeyboard: L,
      currentInputType: V,
      onKeyboardInput: function (e) {
        var t =
          "price" === V.value
            ? s.$refs.priceInputRef
            : s.$refs.quantityInputRef;
        if (t)
          if ("price" === V.value) {
            if ("." === e) {
              var a = A.value.join("");
              if (a.includes(".")) return;
              if (!a || "0" === a)
                return (
                  $(["0", "."]),
                  s.$nextTick(function () {
                    t.setCursorPosition(2);
                  }),
                  void H()
                );
            } else {
              if (!/^[0-9]$/.test(e)) return;
              var u = A.value.join(""),
                n = t.getCursorPosition(),
                r = u.indexOf("."),
                i = -1 !== r ? u.substring(0, r) : u;
              if (-1 !== r) {
                if (n > r) {
                  var o = u.substring(r + 1),
                    l = M.value;
                  if (o.length >= l) return;
                } else if (i.length >= 4) return;
              } else if (i.length >= 4) return;
              var c = u.slice(0, n) + e + u.slice(n);
              if (parseFloat(c) > 9999.99) return;
            }
            t.insertAtCursor(e), H();
          } else if ("quantity" === V.value && /^[0-9]$/.test(e)) {
            var v = P.value.join(""),
              f = t.getCursorPosition(),
              p = v.slice(0, f) + e + v.slice(f);
            if (parseInt(p, 10) > 9999999999) return;
            t.insertAtCursor(e), ue();
          }
      },
      onKeyboardDelete: function () {
        var e =
          "price" === V.value
            ? s.$refs.priceInputRef
            : s.$refs.quantityInputRef;
        e && (e.deleteAtCursor(), "quantity" === V.value && ue());
      },
      onKeyboardClear: function () {
        var e =
          "price" === V.value
            ? s.$refs.priceInputRef
            : s.$refs.quantityInputRef;
        e && (e.clear(), "quantity" === V.value && ue());
      },
      onKeyboardConfirm: function () {
        "price" === V.value
          ? (Q(), G(), (W.value = !1))
          : "quantity" === V.value && (z(), ae(), (ee.value = !1)),
          (L.value = !1),
          (q.value = !1),
          (V.value = ""),
          (B.value = "");
      },
      onKeyboardClose: function () {
        "price" === V.value
          ? (Q(), G(), (W.value = !1))
          : "quantity" === V.value && (z(), ae(), (ee.value = !1)),
          (L.value = !1),
          (q.value = !1),
          (V.value = ""),
          (B.value = "");
      },
      formatNumberWithCommas: function (e) {
        var t = String(e).split("."),
          a = t[0],
          u = M.value,
          n = t[1]
            ? ".".concat(t[1].slice(0, u).padEnd(u, "0"))
            : "." + "0".repeat(u);
        return {
          val: a.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + n,
          small: a.length >= 7,
        };
      },
      priceTipText: X,
      priceTipType: Y,
      showPriceTip: J,
      quantityTipText: re,
      showQuantityTip: ne,
      isLite: v,
      resetTradeState: function () {
        (L.value = !1),
          (q.value = !1),
          (V.value = ""),
          (B.value = ""),
          G(),
          ae(),
          (W.value = !1),
          (ee.value = !1),
          (h.value = !1);
      },
      loadAndShowStockTrade: function (a) {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!a || !i.gameId) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (S.value.id = a),
                        (e.next = 5),
                        u.getStockInfo(a)
                      );
                    case 5:
                      return (r = e.sent), (e.next = 8), g(r, !0);
                    case 8:
                      return (
                        (e.t0 = _), (e.next = 11), u.initTrade(a, i.gameId)
                      );
                    case 11:
                      (e.t1 = e.sent),
                        (0, e.t0)(e.t1),
                        (null == (n = null == r ? void 0 : r.secu_info)
                          ? void 0
                          : n.secu_name) && (c("show", f.value, !1), C()),
                        (e.next = 19);
                      break;
                    case 16:
                      throw ((e.prev = 16), (e.t2 = e.catch(1)), e.t2);
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 16]]
            );
          })
        );
      },
      fundInsufficientData: T,
    }
  );
}
var o = {
  props: {
    stockCode: { type: String, default: "" },
    gameId: { type: String, default: "" },
    isNewuser: { type: Boolean, default: !1 },
    visible: { type: Boolean, default: !0 },
    feeFeatureEnabled: { type: Boolean, default: !1 },
  },
  components: {
    NumberKeyboard: function () {
      return "../Numberkeyboard/index.js";
    },
    EditableInput: function () {
      return "../EditableInput/mp.js";
    },
  },
  setup: function (e, t) {
    return i(e, { emit: t.emit });
  },
};
Array ||
  (
    a.resolveComponent("EditableInput") + a.resolveComponent("NumberKeyboard")
  )();
var l = a._export_sfc(o, [
  [
    "render",
    function (e, t, u, n, r, i) {
      return a.e(
        {
          a: a.t(e.stockInfo.name || ""),
          b: a.t(e.stockInfo.code || ""),
          c: a.t(e.stockInfo.marketCN || ""),
          d: a.t(e.stockInfo.marketStateCN || ""),
          e: e.tradeOpen ? 1 : "",
          f: a.t(e.stockInfo.price || ""),
          g: e.stockInfo.isFall ? 1 : "",
          h: a.t(e.stockInfo.zde || ""),
          i: e.stockInfo.isFall ? 1 : "",
          j: a.t(e.stockInfo.zdf || ""),
          k: e.stockInfo.isFall ? 1 : "",
          l: a.t(e.stockInfo.ceil || ""),
          m: a.o(function (t) {
            return e.setPriceToLimit("ceil");
          }, 5121),
          n: a.t(e.stockInfo.floor || ""),
          o: a.o(function (t) {
            return e.setPriceToLimit("floor");
          }, 5122),
          p: e.showPriceTypeDialog,
        },
        e.showPriceTypeDialog
          ? {
              q: a.o(function (t) {
                return (e.showPriceTypeDialog = !1);
              }, 5123),
            }
          : {},
        { r: a.t(e.nowTradePriceType.displayName), s: e.showPriceTypeDialog },
        e.showPriceTypeDialog
          ? {
              t: a.f(e.tradePriceMap, function (t, u, n) {
                return {
                  a: a.t(t.name),
                  b: t.id,
                  c: t.id === e.nowTradePriceType.id ? 1 : "",
                  d: a.o(
                    function (a) {
                      return e.setTradePriceType(t);
                    },
                    5124,
                    t.id
                  ),
                };
              }),
              v: e.isLite ? 1 : "",
              w: a.o(function () {}, 5125),
            }
          : {},
        {
          x: a.o(function () {
            return e.togglePriceType && e.togglePriceType.apply(e, arguments);
          }, 5126),
          y: a.o(function (t) {
            return e.adjustPrice(-0.01);
          }, 5127),
          z: e.showPriceTip,
        },
        e.showPriceTip
          ? { A: a.t(e.priceTipText), B: "error" === e.priceTipType ? 1 : "" }
          : {},
        {
          C: a.sr("priceInputRef", "cba2456e-0"),
          D: a.o(e.updatePriceArray, 5128),
          E: a.o(function (t) {
            return e.onInputFocus("price");
          }, 5129),
          F: a.o(e.onInputBlur, 5130),
          G: a.p({
            value: e.priceArray,
            isFocusedFromParent: "price" === e.focusedInputId,
          }),
          H: a.o(function (t) {
            return e.adjustPrice(0.01);
          }, 5131),
          I: a.o(function (t) {
            return e.adjustQuantity(-100);
          }, 5132),
          J: e.showQuantityTip,
        },
        e.showQuantityTip ? { K: a.t(e.quantityTipText) } : {},
        {
          L: a.sr("quantityInputRef", "cba2456e-1"),
          M: a.o(e.updateQuantityArray, 5133),
          N: a.o(function (t) {
            return e.onInputFocus("quantity");
          }, 5134),
          O: a.o(e.onInputBlur, 5135),
          P: a.p({
            value: e.quantityArray,
            isFocusedFromParent: "quantity" === e.focusedInputId,
          }),
          Q: a.o(function (t) {
            return e.adjustQuantity(100);
          }, 5136),
          R: a.t(e.stockBuyNumMaxByInputPrice),
          S: e.isLite ? 1 : "",
          T: a.o(function (t) {
            return e.selectPosition("全仓");
          }, 5137),
          U: a.o(function (t) {
            return e.selectPosition("半仓");
          }, 5138),
          V: a.o(function (t) {
            return e.selectPosition("1/4");
          }, 5139),
          W: a.t(e.tradeInfo.fundAvailable || ""),
          X: a.t(e.formatNumberWithCommas(e.priceValue * e.quantityValue).val),
          Y: e.formatNumberWithCommas(e.priceValue * e.quantityValue).small
            ? 1
            : "",
          Z: !e.showKeyboard,
        },
        e.showKeyboard
          ? {}
          : a.e(
              {
                aa: a.o(function () {
                  return e.handleBuy && e.handleBuy.apply(e, arguments);
                }, 5140),
                ab: u.isNewuser && e.showTip,
              },
              u.isNewuser && e.showTip
                ? {
                    ac: a.o(function () {
                      return e.closeTip && e.closeTip.apply(e, arguments);
                    }, 5141),
                  }
                : {}
            ),
        {
          ad: a.o(e.onKeyboardInput, 5142),
          ae: a.o(e.onKeyboardDelete, 5143),
          af: a.o(e.onKeyboardClear, 5144),
          ag: a.o(e.onKeyboardConfirm, 5145),
          ah: a.o(e.onKeyboardClose, 5146),
          ai: a.p({
            visible: e.showKeyboard,
            title: "price" === e.currentInputType ? "输入价格" : "输入数量",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-cba2456e"],
]);
wx.createComponent(l);
