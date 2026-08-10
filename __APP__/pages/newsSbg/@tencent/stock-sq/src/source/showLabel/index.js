var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "showLabel",
    components: {},
    props: {
      theme: { type: String, default: "" },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      showLabels: {
        type: Array,
        default: function () {
          return ["hot", "24h", "best", "1000", "100", "10"];
        },
      },
    },
    data: function () {
      return {};
    },
    computed: {
      label: function () {
        var e = this,
          t = { hot: 0, "24h": 0, best: 0, 1e3: 0, 100: 0, 10: 0 },
          a = "";
        if ((Object.keys(t).forEach(function (e) {}), this.itemData.like_num)) {
          var n = +this.itemData.like_num;
          n >= 10 && n <= 99
            ? (t[10] = 1)
            : n >= 100 && n <= 999
            ? (t[100] = 1)
            : n >= 1e3 && (t[1e3] = 1);
        }
        return (
          Object.keys(t).forEach(function (n) {
            t[n] && -1 !== e.showLabels.indexOf(n) && (a = n);
          }),
          a
        );
      },
      otherTag: function () {
        var e, t;
        return (
          (null == (e = this.itemData) ? void 0 : e.user_medal) ||
          (null == (t = this.itemData) ? void 0 : t.top_tag) ||
          []
        );
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, o, i) {
        return e.e(
          { a: i.label && !i.otherTag.length },
          i.label && !i.otherTag.length
            ? {
                b: e.n("label-".concat(i.label)),
                c: e.n("news" === n.pageType ? "theme-".concat(n.theme) : ""),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-af8a09ab"],
  ]);
wx.createComponent(a);
