var t = require("../../../../stock-community-base/utils/knife.js"),
  e = require("../../../../../../../common/vendor.js"),
  o = {
    name: "noData",
    options: { styleIsolation: "shared" },
    components: {
      instructions: function () {
        return "../instructions/index.js";
      },
    },
    data: function () {
      return {};
    },
    props: {
      text: { default: "别观望，加入评论" },
      jumpText: { default: "" },
      showTip: { type: Boolean, default: !0 },
      useBlack: { default: !0 },
      pageType: { type: String, default: "" },
      showJump: { type: Boolean, default: !1 },
      showGoIcon: { type: Boolean, default: !0 },
      isShowInstructions: { type: Boolean, default: !0 },
      isBlack: { default: "" },
    },
    computed: {
      isShowIns: function () {
        return (
          "wzq" === t.platform &&
          "detail" === this.pageType &&
          this.isShowInstructions
        );
      },
    },
    methods: {
      handleJumpTip: function () {
        var e;
        "wzq" === t.platform &&
          "detail" === this.pageType &&
          (null == (e = this.$refs.myInput) || e.focus()),
          this.$emit("tapJumpTip");
      },
      handleTapProtocol: function (t, e) {
        this.$emit("tapProtocol", { eventName: t, eventData: e });
      },
    },
    created: function () {},
    mounted: function () {},
    watch: {},
  };
Array || e.resolveComponent("instructions")();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, a, i, s) {
      return e.e(
        { a: n.isBlack },
        n.isBlack
          ? {
              b: e.t(
                1 == n.isBlack
                  ? "该用户已被拉黑，此处内容不显示"
                  : "根据对方设置，此处内容不显示"
              ),
            }
          : e.e(
              { c: n.showTip },
              n.showTip ? { d: e.t(n.text) } : {},
              { e: n.showJump },
              n.showJump
                ? e.e(
                    { f: e.t(n.jumpText), g: n.showGoIcon },
                    n.showGoIcon
                      ? { h: e.n("detail" === n.pageType ? "editor" : "img") }
                      : {},
                    {
                      i: e.n("detail" === n.pageType ? "blue" : ""),
                      j: e.o(function () {
                        return (
                          s.handleJumpTip && s.handleJumpTip.apply(s, arguments)
                        );
                      }, 3133),
                    }
                  )
                : {}
            ),
        { k: e.n(n.useBlack ? "enableBlack" : "disableBlack"), l: s.isShowIns },
        s.isShowIns
          ? {
              m: e.o(function (t) {
                return s.handleTapProtocol("tapProtocol", t);
              }, 3134),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8ba1bbac"],
]);
wx.createComponent(n);
