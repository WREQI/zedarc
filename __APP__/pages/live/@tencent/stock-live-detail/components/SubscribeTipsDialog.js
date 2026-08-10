var e = require("../../../../../common/vendor.js"),
  i = null == navigator ? void 0 : navigator.userAgent,
  n = {
    name: "SubscribeTipsDialog",
    props: {
      showSubscribeDialog: Boolean,
      topPosition: Number,
      isSharePage: Boolean,
      skin: { type: String, default: "white" },
    },
    data: function () {
      return {
        isAndroid: /\bAndroid([^;]+)/.test(i),
        animClass: "",
        canShow: !1,
      };
    },
    computed: {
      sharePageClass: function () {
        return this.isSharePage ? "sharePage" : "";
      },
      closeImg: function () {
        return "black" === this.skin
          ? "https://st.gtimg.com/design/713cecd4fe884ce1d6051a46674178de.png"
          : "https://st.gtimg.com/design/cc485037abc9fd5b38e32355484ecea3.png";
      },
    },
    watch: {
      showSubscribeDialog: function (e) {
        var i = this;
        e &&
          ((this.animClass = "fade-enter-active"),
          this.$nextTick(function () {
            i.canShow = !0;
          }),
          this.$emit("report", "news.live-detail.subscribe_dialog_explore"));
      },
    },
    created: function () {},
    methods: {
      onSubscribeTipsClose: function () {
        var e = this;
        (this.animClass = "fade-leave-active"),
          setTimeout(function () {
            (e.canShow = !1), e.$emit("onSubscribeTipsClose");
          }, 400);
      },
      onConfirm: function () {
        this.$emit("report", "news.live-detail.subscribe_dialog_confirm_click"),
          this.$emit("onSubscribeTipsConfirm");
      },
      nothingHappened: function () {},
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (i, n, o, s, t, r) {
        return e.e(
          { a: o.showSubscribeDialog && t.canShow },
          o.showSubscribeDialog && t.canShow
            ? {
                b: e.n(t.isAndroid ? "android" : ""),
                c: r.closeImg,
                d: e.o(function () {
                  return (
                    r.onSubscribeTipsClose &&
                    r.onSubscribeTipsClose.apply(r, arguments)
                  );
                }, 4593),
                e: e.o(function () {
                  return (
                    r.onSubscribeTipsClose &&
                    r.onSubscribeTipsClose.apply(r, arguments)
                  );
                }, 4594),
                f: e.o(function () {
                  return r.onConfirm && r.onConfirm.apply(r, arguments);
                }, 4595),
                g: e.o(function () {
                  return (
                    r.nothingHappened && r.nothingHappened.apply(r, arguments)
                  );
                }, 4596),
                h: e.n(t.animClass),
                i: e.n(r.sharePageClass),
                j: o.topPosition + "px",
                k: e.o(function () {
                  return (
                    r.onSubscribeTipsClose &&
                    r.onSubscribeTipsClose.apply(r, arguments)
                  );
                }, 4597),
                l: e.o(function () {}, 4598),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2999252e"],
  ]);
wx.createComponent(o);
