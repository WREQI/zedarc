require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, r, t) {
    return r in e
      ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  l = function (e, r) {
    for (var n in r || (r = {})) s.call(r, n) && u(e, n, r[n]);
    if (a) {
      var o,
        i = t(a(r));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          n = o.value;
          c.call(r, n) && u(e, n, r[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, r) {
    return o(e, i(r));
  },
  p = function (e, r, t) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((t = t.apply(e, r)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-hq-data/index.js"),
  v = require("../../hooks/useScroll.js"),
  g = require("../../utils/api.js"),
  h = require("../../utils/dealData.js"),
  y = "wx4ffb369b6881ee5e",
  b = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return p(exports, [].concat(t), function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.limit,
        n = void 0 === t ? 10 : t,
        o = e.lastMsgId,
        i = void 0 === o ? "" : o;
      return r().mark(function e() {
        var t, o, a, s;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    "https://proxy.finance.qq.com/cgi/cgi-bin/messagebox/messageList",
                    (t = l(
                      d(
                        l(
                          {},
                          "mp" === f.StockBridge.ENV
                            ? {
                                appid: y,
                                openid: f.StockBridge.getStorage("_qluin"),
                                fskey: f.StockBridge.getStorage("_qlskey"),
                                check: "11",
                              }
                            : {
                                appid: y,
                                openid: f.StockBridge.getCookie("wzq_qluin"),
                                fskey: f.StockBridge.getCookie("wzq_qlskey"),
                                check: "11",
                              }
                        ),
                        { sender: "wx_dingpan", limit: n }
                      ),
                      i ? { lastmessageid: i } : {}
                    )),
                    (o = []),
                    Object.keys(t).forEach(function (e) {
                      var r = t[e];
                      o.push(
                        ""
                          .concat(encodeURIComponent(e), "=")
                          .concat(encodeURIComponent(r))
                      );
                    }),
                    (a = ""
                      .concat(
                        "https://proxy.finance.qq.com/cgi/cgi-bin/messagebox/messageList",
                        "?"
                      )
                      .concat(o.join("&"))),
                    (e.next = 6),
                    f.StockBridge.request(a, "GET")
                  );
                case 6:
                  if (0 === (null == (s = e.sent) ? void 0 : s.code)) {
                    e.next = 9;
                    break;
                  }
                  throw new Error(
                    (null == s ? void 0 : s.msg) || "系统繁忙，请稍后再试"
                  );
                case 9:
                  return e.abrupt("return", s);
                case 12:
                  throw ((e.prev = 12), (e.t0 = e.catch(0)), e.t0);
                case 15:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 12]]
        );
      })();
    });
  },
  w = {
    components: {
      dingpanContent: function () {
        return "../../components/dingpan/index.js";
      },
      empty: function () {
        return "../empty/index.js";
      },
    },
    setup: function () {
      var t = (function () {
          var t = this,
            n = f.ref([]),
            o = f.ref(!1),
            i = f.ref(null),
            a = f.ref(!0),
            s = function () {
              for (
                var s = arguments.length, u = new Array(s), l = 0;
                l < s;
                l++
              )
                u[l] = arguments[l];
              return p(t, [].concat(u), function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  s = t.limit,
                  u = void 0 === s ? 10 : s,
                  l = t.lastId,
                  d = void 0 === l ? "" : l,
                  p = t.isLoadMore,
                  f = void 0 !== p && p;
                return r().mark(function t() {
                  var s, l;
                  return r().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.prev = 0),
                              (o.value = !0),
                              (r.next = 4),
                              b({ limit: u, lastMsgId: d })
                            );
                          case 4:
                            (s = r.sent),
                              (l = s.data),
                              (n.value = f
                                ? [].concat(
                                    e(n.value),
                                    e(
                                      l.messagelist.map(function (e) {
                                        return c(e);
                                      })
                                    )
                                  )
                                : l.messagelist.map(function (e) {
                                    return c(e);
                                  })),
                              (a.value = l.hasmore || !1),
                              (r.next = 12);
                            break;
                          case 9:
                            (r.prev = 9), (r.t0 = r.catch(0)), (i.value = r.t0);
                          case 12:
                            return (
                              (r.prev = 12),
                              setTimeout(function () {
                                o.value = !1;
                              }, 500),
                              r.finish(12)
                            );
                          case 15:
                          case "end":
                            return r.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9, 12, 15]]
                  );
                })();
              });
            },
            c = function (e) {
              var r = e.symbol,
                t = void 0 === r ? "" : r,
                n = e.datetime,
                o = void 0 === n ? "" : n,
                i = "",
                a = m.utils.splitSymbol(t),
                s = a.market,
                c = void 0 === s ? "" : s,
                u = a.scode,
                p = void 0 === u ? "" : u;
              if (f.dayjs(o).isValid()) {
                var v = f.dayjs(),
                  g = f.dayjs(o);
                i = v.isSame(g, "day")
                  ? g.format("HH:mm")
                  : g.format("MM-DD HH:mm");
              }
              return d(l({}, e), { market: c, scode: p, formatDate: i });
            };
          return {
            list: n,
            loading: o,
            error: i,
            hasMore: a,
            fetchData: s,
            loadMore: function () {
              return p(
                t,
                null,
                r().mark(function e() {
                  var t;
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = a.value && !o.value), !e.t0)) {
                            e.next = 4;
                            break;
                          }
                          return (
                            (e.next = 4),
                            s({
                              lastId:
                                null == (t = n.value[n.value.length - 1])
                                  ? void 0
                                  : t.messageid,
                              isLoadMore: !0,
                            })
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
            refresh: function () {
              return p(
                t,
                null,
                r().mark(function e() {
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            },
          };
        })(),
        n = t.list,
        o = t.fetchData,
        i = t.loadMore,
        a = t.refresh,
        s = f.ref(!1),
        c = v.useScroll().setRemindHover,
        u = f.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        });
      return (
        o(),
        {
          list: n,
          loadMore: function () {
            i();
          },
          pullRefresh: function () {
            return p(
              this,
              null,
              r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (s.value = !0), (e.next = 3), a();
                      case 3:
                        return (
                          setTimeout(function () {
                            s.value = !1;
                          }, 800),
                          (e.next = 6),
                          g.readMessage({
                            msg_box_type: h.BACK_END_MESSAGE_ID.chooseRemind,
                          })
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
          refreshTriggered: s,
          onRemindContainerScroll: function (e) {
            var r, t;
            (null == (r = e.target) ? void 0 : r.scrollTop) > 16 ||
            (null == (t = e.detail) ? void 0 : t.scrollTop) > 16
              ? c(!0)
              : c(!1);
          },
          isSimpleMode: u,
        }
      );
    },
  };
Array || (f.resolveComponent("dingpanContent") + f.resolveComponent("empty"))();
var x = f._export_sfc(w, [
  [
    "render",
    function (e, r, t, n, o, i) {
      return f.e(
        { a: n.list.length > 0 },
        n.list.length > 0
          ? f.e(
              { b: n.list.length > 0 },
              n.list.length > 0
                ? {
                    c: f.sr("contentRef", "53e323ad-0"),
                    d: f.p({ list: n.list }),
                  }
                : {},
              {
                e: n.isSimpleMode ? "" : 1,
                f: n.refreshTriggered,
                g: f.o(function (e) {
                  return n.pullRefresh();
                }, 2336),
                h: f.o(function (e) {
                  return n.loadMore();
                }, 2337),
                i: f.o(function () {
                  return (
                    n.onRemindContainerScroll &&
                    n.onRemindContainerScroll.apply(n, arguments)
                  );
                }, 2338),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-53e323ad"],
]);
wx.createComponent(x);
