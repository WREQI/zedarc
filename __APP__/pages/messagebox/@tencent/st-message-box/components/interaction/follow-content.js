var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = function (e, t, a) {
    return new Promise(function (r, n) {
      var o = function (e) {
          try {
            s(a.next(e));
          } catch (e) {
            n(e);
          }
        },
        u = function (e) {
          try {
            s(a.throw(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, u);
        };
      s((a = a.apply(e, t)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  n = require("help.js"),
  o = {
    components: {
      BottomTips: function () {
        return "./bottom-tips.js";
      },
      blankTips: function () {
        return "./blank-tips.js";
      },
      item: function () {
        return "./follow-item.js";
      },
    },
    props: { isSelected: { type: Boolean, default: !1 } },
    setup: function (o, u) {
      var s = this,
        l = u.emit;
      r.watch(
        function () {
          return o.isSelected;
        },
        function (e, r) {
          return a(
            s,
            null,
            t().mark(function a() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      e && 0 === p.value.length && v();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, a);
            })
          );
        }
      );
      var i = r.ref(!1),
        c = r.ref(o.limit ? o.limit : 20),
        f = r.ref(!0),
        p = r.ref([]);
      r.onMounted(function () {});
      var v = function () {
        return a(
          s,
          null,
          t().mark(function e() {
            var a;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        n.requestMessageBoxListFollow("1", c.value)
                      );
                    case 3:
                      (a = e.sent) && 0 === a.code
                        ? ((p.value = a.data.data),
                          (f.value = 1 === a.data.more_flag),
                          (i.value = !0),
                          l("refreshSuccess", { data: a, hasMore: f.value }))
                        : l("refreshFail"),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0)), l("refreshFail");
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        );
      };
      return {
        isDataReady: i,
        listData: p,
        refresh: v,
        loadMore: function () {
          return a(
            s,
            null,
            t().mark(function a() {
              var r, o;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (f.value) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (
                          (r = p.value.length / c.value + 1),
                          (t.prev = 3),
                          (t.next = 6),
                          n.requestMessageBoxListFollow(r, c.value)
                        );
                      case 6:
                        (o = t.sent) &&
                          0 === o.code &&
                          ((p.value = [].concat(e(p.value), e(o.data.data))),
                          (f.value = 1 === o.data.more_flag),
                          l("loadMoreSuccess", { data: o, hasMore: f.value })),
                          (t.next = 13);
                        break;
                      case 10:
                        (t.prev = 10), (t.t0 = t.catch(3)), l("loadMoreFail");
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                a,
                null,
                [[3, 10]]
              );
            })
          );
        },
      };
    },
    computed: {
      PageType: function () {
        return n.PageType;
      },
    },
  };
Array ||
  (
    r.resolveComponent("item") +
    r.resolveComponent("blank-tips") +
    r.resolveComponent("bottom-tips")
  )();
var u = r._export_sfc(o, [
  [
    "render",
    function (e, t, a, n, o, u) {
      return r.e(
        { a: n.listData && n.listData.length > 0 },
        n.listData && n.listData.length > 0
          ? {
              b: r.f(n.listData, function (e, t, a) {
                return {
                  a: "60ccd07b-0-" + a,
                  b: r.p({ "item-index": t, "item-data": e }),
                  c: t,
                };
              }),
            }
          : (n.listData && n.listData.length, {}),
        { c: n.listData && 0 === n.listData.length, d: n.isDataReady },
        (n.isDataReady, {})
      );
    },
  ],
  ["__scopeId", "data-v-60ccd07b"],
]);
wx.createComponent(u);
