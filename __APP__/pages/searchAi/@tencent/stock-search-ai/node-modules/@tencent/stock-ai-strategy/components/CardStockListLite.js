require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../../../../common/vendor.js"),
  o = require("../../../../../stock-mini-mins/dataToImages.js"),
  t = {
    props: { stocks: Array, columnsList: Array },
    setup: function (t, e) {
      var c = e.emit,
        i = n.ref("componentCardStock"),
        s = n.ref({}),
        r = n.computed(function () {
          var n;
          return (null == (n = t.columnsList) ? void 0 : n.slice(0, 2)) || [];
        }),
        a = function () {
          var n = [],
            e = r.value.findIndex(function (n) {
              return "最新涨跌幅" === n.display_name;
            });
          t.stocks.forEach(function (o) {
            var t,
              c = o.code,
              i = o.secu_type,
              s = o.condition_values,
              r = +(null == (t = null == s ? void 0 : s[e]) ? void 0 : t.raw);
            n.push({
              chooseSymbol: c,
              riseDropVal: r,
              riseDropStyle:
                0 === r ? "bg-peace" : r > 0 ? "bg-rise" : "bg-drop",
              stock_type: i,
            });
          }),
            new o.DataToImages({
              stockList: n,
              callback: function (n) {
                var o = {};
                n.forEach(function (n) {
                  o[n.stockCode] = n.image;
                }),
                  (s.value = o);
              },
            });
        };
      return (
        n.watch(
          function () {
            return t.stocks;
          },
          function (o, t) {
            o &&
              t &&
              JSON.stringify(o) !== JSON.stringify(t) &&
              ((s.value = {}),
              n.nextTick$1(function () {
                a();
              }));
          },
          { immediate: !0 }
        ),
        n.onMounted(function () {
          a();
        }),
        n.onBeforeUnmount(function () {}),
        {
          targetId: i,
          hotStock: s,
          columns: r,
          getColor: function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return n.includes("-");
          },
          handleStock: function (n) {
            c("click", n);
          },
          handleAdd: function (n) {
            c("star", n);
          },
        }
      );
    },
  },
  e = n._export_sfc(t, [
    [
      "render",
      function (o, t, e, c, i, s) {
        return n.e(
          { a: e.stocks && e.stocks.length },
          e.stocks && e.stocks.length
            ? {
                b: n.f(e.stocks, function (o, t, e) {
                  return n.e(
                    { a: c.hotStock && c.hotStock[o.code] },
                    c.hotStock && c.hotStock[o.code]
                      ? { b: c.hotStock[o.code] }
                      : {},
                    {
                      c: n.t(o.name),
                      d:
                        c.columns.length &&
                        o.condition_values &&
                        o.condition_values.length,
                    },
                    c.columns.length &&
                      o.condition_values &&
                      o.condition_values.length
                      ? {
                          e: n.f(c.columns, function (t, e, i) {
                            return n.e(
                              { a: "最新涨跌幅" === t.display_name },
                              "最新涨跌幅" === t.display_name
                                ? {
                                    b: n.t(o.condition_values[e].disp),
                                    c: c.getColor(o.condition_values[e].disp)
                                      ? 1
                                      : "",
                                  }
                                : { d: n.t(o.condition_values[e].disp) },
                              {
                                e: n.t(
                                  "最新涨跌幅" === t.display_name
                                    ? "今日涨跌"
                                    : t.display_name
                                ),
                                f: e,
                                g: 1 === e ? 1 : "",
                              }
                            );
                          }),
                        }
                      : {},
                    {
                      f: n.n(o.starred ? "checked" : ""),
                      g: n.o(
                        function (n) {
                          return c.handleAdd(o);
                        },
                        5751,
                        t
                      ),
                      h: t,
                      i: n.o(
                        function (n) {
                          return c.handleStock(o);
                        },
                        5752,
                        t
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-3dacde05"],
  ]);
wx.createComponent(e);
