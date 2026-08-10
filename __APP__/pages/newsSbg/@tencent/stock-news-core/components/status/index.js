var t = require("config.js"),
  e = require("../../../../../../common/vendor.js"),
  T = {
    name: "NewsStatus",
    props: {
      type: { type: String, default: "" },
      tips: { type: String, default: "" },
      img: { type: String, default: "" },
    },
    data: function () {
      return {
        NEWS_STATUS_TYPE: t.NEWS_STATUS_TYPE,
        networkImg:
          "https://st.gtimg.com/design/5243fd9192489c60f7c91c5057542621.png",
      };
    },
    computed: {
      tipsText: function () {
        return this.tips || t.NEWS_STATUS_TEXT[this.type] || "";
      },
      errorImgModifier: function () {
        return this.type === t.NEWS_STATUS_TYPE.ERROR_DELETED
          ? "news-status__error-img--deleted"
          : this.type === t.NEWS_STATUS_TYPE.ERROR_RESTRICTED
          ? "news-status__error-img--restricted"
          : "";
      },
    },
    methods: {
      handleClick: function () {
        this.type !== t.NEWS_STATUS_TYPE.LOADING && this.$emit("retry");
      },
    },
  },
  E = e._export_sfc(T, [
    [
      "render",
      function (t, T, E, S, r, _) {
        return e.e(
          { a: E.type },
          E.type
            ? e.e(
                { b: E.type === r.NEWS_STATUS_TYPE.LOADING },
                E.type === r.NEWS_STATUS_TYPE.LOADING
                  ? {}
                  : E.type === r.NEWS_STATUS_TYPE.ERROR_NETWORK
                  ? { d: r.networkImg, e: e.t(_.tipsText) }
                  : E.type === r.NEWS_STATUS_TYPE.ERROR_DELETED ||
                    E.type === r.NEWS_STATUS_TYPE.ERROR_RESTRICTED
                  ? e.e(
                      { g: E.img },
                      E.img ? { h: E.img } : { i: e.n(_.errorImgModifier) },
                      { j: e.t(_.tipsText) }
                    )
                  : {},
                {
                  c: E.type === r.NEWS_STATUS_TYPE.ERROR_NETWORK,
                  f:
                    E.type === r.NEWS_STATUS_TYPE.ERROR_DELETED ||
                    E.type === r.NEWS_STATUS_TYPE.ERROR_RESTRICTED,
                  k: e.o(function () {
                    return _.handleClick && _.handleClick.apply(_, arguments);
                  }, 3025),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6f4ca8ec"],
  ]);
wx.createComponent(E);
