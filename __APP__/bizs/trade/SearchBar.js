require("../../app.js");
var e = require("../../common/vendor.js"),
  n = {
    props: { searching: { type: Boolean, default: !1 } },
    setup: function (n, o) {
      var r = o.emit,
        t = "",
        a = e.inject("searchWithHold"),
        c = a.searchCode,
        u = a.search,
        h = e.debounce(function (e) {
          var n = e.detail.value.replace(/\s/g, "");
          u({ keyword: n });
        }, 500),
        l = e.ref(!1);
      return (
        e.onBeforeUnmount(function () {
          t && clearTimeout(t);
        }),
        {
          focusState: l,
          handleFocus: function () {
            l.value = !0;
          },
          handleBlur: function () {
            l.value = !1;
          },
          searchCode: c,
          onSearchStock: h,
          handleToggleShowInput: function (e) {
            if (e) {
              if (n.searching) return;
              r("searchStateChange", !0);
            } else
              (c.value = ""),
                u({ keyword: "" }),
                (t = setTimeout(function () {
                  r("searchStateChange", !1);
                }, 100));
          },
        }
      );
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, r, t, a, c) {
        return e.e(
          {
            a: t.searchCode,
            b: t.focusState,
            c: e.o(function () {
              return t.onSearchStock && t.onSearchStock.apply(t, arguments);
            }),
            d: e.o(function () {
              return t.handleFocus && t.handleFocus.apply(t, arguments);
            }),
            e: e.o(function () {
              return t.handleBlur && t.handleBlur.apply(t, arguments);
            }),
            f: e.o(function (e) {
              return t.handleToggleShowInput(!0);
            }),
            g: r.searching,
          },
          r.searching
            ? {
                h: e.o(function (e) {
                  return t.handleToggleShowInput(!1);
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d9c79de1"],
  ]);
wx.createComponent(o);
