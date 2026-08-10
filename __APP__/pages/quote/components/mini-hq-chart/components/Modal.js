var t = require("../../../../../common/vendor.js"),
  o = t._export_sfc(
    {
      props: ["show", "title", "content"],
      data: function () {
        return {};
      },
      computed: {},
      mounted: function () {},
      methods: {
        closeDia: function () {
          this.$emit("close");
        },
      },
    },
    [
      [
        "render",
        function (o, e, n, c, i, r) {
          return t.e(
            { a: n.show },
            n.show
              ? {
                  b: t.o(function () {
                    return r.closeDia && r.closeDia.apply(r, arguments);
                  }, 4397),
                  c: t.t(n.title),
                  d: t.t(n.content),
                  e: t.o(function () {
                    return r.closeDia && r.closeDia.apply(r, arguments);
                  }, 4398),
                  f: t.o(function () {}, 4399),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-bccd0697"],
    ]
  );
wx.createComponent(o);
