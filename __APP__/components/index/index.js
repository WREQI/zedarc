Component({
  behaviors: ["wx://component-export"],
  export: function () {
    return {
      show: this.show.bind(this),
      destroy: this.destroy.bind(this),
      refresh: this.refresh.bind(this),
    };
  },
  properties: {
    aidEncrypted: { type: String, value: "" },
    appid: { type: String, value: "" },
    appId: { type: String, value: "" },
    lang: { type: String, value: "zh-CN" },
    themeColor: { type: String, value: "#1A79FF" },
  },
  data: { isShowPop: !1 },
  methods: {
    show: function () {
      var t = this;
      this.setData({ isShowPop: !0 }, function () {
        // 本地调试临时跳过验证码插件，保持原有 verify 事件链路。
        t.triggerEvent("verify", { ret: 0, ticket: "", randstr: "" });
      });
    },
    destroy: function () {
      this.setData({ isShowPop: !1 });
    },
    refresh: function () {
      this.show();
    },
    handlerVerify: function (t) {
      this.triggerEvent("verify", t.detail);
    },
    handlerReady: function () {
      this.triggerEvent("ready", {});
    },
    handlerClose: function (t) {
      this.setData({ isShowPop: !1 }), this.triggerEvent("close", t.detail);
    },
    handlerError: function (t) {
      this.triggerEvent("error", t.detail);
    },
  },
});
