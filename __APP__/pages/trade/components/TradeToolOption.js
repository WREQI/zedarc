var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = require("../../../model/index/useTabBar.js"),
  o = require("../../../model/trade/useConditionEntry.js"),
  i = require("../../../stores/app/useMode.js"),
  a = require("../../../service/stat/mp-weixin.js"),
  c = require("../../../utils/index.js"),
  s = require("../../../adapter/router.js"),
  d = require("../../../config/enum.js"),
  l = require("../../../service/stat/config.js"),
  u = {
    name: "TradeToolOption",
    props: {
      type: { type: String, required: !0 },
      code: { type: String, default: "" },
      market: { type: String, default: "" },
      name: { type: String, default: "" },
      holder: { type: String, default: "" },
      assetData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      conditionItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      scene: { type: String, default: "h5Embeded" },
    },
    setup: function (u, p) {
      var v = p.emit,
        m = i.useModeStore(),
        _ = n.storeToRefs(m).simpleMode,
        C = (n.inject("trade") || {}).stock,
        f = n.computed(function () {
          return u.type === r.TRADE_TAB_TYPE.CONDITION
            ? [
                {
                  title: "价格条件",
                  icon: "icon-price-cond",
                  val: d.COND_TAB_VALUE.priceCond,
                  desc: "到价触发，无需盯盘",
                  show: !0,
                },
                {
                  title: "止盈止损",
                  icon: "icon-tpsl-cond",
                  val: d.COND_TAB_VALUE.tpslCond,
                  desc: "锁定利润，控制风险",
                  show: h.value,
                },
                {
                  title: "定期定投",
                  icon: "icon-invest-cond",
                  val: d.COND_TAB_VALUE.investCond,
                  desc: "长期投资，分批建仓",
                  show: T.value,
                },
                {
                  title: "网格交易",
                  icon: "icon-grid-cond",
                  val: d.COND_TAB_VALUE.gridCond,
                  desc: "震荡市场，高抛低吸",
                  show: A.value,
                },
                {
                  title: "涨停买入",
                  icon: "icon-limitup-cond",
                  val: d.COND_TAB_VALUE.limitUpCond,
                  desc: "涨停触发，抢筹买入",
                  show: N.value,
                },
                {
                  title: "开板卖出",
                  icon: "icon-openingsell-cond",
                  val: d.COND_TAB_VALUE.openingSellCond,
                  desc: "开板回落，立即卖出",
                  show: y.value,
                },
              ].filter(function (e) {
                return e.show;
              })
            : [];
        }),
        E = o.useConditionEntry(),
        T = E.isInvestCondUser,
        A = E.isGridCondUser,
        h = E.isTPSLCondUser,
        k = E.checkBeforeJump,
        N = E.isLimitUpCondUser,
        y = E.isOpeningSellCondUser;
      return {
        toolList: f,
        simpleMode: _,
        onItemClick: function (n) {
          if (n.show)
            return u.type === r.TRADE_TAB_TYPE.CONDITION
              ? ((o = t(
                  e().mark(function t(n) {
                    var o, i, p, m, _, f, E, T, A, h, N;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.val === d.COND_TAB_VALUE.investCond &&
                                  a.stat.click(
                                    "trade.condition.create_invest_cond_click",
                                    void 0,
                                    void 0,
                                    {
                                      fchannel_id_fm_i:
                                        l.INVEST_COND_SCENE_CONFIG[u.scene],
                                    }
                                  ),
                                a.stat.click(
                                  "trade.tool.".concat(
                                    (null == (o = n.val)
                                      ? void 0
                                      : o.toLowerCase()) || "default",
                                    ".click"
                                  )
                                ),
                                (e.next = 4),
                                c.sleep(100)
                              );
                            case 4:
                              if (
                                ((e.prev = 4),
                                !(null == (i = null == C ? void 0 : C.value)
                                  ? void 0
                                  : i.quote))
                              ) {
                                e.next = 8;
                                break;
                              }
                              if (
                                !k(n.val, {
                                  stockInfo:
                                    null == (p = C.value) ? void 0 : p.quote,
                                  assetData:
                                    null ==
                                    (m = null == u ? void 0 : u.assetData)
                                      ? void 0
                                      : m.stock,
                                })
                              ) {
                                e.next = 8;
                                break;
                              }
                              return e.abrupt("return");
                            case 8:
                              e.next = 12;
                              break;
                            case 10:
                              (e.prev = 10), (e.t0 = e.catch(4));
                            case 12:
                              if (
                                (v("conditionItemClick"),
                                (T = r.INDEPENDENT_PAGE_CONFIG_TABBAR[n.val]),
                                (A = u.code
                                  ? {
                                      code: u.code,
                                      market: u.market,
                                      name: encodeURIComponent(u.name || ""),
                                    }
                                  : u.conditionItem),
                                !T)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                void (
                                  null == (_ = s.router()) ||
                                  _.push({
                                    name: r.INDEPENDENT_PAGE_CONFIG_TABBAR[
                                      n.val
                                    ],
                                    query: A,
                                  })
                                )
                              );
                            case 16:
                              if (n.val !== d.COND_TAB_VALUE.priceCond) {
                                e.next = 19;
                                break;
                              }
                              return (
                                (h = u.code
                                  ? {
                                      code: u.code,
                                      market: u.market,
                                      holder: u.holder,
                                      order_type: d.ORDER_TYPES.PRICE,
                                    }
                                  : u.conditionItem),
                                e.abrupt(
                                  "return",
                                  void (
                                    null == (f = s.router()) ||
                                    f.push({ name: "TradeStock", query: h })
                                  )
                                )
                              );
                            case 19:
                              n.val === d.COND_TAB_VALUE.investCond &&
                                ((N = u.code
                                  ? {
                                      code: u.code,
                                      market: u.market,
                                      holder: u.holder,
                                      order_type: d.ORDER_TYPES.INVEST,
                                    }
                                  : u.conditionItem),
                                null == (E = s.router()) ||
                                  E.push({ name: "TradeStock", query: N }));
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      t,
                      null,
                      [[4, 10]]
                    );
                  })
                )),
                function (e) {
                  return o.apply(this, arguments);
                })(n)
              : void 0;
          var o;
        },
      };
    },
  };
Array || n.resolveComponent("Empty")(), Math;
var p = n._export_sfc(u, [
  [
    "render",
    function (e, t, r, o, i, a) {
      return n.e(
        { a: o.toolList.length },
        o.toolList.length
          ? {
              b: n.f(o.toolList, function (e, t, r) {
                return {
                  a: n.n(e.icon),
                  b: n.t(e.title),
                  c: n.t(e.desc),
                  d: e.val,
                  e: n.o(function (t) {
                    return o.onItemClick(e);
                  }, e.val),
                };
              }),
            }
          : { c: n.p({ text: "暂无可选" }) },
        { d: n.n(o.simpleMode ? "trade-tool-option--simple" : "") }
      );
    },
  ],
]);
wx.createComponent(p);
