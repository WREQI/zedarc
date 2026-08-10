var t = require("../../../../../../../common/vendor.js"),
  e = {
    components: {
      PlateBlock: function () {
        return "../../common/plate/PlateBlockOne.js";
      },
      PlateTitle: function () {
        return "../../common/stock-card/TitleBlock.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      titleOptions: { type: Object, default: function () {} },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      plateId: { type: String, default: "" },
      source: { type: String, default: "" },
    },
    data: function () {
      return {};
    },
    methods: {
      chunk: t.chunk,
      switchToPlate: function () {
        this.$emit("switchToPlate"),
          this.hqBridge.report("hq.choose_hq.hstab.view_more_board_dynamics");
      },
      gotoDetail: function (t, e, o) {
        var n = this,
          a = t.code,
          i = t.name;
        setTimeout(function () {
          n.hqBridge.routeTo({
            path: "/plate/".concat(o, "/detail"),
            query: {
              plateId: a,
              detailTitle: "".concat(i, "(").concat(a, ")"),
            },
          });
        }, 10),
          this.hqBridge.report("hq.choose_hq.hstab.hot_plate_module_click", {
            position: e,
            stockid: a,
          });
      },
    },
  };
Array ||
  (t.resolveComponent("plate-title") + t.resolveComponent("plate-block"))();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, a, i, c) {
      return {
        a: t.o(c.switchToPlate, 4964),
        b: t.p({ "title-options": n.titleOptions }),
        c: t.f(c.chunk(n.data, 3), function (e, o, a) {
          return {
            a: t.f(e, function (e, o, i) {
              return {
                a: o,
                b: t.o(c.gotoDetail, 4965, o),
                c: "58d8a1b9-1-" + a + "-" + i,
                d: t.p({
                  position: o + 1,
                  data: e,
                  "plate-id": n.plateId,
                  source: n.source,
                }),
              };
            }),
            b: o,
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-58d8a1b9"],
]);
wx.createComponent(o);
