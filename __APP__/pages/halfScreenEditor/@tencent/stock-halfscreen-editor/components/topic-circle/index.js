var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  i = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, u);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  s = require("../../../../../../common/vendor.js"),
  l = require("../../../st-status/mp/config.js"),
  p = {
    components: {
      Status: function () {
        return "../../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    setup: function (n, p) {
      var v = this,
        f = p.emit;
      s.StockBridge.setTitle("话题圈");
      var d = s.ref(0),
        m = s.ref(!1),
        b = s.ref([]),
        g = s.ref(!1),
        h = s.ref(l.COMMON_PAGE_STATUS.LOADING),
        S = function (e) {
          var t = (function (e, t) {
            for (var n in t || (t = {})) o.call(t, n) && i(e, n, t[n]);
            if (a) {
              var c,
                s = r(a(t));
              try {
                for (s.s(); !(c = s.n()).done; ) {
                  n = c.value;
                  u.call(t, n) && i(e, n, t[n]);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            }
            return e;
          })({}, e);
          return s.StockBridge.request(
            "https://wzq.tenpay.com/group/newstockgroup/commentPlat/topicList",
            "GET",
            t
          );
        },
        y = function () {
          return c(
            v,
            null,
            e().mark(function r() {
              var n, a, o, u, i, c, s;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (g.value) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (d.value = 0),
                          (g.value = !0),
                          (h.value = l.COMMON_PAGE_STATUS.LOADING),
                          (e.prev = 2),
                          (n = { limit: 20, begin: 20 * d.value }),
                          (e.next = 6),
                          S(n)
                        );
                      case 6:
                        (a = e.sent),
                          (o = a.data),
                          (u = (null == o ? void 0 : o.data) || []),
                          (i = (null == o ? void 0 : o.hasMore) || 0),
                          (c = null == o ? void 0 : o.activity_topic),
                          (s = t(u)),
                          c && ((c.feedbackExt = !0), s.splice(9, 0, c)),
                          (b.value = s),
                          (m.value = 1 === i),
                          (h.value = null),
                          f("refreshSuccess", b.value),
                          (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(2)),
                          (h.value = l.COMMON_PAGE_STATUS.ERROR),
                          f("refreshFail");
                      case 18:
                        return (e.prev = 18), (g.value = !1), e.finish(18);
                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[2, 15, 18, 21]]
              );
            })
          );
        };
      return (
        s.onMounted(function () {
          y();
        }),
        {
          refresh: y,
          loadMore: function () {
            return c(
              v,
              null,
              e().mark(function r() {
                var n, a, o, u, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!m.value || g.value) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (g.value = !0),
                            (e.prev = 2),
                            (d.value = d.value + 1),
                            (n = { limit: 20, begin: 20 * d.value }),
                            (e.next = 7),
                            S(n)
                          );
                        case 7:
                          (a = e.sent),
                            (o = a.data),
                            (u = (null == o ? void 0 : o.data) || []),
                            (i = (null == o ? void 0 : o.hasMore) || 0),
                            (b.value = [].concat(t(b.value), t(u))),
                            (m.value = 1 === i),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(2)),
                            (h.value = l.COMMON_PAGE_STATUS.ERROR);
                        case 17:
                          return (e.prev = 17), (g.value = !1), e.finish(17);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 14, 17, 20]]
                );
              })
            );
          },
          loading: g,
          enableLoadMore: m,
          topicList: b,
          page: d,
          safeBottom: 34,
          safeTabBar: 0,
          bindTapComment: function (e) {
            s.StockBridge.report("tp_detail_click");
            var t = e.currentTarget.dataset,
              r = t.tid,
              n = t.topic,
              a = "community-topicPicked";
            s.StockBridge.ENV === s.EnvTypeEnum.SHY_NATIVE
              ? (shy.notify(a, { topicId: r, topic: n, module: !1 }),
                shy.exit(!0))
              : (s.StockBridge.busEmit(a, { topicId: r, topic: n }),
                s.StockRouter.routeBack(1));
          },
          pageStatus: h,
          onErrorRetry: function () {
            y();
          },
        }
      );
    },
  };
Array || s.resolveComponent("Status")();
var v = s._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return s.e(
        { a: !n.pageStatus && n.topicList && n.topicList.length > 0 },
        !n.pageStatus && n.topicList && n.topicList.length > 0
          ? {
              b: s.f(n.topicList, function (e, t, r) {
                return {
                  a: s.t(e.topic),
                  b: t,
                  c: e.topic_id,
                  d: e.topic,
                  e: e,
                  f: s.o(
                    function () {
                      return (
                        n.bindTapComment && n.bindTapComment.apply(n, arguments)
                      );
                    },
                    2167,
                    t
                  ),
                };
              }),
              c: "".concat(n.safeBottom + n.safeTabBar, "px"),
            }
          : {},
        { d: n.pageStatus },
        n.pageStatus
          ? {
              e: s.o(n.onErrorRetry, 2168),
              f: s.p({ type: n.pageStatus, "is-simple-mode": !0 }),
            }
          : {},
        { g: !n.pageStatus && 0 === n.topicList.length },
        (n.pageStatus || n.topicList.length, {})
      );
    },
  ],
  ["__scopeId", "data-v-880470d7"],
]);
wx.createComponent(v);
