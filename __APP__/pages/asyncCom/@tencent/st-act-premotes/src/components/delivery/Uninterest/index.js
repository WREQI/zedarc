var e = require("../../../../../../../../common/vendor.js"),
  o = e._export_sfc(
    {
      data: function () {
        return { showMore: !0 };
      },
      methods: {
        handleMore: function () {
          (this.showMore = !1), this.$emit("more");
        },
        handleNot: function () {
          this.$emit("not");
        },
      },
    },
    [
      [
        "render",
        function (o, n, t, r, a, h) {
          return e.e(
            { a: a.showMore },
            a.showMore
              ? {
                  b: e.o(function () {
                    return h.handleMore && h.handleMore.apply(h, arguments);
                  }, 3147),
                }
              : {
                  c: e.o(function () {
                    return h.handleNot && h.handleNot.apply(h, arguments);
                  }, 3148),
                }
          );
        },
      ],
      ["__scopeId", "data-v-6ce69ebb"],
    ]
  );
wx.createComponent(o);
