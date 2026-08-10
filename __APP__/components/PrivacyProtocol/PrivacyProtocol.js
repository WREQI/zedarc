require("../../app.js");
var o = require("../../common/vendor.js");
require("../../service/broker.js");
var r = require("../../config/key.js"),
  e = require("../../cgi/signProtocol.js"),
  n = require("../../stores/user/useUserinfo.js"),
  t = require("../../config/broker/11100/index.js"),
  i = {
    name: "PrivacyProtocol",
    components: {
      Dialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    props: { scene: { type: String, default: "" } },
    emits: ["skip", "confirm"],
    setup: function (r) {
      var e = o.getCurrentInstance().proxy,
        t = o.storeToRefs(n.useUserinfoStore()).userinfo;
      return (
        o.onMounted(function () {
          var o;
          (null == r ? void 0 : r.scene) &&
            (null == (o = null == e ? void 0 : e.signProtocolDialog) ||
              o.call(e));
        }),
        { userinfo: t }
      );
    },
    data: function () {
      return { isAlertShow: !1 };
    },
    computed: {
      brokerName: function () {
        return t.brokerConfig.base.name;
      },
    },
    methods: {
      signProtocolDialog: function () {
        this.$emit("skip");
      },
      signPrivacyProtocol: function () {
        try {
          var n = o.dayjs().format("YYYYMMDD");
          o.index.setStorageSync(r.APPLY_NOSIGN_PRIVACYPROTOCOL, n),
            e.signProtocol.signPrivacyProtocol();
        } catch (o) {
          throw o;
        }
        this.$emit("confirm");
      },
      goPrivacyProtocol: function () {
        this.$router.push({
          name: "AboutProtocol",
          query: { key: "gjzq_ysxys" },
        });
      },
      needSignProtocol: function () {
        if ("1" === this.userinfo.need_sign_privacy_protocol) {
          var e = o.index.getStorageSync(r.APPLY_NOSIGN_PRIVACYPROTOCOL),
            n = o.dayjs().format("YYYYMMDD");
          if (!e || e !== n) return !0;
        }
        return !1;
      },
    },
  };
Array || o.resolveComponent("Dialog")();
var c = o._export_sfc(i, [
  [
    "render",
    function (r, e, n, t, i, c) {
      return {
        a: o.t(c.brokerName),
        b: o.t(c.brokerName),
        c: o.o(function () {
          return c.goPrivacyProtocol && c.goPrivacyProtocol.apply(c, arguments);
        }),
        d: o.o(c.signPrivacyProtocol),
        e: o.p({
          visible: i.isAlertShow,
          title: "".concat(c.brokerName, "隐私政策"),
          "confirm-button-text": "已经阅读并同意",
        }),
      };
    },
  ],
]);
wx.createComponent(c);
