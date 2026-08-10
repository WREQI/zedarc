var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  c = function (t, n) {
    for (var r in n || (n = {})) l.call(n, r) && u(t, r, n[r]);
    if (a) {
      var c,
        i = e(a(n));
      try {
        for (i.s(); !(c = i.n()).done; ) {
          r = c.value;
          o.call(n, r) && u(t, r, n[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return t;
  },
  i = function (e, t) {
    return n(e, r(t));
  },
  s = require("../../../../../../common/vendor.js"),
  m = {
    4: "key-txt-min-len-120",
    5: "key-txt-min-len-150",
    6: "key-txt-min-len-180",
  },
  f = {
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e) {
      return {
        stockBridge: s.inject("stockBridge"),
        msgItem: s.computed(function () {
          return (function () {
            var t,
              n,
              r = (null == e ? void 0 : e.itemData) || {},
              a = [
                { name: "公告名称", value: "系统通知" },
                { name: "公告内容", value: r.content },
              ];
            try {
              if (
                null == (t = null == e ? void 0 : e.itemData)
                  ? void 0
                  : t.show_content
              ) {
                var l = (a =
                  JSON.parse(
                    null == (n = null == e ? void 0 : e.itemData)
                      ? void 0
                      : n.show_content
                  ) || []).reduce(function (e, t) {
                  return t.name.length > e ? t.name.length : e;
                }, 4);
                (r.ketTxtMinStyle = m[l] || "key-txt-min-len-120"),
                  null == a ||
                    a.forEach(function (e) {
                      var t;
                      (r.titleFront = e.title),
                        e.value instanceof Array &&
                          ((e.valueIsArray = !0),
                          null == (t = e.value) ||
                            t.forEach(function (e) {
                              e.valueMult = e.name
                                ? "".concat(e.name, "：").concat(e.value)
                                : "".concat(e.value);
                            }));
                    });
              } else r.titleFront = "社区公告通知";
              return i(c({}, r), { showContents: a });
            } catch (e) {
              return i(c({}, r), { showContents: a });
            }
          })();
        }),
        dealRechText: function (e) {
          return null == e
            ? void 0
            : e.replace(/\\n/g, "<br>").replace(/\n/g, "<br>");
        },
      };
    },
  },
  v = s._export_sfc(f, [
    [
      "render",
      function (e, t, n, r, a, l) {
        return s.e(
          { a: s.t(r.msgItem.titleFront), b: r.msgItem.showTime },
          r.msgItem.showTime ? { c: s.t(r.msgItem.time) } : {},
          {
            d: s.f(r.msgItem.showContents, function (e, t, n) {
              return s.e(
                { a: s.t(e.name) },
                "mp" === r.stockBridge.ENV
                  ? s.e(
                      { b: !e.valueIsArray },
                      e.valueIsArray
                        ? {
                            d: s.f(e.value, function (e, t, n) {
                              return { a: t, b: r.dealRechText(e.valueMult) };
                            }),
                          }
                        : { c: r.dealRechText(e.value) }
                    )
                  : s.e(
                      { e: !e.valueIsArray },
                      e.valueIsArray
                        ? {
                            g: s.f(e.value, function (e, t, n) {
                              return { a: r.dealRechText(e.valueMult), b: t };
                            }),
                          }
                        : { f: r.dealRechText(e.value) }
                    ),
                { h: t }
              );
            }),
            e: s.n(r.msgItem.ketTxtMinStyle),
            f: "mp" === r.stockBridge.ENV,
          }
        );
      },
    ],
    ["__scopeId", "data-v-3f018f21"],
  ]);
wx.createComponent(v);
