var t = require("../../utils/trade.js"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    name: "PurchaseButton",
    inject: ["hqBridge"],
    props: {
      type: { type: String, default: "0" },
      userInfo: { type: Object, default: function () {} },
      model: { type: Object, require: !1, default: function () {} },
    },
    data: function () {
      return { title: "立即申购" };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      buyClick: function () {
        var e = this;
        if (
          ("0" === this.type
            ? this.hqBridge.report("hq.xingurili.hs_detail_yijiandaxin_stock")
            : "1" === this.type &&
              this.hqBridge.report("hq.xingurili.hs_detail_yijiandaxin_bond"),
          "wzq" !== this.hqBridge.ENV)
        )
          if ("app" !== this.hqBridge.ENV)
            if ("mp" !== this.hqBridge.ENV) {
              var i = this.userInfo.userstate;
              i !== t.USERSTATE.HASACCOUNT && i !== t.USERSTATE.HASBUNDLE
                ? (this.$toast("您还没有开通股票账户，请先开通后再申购"),
                  setTimeout(function () {
                    e.hqBridge.routeTo({
                      path: "/wj_trade/apply/index",
                      query: { purchase_type: 2, stat_data: "Ihv24p00ry019" },
                    });
                  }, 1e3))
                : this.hqBridge.routeTo({
                    path: "/wj_trade/newstock/index",
                    query: { purchase_type: 2, stat_data: "Ihv24p00ry019" },
                  });
            } else this.hqBridge.busEmit("mp-purchase");
          else this.hqBridge.busEmit("purchase-click", this.model);
        else this.hqBridge.busEmit("wzq-purchase");
      },
    },
  },
  r = e._export_sfc(i, [
    [
      "render",
      function (t, i, r, s, u, h) {
        return {
          a: e.t(u.title),
          b: e.o(function () {
            return h.buyClick && h.buyClick.apply(h, arguments);
          }, 3909),
        };
      },
    ],
    ["__scopeId", "data-v-0eeafb9c"],
  ]);
wx.createComponent(r);
