var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = {
    name: "ProfileSelectItem",
    options: { styleIsolation: "shared" },
    props: {
      selectKey: {
        type: String,
        default: function () {
          return "";
        },
      },
      formData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      formList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (r, u) {
      var l = u.emit,
        o = n.ref(""),
        i = n.inject("profileShowData", {}),
        c = n.ref({}),
        d = n.ref(""),
        v = n.ref(""),
        f = n.ref("确定"),
        s = n.ref(""),
        p = n.computed(function () {
          var e;
          return (
            (null == (e = null == i ? void 0 : i.value)
              ? void 0
              : e.find(function (e) {
                  return e.key === r.selectKey;
                })) || { data: {} }
          );
        }),
        h = n.computed(function () {
          return p.value.otherKey && d.value === p.value.data.otherId;
        });
      (d.value = (p.value.feIds && p.value.feIds[0]) || ""),
        p.value.data.otherId &&
          d.value === p.value.data.otherId &&
          ((v.value = r.formData[p.value.otherKey] || ""), (s.value = v.value));
      var m = n.computed(function () {
          return c.value.errInfo || p.value.data.errInfo || null;
        }),
        I = n.computed(function () {
          return (
            n.isEmpty(m.value) &&
            ((!n.isEmpty(d.value) && !h.value) ||
              (h.value && !n.isEmpty(v.value)))
          );
        }),
        y = n.computed(function () {
          return ""
            .concat(v.value.length, "/")
            .concat(p.value.data.maxLength || 20);
        }),
        b = n.computed(function () {
          return v.value.length < (p.value.data.maxLength || 20);
        }),
        x = n.computed(function () {
          return "function" == typeof p.value.data.placeholder
            ? p.value.data.placeholder(r.formData)
            : p.value.data.placeholder;
        });
      function g(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = a(
          t().mark(function u(o) {
            var i, f;
            return t().wrap(
              function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (
                        (d.value !== o &&
                          ((d.value = o),
                          (c.value =
                            p.value.data.val.find(function (e) {
                              return e.id === o;
                            }).show || {})),
                        I.value)
                      ) {
                        u.next = 2;
                        break;
                      }
                      return u.abrupt("return");
                    case 2:
                      return (
                        (i = { selectId: o, otherVal: v.value }),
                        (u.prev = 3),
                        (u.next = 6),
                        (function () {
                          var e = a(
                            t().mark(function e(a, n, r) {
                              var u, l;
                              return t().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        !h.value ||
                                        !(
                                          (p.value.data.minLength &&
                                            v.value.length <
                                              p.value.data.minLength) ||
                                          (p.value.data.maxLength &&
                                            v.value.length >
                                              p.value.data.maxLength)
                                        )
                                      ) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw "输入内容长度需为"
                                        .concat(
                                          p.value.data.minLength || 0,
                                          " - "
                                        )
                                        .concat(
                                          p.value.data.maxLength || "无上限"
                                        );
                                    case 2:
                                      if (
                                        ((e.t0 =
                                          null == (u = a.data)
                                            ? void 0
                                            : u.valid),
                                        !e.t0)
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (e.next = 6),
                                        null == (l = a.data)
                                          ? void 0
                                          : l.valid(n, r)
                                      );
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t, a, n) {
                            return e.apply(this, arguments);
                          };
                        })()(p.value, i, r.formData)
                      );
                    case 6:
                      u.next = 11;
                      break;
                    case 8:
                      return (
                        (u.prev = 8),
                        (u.t0 = u.catch(3)),
                        u.abrupt("return", void w(u.t0))
                      );
                    case 11:
                      if (
                        !(p.value.otherKey && h.value && n.isEmpty(s.value))
                      ) {
                        u.next = 13;
                        break;
                      }
                      return u.abrupt("return");
                    case 13:
                      if (!p.value.data.confirm) {
                        u.next = 22;
                        break;
                      }
                      return (
                        (u.prev = 14),
                        (u.next = 17),
                        p.value.data.confirm(i, r.formData, r.formList)
                      );
                    case 17:
                      u.next = 22;
                      break;
                    case 19:
                      return (
                        (u.prev = 19), (u.t1 = u.catch(14)), u.abrupt("return")
                      );
                    case 22:
                      (f = {}),
                        p.value.otherKey &&
                          (f = e({}, p.value.otherKey, h.value ? s.value : "")),
                        l(
                          "changeItem",
                          { id: o, index: r.selectKey, key: p.value.key },
                          f
                        );
                    case 24:
                    case "end":
                      return u.stop();
                  }
              },
              u,
              null,
              [
                [3, 8],
                [14, 19],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function w(e) {
        n.index.showToast({ title: e, icon: "none" });
      }
      function L() {
        if (p.value) {
          var e = (p.value.feIds && p.value.feIds[0]) || "";
          e && ((t = e), (o.value = "id".concat(t)));
        }
        var t;
      }
      return (
        n.watch(
          function () {
            return p.value;
          },
          function (e) {
            e &&
              n.nextTick$1(function () {
                L();
              });
          }
        ),
        n.watch(
          function () {
            return p.value;
          },
          function () {
            d.value = (p.value.feIds && p.value.feIds[0]) || "";
          },
          { immediate: !0 }
        ),
        n.watch(
          function () {
            return d.value;
          },
          function (e, t) {
            t === p.value.data.otherId && ((v.value = ""), (s.value = ""));
          }
        ),
        n.onMounted(function () {
          L();
        }),
        {
          scrollToId: o,
          onPicked: g,
          itemData: p,
          isOtherNow: h,
          selectId: d,
          otherVal: v,
          placeholder: x,
          onBlur: function () {},
          errInfo: m,
          confirmTxt: f,
          isSubmitable: I,
          isInputable: b,
          showToast: w,
          confirm: function () {
            h.value && I.value
              ? (p.value.data.trim && (v.value = p.value.data.trim(v.value)),
                (s.value = v.value),
                g(d.value))
              : w("请输入内容");
          },
          inputContentLength: y,
        }
      );
    },
  },
  u = n._export_sfc(r, [
    [
      "render",
      function (e, t, a, r, u, l) {
        return {
          a: n.f(r.itemData.data.val, function (e, t, a) {
            return n.e(
              {
                a: n.t(e.name),
                b: e.id === r.selectId ? 1 : "",
                c: n.o(function (t) {
                  return r.onPicked(e.id);
                }, e.id),
                d: n.n(e.id !== r.selectId ? "icon-check-box" : "icon-checked"),
                e: n.o(function (t) {
                  return r.onPicked(e.id);
                }, e.id),
                f: "id" + e.id,
                g: n.o(function () {
                  return r.onBlur && r.onBlur.apply(r, arguments);
                }, e.id),
                h: n.o(function (e) {
                  return (r.otherVal = e.detail.value);
                }, e.id),
                i: n.o(function () {
                  return r.confirm && r.confirm.apply(r, arguments);
                }, e.id),
                j: r.isOtherNow && e.id === r.itemData.data.otherId,
                k: r.selectId === e.id && r.errInfo,
              },
              r.selectId === e.id && r.errInfo ? { l: r.errInfo } : {},
              { m: e.id }
            );
          }),
          b: r.itemData.data.type || "text",
          c: r.itemData.data.maxLength || 20,
          d: r.placeholder || "请填写",
          e: r.otherVal,
          f: n.t(r.inputContentLength),
          g: r.isInputable ? "" : 1,
          h: n.t(r.confirmTxt),
          i: r.isSubmitable ? 1 : "",
          j: r.scrollToId,
        };
      },
    ],
  ]);
wx.createComponent(u);
