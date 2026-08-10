var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, a) {
    return new Promise(function (n, i) {
      var r = function (t) {
          try {
            c(a.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            c(a.throw(t));
          } catch (t) {
            i(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(r, s);
        };
      c((a = a.apply(t, e)).next());
    });
  },
  a = require("../../stock-hq-data/index.js"),
  n = require("../../../../../common/vendor.js"),
  i = require("api/index.js"),
  r = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    n.StockBridge.report(t, e);
  },
  s = {
    inject: ["hqBridge"],
    props: {
      symbol: { type: String, default: "" },
      dataType: { type: String, default: "GP" },
    },
    data: function () {
      return { fhspData: [] };
    },
    computed: {
      market: function () {
        return a.utils.splitSymbol(this.symbol).market;
      },
      isHS: function () {
        return a.utils.isHSMarket(this.market);
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isApp: function () {
        return "app" === this.hqBridge.ENV;
      },
      isSpecialPlatform: function () {
        return this.isWzq || this.isApp;
      },
    },
    created: function () {
      switch (this.dataType) {
        case "GP":
          this.getFhData();
          break;
        case "ETF":
          this.getDividend(),
            r("hq.stock_detail.etf_depth_foundation_detail_brow");
      }
    },
    methods: {
      getFhData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r, s, c, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), !this.isHS)) {
                        t.next = 8;
                        break;
                      }
                      return (
                        (t.next = 4), i.getHSData(this.hqBridge, this.symbol)
                      );
                    case 4:
                      (r = t.sent),
                        (this.fhspData = r.data.fhsp),
                        (t.next = 21);
                      break;
                    case 8:
                      if (!a.utils.isHKMarket(this.market)) {
                        t.next = 16;
                        break;
                      }
                      return (
                        (s = n.getApiFullUrl(
                          "ifzqgtimg/appstock/app/hkStockinfo/dividend?code=".concat(
                            this.symbol
                          ),
                          "PROXY_QQ"
                        )),
                        (t.next = 12),
                        this.hqBridge.request(s)
                      );
                    case 12:
                      (c = t.sent),
                        (this.fhspData = c.data.fhpsComplete),
                        (t.next = 21);
                      break;
                    case 16:
                      if (!a.utils.isUSMarket(this.market)) {
                        t.next = 21;
                        break;
                      }
                      return (
                        (t.next = 19), i.getUSData(this.hqBridge, this.symbol)
                      );
                    case 19:
                      (o = t.sent), (this.fhspData = o.data.cgfh);
                    case 21:
                      t.next = 25;
                      break;
                    case 23:
                      (t.prev = 23), (t.t0 = t.catch(0));
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 23]]
            );
          })
        );
      },
      getDividend: function () {
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
                      return (
                        (t.next = 2),
                        i
                          .getDividendList(this.hqBridge, {
                            symbol: this.symbol,
                            num: 9999,
                          })
                          .catch(function (t) {
                            r("MONITOR-DETAIL-ETF-FH-INTERFACE-ERROR", t);
                          })
                      );
                    case 2:
                      0 == +(a = t.sent).code &&
                        a.data &&
                        Array.isArray(a.data.dividend) &&
                        (this.fhspData = a.data.dividend.map(function (t) {
                          return (
                            (t.content = ""
                              .concat(t.registration_date.slice(0, 4), "-")
                              .concat(t.registration_date.slice(4, 6), "-")
                              .concat(t.registration_date.slice(-2))),
                            (t.date = ""
                              .concat(t.inner_payment_date.slice(0, 4), "-")
                              .concat(t.inner_payment_date.slice(4, 6), "-")
                              .concat(t.inner_payment_date.slice(-2))),
                            (t.cqr = parseFloat(t.money / 10).toFixed(4)),
                            t
                          );
                        }));
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
    },
  },
  c = n._export_sfc(s, [
    [
      "render",
      function (t, e, a, i, r, s) {
        return n.e(
          { a: "GP" === a.dataType },
          "GP" === a.dataType
            ? n.e(
                { b: s.isHS },
                s.isHS
                  ? {
                      c: n.f(r.fhspData, function (t, e, a) {
                        return {
                          a: n.t(t.date),
                          b: n.t(t.content),
                          c: n.t("-" === t.cqr ? "--" : t.cqr),
                          d: e,
                        };
                      }),
                    }
                  : {
                      d: n.f(r.fhspData, function (t, e, a) {
                        return {
                          a: n.t(t.cqr || t.date),
                          b: n.t(t.CONTENT || t.desc),
                          c: e,
                        };
                      }),
                    }
              )
            : {},
          { e: "ETF" === a.dataType },
          "ETF" === a.dataType
            ? {
                f: n.f(r.fhspData, function (t, e, a) {
                  return {
                    a: n.t(t.date),
                    b: n.t(t.content),
                    c: n.t("-" === t.cqr ? "--" : t.cqr),
                    d: e,
                  };
                }),
              }
            : {},
          { g: !s.isApp },
          (s.isApp, {}),
          { h: s.isSpecialPlatform ? 1 : "", i: s.isApp ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-fe30d424"],
  ]);
wx.createComponent(c);
