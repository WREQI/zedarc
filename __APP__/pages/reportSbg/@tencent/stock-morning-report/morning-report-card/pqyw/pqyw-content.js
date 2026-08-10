var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  i = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  n = require("../../../stock-news-core/utils/newsParser.js"),
  c = require("../../../stock-news-base/service/news/gray.js"),
  s = require("../../../stock-news-base/service/news/apis/queryEntryList.js"),
  o = {
    directives: { "observe-visibility": i.ObserveVisibility },
    props: [
      "newsId",
      "item",
      "itemIndex",
      "clickable",
      "isMP",
      "isWZQ",
      "wzqConfig",
      "rawClickParams",
      "disableTouch",
      "disableMpHover",
    ],
    data: function () {
      var e = this;
      return {
        TEXT_TYPE_ENUM: n.TEXT_TYPE_ENUM,
        urlObserveConf: {
          callback: function (t, i) {
            return e.visibilityChanged(t, i);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        isTeachShow: !1,
        teachText: "",
        techId: "",
        teachTitle: "",
      };
    },
    methods: {
      visibilityChanged: function (e) {
        e &&
          t.StockBridge.report(
            "news.detail.news_text_url_account_link_visited",
            { newsid: this.newsId }
          );
      },
      stockNotJump: function (e) {
        var t = e.stockId;
        return !(!t || !t.startsWith("bj"));
      },
      goToFunctions: function (e) {
        this.$emit("goToFunctions", e);
      },
      goToNews: function (e) {
        this.$emit("goToNews", e);
      },
      goToStock: function (e) {
        this.$emit("goToStock", e);
      },
      goToUrl: function (e) {
        this.$emit("goToUrl", e);
      },
      handleTech: function (e) {
        if (this.clickable && e && e.teachId) {
          t.StockBridge.report("news.detail.full_teach_toast", {});
          var i = e.teachId.split("-").pop();
          this.showTeachTips(i);
        }
      },
      showTeachTips: function () {
        var i,
          n,
          o,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
          (i = this),
          (n = null),
          (o = e().mark(function i() {
            var n,
              o,
              a,
              l,
              T,
              u,
              h = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.teachText = ""),
                        (this.techId = r),
                        (e.prev = 1),
                        (a = null),
                        (e.next = 5),
                        c.isNewsGrayUser("queryEntryList")
                      );
                    case 5:
                      if (!e.sent) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 8), s.queryEntryList({ item_ids: r });
                    case 8:
                      (a = e.sent), (e.next = 16);
                      break;
                    case 11:
                      return (
                        (l =
                          "https://snp.tenpay.com/cgi/cgi-bin/snp/investorEdu/eduEntry/getItem?itemID=".concat(
                            r
                          )),
                        (e.next = 14),
                        t.StockBridge.request(l, "GET")
                      );
                    case 14:
                      (a = e.sent), (a = s.adaptQueryEntryListResp(a));
                    case 16:
                      (T = null),
                        a &&
                          0 === a.code &&
                          ((u = a.items),
                          (this.teachTitle =
                            null !=
                            (o = null == (n = u[0]) ? void 0 : n.category_title)
                              ? o
                              : ""),
                          u.map(function (e) {
                            var t;
                            1 === e.display &&
                              ((T = e),
                              (h.teachText = "<div><label>"
                                .concat((t = e).title, "</label><p>")
                                .concat(t.content, "</p></div>")));
                          })),
                        T
                          ? t.wx$1.showModal({
                              title: T.title,
                              content: T.content,
                              showCancel: !1,
                              confirmText: "我知道了",
                            })
                          : "" !== this.teachText && (this.isTeachShow = !0),
                        (e.next = 23);
                      break;
                    case 21:
                      (e.prev = 21), (e.t0 = e.catch(1));
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[1, 21]]
            );
          })),
          new Promise(function (e, t) {
            var c = function (e) {
                try {
                  r(o.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  r(o.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(c, s);
              };
            r((o = o.apply(i, n)).next());
          })
        );
      },
      cancelTeachTip: function () {
        this.goTeach(), (this.isTeachShow = !1);
      },
      goTeach: function () {
        t.StockBridge.report("news.detail.full_teach_toast_index", {
          newsId: this.newsId,
          techId: this.techId,
        });
        var e = "https://wzq.tenpay.com/zxgweb/fullTeach/#/";
        window.$location ? (window.$location.href = e) : (location.href = e);
      },
    },
  };
Array || t.resolveComponent("st-modal")();
var r = t._export_sfc(o, [
  [
    "render",
    function (e, i, n, c, s, o) {
      return t.e(
        { a: "text" === n.item.type },
        "text" === n.item.type
          ? t.e(
              {
                b: t.f(n.item.content, function (e, i, c) {
                  return t.e(
                    { a: e.textType === s.TEXT_TYPE_ENUM.NEWS && n.clickable },
                    e.textType === s.TEXT_TYPE_ENUM.NEWS && n.clickable
                      ? {
                          b: t.t(e.text),
                          c: t.n(e.styles),
                          d: t.o(
                            function (t) {
                              return o.goToNews(e.clickParams);
                            },
                            4920,
                            i
                          ),
                        }
                      : {},
                    { e: e.textType === s.TEXT_TYPE_ENUM.RAW || !n.clickable },
                    e.textType !== s.TEXT_TYPE_ENUM.RAW && n.clickable
                      ? {}
                      : {
                          f: t.t(e.text),
                          g: t.n(e.styles),
                          h: t.n(n.disableTouch ? "disable-touch" : ""),
                          i: t.o(
                            function (e) {
                              return o.goToNews(n.rawClickParams);
                            },
                            4921,
                            i
                          ),
                          j:
                            n.disableTouch || n.disableMpHover
                              ? ""
                              : "onLongTouch",
                        },
                    { k: e.textType === s.TEXT_TYPE_ENUM.STOCK && n.clickable },
                    e.textType === s.TEXT_TYPE_ENUM.STOCK && n.clickable
                      ? t.e(
                          { l: o.stockNotJump(e.clickParams) },
                          o.stockNotJump(e.clickParams)
                            ? { m: t.t(e.text), n: t.n(e.styles) }
                            : {
                                o: t.t(e.text),
                                p: t.n(e.styles),
                                q: t.o(
                                  function (t) {
                                    return o.goToStock(e.clickParams);
                                  },
                                  4922,
                                  i
                                ),
                                r: n.disableMpHover ? "" : "onLongTouch",
                              }
                        )
                      : {},
                    { s: e.textType === s.TEXT_TYPE_ENUM.FUNC && n.clickable },
                    e.textType === s.TEXT_TYPE_ENUM.FUNC && n.clickable
                      ? t.e(
                          { t: e.clickParams.url },
                          e.clickParams.url
                            ? {
                                v: t.t(e.text),
                                w: t.n(e.styles),
                                x: t.o(
                                  function (t) {
                                    return o.goToFunctions(e.clickParams);
                                  },
                                  4923,
                                  i
                                ),
                              }
                            : { y: t.t(e.text), z: t.n(e.styles) }
                        )
                      : {},
                    { A: e.textType === s.TEXT_TYPE_ENUM.URL && n.clickable },
                    e.textType === s.TEXT_TYPE_ENUM.URL && n.clickable
                      ? t.e(
                          { B: n.isMP },
                          n.isMP
                            ? { C: t.t(e.text), D: t.n(e.styles) }
                            : {
                                E: t.t(e.text),
                                F: t.n(e.styles),
                                G: t.o(
                                  function (t) {
                                    return o.goToUrl(e.clickParams);
                                  },
                                  4924,
                                  i
                                ),
                              }
                        )
                      : {},
                    { H: e.textType === s.TEXT_TYPE_ENUM.TEACH && n.clickable },
                    e.textType === s.TEXT_TYPE_ENUM.TEACH && n.clickable
                      ? {
                          I: t.t(e.text),
                          J: t.n(e.styles),
                          K: t.o(
                            function (t) {
                              return o.handleTech(e.clickParams);
                            },
                            4925,
                            i
                          ),
                        }
                      : {},
                    { L: i }
                  );
                }),
                c: !n.isMP,
              },
              n.isMP
                ? {}
                : {
                    d: s.teachText,
                    e: t.o(o.cancelTeachTip, 4926),
                    f: t.o(function (e) {
                      return (s.isTeachShow = !1);
                    }, 4927),
                    g: t.o(function (e) {
                      return (s.isTeachShow = e);
                    }, 4928),
                    h: t.p({
                      type: n.isWZQ ? "confirm" : "alert",
                      "confirm-btn": "我知道了",
                      "cancel-btn": "去词条百科看看",
                      modelValue: s.isTeachShow,
                    }),
                  },
              { i: t.n(n.item.tagClass) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-91cfeb7d"],
]);
wx.createComponent(r);
