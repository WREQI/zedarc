var e = require("../../../../../common/vendor.js"),
  o = require("../utils/StockBridgeWrapper.js"),
  t = {
    name: "ServiceAgreementModal",
    props: {
      visible: { type: Boolean, default: !1 },
      protocolTitle: { type: String, default: "" },
      protocolUrl: { type: String, default: "" },
      isMP: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
      useAppH5: { type: Boolean, default: !1 },
      isWZQ: { type: Boolean, default: !1 },
      rootStyle: { type: String, default: "" },
    },
    data: function () {
      return { isAgreed: !1 };
    },
    watch: {
      visible: {
        handler: function (e) {
          e &&
            o.StockBridge.report(
              "base.ai_search.session_history_protocol_brow"
            );
        },
        immediate: !0,
      },
    },
    methods: {
      handleOverlayClick: function () {},
      toggleAgreement: function () {
        this.isAgreed = !this.isAgreed;
      },
      handleReject: function () {
        this.$emit("reject");
      },
      handleConfirm: function () {
        this.isAgreed
          ? (this.$emit("confirm"),
            o.StockBridge.report(
              "base.ai_search.session_history_protocol_argee_click"
            ))
          : o.StockBridge.toast("请先阅读并同意协议");
      },
      jumpToProtocol: function () {
        this.protocolUrl && this.openTargetUrl(this.protocolUrl);
      },
      openTargetUrl: function (t) {
        if (this.isMP) {
          var r = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(t),
            "&hideShareMenu=1"
          );
          e.wx$1.navigateTo({ url: r });
        } else o.StockBridge.openExtraWebview(t);
      },
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (o, t, r, n, i, l) {
        return e.e(
          { a: r.visible },
          r.visible
            ? {
                b: e.t(r.protocolTitle || "《问元宝服务协议》"),
                c: e.o(function () {
                  return (
                    l.jumpToProtocol && l.jumpToProtocol.apply(l, arguments)
                  );
                }, 5433),
                d: i.isAgreed ? 1 : "",
                e: e.t(r.protocolTitle || "《问元宝服务协议》"),
                f: e.o(function () {
                  return (
                    l.jumpToProtocol && l.jumpToProtocol.apply(l, arguments)
                  );
                }, 5434),
                g: e.o(function () {
                  return (
                    l.toggleAgreement && l.toggleAgreement.apply(l, arguments)
                  );
                }, 5435),
                h: e.o(function () {
                  return l.handleReject && l.handleReject.apply(l, arguments);
                }, 5436),
                i: i.isAgreed ? "" : 1,
                j: e.o(function () {
                  return l.handleConfirm && l.handleConfirm.apply(l, arguments);
                }, 5437),
                k: e.o(function () {}, 5438),
                l: e.n("skin-".concat(r.theme)),
                m: e.n(r.useAppH5 ? "useAppH5" : ""),
                n: e.n(r.isWZQ ? "isWZQ" : ""),
                o: e.s(r.rootStyle),
                p: e.o(function () {}, 5439),
                q: e.o(function () {
                  return (
                    l.handleOverlayClick &&
                    l.handleOverlayClick.apply(l, arguments)
                  );
                }, 5440),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-bc077ce6"],
  ]);
wx.createComponent(r);
