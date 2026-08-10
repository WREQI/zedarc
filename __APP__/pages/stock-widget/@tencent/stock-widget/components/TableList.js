var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, a) {
      var o = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        i = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(o, i);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  n = require("../api/index.js"),
  r = require("../util/format.js"),
  a = require("../../../../../common/vendor.js"),
  o = {},
  i = {
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    props: {
      stocks: { type: String, default: "" },
      theme: { type: String, default: "white" },
      tableImgTitle: {
        type: Object,
        default: function () {
          return { white: "", black: "" };
        },
      },
      thead: { type: Array, default: [] },
      cloumeKeys: { type: Array, default: [] },
      list: { type: Array, default: [] },
      redUp: { type: Boolean, default: !0 },
      channelNumber: { type: String, default: "" },
      toggleAddFav: { type: Boolean, default: !1 },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      type: { type: String, default: "" },
      tableTitle: { type: String, default: "" },
      colorCloume: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    components: {
      AddFav: function () {
        return "./addFav.js";
      },
    },
    data: function () {
      return { tableTitleImageStyle: {}, classColorArr: [], dataList: [] };
    },
    computed: {
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      themeStatu: function () {
        return "black" === this.theme ? this.theme : "white";
      },
    },
    mounted: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), this.getStocksAddStatus(this.stocks);
                  case 2:
                    this.classColor(), this.reportStockBrow();
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    methods: {
      getStocksAddStatus: function (r) {
        return e(
          this,
          null,
          t().mark(function e() {
            var a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.env.__APP__) {
                        t.next = 10;
                        break;
                      }
                      return (
                        (t.prev = 1),
                        (t.next = 4),
                        n.StockAPiService.queryStocksAddStatus(r, this.helper)
                      );
                    case 4:
                      (a = t.sent) && 0 === a.code && a.data && (o = a.data),
                        (t.next = 10);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(1));
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 8]]
            );
          })
        );
      },
      gotoStockDetail: function (t) {
        this.$emit("gotoStockDetail", t);
      },
      report: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
      classColor: function () {
        var t = this,
          e = this.list;
        e.forEach(function (n, a) {
          (n.addedStatus = o[n.symbol]),
            t.cloumeKeys.forEach(function (o) {
              t.colorCloume.length > 0
                ? t.colorCloume.forEach(function (i) {
                    e[a][o] =
                      i === o
                        ? { text: n[o], class: "" }
                        : { text: n[o], class: r.setColor(n[o], t.redUp) };
                  })
                : (e[a][o] = { text: n[o], class: r.setColor(n[o], t.redUp) });
            });
        }),
          (this.dataList = this.list);
      },
      reportStockBrow: function () {
        if (this.env.__WZQMP__ && this.dataList.length > 0) {
          var t = [],
            e = [],
            n = [];
          this.dataList.map(function (r, a) {
            n.push(r.symbol),
              e.push("".concat(a)),
              t.push(1 === o[r.symbol] ? 1 : 0);
          }),
            this.$emit("report", "news_mobule_widget_fav_stock_brow", {
              fchannel_id_fm_i: "Iwp00p000l129",
              foperation_purpose: "zixuan",
              positionlist: e.join(","),
              stocklist: n.join(","),
              hasaddlist: t.join(","),
            });
        }
      },
    },
  };
Array || a.resolveComponent("AddFav")();
var s = a._export_sfc(i, [
  [
    "render",
    function (t, e, n, r, o, i) {
      return a.e(
        {
          a: a.t(n.tableTitle),
          b: a.n(n.tableTitle ? "body-title" : "body-title-image"),
          c: "url(".concat(n.tableImgTitle[i.themeStatu], ")"),
          d: a.f(n.thead, function (t, e, n) {
            return { a: a.t(t), b: a.n(t.class), c: e };
          }),
          e: o.dataList.length > 0,
        },
        o.dataList.length > 0
          ? {
              f: a.f(o.dataList, function (t, e, r) {
                return {
                  a: a.f(n.cloumeKeys, function (e, n, r) {
                    return a.e(
                      { a: "name" === e },
                      "name" === e
                        ? {
                            b: a.t(t[e].text),
                            c: a.n(t.iconClass),
                            d: a.t(t.scode),
                          }
                        : t[e]
                        ? { f: a.t(t[e].text), g: a.n(t[e].class) }
                        : {},
                      { e: t[e], h: n }
                    );
                  }),
                  b: a.o(i.report, 5819, e),
                  c: "0a770a77-0-" + r,
                  d: a.p({
                    hideText: !0,
                    market: t.market,
                    scode: t.scode,
                    stockInitailAdded: t.addedStatus,
                    position: "right",
                    indexPos: e,
                    pageType: n.pageType,
                    newsId: n.newsId,
                    type: n.type,
                    channelNumber: n.channelNumber,
                  }),
                  e: e,
                  f: a.o(
                    function (e) {
                      return i.gotoStockDetail(t);
                    },
                    5820,
                    e
                  ),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0a770a77"],
]);
wx.createComponent(s);
