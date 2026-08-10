var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var n in r || (r = {})) s.call(r, n) && i(e, n, r[n]);
    if (a) {
      var o,
        u = t(a(r));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          n = o.value;
          c.call(r, n) && i(e, n, r[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return n(e, o(t));
  },
  f = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, s);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  h = require("../Index.js"),
  d = require("../../../../../common/vendor.js"),
  p = {
    props: {
      stocks: {
        type: Array,
        default: function () {
          return [];
        },
      },
      etf: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tips: { type: String, default: "" },
      section: { type: Object, default: function () {} },
      sectionIndex: { type: Number, default: 0 },
      getIndexImageUrl: { type: Function, default: null },
    },
    data: function () {
      return {
        marketConfig: {
          0: { name: "SZ", class: "sz", color: "#EB5A66" },
          1: { name: "SH", class: "sh", color: "#EB5A66" },
          2: { name: "HK", class: "hk", color: "#EB9664" },
          3: { name: "US", class: "us", color: "#4A90E2" },
        },
        localStocks: [],
        lastRefreshTime: "",
        refreshTimer: null,
      };
    },
    computed: {
      isETFMode: function () {
        return !this.stocks || 0 === this.stocks.length;
      },
    },
    created: function () {
      this.fetchStockData(), this.setRefreshInterval();
    },
    beforeDestroy: function () {
      this.refreshTimer && clearInterval(this.refreshTimer);
    },
    methods: {
      updateRefreshTime: function () {
        var e = new Date(),
          t = e.getHours().toString().padStart(2, "0"),
          r = e.getMinutes().toString().padStart(2, "0");
        this.lastRefreshTime = "".concat(t, ":").concat(r);
      },
      setRefreshInterval: function () {
        var e = this;
        this.refreshTimer && clearInterval(this.refreshTimer),
          (this.refreshTimer = setInterval(function () {
            e.fetchStockData();
          }, 3e5));
      },
      parseStockCode: function (e) {
        if (!e) return { market: 0, code: "" };
        var t = String(e).toLowerCase(),
          r = 0,
          n = "";
        return (
          t.startsWith("sz")
            ? ((r = 0), (n = t.slice(2)))
            : t.startsWith("sh")
            ? ((r = 1), (n = t.slice(2)))
            : (n = t),
          { market: r, code: n }
        );
      },
      fetchStockData: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var r,
              n,
              o,
              a,
              s = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0), !this.stocks || 0 === this.stocks.length)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return (
                        (r = this.stocks
                          .map(function (e) {
                            return e.symbol;
                          })
                          .join(",")),
                        (t.next = 5),
                        h.getStockPoint(r)
                      );
                    case 5:
                      (n = t.sent) &&
                        ((o = this.stocks.map(function (e) {
                          var t = n[e.symbol];
                          if (t && t.length >= 32) {
                            var r = parseFloat(t[3]),
                              o = t[32],
                              a = o >= 0;
                            return l(u({}, e), {
                              price: r.toFixed(2),
                              change: "".concat(a ? "+" : "").concat(o, "%"),
                              isUp: a,
                              zdf: o,
                            });
                          }
                          return e;
                        })).sort(function (e, t) {
                          return t.zdf - e.zdf;
                        }),
                        (this.localStocks = o.slice(0, 3))),
                        (t.next = 15);
                      break;
                    case 9:
                      if (this.etf && 0 !== this.etf.length) {
                        t.next = 11;
                        break;
                      }
                      return t.abrupt("return", void (this.localStocks = []));
                    case 11:
                      return (
                        (t.next = 13),
                        Promise.all(
                          this.etf.map(function (t) {
                            return f(
                              s,
                              null,
                              e().mark(function r() {
                                var n,
                                  o,
                                  a,
                                  s = this;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.join(",")),
                                          (e.next = 3),
                                          h.getStockPoint(n)
                                        );
                                      case 3:
                                        if ((o = e.sent)) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return", null);
                                      case 6:
                                        return (
                                          (a = t
                                            .map(function (e) {
                                              var t = o[e];
                                              if (
                                                !t ||
                                                !Array.isArray(t) ||
                                                t.length < 33
                                              )
                                                return null;
                                              var r = String(t[1] || ""),
                                                n = parseFloat(t[32]),
                                                a = parseFloat(t[3]),
                                                c = s.parseStockCode(e),
                                                i = c.market,
                                                u = c.code;
                                              return {
                                                name: r,
                                                code: u,
                                                showCode: u,
                                                market: i,
                                                type: 1,
                                                change: ""
                                                  .concat(n >= 0 ? "+" : "")
                                                  .concat(n, "%"),
                                                price: a.toFixed(2),
                                                isUp: n >= 0,
                                                zdf: n,
                                                requestSymbol: e,
                                              };
                                            })
                                            .filter(Boolean)),
                                          e.abrupt(
                                            "return",
                                            a.length > 0
                                              ? (a.sort(function (e, t) {
                                                  return t.zdf - e.zdf;
                                                }),
                                                a[0])
                                              : null
                                          )
                                        );
                                      case 8:
                                      case "end":
                                        return e.stop();
                                    }
                                }, r);
                              })
                            );
                          })
                        )
                      );
                    case 13:
                      (a = t.sent.filter(Boolean)).sort(function (e, t) {
                        return t.zdf - e.zdf;
                      }),
                        (this.localStocks = a.slice(0, 3));
                    case 15:
                      this.updateRefreshTime(), (t.next = 20);
                      break;
                    case 18:
                      (t.prev = 18), (t.t0 = t.catch(0));
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 18]]
            );
          })
        );
      },
      getPriceClass: function (e) {
        return "-" === e.price ? "price-black" : e.isUp ? "up" : "down";
      },
      getChangeClass: function (e) {
        return "-.-%" === e.change ? "change-black" : e.isUp ? "up" : "down";
      },
      getMarketClass: function (e) {
        var t;
        return (null == (t = this.marketConfig[e]) ? void 0 : t.class) || "";
      },
      getMarketName: function (e) {
        var t;
        return (null == (t = this.marketConfig[e]) ? void 0 : t.name) || "";
      },
      askAI: function (e) {
        var t;
        this.$emit("reportData", "stock_useai_click");
        var r = this.localStocks[e],
          n = {
            market: r.market,
            scode: r.code,
            stockType: r.type,
            label: "ams",
          };
        (null == (t = d.StockBridge) ? void 0 : t.ENV) === d.EnvTypeEnum.MP &&
          (n = l(u({}, n), { _scene_from_: "1012" })),
          d.StockRouter.routeTo({ name: "stockdetail", query: n });
      },
    },
  },
  m = d._export_sfc(p, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return d.e(
          { a: r.getIndexImageUrl && r.getIndexImageUrl(r.sectionIndex) },
          r.getIndexImageUrl && r.getIndexImageUrl(r.sectionIndex)
            ? { b: r.getIndexImageUrl(r.sectionIndex) }
            : {},
          {
            c: d.t(r.section.title || "股票涨跌原因 一键「问元宝」"),
            d: !a.isETFMode,
          },
          a.isETFMode
            ? {}
            : {
                e: d.t(
                  r.section.subTitle ||
                    "某只股票今天为什么暴涨暴跌?「问元宝」一秒有答案!"
                ),
              },
          {
            f: d.f(o.localStocks, function (e, t, r) {
              return d.e(
                {
                  a: d.t(e.name),
                  b: d.t(a.isETFMode ? "基" : a.getMarketName(e.market)),
                  c: d.n(a.getMarketClass(e.market)),
                  d: d.t(e.showCode),
                },
                a.isETFMode
                  ? {}
                  : {
                      e: d.t(e.price),
                      f: d.n(a.getPriceClass(e)),
                      g: "price-".concat(e.code, "-").concat(e.price),
                    },
                {
                  h: d.t(e.change),
                  i: d.n(a.getChangeClass(e)),
                  j: "change-".concat(e.code, "-").concat(e.change),
                  k: d.o(
                    function (e) {
                      return a.askAI(t);
                    },
                    4163,
                    e.code
                  ),
                  l: e.code,
                }
              );
            }),
            g: a.isETFMode ? 1 : "",
            h: !a.isETFMode,
            i: d.n({ "change-bold": a.isETFMode }),
            j: r.section.tips,
          },
          r.section.tips ? { k: r.section.tips } : {},
          { l: !r.section.no1pxline },
          (r.section.no1pxline, {}),
          { m: a.isETFMode ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-ad2023f6"],
  ]);
wx.createComponent(m);
