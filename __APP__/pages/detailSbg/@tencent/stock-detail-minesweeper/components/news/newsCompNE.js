var t = require("../../../../../../common/vendor.js"),
  e = {
    props: ["data"],
    data: function () {
      return { loadTimes: 0 };
    },
    computed: {
      loadCount: function () {
        return 0 === this.loadTimes ? 3 : 20 * this.loadTimes + 3;
      },
      formatedData: function () {
        return this.data && this.data.list && this.data.list.length
          ? this.data.list
              .map(function (t) {
                if (
                  ((t.caseId = t.id),
                  (t.id = t.id || 1e4 * Math.random()),
                  t.time)
                ) {
                  var e = t.time.split("-");
                  3 === e.length &&
                    ((t.time = "".concat(e[1], "-").concat(e[2])),
                    (t.year = e[0]));
                }
                return t;
              })
              .slice(0, this.loadCount)
          : [];
      },
    },
    methods: {
      jumpPage: function (e) {
        if (e)
          if ("mp" === t.StockBridge.ENV)
            t.StockBridge.routeTo({
              url: "/pages/newsCon/newsDetail/main?id=".concat(e, "&zxtype=2"),
            });
          else {
            var a =
              "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                e,
                "&zxtype=2"
              );
            t.StockBridge.openExtraWebview(a);
          }
      },
      loadMore: function (t) {
        (this.loadTimes += 1), t.stopPropagation();
      },
      foldAll: function (t) {
        (this.loadTimes = 0), t.stopPropagation();
        var e = document.querySelector("#fnegative_event_tag");
        e && e.scrollIntoView();
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, n, i, d) {
        return t.e(
          { a: d.formatedData.length > 0 },
          d.formatedData.length > 0
            ? {
                b: t.f(d.formatedData, function (e, a, n) {
                  return t.e(
                    { a: t.t(e.time), b: e.year },
                    e.year ? { c: t.t(e.year) } : {},
                    { d: a !== d.formatedData.length - 1 },
                    (d.formatedData.length, {}),
                    {
                      e: t.t(e.title),
                      f: t.f(e.etag, function (e, a, o) {
                        return { a: t.t(e), b: e };
                      }),
                      g:
                        a === d.formatedData.length - 1 &&
                        o.data.list.length > 3,
                    },
                    a === d.formatedData.length - 1 && o.data.list.length > 3
                      ? t.e(
                          { h: 0 === i.loadTimes },
                          0 === i.loadTimes
                            ? {
                                i: t.o(
                                  function () {
                                    return (
                                      d.loadMore &&
                                      d.loadMore.apply(d, arguments)
                                    );
                                  },
                                  3728,
                                  e.id
                                ),
                              }
                            : {},
                          { j: i.loadTimes > 0 },
                          i.loadTimes > 0
                            ? t.e(
                                { k: d.loadCount < o.data.list.length },
                                d.loadCount < o.data.list.length
                                  ? {
                                      l: t.o(
                                        function () {
                                          return (
                                            d.loadMore &&
                                            d.loadMore.apply(d, arguments)
                                          );
                                        },
                                        3729,
                                        e.id
                                      ),
                                    }
                                  : {},
                                {
                                  m: t.o(
                                    function () {
                                      return (
                                        d.foldAll &&
                                        d.foldAll.apply(d, arguments)
                                      );
                                    },
                                    3730,
                                    e.id
                                  ),
                                }
                              )
                            : {}
                        )
                      : {},
                    {
                      n: e.id,
                      o: t.o(
                        function (t) {
                          return d.jumpPage(e.caseId);
                        },
                        3731,
                        e.id
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-577327e9"],
  ]);
wx.createComponent(a);
