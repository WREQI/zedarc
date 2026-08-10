var i = require("../halfscreen-editor.js"),
  r = require("../../../../../../common/vendor.js"),
  n = {
    data: function () {
      return { gifArr: i.emoji.gifArr };
    },
    methods: {
      pickGif: function (i, r) {
        var n = "https://p.qpic.cn/pf/0/".concat(i, "/0"),
          t = "https://p.qpic.cn/pf/0/".concat(r, "/0");
        this.$emit("pickGif", t, n, "200,200", !0);
      },
    },
  },
  t = r._export_sfc(n, [
    [
      "render",
      function (i, n, t, c, e, f) {
        return {
          a: r.f(e.gifArr, function (i, n, t) {
            return {
              a: r.n("gid-" + n),
              b: r.t(i.name),
              c: r.o(
                function (r) {
                  return f.pickGif(i.gifid, i.picid);
                },
                3915,
                n
              ),
              d: n,
            };
          }),
        };
      },
    ],
  ]);
wx.createComponent(t);
