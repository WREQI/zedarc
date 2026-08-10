var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../chartImage/chartImageUtil.js"),
  n = require("../api/StockMiniChartApiV2.js"),
  a = require("../../../../../common/vendor.js"),
  i = {
    props: [
      "tabId",
      "chooseSymbol",
      "cellStyle",
      "riseDropVal",
      "fillChart",
      "miniSize",
      "sectionIndex",
      "itemIndex",
      "skin",
    ],
    setup: function (i) {
      var u = this,
        c = a.ref(!1),
        l = a.ref(""),
        o = a.ref(!1),
        s = a.ref([]),
        d = r.chartImageUtil(i.miniSize),
        h = n.useChartDataStore(),
        f = a.computed(function () {
          return h.renderMinsData && h.renderMinsData[i.tabId]
            ? h.renderMinsData[i.tabId][i.chooseSymbol]
            : null;
        }),
        m = a.computed(function () {
          return i.cellStyle || "";
        }),
        p = function () {
          var r,
            n,
            a,
            h = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (
            (r = u),
            (n = null),
            (a = e().mark(function () {
              var r, n, a, u, m, p, g;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (b()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((a = f.value),
                        !(null == (r = null == a ? void 0 : a.data)
                          ? void 0
                          : r.priceList) ||
                          !(null == (n = null == a ? void 0 : a.data)
                            ? void 0
                            : n.preClose))
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (
                        ((u = t(a.data.priceList)),
                        (m = a.data.preClose),
                        (p = d.calculateMaxMin(u, m)),
                        h ||
                          !o.value ||
                          u.length !== s.value.length ||
                          u[0] !== s.value[0] ||
                          u[u.length - 1] !== s.value[s.value.length - 1])
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      return (
                        (s.value = u),
                        1 === u.length && u.push(s.value[0]),
                        (e.next = 10),
                        d.startDrawLineChart(p, v(), i.fillChart, i.miniSize)
                      );
                    case 10:
                      (g = e.sent),
                        (o.value = !0),
                        (l.value = g),
                        (e.next = 15);
                      break;
                    case 14:
                      a &&
                        a.data &&
                        a.data.priceList &&
                        0 === a.data.priceList.length &&
                        (c.value = !0);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, a);
            })),
            new Promise(function (e, t) {
              var i = function (e) {
                  try {
                    c(a.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                u = function (e) {
                  try {
                    c(a.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                c = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(i, u);
                };
              c((a = a.apply(r, n)).next());
            })
          );
        },
        v = function () {
          if ("0.00%" === i.riseDropVal) return "#E63535";
          switch (m.value) {
            case "bg-rise":
              return "#E63535";
            case "bg-drop":
              return "#1CAA3C";
            default:
              return "#7a8499";
          }
        },
        b = function () {
          if (i.chooseSymbol) {
            var e = i.chooseSymbol.slice(0, 2);
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
      return (
        a.watch(
          function () {
            return f.value;
          },
          function (e, t) {
            e && p(!0);
          },
          { immediate: !0 }
        ),
        a.watch(
          function () {
            return m.value;
          },
          function (e, t) {
            e !== t && p(!0);
          }
        ),
        a.onMounted(function () {
          p(!0);
        }),
        {
          hideImg: c,
          imageData: l,
          hasRenderedChart: o,
          handleDrawLineOffscreenChart: p,
        }
      );
    },
  },
  u = a._export_sfc(i, [
    [
      "render",
      function (e, t, r, n, i, u) {
        return a.e(
          { a: !n.hideImg },
          n.hideImg
            ? {}
            : {
                b:
                  n.imageData ||
                  ("black" === r.skin
                    ? "https://st.gtimg.com/design/2a3294d00f94823aa9f9dfd76f8a11df.gif"
                    : "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif"),
                c: a.n(n.hasRenderedChart ? "chart-height" : ""),
                d: a.n(r.miniSize ? "mini" : ""),
              }
        );
      },
    ],
  ]);
wx.createComponent(u);
