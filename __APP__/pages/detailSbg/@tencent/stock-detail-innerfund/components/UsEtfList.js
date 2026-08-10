var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  s = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  d = require("../../../../../common/vendor.js"),
  l = require("../../stock-hq-data/index.js"),
  u = {
    props: {
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
      symbol: { type: String, default: "" },
      pageType: { type: String, default: "" },
    },
    data: function () {
      return {
        cols: { zxj: ["最新价", "price"], zdf: ["涨跌幅", "priceRatio"] },
        list: [],
        showMoreText: !1,
        orderIndex: 1,
        orderDown: !0,
      };
    },
    computed: {
      orderTypes: function () {
        return ["zxj", "zdf"];
      },
    },
    created: function () {
      (this.allList = []), (this.loading = !1);
    },
    mounted: function () {
      this.getData();
    },
    beforeDestroy: function () {
      (this.allList = null), (this.list = null);
    },
    methods: {
      getData: function () {
        return (
          (r = this),
          null,
          (u = e().mark(function r() {
            var u,
              f,
              h,
              p,
              m,
              y = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.loading) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (this.loading = !0),
                        (e.prev = 2),
                        (u = this.cols[this.orderTypes[this.orderIndex]][1]),
                        (f = this.orderDown ? "down" : "up"),
                        "mpweapp",
                        (h =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/rank/us/getList?board_type="
                            .concat(this.symbol, "_ETF&sort_type=")
                            .concat(u, "&direct=")
                            .concat(f, "&app=")
                            .concat("mpweapp")),
                        (e.next = 9),
                        d.StockBridge.request(
                          h,
                          "GET",
                          {},
                          { forceCallback: !0 }
                        ).catch(function () {})
                      );
                    case 9:
                      (p = e.sent) &&
                        0 === p.code &&
                        p.data &&
                        ((this.allList = p.data.rank_list
                          ? p.data.rank_list.slice(0, 200)
                          : []),
                        (this.showMoreText = p.data && +p.data.total > 20),
                        (m = this.showMoreText
                          ? this.allList.slice(0, 20)
                          : this.allList),
                        (this.list = m.map(function (e) {
                          return (
                            (r = (function (e, r) {
                              for (var o in r || (r = {}))
                                c.call(r, o) && s(e, o, r[o]);
                              if (i) {
                                var n,
                                  d = t(i(r));
                                try {
                                  for (d.s(); !(n = d.n()).done; ) {
                                    o = n.value;
                                    a.call(r, o) && s(e, o, r[o]);
                                  }
                                } catch (e) {
                                  d.e(e);
                                } finally {
                                  d.f();
                                }
                              }
                              return e;
                            })({}, e)),
                            (d = {
                              fontSize: y.getFontSize(e.name),
                              formatCode: l.utils.trimScode(e.code.slice(2)),
                              formatZdf: +e.zdf > 0 ? "+".concat(e.zdf) : e.zdf,
                            }),
                            o(r, n(d))
                          );
                          var r, d;
                        }))),
                        this.$emit("loaded", this.list.length),
                        (e.next = 16);
                      break;
                    case 14:
                      (e.prev = 14), (e.t0 = e.catch(2));
                    case 16:
                      this.loading = !1;
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this,
              [[2, 14]]
            );
          })),
          new Promise(function (e, t) {
            var o = function (e) {
                try {
                  i(u.next(e));
                } catch (e) {
                  t(e);
                }
              },
              n = function (e) {
                try {
                  i(u.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(o, n);
              };
            i((u = u.apply(r, null)).next());
          })
        );
        var r, u;
      },
      changeOrder: function (e) {
        this.orderIndex === e
          ? (this.orderDown = !this.orderDown)
          : ((this.orderIndex = e), (this.orderDown = !0)),
          this.getData();
      },
      getFontSize: function (e) {
        return e
          ? e.length <= 7
            ? "0.4rem"
            : e.length <= 12
            ? "0.32rem"
            : e.length <= 16
            ? 0.32 - 0.03 * (e.length - 12) + "rem"
            : "0.28rem"
          : "0.4rem";
      },
      gotoDetail: function (e) {
        var t = l.utils.splitSymbol(e.code),
          r = t.market,
          o = t.scode;
        d.StockBridge.report("hq.stock_us_etf.etf_detail_click", {
          stockid: this.symbol,
          yy_public_str1: "".concat(r, "_").concat(o),
        });
        var n = {
          market: r,
          scode: o,
          name: e.name,
          stockType: e.stock_type || "",
        };
        "wzq" === d.StockBridge.ENV && (n.type = r),
          d.StockRouter.routeTo({ name: "stockdetail", query: n });
      },
      checkMoreList: function () {
        d.StockBridge.report("hq.stock_us_etf.more_click", {
          stockid: this.symbol,
        }),
          d.StockRouter.routeTo({
            name: "rankDetail",
            query: { symbol: this.symbol, type: "etf" },
          });
      },
    },
  },
  f = d._export_sfc(u, [
    [
      "render",
      function (e, t, r, o, n, i) {
        return d.e(
          { a: n.list.length > 0 },
          n.list.length > 0
            ? d.e(
                {
                  b: d.f(i.orderTypes, function (e, t, r) {
                    return {
                      a: d.t(n.cols[e][0]),
                      b: d.n(n.orderIndex !== t || n.orderDown ? "" : "active"),
                      c: d.n(n.orderIndex === t && n.orderDown ? "active" : ""),
                      d: t,
                      e: d.o(
                        function (e) {
                          return i.changeOrder(t);
                        },
                        2896,
                        t
                      ),
                    };
                  }),
                  c: d.f(n.list, function (e, t, r) {
                    return {
                      a: d.t(e.name),
                      b: e.fontSize,
                      c: d.t(e.formatCode),
                      d: d.f(i.orderTypes, function (t, r, o) {
                        return d.e(
                          { a: "zxj" === t },
                          "zxj" === t ? { b: d.t(e.zxj) } : {},
                          { c: "zdf" === t },
                          "zdf" === t
                            ? {
                                d: d.t(e.formatZdf),
                                e: d.n(
                                  e.zdf > 0
                                    ? "rise"
                                    : e.zdf < 0
                                    ? "drop"
                                    : "gray"
                                ),
                              }
                            : {},
                          { f: r }
                        );
                      }),
                      e: e.code,
                      f: d.o(
                        function (t) {
                          return i.gotoDetail(e);
                        },
                        2897,
                        e.code
                      ),
                    };
                  }),
                  d: n.showMoreText,
                },
                n.showMoreText
                  ? {
                      e: d.o(function () {
                        return (
                          i.checkMoreList && i.checkMoreList.apply(i, arguments)
                        );
                      }, 2898),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ef8cbe3c"],
  ]);
wx.createComponent(f);
