var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = function (e, r) {
    for (var i in r || (r = {})) a.call(r, i) && u(e, i, r[i]);
    if (n) {
      var c,
        s = t(n(r));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          i = c.value;
          o.call(r, i) && u(e, i, r[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
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
  s = require("../../../../../common/vendor.js"),
  p = require("../api/index.js"),
  l = s.defineComponent({
    props: {
      rankType: { type: String, default: "news" },
      curType: { type: String, default: "news" },
    },
    emits: ["viewNewsDetail"],
    setup: function (t, r) {
      var n = this,
        a = r.emit,
        o = s.inject("stockBridge"),
        u = s.ref([]);
      s.onMounted(function () {
        return c(
          n,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l();
                  case 2:
                    u.value = e.sent;
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      });
      var l = function () {
          return c(
            n,
            null,
            e().mark(function r() {
              var n, a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { news: f }),
                          (e.prev = 1),
                          (e.next = 4),
                          null == (n = a[t.rankType]) ? void 0 : n.call(a)
                        );
                      case 4:
                        return e.abrupt("return", e.sent);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(1));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[1, 7]]
              );
            })
          );
        },
        f = function () {
          return c(
            n,
            null,
            e().mark(function t() {
              var r, n, a;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        p.serviceApi.getNewsRank(o, i({}, { num: 50 }))
                      );
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = {};
                    case 5:
                      return (
                        (r = e.t0),
                        (n = r.data),
                        (a = (void 0 === n ? {} : n).rankResult),
                        e.abrupt("return", a)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        };
      s.watch(
        function () {
          return t.curType;
        },
        function (e) {
          e === t.rankType && d("tab_".concat(t.rankType, "_brow"));
        }
      );
      var d = function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = { positionlist: t };
        o.report("base.hot.card_version_".concat(e), i(i({}, n), r));
      };
      return {
        renderData: u,
        dateFormat: function (e) {
          return s.dayjs(e).format("HH:mm");
        },
        viewNewsDetail: function (e, r) {
          var n = e.new_type,
            o = e.news_id,
            u = 1 == +n ? { postid: o } : { newsid: o };
          d("".concat(t.rankType, "_click"), { position: +r + 1 }, u),
            a("viewNewsDetail", e);
        },
      };
    },
  }),
  f = s._export_sfc(l, [
    [
      "render",
      function (e, t, r, n, a, o) {
        return s.e(
          { a: e.renderData && e.renderData.length },
          e.renderData && e.renderData.length
            ? {
                b: s.f(e.renderData, function (t, r, n) {
                  return {
                    a: s.t(r + 1),
                    b: s.t(t.news_title),
                    c: s.t(t.source),
                    d: s.t(e.dateFormat(t.publish_time)),
                    e: r,
                    f: s.o(
                      function (n) {
                        return e.viewNewsDetail(t, r);
                      },
                      3015,
                      r
                    ),
                  };
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1b776984"],
  ]);
wx.createComponent(f);
