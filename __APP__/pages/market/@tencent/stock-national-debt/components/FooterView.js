var t = require("../../../../../common/vendor.js"),
  e = {
    inject: { hqBridge: { default: {} }, stockBridge: { default: null } },
    props: { theme: { type: String, default: "white" } },
    data: function () {
      return {
        mIsExpanded: !0,
        width: 0,
        height: 0,
        bottomSrc:
          "https://st.gtimg.com/design/ca51ffa9193d8a07c245b067ac5c0f06.png",
        bottomSrcBlack:
          "https://st.gtimg.com/design/c404edad25040ceb65b0af199a411574.png",
        btnShow: !1,
      };
    },
    computed: {
      getFooterBanner: function () {
        return "black" === this.theme ? this.bottomSrcBlack : this.bottomSrc;
      },
    },
    methods: {
      onMoreClick: function () {
        (this.mIsExpanded = !this.mIsExpanded),
          this.hqBridge.report("hq.nationaldebtbuy.teach_more_btn_click");
      },
    },
    mounted: function () {
      var t,
        e = this;
      if (this.hqBridge && "mp" !== this.hqBridge.ENV) {
        var n = this.$route.query;
        "advcheck" === (null == n ? void 0 : n.tf_channel) &&
          ((this.bottomSrc =
            "https://st.gtimg.com/design/733eb9f3acf061564f1185ed1bfbf897.png"),
          null == (t = this.hqBridge) ||
            t.busOn("market-debt-bottom-btn-show", function (t) {
              e.btnShow = t;
            }));
      }
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, r, i, d) {
        return {
          a: t.n(i.mIsExpanded ? "arrow-up" : "arrow-down"),
          b: t.o(function () {
            return d.onMoreClick && d.onMoreClick.apply(d, arguments);
          }, 2196),
          c: d.getFooterBanner,
          d: i.mIsExpanded,
          e: t.n(i.btnShow ? "has-btn" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-d38d20ed"],
  ]);
wx.createComponent(n);
