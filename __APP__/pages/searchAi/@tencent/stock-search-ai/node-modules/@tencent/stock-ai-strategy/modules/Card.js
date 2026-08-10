var r = require("../../../../../../../../common/vendor.js"),
  t = {
    components: {
      CardV1: function () {
        return "./v1/Card.js";
      },
      CardV2: function () {
        return "./v2/Card.js";
      },
      CardV2Lite: function () {
        return "./v2/CardLite.js";
      },
    },
    props: {
      version: String,
      type: String,
      title: String,
      data: Object,
      context: Object,
      mocktrade: Boolean,
    },
    setup: function (t, e) {
      var n = e.emit,
        o = r.getCurrentInstance().proxy;
      return {
        onCardClick: function (r) {
          n("click", r);
        },
        onCardView: function (r) {
          n("view", r);
        },
        onCardStar: function (r) {
          n("star", r);
        },
        refresh: function () {
          var r = "v1" === t.version ? o.$refs.cardv1 : o.$refs.cardv2;
          r && r.refresh();
        },
      };
    },
  };
Array ||
  (
    r.resolveComponent("CardV1") +
    r.resolveComponent("CardV2Lite") +
    r.resolveComponent("CardV2")
  )();
var e = r._export_sfc(t, [
  [
    "render",
    function (t, e, n, o, a, c) {
      return r.e(
        { a: "v1" === n.version },
        "v1" === n.version
          ? {
              b: r.sr("cardv1", "357b3424-0"),
              c: r.o(o.onCardView, 5392),
              d: r.o(o.onCardClick, 5393),
              e: r.o(o.onCardStar, 5394),
              f: r.p({ data: n.data, context: n.context }),
            }
          : "v2" === n.version && "v2" === n.type
          ? {
              h: r.sr("cardv2", "357b3424-1"),
              i: r.o(o.onCardView, 5395),
              j: r.o(o.onCardClick, 5396),
              k: r.o(o.onCardStar, 5397),
              l: r.p({ title: n.title, data: n.data, context: n.context }),
            }
          : {
              m: r.sr("cardv2", "357b3424-2"),
              n: r.o(o.onCardView, 5398),
              o: r.o(o.onCardClick, 5399),
              p: r.o(o.onCardStar, 5400),
              q: r.p({
                data: n.data,
                context: n.context,
                mocktrade: n.mocktrade,
              }),
            },
        { g: "v2" === n.version && "v2" === n.type }
      );
    },
  ],
]);
wx.createComponent(e);
