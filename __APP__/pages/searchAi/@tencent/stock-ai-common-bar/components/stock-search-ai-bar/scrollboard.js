var e = require("../../../../../../common/vendor.js"),
  t = function (e, t) {
    return t ? e % t : 0;
  },
  u = {
    name: "ScrollBoard",
    props: {
      items: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (u, a) {
      var n = a.emit,
        l = e.ref(0),
        o = e.ref(!1),
        i = e.ref(null),
        r = e.ref(null),
        c = e.ref(!1),
        v = e.ref(0);
      e.watch(
        function () {
          return u.items;
        },
        function (e) {
          var t;
          clearTimeout(i.value),
            clearTimeout(r.value),
            (v.value = null != (t = e.length) ? t : 0),
            (l.value = 0);
        },
        { immediate: !0 }
      ),
        e.watch(
          function () {
            return l.value;
          },
          function (e) {
            n("questionChange", e);
          },
          { immediate: !0 }
        );
      var m = function e() {
        0 !== v.value &&
          1 !== v.value &&
          c.value &&
          ((o.value = !0),
          i.value && clearTimeout(i.value),
          (i.value = setTimeout(function () {
            (o.value = !1),
              v.value ? (l.value = t(l.value + 1, v.value)) : (l.value = 0),
              r.value && clearTimeout(r.value),
              (r.value = setTimeout(e, 4e3));
          }, 400)));
      };
      return (
        e.onMounted(function () {
          (c.value = !0),
            r.value && clearTimeout(r.value),
            (r.value = setTimeout(m, 4e3));
        }),
        e.onUnmounted(function () {
          (c.value = !1), clearTimeout(i.value), clearTimeout(r.value);
        }),
        {
          getItemStyle: function (e) {
            if (v.value <= 1) return { top: "0", opacity: "1" };
            var u = e === l.value,
              a = t(l.value + 1, v.value) === e;
            if (!u && !a)
              return { top: "100%", opacity: "0", transition: "none" };
            var n = o.value
              ? "top 400ms ease, opacity 300ms ease 100ms"
              : "none";
            return u
              ? {
                  top: o.value ? "-100%" : "0",
                  opacity: o.value ? "0" : "1",
                  transition: n,
                }
              : a
              ? {
                  top: o.value ? "0" : "100%",
                  opacity: o.value ? "1" : "0",
                  transition: n,
                }
              : void 0;
          },
          handleClick: function (e) {
            n("handleClick", e);
          },
        }
      );
    },
  },
  a = e._export_sfc(u, [
    [
      "render",
      function (t, u, a, n, l, o) {
        return e.e(
          { a: a.items && a.items.length > 0 },
          a.items && a.items.length > 0
            ? {
                b: e.f(a.items, function (t, u, a) {
                  return {
                    a: e.t(t.title),
                    b: "scroll-question-".concat(u),
                    c: e.s(n.getItemStyle(u)),
                    d: e.o(
                      function (e) {
                        return n.handleClick(u);
                      },
                      4435,
                      "scroll-question-".concat(u)
                    ),
                  };
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-86a44a02"],
  ]);
wx.createComponent(a);
