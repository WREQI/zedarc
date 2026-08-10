var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  d = function (e, t, r) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
    if (a) {
      var s,
        i = n(a(t));
      try {
        for (i.s(); !(s = i.n()).done; ) {
          r = s.value;
          u.call(t, r) && d(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return i(e, o(t));
  },
  f = function (e, t, r) {
    return new Promise(function (n, s) {
      var i = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  h = require("../../../../common/vendor.js"),
  b = require("../stock-news-core/utils/knife.js"),
  m = require("../wzq-lite-basket/api/StockBasketAPI.js"),
  w = require("../stock-news-core/utils/tools.js"),
  k = require("../stock-news-base/service/news/gray.js"),
  g = require("../stock-news-base/service/news/apis/queryColumnNewsList.js"),
  y = require("../stock-crypto-modules-config/dist/index.js"),
  v = require("../stock-news-sdk/index.js");
require("../../js-cookie/src/js.cookie.js");
var x = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return 0 === e && 0 === t
      ? ""
      : JSON.stringify({ offset: e, req_session: t });
  },
  S = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.column_id,
      r = e.limit,
      n = e.offset,
      s = void 0 === n ? 0 : n,
      i = e.req_session,
      o = void 0 === i ? 0 : i,
      a = e.promotion_flag,
      c = e.reserve,
      u = e.filter,
      d = e.last_page_cursor;
    return {
      column_id: t,
      limit: r,
      last_page_cursor: null != d ? d : x(s, o),
      promotion_flag: null != a ? Number(a) : void 0,
      reserve: null != c ? String(c) : void 0,
      filter: null != u ? Number(u) : void 0,
    };
  },
  _ = (function () {
    function e() {
      t(this, e);
    }
    return (
      r(e, [
        {
          key: "getUserInfo",
          value: function () {
            return {};
          },
        },
        {
          key: "gdParamsFormat",
          value: function (e) {
            var t = this.getUserInfo(),
              r = l(l({}, t), e),
              n = r.signkey;
            delete r.signkey;
            var s = ""
              .concat(
                Object.keys(r)
                  .sort()
                  .map(function (e) {
                    return "".concat(e, "=").concat(r[e]);
                  })
                  .join("&"),
                "&key="
              )
              .concat(n || y.dist.SIGN_KEY.wzq_analyse);
            return (r.sign = h.md5Module(s)), r;
          },
        },
      ]),
      e
    );
  })(),
  q = new ((function () {
    function n(e) {
      t(this, n), (this.stockCodes = e);
    }
    return (
      r(n, [
        {
          key: "isArrayEmpty",
          value: function (e) {
            return !Array.isArray(e) || e.length <= 0;
          },
        },
        {
          key: "isExistInZixuan",
          value: function (t) {
            return f(
              this,
              null,
              e().mark(function r() {
                var n, s, i, o, a, c, u, d;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((n = {}), !this.isArrayEmpty(t))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", n);
                        case 3:
                          return (
                            (s = this.getParams()),
                            (i = s.app),
                            (o = s.openId),
                            (a = s.fsKey),
                            (c = s.check),
                            (u =
                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                                .concat(t.join(","), "&app=")
                                .concat(i, "&appid=wx9cf8c670ebd68ce4&check=")
                                .concat(c, "&openid=")
                                .concat(o, "&fskey=")
                                .concat(a)),
                            (e.prev = 4),
                            (e.next = 7),
                            h.StockBridge.request(u, "GET")
                          );
                        case 7:
                          (d = e.sent) &&
                            0 == +d.code &&
                            d.data &&
                            (n = d.data),
                            (e.next = 13);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(4));
                        case 13:
                          return e.abrupt("return", n);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[4, 11]]
                );
              })
            );
          },
        },
        {
          key: "addStockToZixuan",
          value: function (t, r) {
            return f(
              this,
              null,
              e().mark(function n() {
                var s, i, o, a, c, u, d, l, p;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = {
                              timestamp: new Date().getTime(),
                              act: t ? "sa" : "sd",
                              grpid: "1",
                              code: r,
                            }),
                            (i = this.getParams()),
                            (o = i.app),
                            (a = i.openId),
                            (c = i.fsKey),
                            (u = i.check),
                            (d =
                              "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                                .concat(o, "&appid=wx9cf8c670ebd68ce4&openid=")
                                .concat(a, "&fskey=")
                                .concat(c, "&check=")
                                .concat(u)),
                            (e.prev = 1),
                            (l = {
                              seq: encodeURIComponent(JSON.stringify([s])),
                            }),
                            (e.next = 5),
                            h.StockBridge.request(d, "GET", l)
                          );
                        case 5:
                          if (!(p = e.sent) || 0 == +p.code) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return", !1);
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", !1)
                          );
                        case 13:
                          return e.abrupt("return", !0);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this,
                  [[1, 10]]
                );
              })
            );
          },
        },
        {
          key: "getParams",
          value: function () {
            var e, t, r;
            return (
              h.wx$1 &&
                ((e = "zxg_xcx"),
                (t = h.wx$1.getStorageSync("_qluin")),
                (r = h.wx$1.getStorageSync("_qlskey"))),
              { app: e, openId: t, fsKey: r, check: 11 }
            );
          },
        },
      ]),
      n
    );
  })())(),
  I = !1,
  L = !1,
  G = {
    components: {
      MarketHeadlineItem: function () {
        return "./component/MarketHeadlineItem.js";
      },
      FollowGuide: function () {
        return "./component/followGuide.js";
      },
      BasketOverview: function () {
        return "../../../stockBasket/@tencent/wzq-lite-basket/components/basketOverview.js";
      },
      basketGuideModal: function () {
        return "../../../stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js";
      },
    },
    inject: ["hqBridge"],
    props: { isOnShow: { type: Boolean, default: !1 } },
    data: function () {
      return {
        newsList: [],
        gdIds: [],
        subscribeNum: "419",
        isSubscribe: !1,
        showFollowGuide: !1,
        slist: {},
        stockBasketAPI: new m.StockBasketAPI(this.hqBridge),
        reportPrefix: "news.marketheadline",
        gdNewsRequest: new _(),
        guideVisible: !1,
      };
    },
    created: function () {
      this.loadNewsList(), this.setTitle();
    },
    methods: {
      onHeaderToggleClick: function (e, t) {
        this.guideVisible = t;
      },
      onGdGuideConfirm: function () {
        this.guideVisible = !1;
      },
      querySubscribe: function (e) {
        var t = {};
        return (
          L ? (t.scene = "lite_web") : I && (t.scene = "wzq_xcx"),
          h.StockBridge.request(h.API_REMIND, "GET", l(l({}, e), t))
        );
      },
      mpOnShow: function () {
        this.symbols &&
          this.symbols.length &&
          this.queryStocksAddStatus(this.symbols),
          this.needRefreshSubscribeStatus &&
            ((this.needRefreshSubscribeStatus = !1),
            this.querySubscribeStatus(),
            this.fetchUserInfo()),
          this.queryGdStatus();
      },
      queryGdStatus: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var r, n, s, i, o, a, c, u, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (0 !== this.gdIds.length) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (r = { ids: this.gdIds.join(",") }),
                        (e.prev = 3),
                        (e.next = 6),
                        this.stockBasketAPI.getBasketSummary(r)
                      );
                    case 6:
                      (n = e.sent), (s = n.data), (i = s.list), (o = 0);
                    case 10:
                      if (!(o < i.length)) {
                        e.next = 25;
                        break;
                      }
                      (a = i[o]), (c = a.info.id), (u = 0);
                    case 13:
                      if (!(u < this.newsList.length)) {
                        e.next = 22;
                        break;
                      }
                      if (!(d = this.newsList[u].watchList)) {
                        e.next = 19;
                        break;
                      }
                      if (c !== d.info.id) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (this.newsList[u].watchList = a), e.abrupt("break", 22)
                      );
                    case 19:
                      u++, (e.next = 13);
                      break;
                    case 22:
                      o++, (e.next = 10);
                      break;
                    case 25:
                      e.next = 29;
                      break;
                    case 27:
                      (e.prev = 27), (e.t0 = e.catch(3));
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[3, 27]]
            );
          })
        );
      },
      setTitle: function () {
        h.StockBridge.setTitle("今日热点");
      },
      querySubscribeStatus: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var r, n, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        this.querySubscribe({ querysub: "morningnotice" })
                      );
                    case 2:
                      (r = e.sent),
                        (n = r.retcode),
                        (s = r.morningnotice),
                        0 == +n && (this.isSubscribe = s && 1 == +s.switch);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      loadSubscribeInfo: function () {
        return f(
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
                        (this.subscribeNum =
                          h.StockBridge.getStorage(
                            "information_morningreport_subscribe_num"
                          ) || "419"),
                        (e.next = 3),
                        h.StockBridge.request(
                          "https://wzq.tenpay.com/svr/user/user_service/user_subscribe_num?type=1",
                          "GET"
                        )
                      );
                    case 3:
                      (r = e.sent) &&
                        0 == +r.retcode &&
                        ((this.subscribeNum = r.subscribe_num),
                        h.StockBridge.setStorage(
                          "information_morningreport_subscribe_num",
                          this.subscribeNum
                        ));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      fetchUserInfo: function () {
        return f(
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
                        (function () {
                          var e =
                              "https://wzq.tenpay.com/cgi-bin/userinfo.fcgi?&t=".concat(
                                Date.now()
                              ),
                            t = { dealer: 1, detail: 1 };
                          return (
                            h.wx$1 &&
                              (t = p(l({}, t), {
                                qluin: h.wx$1.getStorageSync("_qluin"),
                                qlskey: h.wx$1.getStorageSync("_qlskey"),
                              })),
                            h.StockBridge.request(e, "GET", t)
                          );
                        })()
                      );
                    case 3:
                      "string" == typeof (r = e.sent) &&
                        (r.search(!0) && (r = r.replaceAll("\\x", "%")),
                        (r = JSON.parse(r))),
                        (this.userInfo = r),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (this.userInfo = { subscribe: "0" });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      loadNewsList: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var r, n, s, i, o, a, c;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r = {
                          column_id: "gdzx",
                          limit: 10,
                          offset: 0,
                          reserve: 2101248,
                          promotion_flag: 1,
                        }),
                        (t.prev = 1),
                        !I && !L)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return (
                        (s =
                          this.gdNewsRequest &&
                          this.gdNewsRequest.gdParamsFormat(r)),
                        (t.next = 6),
                        (function () {
                          for (
                            var t = arguments.length, r = new Array(t), n = 0;
                            n < t;
                            n++
                          )
                            r[n] = arguments[n];
                          return f(exports, [].concat(r), function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            return e().mark(function r() {
                              var n;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        k.isNewsGrayUser("queryColumnNewsList")
                                      );
                                    case 2:
                                      if (!e.sent) {
                                        e.next = 4;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        g.queryColumnNewsList(S(t))
                                      );
                                    case 4:
                                      return (
                                        "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                                        (e.next = 7),
                                        h.StockBridge.request(
                                          "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                                          "GET",
                                          l({}, t)
                                        )
                                      );
                                    case 7:
                                      return (
                                        (n = e.sent),
                                        e.abrupt(
                                          "return",
                                          g.adaptQueryColumnNewsListResp(n)
                                        )
                                      );
                                    case 9:
                                    case "end":
                                      return e.stop();
                                  }
                              }, r);
                            })();
                          });
                        })(s)
                      );
                    case 6:
                      (n = t.sent), (t.next = 12);
                      break;
                    case 9:
                      return (
                        (t.next = 11),
                        (function () {
                          for (
                            var t = arguments.length, r = new Array(t), n = 0;
                            n < t;
                            n++
                          )
                            r[n] = arguments[n];
                          return f(exports, [].concat(r), function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            return e().mark(function r() {
                              var n, s, i, o, a, c;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        k.isNewsGrayUser("queryColumnNewsList")
                                      );
                                    case 2:
                                      if (!e.sent) {
                                        e.next = 4;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        g.queryColumnNewsList(S(t))
                                      );
                                    case 4:
                                      return (
                                        "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                                        (n = w.md5()),
                                        (s = n.zappid),
                                        (i = n.sign),
                                        (o = n.nonce),
                                        (a = l(
                                          { zappid: s, sign: i, nonce: o },
                                          t
                                        )),
                                        (e.next = 12),
                                        h.StockBridge.request(
                                          "https://snp.tenpay.com/cgi-bin/snpgw_columnnews_comm.fcgi",
                                          "GET",
                                          a
                                        )
                                      );
                                    case 12:
                                      return (
                                        (c = e.sent),
                                        e.abrupt(
                                          "return",
                                          g.adaptQueryColumnNewsListResp(c)
                                        )
                                      );
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              }, r);
                            })();
                          });
                        })(r)
                      );
                    case 11:
                      n = t.sent;
                    case 12:
                      n && 0 === n.code
                        ? ((i = this.processNewsList(n.news_list || [])),
                          (o = i.list),
                          (a = i.symbols),
                          (c = i.gdIds),
                          (this.newsList = o),
                          (this.symbols = a),
                          (this.gdIds = c),
                          this.$emit("dataReady", this.newsList),
                          this.queryStocksAddStatus(a),
                          this.newsList &&
                            this.newsList.length &&
                            2 == +this.newsList[0].special_type &&
                            (this.querySubscribeStatus(),
                            this.loadSubscribeInfo(),
                            this.fetchUserInfo()))
                        : this.$emit("dataReady"),
                        (t.next = 18);
                      break;
                    case 15:
                      (t.prev = 15),
                        (t.t0 = t.catch(1)),
                        this.$emit("dataReady");
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[1, 15]]
            );
          })
        );
      },
      getReadRecord: function () {
        var e = h.StockBridge.getStorage("information_read_record") || [];
        return Array.isArray(e) || (e = []), e;
      },
      processNewsList: function (e) {
        var t = this.getReadRecord(),
          r = [],
          n = [];
        return {
          list: e.map(function (e, s) {
            var i,
              o = p(l({}, e), {
                id: e.news_id || e.id,
                type: null != (i = e.news_type) ? i : e.type,
                isBigCard: s < 3,
                showSubscribe: 0 === s && 2 == +e.special_type,
                timeStr: b.formateTime(e.publish_time),
                readed: t.indexOf(e.news_id || e.id) >= 0,
              });
            if (
              (o.extra_info &&
                o.extra_info.stock_code &&
                v.sdk.isStockCodeSupport(o.extra_info.stock_code) &&
                r.push(o.extra_info.stock_code),
              o.watchList && o.watchList.info)
            ) {
              var a = o.watchList.info.id;
              n.push(a);
            }
            return o;
          }),
          symbols: r,
          gdIds: n,
        };
      },
      readRecordChange: function (e) {
        var t = e.news_id || e.id;
        if (t) {
          var r = this.getReadRecord();
          r.indexOf(t) < 0 && r.push(t),
            r.length > 500 && (r = r.slice(-500)),
            h.StockBridge.setStorage("information_read_record", r);
        }
      },
      handleJumpToDetail: function (e) {
        2 === e.special_type && (this.needRefreshSubscribeStatus = !0),
          this.readRecordChange(e),
          this.$emit("dataReport", {
            eventName: "hq.market.market_headline_list_jumpdetail_click",
            dataObject: { newsid: e.news_id || e.id },
          });
      },
      setShareInfo: function (e) {
        this.$emit("shareItemDetail", e);
      },
      onSubscribe: function (t) {
        return f(
          this,
          null,
          e().mark(function r() {
            var n, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = t), !e.t0)) {
                        e.next = 7;
                        break;
                      }
                      if (((e.t1 = this.userInfo), e.t1)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 6), this.fetchUserInfo();
                    case 6:
                      e.t0 = !this.userInfo || "1" !== this.userInfo.subscribe;
                    case 7:
                      if (!e.t0) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void (this.showFollowGuide = !0)
                      );
                    case 9:
                      return (
                        (n = t
                          ? { subscribe: "morningnotice" }
                          : { unsubscribe: "morningnotice" }),
                        (e.next = 12),
                        this.querySubscribe(n)
                      );
                    case 12:
                      (s = e.sent) &&
                        0 == +s.retcode &&
                        (this.isSubscribe = 1 == +t);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      handleReport: function (e) {
        this.$emit("dataReport", e);
      },
      onGuideConfirm: function () {
        (this.showFollowGuide = !1), (this.needRefreshSubscribeStatus = !0);
      },
      onGuideCancel: function () {
        this.showFollowGuide = !1;
      },
      queryStocksAddStatus: function (e) {
        var t = this;
        e &&
          e.length &&
          q.isExistInZixuan(e).then(function (e) {
            if (e.response) {
              var r = {};
              Object.keys(e).forEach(function (t) {
                var n = t.replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "");
                r[n] = e[t];
              }),
                (t.slist = l(l({}, t.slist), r));
            }
          });
      },
      manageSelfStock: function (t) {
        return f(
          this,
          null,
          e().mark(function r() {
            var n, s, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        h.wx$1 && h.wx$1.showLoading(),
                        (n = t.stockCode),
                        (s = t.isFollow),
                        (e.next = 5),
                        q.addStockToZixuan(s, n)
                      );
                    case 5:
                      (i = e.sent),
                        h.wx$1 && h.wx$1.hideLoading(),
                        i
                          ? (h.StockBridge.toast(
                              "已".concat(s ? "添加" : "删除", "自选")
                            ),
                            this.$set(this.slist, n.split(".")[0], s ? 1 : 0))
                          : h.StockBridge.toast(
                              (s ? "添加" : "删除") + "自选失败"
                            );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      goToBasketDetail: function (e) {
        L &&
          h.StockBridge.routeTo({
            path: "/pages/stockBasket/detail",
            query: { gdId: e },
          });
      },
    },
  };
Array ||
  (
    h.resolveComponent("market-headline-item") +
    h.resolveComponent("basket-overview") +
    h.resolveComponent("FollowGuide") +
    h.resolveComponent("basketGuideModal")
  )();
var C = h._export_sfc(G, [
  [
    "render",
    function (e, t, r, n, s, i) {
      return h.e(
        { a: s.newsList && s.newsList.length },
        s.newsList && s.newsList.length
          ? {
              b: h.f(s.newsList, function (e, t, n) {
                return h.e(
                  {
                    a: h.o(i.handleJumpToDetail, 880, t),
                    b: h.o(i.handleReport, 881, t),
                    c: h.o(i.setShareInfo, 882, t),
                    d: h.o(i.onSubscribe, 883, t),
                    e: h.o(i.manageSelfStock, 884, t),
                    f: "52c9af4e-0-" + n,
                    g: h.p({
                      item: e,
                      "subscribe-num": "".concat(s.subscribeNum),
                      "is-subscribe": s.isSubscribe,
                      slist: s.slist,
                      "show-watch-list": null !== e.watchList,
                    }),
                    h: e.watchList,
                  },
                  e.watchList
                    ? {
                        i: h.o(i.onHeaderToggleClick, 885, t),
                        j: h.o(i.goToBasketDetail, 886, t),
                        k: "52c9af4e-1-" + n,
                        l: h.p({
                          "is-news": !0,
                          "news-data": { id: e.id },
                          "report-prefix": s.reportPrefix,
                          "basket-data": e.watchList,
                          "is-hstab-show": r.isOnShow,
                          "report-extra": {
                            is_from_category: 1,
                            positionid: t,
                          },
                          positionid: t,
                        }),
                      }
                    : {},
                  { m: t }
                );
              }),
              c: h.o(i.onGuideCancel, 887),
              d: h.o(i.onGuideConfirm, 888),
              e: h.o(i.handleReport, 889),
              f: h.p({ show: s.showFollowGuide, stat: "IOg00p000q012" }),
              g: h.o(i.onGdGuideConfirm, 890),
              h: h.o(i.onGdGuideConfirm, 891),
              i: h.p({
                "report-prefix": s.reportPrefix,
                visible: s.guideVisible,
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(C);
