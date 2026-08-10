var e = require("../../../../../../../../common/vendor.js"),
  o = require("../../../../../stock-news-core/utils/tools.js"),
  r = {
    props: ["source", "wzqConfig"],
    data: function () {
      return {};
    },
    computed: {
      srcToHttps: function () {
        var e,
          r,
          t,
          n =
            null !=
            (t =
              null == (r = null == (e = this.source) ? void 0 : e.event)
                ? void 0
                : r.thumbnail)
              ? t
              : "";
        return o.formatImage(n);
      },
    },
    methods: { open: function (e) {} },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (o, r, t, n, u, s) {
        return e.e(
          { a: t.source },
          t.source
            ? {
                b: s.srcToHttps,
                c: e.t(t.source && t.source.event && t.source.event.name),
                d: e.o(function (e) {
                  return s.open(
                    t.source && t.source.event && t.source.event.id
                  );
                }, 4363),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e640f260"],
  ]);
wx.createComponent(t);
