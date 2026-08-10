var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../common/vendor.js"),
  n = require("../../../stock-mini-mins/chartImage/chartImageUtil.js"),
  i = require("./SectorCardComponent.js"),
  a = {
    props: [
      "tabId",
      "chooseSymbol",
      "cellStyle",
      "riseDropVal",
      "fillChart",
      "miniSize",
      "chartSize",
      "store",
      "sectionIndex",
      "itemIndex",
    ],
    setup: function (a) {
      var o = this,
        u = r.ref(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII="
        ),
        c = r.ref(!1),
        s = r.ref([]),
        l = n.chartImageUtil(a.miniSize, a.chartSize),
        h = r.computed(function () {
          return a.miniSize
            ? "mini"
            : "string" == typeof a.chartSize
            ? a.chartSize
            : "";
        }),
        f = r.computed(function () {
          var e;
          if (a.cellStyle) return a.cellStyle;
          if (!a.store) return "";
          var t = a.store.renderListSections;
          if (t && (null == (e = t[a.tabId]) ? void 0 : e.length) > 0) {
            var r = t[a.tabId][a.sectionIndex];
            if (r && r.length > a.itemIndex) {
              var n = r[a.itemIndex];
              if (n && n.riseDropStyle) return n.riseDropStyle;
            }
          }
          return "";
        }),
        d = function () {
          var r,
            n,
            h,
            f = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (
            (r = o),
            (n = null),
            (h = e().mark(function () {
              var r, n, o, h, d, b, g;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (A()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (e.next = 4),
                        i.MiniMinsDataUtils.getInstance().getMiniMinsData(
                          a.chooseSymbol
                        )
                      );
                    case 4:
                      if (
                        ((o = e.sent),
                        !(null == (r = null == o ? void 0 : o.data)
                          ? void 0
                          : r.priceList) ||
                          !(null == (n = null == o ? void 0 : o.data)
                            ? void 0
                            : n.preClose))
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (
                        ((h = t(o.data.priceList)),
                        (d = o.data.preClose),
                        (b = l.calculateMaxMin(h, d)),
                        f ||
                          !c.value ||
                          h.length !== s.value.length ||
                          h[0] !== s.value[0] ||
                          h[h.length - 1] !== s.value[s.value.length - 1])
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      return (
                        (s.value = h),
                        1 === h.length && h.push(s.value[0]),
                        (e.next = 12),
                        l.startDrawLineChart(
                          b,
                          m(),
                          a.fillChart,
                          a.miniSize,
                          a.chartSize
                        )
                      );
                    case 12:
                      (g = e.sent), (c.value = !0), (u.value = g);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, o);
            })),
            new Promise(function (e, t) {
              var i = function (e) {
                  try {
                    o(h.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (e) {
                  try {
                    o(h.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                o = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(i, a);
                };
              o((h = h.apply(r, n)).next());
            })
          );
        },
        m = function () {
          if ("0.00%" === a.riseDropVal) return "#E63535";
          switch (f.value) {
            case "bg-rise":
              return "#E63535";
            case "bg-drop":
              return "#1CAA3C";
            default:
              return "#7a8499";
          }
        },
        A = function () {
          if (a.chooseSymbol) {
            var e = a.chooseSymbol.slice(0, 2);
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
            ].some(function (t) {
              return t === e;
            });
          }
          return !1;
        };
      return (
        r.onMounted(function () {
          d(),
            r.StockBridge.busOn(
              "morning_brief_stock_chart_render_".concat(
                a.chooseSymbol.replace(".", "_")
              ),
              d
            );
        }),
        r.onBeforeUnmount(function () {
          r.StockBridge.busOff(
            "morning_brief_stock_chart_render_".concat(
              a.chooseSymbol.replace(".", "_")
            )
          );
        }),
        { imageData: u, hasRenderedChart: c, size: h }
      );
    },
  },
  o = r._export_sfc(a, [
    [
      "render",
      function (e, t, n, i, a, o) {
        return {
          a:
            i.imageData ||
            "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif",
          b: r.n(i.hasRenderedChart ? "chart-height" : ""),
          c: r.n(i.size),
        };
      },
    ],
  ]);
wx.createComponent(o);
