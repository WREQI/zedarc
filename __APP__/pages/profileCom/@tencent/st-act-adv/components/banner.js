var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, r) {
    return new Promise(function (t, a) {
      var i = function (e) {
          try {
            o(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            o(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(i, u);
        };
      o((r = r.apply(e, n)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  t = {
    name: "banner",
    setup: function (t, a) {
      var i = this,
        u = (a.emit, r.ref(null)),
        o = r.ref({});
      n(
        i,
        null,
        e().mark(function t() {
          var a, i, u, l, v, f, p, d, s, b, m;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      (function () {
                        return n(
                          this,
                          null,
                          e().mark(function n() {
                            var t, a, i, u, o, c, l, v, f;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.Wuji.get({
                                          appid: "act",
                                          schemaid: "yy_config",
                                          filter: encodeURIComponent(
                                            "yy_key = gongyi99_2025"
                                          ),
                                        })
                                      );
                                    case 3:
                                      if (
                                        ((a = e.sent),
                                        (i = a.code),
                                        (u = a.data),
                                        200 == +i && u && u.length)
                                      ) {
                                        e.next = 8;
                                        break;
                                      }
                                      return e.abrupt("return", {});
                                    case 8:
                                      if (
                                        (o =
                                          null == (t = u[0]) ? void 0 : t.jval)
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      return e.abrupt("return", {});
                                    case 11:
                                      if (
                                        (c = JSON.parse(o)).begintime &&
                                        c.endtime
                                      ) {
                                        e.next = 14;
                                        break;
                                      }
                                      return e.abrupt("return", {});
                                    case 14:
                                      return (
                                        (l = new Date()),
                                        (v = new Date(c.begintime)),
                                        (f = new Date(c.endtime)),
                                        e.abrupt(
                                          "return",
                                          l >= v && l <= f ? c : {}
                                        )
                                      );
                                    case 18:
                                      return (
                                        (e.prev = 18),
                                        (e.t0 = e.catch(0)),
                                        e.abrupt("return", {})
                                      );
                                    case 21:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              n,
                              null,
                              [[0, 18]]
                            );
                          })
                        );
                      })()
                    );
                  case 3:
                    (b = t.sent), (o.value = b || {}), (t.next = 10);
                    break;
                  case 7:
                    return (
                      (t.prev = 7), (t.t0 = t.catch(0)), t.abrupt("return")
                    );
                  case 10:
                    if (
                      ((m = null == (a = r.StockBridge) ? void 0 : a.SHELL),
                      null !=
                        (l =
                          null ==
                          (u = null == (i = o.value) ? void 0 : i.invalidflag)
                            ? void 0
                            : u[m]) &&
                        l &&
                        (null == (f = null == (v = o.value) ? void 0 : v.banner)
                          ? void 0
                          : f.switch))
                    ) {
                      t.next = 13;
                      break;
                    }
                    return t.abrupt("return");
                  case 13:
                    "mpweapp" !==
                      (null == (p = r.StockBridge) ? void 0 : p.SHELL) &&
                      (null == (s = null == (d = o.value) ? void 0 : d.banner)
                        ? void 0
                        : s.liteImg) &&
                      (o.value.banner.img = o.value.banner.liteImg),
                      c("yy.information_detail.bottombanner_brow");
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 7]]
          );
        })
      );
      var c = function (e, n) {
        r.StockBridge &&
          "function" == typeof r.StockBridge.report &&
          r.StockBridge.report(e, n);
      };
      return (
        r.onBeforeUnmount(function () {
          u.value && (clearTimeout(u.value), (u.value = null));
        }),
        {
          config: o,
          onPrimaryButtonClick: function () {
            var e, n, t, a;
            c("yy.information_detail.bottombanner_click");
            var i =
              null == (n = null == (e = o.value) ? void 0 : e.banner)
                ? void 0
                : n.link;
            if (i) {
              var u =
                (null == (a = null == (t = o.value) ? void 0 : t.banner)
                  ? void 0
                  : a.mplink) ||
                "/pages/act/webview/main?url=".concat(encodeURIComponent(i));
              r.wx$1.navigateTo({ url: u });
            }
          },
        }
      );
    },
  },
  a = r._export_sfc(t, [
    [
      "render",
      function (e, n, t, a, i, u) {
        return r.e(
          { a: a.config.banner && a.config.banner.img },
          a.config.banner && a.config.banner.img
            ? {
                b: a.config.banner.img,
                c: r.o(function () {
                  return (
                    a.onPrimaryButtonClick &&
                    a.onPrimaryButtonClick.apply(a, arguments)
                  );
                }, 2131),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-22d1c97b"],
  ]);
wx.createComponent(a);
