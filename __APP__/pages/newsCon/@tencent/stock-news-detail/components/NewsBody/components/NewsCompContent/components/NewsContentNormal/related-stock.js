var t = require("../../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  d = function (t, e, n) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  u = function (t, e) {
    for (var o in e || (e = {})) c.call(e, o) && d(t, o, e[o]);
    if (s) {
      var r,
        i = n(s(e));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          o = r.value;
          a.call(e, o) && d(t, o, e[o]);
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
    }
    return t;
  },
  l = function (t, e, n) {
    return new Promise(function (o, r) {
      var i = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        c = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(i, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  f = require("../../../../../../../../../../common/vendor.js"),
  h = require("../../../../../../../stock-news-core/utils/bus.js"),
  p = require("../../../../../../../stock-news-core/utils/shy/index.js"),
  k = require("../../../../../../../stock-news-core/utils/mpBrow.js");
require("../../../../../../../../js-cookie/src/js.cookie.js");
var g = require("../../../../../../../stock-news-core/utils/report.js"),
  b = require("../../../../../../../stock-news-base/service/market/RelatedStockUtils.js");
require("../../../../../../../stock-news-core/utils/apiMapping.js");
var m,
  S,
  v = require("../../../../../../../stock-community-base/utils/privacyCheck.js"),
  w = {
    name: "RelatedStock",
    options: { styleIsolation: "shared" },
    mixins: [
      {
        props: {},
        data: function () {
          return {
            eventId: "",
            reportBrowData: {
              fchannel_id_fm_i: "",
              newsid: "",
              stocklist: [],
              positionlist: [],
              hasaddlist: [],
            },
          };
        },
        methods: {
          addOneItem: function (t, n) {
            "object" == e(n) &&
              ((this.eventId = t),
              (this.reportBrowData.fchannel_id_fm_i = n.fchannel_id_fm_i),
              (this.reportBrowData.newsid = n.newsid),
              this.reportBrowData.stocklist.push(n.stocklist),
              this.reportBrowData.positionlist.push(n.positionlist),
              this.reportBrowData.hasaddlist.push(n.hasaddlist));
          },
          reportBrowEvent: function (t) {
            if (!(this.reportBrowData.stocklist.length <= 0)) {
              var e = {
                fchannel_id_fm_i: this.reportBrowData.fchannel_id_fm_i,
                foperation_purpose: "zixuan",
                newsid: this.reportBrowData.newsid,
                stocklist: this.reportBrowData.stocklist.join(","),
                positionlist: this.reportBrowData.positionlist.join(","),
                hasaddlist: this.reportBrowData.hasaddlist.join(","),
              };
              g.report(this.eventId, e), this.clearData();
            }
          },
          clearData: function () {
            (this.eventId = ""),
              (this.reportBrowData = {
                fchannel_id_fm_i: "",
                newsid: "",
                stocklist: [],
                positionlist: [],
                hasaddlist: [],
              });
          },
        },
      },
    ],
    props: {
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      newsId: { type: String, default: "" },
      reportData: {
        prefix: { type: String, default: "" },
        fchannel_id_fm_i: { type: String, default: "" },
      },
      brow_y_offset: { type: String, default: "-70px" },
      clickReportEventName: { type: String, default: "" },
    },
    inject: {
      didAgreeUserAgreement: { default: { value: !0 } },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    data: function () {
      return {
        HQXZ: "https://st.gtimg.com/design/a9c7b51f6c7f4ebcd3337ef244b91846.png",
        stocksAddedStatusInObgect: {},
        stockList: [],
        busEvents: {},
        added: !1,
      };
    },
    mounted: function () {
      var t = this;
      this.busOn("stockList", function (e) {
        if (e.data.newsid === t.newsId) {
          (t.stockList = e.data),
            t.stockList.forEach(function (e) {
              t.judgeAdded(e.symbol);
            }),
            (t.goto = e.goto);
          var n = e.stocksAddedStatusInObgect;
          Object.keys(n).forEach(function (e) {
            var o = t.getStringAfterSecondDot(e);
            if (o.length > 0) {
              var r =
                e.replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "").replace(/\./g, "__") +
                o;
              (n[r] = n[e]), delete n[e];
            }
          }),
            (t.stocksAddedStatusInObgect = n),
            t.stockList &&
              t.stockList.length > 0 &&
              t.$nextTick(function () {
                t.mpObserveVisibility(".content-subject-optional", function () {
                  t.reportBrow(-1);
                });
              });
        }
      }),
        this.busOn("news-RelatedStockChange", function (e) {
          Object.keys(e).forEach(function (n) {
            var o = t.encodeUSStockSymbol(n);
            (t.stocksAddedStatusInObgect[o] = e[n]), t.$forceUpdate();
          });
        });
    },
    beforeDestroy: function () {
      this.busOff(), this.mpDisobserveVisibility();
    },
    destroyed: function () {
      this.reportBrowEvent(this.wzqConfig);
    },
    deactivated: function () {
      this.reportBrowEvent(this.wzqConfig);
    },
    methods:
      ((m = u({}, k.mutations)),
      (S = {
        encodeUSStockSymbol: function (t) {
          var e = t,
            n = this.getStringAfterSecondDot(t);
          return (
            n.length > 0 &&
              (e =
                t.replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "").replace(/\./g, "__") +
                n),
            e
          );
        },
        getStringAfterSecondDot: function (t) {
          var e = t.split(".");
          return 3 === e.length ? ".".concat(e.slice(2).join(".")) : "";
        },
        stockExist: function (t) {
          try {
            var e = t.symbol,
              n = this.encodeUSStockSymbol(e);
            return 1 === this.stocksAddedStatusInObgect[n];
          } catch (t) {
            g.aegisReportError(t);
          }
          return !1;
        },
        getStockChangeText: function (t) {
          return t > 0 ? "+".concat(t, "%") : t <= 0 ? "".concat(t, "%") : "--";
        },
        onStockClick: function (t) {
          if (this.clickReportEventName)
            try {
              f.StockBridge.report(this.clickReportEventName, {
                newsid: this.newsId,
              });
            } catch (t) {}
          "function" == typeof this.goto &&
            this.goto(t.symbol, t.name, t.kcbFlag);
        },
        reportBrow: function (t) {
          var e = this.getStockReportDic(t);
          this.addOneItem(
            "".concat(this.reportData.prefix, ".related_stock_brow"),
            e
          );
        },
        getStockReportDic: function (t) {
          var e,
            n,
            o = this,
            r = {
              fchannel_id_fm_i:
                null !=
                (n =
                  null == (e = this.reportData) ? void 0 : e.fchannel_id_fm_i)
                  ? n
                  : "",
              newsid: this.newsId,
              stocklist: "",
              positionlist: "",
              hasaddlist: "",
            };
          try {
            if (-1 === t) {
              var i = [],
                s = [],
                c = [];
              return (
                this.stockList.forEach(function (t, e) {
                  i.push("".concat(e)), s.push(t.symbol);
                  var n = o.encodeUSStockSymbol(t.symbol);
                  c.push(0 === o.stocksAddedStatusInObgect[n] ? "0" : "1");
                }),
                (r.positionlist = i.join(",")),
                (r.stocklist = s.join(",")),
                (r.hasaddlist = c.join(",")),
                r
              );
            }
            var a,
              d,
              u,
              l,
              f = t,
              h = this.stockList[f],
              p = this.encodeUSStockSymbol(h.symbol);
            return (
              (l = 0 === this.stocksAddedStatusInObgect[p] ? "0" : "1"),
              (d = h.symbol),
              (a = l),
              (u = "".concat(f)),
              (r.stocklist = d),
              (r.hasaddlist = a),
              (r.positionlist = u),
              r
            );
          } catch (t) {
            return g.aegisReportError(t), r;
          }
        },
        checkAppLogin: function () {
          return new Promise(function (t) {
            p.shy.getUserInfo(function (e) {
              t(e && "none" !== e.type);
            });
          });
        },
        getVisibleSetting: function (t) {
          return {
            callback: function (t) {},
            once: !0,
            intersection: { threshold: 0.5, rootMargin: this.brow_y_offset },
          };
        },
        judgeAdded: function (e) {
          return l(
            this,
            null,
            t().mark(function n() {
              var o = this;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (f.StockBridge.ENV !== f.EnvTypeEnum.SHY_NATIVE) {
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
                          void (this.added = !this.added)
                        );
                      case 5:
                        p.shy.checkStockExist(e, function (t) {
                          var e = (t || {}).exist;
                          o.added = e;
                        });
                      case 6:
                      case "end":
                        return t.stop();
                    }
                },
                n,
                this
              );
            })
          );
        },
        toggleAdded: function (e, n, o) {
          return l(
            this,
            null,
            t().mark(function r() {
              var i,
                s,
                c,
                a,
                d,
                l,
                h = this;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((t.t0 =
                            f.StockBridge.ENV === f.EnvTypeEnum.SHY_NATIVE),
                          !t.t0)
                        ) {
                          t.next = 9;
                          break;
                        }
                        return (t.next = 4), this.checkAppLogin();
                      case 4:
                        if (!t.sent) {
                          t.next = 8;
                          break;
                        }
                        this.AppToggleAdded(e, n), (t.next = 9);
                        break;
                      case 8:
                        p.shy.login(function (t) {
                          "success" === t.status && h.AppToggleAdded(e, n);
                        });
                      case 9:
                        if (!v.isH5Native) {
                          t.next = 16;
                          break;
                        }
                        return (t.next = 12), v.globalPrivacyCheck();
                      case 12:
                        if (t.sent) {
                          t.next = 14;
                          break;
                        }
                        return t.abrupt("return");
                      case 14:
                        t.next = 18;
                        break;
                      case 16:
                        if (
                          (null == (i = this.didAgreeUserAgreement)
                            ? void 0
                            : i.value) ||
                          "function" != typeof this.onCheckUserAgreementStatus
                        ) {
                          t.next = 18;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          void this.onCheckUserAgreementStatus()
                        );
                      case 18:
                        return (
                          (s = n),
                          (s = this.encodeUSStockSymbol(n)),
                          (c = this.stocksAddedStatusInObgect[s]),
                          (this.stocksAddedStatusInObgect[s] = !c),
                          (t.next = 24),
                          b.RelatedStockUtils.getInstance().requestStockToAdd(
                            !c,
                            n
                          )
                        );
                      case 24:
                        if (((t.t1 = t.sent), t.t1)) {
                          t.next = 27;
                          break;
                        }
                        this.stocksAddedStatusInObgect[s] = c;
                      case 27:
                        (a = []),
                          this.stockList.forEach(function (t, e) {
                            a.push(t.symbol);
                          }),
                          (d = {
                            newsid: this.newsId,
                            stockid: n,
                            stocklist: n,
                          }),
                          g.report(
                            "".concat(
                              this.reportData.prefix,
                              ".optional_click"
                            ),
                            u({ report_info: this.abtReportInfo }, d)
                          ),
                          (l = "".concat(
                            this.reportData.prefix,
                            ".related_stock_add"
                          )),
                          e ||
                            (l = "".concat(
                              this.reportData.prefix,
                              ".related_stock_cancel"
                            )),
                          g.report(l, {
                            newsid: this.newsId,
                            stocklist: n,
                            positionlist: "".concat(o),
                            fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
                            foperation_purpose: "zixuan",
                            stockid: n,
                            hasaddlist: e ? "0" : "1",
                          });
                      case 33:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                this
              );
            })
          );
        },
        AppToggleAdded: function (t, e) {
          var n = this;
          this.added = !this.added;
          var o = function (t) {
            (t && "fail" !== t.status) || (n.added = !n.added);
          };
          this.added
            ? p.shy.addStockToGroup(e, void 0, "1", o)
            : p.shy.removeStockFromGroup(e, o);
        },
        getParams: function () {
          var t, e, n;
          return (
            f.wx$1 &&
              ((t = "wzq"),
              (e = f.wx$1.getStorageSync("_qluin")),
              (n = f.wx$1.getStorageSync("_qlskey"))),
            { app: t, openId: e, fsKey: n, check: 11 }
          );
        },
        busOn: function (t, e) {
          h.BUS.$on(t, e), (this.busEvents[t] = e);
        },
        busOff: function () {
          for (var t in this.busEvents) h.BUS.$off(t, this.busEvents[t]);
        },
      }),
      r(m, i(S))),
  },
  y = f._export_sfc(w, [
    [
      "render",
      function (t, e, n, o, r, i) {
        return f.e(
          { a: r.stockList.length > 0 },
          r.stockList.length > 0
            ? {
                b: r.HQXZ,
                c: f.f(r.stockList, function (t, e, n) {
                  return f.e(
                    { a: t.marketTag },
                    t.marketTag
                      ? { b: f.n("stock-icon-".concat(t.marketTag)) }
                      : {},
                    {
                      c: f.t(t.name),
                      d: t.character_tag && t.character_tag.length > 0,
                    },
                    t.character_tag && t.character_tag.length > 0
                      ? {
                          e: f.f(
                            t.character_tag.slice(0, 2),
                            function (t, e, n) {
                              return { a: f.t(t.name), b: e };
                            }
                          ),
                        }
                      : {},
                    {
                      f: f.o(
                        function (e) {
                          return i.onStockClick(t);
                        },
                        4506,
                        e
                      ),
                      g: f.t(t.price),
                      h: f.o(
                        function (e) {
                          return i.onStockClick(t);
                        },
                        4507,
                        e
                      ),
                      i: f.n(t.stColor),
                      j: f.t(i.getStockChangeText(t.updown)),
                      k: f.o(
                        function (e) {
                          return i.onStockClick(t);
                        },
                        4508,
                        e
                      ),
                      l: f.n(t.stColor),
                      m: f.n(i.stockExist(t) ? "img-remove" : "img-add"),
                      n: f.o(
                        function (n) {
                          return i.toggleAdded(!i.stockExist(t), t.symbol, e);
                        },
                        4509,
                        e
                      ),
                      o: e,
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-63844d6e"],
  ]);
wx.createComponent(y);
