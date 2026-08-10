var t = require("../../../../stock-news-core/utils/tools.js"),
  n = require("../../../../../../../common/vendor.js"),
  o = {
    components: {
      StActionSheet: function () {
        return "../../../../../../asyncCom/@tencent/stock-ui/mp/action-sheet/index.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      canShow: { type: Boolean, default: !1 },
      tips: { type: String, default: "" },
    },
    data: function () {
      return {
        isShow: this.canShow,
        expand: !1,
        summary: [],
        contentHeight: "auto",
      };
    },
    watch: {
      isShow: function (t) {
        t || this.$emit("onHide");
      },
    },
    computed: {
      isSharePage: function () {
        return !!t.isShare(this.$route);
      },
    },
    created: function () {},
    methods: {
      onCloseBtn: function () {
        this.$emit("onHide");
      },
      onConfirmBtnClick: function () {
        this.$emit("onHide");
      },
    },
  };
Array || n.resolveComponent("st-action-sheet")();
var e = n._export_sfc(o, [
  [
    "render",
    function (t, o, e, i, r, s) {
      return {
        a: n.o(function () {
          return s.onCloseBtn && s.onCloseBtn.apply(s, arguments);
        }, 5387),
        b: n.t(e.tips),
        c: n.o(function () {
          return s.onConfirmBtnClick && s.onConfirmBtnClick.apply(s, arguments);
        }, 5388),
        d: n.o(function (t) {
          return (r.isShow = t);
        }, 5389),
        e: n.p({ value: r.isShow, "picker-style": !0 }),
      };
    },
  ],
  ["__scopeId", "data-v-da867a29"],
]);
wx.createComponent(e);
