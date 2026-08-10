var t = require("../../../@babel/runtime/helpers/defineProperty"),
  e = require("./utils.js"),
  c = require("../../../common/vendor.js"),
  r = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    props: {
      userOpenSubStatus: { type: String, default: "" },
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
    },
    computed: {
      url: function () {
        var c;
        return this.userOpenSubStatus
          ? ((c = {}),
            t(
              c,
              e.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN,
              "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ouh79p00ry033&wzq_code="
                .concat(this.scode, "&wzq_market=")
                .concat(this.market)
            ),
            t(
              c,
              e.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN,
              "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Osg10p00ry033&wzq_code="
                .concat(this.scode, "&wzq_market=")
                .concat(this.market)
            ),
            t(
              c,
              e.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED,
              "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ods85p00ry033&wzq_code="
                .concat(this.scode, "&wzq_market=")
                .concat(this.market)
            ),
            t(
              c,
              e.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED,
              "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=Ody69p00ry033&wzq_code="
                .concat(this.scode, "&wzq_market=")
                .concat(this.market)
            ),
            c)[this.userOpenSubStatus]
          : "";
      },
    },
    mounted: function () {
      this.$emit("init");
    },
  };
Array || c.resolveComponent("zxg-webview")();
var a = c._export_sfc(r, [
  [
    "render",
    function (t, e, r, a, n, i) {
      return c.e({ a: i.url }, i.url ? { b: c.p({ src: i.url }) } : {});
    },
  ],
]);
wx.createComponent(a);
