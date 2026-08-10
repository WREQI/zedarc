var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = require("../../../../../common/vendor.js"),
  i = "https://proxy.finance.qq.com/cgi/cgi-bin",
  u = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return c.StockBridge.request(
      "".concat(i, "/watchlist/records"),
      "get",
      (function (t, c) {
        for (var i in c || (c = {})) n.call(c, i) && a(t, i, c[i]);
        if (r) {
          var u,
            l = e(r(c));
          try {
            for (l.s(); !(u = l.n()).done; ) {
              i = u.value;
              o.call(c, i) && a(t, i, c[i]);
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }
        return t;
      })({}, t),
      { forceCallback: !0 }
    );
  },
  l = null,
  d = c.defineComponent({
    components: {
      UpdateDay: function () {
        return "../components/updateHistory/updateDay.js";
      },
      CustomPicker: function () {
        return "../../st-custom-picker/index.js";
      },
    },
    props: { gdId: { type: String, default: "" } },
    setup: function (e) {
      var t = c.getCurrentInstance().proxy || c.getCurrentInstance();
      c.onMounted(function () {
        o();
      }),
        c.onUnmounted(function () {
          c.StockBridge.ENV === c.EnvTypeEnum.MP &&
            (null == l || l.disconnect()),
            (l = null);
        });
      var r = c.ref("");
      c.onActivated(function () {
        if (d && t.$route.query.gdId !== r.value)
          return (
            (k.value = !1),
            (D.value = !1),
            (m.value = ""),
            o(),
            void (r.value = t.$route.query.gdId)
          );
        t.$nextTick(function () {
          t.$refs.containerRef.scrollTo(
            0,
            sessionStorage.getItem("updateHistory_scrollTop") || 0
          ),
            sessionStorage.removeItem("remindList_scrollTop");
        });
      }),
        c.onDeactivated(function () {
          var n;
          d &&
            ((r.value = e.gdId),
            w(),
            null == (n = t.$refs.customPicker) || n.hidePicker());
        });
      var n = "",
        o = function () {
          var o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            a = e.gdId;
          (r.value = a),
            c.StockBridge.ENV === c.EnvTypeEnum.WZQ_LITE
              ? (a = t.$route.query.gdId)
              : null == l || l.disconnect();
          var i = { id: a, limit: 10 },
            d = c.dayjs(o).subtract(1, "month").format("YYYY-MM-DD");
          "" != o &&
            ((i.end_date = o),
            d &&
              (m.value = ""
                .concat(d.slice(0, 4), "年")
                .concat(d.slice(5, 7), "月"))),
            u(i)
              .then(function (e) {
                if (
                  (c.StockBridge.ENV === c.EnvTypeEnum.MP
                    ? c.wx$1.stopPullDownRefresh()
                    : (t.$refs.refresh.stopPullDownRefresh(),
                      t.$refs.containerRef.scrollTo(0, 0)),
                  "13" == e.code)
                )
                  return (D.value = !1), (v.value = []), void (k.value = !0);
                "0" == e.code && e.data
                  ? ((D.value = !1),
                    (v.value = e.data.records),
                    (k.value = !v.value.length),
                    "" != o &&
                      v.value.length &&
                      (s(d, e.data.records[0].date) ||
                        ((k.value = !0), (v.value = [])),
                      (n = o)),
                    "" != o ||
                      k.value ||
                      D.value ||
                      (e.data.Date.newest &&
                        (m.value = c
                          .dayjs(e.data.Date.newest, "YYYY-MM-DD")
                          .format("YYYY年MM月"))),
                    setTimeout(function () {
                      f();
                    }, 0),
                    g(e.data.Date))
                  : (D.value = !0);
              })
              .catch(function (e) {
                (D.value = !0),
                  (v.value = []),
                  (m.value = ""),
                  c.StockBridge.ENV === c.EnvTypeEnum.MP
                    ? c.wx$1.stopPullDownRefresh()
                    : t.$refs.refresh.stopPullDownRefresh();
              });
        },
        a = !0,
        i = (function (e, t) {
          var r,
            n = {},
            o = n.noTrailing,
            a = void 0 !== o && o,
            c = n.noLeading,
            i = void 0 !== c && c,
            u = n.debounceMode,
            l = void 0 === u ? void 0 : u,
            d = !1,
            s = 0;
          function f() {
            r && clearTimeout(r);
          }
          function v() {
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++)
              o[c] = arguments[c];
            var u = this,
              v = Date.now() - s;
            function p() {
              (s = Date.now()), t.apply(u, o);
            }
            function m() {
              r = void 0;
            }
            d ||
              (i || !l || r || p(),
              f(),
              void 0 === l && v > e
                ? i
                  ? ((s = Date.now()), a || (r = setTimeout(l ? m : p, e)))
                  : p()
                : !0 !== a &&
                  (r = setTimeout(l ? m : p, void 0 === l ? e - v : e)));
          }
          return (
            (v.cancel = function (e) {
              var t = (e || {}).upcomingOnly,
                r = void 0 !== t && t;
              f(), (d = !r);
            }),
            v
          );
        })(500, function () {
          u({
            id: e.gdId,
            end_date: v.value[v.value.length - 1].date,
            limit: 10,
          }).then(function (e) {
            (v.value = v.value.concat(e.data.records)),
              e.data.records.length || (a = !1),
              setTimeout(function () {
                f();
              }, 100);
          });
        }),
        d = !1,
        s = function (e, t) {
          return c.dayjs(e).isSame(t, "month");
        },
        f = function () {
          c.StockBridge.ENV === c.EnvTypeEnum.MP &&
            (null == l || l.disconnect(),
            null ==
              (l = c.wx$1.createIntersectionObserver(t, { observeAll: !0 })) ||
              l
                .relativeTo(".top-date-wrapper")
                .observe(".date-wrapper", function (e) {
                  if (e.intersectionRatio > 0) {
                    var t = e.dataset.value;
                    t &&
                      (m.value = ""
                        .concat(t.slice(0, 4), "年")
                        .concat(t.slice(5, 7), "月"));
                  }
                }));
        },
        v = c.ref([]),
        p = c.ref("2021-08-01"),
        m = c.ref(""),
        h = c.ref(["", ""]),
        g = function (e) {
          h.value = [
            c.dayjs(e.earliest, "YYYY-MM-DD").format("YYYYMM"),
            c.dayjs(e.newest, "YYYY-MM-DD").format("YYYYMM"),
          ];
        },
        y = c.computed(function () {
          return (function (e, t) {
            for (
              var r = [],
                n = c.dayjs(e, "YYYYMM"),
                o = t || c.dayjs().format("YYYYMM"),
                a = function () {
                  var e = n.format("YYYY"),
                    t = n.format("M"),
                    o = r.find(function (t) {
                      return t.value === e;
                    });
                  o
                    ? o.children.push({ value: "".concat(t, "月") })
                    : r.push({
                        value: e,
                        children: [{ value: "".concat(t, "月") }],
                      }),
                    (n = n.add(1, "month"));
                };
              n.isBefore(c.dayjs(o, "YYYYMM").add(1, "month"));

            )
              a();
            return r;
          })(h.value[0], h.value[1]);
        }),
        Y = c.reactive({ curTimeForPicker: ["2024", "5月"] }),
        T = c.ref(!1),
        k = c.ref(!1),
        D = c.ref(!1),
        M = c.ref(0),
        w = function () {
          c.StockBridge.ENV !== c.EnvTypeEnum.MP &&
            sessionStorage.setItem("updateHistory_scrollTop", M.value);
        };
      return {
        isLite: d,
        date: p,
        timeRange: y,
        selectTime: function (t) {
          var r = t.selectedVal[0],
            n = t.selectedVal[1].split("月")[0],
            i = n >= 10 ? n : "0".concat(n);
          o(
            c
              .dayjs("".concat(r, "-").concat(i, "-01"))
              .add(1, "month")
              .format("YYYY-MM-DD")
          ),
            c.StockBridge.report("hq.basketrecord.range_confirm_click", {
              watchlist_id: e.gdId,
            }),
            (T.value = !1),
            (a = !0);
        },
        timePickerData: Y,
        showTimePicker: T,
        dateText: m,
        openTimeRange: function (t) {
          c.StockBridge.report("hq.basketrecord.range_click", {
            watchlist_id: e.gdId,
          });
          var r = t.slice(0, 4),
            n = parseInt(t.slice(5, 7), 10);
          (Y.curTimeForPicker = [r, "".concat(n, "月")]), (T.value = !0);
        },
        daysData: v,
        isSameMonth: s,
        closePicker: function () {
          (T.value = !1),
            c.StockBridge.report("hq.basketrecord.range_cancel_click", {
              watchlist_id: e.gdId,
            });
        },
        pullDownRefresh: function () {
          n ? o(n) : o();
        },
        empty: k,
        getData: o,
        netError: D,
        reachBottom: function () {
          !a || k.value || D.value || i();
        },
        handleScroll: function (e) {},
        recordJump: w,
      };
    },
  });
Array ||
  (
    c.resolveComponent("update-day") +
    c.resolveComponent("st-pull-refresh") +
    c.resolveComponent("CustomPicker")
  )();
var s = c._export_sfc(d, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return c.e(
        { a: e.dateText && !e.netError },
        e.dateText && !e.netError
          ? {
              b: c.t(e.dateText),
              c: c.o(function (t) {
                return e.openTimeRange(e.dateText);
              }, 446),
            }
          : {},
        { d: e.empty || e.netError },
        e.empty || e.netError
          ? c.e(
              { e: e.netError },
              (e.netError, {}),
              { f: e.empty },
              (e.empty, {}),
              { g: e.netError },
              e.netError
                ? {
                    h: c.o(function (t) {
                      return e.getData();
                    }, 447),
                  }
                : {}
            )
          : {
              i: c.f(e.daysData, function (t, r, n) {
                return c.e(
                  {
                    a:
                      !r ||
                      (!!r &&
                        t.date &&
                        !e.isSameMonth(t.date, e.daysData[r - 1 || 0].date)),
                  },
                  !r ||
                    (r &&
                      t.date &&
                      !e.isSameMonth(t.date, e.daysData[r - 1 || 0].date))
                    ? {
                        b: c.t(
                          ""
                            .concat(t.date.slice(0, 4), "年")
                            .concat(t.date.slice(5, 7), "月") || ""
                        ),
                        c: c.n(r ? "" : "data-wrapper-hide"),
                        d: t.date,
                        e: c.o(
                          function (r) {
                            return e.openTimeRange(
                              ""
                                .concat(t.date.slice(0, 4), "年")
                                .concat(t.date.slice(5, 7), "月")
                            );
                          },
                          448,
                          t.date
                        ),
                      }
                    : {},
                  {
                    f: c.o(e.recordJump, 449, t.date),
                    g: "b8dc8431-1-" + n + ",b8dc8431-0",
                    h: c.p({ date: e.date, record: t }),
                    i: t.date,
                  }
                );
              }),
            },
        {
          j: c.sr("refresh", "b8dc8431-0"),
          k: c.o(function (t) {
            return e.pullDownRefresh();
          }, 450),
          l: !e.isLite && e.showTimePicker,
        },
        !e.isLite && e.showTimePicker
          ? {
              m: c.o(e.selectTime, 451),
              n: c.o(e.closePicker, 452),
              o: c.p({
                value: e.showTimePicker,
                title: "选择时间",
                data: e.timeRange,
                "selected-val": e.timePickerData.curTimeForPicker,
              }),
            }
          : {},
        {
          p: c.o(function () {
            return e.handleScroll && e.handleScroll.apply(e, arguments);
          }, 453),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b8dc8431"],
]);
wx.createComponent(s);
