var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  a = require("../../../model/trade/useConditionRecords.js"),
  i = require("../../../model/trade/useConditionEntry.js"),
  d = require("../../../config/enum.js"),
  s = require("../../../common/components/Dialog/index.js"),
  c = require("../../../config/enum/condition.js"),
  u = require("../../../model/trade/useSearch.js"),
  l = {
    name: "ConditionDetail",
    components: {
      GridDetail: function () {
        return "../components/condition/GridItem.js";
      },
      TPSLDetail: function () {
        return "../components/condition/TPSLItem.js";
      },
      InvestDetail: function () {
        return "../components/condition/InvestDetail.js";
      },
      PriceDetail: function () {
        return "../components/condition/PriceDetail.js";
      },
      TriggeredBody: function () {
        return "../components/condition/TriggeredBody.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      LimitUpItem: function () {
        return "../components/condition/LimitUpItem.js";
      },
      OpeningSellItem: function () {
        return "../components/condition/OpeningSellItem.js";
      },
    },
    mixins: [require("../../../mixin/platforms/index.js").pluginMixins],
    setup: function () {
      var e,
        s = r.getCurrentInstance().proxy,
        l = r.ref(!0),
        p = a.useConditionRecords(),
        m = p.showTriggerRecord,
        f = p.showOperateBtns,
        h = p.isInvestCond,
        _ = p.orderList,
        g = p.orderListPage,
        y = p.recordInfo,
        C = p.getRecordsInfo,
        I = p.basePriceTag,
        T = p.orderCancel,
        v = p.getOrderList,
        b = i.useConditionEntry().checkBeforeJump,
        k = u.useSearch(),
        E = k.fetchHoldStock,
        S = k.holdStockData,
        w = k.holdStockRequestDone,
        D = r.ref(""),
        L = r.ref(!1),
        B = r.computed(function () {
          return +y.data.status === c.CondStatus.WAIT;
        }),
        P = r.computed(function () {
          return (
            +y.data.status === c.CondStatus.INVALID ||
            +y.data.status === c.CondStatus.COMPLETE
          );
        });
      return (
        r.watch(
          function () {
            return [P, y.data];
          },
          function (e) {
            var t = o(e, 2),
              n = t[0],
              r = t[1];
            n.value && r.cond_type === c.CondTypesBackEnd.TPSL && E();
          },
          { immediate: !0 }
        ),
        {
          needRefresh: l,
          condId: D,
          CondStatus: c.CondStatus,
          recordInfo: y,
          orderList: _,
          orderListPage: g,
          isInvestCond: h,
          getRecordsInfo: C,
          orderCancel: T,
          getOrderList: v,
          toTradeDetail: function (e) {
            "0" === e.code &&
              ((l.value = !1),
              s.$router.push({
                name: "TradeDetail",
                query: {
                  id: e.contract_no,
                  type: d.TARGET.STOCK,
                  no: e.contract_no,
                  time: r
                    .dayjs(1e3 * +e.order_time)
                    .format("YYYY-MM-DD HH:mm:ss"),
                },
              }));
          },
          onScrolltolower:
            ((e = n(
              t().mark(function e() {
                var n;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (null == (n = _.value) ? void 0 : n.length) <= 0 ||
                            g.value < 0 ||
                            !D.value ||
                            L.value
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (L.value = !0),
                            (e.next = 5),
                            v({ cond_id: D.value })
                          );
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(1));
                        case 9:
                          return (e.prev = 9), (L.value = !1), e.finish(9);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7, 9, 12]]
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
          checkBeforeJump: b,
          ORDER_TYPES: d.ORDER_TYPES,
          CondTypesBackEnd: c.CondTypesBackEnd,
          showTriggerRecord: m,
          showOperateBtns: f,
          basePriceTag: I,
          isRunning: B,
          isShowOneMoreBtn: P,
          holdStockData: S,
          holdStockRequestDone: w,
        }
      );
    },
    onShow: function () {
      var e = this;
      return n(
        t().mark(function n() {
          var o, a, i, d;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!e.needRefresh) {
                      t.next = 26;
                      break;
                    }
                    if (((i = e.$route.query), (d = i.cond_id), !i || !d)) {
                      t.next = 23;
                      break;
                    }
                    return (
                      (e.condId = d),
                      (t.prev = 4),
                      (t.next = 7),
                      e.getRecordsInfo(i)
                    );
                  case 7:
                    if (
                      ((null ==
                      (a = null == (o = e.recordInfo) ? void 0 : o.data)
                        ? void 0
                        : a.cond_type) === c.CondTypesBackEnd.INVEST
                        ? (e.isInvestCond = !0)
                        : (e.isInvestCond = !1),
                      !e.showTriggerRecord)
                    ) {
                      t.next = 15;
                      break;
                    }
                    return (
                      (e.orderListPage = 0),
                      (e.orderList = []),
                      (t.next = 13),
                      e.getOrderList(i)
                    );
                  case 13:
                    t.next = 16;
                    break;
                  case 15:
                    (e.orderListPage = 0), (e.orderList = []);
                  case 16:
                    t.next = 21;
                    break;
                  case 18:
                    (t.prev = 18),
                      (t.t0 = t.catch(4)),
                      r.index.showToast({ title: t.t0.retmsg });
                  case 21:
                    t.next = 24;
                    break;
                  case 23:
                    e.$nextTick(function () {
                      s.Dialog({
                        context: e,
                        message: "条件单号为空",
                        confirmButtonText: "确定",
                        showCancelButton: !1,
                        onConfirm: function () {
                          e.$router.replace({
                            name: "ConditionList",
                            query: { status: c.CondStatus.INVALID },
                          });
                        },
                      });
                    });
                  case 24:
                    t.next = 27;
                    break;
                  case 26:
                    e.needRefresh = !0;
                  case 27:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[4, 18]]
          );
        })
      )();
    },
    methods: {
      btnOrderCancel: function (e) {
        var t = this;
        this.$stat.click("assetall.cond.detail_cancel"),
          s.Dialog({
            message:
              "条件单终止后如达到原预设条件将不再触发交易委托,是否确认终止?",
            context: this,
            confirmButtonText: "终止",
            cancelButtonText: "取消",
            showCancelButton: !0,
            onConfirm: function () {
              t.orderCancel(e).then(function (e) {
                t.$router.push({
                  name: "ConditionList",
                  query: { status: c.CondStatus.INVALID },
                });
              });
            },
            onCancel: function () {},
          });
      },
      goOrderDetail: function (t, n) {
        var o = c.INDEPENDENT_PAGE_CONFIG_BACK_END[t.cond_type],
          r = {};
        if (
          n &&
          (null == t ? void 0 : t.cond_type) === c.CondTypesBackEnd.TPSL &&
          this.holdStockRequestDone
        )
          try {
            if (
              this.checkBeforeJump(d.ORDER_TYPES.TPSL, {
                searchResStock: { code: t.scode },
                assetData: this.holdStockData,
              })
            )
              return;
          } catch (e) {}
        if (
          [c.CondTypesBackEnd.INVEST, c.CondTypesBackEnd.PRICE].includes(
            t.cond_type
          ) &&
          t &&
          t.cond_id
        ) {
          var a = e(
            e({}, n ? {} : { cond_id: t.cond_id }),
            {},
            {
              cond_price: t.cond_price,
              valid_day_enum: t.valid_day_enum,
              order_price: t.order_price,
              quantity: t.quantity,
              trade_type: t.trade_type,
              end_time: t.end_time,
            },
            n ? { is_recreate: 1 } : {}
          );
          this.isInvestCond &&
            (a = e(
              e({}, a),
              {},
              {
                invest_period: t.invest_period,
                invest_weekday: t.invest_weekday,
                invest_date: t.invest_date,
                invest_time: t.invest_time,
                invest_quantity: t.invest_quantity,
                max_amount: t.max_amount,
                upper_limit: t.upper_limit,
                lower_limit: t.lower_limit,
                buy_price_type: t.buy_price_type,
              }
            )),
            (r.cond_info = encodeURIComponent(JSON.stringify(a)));
        }
        this.$router.replace({
          name: o,
          query: e(
            e(
              {
                code: t.scode,
                market: t.market,
                name: t.name,
                cond_id: t.cond_id,
              },
              n ? { is_recreate: 1 } : {}
            ),
            r
          ),
        });
      },
      btnOrderUpdate: function (e) {
        this.$stat.click("assetall.cond.detail_update"), this.goOrderDetail(e);
      },
      btnOrderCreate: function (e) {
        e.status === c.CondStatus.COMPLETE
          ? this.$stat.click("assetall.cond.complate_detail_create")
          : this.$stat.click("assetall.cond.invalidate_detail_create"),
          this.goOrderDetail(e, !0);
      },
    },
  };
Array ||
  (
    r.resolveComponent("GridDetail") +
    r.resolveComponent("TPSLDetail") +
    r.resolveComponent("LimitUpItem") +
    r.resolveComponent("OpeningSellItem") +
    r.resolveComponent("InvestDetail") +
    r.resolveComponent("PriceDetail") +
    r.resolveComponent("TriggeredBody") +
    r.resolveComponent("Empty") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/Empty/Empty.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var p = r._export_sfc(l, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return r.e(
        {
          a: e.rootFontSize,
          b: o.recordInfo.data.cond_type === o.CondTypesBackEnd.GRID,
        },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.GRID
          ? {
              c: r.p({
                data: o.recordInfo.data,
                "show-arrow": !1,
                "show-status": !0,
                "base-price-tag": o.basePriceTag,
                "show-sleep-reason": o.isRunning,
              }),
            }
          : {},
        { d: o.recordInfo.data.cond_type === o.CondTypesBackEnd.TPSL },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.TPSL
          ? {
              e: r.p({
                data: o.recordInfo.data,
                "show-arrow": !1,
                "show-status": !0,
                "base-price-tag": o.basePriceTag,
              }),
            }
          : {},
        { f: o.recordInfo.data.cond_type === o.CondTypesBackEnd.LIMIT_UP },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.LIMIT_UP
          ? {
              g: r.p({
                data: o.recordInfo.data,
                "show-arrow": !1,
                "show-status": !0,
                "base-price-tag": o.basePriceTag,
              }),
            }
          : {},
        { h: o.recordInfo.data.cond_type === o.CondTypesBackEnd.OPENING_SELL },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.OPENING_SELL
          ? {
              i: r.p({
                data: o.recordInfo.data,
                "show-arrow": !1,
                "show-status": !0,
                "base-price-tag": o.basePriceTag,
              }),
            }
          : {},
        { j: o.recordInfo.data.cond_type === o.CondTypesBackEnd.INVEST },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.INVEST
          ? {
              k: r.o(function (e) {
                return i.btnOrderCancel(o.recordInfo.data);
              }),
              l: r.p({
                data: o.recordInfo.data,
                "base-price-tag": o.basePriceTag,
              }),
            }
          : {},
        { m: o.recordInfo.data.cond_type === o.CondTypesBackEnd.PRICE },
        o.recordInfo.data.cond_type === o.CondTypesBackEnd.PRICE
          ? {
              n: r.o(function (e) {
                return i.btnOrderCancel(o.recordInfo.data);
              }),
              o: r.p({
                data: o.recordInfo.data,
                "base-price-tag": o.basePriceTag,
              }),
            }
          : {},
        { p: o.showOperateBtns },
        o.showOperateBtns
          ? r.e(
              { q: o.isRunning },
              o.isRunning
                ? {
                    r: r.o(function (e) {
                      return i.btnOrderCancel(o.recordInfo.data);
                    }),
                    s: r.o(function (e) {
                      return i.btnOrderUpdate(o.recordInfo.data);
                    }),
                  }
                : {}
            )
          : {},
        { t: o.isShowOneMoreBtn },
        o.isShowOneMoreBtn
          ? {
              v: r.o(function (e) {
                return i.btnOrderCreate(o.recordInfo.data);
              }),
            }
          : {},
        { w: o.showTriggerRecord },
        o.showTriggerRecord
          ? r.e(
              { x: o.orderList && o.orderList.length > 0 },
              o.orderList && o.orderList.length > 0
                ? {
                    y: r.f(o.orderList, function (e, t, n) {
                      return r.e(
                        {
                          a: r.o(function (t) {
                            return o.toTradeDetail(e);
                          }, t),
                          b: "dc71383a-7-" + n + ",dc71383a-0",
                          c: r.p({ "show-arrow": "0" === e.code, data: e }),
                          d:
                            o.orderList.length > 0 &&
                            t !== o.orderList.length - 1,
                        },
                        (o.orderList.length > 0 && o.orderList.length, {}),
                        { e: t }
                      );
                    }),
                  }
                : { z: r.p({ text: "暂无触发记录" }) }
            )
          : {},
        {
          A: r.o(function () {
            return o.onScrolltolower && o.onScrolltolower.apply(o, arguments);
          }),
          B: r.p({ id: "mp-dialog" }),
          C: r.sr("#global-wrap", "dc71383a-0"),
          D: r.p({
            id: "global-wrap",
            filePath: "/trade/condition/detail",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(p);
