require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = require("../../../../../common/vendor.js"),
  o = require("../../stock-crypto-modules-config/dist/index.js"),
  n = require("../../stock-hq-data/index.js"),
  c = ["mpwzq"].includes("mpweapp") ? "wzqxcx" : "mini_h5",
  r = function (t) {
    var e = t.newsId,
      i = t.symbol,
      n = Date.now(),
      r = (function (t, e) {
        var i = {
          wzqxcx: { zappid: "wzqxcx", signkey: o.dist.SIGN_KEY.wzqxcx },
          mini_h5: { zappid: "mini_h5", signkey: o.dist.SIGN_KEY.light_h5 },
        };
        if (i[e]) {
          var n = i[e].zappid,
            c = i[e].signkey,
            r = Math.floor(Math.random() * Math.floor(1e4)),
            a = n + c + r;
          t && (a += t);
          var l = s.md5Module(a);
          return {
            zappid: n,
            sign: l,
            nonce: r,
            queryStr: "zappid="
              .concat(n, "&sign=")
              .concat(l, "&nonce=")
              .concat(r),
          };
        }
      })(n, c),
      a = r.zappid,
      l = r.sign,
      d = r.nonce,
      u = {
        openid: s.StockBridge.getStorage("_qluin"),
        news_ids: e,
        symbol: i,
        zappid: a,
        report_type: "show",
        scene: 1,
        sign: l,
        nonce: d,
        timestamp: n,
      };
    return s.StockBridge.request(
      "https://wzq.tenpay.com/cgi/cgi-bin/numserver/snp_report",
      "POST",
      u
    );
  },
  a = {
    components: {
      MessageDialog: function () {
        return "./MessageDialog/MessageDialog.js";
      },
    },
    props: ["symbol"],
    data: function () {
      return {
        showBar: !1,
        showPopup: !1,
        popupIn: !1,
        nowIndex: 0,
        newsList: [],
        eventList: [],
        etfRisk: {},
        list: [],
        showDialog: !1,
        isAnimation: !1,
      };
    },
    computed: {
      isClassic: function () {
        return ["mpweapp"].includes("mpweapp");
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      market: function () {
        return n.utils.splitSymbol(this.symbol).market;
      },
    },
    created: function () {
      this.loadPromotion();
    },
    activated: function () {
      this.symbol &&
        this.symbol.includes(this.$route.query.scode) &&
        ((this.showBar = !1),
        (this.showPopup = !1),
        (this.nowIndex = 0),
        (this.newsList = []),
        (this.eventList = []),
        (this.list = []),
        this.loadPromotion());
    },
    deactivated: function () {
      clearTimeout(this.timeout);
    },
    beforeUnmount: function () {
      clearTimeout(this.timeout);
    },
    watch: {
      showBar: function () {
        this.$emit("changeShowNewsBar", this.showBar);
      },
    },
    methods: {
      loadPromotion: function () {
        return (
          (o = this),
          null,
          (n = t().mark(function o() {
            var n,
              a,
              l,
              d,
              u,
              h,
              p,
              g,
              m,
              f,
              w,
              b,
              k,
              _,
              v,
              y,
              S,
              q,
              x,
              B,
              I,
              C,
              L,
              D,
              P = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        (function (t) {
                          var e = {
                            appid: "wx9cf8c670ebd68ce4",
                            app: c,
                            check: 12,
                            _appver: "11.10",
                            channel: 8,
                            source: "stockdetail",
                            symbol: t,
                          };
                          return s.StockBridge.request(
                            "https://wzq.tenpay.com/cgi-bin/activity/specific_ads.fcgi",
                            "POST",
                            e
                          );
                        })(this.symbol)
                      );
                    case 3:
                      (a = t.sent),
                        (l = a.data),
                        (d = l.news),
                        (u = void 0 === d ? [] : d),
                        (h = l.big_event),
                        (p = void 0 === h ? [] : h),
                        (g = l.topic),
                        (m = void 0 === g ? [] : g),
                        (f = l.etf_premium),
                        (w = void 0 === f ? {} : f),
                        (b = i(u));
                      try {
                        for (b.s(); !(k = b.n()).done; )
                          ((_ = k.value).isNews = !0),
                            s.StockBridge.report(
                              "hq.stock_detail.news_bar_show",
                              { stockid: this.symbol, newsid: _.id }
                            );
                      } catch (t) {
                        b.e(t);
                      } finally {
                        b.f();
                      }
                      v = i(p);
                      try {
                        for (v.s(); !(y = v.n()).done; )
                          ((S = y.value).isEvent = !0),
                            (S.id = S.ob_id),
                            s.StockBridge.report(
                              "hq.stock_detail.bigevent_bar_show",
                              {
                                stockid: this.symbol,
                                newsid: S.notice_id || S.research_id || "",
                              }
                            );
                      } catch (t) {
                        v.e(t);
                      } finally {
                        v.f();
                      }
                      q = i(m);
                      try {
                        for (q.s(); !(x = q.n()).done; )
                          ((B = x.value).isTopic = !0),
                            (B.id = B.ob_id),
                            this.isLite ||
                              s.StockBridge.report(
                                "hq.stock_detail.topic_bar_show",
                                { stockid: this.symbol }
                              );
                      } catch (t) {
                        q.e(t);
                      } finally {
                        q.f();
                      }
                      (this.newsList = u.filter(function (t) {
                        return [0, 1, 2, 3].includes(t.type);
                      })),
                        (this.eventList = p),
                        (this.topicList = this.isLite ? [] : m),
                        (I =
                          s.StockBridge.getStorage(
                            "stock_detail_news_bar_closed"
                          ) || []),
                        (C = [].concat(e(u), e(p), e(this.topicList))),
                        (null == (n = w.entrance) ? void 0 : n.length) > 0 &&
                          ((L = new Date()),
                          (D = ""
                            .concat(L.getFullYear())
                            .concat(String(L.getMonth() + 1).padStart(2, "0"))
                            .concat(String(L.getDate()).padStart(2, "0"))),
                          (w.isRisk = !0),
                          (w.id = D),
                          s.StockBridge.report(
                            "hq.stock_detail.etf_risk_bar_brow"
                          ),
                          (this.etfRisk = w),
                          (C = [w])),
                        (this.list = C.filter(function (t) {
                          return !I.includes(
                            "".concat(P.symbol, "-").concat(t.id)
                          );
                        })),
                        this.list.length > 0 && (this.showBar = !0),
                        this.list.length > 1 &&
                          this.$nextTick(function () {
                            P.startCarousel();
                          }),
                        this.newsList.length > 0 &&
                          r({
                            symbol: this.symbol,
                            newsId: this.newsList[0].id,
                          }),
                        (t.next = 28);
                      break;
                    case 26:
                      (t.prev = 26), (t.t0 = t.catch(0));
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this,
              [[0, 26]]
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  c(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              s = function (t) {
                try {
                  c(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, s);
              };
            c((n = n.apply(o, null)).next());
          })
        );
        var o, n;
      },
      startCarousel: function () {
        var t = this;
        (this.isAnimation = !0),
          (this.timeout = setTimeout(function () {
            var e = t.nowIndex + 1;
            (t.nowIndex = e >= t.list.length ? 0 : e), t.startCarousel();
          }, 6e3));
      },
      getIcon: function (t) {
        if (t.isNews) {
          if (0 === t.type || 3 === t.type)
            return this.isClassic
              ? "https://st.gtimg.com/design/e4cb64582cdedc4639e23e52e6a49853.svg"
              : "https://st.gtimg.com/design/006a7c52a6c4782725095ee057dc9e5a.png";
          if (1 === t.type)
            return this.isClassic
              ? "https://st.gtimg.com/design/0c22ab35a5de45f85f8ddb22e62cda33.svg"
              : "https://st.gtimg.com/design/5ebc9a831cbdd40099e40b6e1529f659.png";
          if (2 === t.type)
            return this.isClassic
              ? "https://st.gtimg.com/design/12d3f030189a25133c8f65dbfb4f1d15.svg"
              : "https://st.gtimg.com/design/482b55b4b8d8816f5c9ccc4b885cca53.png";
        } else if (t.isEvent) {
          if ([1, 2, 3, 4, 5, 7, 100].includes(+t.category))
            return this.isClassic
              ? "https://st.gtimg.com/design/e5fe1168e1c23da15360cd9d07c1e057.png"
              : "https://st.gtimg.com/design/8bb4dd6d6716d3283a4f72b55990659a.png";
          if (6 == +t.category)
            return "https://st.gtimg.com/design/ea66c76413d5682aa5d8a8c6f7b00a2f.png";
        } else {
          if (t.isTopic)
            return "https://st.gtimg.com/design/40b22820aa62a6c72a04bcd5820951ea.png";
          if (t.isRisk)
            return "https://st.gtimg.com/design/962712ee6bd5d9fe372ba7314bdfbc33.svg";
        }
      },
      openDetail: function (t) {
        t.isNews
          ? (s.StockBridge.report("hq.stock_detail.news_bar_click", {
              newsid: t.id,
              stockid: this.symbol,
            }),
            0 === t.type || 3 === t.type
              ? s.StockRouter.routeTo({
                  name: /subject/.test(t.url)
                    ? "informationSubject"
                    : "informationDetail",
                  query: { id: t.id },
                })
              : 1 === t.type
              ? s.StockRouter.routeTo({
                  name: "information_liveDetail",
                  query: { id: t.id },
                })
              : 2 === t.type &&
                s.StockRouter.routeTo({
                  name: "information_videoDetail",
                  query: { id: t.id },
                }))
          : t.isEvent
          ? (this.isClassic &&
              ((this.isAnimation = !1),
              clearTimeout(this.timeout),
              (this.showDialog = !0)),
            s.StockBridge.busEmit("autoHideTradePanel", "newBar"),
            (this.popupIn = !0),
            (this.showPopup = !0),
            s.StockBridge.report("hq.kch_eventbar.showdialog_click", {
              stockid: this.symbol,
            }))
          : t.isTopic
          ? (s.StockBridge.report("hq.stock_detail.topic_bar_click", {
              stockid: this.symbol,
            }),
            s.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#".concat(t.url)
            ))
          : t.isRisk &&
            (s.StockBridge.busEmit("showAiDialog", {
              title: t.title,
              prompt: t.prompt,
              scene: "stockdetail",
              replaceValue: this.symbol,
            }),
            s.StockBridge.report("hq.stock_detail.etf_risk_bar_click"));
      },
      goNotice: function (t) {
        s.StockBridge.report("hq.stock_detail.bigevent_bar_click", {
          newsid: t,
          stockid: this.symbol,
        }),
          s.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: t },
          });
      },
      goMoreEvent: function () {
        var t =
          "https://wzq.tenpay.com/mp/v2/index.html#/trade/event_detail?symbol="
            .concat(this.symbol, "&lite=1&market=")
            .concat(this.market);
        s.StockBridge.openExtraWebview(t);
      },
      closeItem: function () {
        var t = this.list[this.nowIndex],
          e = s.StockBridge.getStorage("stock_detail_news_bar_closed") || [];
        e.push("".concat(this.symbol, "-").concat(t.id)),
          e.length > 100 && (e = e.slice(-100)),
          s.StockBridge.setStorage("stock_detail_news_bar_closed", e),
          s.StockBridge.report("hq.stock_detail.info_bar_close", {
            newsid: t.id,
          }),
          this.list.splice(this.nowIndex, 1),
          (this.nowIndex = Math.min(this.nowIndex, this.list.length - 1)),
          this.list.length <= 0 && (this.showBar = !1),
          this.list.length <= 1 && clearTimeout(this.timeout);
      },
      closePopup: function () {
        var t = this;
        (this.popupIn = !1),
          this.isClassic
            ? (this.startCarousel(), (this.showPopup = !1))
            : setTimeout(function () {
                t.showPopup = !1;
              }, 300);
      },
    },
  };
Array || s.resolveComponent("MessageDialog")();
var l = s._export_sfc(a, [
  [
    "render",
    function (t, e, i, o, n, c) {
      return s.e(
        { a: n.showBar },
        n.showBar
          ? s.e(
              { b: c.isLite },
              (c.isLite, {}),
              {
                c: s.f(n.list, function (t, e, i) {
                  return s.e(
                    { a: n.nowIndex === e },
                    n.nowIndex === e
                      ? s.e(
                          {
                            b: s.n(c.isClassic ? "image-classic" : ""),
                            c: c.getIcon(t),
                            d: t.isNews,
                          },
                          t.isNews
                            ? {
                                e: s.t(t.title),
                                f: s.n(c.isClassic ? "title-classic" : ""),
                              }
                            : t.isEvent || (t.isTopic && c.isClassic)
                            ? s.e(
                                {
                                  h: s.t(t.title),
                                  i: s.t(t.desc),
                                  j: s.n(c.isClassic ? "title-classic" : ""),
                                  k: !c.isClassic,
                                },
                                (c.isClassic, {})
                              )
                            : t.isRisk
                            ? { m: s.t(t.entrance) }
                            : {},
                          {
                            g: t.isEvent || (t.isTopic && c.isClassic),
                            l: t.isRisk,
                            n: n.list.length > 1 && n.isAnimation ? 1 : "",
                            o: s.o(
                              function (e) {
                                return c.openDetail(t);
                              },
                              1739,
                              t.id
                            ),
                          }
                        )
                      : {},
                    { p: t.id }
                  );
                }),
                d: s.o(function (t) {
                  return c.closeItem();
                }, 1740),
                e: n.showPopup,
              },
              n.showPopup
                ? s.e(
                    { f: !c.isClassic },
                    c.isClassic
                      ? s.e(
                          { o: n.showDialog },
                          n.showDialog
                            ? {
                                p: s.o(function (t) {
                                  return c.goMoreEvent();
                                }, 1747),
                                q: s.o(function (t) {
                                  return c.closePopup();
                                }, 1748),
                                r: s.p({
                                  symbol: i.symbol,
                                  market: c.market,
                                  list: n.eventList,
                                }),
                              }
                            : {}
                        )
                      : s.e(
                          {
                            g: s.o(function (t) {
                              return c.closePopup();
                            }, 1741),
                            h: n.newsList.length,
                          },
                          n.newsList.length
                            ? {
                                i: s.f(n.newsList, function (t, e, i) {
                                  return {
                                    a: c.getIcon(t),
                                    b: s.t(t.title),
                                    c: t.id,
                                    d: s.o(
                                      function (e) {
                                        return c.openDetail(t);
                                      },
                                      1742,
                                      t.id
                                    ),
                                  };
                                }),
                              }
                            : {},
                          { j: n.eventList.length },
                          n.eventList.length
                            ? {
                                k: s.f(n.eventList, function (t, e, i) {
                                  return s.e(
                                    {
                                      a: c.getIcon(t),
                                      b: s.t(t.title),
                                      c: s.t(t.desc),
                                      d: t.notice_id,
                                    },
                                    t.notice_id
                                      ? {
                                          e: s.o(
                                            function (e) {
                                              return c.goNotice(t.notice_id);
                                            },
                                            1743,
                                            t.id
                                          ),
                                        }
                                      : t.research_id
                                      ? {
                                          g: s.o(
                                            function (e) {
                                              return c.goNotice(t.research_id);
                                            },
                                            1744,
                                            t.id
                                          ),
                                        }
                                      : {},
                                    { f: t.research_id, h: t.id }
                                  );
                                }),
                                l: s.o(function (t) {
                                  return c.goMoreEvent();
                                }, 1745),
                              }
                            : {},
                          {
                            m: s.n(n.popupIn ? "slide-in" : "slide-out"),
                            n: s.o(function (t) {
                              return {};
                            }, 1746),
                          }
                        ),
                    {
                      s: s.n(n.popupIn ? "fade-in" : "fade-out"),
                      t: s.o(function (t) {
                        return c.closePopup();
                      }, 1749),
                      v: s.o(function (t) {
                        return {};
                      }, 1750),
                    }
                  )
                : {},
              { w: c.isClassic ? 1 : "", x: c.isLite ? 1 : "" }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-176c6b4f"],
]);
wx.createComponent(l);
