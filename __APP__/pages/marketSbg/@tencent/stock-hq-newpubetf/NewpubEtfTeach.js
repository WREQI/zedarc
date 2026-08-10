var t = require("../../../../common/vendor.js"),
  e = {
    inject: { hqBridge: { default: function () {} } },
    props: {
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { from: "" };
    },
    computed: {
      isMp: function () {
        return t.StockBridge.ENV === t.EnvTypeEnum.MP;
      },
      getQueryData: function () {
        var t;
        return this.isMp
          ? this.queryData
          : null == (t = this.$route)
          ? void 0
          : t.query;
      },
    },
    activated: function () {
      var t = this,
        e = (this.getQueryData || {}).type,
        o = void 0 === e ? "" : e;
      this.scrollToTop(),
        this.$nextTick(function () {
          t.scrollTo(+o);
        });
    },
    onPageShow: function () {
      var t = this,
        e = (this.getQueryData || {}).type,
        o = void 0 === e ? "" : e;
      this.scrollToTop(),
        this.$nextTick(function () {
          t.scrollTo(+o);
        });
    },
    mounted: function () {
      var t = this.getQueryData || {},
        e = t.from,
        o = void 0 === e ? "" : e;
      t.type;
      (this.from = o), this.setShare(), this.setTitle();
    },
    methods: {
      setTitle: function () {
        var t, e;
        null == (e = null == (t = this.hqBridge) ? void 0 : t.setTitle) ||
          e.call(t, "认购攻略");
      },
      setShare: function () {},
      scrollToTop: function () {
        this.isMp && t.wx$1.pageScrollTo({ scrollTop: 0, duration: 300 });
      },
      scrollTo: function (e) {
        var o = ["", "one", "two", "three"][e];
        o &&
          this.$refs[o] &&
          this.isMp &&
          t.wx$1
            .createSelectorQuery()
            .in(this)
            .select(".teach-title-s-".concat(o))
            .boundingClientRect()
            .exec(function (e) {
              (null == e ? void 0 : e[0]) &&
                t.wx$1.pageScrollTo({ scrollTop: e[0].top, duration: 300 });
            });
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (t, e, o, i, n, r) {
        return {
          a:
            "mini" === n.from
              ? "https://st.gtimg.com/design/eb179d45e557c8492260f0cf7c7762f4.webp"
              : "https://st.gtimg.com/design/02171816e0403899017e396aa8a53e80.png",
        };
      },
    ],
    ["__scopeId", "data-v-5c149618"],
  ]);
wx.createComponent(o);
