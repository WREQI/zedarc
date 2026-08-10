var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-community-base/utils/api/index.js"),
  n = require("../../../stock-community-base/utils/knife.js"),
  o = require("../../../stock-community-base/utils/constant.js"),
  i = require("../../../stock-news-core/utils/force2https.js"),
  a = e.defineComponent({
    props: {
      topicId: { type: [String, Number], default: "" },
      topic: { type: String, default: "" },
      description: { type: String, default: "" },
      imgurl: { type: String, default: "" },
      theme: { type: String, default: "" },
      topicCommentNum: { type: Number, default: 0 },
      topicViewNum: { type: Number, default: 0 },
      topicVoteNum: { type: Number, default: 0 },
      isMiniApp: { type: Boolean, default: !1 },
      announcementTitle: { type: String, default: "" },
      announcementDetail: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (a, c) {
      var u = c.emit,
        r = t.api.goTopicPlaza,
        p = e.ref(!1),
        m = e.getCurrentInstance(),
        l = function () {
          var t,
            n = "announcement_lastExpand_".concat(a.topicId);
          (t = "true" === e.StockBridge.getStorage(n)),
            (p.value = !t),
            p.value && e.StockBridge.setStorage(n, "true");
        },
        d = function (e, t) {
          return e >= 1e4 && e < 1e8
            ? "".concat((e / 1e4).toFixed("viewNum" === t ? 1 : 2), "w")
            : e >= 1e8
            ? "".concat((e / 1e8).toFixed(2), "亿")
            : e;
        },
        s = e.computed(function () {
          var e = [];
          return (
            a.topicVoteNum > 0 &&
              e.push("".concat(d(a.topicVoteNum, "viewNum"), "个投票")),
            a.topicCommentNum > 0 &&
              e.push("共".concat(d(a.topicCommentNum, "commentNum"), "条讨论")),
            e.join(" · ")
          );
        });
      return (
        e.onMounted(function () {
          l();
        }),
        e.onActivated(function () {
          l();
        }),
        {
          isAnnouncementExpanded: p,
          formatCount: d,
          goPlaza: function () {
            if (
              (u("commentReport", "topicplaza_click"),
              !a.isMiniApp || n.IS_LCT_XCX)
            )
              r({
                instance: m.proxy,
                url: o.toShyCommon({
                  p_showNav: !0,
                  p_key: "com.tencent.shy.commentSystem",
                  p_title: "",
                  p_url: "topicPlaza-topicPlaza",
                }),
              });
            else {
              e.wx$1.navigateTo({
                url: "/pages/additional/topicPlaza/topicPlaza",
              });
            }
          },
          toggleAnnouncement: function () {
            p.value = !p.value;
          },
          forceHttpsAdvanced: i.forceHttpsAdvanced,
          platform: n.platform,
          tagInfo: s,
        }
      );
    },
  }),
  c = e._export_sfc(a, [
    [
      "render",
      function (t, n, o, i, a, c) {
        return e.e(
          { a: t.topic },
          t.topic
            ? e.e(
                {
                  b: e.t(t.topic),
                  c: e.o(function () {
                    return t.goPlaza && t.goPlaza.apply(t, arguments);
                  }, 3098),
                  d: t.tagInfo,
                },
                t.tagInfo ? { e: e.t(t.tagInfo) } : {}
              )
            : {},
          {
            f: e.n(t.platform),
            g: "url(".concat(t.forceHttpsAdvanced(t.imgurl), ")"),
            h: t.description && "undefined" != t.description,
          },
          t.description && "undefined" != t.description
            ? { i: e.t(t.description) }
            : {},
          {
            j:
              t.announcementTitle &&
              t.announcementDetail &&
              t.announcementDetail.length > 0,
          },
          t.announcementTitle &&
            t.announcementDetail &&
            t.announcementDetail.length > 0
            ? e.e(
                {
                  k: e.t(t.announcementTitle),
                  l: e.f(t.announcementDetail, function (n, o, i) {
                    return {
                      a: e.t(o + 1),
                      b: e.t(n),
                      c: t.isAnnouncementExpanded || 0 === o,
                      d: o,
                    };
                  }),
                  m: t.announcementDetail.length > 1,
                },
                t.announcementDetail.length > 1
                  ? {
                      n: e.t(
                        t.isAnnouncementExpanded
                          ? "收起"
                          : "展开剩下".concat(
                              t.announcementDetail.length - 1,
                              "条"
                            )
                      ),
                      o: t.isAnnouncementExpanded ? 1 : "",
                      p: e.o(function () {
                        return (
                          t.toggleAnnouncement &&
                          t.toggleAnnouncement.apply(t, arguments)
                        );
                      }, 3099),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-0e8fd151"],
  ]);
wx.createComponent(c);
