var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    props: { theme: { type: String, default: "blue" } },
    setup: function (t) {
      var n = e.inject("stockBridge", {});
      e.getCurrentInstance().proxy || e.getCurrentInstance();
      var o = e.ref([]),
        r = e.ref(""),
        c = e.ref(null),
        u = e.ref(!1),
        a = "community-feedback-show-drowdown",
        l = function (e) {
          var t = e.items,
            n = e.current,
            a = e.rect;
          (r.value = n), (o.value = t), (c.value = a), (u.value = !0);
        };
      return (
        e.onBeforeMount(function () {
          n.busOn(a, l);
        }),
        e.onBeforeUnmount(function () {
          n.busOff(a, l);
        }),
        {
          open: u,
          onOutsideClick: function () {
            u.value = !1;
          },
          items: o,
          selected: r,
          toggleDrowDown: function () {
            u.value = !u.value;
          },
          targetBtnRect: c,
          onItemClick: function (e) {
            n.busEmit("community-feedback-item-click", e), (u.value = !1);
          },
          colorClass: "zxg-color",
        }
      );
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, c, u) {
        return e.e(
          { a: t.targetBtnRect },
          t.targetBtnRect
            ? {
                b: e.f(t.items, function (n, o, r) {
                  return e.e(
                    {
                      a: e.t(n.label),
                      b: t.selected === n.value ? 1 : "",
                      c: t.selected === n.value ? 1 : "",
                      d: e.o(
                        function (e) {
                          return t.onItemClick(n);
                        },
                        3095,
                        n.value
                      ),
                      e: o < t.items.length - 1,
                    },
                    (t.items.length, {}),
                    { f: n.value }
                  );
                }),
                c: t.colorClass,
                d: "".concat(
                  t.targetBtnRect.top + t.targetBtnRect.height,
                  "px"
                ),
                e: t.targetBtnRect.left - 12 + "px",
              }
            : {},
          {
            f: t.open,
            g: e.n("drop-down-".concat(t.theme)),
            h: e.o(function () {
              return t.toggleDrowDown && t.toggleDrowDown.apply(t, arguments);
            }, 3096),
            i: e.o(function () {}, 3097),
          }
        );
      },
    ],
    ["__scopeId", "data-v-232eba78"],
  ]);
wx.createComponent(n);
