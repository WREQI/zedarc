var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../@babel/runtime/helpers/Objectvalues");
var n = require("../../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var i = require("../../../../common/vendor.js");
require("../../../../index.js");
var u = require("../../../../model/trade/useBstMark.js"),
  c = require("../../../../model/trade/useHistory.js"),
  l = require("../../../../model/trade/utils.js"),
  s = require("../../../../service/connect/index.js"),
  d = require("../../../../config/key.js"),
  v = require("../../../../utils/useKeyboardHeight.js"),
  f = require("../../../../stores/app/useMode.js"),
  m = require("../../../../service/aegis/platform/not-wujie.js");
i.dayjs.extend(i.isBetween);
var p = {
  components: {
    StSegment: function () {
      return "../../../../node-modules/@tencent/stock-ui/mp/lib/segment/index.js";
    },
    ActionSheet: function () {
      return "../../../../common/components/ActionSheet/index.js";
    },
    StockSearch: function () {
      return "../../../../bizs/trade/StockSearch.js";
    },
    MpDialog: function () {
      return "../../../../common/components/Dialog/Dialog.js";
    },
    TradeHistoryListItem: function () {
      return "../TradeHistoryListItem.js";
    },
  },
  setup: function () {
    var s,
      p = i.getCurrentInstance().proxy,
      h = c.useHistory(),
      y = h.data,
      k = h.records,
      g = h.setActiveRecordsId,
      b = h.queryHistoryData,
      T = h.queryHistoryByMonth,
      S = h.fetchWebsocket,
      Y = h.queryHistoryByFilter,
      x = h.resetFilterData,
      M = h.activeTodayRecords,
      D = i.ref(!1),
      w = i.ref(!1),
      j = i.ref([]),
      C = i.ref(0),
      E = i.ref([0, 0, 0]),
      H = i.ref([]),
      A = i.ref({}),
      q = i.ref(-1),
      P = u.useBstMark(),
      I = P.bstOpen,
      R = P.bstSubmiting,
      B = P.getBstStatus,
      F = P.bstStatusSubmit,
      _ = P.bstHiddenConfig,
      $ = f.useModeStore(),
      N = i.storeToRefs($).simpleMode,
      O = i.ref(!1),
      K = i.ref(!1),
      L = i.ref(!1),
      W = i.ref(0),
      U = i.reactive(
        (o((s = {}), c.STATE_TYPE.DEFAULT, {}),
        o(s, c.STATE_TYPE.COMPLETE, {}),
        s)
      ),
      J = i.computed(function () {
        return k.value.map(function (e) {
          return a(a({}, e), {}, { unfold: Boolean(U[W.value][e.id]) });
        });
      }),
      Q = i.computed(function () {
        var e = J.value || [];
        return e[e.length - 1]
          ? i.dayjs("".concat(e[e.length - 1].id)).format("YYYY-MM-DD")
          : i.dayjs().format("YYYY-MM-DD");
      }),
      z = i.computed(function () {
        return i.dayjs().format("YYYY-MM-DD");
      }),
      G = i.computed(function () {
        return i.dayjs().subtract(7, "day").format("YYYY-MM-DD");
      }),
      V = i.computed(function () {
        return i.dayjs().subtract(1, "month").format("YYYY-MM-DD");
      }),
      X = i.computed(function () {
        return i.dayjs().subtract(3, "month").format("YYYY-MM-DD");
      }),
      Z = i.computed(function () {
        return i.dayjs().subtract(1, "year").format("YYYY-MM-DD");
      }),
      ee = i.computed(function () {
        var e = A.value,
          t = e.code,
          r = e.market,
          a = n(H.value, 2),
          o = a[0],
          i = a[1];
        return (t && r) || o !== Q.value || i !== z.value;
      }),
      te = i.computed(function () {
        var e;
        if (0 === H.value.length) return "";
        var t =
            (o((e = {}), "".concat(G.value, "-").concat(z.value), "近7天"),
            o(e, "".concat(V.value, "-").concat(z.value), "近1月"),
            o(e, "".concat(X.value, "-").concat(z.value), "近3月"),
            o(e, "".concat(Z.value, "-").concat(z.value), "近1年"),
            o(e, "".concat(Q.value, "-").concat(z.value), "全部日期"),
            e),
          r = t["".concat(H.value.join("-"))],
          n = H.value.selectIndex;
        return (
          n && -1 !== n && (r = Object.values(t)[n - 1]),
          r ||
            ""
              .concat(H.value[0].replace(/-/g, "."), "-")
              .concat(H.value[1].replace(/-/g, "."))
        );
      }),
      re = i.computed(function () {
        var e = [],
          t = [],
          r = [],
          a = J.value || [],
          o = i.dayjs().format("YYYY-MM-DD");
        if (!a[a.length - 1]) {
          var u = o.split("-"),
            c = n(u, 3);
          return [[c[0]], [c[1]], [c[2]]];
        }
        var l = a[a.length - 1].id;
        a[a.length - 1] &&
          (l = i
            .dayjs("".concat(a[a.length - 1].id, "01"))
            .format("YYYY-MM-DD"));
        for (var s = l.split("-"), d = n(s, 1)[0]; d <= o.split("-")[0]; d++)
          e.push(Number(d));
        var v = 1,
          f = 12;
        0 === E.value[0] && (v = Number(l.split("-")[1])),
          E.value[0] === e.length - 1 && (f = Number(o.split("-")[1]));
        for (var m = v; m <= f; m++) t.push("".concat(m).padStart(2, "0"));
        var p = i
          .dayjs("".concat(e[E.value[0]], "-").concat(t[E.value[1]]))
          .daysInMonth();
        E.value[0] === e.length - 1 &&
          E.value[1] === t.length - 1 &&
          (p = Number(o.split("-")[2]));
        for (var h = 1; h <= p; h++) r.push("".concat(h).padStart(2, "0"));
        return [e, t, r];
      }),
      ne = i.ref(!0);
    i.watch(
      function () {
        return C.value;
      },
      function () {
        (ne.value = !1),
          i.nextTick$1(function () {
            ne.value = !0;
          });
      }
    );
    var ae = i.computed(function () {
        return [
          { text: "近7天", value: G.value },
          { text: "近1月", value: V.value },
          { text: "近3月", value: X.value },
          { text: "近1年", value: Z.value },
        ];
      }),
      oe = i.computed(function () {
        var e = (M.value || []).concat(y.filterHistory.items),
          t = n(H.value, 2),
          r = t[0],
          a = void 0 === r ? "" : r,
          o = t[1],
          u = void 0 === o ? "" : o,
          c = A.value,
          l = c.code,
          s = c.market,
          d = e;
        return (
          (d = e.filter(function (e) {
            var t = e.trade_time;
            return i
              .dayjs(t.split(" ")[0])
              .isBetween(i.dayjs(a), i.dayjs(u), null, "[]");
          })),
          l &&
            s &&
            (d = d.filter(function (e) {
              return e.code === l && e.market === s;
            })),
          (d = i.uniqWith(d, i.isEqual))
        );
      });
    function ie() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (ue = r(
        t().mark(function e() {
          var r,
            n = arguments;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r =
                      n.length > 0 && void 0 !== n[0]
                        ? n[0]
                        : c.STATE_TYPE.DEFAULT),
                    (W.value = r),
                    g(W.value),
                    (e.next = 5),
                    b(W.value)
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ce() {
      var e = A.value,
        t = e.code,
        r = e.market,
        a = n(H.value, 2),
        o = a[0],
        u = void 0 === o ? "" : o,
        c = a[1],
        l = void 0 === c ? "" : c;
      return Y({
        stateType: W.value,
        code: t,
        market: r,
        beginDate: u.replace(/-/g, ""),
        endDate: l.replace(/-/g, ""),
      }).catch(function (e) {
        i.index.showToast({ title: e.retmsg, icon: "none" });
      });
    }
    function le(e) {
      var t = i.dayjs(e).format("YYYY-MM-DD").split("-"),
        r = n(t, 3),
        a = r[0],
        o = r[1],
        u = r[2],
        c = J.value || [];
      if (!c[c.length - 1]) return [0, 0, 0];
      var l = i
          .dayjs("".concat(c[c.length - 1].id))
          .format("YYYY-MM-DD")
          .split("-"),
        s = a - l[0],
        d = u - 1;
      return [s, 0 === s ? o - l[1] : Number(o) - 1, d];
    }
    function se() {
      var e = p.$route.query,
        t = e.beginDate,
        r = e.endDate,
        n = e.query_date,
        a = r || n || i.dayjs().format("YYYY-MM-DD"),
        o = t || n;
      if (!o) {
        var u = J.value || [];
        o = u[u.length - 1]
          ? i.dayjs("".concat(u[u.length - 1].id)).format("YYYY-MM-DD")
          : i.dayjs().format("YYYY-MM-DD");
      }
      (H.value = [o, a]), (j.value = [o, a]), (E.value = le(o)), (C.value = 0);
    }
    i.watch(
      function () {
        return J.value;
      },
      function (e) {
        p.$nextTick(function () {
          i.index
            .createSelectorQuery()
            .in(p)
            .selectAll(".list-group")
            .boundingClientRect(function (e) {
              var t = [];
              if (e.length) {
                var r = 0;
                t.push(r);
                for (var n = 0; n < e.length; n++)
                  (r += e[n].height), t.push(r);
                p.listHeight = t;
              }
            })
            .exec();
        });
      }
    ),
      i.watch(
        function () {
          return W.value;
        },
        (function () {
          var e = r(
            t().mark(function e(n) {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (q.value = -1), x(), (H.value = []), (e.next = 5), ie(n)
                      );
                    case 5:
                      S(
                        r(
                          t().mark(function e() {
                            var r, n, a;
                            return t().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((r = p.$route.query),
                                      (n = r.code),
                                      (a = r.market),
                                      (A.value = { code: n, market: a }),
                                      se(),
                                      (C.value = 1),
                                      (e.t0 = ee.value),
                                      !e.t0)
                                    ) {
                                      e.next = 8;
                                      break;
                                    }
                                    return (e.next = 8), ce();
                                  case 8:
                                    n &&
                                      !A.value.name &&
                                      y.filterHistory.items.length > 0 &&
                                      (A.value.name =
                                        y.filterHistory.items[0].name);
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()
      ),
      i.watch(
        function () {
          return C.value;
        },
        function (e) {
          E.value = le(j.value[e]);
        }
      ),
      i.watch(
        [
          function () {
            return y.recordsHistory[c.STATE_TYPE.DEFAULT];
          },
          function () {
            return y.recordsHistory[c.STATE_TYPE.COMPLETE];
          },
        ],
        function (e, t) {
          n(e, 0);
          var r = n(t, 2),
            a = r[0],
            o = r[1];
          (!1 !== a && !1 !== o) ||
            ((U[W.value] = {}),
            J.value.length && (U[W.value][J.value[0].id] = !0));
        }
      ),
      i.watch(
        [
          function () {
            return y.recordsToday[c.STATE_TYPE.DEFAULT];
          },
          function () {
            return y.recordsToday[c.STATE_TYPE.COMPLETE];
          },
        ],
        function (e, t) {
          n(e, 0);
          var r = n(t, 2),
            a = r[0],
            o = r[1];
          (!1 !== a && !1 !== o) ||
            ((U[W.value] = {}),
            J.value.length && (U[W.value][J.value[0].id] = !0));
        }
      ),
      i.onMounted(
        r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (i.index
                        .createSelectorQuery()
                        .in(p)
                        .select(".scroll-wrapper")
                        .boundingClientRect(function (e) {
                          p.scrollWrapperHeight = e.height;
                        })
                        .exec(),
                      (e.t0 = _.value),
                      e.t0)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 5), B();
                  case 5:
                    _.value ||
                      I.value ||
                      i.index.getStorageSync(d.BST_MARK_ENTRY) ||
                      ((K.value = !0),
                      p.$stat.click("trade.trade.bstmodel.show"));
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )
      );
    var de,
      ve = v.useKeyboardHeight({
        maxHeight: 160,
        elementSelector: ".st-action-sheet-panel",
        getElementCtx: function () {
          return p.selectComponent("#actionSheet");
        },
      });
    return {
      keyboardStyle: ve.keyboardStyle,
      getKeyboardHeight: ve.getKeyboardHeight,
      recoverKeyboardHeight: ve.recoverKeyboardHeight,
      segmentsActiveIndex: W,
      segments: ["全部委托", "仅看成交"],
      data: y,
      fetchWebsocket: S,
      recordsWrapper: J,
      showTimePicker: D,
      showStockSearch: w,
      filterMode: ee,
      filterTimeText: te,
      filterStock: A,
      timesRange: re,
      selectDate: j,
      before7day: G,
      before1Month: V,
      before3Month: X,
      before1Year: Z,
      today: z,
      timeRangeIndex: q,
      quickSelectTime: ae,
      selectTime: C,
      selectIndex: E,
      getOnlyKey: l.getOnlyKey,
      isAfterTrade: l.isAfterTrade,
      handleClickAnchor: function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        U[W.value][e]
          ? delete U[W.value][e]
          : ((U[W.value][e] = !0), t && T({ id: e, stateType: W.value }));
      },
      onScroll: function (e) {
        var t = e.detail,
          r = p.listHeight,
          n = t.scrollTop + p.scrollWrapperHeight,
          a = (function (e, t) {
            for (
              var r,
                n = J.value.filter(function (e) {
                  return e.unfold;
                }),
                a = function () {
                  var r = n[o],
                    a = J.value.findIndex(function (e) {
                      return e === r;
                    }),
                    i = e[a];
                  if (t < e[a + 1] && t >= i) return { v: a };
                },
                o = n.length - 1;
              o > -1;
              o--
            )
              if ((r = a())) return r.v;
            return -1;
          })(r, n);
        -1 !== a &&
          n > r[a + 1] - 120 &&
          T({ id: J.value[a].id, stateType: W.value });
      },
      onClickItem: function (e) {
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
        p.$router.push({ name: "TradeDetail", query: t });
      },
      initData: ie,
      onClickShowTimePiker: function () {
        (D.value = !0),
          (C.value = 0),
          p.$stat.click("trade.tradehistory.timepicker.show");
      },
      onClickShowStockPicker: function () {
        (w.value = !0), p.$stat.click("trade.tradehistory.stockpicker.show");
      },
      setTimeRange: function (e, t) {
        (q.value = t),
          i.dayjs(e).isBefore(Q.value) && (e = Q.value),
          (j.value = [e, z.value]),
          (E.value = le(j.value[C.value])),
          p.$stat.click("trade.tradehistory.timepicker.confirm-".concat(t));
      },
      resetTime: function () {
        (j.value = [Q.value, z.value]),
          (E.value = le(Q.value)),
          (C.value = 0),
          (q.value = -1),
          p.$stat.click("trade.tradehistory.timepicker.reset");
      },
      handleChange: function (e) {
        var t = n(E.value, 3),
          r = t[0],
          a = t[1],
          o = t[2],
          i = n(re.value, 3),
          u = i[0],
          c = void 0 === u ? [] : u,
          l = i[1],
          s = void 0 === l ? [] : l,
          d = i[2],
          v = void 0 === d ? [] : d,
          f = n(e.detail.value, 3),
          p = f[0],
          h = f[1],
          y = f[2];
        try {
          var k = !1;
          p >= c.length || p < 0
            ? ((k = !0), (p = r))
            : h >= s.length || h < 0
            ? ((k = !0), (h = a))
            : (y >= v.length || y < 0) && ((k = !0), (y = o)),
            k &&
              m.aegisReporter.reportEvent("TRADE-HISTORY-DATE-UNDEFINED", {
                ext2: JSON.stringify(re.value),
                ext3: JSON.stringify(e.detail.value),
              });
        } catch (e) {}
        var g = void 0 !== p ? p : r,
          b = void 0 !== h ? h : a,
          T = void 0 !== y ? y : o;
        (E.value = [g, b, T]),
          (j.value[C.value] = ""
            .concat(c[g], "-")
            .concat(s[b], "-")
            .concat(v[T])),
          (q.value = -1);
      },
      handleFilterTime: se,
      handleSelect: function () {
        i.dayjs(j.value[1]).isBefore(i.dayjs(j.value[0])) ||
          ((H.value = e(j.value)),
          (H.value.selectIndex = q.value),
          x(),
          ce(),
          p.$stat.click("trade.tradehistory.timepicker.confirm"));
      },
      onCancelTimePicker: function () {
        var e = n(H.value, 2),
          t = e[0],
          r = e[1];
        t && r && ((j.value = [t, r]), (E.value = le(H.value[C.value]))),
          (q.value = -1),
          p.$stat.click("trade.tradehistory.timepicker.cancel");
      },
      onSelectStock: function (e) {
        (A.value = e),
          (w.value = !1),
          x(),
          ce(),
          p.$stat.click("trade.tradehistory.stockpicker.clickstock");
      },
      onCancelFilterStock: function () {
        (A.value = {}),
          x(),
          ce(),
          p.$stat.click("trade.tradehistory.stockpicker.cancel");
      },
      getFilterHistory: ce,
      allFilterHistoryData: oe,
      showPicker: ne,
      bstMarkModel: K,
      bstMarkCheckBox: O,
      bstMarkTip: L,
      bstOpen: I,
      bstStatusSubmit: F,
      bstHiddenConfig: _,
      getBstStatus: B,
      bstSubmiting: R,
      handleConfirmBstMark:
        ((de = r(
          t().mark(function e(r, n) {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ("confirm" !== r) {
                      e.next = 8;
                      break;
                    }
                    if (O.value) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", ((L.value = !0), void n(!1)));
                  case 3:
                    return (e.next = 5), F("trade");
                  case 5:
                    n(), (e.next = 9);
                    break;
                  case 8:
                    i.index.setStorageSync(d.BST_MARK_ENTRY, !0), n();
                  case 9:
                    (K.value = !1), (L.value = !1), (O.value = !1);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e, t) {
          return de.apply(this, arguments);
        }),
      simpleMode: N,
      groupNameText: function (e) {
        return i.dayjs(e.id).format("YYYY年MM月");
      },
    };
  },
  mounted: function () {
    var e = this;
    return r(
      t().mark(function n() {
        var a;
        return t().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (e.segmentsActiveIndex =
                    "complete" ===
                    (null == (a = e.$route.query) ? void 0 : a.type)
                      ? c.STATE_TYPE.COMPLETE
                      : c.STATE_TYPE.DEFAULT),
                  (n.next = 3),
                  e.initData(e.segmentsActiveIndex)
                );
              case 3:
                e.fetchWebsocket(
                  r(
                    t().mark(function r() {
                      var n, a, o;
                      return t().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = e.$route.query),
                                (a = n.code),
                                (o = n.market),
                                (e.filterStock = { code: a, market: o }),
                                e.handleFilterTime(),
                                (t.t0 = e.filterMode),
                                !t.t0)
                              ) {
                                t.next = 7;
                                break;
                              }
                              return (t.next = 7), e.getFilterHistory();
                            case 7:
                              a &&
                                !e.filterStock.name &&
                                e.data.filterHistory.items.length > 0 &&
                                (e.filterStock.name =
                                  e.data.filterHistory.items[0].name);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, r);
                    })
                  )
                );
              case 4:
              case "end":
                return n.stop();
            }
        }, n);
      })
    )();
  },
  onShow: function () {},
  onHide: function () {
    s.unsubscribe();
  },
  beforeUnmount: function () {
    s.unsubscribe();
  },
};
Array ||
  (
    i.resolveComponent("StSegment") +
    i.resolveComponent("TradeHistoryListItem") +
    i.resolveComponent("Empty") +
    i.resolveComponent("action-sheet") +
    i.resolveComponent("stock-search") +
    i.resolveComponent("mp-dialog") +
    i.resolveComponent("MpDialog")
  )(),
  Math;
var h = i._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return i.e(
        {
          a: i.o(function (e) {
            return (n.segmentsActiveIndex = e);
          }),
          b: i.p({ value: n.segmentsActiveIndex, segments: n.segments }),
          c: i.t(n.filterTimeText || "全部日期"),
          d: i.n(n.filterTimeText.length > 4 ? "small" : ""),
          e: i.o(function () {
            return (
              n.onClickShowTimePiker &&
              n.onClickShowTimePiker.apply(n, arguments)
            );
          }),
          f: i.t(n.filterStock.name || "全部产品"),
          g: i.o(function () {
            return (
              n.onClickShowStockPicker &&
              n.onClickShowStockPicker.apply(n, arguments)
            );
          }),
          h: !n.filterMode,
        },
        n.filterMode
          ? i.e(
              { m: n.allFilterHistoryData.length > 0 },
              n.allFilterHistoryData.length > 0
                ? {
                    n: i.f(n.allFilterHistoryData, function (e, t, r) {
                      return {
                        a: "2037a1d0-3-" + r,
                        b: i.p({ item: e }),
                        c: t,
                        d: i.o(function (t) {
                          return n.onClickItem(e);
                        }, t),
                      };
                    }),
                    o: i.o(function () {
                      return (
                        n.getFilterHistory &&
                        n.getFilterHistory.apply(n, arguments)
                      );
                    }),
                  }
                : { p: i.p({ text: "无交易记录" }) }
            )
          : i.e(
              { i: n.recordsWrapper.length },
              n.recordsWrapper.length
                ? {
                    j: i.f(n.recordsWrapper, function (e, t, r) {
                      return {
                        a: i.t(n.groupNameText(e)),
                        b: i.t(e.count),
                        c: i.n(e.unfold ? "icon-arrow-up" : "icon-arrow-down"),
                        d: i.o(function (t) {
                          return n.handleClickAnchor(e.id);
                        }, t),
                        e: i.f(e.items, function (e, t, a) {
                          return {
                            a: "2037a1d0-1-" + r + "-" + a,
                            b: i.p({ item: e }),
                            c: t,
                            d: i.o(function (t) {
                              return n.onClickItem(e);
                            }, t),
                          };
                        }),
                        f: e.unfold,
                        g: t,
                      };
                    }),
                    k: i.o(function () {
                      return n.onScroll && n.onScroll.apply(n, arguments);
                    }),
                  }
                : { l: i.p({ text: "无交易记录" }) }
            ),
        {
          q: i.f(n.quickSelectTime, function (e, t, r) {
            return {
              a: i.t(e.text),
              b: t,
              c: i.n(
                (-1 === n.timeRangeIndex &&
                  n.selectDate[0] === e.value &&
                  n.selectDate[1] === n.today) ||
                  n.timeRangeIndex === t + 1
                  ? "current"
                  : ""
              ),
              d: i.o(function (r) {
                return n.setTimeRange(e.value, t + 1);
              }, t),
            };
          }),
          r: i.t(e.$filters.time.format(n.selectDate[0], "YYYY年M月D日")),
          s: i.n(0 === n.selectTime ? "select" : ""),
          t: i.o(function (e) {
            return (n.selectTime = 0);
          }),
          v: i.t(e.$filters.time.format(n.selectDate[1], "YYYY年M月D日")),
          w: i.n(1 === n.selectTime ? "select" : ""),
          x: i.o(function (e) {
            return (n.selectTime = 1);
          }),
          y: n.showPicker,
        },
        n.showPicker
          ? {
              z: i.f(n.timesRange[0], function (e, t, r) {
                return { a: i.t(e), b: t };
              }),
              A: i.f(n.timesRange[1], function (e, t, r) {
                return { a: i.t(e), b: t };
              }),
              B: i.f(n.timesRange[2], function (e, t, r) {
                return { a: i.t(e), b: t };
              }),
              C: n.selectIndex,
              D: i.o(function () {
                return n.handleChange && n.handleChange.apply(n, arguments);
              }),
            }
          : {},
        {
          E: i.o(function () {
            return n.resetTime && n.resetTime.apply(n, arguments);
          }),
          F: i.o(function (e) {
            return (n.showTimePicker = e);
          }),
          G: i.o(n.handleSelect),
          H: i.o(n.onCancelTimePicker),
          I: i.p({
            value: n.showTimePicker,
            title: "选择日期",
            "picker-style": !0,
          }),
          J: i.o(n.onSelectStock),
          K: i.o(n.getKeyboardHeight),
          L: i.o(n.recoverKeyboardHeight),
          M: i.o(function (e) {
            return (n.showStockSearch = e);
          }),
          N: i.o(n.onCancelFilterStock),
          O: i.p({
            id: "actionSheet",
            value: n.showStockSearch,
            "custom-popup-style": n.keyboardStyle,
            title: "股票搜索",
            "picker-style": !0,
            "close-button": !0,
            "confirm-txt": "取消",
          }),
          P: i.p({ id: "mp-dialog" }),
          Q: n.bstMarkCheckBox,
          R: n.simpleMode ? "#e63535" : "#3077ec",
          S: i.o(function (t) {
            return e.$router.push({ name: "BstMark" });
          }),
          T: n.bstMarkTip,
        },
        (n.bstMarkTip, {}),
        {
          U: i.o(function (e) {
            return (n.bstMarkCheckBox = !n.bstMarkCheckBox);
          }),
          V: i.p({
            visible: n.bstMarkModel,
            "before-close": n.handleConfirmBstMark,
            title: "新功能",
            "show-cancel-button": !0,
            "confirm-button-text": "立即开启",
          }),
        }
      );
    },
  ],
]);
wx.createComponent(h);
