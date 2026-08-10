require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../hooks/useScroll.js"),
  r = require("../../../../../../common/vendor.js"),
  n = {
    props: {
      brokerList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, default: 0 },
    },
    setup: function () {
      var n = r.computed(function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      });
      return { hoverTrade: e.useScroll().hoverTrade, isSimpleMode: n };
    },
    computed: {
      isScrollType: function () {
        return this.brokerList.length > 3;
      },
    },
    methods: {
      handleClick: function (e) {
        this.$emit("click", e);
      },
    },
  },
  t = r._export_sfc(n, [
    [
      "render",
      function (e, n, t, o, u, c) {
        return {
          a: r.f(t.brokerList, function (e, n, u) {
            return r.e(
              { a: r.t(e.name), b: e.unreadNum },
              e.unreadNum ? { c: r.t(e.unreadNum) } : {},
              {
                d: e.code,
                e: r.n(
                  t.curIndex === n
                    ? "active" + (o.isSimpleMode ? "" : "-pro")
                    : ""
                ),
                f: r.o(
                  function (r) {
                    return c.handleClick(e, n);
                  },
                  2348,
                  e.code
                ),
              }
            );
          }),
          b: r.n(o.hoverTrade ? "hover" : ""),
          c: r.n(c.isScrollType ? "scroll-type" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-a0234076"],
  ]);
wx.createComponent(t);
