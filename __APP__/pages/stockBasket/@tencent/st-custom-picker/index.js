var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  o = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  u = function (e, t) {
    for (var u in t || (t = {})) a.call(t, u) && o(e, u, t[u]);
    if (r) {
      var c,
        i = n(r(t));
      try {
        for (i.s(); !(c = i.n()).done; ) {
          u = c.value;
          l.call(t, u) && o(e, u, t[u]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  c = require("../../../../common/vendor.js"),
  i = {
    components: {
      ActionSheet: function () {
        return "./components/ActionSheet/index.js";
      },
    },
    props: {
      title: { type: String, default: "" },
      value: { type: Boolean, default: !1 },
      selectedVal: {
        required: !0,
        type: Array,
        default: function () {
          return [];
        },
      },
      cancelText: { type: String, default: "取消" },
      confirmText: { type: String, default: "确认" },
      data: {
        required: !0,
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (n) {
      var t = c.getCurrentInstance().proxy,
        r = c.ref([]),
        a = null,
        l = c.computed(function () {
          var e = [];
          return (
            (function e(n) {
              var t,
                a = n.data,
                l = n.ranges,
                o = n.col;
              l.push(
                a.map(function (e) {
                  return e.value;
                })
              );
              var u = (null == (t = a[r.value[o]]) ? void 0 : t.children) || [];
              u && u.length && e({ data: u, ranges: l, col: o + 1 });
            })({ data: n.data, ranges: e, col: 0 }),
            e
          );
        });
      function o(e) {
        for (var n = e, t = []; n && n[0]; ) (n = n[0].children), t.push(0);
        return t;
      }
      function i(t) {
        for (
          var a,
            l = [],
            u = n.data,
            c = function () {
              var n = t[i],
                r = u.findIndex(function (e) {
                  return e.value === n;
                });
              if (
                ((l = [].concat(e(l), [r > -1 ? r : 0])),
                (u = null == (a = u[r]) ? void 0 : a.children),
                !(r > -1 && u && u.length))
              )
                return 1;
            },
            i = 0;
          t.length && i < t.length && !c();
          i++
        );
        var d = o(u);
        return (r.value = [].concat(e(l), e(d))), r.value;
      }
      function d(e) {
        a && clearTimeout(a),
          c.StockBridge.ENV === c.EnvTypeEnum.MP
            ? (a = setTimeout(function () {
                i(e);
              }, 100))
            : i(e);
      }
      return (
        c.watch(
          function () {
            return n.selectedVal;
          },
          function (e) {
            d(e);
          },
          { immediate: !0 }
        ),
        c.watch(
          function () {
            return n.value;
          },
          function (e) {
            e && d(n.selectedVal);
          }
        ),
        {
          indicatorStyle:
            c.StockBridge.ENV === c.EnvTypeEnum.MP
              ? "height: 44px;"
              : "height: 88rpx;",
          selectedIndex: r,
          handleCancel: function () {
            t.$emit("close");
          },
          selectRange: l,
          handleConfirm: function () {
            for (
              var e,
                a = n.data,
                l = Array(r.value.length).fill(void 0),
                o = [],
                c = 0;
              c < r.value.length;
              c++
            ) {
              var i = r.value[c];
              if (
                ((l[c] = u({}, a[i] || {})),
                o.push(l[c].value),
                !(a = null == (e = l[c]) ? void 0 : e.children))
              )
                break;
            }
            t.$emit("confirm", { selectedVal: o, data: l });
          },
          handleChange: function (t) {
            for (
              var a, l = n.data, u = t.detail.value, c = [], i = 0;
              i < u.length;
              i++
            ) {
              if (
                ((l = null == (a = l[u[i]]) ? void 0 : a.children),
                u[i] !== r.value[i])
              ) {
                c[i] = void 0 !== u[i] ? u[i] : 0;
                break;
              }
              c.push(r.value[i]);
            }
            var d = o(l);
            r.value = [].concat(c, e(d));
          },
        }
      );
    },
  };
Array || c.resolveComponent("action-sheet")();
var d = c._export_sfc(i, [
  [
    "render",
    function (e, n, t, r, a, l) {
      return c.e(
        { a: t.value },
        t.value
          ? {
              b: c.f(r.selectRange, function (e, n, t) {
                return {
                  a: c.f(e, function (e, t, a) {
                    return {
                      a: c.t(e),
                      b: t,
                      c: c.n(t !== r.selectedIndex[n] ? "unselected" : ""),
                    };
                  }),
                  b: n,
                };
              }),
              c: r.indicatorStyle,
              d: r.selectedIndex,
              e: c.o(function () {
                return r.handleChange && r.handleChange.apply(r, arguments);
              }, 2400),
              f: c.t(t.cancelText),
              g: c.o(function () {
                return r.handleCancel && r.handleCancel.apply(r, arguments);
              }, 2401),
              h: c.t(t.confirmText),
              i: c.o(function () {
                return r.handleConfirm && r.handleConfirm.apply(r, arguments);
              }, 2402),
              j: c.o(r.handleCancel, 2403),
              k: c.p({
                value: !0,
                title: t.title,
                "show-title-border-bottom": !1,
                "confirm-button": !1,
                "hide-close-icon": !0,
                "picker-style": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-abd1ba32"],
]);
wx.createComponent(d);
