var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = function (e, t, r) {
    return new Promise(function (n, a) {
      var s = function (e) {
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
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, u);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  r = require("../../utils/api.js"),
  n = require("../../utils/dealData.js"),
  a = require("../../../../../../common/vendor.js"),
  s = {
    components: {
      platItem: function () {
        return "./platItem.js";
      },
      messageEmpty: function () {
        return "../empty/index.js";
      },
    },
    setup: function (s, u) {
      var i = u.emit,
        o = a.ref([]),
        l = a.ref(0),
        c = a.ref(!0),
        p = a.inject("stockBridge"),
        v = a.ref(!1),
        m = a.inject("skin"),
        f = a.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        });
      function d() {
        return t(
          this,
          null,
          e().mark(function t() {
            var a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (l.value = 0),
                        (e.next = 4),
                        r.getPlatMessage(l.value, !0)
                      );
                    case 4:
                      if (
                        ((a = e.sent),
                        (o.value = n.dealPlatMessage(a.items)),
                        (c.value = a.has_more),
                        (l.value = l.value + 1),
                        i("refreshSuccess", a),
                        0 !== o.value.length)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return", void (v.value = !0));
                    case 7:
                      (v.value = !1), (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(0)),
                        (v.value = !0),
                        i("refreshFail");
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 10]]
            );
          })
        );
      }
      return (
        a.onMounted(function () {
          d();
        }),
        a.onActivated(function () {
          d();
        }),
        {
          messageList: o,
          showEmpty: v,
          stockBridge: p,
          refresh: d,
          loadMore: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var a, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!c.value) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            r.getPlatMessage(l.value)
                          );
                        case 4:
                          (a = e.sent),
                            (s = n.dealPlatMessage(a.items)),
                            (o.value = o.value.concat(s)),
                            (c.value = a.has_more),
                            (l.value = l.value + 1),
                            i("loadMoreSuccess", a),
                            (v.value = !1),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            i("loadMoreFail"),
                            (v.value = !0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            );
          },
          isSimpleMode: f,
          skin: m,
        }
      );
    },
  };
Array ||
  (a.resolveComponent("messageEmpty") + a.resolveComponent("platItem"))();
var u = a._export_sfc(s, [
  [
    "render",
    function (e, t, r, n, s, u) {
      return a.e(
        { a: n.showEmpty },
        n.showEmpty
          ? {}
          : a.e(
              {
                b: a.f(n.messageList, function (e, t, r) {
                  return {
                    a: t,
                    b: "6d7327f8-1-" + r,
                    c: a.p({ "item-data": e }),
                  };
                }),
                c: n.isSimpleMode,
              },
              (n.isSimpleMode || n.isSimpleMode || n.skin, {}),
              { d: !n.isSimpleMode && "dark" === n.skin }
            )
      );
    },
  ],
  ["__scopeId", "data-v-6d7327f8"],
]);
wx.createComponent(u);
