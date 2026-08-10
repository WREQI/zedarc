require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      curIndex: { type: Number, default: 0 },
      tabs: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    computed: {
      isSimpleMode: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    methods: {
      clickTab: function (t) {
        this.$emit("clickTab", t);
        var r = this.tabs[t];
        e.StockBridge.report("history.".concat(r.key, "_list.brow"));
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, c, i, o) {
        return {
          a: e.f(n.tabs, function (t, r, c) {
            return {
              a: e.t(t.name),
              b: t.key,
              c: e.n(r === n.curIndex ? "active" : ""),
              d: e.o(
                function (e) {
                  return o.clickTab(r);
                },
                1642,
                t.key
              ),
            };
          }),
          b: e.n(o.isSimpleMode ? "" : "classic"),
        };
      },
    ],
    ["__scopeId", "data-v-4c819644"],
  ]);
wx.createComponent(r);
