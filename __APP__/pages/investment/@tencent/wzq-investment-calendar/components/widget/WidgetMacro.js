var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, n) {
    for (var c in n || (n = {})) a.call(n, c) && u(e, c, n[c]);
    if (r) {
      var s,
        i = t(r(n));
      try {
        for (i.s(); !(s = i.n()).done; ) {
          c = s.value;
          o.call(n, c) && u(e, c, n[c]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  s = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, u);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  i = require("../../../../../../common/vendor.js"),
  l = require("./Widget.js");
require("../../../../js-cookie/src/js.cookie.js"),
  require("../../../stock-news-core/utils/request/index.js");
var d = require("../../../stock-news-core/utils/loginHelper.js");
require("../../../stock-news-core/utils/apiMapping.js"),
  require("../../../stock-news-core/utils/knife.js"),
  require("../../../stock-crypto-modules-config/dist/index.js");
var f = require("useWidget.js"),
  p = "https://proxy.finance.qq.com",
  h = "".concat(p, "/newstock/stockapp/zixuangu/stockAdd"),
  m = "".concat(p, "/newstock/stockapp/Updstock/operseq"),
  b = function () {
    return d.getLoginParamsObject();
  },
  g = function (t) {
    return s(
      exports,
      null,
      e().mark(function n() {
        var r, a;
        return e().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (n.next = 2),
                  (function (t) {
                    return s(
                      exports,
                      null,
                      e().mark(function n() {
                        var r, a, o;
                        return e().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t.length) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", new Map());
                              case 2:
                                return (
                                  (r = b()),
                                  (e.next = 5),
                                  i.StockBridge.request(
                                    h,
                                    "GET",
                                    c({ stocks: t.join(",") }, r)
                                  )
                                );
                              case 5:
                                return (
                                  (a = e.sent),
                                  (o = new Map()),
                                  e.abrupt(
                                    "return",
                                    (0 === a.code && a.data
                                      ? t.forEach(function (e) {
                                          var t = 1 === a.data[e];
                                          o.set(e, {
                                            symbol: e,
                                            groups: t ? ["1"] : [],
                                            isInChoose: t,
                                          });
                                        })
                                      : t.forEach(function (e) {
                                          o.set(e, {
                                            symbol: e,
                                            groups: [],
                                            isInChoose: !1,
                                          });
                                        }),
                                    o)
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, n);
                      })
                    );
                  })(t)
                );
              case 2:
                return (
                  (r = n.sent),
                  (a = new Map()),
                  n.abrupt(
                    "return",
                    (r.forEach(function (e, t) {
                      a.set(t, e.isInChoose);
                    }),
                    a)
                  )
                );
              case 5:
              case "end":
                return n.stop();
            }
        }, n);
      })
    );
  },
  v = i.defineComponent({
    name: "WidgetMacro",
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      subscribed: { type: Boolean, default: !1 },
      maxCount: { type: Number, default: 3 },
      isOnShow: { type: Boolean, default: !1 },
      loaded: { type: Boolean, default: !1 },
    },
    emits: ["subscribe", "item-click", "more", "choose-change", "hide"],
    setup: function (t, n) {
      var r = this,
        a = n.emit,
        o = i.ref(new Map()),
        u = i.ref(!1),
        d = i.computed(function () {
          return t.list.slice(0, t.maxCount);
        }),
        p = i.computed(function () {
          return t.list.length >= t.maxCount;
        }),
        h = function () {
          return s(
            r,
            null,
            e().mark(function n() {
              var r;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!u.value) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if (
                          !(r = (function (e) {
                            var t = new Set();
                            return (
                              e.forEach(function (e) {
                                e.code && t.add(e.code);
                              }),
                              Array.from(t)
                            );
                          })(t.list)).length
                        ) {
                          e.next = 17;
                          break;
                        }
                        return (e.prev = 4), (u.value = !0), (e.next = 8), g(r);
                      case 8:
                        e.sent.forEach(function (e, t) {
                          o.value.set(t, e);
                        }),
                          (o.value = new Map(o.value)),
                          (e.next = 14);
                        break;
                      case 12:
                        (e.prev = 12), (e.t0 = e.catch(4));
                      case 14:
                        return (e.prev = 14), (u.value = !1), e.finish(14);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[4, 12, 14, 17]]
              );
            })
          );
        },
        v = function (t, n) {
          return s(
            r,
            null,
            e().mark(function r() {
              var a;
              return e().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (((r.prev = 0), !n)) {
                          r.next = 7;
                          break;
                        }
                        return (
                          (r.next = 4),
                          (function (t) {
                            var n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "1";
                            return s(
                              exports,
                              null,
                              e().mark(function r() {
                                var a, o;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (t.length) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return", {
                                          code: 0,
                                          msg: "success",
                                        });
                                      case 2:
                                        return (
                                          (a = b()),
                                          (o = t.map(function (e) {
                                            return {
                                              code: e,
                                              timestamp: Date.now(),
                                              grpid: n,
                                              act: "sa",
                                            };
                                          })),
                                          (e.next = 5),
                                          i.StockBridge.request(
                                            m,
                                            "GET",
                                            c({ seq: JSON.stringify(o) }, a)
                                          )
                                        );
                                      case 5:
                                        return e.abrupt("return", e.sent);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, r);
                              })
                            );
                          })([t])
                        );
                      case 4:
                        (r.t0 = r.sent), (r.next = 10);
                        break;
                      case 7:
                        return (
                          (r.next = 9),
                          (function (t) {
                            var n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "1";
                            return s(
                              exports,
                              null,
                              e().mark(function r() {
                                var a, o;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (t.length) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return", {
                                          code: 0,
                                          msg: "success",
                                        });
                                      case 2:
                                        return (
                                          (a = b()),
                                          (o = t.map(function (e) {
                                            return {
                                              code: e,
                                              timestamp: Date.now(),
                                              grpid: n,
                                              act: "sd",
                                            };
                                          })),
                                          (e.next = 5),
                                          i.StockBridge.request(
                                            m,
                                            "GET",
                                            c({ seq: JSON.stringify(o) }, a)
                                          )
                                        );
                                      case 5:
                                        return e.abrupt("return", e.sent);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, r);
                              })
                            );
                          })([t])
                        );
                      case 9:
                        r.t0 = r.sent;
                      case 10:
                        return (
                          (a = r.t0),
                          r.abrupt(
                            "return",
                            0 === a.code &&
                              (o.value.set(t, n),
                              (o.value = new Map(o.value)),
                              !0)
                          )
                        );
                      case 14:
                        return (
                          (r.prev = 14),
                          (r.t1 = r.catch(0)),
                          r.abrupt("return", !1)
                        );
                      case 17:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 14]]
              );
            })
          );
        };
      i.watch(
        function () {
          return t.list;
        },
        function (e) {
          (null == e ? void 0 : e.length) && h(),
            t.loaded &&
              e.length < t.maxCount &&
              a("hide", { reason: "insufficient_data", count: e.length });
        },
        { immediate: !0 }
      ),
        i.watch(
          function () {
            return t.loaded;
          },
          function (e) {
            e &&
              t.list.length < t.maxCount &&
              a("hide", { reason: "insufficient_data", count: t.list.length });
          }
        ),
        i.watch(
          function () {
            return t.isOnShow;
          },
          function (e) {
            var n;
            e && (null == (n = t.list) ? void 0 : n.length) && h();
          }
        ),
        i.onMounted(function () {
          var e;
          (null == (e = t.list) ? void 0 : e.length) && h();
        });
      var w = i.ref(i.StockBridge.ENV === i.EnvTypeEnum.MP);
      return {
        displayList: d,
        shouldShow: p,
        chooseStatusMap: o,
        formatDate: f.formatDate,
        handleSubscribe: function () {
          a("subscribe", !t.subscribed);
        },
        handleItemClick: function (e) {
          a("item-click", e);
        },
        handleMore: function () {
          a("more"),
            i.StockRouter.routeTo({
              name: "financialcalendar",
              query: {
                viewtype: "week",
                column: l.WidgetType.MACRO_SECTORS,
                market: "all",
              },
            });
        },
        handleAddClick: function (t) {
          return s(
            r,
            null,
            e().mark(function n() {
              var r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = !o.value.get(t.code)), (e.next = 3), v(t.code, r)
                      );
                    case 3:
                      if (((e.t0 = e.sent), !e.t0)) {
                        e.next = 6;
                        break;
                      }
                      a("choose-change", {
                        code: t.code,
                        isInChoose: r,
                        item: t,
                      });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        },
        isMP: w,
        ADDED_ICON_URL:
          "https://st.gtimg.com/design/a43fa0f1baa60bd218716cc87089d2f1.png",
        NOT_ADDED_ICON_URL:
          "https://st.gtimg.com/design/f4ce9c1ca279a4d9659ae3ed4100bcfa.png",
      };
    },
  }),
  w = i._export_sfc(v, [
    [
      "render",
      function (e, t, n, r, a, o) {
        return i.e(
          { a: e.shouldShow },
          e.shouldShow
            ? i.e(
                { b: e.isMP },
                e.isMP
                  ? {
                      c: i.t(e.subscribed ? "已订阅" : "订阅日历"),
                      d: i.n({
                        "widget-macro__subscribe--subscribed": e.subscribed,
                      }),
                      e: i.o(function () {
                        return (
                          e.handleSubscribe &&
                          e.handleSubscribe.apply(e, arguments)
                        );
                      }, 5844),
                    }
                  : {},
                {
                  f: i.f(e.displayList, function (t, n, r) {
                    return {
                      a: i.t(t.widget_title || t.title),
                      b: i.t(e.formatDate(t.dateStr)),
                      c: i.t(t.name),
                      d: e.chooseStatusMap.get(t.code)
                        ? e.ADDED_ICON_URL
                        : e.NOT_ADDED_ICON_URL,
                      e: i.n({
                        "widget-macro__item-add--added": e.chooseStatusMap.get(
                          t.code
                        ),
                      }),
                      f: i.o(
                        function (n) {
                          return e.handleAddClick(t);
                        },
                        5845,
                        n
                      ),
                      g: n,
                      h: i.o(
                        function (n) {
                          return e.handleItemClick(t);
                        },
                        5846,
                        n
                      ),
                    };
                  }),
                  g: i.o(function () {
                    return e.handleMore && e.handleMore.apply(e, arguments);
                  }, 5847),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6949607a"],
  ]);
wx.createComponent(w);
