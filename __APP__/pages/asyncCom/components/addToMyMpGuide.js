var e = require("../../../common/vendor.js"),
  t = require("../../../assets/image/close.js"),
  i = {
    props: {
      visible: { type: Boolean, default: !1 },
      guideConfigurable: !1,
      guideText: {},
      adinfo: {},
    },
    data: function () {
      return { GestureImg: t.GestureImg, left: 0 };
    },
    mounted: function () {
      var t = e.wx$1.getMenuButtonBoundingClientRect(),
        i = t.left,
        o = t.width;
      this.left = i + o / 4;
    },
    methods: {
      onClose: function () {
        if (this.guideConfigurable) {
          var t = this.adinfo,
            i = t.report_info,
            o = t.adid;
          e.Request.reportMTAData({
            eventName: "base.global.mpguide_close",
            report_info: i,
            adid: o,
          });
        }
        this.$emit("closeAddToMyMiniAppGuide");
      },
      floatlayerClick: function () {
        var t = this.adinfo,
          i = t.report_info,
          o = t.adid;
        e.Request.reportMTAData({
          eventName: "base.global.mpguide_click",
          report_info: i,
          adid: o,
        });
      },
    },
  },
  o = e._export_sfc(i, [
    [
      "render",
      function (t, i, o, n, r, a) {
        return e.e(
          { a: o.visible },
          o.visible
            ? e.e(
                { b: o.guideConfigurable },
                o.guideConfigurable
                  ? {
                      c: e.t(o.guideText),
                      d: e.o(function () {
                        return (
                          a.floatlayerClick &&
                          a.floatlayerClick.apply(a, arguments)
                        );
                      }, 2120),
                    }
                  : {},
                {
                  e: r.GestureImg,
                  f: e.o(function () {
                    return a.onClose && a.onClose.apply(a, arguments);
                  }, 2121),
                  g: r.left + "px",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-7c461af2"],
  ]);
wx.createComponent(o);
