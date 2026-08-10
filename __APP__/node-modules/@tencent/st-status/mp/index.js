require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = {
    props: {
      type: { type: String, required: !0 },
      errorType: { type: String, default: e.COMMON_PAGE_ERROR.NETWORK },
      showErrorTips: { type: Boolean, default: !0 },
      errorTips: { type: String, default: "" },
      showErrorImg: { type: Boolean, default: !0 },
      showBtn: { type: Boolean, default: !0 },
      btnText: { type: String, default: "" },
      isSimpleMode: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        COMMON_PAGE_STATUS: e.COMMON_PAGE_STATUS,
        defaultErrorTips: "网络繁忙，请稍后再试",
        fBtnText: this.btnText || "点击刷新",
      };
    },
    computed: {
      imgSrc: function () {
        var t = "https://st.gtimg.com",
          r = "".concat(t, "/design/5243fd9192489c60f7c91c5057542621.png"),
          o = "".concat(t, "/design/7432625ffd16cec84999803161211935.png"),
          n = "".concat(t, "/design/77f4b6848f0e8fecc3320ef981eafeef.png");
        return this.errorType === e.COMMON_PAGE_ERROR.NETWORK
          ? r
          : this.errorType === e.COMMON_PAGE_ERROR.SYSTEM
          ? o
          : this.errorType === e.COMMON_PAGE_ERROR.EMPTY
          ? n
          : r;
      },
    },
    methods: {
      handleBtnClick: function () {
        this.$emit("handleError");
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, o, n, p, i) {
        return e.e(
          { a: o.type },
          o.type
            ? e.e(
                { b: o.type === p.COMMON_PAGE_STATUS.LOADING },
                (o.type, p.COMMON_PAGE_STATUS.LOADING, {}),
                { c: o.type === p.COMMON_PAGE_STATUS.ERROR },
                o.type === p.COMMON_PAGE_STATUS.ERROR
                  ? e.e(
                      { d: o.showErrorImg },
                      o.showErrorImg ? { e: i.imgSrc } : {},
                      { f: o.showErrorTips },
                      o.showErrorTips
                        ? { g: e.t(o.errorTips || p.defaultErrorTips) }
                        : {},
                      { h: o.showBtn },
                      o.showBtn
                        ? {
                            i: e.t(p.fBtnText),
                            j: o.isSimpleMode ? 1 : "",
                            k: e.o(function () {
                              return (
                                i.handleBtnClick &&
                                i.handleBtnClick.apply(i, arguments)
                              );
                            }),
                          }
                        : {}
                    )
                  : {},
                { l: o.isSimpleMode ? 1 : "" }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-8c69a4c8"],
  ]);
wx.createComponent(r);
