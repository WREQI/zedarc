var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var r = require("../../common/vendor.js"),
  o = require("../../cgi/trade.js"),
  i = require("../../config/enum/trade-history.js"),
  u = require("../../config/enum.js"),
  l = require("./generateDateRange.js"),
  c = (function (e) {
    return (
      (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.COMPLETE = 1)] = "COMPLETE"), e
    );
  })(c || {}),
  s = (function (e) {
    return (
      (e[(e.complete = 0)] = "complete"),
      (e[(e.pagination = 1)] = "pagination"),
      (e[(e.paginationFail = 2)] = "paginationFail"),
      (e[(e.loading = 3)] = "loading"),
      (e[(e.fail = 4)] = "fail"),
      e
    );
  })(s || {});
(exports.STATE_TYPE = c),
  (exports.useHistoryNew = function (c) {
    var d,
      f = null == (d = r.getCurrentInstance()) ? void 0 : d.proxy,
      p = 0,
      y = r.ref([]),
      v = r.ref(!0),
      h = r.reactive({
        orderOffset: 0,
        balanceOffset: 0,
        noMoreBalance: !1,
        noMoreOrder: !1,
        pageStatus: 3,
        dateList: [],
        storeData: [],
        renderData: [],
        dataHolder: [],
      }),
      T = r.ref(!1),
      m = r.reactive({ year: "", month: "" }),
      E = r.ref(i.TradeType.all),
      g = r.ref(i.BusinessType.all),
      _ = r.ref(!1),
      D = r.computed(function () {
        var e;
        return (
          n((e = {}), i.ETYPE.TRADE, E.value),
          n(e, i.ETYPE.BUSINESS, g.value),
          e
        );
      }),
      S = r.computed(function () {
        var e,
          t = (null == c ? void 0 : c.emptyPrefix) || "";
        return (null == (e = null == f ? void 0 : f.$route.query)
          ? void 0
          : e.code) && 0 === h.dateList.length
          ? "没有搜索到相关".concat(t, "记录")
          : 0 === h.dateList.length
          ? "当前没有".concat(t, "记录")
          : "当月没有".concat(t, "记录");
      }),
      O = r.computed(function () {
        return h.pageStatus;
      }),
      R = r.computed(function () {
        return E.value === i.TradeType.all && g.value === i.BusinessType.all
          ? "全部类型"
          : E.value === i.TradeType.all && g.value
          ? i.TypeTextMap[i.ETYPE.BUSINESS][g.value]
          : g.value === i.BusinessType.all && E.value
          ? i.TypeTextMap[i.ETYPE.TRADE][E.value]
          : [i.TradeType.buy, i.TradeType.sell].includes(E.value)
          ? ""
              .concat(i.TypeTextMap[i.ETYPE.TRADE][E.value], "的")
              .concat(i.TypeTextMap[i.ETYPE.BUSINESS][g.value])
          : ""
              .concat(i.TypeTextMap[i.ETYPE.TRADE][E.value], "-")
              .concat(i.TypeTextMap[i.ETYPE.BUSINESS][g.value]);
      });
    function x(e) {
      (_.value = e),
        null == f ||
          f.$stat.click("trade.history.typefilter." + (e ? "show" : "hide"));
    }
    function b(e) {
      e !== v.value && (v.value = e);
    }
    function M(e) {
      L(0), (y.value = []);
      var t = {
        orderOffset: 0,
        balanceOffset: 0,
        noMoreBalance: !1,
        noMoreOrder: !1,
        pageStatus: 3,
        dateList: [],
        storeData: [],
        renderData: [],
        dataHolder: [],
      };
      e && (t.dateList = h.dateList), Object.assign(h, t), b(!0);
    }
    function A() {
      (m.year = ""), (m.month = ""), M();
    }
    function k() {
      (E.value = i.TradeType.all), (g.value = i.BusinessType.all), A();
    }
    var B = r.ref(0),
      P = r.computed(function () {
        return (function (e) {
          if (!e.length) {
            var t = r.dayjs();
            return [
              {
                value: "".concat(t.get("year")),
                children: [{ value: "".concat(t.format("MM"), "月") }],
              },
            ];
          }
          return l.generateDateRange(
            e[0].trade_month,
            e[e.length - 1].trade_month
          );
        })(h.dateList);
      });
    function q(e) {
      var t = r.cloneDeep(e),
        a = r.groupBy(h.dateList, "trade_month"),
        n = r.uniqBy(t, "uin").reduce(function (e, t) {
          var n,
            r = e.length;
          return (
            r && e[r - 1].key === t.yearMonth
              ? e[r - 1].data.push(t)
              : e.push({
                  total:
                    +(null == (n = a[t.yearMonth]) ? void 0 : n[0].trade_num) ||
                    0,
                  key: t.yearMonth,
                  timeText: "".concat(t.year, "年").concat(t.month, "月"),
                  data: [t],
                  month: t.month,
                  year: t.year,
                }),
            e
          );
        }, []);
      return (
        n.forEach(function (e) {
          e.data = e.data.reduce(function (e, t) {
            var a,
              n = e.length;
            if (
              !n ||
              (t.stock_type !== u.TARGET.DEBT &&
                t.stock_type !== u.TARGET.BALANCE)
            )
              return e.push(t), e;
            var r =
                t.stock_type === u.TARGET.DEBT &&
                ["131810", "204001"].includes(t.code) &&
                t.code === e[n - 1].code,
              o =
                t.stock_type === u.TARGET.BALANCE &&
                t.stock_type === e[n - 1].stock_type;
            return (
              r || o
                ? (e[n - 1].expandData ||
                    ((e[n - 1].expandData = []), (e[n - 1].canExpand = !0)),
                  null == (a = e[n - 1].expandData) || a.push(t))
                : e.push(t),
              e
            );
          }, []);
        }),
        n
      );
    }
    var C = r.computed(function () {
      return q(h.renderData);
    });
    r.watch(
      function () {
        return C.value;
      },
      function (e) {
        var n = (null == c ? void 0 : c.defaultTop) || 120;
        (p && p !== n) ||
          (e.length &&
            r.nextTick$1(
              a(
                t().mark(function e() {
                  var a, o, i, u, l;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = r.index
                              .createSelectorQuery()
                              .in(
                                null ==
                                  (o =
                                    null == (a = null == f ? void 0 : f.$refs)
                                      ? void 0
                                      : a[c.historyListRef])
                                  ? void 0
                                  : o.$refs.tradeHistoryPull
                              )),
                            (u = new Promise(function (e) {
                              i.select(".history-scrollview")
                                .boundingClientRect(function (t) {
                                  var a = t.top || n;
                                  e(a);
                                })
                                .exec();
                            })),
                            (e.next = 4),
                            u
                          );
                        case 4:
                          (l = e.sent), (p = l + 10);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )
            ));
      }
    );
    var U = r.computed(function () {
        var e, t;
        if (m.month && m.year && !h.renderData.length)
          return {
            total: 0,
            data: [],
            key: "userClickMonth",
            month: m.month,
            year: m.year,
            timeText: "".concat(m.year, "年").concat(m.month, "月"),
          };
        if (C.value.length) {
          var a = C.value[B.value];
          if (a) return a;
        }
        return P.value.length &&
          (null == (t = null == (e = P.value[0]) ? void 0 : e.children)
            ? void 0
            : t.length)
          ? {
              total: 0,
              data: [],
              key: "defaultmonth",
              month: P.value[0].children[0].value,
              year: P.value[0].value,
              timeText: ""
                .concat(P.value[0].value, "年")
                .concat(P.value[0].children[0].value),
            }
          : {};
      }),
      F = r.computed(function () {
        return [U.value.year, +U.value.month + "月"];
      });
    function L(e) {
      B.value = e;
    }
    function N(e) {
      T.value = e;
    }
    function w(e, t) {
      N(!0),
        null == f ||
          f.$stat.click("trade.history.timefilter." + (t ? "fix" : "other"));
    }
    function j(e) {
      var t = (function () {
        var e = h.storeData.filter(function (e) {
            return 1 === e.groupType;
          }).length,
          t = h.storeData.filter(function (e) {
            return 0 === e.groupType;
          }).length;
        return {
          balanceCount: e,
          isBalanceEnough: e >= o.TRADECOUNT_AMOUNT_PER_REQUEST,
          orderCount: t,
          isOrderEnough: t >= o.TRADECOUNT_AMOUNT_PER_REQUEST,
        };
      })();
      if (
        (t.isBalanceEnough && t.isOrderEnough) ||
        (t.isBalanceEnough && h.noMoreOrder) ||
        (t.isOrderEnough && h.noMoreBalance)
      )
        I();
      else {
        if (h.noMoreBalance && h.noMoreOrder)
          return h.storeData.length && I(), !0;
        var a = !t.isBalanceEnough && !h.noMoreBalance,
          n = !t.isOrderEnough && !h.noMoreOrder;
        a && n
          ? Q(
              { data_type: i.DataType.all },
              { isFromPagination: !(null == e ? void 0 : e.auto) }
            )
          : n
          ? Q(
              { data_type: i.DataType.entrust },
              { isFromPagination: !(null == e ? void 0 : e.auto) }
            )
          : a &&
            Q(
              { data_type: i.DataType.finance },
              { isFromPagination: !(null == e ? void 0 : e.auto) }
            );
      }
    }
    function H(e) {
      return "".concat(r.dayjs(e.trade_time).valueOf()).concat(e.contract_no);
    }
    function $(e) {
      return -r.dayjs(e.trade_time).valueOf();
    }
    function Y(t, a) {
      return t.map(function (t) {
        var n;
        n =
          r.isString(t.trade_time) && -1 === t.trade_time.indexOf("-")
            ? 1e3 * +t.trade_time
            : t.trade_time;
        var o = r.dayjs(n),
          i = "".concat(o.year()),
          u = "".concat(o.month() + 1);
        "".concat(u).length < 2 && (u = "0".concat(u));
        var l = "".concat(i).concat(u);
        return e(
          e({}, t),
          {},
          {
            trade_time: n,
            year: i,
            month: u,
            yearMonth: l,
            uin: H(t),
            groupType: a,
          }
        );
      });
    }
    function I() {
      var e = Math.min(h.storeData.length, o.TRADECOUNT_AMOUNT_PER_REQUEST),
        t = h.storeData.splice(0, e);
      return h.renderData.length
        ? ((h.renderData = h.renderData.concat(t)), !0)
        : ((h.dataHolder = h.dataHolder.concat(t)),
          ((function (e) {
            var t = 0;
            return (
              e.forEach(function (e) {
                t += e.data.length;
              }),
              t
            );
          })(q(h.dataHolder)) > 8 ||
            !!j({ auto: !0 })) &&
            ((h.renderData = h.renderData.concat(h.dataHolder)), !0));
    }
    function Q() {
      return G.apply(this, arguments);
    }
    function G() {
      return (G = a(
        t().mark(function a() {
          var n,
            u,
            l,
            s,
            d,
            p,
            y,
            v,
            T,
            _,
            D,
            S,
            O,
            R,
            x,
            b,
            M,
            A,
            k,
            B,
            P = arguments;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = P.length > 0 && void 0 !== P[0] ? P[0] : {}),
                      (
                        null == (u = P.length > 1 ? P[1] : void 0)
                          ? void 0
                          : u.isFromPagination
                      )
                        ? (h.pageStatus = 1)
                        : (null == u ? void 0 : u.isFromRrefresh) ||
                          (h.pageStatus = 3),
                      (t.prev = 3),
                      (l =
                        f.$route.query.code && f.$route.query.market
                          ? {
                              code: f.$route.query.code,
                              market: f.$route.query.market,
                            }
                          : {}),
                      (s = i.ReqAction.entrust),
                      1 === c.tabType && (s = i.ReqAction.complete),
                      l.code &&
                        (s =
                          1 === c.tabType
                            ? i.ReqAction.filterCompleteByStock
                            : i.ReqAction.filterEntrustByStock),
                      (d = e(
                        e(
                          {
                            action: s,
                            trade_type: E.value,
                            class: g.value,
                            trade_month: "".concat(m.year).concat(m.month),
                            data_type: i.DataType.all,
                            order_offset: h.orderOffset,
                            balance_offset: h.balanceOffset,
                          },
                          l
                        ),
                        n
                      )).data_type === i.DataType.entrust &&
                        (d.balance_offset = 0),
                      d.data_type === i.DataType.finance &&
                        (d.order_offset = 0),
                      (t.next = 11),
                      o.tradeCgi.queryHistoryDataNew(d)
                    );
                  case 11:
                    if (
                      ((p = t.sent),
                      (y = p.n_order_offset),
                      (v = p.n_balance_offset),
                      (T = p.all_count),
                      (_ = void 0 === T ? [] : T),
                      (D = p.today_order_list),
                      (S = void 0 === D ? [] : D),
                      (O = p.history_order_list),
                      (R = void 0 === O ? [] : O),
                      (x = p.today_balance_list),
                      (b = void 0 === x ? [] : x),
                      (M = p.history_balance_list),
                      (A = void 0 === M ? [] : M),
                      0 == +h.orderOffset &&
                        0 == +h.balanceOffset &&
                        ((h.dateList = []),
                        (h.storeData = []),
                        (h.renderData = []),
                        (h.dataHolder = []),
                        (B = _),
                        (h.dateList = B)),
                      (d.data_type !== i.DataType.all &&
                        d.data_type !== i.DataType.entrust) ||
                        ((h.orderOffset = y),
                        R.length < o.TRADECOUNT_AMOUNT_PER_REQUEST &&
                          (h.noMoreOrder = !0)),
                      (d.data_type !== i.DataType.all &&
                        d.data_type !== i.DataType.finance) ||
                        ((h.balanceOffset = v),
                        A.length < o.TRADECOUNT_AMOUNT_PER_REQUEST &&
                          (h.noMoreBalance = !0)),
                      (k = (function (e, t, a, n) {
                        h.storeData = h.storeData
                          .concat(a)
                          .concat(n)
                          .concat(e)
                          .concat(t);
                        var o = {};
                        return (
                          h.renderData.forEach(function (e) {
                            o[e.uin] = !0;
                          }),
                          (h.storeData = h.storeData.filter(function (e) {
                            return !o[e.uin];
                          })),
                          r.uniqBy(h.storeData, H),
                          (h.storeData = r.orderBy(h.storeData, $)),
                          h.storeData
                        );
                      })(Y(S, 0), Y(b, 1), Y(R, 0), Y(A, 1))),
                      !(
                        d.trade_month &&
                        0 === d.balance_offset &&
                        0 === d.order_offset &&
                        k.length &&
                        r.dayjs(k[0].yearMonth).valueOf() <
                          r.dayjs(d.trade_month).valueOf()
                      ))
                    ) {
                      t.next = 28;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      ((h.storeData = []), void (h.pageStatus = 0))
                    );
                  case 28:
                    I() && (h.pageStatus = 0), (t.next = 34);
                    break;
                  case 31:
                    (t.prev = 31),
                      (t.t0 = t.catch(3)),
                      (null == u ? void 0 : u.isFromPagination)
                        ? (h.pageStatus = 2)
                        : (null == u ? void 0 : u.isFromRrefresh) ||
                          (h.pageStatus = 4);
                  case 34:
                  case "end":
                    return t.stop();
                }
            },
            a,
            null,
            [[3, 31]]
          );
        })
      )).apply(this, arguments);
    }
    var V,
      z = r.ref([]);
    return {
      isTop: v,
      handleTopChange: b,
      handleTabChange: function (e) {
        k(),
          Q(),
          null == f ||
            f.$stat.click(
              "trade.history.tabclick." + (0 == +e ? "default" : "complete")
            );
      },
      pickerData: P,
      data: h,
      expandIDs: y,
      handleExpandChange: function (e) {
        var t = y.value.indexOf(e.uin);
        t > -1 ? y.value.splice(t, 1) : y.value.push(e.uin);
      },
      monthSetData: C,
      queryHistoryData: Q,
      isTimeFilter: T,
      curTimeForPicker: F,
      activeMonthRow: U,
      changeFilterTime: N,
      handleFixTimmerClick: function (e) {
        w(0, !0);
      },
      handleTimeFilter: w,
      selectTime: function (e) {
        var t = e.selectedVal;
        e.data;
        (m.year = t[0]),
          (m.month = t[1].split("月")[0]),
          m.month.length < 2 && (m.month = "0".concat(m.month)),
          N(!1),
          M(!0),
          Q();
      },
      resetForTabChange: k,
      resetForSelectType: A,
      resetForSelectTime: M,
      resetTime: function () {
        (m.year = ""),
          (m.month = ""),
          (h.orderOffset = 0),
          (h.balanceOffset = 0),
          (h.noMoreBalance = !1),
          (h.noMoreOrder = !1),
          L(0);
      },
      typeText: R,
      isTypeFilter: _,
      selectedType: D,
      changeFilterType: x,
      selectType: function (e) {
        null == f || f.$stat.click("trade.history.typefilter.select"),
          (E.value = e[i.ETYPE.TRADE]),
          (g.value = e[i.ETYPE.BUSINESS]),
          x(!1),
          A(),
          Q();
      },
      recentEntrustList: z,
      queryRecentHistory:
        ((V = a(
          t().mark(function e() {
            var a, n;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      o.tradeCgi.queryHistoryDataNew({
                        action: i.ReqAction.recently,
                        data_type: i.DataType.entrust,
                        order_offset: 0,
                        limit: 20,
                      })
                    );
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = {};
                  case 5:
                    (a = e.t0), (n = a.recent_order_list), (z.value = n);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return V.apply(this, arguments);
        }),
      handleScrollToLower: j,
      handleScroll: function () {
        var e;
        r.index
          .createSelectorQuery()
          .in(
            null == (e = null == f ? void 0 : f.$refs)
              ? void 0
              : e[c.historyListRef]
          )
          .selectAll(".history-month-row")
          .boundingClientRect(function (e) {
            var t = !1;
            e.forEach(function (a, n) {
              var r = (null == e ? void 0 : e[n + 1]) || null;
              a.top <= p &&
                (!r || (null == r ? void 0 : r.top) > p) &&
                ((t = !0), L(n));
            }),
              t || L(0);
          })
          .exec();
      },
      emptyText: S,
      pageStatus: O,
      PageStatus: s,
    };
  });
