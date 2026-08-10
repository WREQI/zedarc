require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../service/mpIntercept.js"),
  l = {
    props: {
      lowerThreshold: { type: String, default: "150" },
      scrollClass: { type: String, default: "" },
      scrollTop: { type: Number, required: !1, default: void 0 },
      upperThreshold: { type: Number, default: 0 },
    },
    setup: function (l, o) {
      var n = o.emit,
        t = e.ref(!1),
        a = "dark" === r.getTheme() ? "white" : "black";
      return {
        handleScrollToUpper: function () {
          n("topChange", !0);
        },
        handleScroll: function (e) {
          0 === e.detail.scrollTop
            ? n("topChange", !0)
            : e.detail.deltaY < 0 && n("topChange", !1),
            n("scroll", e);
        },
        handleAbort: function () {
          t.value = !1;
        },
        handleRestore: function () {
          t.value = !1;
        },
        resetRefresh: function () {
          t.value = !1;
        },
        handleRefresh: function () {
          (t.value = !0), n("refresh");
        },
        emit: n,
        triggered: t,
        refresherTheme: a,
      };
    },
  },
  o = e._export_sfc(l, [
    [
      "render",
      function (r, l, o, n, t, a) {
        return {
          a: e.n(o.scrollClass),
          b: o.upperThreshold,
          c: o.lowerThreshold,
          d: o.scrollTop,
          e: n.refresherTheme,
          f: n.triggered,
          g: e.o(function () {
            return n.handleRefresh && n.handleRefresh.apply(n, arguments);
          }),
          h: e.o(function () {
            return n.handleRestore && n.handleRestore.apply(n, arguments);
          }),
          i: e.o(function () {
            return n.handleAbort && n.handleAbort.apply(n, arguments);
          }),
          j: e.o(function () {
            return (
              n.handleScrollToUpper && n.handleScrollToUpper.apply(n, arguments)
            );
          }),
          k: e.o(function () {
            return n.handleScroll && n.handleScroll.apply(n, arguments);
          }),
          l: e.o(function (e) {
            return n.emit("scrolltolower");
          }),
        };
      },
    ],
  ]);
wx.createComponent(o);
