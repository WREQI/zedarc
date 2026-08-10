var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  u = function (t, r) {
    for (var n in r || (r = {})) a.call(r, n) && i(t, n, r[n]);
    if (o) {
      var u,
        p = e(o(r));
      try {
        for (p.s(); !(u = p.n()).done; ) {
          n = u.value;
          c.call(r, n) && i(t, n, r[n]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return t;
  },
  p = require("../../../../../../common/vendor.js"),
  f = {
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      timeStr: { type: String, default: "" },
    },
    setup: function (e) {
      var t = p.inject("stockBridge"),
        o = p.inject("shareEventName"),
        a = p.computed(function () {
          return e.itemData.source;
        }),
        c = p.computed(function () {
          return e.timeStr;
        });
      return {
        onClickShare: function () {
          var a, c;
          t.report(
            "".concat(e.reportPrefix, ".item_sharebtn_click"),
            u({}, e.reportParams)
          ),
            t.busEmit(o, {
              item:
                ((a = u({}, e.itemData || {})),
                (c = { focus_img: "" }),
                r(a, n(c))),
            });
        },
        source: a,
        date: c,
      };
    },
  },
  l = p._export_sfc(f, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return {
          a: p.t(n.source),
          b: p.t(n.date),
          c: p.o(function () {
            return n.onClickShare && n.onClickShare.apply(n, arguments);
          }, 4720),
        };
      },
    ],
    ["__scopeId", "data-v-07a107b5"],
  ]);
wx.createComponent(l);
