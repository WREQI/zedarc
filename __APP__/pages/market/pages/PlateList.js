var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (t, e, r) {
    return new Promise(function (n, o) {
      var a = function (t) {
          try {
            i(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          try {
            i(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, s);
        };
      i((r = r.apply(t, e)).next());
    });
  },
  n = require("../../../common/vendor.js"),
  o =
    (require("../@tencent/stock-hq-data/index.js"),
    require("../@tencent/stock-hq-core/utils/market.js"));
[
  ["1", "000001"],
  ["0", "399001"],
  ["0", "399006"],
].map(function (t) {
  return t.join("");
});
var a = function (t, e) {
    return t.request(
      "https://wzq.tenpay.com/cgi-bin/stockquotation.fcgi",
      "POST",
      e,
      { forceCallback: !0 }
    );
  },
  s = {
    data: function () {
      return {
        list: [],
        skin: n.wx$1.getStorageSync("user/skin") || "white",
        hqBridge: new n.HQBridge(),
        order: "desc",
      };
    },
    computed: {
      getSortIcon: function () {
        return "desc" === this.order
          ? "https://st.gtimg.com/design/96ee808c2c42c1534830aeb9234615ec.png"
          : "https://st.gtimg.com/design/990ad4e7a7a1da68b0bcdcfa0ac37795.png";
      },
    },
    onLoad: function (t) {
      (this.order = "desc"),
        (this.urlParam = t || ""),
        this.queryData(),
        n.wx$1.setBackgroundColor({ backgroundColor: "#f5f6fa" });
      var e = (this.urlParam || {}).name,
        r = void 0 === e ? "腾讯自选股" : e;
      this.hqBridge.setTitle(decodeURIComponent(r));
    },
    onPullDownRefresh: function () {
      return r(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.queryData();
                  case 1:
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
    methods: {
      setZdpClass: function (t) {
        var e = parseFloat(t);
        return e > 0 ? "rise" : e < 0 ? "drop" : "equal";
      },
      transMarketIcon: function (t, e, r) {
        if (void 0 !== t) {
          var n = o.getMarketPYName(t);
          if (!n)
            try {
              +t > 600 ? (n = "us") : +t > 300 && (n = "hk"),
                ("uk" !== t &&
                  "cnjj" !== t &&
                  "cwjj" !== t &&
                  "jj" !== t &&
                  "nq" !== t &&
                  "zhai" !== t) ||
                  (n = t),
                "ft" === t && (n = "hqzhi");
            } catch (t) {
              return;
            }
          return (
            o.isKeChuangStock(e)
              ? (n = "ke")
              : o.isChuangYeStock(e) && (n = "chuang"),
            "sh" === n && r && /^68/.test(r) && (n = "ke"),
            "sz" === n && r && /^30/.test(r) && (n = "chuang"),
            "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
              n,
              ".svg"
            )
          );
        }
      },
      queryData: function () {
        return r(
          this,
          null,
          e().mark(function t() {
            var r, o, s, i, c;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = this.urlParam),
                        (o = r.plate),
                        (s = r.code),
                        (i = {
                          action: "2",
                          plate: o,
                          code: s,
                          app: "zxg_xcx",
                        }),
                        (t.next = 6),
                        a(this.hqBridge, i)
                      );
                    case 6:
                      (c = t.sent),
                        (this.list = null == c ? void 0 : c.pstock),
                        this.handleSort(),
                        n.wx$1.stopPullDownRefresh();
                    case 8:
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
      navigateToQuoteDetail: function (t) {
        var e = t.market,
          r = t.code;
        !(function (t, e, r) {
          var n = { market: e, scode: r };
          e && r && t.routeTo({ path: "/pages/quote/quote", query: n });
        })(this.hqBridge, e, r);
      },
      sortList: function () {
        (this.order = "desc" === this.order ? "asc" : "desc"),
          this.handleSort();
      },
      handleSort: function () {
        var t;
        (t =
          "desc" === this.order
            ? this.list.sort(function (t, e) {
                return +e.zdf - +t.zdf;
              })
            : this.list.sort(function (t, e) {
                return +t.zdf - +e.zdf;
              })),
          (this.list = t);
      },
      formatStockCode: function (e) {
        var r = e.split(".");
        return t(r, 1)[0];
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog")
  )();
var i = n._export_sfc(s, [
  [
    "render",
    function (t, e, r, o, a, s) {
      return {
        a: t.rootFontSize,
        b: n.p({ "no-auto": !0 }),
        c: "asc" === a.order ? 1 : "",
        d: "desc" === a.order ? 1 : "",
        e: n.o(function () {
          return s.sortList && s.sortList.apply(s, arguments);
        }, 201),
        f: n.f(a.list, function (t, e, r) {
          return {
            a: n.t(t.name),
            b: s.transMarketIcon(t.market, t.type, t.code),
            c: n.t(s.formatStockCode(t.code)),
            d: n.t(t.zjcj),
            e: n.t(t.zdf),
            f: n.n(s.setZdpClass(t.zdf)),
            g: e,
            h: n.o(
              function (e) {
                return s.navigateToQuoteDetail(t);
              },
              202,
              e
            ),
          };
        }),
        g: "black" === a.skin ? 1 : "",
        h: a.skin,
      };
    },
  ],
  ["__scopeId", "data-v-1ec8cc90"],
]);
wx.createPage(i);
