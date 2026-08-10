var e = require("../../stock-news-core/utils/knife.js"),
  t = require("../../stock-news-core/utils/force2https.js"),
  i = require("../../../../../common/vendor.js"),
  n = {
    options: { styleIsolation: "shared" },
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
        return Array.isArray(e) && e.length && e[0];
      },
      defaultImg: function () {
        return "https://wzq.gtimg.com/resources/hippy/aikan/images/default-".concat(
          "white" === this.theme ? "white" : "black",
          "-img.png"
        );
      },
    },
    methods: {
      forceHttpsAdvanced: t.forceHttpsAdvanced,
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
    },
  },
  s = i._export_sfc(n, [
    [
      "render",
      function (e, t, n, s, a, r) {
        return i.e(
          { a: !(a.isMP && r.isCourse) },
          a.isMP && r.isCourse
            ? {}
            : i.e(
                { b: r.isLimitFree },
                r.isLimitFree
                  ? {
                      c: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === n.theme ? "black" : "white",
                        "/red.png"
                      ),
                    }
                  : {},
                { d: r.isVipNews },
                r.isVipNews
                  ? {
                      e: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === n.theme ? "black" : "white",
                        "/vip.png"
                      ),
                    }
                  : {},
                { f: r.isLive },
                r.isLive
                  ? {
                      g: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === n.theme ? "black" : "white",
                        "/yellow.png"
                      ),
                    }
                  : {},
                { h: r.isVideo || r.isCourse },
                r.isVideo || r.isCourse
                  ? {
                      i: "https://wzq.gtimg.com/resources/shy/news/yaowen/".concat(
                        "black" === n.theme ? "black" : "white",
                        "/blue.png"
                      ),
                    }
                  : {},
                { j: r.isLimitFree },
                (r.isLimitFree, {}),
                { k: r.isVipNews },
                (r.isVipNews, {}),
                { l: r.isLive },
                (r.isLive, {}),
                { m: r.isVideo },
                r.isVideo ? { n: i.t(r.isCourse ? "合集" : "视频") } : {},
                {
                  o: i.t(n.itemData.title),
                  p: i.t(n.itemData.media_name),
                  q: n.itemData.comment_num > 0,
                },
                n.itemData.comment_num > 0
                  ? { r: i.t(r.getCommentNum(n.itemData.comment_num)) }
                  : {},
                {
                  s: i.t(r.getTime(n.itemData.time)),
                  t: "url(".concat(
                    r.forceHttpsAdvanced(r.newsImage || r.defaultImg || ""),
                    ")"
                  ),
                  v: i.o(function (e) {
                    return r.imgError(e);
                  }, 5254),
                  w: r.isVideo,
                },
                (r.isVideo, {}),
                {
                  x: i.n(
                    "news-item-content " +
                      (n.itemData.isReaded ? "clicked" : "")
                  ),
                  y: i.o(function () {
                    return (
                      r.handleItemClick && r.handleItemClick.apply(r, arguments)
                    );
                  }, 5255),
                }
              )
        );
      },
    ],
    ["__scopeId", "data-v-ce2d2e30"],
  ]);
wx.createComponent(s);
