require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/utils.js"),
  o = {
    props: {
      quoteInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      name: { type: String, default: "" },
      code: { type: String, default: "" },
      market: { type: String, default: "" },
      showSearch: { type: Boolean, default: !0 },
    },
    setup: function (o, n) {
      var r = n.emit,
        a = e.computed(function () {
          return !!(o.quoteInfo.dqj && o.quoteInfo.zde && o.quoteInfo.zdf);
        }),
        u = t.useNavigateToQuote(o.market, o.code, o.name, r).toHq;
      return {
        showQuoteInfo: a,
        emit: r,
        handleSearch: function () {
          r("search");
        },
        toHq: u,
      };
    },
  };
Array || e.resolveComponent("ValueColor")(), Math;
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, r, a, u) {
      return e.e(
        {
          a: e.t(n.name),
          b: e.n((n.name || "").length > 6 ? "fs-28" : ""),
          c: e.t(n.code),
          d: e.t(t.$filters.marketName(n.market, ".")),
          e: e.o(function () {
            return r.toHq && r.toHq.apply(r, arguments);
          }),
          f: n.showSearch,
        },
        n.showSearch
          ? {
              g: e.o(function () {
                return r.handleSearch && r.handleSearch.apply(r, arguments);
              }),
            }
          : {},
        { h: r.showQuoteInfo },
        r.showQuoteInfo
          ? {
              i: e.t(
                n.quoteInfo.dqj || ("" + n.quoteInfo.spread).replace(/\d/g, "0")
              ),
              j: e.o(function (e) {
                return r.emit("clickDqj");
              }),
              k: e.p({ value: n.quoteInfo.zde }),
              l: e.t(n.quoteInfo.zde),
              m: e.p({ value: n.quoteInfo.zde }),
              n: e.t(n.quoteInfo.zdf),
              o: e.p({ value: n.quoteInfo.zdf }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-730a6d36"],
]);
wx.createComponent(n);
