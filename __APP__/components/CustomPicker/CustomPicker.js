var e = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../app.js");
var t = require("../../common/vendor.js"),
  a = require("../../utils/getPlatform.js"),
  r = {
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
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
      disabled: { type: Boolean, default: !1 },
      hideCloseIcon: { type: Boolean, default: !0 },
      hideCancelBtn: { type: Boolean, default: !1 },
      data: {
        required: !0,
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (r) {
      var l = t.getCurrentInstance().proxy,
        o = a.getPlatform().isMiniProgram,
        u = t.ref([]),
        i = null,
        c = t.computed(function () {
          var e = [];
          return (
            (function e(n) {
              var t,
                a = n.data,
                r = n.ranges,
                l = n.col;
              r.push(
                a.map(function (e) {
                  return e.value;
                })
              );
              var o = (null == (t = a[u.value[l]]) ? void 0 : t.children) || [];
              o && o.length && e({ data: o, ranges: r, col: l + 1 });
            })({ data: r.data, ranges: e, col: 0 }),
            e
          );
        });
      function d(e) {
        for (var n = e, t = []; n && n[0]; ) (n = n[0].children), t.push(0);
        return t;
      }
      function f(e) {
        for (
          var t,
            a = [],
            l = r.data,
            o = function () {
              var r = e[i],
                o = l.findIndex(function (e) {
                  return e.value === r;
                });
              if (
                ((a = [].concat(n(a), [o > -1 ? o : 0])),
                (l = null == (t = l[o]) ? void 0 : t.children),
                !(o > -1 && l && l.length))
              )
                return 1;
            },
            i = 0;
          e.length && i < e.length && !o();
          i++
        );
        var c = d(l);
        return (u.value = [].concat(n(a), n(c))), u.value;
      }
      function s(e) {
        i && clearTimeout(i),
          o
            ? (i = setTimeout(function () {
                f(e);
              }, 100))
            : f(e);
      }
      return (
        t.watch(
          function () {
            return r.selectedVal;
          },
          function (e) {
            s(e),
              setTimeout(function () {
                l.$forceUpdate();
              }, 300);
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return r.value;
          },
          function (e) {
            e && s(r.selectedVal);
          }
        ),
        {
          indicatorStyle: "height: 44px;",
          selectedIndex: u,
          handleCancel: function () {
            l.$emit("close");
          },
          selectRange: c,
          handleConfirm: function () {
            for (
              var n,
                t = r.data,
                a = Array(u.value.length).fill(void 0),
                o = [],
                i = 0;
              i < u.value.length;
              i++
            ) {
              var c = u.value[i];
              if (
                ((a[i] = e({}, t[c] || {})),
                o.push(a[i].value),
                !(t = null == (n = a[i]) ? void 0 : n.children))
              )
                break;
            }
            l.$emit("confirm", { selectedVal: o, data: a });
          },
          handleChange: function (e) {
            for (
              var t, a = r.data, l = e.detail.value, o = [], i = 0;
              i < l.length;
              i++
            ) {
              if (
                ((a = null == (t = a[l[i]]) ? void 0 : t.children),
                l[i] !== u.value[i])
              ) {
                o[i] = void 0 !== l[i] ? l[i] : 0;
                break;
              }
              o.push(u.value[i]);
            }
            var c = d(a);
            u.value = [].concat(o, n(c));
          },
          noop: function () {},
        }
      );
    },
  };
Array || t.resolveComponent("action-sheet")();
var l = t._export_sfc(r, [
  [
    "render",
    function (e, n, a, r, l, o) {
      return t.e(
        { a: a.value },
        a.value
          ? t.e(
              {
                b: t.f(r.selectRange, function (e, n, a) {
                  return {
                    a: t.f(e, function (e, a, l) {
                      return {
                        a: t.t(e),
                        b: a,
                        c: t.n(a !== r.selectedIndex[n] ? "unselected" : ""),
                      };
                    }),
                    b: n,
                  };
                }),
                c: r.indicatorStyle,
                d: r.selectedIndex,
                e: t.o(function () {
                  return r.handleChange && r.handleChange.apply(r, arguments);
                }),
                f: a.disabled,
              },
              (a.disabled, {}),
              {
                g: t.o(function () {
                  return r.noop && r.noop.apply(r, arguments);
                }),
                h: !a.hideCancelBtn,
              },
              a.hideCancelBtn
                ? {}
                : {
                    i: t.t(a.cancelText),
                    j: t.o(function () {
                      return (
                        r.handleCancel && r.handleCancel.apply(r, arguments)
                      );
                    }),
                  },
              {
                k: t.t(a.confirmText),
                l: t.o(function () {
                  return r.handleConfirm && r.handleConfirm.apply(r, arguments);
                }),
                m: a.disabled ? 1 : "",
                n: t.o(r.handleCancel),
                o: t.o(r.handleCancel),
                p: t.p({
                  value: !0,
                  title: a.title,
                  "show-title-border-bottom": !1,
                  "confirm-button": !1,
                  "hide-close-icon": a.hideCloseIcon,
                  "picker-style": !0,
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2f56042f"],
]);
wx.createComponent(l);
