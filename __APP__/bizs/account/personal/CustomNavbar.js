require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../../../utils/system.js"),
  n = {
    name: "CustomNavbar",
    props: { showBack: { type: Boolean, default: !0 } },
    emits: ["back", "height-ready"],
    setup: function (n, a) {
      var r,
        o = a.emit,
        c = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        u = e.ref(
          (null == (r = t.getWindowInfoCompact())
            ? void 0
            : r.statusBarHeight) || 0
        );
      return (
        e.onMounted(function () {
          var n;
          try {
            (u.value =
              (null == (n = t.getWindowInfoCompact())
                ? void 0
                : n.statusBarHeight) || 54),
              e.index
                .createSelectorQuery()
                .in(c)
                .select(".navbar-content")
                .boundingClientRect()
                .exec(function (e) {
                  var t = null == e ? void 0 : e[0];
                  (null == t ? void 0 : t.height) &&
                    o("height-ready", { height: +t.height + Number(u.value) });
                });
          } catch (e) {}
        }),
        {
          statusBarHeight: u,
          handleBack: function () {
            o("back");
          },
        }
      );
    },
  },
  a = e._export_sfc(n, [
    [
      "render",
      function (t, n, a, r, o, c) {
        return e.e(
          { a: a.showBack },
          a.showBack
            ? {
                b: e.o(function () {
                  return r.handleBack && r.handleBack.apply(r, arguments);
                }),
              }
            : {},
          { c: r.statusBarHeight + "px" }
        );
      },
    ],
    ["__scopeId", "data-v-9ce1f510"],
  ]);
wx.createComponent(a);
