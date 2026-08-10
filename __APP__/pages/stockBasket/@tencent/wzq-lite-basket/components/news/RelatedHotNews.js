var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, r) {
    for (var n in r || (r = {})) o.call(r, n) && a(e, n, r[n]);
    if (c) {
      var i,
        l = t(c(r));
      try {
        for (l.s(); !(i = l.n()).done; ) {
          n = i.value;
          s.call(r, n) && a(e, n, r[n]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  u = require("../../../../../../common/vendor.js"),
  p = require("../../../stock-news-core/utils/tools.js"),
  f = u.defineComponent({
    components: {
      NewsItem: function () {
        return "./NewsItem.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      watchlistId: { type: String, default: "" },
    },
    setup: function (t, r) {
      var c = this,
        o = (r.emit, u.ref()),
        s = u.inject("stockBridge"),
        a = function () {
          return (
            (r = c),
            null,
            (a = e().mark(function () {
              var r, c, a, u, f, w;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (u = {}),
                          (e.next = 4),
                          s.request(
                            "https://snp.tenpay.com/cgi/cgi-bin/snp/watchlist/news",
                            "GET",
                            ((c = l(l({}, u), p.md5())),
                            (a = { watchlist_id: t.watchlistId }),
                            n(c, i(a))),
                            { forceCallback: !0 }
                          )
                        );
                      case 4:
                        (f = e.sent) &&
                          0 === f.code &&
                          (w =
                            (null == (r = null == f ? void 0 : f.data)
                              ? void 0
                              : r.list) || []).length > 0 &&
                          (o.value = w),
                          (e.next = 10);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                a,
                null,
                [[0, 8]]
              );
            })),
            new Promise(function (e, t) {
              var n = function e(r) {
                  try {
                    c(a.next(r));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (e) {
                  try {
                    c(a.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                c = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(n, i);
                };
              c((a = a.apply(r, null)).next());
            })
          );
          var r, a;
        };
      return (
        u.watch(
          function () {
            return t.watchlistId;
          },
          function (e, t) {
            e !== t && a();
          },
          { deep: !0, immediate: !0 }
        ),
        { newsList: o }
      );
    },
  });
Array || u.resolveComponent("NewsItem")();
var w = u._export_sfc(f, [
  [
    "render",
    function (e, t, r, n, i, c) {
      return u.e(
        { a: e.newsList && e.newsList.length > 0 },
        e.newsList && e.newsList.length > 0
          ? {
              b: u.f(e.newsList, function (t, r, n) {
                return {
                  a: ""
                    .concat(e.watchlistId, "-news-")
                    .concat(t.id, "-")
                    .concat(r),
                  b: "8b62184f-0-" + n,
                  c: u.p({
                    "report-prefix": e.reportPrefix,
                    item: t,
                    "item-index": r,
                    last: r === e.newsList.length - 1,
                    "watchlist-id": e.watchlistId,
                  }),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8b62184f"],
]);
wx.createComponent(w);
