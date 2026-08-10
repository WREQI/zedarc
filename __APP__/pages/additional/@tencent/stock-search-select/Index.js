require("../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  h = function (t, e, i) {
    return e in t
      ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  p = function (t, e) {
    for (var i in e || (e = {})) u.call(e, i) && h(t, i, e[i]);
    if (c) {
      var r,
        s = n(c(e));
      try {
        for (s.s(); !(r = s.n()).done; ) {
          i = r.value;
          l.call(e, i) && h(t, i, e[i]);
        }
      } catch (t) {
        s.e(t);
      } finally {
        s.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return o(t, a(e));
  },
  f = function (t, e, i) {
    return new Promise(function (r, n) {
      var s = function (t) {
          try {
            a(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            a(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(s, o);
        };
      a((i = i.apply(t, e)).next());
    });
  },
  m = require("../../../../common/vendor.js"),
  g = require("../../js-cookie/src/js.cookie.js"),
  k = require("../stock-hq-core/utils/storage/local.js"),
  v = require("../stock-hq-data/index.js");
function y(t, e, i) {
  var r = {}.atBegin;
  return (function (t, e, i) {
    var r,
      n = i || {},
      s = n.noTrailing,
      o = void 0 !== s && s,
      a = n.noLeading,
      c = void 0 !== a && a,
      u = n.debounceMode,
      l = void 0 === u ? void 0 : u,
      h = !1,
      p = 0;
    function d() {
      r && clearTimeout(r);
    }
    function f() {
      for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
        n[s] = arguments[s];
      var a = this,
        u = Date.now() - p;
      function f() {
        (p = Date.now()), e.apply(a, n);
      }
      function m() {
        r = void 0;
      }
      h ||
        (c || !l || r || f(),
        d(),
        void 0 === l && u > t
          ? c
            ? ((p = Date.now()), o || (r = setTimeout(l ? m : f, t)))
            : f()
          : !0 !== o && (r = setTimeout(l ? m : f, void 0 === l ? t - u : t)));
    }
    return (
      (f.cancel = function (t) {
        var e = (t || {}).upcomingOnly,
          i = void 0 !== e && e;
        d(), (h = !i);
      }),
      f
    );
  })(t, e, { debounceMode: !1 !== (void 0 !== r && r) });
}
var S = {
    getSearchResult: function (t, e) {
      return f(
        this,
        null,
        r().mark(function i() {
          var n;
          return r().wrap(function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (i.next = 2), b();
                case 2:
                  return (
                    (n = i.sent),
                    i.abrupt(
                      "return",
                      t.request(
                        "https://proxy.finance.qq.com/cgi/cgi-bin/smartbox/search",
                        "get",
                        p(p({}, e), n),
                        { forceCallback: !0 }
                      )
                    )
                  );
                case 4:
                case "end":
                  return i.stop();
              }
          }, i);
        })
      );
    },
    getQtData: function (t, e) {
      return t.request(
        "https://proxy.finance.qq.com/cgi/cgi-bin/appstockshow/query?app=3G",
        "post",
        { code: e.code }
      );
    },
  },
  b = function () {
    if (m.StockBridge.ENV === m.EnvTypeEnum.MP)
      return {
        check: 11,
        app: m.OriginTypeEnum.mpweapp,
        appid: "wx4ffb369b6881ee5e",
        openid: k.sls.getItem("_qluin"),
        fskey: k.sls.getItem("_qlskey"),
      };
    if (m.StockBridge.ENV === m.EnvTypeEnum.WZQ) {
      return {
        app: "wzq",
        appid: "wx9cf8c670ebd68ce4",
        openid: g.cookie.get("wzq_qluin"),
        fskey: g.cookie.get("wzq_qlskey"),
        access_token: g.cookie.get("wzq_qlskey"),
        check: 11,
        _h5ver: "2.0.1",
      };
    }
    return "mpweapp" === m.ShellTypeEnum.SHY
      ? new Promise(function (t) {
          shy.getUserInfo(function (e) {
            return t(d(p({}, e), { app: "zxg" }));
          });
        })
      : {
          check: 11,
          app: "mini_h5",
          appid: "wx9cf8c670ebd68ce4",
          openid: g.cookie.get("wzq_qluin"),
          fskey: g.cookie.get("wzq_qlskey"),
        };
  },
  w = (function () {
    function t(i) {
      var n = this;
      e(this, t);
      var s = i.request,
        o = i.ENV;
      this.Serv = new v.ChooseApi(function (t) {
        return new Promise(function (e, i) {
          return f(
            n,
            null,
            r().mark(function n() {
              var a, c, u, l, h, f, v, y, S, b, w;
              return r().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        "string" == typeof t && (t = { url: t }),
                        (c = (a = t).data),
                        (u = void 0 === c ? {} : c),
                        (l = a.method),
                        (h = void 0 === l ? "get" : l),
                        (f = a.options),
                        (v = void 0 === f ? {} : f),
                        (y = t.url),
                        (S = t.params),
                        (b = void 0 === S ? {} : S),
                        (y = y.replace(/(\?app|&app)=[^&]*/g, "")),
                        (r.next = 7),
                        "mp" === o
                          ? {
                              app: "wzqxcx",
                              appid: "wx4ffb369b6881ee5e",
                              openid: k.sls.getItem("_qluin"),
                              fskey: k.sls.getItem("_qlskey"),
                              check: 11,
                              new_opt: 1,
                            }
                          : "mpweapp" === m.ShellTypeEnum.SHY
                          ? new Promise(function (t) {
                              shy.getUserInfo(function (e) {
                                return t(d(p({}, e), { app: "3G" }));
                              });
                            })
                          : {
                              app: "wzq",
                              appid: "wx9cf8c670ebd68ce4",
                              openid: g.cookie.get("wzq_qluin"),
                              fskey: g.cookie.get("wzq_qlskey"),
                              access_token: "",
                              check: 11,
                              _devId: g.cookie.get("wzq_qlskey"),
                              buildType: "rdm",
                              new_opt: 1,
                            }
                      );
                    case 7:
                      (w = r.sent),
                        s(
                          y,
                          h,
                          p(p({}, b), w),
                          d(p({}, v), {
                            params: p(p({}, b), w),
                            data: u,
                            headers: {
                              "content-type":
                                "application/x-www-form-urlencoded; charset=UTF-8",
                            },
                          })
                        )
                          .then(function (t) {
                            !t || (void 0 !== t.code && 0 != +t.code)
                              ? i({ msg: t && t.msg, retmsg: t && t.msg })
                              : e(t);
                          })
                          .catch(function (t) {
                            i(t);
                          });
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, n);
            })
          );
        });
      });
    }
    return (
      i(t, [
        {
          key: "queryUserStock",
          value: function () {
            return f(
              this,
              null,
              r().mark(function t() {
                return r().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            this.Serv.queryUserStock({
                              range: "group",
                              followedVer: 0,
                              allInfoVer: 0,
                              all_groups: 1,
                            })
                          );
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
        },
      ]),
      t
    );
  })(),
  T = ["SZ", "SH", "HK", "US"],
  q = ["FJ", "FJ-CX", "KJ-HB", "KJ", "LOF", "ETF", "QDII-LOF", "QDII-ETF"],
  R = function (t, e) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      r = (function (t, e) {
        return "jj" === e
          ? "cwjj"
          : q.includes(t)
          ? "cnjj"
          : v.utils.isDebt(t) ||
            v.utils.isNationalDebt(t) ||
            v.utils.isTransferableDebt(t)
          ? "zhai"
          : v.utils.isKeChuangStock(t)
          ? "kch"
          : v.utils.isChuangYeStock(t)
          ? "chy"
          : v.utils.isIndex(t) || v.utils.isCSIndex(t)
          ? "uk" === e
            ? "ukzs"
            : "ft" === e
            ? "ft"
            : "hk" === e
            ? "hkzs"
            : "us" === e
            ? "uszs"
            : "nq" === e
            ? "nqzs"
            : "hszs"
          : "";
      })(i, e);
    return "lbl-".concat(
      r ||
        (T[t] && T[t].toLowerCase()) ||
        (null == t ? void 0 : t.toLowerCase()) ||
        (null == e ? void 0 : e.toLowerCase()),
      "-market"
    );
  },
  x = m.StockBridge.ENV === m.EnvTypeEnum.MP,
  _ = x ? getApp().globalData : "",
  E =
    "wzq" === m.StockBridge.ENV
      ? "wzq-search-history"
      : "search_select_history",
  C = "点击搜索股票/板块/基金",
  j = null,
  O = new Set(),
  P = {
    options: { styleIsolation: "shared" },
    components: {
      listSearch: function () {
        return "./components/listSearch.js";
      },
    },
    provide: function () {
      return { theme: this.theme };
    },
    props: {
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    data: function () {
      return {
        autofocus: !0,
        barConfig: { placeholder: C, type: "default" },
        isSearching: !1,
        showClose: "hide",
        userStockReady: !1,
        searchResult: [],
        searchHistory: [],
        userStock: [],
        searchPlateResult: [],
        searchFundResult: [],
        isStockLimit: !1,
        isPlateLimit: !1,
        isFundLimit: !1,
        showMoreObj: { stock: !1, plate: !1, fund: !1 },
        mapMarket: {
          sz: 0,
          sh: 1,
          hk: 2,
          us: 3,
          pt: "pt",
          fu: "fu",
          fx: "fx",
          ft: "ft",
          bj: "bj",
          nq: "nq",
          cs: "cs",
          uk: "uk",
          hd: "hd",
          zhai: "zhai",
          jj: "jj",
          sp: "sp",
        },
        newServ: null,
        inputConfirmed: 0,
        isReportedInput: !1,
        inputValue: "",
        keyword: "",
        listConfig: new Map([
          [
            "stock",
            {
              name: "股票",
              listName: "searchResult",
              module: "stock",
              limit: 5,
              isStock: !0,
            },
          ],
          [
            "plate",
            {
              name: "板块",
              listName: "searchPlateResult",
              module: "plate",
              limit: 5,
              isStock: !0,
            },
          ],
          [
            "fund",
            {
              name: "基金",
              listName: "searchFundResult",
              module: "searchModuleAllFund",
              limit: 5,
              isStock: !0,
            },
          ],
        ]),
        renderListOrder: [],
        reportInfo: {},
        intention: "",
        hasReq: !1,
        isListSwiping: !1,
      };
    },
    computed: {
      placeholder: function () {
        return C;
      },
      renderPlaceholder: function () {
        var t = String(this.placeholder || ""),
          e = Array.from(t);
        return e.length > 15 ? "".concat(e.slice(0, 15).join(""), "...") : t;
      },
      isMP: function () {
        return x;
      },
      isApp: function () {
        return "mpweapp" === m.ShellTypeEnum.SHY;
      },
      isLite: function () {
        return ["wzqlight", "mpwzq"].includes("mpweapp");
      },
      isWzq: function () {
        return "wzq" === m.StockBridge.ENV;
      },
      theme: function () {
        return this.isLite ? "lite" : "profession";
      },
      pageSearchFrom: function () {
        return this.isSearching
          ? this.inputConfirmed
            ? "searchresultpage"
            : "suggestpage"
          : "searchpage";
      },
      notSearchingNoData: function () {
        var t, e;
        return !(
          this.isSearching ||
          !this.userStockReady ||
          (null == (t = this.userStock) ? void 0 : t.length) ||
          (null == (e = this.searchHistory) ? void 0 : e.length)
        );
      },
      groupId: function () {
        var t,
          e =
            m.StockBridge.ENV === m.EnvTypeEnum.MP
              ? this.queryData
              : null == (t = this.$route)
              ? void 0
              : t.query;
        return (null == e ? void 0 : e.groupId) || "";
      },
      isPc: function () {
        var t, e;
        return (
          this.isMP &&
          (null ==
          (e = null == (t = null == _ ? void 0 : _.detect) ? void 0 : t.env)
            ? void 0
            : e.IS_PCWEIXIN)
        );
      },
    },
    created: function () {
      return f(
        this,
        null,
        r().mark(function t() {
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (this.newServ = new w(m.StockBridge)),
                      this.hasReq || ((this.hasReq = !0), this.init()),
                      (this.debounceSubmit = y(500, this.submitFunc));
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
    mounted: function () {
      var t = this;
      this.handleDirectResult(),
        this.getValFromQuery(),
        this.isApp &&
          ((this._onTouchmoveNative = function (e) {
            return t.onTouchmove(e);
          }),
          this.$el.addEventListener("touchmove", this._onTouchmoveNative, {
            passive: !1,
          }));
    },
    beforeDestroy: function () {
      this.clear(),
        this.isApp &&
          this._onTouchmoveNative &&
          this.$el.removeEventListener("touchmove", this._onTouchmoveNative);
    },
    activated: function () {
      (this.showMoreObj = { stock: !1, plate: !1, fund: !1 }),
        this.hasReq || ((this.hasReq = !0), this.init());
    },
    deactivated: function () {
      this.clear();
    },
    onPageShow: function () {
      this.init();
    },
    onPageHide: function () {
      this.clear();
    },
    methods: {
      reportEvent: function (t, e) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.isApp
          ? shy.reportAnalytics({ eventName: t, dataObject: i })
          : m.StockBridge.report(e, i);
      },
      handleDirectResult: function () {
        var t,
          e =
            null == (t = null == this ? void 0 : this.queryData)
              ? void 0
              : t.directResult;
        if (e)
          try {
            (this.inputValue = decodeURIComponent(e)),
              this.getSearchResult("", this.inputValue);
          } catch (t) {}
      },
      onTouchmove: function (t) {
        var e;
        if ((this.triggerBlur(), !this.isMP)) {
          var i =
            null == (e = this.$el) ? void 0 : e.querySelector(".list-wrapper");
          (i && i.contains(t.target)) || t.preventDefault();
        }
      },
      onListTouchStart: function (t) {
        this.isMP ||
          ((this._listTouchStartY = t.touches[0].clientY),
          (this._listTouchStartScrollTop = t.currentTarget.scrollTop),
          (this.isListSwiping = !1));
      },
      onListTouchMove: function (t) {
        if ((this.triggerBlur(), !this.isMP)) {
          t.stopPropagation();
          var e = t.currentTarget,
            i = this._listTouchStartY - t.touches[0].clientY,
            r = e.scrollTop,
            n = e.scrollHeight - e.clientHeight;
          Math.abs(i) > 10 && (this.isListSwiping = !0),
            ((i < 0 && r <= 0) || (i > 0 && r >= n)) && t.preventDefault();
        }
      },
      triggerBlur: function () {
        var t, e;
        null == (e = null == (t = this.$refs) ? void 0 : t.searchBox) ||
          e.blur();
      },
      init: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.queryData,
          i = e.searchFrom,
          r = void 0 === i ? "" : i;
        this.isMP ||
          (this.$nextTick(function () {
            var e, i;
            null == (i = null == (e = t.$refs) ? void 0 : e.searchBox) ||
              i.focus();
          }),
          r && this.initStatus()),
          this.getSearchHistory(),
          this.reqUserStock(this.resUserStock);
      },
      clear: function () {
        clearTimeout(j), (this.hasReq = !1);
      },
      switchTab: function (t) {
        this.showMoreObj[t] = !0;
      },
      scrollToTop: function () {
        clearTimeout(j),
          (j = setTimeout(function () {
            x ? m.wx$1.pageScrollTo({ scrollTop: 0 }) : window.scrollTo(0, 0);
          }, 1e3));
      },
      getAppStorage: function (t) {
        return new Promise(function (e) {
          shy.getStorage(t, function (t) {
            t.data && "null" !== t.data ? e(JSON.parse(t.data)) : e([]);
          });
        });
      },
      setAppStorage: function (t, e) {
        shy.setStorage(t, JSON.stringify(e));
      },
      getSearchHistory: function () {
        return f(
          this,
          null,
          r().mark(function t() {
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.isSearching), t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.getSearchHistoryFromStorage();
                    case 4:
                      this.searchHistory.length > 0 &&
                        this.reportEvent(
                          "base.search.sqedit_history_brow",
                          "base.search.search_history_brow",
                          {
                            contentId: this.searchHistory
                              .map(function (t) {
                                return t.code;
                              })
                              .join(","),
                          }
                        );
                    case 5:
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
      getSearchHistoryFromStorage: function () {
        return f(
          this,
          null,
          r().mark(function e() {
            var i,
              n,
              s,
              o = this;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = function (e, i, r) {
                          var n,
                            s =
                              null ==
                              (n = Object.entries(o.mapMarket).find(function (
                                i
                              ) {
                                var r = t(i, 2),
                                  n = (r[0], r[1]);
                                return String(n) === String(e);
                              }))
                                ? void 0
                                : n[0];
                          return s
                            ? { code: "".concat(s).concat(i), stockType: r }
                            : { code: "".concat(e).concat(i), stockType: "BK" };
                        }),
                        (n = []),
                        !this.isApp)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), this.getAppStorage(E);
                    case 5:
                      (e.t0 = e.sent), (e.next = 9);
                      break;
                    case 8:
                      e.t0 = m.StockBridge.getStorage(E) || [];
                    case 9:
                      (n = e.t0),
                        (s = (n || []).map(function (t) {
                          return {
                            name: t.name,
                            suggest: t.suggest,
                            status: t.status,
                            code: o.isWzq
                              ? t.symbol
                              : i(t.market, t.scode, t.stockType).code,
                            type: o.isWzq
                              ? t.stocktype
                              : i(t.market, t.scode, t.stockType).stockType,
                          };
                        })),
                        (this.searchHistory = this.setRenderStock(s).splice(
                          0,
                          5
                        ));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      setSearchHistory: function (t) {
        return f(
          this,
          null,
          r().mark(function e() {
            var i,
              n,
              s,
              o,
              a,
              c,
              u,
              l,
              h,
              p,
              d,
              f,
              g,
              k,
              v = this;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((i = []), !this.isApp)) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 4), this.getAppStorage(E);
                    case 4:
                      (e.t0 = e.sent), (e.next = 8);
                      break;
                    case 7:
                      e.t0 = m.StockBridge.getStorage(E);
                    case 8:
                      for (
                        (i = e.t0) instanceof Array || (i = []),
                          n = t.name,
                          s = t.code,
                          o = t.isChoose,
                          a = t.suggest,
                          c = t.status,
                          u = t.scode,
                          l = t.market,
                          h = t.stockType,
                          p = t.type,
                          d = t.noAdd,
                          f = this.isWzq
                            ? {
                                name: n,
                                symbol: s,
                                stocktype: h,
                                followed: o,
                                suggest: a,
                                status: c,
                                scode: u,
                                type: "pt" === l ? "p" : String(l),
                              }
                            : {
                                name: n,
                                isChoose: o,
                                suggest: a,
                                status: c,
                                scode: u,
                                stockType: h,
                                market: d ? p : l,
                              },
                          g = function (t) {
                            return v.isWzq
                              ? t.symbol === f.symbol
                              : t.scode === f.scode &&
                                  String(t.market) === String(f.market);
                          },
                          k = 0;
                        k < i.length;
                        k++
                      )
                        g(i[k]) && i.splice(k, 1);
                      i.unshift(f),
                        this.isApp
                          ? this.setAppStorage(E, i.slice(0, 5))
                          : m.StockBridge.setStorage(E, i.slice(0, 5));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      reqUserStock: function (t) {
        return f(
          this,
          null,
          r().mark(function e() {
            var i;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.userStockReady = !1),
                        (e.next = 3),
                        this.newServ.queryUserStock()
                      );
                    case 3:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      e.t0 = {};
                    case 6:
                      (i = e.t0),
                        "function" == typeof t && t(i),
                        (this.userStockReady = !0);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      resUserStock: function (t) {
        var e, i, r;
        if (0 === parseInt(t.retcode, 10)) {
          var n =
            null ==
            (r =
              null ==
              (i =
                null == (e = null == t ? void 0 : t.grouplist)
                  ? void 0
                  : e.filter(function (t) {
                      var e;
                      return (
                        1 ==
                        +(null == (e = null == t ? void 0 : t.groupinfo)
                          ? void 0
                          : e.type)
                      );
                    }))
                ? void 0
                : i[0])
              ? void 0
              : r.stocklist;
          O.clear(),
            this.isApp ? this.getAppQtData(n) : this.setCommonStockList(n);
        }
      },
      setCommonStockList: function (e) {
        var i = this,
          r = e.map(function (t) {
            var e = t.code,
              r = t.name,
              n = t.scode,
              s = t.stock_type,
              o = t.status,
              a = null == e ? void 0 : e.slice(0, 2),
              c = i.mapMarket[a],
              u = v.utils.trimScode(n),
              l = R(c, a, s);
            return (
              O.add(e),
              {
                code: e,
                name: r,
                scode: n,
                stockType: s,
                status: o,
                type: a,
                market: c,
                showScode: u,
                iconClass: l,
              }
            );
          });
        this.userStock = r;
        var s = function (t) {
          t.forEach(function (e, r) {
            i.$set(t, r, d(p({}, e), { isChoose: O.has(e.code) }));
          });
        };
        if (!this.isSearching)
          return s(this.searchHistory), void this.reportHistoryBrow();
        var o,
          a = n(this.listConfig);
        try {
          for (a.s(); !(o = a.n()).done; ) {
            var c = t(o.value, 2),
              u = c[0],
              l = c[1];
            l.isStock &&
              s("fund" === u ? this.searchFundResult : this[l.listName]);
          }
        } catch (t) {
          a.e(t);
        } finally {
          a.f();
        }
      },
      getAppQtData: function (t) {
        return f(
          this,
          null,
          r().mark(function e() {
            var i, n, s, o;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = t
                          .map(function (t) {
                            return t.chooseSymbol;
                          })
                          .join("|")),
                        (e.next = 4),
                        S.getQtData(m.StockBridge, { code: n })
                      );
                    case 4:
                      (s = e.sent),
                        (o =
                          (null == (i = null == s ? void 0 : s.data)
                            ? void 0
                            : i.list) || []),
                        t.forEach(function (e, i) {
                          var r,
                            n = o.find(function (t) {
                              return t.code === e.chooseSymbol;
                            });
                          if (n) {
                            var s =
                                0 ===
                                (null == (r = n.symbol)
                                  ? void 0
                                  : r.indexOf("."))
                                  ? n.symbol.substr(1)
                                  : n.symbol,
                              a = n.code,
                              c = n.name,
                              u = n.type;
                            t[i] = d(p({}, e), {
                              code: a,
                              name: c,
                              scode: s,
                              stockType: u,
                            });
                          }
                        }),
                        (t = t.filter(function (t) {
                          return t.code;
                        })),
                        this.setCommonStockList(t),
                        (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(0));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 9]]
            );
          })
        );
      },
      inputConfirm: function (t, e) {
        var i,
          r,
          n,
          s =
            null ==
            (n =
              null ==
              (r =
                (null == t ? void 0 : t.detail) ||
                (null == (i = null == t ? void 0 : t.mp) ? void 0 : i.detail) ||
                (null == t ? void 0 : t.target))
                ? void 0
                : r.value)
              ? void 0
              : n.replace(/\s*/g, "");
        s &&
          this.reportEvent(
            "base.search.sqedit_inputed",
            "base.search.inputed",
            {
              report_info: this.reportInfo,
              searchText: s,
              input_comfirmed: this.inputConfirmed,
            }
          ),
          (this.inputConfirmed = 1);
      },
      back: function () {
        this.reportEvent(
          "jichu.sousuoye.click_cancel",
          "base.search.sqedit_cancel_click"
        ),
          this.isMP
            ? m.wx$1.navigateBack()
            : this.isApp
            ? shy && shy.exit(!0)
            : this.$router.back();
      },
      handleKeyUp: function (t) {
        var e;
        "mp" !== m.StockBridge.ENV &&
          13 === t.keyCode &&
          (this.inputConfirm(t, !0),
          null == (e = null == t ? void 0 : t.target) || e.blur());
      },
      getSearchResult: function (t) {
        var e, i, r, n;
        try {
          var s;
          (s = this.isMP
            ? null ==
              (i =
                (null == t ? void 0 : t.detail) ||
                (null == (e = null == t ? void 0 : t.mp) ? void 0 : e.detail))
              ? void 0
              : i.value
            : null == (n = null == (r = this.$refs) ? void 0 : r.searchBox)
            ? void 0
            : n.value),
            (this.showMoreObj = { stock: !1, plate: !1, fund: !1 }),
            (this.inputConfirmed = 0),
            (s = s.replace(/(^\s*)|(\s*$)/g, "")).length > 100
              ? ((s = s.slice(0, 100)), (this.inputValue = s))
              : this.submit(s),
            this.isReportedInput ||
              ((this.isReportedInput = !0),
              this.reportEvent(
                "base.search.sqedit_inputed",
                "base.search.inputed",
                {
                  report_info: this.reportInfo,
                  searchText: s,
                  input_comfirmed: this.inputConfirmed,
                }
              ));
        } catch (t) {
          m.StockBridge.aegisReportEvent("MONITOR-SEARCH-GET-RESULT-ERROR", {
            ext3: JSON.stringify(t),
          });
        }
      },
      setRenderStock: function (t) {
        var e = this;
        if (!Array.isArray(t)) return [];
        try {
          return t.map(function (t) {
            var i,
              r = t.code,
              n = null == r ? void 0 : r.slice(0, 2),
              s =
                (null == r ? void 0 : r.slice(2).replace(/^\./, "")) || t.scode,
              o = null != (i = e.mapMarket[n]) ? i : t.market,
              a = t.stockType || t.type;
            return d(p({}, t), {
              scode: s,
              market: o,
              isChoose: O.has(r),
              showScode: v.utils.trimScode(s),
              stockType: a,
              type: n,
              iconClass: R(o, n, a),
              noAdd: "BK" === a && !v.utils.isHSPlate(o || n),
            });
          });
        } catch (t) {
          return (
            m.StockBridge.aegisReportEvent(
              "MONITOR-SEARCH-SET-RENDER-STOCK-ERROR",
              { ext3: JSON.stringify(t) }
            ),
            []
          );
        }
      },
      submit: function (t) {
        this.debounceSubmit(t);
      },
      submitFunc: function (t) {
        return f(
          this,
          null,
          r().mark(function e() {
            var i,
              n,
              s,
              o,
              a,
              c,
              u,
              l,
              h,
              p,
              d,
              f,
              g,
              k,
              v,
              y,
              b,
              w,
              T = this;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (m.StockBridge.aegisReportEvent(
                          "MONITOR-SEARCH-SUBMITFUNC-ERROR",
                          { ext3: JSON.stringify({ value: t }) }
                        ),
                        this.closeSearchResult())
                      );
                    case 2:
                      return (
                        (e.prev = 2),
                        (i = {
                          query: t,
                          stockFlag: 1,
                          ptFlag: 1,
                          labelFlag: 1,
                          fundFlag: 1,
                          entityFlag: 1,
                          intentionFlag: 1,
                          limit: 30,
                          rerank_by_zixuan: 1,
                        }),
                        (e.next = 6),
                        S.getSearchResult(m.StockBridge, i)
                      );
                    case 6:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 9;
                        break;
                      }
                      e.t0 = {};
                    case 9:
                      (n = e.t0),
                        (s = n.stock),
                        (o = n.sector),
                        (a = n.indexShowNum),
                        (c = n.fund),
                        (u = n.intentionInfo),
                        m.StockBridge.ENV !== m.EnvTypeEnum.WZQ_LITE &&
                          (this.listConfig.get("stock").limit = a),
                        (this.keyword = t),
                        (h = (l = function (t) {
                          return t.length >= 50
                            ? { res: t.slice(0, 50), isLimit: 1 }
                            : { res: t, isLimit: 0 };
                        })(this.setRenderStock(s))),
                        (p = h.res),
                        (d = h.isLimit),
                        (f = l(this.setRenderStock(o))),
                        (g = f.res),
                        (k = f.isPlateLimit),
                        (v = l(this.setRenderStock(c))),
                        (y = v.res),
                        (b = v.isFundLimit),
                        (w = {
                          showClose: "",
                          isSearching: !0,
                          searchResult: p,
                          searchPlateResult: g,
                          searchFundResult: y,
                          isStockLimit: d,
                          isPlateLimit: k,
                          isFundLimit: b,
                          intention: (null == u ? void 0 : u.intention) || "",
                        }),
                        Object.keys(w).forEach(function (t) {
                          T[t] = w[t];
                        }),
                        t.replace(/(^\s*)|(\s*$)/g, "") ||
                          this.closeSearchResult(),
                        (e.next = 23);
                      break;
                    case 20:
                      (e.prev = 20),
                        (e.t1 = e.catch(2)),
                        m.StockBridge.aegisReportEvent(
                          "MONITOR-SEARCH-RESULT-ERROR",
                          {
                            ext3: JSON.stringify({
                              code: e.t1.code || e.t1.statusCode,
                              msg: e.t1.retmsg || e.t1.msg,
                            }),
                          }
                        );
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 20]]
            );
          })
        );
      },
      reportHistoryBrow: function () {
        var t = { stocklist: [], positionlist: [], hasaddlist: [] };
        Array.isArray(this.searchHistory) &&
          this.searchResult.map(function (e, i) {
            t.stocklist.push(v.utils.getSymbol(e.market, e.scode)),
              t.positionlist.push(i + 1),
              t.hasaddlist.push(e.isChoose ? 1 : 0);
          }),
          this.reportEvent(
            "base.search.sqedit_stock_list_brow",
            "base.search.card_version_list_rg_brow",
            {
              fchannel_id_fm_i: "IhE00p000l126",
              stocklist: t.stocklist.join(),
              positionlist: t.positionlist.join(),
              hasaddlist: t.hasaddlist.join(),
              foperation_purpose: "zixuan",
            }
          );
      },
      initStatus: function () {
        var t = this,
          e = {
            autofocus: !0,
            inputValue: "",
            showClose: "hide",
            keyword: "",
            isSearching: !1,
            intention: "",
          };
        Object.keys(e).forEach(function (i) {
          t[i] = e[i];
        });
      },
      closeSearchResult: function () {
        this.initStatus(),
          this.getSearchHistory(),
          this.reportEvent(
            "base.search.sqedit_search_close",
            "xcx_close_search_result"
          );
      },
      jumpToDetail: function (t) {
        if (!this.isListSwiping) {
          var e = t.market,
            i = t.scode,
            r = t.name,
            n = (t.type, String(e));
          this.isMP
            ? (m.wx$1.navigateBack(),
              m.StockBridge.busEmit("market-sqStockPicked", {
                market: n,
                scode: i,
                name: r,
              }))
            : this.isApp
            ? (shy && shy.exit(!0),
              shy &&
                shy.notify("market-sqStockPicked", {
                  market: n,
                  scode: i,
                  name: r,
                }))
            : (this.$router.back(),
              m.StockBridge.busEmit("market-sqStockPicked", {
                market: n,
                scode: i,
                name: r,
              })),
            this.setSearchHistory(t),
            this.reportEvent(
              "base.search.sqedit_result_stock_click",
              "base.search.sqedit_result_stock_click",
              { market: n, scode: i, name: r }
            ),
            this.$emit("sqEdit", { market: n, scode: i, name: r });
        }
      },
      getValFromQuery: function () {
        var t, e;
        if (null == (t = this.queryData) ? void 0 : t.mainQuery) {
          this.isAINewUser = { isNewUser: !1, time: Date.now() };
          try {
            this.cachePlaceholder = decodeURIComponent(
              (null == (e = this.queryData) ? void 0 : e.mainQuery) || ""
            );
          } catch (t) {}
        }
      },
    },
  };
Array || m.resolveComponent("list-search")();
var L = m._export_sfc(P, [
  [
    "render",
    function (t, e, i, r, n, s) {
      return m.e(
        { a: s.isMP },
        s.isMP
          ? {
              b: n.autofocus,
              c: s.renderPlaceholder,
              d: m.o(
                [
                  [
                    function (t) {
                      return (n.inputValue = t.detail.value);
                    },
                    1075,
                  ],
                  [
                    function () {
                      return (
                        s.getSearchResult &&
                        s.getSearchResult.apply(s, arguments)
                      );
                    },
                    1073,
                  ],
                ],
                1076
              ),
              e: m.o(function () {
                return s.inputConfirm && s.inputConfirm.apply(s, arguments);
              }, 1074),
              f: n.inputValue,
            }
          : s.isApp
          ? {
              h: n.autofocus,
              i: s.renderPlaceholder,
              j: m.o(
                [
                  [
                    function (t) {
                      return (n.inputValue = t.detail.value);
                    },
                    1079,
                  ],
                  [
                    function () {
                      return (
                        s.getSearchResult &&
                        s.getSearchResult.apply(s, arguments)
                      );
                    },
                    1077,
                  ],
                ],
                1080
              ),
              k: m.o(function () {
                return s.inputConfirm && s.inputConfirm.apply(s, arguments);
              }, 1078),
              l: n.inputValue,
            }
          : {
              m: n.autofocus,
              n: s.renderPlaceholder,
              o: m.o(function () {
                return s.handleKeyUp && s.handleKeyUp.apply(s, arguments);
              }, 1081),
              p: m.o(
                [
                  [
                    function (t) {
                      return (n.inputValue = t.detail.value);
                    },
                    1084,
                  ],
                  [
                    function () {
                      return (
                        s.getSearchResult &&
                        s.getSearchResult.apply(s, arguments)
                      );
                    },
                    1082,
                  ],
                ],
                1085
              ),
              q: m.o(function () {
                return s.inputConfirm && s.inputConfirm.apply(s, arguments);
              }, 1083),
              r: n.inputValue,
              s: m.o(function () {}, 1086),
            },
        {
          g: s.isApp,
          t: m.n(n.showClose),
          v: m.o(function () {
            return (
              s.closeSearchResult && s.closeSearchResult.apply(s, arguments)
            );
          }, 1087),
          w: m.n(s.isLite ? "" : "wzq"),
          x: m.o(function () {
            return s.back && s.back.apply(s, arguments);
          }, 1088),
          y: m.n(s.isPc && "zxg-mp-pc"),
          z: m.n(s.isApp && "zxg-app"),
          A: !n.isSearching,
        },
        n.isSearching
          ? m.e(
              { J: n.searchResult.length > 0 },
              n.searchResult.length > 0
                ? {
                    K: m.o(s.jumpToDetail, 1093),
                    L: m.o(function (t) {
                      return s.switchTab("stock", !0, !0);
                    }, 1094),
                    M: m.p({
                      "list-type": "stock",
                      "list-title": "股票",
                      "list-data": n.searchResult,
                      keyword: n.keyword,
                      "list-limit": n.showMoreObj.stock
                        ? 50
                        : n.listConfig.get("stock").limit,
                    }),
                  }
                : {},
              { N: n.searchPlateResult.length > 0 },
              n.searchPlateResult.length > 0
                ? {
                    O: m.o(function (t) {
                      return n.showMoreObj.plate
                        ? 50
                        : s.switchTab("plate", !0, !0);
                    }, 1095),
                    P: m.o(s.jumpToDetail, 1096),
                    Q: m.p({
                      "list-type": "plate",
                      "list-title": "板块",
                      "list-data": n.searchPlateResult,
                      keyword: n.keyword,
                      "list-limit": n.showMoreObj.plate
                        ? 50
                        : n.listConfig.get("plate").limit,
                    }),
                  }
                : {},
              { R: n.searchFundResult.length > 0 },
              n.searchFundResult.length > 0
                ? {
                    S: m.o(function (t) {
                      return s.switchTab("fund", !0, !0);
                    }, 1097),
                    T: m.o(s.jumpToDetail, 1098),
                    U: m.p({
                      "list-type": "fund",
                      "list-title": "基金",
                      "list-data": n.searchFundResult,
                      keyword: n.keyword,
                      "list-limit": n.showMoreObj.fund
                        ? 50
                        : n.listConfig.get("fund").limit,
                    }),
                  }
                : {},
              {
                V: m.o(function () {
                  return (
                    s.onListTouchStart && s.onListTouchStart.apply(s, arguments)
                  );
                }, 1099),
                W: m.o(function () {
                  return (
                    s.onListTouchMove && s.onListTouchMove.apply(s, arguments)
                  );
                }, 1100),
              }
            )
          : m.e(
              { B: n.searchHistory.length },
              n.searchHistory.length
                ? {
                    C: m.o(s.jumpToDetail, 1089),
                    D: m.p({
                      "list-data": n.searchHistory,
                      "list-title": "搜索历史",
                      "is-folder": !0,
                      "list-type": "history",
                    }),
                  }
                : {},
              { E: n.userStock.length },
              n.userStock.length
                ? {
                    F: m.o(s.jumpToDetail, 1090),
                    G: m.p({
                      "list-data": n.userStock,
                      "list-title": "自选列表",
                      "is-folder": !0,
                      "list-type": "userStock",
                    }),
                  }
                : {},
              {
                H: m.o(function () {
                  return (
                    s.onListTouchStart && s.onListTouchStart.apply(s, arguments)
                  );
                }, 1091),
                I: m.o(function () {
                  return (
                    s.onListTouchMove && s.onListTouchMove.apply(s, arguments)
                  );
                }, 1092),
              }
            ),
        {
          X: m.n(s.isApp && "zxg-app"),
          Y: m.n(s.theme),
          Z: m.n(s.isPc && "is-pc"),
          aa: m.o(function (t) {
            return !s.isApp && s.onTouchmove(t);
          }, 1101),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6bfcd28a"],
]);
wx.createComponent(L);
var A = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1zZWxlY3QvSW5kZXgudnVl =
  A),
  (exports.getHighlightText = function (t, e) {
    var i = Array.isArray(t) ? t.join("|") : t;
    i = i.replace(/(\*|\.|\\|\/|\(|\)|\[|\]|\?|\+)/g, "\\$1");
    var r = new RegExp("(".concat(i, ")"), "gi");
    return e.split(r);
  });
