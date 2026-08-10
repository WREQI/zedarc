var e = require("../../../../stock-news-sdk/index.js"),
  t = require("../../../../../../../common/vendor.js"),
  i = {
    name: "mpLive",
    props: {
      item: { type: Object, default: {} },
      isSharePage: { type: Boolean, default: !1 },
      mpStyleObj: { type: String, default: "" },
    },
    data: function () {
      return { isMP: !0 };
    },
    computed: {
      liveStatus: function () {
        var e, t;
        return null == (t = null == (e = this.item) ? void 0 : e.extra_info)
          ? void 0
          : t.live_status;
      },
      liveStatusClass: function () {
        return (
          { 20: "preview", 21: "living", 22: "review" }[this.liveStatus] || ""
        );
      },
      formatLiveStatus: function () {
        return { 20: "预告", 21: "直播中", 22: "回顾" }[this.liveStatus] || "";
      },
      playSrc: function () {
        var e = this.item.extra_info,
          t = void 0 === e ? {} : e,
          i = t.live_status,
          n = t.live,
          a = void 0 === n ? {} : n,
          s = t.vod,
          l = void 0 === s ? [] : s,
          r = "";
        return (
          21 == +i && a.m3u8
            ? (r = a.m3u8)
            : 22 == +i && l.length && l[0].video_url && (r = l[0].video_url),
          r
        );
      },
    },
    methods: {
      onMPFullscreenChangeEvent: function (e) {
        var t = e.detail;
        if (this.isMP && this.isSharePage) {
          var i = t.fullScreen;
          getApp().globalData.Event.emit("base.navbar.hide", i);
        }
      },
      handleLiveClick: function () {
        e.sdk.navigateToLiveDetail({ instance: this, id: this.item.id });
      },
    },
  },
  n = t._export_sfc(i, [
    [
      "render",
      function (e, i, n, a, s, l) {
        return t.e(
          {
            a: t.n(l.liveStatusClass),
            b: t.t(l.formatLiveStatus),
            c: l.playSrc,
          },
          l.playSrc
            ? {
                d: t.s(n.mpStyleObj),
                e: l.playSrc,
                f:
                  (n.item.thumbnails && n.item.thumbnails[0]) ||
                  (n.item.thumbnails_qqnews && n.item.thumbnails_qqnews[0]),
                g: t.o(function () {
                  return (
                    l.onMPFullscreenChangeEvent &&
                    l.onMPFullscreenChangeEvent.apply(l, arguments)
                  );
                }, 5472),
              }
            : {
                h:
                  (n.item.thumbnails && n.item.thumbnails[0]) ||
                  (n.item.thumbnails_qqnews && n.item.thumbnails_qqnews[0]),
                i: t.s(n.mpStyleObj),
                j: t.o(function () {
                  return (
                    l.handleLiveClick && l.handleLiveClick.apply(l, arguments)
                  );
                }, 5473),
              }
        );
      },
    ],
    ["__scopeId", "data-v-33f80371"],
  ]);
wx.createComponent(n);
