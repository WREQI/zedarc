var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  o = require("../../../../model/transfer/useHistoryNew.js"),
  i = require("../../../../config/enum/transfer.js");
require("../../../../service/broker.js");
var a = require("../../../../utils/index.js"),
  s = require("../../../../config/key.js"),
  l = require("../../../../utils/getPlatform.js"),
  c = require("../../../../config/broker/11100/index.js"),
  u = {
    components: {
      StPullAndPagination: function () {
        return "../../../../components/PullAndPagination/mp/index.js";
      },
      TransferClassifyPopup: function () {
        return "../TransferClassifyPopup.js";
      },
      CustomPicker: function () {
        return "../../../../components/CustomPicker/CustomPicker.js";
      },
      Loading: function () {
        return "../../../../common/components/Loading/index.js";
      },
    },
    setup: function () {
      var u = r.getCurrentInstance().proxy,
        f = o.useHistoryNew(),
        p = f.records,
        d = f.init,
        m = f.fetchData,
        v = f.setFilter,
        h = f.resetData,
        y = f.curSelectedTimeVal,
        T = f.timeList,
        S = f.topTimeVal,
        C = f.setTopTimeVal,
        g = f.filter,
        x = r.ref(!0),
        k = r.ref(!0),
        _ = r.ref(0),
        E = r.ref(0),
        R = r.ref(0),
        P = r.ref(0),
        w = l.getPlatform().isMpPlugin,
        j = r.ref(c.brokerConfig.transfer.detailTimeSupportSecond || !1),
        A = r.ref(!1),
        b = r.ref(!1),
        L = r.ref(0),
        V = r.computed(function () {
          var e;
          return (
            (null ==
            (e = c.brokerConfig.transfer.transferClassify.find(function (e) {
              return e.value === String(L.value || 0);
            }))
              ? void 0
              : e.text) || "全部"
          );
        }),
        q = "https://st.gtimg.com/image/mp-broker/trade/icon-classify".concat(
          a.isDarkTheme() ? "-dark" : "",
          ".png"
        );
      r.onMounted(
        n(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), d();
                  case 2:
                    (x.value = !1),
                      r.index
                        .createSelectorQuery()
                        .in(u.$refs.transferHistory)
                        .select(".history-list")
                        .boundingClientRect(function (e) {
                          E.value = e.top || 128;
                        })
                        .exec(),
                      (k.value = !1);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )
      );
      var F,
        N,
        M,
        $,
        D = r.ref(!0);
      function I(e) {
        e !== D.value && (D.value = e);
      }
      return (
        r.watch(
          function () {
            return R.value;
          },
          function (e) {
            0 === e && I(!0);
          }
        ),
        {
          isFixedMonth: r.computed(function () {
            return !x.value && !D.value;
          }),
          isTop: D,
          handleRefresh:
            (($ = n(
              t().mark(function e() {
                var n;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          h({
                            resetSelectTime: !0,
                            resetStateList: !1,
                            resetFilter: !1,
                            resetData: !1,
                          }),
                          v({ select_type: +L.value }),
                          (e.next = 4),
                          d().catch(function () {
                            var e;
                            r.index.showToast({
                              title: "刷新失败",
                              icon: "none",
                            }),
                              null == (e = u.$refs.transferHistory) ||
                                e.resetRefresh();
                          })
                        );
                      case 4:
                        null == (n = u.$refs.transferHistory) ||
                          n.resetRefresh();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return $.apply(this, arguments);
            }),
          handleTopChange: I,
          supportSecond: j,
          firstInit: x,
          curScrollTop: P,
          scrollTop: R,
          iconClassify: q,
          queryFilter: g,
          scrollWrapperHeight: _,
          TRANSFER_STATE: i.TRANSFER_STATE,
          TRANSFER_TYPE_TEXT: i.TRANSFER_TYPE_TEXT,
          onScrollToLower: function () {
            m();
          },
          onScroll: function (e) {
            var t = r.index.createSelectorQuery().in(u);
            (P.value = e.detail.scrollTop),
              t
                .selectAll(".list-group")
                .boundingClientRect(function (e) {
                  var t,
                    n,
                    r = !1;
                  e.forEach(function (t, n) {
                    var o,
                      i,
                      a = (null == e ? void 0 : e[n + 1]) || null;
                    t.top <= E.value &&
                      (!a || (null == a ? void 0 : a.top) > E.value) &&
                      ((r = !0),
                      C(
                        null == (i = null == (o = p.value) ? void 0 : o[n + 1])
                          ? void 0
                          : i.month
                      ));
                  }),
                    r ||
                      C(
                        (null == (n = null == (t = p.value) ? void 0 : t[0])
                          ? void 0
                          : n.month) || g.value.query_month
                      );
                })
                .exec();
          },
          onClickItem: function (t) {
            u.$router.push({ name: "TransferRecordsDetails", query: e({}, t) }),
              w &&
                (null == t ? void 0 : t.state) ===
                  i.TRANSFER_STATE.PRE_TRANSFER_SUCC &&
                r.index.setStorageSync(s.TRANSFER_DETAIL_CANCE_ORDER, "1"),
              u.$stat.click("trade.transfer.to_transfer_detail_new_click");
          },
          init: d,
          onClassifyChange:
            ((M = n(
              t().mark(function e(n) {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((A.value = !1), (e.t0 = L.value !== +n), !e.t0)) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (L.value = +n),
                          (R.value = P.value),
                          h(),
                          v({ select_type: +n }),
                          (k.value = !0),
                          u.$nextTick(function () {
                            R.value = 0;
                          }),
                          (e.next = 11),
                          d()
                        );
                      case 11:
                        k.value = !1;
                      case 12:
                        u.$stat.click(
                          "trade.transfer.history_classify_popup_confirm",
                          void 0,
                          void 0,
                          { classifySelected: n }
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return M.apply(this, arguments);
            }),
          initLoading: k,
          isShowTransferClassifyPopup: A,
          isShowTimePicker: b,
          classifySelectedText: V,
          classifySelectedVal: L,
          records: p,
          curSelectedTimeVal: y,
          timeList: T,
          topTimeVal: S,
          handleMonth: function (e) {
            var t = r.dayjs(e);
            (y.value = ["".concat(t.year()), "".concat(t.month() + 1, "月")]),
              (b.value = !0),
              u.$stat.click(
                "trade.transfer.history_month_click",
                void 0,
                void 0,
                { month: e }
              );
          },
          handleClassifyEntry: function () {
            (A.value = !0),
              u.$stat.click(
                "trade.transfer.history_classify_entry_click",
                void 0,
                void 0,
                { select_type: L.value }
              );
          },
          onTimePickerChange:
            ((N = n(
              t().mark(function e(n) {
                var o;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((b.value = !1),
                          !(null == n ? void 0 : n.selectedVal) ||
                            y.value.join("-") === n.selectedVal.join("-"))
                        ) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (y.value = n.selectedVal),
                          (R.value = P.value),
                          (o = r
                            .dayjs(y.value.join("").replace("月", ""))
                            .format("YYYYMM")),
                          h({ resetSelectTime: !1, resetStateList: !1 }),
                          v({ select_type: +L.value, query_month: o }),
                          C(o),
                          (k.value = !0),
                          u.$nextTick(function () {
                            R.value = 0;
                          }),
                          (e.next = 10),
                          d()
                        );
                      case 10:
                        k.value = !1;
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return N.apply(this, arguments);
            }),
          handleShow:
            ((F = n(
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.t0 =
                            "1" ===
                            r.index.getStorageSync(
                              s.TRANSFER_DETAIL_CANCE_ORDER
                            )),
                          !e.t0)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (k.value = !0),
                          r.index.setStorageSync(
                            s.TRANSFER_DETAIL_CANCE_ORDER,
                            "0"
                          ),
                          u.$nextTick(function () {
                            R.value = 0;
                          }),
                          h(),
                          v({ select_type: +L.value }),
                          (e.next = 9),
                          d()
                        );
                      case 9:
                        k.value = !1;
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return F.apply(this, arguments);
            }),
        }
      );
    },
  };
Array ||
  (
    r.resolveComponent("Loading") +
    r.resolveComponent("Empty") +
    r.resolveComponent("ValueColor") +
    r.resolveComponent("StPullAndPagination") +
    r.resolveComponent("CustomPicker") +
    r.resolveComponent("TransferClassifyPopup")
  )(),
  Math ||
    (
      function () {
        return "../../../../components/Empty/Empty.js";
      } +
      function () {
        return "../../../../components/ValueColor/ValueColor.js";
      } +
      function () {
        return "../../../../components/CustomPicker/CustomPicker.js";
      }
    )();
var f = r._export_sfc(u, [
  [
    "render",
    function (e, t, n, o, i, a) {
      return r.e(
        {
          a: r.t(o.classifySelectedText),
          b: r.t("全部" === o.classifySelectedText ? "类型" : ""),
          c: o.iconClassify,
          d: r.o(function () {
            return (
              o.handleClassifyEntry && o.handleClassifyEntry.apply(o, arguments)
            );
          }),
          e: o.supportSecond ? "" : 1,
          f: o.isFixedMonth,
        },
        o.isFixedMonth
          ? r.e(
              {
                g: r.t(o.topTimeVal.monthText),
                h: r.o(function (e) {
                  return o.handleMonth(o.topTimeVal.month);
                }),
                i: !o.initLoading,
              },
              o.initLoading ? {} : { j: r.t(o.topTimeVal.count) }
            )
          : {},
        {
          k: r.n(o.isFixedMonth || o.firstInit ? "border--bottom" : ""),
          l: o.isTop && !o.firstInit,
        },
        o.isTop && !o.firstInit
          ? r.e(
              {
                m: r.t(o.topTimeVal.monthText),
                n: r.o(function (e) {
                  return o.handleMonth(o.topTimeVal.month);
                }),
                o: !o.initLoading,
              },
              o.initLoading ? {} : { p: r.t(o.topTimeVal.count) }
            )
          : {},
        { q: o.initLoading },
        o.initLoading
          ? { r: r.p({ size: "28px" }) }
          : o.records && o.records.length
          ? {
              v: r.f(o.records, function (t, n, i) {
                return r.e(
                  { a: 0 !== n },
                  0 !== n
                    ? {
                        b: r.t(t.name),
                        c: r.o(function (e) {
                          return o.handleMonth(t.month);
                        }, n),
                        d: r.t(t.count),
                      }
                    : {},
                  {
                    e: r.f(t.items, function (n, a, s) {
                      return {
                        a: r.t(n.feOperName),
                        b: r.n(n.feOperName.length > 12 ? "fs-24" : ""),
                        c: r.t(n.feStockName),
                        d: r.n(n.feStockName.length > 10 ? "fs-24" : ""),
                        e: r.t(n.feStockCode),
                        f: r.t(
                          e.$filters.money.formatNoUnit(
                            e.$filters.defaults(n.money, "--"),
                            !0
                          )
                        ),
                        g: "eff4dfe2-3-" + i + "-" + s + ",eff4dfe2-0",
                        h: r.p({ value: n.money }),
                        i: r.n(n.money.length > 10 ? "fs-24" : ""),
                        j: r.t(n.feTransferTime),
                        k: a,
                        l: n,
                        m: r.o(function (e) {
                          return o.onClickItem(t.items[a]);
                        }, a),
                      };
                    }),
                    f: n,
                  }
                );
              }),
              w: o.supportSecond ? "" : 1,
            }
          : {
              t: r.p({
                text: o.queryFilter.query_month
                  ? "当月无资金流水"
                  : "当前无资金流水",
              }),
            },
        {
          s: !o.records || !o.records.length,
          x: r.sr("transferHistory", "eff4dfe2-0"),
          y: r.o(o.onScroll),
          z: r.o(o.onScrollToLower),
          A: r.o(o.handleRefresh),
          B: r.o(o.handleTopChange),
          C: r.p({
            "scroll-class": "history-list ^history-list",
            "scroll-top": o.scrollTop,
          }),
          D: r.o(function (e) {
            return (o.isShowTimePicker = e);
          }),
          E: r.o(function (e) {
            return (o.isShowTimePicker = !1);
          }),
          F: r.o(o.onTimePickerChange),
          G: r.p({
            value: o.isShowTimePicker,
            title: "选择时间",
            "selected-val": o.curSelectedTimeVal,
            data: o.timeList,
          }),
          H: r.o(function (e) {
            return (o.isShowTransferClassifyPopup = e);
          }),
          I: r.o(function (e) {
            return (o.isShowTransferClassifyPopup = !1);
          }),
          J: r.o(o.onClassifyChange),
          K: r.p({
            value: o.isShowTransferClassifyPopup,
            "selected-val": o.classifySelectedVal,
          }),
          L: r.n(o.isFixedMonth ? "history-fixed-wrap" : "history-normal-wrap"),
        }
      );
    },
  ],
]);
wx.createComponent(f);
