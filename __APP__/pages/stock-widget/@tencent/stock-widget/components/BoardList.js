var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (a, r) {
      var o = function (t) {
          try {
            d(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            d(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        d = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(o, s);
        };
      d((n = n.apply(t, e)).next());
    });
  },
  n = require("../api/index.js"),
  a = require("../util/const.js"),
  r = require("../../../../../common/vendor.js"),
  o = {
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    components: {
      AddFav: function () {
        return "./addFav.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      moduleData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        zeroValue: [
          "",
          "0.00",
          "0.0%",
          "0.00%",
          "0",
          "0.00万",
          "0万",
          "0亿",
          "-0.00万",
          "0.00亿",
          "0手",
        ],
        plateData: [],
        titleStyle: "table-header-one",
        darkStyle: "",
        stocksStr: "",
        stocksAddStatus: {},
        columnSmallClsObj: {},
      };
    },
    computed: {
      sortValue: function () {
        var t = this.data,
          e = t.time,
          n = t.sortValue,
          r = a.STORT_VALUE_MAP[e];
        return (r ? r[n] : n) || n;
      },
      list: function () {
        var t = this.data.list;
        return (void 0 === t ? "" : t).split(",");
      },
      textList: function () {
        var t = this.data.textList;
        return (void 0 === t ? "" : t).split(",");
      },
      listData: function () {
        var t = this.data.time;
        return this.textList.map(function (e) {
          var n = a.COLUMN_KEY_MAP[t];
          return (n ? n[e] : e) || e;
        });
      },
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      "dark" === this.data.theme && (this.darkStyle = "black"),
                      (t.next = 3),
                      this.getData()
                    );
                  case 3:
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
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a,
              r,
              o,
              s,
              d,
              i,
              c,
              l = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        n.StockAPiService.getPlateList(
                          {
                            board_code: this.data.plate,
                            sort_type: this.sortValue,
                            direct: "0" === this.data.stor ? "up" : "down",
                            count: this.data.top,
                          },
                          this.helper.request
                        )
                      );
                    case 2:
                      if (
                        ((r = t.sent),
                        (o = []),
                        !(r && r.data && r.data.rank_list))
                      ) {
                        t.next = 12;
                        break;
                      }
                      if (
                        (r.data.rank_list.map(function (t) {
                          return (
                            (t.symbol = t.code),
                            (t.market = t.code.slice(0, 2)),
                            (t.code = t.code.slice(2)),
                            o.push(t.symbol),
                            (t.north_ff_net_in_d5 = l.formatProfit(
                              t.north_ff_net_in_d5
                            )),
                            (t.north_ff_net_in_d20 = l.formatProfit(
                              t.north_ff_net_in_d20
                            )),
                            (t.north_ff_net_in_d60 = l.formatProfit(
                              t.north_ff_net_in_d60
                            )),
                            (t.north_ff_net_in_w52 = l.formatProfit(
                              t.north_ff_net_in_w52
                            )),
                            (t.north_ff_net_in_y = l.formatProfit(
                              t.north_ff_net_in_y
                            )),
                            (t.net_profits = l.formatNetProfits(t.net_profits)),
                            (t.volume = l.formatVolume(t.volume)),
                            (t.zljlr_d5 = l.formatTurnover(t.zljlr_d5)),
                            (t.zljlr_d20 = l.formatTurnover(t.zljlr_d20)),
                            (t.turnover = l.formatTurnover(t.turnover)),
                            (t.zdStyle = l.getUpDownClassName(t.zd)),
                            (t.zdfStyle = l.getUpDownClassName(t.zdf)),
                            (t.zdf_d5Style = l.getUpDownClassName(t.zdf_d5)),
                            (t.zdf_d20Style = l.getUpDownClassName(t.zdf_d20)),
                            (t.zdf_d60Style = l.getUpDownClassName(t.zdf_d60)),
                            (t.zdf_yStyle = l.getUpDownClassName(t.zdf_y)),
                            (t.zfStyle = l.getUpDownClassName(t.zf)),
                            (t.zfStyle = l.getUpDownClassName(t.zf)),
                            (t.zd = "".concat(t.zd)),
                            (t.zdf = "".concat(t.zdf, "%")),
                            (t.zdf_d5 = "".concat(t.zdf_d5, "%")),
                            (t.zdf_d20 = "".concat(t.zdf_d20, "%")),
                            (t.zdf_w52 = "".concat(t.zdf_w52, "%")),
                            (t.zdf_d60 = "".concat(t.zdf_d60, "%")),
                            (t.zdf_y = "".concat(t.zdf_y, "%")),
                            (t.growth = "".concat(t.growth, "%")),
                            (t.hsl = "".concat(t.hsl, "%")),
                            (t.zf = "".concat(t.zf, "%")),
                            (t.agency_growth = "".concat(t.agency_growth, "%")),
                            (t.zsz = "".concat(t.zsz, "亿")),
                            (t.ltsz = "".concat(t.ltsz, "亿")),
                            (t.zljlr_d60 = "--"),
                            (t.zljlr_w52 = "--"),
                            (t.zljlr_y = "--"),
                            (t.agency_rising_space = "".concat(
                              t.agency_rising_space,
                              "%"
                            )),
                            l.listData.forEach(function (e) {
                              if ("code" !== e) {
                                var n = l.getbodyFontSizeCls(l.listData, t[e]);
                                n && (l.columnSmallClsObj[e] = n);
                              }
                            }),
                            t
                          );
                        }),
                        (this.stocksStr = o.join(",")),
                        (this.plateData = r.data.rank_list),
                        (s =
                          (null == (a = this.helper) ? void 0 : a.env) || {}),
                        (d = s.__WZQ__),
                        (i = s.__MP__),
                        (c = s.__WZQMP__),
                        (t.t0 = i || d),
                        !t.t0)
                      ) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.next = 11), this.getStocksAddStatus(this.stocksStr)
                      );
                    case 11:
                      c && this.reportStocksBrow();
                    case 12:
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
      getStocksAddStatus: function (a) {
        return e(
          this,
          null,
          t().mark(function e() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        n.StockAPiService.queryStocksAddStatus(a, this.helper)
                      );
                    case 3:
                      (r = t.sent) &&
                        0 === r.code &&
                        r.data &&
                        (this.stocksAddStatus = r.data),
                        (t.next = 9);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0));
                    case 9:
                    case "end":
                      return t.stop();
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
        if (this.stocksStr) {
          var e = [];
          this.plateData.map(function (n) {
            e.push(t.stocksAddStatus[n.symbol]);
          }),
            this.$emit("report", "news_bangdan_widget_fav_stock_brow", {
              fchannel_id_fm_i: "Iwp00p000l129",
              foperation_purpose: "zixuan",
              stocklist: this.stocksStr,
              hasaddlist: e.join(","),
            });
        }
      },
      getUpDownClassName: function (t) {
        var e = Number(t);
        return e > 0 ? "red" : "0.00" === e ? "ping" : "green";
      },
      getbodyFontSizeCls: function (t, e) {
        return (5 === t.length && e.length > 5) ||
          (4 === t.length && e.length > 7) ||
          (3 === t.length && e.length > 10)
          ? "table-body-small"
          : "";
      },
      getHeaderFontSizeCls: function (t, e) {
        return (5 === t.length && e.length > 8) ||
          (4 === t.length && e.length > 10) ||
          (3 === t.length && e.length > 16)
          ? "table-header-small"
          : "";
      },
      formatProfit: function (t) {
        return Math.abs(t) < 1e8
          ? "".concat((t = Math.round(t / 100) / 100), "万")
          : "".concat((t = Math.round(t / 1e6) / 100), "亿");
      },
      formatVolume: function (t) {
        return Math.abs(t) < 1e4
          ? "".concat(t)
          : Math.abs(t) < 1e8
          ? "".concat((t = Math.round(t / 100) / 100), "万")
          : "".concat((t = Math.round(t / 1e6) / 100), "亿");
      },
      formatTurnover: function (t) {
        return Math.abs(t) < 1e4
          ? "".concat(t, "万")
          : "".concat((t = Math.round(t / 100) / 100), "亿");
      },
      formatNetProfits: function (t) {
        return Math.abs(t) < 1e8
          ? "".concat((t = Math.round(t / 100) / 100), "万")
          : "".concat((t = Math.round(t / 1e6) / 100), "亿");
      },
      dataReport: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
    },
  };
Array || r.resolveComponent("AddFav")();
var s = r._export_sfc(o, [
  [
    "render",
    function (t, e, n, a, o, s) {
      return {
        a: r.t(n.data.title),
        b: r.f(s.list, function (t, e, n) {
          return { a: r.t(t), b: r.n(s.getHeaderFontSizeCls(s.list, t)), c: e };
        }),
        c: r.n("column-".concat(s.list.length)),
        d: r.f(o.plateData, function (t, e, a) {
          return {
            a: r.f(s.listData, function (e, n, a) {
              return r.e(
                { a: "code" === e },
                "code" === e
                  ? r.e(
                      { b: r.t(t.name), c: "sh" === t.market },
                      (t.market, {}),
                      { d: "hk" === t.market },
                      (t.market, {}),
                      { e: "sz" === t.market },
                      (t.market, {}),
                      { f: "us" === t.market },
                      (t.market, {}),
                      { g: r.t(t[e]) }
                    )
                  : t[e]
                  ? r.e(
                      {
                        i:
                          -1 ===
                          [
                            "zdf",
                            "zdf_d5",
                            "zdf_d20",
                            "zdf_d60",
                            "zdf_y",
                            "zd",
                          ].indexOf(e),
                      },
                      -1 ===
                        [
                          "zdf",
                          "zdf_d5",
                          "zdf_d20",
                          "zdf_d60",
                          "zdf_y",
                          "zd",
                        ].indexOf(e)
                        ? {
                            j: r.t(
                              o.zeroValue.indexOf(t[e]) > -1 ? "--" : t[e]
                            ),
                            k: r.n(e),
                            l: r.n(o.columnSmallClsObj[e] || ""),
                          }
                        : {
                            m: r.t(
                              o.zeroValue.indexOf(t[e]) > -1 ? "--" : t[e]
                            ),
                            n: r.n(e),
                            o: r.n(t["".concat(e, "Style")] || ""),
                            p: r.n(o.columnSmallClsObj[e] || ""),
                          }
                    )
                  : {},
                { h: t[e], q: n }
              );
            }),
            b: r.o(s.dataReport, 5641, e),
            c: "0e9d8e6b-0-" + a,
            d: r.p({
              hideText: !0,
              market: t.market,
              scode: t.code,
              stockInitailAdded: o.stocksAddStatus[t.symbol],
              position: "right",
              indexPos: e,
              pageType: n.pageType,
              newsId: n.newsId,
              type: n.moduleData.type,
            }),
            e: e,
          };
        }),
        e: r.n("column-".concat(s.list.length)),
        f: r.n("padding-".concat(s.list.length)),
      };
    },
  ],
  ["__scopeId", "data-v-0e9d8e6b"],
]);
wx.createComponent(s);
