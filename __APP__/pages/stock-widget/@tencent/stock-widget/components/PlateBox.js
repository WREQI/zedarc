var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  p = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e, n) {
    return new Promise(function (r, o) {
      var s = function (t) {
          try {
            i(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            i(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(s, a);
        };
      i((n = n.apply(t, e)).next());
    });
  },
  d = require("../util/tools.js"),
  u = require("../api/index.js"),
  h = require("../../../../../common/vendor.js"),
  f = {
    name: "PlateBox",
    inject: ["helper"],
    components: {
      AddFav: function () {
        return "./addFav.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "white" },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      moduleData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    computed: {
      plateId: function () {
        var t;
        return (null == (t = this.params) ? void 0 : t.plateId) || "";
      },
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      showRightAddFav: function () {
        return (
          (this.env.__APP__ || this.env.__WZQ__ || this.env.__MP__) &&
          !this.env.isBroker
        );
      },
    },
    data: function () {
      return {
        stocksList: [],
        plateInfo: {},
        redUp: !0,
        transPlateId: "",
        plateSortType: 1,
        stocksStr: "",
        stocksAddStatus: {},
      };
    },
    mounted: function () {
      var t = this;
      if (
        (this.env.__APP__ &&
          this.helper.shy.getSystemInfo(function (e) {
            t.redUp = "redup" === e.flucShowMode;
          }),
        this.plateId && this.plateId.includes("-"))
      ) {
        var e = this.plateId.split("-");
        (this.transPlateId = e[0]), (this.plateSortType = e[1]);
      }
      this.transPlateId.startsWith("ph") ||
        this.transPlateId.startsWith("pu") ||
        this.getPlateInfo();
    },
    methods: {
      getStyle: function (t) {
        return t > 0
          ? this.redUp
            ? "up"
            : "down"
          : t < 0
          ? this.redUp
            ? "down"
            : "up"
          : "flat";
      },
      formatNum: function (t) {
        return isNaN(t)
          ? isNaN(t) || (t / this.unit).toFixed(1)
          : Math.abs(t) > 1e8
          ? "".concat((t / 1e8).toFixed(1), "亿")
          : Math.abs(t) > 1e4
          ? "".concat((t / 1e4).toFixed(1), "万")
          : (t / 1).toFixed(1);
      },
      getPlateInfo: function () {
        return l(
          this,
          null,
          n().mark(function t() {
            var e, r, o;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = {
                          r: Math.random(),
                          q: "pt".concat(this.transPlateId),
                          fmt: "json",
                        }),
                        (t.next = 3),
                        u.StockAPiService.getPlateInfo(e, this.helper.request)
                      );
                    case 3:
                      if (!(r = t.sent) || !r["pt".concat(this.transPlateId)]) {
                        t.next = 10;
                        break;
                      }
                      return (
                        (o = r["pt".concat(this.transPlateId)]),
                        (this.plateInfo = {
                          stockName: o[1] || "--",
                          stockCode: o[2] || "--",
                          price: o[3] || "--",
                          change: o[31]
                            ? ""
                                .concat(+o[31] >= 0 ? "+" : "")
                                .concat((+o[31]).toFixed(2))
                            : "--",
                          percent: o[32]
                            ? ""
                                .concat(+o[32] >= 0 ? "+" : "")
                                .concat((+o[32]).toFixed(2))
                            : "--",
                          color: this.getStyle(o[31] || 0) || "",
                        }),
                        this.plateSortType ||
                          (this.plateSortType = +o[31] >= 0 ? 1 : 2),
                        (t.next = 10),
                        this.getPlateStocks()
                      );
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getPlateStocks: function () {
        return l(
          this,
          null,
          n().mark(function r() {
            var l,
              h,
              f,
              _,
              k,
              v,
              g,
              m,
              S,
              y = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (l = this.env || {}),
                        (h = l.__WZQ__),
                        (f = l.isBroker),
                        (_ = l.__MP__),
                        l.__GUOSEN__,
                        (k = l.__WZQMP__),
                        (n.prev = 1),
                        ((v = {
                          exchange: 12,
                          need_brief: 1,
                          plate_code: this.transPlateId,
                          plate_level: 2,
                          sort_field: "change_percent",
                          sort_type: this.plateSortType,
                          source: h || f || _ ? "wzq" : "zxg",
                          stocks_type: 3,
                          time: new Date().getTime(),
                          user_type: h || f || _ ? 5 : 4,
                        }).sign = d.getXGSign(v, this.helper.env)),
                        (n.next = 6),
                        u.StockAPiService.getPlateStocks(v, this.helper.request)
                      );
                    case 6:
                      if (
                        !(
                          (g = n.sent) &&
                          "0" === g.retcode &&
                          g.stocks &&
                          g.stocks.stocks_list
                        )
                      ) {
                        n.next = 16;
                        break;
                      }
                      if (
                        ((m = g.stocks.stocks_list || []),
                        (S = []),
                        (this.stocksList = m.slice(0, 5).map(function (n) {
                          var r = n.stock_code,
                            l = r.split("."),
                            d = e(l, 2),
                            u = d[0],
                            h = d[1],
                            f = h.toLowerCase();
                          S.push(f + u);
                          var _,
                            k,
                            v = h.toUpperCase();
                          return (
                            "sh" === h.toLowerCase() &&
                              r &&
                              /^688/.test(r) &&
                              (v = "KE"),
                            "sz" === h.toLowerCase() &&
                              r &&
                              /^30/.test(r) &&
                              (v = "CHUANG"),
                            (_ = (function (e, n) {
                              for (var r in n || (n = {}))
                                i.call(n, r) && p(e, r, n[r]);
                              if (a) {
                                var o,
                                  s = t(a(n));
                                try {
                                  for (s.s(); !(o = s.n()).done; ) {
                                    r = o.value;
                                    c.call(n, r) && p(e, r, n[r]);
                                  }
                                } catch (t) {
                                  s.e(t);
                                } finally {
                                  s.f();
                                }
                              }
                              return e;
                            })({}, n)),
                            (k = {
                              netText: y.formatNum(n.main_net_inflow),
                              chgText: ""
                                .concat(n.change_percent >= 0 ? "+" : "")
                                .concat(n.change_percent.toFixed(2), "%"),
                              stColor: y.getStyle(n.price_change),
                              netColor: y.getStyle(n.main_net_inflow),
                              chgColor: y.getStyle(n.change_percent),
                              class: "stock-icon-".concat(v),
                              codeStr: u,
                              market: f,
                              stockId: f + u,
                            }),
                            o(_, s(k))
                          );
                        })),
                        (this.stocksStr = S.join(",")),
                        (n.t0 = _ || h),
                        !n.t0)
                      ) {
                        n.next = 16;
                        break;
                      }
                      return (
                        (n.next = 15), this.getStocksAddStatus(this.stocksStr)
                      );
                    case 15:
                      k && this.reportStocksBrow();
                    case 16:
                      n.next = 20;
                      break;
                    case 18:
                      (n.prev = 18), (n.t1 = n.catch(1));
                    case 20:
                    case "end":
                      return n.stop();
                  }
              },
              r,
              this,
              [[1, 18]]
            );
          })
        );
      },
      getStocksAddStatus: function (t) {
        return l(
          this,
          null,
          n().mark(function e() {
            var r;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        u.StockAPiService.queryStocksAddStatus(t, this.helper)
                      );
                    case 3:
                      (r = e.sent) &&
                        0 === r.code &&
                        r.data &&
                        (this.stocksAddStatus = r.data),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 7]]
            );
          })
        );
      },
      reportStocksBrow: function () {
        var t = this;
        if (this.showRightAddFav) {
          var e = [];
          this.stocksList.map(function (n) {
            e.push(t.stocksAddStatus[n.stockId]);
          }),
            this.$emit("report", "news_platestock_widget_fav_stock_brow", {
              fchannel_id_fm_i: "Iwp00p000l129",
              foperation_purpose: "zixuan",
              stocklist: this.stocksStr,
              hasaddlist: e.join(","),
            });
        }
      },
      dataReport: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
      toggleAdded: function (t) {
        this.$emit("toggleAddFav", { toAdd: t });
      },
    },
  };
Array || h.resolveComponent("AddFav")();
var _ = h._export_sfc(f, [
  [
    "render",
    function (t, e, n, r, o, s) {
      return h.e(
        { a: o.stocksList.length },
        o.stocksList.length
          ? h.e(
              { b: o.plateInfo && o.plateInfo.stockName },
              o.plateInfo && o.plateInfo.stockName
                ? {
                    c: h.t(
                      ""
                        .concat(o.plateInfo.stockName, "(")
                        .concat(o.plateInfo.stockCode, ")")
                    ),
                    d: h.t(o.plateInfo.price),
                    e: h.t(o.plateInfo.change),
                    f: h.t(o.plateInfo.percent),
                    g: h.n(o.plateInfo.color),
                  }
                : {},
              {
                h: h.f(o.stocksList, function (t, e, r) {
                  return h.e(
                    {
                      a: h.t(t.stock_name),
                      b: h.n(t.class),
                      c: h.t(t.codeStr),
                      d: h.t(t.price),
                      e: h.t(t.netText),
                      f: h.n(t.netColor),
                      g: h.t(t.chgText),
                      h: h.n(t.chgColor),
                    },
                    s.showRightAddFav
                      ? {
                          i: h.o(s.dataReport, 5640, e),
                          j: "32276f84-0-" + r,
                          k: h.p({
                            hideText: !0,
                            market: t.market,
                            scode: t.codeStr,
                            stockInitailAdded: o.stocksAddStatus[t.stockId],
                            position: "right",
                            indexPos: e,
                            pageType: n.pageType,
                            newsId: n.newsId,
                            type: n.moduleData.type,
                          }),
                        }
                      : {},
                    { l: e }
                  );
                }),
                i: s.showRightAddFav,
                j: h.n(s.env.__MP__ ? "mp-table" : ""),
              }
            )
          : {},
        { k: h.n(n.theme) }
      );
    },
  ],
  ["__scopeId", "data-v-32276f84"],
]);
wx.createComponent(_);
