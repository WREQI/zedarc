var e = require("../utils/envUtils.js"),
  n = require("../../../../../common/vendor.js"),
  r = {
    name: "QuestionItem",
    components: {
      LongPressContainer: function () {
        return "./longpress/mp.js";
      },
    },
    props: { keyWord: { required: !0, type: String } },
    data: function () {
      return { isMP: !0, isLight: e.IS_LITE_MODE };
    },
    methods: {
      longPress: function () {
        this.$emit("longPress");
      },
    },
  };
Array || n.resolveComponent("long-press-container")();
var t = n._export_sfc(r, [
  [
    "render",
    function (e, r, t, o, s, i) {
      return {
        a: n.t(t.keyWord),
        b: n.o(i.longPress, 3803),
        c: n.n(s.isLight ? "light" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-f414161e"],
]);
wx.createComponent(t);
