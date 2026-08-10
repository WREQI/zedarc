var t = require("../../../../../../common/vendor.js"),
  e = {
    props: ["data"],
    computed: {
      formatedData: function () {
        return this.data && this.data.list && this.data.list.length
          ? this.data.list.map(function (t) {
              if (
                ((t.caseId = t.id),
                (t.key = t.id || 1e4 * Math.random()),
                t.time)
              ) {
                var e = t.time.split("-");
                3 === e.length &&
                  ((t.time = "".concat(e[1], "-").concat(e[2])),
                  (t.year = e[0]));
              }
              return t;
            })
          : [];
      },
    },
    methods: {
      jumpPage: function (e) {
        if (e) {
          var a =
            "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
              e,
              "&zxtype=2"
            );
          t.StockBridge.openExtraWebview(a);
        }
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, n, r, i, o) {
        return t.e(
          { a: o.formatedData.length > 0 },
          o.formatedData.length > 0
            ? {
                b: t.f(o.formatedData, function (e, a, n) {
                  return t.e(
                    { a: t.t(e.time), b: e.year },
                    e.year ? { c: t.t(e.year) } : {},
                    {
                      d: t.t(e.title),
                      e: t.t(e.matter),
                      f: e.key,
                      g: t.o(
                        function (t) {
                          return o.jumpPage(e.caseId);
                        },
                        3727,
                        e.key
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6b52b960"],
  ]);
wx.createComponent(a);
