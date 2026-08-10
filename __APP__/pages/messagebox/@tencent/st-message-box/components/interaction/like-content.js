var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = function (e, t, a) {
    return new Promise(function (n, r) {
      var s = function (e) {
          try {
            u(a.next(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          try {
            u(a.throw(e));
          } catch (e) {
            r(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, o);
        };
      u((a = a.apply(e, t)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  r = require("help.js"),
  s = require("../../utils/interaction-help.js"),
  o = {
    components: {
      BottomTips: function () {
        return "./bottom-tips.js";
      },
      blankTips: function () {
        return "./blank-tips.js";
      },
      item: function () {
        return "./item.js";
      },
    },
    props: { isSelected: { type: Boolean, default: !1 } },
    setup: function (o, u) {
      var i = this,
        c = u.emit;
      n.watch(
        function () {
          return o.isSelected;
        },
        function (e, n) {
          return a(
            i,
            null,
            t().mark(function a() {
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      e && 0 === v.value.length && h();
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, a);
            })
          );
        }
      );
      var l = n.ref(!1),
        p = n.ref(""),
        f = n.ref(o.limit ? o.limit : 20),
        m = n.ref(!0),
        v = n.ref([]),
        d = {};
      a(
        i,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), s.getUserInfoData();
                case 2:
                  d = e.sent;
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      ),
        n.onMounted(function () {});
      var h = function () {
        return a(
          i,
          null,
          t().mark(function e() {
            var a, n, o, u;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        r.requestMessageBoxListLike("", f.value)
                      );
                    case 3:
                      if (!(n = e.sent) || 0 !== n.code) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.next = 7), s.msgCommentFilterHelp(n.data, !0, !1, d)
                      );
                    case 7:
                      (o = e.sent),
                        (u = o.commentsData),
                        (v.value = u),
                        (p.value = n.data.lastmessageid),
                        (m.value =
                          n.data.hasmore &&
                          (null == (a = p.value) ? void 0 : a.length) > 0),
                        (l.value = !0),
                        c("refreshSuccess", { data: n, hasMore: m.value }),
                        (e.next = 13);
                      break;
                    case 12:
                      c("refreshFail");
                    case 13:
                      e.next = 18;
                      break;
                    case 15:
                      (e.prev = 15), (e.t0 = e.catch(0)), c("refreshFail");
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 15]]
            );
          })
        );
      };
      return {
        isDataReady: l,
        listData: v,
        refresh: h,
        loadMore: function () {
          return a(
            i,
            null,
            t().mark(function a() {
              var n, o, u, i;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!m.value) {
                          t.next = 16;
                          break;
                        }
                        return (
                          (t.prev = 1),
                          (t.next = 4),
                          r.requestMessageBoxListLike(p.value, f.value)
                        );
                      case 4:
                        if (!(o = t.sent) || 0 !== o.code) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.next = 8),
                          s.msgCommentFilterHelp(o.data, !0, !1, d)
                        );
                      case 8:
                        (u = t.sent),
                          (i = u.commentsData),
                          (v.value = [].concat(e(v.value), e(i))),
                          (p.value = o.data.lastmessageid),
                          (m.value =
                            o.data.hasmore &&
                            (null == (n = p.value) ? void 0 : n.length) > 0),
                          c("loadMoreSuccess", { data: o, hasMore: m.value });
                      case 11:
                        t.next = 16;
                        break;
                      case 13:
                        (t.prev = 13), (t.t0 = t.catch(1)), c("loadMoreFail");
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                a,
                null,
                [[1, 13]]
              );
            })
          );
        },
      };
    },
    computed: {
      PageType: function () {
        return r.PageType;
      },
      IteractionItemType: function () {
        return r.IteractionItemType;
      },
    },
  };
Array ||
  (
    n.resolveComponent("item") +
    n.resolveComponent("blank-tips") +
    n.resolveComponent("bottom-tips")
  )();
var u = n._export_sfc(o, [
  [
    "render",
    function (e, t, a, r, s, o) {
      return n.e(
        { a: r.listData && r.listData.length > 0 },
        r.listData && r.listData.length > 0
          ? {
              b: n.f(r.listData, function (e, t, a) {
                return {
                  a: "13e5fc12-0-" + a,
                  b: n.p({
                    "report-prefix": o.PageType.LIKE,
                    "item-index": t,
                    "item-data": e,
                    "item-type": o.IteractionItemType.LIKE,
                  }),
                  c: t,
                };
              }),
            }
          : (r.listData && r.listData.length, {}),
        { c: r.listData && 0 === r.listData.length, d: r.isDataReady },
        (r.isDataReady, {})
      );
    },
  ],
  ["__scopeId", "data-v-13e5fc12"],
]);
wx.createComponent(u);
