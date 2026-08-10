var e = require("../../../../../../../common/vendor.js"),
  t = {
    props: {
      showAdv: { type: Boolean, default: !0 },
      type: { type: String, default: "" },
      close: { type: Boolean, default: !0 },
      sideLeft: { type: Boolean, default: !1 },
      size: { type: String, default: "" },
      advInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        initBgUrl:
          "https://st.gtimg.com/design/0011f8d48d9cffdb0a93e3843eaab8c9.png",
        sideLeftStart: !1,
        visible: !0,
      };
    },
    created: function () {
      this.$emit("show");
    },
    methods: {
      loadImage: function () {
        var e = this;
        setTimeout(function () {
          e.sideLeft && (e.sideLeftStart = !0);
        }, 500);
      },
      handleCloseAdv: function () {
        (this.visible = !1), this.$emit("close");
      },
      handleClickBg: function () {
        this.advInfo.btn_pic || this.$emit("click");
      },
      handleClickBtn: function () {
        this.$emit("click");
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, o, a, d) {
        return e.e(
          { a: i.showAdv && a.visible },
          i.showAdv && a.visible
            ? e.e(
                {
                  b: i.advInfo.imgurl ? i.advInfo.imgurl : a.initBgUrl,
                  c: e.o(function () {
                    return d.loadImage && d.loadImage.apply(d, arguments);
                  }, 3819),
                  d: e.o(function () {
                    return (
                      d.handleClickBg && d.handleClickBg.apply(d, arguments)
                    );
                  }, 3820),
                  e: i.advInfo.btn_pic,
                },
                i.advInfo.btn_pic
                  ? {
                      f: i.advInfo.btn_pic,
                      g: e.o(function () {
                        return (
                          d.handleClickBtn &&
                          d.handleClickBtn.apply(d, arguments)
                        );
                      }, 3821),
                    }
                  : {},
                { h: i.close },
                i.close
                  ? {
                      i: e.o(function () {
                        return (
                          d.handleCloseAdv &&
                          d.handleCloseAdv.apply(d, arguments)
                        );
                      }, 3822),
                    }
                  : {},
                {
                  j: e.n("adv-".concat(i.type)),
                  k: e.n(i.sideLeft ? "side-left" : ""),
                  l: e.n(
                    i.sideLeft && a.sideLeftStart ? "side-left-animation" : ""
                  ),
                  m: e.n("yy-adv-".concat(i.size)),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-168d42c3"],
  ]);
wx.createComponent(n);
