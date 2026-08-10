var e = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../../common/vendor.js"),
  t = {
    props: {
      value: {
        type: Array,
        default: function () {
          return ["0"];
        },
      },
      placeholder: { type: String, default: "0" },
      isFocusedFromParent: { type: Boolean, default: !1 },
    },
    setup: function (t, u) {
      var r = u.emit,
        o = n.ref(0),
        a = n.computed(function () {
          return t.isFocusedFromParent;
        }),
        l = n.computed(function () {
          return t.value && 0 !== t.value.length ? t.value : [t.placeholder];
        });
      return (
        n.watch(
          function () {
            return t.value;
          },
          function (e) {},
          { deep: !0 }
        ),
        {
          cursorPosition: o,
          isFocused: a,
          displayArray: l,
          handleContainerClick: function (e) {
            r("focus"), (o.value = l.value.length);
          },
          handleCharClick: function (e, n) {
            return (
              n &&
                (n.stopPropagation && n.stopPropagation(),
                n.preventDefault && n.preventDefault(),
                n.detail &&
                  n.detail.stopPropagation &&
                  n.detail.stopPropagation()),
              r("focus"),
              (o.value = e + 1),
              !1
            );
          },
          blur: function () {
            r("blur");
          },
          focus: function () {
            (o.value = l.value.length), r("focus");
          },
          setCursorPosition: function (e) {
            o.value = Math.max(0, Math.min(e, l.value.length));
          },
          insertAtCursor: function (u) {
            var a = e(t.value);
            1 === a.length &&
              a[0] === t.placeholder &&
              (a.splice(0, 1), (o.value = 0)),
              a.splice(o.value, 0, u);
            var l = o.value + 1;
            r("input", a),
              n.nextTick$1(function () {
                o.value = l;
              });
          },
          deleteAtCursor: function () {
            if (0 !== o.value) {
              var n = e(t.value);
              n.splice(o.value - 1, 1),
                o.value--,
                0 === n.length && (n.push(t.placeholder), (o.value = 1)),
                r("input", n);
            }
          },
          clear: function () {
            r("input", [t.placeholder]), (o.value = 1);
          },
          moveCursorLeft: function () {
            o.value = Math.max(0, o.value - 1);
          },
          moveCursorRight: function () {
            o.value = Math.min(l.value.length, o.value + 1);
          },
          getCursorPosition: function () {
            return o.value;
          },
        }
      );
    },
  },
  u = n._export_sfc(t, [
    [
      "render",
      function (e, t, u, r, o, a) {
        return n.e(
          {
            a: n.f(r.displayArray, function (e, t, u) {
              return {
                a: n.t(e),
                b: t,
                c: r.cursorPosition === t && r.isFocused ? 1 : "",
                d: r.cursorPosition === t + 1 && r.isFocused ? 1 : "",
                e: n.o(
                  function (e) {
                    return r.handleCharClick(t, e);
                  },
                  5484,
                  t
                ),
                f: t,
              };
            }),
            b:
              0 === r.displayArray.length ||
              (0 === r.cursorPosition && r.isFocused),
          },
          (0 === r.displayArray.length ||
            (0 === r.cursorPosition && r.isFocused),
          {}),
          {
            c: r.isFocused ? 1 : "",
            d: n.o(function () {
              return (
                r.handleContainerClick &&
                r.handleContainerClick.apply(r, arguments)
              );
            }, 5485),
          }
        );
      },
    ],
    ["__scopeId", "data-v-19271abe"],
  ]);
wx.createComponent(u);
