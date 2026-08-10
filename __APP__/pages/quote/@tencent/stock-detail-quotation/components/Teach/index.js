require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../common/vendor.js"),
  e = require("../../../stock-hq-data/index.js"),
  o = require("../../Quotation.js"),
  i = {
    props: ["skin", "teachId", "market", "stockType", "ltgb", "ltgb_tz"],
    inject: ["hqBridge"],
    data: function () {
      return { startY: 0 };
    },
    computed: {
      isMP: function () {
        return t.StockBridge.ENV === t.EnvTypeEnum.MP;
      },
      json: function () {
        if (e.utils.isUSMarket(this.market) && "ltgb" === this.teachId)
          return o.teachJson.ltgb_us;
        var t = "ttm_ratio" === this.teachId ? "syl" : this.teachId;
        return o.teachJson[t] || {};
      },
    },
    created: function () {
      this.json.stat && t.StockBridge.report(this.json.stat);
    },
    mounted: function () {
      var t;
      if (!this.isMP) {
        null == (t = this.hqBridge) || t.busEmit("change-pulldown-status", !0);
        var e = this.$refs.maskWrapper;
        (this.preventTouchMove = function (t) {
          e && e.contains(t.target) && t.preventDefault();
        }),
          document.addEventListener("touchmove", this.preventTouchMove, {
            passive: !1,
          });
      }
    },
    beforeDestroy: function () {
      var t;
      !this.isMP &&
        this.preventTouchMove &&
        (null == (t = this.hqBridge) || t.busEmit("change-pulldown-status", !1),
        document.removeEventListener("touchmove", this.preventTouchMove));
    },
    methods: {
      contentTouchStart: function (t) {
        this.isMP || (this.startY = t.touches[0].pageY);
      },
      contentTouchMove: function (t) {
        if (!this.isMP) {
          var e = this.$refs.scrollView,
            o = e.offsetHeight,
            i = e.scrollHeight,
            s = e.scrollTop;
          i === o
            ? t.preventDefault()
            : 0 === s
            ? t.touches[0].pageY > this.startY && t.preventDefault()
            : Math.ceil(o + s) >= i &&
              t.touches[0].pageY < this.startY &&
              t.preventDefault(),
            t.stopPropagation();
        }
      },
      gotoMore: function () {
        var o = "";
        e.utils.isTransferableDebt(this.stockType)
          ? (o = "SN2022082311413884643073")
          : e.utils.isHSMarket(this.market) ||
            e.utils.isHSPlate(this.market) ||
            e.utils.isBJMarket(this.market) ||
            e.utils.isNQMarket(this.market) ||
            e.utils.isCSIndex(this.market)
          ? (o = "SN202206062006448322862d")
          : e.utils.isHKMarket(this.market)
          ? (o = "SN2022060620043884553027")
          : e.utils.isUSMarket(this.market) && (o = "SN2022060620100084553078"),
          t.StockRouter.routeTo({
            name: "informationDetail",
            query: { id: o, zxtype: 1, articleStyle: "fullTeach" },
          }),
          t.StockBridge.report("hq.stock_detail.more_tips_click"),
          this.close();
      },
      gotoFeedback: function () {
        var e = "https://aics.tenpay.com/aics-wzq/xiaomi/page.do?channel="
          .concat(
            ["wzq", "mp"].includes(t.StockBridge.ENV) ? 14 : 15,
            "&type=chat&_="
          )
          .concat(new Date());
        t.StockBridge.openExtraWebview(e),
          t.StockBridge.report("hq.stock_detail.ltgb_dialog.go_feedback"),
          this.close();
      },
      close: function () {
        this.$emit("close");
      },
    },
  },
  s = t._export_sfc(i, [
    [
      "render",
      function (e, o, i, s, n, r) {
        return t.e(
          {
            a: t.f(r.json.data, function (e, o, s) {
              return t.e(
                { a: "title" === e.type },
                "title" === e.type
                  ? {
                      b: t.t(e.content),
                      c: "title_" + o,
                      d: r.json.hasMore ? "" : 1,
                    }
                  : {},
                { e: "text" === e.type },
                "text" === e.type ? { f: t.t(e.content), g: "text_" + o } : {},
                { h: "custom" === e.type && "ltgb" === i.teachId },
                "custom" === e.type && "ltgb" === i.teachId
                  ? { i: t.t(i.ltgb), j: t.t(i.ltgb_tz), k: "custom_" + o }
                  : {},
                { l: "feedback" === e.type },
                "feedback" === e.type
                  ? {
                      m: "feedback_" + o,
                      n: t.o(
                        function (t) {
                          return r.gotoFeedback();
                        },
                        2732,
                        "feedback_" + o
                      ),
                    }
                  : {},
                { o: o }
              );
            }),
            b: t.o(function () {
              return (
                r.contentTouchStart && r.contentTouchStart.apply(r, arguments)
              );
            }, 2733),
            c: t.o(function () {
              return (
                r.contentTouchMove && r.contentTouchMove.apply(r, arguments)
              );
            }, 2734),
            d: r.json.hasMore,
          },
          r.json.hasMore
            ? {
                e: t.o(function (t) {
                  return r.gotoMore();
                }, 2735),
              }
            : {},
          {
            f: t.o(function (t) {
              return r.close();
            }, 2736),
            g: "black" === i.skin ? 1 : "",
          }
        );
      },
    ],
    ["__scopeId", "data-v-76697b77"],
  ]);
wx.createComponent(s);
