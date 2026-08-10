var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../stores/app/useMode.js"),
  u = require("../../../config/enum.js"),
  i = require("../../../model/trade/utils.js"),
  c = require("../../../config/enum/trade.js"),
  a = require("../../../cgi/trade/stock.js");
require("../../../service/broker.js");
var d,
  l = require("../../../service/aegis/platform/not-wujie.js"),
  s = require("../../../service/aegis/utils.js"),
  h = require("../../../config/broker/11100/index.js"),
  p = new a.TradeStockService(),
  f = {
    components: {
      Popup: function () {
        return "../../../common/components/Popup/index.js";
      },
    },
    props: {
      inline: { type: Boolean, default: !1 },
      showFundaccount: { type: Boolean, default: !1 },
      fundaccount: { type: String, default: "" },
    },
    setup: function (a, f) {
      var k,
        m = f.emit,
        g = r.getCurrentInstance().proxy,
        v = r.storeToRefs(n.useModeStore()).simpleMode;
      d && d();
      var G,
        T = r.inject("trade"),
        w = T.market,
        b = T.tradeAuth,
        A = T.tradeAccount,
        _ = T.stock,
        M = r.computed(function () {
          var e, t;
          return (
            (!!(null == (e = b.matchTypeInfo) ? void 0 : e.code) &&
              !!b.authorities) ||
            (null == (t = b.ggtShareHolderCardListFallback)
              ? void 0
              : t.length) > 0
          );
        }),
        C = r.ref(!1),
        y = r.computed(function () {
          var e;
          return (
            (null == (e = b.authorities) ? void 0 : e.ggt) ===
            c.GGTAccountStatus.opened
          );
        }),
        F = r.computed(function () {
          return b.fetchAuthFailed;
        }),
        S = r.ref(!1),
        q = r.computed(function () {
          return b.getGGTShareHolderCardList();
        }),
        j = r.ref(
          (null == (k = b.getGGTShareHolderCardList())
            ? void 0
            : k.find(function (e) {
                return (
                  e.stockholder_code ===
                  (A.ggt_stockholder_code || b.ggtShareHolder)
                );
              })) || {}
        );
      return (
        r.watch(
          function () {
            return b.ggtShareHolder;
          },
          function (e) {
            var t,
              o =
                null == (t = b.getGGTShareHolderCardList())
                  ? void 0
                  : t.find(function (t) {
                      return t.stockholder_code === e;
                    });
            j.value = o || {};
          }
        ),
        r.watch(
          function () {
            return b.fetchAuthFailed;
          },
          function (e) {
            e &&
              r.index.showToast({ title: "港股通权限获取失败", icon: "none" });
          }
        ),
        r.watch(
          function () {
            return [y.value, q.value];
          },
          function (e) {
            var t = o(e, 2),
              r = t[0],
              n = t[1];
            !r ||
              (n && 0 !== n.length) ||
              !M.value ||
              s.reportEventSafely("mon_trade_ggtcard_empty", {
                ext4: F.value ? "fail" : "success",
              });
          },
          { immediate: !0 }
        ),
        (d = r.watch(
          function () {
            return j.value;
          },
          function (e) {
            e &&
              e.stockholder_code &&
              w.value == u.MARKET.HK &&
              m("select", e.stockholder_code);
          },
          { immediate: !0 }
        )),
        r.onBeforeUnmount(function () {
          d(), (d = null);
        }),
        {
          simpleMode: v,
          ggtAuthFetched: M,
          ggtAuthFetchFailed: F,
          hasGGTAuth: y,
          authTipVisible: S,
          hideAuthTip: function () {
            S.value = !1;
          },
          cardList: q,
          selectedCard: j,
          dropdownMenuVisible: C,
          onDropdownMenuBarClick: function () {
            y.value
              ? (C.value = !C.value)
              : g.$router.push({ name: "BizGGTOpen" });
          },
          onDropdownItemClick: function (e) {
            (j.value = e), (C.value = !1);
          },
          onDropdownMenuMaskClick: function () {
            C.value = !1;
          },
          formatGGTStockHolderMarket: i.formatGGTStockHolderMarket,
          formatGGTStockHolderCode: i.formatGGTStockHolderCode,
          refetchGGTAuth:
            ((G = t(
              e().mark(function t() {
                var o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = _.value.secu_info),
                            (b.fetchAuthFailed = !1),
                            (e.prev = 2),
                            (e.next = 5),
                            b.fetchTradeAuth(p, {
                              stockholder_code: "",
                              market: null == o ? void 0 : o.market,
                              stock_code: null == o ? void 0 : o.secu_code,
                              stock_cls: null == o ? void 0 : o.class,
                              stock_name: null == o ? void 0 : o.secu_name,
                              query_ft: "0",
                            })
                          );
                        case 5:
                          e.next = 10;
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(2)),
                            b.handleFetchTradeAuthFail(!0),
                            l.aegisReporter.reportEvent(
                              "mon_trade_ggtholder_retryfail",
                              { ext3: e.t0 }
                            );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 7]]
                );
              })
            )),
            function () {
              return G.apply(this, arguments);
            }),
          broker: h.brokerConfig,
        }
      );
    },
  };
Array || r.resolveComponent("BrokerLogo")(), Math;
var k = r._export_sfc(f, [
  [
    "render",
    function (e, t, o, n, u, i) {
      return r.e(
        { a: !1 === o.inline },
        !1 === o.inline
          ? r.e(
              { b: o.showFundaccount && o.fundaccount },
              o.showFundaccount && o.fundaccount
                ? { c: r.t(n.broker.base.name), d: r.t(o.fundaccount) }
                : {}
            )
          : {},
        { e: n.ggtAuthFetched },
        n.ggtAuthFetched
          ? r.e(
              { f: n.hasGGTAuth },
              n.hasGGTAuth
                ? {
                    g: r.t(
                      n.formatGGTStockHolderMarket(
                        n.selectedCard.stockholder_code
                      )
                    ),
                    h: r.t(
                      n.formatGGTStockHolderCode(
                        n.selectedCard.stockholder_code
                      )
                    ),
                  }
                : {},
              {
                i: r.n(o.inline ? "bar-inline" : "bar-block"),
                j: r.o(function () {
                  return (
                    n.onDropdownMenuBarClick &&
                    n.onDropdownMenuBarClick.apply(n, arguments)
                  );
                }),
                k: n.hasGGTAuth,
              },
              n.hasGGTAuth
                ? r.e(
                    { l: n.dropdownMenuVisible },
                    n.dropdownMenuVisible
                      ? {
                          m: r.o(function () {
                            return (
                              n.onDropdownMenuMaskClick &&
                              n.onDropdownMenuMaskClick.apply(n, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      n: r.o(function () {
                        return (
                          n.onDropdownMenuBarClick &&
                          n.onDropdownMenuBarClick.apply(n, arguments)
                        );
                      }),
                      o: n.dropdownMenuVisible,
                    },
                    n.dropdownMenuVisible
                      ? {
                          p: r.f(n.cardList, function (e, t, o) {
                            return {
                              a: r.t(
                                n.formatGGTStockHolderMarket(e.stockholder_code)
                              ),
                              b: r.t(
                                n.formatGGTStockHolderCode(e.stockholder_code)
                              ),
                              c: t,
                              d: r.n(
                                e.stockholder_code ===
                                  n.selectedCard.stockholder_code
                                  ? "active primary-color"
                                  : ""
                              ),
                              e: r.o(function (t) {
                                return n.onDropdownItemClick(e);
                              }, t),
                            };
                          }),
                        }
                      : {}
                  )
                : {},
              { q: r.n(o.inline ? "dropdown-inline" : "dropdown-block") }
            )
          : n.ggtAuthFetchFailed
          ? {
              s: r.o(function () {
                return n.refetchGGTAuth && n.refetchGGTAuth.apply(n, arguments);
              }),
              t: r.n(o.inline ? "bar-inline" : "bar-block"),
              v: r.n(o.inline ? "dropdown-inline" : "dropdown-block"),
            }
          : {},
        {
          r: n.ggtAuthFetchFailed,
          w: n.ggtAuthFetched && !n.hasGGTAuth && n.authTipVisible,
        },
        n.ggtAuthFetched && !n.hasGGTAuth && n.authTipVisible
          ? {
              x: r.o(function () {
                return n.hideAuthTip && n.hideAuthTip.apply(n, arguments);
              }),
            }
          : {},
        {
          y: r.n(n.simpleMode ? "simple" : ""),
          z: r.n(o.inline ? "wrap-inline" : "wrap-block"),
        }
      );
    },
  ],
]);
wx.createComponent(k);
