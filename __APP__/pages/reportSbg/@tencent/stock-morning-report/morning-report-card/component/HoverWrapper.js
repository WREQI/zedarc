var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "HoverWrapper",
    data: function () {
      return { isMP: !0 };
    },
    methods: {
      handleTouchStart: function (t) {
        try {
          if (t.target.classList.contains("disable-touch")) return;
          ("span" === t.target.localName ||
            t.target.classList.contains("enable-touch")) &&
            (this.scrollTimer = setTimeout(function () {
              t.target.classList.contains("news-link")
                ? t.target.parentNode.classList.add("onLongTouch")
                : t.target.classList.add("onLongTouch");
            }, 50));
        } catch (t) {}
      },
      handleTouchMove: function (t) {
        clearTimeout(this.scrollTimer);
        try {
          if (t.target.classList.contains("disable-touch")) return;
          ("span" === t.target.localName ||
            t.target.classList.contains("enable-touch")) &&
            (t.target.classList.contains("news-link")
              ? t.target.parentNode.classList.remove("onLongTouch")
              : t.target.classList.remove("onLongTouch"));
        } catch (t) {}
      },
      handleTouchEnd: function (t) {
        clearTimeout(this.scrollTimer);
        try {
          if (t.target.classList.contains("disable-touch")) return;
          ("span" === t.target.localName ||
            t.target.classList.contains("enable-touch")) &&
            (t.target.classList.contains("news-link")
              ? t.target.parentNode.classList.remove("onLongTouch")
              : t.target.classList.remove("onLongTouch"));
        } catch (t) {}
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, n, o, s, c) {
        return t.e(
          { a: !s.isMP },
          s.isMP
            ? {}
            : {
                b: t.o(function () {
                  return (
                    c.handleTouchStart && c.handleTouchStart.apply(c, arguments)
                  );
                }, 3324),
                c: t.o(function () {
                  return (
                    c.handleTouchMove && c.handleTouchMove.apply(c, arguments)
                  );
                }, 3325),
                d: t.o(function () {
                  return (
                    c.handleTouchEnd && c.handleTouchEnd.apply(c, arguments)
                  );
                }, 3326),
              }
        );
      },
    ],
  ]);
wx.createComponent(a);
