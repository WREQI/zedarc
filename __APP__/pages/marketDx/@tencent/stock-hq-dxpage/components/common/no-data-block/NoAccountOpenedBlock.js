var t = require("../../../../../../../common/vendor.js"),
  i = {
    inject: ["hqBridge"],
    props: {
      market: { type: String, default: "" },
      type: { type: String, default: "" },
    },
    data: function () {
      return {
        guideText: {
          hs: "暂无此类新股/债，提前开户不错过",
          hk: "不用香港卡，开A股户就能买港股ETF",
          us: "不用境外卡，开A股户就能买美股ETF",
        },
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      gotoOpenAccount: function () {
        this.hqBridge.busEmit("daxinCalendarYijiandaxin", "apply");
        var t = "IZW00p000a002";
        if ((this.isMp && (t = "Inq00p000b122"), this.type)) {
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.".concat(
              {
                pendingSubscription: "pending_subscription",
                availableSubscription: "available_subscription",
                pendingGoPublic: "pending_go_public",
              }[this.type],
              "_tab_apply_button_click"
            ),
            { fchannel_id_fm_i: t }
          );
        } else
          this.market &&
            this.hqBridge.report(
              "hq.daxin_calendar_".concat(
                this.market,
                "tab.apply_button_click"
              ),
              { fchannel_id_fm_i: t }
            );
      },
    },
  },
  n = t._export_sfc(i, [
    [
      "render",
      function (i, n, e, a, r, p) {
        return {
          a: t.t(r.guideText[e.market]),
          b: t.n(p.isMp ? "guide-button-mp" : ""),
          c: t.o(function () {
            return p.gotoOpenAccount && p.gotoOpenAccount.apply(p, arguments);
          }, 3781),
        };
      },
    ],
    ["__scopeId", "data-v-e50d484a"],
  ]);
wx.createComponent(n);
