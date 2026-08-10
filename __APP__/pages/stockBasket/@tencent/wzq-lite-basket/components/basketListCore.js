var e = require("../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  l = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  d = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  v = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
    if (u) {
      var n,
        o = a(u(t));
      try {
        for (o.s(); !(n = o.n()).done; ) {
          r = n.value;
          s.call(t, r) && d(e, r, t[r]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return l(e, i(t));
  },
  m = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        l = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, l);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  h = require("../../../../../common/vendor.js"),
  p = require("../../stock-hq-data/index.js"),
  g = require("../../stock-hq-core/utils/market.js"),
  k = require("../api/StockBasketAPI.js"),
  b = require("../api/ReportLog.js"),
  y = require("../utils/index.js"),
  w = require("../../stock-hq-core/utils/storage/local.js");
require("../../../js-cookie/src/js.cookie.js");
var S = "gudan_detail_animation_label",
  q = new p.BasketApi(),
  x = (function () {
    function e(t) {
      if ((r(this, e), !t || !t.request))
        throw new Error("必须传入hqBridge对象，且该对象必须包含request方法");
      this.hqBridge = t;
    }
    return (
      n(e, [
        {
          key: "setAnimationLabelDone",
          value: function () {
            return m(
              this,
              null,
              t().mark(function e() {
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            q.SetUserLabel(this.hqBridge, {
                              label: { name: S, status: 1 },
                            });
                          } catch (e) {}
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
        },
        {
          key: "queryAnimationLabel",
          value: function () {
            return m(
              this,
              null,
              t().mark(function e() {
                var r, n, a, o, l;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = !1),
                            (e.prev = 1),
                            (e.next = 4),
                            q.QueryUserLabel(this.hqBridge, { label: S })
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.label || {}),
                            (o = a.name),
                            (l = a.status),
                            (r = o === S && 0 === l),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(1)), (r = !1);
                        case 14:
                          return e.abrupt("return", r);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 11]]
                );
              })
            );
          },
        },
      ]),
      e
    );
  })(),
  T = "ANIMATION_STORAGE_KEY";
function D() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  return (null == e ? void 0 : e.length) <= 8
    ? 12
    : (null == e ? void 0 : e.length) > 8 &&
      (null == e ? void 0 : e.length) <= 10
    ? 11
    : 10;
}
var j = [".", "(", ")"],
  _ = ["-", "+"];
function A(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = 0;
  if (y.isAllChinese(e)) return (r += e.length * (t ? 1.1 : 1.5));
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    j.includes(a)
      ? (r += 0.5)
      : _.includes(a)
      ? (r += 0.6)
      : y.isChineseCharSimple(a)
      ? (r += 1)
      : (r += 0.9);
  }
  return r;
}
function B(e, t) {
  return ("-" === t && "".concat(e).startsWith("-")) ||
    ("+" === t && "".concat(e).startsWith("+"))
    ? e
    : "".concat(t).concat(e);
}
(exports.getBasketComputedData = function (r, n) {
  var a = h.computed(function () {
      var t,
        n = (function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return null == (e = t.data)
            ? void 0
            : e.map(function (e) {
                var t,
                  r = p.utils.splitSymbol(
                    (null == (t = e.data) ? void 0 : t.symbol) || ""
                  ),
                  n = r.market,
                  a = r.scode,
                  o = a;
                return (
                  g.isUSMarket(n) && (o = g.trimScode(a)),
                  f(v({}, e.data), { market: n, scode: o, watched: e.watched })
                );
              });
        })(r.rankingData);
      return (
        "number" == typeof +r.rowNum &&
          (n = null == n ? void 0 : n.slice(0, r.rowNum)),
        y
          .removeDuplicates(
            null == (t = r.rankingData.title) ? void 0 : t.fields
          )
          .forEach(function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = t.key,
              a = t.describe,
              o = void 0 === a ? {} : a,
              l = t.type,
              i = o.color,
              u = o.format,
              c = o.multiplier,
              s = void 0 === c ? 1 : c;
            n = n.map(function (t) {
              var n = t[r],
                a = "" + n * s,
                o = "";
              if (("int" !== l && "float" !== l) || "" === n) o = n || "--";
              else {
                var c = Math.abs(a),
                  d = p.utils.bigNumberToText(c),
                  m = (function (e, t) {
                    return e > 0 && "up_down" === t
                      ? "+"
                      : e < 0 && "up_down" === t
                      ? "-"
                      : e >= 0
                      ? ""
                      : "-";
                  })(a, i);
                switch (u) {
                  case "raw":
                    o = B(n, m);
                    break;
                  case "percent":
                    o =
                      "number" == typeof parseFloat(a)
                        ? "".concat(B(parseFloat(a).toFixed(2), m), "%")
                        : "--";
                    break;
                  case "default":
                    o = B(d, m);
                    break;
                  case "minUnit1":
                    o = B(c <= 1e4 ? a : d, m);
                    break;
                  case "minUnitW":
                    o = c < 1e8 ? "".concat(B(n, m), "万") : B(d, m);
                    break;
                  default:
                    o = a || "--";
                }
              }
              return f(v({}, t), e({}, r, o));
            });
          }),
        n
      );
    }),
    o = h.computed(function () {
      var e,
        t = y.removeDuplicates(
          null == (e = r.rankingData.title) ? void 0 : e.fields
        );
      "number" == typeof r.columnNum && (t = t.slice(0, r.columnNum));
      var n = 0,
        o = t.length > 3;
      return (
        (t = t.map(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            l = e.name,
            i = (function (e, t) {
              var r = e.key,
                n = e.name,
                a = 0;
              return (
                t.value.forEach(function (e) {
                  var t = e[r],
                    o = A(n, !0),
                    l = A(t),
                    i = Math.max(o, l);
                  i > a && (a = i);
                }),
                a
              );
            })(e, a);
          n += i;
          var u = [127, 134, o ? 152 : 138],
            c = ((r < u.length ? u[r] : 152) / 2) * y.getScreenRatio(),
            s = 0;
          return (
            r < t.length - 1 &&
              (s = o ? 10 * y.getScreenRatio() : 9.5 * y.getScreenRatio()),
            f(v({}, e), {
              maxTextLen: i,
              width: c,
              paddingRight: s,
              titleFontSize: D(l),
            })
          );
        })),
        2 == +r.columnNum && n >= 15 && (t = t.slice(0, 1)),
        t
      );
    }),
    l = h.computed(function () {
      var e, t;
      if (!r.isSearchAi) return null;
      var n = [];
      return (
        null == (t = null == (e = r.rankingData) ? void 0 : e.data) ||
          t.forEach(function (e, t) {
            e.watched || n.push(t);
          }),
        n
      );
    }),
    i = h.inject("hqBridge"),
    u = h.inject("didAgreeUserAgreement"),
    c = h.inject("onCheckUserAgreementStatus"),
    s = null,
    d = null,
    S = null,
    q = null,
    j = h.ref(0),
    _ = h.ref(0.5);
  h.onUnmounted(function () {
    clearTimeout(S), clearTimeout(q);
  }),
    h.onMounted(function () {
      (s = new k.StockBasketAPI(i)),
        (d = new x(i)),
        (q = setTimeout(function () {
          m(
            exports,
            null,
            t().mark(function e() {
              var r, n;
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(
                          (null == (r = null == o ? void 0 : o.value)
                            ? void 0
                            : r.length) <= 3
                        )
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!w.sls.getItem(T)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (e.next = 6), d.queryAnimationLabel();
                    case 6:
                      (n = e.sent),
                        w.sls.setItem(T, "1"),
                        n &&
                          ((j.value = -(o.value[0].width + o.value[1].width)),
                          (S = setTimeout(function () {
                            j.value = 0;
                          }, 1500)),
                          d.setAnimationLabelDone());
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }, 1500));
    });
  var O = function (e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = b.reportLogExtra(
          { category_id: r.categoryId, watchlist_id: r.gdId, positionlist: t },
          r.reportPrefix,
          r.newsData,
          r.subjectData
        );
      i.report("".concat(r.reportPrefix, ".").concat(e), v(v({}, a), n));
    },
    C = h.computed(function () {
      var e;
      return "共".concat(
        null == (e = r.rankingData) ? void 0 : e.total,
        "只股票"
      );
    }),
    E = h.computed(function () {
      var e;
      return r.rowNum < (null == (e = r.rankingData) ? void 0 : e.total)
        ? "down"
        : "up";
    }),
    F = h.computed(function () {
      return "down" === E.value ? C.value : "收起";
    }),
    P = h.ref(""),
    M = h.ref(0),
    N = h.computed(function () {
      var e;
      if (!((null == (e = r.rankingData.data) ? void 0 : e.length) > 0))
        return !0;
      var t = r.rankingData.data.map(function (e) {
          var t;
          return p.utils.splitSymbol(
            (null == (t = e.data) ? void 0 : t.symbol) || ""
          ).market;
        }),
        n = t.every(function (e) {
          return p.utils.isHSMarket(e) || p.utils.isBJMarket(e);
        }),
        a = t.every(function (e) {
          return p.utils.isUSMarket(e);
        }),
        o = t.every(function (e) {
          return p.utils.isHKMarket(e);
        });
      return !(n || a || o);
    });
  return {
    cFields: o,
    cTableData: a,
    cFooterDesc: F,
    curFoldStatusStr: E,
    cFooterTotalDesc: C,
    toAddIndexList: l,
    reportLog: O,
    onTableToggleClick: function (e) {
      var t, a, o, l;
      if (y.isFromPyq())
        null == (t = i.toast) || t.call(i, "请前往小程序使用完整服务", "none");
      else if (!u || u.value || "function" != typeof c) {
        var d =
            null == (o = null == (a = r.rankingData) ? void 0 : a.data)
              ? void 0
              : o[e],
          m = d.watched ? "sd" : "sa";
        O(
          d.watched
            ? "watchlist_stock_zixuan_cancel"
            : "watchlist_stock_zixuan_add",
          e,
          f(v({}, r.reportExtra), {
            stocklist:
              null == (l = null == d ? void 0 : d.data) ? void 0 : l.symbol,
            foperation_purpose: "zixuan",
          })
        );
        var p = [
            {
              act: m,
              code: d.data.symbol,
              timestamp: Math.floor(Date.now() / 1e3),
            },
          ],
          g = { seq: JSON.stringify(p) };
        s.updateBasketWatched(g)
          .then(function (t) {
            var r, a, o, l, u, c;
            if (
              0 === t.code &&
              0 ===
                (null ==
                (o =
                  null == (a = null == (r = t.data) ? void 0 : r.record)
                    ? void 0
                    : a[0])
                  ? void 0
                  : o.code)
            ) {
              n("tableToggleClick", e, !d.watched),
                null == (l = i.busEmit) || l.call(i, "toggleAdded", "stock"),
                h.StockBridge.busEmit("common-toggleAdded");
              var s = d.watched ? "已删除自选" : "已添加自选";
              null == (u = i.toast) || u.call(i, s, "success");
            } else null == (c = i.toast) || c.call(i, "添加自选失败", "error");
          })
          .catch(function () {
            var e;
            null == (e = i.toast) || e.call(i, "添加自选失败", "error");
          });
      } else c();
    },
    onAllTableToggleClick: function () {
      var e, t, a;
      if (y.isFromPyq())
        null == (e = i.toast) || e.call(i, "请前往小程序使用完整服务", "none");
      else if (!u || u.value || "function" != typeof c) {
        var o = Math.floor(Date.now() / 1e3),
          d = l.value.map(function (e) {
            var t, n, a;
            return {
              act: "sa",
              code:
                null ==
                (a =
                  null == (n = null == (t = r.rankingData) ? void 0 : t.data)
                    ? void 0
                    : n[e])
                  ? void 0
                  : a.data.symbol,
              timestamp: o,
            };
          }),
          m = { seq: JSON.stringify(d) };
        O(
          "watchlist_all_zixuan_add",
          l.value.join(","),
          f(v({}, r.reportExtra), {
            stocklist: d
              .map(function (e) {
                return e.code;
              })
              .join(","),
            foperation_purpose: "zixuan",
            hasaddlist:
              null == (a = null == (t = r.rankingData) ? void 0 : t.data)
                ? void 0
                : a
                    .map(function (e) {
                      return e.watched ? "1" : "0";
                    })
                    .join(","),
          })
        ),
          s
            .updateBasketWatched(m)
            .then(function (e) {
              var t, r;
              if (0 !== e.code) throw Error("添加自选失败");
              l.value.forEach(function (t, r) {
                var a, o, l;
                0 ===
                  (null ==
                  (l =
                    null == (o = null == (a = e.data) ? void 0 : a.record)
                      ? void 0
                      : o[r])
                    ? void 0
                    : l.code) && n("tableToggleClick", t, !0);
              }),
                null == (t = i.busEmit) || t.call(i, "toggleAdded", "stock"),
                h.StockBridge.busEmit("common-toggleAdded"),
                null == (r = i.toast) || r.call(i, "已添加自选", "success");
            })
            .catch(function () {
              var e;
              null == (e = i.toast) || e.call(i, "添加自选失败", "error");
            });
      } else c();
    },
    onToggleFoldClick: function () {
      n("toggleFoldClick", E.value),
        O("up" === E.value ? "open_stock_click" : "fold_stock_click");
    },
    goToStockDetail: function (e) {
      var t = e || {},
        a = t.market,
        o = t.stockType,
        l = p.utils.splitSymbol((null == e ? void 0 : e.symbol) || "").scode;
      n("goToStockDetail", e),
        (r.isSearchAi && 0 === Object.keys(r.routeMockTradeParam).length) ||
          i.routeTo({
            path: "/pages/quote/quote",
            query: { market: a, scode: l, stockType: o },
          });
    },
    getStockNameFontType: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.replace(/\s/g, "");
      return t.length > 6 && t.length < 9
        ? "mid-font"
        : t.length >= 9
        ? "small-font"
        : "";
    },
    movingDistance: j,
    transitionTime: _,
    curOrderBy: P,
    curOrder: M,
    isMultiMarket: N,
    onSortHandle: function (e) {
      P.value && e.orderBy !== P.value ? (M.value = -1) : (M.value = e.order),
        (P.value = e.orderBy),
        n("sortToggle", { orderBy: P.value, order: M.value });
    },
    resetSortStatus: function () {
      (P.value = ""),
        (M.value = 0),
        n("sortToggle", { orderBy: P.value, order: M.value });
    },
  };
}),
  (exports.getColumnContentFontSize = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = 16 * y.getScreenRatio();
    return (
      7 === (null == e ? void 0 : e.length)
        ? (t = 15)
        : 8 === (null == e ? void 0 : e.length)
        ? (t = 13)
        : 9 === (null == e ? void 0 : e.length)
        ? (t = 12)
        : (null == e ? void 0 : e.length) >= 10 && (t = 11),
      t
    );
  });
