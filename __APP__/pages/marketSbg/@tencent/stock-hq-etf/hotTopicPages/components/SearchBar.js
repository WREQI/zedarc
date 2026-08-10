var n = require("../../../../../../common/vendor.js"),
  e = n.defineComponent({
    name: "SearchBar",
    props: {
      value: { type: String, default: "" },
      isFake: { type: Boolean, default: !1 },
    },
    emits: ["input", "cancel", "click"],
    setup: function (e, a) {
      var u = a.emit,
        t = n.ref(e.value),
        o = n.ref(null);
      n.watch(
        function () {
          return e.value;
        },
        function (n) {
          t.value = n;
        }
      ),
        n.onMounted(function () {
          !e.isFake && o.value && o.value.focus();
        });
      var r = n.computed(function () {
        return !!t.value;
      });
      return {
        innerValue: t,
        inputRef: o,
        hasValue: r,
        onInput: function (n) {
          var e = (n.target && n.target.value) || "";
          (t.value = e), u("input", e);
        },
        onClear: function () {
          (t.value = ""), u("input", "");
        },
        onCancel: function () {
          (t.value = ""), u("input", ""), u("cancel");
        },
        onWrapClick: function () {
          e.isFake && u("click");
        },
      };
    },
  }),
  a = n._export_sfc(e, [
    [
      "render",
      function (e, a, u, t, o, r) {
        return n.e(
          { a: e.isFake },
          e.isFake
            ? {}
            : {
                b: e.innerValue,
                c: n.o(function () {
                  return e.onInput && e.onInput.apply(e, arguments);
                }, 2694),
              },
          { d: !e.isFake && e.hasValue },
          !e.isFake && e.hasValue
            ? {
                e: n.o(function () {
                  return e.onClear && e.onClear.apply(e, arguments);
                }, 2695),
              }
            : {},
          {
            f: n.o(function () {
              return e.onWrapClick && e.onWrapClick.apply(e, arguments);
            }, 2696),
            g: !e.isFake,
          },
          e.isFake
            ? {}
            : {
                h: n.o(function () {
                  return e.onCancel && e.onCancel.apply(e, arguments);
                }, 2697),
              },
          { i: n.n({ "ds-search-bar--fake": e.isFake }) }
        );
      },
    ],
    ["__scopeId", "data-v-7659c7b3"],
  ]);
wx.createComponent(a);
