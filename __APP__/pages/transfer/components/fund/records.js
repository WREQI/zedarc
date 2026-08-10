var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  a = require("../../../../model/transfer/useFundRecords.js"),
  s = require("../../../../config/enum/transfer.js");
require("../../../../service/broker.js");
var i = require("../../../../utils/index.js"),
  u = require("../../../../config/key.js"),
  l = require("../../../../stores/app/useMode.js"),
  c = require("../../../../config/enum.js"),
  f = require("../../../../config/broker/11100/index.js"),
  d = {
    components: {
      StPullAndPagination: function () {
        return "../../../../components/PullAndPagination/mp/index.js";
      },
      ReportsClassifyPopup: function () {
        return "./RecordsClassifyPopup.js";
      },
      CustomPicker: function () {
        return "../../../../components/CustomPicker/CustomPicker.js";
      },
      Loading: function () {
        return "../../../../common/components/Loading/index.js";
      },
      Status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    setup: function () {
      var d = o.getCurrentInstance().proxy,
        p = a.useFundRecords(),
        S = p.records,
        m = p.init,
        T = p.fetchData,
        v = p.setFilter,
        h = p.resetData,
        _ = p.curSelectedTimeVal,
        y = p.timeList,
        R = p.topTimeVal,
        C = p.setTopTimeVal,
        g = p.filter,
        E = p.queryStatus,
        x = o.ref(!0),
        k = o.ref(!0),
        P = o.ref(0),
        D = o.ref(0),
        A = o.ref(0),
        b = o.ref(0),
        F = l.useModeStore(),
        M = o.storeToRefs(F).simpleMode,
        O = o.ref(!1),
        w = o.ref(!1),
        N = o.ref("0-0"),
        q = o.computed(function () {
          var e = N.value.split("-"),
            t = s.FUNDS_RECORDS_CLASSIFY[+e[0] || 0].text,
            n = f.brokerConfig.transfer.fundsRecordsStatus[+e[1] || 0].text,
            o = r(new Set([t, n]));
          return 1 === o.length ? o[0] : o.join("").replace("全部", "");
        }),
        U = "https://st.gtimg.com/image/mp-broker/trade/icon-classify".concat(
          i.isDarkTheme() ? "-dark" : "",
          ".png"
        );
      function j() {
        var e = N.value.split("-");
        return {
          type_select: s.FUNDS_RECORDS_CLASSIFY[e[0]].value,
          state_select: f.brokerConfig.transfer.fundsRecordsStatus[e[1]].value,
        };
      }
      o.onMounted(
        n(
          e().mark(function n() {
            var r, a, s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = d.$route.query.state),
                      (a = void 0 === r ? "" : r) &&
                        (s =
                          f.brokerConfig.transfer.fundsRecordsStatus.findIndex(
                            function (e) {
                              return e.value === a;
                            }
                          )) > -1 &&
                        ((N.value = N.value.replace(/-\d+$/, "-".concat(s))),
                        v(t({}, j()))),
                      (e.next = 4),
                      m()
                    );
                  case 4:
                    (x.value = !1),
                      o.index
                        .createSelectorQuery()
                        .in(d.$refs.transferRecord)
                        .select(".records-list")
                        .boundingClientRect(function (e) {
                          D.value = e.top || 128;
                        })
                        .exec(),
                      (k.value = !1);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )
      );
      var L = o.ref(!0);
      function I(e) {
        e !== L.value && (L.value = e);
      }
      o.watch(
        function () {
          return A.value;
        },
        function (e) {
          0 === e && I(!0);
        }
      );
      var V,
        $,
        G,
        Y,
        X,
        z = o.computed(function () {
          return !x.value && !L.value;
        });
      return {
        isTop: L,
        isFixedMonth: z,
        handleRefresh:
          ((X = n(
            e().mark(function n() {
              var r;
              return e().wrap(function (e) {
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
                        v(t({}, j())),
                        (e.next = 4),
                        m().catch(function () {
                          var e;
                          o.index.showToast({
                            title: "刷新失败",
                            icon: "none",
                          }),
                            null == (e = d.$refs.transferRecord) ||
                              e.resetRefresh();
                        })
                      );
                    case 4:
                      null == (r = d.$refs.transferRecord) || r.resetRefresh();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )),
          function () {
            return X.apply(this, arguments);
          }),
        handleTopChange: I,
        simpleMode: M,
        firstInit: x,
        curScrollTop: b,
        scrollTop: A,
        iconClassify: U,
        queryFilter: g,
        scrollWrapperHeight: P,
        TRANSFER_STATE: s.TRANSFER_STATE,
        TRANSFER_TYPE_TEXT: s.TRANSFER_TYPE_TEXT,
        queryStatus: E,
        PageStatus: c.PageStatus,
        COMMON_PAGE_STATUS: o.COMMON_PAGE_STATUS,
        COMMON_PAGE_ERROR: o.COMMON_PAGE_ERROR,
        initLoading: k,
        isShowTransferClassifyPopup: O,
        isShowTimePicker: w,
        classifySelectedText: q,
        classifySelectedVal: N,
        records: S,
        curSelectedTimeVal: _,
        timeList: y,
        topTimeVal: R,
        fetchData: T,
        onScrollToLower: function () {
          E.value !== c.PageStatus.paginationFail && T();
        },
        onScroll: function (e) {
          var t = o.index.createSelectorQuery().in(d);
          (b.value = e.detail.scrollTop),
            t
              .selectAll(".list-group")
              .boundingClientRect(function (e) {
                var t,
                  n,
                  r = !1;
                e.forEach(function (t, n) {
                  var o,
                    a,
                    s = (null == e ? void 0 : e[n + 1]) || null;
                  t.top <= D.value &&
                    (!s || (null == s ? void 0 : s.top) > D.value) &&
                    ((r = !0),
                    C(
                      null == (a = null == (o = S.value) ? void 0 : o[n + 1])
                        ? void 0
                        : a.month
                    ));
                }),
                  r ||
                    C(
                      (null == (n = null == (t = S.value) ? void 0 : t[0])
                        ? void 0
                        : n.month) || g.value.query_month
                    );
              })
              .exec();
        },
        onClickItem: function (e) {
          var t;
          (t = e.dealNo
            ? { dealNo: e.dealNo, transfer_type: e.transfer_type }
            : {
                transfer_info: JSON.stringify(e),
                transfer_type: e.transfer_type,
              }),
            d.$router.push({ name: "TransferFundRecordsDetail", query: t }),
            d.$stat.click(
              "trade.transfer_fund_records.to_transfer_detail_new_click"
            );
        },
        init: m,
        onClassifyChange:
          ((Y = n(
            e().mark(function n(r) {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((O.value = !1), (e.t0 = N.value !== r), !e.t0)) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (N.value = r),
                        (A.value = b.value),
                        h(),
                        v(t({}, j())),
                        (k.value = !0),
                        d.$nextTick(function () {
                          A.value = 0;
                        }),
                        (e.next = 11),
                        m()
                      );
                    case 11:
                      k.value = !1;
                    case 12:
                      d.$stat.click(
                        "trade.transfer_fund_records.classify_popup_confirm",
                        void 0,
                        void 0,
                        { classifySelected: r }
                      );
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )),
          function (e) {
            return Y.apply(this, arguments);
          }),
        handleMonth: function (e) {
          var t = o.dayjs(e);
          (_.value = ["".concat(t.year()), "".concat(t.month() + 1, "月")]),
            (w.value = !0),
            d.$stat.click(
              "trade.transfer_fund_records.history_month_click",
              void 0,
              void 0,
              { month: e }
            );
        },
        handleClassifyEntry: function () {
          (O.value = !0),
            d.$stat.click(
              "trade.transfer_fund_records.history_classify_entry_click",
              void 0,
              void 0,
              { select_type: N.value }
            );
        },
        onTimePickerChange:
          ((G = n(
            e().mark(function n(r) {
              var a;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((w.value = !1),
                        !(null == r ? void 0 : r.selectedVal) ||
                          _.value.join("-") === r.selectedVal.join("-"))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (_.value = r.selectedVal),
                        (A.value = b.value),
                        (a = o.dayjs(_.value.join("")).format("YYYYMM")),
                        h({ resetSelectTime: !1, resetStateList: !1 }),
                        v(t(t({}, j()), {}, { query_month: a })),
                        C(a),
                        (k.value = !0),
                        d.$nextTick(function () {
                          A.value = 0;
                        }),
                        (e.next = 10),
                        m()
                      );
                    case 10:
                      k.value = !1;
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )),
          function (e) {
            return G.apply(this, arguments);
          }),
        handleShow:
          (($ = n(
            e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.t0 =
                          "1" ===
                          o.index.getStorageSync(
                            u.FUND_RECORD_DETAIL_CANCE_ORDER
                          )),
                        !e.t0)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (k.value = !0),
                        o.index.setStorageSync(
                          u.FUND_RECORD_DETAIL_CANCE_ORDER,
                          "0"
                        ),
                        d.$nextTick(function () {
                          A.value = 0;
                        }),
                        h(),
                        v(t({}, j())),
                        (e.next = 9),
                        m()
                      );
                    case 9:
                      k.value = !1;
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )),
          function () {
            return $.apply(this, arguments);
          }),
        reloadData:
          ((V = n(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (k.value = !0),
                        d.$nextTick(function () {
                          A.value = 0;
                        }),
                        (e.next = 4),
                        m()
                      );
                    case 4:
                      k.value = !1;
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return V.apply(this, arguments);
          }),
        FUNDS_RECORDS_STATUS: s.FUNDS_RECORDS_STATUS,
        FUNDS_RECORDS_STATUS_TEXT: s.FUNDS_RECORDS_STATUS_TEXT,
      };
    },
  };
Array ||
  (
    o.resolveComponent("Loading") +
    o.resolveComponent("Status") +
    o.resolveComponent("Empty") +
    o.resolveComponent("ValueColor") +
    o.resolveComponent("StPullAndPagination") +
    o.resolveComponent("CustomPicker") +
    o.resolveComponent("ReportsClassifyPopup")
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
var p = o._export_sfc(d, [
  [
    "render",
    function (e, t, n, r, a, s) {
      return o.e(
        {
          a: o.t(r.classifySelectedText),
          b: r.iconClassify,
          c: o.o(function () {
            return (
              r.handleClassifyEntry && r.handleClassifyEntry.apply(r, arguments)
            );
          }),
          d: r.isFixedMonth,
        },
        r.isFixedMonth
          ? o.e(
              {
                e: o.t(r.topTimeVal.monthText),
                f: o.o(function (e) {
                  return r.handleMonth(r.topTimeVal.month);
                }),
                g: !r.initLoading,
              },
              r.initLoading ? {} : { h: o.t(r.topTimeVal.count) }
            )
          : {},
        {
          i: o.n(r.isFixedMonth || r.firstInit ? "border--bottom" : ""),
          j: r.isTop && !r.firstInit,
        },
        r.isTop && !r.firstInit
          ? o.e(
              {
                k: o.t(r.topTimeVal.monthText),
                l: o.o(function (e) {
                  return r.handleMonth(r.topTimeVal.month);
                }),
                m: !r.initLoading,
              },
              r.initLoading ? {} : { n: o.t(r.topTimeVal.count) }
            )
          : {},
        { o: r.initLoading },
        r.initLoading
          ? { p: o.p({ size: "28px" }) }
          : r.queryStatus === r.PageStatus.fail
          ? {
              r: o.o(r.reloadData),
              s: o.p({
                "is-simple-mode": r.simpleMode,
                type: r.COMMON_PAGE_STATUS.ERROR,
                "error-type": r.COMMON_PAGE_ERROR.EMPTY,
                "error-tips": "数据拉取失败",
                "show-btn": !0,
              }),
            }
          : r.records.length || r.queryStatus !== r.PageStatus.complete
          ? o.e(
              {
                w: o.f(r.records, function (e, t, n) {
                  return o.e(
                    { a: 0 !== t },
                    0 !== t
                      ? {
                          b: o.t(e.name),
                          c: o.o(function (t) {
                            return r.handleMonth(e.month);
                          }, t),
                          d: o.t(e.count),
                        }
                      : {},
                    {
                      e: o.f(e.items, function (t, a, s) {
                        return o.e(
                          {
                            a: o.t(t.feTransferText),
                            b: o.t(t.feStatus),
                            c: t.fePrefinishedDate,
                          },
                          t.fePrefinishedDate
                            ? { d: o.t(t.fePrefinishedDate) }
                            : {},
                          {
                            e: o.t(t.bank_name || "银行"),
                            f: o.n(t.bank_name.length > 10 ? "fs-24" : ""),
                            g: o.t(
                              t.card_num ? "尾号".concat(t.card_num) : "-"
                            ),
                            h:
                              t.feStatus ===
                              r.FUNDS_RECORDS_STATUS_TEXT[
                                r.FUNDS_RECORDS_STATUS.FAIL
                              ],
                          },
                          t.feStatus ===
                            r.FUNDS_RECORDS_STATUS_TEXT[
                              r.FUNDS_RECORDS_STATUS.FAIL
                            ]
                            ? { i: o.t(t.feTransferMoney) }
                            : {
                                j: o.t(t.feTransferMoney),
                                k: "59be8080-4-" + n + "-" + s + ",59be8080-0",
                                l: o.p({ value: t.transfer_total_value }),
                              },
                          {
                            m: o.n(
                              t.feTransferMoney.length > 10 ? "fs-24" : ""
                            ),
                            n: o.t(t.feTransferTime),
                            o: t.feSubItems && t.feSubItems.length,
                          },
                          t.feSubItems && t.feSubItems.length
                            ? {
                                p: o.f(t.feSubItems, function (e, t, n) {
                                  return {
                                    a: o.t(e.label),
                                    b: o.t(e.value),
                                    c: t,
                                  };
                                }),
                              }
                            : {},
                          {
                            q: a,
                            r: t,
                            s:
                              t.feStatus ===
                              r.FUNDS_RECORDS_STATUS_TEXT[
                                r.FUNDS_RECORDS_STATUS.FAIL
                              ]
                                ? 1
                                : "",
                            t: o.o(function (t) {
                              return r.onClickItem(e.items[a]);
                            }, a),
                          }
                        );
                      }),
                      f: t,
                    }
                  );
                }),
                x: r.queryStatus === r.PageStatus.paginationFail,
              },
              r.queryStatus === r.PageStatus.paginationFail
                ? {
                    y: o.o(r.fetchData),
                    z: o.p({
                      "is-simple-mode": r.simpleMode,
                      type: r.COMMON_PAGE_STATUS.ERROR,
                      "show-error-img": !1,
                      "show-btn": !0,
                      "error-tips": "数据拉取失败",
                    }),
                  }
                : {}
            )
          : {
              v: o.p({
                text: r.queryFilter.query_month
                  ? "当月无出入金记录"
                  : "当前无出入金记录",
              }),
            },
        {
          q: r.queryStatus === r.PageStatus.fail,
          t: !r.records.length && r.queryStatus === r.PageStatus.complete,
          A: o.sr("transferRecord", "59be8080-0"),
          B: o.o(r.onScroll),
          C: o.o(r.onScrollToLower),
          D: o.o(r.handleRefresh),
          E: o.o(r.handleTopChange),
          F: o.p({
            "scroll-class": "records-list ^records-list",
            "scroll-top": r.scrollTop,
          }),
          G: o.o(function (e) {
            return (r.isShowTimePicker = e);
          }),
          H: o.o(function (e) {
            return (r.isShowTimePicker = !1);
          }),
          I: o.o(r.onTimePickerChange),
          J: o.p({
            value: r.isShowTimePicker,
            title: "选择时间",
            "selected-val": r.curSelectedTimeVal,
            data: r.timeList,
          }),
          K: o.o(function (e) {
            return (r.isShowTransferClassifyPopup = e);
          }),
          L: o.o(function (e) {
            return (r.isShowTransferClassifyPopup = !1);
          }),
          M: o.o(r.onClassifyChange),
          N: o.p({
            value: r.isShowTransferClassifyPopup,
            "selected-val": r.classifySelectedVal,
          }),
          O: o.n(r.isFixedMonth ? "record-fixed-wrap" : "record-normal-wrap"),
        }
      );
    },
  ],
]);
wx.createComponent(p);
