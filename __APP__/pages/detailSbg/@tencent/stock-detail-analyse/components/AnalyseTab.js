var t = require("../../../../../common/vendor.js"),
  e = {
    props: ["tabValue"],
    data: function () {
      return {
        halfClientWidth: 0,
        curIndex: 0,
        tabs: [
          { title: "总览", value: "overview" },
          { title: "技术", value: "technical" },
          { title: "资金", value: "capital" },
          { title: "市场观点", value: "opinion" },
          { title: "基本面", value: "fundamental" },
        ],
      };
    },
    computed: {},
    created: function () {},
    mounted: function () {
      "mp" !== t.StockBridge.ENV &&
        (this.halfClientWidth = document.documentElement.clientWidth / 2);
    },
    methods: {
      changeTab: function (t, e) {
        if (
          (this.$emit("onChange", e), (this.curIndex = t), this.halfClientWidth)
        ) {
          var n = document.getElementById("tab-scroll"),
            a =
              document.getElementById("tab-item-".concat(t)).offsetLeft -
              this.halfClientWidth;
          n.scrollLeft = a;
        }
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, a, i, c, o) {
        return {
          a: t.f(c.tabs, function (e, n, i) {
            return {
              a: t.t(e.title),
              b: "tab-item-".concat(n),
              c: t.n(e.value === a.tabValue && "choose"),
              d: n,
              e: t.o(
                function (t) {
                  return o.changeTab(n, e.value);
                },
                3225,
                n
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-af4ba32f"],
  ]);
wx.createComponent(n);
