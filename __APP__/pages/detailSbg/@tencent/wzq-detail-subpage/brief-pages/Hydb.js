var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, a) {
      var s = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        i = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        o = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(s, i);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  n = require("../../stock-hq-data/index.js"),
  r = require("api/index.js"),
  a = require("../../../../../common/vendor.js"),
  s = {
    name: "Hydb",
    props: {
      scode: String,
      type: String,
      name: String,
      showTit: { type: Boolean, default: !1 },
      isHhy: { type: Boolean, default: !1 },
      sliceMax: { type: Number, default: 0 },
      theme: { type: String, default: "blue" },
    },
    data: function () {
      return {
        hydbDataType: {},
        errInfo: {},
        currentType: "",
        noData: !0,
        extra: {
          hydb: {
            selected: "zsz",
            tabs: [
              { id: 0, type: "zsz", name: "总市值" },
              { id: 1, type: "yysr", name: "营业总收入" },
              { id: 2, type: "jlr", name: "净利润" },
              { id: 3, type: "Fyszs", name: "营收同比" },
              { id: 4, type: "Fjlrzs", name: "净利润同比" },
              { id: 5, type: "Fmll", name: "毛利率" },
              { id: 6, type: "jzcsyl", name: "净资产收益率" },
              { id: 7, type: "Fzcfzl", name: "资产负债率" },
              { id: 8, type: "gxl", name: "股息率" },
              { id: 9, type: "syl", name: "市盈率" },
              { id: 10, type: "sjl", name: "市净率" },
            ],
          },
        },
        currentList: [],
        top: { hy: "--", rank: "--/--", source: "--" },
        phOut: {},
        env: this.hqBridge.ENV,
        scrollLeft: 0,
        olaTab: "",
      };
    },
    created: function () {
      this.init(this.type || "zsz");
    },
    inject: ["hqBridge"],
    mounted: function () {
      this.scrolltoPosition(this.type);
    },
    computed: {
      showDuring: function () {
        return !(
          "pxmzb" === this.currentType ||
          "zsz" === this.currentType ||
          "syl" === this.currentType ||
          "sjl" === this.currentType ||
          "gxl" === this.currentType
        );
      },
      showAvg: function () {
        return !(
          "syl" === this.currentType ||
          "sjl" === this.currentType ||
          "gxl" === this.currentType
        );
      },
    },
    methods: {
      scrolltoPosition: function (t) {
        var e = this,
          n = this.extra.hydb.tabs.find(function (t) {
            return t.type === e.type;
          }).id,
          r =
            ((function () {
              if (!document) {
                var t = a.wx$1.getSystemInfoSync() || {};
                return {
                  clientWidth: t.windowWidth,
                  clientHeight: t.windowHeight,
                };
              }
            })().clientWidth /
              4) *
            (n - 3);
        "mp" === this.hqBridge.ENV
          ? (this.scrollLeft = r)
          : (this.$refs.hydbScroll.scrollLeft = r);
      },
      init: function (t) {
        this.changeTab(t);
      },
      changeTab: function (n) {
        return e(
          this,
          null,
          t().mark(function e() {
            var r, a, s, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.olaTab !== n) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      if (
                        ((this.olaTab = n),
                        (this.errInfo = {}),
                        (this.currentType = n),
                        (this.phOut = {}),
                        (this.extra.hydb.selected = n),
                        !this.isHhy)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return (t.next = 6), this._getData(n);
                    case 6:
                      (t.t0 = t.sent.data), (t.next = 12);
                      break;
                    case 9:
                      return (t.next = 11), this._getDataNoShy(n);
                    case 11:
                      t.t0 = t.sent;
                    case 12:
                      if (0 !== (r = t.t0).code || 0 !== r.data.length) {
                        t.next = 15;
                        break;
                      }
                      return t.abrupt("return");
                    case 15:
                      if (r.data.hylist && r.data.hylist.length) {
                        t.next = 17;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (this.showTit && (this.noData = !1),
                        void (this.errInfo = {
                          type: n,
                          msg: (r.data && r.data.msg) || "请求错误",
                          timeStamp: new Date().getTime(),
                        }))
                      );
                    case 17:
                      (this.hydbDataType = r.data),
                        (a = this.formatData(this.hydbDataType, n)),
                        (s = a.dataList),
                        (i = a.top),
                        (this.top = i),
                        this.sliceMax
                          ? this.phOut && this.phOut.code
                            ? (this.currentList = s
                                .slice(0, this.sliceMax)
                                .concat(this.phOut))
                            : (this.currentList = s.slice(0, this.sliceMax))
                          : (this.currentList = s);
                    case 20:
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
      getMarket: function (t) {
        return ["sz", "sh", "hk", "us"].indexOf(t.substr(0, 2));
      },
      _getData: function (t) {
        var e = this;
        return (
          (this.errInfo = {}),
          new Promise(function (n, r) {
            e.hqBridge.request({
              url: "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/stockinfo/getHydetail?code="
                .concat(e.scode, "&type=")
                .concat(t),
              method: "GET",
              dataType: "json",
              success: function (t) {
                n(t);
              },
              fail: function (e) {
                (this.errInfo = {
                  type: t,
                  msg: e.data.msg || "请求错误",
                  timeStamp: new Date().getTime(),
                }),
                  r(e);
              },
            });
          })
        );
      },
      _getDataNoShy: function (n) {
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
                        (t.next = 2),
                        r.getHydetail(this.hqBridge, this.scode, n)
                      );
                    case 2:
                      return t.abrupt("return", t.sent);
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
      formatData: function (t, e, n) {
        if (!(t.hy && t.hy[e] && Array.isArray(t.hylist)))
          return { dataList: [], top: {} };
        (this.hy = t.hyname), (this.source = t.date);
        var r,
          a,
          s,
          i,
          o,
          c,
          h,
          u,
          y = {},
          d = t.stock && t.stock.stockcode,
          l = t.hylist.length,
          p = Math.max(Math.abs(t.hylist[0][e]), Math.abs(t.hylist[l - 1][e])),
          f = [];
        (y.hy = t.hyname),
          (y.source = t.date),
          (y.rank = "--/".concat(l)),
          (r = 0),
          (a = "行业平均"),
          (c = t.hy[e]);
        var m,
          b = ["Fyszs", "Fjlrzs", "Fzcfzl", "gxl", "Fmll", "jzcsyl"];
        (i = b.indexOf(e) > -1 ? c : t.hy["f_".concat(e)] || c),
          (s =
            1 == n
              ? "0.1%"
              : ((100 * Math.abs(c)) / p).toFixed(2) < 1
              ? "1%"
              : "".concat(((100 * Math.abs(c)) / p).toFixed(2), "%")),
          (o = c >= 0 ? "red" : "green"),
          b.indexOf(e) > -1 && (i = "".concat(i, "%")),
          (u = ""),
          f.push({ rank: r, code: u, name: a, value: i, percent: s, color: o });
        for (var g = 0; g < l; g++) {
          (u = t.hylist[g].stockCode),
            (a = t.hylist[g].stockName),
            (c = t.hylist[g][e]);
          var x = ["Fyszs", "Fjlrzs", "Fzcfzl", "gxl", "Fmll", "jzcsyl"];
          (i = x.indexOf(e) > -1 ? c : t.hylist[g]["f_".concat(e)] || c),
            (s = n
              ? "0.1%"
              : ((100 * Math.abs(c)) / p).toFixed(2) < 1
              ? "1%"
              : "".concat(((100 * Math.abs(c)) / p).toFixed(2), "%")),
            (o = c >= 0 ? "red" : "green"),
            "pxmzb" !== e || 0 !== Number(c)
              ? (r = g + 1 < 10 ? "0".concat(g + 1) : g + 1)
              : (m || (m = g + 1 < 10 ? "0".concat(g + 1) : g + 1), (r = m)),
            d === t.hylist[g].stockcode
              ? (g + 1 >= this.sliceMax &&
                  ((h = !0),
                  (this.phOut = {
                    rank: r,
                    code: u,
                    name: a,
                    value: i,
                    percent: s,
                    color: o,
                    isKey: h,
                  })),
                (y.rank = "".concat(1 * r, "/").concat(l)),
                (h = !0))
              : (h = !1),
            x.indexOf(e) > -1 && (i = "".concat(i, "%")),
            f.push({
              rank: r,
              code: u,
              name: a,
              value: i,
              percent: s,
              color: o,
              isKey: h,
            });
        }
        return { dataList: f, top: y };
      },
      open: function (t) {
        if (t) {
          var e = (t || {}).code,
            r = void 0 === e ? "" : e,
            a = n.utils.splitSymbol(r),
            s = a.market,
            i = a.scode,
            o =
              "mp" === this.hqBridge.ENV
                ? "/pages/quote/quote"
                : "/quote/detail";
          this.hqBridge.routeTo({ path: o, query: { market: s, scode: i } });
        }
      },
    },
  },
  i = a._export_sfc(s, [
    [
      "render",
      function (t, e, n, r, s, i) {
        return a.e(
          { a: s.noData },
          s.noData
            ? a.e(
                { b: n.showTit },
                (n.showTit, {}),
                { c: "mp" === s.env },
                "mp" === s.env
                  ? {
                      d: a.f(s.extra.hydb.tabs, function (t, e, n) {
                        return {
                          a: a.t(t.name),
                          b: t.type,
                          c: t.type === s.extra.hydb.selected ? 1 : "",
                          d: a.o(
                            function (e) {
                              return i.changeTab(t.type);
                            },
                            460,
                            t.type
                          ),
                        };
                      }),
                      e: s.scrollLeft,
                    }
                  : {
                      f: a.f(s.extra.hydb.tabs, function (t, e, n) {
                        return {
                          a: a.t(t.name),
                          b: t.type,
                          c: t.type === s.extra.hydb.selected ? 1 : "",
                          d: a.o(
                            function (e) {
                              return i.changeTab(t.type);
                            },
                            461,
                            t.type
                          ),
                        };
                      }),
                    },
                {
                  g: a.n(n.isHhy ? "hydb-tabs" : "hydb-tabs-oem"),
                  h: a.n(n.showTit ? "hydb-tabs-wikiBorder" : ""),
                  i: !n.showTit && s.errInfo && s.errInfo.msg,
                },
                !n.showTit && s.errInfo && s.errInfo.msg
                  ? {}
                  : a.e(
                      {
                        j: a.t(s.top.hy),
                        k: a.t(s.top.rank),
                        l: i.showDuring && s.top.source,
                      },
                      i.showDuring && s.top.source
                        ? { m: a.t(s.top.source) }
                        : {},
                      {
                        n: a.n(i.showDuring && s.top.source ? "desc" : "desc2"),
                        o: a.f(s.currentList, function (t, e, n) {
                          return a.e(
                            { a: (i.showAvg && 0 === e) || 0 !== e },
                            (i.showAvg && 0 === e) || 0 !== e
                              ? a.e(
                                  {
                                    b: a.t(0 == t.rank ? "" : t.rank),
                                    c: t.isKey ? "#E63535" : "",
                                    d: t.isKey ? 500 : 400,
                                    e: 0 != t.rank,
                                  },
                                  0 != t.rank
                                    ? {
                                        f: a.t(t.name),
                                        g:
                                          0 == t.rank
                                            ? "#FF891E"
                                            : t.isKey
                                            ? "#E63535"
                                            : "",
                                        h: 0 == t.rank || t.isKey ? 500 : 400,
                                        i: a.o(
                                          function (e) {
                                            return i.open(t);
                                          },
                                          462,
                                          e
                                        ),
                                      }
                                    : {},
                                  { j: 0 == t.rank },
                                  0 == t.rank ? { k: a.t(t.name) } : {},
                                  {
                                    l: a.n(
                                      t.name.replace(/ /g, "").length > 4 &&
                                        "smallFont"
                                    ),
                                    m:
                                      0 == t.rank
                                        ? "#FF891E"
                                        : t.isKey
                                        ? "#E63535"
                                        : "",
                                    n: 0 == t.rank || t.isKey ? 500 : 400,
                                    o: a.n("percent " + (t.color || "")),
                                    p: t.percent || "0%",
                                    q: a.t(t.value),
                                    r: "pxmzb" === s.currentType,
                                  },
                                  (s.currentType, {})
                                )
                              : {},
                            { s: e }
                          );
                        }),
                        p: a.n(n.isHhy ? "dataList" : "dataList-oem"),
                      }
                    ),
                {
                  q: a.n(n.showTit ? "section-wrap-zyyw" : ""),
                  r: a.n(n.isHhy ? "" : "brief-block-oem"),
                  s: a.n("black" == n.theme ? "black" : ""),
                  t: a.n(n.showTit ? "line-bottom" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-c32e4500"],
  ]);
wx.createComponent(i);
