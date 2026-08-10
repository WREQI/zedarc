require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = {
    components: {
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    props: { visible: { type: Boolean, required: !0 } },
    data: function () {
      return { actionSheetVisible: !1 };
    },
    watch: {
      visible: function (e) {
        this.actionSheetVisible = e;
      },
      actionSheetVisible: function (e) {
        e || this.handleClose();
      },
    },
    methods: {
      handleClose: function () {
        this.$emit("close");
      },
      handleButtonClick: function () {
        (this.actionSheetVisible = !1),
          this.$stat.click("trade.newstock-guide-btn.click"),
          this.$router.push({ name: "NewStockTips", query: { tab: "0" } });
      },
    },
  };
Array || e.resolveComponent("action-sheet")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, i, o, c, s) {
      return {
        a: e.o(function () {
          return s.handleButtonClick && s.handleButtonClick.apply(s, arguments);
        }),
        b: e.o(function (e) {
          return (c.actionSheetVisible = e);
        }),
        c: e.o(s.handleClose),
        d: e.p({
          value: c.actionSheetVisible,
          title: "打新额度说明",
          "picker-style": !0,
          "close-button": !0,
          "confirm-button": !1,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-b7a2ae1f"],
]);
wx.createComponent(n);
