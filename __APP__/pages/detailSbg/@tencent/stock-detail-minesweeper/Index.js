var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  a = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  d = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  h = require("../stock-hq-core/config/const.js"),
  m = require("../stock-crypto-modules-config/dist/index.js"),
  g = require("../stock-hq-core/config/css-token.js");
function f(e) {
  var t = Object.assign({}, { _appver: "9.2.0", _h5ver: "2.0.1" }, e),
    r = [];
  for (var n in t) n && r.push("".concat(n, "=").concat(t[n]));
  return (
    r.push("key=".concat(m.dist.SIGN_KEY.wzq_analyse)),
    p.md5Module(r.join("&")).toLowerCase()
  );
}
var k = (function () {
    function e(t) {
      r(this, e),
        (this.url = p.API_PLATE_STOCKLIST),
        (this.request = t.request),
        (this.env = p.StockBridge.ENV);
    }
    return (
      n(e, [
        {
          key: "getMineSweeping",
          value: function (e, t) {
            var r,
              n,
              a = {
                _appver: "9.2.0",
                modules: "general",
                source: "wzq",
                stock_code: "",
                time: new Date().getTime(),
                user_type: "mp" === this.env ? 6 : 5,
                _h5ver: "2.0.1",
              },
              o = Object.assign({}, a, e);
            if (((o.sign = f(o)), "mp" === this.env)) {
              var s = {},
                c =
                  (null ==
                  (n = null == (r = getApp().globalData) ? void 0 : r.Login)
                    ? void 0
                    : n.loginKeys) ||
                  {} ||
                  t ||
                  {},
                i = c.qluin,
                l = c.qlskey;
              i && l && (s.Cookie = "openid=".concat(i, ";skey=").concat(l));
              var u =
                "https://bisheng.tenpay.com/fcgi-bin/xg_yk_risk_index.fcgi?user_type=6&app=".concat(
                  h.SOURCEENUM.MP
                );
              return this.request(u, "POST", o, { header: s });
            }
            return this.request(
              ""
                .concat(
                  p.API_PLATE_STOCKLIST,
                  "?action=xg_yk_risk_index.fcgi&app="
                )
                .concat(h.SOURCEENUM.DEFAULT),
              "POST",
              o
            );
          },
        },
        {
          key: "getEstimate",
          value: function (e, t) {
            var r = {
                _appver: "9.2.0",
                days: "5_years",
                source: "wzq",
                stock_code: "",
                user_type: "mp" === this.env ? 6 : 5,
                _h5ver: "2.0.1",
              },
              n = Object.assign({}, r, e);
            if (((n.sign = f(n)), "mp" === this.env)) {
              var a = {},
                o = t || {},
                s = o.qluin,
                c = o.qlskey;
              s && c && (a.Cookie = "openid=".concat(s, ";fskey=").concat(c));
              var i = p.getApiFullUrl(
                "zg_evaluation_line.fcgi?app=".concat(h.SOURCEENUM.MP),
                p.API_HOST_ENUM.BISHENG
              );
              return this.request(i, "POST", n, { header: a });
            }
            return this.request(
              ""
                .concat(
                  p.API_PLATE_STOCKLIST,
                  "?action=zg_evaluation_line.fcgi&app="
                )
                .concat(h.SOURCEENUM.DEFAULT),
              "POST",
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  b = ["sz", "sh"],
  v = {
    inject: ["hqBridge"],
    components: {
      Overview: function () {
        return "./components/overview.js";
      },
      News: function () {
        return "./components/news/index.js";
      },
      Basic: function () {
        return "./components/basic/index.js";
      },
      Trade: function () {
        return "./components/trade/index.js";
      },
    },
    provide: function () {
      return {
        code: this.scode,
        market: this.market,
        stock_code: this.stock_code,
        themeColor: this.themeColor,
        skin: this.skin,
      };
    },
    props: [
      "flash",
      "symbol",
      "scode",
      "type",
      "skin",
      "loginInfo",
      "mpscrollTop",
      "didAgreeUserAgreement",
    ],
    computed: {
      themeColor: function () {
        var e =
          g.CSSTOKEN[p.isBroker] ||
          (["black", "dark"].includes(this.skin)
            ? g.CSSTOKEN.BLACK
            : g.CSSTOKEN.DEFAULT);
        return {
          lightGray1: e.lightGray1 || "#7A8499",
          lightGray2: e.lightGray2 || "#98a0b3",
          borderLight: e.borderLight || "#E9EBF0",
          primary: e.primary || "#3077ec",
          orange: e.orange || "#FF891E",
          bigGreen: e.bigGreen || "#1caa3c",
          bigRed: e.bigRed || "#e63535",
          defaultStroke: ["black", "dark"].includes(this.skin)
            ? "#000"
            : "#fff",
        };
      },
      stock_code: function () {
        return b[this.type] + this.scode;
      },
      market: function () {
        return b[this.type];
      },
    },
    data: function () {
      return { data: null, error: !1, errmsg: "", service: null };
    },
    created: function () {
      (this.service = new k(this.hqBridge)), this.getAllData();
    },
    beforeDestroy: function () {
      this.data = null;
    },
    methods: {
      getExposureModules: function () {
        var e = this.$refs,
          t = e.general,
          r = e.news,
          n = e.basic,
          a = e.trade,
          o = [];
        return (
          o.push(
            { $el: t, name: "general" },
            { $el: r, name: "news" },
            { $el: n, name: "basic" },
            { $el: a, name: "trade" }
          ),
          o
        );
      },
      getAllData: function () {
        return d(
          this,
          null,
          e().mark(function r() {
            var n, a, d, p, h, m, g, f, k, b, v, _, y, O, w, T, C, S;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), this.getData("general")
                      );
                    case 3:
                      if (
                        0 != +(n = e.sent).retcode ||
                        !Object.prototype.hasOwnProperty.call(
                          n.data.general,
                          "update_time"
                        )
                      ) {
                        e.next = 24;
                        break;
                      }
                      return (e.next = 7), this.getData("news|basic|trade");
                    case 7:
                      return (
                        (a = e.sent),
                        (d = Object.assign(
                          {},
                          { general: n.data.general },
                          a.data
                        )),
                        (e.prev = 9),
                        (e.next = 12),
                        this.getStockData()
                      );
                    case 12:
                      0 == +(p = e.sent).retcode &&
                        Object.assign(d, { stockData: p.data }),
                        (e.next = 18);
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(9));
                    case 18:
                      Object.keys(d.news).length &&
                        ((h = d.news),
                        (m = h.opinion_rating),
                        (g = h.stock_rating),
                        (m || g) &&
                          (d.news.stock_opinion_rating =
                            ((S = (function (e, r) {
                              for (var n in r || (r = {}))
                                i.call(r, n) && u(e, n, r[n]);
                              if (c) {
                                var a,
                                  o = t(c(r));
                                try {
                                  for (o.s(); !(a = o.n()).done; ) {
                                    n = a.value;
                                    l.call(r, n) && u(e, n, r[n]);
                                  }
                                } catch (e) {
                                  o.e(e);
                                } finally {
                                  o.f();
                                }
                              }
                              return e;
                            })({}, m)),
                            o(
                              S,
                              s({
                                opinion_rating: m || {},
                                stock_rating: g || {},
                              })
                            )))),
                        Object.keys(d.trade).length &&
                          (f = d.trade.lift_sale) &&
                          (f.list_data = {
                            style: ["l", "r", "r"],
                            title: ["解禁时间", "解禁股数", "总股本占比"],
                            list: (f.list || []).map(function (e) {
                              return [e.time, e.stock_num, e.ratio];
                            }),
                          }),
                        Object.keys(d.basic).length &&
                          ((k = d.basic),
                          (b = k.estimate),
                          (v = void 0 === b ? {} : b),
                          (_ = k.fundmental),
                          (y = void 0 === _ ? {} : _),
                          (O = k.audit),
                          (w = void 0 === O ? {} : O),
                          (T = v.pb_pe_tag || "pe"),
                          (C = "pe" === T ? "市盈TTM" : "市净率"),
                          (v.comment_fold = v["comment_fold_".concat(T)]),
                          (v.comment = v["comment_".concat(T)]),
                          (v.legend = [
                            { style: this.themeColor.orange, name: C },
                            {
                              style: this.themeColor.primary,
                              name: "行业".concat(C, " (中位数)"),
                            },
                          ]),
                          d.stockData &&
                            (v.list = (d.stockData || []).map(function (e) {
                              return {
                                time: e.date,
                                y1: e["stock_".concat(v.pb_pe_tag || "pe")],
                                y2: e["board_".concat(v.pb_pe_tag || "pe")],
                              };
                            })),
                          (y.comment = y.comment || y.no_risk_comment),
                          (w.comment = w.comment_v2 || w.comment || ""),
                          (w.comment_fold =
                            w.comment_fold_v2 || w.comment_fold || "")),
                        (this.data = d),
                        (e.next = 33);
                      break;
                    case 24:
                      (e.t1 = +n.retcode),
                        (e.next =
                          1037324220 === e.t1
                            ? 27
                            : 1037324221 === e.t1
                            ? 29
                            : 31);
                      break;
                    case 27:
                      return (
                        (this.errmsg = "该股新上市，数据累计中"),
                        e.abrupt("break", 32)
                      );
                    case 29:
                      return (
                        (this.errmsg = "暂无相关数据"), e.abrupt("break", 32)
                      );
                    case 31:
                      this.errmsg = "数据加载失败，请重试";
                    case 32:
                      this.error = !0;
                    case 33:
                      e.next = 38;
                      break;
                    case 35:
                      (e.prev = 35),
                        (e.t2 = e.catch(0)),
                        (this.errmsg = "数据加载失败，请重试"),
                        (this.error = !0);
                    case 38:
                      return (e.prev = 38), this.$emit("loaded"), e.finish(38);
                    case 41:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this,
              [
                [0, 35, 38, 41],
                [9, 16],
              ]
            );
          })
        );
      },
      handleFoldChange: function () {
        this.$emit("loaded");
      },
      getData: function (e) {
        return this.service.getMineSweeping(
          { modules: e, stock_code: this.stock_code },
          this.loginInfo
        );
      },
      getStockData: function () {
        return this.service.getEstimate(
          { stock_code: this.stock_code },
          this.loginInfo
        );
      },
      feedback: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        p.StockBridge.privacyAgreement.check()
                      );
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      return (
                        (e.prev = 5), (e.t0 = e.catch(0)), e.abrupt("return")
                      );
                    case 8:
                      p.StockBridge.report("hq.stock_detail.ms_feedback"),
                        (r =
                          "https://aics.tenpay.com/aics-wzq/xiaomi/page.do?channel=14&type=chat&_=" +
                          +new Date()),
                        p.StockBridge.openExtraWebview(r);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        );
      },
      showGoTop: function (e) {
        var t = e.tag,
          r = e.key;
        if ((this.$emit("showGoTop"), "mp" === p.StockBridge.ENV)) {
          var n = this.$refs[r],
            a = n && n.$refs[t],
            o = a && a[0];
          o &&
            "function" == typeof o.scrollToCurrentBar &&
            o.scrollToCurrentBar(t);
        }
      },
    },
  };
Array ||
  (
    p.resolveComponent("Overview") +
    p.resolveComponent("News") +
    p.resolveComponent("Basic") +
    p.resolveComponent("Trade")
  )();
var _ = p._export_sfc(v, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return p.e(
        { a: !a.data && !a.error },
        a.data || a.error
          ? a.data && !a.error
            ? p.e(
                {
                  c: p.o(o.showGoTop, 1834),
                  d: p.o(o.handleFoldChange, 1835),
                  e: p.p({
                    symbol: r.symbol,
                    data: a.data.general,
                    zixuan: a.data.zixuan_risk_info,
                    flash: r.flash,
                    didAgreeUserAgreement: r.didAgreeUserAgreement,
                  }),
                  f: !!Object.keys(a.data.news).length,
                },
                Object.keys(a.data.news).length
                  ? {
                      g: p.sr("news", "42e9dfce-1"),
                      h: p.o(o.handleFoldChange, 1836),
                      i: p.p({ data: a.data.news, mpscrollTop: r.mpscrollTop }),
                    }
                  : {},
                { j: !!Object.keys(a.data.basic).length },
                Object.keys(a.data.basic).length
                  ? {
                      k: p.sr("basic", "42e9dfce-2"),
                      l: p.o(o.handleFoldChange, 1837),
                      m: p.p({
                        data: a.data.basic,
                        stockData: a.data.stockData,
                        mpscrollTop: r.mpscrollTop,
                      }),
                    }
                  : {},
                { n: !!Object.keys(a.data.trade).length },
                Object.keys(a.data.trade).length
                  ? {
                      o: p.sr("trade", "42e9dfce-3"),
                      p: p.o(o.handleFoldChange, 1838),
                      q: p.p({
                        data: a.data.trade,
                        mpscrollTop: r.mpscrollTop,
                      }),
                    }
                  : {},
                {
                  r: p.o(function () {
                    return o.feedback && o.feedback.apply(o, arguments);
                  }, 1839),
                }
              )
            : a.error
            ? { t: p.t(a.errmsg) }
            : {}
          : {},
        { b: a.data && !a.error, s: a.error }
      );
    },
  ],
]);
wx.createComponent(_);
