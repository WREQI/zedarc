var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../api/index.js"),
  a = require("../util/format.js"),
  n = require("../util/imageUrl.js"),
  r = require("../../../../../common/vendor.js"),
  o = {
    name: "LongHuList",
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    props: {
      params: { type: Object, default: {} },
      theme: { type: String, default: "" },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      moduleData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    components: {
      LongHuBangBar: function () {
        return "./HeadBar.js";
      },
      LongHuBangList: function () {
        return "./TableList.js";
      },
    },
    data: function () {
      return {
        dataList: [],
        thead: [],
        title: "",
        intor: "",
        accountText: "",
        stockArr: [],
        stocks: "",
        redUp: !0,
        statData: "",
        backgroundImage: {
          white: n.longhuHeadImgUrlWhite,
          black: n.longhuHeadImgUrlBlack,
        },
        titleImage: {
          white: n.longhuHeadTitleUrlWhite,
          black: n.longhuHeadTitleUrlBlack,
        },
        tableImgTitle: {},
        channelNumber: "",
      };
    },
    computed: {
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
    },
    mounted: function () {
      var t = this;
      this.env.__APP__ &&
        this.helper.shy.getSystemInfo(function (e) {
          t.redUp = "redup" === e.flucShowMode;
        }),
        this.getLonghuData(),
        (this.statData = this.getStatData()),
        (this.channelNumber = this.getChannelNumber());
    },
    methods: {
      getLonghuData: function () {
        return (
          (a = this),
          null,
          (n = t().mark(function a() {
            var n, r, o, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        e.StockAPiService.queryLongHu(
                          { type: this.params.type, date: this.params.date },
                          this.helper
                        )
                      );
                    case 3:
                      if ((n = t.sent) && 0 === n.code && n.data) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      (r = "all" === this.params.type ? 3 : 4),
                        (o = this.getDataOptimize(n.data[this.params.type], r)),
                        n.data[this.params.type].sort(function (t, e) {
                          return t[r] - e[r];
                        }),
                        (i = this.getDataOptimize(n.data[this.params.type], r)),
                        (this.dataList = [
                          {
                            list: o,
                            cloumeKeys: ["name", "jme", "zdf"],
                            type: "mr",
                          },
                          {
                            list: i,
                            cloumeKeys: ["name", "jme", "zdf"],
                            type: "mc",
                          },
                        ]),
                        this.getData(),
                        (t.next = 14);
                      break;
                    case 12:
                      (t.prev = 12), (t.t0 = t.catch(0));
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this,
              [[0, 12]]
            );
          })),
          new Promise(function (t, e) {
            var r = function (t) {
                try {
                  i(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  i(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, o);
              };
            i((n = n.apply(a, null)).next());
          })
        );
        var a, n;
      },
      getData: function () {
        var t = this;
        this.dataList.forEach(function (e) {
          "all" === t.params.type &&
            ((t.intor =
              "通过资金流入和流出最多的个股，我们可以更全局寻找机会。"),
            (t.accountText = "立即开户"),
            (e.thead = ["股票名称", "龙虎榜净买入额", "涨跌幅"]),
            "mr" === e.type
              ? (e.tableImgTitle = {
                  white: n.longhuTableTitleUrlWhiteAllMr,
                  black: n.longhuTableTitleUrlBlackAllMr,
                })
              : (e.tableImgTitle = {
                  white: n.longhuTableTitleUrlWhiteAllMc,
                  black: n.longhuTableTitleUrlBlackAllMc,
                })),
            "jg" === t.params.type &&
              ((t.intor = "当日满足上榜条件的股票榜单以及资金流向。"),
              (t.accountText = "立即开户跟机构"),
              (e.thead = ["股票名称", "机构净买入额", "涨跌幅"]),
              "mr" === e.type
                ? (e.tableImgTitle = {
                    white: n.longhuTableTitleUrlWhiteJgMr,
                    black: n.longhuTableTitleUrlBlackJgMr,
                  })
                : (e.tableImgTitle = {
                    white: n.longhuTableTitleUrlWhiteJgMc,
                    black: n.longhuTableTitleUrlBlackJgMc,
                  }));
        });
      },
      getStatData: function () {
        var t = this.env,
          e = t.__APP__,
          a = t.__WZQ__,
          n = t.__MP__,
          r = t.IS_WZQ_XCX;
        return e
          ? "IHN00p000b005"
          : a
          ? "I9700p000a034"
          : n
          ? "IzB00p000b098"
          : r
          ? "InM00p000b099"
          : "";
      },
      getChannelNumber: function () {
        var t = this.env,
          e = t.__APP__,
          a = t.__WZQ__,
          n = t.__MP__,
          r = t.IS_WZQ_XCX;
        return e
          ? "IHN00p000m009"
          : a
          ? "I9700p000l020"
          : n
          ? "IzB00p000l108"
          : r
          ? "InM00p000l109"
          : "";
      },
      getDataOptimize: function (t, e) {
        var n = this,
          r = this.stockArr;
        return (
          (t &&
            t.slice(0, 5).map(function (t) {
              var o = t[0],
                i = o.slice(0, 2),
                l = o.slice(2),
                s = "stock-icon-".concat(i.toUpperCase());
              return (
                r.push(o),
                (n.stockArr = r),
                (n.stocks = n.stockArr.join(",")),
                {
                  symbol: o,
                  market: i,
                  scode: l,
                  iconClass: s,
                  name: t[1],
                  jme: a.formatNum(a.formatAmount(t[e])),
                  zdf: "".concat(a.formatNum(t[e + 1]), "%"),
                }
              );
            })) ||
          []
        );
      },
      gotoStockDetail: function (t) {
        (t.code = t.symbol),
          this.report("longhubang_module_stock_click"),
          this.$emit("goToStockDetail", t);
      },
      report: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
      routeToPage: function (t) {
        this.$emit("routeToPage", t);
      },
    },
  };
Array ||
  (
    r.resolveComponent("LongHuBangBar") + r.resolveComponent("LongHuBangList")
  )();
var i = r._export_sfc(o, [
  [
    "render",
    function (t, e, a, n, o, i) {
      return {
        a: r.o(i.routeToPage, 5644),
        b: r.p({
          statData: o.statData,
          title: o.title,
          intor: o.intor,
          userInfo: a.userInfo,
          accountText: o.accountText,
          backgroundImage: o.backgroundImage,
          theme: a.theme,
          titleImage: o.titleImage,
        }),
        c: r.f(o.dataList, function (t, e, n) {
          return {
            a: e,
            b: r.o(i.gotoStockDetail, 5645, e),
            c: r.o(i.report, 5646, e),
            d: "447b3607-1-" + n,
            e: r.p({
              stocks: o.stocks,
              tableImgTitle: t.tableImgTitle,
              thead: t.thead,
              cloumeKeys: t.cloumeKeys,
              list: t.list,
              theme: a.theme,
              redUp: o.redUp,
              channelNumber: o.channelNumber,
              pageType: a.pageType,
              newsId: a.newsId,
              type: a.moduleData.type,
            }),
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-447b3607"],
]);
wx.createComponent(i);
