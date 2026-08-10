require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
    options: { styleIsolation: "shared" },
    emits: ["click"],
    components: {
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      positionStyle: {
        type: String,
        default: function () {
          return "top: 0px; left: 0px";
        },
      },
      direction: {
        type: Object,
        default: function () {
          return { verticle: "down", horizontal: "left" };
        },
      },
      selectedKey: { type: [String, Number], default: null },
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    methods: {
      handleClickFilterType: function (e) {
        this.$emit("click", e);
      },
    },
  };
Array || e.resolveComponent("Popup")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, i, r, l) {
      return {
        a: e.f(o.list, function (t, n, i) {
          return {
            a: e.t(t.text),
            b: e.n(o.selectedKey === t.value ? "popup-item-active" : ""),
            c: n,
            d: e.o(function (e) {
              return l.handleClickFilterType(t);
            }, n),
          };
        }),
        b: e.n(
          "down" == o.direction.verticle ? "triangle-top" : "triangle-bottom"
        ),
        c: e.n("right" == o.direction.horizontal ? "triangle-right" : ""),
        d: e.s(o.positionStyle),
        e: e.o(function (e) {
          return t.$emit("maskClick");
        }),
        f: e.p({
          show: o.visible,
          mask: !0,
          "mask-closable": !0,
          position: "top",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-dd27a11a"],
]);
wx.createComponent(n);
