var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../common/vendor.js"),
  n = {
    props: { version: String, stocks: Array, columnsList: Array },
    components: {
      List: function () {
        return "./Base/List.js";
      },
      Empty: function () {
        return "./Base/Empty.js";
      },
    },
    options: { styleIsolation: "shared" },
    setup: function (n, o) {
      var r = o.emit,
        s = t.computed(function () {
          return n.stocks;
        }),
        l = t.computed(function () {
          return n.columnsList;
        }),
        a = [{ label: "股票名称", field: ["name", "code"], slot: "name" }];
      return {
        list: s,
        columns: t.computed(function () {
          var t,
            o =
              null == (t = l.value)
                ? void 0
                : t.map(function (e, t) {
                    return {
                      label: e.display_name,
                      subLabel: e.data_date,
                      field: "".concat(t),
                      fluc: e.enable_color || !1,
                      sort: e.enable_sort,
                      useNewField: 1,
                      adjust: "v2" !== n.version,
                    };
                  });
          return [].concat(a, e(o));
        }),
        onItemClick: function (e) {
          r("click", e);
        },
      };
    },
  };
Array || (t.resolveComponent("List") + t.resolveComponent("Empty"))();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, r, s, l) {
      return t.e(
        { a: r.list.length > 0 },
        r.list.length > 0
          ? {
              b: t.o(r.onItemClick, 2719),
              c: t.p({
                "select-able": !1,
                "scroll-able": !0,
                "sort-able": !0,
                "header-border": !0,
                "list-border": !0,
                list: r.list,
                columns: r.columns,
              }),
            }
          : {},
        { d: t.n("v2" === o.version ? "v2" : "v1") }
      );
    },
  ],
  ["__scopeId", "data-v-f5876ba9"],
]);
wx.createComponent(o);
