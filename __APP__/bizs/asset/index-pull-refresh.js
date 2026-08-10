require("../../app.js");
var e = require("../../common/vendor.js"),
  r = {
    expose: ["stopPullDownRefresh"],
    components: {},
    props: { refresherStyle: { type: String, default: "black" } },
    setup: function (r, l) {
      var n = l.emit;
      e.ref(null);
      var t = e.ref(!1),
        u = e.inject("scrollHeight", function () {
          return e.ref(0);
        }),
        o = e.computed(function () {
          var e = u.value;
          return e && e > 0 ? "".concat(e, "px") : "100vh";
        });
      function c() {
        t.value = !1;
      }
      return {
        triggered: t,
        scrollHeight: o,
        startpull: function () {
          t.value = !0;
        },
        pullEnd: c,
        pullrefresh: function () {
          n("pullrefresh"),
            setTimeout(function () {
              c();
            }, 1e3);
        },
        handleScroll: function (e) {
          n("scroll", e);
        },
      };
    },
  },
  l = e._export_sfc(r, [
    [
      "render",
      function (r, l, n, t, u, o) {
        return {
          a: t.scrollHeight,
          b: n.refresherStyle,
          c: t.triggered,
          d: e.o(function () {
            return t.startpull && t.startpull.apply(t, arguments);
          }),
          e: e.o(function () {
            return t.pullEnd && t.pullEnd.apply(t, arguments);
          }),
          f: e.o(function () {
            return t.pullrefresh && t.pullrefresh.apply(t, arguments);
          }),
          g: e.o(function () {
            return t.handleScroll && t.handleScroll.apply(t, arguments);
          }),
        };
      },
    ],
  ]);
wx.createComponent(l);
