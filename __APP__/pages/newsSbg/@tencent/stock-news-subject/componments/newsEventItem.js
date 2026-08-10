var e = require("../../stock-news-core/utils/knife.js"),
  t = require("../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  s = require("../../../../../common/vendor.js"),
  n = {
    options: { styleIsolation: "shared" },
    directives: { "observe-visibility": t.ObserveVisibility },
    props: {
      itemData: {
        type: Object,
        require: !0,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "white" },
    },
    data: function () {
      return { isMP: !0 };
    },
    computed: {
      isLimitFree: function () {
        return 1 == +this.itemData.charge_type;
      },
      isVipNews: function () {
        return 2 == +this.itemData.charge_type;
      },
      isLive: function () {
        var e = this.itemData,
          t = e.charge_type,
          i = e.articletype;
        return !t && 14 == +i;
      },
      isVideo: function () {
        var e = this.itemData,
          t = e.charge_type,
          i = e.articletype;
        return !t && [7, 8].indexOf(+i) > -1;
      },
      isCourse: function () {
        var e = this.itemData.video_info;
        return e && e.course_id && this.isVideo;
      },
      newsImage: function () {
        var e = this.itemData.thumbnails;
        return i.forceHttpsAdvanced(
          Array.isArray(e) && e.length > 0 ? e[0] : ""
        );
      },
      defaultImg: function () {
        return "https://wzq.gtimg.com/resources/hippy/aikan/images/default-".concat(
          "white" === this.theme ? "white" : "black",
          "-img.png"
        );
      },
    },
    created: function () {
      this.$emit("createEventItem"), this.visibilityChanged(!0);
    },
    methods: {
      imgError: function (e) {
        e.target.src = this.defaultImg;
      },
      handleItemClick: function () {
        var e = this.itemData;
        (this.itemData.isReaded = !0), this.$emit("tapDetail", e);
      },
      getCommentNum: function (e) {
        return e
          ? (e = parseInt(e, 10)) > 9999
            ? "".concat((e / 1e4).toFixed(1), "万")
            : e
          : 0;
      },
      getTime: function (t) {
        return e.formateDate(t);
      },
      formatDuration: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = function (e) {
            return e < 10 ? "0".concat(e) : e;
          };
        return "".concat(t(parseInt(e / 60)), ":").concat(t(e % 60));
      },
      getVisibleSetting: function () {
        var e = this;
        return {
          callback: function (t, i) {
            return e.visibilityChanged(t);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        };
      },
      visibilityChanged: function (e) {
        e && this.$emit("itemBrow");
      },
    },
  },
  r = s._export_sfc(n, [
    [
      "render",
      function (e, t, i, n, r, a) {
        return s.e(
          { a: !(r.isMP && a.isCourse) },
          r.isMP && a.isCourse
            ? {}
            : s.e(
                { b: a.isLimitFree },
                a.isLimitFree
                  ? {
                      c: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === i.theme ? "black" : "white",
                        "/red.png"
                      ),
                    }
                  : {},
                { d: a.isVipNews },
                a.isVipNews
                  ? {
                      e: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === i.theme ? "black" : "white",
                        "/vip.png"
                      ),
                    }
                  : {},
                { f: a.isLive },
                a.isLive
                  ? {
                      g: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === i.theme ? "black" : "white",
                        "/yellow.png"
                      ),
                    }
                  : {},
                { h: a.isVideo || a.isCourse },
                a.isVideo || a.isCourse
                  ? {
                      i: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === i.theme ? "black" : "white",
                        "/blue.png"
                      ),
                    }
                  : {},
                { j: a.isLimitFree },
                (a.isLimitFree, {}),
                { k: a.isVipNews },
                (a.isVipNews, {}),
                { l: a.isLive },
                (a.isLive, {}),
                { m: a.isVideo },
                a.isVideo ? { n: s.t(a.isCourse ? "合集" : "视频") } : {},
                {
                  o: s.t(i.itemData.title),
                  p: s.t(i.itemData.media_name),
                  q: s.t(a.getTime(i.itemData.time)),
                  r: a.newsImage || a.defaultImg,
                  s: s.o(function (e) {
                    return a.imgError(e);
                  }, 5251),
                  t: a.isVideo,
                },
                (a.isVideo, {}),
                {
                  v: s.n(
                    "news-event-item-content " +
                      (i.itemData.isReaded ? "clicked" : "")
                  ),
                  w: s.o(function () {
                    return (
                      a.handleItemClick && a.handleItemClick.apply(a, arguments)
                    );
                  }, 5252),
                }
              )
        );
      },
    ],
    ["__scopeId", "data-v-6ff7a629"],
  ]);
wx.createComponent(r);
