var e = require("../../../../../common/vendor.js"),
  i = {
    props: {
      isCarouselType: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
      platform: { type: String, default: "lite" },
      isLite: { type: Boolean, default: !0 },
      showList: { type: Array, require: !0 },
    },
    components: {
      BarSwiper: function () {
        return "./bulletinBarSwiper/mp.js";
      },
    },
    data: function () {
      return { visible: !0, curIndex: 0 };
    },
    methods: {
      closeHandle: function () {
        (this.visible = !1), this.$emit("close", this.curIndex);
      },
      clickHandle: function (e) {
        this.$emit("click", e || 0);
      },
      changeHandle: function (e) {
        this.curIndex = e;
      },
    },
  };
Array || e.resolveComponent("bar-swiper")();
var t = e._export_sfc(i, [
  [
    "render",
    function (i, t, n, s, o, r) {
      return e.e(
        { a: o.visible },
        o.visible
          ? e.e(
              { b: !n.isCarouselType },
              n.isCarouselType
                ? {
                    f: e.o(r.clickHandle, 2418),
                    g: e.o(r.changeHandle, 2419),
                    h: e.p({
                      skin: n.skin,
                      list: n.showList,
                      isLite: n.isLite,
                    }),
                  }
                : e.e(
                    {
                      c: e.t(n.showList[0] && n.showList[0].text),
                      d: n.showList[0].icon,
                    },
                    (n.showList[0].icon, {}),
                    {
                      e: e.o(function (e) {
                        return r.clickHandle(0);
                      }, 2417),
                    }
                  ),
              {
                i: e.o(function () {
                  return r.closeHandle && r.closeHandle.apply(r, arguments);
                }, 2420),
                j: e.n(n.isLite ? "" : "blue"),
                k: n.skin,
              }
            )
          : {},
        {
          l: e.n("black" === n.skin ? "black" : ""),
          m: e.n(n.isLite ? "lite" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-225b95c8"],
]);
wx.createComponent(t);
