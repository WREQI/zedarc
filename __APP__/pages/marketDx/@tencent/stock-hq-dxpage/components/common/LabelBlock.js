var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: { hqBridge: {}, statusBarHeight: { default: 0 } },
    props: {
      labelList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      labelTab: { type: Number, default: 0 },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      switchLabel: function (e) {
        this.labelTab !== e && this.$emit("updateLabelTab", e);
      },
    },
  },
  a = e._export_sfc(t, [
    [
      "render",
      function (t, a, n, r, i, l) {
        return {
          a: e.f(n.labelList, function (t, a, r) {
            return {
              a: e.t(t),
              b: a,
              c: e.n(n.labelTab === a ? "active-label" : ""),
              d: e.o(
                function (e) {
                  return l.switchLabel(a);
                },
                3815,
                a
              ),
            };
          }),
          b: e.n(l.isMp ? "label-item-wrapper-mp" : ""),
          c: e.n(l.isMp ? "label-container-mp" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-d0e33c97"],
  ]);
wx.createComponent(a);
