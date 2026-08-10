var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = require("../../../../../../../common/vendor.js"),
  u = require("../../../../../components/HalfTradeScreenShell.js"),
  i = require("../../../../../quote.js"),
  d = {
    name: "TradeSkeleton",
    props: (function (r, s) {
      for (var u in s || (s = {})) n.call(s, u) && a(r, u, s[u]);
      if (t) {
        var i,
          d = e(t(s));
        try {
          for (d.s(); !(i = d.n()).done; ) {
            u = i.value;
            o.call(s, u) && a(r, u, s[u]);
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
      }
      return r;
    })({}, u.CommonProps),
    setup: function (e) {
      var r = getApp().globalData,
        t = s.computed(function () {
          var t, n, o;
          return null ==
            (o =
              null == (n = null == r ? void 0 : r.tradeToPreloadQuoteData)
                ? void 0
                : n[null == (t = e.extraParams) ? void 0 : t.brokerCode])
            ? void 0
            : o.isConditionEntry;
        }),
        n = s.computed(function () {
          var r;
          return (null == (r = e.extraParams) ? void 0 : r.brokerCode) || "";
        }),
        o = s.computed(function () {
          var r;
          return (null == (r = e.extraParams) ? void 0 : r.brokerName) || "";
        }),
        a = s.computed(function () {
          var r;
          return (null == (r = e.extraParams) ? void 0 : r.tradeAmount) || "";
        }),
        u = s.computed(function () {
          return e.platform === i.PlatformEnum.MPZXG;
        }),
        d = s.computed(function () {
          var r = e.entrustType === i.TradeType.sell;
          return u.value
            ? r
              ? "sell sell-zxg"
              : "buy buy-zxg"
            : r
            ? "sell sell-wzq"
            : "buy buy-wzq";
        }),
        l = s.computed(function () {
          var r;
          return (
            (null == (r = e.extraParams) ? void 0 : r.canSwitchTradeMode) || !1
          );
        }),
        x = s.computed(function () {
          var r;
          return (null == (r = e.extraParams) ? void 0 : r.canSwitchTradeMode)
            ? "STANDARD" === e.tradeMode
              ? "标准"
              : e.entrustType === i.TradeType.sell
              ? "股数"
              : "金额"
            : "标准";
        });
      return {
        canSwitchTradeModeForRender: l,
        isConditionEntry: t,
        brokerCode: n,
        brokerName: o,
        tradeAmount: a,
        TradeType: i.TradeType,
        isZxg: u,
        btnCls: d,
        closeTradeStock: function () {},
        tabSubLabel: x,
      };
    },
  },
  l = s._export_sfc(d, [
    [
      "render",
      function (e, r, t, n, o, a) {
        return s.e(
          { a: n.isConditionEntry },
          (n.isConditionEntry, {}),
          { b: n.brokerCode && n.brokerName },
          n.brokerCode && n.brokerName
            ? {
                c: "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                  n.brokerCode,
                  ".svg"
                ),
                d: s.t(n.brokerName),
              }
            : {},
          {
            e: s.o(function () {
              return n.closeTradeStock && n.closeTradeStock.apply(n, arguments);
            }, 3194),
            f: s.n(n.isZxg ? "tab-trade-tool-zxg" : ""),
            g: s.t(n.tabSubLabel),
            h: s.n(n.isZxg ? "tab-sub-label-zxg" : "tab-sub-label-wzq"),
            i: s.n(n.isZxg ? "tab-slider-item-zxg" : "tab-slider-item-wzq"),
            j: s.n(
              n.isZxg ? "tab-item-zxg" : "tab-item-wzq tab-item--active-wzq"
            ),
            k: s.n(n.isZxg ? "tab-item-zxg" : "tab-item-wzq"),
            l: s.n(n.isZxg ? "tab-item-zxg" : "tab-item-wzq"),
            m: s.n(n.isZxg ? "tabbar-skeleton-zxg" : "tabbar-skeleton-wzq"),
            n: !n.canSwitchTradeModeForRender || "STANDARD" === e.tradeMode,
          },
          n.canSwitchTradeModeForRender && "STANDARD" !== e.tradeMode
            ? s.e(
                { P: e.entrustType !== n.TradeType.sell },
                (e.entrustType, n.TradeType.sell, {}),
                { Q: e.entrustType !== n.TradeType.sell },
                (e.entrustType, n.TradeType.sell, {}),
                {
                  R: s.t(
                    e.entrustType === n.TradeType.sell ? "最大可卖" : "可用资金"
                  ),
                  S: s.n(n.isZxg ? "border--surround-zxg" : ""),
                  T: e.entrustType !== n.TradeType.sell,
                },
                e.entrustType !== n.TradeType.sell
                  ? {
                      U: s.n(n.isZxg ? "border--surround-zxg" : ""),
                      V: s.n(n.isZxg ? "border--surround-zxg" : ""),
                    }
                  : {
                      W: s.n(n.isZxg ? "border--surround-zxg" : ""),
                      X: s.n(n.isZxg ? "border--surround-zxg" : ""),
                      Y: s.n(n.isZxg ? "border--surround-zxg" : ""),
                      Z: s.n(n.isZxg ? "border--surround-zxg" : ""),
                    },
                {
                  aa: s.t(e.entrustType === n.TradeType.sell ? "卖出" : "买入"),
                  ab: s.n(n.btnCls),
                  ac: s.n(n.isZxg ? "btns-zxg" : "btns-wzq"),
                }
              )
            : {
                o: s.n(n.isZxg ? "text-zxg" : ""),
                p: s.n(
                  n.isZxg
                    ? "stepper-button-zxg minus-zxg"
                    : "stepper-button-wzq minus-wzq"
                ),
                q: s.t(e.dqj),
                r: s.n(
                  n.isZxg
                    ? "stepper-button-zxg plus-zxg"
                    : "stepper-button-wzq plus-wzq"
                ),
                s: s.n(n.isZxg ? "row-right-zxg" : "row-right-wzq"),
                t: s.n(n.isZxg ? "row-2-zxg" : "row-2-wzq"),
                v: s.n(n.isZxg ? "text-zxg" : ""),
                w: s.n(
                  n.isZxg
                    ? "stepper-button-zxg minus-zxg"
                    : "stepper-button-wzq minus-wzq"
                ),
                x: s.t(n.tradeAmount),
                y: s.n(n.isZxg ? "num-zxg" : ""),
                z: s.n(
                  n.isZxg
                    ? "stepper-button-zxg plus-zxg"
                    : "stepper-button-wzq plus-wzq"
                ),
                A: s.n(n.isZxg ? "row-right-zxg" : "row-right-wzq"),
                B: s.n(n.isZxg ? "row-3-zxg" : "row-3-wzq"),
                C: s.t(
                  e.entrustType === n.TradeType.sell ? "最大可卖" : "最大可买"
                ),
                D: s.n(n.isZxg ? "border--surround-zxg" : ""),
                E: s.n(
                  n.isZxg
                    ? "quick-amount-zxg border--surround-zxg"
                    : "quick-amount-wzq"
                ),
                F: s.n(
                  n.isZxg
                    ? "quick-amount-zxg border--surround-zxg"
                    : "quick-amount-wzq"
                ),
                G: s.n(
                  n.isZxg
                    ? "quick-amount-zxg border--surround-zxg"
                    : "quick-amount-wzq"
                ),
                H: s.n(
                  n.isZxg
                    ? "quick-amount-zxg border--surround-zxg"
                    : "quick-amount-wzq"
                ),
                I: s.n(n.isZxg ? "max-info-zxg" : "max-info-wzq"),
                J: s.n(n.isZxg ? "text-zxg" : ""),
                K: s.n(n.isZxg ? "money-text-zxg" : ""),
                L: s.n(n.isZxg ? "row-4-zxg" : "row-4-wzq"),
                M: s.t(e.entrustType === n.TradeType.sell ? "卖出" : "买入"),
                N: s.n(n.btnCls),
                O: s.n(n.isZxg ? "btns-zxg" : "btns-wzq"),
              },
          { ad: s.n(n.isZxg ? "skeleton-zxg" : "skeleton-wzq") }
        );
      },
    ],
    ["__scopeId", "data-v-e11ec1c0"],
  ]);
wx.createComponent(l);
