require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var i = function (e, t, i) {
    return new Promise(function (r, n) {
      var o = function (e) {
          try {
            d(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          try {
            d(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        d = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, s);
        };
      d((i = i.apply(e, t)).next());
    });
  },
  r = require("../../stock-hq-data/index.js"),
  n = require("../../../../../common/vendor.js"),
  o = require("../../stock-hq-core/utils/storage/local.js");
require("../../../js-cookie/src/js.cookie.js");
var s = require("../NewpubEtfPage.js"),
  d = require("../../stock-crypto-modules-hq/src/config.js"),
  a = null,
  c = {
    components: {
      BubbleTip: function () {
        return "./BubbleTip.js";
      },
    },
    inject: {
      hqBridge: {
        default: function () {
          return {};
        },
      },
      prefetch: { default: function () {} },
    },
    props: [
      "type",
      "skin",
      "market",
      "scode",
      "stockType",
      "symbol",
      "stockInfo",
      "userinfo",
      "isGrayUser",
      "isShowTrade",
      "etfStatus",
      "from",
    ],
    data: function () {
      return { added: !1, dataReady: !1 };
    },
    computed: {
      isWzq: function () {
        return !1;
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isIndex: function () {
        return r.utils.isIndex(this.stockType);
      },
      isHSPlate: function () {
        return r.utils.isHSPlate(this.market);
      },
      isBubbleShow: function () {
        return (
          "wzq" === n.StockBridge.ENV &&
          (this.isIndex || this.isHSPlate) &&
          void 0 !== this.isShowTrade &&
          !this.isShowTrade &&
          this.dataReady &&
          !this.added &&
          !o.sls.getItem("buy-zs-bk-bubble-show")
        );
      },
      bubbleText: function () {
        return this.isBubbleShow
          ? "该".concat(
              this.isIndex ? "指数" : "板块",
              "暂无可买ETF，加入自选关注"
            )
          : "";
      },
    },
    watch: {
      isBubbleShow: {
        handler: function (e) {
          e && o.sls.setItem("buy-zs-bk-bubble-show", 1);
        },
        immediate: !0,
      },
    },
    created: function () {
      var e = this;
      a ||
        (a = new r.DetailApi(function (t) {
          return e.hqBridge.request(t);
        })),
        this.judgeAdded();
    },
    activated: function () {
      "etfadd" === this.type && this.judgeAdded();
    },
    methods: {
      judgeAdded: function () {
        return i(
          this,
          null,
          t().mark(function e() {
            var i, r, o, d, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (i = this.prefetch) ? void 0 : i.getAdded)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 3),
                        this.prefetch.getAdded(this.scode, this.market)
                      );
                    case 3:
                      (this.added = e.sent), (e.next = 17);
                      break;
                    case 6:
                      if (
                        !s.IS_ZXG ||
                        !(null == (r = this.$sdk) ? void 0 : r.checkStockZxg)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 9), this.$sdk.checkStockZxg(this.symbol);
                    case 9:
                      (o = e.sent),
                        (this.added = Boolean(null == o ? void 0 : o.exist)),
                        (e.next = 17);
                      break;
                    case 13:
                      return (
                        (d = "mp" === n.StockBridge.ENV),
                        (c = {
                          market: this.market,
                          scode: this.scode,
                          openId: d
                            ? n.StockBridge.getStorage("_qluin")
                            : n.StockBridge.getCookie("wzq_qluin"),
                          fsKey: d
                            ? n.StockBridge.getStorage("_qlskey")
                            : n.StockBridge.getCookie("wzq_qlskey"),
                        }),
                        (e.next = 16),
                        a.judgeAdded(c, { needProcess: !0 })
                      );
                    case 16:
                      this.added = e.sent;
                    case 17:
                      "wzq" === n.StockBridge.ENV &&
                        ((this.channelId = "I5i00p000l159"),
                        n.StockBridge.report(
                          "hq.stock_detail.quotation_addChoose_brow",
                          {
                            stocklist: this.symbol,
                            fchannel_id_fm_i: this.channelId,
                            hasaddlist: this.added ? 1 : 0,
                          }
                        )),
                        (this.dataReady = !0),
                        this.$parent.$emit("onToggleAdded", this.added, !1);
                    case 18:
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
      toggleAdded: function (r) {
        return i(
          this,
          null,
          t().mark(function i() {
            var o, a, c, u, l, h, k, p, g, f;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !s.IS_ZXG ||
                        !(null == (o = this.$sdk) ? void 0 : o.addStockZxg)
                      ) {
                        t.next = 13;
                        break;
                      }
                      if (((this.added = r), !r)) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 4), this.$sdk.addStockZxg(this.symbol);
                    case 4:
                      "addStockToGroup:ok" !==
                      (null == (a = t.sent) ? void 0 : a.err_msg)
                        ? n.StockBridge.toast("添加失败")
                        : n.StockBridge.toast("已添加自选"),
                        (t.next = 12);
                      break;
                    case 8:
                      return (
                        (t.next = 10),
                        this.$sdk.removeStockFromGroup(this.symbol)
                      );
                    case 10:
                      "removeStockFromGroup:ok" !==
                      (null == (c = t.sent) ? void 0 : c.err_msg)
                        ? n.StockBridge.toast("删除失败")
                        : n.StockBridge.toast("已删除自选");
                    case 12:
                      return t.abrupt("return");
                    case 13:
                      return (
                        (u = "mp" === n.StockBridge.ENV),
                        (l = u
                          ? n.StockBridge.getStorage("_qluin")
                          : n.StockBridge.getCookie("wzq_qluin")),
                        (h = u
                          ? n.StockBridge.getStorage("_qlskey")
                          : n.StockBridge.getCookie("wzq_qlskey")),
                        (k = {
                          app: d.ORIGIN.mpweapp,
                          appid: d.APPIDENUM.mpweapp,
                          openid: l,
                          fskey: h,
                          check: 11,
                        }),
                        (p = Object.entries(k)
                          .map(function (t) {
                            var i = e(t, 2),
                              r = i[0],
                              n = i[1];
                            return "".concat(r, "=").concat(n);
                          })
                          .join("&")),
                        (g = [
                          {
                            act: r ? "sa" : "sd",
                            code: this.symbol,
                            timestamp: new Date().getTime(),
                          },
                        ]),
                        (f = n.getApiFullUrl(
                          "newstock/stockapp/Updstock/operseq?".concat(p),
                          "PROXY_QQ"
                        )),
                        (t.next = 16),
                        this.hqBridge.request(f, "POST", {
                          seq: JSON.stringify(g),
                        })
                      );
                    case 16:
                      (this.added = r),
                        n.StockBridge.toast(r ? "已添加自选" : "已删除自选"),
                        n.StockBridge.report("stocklist.newpubetf", {
                          stocklist: this.symbol,
                          foperation_purpose: "zixuan",
                          fchannel_id_fm_i: this.channelId,
                        });
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
    },
  };
Array || n.resolveComponent("BubbleTip")();
var u = n._export_sfc(c, [
  [
    "render",
    function (e, t, i, r, o, s) {
      return n.e(
        { a: o.dataReady },
        o.dataReady
          ? n.e(
              { b: "icon" === i.type },
              "icon" === i.type
                ? n.e(
                    { c: o.added },
                    o.added
                      ? {
                          d: n.o(function (e) {
                            return s.toggleAdded(!1);
                          }, 3534),
                        }
                      : {
                          e: n.o(function (e) {
                            return s.toggleAdded(!0);
                          }, 3535),
                        }
                  )
                : "etfadd" === i.type
                ? n.e(
                    { g: o.added },
                    o.added
                      ? {
                          h: n.n(s.isLite ? "add-btn-etf-mini" : "add-btn-etf"),
                          i: n.o(function (e) {
                            return s.toggleAdded(!1);
                          }, 3536),
                        }
                      : {
                          j: n.n(s.isLite ? "add-btn-etf-mini" : "add-btn-etf"),
                          k: n.o(function (e) {
                            return s.toggleAdded(!0);
                          }, 3537),
                        }
                  )
                : n.e(
                    { l: o.added },
                    o.added
                      ? {
                          m: n.o(function (e) {
                            return s.toggleAdded(!1);
                          }, 3538),
                        }
                      : {
                          n: n.t(s.bubbleText),
                          o: n.p({
                            "arrow-position": "top-right",
                            "is-show": s.isBubbleShow,
                          }),
                          p: n.o(function (e) {
                            return s.toggleAdded(!0);
                          }, 3539),
                        }
                  ),
              { f: "etfadd" === i.type, q: "black" === i.skin ? 1 : "" }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-84b10366"],
]);
wx.createComponent(u);
