require("../../app.js"), require("../../service/broker.js");
var o = require("../../utils/getPlatform.js"),
  e = require("../../common/vendor.js"),
  r = require("../../config/broker/11100/index.js"),
  n = o.getPlatform().isWeixin,
  t = {
    components: {
      BrokerLogo: function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      },
    },
    props: {
      fixed: { type: Boolean, default: !1 },
      ipv6Logo: { type: Boolean, default: !1 },
      navBar: { type: Boolean, default: !1 },
      focusEvent: { type: Boolean, default: !0 },
    },
    setup: function () {
      return {
        colorful: !1,
        isShow: !o.getPlatform().isEmbeddedMiniProgram,
        isFocus: !1,
      };
    },
    computed: {
      broker: function () {
        return r.brokerConfig;
      },
      existNavBar: function () {
        return n && this.navBar;
      },
    },
    mounted: function () {},
    unmounted: function () {},
    methods: {
      onFocus: function () {
        this.isFocus = !0;
      },
      onBlur: function () {
        this.isFocus = !1;
      },
    },
  };
Array || e.resolveComponent("BrokerLogo")(), Math;
var i = e._export_sfc(t, [
  [
    "render",
    function (o, r, n, t, i, u) {
      return e.e(
        { a: t.isShow },
        t.isShow
          ? e.e(
              {
                b: e.p({ colorful: t.colorful }),
                c: e.t(u.broker.base.name || "证券公司"),
                d: n.ipv6Logo,
              },
              (n.ipv6Logo, {}),
              {
                e: n.fixed && !t.isFocus ? 1 : "",
                f: t.colorful ? 1 : "",
                g: u.existNavBar ? 1 : "",
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-67ee74ff"],
]);
wx.createComponent(i);
