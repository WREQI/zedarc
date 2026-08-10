var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../common/vendor.js"),
  r = {
    setup: function () {
      var r = n.ref(""),
        t = n.ref(""),
        a = n.ref(!1),
        o = n.ref(!1),
        u = n.computed(function () {
          return "/pages/index/index?forbiddenurl=".concat(r.value);
        });
      return (
        n.onMounted(function () {
          var u = getCurrentPages(),
            i = u[u.length - 1];
          i &&
            i.options &&
            (function (u) {
              return (
                (i = this),
                null,
                (c = e().mark(function i() {
                  var c, l, s, d, f, v;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r.value = u.url || ""),
                              (t.value = u.errUrl || ""),
                              (e.prev = 1),
                              (e.next = 4),
                              n.Wuji.get({
                                appid: "act",
                                schemaid: "webview_forbidden_url",
                                schemakey: "47a11d5c48664e6fafb724c212c3f33d",
                                size: "total",
                              })
                            );
                          case 4:
                            (c = e.sent),
                              (l = c.data),
                              (s = void 0 === l ? [] : l),
                              (f = (d = function (e, n) {
                                return (
                                  !(!(null == n ? void 0 : n.length) || !e) &&
                                  n.some(function (n) {
                                    var r = n.forbidden_url.replace(
                                      /[.*+?^${}()|[\]\\]/g,
                                      "\\$&"
                                    );
                                    return new RegExp(r).test(
                                      decodeURIComponent(e)
                                    );
                                  })
                                );
                              })(r.value, s)),
                              (v = d(t.value, s)),
                              (a.value = f && v),
                              (o.value = !a.value),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              (a.value = !1),
                              (o.value = !0);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    i,
                    null,
                    [[1, 13]]
                  );
                })),
                new Promise(function (e, n) {
                  var r = function e(r) {
                      try {
                        a(c.next(r));
                      } catch (e) {
                        n(e);
                      }
                    },
                    t = function (e) {
                      try {
                        a(c.throw(e));
                      } catch (e) {
                        n(e);
                      }
                    },
                    a = function (n) {
                      return n.done
                        ? e(n.value)
                        : Promise.resolve(n.value).then(r, t);
                    };
                  a((c = c.apply(i, null)).next());
                })
              );
              var i, c;
            })(i.options);
        }),
        {
          sendMessagePath: u,
          handleOpenChat: function () {},
          isTokefu: a,
          isShowDefaultPage: o,
          url: r,
          errUrl: t,
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog")
  )();
var t = n._export_sfc(r, [
  [
    "render",
    function (e, r, t, a, o, u) {
      return n.e(
        { a: e.rootFontSize, b: n.p({ "no-auto": !0 }), c: a.isTokefu },
        a.isTokefu
          ? {
              d: a.sendMessagePath,
              e: n.o(function () {
                return a.handleOpenChat && a.handleOpenChat.apply(a, arguments);
              }, 368),
            }
          : (a.isShowDefaultPage, {}),
        { f: a.isShowDefaultPage }
      );
    },
  ],
  ["__scopeId", "data-v-a2d4b581"],
]);
wx.createPage(t);
