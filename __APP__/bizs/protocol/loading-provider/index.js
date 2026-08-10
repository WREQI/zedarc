require("../../../app.js");
var o = require("./enum.js"),
  t = require("../../../common/vendor.js"),
  r = {
    components: {
      Loading: function () {
        return "../../../common/components/Loading/index.js";
      },
    },
    provide: function () {
      return {
        changeProtocolStatus: this.changeProtocolStatus,
        setErrorMessage: this.setErrorMessage,
      };
    },
    props: { isShowLoading: { type: Boolean, default: !0 } },
    data: function () {
      return {
        PROTOCOL_STATUS: o.PROTOCOL_STATUS,
        protocolStatus: o.PROTOCOL_STATUS.LOADING,
        errMsg: "网络繁忙 请稍后再试",
      };
    },
    methods: {
      changeProtocolStatus: function (o) {
        this.protocolStatus = o;
      },
      setErrorMessage: function (o) {
        this.errMsg = o;
      },
    },
  };
Array || t.resolveComponent("Loading")();
var e = t._export_sfc(r, [
  [
    "render",
    function (o, r, e, s, S, n) {
      return t.e(
        { a: S.protocolStatus !== S.PROTOCOL_STATUS.SUCCESS },
        S.protocolStatus !== S.PROTOCOL_STATUS.SUCCESS
          ? t.e(
              {
                b:
                  e.isShowLoading &&
                  S.protocolStatus === S.PROTOCOL_STATUS.LOADING,
              },
              e.isShowLoading && S.protocolStatus === S.PROTOCOL_STATUS.LOADING
                ? { c: t.p({ size: "46rpx" }) }
                : {},
              { d: S.protocolStatus === S.PROTOCOL_STATUS.FAIL },
              S.protocolStatus === S.PROTOCOL_STATUS.FAIL
                ? { e: t.t(S.errMsg) }
                : {}
            )
          : {},
        {
          f: t.s(
            S.protocolStatus !== S.PROTOCOL_STATUS.SUCCESS
              ? "visibility:hidden;"
              : ""
          ),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d47d2072"],
]);
wx.createComponent(e);
