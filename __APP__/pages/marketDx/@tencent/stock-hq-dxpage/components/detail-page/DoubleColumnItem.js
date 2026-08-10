var e = require("../../../../../../common/vendor.js"),
  t = {
    components: {
      SpanItem: function () {
        return "./SpanItem.js";
      },
    },
    data: function () {
      return {
        direction: "container-horizontal",
        valueClass: "right-span-horizontal",
      };
    },
    props: { item: { type: Object, require: !1, default: function () {} } },
    methods: {
      showTeachPop: function (e) {
        var t = e && e.tipType;
        this.$emit("showTeachPop", t);
      },
    },
  };
Array || e.resolveComponent("SpanItem")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, r, i, a) {
      return {
        a: e.o(function (e) {
          return a.showTeachPop(n.item.leftcolum);
        }, 3907),
        b: e.p({
          type: "doubleColumn",
          direction: i.direction,
          item: n.item.leftcolum,
          valueClass: i.valueClass,
        }),
        c: e.o(function (e) {
          return a.showTeachPop(n.item.rightcolum);
        }, 3908),
        d: e.p({
          type: "doubleColumn",
          direction: i.direction,
          item: n.item.rightcolum,
          valueClass: i.valueClass,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-7382ff5e"],
]);
wx.createComponent(o);
