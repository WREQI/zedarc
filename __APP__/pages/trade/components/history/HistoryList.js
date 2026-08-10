var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  n = require("../../../../stores/app/useMode.js"),
  o = require("../../../../config/enum.js"),
  i = require("../../../../model/trade/useHistoryNew.js"),
  s = {
    components: {
      StPullAndPagination: function () {
        return "../../../../components/PullAndPagination/mp/index.js";
      },
      HistoryItem: function () {
        return "./HistoryItem.js";
      },
      MonthRow: function () {
        return "./MonthRow.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: {
      tabKey: { type: Number, required: !0 },
      pageClass: { type: String, required: !0 },
    },
    setup: function (s) {
      var d,
        u = r.getCurrentInstance().proxy,
        l = n.useModeStore(),
        c = r.storeToRefs(l).simpleMode,
        p = r.inject("tradeHistoryNew"),
        m =
          s.tabKey === i.STATE_TYPE.DEFAULT
            ? p.historyOrder
            : p.historyComplete,
        h = m.monthSetData,
        _ = m.expandIDs,
        T = m.emptyText,
        f = m.activeMonthRow,
        S = m.handleFixTimmerClick,
        y = m.handleTimeFilter,
        g = m.handleExpandChange,
        R = m.handleScrollToLower,
        M = m.handleScroll,
        E = m.pageStatus,
        b = m.PageStatus,
        C = m.queryHistoryData,
        x = m.resetTime,
        A = m.isTop,
        P = m.handleTopChange;
      return {
        fixedMonthRow: r.computed(function () {
          return !A.value;
        }),
        isTop: A,
        handleTopChange: P,
        simpleMode: c,
        data: h,
        expandIDs: _,
        emptyText: T,
        activeMonthRow: f,
        handleFixTimmerClick: S,
        handleTimeFilter: y,
        handleExpandChange: g,
        handleScroll: M,
        handleScrollToLower: R,
        isExpand: function (e) {
          return _.value.includes(e);
        },
        onClickItem: function (e) {
          if (e.trade_type === o.ACTION.NEWSTOCK_BUY)
            return e.purchase_status
              ? [
                  o.PLAYNEW_STATE.IS_COMPLETED,
                  o.PLAYNEW_STATE.LOT_WINNING,
                ].includes(e.purchase_status)
                ? void u.$router.push({
                    name: "NewStockList",
                    query: {
                      purchaseDate: r.dayjs(e.trade_time).format("YYYYMMDD"),
                    },
                  })
                : void u.$router.push({
                    name: "NewStockLucky",
                    query: {
                      requestUnluckyRecord: "1",
                      contract_no: e.contract_no,
                      purchase_code: e.code,
                      purchase_date: r.dayjs(e.trade_time).format("YYYYMMDD"),
                    },
                  })
              : void u.$router.push({
                  name: "TradeRecordNewStockDetail",
                  query: {
                    market: e.market || e.type,
                    code: e.code,
                    name: e.name,
                    order_price: e.order_price,
                    order_num: e.order_num,
                    trade_time: encodeURIComponent(e.trade_time),
                    stock_type: e.stock_type,
                  },
                });
          if (e.trade_type !== o.ACTION.ETF_SUBSCRIBE)
            if (e.stock_type !== o.TARGET.DUOTIANQI)
              if (e.stock_type !== o.TARGET.BALANCE) {
                var t = {
                  type: e.stock_type,
                  id: e.trans_id,
                  no: e.contract_no,
                  time: e.trade_time,
                  from: "list",
                  market: e.market || e.type,
                  code: e.code,
                  name: e.name,
                };
                e.stock_type === o.TARGET.DEBT &&
                  +e.balance_status > -1 &&
                  (t = a(a({}, t), {}, { balance_status: e.balance_status })),
                  u.$router.push({ name: "TradeDetail", query: t });
              } else
                u.$router.push({
                  name: "ProductJiaXinBaoIncomeRecordDetailNew",
                  query: {
                    code: e.code,
                    name: e.name,
                    id: e.trade_time,
                    purchase_amt: e.order_amt,
                    income: e.income,
                    rate: e.rate,
                    timestamp: e.trade_time,
                    income_begin_date: e.income_begin_date,
                    income_end_date: e.income_end_date,
                    balance_status: e.balance_status,
                  },
                });
            else
              u.$router.push({
                name: "ProductDuoTianQiTradeRecordDetail",
                query: {
                  contract_no: e.contract_no,
                  order_date: e.order_date,
                  balance_status: e.balance_status,
                },
              });
          else
            u.$router.push({
              name: "ETFSubscribeDetail",
              query: {
                market: e.market || e.type,
                code: e.code,
                name: e.name,
                order_price: e.order_price,
                order_num: e.order_num,
                trade_time: encodeURIComponent(e.trade_time),
                etfsub_status: e.etfsub_status,
              },
            });
        },
        pageStatus: E,
        PageStatus: b,
        COMMON_PAGE_STATUS: r.COMMON_PAGE_STATUS,
        COMMON_PAGE_ERROR: r.COMMON_PAGE_ERROR,
        handleError: function () {
          C();
        },
        scrollReq: function () {
          E.value !== b.paginationFail && E.value !== b.pagination && R();
        },
        handleRefresh:
          ((d = t(
            e().mark(function t() {
              var a;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        x(),
                        (e.next = 3),
                        C(void 0, { isFromRrefresh: !0 }).catch(function () {
                          var e;
                          r.index.showToast({
                            title: "刷新失败",
                            icon: "none",
                          }),
                            null == (e = u.$refs.tradeHistoryPull) ||
                              e.resetRefresh();
                        })
                      );
                    case 3:
                      null == (a = u.$refs.tradeHistoryPull) ||
                        a.resetRefresh();
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return d.apply(this, arguments);
          }),
      };
    },
  };
Array ||
  (
    r.resolveComponent("MonthRow") +
    r.resolveComponent("Status") +
    r.resolveComponent("HistoryItem") +
    r.resolveComponent("StPullAndPagination")
  )();
var d = r._export_sfc(s, [
  [
    "render",
    function (e, t, a, n, o, i) {
      return r.e(
        { a: n.fixedMonthRow },
        n.fixedMonthRow
          ? {
              b: r.o(function (e) {
                return n.handleFixTimmerClick(n.activeMonthRow);
              }),
              c: r.p({
                time: n.activeMonthRow.timeText,
                total: n.activeMonthRow.total,
              }),
            }
          : {},
        { d: r.n(n.fixedMonthRow ? "border--bottom" : ""), e: n.isTop },
        n.isTop
          ? {
              f: r.o(function (e) {
                return n.handleFixTimmerClick(n.activeMonthRow);
              }),
              g: r.p({
                time: n.activeMonthRow.timeText,
                total: n.activeMonthRow.total,
              }),
            }
          : {},
        { h: n.pageStatus === n.PageStatus.loading },
        n.pageStatus === n.PageStatus.loading
          ? {
              i: r.p({
                "is-simple-mode": n.simpleMode,
                type: n.COMMON_PAGE_STATUS.LOADING,
              }),
            }
          : n.data.length || n.pageStatus !== n.PageStatus.complete
          ? n.pageStatus === n.PageStatus.fail
            ? {
                m: r.o(n.handleError),
                n: r.p({
                  "is-simple-mode": n.simpleMode,
                  type: n.COMMON_PAGE_STATUS.ERROR,
                  "error-type": n.COMMON_PAGE_ERROR.SYSTEM,
                  "error-tips": "数据拉取失败",
                }),
              }
            : r.e(
                {
                  o: r.f(n.data, function (e, t, a) {
                    return r.e(
                      { a: 0 !== t },
                      0 !== t
                        ? {
                            b: r.o(function (t) {
                              return n.handleTimeFilter(e);
                            }, e.key),
                            c: "a7d45db2-6-" + a + ",a7d45db2-1",
                            d: r.p({ time: e.timeText, total: e.total }),
                          }
                        : {},
                      {
                        e: r.f(e.data, function (t, o, i) {
                          return r.e(
                            { a: t.canExpand },
                            t.canExpand
                              ? r.e(
                                  { b: n.isExpand(t.uin) && 0 !== o },
                                  (n.isExpand(t.uin), {}),
                                  {
                                    c: t.uin,
                                    d: r.o(function (e) {
                                      return n.onClickItem(t);
                                    }, t.uin),
                                    e:
                                      "a7d45db2-7-" +
                                      a +
                                      "-" +
                                      i +
                                      ",a7d45db2-1",
                                    f: r.p({
                                      item: t,
                                      "item-class": [
                                        0 === o ? "first-item ^first-item" : "",
                                      ],
                                    }),
                                    g: n.isExpand(t.uin),
                                  },
                                  n.isExpand(t.uin)
                                    ? {
                                        h: r.f(
                                          t.expandData,
                                          function (e, t, o) {
                                            return {
                                              a: e.uin,
                                              b: r.o(function (t) {
                                                return n.onClickItem(e);
                                              }, e.uin),
                                              c:
                                                "a7d45db2-8-" +
                                                a +
                                                "-" +
                                                i +
                                                "-" +
                                                o +
                                                ",a7d45db2-1",
                                              d: r.p({ item: e }),
                                            };
                                          }
                                        ),
                                      }
                                    : {},
                                  {
                                    i: r.t(n.isExpand(t.uin) ? "收起" : "展开"),
                                    j: r.t(t.expandData.length),
                                    k: r.o(function (e) {
                                      return n.handleExpandChange(t);
                                    }, t.uin),
                                    l: r.n(
                                      n.isExpand(t.uin)
                                        ? "expand-row border--bottom"
                                        : "fold-row"
                                    ),
                                    m: r.n(
                                      o === e.data.length - 1
                                        ? "last-in-month"
                                        : ""
                                    ),
                                    n: r.n(0 === o ? "first-in-month" : ""),
                                  }
                                )
                              : {
                                  o: r.o(function (e) {
                                    return n.onClickItem(t);
                                  }, t.uin),
                                  p:
                                    "a7d45db2-9-" + a + "-" + i + ",a7d45db2-1",
                                  q: r.p({
                                    item: t,
                                    "item-class": [
                                      0 === o ? "first-item ^first-item" : "",
                                    ],
                                  }),
                                  r: t.uin,
                                },
                            { s: t.uin }
                          );
                        }),
                        f: e.key,
                      }
                    );
                  }),
                  p: n.pageStatus === n.PageStatus.pagination,
                },
                n.pageStatus === n.PageStatus.pagination
                  ? {
                      q: r.p({
                        "is-simple-mode": n.simpleMode,
                        type: n.COMMON_PAGE_STATUS.LOADING,
                      }),
                    }
                  : {},
                { r: n.pageStatus === n.PageStatus.paginationFail },
                n.pageStatus === n.PageStatus.paginationFail
                  ? {
                      s: r.o(n.handleScrollToLower),
                      t: r.p({
                        "is-simple-mode": n.simpleMode,
                        type: n.COMMON_PAGE_STATUS.ERROR,
                        "show-error-img": !1,
                        "show-btn": !0,
                        "error-tips": "数据拉取失败",
                      }),
                    }
                  : {}
              )
          : {
              k: r.p({
                "is-simple-mode": n.simpleMode,
                type: n.COMMON_PAGE_STATUS.ERROR,
                "error-type": n.COMMON_PAGE_ERROR.EMPTY,
                "error-tips": n.emptyText,
                "show-btn": !1,
              }),
            },
        {
          j: !n.data.length && n.pageStatus === n.PageStatus.complete,
          l: n.pageStatus === n.PageStatus.fail,
          v: r.sr("tradeHistoryPull", "a7d45db2-1"),
          w: r.o(n.handleScroll),
          x: r.o(n.scrollReq),
          y: r.o(n.handleRefresh),
          z: r.o(n.handleTopChange),
          A: r.p({
            "scroll-class": "history-scrollview ^history-scrollview",
            "scroll-y": "true",
            "lower-threshold": "150",
          }),
          B: r.n(
            n.fixedMonthRow ? "history-list-fixed" : "history-list-normal"
          ),
          C: r.n(a.pageClass),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a7d45db2"],
]);
wx.createComponent(d);
