var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, i) {
      var o = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(o, a);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  r = require("../stock-markets-base/utils/share.js"),
  i = require("../stock-hq-data/index.js"),
  o = require("../stock-base/service/common/utils.js"),
  a = require("../stock-base/service/api/request.js"),
  s = require("../stock-markets-base/service/config/apiConfig.js"),
  c = {
    components: {
      HeaderView: function () {
        return "./components/HeaderView.js";
      },
      ListContent: function () {
        return "./components/ListContent.js";
      },
      FooterView: function () {
        return "./components/FooterView.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      hasBind: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      market: { type: String, default: "" },
      theme: { type: String, default: "white" },
    },
    data: function () {
      return {
        loaded: !1,
        showFollowGuide: !1,
        stockName: "",
        scode: "",
        mData: { data: { sz: [], sh: [] }, highLight: { zxj: 0 } },
        tfChannel: "",
      };
    },
    computed: {
      isAccountOpen: function () {
        return "wzq_light" === this.hqBridge.ENV
          ? this.userInfo &&
              this.userInfo.userstate &&
              ("0" === this.userInfo.userstate ||
                "3" === this.userInfo.userstate)
          : "mp" === this.hqBridge.ENV && this.hasBind;
      },
      dataListForShare: function () {
        var t, e, n;
        return null ==
          (n =
            null == (e = null == (t = this.mData) ? void 0 : t.data)
              ? void 0
              : e.sh)
          ? void 0
          : n.slice(0, 3).map(function (t) {
              return {
                zxj: "".concat(t.zxj, "%"),
                name: "沪市".concat(t.term, "天期"),
              };
            });
      },
    },
    created: function () {
      this.loadData(), this.deliveryBind();
    },
    activated: function () {
      this.init();
    },
    mounted: function () {
      this.init();
    },
    deactivated: function () {
      this.clear(), this.hqBridge.report("hq.nationaldebtbuy.page_index_hide");
    },
    beforeDestroy: function () {
      this.clear();
    },
    onPullDownRefresh: function () {
      this.loadData(!0),
        this.hqBridge.report("hq.nationaldebtbuy.page_index_refresh");
    },
    onPageScroll: function (t) {
      var e = this;
      this.$nextTick(function () {
        e.isReported ||
          (t.scrollTop > 200 &&
            ((e.isReported = !0),
            e.hqBridge.report("hq.nationaldebtbuy.teach_more_brow")));
      });
    },
    methods: {
      init: function () {
        var t = this;
        "mp" !== this.hqBridge.ENV &&
          "chances" === this.$route.query.tf_channel &&
          (this.tfChannel = "chances");
        this.tfChannel &&
          this.hqBridge.report(
            "hq.nationaldebtbuy_".concat(this.tfChannel, ".page_index_brow")
          ),
          this.intervalTimer && clearInterval(this.intervalTimer),
          (this.intervalTimer = setInterval(function () {
            t.loadData();
          }, 5e3)),
          this.isAccountOpen ||
            this.hqBridge.report(
              "hq.nationaldebtbuy".concat(
                this.tfChannel ? "_".concat(this.tfChannel) : "",
                ".page_account_btn_brow"
              ),
              { fchannel_id_fm_i: "I9K00p000b129" }
            );
      },
      clear: function () {
        this.intervalTimer && clearInterval(this.intervalTimer);
      },
      getRencentYearPercent: function () {
        return this.mData && this.mData.highLight
          ? this.mData.highLight.zxj
          : 0;
      },
      handleSubscribe: function (t) {
        var e = this;
        if ("mp" !== this.hqBridge.ENV) {
          var n;
          (n = t.hasSubscribed ? "订阅成功！" : "取消成功！") &&
            setTimeout(function () {
              e.hqBridge.toast(n);
            }, 300);
        } else this.$emit("subscribe", t);
      },
      loadData: function (r) {
        var i = this;
        e(
          exports,
          null,
          t().mark(function e() {
            var r, i;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = o.getApiFullUrl(
                        s.API_PATH_NATIONALDEBT,
                        o.API_HOST_ENUM.PROXY_QQ,
                        n.StockBridge.ENV === n.EnvTypeEnum.MP
                      )),
                      (t.next = 3),
                      a.request({ url: r, method: n.RequestTypeEnum.GET })
                    );
                  case 3:
                    return (
                      (i = t.sent),
                      t.abrupt("return", i && i.data && i.config ? i.data : i)
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        )
          .then(function (t) {
            0 == +t.code && ((i.mData = t.data), (i.loaded = !0)),
              r && n.wx$1.stopPullDownRefresh();
          })
          .catch(function (t) {
            (i.errInfo = t), i.requestError();
          });
      },
      onClickTrade: function (t) {
        "mp" === this.hqBridge.ENV
          ? this.$emit("onClickTrade", t)
          : "wzq_light" === this.hqBridge.ENV && this.gotoTradeWzqPage(t);
      },
      gotoTradeWzqPage: function (t) {
        var e = this;
        this.isAccountOpen
          ? setTimeout(function () {
              var n = 0;
              "sh" === t.market && (n = 1);
              var r = i.utils.splitSymbol(t.code).scode;
              e.hqBridge.routeTo({
                name: "TradeDebt",
                query: { market: n, code: r },
              });
            }, 1e3)
          : this.goToTrade();
      },
      goToTrade: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = "AssetIndex"),
                        (r = { stat_data: "I9K00p000b129" }),
                        this.isAccountOpen ||
                          ((n = "ApplyIndex"),
                          (r.broker = "10100"),
                          "chances" === this.tfChannel &&
                            ((r.broker = "10800"),
                            (r.tf_channel = this.tfChannel)),
                          this.$toast(
                            "您还没有开通股票账户，请先开通后再申购"
                          )),
                        setTimeout(function () {
                          i.hqBridge.routeTo({ name: n, query: r });
                        }, 1e3);
                    case 3:
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
      onClickAccount: function () {
        "mp" === this.hqBridge.ENV
          ? this.$emit("onClickAccount")
          : "wzq_light" === this.hqBridge.ENV &&
            (this.goToTrade(),
            this.hqBridge.report(
              "hq.nationaldebtbuy".concat(
                this.tfChannel ? "_".concat(this.tfChannel) : "",
                ".open_account_click"
              ),
              { fchannel_id_fm_i: "I9K00p000b129" }
            ));
      },
      goToStockDetail: function (t) {
        var e = i.utils.splitSymbol(t.code),
          n = e.market,
          r = e.scode;
        "mp" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: n, scode: r },
            })
          : "wzq_light" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/quote/detail",
              query: { market: n, scode: r },
            }),
          this.hqBridge.report("hq.nationaldebtbuy.list_item_click", {
            stockid: t.code,
          });
      },
      getHightlightPercent: function (t) {
        this.$emit("getHightlightPercent", t);
      },
      deliveryBind: function () {
        if ("mp" !== this.hqBridge.ENV) {
          var t = this.$route.query,
            e = void 0 === t ? {} : t;
          if ("chances" === e.tf_channel) {
            var n = ""
              .concat(
                location.origin,
                "/svr/activity/simple_activity/target_delivery_bind_stat?stat="
              )
              .concat(e.stat_data || "", "&delivery_name=gznhg");
            this.hqBridge.request(n);
          }
        }
      },
      padLeft: function (t) {
        return "".concat(t).length < 2 ? "0".concat(t) : "".concat(t);
      },
      formateTime: function (t) {
        return t
          ? ""
              .concat(t.getFullYear(), "-")
              .concat(this.padLeft(t.getMonth() + 1), "-")
              .concat(this.padLeft(t.getDate()), " ")
              .concat(this.padLeft(t.getHours()), ":")
              .concat(this.padLeft(t.getMinutes()))
          : "";
      },
      formateShareImgData: function () {
        var t = [
          {
            type: "image",
            url: "https://st.gtimg.com/design/184bdcb7a4893bd4b241d5565d4cf9b2.png",
            width: 480,
            height: 384,
            x: 0,
            y: 0,
          },
          {
            type: "text",
            text: this.formateTime(new Date()),
            fontSize: 22,
            color: "#262E40",
            fontWeight: "normal",
            textAlign: "left",
            x: 236,
            y: 45.5,
          },
        ];
        return (
          this.dataListForShare &&
            this.dataListForShare.length &&
            this.dataListForShare.forEach(function (e, n) {
              t.push(
                {
                  type: "text",
                  text: e.name,
                  fontSize: 22.2,
                  color: "#262E40",
                  fontWeight: "normal",
                  textAlign: "left",
                  x: 44,
                  y: 213 + 69 * n + 6,
                },
                {
                  type: "text",
                  text: e.zxj,
                  fontSize: 22.2,
                  color: "#E63535",
                  fontWeight: "bold",
                  textAlign: "right",
                  x: 436,
                  y: 213 + 69 * n + 6,
                }
              );
            }),
          t
        );
      },
      handleShareAppMessage: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.formateShareImgData()),
                        t.abrupt(
                          "return",
                          new Promise(function (t) {
                            r.ShareUtil.renderToImage(n).then(function (e) {
                              t({
                                title:
                                  "一起轻松躺着赚钱！点击查看今日的理财机会",
                                imageUrl: e,
                              });
                            });
                          })
                        )
                      );
                    case 2:
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
Array ||
  (
    n.resolveComponent("header-view") +
    n.resolveComponent("ListContent") +
    n.resolveComponent("footer-view")
  )();
var h = n._export_sfc(c, [
  [
    "render",
    function (t, e, r, i, o, a) {
      return n.e(
        {
          a: n.o(a.getHightlightPercent, 1340),
          b: n.o(a.handleSubscribe, 1341),
          c: n.p({ theme: r.theme, oneYearPercent: a.getRencentYearPercent() }),
          d: o.loaded,
        },
        o.loaded
          ? {
              e: n.o(a.onClickTrade, 1342),
              f: n.o(a.onClickAccount, 1343),
              g: n.o(a.goToStockDetail, 1344),
              h: n.p({
                isAccountOpen: a.isAccountOpen,
                stockData: o.mData,
                userInfo: r.userInfo,
                market: r.market,
              }),
            }
          : {},
        { i: n.p({ theme: r.theme }) }
      );
    },
  ],
  ["__scopeId", "data-v-c5a698e6"],
]);
wx.createComponent(h);
var u = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5hdGlvbmFsLWRlYnQvbmF0aW9uYWxEZWJ0SW5kZXgudnVl =
  u),
  (exports.queryUseSetting = function () {
    for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
      i[c] = arguments[c];
    return e(exports, [].concat(i), function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 ? arguments[1] : void 0;
      return t().mark(function i() {
        var c, h;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (c = o.getApiFullUrl(
                    s.API_PATH_USERSETTING,
                    o.API_HOST_ENUM.TENPAY,
                    n.StockBridge.ENV === n.EnvTypeEnum.MP
                  )),
                  (t.next = 3),
                  a.request({
                    url: c,
                    method: r || n.RequestTypeEnum.GET,
                    data: e,
                  })
                );
              case 3:
                return (
                  (h = t.sent),
                  t.abrupt("return", h && h.data && h.config ? h.data : h)
                );
              case 5:
              case "end":
                return t.stop();
            }
        }, i);
      })();
    });
  });
