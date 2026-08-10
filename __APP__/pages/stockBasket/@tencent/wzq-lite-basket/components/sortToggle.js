require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = [0, -1, 1],
  r = function (t) {
    var r = e.indexOf(t);
    return e[(r + 1) % e.length];
  },
  i = {
    name: "SortToggle",
    props: {
      orderBy: { type: String, default: "" },
      fieldData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      order: { type: Number, default: 0 },
      isMultiMarket: { type: Boolean, default: !1 },
    },
    computed: {
      asc: function () {
        return this.isActivated && 1 === this.order;
      },
      desc: function () {
        return this.isActivated && -1 === this.order;
      },
      isShowSortToggle: function () {
        var t = this.fieldData.type;
        return !this.isMultiMarket && ["float", "int"].includes(t);
      },
      isActivated: function () {
        return this.orderBy === this.fieldData.key && 0 !== this.order;
      },
    },
    methods: {
      switchOrder: function () {
        !this.isMultiMarket &&
          this.isShowSortToggle &&
          this.$emit("sort", {
            orderBy: this.fieldData.key,
            order: r(this.order),
          });
      },
    },
  },
  o = t._export_sfc(i, [
    [
      "render",
      function (e, r, i, o, n, s) {
        return t.e(
          {
            a: t.t(i.fieldData.name),
            b: t.n(s.isActivated ? "activated" : ""),
            c: i.fieldData.titleFontSize + "px",
            d: s.isShowSortToggle,
          },
          s.isShowSortToggle ? { e: s.asc ? 1 : "", f: s.desc ? 1 : "" } : {},
          {
            g: t.o(function () {
              return s.switchOrder && s.switchOrder.apply(s, arguments);
            }, 4049),
          }
        );
      },
    ],
    ["__scopeId", "data-v-15c72add"],
  ]);
wx.createComponent(o);
