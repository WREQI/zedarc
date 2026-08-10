var e = require("../../../../../../../../common/vendor.js"),
  t = {},
  a = {
    name: "Live",
    props: {
      data: { type: Object, default: function () {} },
      isPause: { type: Boolean, default: !1 },
    },
    components: {
      CustomLive: function () {
        return "./customLive.js";
      },
    },
    data: function () {
      return { isMute: !1, livePlayerReady: !1 };
    },
    beforeCreate: function () {
      var e = this;
      window.SuperPlayer
        ? this.$nextTick(function () {
            e.livePlayerReady = !0;
          })
        : (function (e, a) {
            if (1 === t[e]) a();
            else if (t[e]) t[e].push(a);
            else {
              t[e] = [a];
              var i = document.createElement("script"),
                o = !1;
              (i.onload = i.onreadystatechange =
                function () {
                  o ||
                    (this.readyState &&
                      "loaded" !== this.readyState &&
                      "complete" !== this.readyState) ||
                    ((o = !0),
                    t[e].forEach(function (e) {
                      e();
                    }),
                    (t[e] = 1));
                }),
                (i.src = e),
                (
                  document.getElementsByTagName("head")[0] ||
                  document.documentElement
                ).appendChild(i);
            }
          })(
            "https://vm.gtimg.cn/thumbplayer/superplayer/1.48.0/superplayer.js",
            function () {
              e.livePlayerReady = !0;
            }
          );
    },
    methods: {
      handleMuteChange: function (e) {
        (this.isMute = e), this.$emit("muteChange", e);
      },
      reportPlayLive: function (e) {
        this.$emit("reportPlayLive", e);
      },
      reportPauseLive: function (e) {
        this.$emit("reportPauseLive", e);
      },
      gotoLiveDetail: function (e) {
        this.$emit("gotoLiveDetail", e);
      },
      pauseVideo: function () {
        var e = this.$refs["customVideo_".concat(this.data.id)];
        e && e.playing && e.pauseVideo();
      },
      playVideo: function () {
        var e = this.$refs["customVideo_".concat(this.data.id)];
        e && e.playVideo();
      },
    },
  };
Array || e.resolveComponent("custom-live")();
var i = e._export_sfc(a, [
  [
    "render",
    function (t, a, i, o, n, r) {
      return {
        a: e.sr("customVideo_" + i.data.id, "c532b592-0"),
        b: "customVideo_" + i.data.id,
        c: e.o(r.handleMuteChange, 5468),
        d: e.o(r.reportPlayLive, 5469),
        e: e.o(r.reportPauseLive, 5470),
        f: e.o(r.gotoLiveDetail, 5471),
        g: e.p({
          mute: n.isMute,
          data: i.data,
          livePlayerReady: n.livePlayerReady,
        }),
      };
    },
  ],
]);
wx.createComponent(i);
