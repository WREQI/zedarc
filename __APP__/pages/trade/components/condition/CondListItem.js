var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../app.js");
var t = require("../../../../config/enum/condition.js"),
  n = require("../../../../model/debt/debtAutoOrderTime.js"),
  a = require("../../../../common/vendor.js"),
  d = require("../../../../model/trade/conditions/transfer-backend/transferByType.js"),
  o = require("../../../../model/index/useHideFund.js"),
  r = require("../../../../service/connect/index.js"),
  s = {
    components: {
      InvalidItem: function () {
        return "./InvalidItem.js";
      },
      TriggeredItem: function () {
        return "./TriggeredItem.js";
      },
      GridItem: function () {
        return "./GridItem.js";
      },
      TPSLItem: function () {
        return "./TPSLItem.js";
      },
      RunningItem: function () {
        return "./RunningItem.js";
      },
      LimitUpItem: function () {
        return "./LimitUpItem.js";
      },
      OpeningSellItem: function () {
        return "./OpeningSellItem.js";
      },
    },
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      stateType: { type: Number, default: t.CondStatus.WAIT },
      scene: { type: String, default: "" },
      jumpType: { type: String, default: "push" },
      showTimeGuide: { type: Boolean, default: !1 },
    },
    setup: function (s, i) {
      var u = i.emit,
        c = a.getCurrentInstance().proxy,
        p = o.useHideFund().hidefund,
        m = a.inject("condTagMaps"),
        l = a.computed(function () {
          return s.scene === t.COND_CURRENT_SCENE.assetIndex;
        }),
        I = a.computed(function () {
          return (
            m.value[
              ""
                .concat(s.data.cond_id || "default", "_")
                .concat(s.data.market || s.data.trade_market, "_")
                .concat(s.data.scode || s.data.stock_code)
            ] || {}
          );
        }),
        C = a.computed(function () {
          return l.value, d.transferByType(s.data);
        }),
        T = a.computed(function () {
          var n = {
            basePriceTag: I.value,
            scene: l.value ? t.COND_CURRENT_SCENE.assetIndex : s.scene,
          };
          return l.value
            ? e(
                e({}, n),
                {},
                { hidefund: p.value, showBorderBottom: !0, showBorderTop: !1 }
              )
            : n;
        }),
        y = a.computed(function () {
          return s.stateType === t.CondStatus.INVALID;
        }),
        g = a.computed(function () {
          return s.stateType === t.CondStatus.COMPLETE;
        }),
        _ = a.computed(function () {
          return s.stateType === t.CondStatus.WAIT;
        });
      return {
        basePriceTag: I,
        hidefund: p,
        isAssetIndexScene: l,
        condTagMaps: m,
        formattedData: C,
        itemProps: T,
        getItemData: function (e) {
          return (
            l.value,
            s.data.isRepoCond ||
            e === t.CondTypesBackEnd.OPENING_SELL ||
            "running" === e
              ? C.value
              : s.data
          );
        },
        shouldShowInvalid: y,
        shouldShowTriggered: g,
        shouldShowRunning: _,
        CondStatus: t.CondStatus,
        CondTypesBackEnd: t.CondTypesBackEnd,
        COND_CURRENT_SCENE: t.COND_CURRENT_SCENE,
        handleCondClick: function () {
          if (
            (l.value ? r.unsubscribe() : u("condDetailClick"),
            s.data.isRepoCond)
          ) {
            var e = s.stateType === t.CondStatus.WAIT;
            c.$router.push({
              name: "DebtAutoOrder",
              query: n.getDebtAutoOrderRouteQuery({
                invest_time_set_flag: s.data.invest_time_set_flag,
                isRunning: e,
              }),
            });
          } else
            l.value
              ? c.$stat.click(
                  "push" === s.jumpType
                    ? "trade.asset.cond.tab_detail"
                    : "trade.trade.cond.tab_detail"
                )
              : c.$stat.click("assetall.cond.list_detail_".concat(s.stateType)),
              c.$router.push({
                name: "ConditionDetail",
                query: { cond_id: s.data.cond_id },
              });
        },
      };
    },
  };
Array ||
  (
    a.resolveComponent("InvalidItem") +
    a.resolveComponent("TriggeredItem") +
    a.resolveComponent("RunningItem") +
    a.resolveComponent("GridItem") +
    a.resolveComponent("TPSLItem") +
    a.resolveComponent("LimitUpItem") +
    a.resolveComponent("OpeningSellItem")
  )();
var i = a._export_sfc(s, [
  [
    "render",
    function (t, n, d, o, r, s) {
      return a.e(
        { a: o.shouldShowInvalid },
        o.shouldShowInvalid
          ? { b: a.p(e(e({}, o.itemProps), {}, { data: d.data })) }
          : o.shouldShowTriggered
          ? {
              d: a.p(
                e(
                  e({}, o.itemProps),
                  {},
                  { data: d.data, "is-asset-index-scene": o.isAssetIndexScene }
                )
              ),
            }
          : o.shouldShowRunning
          ? a.e(
              { f: d.data.isRepoCond },
              d.data.isRepoCond
                ? {
                    g: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        {
                          data: o.getItemData("repo"),
                          "show-time-guide": d.showTimeGuide,
                        }
                      )
                    ),
                  }
                : d.data.cond_type === o.CondTypesBackEnd.GRID
                ? {
                    i: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        { data: o.getItemData(o.CondTypesBackEnd.GRID) }
                      )
                    ),
                  }
                : d.data.cond_type === o.CondTypesBackEnd.TPSL
                ? {
                    k: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        { data: o.getItemData(o.CondTypesBackEnd.TPSL) }
                      )
                    ),
                  }
                : d.data.cond_type === o.CondTypesBackEnd.LIMIT_UP
                ? {
                    m: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        { data: o.getItemData(o.CondTypesBackEnd.LIMIT_UP) }
                      )
                    ),
                  }
                : d.data.cond_type === o.CondTypesBackEnd.OPENING_SELL
                ? {
                    o: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        { data: o.getItemData(o.CondTypesBackEnd.OPENING_SELL) }
                      )
                    ),
                  }
                : {
                    p: a.p(
                      e(
                        e({}, o.itemProps),
                        {},
                        { data: o.getItemData("running") }
                      )
                    ),
                  },
              {
                h: d.data.cond_type === o.CondTypesBackEnd.GRID,
                j: d.data.cond_type === o.CondTypesBackEnd.TPSL,
                l: d.data.cond_type === o.CondTypesBackEnd.LIMIT_UP,
                n: d.data.cond_type === o.CondTypesBackEnd.OPENING_SELL,
              }
            )
          : {},
        {
          c: o.shouldShowTriggered,
          e: o.shouldShowRunning,
          q: o.isAssetIndexScene ? "" : 1,
          r: o.isAssetIndexScene ? 1 : "",
          s: a.o(function () {
            return o.handleCondClick && o.handleCondClick.apply(o, arguments);
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-eddac207"],
]);
wx.createComponent(i);
