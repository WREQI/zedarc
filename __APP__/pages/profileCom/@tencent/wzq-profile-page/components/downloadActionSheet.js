require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    setup: function (t, n) {
      var r = n.emit,
        i = e.computed(function () {
          return ["wzqlight", "mpwzq"].includes("mpweapp");
        }),
        o = e.computed(function () {
          return i.value
            ? "https://st.gtimg.com/design/854b1b122e7604160600f0df98ab8eb9.png"
            : "https://st.gtimg.com/design/7bd5a0b5f7f4d50bf887bbd98b1fb996.png";
        });
      return { isSimpleMode: i, imgSrc: o, emit: r };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, i, o, c) {
        return {
          a: e.o(function (e) {
            return i.emit("close");
          }, 3411),
          b: i.imgSrc,
          c: i.isSimpleMode ? 1 : "",
          d: e.o(function (e) {
            return i.emit("close");
          }, 3412),
        };
      },
    ],
    ["__scopeId", "data-v-29bad076"],
  ]);
wx.createComponent(n);
