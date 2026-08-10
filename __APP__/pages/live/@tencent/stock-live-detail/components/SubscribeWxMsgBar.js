var e = require("../../../../../common/vendor.js"),
  t = {}.IS_ZXG,
  s = {
    components: {
      LiveCommonBar: function () {
        return "./LiveCommonBar.js";
      },
    },
    props: {
      hasSubscribed: { type: Boolean, default: !1 },
      showSubscribe: { type: Boolean, default: !0 },
      theme: { type: String, default: "blue" },
    },
    data: function () {
      return { isAPP: t };
    },
    created: function () {
      this.$emit("explore");
    },
    computed: {
      subscribeEntry: function () {
        return !this.hasSubscribed && !this.isAPP && this.showSubscribe;
      },
    },
    methods: {
      onSubscribe: function () {
        this.$emit(
          "onSubscribe",
          this.subscribeEntry ? "subscribe" : "moreLive"
        );
      },
      closeSubscribe: function () {
        this.$emit("closeSubscribeBar");
      },
    },
  };
Array || e.resolveComponent("LiveCommonBar")();
var i = e._export_sfc(s, [
  [
    "render",
    function (t, s, i, r, o, n) {
      return {
        a: e.o(n.onSubscribe, 4499),
        b: e.o(n.closeSubscribe, 4500),
        c: e.p({
          logo: "https://st.gtimg.com/design/55b82a6a8f93cc2d498b85213d509d37.png",
          bubbleWhite:
            "https://st.gtimg.com/design/22d956f8297a2903b023344a32a4665d.png",
          bubbleBlack:
            "https://st.gtimg.com/design/0ed204b77c8c41928a333e1da2a008bf.png",
          tipsText: n.subscribeEntry
            ? "最新直播微信通知不错过"
            : "您可预约更多直播场次",
          buttonText: n.subscribeEntry ? "立即订阅" : "预约更多",
          theme: i.theme,
          bubbleMargin: -3,
        }),
      };
    },
  ],
]);
wx.createComponent(i);
