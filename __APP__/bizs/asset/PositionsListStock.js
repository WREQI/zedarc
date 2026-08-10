var e = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/slicedToArray");
require("../../@babel/runtime/helpers/Objectvalues"),
  require("../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../app.js");
var r = require("../../common/vendor.js"),
  o = require("../../config/key.js"),
  i = require("../../filters/money.js"),
  a = require("../../model/index/useHideFund.js"),
  l = require("../../config/enum.js"),
  s = require("../../common/components/Dialog/index.js"),
  d = require("../../model/common/useZxgSupport.js");
require("../../service/broker.js");
var c = require("../../service/stat/mp-weixin.js"),
  u = require("../../components/ValueColor/utils.js"),
  f = require("../../utils/getPlatform.js"),
  h = require("../../stores/app/useMode.js"),
  m = require("../../model/trade/utils.js"),
  p = require("../../service/aegis/platform/not-wujie.js"),
  v = require("../../utils/market.js"),
  g = require("../../config/broker/11100/index.js"),
  _ = require("../../common/utils/colorHelper.js"),
  y = f.getPlatform().isMpPlugin,
  k = [
    { text: "股票/市值", sort: 1, key: "hold_val", highlight: !0 },
    {
      text: "最新/成本",
      sort: 0,
      key: "new_price",
      align: "right",
      highlight: !0,
      explain: !0,
      explainClickAll: !0,
    },
    {
      text: "持有/可卖",
      sort: 1,
      key: "hold_num",
      align: "right",
      highlight: !0,
    },
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
    { text: "仓位", sort: 1, key: "position", align: "right", highlight: !0 },
    { text: " ", sort: 0, key: "fun_field1", align: "right", highlight: !0 },
    { text: " ", sort: 0, key: "fun_field2", align: "right", highlight: !0 },
  ],
  A = { RESET: 0, DES: 1, ASC: 2 },
  S = 0,
  T = 0,
  x = r.index.getSystemInfoSync().windowWidth,
  E = {
    options: { styleIsolation: "shared" },
    components: {
      ListHeader: function () {
        return "./ListHeader.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      headerMarker: { type: Boolean, default: !1 },
      isActive: { type: Boolean, default: !0 },
      last: { type: Boolean, default: !1 },
      first: { type: Boolean, default: !1 },
      useScene: { type: String, default: "" },
      currentActiveStock: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (E) {
      var w = r.getCurrentInstance().proxy,
        C = r.inject("assetIndexComp"),
        O = r.inject("onStockListSort"),
        b = r.inject("isAssetIndex"),
        M = r.inject("doneOrderList"),
        D = r.ref({ key: "hold_val", value: A.DES }),
        j = r.ref(!1),
        $ = r.ref(D.value.value),
        R = r.ref(D.value.key),
        q = r.ref(!1),
        L = r.ref(!1),
        I = !0,
        K = r.ref(0),
        H = n(E.lists),
        N = a.useHideFund().hidefund,
        F = f.getPlatform().isMiniProgram,
        G = r.inject("embeddedMode"),
        P = h.useModeStore(),
        U = r.storeToRefs(P).simpleMode;
      "AssetIndex" !== w.$route.name || F || (L.value = !0),
        d.useZxgSupport().value &&
          !["12800", "10900"].includes(String(g.brokerConfig.base.code)) &&
          (q.value = !g.brokerConfig.dictionary.Enties.analysis.hidden);
      var z = [].concat(k);
      G.value &&
        ((q.value = !1),
        (L.value = !1),
        z.forEach(function (e) {
          (e.sort = 0), (e.highlight = !1);
        })),
        U.value && (L.value = !1),
        q.value || z.pop(),
        L.value || z.pop();
      var B = r.computed(function () {
          var e;
          if (
            ((null == (e = E.lists) ? void 0 : e.length) > 0 &&
              I &&
              (O({ sortKey: R.value, sortOrder: $.value }), (I = !1)),
            E.isActive && (H = n(E.lists)),
            G.value &&
              "trade" === E.useScene &&
              E.currentActiveStock &&
              E.currentActiveStock.code &&
              E.currentActiveStock.market)
          ) {
            var t = E.currentActiveStock || {},
              r = t.code,
              o = t.market,
              i = H.findIndex(function (e) {
                return e.code === r && e.market === o;
              });
            if (i > -1) {
              var a,
                l = H.splice(i, 1);
              (a = H).unshift.apply(a, n(l));
            }
          }
          return H;
        }),
        X = r.computed(function () {
          return l.TRADE_STATE[l.TARGET.ALLOT];
        });
      function Z() {
        var e =
          ("function" == typeof getCurrentPages && getCurrentPages()) || [];
        e[e.length - 1] &&
          r.index
            .createSelectorQuery()
            .in(w)
            .select(".stock-list--stock .stock-list-body .col-g .radius-bg")
            .boundingClientRect(function (e) {
              e && ((S = e.left), (T = e.width));
            })
            .exec();
      }
      r.watch(
        function () {
          return E.lists;
        },
        function (e) {
          e.length > 0 && q.value && !S && setTimeout(Z, 300);
        },
        { flush: "post" }
      ),
        r.watch(
          function () {
            return E.isActive;
          },
          function (e) {
            e && q.value && !S && setTimeout(Z, 300);
          },
          { flush: "post" }
        );
      var V = !1;
      function J(e) {
        E.isActive && Q(e, "vertical");
      }
      var Q = r.debounce(function () {}, 300);
      function W() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.key,
          n = e.sort;
        if (t && Object.values(A).includes(n))
          return ($.value = n), void (R.value = t);
        (D.value = r.index.getStorageSync(o.ASSET_SORT_TYPE) || {
          key: "hold_val",
          value: A.DES,
        }),
          ($.value = D.value.value),
          (R.value = D.value.key);
      }
      return (
        r.onBeforeMount(function () {
          W();
        }),
        r.onMounted(function () {
          F || null == window || window.addEventListener("scroll", J);
        }),
        r.onBeforeUnmount(function () {
          F || null == window || window.removeEventListener("scroll", J);
        }),
        r.onPageShow(function () {
          y && W();
        }),
        {
          isAssetIndex: b,
          hidefund: N,
          active: j,
          fields: z,
          sortType: D,
          sortOrder: $,
          sortField: R,
          storedList: B,
          onSort: function (e, t) {
            W({ key: e, sort: t }),
              O({ sortKey: R.value, sortOrder: $.value }),
              w.$stat.click(
                "trade.asset."
                  .concat(e, ".")
                  .concat({ 0: "RESET", 1: "DES", 2: "ASC" }[t])
              );
          },
          onStockClick: function (e) {
            "asset" === E.useScene
              ? c.stat.click("trade.asset.holding.click")
              : "trade" === E.useScene &&
                c.stat.click("trade.trade.holding.click"),
              G.value || r.index.navToQuote(e);
          },
          onShareClick: function (e) {
            var t = {
                name: e.name,
                code: e.code,
                price: e.new_price,
                hold: e.hold_cost,
                market: e.market,
              },
              n = [+e.earn_per_day, +e.earn_val_day, +e.earn_per, +e.earn_val];
            C.$refs.shareDialog && C.$refs.shareDialog.open(1, n, t);
          },
          onAnalysisClick: function (e) {
            w.$router.push({
              name: "AnalysisDetail",
              query: {
                qry_type: "1",
                stock_name: e.name,
                trade_market: e.market,
                stock_code: e.code,
                stock_type: "0",
              },
            }),
              w.$stat.click("trade.asset.analysis.review");
          },
          showAllotment: function (e) {
            var t = l.TRADE_STATE[l.TARGET.ALLOT];
            return (
              e.allotment && -1 < [t.NO_COMMIT].indexOf(e.allotment.status)
            );
          },
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
          ALLOT_STATE: X,
          handleExplain: function (e) {
            var n = e.name.match(/(XR|XD|DR|UC)/gi),
              r = t(n, 1)[0],
              o = "";
            switch ((void 0 === r ? "" : r).toLowerCase()) {
              case "xr":
                o =
                  "该股除权中，根据交易所规则股价会下折，送股（需股权登记日前持有该股票）将在下一个交易日发放到股票账户。";
                break;
              case "xd":
                o =
                  "该股除息中，根据交易所规则股价会下折，分红（需股权登记日前持有该股票）将在一个交易日发放到股票账户。";
                break;
              case "dr":
                o =
                  "该股除权除息中，根据交易所规则股价会下折，送股分红（需股权登记日前持有该股票）将在除权除息下一个交易日内发放到股票账户。";
                break;
              case "uc":
                o =
                  "您持有的证券今日有份额折算，可能会影响今日盈亏数据展示（不影响实际盈亏）。在下个交易日将自动恢复。";
            }
            s.Dialog({
              context: C,
              message: o,
              messageType: "html",
              messageAlign: "left",
            });
          },
          handleZXGAppSwipeActionChange: function (e) {
            w.$sdk.handleJSTouchEventFirst(e).catch(r.noop);
          },
          showAnalysis: q,
          showShare: L,
          redOrGreen: _.redOrGreen,
          adaptFontSize: u.adaptFontSize,
          scrollLeft: K,
          onHorizontalScroll: function (e) {
            var t,
              n =
                (null == (t = null == e ? void 0 : e.detail)
                  ? void 0
                  : t.scrollLeft) || 0;
            q.value &&
              (!V &&
                n + x >= S + T &&
                (w.$stat.click("trade.asset.analysis.review.show"), (V = !0)),
              V && n + x < S && (V = !1)),
              Q(e, "horizontal");
          },
          setSortType: W,
          getKey: function (e) {
            return "".concat(e.code, "-").concat(e.market);
          },
          simpleMode: U,
          allotText: function (t) {
            var n,
              r = l.TRADE_STATE[l.TARGET.ALLOT],
              o =
                (e((n = {}), r.NO_COMMIT, "获得配股资格，点击申购"),
                e(n, r.COMMITED, "已申购待券商确认"),
                e(n, r.COMMITED_NOT_DRAWN, "已申购待券商确认"),
                n);
            return o[t.allotment.status] || o[r.NO_COMMIT];
          },
          holdVal: function (e) {
            if (0 == +e.hold_val && 0 == +e.hold_num) {
              try {
                if (
                  M.value.some(function (t) {
                    return (
                      t.market === e.market &&
                      t.code === e.code &&
                      m.getFinalTradeState(t) ===
                        l.TRADE_STATE[t.stock_type].PROCESSED
                    );
                  })
                )
                  return "已清仓";
              } catch (e) {
                p.aegisReporter.reportEvent("ASSET-HOLD-VAL-TEXT-ERR", {
                  ext2: JSON.stringify(e),
                });
              }
              return i.formatNoUnit("0");
            }
            return e.hold_val ? i.formatNoUnit(e.hold_val) : " ";
          },
          onExplain: function (e) {
            var t, n;
            if ("new_price" === (null == e ? void 0 : e.key)) {
              c.stat.click("trade.asset.new_price_expain_click");
              var r =
                (null ==
                (n =
                  null == (t = g.brokerConfig.dictionary) ? void 0 : t.Enties)
                  ? void 0
                  : n.charge) &&
                !g.brokerConfig.dictionary.Enties.charge.hidden;
              s.Dialog({
                showCancelButton: r,
                title: "成本价",
                message:
                  '<div class="text-color-2 align-l">在买入时，成本价中因包含了买入的成本和交易的手续费，因此买入成本价会高于成交价。买入成功后，在盈亏中也会对应体现交易的费用。<br>\n\r<br>在卖出时，卖出成交的资金会扣除交易的手续费，因此也会对成本价造成影响。</div>',
                messageType: "html",
                messageAlign: "left",
                cancelButtonText: "查看收费标准",
                confirmButtonText: "我知道了",
                onConfirm: function () {
                  c.stat.click("trade.asset.new_price_expain_confirm_click");
                },
                onCancel: function () {
                  c.stat.click(
                    "trade.asset.new_price_expain_account_change_click"
                  ),
                    w.$router.push({ name: "AccountCharge" });
                },
              });
            }
          },
          embeddedMode: G,
          MARKET_CODE_HK: v.MARKET_CODE_HK,
        }
      );
    },
    activated: function () {
      this.setSortType();
    },
  };
Array ||
  (r.resolveComponent("ListHeader") + r.resolveComponent("MarketLabel"))(),
  Math;
var w = r._export_sfc(E, [
  [
    "render",
    function (e, t, n, o, i, a) {
      return r.e(
        {
          a: r.o(o.onSort),
          b: r.o(o.onExplain),
          c: r.p({
            fields: o.fields,
            "sort-field": o.sortField,
            "sort-order": o.sortOrder,
            "header-marker": n.headerMarker,
            border: !o.simpleMode,
          }),
          d: r.f(o.storedList, function (t, n, i) {
            return r.e(
              o.hidefund
                ? {}
                : r.e(
                    { a: !o.simpleMode },
                    o.simpleMode
                      ? {}
                      : { b: "37704a64-1-" + i, c: r.p({ market: t.market }) },
                    { d: r.t(t.name), e: /XR|XD|DR|UC/gi.test(t.name) },
                    /XR|XD|DR|UC/gi.test(t.name)
                      ? {
                          f: t.name,
                          g: r.o(function (e) {
                            return o.handleExplain(t);
                          }, t.name),
                        }
                      : {},
                    {
                      h: r.n(
                        t.name.length >= 6
                          ? o.simpleMode
                            ? "fs-24 no-line-height"
                            : "fs-28 no-line-height"
                          : ""
                      ),
                      i: r.t(o.holdVal(t)),
                      j: o.showAllotment(t),
                    },
                    o.showAllotment(t)
                      ? {
                          k: r.t(o.allotText(t)),
                          l: r.o(function (e) {
                            return o.toTradeAllot(t);
                          }, t._index),
                        }
                      : {},
                    { m: r.n(o.showAllotment(t) ? "cell--high" : "") }
                  ),
              o.hidefund
                ? {}
                : {
                    n: r.t(t.market === o.MARKET_CODE_HK ? "$" : ""),
                    o: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.new_price, "--"),
                        !1,
                        3
                      )
                    ),
                    p: r.n(o.adaptFontSize(t.new_price, 1e3, "28")),
                    q: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.hold_cost, "--"),
                        !1,
                        3
                      )
                    ),
                  },
              o.hidefund
                ? {}
                : {
                    r: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.hold_num, "--"),
                        !1,
                        0
                      )
                    ),
                    s: r.n(o.adaptFontSize(t.hold_num, 1e6, "28")),
                    t: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.can_use, "--"),
                        !1,
                        0
                      )
                    ),
                  },
              o.hidefund
                ? {}
                : {
                    v: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.earn_val_day, "--"),
                        !0
                      )
                    ),
                    w: r.n(o.redOrGreen(t.earn_val_day, t.feKey)),
                    x: r.n(o.adaptFontSize(t.earn_val_day, 1e5, "24")),
                    y: r.t(
                      e.$filters.defaults(
                        e.$filters.postfix(
                          e.$filters.money.prefix(t.earn_per_day),
                          "%"
                        )
                      )
                    ),
                    z: r.n(o.redOrGreen(t.earn_per_day, t.feKey)),
                  },
              o.hidefund
                ? {}
                : {
                    A: r.t(
                      e.$filters.money.formatNoUnit(
                        e.$filters.defaults(t.earn_val, "--"),
                        !0
                      )
                    ),
                    B: r.n(o.redOrGreen(t.earn_val, t.feKey)),
                    C: r.n(o.adaptFontSize(t.earn_val, 1e7, "24")),
                    D: r.t(
                      e.$filters.postfix(
                        e.$filters.money.prefix(t.earn_per),
                        "%"
                      )
                    ),
                    E: r.n(o.redOrGreen(t.earn_per, t.feKey)),
                  },
              o.hidefund
                ? { H: o.showAnalysis || o.showShare ? "" : 1 }
                : {
                    F: r.t(
                      e.$filters.postfix(
                        e.$filters.defaults(t.position, "--"),
                        "%"
                      )
                    ),
                    G: o.showAnalysis || o.showShare ? "" : 1,
                  },
              o.showAnalysis
                ? r.e(
                    { I: t.market !== o.MARKET_CODE_HK },
                    t.market !== o.MARKET_CODE_HK
                      ? {
                          J: r.n(o.simpleMode ? "" : "icon icon-analysis"),
                          K: r.o(function (e) {
                            return o.onAnalysisClick(t);
                          }, t._index),
                        }
                      : {}
                  )
                : {},
              o.showShare
                ? {
                    L: r.o(function (e) {
                      return o.onShareClick(t);
                    }, t._index),
                  }
                : {},
              { M: !o.simpleMode && n != o.storedList.length - 1 },
              (o.simpleMode || o.storedList.length, {}),
              {
                N: t._index,
                O: r.n(
                  t.allotment &&
                    -1 < [o.ALLOT_STATE.NO_COMMIT].indexOf(t.allotment.status)
                    ? "stock-list-item--high"
                    : ""
                ),
                P: r.o(function (e) {
                  return o.onStockClick(t);
                }, t._index),
                Q: r.o(function (e) {
                  return o.handleZXGAppSwipeActionChange(!0);
                }, t._index),
                R: r.o(function (e) {
                  return o.handleZXGAppSwipeActionChange(!1);
                }, t._index),
              }
            );
          }),
          e: !o.hidefund,
          f: !o.hidefund,
          g: !o.hidefund,
          h: !o.hidefund,
          i: !o.hidefund,
          j: !o.hidefund,
          k: o.showAnalysis,
          l: o.showShare,
          m: r.n(o.active ? "active" : ""),
          n: r.o(function () {
            return (
              o.onHorizontalScroll && o.onHorizontalScroll.apply(o, arguments)
            );
          }),
          o: o.isAssetIndex,
        },
        (o.isAssetIndex, {}),
        {
          p: n.lists.length > 0,
          q: r.n(o.simpleMode ? "stock-list-container__simple-mode" : ""),
          r: r.n(o.embeddedMode ? "stock-list-container__embedded-mode" : ""),
          s: r.n(n.last ? "br" : "border--bottom"),
          t: r.n(n.first ? "first" : ""),
          v: r.n(
            o.showAnalysis || o.showShare || !o.isAssetIndex
              ? ""
              : "col-f-padding"
          ),
        }
      );
    },
  ],
]);
wx.createComponent(w);
