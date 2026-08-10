var t = require("../../../../../common/vendor.js"),
  a = {
    name: "classBar",
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {};
    },
    methods: {
      click: function () {
        this.$emit("barClick");
      },
    },
  },
  e = t._export_sfc(a, [
    [
      "render",
      function (a, e, c, r, n, o) {
        return {
          a: "https://st.gtimg.com/image/course/".concat(
            c.data.isMasterCourse ? "master" : "basic",
            ".png"
          ),
          b: t.t(c.data.title),
          c: t.t(c.data.desc),
          d: t.o(function () {
            return o.click && o.click.apply(o, arguments);
          }, 4226),
        };
      },
    ],
    ["__scopeId", "data-v-b99aadd7"],
  ]);
wx.createComponent(e);
