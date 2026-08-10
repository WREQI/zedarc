var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (n, s) {
      var o = function (t) {
          try {
            c(i.next(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          try {
            c(i.throw(t));
          } catch (t) {
            s(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(o, r);
        };
      c((i = i.apply(t, e)).next());
    });
  },
  i = require("../../../../common/vendor.js"),
  n = require("../stock-hq-core/config/const.js"),
  s = require("../stock-hq-data/index.js"),
  o = require("../stock-base/visibilityObserver/index.js"),
  r = {
    inject: ["hqBridge"],
    components: {
      FundDialog: function () {
        return "./FundDialog.js";
      },
    },
    props: [
      "isTrading",
      "symbol",
      "scode",
      "type",
      "isIndex",
      "stockOverView",
      "stockName",
      "skin",
      "stockType",
    ],
    data: function () {
      return {
        show: !0,
        carousel: !1,
        nowIndex: 0,
        list: [],
        diaPosition: 0,
        showDialog: !1,
        direction: "bottom",
        unit: 1e8,
        firstLoad: !0,
        fundInterval: null,
        ismpTrading: !1,
        VISIBILITY_OBJ: null,
      };
    },
    computed: {
      isMP: function () {
        return "mp" === i.StockBridge.ENV;
      },
    },
    watch: {
      isTrading: function (t) {
        (this.ismpTrading = t),
          this.ismpTrading && this.setPolling(),
          !this.ismpTrading && this.clearRefresh();
      },
    },
    created: function () {
      this.fetchData(), this.setPolling();
    },
    activated: function () {
      this.scode === this.$route.query.scode && this.fetchData();
    },
    deactivated: function () {
      this.clearRefresh();
    },
    beforeDestroy: function () {
      var t, e, i;
      null ==
        (i =
          null == (e = null == (t = this.VISIBILITY_OBJ) ? void 0 : t.observer)
            ? void 0
            : e.disconnect) || i.call(e),
        (this.VISIBILITY_OBJ = null),
        this.clearRefresh();
    },
    methods: {
      initObserve: function () {
        this.VISIBILITY_OBJ ||
          (this.VISIBILITY_OBJ = new o.VisibilityObserver(
            "#fundbar",
            {
              once: !0,
              callback: function (t, e) {
                t && i.StockBridge.report("hq.detail.fundbar.expose");
              },
              intersection: { threshold: 0 },
            },
            this
          ));
      },
      clearRefresh: function () {
        this.fundInterval && clearInterval(this.fundInterval);
      },
      qipaoChanged: function (t) {
        t && i.StockBridge.report("hq.detail.fund.countmodule.expose");
      },
      fetchData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.hasHSFunds()) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 3), this.getHSData();
                    case 3:
                      t.next = 11;
                      break;
                    case 5:
                      if (
                        !s.utils.isHKMarket(this.type) ||
                        this.scode.match(/^ces/i)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 8), this.getHKData();
                    case 8:
                      t.next = 11;
                      break;
                    case 10:
                      this.show = !1;
                    case 11:
                      this.show && this.list.length > 0 && this.initObserve();
                    case 12:
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
      hasHSFunds: function () {
        return (
          s.utils.isHSMarket(this.type) &&
          !s.utils.isDebt(this.stockType) &&
          "ZQ-GZ" !== this.stockType &&
          !s.utils.isTransferableDebt(this.stockType) &&
          ((t = this.scode),
          !(
            (function (t) {
              return 0 == +t;
            })(this.type) && /^98/.test(t)
          ))
        );
        var t;
      },
      setPolling: function () {
        var t = this;
        this.isTrading &&
          (this.clearRefresh(),
          (this.fundInterval = setInterval(function () {
            t.fetchData();
          }, 5e3)));
      },
      goDetail: function (t, e) {
        var n;
        if (
          ((n = e
            ? "lhb" === t
              ? "hq.detail.dialog.lhb.click"
              : "hq.detail.dialog.fund.click"
            : "lhb" === t
            ? "hq.detail.lhbbar.click"
            : "") && i.StockBridge.report(n),
          this.showRedDot &&
            (i.StockBridge.report("jichu.hongdian.dianji", {
              id: this.showRedDot,
            }),
            (this.showRedDot = "")),
          i.StockBridge.report(
            (this.isIndex ? "index" : "stock") + "_detail.funds_analysis",
            { stockid: this.symbol }
          ),
          "dafeng" === i.StockBridge.ENV)
        )
          i.StockBridge.routeTo({
            path: "/fundsAnalysisPage",
            query: {
              scode: this.scode,
              market: this.type,
              stockName: this.stockName,
              unit: this.unit,
              priceFixed:
                (this.stockOverView.dqj &&
                  this.stockOverView.dqj.toString().split(".")[1].length) ||
                2,
              isIndex: this.isIndex ? "1" : "",
              isFund: s.utils.isFund(this.stockType) ? "1" : "",
              type: this.type,
              tab: t || "",
            },
          });
        else if ("mp" === i.StockBridge.ENV) {
          var o = {
              scode: this.scode,
              market: this.type,
              stockName: this.stockName,
              unit: this.unit,
              priceFixed:
                (this.stockOverView.dqj &&
                  this.stockOverView.dqj.toString().split(".")[1].length) ||
                2,
              isIndex: this.isIndex ? "1" : "",
              isFund: s.utils.isFund(this.stockType) ? "1" : "",
              type: this.type,
              skin: this.skin,
              tab: t || "",
            },
            r = [];
          for (var c in o) {
            var a = "".concat(c, "=").concat(o[c]);
            r.push(a);
          }
          var h = r.join("&"),
            u = "https://wzq.tenpay.com/mp/v2/index.html#/funds_analysis/"
              .concat(
                s.utils.isHSMarket(this.type) ? "hs_" : "",
                "index.shtml?"
              )
              .concat(h);
          i.StockBridge.openExtraWebview(u);
        } else
          i.StockBridge.routeTo({
            path: "/funds_analysis/".concat(
              s.utils.isHSMarket(this.type) ? "hs_" : "",
              "index.shtml"
            ),
            query: {
              scode: this.scode,
              market: this.type,
              stockName: this.stockName,
              unit: this.unit,
              priceFixed:
                (this.stockOverView.dqj &&
                  this.stockOverView.dqj.toString().split(".")[1].length) ||
                2,
              isIndex: this.isIndex ? "1" : "",
              isFund: s.utils.isFund(this.stockType) ? "1" : "",
              type: this.type,
              tab: t || "",
            },
          });
      },
      carouselMessage: function () {
        var t = this;
        this.carousel &&
          (this.interVal = setInterval(function () {
            var e = t.nowIndex + 1;
            t.nowIndex = e > t.list.length - 1 ? 0 : e;
          }, 3e3));
      },
      getTextUnit: function (t) {
        var e = 1e8,
          i = "亿";
        return (
          isNaN(t) ||
            ((e = 1e8),
            (i = "亿"),
            Math.abs(t) < 1e9 && ((e = 1e4), (i = "万"))),
          { unit: e, text: i }
        );
      },
      getHSData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s,
              o,
              r,
              c,
              a,
              h,
              u,
              d,
              l,
              f,
              g,
              p,
              k,
              v,
              x,
              b,
              m,
              y,
              w,
              I,
              S,
              q,
              B;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s = {
                          symbol: this.symbol,
                          type: "hsFundFlow,lhb",
                          zsPage: this.isIndex ? 1 : "",
                        }),
                        (t.next = 3),
                        (function (t) {
                          var e = t || {},
                            s = e.symbol,
                            o = e.type,
                            r = void 0 === o ? "" : o,
                            c = e.zsPage,
                            a = void 0 === c ? "" : c,
                            h =
                              "https://proxy.finance.qq.com/cgi/cgi-bin/fundflow/bannerInfo?code="
                                .concat(void 0 === s ? "" : s, "&type=")
                                .concat(r, "&app=")
                                .concat(
                                  n.SOURCEENUM[i.isBroker] ||
                                    n.SOURCEENUM.DEFAULT,
                                  "&zsPage="
                                )
                                .concat(a);
                          return i.StockBridge.request(h, "get")
                            .then(function (t) {
                              return t;
                            })
                            .catch(function (t) {
                              return t;
                            });
                        })(s)
                      );
                    case 3:
                      (o = t.sent),
                        (r = (o || {}).data),
                        (a = (c = (void 0 === r ? {} : r) || {}).hsFundFlow),
                        (h = void 0 === a ? null : a),
                        (u = c.lhb),
                        (d = void 0 === u ? null : u),
                        (l = []),
                        h &&
                          ((g = (f = h || {}).ffHide),
                          (p = void 0 === g ? "" : g),
                          (k = f.mainNetIn),
                          (v = void 0 === k ? "" : k),
                          (x = this.getTextUnit(+v)),
                          (b = x.unit || 1e8),
                          (this.unit = b),
                          (m = (+v / b).toFixed(1)),
                          (y = {
                            title: "今日主力资金净流入：",
                            color: this.getColor(+m),
                            count: ""
                              .concat(+m > 0 ? "+" : "")
                              .concat(m)
                              .concat(x.text),
                            icon: "https://st.gtimg.com/design/14ef87c0ce9f3814c8534aa0708c7272.png",
                            type: "fund",
                          }),
                          p || l.push(y)),
                        d &&
                          ((w = (d || {}).hotMoneyNetAmt),
                          (I = void 0 === w ? "" : w),
                          (S = this.getTextUnit(+I)),
                          (q = (+I / (S.unit || 1e8)).toFixed(1)),
                          d.isOnList &&
                            0 !== q &&
                            ((B = {
                              title: "今日上榜龙虎榜：知名游资净买入",
                              count: ""
                                .concat(+q > 0 ? "+" : "")
                                .concat(q)
                                .concat(S.text),
                              color: this.getColor(+q),
                              icon: "https://st.gtimg.com/design/94180a8e3af10612bdefd1fd236a2a60.png",
                              type: "lhb",
                            }),
                            l.push(B),
                            l.length >= 2 &&
                              ((this.carousel = !0),
                              this.firstLoad &&
                                (this.carouselMessage(),
                                (this.firstLoad = !1))),
                            i.StockBridge.report("hq.detail.lhbbar.expose"))),
                        (this.list = l);
                    case 16:
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
      getHKData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, s, o, r, c, a, h, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        (s = { code: "hk".concat(this.scode) }),
                        i.StockBridge.request(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/fundflow/hkff",
                          "post",
                          s
                        )
                          .then(function (t) {
                            return t;
                          })
                          .catch(function (t) {
                            return t;
                          })
                      );
                    case 2:
                      if (0 != (n = t.sent).code || !n.data) {
                        t.next = 11;
                        break;
                      }
                      if (
                        ((o = n.data || {}),
                        (r = o.flow),
                        0 !== (c = void 0 === r ? [] : r).length)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return", void (this.show = !1));
                    case 7:
                      (a = c[0][1]),
                        (h = this.getTextUnit(a)),
                        (u = h.unit || 1e8),
                        (this.unit = u),
                        (this.list = [
                          {
                            title: "今日主力资金净流入：",
                            count: ""
                              .concat(+a > 0 ? "+" : "")
                              .concat((a / u).toFixed(1))
                              .concat(h.text),
                            color: this.getColor(+a),
                            icon: "https://st.gtimg.com/design/14ef87c0ce9f3814c8534aa0708c7272.png",
                            type: "fund",
                          },
                        ]),
                        (t.next = 12);
                      break;
                    case 11:
                      this.show = !1;
                    case 12:
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
      getColor: function (t) {
        return 0 === t ? "color-ping" : t > 0 ? "color-rise" : "color-drop";
      },
      getIcon: function (t) {
        return 3 === t
          ? this.icon.fund
          : 1 === t
          ? this.icon.lhb
          : this.icon.default;
      },
      getRectForMP: function (t) {
        var e = this;
        return new Promise(function (n) {
          i.wx$1
            .createSelectorQuery()
            .in(e)
            .select(t)
            .boundingClientRect(function (t) {
              n(t);
            })
            .exec();
        });
      },
      onOpen: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, s, o, r, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (i.StockBridge.report("hq.detail.countmodule.click"),
                        !this.isMP)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), this.getRectForMP("#fundbar");
                    case 4:
                      (t.t0 = t.sent), (t.next = 8);
                      break;
                    case 7:
                      t.t0 = this.$refs.fundbar.getBoundingClientRect();
                    case 8:
                      (n = t.t0),
                        (s = n.top),
                        (o = void 0 === s ? 0 : s),
                        (r = n.height),
                        (c = this.isMP
                          ? (
                              (i.wx$1.getWindowInfo &&
                                i.wx$1.getWindowInfo()) ||
                              i.wx$1.getSystemInfoSync()
                            ).screenHeight
                          : document.body.clientHeight),
                        o < c / 2
                          ? ((this.diaPosition = o + r),
                            (this.direction = "top"))
                          : ((this.diaPosition = c - o),
                            (this.direction = "bottom")),
                        (this.showDialog = !0);
                    case 14:
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
      onClose: function () {
        this.showDialog = !1;
      },
    },
  };
Array || i.resolveComponent("FundDialog")();
var c = i._export_sfc(r, [
  [
    "render",
    function (t, e, n, s, o, r) {
      return i.e(
        { a: o.show && o.list.length > 0 },
        o.show && o.list.length > 0
          ? i.e(
              { b: o.showDialog },
              o.showDialog
                ? {
                    c: i.o(r.onClose, 1762),
                    d: i.o(r.goDetail, 1763),
                    e: i.p({
                      list: o.list,
                      diaPosition: o.diaPosition,
                      direction: o.direction,
                    }),
                  }
                : {},
              { f: o.list.length > 0 },
              o.list.length > 0
                ? {
                    g: i.f(o.list, function (t, e, n) {
                      return i.e(
                        { a: !o.carousel || e === o.nowIndex },
                        o.carousel && e !== o.nowIndex
                          ? {}
                          : {
                              b: t.icon,
                              c: i.t(t.title),
                              d: i.t(t.count),
                              e: i.n(t.color),
                              f: i.n(o.carousel && "carousel-item"),
                              g: t.ob_id,
                              h: i.o(
                                function (e) {
                                  return r.goDetail(t.type);
                                },
                                1764,
                                t.ob_id
                              ),
                            }
                      );
                    }),
                    h: i.n(o.carousel && "carousel-outer"),
                  }
                : {},
              { i: !o.carousel },
              o.carousel
                ? {
                    k: i.t(o.list.length),
                    l: i.o(function () {
                      return r.onOpen && r.onOpen.apply(r, arguments);
                    }, 1766),
                  }
                : {
                    j: i.o(function (t) {
                      return r.goDetail("fund");
                    }, 1765),
                  }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-34727702"],
]);
wx.createComponent(c);
