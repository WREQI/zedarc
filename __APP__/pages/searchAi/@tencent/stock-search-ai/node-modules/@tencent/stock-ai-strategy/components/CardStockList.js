var e = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../../../common/vendor.js"),
  n = require("../lib/report.js"),
  r = {
    props: { version: String, stocks: Array, columnsList: Array },
    components: {
      List: function () {
        return "./Base/List.js";
      },
    },
    options: { styleIsolation: "shared" },
    setup: function (r, o) {
      var s = o.emit,
        l = t.computed(function () {
          return r.stocks;
        }),
        i = [{ label: "股票名称", field: ["name", "code"], slot: "name" }],
        c = [{ label: "", field: "starred", slot: "status" }];
      return {
        list: l,
        columns: t.computed(function () {
          var t;
          if (!r.columnsList || 0 === r.columnsList.length)
            return [].concat(
              i,
              [
                { label: "最新价", field: "price" },
                {
                  label: "涨跌幅",
                  field: "change_percent",
                  fluc: !0,
                  formatter: function (e) {
                    return n.defaults(n.postfix(n.sign(e), "%"));
                  },
                },
              ],
              c
            );
          var o =
            null == (t = r.columnsList)
              ? void 0
              : t.slice(0, 3).map(function (e, t) {
                  return {
                    label: e.display_name,
                    subLabel: e.data_date,
                    field: "".concat(t),
                    fluc: e.enable_color || !1,
                    sort: e.enable_sort,
                    useNewField: 1,
                    adjust: "v2" !== r.version,
                  };
                });
          return [].concat(i, e(o), c);
        }),
        onItemClick: function (e) {
          s("click", e);
        },
        onItemCheck: function (e) {
          s("star", e);
        },
      };
    },
  };
Array || t.resolveComponent("List")();
var o = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, o, s, l) {
      return t.e(
        { a: o.list.length > 0 },
        o.list.length > 0
          ? {
              b: t.o(o.onItemClick, 5749),
              c: t.o(o.onItemCheck, 5750),
              d: t.p({
                "select-able": !1,
                "scroll-able": !1,
                "sort-able": !1,
                "header-border": !1,
                "list-border": !1,
                list: o.list,
                columns: o.columns,
              }),
            }
          : {},
        { e: t.n("v2" === r.version ? "v2" : "v1") }
      );
    },
  ],
  ["__scopeId", "data-v-628ef940"],
]);
wx.createComponent(o);
