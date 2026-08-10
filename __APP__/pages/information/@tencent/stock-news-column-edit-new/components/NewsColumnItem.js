var e = require("../../../../../common/vendor.js"),
  t = {
    props: { item: Object },
    mounted: function () {
      var t = this;
      e.index
        .createSelectorQuery()
        .in(this)
        .select(".news-column-item")
        .boundingClientRect(function (e) {
          t.$emit("setSize", e.width, e.height);
        })
        .exec();
    },
    methods: {
      fnBtnClick: function () {
        0 === this.item.isConst && this.$emit("fnBtnClick", this.item);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, c, s, o) {
        return {
          a: e.t(i.item.name),
          b: e.n(0 === i.item.isConst ? "can-drag" : ""),
          c: 0 === i.item.isConst || 0 === i.item.isSelected,
          d: e.n(
            i.item.isSelected
              ? "news-column-item-btn-select"
              : "news-column-item-btn-unSelect"
          ),
          e: e.o(function () {
            return o.fnBtnClick && o.fnBtnClick.apply(o, arguments);
          }, 1645),
        };
      },
    ],
    ["__scopeId", "data-v-5cb865b2"],
  ]);
wx.createComponent(n);
