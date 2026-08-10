var e = require("../../../../../common/vendor.js"),
  t = require("../utils/emoji.js"),
  n = require("../Index.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  o = { IS_WZQ_XCX: !1 },
  a = o.IS_WZQ_XCX,
  r = o.IS_LITE_MODE,
  s = {
    components: {
      relatedStockItem: function () {
        return "./related-stock/relatedStockItem.js";
      },
    },
    props: [
      "liveContent",
      "list",
      "top_flag",
      "delta_time",
      "onLiveNewsClick",
      "qtData",
      "slist",
      "innerFundList",
      "userinfo",
    ],
    data: function () {
      return { isMP: !0, isWZQMP: !1, isLightMode: a || r };
    },
    watch: {
      liveContent: {
        handler: function (t) {
          this.$nextTick(function () {
            e.StockBridge.busEmit("news-liveScrollHandleBegin");
          });
        },
        deep: !0,
        immediate: !0,
      },
    },
    methods: {
      forceHttpsAdvanced: i.forceHttpsAdvanced,
      date: function (e) {
        return n.dateUtils.date(e, "hh:mm");
      },
      fromNow: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return n.dateUtils.fromNow(e, t);
      },
      getRichTextContent: function (e) {
        var n = [],
          i = [];
        if (
          (e.replace(/(\[[^\]]+\])/g, function (e, n, o) {
            return (
              t.isEmoji(n) && i.push({ start: o, end: o + n.length, text: n }),
              e
            );
          }),
          i.length > 0)
        ) {
          var o = 0;
          i.forEach(function (i) {
            o !== i.start &&
              n.push({ type: "text", value: e.slice(o, i.start) }),
              n.push({
                type: "icon",
                src: i.text,
                position: t.getEmojiId(i.text),
              }),
              (o = i.end);
          });
          var a = i[i.length - 1];
          a.end != e.length && n.push({ type: "text", value: e.slice(a.end) });
        } else n.push({ type: "text", value: e });
        return n;
      },
      getNewsTypeInfo: function (e) {
        var t,
          n,
          i = e.news_type,
          o = e.charge_type;
        return (
          17 == i
            ? 1 == o
              ? ((t = "red"), (n = "限免"))
              : 2 == o && ((t = "vip"), (n = "VIP"))
            : 4 == i
            ? ((t = "blue"), (n = "专题"))
            : 5 == i
            ? ((t = "blue"), (n = "组图"))
            : 14 == i && ((t = "yellow"), (n = "直播")),
          {
            icon: "https://wzq.gtimg.com/resources/shy/news/yaowen/white/".concat(
              t,
              ".png"
            ),
            text: n,
          }
        );
      },
      onNewsClick: function (e) {
        this.$emit("onLiveNewsClick", e);
      },
      imageClick: function (t, n) {
        n.stopPropagation(),
          e.wx$1 &&
            e.wx$1.previewImage &&
            e.wx$1.previewImage({ current: t, urls: [t] });
      },
      manageSelfStock: function (e) {
        this.$emit("manageSelfStock", e);
      },
    },
  };
Array ||
  (
    e.resolveComponent("relatedStockItem") +
    e.resolveComponent("open-account-big-card")
  )();
var c = e._export_sfc(s, [
  [
    "render",
    function (t, n, i, o, a, r) {
      return {
        a: e.f(i.list, function (t, n, o) {
          return e.e(
            { a: 0 == t.type && t.parent_info },
            0 == t.type && t.parent_info
              ? e.e(
                  { b: 1 != t.parent_info.status },
                  1 != t.parent_info.status
                    ? e.e(
                        { c: t.parent_info.headimgurl },
                        t.parent_info.headimgurl
                          ? {
                              d: r.forceHttpsAdvanced(t.parent_info.headimgurl),
                            }
                          : {},
                        { e: e.t(t.parent_info.nickname), f: 1 == i.top_flag },
                        1 == i.top_flag
                          ? {
                              g: e.t(
                                r.fromNow(1e3 * t.created_at, i.delta_time)
                              ),
                            }
                          : { h: e.t(r.date(1e3 * t.created_at)) },
                        { i: 1 == i.top_flag },
                        (i.top_flag, {})
                      )
                    : {},
                  { j: t.parent_info.content },
                  t.parent_info.content
                    ? {
                        k: e.f(
                          r.getRichTextContent(t.parent_info.content),
                          function (t, n, i) {
                            return {
                              a: e.t("text" == t.type ? t.value : ""),
                              b: n,
                              c: e.n(
                                "icon" == t.type
                                  ? "emoji epage-" +
                                      t.position.page +
                                      " eid-" +
                                      t.position.id
                                  : ""
                              ),
                            };
                          }
                        ),
                      }
                    : {},
                  {
                    l: e.t(t.nickname),
                    m: e.f(r.getRichTextContent(t.content), function (t, n, i) {
                      return {
                        a: e.t("text" == t.type ? t.value : ""),
                        b: n,
                        c: e.n(
                          "icon" == t.type
                            ? "emoji epage-" +
                                t.position.page +
                                " eid-" +
                                t.position.id
                            : ""
                        ),
                      };
                    }),
                  }
                )
              : e.e(
                  { n: 1 == i.top_flag },
                  1 == i.top_flag
                    ? { o: e.t(r.fromNow(1e3 * t.created_at, i.delta_time)) }
                    : { p: e.t(r.date(1e3 * t.created_at)) },
                  { q: 1 == i.top_flag },
                  (i.top_flag, {}),
                  { r: t.content },
                  t.content
                    ? {
                        s: e.f(
                          r.getRichTextContent(t.content),
                          function (t, n, i) {
                            return {
                              a: e.t("text" == t.type ? t.value : ""),
                              b: n,
                              c: e.n(
                                "icon" == t.type
                                  ? "emoji epage-" +
                                      t.position.page +
                                      " eid-" +
                                      t.position.id
                                  : ""
                              ),
                            };
                          }
                        ),
                      }
                    : {},
                  { t: 4 == t.type && t.news_info },
                  4 == t.type && t.news_info
                    ? e.e(
                        {
                          v:
                            -1 != [4, 5, 14, 17].indexOf(t.news_info.news_type),
                        },
                        -1 != [4, 5, 14, 17].indexOf(t.news_info.news_type)
                          ? {
                              w: e.t(t.news_info.title),
                              x: e.t(r.getNewsTypeInfo(t.news_info).text),
                            }
                          : { y: e.t(t.news_info.title) },
                        { z: t.news_info.news_img },
                        t.news_info.news_img
                          ? { A: r.forceHttpsAdvanced(t.news_info.news_img) }
                          : {},
                        { B: t.news_info.video_info },
                        (t.news_info.video_info, {}),
                        {
                          C: e.o(
                            function (e) {
                              return r.onNewsClick(t.news_info);
                            },
                            5493,
                            n
                          ),
                        }
                      )
                    : {},
                  { D: 1 == t.type || 3 == t.type },
                  1 == t.type || 3 == t.type
                    ? {
                        E: e.f(t.images, function (t, n, i) {
                          return {
                            a: n,
                            b: r.forceHttpsAdvanced(t),
                            c: e.o(
                              function (e) {
                                return r.imageClick(t, e);
                              },
                              5494,
                              n
                            ),
                          };
                        }),
                        F: e.n(1 == t.type ? "thumb-l" : "thumb-s"),
                      }
                    : {},
                  {
                    G: 5 == t.type && t.relate_quotes && t.relate_quotes.length,
                  },
                  5 == t.type && t.relate_quotes && t.relate_quotes.length
                    ? {
                        H: e.o(r.manageSelfStock, 5495, n),
                        I: "ae900279-0-" + o,
                        J: e.p({
                          live: i.liveContent,
                          userinfo: i.userinfo,
                          "qt-data": i.qtData,
                          slist: i.slist,
                          "inner-fund-list": i.innerFundList,
                          item: t.relate_quotes[0],
                          "report-info": {
                            brow: "news.live.relatedQuotes.livetab.brow",
                            tapDetail:
                              "news.live.relatedQuotes.livetab.tapdetail",
                            addFav: "news.live.relatedQuotes.livetab.add",
                            cancelFav: "news.live.relatedQuotes.livetab.cancel",
                            trade: "news.live.relatedQuotes.livetab.trade",
                          },
                          "add-fav-channel": a.isWZQMP
                            ? "IBU00p000l135"
                            : "I8v00p000l106",
                        }),
                      }
                    : {},
                  { K: !a.isMP && 6 == t.type && t.securities },
                  !a.isMP && 6 == t.type && t.securities
                    ? {
                        L: "ae900279-1-" + o,
                        M: e.p({ security: t.securities }),
                      }
                    : {}
                ),
            { N: n, O: 1 == t.is_red ? 1 : "" }
          );
        }),
        b: e.n(a.isLightMode ? "light-mode" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-ae900279"],
]);
wx.createComponent(c);
