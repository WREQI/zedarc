var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../pages/information/mp.js"),
  t = require("../../../../../../common/vendor.js"),
  s = {
    props: ["news", "showSeperator"],
    components: {
      relatedStock: function () {
        return "../../../../../newsSbg/@tencent/stock-news-base/components/relatedStock.js";
      },
    },
    inject: { wzqConfig: { default: {} }, newScene: { default: 0 } },
    data: function () {
      return {
        defaultImg: "pic-loading.png",
        reportData: { prefix: "news.index", fchannel_id_fm_i: "I0B00p000l087" },
        clickByFeedback: !1,
      };
    },
    computed: {
      isHaveRelatedHq: function () {
        try {
          if (this.news.extra_info.stock_code.length > 0) return !0;
        } catch (e) {
          return !1;
        }
        return !1;
      },
      isNewsInfoTooLong: function () {
        var e = 0;
        return (
          this.isLive(this.news) && (e += 3),
          this.news.label
            ? (e += 2 * this.news.label.length)
            : (this.isLive(this.news) || 4 == this.news.type) && (e += 5),
          this.isTuoShuiYanBao && (e += 2 * this.tuoshuiyanbaoTitle.length + 1),
          this.news.source && (e += 2 * this.news.source.length + 1),
          this.news.tag &&
            !this.news.label &&
            (e += 2 * this.news.tag[0].length + 1),
          this.news.comment_num >= 20 &&
            (e += "".concat(this.news.comment_num).length + 2 + 1),
          this.news.formatedTime && (e += this.news.formatedTime.length + 1),
          this.news.view_num &&
            (e += "".concat(this.news.view_num).length + 6 + 1),
          1 == this.news.isFeedback && (e += 11),
          e > 37
        );
      },
      videoTime: function () {
        var n = "";
        if (!this.news.video_info) return n;
        if (
          ("object" == e(this.news.video_info)
            ? (n = this.news.video_info.video_time)
            : "string" == typeof this.news.video_info &&
              (n =
                this.news.video_info.split("|") &&
                this.news.video_info.split("|").length &&
                this.news.video_info.split("|")[1]),
          isNaN(+n))
        )
          n.startsWith("00:") && (n = n.slice(3));
        else {
          var t = parseInt(n / 60, 10),
            s = n % 60;
          n = ""
            .concat(t < 10 ? "0" : "")
            .concat(t, ":")
            .concat(s < 10 ? "0" : "")
            .concat(s);
        }
        return n;
      },
      tuoshuiyanbaoTitle: function () {
        var e = this.news.report_card && this.news.report_card.feed_type;
        return this.news.label + (1 === e ? "每周回顾" : "");
      },
      isTuoShuiYanBao: function () {
        return 19 === this.news.type;
      },
      isFromLctApp: function () {
        return this.newScene === n.LCTAPP_JUMPTO_MPZXG;
      },
    },
    methods: {
      formatImageHttps: n.formatImageHttps,
      isPcWeiXin: function () {
        var e, n;
        return (
          (null ==
          (n = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : n.IS_PCWEIXIN) || !1
        );
      },
      pcClick: function () {
        (this.isPcWeiXin() || this.isFromLctApp) &&
          (this.isFromLctApp && this.clickByFeedback
            ? (this.clickByFeedback = !1)
            : this.open(this.news));
      },
      open: function (e) {
        e && this.$emit("open", e);
      },
      onTouchStart: function (e) {
        (this.clickByFeedback = !1),
          e &&
            e.touches &&
            1 === e.touches.length &&
            ((this.touch = e.touches[0]), (this.isClick = !0));
      },
      onTouchMove: function (e) {
        if (e && e.touches && 1 === e.touches.length && this.isClick) {
          var n = e.touches[0],
            t = Math.abs(n.screenX - this.touch.screenX),
            s = Math.abs(n.screenY - this.touch.screenY);
          (t >= 9 || s >= 9) && (this.isClick = !1);
        }
      },
      onTouchEnd: function (e) {
        var n = this;
        this.isPcWeiXin() ||
          this.isFromLctApp ||
          (this.isClick &&
            (this.news && 1 === this.news.isFeedback
              ? setTimeout(function () {
                  n.clickByFeedback || n.open(e);
                }, 100)
              : this.open(e)),
          (this.isClick = !1));
      },
      feedbackCloseClick: function (e) {
        (this.clickByFeedback = !0), this.$emit("showFeedback", e);
      },
      isLive: function (e) {
        return 14 === e.type || (4 === e.type && 5 === e.cont_type);
      },
    },
  };
Array || t.resolveComponent("relatedStock")();
var i = t._export_sfc(s, [
  [
    "render",
    function (e, n, s, i, o, c) {
      return t.e(
        {
          a: t.t(s.news.title),
          b: t.n(s.news.read ? "read" : ""),
          c: c.isLive(s.news),
        },
        (c.isLive(s.news), {}),
        { d: !c.isTuoShuiYanBao && s.news.label },
        !c.isTuoShuiYanBao && s.news.label
          ? {
              e: t.t(s.news.label),
              f: t.s(
                s.news.label_style.length > 0
                  ? { color: s.news.label_style[0] }
                  : {}
              ),
            }
          : c.isLive(s.news) || 4 == s.news.type
          ? {}
          : c.isTuoShuiYanBao
          ? {
              j: t.t(c.tuoshuiyanbaoTitle),
              k: t.s(
                s.news.label_style.length > 0
                  ? { color: s.news.label_style[0] }
                  : {}
              ),
            }
          : {},
        {
          g: c.isLive(s.news),
          h: 4 == s.news.type,
          i: c.isTuoShuiYanBao,
          l: s.news.source && !c.isNewsInfoTooLong,
        },
        s.news.source && !c.isNewsInfoTooLong ? { m: t.t(s.news.source) } : {},
        { n: s.news.tag && !s.news.label },
        s.news.tag && !s.news.label ? { o: t.t(s.news.tag[0]) } : {},
        { p: s.news.comment_num >= 20 },
        s.news.comment_num >= 20 ? { q: t.t(s.news.comment_num) } : {},
        { r: s.news.formatedTime },
        s.news.formatedTime ? { s: t.t(s.news.formatedTime) } : {},
        { t: s.news.view_num },
        s.news.view_num ? { v: t.t(s.news.view_num) } : {},
        { w: 1 == s.news.isFeedback },
        1 == s.news.isFeedback
          ? {
              x: t.o(function () {
                return (
                  c.feedbackCloseClick &&
                  c.feedbackCloseClick.apply(c, arguments)
                );
              }, 3477),
            }
          : {},
        { y: 1 == s.news.isFeedback },
        1 == s.news.isFeedback
          ? {
              z: t.o(function () {
                return (
                  c.feedbackCloseClick &&
                  c.feedbackCloseClick.apply(c, arguments)
                );
              }, 3478),
            }
          : {},
        { A: s.news.thumb_img },
        s.news.thumb_img
          ? t.e(
              {
                B: c.formatImageHttps(s.news.thumb_img),
                C: 1 === s.news.has_live,
              },
              1 === s.news.has_live
                ? {}
                : c.videoTime && 21 !== s.news.type
                ? { E: t.t(c.videoTime) }
                : {},
              { D: c.videoTime && 21 !== s.news.type }
            )
          : {},
        {
          F: t.o(function () {
            return c.onTouchStart && c.onTouchStart.apply(c, arguments);
          }, 3479),
          G: t.o(function () {
            return c.onTouchMove && c.onTouchMove.apply(c, arguments);
          }, 3480),
          H: t.o(function (e) {
            return c.onTouchEnd(s.news);
          }, 3481),
          I: t.o(function () {
            return c.pcClick && c.pcClick.apply(c, arguments);
          }, 3482),
          J: c.isHaveRelatedHq,
        },
        c.isHaveRelatedHq
          ? {
              K: t.p({
                extra_info: s.news.extra_info,
                newsId: s.news.id,
                wzqConfig: c.wzqConfig,
                reportData: o.reportData,
              }),
            }
          : {},
        { L: t.n(s.showSeperator ? "with-sepline" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-1f7e86ba"],
]);
wx.createComponent(i);
