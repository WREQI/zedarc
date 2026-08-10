var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../assets/filters/stock.js"),
  r = require("../defaultWZQ.js"),
  i = require("../../../../../../../common/vendor.js"),
  n = {
    components: {},
    directives: {},
    props: {
      content: {
        type: Array,
        default: function () {
          return [];
        },
      },
      containerClass: { type: String, default: "" },
    },
    data: function () {
      return {};
    },
    methods: {
      priceChangePercent: t.priceChangePercent,
      hgFlucColor: r.hgFlucColor,
      folderRisk: function (e, t) {
        e.isFolderRisk && this.$emit("changeZXFXItemRisk", t);
      },
      viewStockDetail: function (t) {
        if (-1 !== t.stock_code.indexOf(".")) {
          var i = t.stock_code.split("."),
            n = e(i, 2),
            s = n[0],
            o = n[1],
            c = r.getMarket(o.toLowerCase());
          this.$emit("viewStockDetail", "zxsl", c, s);
        } else {
          var a = t.stock_code.substr(0, 2),
            l = r.getMarket(a),
            u = t.stock_code.substr(2);
          this.$emit("viewStockDetail", "zxsl", l, u);
        }
      },
    },
  },
  s = i._export_sfc(n, [
    [
      "render",
      function (e, t, r, n, s, o) {
        return {
          a: i.f(r.content, function (e, t, r) {
            return i.e(
              {
                a: i.t(e.stock_name),
                b: i.t(o.priceChangePercent(e.change_percent)),
                c: i.n(o.hgFlucColor(e.change_percent, "")),
                d: i.n(o.hgFlucColor(e.change_percent, "bg-")),
                e: e.risk_item,
              },
              e.risk_item ? { f: i.t(e.risk_item.length) } : {},
              { g: e.isFolderRisk },
              (e.isFolderRisk, {}),
              { h: e.risk_item },
              e.risk_item
                ? {
                    i: i.f(e.risk_item, function (e, t, r) {
                      return i.e(
                        { a: i.t(e.risk_tag), b: 1 == e.is_new },
                        (e.is_new, {}),
                        { c: 1 == e.level_higher },
                        (e.level_higher, {}),
                        { d: t }
                      );
                    }),
                    j: e.isFolderRisk ? 1 : "",
                  }
                : {},
              {
                k: i.o(
                  function (r) {
                    return o.folderRisk(e, t);
                  },
                  4475,
                  t
                ),
                l: t,
                m: i.o(
                  function (t) {
                    return o.viewStockDetail(e);
                  },
                  4476,
                  t
                ),
              }
            );
          }),
          b: i.n(r.containerClass),
        };
      },
    ],
    ["__scopeId", "data-v-44749387"],
  ]);
wx.createComponent(s);
