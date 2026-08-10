var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  o = require("../utils/index.js"),
  a = {
    components: {
      NewsHistoryBlock: function () {
        return "./newsHistoryBlock.js";
      },
      EmptyShow: function () {
        return "./emptyShow.js";
      },
    },
    props: {},
    setup: function (a, u) {
      var s = this,
        c = u.emit,
        i = 0,
        l = !1,
        p = n.ref([]),
        m = n.computed(function () {
          return 0 === p.value.length;
        });
      function f(a) {
        return r(
          this,
          null,
          e().mark(function r() {
            var u, s, m, f, h, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), a && ((i = 0), !0), !l)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 3:
                      return (
                        (l = !0),
                        (e.next = 6),
                        o.AccountAPI.queryMyHistory(o.RECORD_TYPE.news, i, 20)
                      );
                    case 6:
                      if (0 !== (u = e.sent).retcode) {
                        e.next = 13;
                        break;
                      }
                      if (
                        ((m = u.has_more),
                        (f = u.offset_time),
                        (h = u.news_records),
                        m || c("loadAll", "news", 0 === h.length),
                        0 !== h.length)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", ((l = !1), !0));
                    case 11:
                      return (
                        (d = o.getDateGroupData(h)),
                        e.abrupt(
                          "return",
                          (i && o.mergeSameDayData(p.value, d),
                          a && (p.value = []),
                          (s = p.value).splice.apply(
                            s,
                            [p.value.length, 0].concat(t(d))
                          ),
                          (i = f),
                          (l = !1),
                          !m)
                        )
                      );
                    case 13:
                      (l = !1),
                        n.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        }),
                        (e.next = 19);
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t0 = e.catch(0)),
                        (l = !1),
                        n.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        });
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 16]]
            );
          })
        );
      }
      return (
        r(
          s,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    f();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        ),
        { newsData: p, loadMore: f, showEmpty: m }
      );
    },
  };
Array ||
  (
    n.resolveComponent("news-history-block") + n.resolveComponent("empty-show")
  )();
var u = n._export_sfc(a, [
  [
    "render",
    function (e, t, r, o, a, u) {
      return n.e(
        {
          a: n.f(o.newsData, function (e, t, r) {
            return {
              a: e.timeString,
              b: "77c5bd33-0-" + r,
              c: n.p({ data: e.data, title: e.timeString }),
            };
          }),
          b: o.showEmpty,
        },
        (o.showEmpty, {})
      );
    },
  ],
  ["__scopeId", "data-v-77c5bd33"],
]);
wx.createComponent(u);
