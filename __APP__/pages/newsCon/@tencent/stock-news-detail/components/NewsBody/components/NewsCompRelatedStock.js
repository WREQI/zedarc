var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, s) {
    return new Promise(function (n, i) {
      var o = function (t) {
          try {
            c(s.next(t));
          } catch (t) {
            i(t);
          }
        },
        r = function (t) {
          try {
            c(s.throw(t));
          } catch (t) {
            i(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(o, r);
        };
      c((s = s.apply(t, e)).next());
    });
  },
  s = require("../../../../../../../common/vendor.js"),
  n = require("../../../../stock-news-core/utils/request/index.js"),
  i = require("../../../../stock-news-core/utils/shy/index.js"),
  o = require("../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  r = require("../../../../stock-news-core/utils/bus.js"),
  c = require("../../../../stock-news-core/utils/tools.js");
require("../../../../../js-cookie/src/js.cookie.js");
var a = require("../../../../stock-news-base/service/market/RelatedStockHelper.js"),
  d = require("../../../../stock-news-core/utils/report.js"),
  u = {
    inject: ["isFullTeach"],
    props: [
      "symbols",
      "showType",
      "num",
      "pathname",
      "flucShowMode",
      "wzqConfig",
      "newsid",
    ],
    components: {
      FloatAnimationStock: function () {
        return "./float-animation-stock.js";
      },
    },
    directives: { "observe-visibility": o.ObserveVisibility },
    data: function () {
      var t = null == navigator ? void 0 : navigator.userAgent;
      return {
        fold: !0,
        list: [],
        listGroup: [],
        listOne: [],
        listMore: [],
        upgradeapp: !1,
        swiperData: [],
        sotckList: "",
        isMP: !0,
        isWZQ: !1,
        isAPP: s.StockBridge.ENV === s.EnvTypeEnum.SHY_NATIVE,
        animation: null,
        optionalFlag: !1,
        riseNum: 0,
        fallNum: 0,
        added: "click-add",
        stockPortraitList: [],
        stocksAddedStatusInObgect: {},
        visibilityChangedEnabled: !1,
        didReportBrow: !1,
        abtReportInfo: {},
        visible: !1,
        YTJ: "https://st.gtimg.com/design/d786539723cc94dc60596ceb3b6f6dc2.png",
        TJ: "https://st.gtimg.com/design/c062545d74c76a4a820b2d95c167a8d7.png",
        isAndroidApp:
          /\bAndroid([^;]+)/.test(t) &&
          s.StockBridge.ENV === s.EnvTypeEnum.SHY_NATIVE,
        currentSwiperIndex: 0,
      };
    },
    watch: {
      $route: function () {
        (this.swiperData = []), this.clearVisibleStatus(), this.init();
      },
      symbols: {
        immediate: !0,
        handler: function (t) {
          t.forEach(function (t) {
            var e = t.symbol;
            t.symbol = e;
          });
        },
      },
    },
    created: function () {
      this.init();
    },
    computed: {
      swiperOption: function () {
        var t = this;
        return {
          speed: 1200,
          autoplay: { delay: 4e3, disableOnInteraction: !1 },
          direction: "vertical",
          loop: this.swiperData && this.swiperData.length > 1,
          observer: !0,
          on: {
            click: function (e) {
              var s = t.$refs.swiper.swiper;
              e.target.className.includes("click-left")
                ? t.goto(
                    t.swiperData[s.realIndex].symbol,
                    t.swiperData[s.realIndex].name,
                    t.swiperData[s.realIndex].kcbFlag
                  )
                : e.target.className.includes("click-add")
                ? t.toggleAdded(!0, t.swiperData[s.realIndex].symbol)
                : e.target.className.includes("click-remove")
                ? t.toggleAdded(!1, t.swiperData[s.realIndex].symbol)
                : e.target.className.includes("click-right");
            },
          },
          preventClicks: !1,
        };
      },
    },
    methods: {
      init: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.symbols &&
                        this.symbols.length > 0 &&
                        (s.StockBridge.ENV === s.EnvTypeEnum.SHY_NATIVE &&
                          i.shy.onPageVisible(function () {
                            n.swiperData.forEach(function (t) {
                              var e = t.symbol;
                              i.shy.checkStockExist(e, function (t) {
                                var s = (t || {}).exist;
                                n.stocksAddedStatusInObgect[e] !==
                                  (s ? 1 : 0) &&
                                  (n.stocksAddedStatusInObgect,
                                  (n.stocksAddedStatusInObgect[e] = s ? 1 : 0),
                                  n.updateJumperData(),
                                  n.$forceUpdate());
                              });
                            });
                          }),
                        this.getData());
                    case 1:
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
      clearVisibleStatus: function () {
        (this.visibilityChangedEnabled = !1), (this.animation = null);
      },
      handleScroll: function () {
        this.visibilityChangedEnabled = !0;
      },
      plateReport: function () {
        var t = !1;
        return (
          this.swiperData.forEach(function (e) {
            e.symbol.startsWith("pt") && (t = !0);
          }),
          t
        );
      },
      triggerBarVisible: function (t) {
        return (
          !(!t && !this.animation) &&
          this.visible != t &&
          ((this.visible = t),
          this.updateJumperData(),
          (this.animation = t ? "involution" : "fade-out"),
          void (t && (this.currentSwiperIndex = 0)))
        );
      },
      toggleAdded: function (o, r) {
        return e(
          this,
          null,
          t().mark(function e() {
            var c,
              a,
              u,
              l,
              p,
              h,
              g,
              k,
              f = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (d.report("news.detail.optional_click", {
                          report_info: this.abtReportInfo,
                          newsid: this.newsid,
                          stockid: r,
                        }),
                        s.StockBridge.ENV !== s.EnvTypeEnum.SHY_NATIVE)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return (t.next = 3), this.checkAppLogin();
                    case 3:
                      if (!t.sent) {
                        t.next = 7;
                        break;
                      }
                      (t.t0 = this.AppToggleAdded(o, r)), (t.next = 8);
                      break;
                    case 7:
                      t.t0 = i.shy.login(function (t) {
                        "success" === t.status && f.AppToggleAdded(o, r);
                      });
                    case 8:
                      return t.abrupt("return", void t.t0);
                    case 9:
                      if (
                        ((this.added = o ? "click-remove" : "click-add"),
                        (this.stocksAddedStatusInObgect[r] =
                          0 === this.stocksAddedStatusInObgect[r] ? 1 : 0),
                        (c = {
                          timestamp: new Date().getTime(),
                          act: o ? "sa" : "sd",
                          grpid: "1",
                          code: r,
                        }),
                        (a = this.getParams()),
                        (u = a.app),
                        (l = a.openId),
                        (p = a.fsKey),
                        (h = a.check),
                        l)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("return");
                    case 13:
                      return (
                        (g =
                          "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                            .concat(u, "&appid=wx9cf8c670ebd68ce4&openid=")
                            .concat(l, "&fskey=")
                            .concat(p, "&check=")
                            .concat(h)),
                        (t.prev = 14),
                        (k = { seq: encodeURIComponent(JSON.stringify([c])) }),
                        (t.prev = 16),
                        (t.next = 19),
                        n.request(g, k, { method: "post", isShowToast: !1 })
                      );
                    case 19:
                      t.next = 23;
                      break;
                    case 21:
                      (t.prev = 21), (t.t1 = t.catch(16));
                    case 23:
                      this.getStocksAddedStatusInObgect(), (t.next = 29);
                      break;
                    case 26:
                      (t.prev = 26),
                        (t.t2 = t.catch(14)),
                        d.aegisReportError(t.t2);
                    case 29:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [
                [14, 26],
                [16, 21],
              ]
            );
          })
        );
      },
      AppToggleAdded: function (t, e) {
        var s = this;
        this.stocksAddedStatusInObgect[e] =
          0 === this.stocksAddedStatusInObgect[e] ? 1 : 0;
        var n = function (t) {
            (t && "fail" !== t.status) ||
              (s.stocksAddedStatusInObgect[e] =
                0 === s.stocksAddedStatusInObgect[e] ? 0 : 1),
              s.updateJumperData(),
              s.$forceUpdate();
          },
          o = "news.newsdetail.related_stock_" + (t ? "add" : "cancel"),
          r = [e],
          c = [t ? 1 : 0],
          a = {
            newsid: this.newsid,
            fchannel_id_fm_i: "IGF00p000l090",
            stocklist: r.join(","),
            hasaddlist: c.join(","),
          };
        d.report(o, a),
          t
            ? i.shy.addStockToGroup(e, void 0, "1", n)
            : i.shy.removeStockFromGroup(e, n);
      },
      checkAppLogin: function () {
        return new Promise(function (t) {
          i.shy.getUserInfo(function (e) {
            t(e && "none" !== e.type);
          });
        });
      },
      judgeAdded: function (n) {
        return e(
          this,
          null,
          t().mark(function e() {
            var o = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (s.StockBridge.ENV !== s.EnvTypeEnum.SHY_NATIVE) {
                        t.next = 6;
                        break;
                      }
                      return (t.next = 3), this.checkAppLogin();
                    case 3:
                      if (t.sent) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.stocksAddedStatusInObgect[n] = 0),
                        void this.checkReportBrow())
                      );
                    case 5:
                      i.shy.checkStockExist(n, function (t) {
                        var e = (t || {}).exist;
                        (o.stocksAddedStatusInObgect[n] = e ? 1 : 0),
                          o.checkReportBrow(),
                          o.$forceUpdate();
                      });
                    case 6:
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
      checkReportBrow: function () {
        var t = this;
        if (
          !this.didReportBrow &&
          Object.keys(this.stocksAddedStatusInObgect).length ===
            this.symbols.length
        ) {
          var e = [],
            s = [];
          this.symbols.forEach(function (n) {
            var i = n.symbol;
            i &&
              "" !== i &&
              (e.push(i), s.push(t.stocksAddedStatusInObgect[i]));
          }),
            this.newsid,
            e.join(","),
            s.join(",");
        }
      },
      getStringAfterSecondDot: function (t) {
        var e = t.split(".");
        return 3 === e.length ? ".".concat(e.slice(2).join(".")) : "";
      },
      getStocksAddedStatusInObgect: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var i,
              o,
              c,
              u,
              l,
              p,
              h,
              g,
              k,
              f,
              b = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (s.StockBridge.ENV !== s.EnvTypeEnum.SHY_NATIVE) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      if (
                        ((i = this.getAccompanyStocks(this.symbols)),
                        (o = this.getParams()),
                        (c = o.app),
                        (u = o.openId),
                        (l = o.fsKey),
                        (p = o.check),
                        u)
                      ) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return");
                    case 5:
                      return (
                        (t.prev = 5),
                        (h = null),
                        (t.prev = 7),
                        (t.next = 10),
                        n.request(
                          "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
                          {
                            stocks: i,
                            app: c,
                            appid: "wx9cf8c670ebd68ce4",
                            check: p,
                            openid: u,
                            fskey: l,
                          },
                          { method: "get", isShowToast: !1 }
                        )
                      );
                    case 10:
                      (h = t.sent), (t.next = 15);
                      break;
                    case 13:
                      (t.prev = 13), (t.t0 = t.catch(7));
                    case 15:
                      h &&
                        0 === h.code &&
                        h.data &&
                        ((g = h.data),
                        (k = {}),
                        Object.keys(g).forEach(function (t) {
                          var e = b.getStringAfterSecondDot(t);
                          if (e.length > 0) {
                            var s =
                              t
                                .replace(/(\.OQ|\.A|\.N|\.AM|\.PS)$/gi, "")
                                .replace(/\./g, "__") + e;
                            k[s] = g[t];
                          } else k[t] = g[t];
                        }),
                        (f = new a.RelatedStockHelper()),
                        (this.stocksAddedStatusInObgect =
                          f.handleUsStockCode(k))),
                        r.BUS.$emit("stockList", {
                          data: this.swiperData,
                          goto: this.goto,
                          stocksAddedStatusInObgect:
                            this.stocksAddedStatusInObgect,
                        }),
                        (t.next = 22);
                      break;
                    case 19:
                      (t.prev = 19),
                        (t.t1 = t.catch(5)),
                        d.aegisReportError(t.t1);
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [
                [5, 19],
                [7, 13],
              ]
            );
          })
        );
      },
      getParams: function () {
        var t, e, n;
        return (
          s.wx$1 &&
            ((t = "zxg_xcx"),
            (e = s.wx$1.getStorageSync("_qluin")),
            (n = s.wx$1.getStorageSync("_qlskey"))),
          { app: t, openId: e, fsKey: n, check: 11 }
        );
      },
      getVisibleSetting: function () {
        var t = this;
        return (
          !!this.visibilityChangedEnabled && {
            callback: function (e, s) {
              return t.visibilityChanged(e, s);
            },
          }
        );
      },
      visibilityChanged: function (t) {
        this.triggerBarVisible(!t), (this.stockList = t);
      },
      goto: function (t, e, n) {
        var i, o, r;
        if (!t.startsWith("jj")) {
          t = t.replace(/^us\.?/, "us");
          var c = "";
          /^[a-zA-Z]+/.test(t) && (c = t.substring(0, 2));
          var a = t.replace(c, "");
          if ("bj" === c) return;
          var u =
              null !=
              (i = {
                sz: 0,
                sh: 1,
                hk: 2,
                us: 3,
                pt: "p",
                ph: "ph",
                pu: "pu",
                cs: "cs",
              }[c])
                ? i
                : c,
            l = null != (o = getCurrentPages()) ? o : [],
            p = l[l.length - 2];
          if (p && "pages/quote/quote" === p.route) {
            var h = null != (r = p.options) ? r : {},
              g = h.scode,
              k = h.market;
            if (g === a && String(k) === String(u))
              return void s.wx$1.navigateBack();
          }
          s.wx$1.navigateTo({
            url: "/pages/quote/quote?market=".concat(u, "&scode=").concat(a),
          }),
            d.report("news.mini.detail.relatedStock", {
              newsid: this.newsid,
              stockid: t,
            }),
            this.plateReport() &&
              d.report("news.detail.relative_plate_click", {
                newsid: this.newsid,
                stockid: t,
              });
        }
      },
      setFold: function () {
        (this.fold = !this.fold),
          this.fold
            ? (this.list = this.listOne)
            : ((this.list = this.listMore),
              d.report("stockmore_724feed_click", {}));
      },
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s,
              i,
              o,
              c,
              a,
              d,
              u,
              l,
              p,
              h,
              g,
              k = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s = this),
                        (i = []),
                        (c = { hk: "r_", us: "t_" }),
                        this.symbols.forEach(function (t) {
                          var e = t.symbol.slice(0, 2);
                          (o =
                            (c[e] || "") +
                            t.symbol
                              .replace(/^us\.?/, "us")
                              .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                              .replace(/\./g, "__")),
                            i.push(o);
                        }),
                        (t.next = 5),
                        n.request(
                          "https://qt.gtimg.cn/utf8/?fmt=json&q="
                            .concat(i.join(","), "&r=")
                            .concat(Math.random()),
                          {},
                          { method: "get", isShowToast: !1 }
                        )
                      );
                    case 5:
                      for (
                        a = t.sent,
                          d = a.data ? a.data : a || {},
                          u = [],
                          l = [],
                          p = [],
                          this.symbols
                            .filter(function (t) {
                              return !(
                                t.symbol.startsWith("jj") ||
                                t.symbol.startsWith("nq") ||
                                t.symbol.startsWith("ft") ||
                                t.symbol.startsWith("bj")
                              );
                            })
                            .forEach(function (t) {
                              var e = t.symbol.slice(0, 2),
                                s = c[e] || "";
                              (o = t.symbol
                                .replace(/^us\.?/, "us")
                                .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                                .replace(/\./g, "__")),
                                (d[o] = d[s + o] || {});
                              var n = "jj" === e,
                                i = n
                                  ? d[o][7] &&
                                    Number.parseFloat(d[o][7]).toFixed(2)
                                  : d[o][32] || "";
                              u.push({
                                name: t.name.replace(/\.[A-Z]+$/i, ""),
                                symbol: n ? o : o.substr(0, 2) + d[o][2],
                                marketTag: o.substr(0, 2).toUpperCase(),
                                updown: i,
                                state: d[o][40] || "",
                                price: d[o][3] || "",
                                kcbFlag: "kcb" === t["data-bktype"],
                                stColor: k.getStyle(i),
                              });
                            }),
                          h = 0;
                        h < u.length;
                        h += 2
                      )
                        p.push(u[h]),
                          u[h + 1] && p.push(u[h + 1]),
                          l.push(p),
                          (p = []);
                      return (
                        s.num
                          ? (s.listOne = l.slice(0, s.num))
                          : (s.listOne = l),
                        (s.listMore = l),
                        "list" === s.showType && (s.listMore = s.listOne),
                        (s.list = s.listOne),
                        (this.swiperData =
                          s.list &&
                          s.list.reduce(function (t, e) {
                            return t.concat(e);
                          }, [])),
                        (g = this.getAccompanyStocks(this.swiperData)),
                        (t.next = 16),
                        this.getStockPortrait(g)
                      );
                    case 16:
                      return (
                        this.swiperData.forEach(function (t) {
                          k.judgeAdded(t.symbol),
                            t.updown.includes("-")
                              ? (k.fallNum += 1)
                              : (k.riseNum += 1),
                            k.stockPortraitList.forEach(function (e) {
                              e.stock_code === t.symbol &&
                                (t.character_tag = e.character_tag);
                            });
                        }),
                        (this.swiperData.newsid = this.newsid),
                        r.BUS.$emit("stockList", {
                          data: this.swiperData,
                          goto: this.goto,
                          stocksAddedStatusInObgect:
                            this.stocksAddedStatusInObgect,
                        }),
                        (t.next = 21),
                        this.getStocksAddedStatusInObgect()
                      );
                    case 21:
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
      getAccompanyStocks: function (t) {
        if (t)
          return t
            .map(function (t) {
              return t.symbol;
            })
            .filter(function (t) {
              return !!t;
            })
            .join(",");
      },
      getStockPortrait: function (s) {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), s)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 3:
                      return (
                        "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi",
                        ((i = {
                          _appver: "9.8.0",
                          source: "wzq",
                          stock_code: s,
                        }).sign = c.getXGSign(i)),
                        (o = ""
                          .concat(
                            "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi",
                            "?_appver="
                          )
                          .concat(i._appver, "&sign=")
                          .concat(i.sign, "&source=")
                          .concat(i.source, "&stock_code=")
                          .concat(i.stock_code)),
                        (r = null),
                        (t.prev = 7),
                        (t.next = 10),
                        n.request(o, {}, { method: "get", dropCookie: !0 })
                      );
                    case 10:
                      (r = t.sent), (t.next = 15);
                      break;
                    case 13:
                      (t.prev = 13), (t.t0 = t.catch(7));
                    case 15:
                      r && "0" === r.retcode
                        ? (this.stockPortraitList = r.data)
                        : (this.stockPortraitList = []),
                        (t.next = 21);
                      break;
                    case 18:
                      (t.prev = 18),
                        (t.t1 = t.catch(0)),
                        d.aegisReportError(t.t1);
                    case 21:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [
                [0, 18],
                [7, 13],
              ]
            );
          })
        );
      },
      getStyle: function (t) {
        var e = !this.flucShowMode || "redup" === this.flucShowMode;
        return t > 0
          ? e
            ? "up"
            : "down reverse"
          : t < 0
          ? e
            ? "down"
            : "up reverse"
          : "flat";
      },
      getUpdown: function (t) {
        return 1 * t > 0
          ? "+".concat(t, "%")
          : 1 * t < 0 || "" !== t
          ? "".concat(t, "%")
          : t;
      },
      updateJumperData: function () {
        document.getElementById("compTopJumper") &&
          r.BUS.$emit("toogleRelatedStock", {
            visible: this.visible,
            stockList: this.swiperData,
            symbols: this.symbols,
            stocksAddedStatusInObgect: this.stocksAddedStatusInObgect,
            toggleAdded: this.toggleAdded,
            goto: this.goto,
          });
      },
      mpOnShow: function () {
        this.getStocksAddedStatusInObgect();
      },
      checkStockAddStatus: function (t) {
        var e = t.symbol;
        return 1 == this.stocksAddedStatusInObgect[e];
      },
      onSwiperChanged: function (t) {
        var e = t.detail.current;
        this.currentSwiperIndex = e;
      },
      onClickSwiperStock: function () {
        var t = this.swiperData[this.currentSwiperIndex];
        this.goto(t.symbol, t.name, t.kcbFlag);
      },
      onClickSwiperAdd: function () {
        var t = this.swiperData[this.currentSwiperIndex];
        this.toggleAdded(!0, t.symbol);
      },
    },
  };
Array || s.resolveComponent("FloatAnimationStock")();
var l = s._export_sfc(u, [
  [
    "render",
    function (t, e, n, i, o, r) {
      return s.e(
        { a: !o.isWZQ && !o.isMP },
        o.isWZQ || o.isMP
          ? {}
          : {
              b: s.f(o.list, function (t, e, n) {
                return s.e(
                  {
                    a: s.f(t, function (t, e, n) {
                      return s.e(
                        {
                          a: "url(".concat(
                            require("./NewsCompContent/assets/plate/".concat(
                              t.marketTag,
                              ".png"
                            )),
                            ")"
                          ),
                          b: s.t(t.name),
                          c: s.t(r.getUpdown(t.updown)),
                          d: s.n(t.stColor),
                          e: r.checkStockAddStatus(t),
                        },
                        r.checkStockAddStatus(t) ? { f: o.YTJ } : { g: o.TJ },
                        {
                          h: s.o(
                            function (e) {
                              return r.toggleAdded(
                                1 != o.stocksAddedStatusInObgect[t.symbol],
                                t.symbol
                              );
                            },
                            4364,
                            e
                          ),
                          i: e,
                          j: s.o(
                            function (e) {
                              return r.goto(t.symbol, t.name, t.kcbFlag);
                            },
                            4365,
                            e
                          ),
                        }
                      );
                    }),
                    b: 1 === t.length,
                  },
                  (t.length, {}),
                  { c: e }
                );
              }),
              c: s.n(o.isAndroidApp ? "android" : ""),
              d: o.fold ? 1 : "",
              e: s.o(function (t) {
                return r.setFold();
              }, 4366),
              f: "news" === n.showType && o.listMore.length > n.num,
            },
        { g: o.isAPP && o.visible },
        o.isAPP && o.visible
          ? {
              h: s.f(o.swiperData, function (t, e, i) {
                return {
                  a: s.sr("floatStock-".concat(e), "2b9a038b-0-" + i, { f: 1 }),
                  b: "floatStock-".concat(e),
                  c: "floatStock-"
                    .concat(e, "-")
                    .concat(o.stocksAddedStatusInObgect[t.symbol]),
                  d: s.o(
                    r.onClickSwiperStock,
                    4367,
                    "floatStock-"
                      .concat(e, "-")
                      .concat(o.stocksAddedStatusInObgect[t.symbol])
                  ),
                  e: s.o(
                    r.onClickSwiperAdd,
                    4368,
                    "floatStock-"
                      .concat(e, "-")
                      .concat(o.stocksAddedStatusInObgect[t.symbol])
                  ),
                  f: "2b9a038b-0-" + i,
                  g: s.p({
                    symbol: n.symbols[e],
                    stock: t,
                    stocksAddedStatusInObgect: o.stocksAddedStatusInObgect,
                  }),
                  h: e,
                };
              }),
              i: o.currentSwiperIndex,
              j: o.swiperData && o.swiperData.length > 1,
              k: s.o(function () {
                return (
                  r.onSwiperChanged && r.onSwiperChanged.apply(r, arguments)
                );
              }, 4369),
              l: s.n(o.animation),
              m: "accompany-".concat(o.swiperData.length),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2b9a038b"],
]);
wx.createComponent(l);
