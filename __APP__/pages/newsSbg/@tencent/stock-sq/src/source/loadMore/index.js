var t = require("../../../../../../../common/vendor.js"),
  e = require("../../../../stock-community-base/utils/knife.js"),
  o = {
    name: "loadMore",
    options: { styleIsolation: "shared" },
    components: {
      instructions: function () {
        return "../instructions/index.js";
      },
    },
    props: {
      nomore: { default: !1 },
      noNetwork: { default: !1 },
      noMoreText: { default: "已经到底了，触底反弹否极泰来" },
      loadText: { default: "加载中..." },
      pageType: { type: String, default: "" },
      isShowInstructions: { type: Boolean, default: !0 },
      tabType: { type: String, default: "" },
      currentType: { type: String, default: "" },
    },
    data: function () {
      return { isRefreshing: !1, scrollTop: 0 };
    },
    computed: {
      isShowIns: function () {
        return (
          this.nomore &&
          "wzq" === e.platform &&
          "detail" === this.pageType &&
          this.isShowInstructions
        );
      },
    },
    methods: {
      bindTouchMove: function () {
        if (this.tabType === this.currentType) {
          if (this.scrollTop < 0) this.isRefreshing = !0;
          else {
            if (((this.isRefreshing = !1), !this.$refs.loadText)) return;
            this.$refs.loadText.getBoundingClientRect().top <=
              (
                (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
                t.wx$1.getSystemInfoSync()
              ).windowHeight &&
              !this.nomore &&
              this.$emit("doLoadmore");
          }
        }
      },
      addEvent: function () {},
      removeEvent: function () {},
      handleTapProtocol: function (t, e) {
        this.$emit("tapProtocol", { eventName: t, eventData: e });
      },
    },
    onPageScroll: function (t) {
      (this.scrollTop = t.scrollTop), this.bindTouchMove();
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
  };
Array || t.resolveComponent("instructions")();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, i, r, s) {
      return t.e(
        { a: n.noNetwork },
        (n.noNetwork, {}),
        { b: !n.noNetwork },
        n.noNetwork ? {} : { c: t.t(n.nomore ? n.noMoreText : n.loadText) },
        { d: t.n(n.nomore ? "nomore" : ""), e: s.isShowIns },
        s.isShowIns
          ? {
              f: t.o(function (t) {
                return s.handleTapProtocol("tapProtocol", t);
              }, 3106),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-6459512f"],
]);
wx.createComponent(n);
