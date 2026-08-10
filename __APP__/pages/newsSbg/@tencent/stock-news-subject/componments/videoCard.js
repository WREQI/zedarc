var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  r = function (t, i, a) {
    return i in t
      ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[i] = a);
  },
  o = require("../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  s = require("../../../../../common/vendor.js"),
  c = require("../../stock-news-core/utils/force2https.js"),
  u = {
    name: "VideoCard",
    options: { styleIsolation: "shared" },
    directives: { "observe-visibility": o.ObserveVisibility },
    props: {
      itemData: {
        type: Object,
        require: !0,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "white" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {
      isLive: function () {
        var t = this.itemData,
          e = t.charge_type,
          i = t.articletype;
        return !e && 14 == +i;
      },
      isVideo: function () {
        var t = this.itemData,
          e = t.charge_type,
          i = t.articletype;
        return !e && [7, 8].indexOf(+i) > -1;
      },
      defaultImg: function () {
        return "https://wzq.gtimg.com/resources/hippy/aikan/images/default-".concat(
          "white" === this.theme ? "white" : "black",
          "-img.png"
        );
      },
      posterImg: function () {
        return c.forceHttpsAdvanced(
          (this.itemData.theme_img && this.itemData.theme_img.url) ||
            this.defaultImg
        );
      },
      videoTime: function () {
        var t = this.itemData.video_info,
          e = "";
        if (t) {
          var i = t.video_time;
          if (isNaN(+i)) e = i.slice(3);
          else {
            var a = parseInt(i / 60),
              n = i % 60;
            e = ""
              .concat(a < 10 ? "0" : "")
              .concat(a, ":")
              .concat(n < 10 ? "0" : "")
              .concat(n);
          }
        }
        return e;
      },
      playNum: function () {
        var t = this.itemData.extra_info;
        return (t && t.play_num) || 0;
      },
      participateNum: function () {
        var t = this.itemData.extra_info;
        return +t.participate_num <= 0
          ? ""
          : "·"
              .concat(this.formatNum(t.participate_num), "人")
              .concat(20 == +t.live_status ? "预约" : "围观");
      },
      liveStatus: function () {
        return +this.itemData.extra_info.live_status;
      },
      liveStatusText: function () {
        return (
          { 20: "预告", 21: "直播中", 22: "回顾" }[
            +(this.itemData.extra_info || {}).live_status
          ] || ""
        );
      },
      isCourse: function () {
        return (
          !this.isLive &&
          this.itemData.video_info &&
          this.itemData.video_info.course_id
        );
      },
    },
    methods: {
      getVisibleSetting: function () {
        var t = this;
        return {
          callback: function (e) {
            return t.visibilityChanged(e);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        };
      },
      visibilityChanged: function (t) {
        if (t) {
          var e = {
            eventName: "news.subject.detail.video_big_module_show",
            dataObject: { id: this.itemData.news_id },
          };
          this.handleDataReport(e);
        }
      },
      handleDataReport: function (e) {
        var o = e.eventName,
          s = e.dataObject,
          c = void 0 === s ? {} : s;
        o &&
          (function (e, o) {
            for (var s in o || (o = {})) a.call(o, s) && r(e, s, o[s]);
            if (i) {
              var c,
                u = t(i(o));
              try {
                for (u.s(); !(c = u.n()).done; ) {
                  s = c.value;
                  n.call(o, s) && r(e, s, o[s]);
                }
              } catch (t) {
                u.e(t);
              } finally {
                u.f();
              }
            }
          })({ news_id: this.itemData.news_id }, c);
      },
      handleItemClick: function () {
        var t = {
          eventName: "news.subject.detail.video_big_module_click",
          dataObject: { id: this.itemData.news_id || this.itemData.id },
        };
        this.handleDataReport(t);
        var e = this.itemData;
        (this.itemData.isReaded = !0), this.$emit("tapDetail", e);
      },
      formatNum: function (t) {
        return t && 0 != +t
          ? (t = parseInt(t, 10)) > 5e5
            ? "50万+"
            : t > 9999
            ? "".concat((t / 1e4).toFixed(1), "万")
            : t
          : "";
      },
    },
  },
  m = s._export_sfc(u, [
    [
      "render",
      function (t, e, i, a, n, r) {
        return s.e(
          {
            a: s.t(
              "【"
                .concat(r.isLive ? "直播" : "视频", "】")
                .concat(i.itemData.title)
            ),
            b: s.n(i.itemData.isReaded ? "clicked" : ""),
            c: r.posterImg,
            d: r.isVideo,
          },
          (r.isVideo, {}),
          { e: r.isVideo },
          r.isVideo
            ? s.e(
                { f: r.playNum > 0 },
                r.playNum > 0
                  ? {
                      g: s.t(r.playNum),
                      h: s.t(r.isCourse ? "人已学习" : "播放"),
                    }
                  : {},
                { i: s.t(r.videoTime) }
              )
            : {},
          { j: r.isLive },
          r.isLive
            ? {
                k: s.n(20 == r.liveStatus && "before"),
                l: s.n(21 == r.liveStatus && "living"),
                m: s.n(22 == r.liveStatus && "after"),
                n: s.t(r.liveStatusText),
                o: s.t(r.participateNum),
              }
            : {},
          { p: s.t(i.itemData.media_name), q: i.itemData.comment_num },
          i.itemData.comment_num ? { r: s.t(i.itemData.comment_num) } : {},
          {
            s: s.o(function () {
              return r.handleItemClick && r.handleItemClick.apply(r, arguments);
            }, 5253),
          }
        );
      },
    ],
    ["__scopeId", "data-v-e869484f"],
  ]);
wx.createComponent(m);
