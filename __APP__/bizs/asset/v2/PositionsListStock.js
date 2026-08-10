var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../app.js");
var o = require("../../../common/vendor.js"),
  r = require("../../../config/key.js"),
  i = require("../../../filters/money.js"),
  s = require("../../../filters/defaults.js"),
  a = require("../../../model/index/useHideFund.js"),
  l = require("../../../config/enum.js"),
  u = require("../../../service/stat/mp-weixin.js"),
  c = require("../../../components/ValueColor/utils.js"),
  d = require("../../../utils/getPlatform.js"),
  f = require("../../../stores/app/useMode.js"),
  p = require("../../../stores/position/usePositionDrawer.js"),
  h = require("../../../stores/user/useUserinfo.js"),
  v = require("../../../cgi/userproperty.js"),
  m = require("../../../service/aegis/platform/not-wujie.js");
require("../../../service/sdk/lib/api.js");
var y = require("../../../service/sdk/platform/mp-weixin.js"),
  T = require("./useLongPress.js"),
  g = require("../../../model/trade/utils.js"),
  _ = require("../../../utils/market.js"),
  A = require("../../../common/utils/colorHelper.js"),
  k = d.getPlatform(),
  S = k.isMpPlugin,
  E = k.isZxg,
  b = { RESET: 0, DES: 1, ASC: 2 },
  C = {
    options: { styleIsolation: "shared" },
    components: {
      ListHeader: function () {
        return "../ListHeader.js";
      },
      PositionDrawer: function () {
        return "../../../components/PositionDrawer/Index.js";
      },
      BubbleTip: function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isActive: { type: Boolean, default: !0 },
    },
    setup: function (d, k) {
      var C = k.emit,
        w = o.getCurrentInstance().proxy,
        x = o.inject("assetIndexComp"),
        K = o.inject("onStockListSort"),
        D = o.inject("isAssetIndex"),
        P = o.inject("isDifferenceInHoldAndCanuse", {}),
        R = o.inject("doneOrderList"),
        j = o.inject("showGgtBullTips", !1),
        O = o.inject("canRenderDelayAssetInfo"),
        B = o.inject("bandAssistMap", o.ref({})),
        M = o.ref({ key: "hold_val", value: b.DES }),
        $ = o.ref(!1),
        I = o.ref(M.value.value),
        L = o.ref(M.value.key),
        q = !0,
        H = o.ref(d.lists),
        N = a.useHideFund().hidefund,
        U = f.useModeStore(),
        G = o.storeToRefs(U).simpleMode,
        F = T.useLongPress(50, function () {
          w.$stat.click("trade.asset.position.othersort_long_tap");
        }),
        V = F.longPressActiveKey,
        W = F.onTouchstart,
        X = F.onTouchmove,
        J = F.onTouchcancel,
        Z = F.clearLongPressActiveStatus,
        z = T.useLongPress(50, function () {
          w.$stat.click("trade.asset.position.stockcode_long_tap");
        }),
        Q = z.longPressActiveKey,
        Y = z.onTouchstart,
        ee = z.onTouchmove,
        te = z.onTouchcancel,
        ne = z.clearLongPressActiveStatus,
        oe = o.computed(function () {
          var e;
          return [
            {
              text:
                "证券/代码" +
                ((null == (e = null == d ? void 0 : d.lists)
                  ? void 0
                  : e.length) > 0
                  ? "(".concat(d.lists.length, ")")
                  : ""),
              sort: 0,
              key: "stock_code",
            },
            {
              text: P.value ? "市值/股数(可卖)" : "市值/股数",
              sort: 1,
              key: "hold_val",
              align: "right",
              highlight: !0,
            },
            { text: "现价/成本", sort: 0, key: "new_price", align: "right" },
            {
              text: "今日盈亏",
              sort: 1,
              key: "earn_val_day",
              align: "right",
              highlight: !0,
            },
            {
              text: "持仓盈亏",
              sort: 1,
              key: "earn_val",
              align: "right",
              highlight: !0,
            },
            {
              text: "仓位",
              sort: 1,
              key: "position",
              align: "right",
              highlight: !0,
            },
            {
              text: "股东代码",
              sort: 0,
              key: "stockholder_code",
              align: "right",
            },
          ];
        }),
        re = o.computed(function () {
          var e;
          return (
            (null == (e = d.lists) ? void 0 : e.length) > 0 &&
              q &&
              (K({ sortKey: L.value, sortOrder: I.value }), (q = !1)),
            d.isActive && (H.value = d.lists),
            H.value
          );
        }),
        ie = o.computed(function () {
          return l.TRADE_STATE[l.TARGET.ALLOT];
        }),
        se = p.usePositionDrawerStore(),
        ae = se.switchDrawer,
        le = se.curDrawerIsShow,
        ue = o.storeToRefs(se).curUniKey;
      function ce(e) {
        return le({
          type: _.isHKMarket(null == e ? void 0 : e.market)
            ? p.EPositionType.HKSTOCK
            : p.EPositionType.STOCK,
          target: e,
        });
      }
      function de(e) {
        var t = l.TRADE_STATE[l.TARGET.ALLOT];
        return (
          !N.value &&
          e.allotment &&
          -1 < [t.NO_COMMIT].indexOf(e.allotment.status)
        );
      }
      function fe(e) {
        return !N.value && !!B.value[e.code];
      }
      function pe(e) {
        var t = 0;
        return de(e) && t++, fe(e) && t++, t;
      }
      function he() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.key,
          n = e.sort;
        if (t && Object.values(b).includes(n))
          return (I.value = n), void (L.value = t);
        (M.value = o.index.getStorageSync(r.ASSET_SORT_TYPE) || {
          key: "hold_val",
          value: b.DES,
        }),
          (I.value = M.value.value),
          (L.value = M.value.key);
      }
      o.onBeforeMount(function () {
        he();
      });
      var ve = o.debounce(function () {
          w.$stat.click("trade.asset.stock_scroll");
        }, 1e3),
        me = h.useUserinfoStore(),
        ye = o.computed(function () {
          var e;
          return (null == (e = me.userinfo) ? void 0 : e.cur_switch) || "1";
        });
      function Te(e) {
        return _.isHKMarket(null == e ? void 0 : e.market) && "2" === ye.value
          ? "$"
          : "";
      }
      function ge(e) {
        return _.isHKMarket(null == e ? void 0 : e.market) && "2" === ye.value
          ? e.hold_cost_hk
          : e.hold_cost;
      }
      function _e(e) {
        var t = i.formatNoUnit(s.defaults(e.new_price, "--"), !1, 3);
        return _.isHKMarket(null == e ? void 0 : e.market) ? "$".concat(t) : t;
      }
      function Ae(e) {
        var t = i.formatNoUnit(s.defaults(ge(e), "--"), !1, 3);
        return "".concat(Te(e)).concat(t);
      }
      var ke = o.ref(!1);
      function Se() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        j.value && C("setBubbleTips", { isShow: !1 }),
          ke.value &&
            ((ke.value = !1),
            o.index.setStorageSync(r.ASSET_DRAWER_BUBBLE_TIPS, "1"),
            u.stat.click("trade.asset.drawer_bubble_tips_close"),
            be(),
            e && we());
      }
      var Ee = !1;
      function be() {
        return Ce.apply(this, arguments);
      }
      function Ce() {
        return (Ce = n(
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (e.t0 =
                          "1" ===
                            (null == (n = me.userinfo)
                              ? void 0
                              : n.home_hold_guide) || Ee),
                        e.t0)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (
                        (e.next = 5),
                        v.UserPropertyCgi.setUserProperty({
                          scene: v.SCENE.GUIDE,
                          biz: v.ENUM_BIZ.ASSET_DRAW_BUBBLETIP,
                          val: "1",
                        })
                      );
                    case 5:
                      (Ee = !0), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t1 = e.catch(0)),
                        m.aegisReporter.reportEvent(
                          "ASSET-DRAWER-SETPROPERTY-ERR",
                          { ext2: JSON.stringify(e.t1) }
                        );
                    case 11:
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
      function we() {
        var e;
        if (
          !(2 & (null == (e = me.userinfo) ? void 0 : e.prop_guild)) &&
          "1" !== o.index.getStorageSync(r.ASSET_GGT_BUBBLE_TIPS)
        ) {
          var t = re.value.findIndex(function (e) {
            return _.isHKMarket(null == e ? void 0 : e.market);
          });
          if (t >= 0) {
            var n = 56 + t * (G.value ? 128 : 120) + (G.value ? 85 : 71);
            C("setBubbleTips", { isShow: !0, offsetTop: n / 75 + "rem" }),
              u.stat.click("trade.asset.ggt_bubble_tips_show");
          }
        }
      }
      function xe() {
        var e;
        (ke.value =
          "0" === (null == (e = me.userinfo) ? void 0 : e.home_hold_guide) &&
          "1" !== o.index.getStorageSync(r.ASSET_DRAWER_BUBBLE_TIPS)),
          ke.value ? u.stat.click("trade.asset.drawer_bubble_tips_show") : we();
      }
      return (
        o.onMounted(function () {
          E
            ? (y.sdk
                .pageWillAppear(function () {
                  xe();
                })
                .catch(o.noop),
              y.sdk
                .pageWillDisAppear(function () {
                  Se();
                })
                .catch(o.noop))
            : xe();
        }),
        o.onPageShow(function () {
          S && he();
        }),
        o.onPageHide(function () {
          Se();
        }),
        o.onActivated(function () {
          he();
        }),
        o.onDeactivated(function () {
          Se();
        }),
        {
          isAssetIndex: D,
          hidefund: N,
          active: $,
          fields: oe,
          sortType: M,
          sortOrder: I,
          sortField: L,
          storedList: re,
          EPositionType: p.EPositionType,
          ALLOT_STATE: ie,
          simpleMode: G,
          onScrollStat: ve,
          curUniKey: ue,
          onShareClick: function (e) {
            w.$stat.click("trade.asset.stock_drawer_share_click");
            var t = {
                name: e.name,
                code: e.code,
                price: _e(e),
                hold: Ae(e),
                market: e.market,
              },
              n = [+e.earn_per_day, +e.earn_val_day, +e.earn_per, +e.earn_val];
            x.$refs.shareDialog && x.$refs.shareDialog.open(1, n, t);
          },
          onSort: function (e, t) {
            he({ key: e, sort: t }),
              K({ sortKey: L.value, sortOrder: I.value }),
              w.$stat.click(
                "trade.asset."
                  .concat(e, ".")
                  .concat({ 0: "RESET", 1: "DES", 2: "ASC" }[t])
              );
          },
          onStockClick: function (e) {
            Z(), ne();
            var t = w.$route.name;
            "AssetIndex" === t
              ? u.stat.click("trade.asset.holding.click")
              : "TradeStock" === t && u.stat.click("trade.trade.holding.click"),
              o.index.navToQuote(e);
          },
          showAllotment: de,
          toTradeAllot: function (e) {
            w.$router.push({
              name: "TradeAllot",
              query: {
                market: e.allotment.type || e.allotment.market,
                code: e.allotment.code,
                name: e.allotment.name,
                pgcode: e.allotment.pg_code,
                pgprice: e.allotment.pg_price,
              },
            });
          },
          showBandAssist: fe,
          bandAssistText: function (e) {
            return B.value[e.code] || "";
          },
          getExtraCount: pe,
          getExtraStyle: function (e) {
            var t = pe(e),
              n = ce(e);
            if (t <= 0 && !n) return {};
            var o = {};
            if (
              (t > 0 &&
                (o["--extra-h"] =
                  (function (e) {
                    return e <= 0 ? 0 : 64 * e + 20 * (e - 1) + 24;
                  })(t) /
                    75 +
                  "rem"),
              n)
            ) {
              var r = G.value ? 120 : 124;
              o["--drawer-h"] = r / 75 + "rem";
            }
            return o;
          },
          toAnalysisDetail: function (e) {
            w.$stat.click("trade.assetindex.zhongjin_ai_band_click"),
              w.$router.push({
                name: "AnalysisDetail",
                query: {
                  qry_type: "1",
                  stock_name: e.name,
                  trade_market: e.market,
                  stock_code: e.code,
                  stock_type: "0",
                },
              });
          },
          handleZXGAppSwipeActionChange: function (e) {
            w.$sdk.handleJSTouchEventFirst(e).catch(o.noop);
          },
          redOrGreen: A.redOrGreen,
          adaptFontSize: c.adaptFontSize,
          setSortType: he,
          getKey: function (e) {
            return "".concat(e.code, "-").concat(e.market);
          },
          allotText: function (e) {
            var n,
              o = l.TRADE_STATE[l.TARGET.ALLOT],
              r =
                (t((n = {}), o.NO_COMMIT, "获得配股资格，点击申购"),
                t(n, o.COMMITED, "已申购待券商确认"),
                t(n, o.COMMITED_NOT_DRAWN, "已申购待券商确认"),
                n);
            return r[e.allotment.status] || r[o.NO_COMMIT];
          },
          holdVal: function (e) {
            if (0 == +e.hold_val && 0 == +e.hold_num) {
              try {
                if (
                  R.value.some(function (t) {
                    return (
                      t.market === e.market &&
                      t.code === e.code &&
                      g.getFinalTradeState(t) ===
                        l.TRADE_STATE[t.stock_type].PROCESSED
                    );
                  })
                )
                  return "已清仓";
              } catch (e) {
                m.aegisReporter.reportEvent("ASSET-HOLD-VAL-TEXT-ERR", {
                  ext2: JSON.stringify(e),
                });
              }
              return i.formatNoUnit("0");
            }
            return e.hold_val ? i.formatNoUnit(e.hold_val) : " ";
          },
          onItemClick: function (e) {
            Z(),
              ne(),
              ae({
                type: _.isHKMarket(e.market)
                  ? p.EPositionType.HKSTOCK
                  : p.EPositionType.STOCK,
                target: e,
              }),
              w.$stat.click(
                "trade.asset.stock_drawer_" + (ue.value ? "show" : "hide")
              );
          },
          curDrawerIsShow: le,
          handleCurDrawerShow: ce,
          isExRightsAndExDividends: function (e) {
            return /(XR|XD|DR|UC)/gi.test(e);
          },
          isDifferenceInHoldAndCanuse: P,
          showBubbleTipsFlag: ke,
          closeBubble: Se,
          longPressActiveKey: V,
          onTouchstart: W,
          onTouchmove: X,
          onTouchcancel: J,
          longPressActiveKey4ColA: Q,
          onTouchstart4ColA: Y,
          onTouchmove4ColA: ee,
          onTouchcancel4ColA: te,
          setBubbleCloseProperty: be,
          onJumpQuote: function (e) {
            C("jumpQuote", e);
          },
          MARKET_CODE_HK: _.MARKET_CODE_HK,
          canRenderDelayAssetInfo: O,
          getCostPrefix: Te,
          getHoldCost: ge,
        }
      );
    },
  };
Array ||
  (
    o.resolveComponent("ListHeader") +
    o.resolveComponent("MarketLabel") +
    o.resolveComponent("position-drawer") +
    o.resolveComponent("BubbleTip")
  )(),
  Math ||
    (
      function () {
        return "../../../components/MarketLabel/MarketLabel.js";
      } +
      function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      }
    )();
var w = o._export_sfc(C, [
  [
    "render",
    function (e, t, n, r, i, s) {
      return o.e(
        {
          a: o.o(r.onSort),
          b: o.p({
            fields: r.fields,
            "sort-field": r.sortField,
            "sort-order": r.sortOrder,
            "header-marker": !0,
            border: !1,
          }),
          c: o.f(r.storedList, function (t, n, i) {
            return o.e(
              {
                a: t.feKey === r.longPressActiveKey ? 1 : "",
                b: o.o(function (e) {
                  return r.onTouchstart(e, t.feKey);
                }, t.feKey),
                c: o.o(function (e) {
                  return r.onTouchmove(e, t.feKey);
                }, t.feKey),
                d: o.o(function (e) {
                  return r.onTouchcancel(e, t.feKey);
                }, t.feKey),
                e: o.o(function (e) {
                  return r.onTouchcancel(e, t.feKey);
                }, t.feKey),
                f: o.n(r.simpleMode || 0 == n ? "" : "border--top-c1"),
                g: t.feKey === r.longPressActiveKey4ColA ? 1 : "",
                h: o.o(function (e) {
                  return r.onTouchstart4ColA(e, t.feKey);
                }, t.feKey),
                i: o.o(function (e) {
                  return r.onTouchmove4ColA(e, t.feKey);
                }, t.feKey),
                j: o.o(function (e) {
                  return r.onTouchcancel4ColA(e, t.feKey);
                }, t.feKey),
                k: o.o(function (e) {
                  return r.onTouchcancel4ColA(e, t.feKey);
                }, t.feKey),
              },
              r.hidefund
                ? { l: t.feKey }
                : {
                    m: o.t(t.name),
                    n: o.n(t.feNameCls),
                    o: "7ca9e0db-1-" + i,
                    p: o.p({ market: t.market }),
                    q: o.t(t.code),
                  },
              { r: r.showAllotment(t) },
              r.showAllotment(t)
                ? {
                    s: o.t(r.allotText(t)),
                    t: o.o(function (e) {
                      return r.toTradeAllot(t);
                    }, t.feKey),
                  }
                : {},
              { v: r.showBandAssist(t) },
              r.showBandAssist(t)
                ? {
                    w: o.t(r.bandAssistText(t)),
                    x: o.o(function (e) {
                      return r.toAnalysisDetail(t);
                    }, t.feKey),
                  }
                : {},
              { y: r.handleCurDrawerShow(t) },
              r.handleCurDrawerShow(t)
                ? {
                    z: o.o(function (e) {
                      return r.onShareClick(t);
                    }, t.feKey),
                    A: o.o(function (e) {
                      return r.onJumpQuote(t);
                    }, t.feKey),
                    B: "7ca9e0db-2-" + i,
                    C: o.p({
                      "position-target": t,
                      border: !r.showAllotment(t) && !r.showBandAssist(t),
                      "border-bottom": n !== r.storedList.length - 1,
                      "hide-margin-top": r.getExtraCount(t) > 0,
                    }),
                  }
                : {},
              {
                D: o.o(function (e) {
                  return r.onStockClick(t);
                }, t.feKey),
              },
              r.hidefund
                ? {}
                : {
                    E: o.t(r.holdVal(t)),
                    F: o.n(t.feHoldValCls),
                    G: o.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.hold_num, "--"),
                        !1,
                        0
                      )
                    ),
                    H: o.t(
                      Number(t.can_use) < Number(t.hold_num)
                        ? "(".concat(
                            e.$filters.money.formatNoUnit(
                              e.$filters.defaults(t.can_use, "--"),
                              !1,
                              0
                            ),
                            ")"
                          )
                        : ""
                    ),
                    I: o.n(t.feHoldNumCls),
                  },
              r.hidefund
                ? {}
                : {
                    J: o.t(t.market === r.MARKET_CODE_HK ? "$" : ""),
                    K: o.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.new_price, "--"),
                        !1,
                        3
                      )
                    ),
                    L: o.n(t.feNewPriceCls),
                    M: o.t(r.getCostPrefix(t)),
                    N: o.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(r.getHoldCost(t), "--"),
                        !1,
                        3
                      )
                    ),
                    O: o.n(t.feHoldCostCls),
                  },
              { P: !r.hidefund && r.isExRightsAndExDividends(t.name) },
              (!r.hidefund && r.isExRightsAndExDividends(t.name)) || r.hidefund
                ? {}
                : {
                    Q: o.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.earn_val_day, "--"),
                        !0
                      )
                    ),
                    R: o.n(t.feEarnValDayCls),
                    S: o.t(
                      e.$filters.defaults(
                        e.$filters.postfix(
                          e.$filters.money.prefix(t.earn_per_day),
                          "%"
                        )
                      )
                    ),
                    T: o.n(t.feEarnPerDayCls),
                  },
              r.hidefund
                ? {}
                : {
                    U: o.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.earn_val, "--"),
                        !0
                      )
                    ),
                    V: o.n(t.feEarnValCls),
                    W: o.t(
                      e.$filters.postfix(
                        e.$filters.money.prefix(t.earn_per),
                        "%"
                      )
                    ),
                    X: o.n(t.feEarnPerCls),
                  },
              r.hidefund
                ? {}
                : {
                    Y: o.t(
                      e.$filters.postfix(
                        e.$filters.defaults(t.position, "--"),
                        "%"
                      )
                    ),
                  },
              r.hidefund
                ? {}
                : {
                    Z: o.t(t.stockholder_desc || "--"),
                    aa: o.t(t.stockholder_code || "--"),
                  },
              {
                ab: t.feKey,
                ac: o.n(
                  r.getExtraCount(t) > 0 || r.handleCurDrawerShow(t)
                    ? "stock-list-item--extra"
                    : ""
                ),
                ad: o.s(r.getExtraStyle(t)),
                ae: o.o(function (e) {
                  return r.onItemClick(t);
                }, t.feKey),
                af: o.o(function (e) {
                  return r.handleZXGAppSwipeActionChange(!0);
                }, t.feKey),
                ag: o.o(function (e) {
                  return r.handleZXGAppSwipeActionChange(!1);
                }, t.feKey),
              }
            );
          }),
          d: r.hidefund,
          e: !r.hidefund,
          f: !r.hidefund,
          g: !r.hidefund,
          h: !r.hidefund,
          i: !r.hidefund,
          j: !r.hidefund,
          k: o.n(r.active ? "active" : ""),
          l: o.o(function () {
            return r.onScrollStat && r.onScrollStat.apply(r, arguments);
          }),
          m: r.isAssetIndex,
        },
        (r.isAssetIndex, {}),
        { n: r.showBubbleTipsFlag && r.canRenderDelayAssetInfo },
        r.showBubbleTipsFlag && r.canRenderDelayAssetInfo
          ? {
              o: o.o(function (e) {
                return r.closeBubble(!0);
              }),
              p: o.p({
                "is-show": r.showBubbleTipsFlag && r.canRenderDelayAssetInfo,
                content: "点击股票名称可进入个股页",
                "arrow-position": "bottom-left",
                "show-close-btn": !0,
              }),
            }
          : {},
        { q: r.simpleMode ? 1 : "" }
      );
    },
  ],
]);
wx.createComponent(w);
