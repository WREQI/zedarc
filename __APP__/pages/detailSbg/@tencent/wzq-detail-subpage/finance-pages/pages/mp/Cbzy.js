require("../../../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../../../common/vendor.js"),
  t = require("../../api/index.js"),
  n = require("../../../../stock-hq-data/index.js"),
  a = function (e, t, n, a, r) {
    var o = !1;
    return (
      (e = parseFloat(e || 0)) < 0 && ((o = !0), (e = -e)),
      (t = parseInt(t || 1, 10)),
      (n = parseInt(n || 0, 10)),
      (a = parseInt(a || 2, 10)),
      (r = r || ""),
      (e =
        e < 1e4 * t
          ? e.toFixed(n)
          : e >= 1e4 * t && e < 1e8
          ? "".concat((e / 1e4).toFixed(a), "万")
          : "".concat((e / 1e8).toFixed(a), "亿")),
      o && (e = "-".concat(e)),
      e + r
    );
  },
  r = {
    handleData: function (e) {
      var t,
        n,
        r,
        o = [];
      if (
        (null == e ? void 0 : e.yysr_tb) &&
        "--" !== (null == e ? void 0 : e.yysr_tb) &&
        "--" !== (null == e ? void 0 : e.yysr)
      ) {
        var i = parseFloat(null == e ? void 0 : e.yysr_tb) > 0,
          c = {
            title: "营收",
            color: "",
            value: "营业收入"
              .concat(a(null == e ? void 0 : e.yysr, 10, 2, 2) || "--")
              .concat(
                Math.abs(null == e ? void 0 : e.yysr) < 1e4 ? "元" : "",
                "，"
              ),
          };
        0 === parseFloat(null == e ? void 0 : e.yysr_tb)
          ? ((c.color = "gray"), (c.value = "".concat(c.value, "同比持平")))
          : ((c.color = i ? "red" : "green"),
            (c.value = ""
              .concat(c.value, "同比")
              .concat(i ? "+" : "-")
              .concat(
                (null == (t = Math.abs(null == e ? void 0 : e.yysr_tb))
                  ? void 0
                  : t.toFixed(2)) || "--",
                "%"
              ))),
          o.push(c);
      }
      if (
        (null == e ? void 0 : e.jrl) &&
        "--" !== (null == e ? void 0 : e.jlr_tb) &&
        "--" !== (null == e ? void 0 : e.jrl)
      ) {
        var l = parseFloat(null == e ? void 0 : e.jrl_tb) > 0,
          u = {
            title: "利润",
            color: "",
            value: "归母净利润"
              .concat(a(null == e ? void 0 : e.jrl, 10, 2, 2) || "--")
              .concat(
                Math.abs(null == e ? void 0 : e.jrl) < 1e4 ? "元" : "",
                "，"
              ),
          };
        0 === parseFloat(null == e ? void 0 : e.jrl_tb)
          ? ((u.color = "gray"), (u.value = "".concat(u.value, "同比持平")))
          : ((u.color = l ? "red" : "green"),
            (u.value = ""
              .concat(u.value, "同比")
              .concat(l ? "+" : "-")
              .concat(
                (null == (n = Math.abs(null == e ? void 0 : e.jrl_tb))
                  ? void 0
                  : n.toFixed(2)) || "--",
                "%"
              ))),
          o.push(u);
      }
      if (
        (null == e ? void 0 : e.roe_weighted_tb) &&
        "--" !== (null == e ? void 0 : e.roe_weighted_tb) &&
        "--" !== (null == e ? void 0 : e.roe_weighted)
      ) {
        var d = parseFloat(null == e ? void 0 : e.roe_weighted_tb) > 0,
          s = {
            title: "ROE",
            color: "",
            value: "净资产收益率".concat(
              (null == e ? void 0 : e.roe_weighted) || "--",
              "，"
            ),
          };
        0 === parseFloat(null == e ? void 0 : e.roe_weighted_tb)
          ? ((s.color = "gray"), (s.value = "".concat(s.value, "同比持平")))
          : ((s.color = d ? "red" : "green"),
            (s.value = ""
              .concat(s.value, "同比")
              .concat(d ? "+" : "-")
              .concat(
                (null == (r = Math.abs(null == e ? void 0 : e.roe_weighted_tb))
                  ? void 0
                  : r.toFixed(2)) || "--",
                "%"
              ))),
          o.push(s);
      }
      return o;
    },
    handleCbList: function (e) {
      var t = {};
      Object.keys(e).forEach(function (n) {
        var a = n.split("Q")[0],
          r = n.split("Q"),
          o = ""
            .concat(r[0], " ")
            .concat({ 1: "一季报", 2: "中报", 3: "三季报", 4: "年报" }[r[1]]),
          i = ""
            .concat(r[0])
            .concat(
              { 1: "一季度财", 2: "中", 3: "三季度财", 4: "年" }[r[1]],
              "报.pdf"
            );
        Array.isArray(t[String(a)])
          ? t[String(a)].unshift({ season: o, cbFileName: i, data: e[n] })
          : (t[String(a)] = [{ season: o, cbFileName: i, data: e[n] }]);
      });
      var n = Object.entries(t).sort(function (e, t) {
        return Number(t[0]) - Number(e[0]);
      });
      return {
        cb: n,
        tab: n.map(function (e) {
          return { text: "".concat(e[0], "年"), value: e[0] };
        }),
      };
    },
  },
  o = e.defineComponent({
    components: {
      CbzyContent: function () {
        return "../../components/CbzyContent.js";
      },
      Status: function () {
        return "../../../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: {
      symbol: { type: String, default: "", required: !0 },
      stockName: { type: String, default: "" },
    },
    setup: function (a) {
      var o = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        i = e.ref(null);
      e.onMounted(function () {
        (m.value = a.stockName), h(), l();
      });
      var c = e.ref(!1),
        l = function () {
          t.getSummaryDetail({ symbol: a.symbol })
            .then(function (e) {
              var t = (e || {}).data,
                n = r.handleCbList(t),
                a = n.cb,
                o = n.tab;
              (f.value = a), (s.value = o), (c.value = !1), y(d.value);
            })
            .catch(function (e) {
              c.value = !0;
            });
        },
        u = e.ref("500px"),
        d = e.ref(0),
        s = e.ref([]),
        v = e.ref([{}, {}]),
        f = e.ref([]),
        b = e.ref(null),
        p = e.ref(!1),
        h = function () {
          e.StockBridge.ENV === e.EnvTypeEnum.MP
            ? e.wx$1
                .createIntersectionObserver(o)
                .relativeToViewport()
                .observe(".content-title", function (e) {
                  0 === e.intersectionRatio ? (p.value = !0) : (p.value = !1);
                })
            : new IntersectionObserver(function (e) {
                var t = e[0].intersectionRatio;
                p.value = 0 === t;
              }).observe(document.querySelector(".content-title"));
        },
        g = e.ref(800),
        y = function (e) {
          setTimeout(function () {
            o.createSelectorQuery()
              .selectAll(".swiper-inner-content")
              .boundingClientRect()
              .exec(function (t) {
                var n,
                  a = (
                    (null == (n = null == t ? void 0 : t[0]) ? void 0 : n[e]) ||
                    {}
                  ).height,
                  r = void 0 === a ? 0 : a;
                r && e === d.value && (g.value = r);
              });
          }, 0);
        },
        m = e.ref(""),
        w = e.computed(function () {
          return ["mpweapp", "stock"].includes("mpweapp");
        });
      return {
        goBack: function () {
          e.StockBridge.routeTo(-1);
        },
        tabs: s,
        curTab: d,
        changeTab: function (e) {
          var t, n;
          e !== d.value &&
            ((d.value = e),
            null == (n = null == (t = b.value) ? void 0 : t.swiper) ||
              n.slideTo(e, 200));
        },
        cbYearList: v,
        swiperHeight: u,
        cbList: f,
        swiperChange: function (e) {
          var t = (null == e ? void 0 : e.detail) || {},
            n = t.current;
          t.source;
          (d.value = n), y(d.value);
        },
        mySwiper: b,
        pointColor: ["#E63535", "#FF891E", "#7A8499"],
        isTabFix: p,
        currSwiperHeight: g,
        name: m,
        cbzyContentRef: i,
        cbzyUtil: r,
        toPDF: function (r) {
          if (r) {
            var o = n.utils.splitSymbol(a.symbol),
              i = { id: r, market: o.market, scode: o.scode };
            e.wx$1.showLoading(),
              t
                .getPDFcontent(i.id)
                .then(function (t) {
                  var n = t.code,
                    a = t.data,
                    r = void 0 === a ? [] : a;
                  if (
                    0 == +n &&
                    Array.isArray(r) &&
                    r.length &&
                    r[0].pdf &&
                    (r[0].pdf.indexOf(".pdf") > 0 ||
                      r[0].pdf.indexOf(".PDF") > 0)
                  ) {
                    var o = t.data[0].pdf.replace("http:", "https:");
                    e.wx$1.downloadFile({
                      url: o,
                      success: function (t) {
                        var n = t.tempFilePath;
                        e.wx$1.hideLoading(),
                          e.wx$1.openDocument({
                            filePath: n,
                            showMenu: !0,
                            success: function () {
                              e.wx$1.hideLoading();
                            },
                            fail: function () {
                              e.wx$1.hideLoading();
                            },
                          });
                      },
                      fail: function () {
                        e.wx$1.hideLoading();
                      },
                    });
                  } else e.wx$1.hideLoading(), e.StockBridge.routeTo({ path: "/pages/newsCon/newsDetail/main", query: i });
                })
                .catch(function (t) {
                  e.wx$1.hideLoading();
                });
          }
        },
        getUnit: function (e) {
          return /万|亿/.exec(e) ? "" : "元";
        },
        netError: c,
        getSummaryDetailData: l,
        isClassic: w,
      };
    },
  });
Array || (e.resolveComponent("cbzy-content") + e.resolveComponent("status"))();
var i = e._export_sfc(o, [
  [
    "render",
    function (t, n, a, r, o, i) {
      return e.e(
        {
          a: e.t(t.stockName),
          b: e.f(t.tabs, function (n, a, r) {
            return {
              a: e.t(t.isTabFix ? n.text.slice(0, -1) : n.text),
              b: n.value,
              c: e.n(t.curTab == a ? "activemini" : ""),
              d: e.o(
                function (e) {
                  return t.changeTab(a);
                },
                1314,
                n.value
              ),
            };
          }),
          c: e.n(t.isTabFix ? "tab-container-fixed" : ""),
          d: e.f(t.cbList, function (n, a, r) {
            return {
              a: e.f(n[1], function (n, a, o) {
                return e.e(
                  { a: e.t(n.season), b: !n.data.report },
                  (n.data.report, {}),
                  {
                    c:
                      t.cbzyUtil.handleData(n.data.finance_indicator).length >
                      0,
                  },
                  t.cbzyUtil.handleData(n.data.finance_indicator).length > 0
                    ? {
                        d: e.sr("cbzyContentRef", "5a6146e7-0-" + r + "-" + o, {
                          f: 1,
                        }),
                        e: "5a6146e7-0-" + r + "-" + o,
                        f: e.p({ data: n.data.finance_indicator }),
                      }
                    : {},
                  { g: n.data.zysr_indicator.length > 0 },
                  n.data.zysr_indicator.length > 0
                    ? {
                        h: e.f(n.data.zysr_indicator, function (n, a, r) {
                          return {
                            a: e.t(n.name),
                            b: e.t(n.zb),
                            c: e.n(
                              parseFloat(n.zb) < 0 ? "zb-red" : "zb-green"
                            ),
                            d: e.t(n.income + t.getUnit(n.income)),
                            e: a,
                          };
                        }),
                      }
                    : {},
                  { i: n.data.report },
                  n.data.report
                    ? {
                        j: e.t(n.cbFileName),
                        k: e.o(
                          function (e) {
                            return t.toPDF(n.data.report);
                          },
                          1315,
                          a
                        ),
                      }
                    : {},
                  { l: a }
                );
              }),
              b: a,
            };
          }),
          e: t.curTab,
          f: "".concat(t.currSwiperHeight, "px"),
          g: e.o(function () {
            return t.swiperChange && t.swiperChange.apply(t, arguments);
          }, 1316),
          h: !t.netError,
          i: t.netError,
        },
        t.netError
          ? {
              j: e.o(t.getSummaryDetailData, 1317),
              k: e.p({ "is-simple-mode": !0, type: "error" }),
            }
          : {},
        { l: e.n(t.isClassic ? "zxg-logo-tencent" : "zxg-logo") }
      );
    },
  ],
  ["__scopeId", "data-v-5a6146e7"],
]);
wx.createComponent(i);
var c = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtc3VicGFnZS9maW5hbmNlLXBhZ2VzL3BhZ2VzL21wL0NienkudnVl =
  c),
  (exports.cbzyUtil = r);
