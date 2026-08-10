var e = require("../utils/emoji.js"),
  t = require("../Index.js"),
  n = require("../../../../../common/vendor.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  a = { IS_WZQ_XCX: !1 },
  o = a.IS_WZQ_XCX,
  r = a.IS_LITE_MODE,
  s = {
    components: {
      relatedStockItem: function () {
        return "./related-stock/relatedStockItem.js";
      },
    },
    props: [
      "live",
      "chat_list",
      "delta_time",
      "isSharePage",
      "qtData",
      "slist",
      "innerFundList",
      "userinfo",
      "skin",
    ],
    data: function () {
      return { isWZQMP: !1 };
    },
    computed: {
      openComment: function () {
        return 1 !== this.live.comment_status;
      },
      isEmptyChat: function () {
        return (
          this.chat_list.loaded &&
          0 == this.chat_list.list.length &&
          (!this.chat_list.temp || 0 == this.chat_list.temp.length)
        );
      },
      ulRefreshBottom: function () {
        return o || r ? "" : this.isSharePage ? "100px" : "50px";
      },
    },
    methods: {
      forceHttpsAdvanced: i.forceHttpsAdvanced,
      chat_time: function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return t.dateUtils.chatTime(e, n);
      },
      getRichTextContent: function (t) {
        var n = [],
          i = [];
        if (
          (t.replace(/(\[[^\]]+\])/g, function (t, n, a) {
            return (
              e.isEmoji(n) && i.push({ start: a, end: a + n.length, text: n }),
              t
            );
          }),
          i.length > 0)
        ) {
          var a = 0;
          i.forEach(function (i) {
            a !== i.start &&
              n.push({ type: "text", value: t.slice(a, i.start) }),
              n.push({
                type: "icon",
                src: i.text,
                position: e.getEmojiId(i.text),
              }),
              (a = i.end);
          });
          var o = i[i.length - 1];
          o.end != t.length && n.push({ type: "text", value: t.slice(o.end) });
        } else n.push({ type: "text", value: t });
        return n;
      },
      manageSelfStock: function (e) {
        this.$emit("manageSelfStock", e);
      },
    },
  };
Array || n.resolveComponent("relatedStockItem")();
var c = n._export_sfc(s, [
  [
    "render",
    function (e, t, i, a, o, r) {
      return n.e(
        {
          a: n.f(i.chat_list.list, function (e, t, a) {
            return n.e(
              { a: 1 == e.user_type && i.live.media_icon },
              1 == e.user_type && i.live.media_icon
                ? { b: r.forceHttpsAdvanced(i.live.media_icon) }
                : 2 != e.user_type || e.headimgurl
                ? { e: r.forceHttpsAdvanced(e.headimgurl) }
                : {
                    d: n.t(
                      (
                        (e.nickname && e.nickname.slice(0, 1)) ||
                        ""
                      ).toUpperCase()
                    ),
                  },
              {
                c: 2 == e.user_type && !e.headimgurl,
                f: 1002 == e.vip_type ? 1 : "",
                g: 1001 == e.vip_type ? 1 : "",
                h: n.t(e.nickname),
                i: n.t(r.chat_time(1e3 * e.ctime, i.delta_time)),
                j: e.parentInfo,
              },
              e.parentInfo
                ? n.e(
                    {
                      k: n.t(e.parentInfo.nickname),
                      l: n.t(e.parentInfo.content),
                      m: e.content,
                    },
                    e.content
                      ? {
                          n: n.f(
                            r.getRichTextContent(e.content),
                            function (e, t, i) {
                              return {
                                a: n.t("text" == e.type ? e.value : ""),
                                b: t,
                                c: n.n(
                                  "icon" == e.type
                                    ? "emoji epage-" +
                                        e.position.page +
                                        " eid-" +
                                        e.position.id
                                    : ""
                                ),
                              };
                            }
                          ),
                        }
                      : {}
                  )
                : e.content
                ? {
                    p: n.f(r.getRichTextContent(e.content), function (e, t, i) {
                      return {
                        a: n.t("text" == e.type ? e.value : ""),
                        b: t,
                        c: n.n(
                          "icon" == e.type
                            ? "emoji epage-" +
                                e.position.page +
                                " eid-" +
                                e.position.id
                            : ""
                        ),
                      };
                    }),
                  }
                : {},
              {
                o: e.content,
                q: 5 == e.type && e.relate_quotes && e.relate_quotes.length,
              },
              5 == e.type && e.relate_quotes && e.relate_quotes.length
                ? {
                    r: n.o(r.manageSelfStock, 5205, e.id),
                    s: "383464f7-0-" + a,
                    t: n.p({
                      live: i.live,
                      userinfo: i.userinfo,
                      "qt-data": i.qtData,
                      slist: i.slist,
                      "inner-fund-list": i.innerFundList,
                      item: e.relate_quotes[0],
                      "report-info": {
                        brow: "news.live.relatedQuotes.chattab.brow",
                        tapDetail: "news.live.relatedQuotes.chattab.tapdetail",
                        addFav: "news.live.relatedQuotes.chattab.add",
                        cancelFav: "news.live.relatedQuotes.chattab.cancel",
                        trade: "news.live.relatedQuotes.chattab.trade",
                      },
                      type: "chat",
                      "add-fav-channel": o.isWZQMP
                        ? "IBU00p000l133"
                        : "I8v00p000l112",
                    }),
                    v: e.content ? "8px" : "0px",
                  }
                : {},
              { w: e.id, x: 1 == e.owner ? 1 : "" }
            );
          }),
          b: i.chat_list.temp && i.chat_list.temp.length > 0,
        },
        i.chat_list.temp && i.chat_list.temp.length > 0
          ? {
              c: n.f(i.chat_list.temp, function (e, t, a) {
                return n.e(
                  { a: 1 == e.user_type && i.live.media_icon },
                  1 == e.user_type && i.live.media_icon
                    ? { b: r.forceHttpsAdvanced(i.live.media_icon) }
                    : 2 != e.user_type || e.headimgurl
                    ? { e: r.forceHttpsAdvanced(e.headimgurl) }
                    : {
                        d: n.t(
                          (
                            (e.nickname && e.nickname.slice(0, 1)) ||
                            ""
                          ).toUpperCase()
                        ),
                      },
                  {
                    c: 2 == e.user_type && !e.headimgurl,
                    f: 1002 == e.vip_type ? 1 : "",
                    g: 1001 == e.vip_type ? 1 : "",
                    h: n.t(e.nickname),
                    i: n.t(r.chat_time(1e3 * e.ctime, i.delta_time)),
                    j: n.t(e.content),
                    k: t,
                  }
                );
              }),
            }
          : {},
        { d: r.isEmptyChat },
        r.isEmptyChat
          ? n.e({ e: r.openComment }, (r.openComment, {}))
          : { f: r.ulRefreshBottom }
      );
    },
  ],
  ["__scopeId", "data-v-383464f7"],
]);
wx.createComponent(c);
