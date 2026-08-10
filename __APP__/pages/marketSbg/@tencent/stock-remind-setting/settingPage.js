require("../../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  s = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  h = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  d = function (t, e) {
    for (var i in e || (e = {})) u.call(e, i) && h(t, i, e[i]);
    if (o) {
      var n,
        a = s(o(e));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          i = n.value;
          l.call(e, i) && h(t, i, e[i]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  c = function (t, e) {
    return a(t, r(e));
  },
  f = function (t, e, i) {
    return new Promise(function (s, n) {
      var a = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(a, r);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  m = require("../stock-hq-data/index.js"),
  v = require("api/index.js"),
  b = require("mixins/config.js"),
  S = [0.1, 0.1, 3, 3],
  g = [0.2, 0.2, 7, 7],
  k = [0.1, 0.1, 3, 3],
  w = [0.2, 0.2, 5, 5],
  _ = [0.2, 0.2, 5, 5],
  y = [0.03, 0.05],
  x = [0.05, 0.07, 0.1, 0.2],
  T = [0.02, 0.03, 0.05, 0.07],
  D = [0.03, 0.05, 0.07, 0.1],
  F = [0.05, 0.07, 0.1, 0.2],
  M = {
    data: function () {
      return {
        hasSetRemind: !1,
        detailApi: null,
        stockOverView: {},
        remindConfig: b.REMIND_TEMPLATE,
        hasSetSmart: !0,
        cjePeak: 0,
        mainInflowPeak: 0,
        showFundNav: !1,
      };
    },
    props: { isThreshold: { type: Boolean, default: !1 } },
    computed: {
      isMp: function () {
        return p.StockBridge.ENV === p.EnvTypeEnum.MP;
      },
      zxj: function () {
        return this.stockOverView && this.stockOverView.dqj;
      },
      stockType: function () {
        return this.stockOverView && this.stockOverView.stocktype;
      },
      symbol: function () {
        return this.stockOverView && this.stockOverView.symbol;
      },
      isDebt: function () {
        return m.utils.isDebt(this.stockType);
      },
      isST: function () {
        return /^ST/.test(this.stockName) || /^\*ST/.test(this.stockName);
      },
      isCYBKCB: function () {
        return (
          m.utils.isChuangYeStock(this.stockType) ||
          m.utils.isKeChuangStock(this.stockType)
        );
      },
      isKCB: function () {
        return m.utils.isKeChuangStock(this.stockType);
      },
      isBMarket: function () {
        return m.utils.isBMarket(this.stockType);
      },
      isIndex: function () {
        return m.utils.isIndex(this.stockType);
      },
      isFund: function () {
        return m.utils.isFund(this.stockType);
      },
      isHKFund: function () {
        return m.utils.isHKFund(this.market, this.stockType);
      },
      isPlateIndex: function () {
        return (
          m.utils.isHSPlate(this.market) || m.utils.isIndex(this.stockType)
        );
      },
      isHK: function () {
        return m.utils.isHKMarket(this.market);
      },
      isHS: function () {
        return m.utils.isHSMarket(this.market);
      },
      isUS: function () {
        return m.utils.isUSMarket(this.market);
      },
      isETF: function () {
        return "ETF" === this.stockType;
      },
      marketState: function (t, e) {
        return this.isHK
          ? "NEWHK"
          : m.utils.isBJMarket(t) || this.isHS || m.utils.isHSPlate(t)
          ? "NEWSH"
          : this.isUS
          ? "NEWUS"
          : "DAX30" === e
          ? "EU"
          : "NEWSH";
      },
      preplaceData: function () {
        return this.isST
          ? S
          : this.isCYBKCB
          ? g
          : this.isPlateIndex
          ? k
          : this.isHK
          ? w
          : _;
      },
      zdfMax: function () {
        return this.isST
          ? 5
          : this.isCYBKCB
          ? 20
          : this.isPlateIndex || this.isHS
          ? 10
          : this.isHK || this.isUS
          ? 0
          : 10;
      },
      zdfTagList: function () {
        return this.isST
          ? y
          : this.isCYBKCB
          ? x
          : this.isPlateIndex
          ? T
          : this.isHS
          ? D
          : this.isDebt
          ? []
          : F;
      },
      name: function () {
        var t;
        if (this.remindStockName) return this.remindStockName;
        var e =
          this.stockName ||
          (null == (t = null == this ? void 0 : this.stockOverView)
            ? void 0
            : t.secu_name) ||
          "";
        return e ? (this.isDebt && b.getDebtMarketPeriod(e)) || e : "";
      },
      theme: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp")
          ? "lite"
          : "profession";
      },
      showFund: function () {
        return !(
          "profession" !== this.theme ||
          this.isUS ||
          this.isHK ||
          this.isKCB ||
          this.isBMarket
        );
      },
      showCje: function () {
        return "profession" === this.theme && this.isHK;
      },
      showLargeOrder: function () {
        return (
          (this.isHS || this.isHK) &&
          !this.isIndex &&
          !this.isETF &&
          !this.isFund &&
          !this.isHKFund
        );
      },
    },
    methods: {
      buildSubscribeInfoPayload: function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = d({}, e),
          s = +(null != (t = i.subs_type) ? t : i.type);
        return [15, 16].includes(s) && (i.notice_type = 2), i;
      },
      queryStockInfo: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var s, n, a, r, o, u, l, h, d, c;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (l = this.scode),
                        (h = this.market),
                        (t.next = 4),
                        v.StockAPiService.queryStockinfo(
                          {
                            markets: h,
                            scode: l,
                            maxage: 36e3,
                            type: 3,
                            kline: 1,
                            fq: 1,
                            count: 5,
                            needquote: 1,
                            needfive: 1,
                          },
                          this.hqBridge.request
                        )
                      );
                    case 4:
                      (d = t.sent),
                        (c = (
                          (null ==
                          (a =
                            null ==
                            (n =
                              null ==
                              (s = Object.values(
                                (null == d ? void 0 : d.data) || {}
                              ))
                                ? void 0
                                : s[0])
                              ? void 0
                              : n.qfqday)
                            ? void 0
                            : a.slice(-5)) ||
                          (null ==
                          (u =
                            null ==
                            (o =
                              null ==
                              (r = Object.values(
                                (null == d ? void 0 : d.data) || {}
                              ))
                                ? void 0
                                : r[0])
                              ? void 0
                              : o.day)
                            ? void 0
                            : u.slice(-5)) ||
                          []
                        ).map(function (t) {
                          return parseFloat(t[8]);
                        })),
                        (this.cjePeak = Math.max.apply(Math, i(c)));
                    case 7:
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
      queryMainInflow: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var s, n, a, r, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), (a = this.symbol))) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      return (
                        (t.next = 6),
                        v.StockAPiService.queryMainInflow(
                          { code: a },
                          this.hqBridge.request
                        ).catch(function (t) {
                          return { data: null };
                        })
                      );
                    case 6:
                      (r = t.sent),
                        (o = (
                          (null ==
                          (n =
                            null == (s = null == r ? void 0 : r.data)
                              ? void 0
                              : s.fiveDayFundFlow)
                            ? void 0
                            : n.DayMainNetInList) || []
                        )
                          .map(function (t) {
                            var e = parseInt(null == t ? void 0 : t.mainNetIn);
                            return isNaN(e) ? 0 : Math.abs(e);
                          })
                          .filter(function (t) {
                            return null != t;
                          })),
                        (this.mainInflowPeak =
                          o.length > 0 ? Math.max.apply(Math, i(o)) : 0),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(0)),
                        (this.mainInflowPeak = 0);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 11]]
            );
          })
        );
      },
      queryHkMainInflow: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var s, n, a, r, o;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), (a = this.symbol))) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      return (
                        (t.next = 6),
                        v.StockAPiService.queryHkMainInflow(
                          { code: a, type: "history", num: 20 },
                          this.hqBridge.request
                        ).catch(function (t) {
                          return { data: null };
                        })
                      );
                    case 6:
                      (r = t.sent),
                        (o = (
                          (null ==
                          (n =
                            null == (s = null == r ? void 0 : r.data)
                              ? void 0
                              : s.history)
                            ? void 0
                            : n.slice(-5)) || []
                        )
                          .map(function (t) {
                            var e = Number(null == t ? void 0 : t[3]);
                            return isNaN(e) ? 0 : Math.abs(e);
                          })
                          .filter(function (t) {
                            return null != t;
                          })),
                        (this.mainInflowPeak =
                          o.length > 0 ? Math.max.apply(Math, i(o)) : 0),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(0)),
                        (this.mainInflowPeak = 0);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 11]]
            );
          })
        );
      },
      getQT: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.detailApi), !t.t0)) {
                        t.next = 6;
                        break;
                      }
                      return (
                        (t.next = 4),
                        this.detailApi.getQT(
                          {
                            market: this.market,
                            scode: this.scode,
                            encode: "utf8",
                          },
                          { adapterType: "stockinfo", needProcess: !0 }
                        )
                      );
                    case 4:
                      (this.formatData = t.sent),
                        this.formatData &&
                          this.formatData.secu_quote &&
                          (this.stockOverView = d(
                            d({}, this.formatData.secu_info),
                            this.formatData.secu_quote
                          ));
                    case 6:
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
      queryRemindsetting: function (t) {
        return f(
          this,
          null,
          e().mark(function i() {
            var s,
              n,
              a,
              r,
              o,
              u = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = this.scode),
                        (a = this.market),
                        (r = this.symbol),
                        !n || "" === a || null == a || !r)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        v.StockAPiService.QueryStockAlert(
                          d(
                            {
                              code: n,
                              market: a,
                              is_fund: this.isFund ? 1 : 0,
                              symbol:
                                null == r ? void 0 : r.replace(/us\./, "us"),
                            },
                            t
                          )
                        ).catch(function (t) {
                          var e;
                          throw (
                            (u.showModal(t.retmsg || "获取提醒设置失败"),
                            null == (e = u.closePop) || e.call(u),
                            t)
                          );
                        })
                      );
                    case 5:
                      return (
                        (o = e.sent),
                        e.abrupt(
                          "return",
                          "wzq_light" === this.hqBridge.ENV && o.data
                            ? o.data
                            : o
                        )
                      );
                    case 9:
                      throw (
                        ((e.prev = 9),
                        (e.t0 = e.catch(2)),
                        this.showModal(e.t0.retmsg || "获取提醒设置失败"),
                        null == (s = this.closePop) || s.call(this),
                        e.t0)
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[2, 9]]
            );
          })
        );
      },
      submitAddOrSet: function () {
        return f(this, arguments, function () {
          var t = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          return e().mark(function n() {
            var a, r, o, u, l, h, c, f;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (i.length || s.length) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (l = {
                        market: t.market,
                        code: t.scode,
                        symbol: t.symbol,
                      }),
                      (h =
                        null ==
                        (r = null == (a = t.infosData) ? void 0 : a.smart)
                          ? void 0
                          : r.smart_tip),
                      s.length &&
                        ((c = {}),
                        s.forEach(function (e) {
                          (c[e] = 1),
                            void 0 !== (null == h ? void 0 : h[e]) &&
                              (t.infosData.smart.smart_tip[e] = 1);
                        }),
                        (f = {
                          big_event: 2,
                          new_high_low: 2,
                          limit_up_down: 2,
                          fund_nav_update: 2,
                        }),
                        (l.smart = d(
                          d(
                            d({}, f),
                            (null ==
                            (u = null == (o = t.infosData) ? void 0 : o.smart)
                              ? void 0
                              : u.smart_tip) || {}
                          ),
                          c
                        ))),
                      e.abrupt(
                        "return",
                        (i.length &&
                          (l.subscribe_infos = i.map(function (e) {
                            return t.buildSubscribeInfoPayload(e);
                          })),
                        t.SetStockAlert(l))
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, n);
          })();
        });
      },
      debounce: function (t, e) {
        var i;
        return function () {
          for (
            var s = this, n = arguments.length, a = new Array(n), r = 0;
            r < n;
            r++
          )
            a[r] = arguments[r];
          clearTimeout(i),
            (i = setTimeout(function () {
              return t.apply(s, a);
            }, e));
        };
      },
      handleRemindClick: function () {
        return f(this, arguments, function () {
          var t = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return e().mark(function s() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        t.SetStockAlert(
                          d(
                            {
                              market: t.market,
                              code: t.scode,
                              symbol: t.symbol,
                            },
                            i
                          )
                        )
                      );
                    case 3:
                      return (
                        (n = e.sent),
                        e.abrupt(
                          "return",
                          (n &&
                            0 == +n.retcode &&
                            ((t.debouncedInit =
                              t.debouncedInit ||
                              t.debounce(function () {
                                t.init(!1);
                              }, 1e3)),
                            t.debouncedInit(),
                            (t.hasPendingRefresh = !0)),
                          n)
                        )
                      );
                    case 7:
                      throw ((e.prev = 7), (e.t0 = e.catch(0)), e.t0);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              null,
              [[0, 7]]
            );
          })();
        });
      },
      SetStockAlert: function (t) {
        return f(
          this,
          null,
          e().mark(function i() {
            var s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        v.StockAPiService.SetStockAlert(
                          c(d({}, t), {
                            symbol:
                              null == (s = t.symbol)
                                ? void 0
                                : s.replace(/us\./, "us"),
                          })
                        )
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      throw (
                        ((e.prev = 6),
                        (e.t0 = e.catch(0)),
                        this.showModal(e.t0.retmsg || "提醒设置失败"),
                        e.t0)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[0, 6]]
            );
          })
        );
      },
      showModal: function (t) {
        var e = this;
        if (!this.modalStatus) {
          var i = this;
          this.$nextTick(function () {
            e.showRemindModal && e.closeRemindModal();
          }),
            (this.modalStatus = !0),
            "mp" === this.hqBridge.ENV
              ? p.wx$1.showModal({
                  content: t,
                  showCancel: !1,
                  confirmText: "我知道了",
                  confirmColor: "#3077EC",
                  success: function () {
                    i.modalStatus = !1;
                  },
                  fail: function (t) {
                    i.modalStatus = !1;
                  },
                })
              : this.$dialog
                  .alert({ content: t, confirmBtn: "我知道了" })
                  .then(function () {
                    i.modalStatus = !1;
                  })
                  .catch(function (t) {
                    i.modalStatus = !1;
                  });
        }
      },
      showToast: function (t) {
        p.StockBridge.ENV === p.EnvTypeEnum.MP
          ? p.wx$1.showToast({ title: t, icon: "none" })
          : this.$toast(t);
      },
      submitDelete: function () {
        return f(this, arguments, function () {
          var t = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return e().mark(function a() {
            var r, o, u, l, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((u = {
                          market: t.market,
                          code: t.scode,
                          symbol: t.symbol,
                        }),
                        s.length &&
                          ((l = {}),
                          s.forEach(function (t) {
                            l[t] = 2;
                          }),
                          (u.smart = d(
                            d(
                              {},
                              (null ==
                              (o = null == (r = t.infosData) ? void 0 : r.smart)
                                ? void 0
                                : o.smart_tip) || {}
                            ),
                            l
                          ))),
                        i.length || s.length)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (
                        !(h = i.filter(function (t) {
                          return t.seq;
                        })).length &&
                        !s.length
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (u.subscribe_infos = h),
                        (e.prev = 7),
                        (e.next = 10),
                        v.StockAPiService.DeleteStockAlert(u)
                      );
                    case 10:
                      n && t.init(!1), (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(7)),
                        t.showModal(
                          (null == e.t0 ? void 0 : e.t0.retmsg) || "删除失败"
                        );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [[7, 13]]
            );
          })();
        });
      },
      generatePrefillData: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = this.stockOverView.dqj;
        if (!e || !parseFloat(e)) return null;
        var i = e.toString().indexOf("."),
          s = e.substring(i + 1).length,
          n = function (e, i) {
            return t ? (1 === e ? Date.now() : "user_manual_close") : i;
          },
          a = {
            price_up: [
              {
                subs_type: 1,
                val:
                  this.isDebt ||
                  "0.00" === ((1 + this.preplaceData[0]) * e).toFixed(s)
                    ? ""
                    : ((1 + this.preplaceData[0]) * e).toFixed(s),
                notice_type: 1,
                time: "",
                alert_time: n(1, this.isDebt ? Date.now() : ""),
              },
            ],
            price_down: [
              {
                subs_type: 2,
                val:
                  this.isDebt ||
                  "0.00" === ((1 - this.preplaceData[1]) * e).toFixed(s)
                    ? ""
                    : ((1 - this.preplaceData[1]) * e).toFixed(s),
                notice_type: 1,
                time: "",
                alert_time: n(1, ""),
              },
            ],
            ratio_up: [
              {
                subs_type: 3,
                val: this.isDebt ? "" : this.preplaceData[2].toFixed(0),
                notice_type: 1,
                time: "",
                alert_time: n(1, ""),
              },
            ],
            ratio_down: [
              {
                subs_type: 4,
                val: this.isDebt ? "" : this.preplaceData[3].toFixed(0),
                notice_type: 1,
                time: "",
                alert_time: n(1, ""),
              },
            ],
          };
        this.isETF &&
          ((a.overflow_ratio_up = [
            {
              subs_type: 15,
              val: "5",
              notice_type: 2,
              time: "",
              alert_time: n(2, ""),
            },
          ]),
          (a.overflow_ratio_down = [
            {
              subs_type: 16,
              val: "0.5",
              notice_type: 2,
              time: "",
              alert_time: n(2, ""),
            },
          ]));
        var r = {
          new_high_low: t ? 0 : 1,
          limit_up_down: t ? 0 : this.isHS && !this.isIndex ? 1 : 0,
          big_event: t || this.isIndex || this.isETF ? 0 : 1,
          large_order: 0,
        };
        this.isFund &&
          (r = c(d({}, r), {
            fund_nav_update: this._openFundNavOnPrefill ? 1 : 0,
          }));
        var o = this.deletedPrefillTypes || [];
        return (
          o.length > 0 &&
            Object.keys(a).forEach(function (t) {
              var e = a[t];
              Array.isArray(e) &&
                e.length > 0 &&
                o.includes(+e[0].subs_type) &&
                delete a[t];
            }),
          { subscribe_infos: a, smart_tip: r }
        );
      },
      validatePrefillItem: function (t) {
        var e = t.subs_type,
          i = t.val;
        if (!i || "" === i) return !1;
        var s = +e,
          n = +i,
          a = +this.zxj;
        switch (s) {
          case 1:
            return a > 0 && n > a;
          case 2:
            return n > 0 && (!a || n < a);
          case 3:
            return n > 0 && (!this.zdfMax || n <= this.zdfMax);
          case 4:
            return n > 0 && n <= 100 && (!this.zdfMax || n <= this.zdfMax);
          case 15:
            if (!(n > 0 && n <= 500)) return !1;
            var r = parseFloat(this.stockOverView && this.stockOverView.yzl);
            return !Number.isFinite(r) || n > r;
          case 16:
            if (!(n > 0 && n <= 500)) return !1;
            var o = parseFloat(this.stockOverView && this.stockOverView.yzl);
            return !Number.isFinite(o) || n < o;
          default:
            return !0;
        }
      },
      initData: function (e) {
        var i,
          s,
          n,
          a = this,
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!r || this.hasSetRemind) {
          if (this.hasSetRemind && e) {
            var o =
                (null == (i = null == e ? void 0 : e.stocks) ? void 0 : i[0]) ||
                {},
              u = o.subscribe_infos,
              l =
                (null == (s = null == e ? void 0 : e.smart) ? void 0 : s[0]) ||
                {};
            if (
              !(null == l ? void 0 : l.smart_tip) ||
              0 === Object.keys((null == l ? void 0 : l.smart_tip) || {}).length
            ) {
              var h = {
                new_high_low: 0,
                limit_up_down: this.isHS && !this.isIndex ? 0 : void 0,
                big_event: this.isIndex || this.isETF ? void 0 : 0,
                large_order: 0,
              };
              this.isFund && (h.fund_nav_update = 0),
                (l = {
                  smart_tip: Object.fromEntries(
                    Object.entries(h).filter(function (e) {
                      var i = t(e, 2);
                      i[0];
                      return void 0 !== i[1];
                    })
                  ),
                });
            }
            return (
              this.isDebt && !u
                ? (this.infosData = {
                    subscribe_infos: {
                      price_up: [
                        {
                          subs_type: 1,
                          val: "",
                          notice_type: 1,
                          time: "",
                          alert_time: "",
                        },
                      ],
                    },
                  })
                : (this.infosData = { subscribe_infos: u, smart: l }),
              (this.singleTypeMax =
                +(null == e ? void 0 : e.single_type_max_item) || 10),
              void (this.hasSetSmart = !(null == e
                ? void 0
                : e.smart_curtain_stat))
            );
          }
          var c = this.generatePrefillData();
          if (c) {
            var f = c.subscribe_infos,
              p = c.smart_tip;
            this.isFund && 2 === this.fundNavStatus && (p.fund_nav_update = 2);
            var m = Object.entries(p)
              .filter(function (e) {
                var i = t(e, 2);
                i[0];
                return 0 !== i[1];
              })
              .filter(function (e) {
                var i = t(e, 2),
                  s = i[0],
                  n = i[1];
                return !("fund_nav_update" === s && 2 === n);
              })
              .reduce(function (e, i) {
                var s = t(i, 2),
                  n = s[0],
                  a = s[1];
                return (e[n] = a), e;
              }, {});
            return (
              (this.infosData = {
                subscribe_infos: f,
                smart: { smart_tip: p },
              }),
              this.isDebt
                ? void 0
                : this.submitAddOrSet(
                    (null == (n = Object.values(f || {}))
                      ? void 0
                      : n.flat().map(function (t) {
                          var e = a.validatePrefillItem(t);
                          return a.buildSubscribeInfoPayload(
                            d(
                              d(
                                { subs_type: t.subs_type, val: t.val },
                                !e && { alert_time: "user_manual_close" }
                              ),
                              !1
                            )
                          );
                        })) || [],
                    Object.keys(m)
                  ).catch(function (t) {
                    throw t;
                  })
            );
          }
        } else
          this.infosData = { subscribe_infos: {}, smart: { smart_tip: {} } };
      },
      prefillData: function () {
        var t = this.generatePrefillData(!0);
        if (t) {
          var e = t.subscribe_infos,
            i = t.smart_tip;
          this.infosData = { subscribe_infos: e, smart: { smart_tip: i } };
        }
      },
    },
  },
  N = {
    components: {
      settingDetail: function () {
        return "./components/settingDetail.js";
      },
      Topbar: function () {
        return "./components/customTopBar.js";
      },
      switchBtn: function () {
        return "./components/switchBtn.js";
      },
      upgradePop: function () {
        return "./upgradePop.js";
      },
      openRemindPop: function () {
        return "./openRemindPop.js";
      },
      addItemModal: function () {
        return "./components/addItemModal.js";
      },
    },
    mixins: [M],
    inject: ["hqBridge"],
    options: { styleIsolation: "shared" },
    props: {
      market: { type: String, default: "0" },
      scode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      pushPlate: { type: String, default: "1" },
      fromPage: { type: String, default: "" },
      isSubscribed: { type: Boolean, default: !0 },
      followStat: { type: String, default: "" },
    },
    data: function () {
      return {
        page: "settingPage",
        hasSetRemind: !1,
        hasClosedSettings: !1,
        lastQueryRes: null,
        remindNewData: null,
        hqWebSocket: null,
        formatData: {},
        isTrading: !1,
        fixTopbar: !0,
        showTopbar: !1,
        modalStatus: !1,
        subscribeInfo: [],
        infosData: {},
        singleTypeMax: 10,
        smartData: [],
        settingEmpty: !1,
        previousRoute: null,
        remindStockName: "",
        hasReady: !1,
        barReady: !1,
        fundNavStatus: 0,
        showOpenRemindPop: !1,
        showAddItemModal: !1,
        addItemModalTitle: "选择新增提醒类型",
        showEditTip: !1,
        showAddTip: !1,
        isManualClose: !1,
        hasUserInteracted: !1,
        deletedPrefillTypes: [],
        isPageReturning: !1,
        hasShownEditTip: !1,
        hasPendingRefresh: !1,
        isSwitching: !1,
        remindApi: new m.RemindApi(function (t, e) {
          return p.StockBridge.request(t, "POST", e, {
            headers: { "Content-Type": "application/json" },
          });
        }),
      };
    },
    computed: {
      zsj: function () {
        return (this.stockOverView && this.stockOverView.zsj) || "";
      },
      zdf: function () {
        return (this.stockOverView && this.stockOverView.zdf) || "";
      },
      zde: function () {
        return (this.stockOverView && this.stockOverView.zde) || "";
      },
      upDown: function () {
        return this.zdf
          ? Number(this.zdf) > 0
            ? "up"
            : Number(this.zdf) < 0
            ? "down"
            : ""
          : "";
      },
      symbol: function () {
        return m.utils.getSymbol(this.market, this.scode);
      },
    },
    created: function () {
      return f(
        this,
        null,
        e().mark(function t() {
          var i,
            s = this;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      "mp" === p.StockBridge.ENV
                        ? (this.showTopbar = !0)
                        : ((this.showTopbar = !1),
                          setTimeout(function () {
                            s.hqBridge.setTitle("股票提醒");
                          }, 0),
                          sessionStorage.getItem("remind_from_list") &&
                            ((this.isPageReturning = !0),
                            sessionStorage.removeItem("remind_from_list"))),
                      (t.next = 3),
                      this.init(!1)
                    );
                  case 3:
                    null == (i = null == window ? void 0 : window.scrollTo) ||
                      i.call(window, 0, 0),
                      this.showFund &&
                        (this.queryStockInfo(),
                        this.isHS && this.queryMainInflow()),
                      this.isHK && this.queryStockInfo();
                  case 6:
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
    beforeDestroy: function () {
      this.stopUpdate();
    },
    activated: function () {
      (this.isPageReturning = !0),
        (this.isManualClose = !1),
        (this.hasUserInteracted = !1),
        (this.deletedPrefillTypes = []),
        !this.isTrading ||
          (this.isHK && !this.isIndex) ||
          this.openHQWebSocket(),
        this.init(!1);
    },
    deactivated: function () {
      this.stopUpdate();
    },
    onPageShow: function () {
      (this.isPageReturning = !0),
        (this.isManualClose = !1),
        (this.hasUserInteracted = !1),
        (this.deletedPrefillTypes = []),
        !this.isTrading ||
          (this.isHK && !this.isIndex) ||
          this.openHQWebSocket(),
        this.init(!1);
    },
    onPageHide: function () {
      this.stopUpdate();
    },
    methods: {
      subscribeStockRemind: function (t) {
        this.$emit("subscribeStockRemind", t);
      },
      upgradeSmart: function () {
        this.submitAddOrSet(
          [],
          ["new_high_low", "limit_up_down", "big_event", "large_order"]
        ),
          (this.hasSetSmart = !0),
          this.init(!1);
      },
      onSettingEmpty: function (t) {
        this.settingEmpty = t;
      },
      onHasActiveRemind: function (t) {
        this.isSwitching ||
          ((this.hasSetRemind = t),
          !t && this.hasUserInteracted && (this.isManualClose = !0));
      },
      handleSubmitDelete: function (t, e, i) {
        (this.hasUserInteracted = !0),
          i && (this.hasPendingRefresh = !0),
          this.submitDelete(t, e, i);
      },
      handleSmartRemindClick: function (t) {
        return f(
          this,
          null,
          e().mark(function i() {
            var s, n, a, r, o, u, l, h, c, f;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isSwitching) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((this.hasUserInteracted = !0),
                        (c = !!(null ==
                        (a =
                          null ==
                          (n =
                            null == (s = this.lastQueryRes) ? void 0 : s.stocks)
                            ? void 0
                            : n[0])
                          ? void 0
                          : a.subscribe_infos)),
                        this.hasSetRemind || this.hasClosedSettings || c)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void (
                          void 0 !==
                            (null == (r = null == t ? void 0 : t.smart)
                              ? void 0
                              : r.fund_nav_update) &&
                          (this.fundNavStatus = t.smart.fund_nav_update)
                        )
                      );
                    case 6:
                      return (e.next = 8), this.handleRemindClick(t);
                    case 8:
                      return (
                        (f = e.sent),
                        e.abrupt(
                          "return",
                          (void 0 !==
                            (null == (o = null == t ? void 0 : t.smart)
                              ? void 0
                              : o.fund_nav_update) &&
                            (this.fundNavStatus = t.smart.fund_nav_update),
                          f &&
                            0 == +f.retcode &&
                            (null == t ? void 0 : t.smart) &&
                            ((
                              null ==
                              (l =
                                null == (u = this.infosData) ? void 0 : u.smart)
                                ? void 0
                                : l.smart_tip
                            )
                              ? Object.assign(
                                  this.infosData.smart.smart_tip,
                                  t.smart
                                )
                              : (
                                  null == (h = this.infosData)
                                    ? void 0
                                    : h.smart
                                )
                              ? this.$set(
                                  this.infosData.smart,
                                  "smart_tip",
                                  d({}, t.smart)
                                )
                              : this.$set(this.infosData, "smart", {
                                  smart_tip: d({}, t.smart),
                                })),
                          f)
                        )
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      handleFirstSetRemind: function (t, i, s) {
        return f(
          this,
          null,
          e().mark(function t() {
            var n,
              a,
              r,
              o,
              u,
              l,
              h,
              c = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.isSwitching) {
                        t.next = 15;
                        break;
                      }
                      if (((t.prev = 1), (a = this.generatePrefillData(!0)))) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return");
                    case 5:
                      return (
                        (r = a.subscribe_infos),
                        (o = a.smart_tip),
                        (u =
                          (null == (n = Object.values(r || {}))
                            ? void 0
                            : n.flat().map(function (t) {
                                var e = "price" === i && t.subs_type === s.type,
                                  n = "event" === i || !e;
                                return c.buildSubscribeInfoPayload(
                                  d(
                                    d(
                                      { subs_type: t.subs_type, val: t.val },
                                      n && { alert_time: "user_manual_close" }
                                    ),
                                    !1
                                  )
                                );
                              })) || []),
                        (l = d({}, o)),
                        this.isFund &&
                          (l.fund_nav_update = [0, 1].includes(
                            this.fundNavStatus
                          )
                            ? this.fundNavStatus
                            : 2),
                        "event" === i &&
                          (null == s ? void 0 : s.name) &&
                          (l[s.name] = 1),
                        (t.next = 9),
                        this.SetStockAlert({
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                          subscribe_infos: u,
                          smart: l,
                        })
                      );
                    case 9:
                      (h = t.sent) &&
                        0 == +h.retcode &&
                        ((this.hasSetRemind = !0), this.init(!1)),
                        (t.next = 15);
                      break;
                    case 13:
                      (t.prev = 13), (t.t0 = t.catch(1));
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[1, 13]]
            );
          })
        );
      },
      handleFirstSetRemindWithNewItem: function (t, i) {
        return f(
          this,
          null,
          e().mark(function t() {
            var i,
              s,
              n,
              a,
              r,
              o,
              u,
              l,
              h,
              c = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), (s = this.generatePrefillData(!0)))) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      return (
                        (n = s.subscribe_infos),
                        (a = s.smart_tip),
                        (r =
                          (null == (i = Object.values(n || {}))
                            ? void 0
                            : i.flat().map(function (t) {
                                return c.buildSubscribeInfoPayload(
                                  d(
                                    {
                                      subs_type: t.subs_type,
                                      val: t.val,
                                      alert_time: "user_manual_close",
                                    },
                                    !1
                                  )
                                );
                              })) || []),
                        (o = d({}, a)),
                        this.isFund &&
                          (o.fund_nav_update = [0, 1].includes(
                            this.fundNavStatus
                          )
                            ? this.fundNavStatus
                            : 2),
                        (t.next = 8),
                        this.SetStockAlert({
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                          subscribe_infos: r,
                          smart: o,
                        })
                      );
                    case 8:
                      if (!(u = t.sent) || 0 != +u.retcode) {
                        t.next = 20;
                        break;
                      }
                      return (
                        (this.hasSetRemind = !0),
                        (t.prev = 11),
                        (t.next = 14),
                        this.queryRemindsetting({ source: 1 })
                      );
                    case 14:
                      (l = t.sent) &&
                        ((this.lastQueryRes = l),
                        (h = this.processSubscribeInfos(l)),
                        (this.hasClosedSettings = this.checkHasClosedSettings(
                          l,
                          h
                        ))),
                        (t.next = 20);
                      break;
                    case 18:
                      (t.prev = 18), (t.t0 = t.catch(11));
                    case 20:
                      t.next = 24;
                      break;
                    case 22:
                      (t.prev = 22), (t.t1 = t.catch(0));
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [
                [0, 22],
                [11, 18],
              ]
            );
          })
        );
      },
      closeSmart: function () {
        this.submitDelete([], ["new_high_low", "limit_up_down", "big_event"]),
          (this.hasSetSmart = !0),
          this.init(!1);
      },
      updateSmartData: function (t) {
        (this.smartData = t),
          t.some(function (t) {
            return "fund_nav_update" === t.key;
          }) || (this.fundNavStatus = 2);
      },
      handleRemindSwitch: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var i, s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.isSwitching) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (this.isSwitching = !0),
                        (this._switchTargetState = !this.hasSetRemind),
                        (t.prev = 2),
                        (t.next = 5),
                        this._doRemindSwitch()
                      );
                    case 5:
                      return (t.prev = 5), (t.next = 8), this.$nextTick();
                    case 8:
                      return (
                        !1 === this._switchTargetState
                          ? null == (i = this.$refs.settingDetail) ||
                            i.toggleAllChooseOn(!1)
                          : !0 === this._switchTargetState &&
                            (null == (s = this.$refs.settingDetail) ||
                              s.toggleAllChooseOn(!0)),
                        (this.isSwitching = !1),
                        (this._switchTargetState = void 0),
                        t.finish(5)
                      );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[2, , 5, 12]]
            );
          })
        );
      },
      _doRemindSwitch: function () {
        return f(
          this,
          null,
          e().mark(function i() {
            var s,
              n,
              a,
              r,
              o,
              u,
              l,
              h,
              c,
              f,
              p,
              m,
              v,
              b,
              S,
              g,
              k,
              w,
              _,
              y,
              x,
              T,
              D,
              F,
              M,
              N,
              I,
              R,
              P,
              O,
              C,
              q,
              A,
              E,
              j,
              H,
              z,
              B,
              V = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (null == (s = this.$refs.settingDetail) ||
                          s.hideDeleteBubble(),
                        this.remindReport(
                          "hq.remindsetting.total_switch_click",
                          { status: this.hasSetRemind ? "off" : "on" }
                        ),
                        !this.hasSetRemind)
                      ) {
                        e.next = 30;
                        break;
                      }
                      if (
                        ((e.prev = 1),
                        (this.hasSetRemind = !1),
                        null == (n = this.$refs.settingDetail) ||
                          n.toggleAllChooseOn(!1),
                        1 === this.fundNavStatus && (this.fundNavStatus = 0),
                        (R =
                          (null == (a = this.infosData)
                            ? void 0
                            : a.subscribe_infos) || {}),
                        (P =
                          (null ==
                          (o = null == (r = this.infosData) ? void 0 : r.smart)
                            ? void 0
                            : o.smart_tip) || {}),
                        (O =
                          (null ==
                          (h =
                            null ==
                            (l =
                              null == (u = Object.values(R))
                                ? void 0
                                : u.flat())
                              ? void 0
                              : l.filter(function (t) {
                                  return (
                                    t &&
                                    t.subs_type &&
                                    t.val &&
                                    "user_manual_close" !==
                                      (null == t ? void 0 : t.alert_time)
                                  );
                                }))
                            ? void 0
                            : h.map(function (t) {
                                return V.buildSubscribeInfoPayload(
                                  d(
                                    {
                                      subs_type: t.subs_type,
                                      val: t.val,
                                      seq: t.seq,
                                      alert_time: "user_manual_close",
                                    },
                                    !1
                                  )
                                );
                              })) || []),
                        (C = {}),
                        Object.entries(P)
                          .filter(function (e) {
                            return 1 === t(e, 2)[1];
                          })
                          .forEach(function (e) {
                            var i = t(e, 1)[0];
                            C[i] = 0;
                          }),
                        (q = {
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                        }),
                        O.length && (q.subscribe_infos = O),
                        Object.keys(C).length &&
                          (q.smart = d(
                            d(
                              {},
                              (null ==
                              (f =
                                null == (c = this.infosData) ? void 0 : c.smart)
                                ? void 0
                                : f.smart_tip) || {}
                            ),
                            C
                          )),
                        (e.t0 = O.length || Object.keys(C).length),
                        !e.t0)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 12), this.SetStockAlert(q);
                    case 12:
                      return (
                        (this.hasSetRemind = !1),
                        (this.hasClosedSettings = !0),
                        (this.hasUserInteracted = !0),
                        (this.isManualClose = !0),
                        this.tryShowEditTip(),
                        (e.next = 19),
                        this.init(!0)
                      );
                    case 19:
                      (this.hasSetRemind = !1),
                        (this.hasClosedSettings = !0),
                        null == (p = this.$refs.settingDetail) ||
                          p.toggleAllChooseOn(!1),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 0),
                        (e.next = 28);
                      break;
                    case 25:
                      (e.prev = 25),
                        (e.t1 = e.catch(1)),
                        (this.hasSetRemind = !0),
                        null == (m = this.$refs.settingDetail) ||
                          m.toggleAllChooseOn(!0),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 1),
                        (this._switchTargetState = void 0);
                    case 28:
                      e.next = 107;
                      break;
                    case 30:
                      if (
                        ((e.prev = 30), (e.t2 = this.hasPendingRefresh), !e.t2)
                      ) {
                        e.next = 37;
                        break;
                      }
                      return (e.next = 35), this.init(!0);
                    case 35:
                      (this.hasPendingRefresh = !1), (e.t2 = this.hasSetRemind);
                    case 37:
                      if (!e.t2) {
                        e.next = 39;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((this.showEditTip = !1),
                        void this.showToast("股票提醒已开启"))
                      );
                    case 39:
                      if (
                        !(null == (v = this.$refs.settingDetail)
                          ? void 0
                          : v.isAllItemsInvalid())
                      ) {
                        e.next = 41;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (this.showModal("橙色数值设置异常，可修改后打开"),
                        void (this._switchTargetState = void 0))
                      );
                    case 41:
                      if (
                        ((A =
                          this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus),
                        (E =
                          (this.settingEmpty ||
                            (null == (b = this.$refs.settingDetail)
                              ? void 0
                              : b.settingEmpty)) &&
                          !A),
                        !this.hasClosedSettings)
                      ) {
                        e.next = 66;
                        break;
                      }
                      if (
                        A ||
                        (null ==
                        (g =
                          null == (S = this.$refs.settingDetail)
                            ? void 0
                            : S.rawData)
                          ? void 0
                          : g.length) ||
                        (!this.settingEmpty &&
                          !(null == (k = this.$refs.settingDetail)
                            ? void 0
                            : k.settingEmpty))
                      ) {
                        e.next = 47;
                        break;
                      }
                      (this.hasClosedSettings = !1),
                        (this.addItemModalTitle = "暂无提醒，请点击添加"),
                        (this.showAddItemModal = !0),
                        (this._switchTargetState = void 0),
                        (e.next = 64);
                      break;
                    case 47:
                      return (
                        (this.hasSetRemind = !0),
                        null == (w = this.$refs.settingDetail) ||
                          w.toggleAllChooseOn(!0),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 1),
                        (e.next = 50),
                        this.reopenClosedSettings()
                      );
                    case 50:
                      if (!(j = e.sent) || 0 != +j.retcode) {
                        e.next = 63;
                        break;
                      }
                      return (
                        (this.hasClosedSettings = !1),
                        (this.showEditTip = !1),
                        this.showToast("股票提醒已开启"),
                        (e.next = 57),
                        this.init(!1)
                      );
                    case 57:
                      (this.hasSetRemind = !0),
                        (this.hasClosedSettings = !1),
                        null == (_ = this.$refs.settingDetail) ||
                          _.toggleAllChooseOn(!0),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 1),
                        (e.next = 64);
                      break;
                    case 63:
                      j ||
                        ((this.hasSetRemind = !1),
                        null == (y = this.$refs.settingDetail) ||
                          y.toggleAllChooseOn(!1),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 0),
                        (this.hasClosedSettings = !1),
                        (this.addItemModalTitle = "暂无提醒，请点击添加"),
                        (this.showAddItemModal = !0),
                        (this._switchTargetState = void 0));
                    case 64:
                      e.next = 102;
                      break;
                    case 66:
                      if (
                        !(
                          E ||
                          (this.isFund &&
                            this.hasUserInteracted &&
                            !A &&
                            (this.settingEmpty ||
                              (null == (x = this.$refs.settingDetail)
                                ? void 0
                                : x.settingEmpty) ||
                              !(null ==
                              (D =
                                null == (T = this.$refs.settingDetail)
                                  ? void 0
                                  : T.rawData)
                                ? void 0
                                : D.length)))
                        )
                      ) {
                        e.next = 70;
                        break;
                      }
                      (this.addItemModalTitle = "暂无提醒，请点击添加"),
                        (this.showAddItemModal = !0),
                        (this._switchTargetState = void 0),
                        (e.next = 102);
                      break;
                    case 70:
                      if (
                        !A ||
                        (null ==
                        (M =
                          null == (F = this.$refs.settingDetail)
                            ? void 0
                            : F.rawData)
                          ? void 0
                          : M.length)
                      ) {
                        e.next = 87;
                        break;
                      }
                      return (
                        (this.hasSetRemind = !0),
                        (this.fundNavStatus = 1),
                        (e.next = 74),
                        this.handleRemindClick({
                          smart: { fund_nav_update: 1 },
                        })
                      );
                    case 74:
                      if (!(H = e.sent) || 0 != +H.retcode) {
                        e.next = 84;
                        break;
                      }
                      return (
                        (this.showEditTip = !1),
                        this.showToast("股票提醒已开启"),
                        (e.next = 80),
                        this.init(!1)
                      );
                    case 80:
                      (this.hasSetRemind = !0),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 1),
                        (e.next = 85);
                      break;
                    case 84:
                      (this.hasSetRemind = !1),
                        (this.fundNavStatus = 0),
                        (this._switchTargetState = void 0);
                    case 85:
                      e.next = 102;
                      break;
                    case 87:
                      return (
                        (z =
                          this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus),
                        (this.hasSetRemind = !0),
                        z &&
                          ((this._openFundNavOnPrefill = !0),
                          (this.fundNavStatus = 1)),
                        (e.next = 91),
                        this.initData(null)
                      );
                    case 91:
                      if (
                        ((B = e.sent),
                        (this._openFundNavOnPrefill = !1),
                        (e.t3 = B && 0 == +B.retcode),
                        !e.t3)
                      ) {
                        e.next = 102;
                        break;
                      }
                      return (
                        (this.showEditTip = !1),
                        this.showToast("股票提醒已开启"),
                        (e.next = 99),
                        this.init(!1)
                      );
                    case 99:
                      (this.hasSetRemind = !0),
                        null == (N = this.$refs.settingDetail) ||
                          N.toggleAllChooseOn(!0),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 1);
                    case 102:
                      e.next = 107;
                      break;
                    case 104:
                      (e.prev = 104),
                        (e.t4 = e.catch(30)),
                        (this.hasSetRemind = !1),
                        null == (I = this.$refs.settingDetail) ||
                          I.toggleAllChooseOn(!1),
                        this.isFund &&
                          this.showFundNav &&
                          2 !== this.fundNavStatus &&
                          (this.fundNavStatus = 0),
                        (this._switchTargetState = void 0);
                    case 107:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [
                [1, 25],
                [30, 104],
              ]
            );
          })
        );
      },
      reopenClosedSettings: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var i,
              s,
              n,
              a,
              r,
              o,
              u,
              l,
              h,
              c,
              f,
              p,
              v,
              b,
              S,
              g = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((o = this.lastQueryRes)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 3:
                      return (
                        (u =
                          null ==
                          (s =
                            null == (i = null == o ? void 0 : o.stocks)
                              ? void 0
                              : i[0])
                            ? void 0
                            : s.subscribe_infos),
                        (l =
                          "lite" === this.theme
                            ? {
                                filterNetInflow: !0,
                                filterSpecificTurnover: !0,
                              }
                            : {}),
                        (h = this.remindApi.getClosedSubscribeItems(u, l)),
                        (c =
                          !(null == o ? void 0 : o.smart) ||
                          0 ===
                            (null == (n = null == o ? void 0 : o.smart)
                              ? void 0
                              : n.length)),
                        (f = this.remindApi.getClosedSmartTipKeys(o, {
                          isIndex: this.isIndex,
                          isETF: this.isETF,
                          isFund: this.isFund,
                          market: this.market,
                          stockType: this.stockType,
                          showFundNav: this.showFundNav,
                          isHSMarket: m.utils.isHSMarket,
                          isHKMarket: m.utils.isHKMarket,
                          isHKFund: m.utils.isHKFund,
                        })),
                        (p = {
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                        }),
                        h.length &&
                          (p.subscribe_infos = h.map(function (t) {
                            var e = g.validatePrefillItem(t);
                            return g.buildSubscribeInfoPayload(
                              d(
                                d(
                                  {
                                    subs_type: t.subs_type,
                                    val: t.val,
                                    seq: t.seq,
                                  },
                                  !e && { alert_time: "user_manual_close" }
                                ),
                                !1
                              )
                            );
                          })),
                        c
                          ? ((v = {
                              new_high_low: 1,
                              limit_up_down: this.isHS && !this.isIndex ? 1 : 0,
                              big_event: this.isIndex || this.isETF ? 0 : 1,
                              large_order: 0,
                            }),
                            this.isFund &&
                              (v.fund_nav_update =
                                2 === this.fundNavStatus ? 2 : 1),
                            (p.smart = v))
                          : (b = f.filter(function (t) {
                              return "large_order" !== t;
                            })).length &&
                            ((S = {}),
                            b.forEach(function (t) {
                              S[t] = 1;
                            }),
                            (p.smart = d(
                              d(
                                {},
                                (null ==
                                (r =
                                  null == (a = null == o ? void 0 : o.smart)
                                    ? void 0
                                    : a[0])
                                  ? void 0
                                  : r.smart_tip) || {}
                              ),
                              S
                            ))),
                        t.abrupt(
                          "return",
                          h.length || p.smart ? this.SetStockAlert(p) : null
                        )
                      );
                    case 6:
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
      init: function (t) {
        return f(
          this,
          null,
          e().mark(function i() {
            var s,
              n,
              a,
              r,
              o,
              u,
              l,
              h,
              d,
              c = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t && this.hasUserInteracted && !this.hasSetRemind) {
                        e.next = 24;
                        break;
                      }
                      return (
                        this.detailApi ||
                          (this.detailApi = new m.DetailApi(function (t) {
                            return c.hqBridge.request(t);
                          })),
                        (e.prev = 2),
                        (e.next = 5),
                        this.getQT()
                      );
                    case 5:
                      return (
                        (e.next = 7), this.queryRemindsetting({ source: 1 })
                      );
                    case 7:
                      return (
                        (a = e.sent),
                        (this.lastQueryRes = a),
                        this.processFundConfig(a),
                        (r = this.processSubscribeInfos(a)),
                        (o = this.checkValidSubscribeInfos(r)),
                        (u = this.checkValidSmartTip(a)),
                        this.isSwitching ||
                          ((l = o || u),
                          (h =
                            (null ==
                            (n =
                              null == (s = this.$refs.settingDetail)
                                ? void 0
                                : s.rawData)
                              ? void 0
                              : n.some(function (t) {
                                  return null == t ? void 0 : t.chooseOn;
                                })) || !1),
                          (this.hasSetRemind = l || h)),
                        this.isSwitching ||
                          ((d = this.checkHasClosedSettings(a, r)),
                          this.isManualClose
                            ? (this.hasClosedSettings =
                                this.hasClosedSettings || d)
                            : (this.hasClosedSettings = d)),
                        !this.isFund ||
                          r ||
                          2 !== this.fundNavStatus ||
                          this.hasUserInteracted ||
                          this.isSwitching ||
                          ((this.hasSetRemind = !1),
                          (this.hasClosedSettings = !1),
                          (this.fundNavStatus = 0)),
                        this.handlePageDisplay(a),
                        (e.next = 16),
                        this.getTradeTime()
                      );
                    case 16:
                      e.next = 20;
                      break;
                    case 18:
                      (e.prev = 18), (e.t0 = e.catch(2));
                    case 20:
                      return (
                        (e.prev = 20),
                        (this.hasReady = !0),
                        (this.isPageReturning = !1),
                        e.finish(20)
                      );
                    case 23:
                      (this.isHK && !this.isIndex) ||
                        !this.isTrading ||
                        this.openHQWebSocket();
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[2, 18, 20, 23]]
            );
          })
        );
      },
      processFundConfig: function (t) {
        var e,
          i,
          s,
          n,
          a,
          r,
          o,
          u = parseFloat(this.zxj);
        (this.showFundNav =
          this.isFund ||
          (u &&
            (null ==
            (i = null == (e = null == t ? void 0 : t.stocks) ? void 0 : e[0])
              ? void 0
              : i.show_fund_nav_update))),
          this.isSwitching ||
            ((this.fundNavStatus =
              null ==
              (a =
                null ==
                (n = null == (s = null == t ? void 0 : t.smart) ? void 0 : s[0])
                  ? void 0
                  : n.smart_tip)
                ? void 0
                : a.fund_nav_update),
            !this.isFund ||
              (void 0 !== this.fundNavStatus && null !== this.fundNavStatus) ||
              (this.fundNavStatus = 0)),
          (this.remindStockName =
            null ==
            (o = null == (r = null == t ? void 0 : t.stocks) ? void 0 : r[0])
              ? void 0
              : o.stock_name);
      },
      processSubscribeInfos: function (e) {
        var i,
          s,
          n =
            null ==
            (s = null == (i = null == e ? void 0 : e.stocks) ? void 0 : i[0])
              ? void 0
              : s.subscribe_infos;
        if (!n) return null;
        var a =
          "lite" === this.theme
            ? Object.fromEntries(
                Object.entries(n).filter(function (e) {
                  var i = t(e, 1)[0];
                  return !["net_inflow", "specific_turnover"].includes(i);
                })
              )
            : n;
        return (e.stocks[0].subscribe_infos = a), a;
      },
      checkValidSubscribeInfos: function (t) {
        var e =
          "lite" === this.theme
            ? { filterNetInflow: !0, filterSpecificTurnover: !0 }
            : {};
        return this.remindApi.checkValidSubscribeInfos(t, e);
      },
      checkValidSmartTip: function (t) {
        return this.remindApi.checkValidSmartTip(t, {
          isIndex: this.isIndex,
          isETF: this.isETF,
          isFund: this.isFund,
          market: this.market,
          stockType: this.stockType,
          showFundNav: this.showFundNav,
          isHSMarket: m.utils.isHSMarket,
          isHKMarket: m.utils.isHKMarket,
          isHKFund: m.utils.isHKFund,
        });
      },
      checkHasClosedSettings: function (t, e) {
        var i =
            "lite" === this.theme
              ? { filterNetInflow: !0, filterSpecificTurnover: !0 }
              : {},
          s = this.remindApi.checkHasClosedSubscribeInfos(e, i),
          n = this.remindApi.checkHasClosedSmartTip(t, {
            isIndex: this.isIndex,
            isETF: this.isETF,
            isFund: this.isFund,
            market: this.market,
            stockType: this.stockType,
            showFundNav: this.showFundNav,
            isHSMarket: m.utils.isHSMarket,
            isHKMarket: m.utils.isHKMarket,
            isHKFund: m.utils.isHKFund,
          });
        return s || n;
      },
      handlePageDisplay: function (t) {
        var e, i, s, n, a;
        if (this.isDebt && this.hasClosedSettings) {
          var r = (
            (null == (e = null == t ? void 0 : t.stocks) ? void 0 : e[0]) || {}
          ).subscribe_infos;
          return (
            (this.infosData = { subscribe_infos: r }),
            void (this.singleTypeMax =
              +(null == t ? void 0 : t.single_type_max_item) || 10)
          );
        }
        if (this.hasSetRemind || this.isDebt)
          (parseFloat(this.zxj) ||
            (!parseFloat(this.zxj) && this.hasSetRemind)) &&
            this.initData(t);
        else {
          if (this.isManualClose || this.hasUserInteracted) {
            var o = (
                (null == (i = null == t ? void 0 : t.stocks) ? void 0 : i[0]) ||
                {}
              ).subscribe_infos,
              u =
                (null == (s = null == t ? void 0 : t.smart) ? void 0 : s[0]) ||
                {};
            return (
              o && 0 !== Object.keys(o).length
                ? (this.infosData = { subscribe_infos: o, smart: u })
                : (this.infosData = { subscribe_infos: {}, smart: u || {} }),
              (this.singleTypeMax =
                +(null == t ? void 0 : t.single_type_max_item) || 10),
              void (this.hasSetSmart = !(null == t
                ? void 0
                : t.smart_curtain_stat))
            );
          }
          if (this.hasClosedSettings) {
            var l = (
                (null == (n = null == t ? void 0 : t.stocks) ? void 0 : n[0]) ||
                {}
              ).subscribe_infos,
              h =
                (null == (a = null == t ? void 0 : t.smart) ? void 0 : a[0]) ||
                {};
            if (l && 0 !== Object.keys(l).length)
              this.infosData = { subscribe_infos: l, smart: h };
            else {
              var d =
                  "lite" === this.theme
                    ? { filterNetInflow: !0, filterSpecificTurnover: !0 }
                    : {},
                c = this.remindApi.checkHasClosedSubscribeInfos(l, d);
              (this.isFund && !l && 0 === this.fundNavStatus) ||
              (!c && !this.isFund)
                ? (this.infosData = { subscribe_infos: {}, smart: h || {} })
                : parseFloat(this.zxj)
                ? this.prefillData()
                : (this.infosData = { subscribe_infos: {}, smart: h || {} });
            }
            return (
              (this.singleTypeMax =
                +(null == t ? void 0 : t.single_type_max_item) || 10),
              void (this.hasSetSmart = !(null == t
                ? void 0
                : t.smart_curtain_stat))
            );
          }
          if (
            (this.isPageReturning || (this.showOpenRemindPop = !0),
            !parseFloat(this.zxj))
          )
            return;
          this.prefillData();
        }
      },
      remindReport: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.hqBridge.report(t, d({ stockid: this.symbol }, e));
      },
      handleUpdateRemindData: function () {
        return f(this, arguments, function () {
          var t = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            s = arguments.length > 1 ? arguments[1] : void 0;
          return e().mark(function n() {
            var a, r, o, u, l, h, c, f;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((a = i.type),
                      (r = i.seq),
                      (o = void 0 === r ? 0 : r),
                      (u = i.value),
                      (l = i.groupIndex),
                      (h = i.val),
                      "" !== u || "" !== h)
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    if (!u || t.validateSettings(a, u, s, l)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    if (
                      ((c = [d({ seq: o, subs_type: a, val: u }, !1)]),
                      parseFloat(u) === parseFloat(h))
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (t.hasUserInteracted = !0),
                      (e.next = 10),
                      t.submitAddOrSet(c)
                    );
                  case 10:
                    (f = e.sent) &&
                      0 == +f.retcode &&
                      (t.showToast("已更改提醒设置"), t.init(!1));
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, n);
          })();
        });
      },
      compareSmartParams: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          s = Object.entries(e)
            .filter(function (e) {
              var i = t(e, 2);
              i[0];
              return 2 !== i[1];
            })
            .map(function (e) {
              return t(e, 1)[0];
            }),
          n = i.map(function (t) {
            return t.key;
          });
        return {
          deleted: s.filter(function (t) {
            return !n.includes(t);
          }),
          added: n.filter(function (t) {
            return !s.includes(t);
          }),
        };
      },
      compareSubscribeParams: function () {
        var t,
          e = this,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (null == (t = Object.values(i)) ? void 0 : t.flat()) || [];
        return {
          added: s
            .filter(function (t) {
              return (
                !!t.value &&
                !n.some(function (e) {
                  return (
                    +e.subs_type == +t.type &&
                    parseFloat(e.val) === parseFloat(t.value)
                  );
                })
              );
            })
            .map(function (t) {
              return e.buildSubscribeInfoPayload(
                d({ subs_type: t.type, val: t.value }, !1)
              );
            }),
          deleted: n
            .filter(function (t) {
              return !s.some(function (e) {
                return (
                  +e.type == +t.subs_type &&
                  parseFloat(e.value) === parseFloat(t.val)
                );
              });
            })
            .map(function (t) {
              return d({ subs_type: t.subs_type, val: t.val, seq: t.seq }, !1);
            }),
        };
      },
      validateSettings: function (t, e, i, s) {
        var n,
          a,
          r,
          o,
          u,
          l,
          h,
          d,
          c,
          f,
          p,
          m,
          v,
          b,
          S,
          g,
          k,
          w = this.$refs.settingDetail || {};
        if (
          (w.rawData || []).some(function (s, n) {
            return (
              n !== i && s.type === t && parseFloat(s.value) === parseFloat(e)
            );
          })
        )
          return (
            e && this.showModal("该提醒值重复设置，请修改"),
            null == (n = null == w ? void 0 : w.autoFocus) || n.call(w, s, i),
            !1
          );
        var _ = +e;
        switch (+t) {
          case 1:
            if (_ <= this.zxj)
              return (
                this.showModal("上涨目标价需高于最新价"),
                null == (a = null == w ? void 0 : w.autoFocus) ||
                  a.call(w, s, i),
                !1
              );
            break;
          case 2:
            if (_ <= 0)
              return (
                this.showModal("下跌目标价需大于0"),
                null == (r = null == w ? void 0 : w.autoFocus) ||
                  r.call(w, s, i),
                !1
              );
            if (this.zxj && _ >= this.zxj)
              return (
                this.showModal("下跌目标价应低于最新价"),
                null == (o = null == w ? void 0 : w.autoFocus) ||
                  o.call(w, s, i),
                !1
              );
            break;
          case 3:
            if (this.zdfMax && _ > this.zdfMax)
              return (
                this.showModal("日涨幅需要小于".concat(this.zdfMax, "%")),
                null == (u = null == w ? void 0 : w.autoFocus) ||
                  u.call(w, s, i),
                !1
              );
            if (_ < 0)
              return (
                this.showModal("日涨幅应大于0"),
                null == (l = null == w ? void 0 : w.autoFocus) ||
                  l.call(w, s, i),
                !1
              );
            break;
          case 4:
            if (_ <= 0)
              return (
                this.showModal("日跌幅应大于0"),
                null == (h = null == w ? void 0 : w.autoFocus) ||
                  h.call(w, s, i),
                !1
              );
            if (this.zdfMax && _ > this.zdfMax)
              return (
                this.showModal("日跌幅需要小于".concat(this.zdfMax, "%")),
                null == (d = null == w ? void 0 : w.autoFocus) ||
                  d.call(w, s, i),
                !1
              );
            if (_ > 100)
              return (
                this.showModal("日跌幅需要小于100%"),
                null == (c = null == w ? void 0 : w.autoFocus) ||
                  c.call(w, s, i),
                !1
              );
            break;
          case 5:
            if (_ <= 0)
              return (
                this.showModal("目标成交额需大于0"),
                null == (f = null == w ? void 0 : w.autoFocus) ||
                  f.call(w, s, i),
                !1
              );
            break;
          case 6:
            if (_ <= 0)
              return (
                this.showModal("目标主力资金需大于0"),
                null == (p = null == w ? void 0 : w.autoFocus) ||
                  p.call(w, s, i),
                !1
              );
            break;
          case 15:
            if (_ <= 0)
              return (
                this.showModal("溢折率应大于0"),
                null == (m = null == w ? void 0 : w.autoFocus) ||
                  m.call(w, s, i),
                !1
              );
            if (_ > 500)
              return (
                this.showModal("溢折率不能超过500%"),
                null == (v = null == w ? void 0 : w.autoFocus) ||
                  v.call(w, s, i),
                !1
              );
            var y = parseFloat(this.stockOverView && this.stockOverView.yzl);
            if (Number.isFinite(y) && _ <= y)
              return (
                this.showModal("上涨目标值需高于最新值"),
                null == (b = null == w ? void 0 : w.autoFocus) ||
                  b.call(w, s, i),
                !1
              );
            break;
          case 16:
            if (_ <= 0)
              return (
                this.showModal("溢折率应大于0"),
                null == (S = null == w ? void 0 : w.autoFocus) ||
                  S.call(w, s, i),
                !1
              );
            if (_ > 500)
              return (
                this.showModal("溢折率不能超过500%"),
                null == (g = null == w ? void 0 : w.autoFocus) ||
                  g.call(w, s, i),
                !1
              );
            var x = parseFloat(this.stockOverView && this.stockOverView.yzl);
            if (Number.isFinite(x) && _ >= x)
              return (
                this.showModal("下跌目标值需低于最新值"),
                null == (k = null == w ? void 0 : w.autoFocus) ||
                  k.call(w, s, i),
                !1
              );
        }
        return !0;
      },
      openHQWebSocket: function () {
        var t = this,
          i = m.utils.getSymbol(this.market, this.scode);
        if (!this.hqWebSocket) {
          var n = {
            topic: "quote_qt",
            tag: "detail",
            adapterType: "stockinfo",
            needProcess: !0,
            ensure: !0,
            stockList: [i],
          };
          if ("mp" !== p.StockBridge.ENV) {
            var a = {};
            "wzq" === p.StockBridge.ENV
              ? (a = {
                  appName: "wzq",
                  openId: this.hqBridge.getCookie("wzq_qluin"),
                  token: this.hqBridge.getCookie("wzq_qlskey"),
                })
              : "mini" === p.StockBridge.ENV && (a = { appName: "mini" }),
              "wzq.tenpay.com" !== location.host && (n.host = location.host),
              (this.hqWebSocket = new m.HQWebSocket(d({ auth: a }, n)));
          } else
            this.hqWebSocket = new m.MPWebSocket(
              d(
                {
                  auth: {
                    openId: this.hqBridge.getStorage("_qluin"),
                    token: this.hqBridge.getStorage("_qlskey"),
                  },
                },
                n
              ),
              p.wx$1.connectSocket
            );
          (this.hqWebSocket.handleData = function (e) {
            var i,
              n,
              a = s(e);
            try {
              for (a.s(); !(n = a.n()).done; ) {
                var r = n.value;
                if (
                  "quote_qt" === r.topic &&
                  r.symbol === t.symbol &&
                  (null == (i = null == r ? void 0 : r.data)
                    ? void 0
                    : i.secu_quote)
                ) {
                  for (var o in r.data.secu_quote)
                    void 0 !== r.data.secu_quote[o] &&
                      (t.formatData[o] = r.data.secu_quote[o]);
                  Object.assign(t.stockOverView, d({}, t.formatData));
                }
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
          }),
            (this.hqWebSocket.pull = function () {
              for (
                var i = arguments.length, s = new Array(i), n = 0;
                n < i;
                n++
              )
                s[n] = arguments[n];
              return f(t, [].concat(s), function () {
                var t = this,
                  i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return e().mark(function s() {
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = t.isTrading || i.online), !e.t0)) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 4), t.getQT();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, s);
                })();
              });
            });
        }
      },
      getTradeTime: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var i, s, n, a;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = this.market),
                        (t.next = 3),
                        this.detailApi.getMarketState(
                          { market: i },
                          { needProcess: !0 }
                        )
                      );
                    case 3:
                      if (((s = t.sent), (n = this.marketState))) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      (a = (s.split("|") || [])
                        .map(function (t) {
                          return t.split("_");
                        })
                        .filter(function (t) {
                          return t[0] === n;
                        })).length && (this.isTrading = "open" === a[0][1]);
                    case 9:
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
      stopUpdate: function () {
        this.hqWebSocket &&
          (this.hqWebSocket.close(), (this.hqWebSocket = null));
      },
      getTopBarHeight: function (t) {
        (this.topBarHeight = t), (this.barReady = !0);
      },
      handleCloseOpenRemindPop: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.showOpenRemindPop = !1),
          t ? ((this.showEditTip = !1), this.init(!1)) : this.tryShowEditTip();
      },
      handleAddItem: function () {
        (this.addItemModalTitle = "选择新增提醒类型"),
          (this.showAddItemModal = !0);
      },
      handleCloseAddItemModal: function () {
        this.showAddItemModal = !1;
      },
      handleToggleSelect: function (t) {
        var e,
          i =
            this.settingEmpty ||
            (null == (e = this.$refs.settingDetail) ? void 0 : e.settingEmpty);
        if (((this.showAddItemModal = !1), (this.showAddTip = !1), t.isFundNav))
          this.handleFundNavSelect();
        else {
          var s = this.$refs.settingDetail;
          if (s) {
            var n = 1;
            [3, 4].includes(t.type)
              ? (n = 2)
              : [5, 6].includes(t.type)
              ? (n = 3)
              : [15, 16].includes(t.type) && (n = 4);
            var a = this.remindConfig.find(function (e) {
              return +e.type == +t.type;
            });
            s.addSettingItem(d(d({}, a), t), n, i);
          }
        }
      },
      handleFundNavSelect: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var i,
              s,
              n,
              a,
              r,
              o,
              u,
              l,
              h,
              f,
              p,
              m,
              v,
              b,
              S,
              g,
              k,
              w,
              _ = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        (f =
                          null == (i = this.infosData)
                            ? void 0
                            : i.subscribe_infos),
                        (p = f ? Object.values(f).flat() : []),
                        !(m =
                          !this.hasSetRemind &&
                          p.length > 0 &&
                          p.every(function (t) {
                            return !t.seq;
                          })))
                      ) {
                        t.next = 12;
                        break;
                      }
                      if ((v = this.generatePrefillData(!0))) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      return (
                        (b = v.subscribe_infos),
                        (S = v.smart_tip),
                        (g =
                          (null ==
                          (n =
                            null == (s = Object.values(b || {}))
                              ? void 0
                              : s.flat())
                            ? void 0
                            : n.map(function (t) {
                                return _.buildSubscribeInfoPayload(
                                  d(
                                    {
                                      subs_type: t.subs_type,
                                      val: t.val,
                                      alert_time: "user_manual_close",
                                    },
                                    !1
                                  )
                                );
                              })) || []),
                        (k = c(d({}, S), { fund_nav_update: 1 })),
                        (t.next = 9),
                        this.SetStockAlert({
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                          subscribe_infos: g,
                          smart: k,
                        })
                      );
                    case 9:
                      (h = t.sent), (t.next = 16);
                      break;
                    case 12:
                      return (
                        (w =
                          (null ==
                          (r = null == (a = this.infosData) ? void 0 : a.smart)
                            ? void 0
                            : r.smart_tip) || {}),
                        (t.next = 15),
                        this.handleRemindClick({
                          smart: c(d({}, w), { fund_nav_update: 1 }),
                        })
                      );
                    case 15:
                      h = t.sent;
                    case 16:
                      h &&
                        0 == +h.retcode &&
                        ((this.fundNavStatus = 1),
                        (
                          null ==
                          (u = null == (o = this.infosData) ? void 0 : o.smart)
                            ? void 0
                            : u.smart_tip
                        )
                          ? (this.infosData.smart.smart_tip.fund_nav_update = 1)
                          : (null == (l = this.infosData) ? void 0 : l.smart)
                          ? this.$set(this.infosData.smart, "smart_tip", {
                              fund_nav_update: 1,
                            })
                          : this.$set(this.infosData, "smart", {
                              smart_tip: { fund_nav_update: 1 },
                            }),
                        this.showToast("已添加净值更新提醒"),
                        m && (this.hasSetRemind = !0),
                        this.init(!1),
                        this.$nextTick(function () {
                          var t, e;
                          null ==
                            (e =
                              null == (t = _.$refs.settingDetail)
                                ? void 0
                                : t.flashFundNav) || e.call(t);
                        })),
                        (t.next = 21);
                      break;
                    case 19:
                      (t.prev = 19), (t.t0 = t.catch(0));
                    case 21:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 19]]
            );
          })
        );
      },
      tryShowEditTip: function () {
        var t = "remind_edit_tip_shown";
        p.StockBridge.getStorage(t) ||
          this.hasShownEditTip ||
          ((this.showEditTip = !0),
          (this.hasShownEditTip = !0),
          p.StockBridge.setStorage(t, "1"));
      },
      handleCloseEditTip: function () {
        this.showEditTip = !1;
      },
      handlePrefillItemDeleted: function (t) {
        this.deletedPrefillTypes.includes(t) ||
          this.deletedPrefillTypes.push(t);
      },
    },
  };
Array ||
  (
    p.resolveComponent("Topbar") +
    p.resolveComponent("switch-btn") +
    p.resolveComponent("openRemindPop") +
    p.resolveComponent("settingDetail") +
    p.resolveComponent("upgradePop") +
    p.resolveComponent("addItemModal")
  )();
var I = p._export_sfc(N, [
  [
    "render",
    function (t, e, i, s, n, a) {
      return p.e(
        { a: n.showTopbar },
        n.showTopbar
          ? {
              b: p.o(a.getTopBarHeight, 463),
              c: p.p({ "is-fixed": n.fixTopbar }),
            }
          : {},
        { d: !t.isMp || (t.isMp && n.barReady) },
        !t.isMp || (t.isMp && n.barReady)
          ? p.e(
              { e: t.isDebt },
              t.isDebt
                ? {
                    f: p.t(t.name),
                    g: p.t(t.zxj ? "".concat(t.zxj, "%") : ""),
                    h: t.topBarHeight + "px",
                  }
                : p.e(
                    {
                      i: p.t(t.name),
                      j: p.t(t.zxj),
                      k: p.n(a.upDown),
                      l: p.t(a.zde),
                      m: p.n(a.upDown),
                      n: p.t(a.zdf ? "".concat(a.zdf, "%") : ""),
                      o: p.n(a.upDown),
                      p: !t.isDebt,
                    },
                    t.isDebt
                      ? {}
                      : {
                          q: p.o(a.handleRemindSwitch, 464),
                          r: p.p({
                            "choose-on": n.hasSetRemind,
                            theme: t.theme,
                          }),
                        },
                    { s: t.topBarHeight + "px" }
                  )
            )
          : {},
        { t: n.showOpenRemindPop },
        n.showOpenRemindPop
          ? {
              v: p.o(a.subscribeStockRemind, 465),
              w: p.o(a.handleCloseOpenRemindPop, 466),
              x: p.p({
                market: i.market,
                scode: i.scode,
                "stock-name": t.name,
                "parent-query-res": n.lastQueryRes,
                "parent-has-closed-settings": n.hasClosedSettings,
                "parent-has-set-remind": n.hasSetRemind,
                "is-subscribed": i.isSubscribed,
                "follow-stat": i.followStat,
              }),
            }
          : {},
        {
          y: p.sr("settingDetail", "5b792e5f-3"),
          z: p.o(a.handleSubmitDelete, 467),
          A: p.o(a.handleUpdateRemindData, 468),
          B: p.o(a.updateSmartData, 469),
          C: p.o(a.handleSmartRemindClick, 470),
          D: p.o(a.onSettingEmpty, 471),
          E: p.o(a.onHasActiveRemind, 472),
          F: p.o(a.handleFirstSetRemind, 473),
          G: p.o(a.handleFirstSetRemindWithNewItem, 474),
          H: p.o(t.showModal, 475),
          I: p.o(t.showToast, 476),
          J: p.o(a.handleAddItem, 477),
          K: p.o(a.handleCloseEditTip, 478),
          L: p.o(a.handlePrefillItemDeleted, 479),
          M: p.p({
            "infos-data": n.infosData,
            "remind-config": t.remindConfig,
            "render-data": t.renderData,
            "stock-over-view": t.stockOverView,
            "zdf-max": t.zdfMax,
            "zdf-tag-list": t.zdfTagList,
            market: "" + i.market,
            scode: i.scode,
            "is-debt": t.isDebt,
            "single-type-max": n.singleTypeMax,
            theme: t.theme,
            "is-h-s": t.isHS,
            "is-e-t-f": t.isETF,
            "is-index": t.isIndex,
            "show-large-order": t.showLargeOrder,
            "cje-peak": t.cjePeak,
            "main-inflow-peak": t.mainInflowPeak,
            "top-bar-height": t.topBarHeight,
            "has-ready": n.hasReady,
            "show-fund-nav": t.showFundNav,
            "fund-nav-status": n.fundNavStatus,
            "has-set-remind": n.hasSetRemind,
            "has-closed-settings": n.hasClosedSettings,
            "show-edit-tip": n.showEditTip,
            "show-add-tip": n.showAddTip,
          }),
          N: p.n(t.theme),
          O: p.n(t.isDebt ? "debt" : ""),
          P: !t.hasSetSmart,
        },
        t.hasSetSmart
          ? {}
          : {
              Q: p.o(a.closeSmart, 480),
              R: p.o(a.upgradeSmart, 481),
              S: p.p({
                market: i.market,
                scode: i.scode,
                "stock-name": t.name,
                symbol: a.symbol,
                theme: t.theme,
              }),
            },
        { T: n.showAddItemModal },
        n.showAddItemModal
          ? {
              U: p.o(a.handleCloseAddItemModal, 482),
              V: p.o(a.handleToggleSelect, 483),
              W: p.p({
                "fund-nav-status": n.fundNavStatus,
                "show-fund-nav": t.showFundNav,
                "show-cje": t.showCje,
                "show-fund": t.showFund,
                "is-e-t-f": t.isETF,
                title: n.addItemModalTitle,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5b792e5f"],
]);
wx.createComponent(I);
var R = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXJlbWluZC1zZXR0aW5nL3NldHRpbmdQYWdlLnZ1ZQ =
  R),
  (exports.remindSetting = M);
