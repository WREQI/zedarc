var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../../../../@babel/runtime/helpers/slicedToArray"),
  l = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (e, n, l) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[n] = l);
  },
  a = function (e, n) {
    for (var r in n || (n = {})) t.call(n, r) && u(e, r, n[r]);
    if (o) {
      var a,
        c = l(o(n));
      try {
        for (c.s(); !(a = c.n()).done; ) {
          r = a.value;
          i.call(n, r) && u(e, r, n[r]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  c = require("../../../../../../../../common/vendor.js"),
  v = require("../../../../Index.js");
function d(e) {
  var l = {};
  if (!e) return l;
  var r = "",
    o = "",
    t = e.split("#"),
    i = n(t, 2),
    u = i[0],
    a = i[1];
  return (
    u.includes("?") && (r = u.split("?")[1]),
    a && a.includes("?") && (o = a.split("?")[1]),
    [r, o]
      .filter(Boolean)
      .join("&")
      .split("&")
      .forEach(function (e) {
        var r = e.split("="),
          o = n(r, 2),
          t = o[0],
          i = o[1];
        if (t)
          try {
            var u = decodeURIComponent(t),
              a = i ? decodeURIComponent(i) : "";
            l[u] = a;
          } catch (e) {
            l[t] = i || "";
          }
      }),
    l
  );
}
var p = {
    name: "GongyiPopup",
    props: {
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (n, l) {
      var r = this,
        o = (l.emit, c.ref(!1)),
        t = c.ref(null),
        i = c.ref({}),
        u = c.ref(""),
        p = c.ref(""),
        f = c.ref({}),
        m = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          c.StockBridge &&
            "function" == typeof c.StockBridge.report &&
            c.StockBridge.report(e, n);
        };
      return (
        c.onMounted(function () {
          !(function () {
            return (
              (l = r),
              null,
              (t = e().mark(function () {
                var l,
                  r,
                  t,
                  s,
                  g,
                  b,
                  y,
                  k,
                  h,
                  w,
                  C,
                  _,
                  P,
                  x,
                  B,
                  I,
                  S,
                  T,
                  j,
                  E,
                  O,
                  q,
                  L;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((null == (l = c.StockBridge) ? void 0 : l.ENV) ===
                            c.EnvTypeEnum.MP
                              ? (i.value = n.params || {})
                              : ((j = d(location.search || "")),
                                (E = d(location.hash || "")),
                                (i.value = a(a({}, j), E))),
                            Number(null == (r = i.value) ? void 0 : r.gongyi) >
                              0)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (e.prev = 3), (e.next = 6), v.getWujiConfig();
                        case 6:
                          (O = e.sent), (f.value = O || {}), (e.next = 13);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            e.abrupt("return")
                          );
                        case 13:
                          if (
                            ((q =
                              null !=
                              (b =
                                null ==
                                (g =
                                  null == (t = f.value)
                                    ? void 0
                                    : t.invalidflag)
                                  ? void 0
                                  : g[
                                      null == (s = c.StockBridge)
                                        ? void 0
                                        : s.SHELL
                                    ])
                                ? b
                                : 0),
                            Number(q) > 0 &&
                              (null ==
                              (k = null == (y = f.value) ? void 0 : y.modal)
                                ? void 0
                                : k.switch))
                          ) {
                            e.next = 16;
                            break;
                          }
                          return e.abrupt("return");
                        case 16:
                          (L =
                            "mpweapp" !==
                            (null == (h = c.StockBridge) ? void 0 : h.SHELL)),
                            (u.value =
                              null ==
                              (C = null == (w = f.value) ? void 0 : w.modal)
                                ? void 0
                                : C.title),
                            (p.value =
                              null ==
                              (P = null == (_ = f.value) ? void 0 : _.modal)
                                ? void 0
                                : P.img),
                            L &&
                              (null ==
                              (B = null == (x = f.value) ? void 0 : x.modal)
                                ? void 0
                                : B.liteTitle) &&
                              (u.value = f.value.modal.liteTitle),
                            "stock" !==
                              (null == (I = c.StockBridge)
                                ? void 0
                                : I.SHELL) &&
                              (null ==
                              (T = null == (S = f.value) ? void 0 : S.modal)
                                ? void 0
                                : T.liteImg) &&
                              (p.value = f.value.modal.liteImg),
                            (o.value = !0),
                            m("yy.new_profile.guide_modal_brow");
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 10]]
                );
              })),
              new Promise(function (e, n) {
                var r = function (e) {
                    try {
                      i(t.next(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  o = function (e) {
                    try {
                      i(t.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  i = function (n) {
                    return n.done
                      ? e(n.value)
                      : Promise.resolve(n.value).then(r, o);
                  };
                i((t = t.apply(l, null)).next());
              })
            );
            var l, t;
          })();
        }),
        c.onBeforeUnmount(function () {
          t.value && (clearTimeout(t.value), (t.value = null));
        }),
        {
          config: f,
          modalTitle: u,
          modalImg: p,
          isPopupVisible: o,
          onCloseClick: function () {
            (o.value = !1),
              m("yy.new_profile.guide_modal_close_click"),
              clearTimeout(t.value);
          },
          onPrimaryButtonClick: function () {
            var e, n, l, r;
            m("yy.new_profile.guide_modal_click");
            var o =
              null == (n = null == (e = f.value) ? void 0 : e.modal)
                ? void 0
                : n.link;
            if (o) {
              var t =
                (null == (r = null == (l = f.value) ? void 0 : l.modal)
                  ? void 0
                  : r.mplink) ||
                "/pages/act/webview/main?url=".concat(encodeURIComponent(o));
              c.wx$1.navigateTo({ url: t });
            }
          },
        }
      );
    },
  },
  f = c._export_sfc(p, [
    [
      "render",
      function (e, n, l, r, o, t) {
        return c.e(
          { a: r.isPopupVisible },
          r.isPopupVisible
            ? c.e(
                {
                  b: c.t(r.modalTitle),
                  c: c.t(r.config.modal.tip),
                  d: c.t(r.config.modal.flowerTip),
                  e: r.config.modal.img,
                },
                r.config.modal.img ? { f: r.modalImg } : {},
                {
                  g: c.t(r.config.modal.btnText),
                  h: c.o(function () {
                    return (
                      r.onPrimaryButtonClick &&
                      r.onPrimaryButtonClick.apply(r, arguments)
                    );
                  }, 2375),
                  i: c.o(function () {
                    return r.onCloseClick && r.onCloseClick.apply(r, arguments);
                  }, 2376),
                  j: c.o(function () {}, 2377),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ff0d7188"],
  ]);
wx.createComponent(f);
