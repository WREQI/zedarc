var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../api/StockMiniChartApi.js"),
  n = require("../chartImage/chartImageUtil.js"),
  a = require("../../../../../common/vendor.js"),
  i = {},
  o = {
    props: [
      "tabId",
      "chooseSymbol",
      "cellStyle",
      "riseDropVal",
      "fillChart",
      "miniSize",
      "store",
      "sectionIndex",
      "itemIndex",
    ],
    setup: function (o) {
      var u = this,
        c = a.ref(""),
        l = a.ref(!1),
        s = a.ref([]),
        h = n.chartImageUtil(o.miniSize),
        f = null,
        d = a.computed(function () {
          var e;
          if (o.cellStyle) return o.cellStyle;
          if (!o.store) return "";
          var t = o.store.renderListSections;
          if (t && (null == (e = t[o.tabId]) ? void 0 : e.length) > 0) {
            var r = t[o.tabId][o.sectionIndex];
            if (r && r.length > o.itemIndex) {
              var n = r[o.itemIndex];
              if (n && n.riseDropStyle) return n.riseDropStyle;
            }
          }
          return "";
        });
      a.watch(
        function () {
          return d.value;
        },
        function (e, t) {
          e !== t && m(!0);
        }
      ),
        a.onMounted(function () {
          f = setTimeout(function () {
            r.BUS.$on(
              "stock_chart_render_"
                .concat(o.chooseSymbol.replace(".", "_"), "_")
                .concat(o.tabId),
              function () {
                m();
              }
            );
          }, 0);
        }),
        a.onBeforeUnmount(function () {
          f && clearTimeout(f),
            r.BUS.$off(
              "stock_chart_render_"
                .concat(o.chooseSymbol.replace(".", "_"), "_")
                .concat(o.tabId)
            );
        });
      var m = function n() {
          var a,
            f,
            d,
            m = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (
            (a = u),
            (f = null),
            (d = e().mark(function () {
              var a, u, f, d, v, S, g;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (p()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (e.next = 4),
                        r.StockMiniChartApi.getOrRequestMiniMinsData(
                          o.chooseSymbol,
                          o.tabId
                        )
                      );
                    case 4:
                      if (
                        ((f = e.sent),
                        !(null == (a = null == f ? void 0 : f.data)
                          ? void 0
                          : a.priceList) ||
                          !(null == (u = null == f ? void 0 : f.data)
                            ? void 0
                            : u.preClose))
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (
                        ((d = t(f.data.priceList)),
                        (v = f.data.preClose),
                        (S = h.calculateMaxMin(d, v)),
                        m ||
                          !l.value ||
                          d.length !== s.value.length ||
                          d[0] !== s.value[0] ||
                          d[d.length - 1] !== s.value[s.value.length - 1])
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      return (
                        (s.value = d),
                        1 === d.length && d.push(s.value[0]),
                        (e.next = 12),
                        h.startDrawLineChart(S, b(), o.fillChart, o.miniSize)
                      );
                    case 12:
                      (g = e.sent),
                        (l.value = !0),
                        (c.value = g),
                        S.autoRefresh &&
                          (i[o.chooseSymbol] && clearTimeout(i[o.chooseSymbol]),
                          (i[o.chooseSymbol] = setTimeout(function () {
                            n();
                          }, 3e5)));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, f);
            })),
            new Promise(function (e, t) {
              var r = function (e) {
                  try {
                    i(d.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                n = function (e) {
                  try {
                    i(d.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(r, n);
                };
              i((d = d.apply(a, f)).next());
            })
          );
        },
        b = function () {
          if ("0.00%" === o.riseDropVal) return "#E63535";
          switch (d.value) {
            case "bg-rise":
              return "#E63535";
            case "bg-drop":
              return "#1CAA3C";
            default:
              return "#7a8499";
          }
        },
        p = function () {
          if (o.chooseSymbol) {
            var e = o.chooseSymbol.slice(0, 2);
            return [
              "sh",
              "sz",
              "bj",
              "hk",
              "us",
              "pt",
              "uk",
              "fu",
              "ft",
              "nq",
              "hd",
              "cs",
              "sp",
            ].some(function (t) {
              return t === e;
            });
          }
          return !1;
        };
      return {
        imageData: c,
        hasRenderedChart: l,
        handleDrawLineOffscreenChart: m,
      };
    },
  },
  u = a._export_sfc(o, [
    [
      "render",
      function (e, t, r, n, i, o) {
        return {
          a:
            n.imageData ||
            "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif",
          b: a.n(n.hasRenderedChart ? "chart-height" : ""),
          c: a.n(r.miniSize ? "mini" : ""),
        };
      },
    ],
  ]);
wx.createComponent(u);
