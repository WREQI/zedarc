var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../stock-news-core/utils/routerJump.js"),
  s = require("../../../../../../common/vendor.js"),
  a = "morningreport_qt_key",
  e = {
    name: "MorningReportHwscQuote",
    components: {
      Empty: function () {
        return "./Empty.js";
      },
    },
    props: ["wzqConfig", "newsId"],
    data: function () {
      return {
        globalStocks: [
          "sh000001",
          "sz399001",
          "sz399006",
          "r_hkHSI",
          "r_hkHSTECH",
          "t_usDJI",
          "t_usINX",
          "t_usIXIC",
          "ukUKX",
          "fxCNH",
          "fuGC",
          "fuSI",
          "fuCL",
          "hf_OIL",
        ],
        stocksQtData: {},
        showDialog: !1,
        noDetailCode: ["ukUKX", "fxCNH", "fuGC", "fuSI", "fuCL", "hf_OIL"],
      };
    },
    computed: {
      globalIndex: function () {
        return this.globalStocks.slice(0, 9);
      },
      otherAsset: function () {
        return this.globalStocks.slice(9, 14);
      },
    },
    created: function () {
      return (
        (o = this),
        null,
        (e = t().mark(function o() {
          var e;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0), (t.next = 3), s.StockBridge.getStorage(a)
                    );
                  case 3:
                    (e = t.sent) &&
                      Object.keys(e).length > 0 &&
                      (this.stocksQtData = e),
                      (t.next = 9);
                    break;
                  case 7:
                    (t.prev = 7), (t.t0 = t.catch(0));
                  case 9:
                    this.getStocksQtData();
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            o,
            this,
            [[0, 7]]
          );
        })),
        new Promise(function (t, s) {
          var a = function (t) {
              try {
                n(e.next(t));
              } catch (t) {
                s(t);
              }
            },
            c = function (t) {
              try {
                n(e.throw(t));
              } catch (t) {
                s(t);
              }
            },
            n = function (o) {
              return o.done ? t(o.value) : Promise.resolve(o.value).then(a, c);
            };
          n((e = e.apply(o, null)).next());
        })
      );
      var o, e;
    },
    methods: {
      stockNameColor: function (t) {
        return !t || !this.noDetailCode || this.noDetailCode.indexOf(t) > -1
          ? "var(--color-heavygray)"
          : "#4774B3";
      },
      quoteBgColor: function (t) {
        return t % 2 == 0 ? "#E635350F" : "var(--fill-content-layer)";
      },
      zdfText: function (t) {
        if (t && t.length > 0) {
          var o = parseFloat(t).toFixed(2);
          return o > 0 ? "+".concat(o, "%") : "".concat(o, "%");
        }
        return "";
      },
      zdfColor: function (t) {
        if (t && t.length > 0) {
          var o = parseFloat(t);
          if (o > 0) return "fluc-up";
          if (o < 0) return "fluc-down";
        }
        return "fluc-ping";
      },
      getStocksQtData: function () {
        var t = this;
        if (this.globalStocks && !(this.globalStocks.length <= 0)) {
          var o = "https://sqt.gtimg.cn/utf8?fmt=json&q="
            .concat(this.globalStocks.join(","), "&r=")
            .concat(Math.random());
          s.StockBridge.request(o, "GET")
            .then(function (o) {
              if (o) {
                var e = o,
                  c = {};
                for (var n in e) {
                  var r = e[n];
                  if (r && !(r.length <= 0)) {
                    "hf_OIL" === n && (r = r[0].split(","));
                    var i = [];
                    n.startsWith("fx") && r && r.length >= 14
                      ? (i.push(r[1]), i.push(r[3]), i.push(r[13]))
                      : r && r.length >= 33
                      ? (i.push(r[1]), i.push(r[3]), i.push(r[32]))
                      : "hf_OIL" === n &&
                        r &&
                        r.length >= 14 &&
                        (i.push(r[13]), i.push(r[0]), i.push(r[1])),
                      (c["".concat(n)] = i);
                  }
                }
                t.stocksQtData = c;
                try {
                  s.StockBridge.setStorage(a, t.stocksQtData);
                } catch (t) {}
              }
            })
            .catch(function (t) {});
        }
      },
      wzqKeepPos: function () {
        this.$emit("wzqKeepPos");
      },
      goDetail: function (t) {
        var a = this;
        if (!(t.length <= 2)) {
          var e = t;
          if (
            ((e.startsWith("r_") || e.startsWith("t_")) &&
              (e = e.substring(2, e.length)),
            !(e.length <= 2))
          )
            if (this.noDetailCode.indexOf(e) > -1) {
              this.showDialog = !0;
              var c = setTimeout(function () {
                (a.showDialog = !1), clearTimeout(c);
              }, 2e3);
            } else {
              this.wzqKeepPos();
              var n = { newsid: this.newsId, stocklist: e, stockid: e };
              s.StockBridge.report("news.detail.hwsc_stock_click", {
                newsid: this.newsId,
                stockid: e,
              }),
                o.routerJump.gotoDetail(n, this.wzqConfig.Helper);
            }
        }
      },
    },
  };
Array || s.resolveComponent("Empty")();
var c = s._export_sfc(e, [
  [
    "render",
    function (t, o, a, e, c, n) {
      return s.e(
        {
          a: s.f(n.globalIndex, function (t, o, a) {
            return s.e(
              {
                a:
                  c.stocksQtData &&
                  Object.keys(c.stocksQtData).length > 0 &&
                  c.stocksQtData["".concat(t)],
              },
              c.stocksQtData &&
                Object.keys(c.stocksQtData).length > 0 &&
                c.stocksQtData["".concat(t)]
                ? s.e(
                    { b: c.stocksQtData["".concat(t)][0] },
                    c.stocksQtData["".concat(t)][0]
                      ? {
                          c: s.t(c.stocksQtData["".concat(t)][0]),
                          d: n.stockNameColor(t),
                        }
                      : {},
                    { e: c.stocksQtData["".concat(t)][1] },
                    c.stocksQtData["".concat(t)][1]
                      ? { f: s.t(c.stocksQtData["".concat(t)][1]) }
                      : {},
                    { g: c.stocksQtData["".concat(t)][2] },
                    c.stocksQtData["".concat(t)][2]
                      ? {
                          h: s.t(n.zdfText(c.stocksQtData["".concat(t)][2])),
                          i: s.n(n.zdfColor(c.stocksQtData["".concat(t)][2])),
                        }
                      : {},
                    {
                      j: n.quoteBgColor(o),
                      k: s.o(
                        function (o) {
                          return n.goDetail(t);
                        },
                        4906,
                        o
                      ),
                    }
                  )
                : {},
              { l: o }
            );
          }),
          b: s.f(n.otherAsset, function (t, o, a) {
            return s.e(
              {
                a:
                  c.stocksQtData &&
                  Object.keys(c.stocksQtData).length > 0 &&
                  c.stocksQtData["".concat(t)],
              },
              c.stocksQtData &&
                Object.keys(c.stocksQtData).length > 0 &&
                c.stocksQtData["".concat(t)]
                ? s.e(
                    { b: c.stocksQtData["".concat(t)][0] },
                    c.stocksQtData["".concat(t)][0]
                      ? {
                          c: s.t(c.stocksQtData["".concat(t)][0]),
                          d: n.stockNameColor(t),
                        }
                      : {},
                    { e: c.stocksQtData["".concat(t)][1] },
                    c.stocksQtData["".concat(t)][1]
                      ? { f: s.t(c.stocksQtData["".concat(t)][1]) }
                      : {},
                    { g: c.stocksQtData["".concat(t)][2] },
                    c.stocksQtData["".concat(t)][2]
                      ? {
                          h: s.t(n.zdfText(c.stocksQtData["".concat(t)][2])),
                          i: s.n(n.zdfColor(c.stocksQtData["".concat(t)][2])),
                        }
                      : {},
                    {
                      j: n.quoteBgColor(o),
                      k: s.o(
                        function (o) {
                          return n.goDetail(t);
                        },
                        4907,
                        o
                      ),
                    }
                  )
                : {},
              { l: o }
            );
          }),
          c: c.showDialog,
        },
        (c.showDialog, {})
      );
    },
  ],
  ["__scopeId", "data-v-900d21cb"],
]);
wx.createComponent(c);
