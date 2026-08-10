var e = require("../../../../../../../common/vendor.js"),
  t = {
    name: "ScrollBar",
    components: {
      BaseImage: function () {
        return "../baseImage/index.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    props: {
      swiperData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      bgColor: { type: String, default: "0" },
    },
    data: function () {
      return {
        swiperOption: {
          direction: "vertical",
          grabCursor: !0,
          setWrapperSize: !0,
          loop: !0,
          mousewheelControl: !1,
          observeParents: !0,
          allowTouchMove: !1,
          speed: 1e3,
          autoplay: { disableOnInteraction: !1, delay: 2500 },
        },
      };
    },
    computed: {
      scrollColor: function () {
        var e = [
          "rgba(255, 62, 0, .1)",
          "rgba(0, 44, 255, .1)",
          "rgba(0, 104, 255, .1)",
          "rgba(0, 162, 255, .1)",
          "rgba(64, 143, 255, .1)",
          "rgba(356, 86, 95, .1)",
          "rgba(7, 39, 215, .1)",
        ];
        return e[+this.bgColor] || e[1];
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
    },
  };
Array ||
  (e.resolveComponent("BaseImage") + e.resolveComponent("swiper-slide"))();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, o, n, s, a) {
      return e.e(
        { a: !t.isMp },
        t.isMp
          ? {
              e: e.f(o.swiperData, function (t, r, o) {
                return e.e(
                  { a: /^http/.test(t.user) },
                  /^http/.test(t.user)
                    ? {
                        b: "b3555b14-2-" + o,
                        c: e.p({
                          src: t.user,
                          defaultImg:
                            "https://st.gtimg.com/design/10525daa2d7765232c6ef9580c98c364.png",
                        }),
                      }
                    : {},
                  { d: e.t(t.content), e: r }
                );
              }),
              f: a.scrollColor,
            }
          : {
              b: e.f(o.swiperData, function (t, r, o) {
                return e.e(
                  { a: /^http/.test(t.user) },
                  /^http/.test(t.user)
                    ? {
                        b: "b3555b14-1-" + o + ",b3555b14-0-" + o,
                        c: e.p({
                          src: t.user,
                          defaultImg:
                            "https://st.gtimg.com/design/10525daa2d7765232c6ef9580c98c364.png",
                        }),
                      }
                    : {},
                  { d: e.t(t.content), e: r, f: "b3555b14-0-" + o }
                );
              }),
              c: s.swiperOption,
              d: a.scrollColor,
            }
      );
    },
  ],
  ["__scopeId", "data-v-b3555b14"],
]);
wx.createComponent(r);
