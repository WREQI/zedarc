var t = require("../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    props: {
      tabs: {
        type: Array,
        require: !0,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, require: !1, default: 0 },
      skin: String,
    },
    data: function () {
      return { halfClientWidth: 0 };
    },
    computed: {},
    created: function () {},
    mounted: function () {
      "mp" !== this.hqBridge.ENV &&
        (this.halfClientWidth = document.documentElement.clientWidth / 2);
    },
    methods: {
      changeTab: function (t) {
        if ((this.$emit("onChange", t), this.halfClientWidth)) {
          var e = document.getElementById("tab-scroll"),
            n =
              document.getElementById("tab-item-".concat(t)).offsetLeft -
              this.halfClientWidth;
          e.scrollLeft = n;
        }
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, c, r, a) {
        return {
          a: t.f(i.tabs, function (e, n, c) {
            return {
              a: t.t(e.title),
              b: "tab-item-".concat(n),
              c: t.n(n === i.curIndex && "choose"),
              d: n,
              e: t.o(
                function (t) {
                  return a.changeTab(n);
                },
                2235,
                n
              ),
            };
          }),
          b: t.n("black" === i.skin ? "tab-item-black" : "tab-item"),
        };
      },
    ],
    ["__scopeId", "data-v-bfcd88f0"],
  ]);
wx.createComponent(n);
