var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, a) {
      var s = function (e) {
          try {
            c(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            c(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, u);
        };
      c((t = t.apply(e, r)).next());
    });
  },
  t = require("../../utils/api.js"),
  n = require("../../utils/dealData.js"),
  a = require("../../../../../../common/vendor.js"),
  s = {
    components: {
      feedbackItem: function () {
        return "./feedbackItem.js";
      },
      messageEmpty: function () {
        return "../empty/index.js";
      },
    },
    setup: function (s, u) {
      var c = u.emit,
        o = a.ref([]),
        i = a.ref(1),
        l = a.ref(!0),
        v = a.inject("stockBridge"),
        f = a.ref(!1);
      function d() {
        return r(
          this,
          null,
          e().mark(function r() {
            var a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (i.value = 1),
                        (e.next = 4),
                        t.queryFeedbackListMessage(i.value)
                      );
                    case 4:
                      if (
                        ((a = e.sent),
                        (o.value = n.dealFeedbackListMessage(a.records)),
                        (l.value = a.has_more),
                        (i.value = i.value + 1),
                        c("refreshSuccess", a),
                        0 !== o.value.length)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return", void (f.value = !0));
                    case 7:
                      (f.value = !1), (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(0)),
                        (f.value = !0),
                        c("refreshFail");
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              r,
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
          showEmpty: f,
          stockBridge: v,
          refresh: d,
          loadMore: function () {
            return r(
              this,
              null,
              e().mark(function r() {
                var a, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!l.value) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            t.queryFeedbackListMessage(i.value)
                          );
                        case 4:
                          (a = e.sent),
                            (s = n.dealFeedbackListMessage(a.records)),
                            (o.value = o.value.concat(s)),
                            (l.value = a.has_more),
                            (i.value = i.value + 1),
                            c("loadMoreSuccess", a),
                            (f.value = !1),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            c("loadMoreFail"),
                            (f.value = !0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 9]]
                );
              })
            );
          },
        }
      );
    },
  };
Array ||
  (a.resolveComponent("messageEmpty") + a.resolveComponent("feedbackItem"))();
var u = a._export_sfc(s, [
  [
    "render",
    function (e, r, t, n, s, u) {
      return a.e(
        { a: n.showEmpty },
        n.showEmpty
          ? {}
          : {
              b: a.f(n.messageList, function (e, r, t) {
                return {
                  a: r,
                  b: "e8654ce2-1-" + t,
                  c: a.p({ "item-data": e }),
                };
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-e8654ce2"],
]);
wx.createComponent(u);
