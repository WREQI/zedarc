var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      item: { type: Object, require: !0, default: function () {} },
      index: { type: Number, require: !0 },
    },
    data: function () {
      return {};
    },
    computed: {},
    methods: {
      showMore: function () {
        this.$emit("resetUsr");
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, i, u) {
        return {
          a: e.t(" " + n.item.user_name + " "),
          b: e.o(function (e) {
            return u.showMore(n.item, n.index);
          }, 5329),
        };
      },
    ],
    ["__scopeId", "data-v-de6658ad"],
  ]);
wx.createComponent(r);
