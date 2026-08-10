var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = require("../../stock-hq-data/index.js"),
  h = require("../../../../../common/vendor.js"),
  d = [
    { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
    { name: "净值占比", key: "cfgzb", sort: "posRatio", unit: "%" },
    { name: "成交额", key: "turnover", sort: "turnover", unit: "", big: !0 },
  ],
  l = [
    { name: "涨跌幅", key: "zdf", sort: "priceRatio", unit: "%", rate: !0 },
    { name: "净值占比", key: "cfgzb", sort: "posRatio", unit: "%" },
    { name: "净值", key: "fund_value", sort: "fundValue", unit: "" },
  ],
  f = {
    mini: h.API_HOST_ENUM.PROXY_QQ,
    wzq: h.API_HOST_ENUM.PROXY_QQ,
    mp: h.API_HOST_ENUM.PROXY_QQ,
  };
function p(t) {
  var e = "",
    n = Object.keys(t).length;
  return (
    Object.keys(t).forEach(function (i, r) {
      e =
        r !== n - 1
          ? "".concat(e).concat(i, "=").concat(t[i], "&")
          : "".concat(e).concat(i, "=").concat(t[i]);
    }),
    e
  );
}
var m = function (t, n) {
    var u,
      d,
      l,
      m = "mp" === t.ENV ? t.getStorage("_qluin") : t.getCookie("wzq_qluin"),
      y =
        ((u = (function (t, n) {
          for (var i in n || (n = {})) s.call(n, i) && c(t, i, n[i]);
          if (o) {
            var r,
              u = e(o(n));
            try {
              for (u.s(); !(r = u.n()).done; ) {
                i = r.value;
                a.call(n, i) && c(t, i, n[i]);
              }
            } catch (t) {
              u.e(t);
            } finally {
              u.f();
            }
          }
          return t;
        })({}, n)),
        (d = { openid: m || n.openid || "" }),
        i(u, r(d)));
    return t.request(
      ""
        .concat(
          ((l = f[t.ENV]),
          h.getApiFullUrl("cgi/cgi-bin/rank/index_fund/getRankIndex", l)),
          "?"
        )
        .concat(p(y))
    );
  },
  y = {
    components: {
      ScrollList: function () {
        return "./ScrollList.js";
      },
      NoData: function () {
        return "./NoData.js";
      },
    },
    props: ["scode", "market", "isTrading", "skin"],
    inject: ["hqBridge"],
    options: { styleIsolation: "shared" },
    data: function () {
      return {
        activeTab: 1,
        tabList: [
          { type: 1, name: "场内基金", id: "inner" },
          { type: 2, name: "场外基金", id: "outer" },
        ],
        columns: [],
        showList: !1,
        sortType: "posRatio",
        sortDown: !0,
        fundType: "inner",
        fundList: [],
      };
    },
    created: function () {
      this.getFundData(), this.judgeTime();
    },
    beforeDestroy: function () {
      this.clearRefresh();
    },
    mounted: function () {
      this.columns = d;
    },
    computed: {
      symbol: function () {
        return u.utils.getSymbol(this.market, this.scode);
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      clearRefresh: function () {
        this.interval && clearInterval(this.interval);
      },
      judgeTime: function () {
        var t = this;
        this.isTrading &&
          (this.interval = setInterval(function () {
            t.getFundData();
          }, 5e3));
      },
      onSelectTab: function (t) {
        (this.activeTab = t),
          (this.fundType = 1 === t ? "inner" : "outer"),
          this.getFundData(!0),
          this.hqBridge.report(
            "hq.stock_detail.brief_fund_".concat(this.fundType, "_tab_click")
          );
      },
      getFundData: function () {
        var e,
          n,
          i,
          r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
          (e = this),
          (n = null),
          (i = t().mark(function e() {
            var n, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = {
                          board_type: this.symbol,
                          data_type: "stock",
                          _appver: "10.3",
                        }),
                        (t.next = 3),
                        m(this.hqBridge, n)
                      );
                    case 3:
                      (i = t.sent) &&
                        i.data &&
                        (0 === i.data.inner_rank_list.length &&
                        0 === i.data.outer_rank_list_trade.length
                          ? this.$emit("hideStockFund")
                          : this.$emit("showStockFund"),
                        0 !== i.data.inner_rank_list.length ||
                          r ||
                          ((this.activeTab = 2), (this.fundType = "outer")),
                        1 === this.activeTab
                          ? ((this.columns = d),
                            (this.fundList = i.data.inner_rank_list || []))
                          : ((this.columns = l),
                            (this.fundList =
                              i.data.outer_rank_list_trade || [])),
                        this.fundList && this.fundList.length > 0
                          ? (this.showList = !0)
                          : (this.showList = !1),
                        this.showList &&
                          !this.isReportedBrow &&
                          ((this.isReportedBrow = !0),
                          this.hqBridge.report(
                            "hq.stock_detail.brief_fund_show"
                          )));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, r) {
            var o = function (t) {
                try {
                  a(i.next(t));
                } catch (t) {
                  r(t);
                }
              },
              s = function (t) {
                try {
                  a(i.throw(t));
                } catch (t) {
                  r(t);
                }
              },
              a = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, s);
              };
            a((i = i.apply(e, n)).next());
          })
        );
      },
      changeSort: function (t) {
        this.sortType === t
          ? (this.sortDown = !this.sortDown)
          : ((this.sortType = t), (this.sortDown = !0)),
          this.getFundData();
      },
    },
  };
Array || (h.resolveComponent("ScrollList") + h.resolveComponent("NoData"))();
var b = h._export_sfc(y, [
  [
    "render",
    function (t, e, n, i, r, o) {
      return h.e(
        {
          a: h.f(r.tabList, function (t, e, n) {
            return {
              a: h.t(t.name),
              b: h.n(r.activeTab === t.type ? "selected" : ""),
              c: e,
              d: h.o(
                function (e) {
                  return o.onSelectTab(t.type);
                },
                3214,
                e
              ),
            };
          }),
          b: r.showList,
        },
        r.showList
          ? {
              c: h.o(o.changeSort, 3215),
              d: h.p({
                listName: "名称",
                sortType: r.sortType,
                sortDown: r.sortDown,
                fundType: r.fundType,
                pageType: "stockdetail",
                iconLeft: !1,
                isPage: !1,
                isSort: !1,
                isShowALL: !1,
                columns: r.columns,
                listData: r.fundList,
                skin: n.skin,
              }),
            }
          : {},
        { e: !r.showList },
        (r.showList, {}),
        { f: "black" === n.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-14dc712f"],
]);
wx.createComponent(b);
