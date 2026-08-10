var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t) {
    for (var r in t || (t = {})) i.call(t, r) && c(e, r, t[r]);
    if (o) {
      var a,
        u = n(o(t));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          r = a.value;
          l.call(t, r) && c(e, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  f = function (e, t, n) {
    return new Promise(function (r, a) {
      var u = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(u, o);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  v = require("../../../wzq-lite-basket/api/StockBasketAPI.js"),
  d = {
    components: {
      columnListItem: function () {
        return "./column-list-item.js";
      },
    },
    props: {
      listType: { type: String, default: null },
      safeBottom: { type: Number, default: 0 },
      safeTabBar: { type: Number, default: 0 },
      reportPrefix: { type: String, default: "" },
      categoryId: { type: String, default: "" },
      isHstabShow: { type: Boolean, default: !1 },
      scrollOffset: { type: Number, default: 0 },
      sortType: { type: String, default: "updateTime" },
    },
    setup: function (n, r) {
      var o = this,
        i = r.emit,
        l = p.getCurrentInstance().proxy || p.getCurrentInstance(),
        c = p.inject("hqBridge");
      p.inject("stockBridge");
      var d = new v.StockBasketAPI(c),
        h = p.ref(!1),
        b = p.reactive({ value: [] }),
        m = p.ref(!1),
        g = p.ref(!0),
        y = p.ref(0),
        x = p.ref(0),
        w = p.ref([]),
        k = p.ref(0),
        S = p.ref(!1),
        I = function () {
          var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f(
            o,
            null,
            t().mark(function n() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      m.value || ((e || g.value) && e && ((O = null), T(0)));
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, n);
            })
          );
        },
        O = null,
        T = function () {
          var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return f(
            o,
            null,
            t().mark(function o() {
              var l, c, f, v, y, w, k, S, I, T, B;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((l = Math.max(0, r - parseInt(10, 10))),
                          (t.prev = 1),
                          (m.value = !0),
                          (c = {
                            board_type: "all",
                            sort_type: n.sortType,
                            direct: "down",
                            offset: l,
                            count: 20,
                          }),
                          !p.isEqual(O, c))
                        ) {
                          t.next = 6;
                          break;
                        }
                        return t.abrupt("return");
                      case 6:
                        return (O = c), (t.next = 9), d.getBasketRank(c);
                      case 9:
                        if (((f = t.sent), (v = f.data), (m.value = !1), !v)) {
                          t.next = 18;
                          break;
                        }
                        if (
                          ((h.value = !0),
                          (y = v.list),
                          (w = void 0 === y ? [] : y),
                          (k = v.hasNext),
                          (S = void 0 !== k && k),
                          (I = v.total),
                          (g.value = S),
                          (T = w.map(function (e) {
                            return (
                              (t = s({}, e)),
                              (r = { column: { id: n.listType } }),
                              a(t, u(r))
                            );
                            var t, r;
                          })),
                          (B = P(I)).splice.apply(
                            B,
                            [l, T.length].concat(e(T))
                          ),
                          (b.value = e(B)),
                          (x.value = I),
                          !(b.value && b.value.length > 0))
                        ) {
                          t.next = 18;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          void i("onLoadList", b.value, g.value)
                        );
                      case 18:
                        i("onLoadError"), (t.next = 24);
                        break;
                      case 21:
                        (t.prev = 21),
                          (t.t0 = t.catch(1)),
                          (m.value = !1),
                          (b.value && 0 !== b.value.length) || i("onLoadError");
                      case 24:
                      case "end":
                        return t.stop();
                    }
                },
                o,
                null,
                [[1, 21]]
              );
            })
          );
        },
        B = function (n) {
          return f(
            o,
            null,
            t().mark(function r() {
              var a, u, o, i, l, c, f, p, v;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.prev = 0), 0 !== n.length)) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt("return");
                      case 3:
                        return (
                          (a = { ids: n.join(",") }),
                          (t.next = 6),
                          d.getBasketSummary(a)
                        );
                      case 6:
                        (u = t.sent), (o = u.data), (i = o.list), (l = 0);
                      case 10:
                        if (!(l < i.length)) {
                          t.next = 26;
                          break;
                        }
                        (c = i[l]), (f = c.info.id), (p = 0);
                      case 13:
                        if (!(p < b.value.length)) {
                          t.next = 22;
                          break;
                        }
                        if (!(v = b.value[p])) {
                          t.next = 19;
                          break;
                        }
                        if (f !== v.info.id) {
                          t.next = 19;
                          break;
                        }
                        return (b.value[p] = s({}, c)), t.abrupt("break", 22);
                      case 19:
                        p++, (t.next = 13);
                        break;
                      case 22:
                        b.value = e(b.value);
                      case 23:
                        l++, (t.next = 10);
                        break;
                      case 26:
                        t.next = 30;
                        break;
                      case 28:
                        (t.prev = 28), (t.t0 = t.catch(0));
                      case 30:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[0, 28]]
              );
            })
          );
        },
        P = function (e) {
          return Array.from({ length: e }, function () {
            return null;
          });
        },
        j = null;
      return (
        p.watch(
          function () {
            return n.scrollOffset;
          },
          function (e) {
            for (var t = 0, n = 0; n < w.value.length; n++) {
              var r = w.value[n].top;
              if (e + k.value < r - 12) break;
              t = n;
            }
            (y.value = t),
              i("conterUpdate", t),
              j && clearTimeout(j),
              (S.value = !0),
              (j = setTimeout(function () {
                (S.value = !1), clearTimeout(j);
              }, 1e3));
          },
          { immediate: !0, deep: !0 }
        ),
        p.watch(
          function () {
            return n.sortType;
          },
          function (e) {
            (b.value = []), T(0);
          },
          { immediate: !0, deep: !0 }
        ),
        p.watch(
          function () {
            return b.value;
          },
          function (e) {
            p.nextTick$1(function () {
              !(function () {
                var e, t, n, r, a;
                if ("wzq_light" === c.ENV)
                  try {
                    if (
                      (null == (e = l.$refs.basketSection)
                        ? void 0
                        : e.length) > 0
                    ) {
                      var u =
                          null ==
                          (r =
                            null ==
                            (n =
                              null == (t = l.$refs)
                                ? void 0
                                : t.basketSectionContainer)
                              ? void 0
                              : n.getBoundingClientRect())
                            ? void 0
                            : r.top,
                        o = P();
                      null == (a = l.$refs.basketSection) ||
                        a.forEach(function (e, t) {
                          var n = e.getBoundingClientRect(),
                            r = n.top,
                            a = n.height;
                          o[t] = { top: r - u, height: a };
                        });
                      var i =
                          document.documentElement.scrollHeight ||
                          document.body.scrollHeight,
                        s = window.innerWidth / 375;
                      (k.value = i - 33 * s), (w.value = o);
                    }
                  } catch (e) {}
                else if ("mp" === c.ENV)
                  try {
                    p.wx$1
                      .createSelectorQuery()
                      .in(l)
                      .select(".scroll-container")
                      .boundingClientRect(function (e) {
                        if (e) {
                          var t =
                              (p.wx$1.getWindowInfo &&
                                p.wx$1.getWindowInfo()) ||
                              p.wx$1.getSystemInfoSync(),
                            n = t.windowHeight,
                            r = t.windowWidth / 375,
                            a = e.top;
                          p.wx$1
                            .createSelectorQuery()
                            .in(l)
                            .selectAll(".basket-section")
                            .boundingClientRect(function (e) {
                              if (e && 0 !== e.length) {
                                var t = P(e.length);
                                e.forEach(function (e, n) {
                                  var r = e.top,
                                    u = e.height;
                                  t[n] = { top: r - a, height: u };
                                }),
                                  e &&
                                    e.length > 0 &&
                                    ((k.value = n - 33 * r), (w.value = t));
                              }
                            })
                            .exec();
                        }
                      })
                      .exec();
                  } catch (e) {}
              })();
            });
          }
        ),
        n.listType && I(),
        {
          isDataReady: h,
          basketList: b,
          loading: m,
          hasNext: g,
          loadList: I,
          updateVisibleArea: function () {
            T(y.value);
          },
          update: function () {
            try {
              var e = [];
              b.value.forEach(function (t, r) {
                var a, u;
                if (w.value && w.value[r]) {
                  var o = w.value[r],
                    i = o.top,
                    l = o.height;
                  if (
                    (i >= n.scrollOffset || i + l > n.scrollOffset) &&
                    i <= n.scrollOffset + k.value
                  ) {
                    var c =
                      null == (u = null == (a = b.value[r]) ? void 0 : a.info)
                        ? void 0
                        : u.id;
                    c && e.push(c);
                  }
                }
              }),
                B(e);
            } catch (e) {}
          },
          onPullingDown: function (e) {
            return f(
              o,
              null,
              t().mark(function e() {
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (O = null), (e.prev = 1), (e.next = 4), I();
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          (e.prev = 6), (e.t0 = e.catch(1));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 6]]
                );
              })
            );
          },
          onPullingUp: function () {
            return f(
              o,
              null,
              t().mark(function e() {
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), I(!1);
                        case 3:
                          e.next = 7;
                          break;
                        case 5:
                          (e.prev = 5), (e.t0 = e.catch(0));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                );
              })
            );
          },
          counterNum: y,
          counterTotal: x,
          isShowCounter: S,
        }
      );
    },
  };
Array || p.resolveComponent("columnListItem")();
var h = p._export_sfc(d, [
  [
    "render",
    function (e, t, n, r, a, u) {
      return p.e(
        { a: r.isDataReady },
        r.isDataReady
          ? {
              b: p.f(r.basketList.value, function (e, t, r) {
                return p.e(
                  { a: e },
                  e
                    ? {
                        b: "422d6cba-0-" + r,
                        c: p.p({
                          "is-hstab-show": n.isHstabShow,
                          "report-prefix": n.reportPrefix,
                          "basket-data": e,
                          "category-id": n.categoryId,
                          "item-index": t,
                        }),
                      }
                    : {},
                  { d: "".concat(t), e: t }
                );
              }),
              c: "".concat(n.safeBottom + n.safeTabBar, "px"),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-422d6cba"],
]);
wx.createComponent(h);
