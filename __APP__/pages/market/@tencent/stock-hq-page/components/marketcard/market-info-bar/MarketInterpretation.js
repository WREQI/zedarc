require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../Index.js"),
  r = require("../../../../../../../common/vendor.js"),
  a = {
    components: {
      MarketInterpretation: function () {
        return "./index.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      market: { type: String, default: "" },
      helper: { type: Object, default: function () {} },
      userInfo: { type: Object, default: function () {} },
    },
    data: function () {
      return {
        dataReady: !1,
        data: {},
        isLiveType: !1,
        isShowOperationCard: !1,
        env: this.hqBridge.ENV,
      };
    },
    computed: {
      isWzq: function () {
        return !1;
      },
    },
    methods: {
      getMarketInfo: function () {
        return (
          (r = this),
          null,
          (a = t().mark(function () {
            var r,
              a,
              i,
              n,
              o,
              s,
              c,
              u,
              d,
              l,
              h,
              p = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.market) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        e.HqAPI.getMarketInfo(this.hqBridge, this.market)
                      );
                    case 5:
                      (r = t.sent), (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(2)), (r = {});
                    case 11:
                      if (
                        ((i = (a = r).code),
                        (n = void 0 === i ? -1 : i),
                        (o = a.data),
                        (s = void 0 === o ? [] : o),
                        0 != +n || !(null == s ? void 0 : s.length))
                      ) {
                        t.next = 18;
                        break;
                      }
                      if (this.data.id !== s[0].id) {
                        t.next = 15;
                        break;
                      }
                      return t.abrupt("return");
                    case 15:
                      (this.data = s[0]),
                        (c = this.data),
                        (u = c.summary),
                        (d = void 0 === u ? "" : u),
                        (l = c.type),
                        (h = void 0 === l ? 0 : l),
                        (this.dataReady = !!d),
                        (this.isLiveType = 1 === h),
                        this.dataReady && this.report("showNews"),
                        this.$nextTick(function () {
                          var t, e, r;
                          p.dataReady &&
                            (null ==
                              (r =
                                null ==
                                (e =
                                  null == (t = p.$refs)
                                    ? void 0
                                    : t.marketInterpretation)
                                  ? void 0
                                  : e.getLines) ||
                              r.call(e));
                        });
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              s,
              this,
              [[2, 8]]
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  o(a.next(t));
                } catch (t) {
                  e(t);
                }
              },
              n = function (t) {
                try {
                  o(a.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, n);
              };
            o((a = a.apply(r, null)).next());
          })
        );
        var r, a;
      },
      tapDetail: function () {
        var t = this.data,
          e = t.type,
          r = t.id,
          a = { 3: "news_vip_click" };
        this.report(
          {
            0: "news_click",
            1: "live_click",
            2: "video_click",
            3: "news_click",
          }[e]
        ),
          a[e] && this.report(a[e]),
          this.isWzq ? this.wzqDetail(+e) : this.mpDetail(+e, r);
      },
      wzqDetail: function (t) {
        if (1 === t) this.helper.navigateWithSDK(this.data.url);
        else {
          var e =
            2 === t
              ? "".concat(this.data.url, "&t=").concat(Date.now())
              : this.data.url;
          this.hqBridge.routeTo({ path: e });
        }
      },
      mpDetail: function (t, e) {
        var a = {
          0: "informationDetail",
          1: "information_liveDetail",
          2: "information_videoDetail",
          3: "informationDetail",
        };
        if ([0, 3].includes(t))
          r.StockRouter.routeTo({
            name: /^TN/.test(e) ? "informationSubject" : "informationDetail",
            query: { id: e },
          });
        else {
          var i = a[t] || a[0];
          r.StockRouter.routeTo({ name: i, query: { id: e } });
        }
      },
      report: function (t) {
        var e = { market: this.market, newsid: this.data.id };
        this.hqBridge.report(
          "hq.".concat(this.market, ".market_news_bar_").concat(t),
          e
        );
      },
      getOperationCardData: function (t) {
        this.isShowOperationCard = t;
      },
    },
  };
Array || r.resolveComponent("market-interpretation")();
var i = r._export_sfc(a, [
  [
    "render",
    function (t, e, a, i, n, o) {
      return {
        a: r.sr("marketInterpretation", "c3a0fb6b-0"),
        b: r.o(o.getMarketInfo, 4945),
        c: r.o(o.tapDetail, 4946),
        d: r.p({
          type: "marketInterpretation",
          data: n.data,
          "is-live-type": n.isLiveType,
          market: a.market,
          "i-data-ready": n.dataReady,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-c3a0fb6b"],
]);
wx.createComponent(i);
