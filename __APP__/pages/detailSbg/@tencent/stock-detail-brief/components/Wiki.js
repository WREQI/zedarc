var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../common/vendor.js"),
  e = require("../../stock-hq-data/index.js"),
  a = {
    inject: ["hqBridge"],
    props: ["wikiInfo", "skin"],
    data: function () {
      return { data: {} };
    },
    components: {
      HotTalk: function () {
        return "./HotTalk.js";
      },
    },
    computed: {
      symbol: function () {
        return this.wikiInfo.symbol;
      },
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
      imgSrc: function () {
        return this.data.thumb_image &&
          this.data.thumb_image.startsWith("http://")
          ? this.data.thumb_image.replace("http://", "https://")
          : this.data.thumb_image;
      },
      isHSMarket: function () {
        if (!this.wikiInfo.symbol) return !1;
        var t = e.utils.splitSymbol(this.wikiInfo.symbol).market;
        return !!t && e.utils.isHSMarket(t);
      },
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        return (
          (e = this),
          null,
          (a = t().mark(function () {
            var e, a, n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = i.getApiFullUrl(
                          "ifzqgtimg/appstock/news/stockBKInfo/getBK?symbol=".concat(
                            this.symbol
                          ),
                          "PROXY_QQ"
                        )),
                        (t.next = 3),
                        this.hqBridge.request(a)
                      );
                    case 3:
                      (n = t.sent),
                        (this.data =
                          (null == (e = n.data) ? void 0 : e.bk_info) || {}),
                        this.$emit("gotData", this.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (t, i) {
            var n = function (t) {
                try {
                  o(a.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  o(a.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              o = function (i) {
                return i.done
                  ? t(i.value)
                  : Promise.resolve(i.value).then(n, r);
              };
            o((a = a.apply(e, null)).next());
          })
        );
        var e, a;
      },
      gotoDetail: function () {
        this.hqBridge.report("hq.stock_detail.stock_wiki", {
          stockid: this.symbol,
        }),
          "wzq" === this.hqBridge.ENV
            ? this.hqBridge.routeTo({
                path: "/wiki/detail",
                query: { id: this.data.id, symbol: this.symbol },
              })
            : this.hqBridge.openExtraWebview(
                "https://wzq.tenpay.com/mp/v2/index.html#/wiki/detail?id="
                  .concat(this.data.id, "&symbol=")
                  .concat(this.symbol, "&broker=")
                  .concat(i.isBroker)
              );
      },
    },
  };
Array || i.resolveComponent("HotTalk")();
var n = i._export_sfc(a, [
  [
    "render",
    function (t, e, a, n, r, o) {
      return i.e(
        { a: r.data.title },
        r.data.title
          ? i.e(
              {
                b: i.n(o.isHSMarket ? "wiki-key-hs" : "wiki-key"),
                c: r.data.thumb_image,
              },
              r.data.thumb_image ? { d: o.isMP ? 1 : "", e: o.imgSrc } : {},
              { f: i.t(r.data.title), g: !o.isHSMarket },
              (o.isHSMarket, {}),
              {
                h: i.n(a.wikiInfo.rank ? "rank" : ""),
                i: i.n(o.isHSMarket ? "wiki-detail-hs" : ""),
                j: a.wikiInfo.rank,
              },
              a.wikiInfo.rank ? { k: i.p({ wikiInfo: a.wikiInfo }) } : {},
              {
                l: i.n("black" === a.skin ? "skin-black" : ""),
                m: i.n(o.isHSMarket ? "wiki-bar-hs" : ""),
                n: i.o(function (t) {
                  return o.gotoDetail();
                }, 3209),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-cdbca69f"],
]);
wx.createComponent(n);
