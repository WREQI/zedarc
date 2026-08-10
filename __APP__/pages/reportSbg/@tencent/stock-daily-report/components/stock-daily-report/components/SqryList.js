var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (o, s) {
      var c = function (t) {
          try {
            r(n.next(t));
          } catch (t) {
            s(t);
          }
        },
        i = function (t) {
          try {
            r(n.throw(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(c, i);
        };
      r((n = n.apply(t, e)).next());
    });
  },
  n = require("../assets/filters/stock.js"),
  o = require("../defaultWZQ.js"),
  s = require("../../../../stock-news-base/service/market/RelatedStockHelper.js"),
  c = require("../../../../stock-news-base/service/market/RelatedStockUtils.js"),
  i = require("../../../../../../../common/vendor.js"),
  r = new s.RelatedStockHelper(),
  a = {
    inject: {
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
    },
    components: {
      BaseTitle: function () {
        return "./BaseTitle.js";
      },
    },
    props: {
      content: { type: Object, default: function () {} },
      brow_y_offset: { type: String, default: "-70px" },
    },
    data: function () {
      return {
        reportData: {
          prefix: "yy.morningnotice",
          fchannel_id_fm_i: "IX300p000l041",
        },
        busEvents: {},
      };
    },
    created: function () {
      var t = this;
      this.busEvents = {
        RelatedStockChange: function (e) {
          var n;
          null == (n = Object.keys(e)) ||
            n.forEach(function (n) {
              var o, s;
              null == (s = null == (o = t.content) ? void 0 : o.hot_stocks) ||
                s.forEach(function (t) {
                  t.stock_code === n && (t.is_add = e[n]);
                });
            });
        },
        RelatedStockAddedRefresh: function () {
          t.requestStockExistInPortfolio();
        },
      };
      for (var e = 0, n = Object.keys(this.busEvents); e < n.length; e++) {
        var s = n[e];
        o.BUS.$on(s, this.busEvents[s]);
      }
    },
    beforeDestroy: function () {
      for (var t = 0, e = Object.keys(this.busEvents); t < e.length; t++) {
        var n = e[t];
        o.BUS.$off(n, this.busEvents[n]);
      }
    },
    activated: function () {
      this.requestStockExistInPortfolio();
    },
    methods: {
      flucColor: n.flucColor,
      priceChangePercent: n.priceChangePercent,
      getVisibleSetting: function (t) {
        return {
          callback: function (t) {},
          once: !0,
          intersection: { threshold: 0.5, rootMargin: this.brow_y_offset },
        };
      },
      reportBrow: function (t) {
        var e = this.getStockReportDic(t);
        this.$emit("statBrowReport", "sqry_related_stock_brow", e);
      },
      requestStockExistInPortfolio: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, o, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), r.isExistInZixuan(this.getStockCodeList())
                      );
                    case 2:
                      for (
                        n = t.sent, o = 0;
                        o < this.content.hot_stocks.length;
                        o++
                      )
                        (s = this.content.hot_stocks[o]).is_add =
                          1 === n[s.stock_code];
                    case 4:
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
      getStockReportDic: function (t) {
        var e = "",
          n = "",
          o = "";
        try {
          var s = t,
            c = this.content.hot_stocks[s],
            i = c.is_add ? "1" : "0";
          return (
            (e = c.stock_code),
            (n = i),
            (o = "".concat(s)),
            {
              fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
              newsid: "",
              stocklist: e,
              positionlist: o,
              hasaddlist: n,
            }
          );
        } catch (t) {
          return {
            fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
            newsid: "",
            stocklist: e,
            positionlist: o,
            hasaddlist: n,
          };
        }
      },
      getStockCodeList: function () {
        for (var t = [], e = 0; e < this.content.hot_stocks.length; e++) {
          var n = this.content.hot_stocks[e];
          t.push(n.stock_code);
        }
        return t;
      },
      getStockItem: function (t) {
        var e = t.stock_code.substr(0, 2);
        return { type: o.getMarket(e), scode: t.stock_code.substr(2) };
      },
      handleStockDetail: function (t) {
        var e = this.getStockItem(t),
          n = e.type,
          o = e.scode;
        this.$emit("viewStockDetail", "sqry", n, o);
      },
      handleTopicDetail: function (t) {
        this.$emit("statReport", "sqry_topic_click", {
          topicId: t.topic_id,
          topic: t.topic,
        }),
          this.$emit("viewCommentDetail", t.topic_id, t.topic);
      },
      addStockToZixuan: function (n) {
        return e(
          this,
          null,
          t().mark(function e() {
            var o, s, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (null == (o = this.didAgreeUserAgreement)
                          ? void 0
                          : o.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 2:
                      (n.is_add = !n.is_add),
                        (s = n.stock_code),
                        c.RelatedStockUtils.getInstance().requestStockToAdd(
                          n.is_add,
                          s
                        ) ||
                          ((n.is_add = !n.is_add),
                          this.$cApi.showToast("操作失败")),
                        (i = "sqry_related_stock_add"),
                        n.is_add || (i = "sqry_related_stock_cancel"),
                        this.$emit("statReport", i, {
                          fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
                          newsid: "",
                          stocklist: s,
                          stockid: s,
                          hasaddlist: n.is_add ? "1" : "0",
                        });
                    case 7:
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
    },
  };
Array || i.resolveComponent("BaseTitle")();
var u = i._export_sfc(a, [
  [
    "render",
    function (t, e, n, o, s, c) {
      return i.e(
        { a: n.content },
        n.content
          ? i.e(
              {
                b: i.p({ title: "社区热议" }),
                c: n.content.hot_stocks && n.content.hot_stocks.length,
              },
              n.content.hot_stocks && n.content.hot_stocks.length
                ? {
                    d: i.f(n.content.hot_stocks, function (t, e, n) {
                      return i.e(
                        {
                          a: i.t(e + 1),
                          b: i.n("no-" + e),
                          c: i.t(t.stock_name),
                          d: i.t(t.stock_code.substr(2)),
                          e: i.t(t.stock_code.substr(0, 2).toUpperCase()),
                          f: i.t(c.priceChangePercent(t.zdf)),
                          g: i.n(c.flucColor(t.zdf)),
                          h: i.t(t.cnt),
                          i: t.is_add,
                        },
                        (t.is_add, {}),
                        {
                          j: i.o(
                            function (e) {
                              return c.addStockToZixuan(t);
                            },
                            4479,
                            e
                          ),
                          k: e,
                          l: i.o(
                            function (e) {
                              return c.handleStockDetail(t);
                            },
                            4480,
                            e
                          ),
                        }
                      );
                    }),
                  }
                : {},
              { e: n.content.hot_topics && n.content.hot_topics.length },
              n.content.hot_topics && n.content.hot_topics.length
                ? {
                    f: i.f(n.content.hot_topics, function (t, e, n) {
                      return {
                        a: i.t(t.topic),
                        b: i.t(t.count),
                        c: e,
                        d: i.o(
                          function (e) {
                            return c.handleTopicDetail(t);
                          },
                          4481,
                          e
                        ),
                      };
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-23834e0c"],
]);
wx.createComponent(u);
