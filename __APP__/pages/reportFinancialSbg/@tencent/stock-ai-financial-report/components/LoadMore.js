var e = require("../../../../../common/vendor.js"),
  t = {
    name: "loadMore",
    options: { styleIsolation: "shared" },
    props: {
      nomore: { default: !1 },
      noNetwork: { default: !1 },
      noMoreText: { default: "已经到底了，触底反弹否极泰来" },
      loadText: { default: "加载中..." },
      pageType: { type: String, default: "" },
      tabType: { type: String, default: "" },
      currentType: { type: String, default: "" },
    },
    data: function () {
      return { isRefreshing: !1 };
    },
    methods: {
      bindTouchMove: function () {
        if (this.tabType === this.currentType)
          if (
            (document.documentElement.scrollTop || document.body.scrollTop) < 0
          )
            this.isRefreshing = !0;
          else {
            if (((this.isRefreshing = !1), !this.$refs.loadText)) return;
            this.$refs.loadText.getBoundingClientRect().top <=
              (document.documentElement.clientHeight ||
                document.body.clientHeight) &&
              !this.nomore &&
              this.$emit("doLoadmore");
          }
      },
      addEvent: function () {
        null == window ||
          window.addEventListener("touchstart", this.bindTouchMove, !0),
          null == window ||
            window.addEventListener("touchmove", this.bindTouchMove, !0),
          null == window ||
            window.addEventListener("scroll", this.bindTouchMove, !0);
      },
      removeEvent: function () {
        null == window ||
          window.removeEventListener("touchstart", this.bindTouchMove, !0),
          null == window ||
            window.removeEventListener("touchmove", this.bindTouchMove, !0),
          null == window ||
            window.removeEventListener("scroll", this.bindTouchMove, !0);
      },
      handleTapProtocol: function (e, t) {
        this.$emit("tapProtocol", { eventName: e, eventData: t });
      },
    },
    mounted: function () {
      this.addEvent();
    },
    beforeDestroy: function () {
      this.removeEvent();
    },
    activated: function () {
      this.addEvent();
    },
    deactivated: function () {
      this.removeEvent();
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, i, d, r) {
        return e.e(
          { a: n.noNetwork },
          (n.noNetwork, {}),
          { b: !n.noNetwork },
          n.noNetwork ? {} : { c: e.t(n.nomore ? n.noMoreText : n.loadText) },
          { d: e.n(n.nomore ? "nomore" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-a00b410f"],
  ]);
wx.createComponent(o);
