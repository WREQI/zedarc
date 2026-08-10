var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../common/vendor.js"),
  n = require("../api/zxgApi.js"),
  o = {
    components: {
      LayerModal: function () {
        return "./LayerModal/index.js";
      },
    },
    props: {
      hasBottomBar: { type: Boolean, default: !0 },
      value: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        syncDesc: "整合微信版/APP/小程序的自选股，集中查看",
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    watch: {
      value: {
        handler: function (e) {
          e && (this.skin = t.wx$1.getStorageSync("user/skin") || "white");
        },
        immediate: !0,
      },
    },
    mounted: function () {
      t.StockBridge.store.subscribeProtocolStatus(
        this.handleProtocolStatusChange
      );
    },
    methods: {
      handleMoreInfo: function () {
        t.StockBridge.report("base.personal.privacy_more_info");
        var e = "/pages/additional/webview/index?url=".concat(
          encodeURIComponent("https://gu.qq.com/resource/pravicyChoose/mp.html")
        );
        t.wx$1.navigateTo({ url: e });
      },
      handleProtocolStatusChange: function (e) {
        this.isInit = "init" === e;
      },
      onCancel: function () {
        this.$emit("input", !1),
          this.$emit("cancel"),
          this.report("choose_refuse"),
          this.signChooseSync("0");
      },
      onConfirm: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.$emit("input", !1),
                        this.$emit("confirm"),
                        this.signChooseSync("1"),
                        this.report("choose_agree");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, o) {
            var r = function (e) {
                try {
                  a(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  a(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, i);
              };
            a((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      signChooseSync: function (e) {
        var o = this;
        n.zxgApi.setSyncStatus({ status: e }).then(function (n) {
          var r;
          1 == +(null == (r = n.mergeMsg) ? void 0 : r.msgType)
            ? t.wx$1.showModal({
                title: "分组个数超出限制",
                content: "您的自建分组超出上限（50），请移除 ".concat(
                  n.mergeMsg.needRemoveGroupNum,
                  " 个分组重试"
                ),
                confirmText: "我知道了",
                confirmColor: "#E63535",
                showCancel: !1,
                success: function (e) {
                  e.confirm && o.report("choose.policy.error_modal_confirm");
                },
              })
            : t.index.$emit("CHOOSE_PRIVACY_POLICY_BAR", {
                showBar: !1,
                refresh: 1 == +e,
              });
        });
      },
      report: function (e) {
        t.Request.reportMTAData({ eventName: "base.personal.".concat(e) });
      },
    },
  };
Array || t.resolveComponent("layer-modal")();
var r = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, r, i, a) {
      return {
        a: t.t(i.syncDesc),
        b: t.o(function () {
          return a.handleMoreInfo && a.handleMoreInfo.apply(a, arguments);
        }, 2216),
        c: t.o(a.onConfirm, 2217),
        d: t.o(a.onCancel, 2218),
        e: t.p({
          skin: i.skin,
          title: "一键同步自选股",
          "cancel-button-text": "稍后再说",
          "confirm-button-text": "同意并继续",
          visible: o.value,
          "has-bottom-bar": o.hasBottomBar,
          "is-agree-privacy-authorization": !0,
          "root-class": "account",
        }),
        f: t.n("skin-" + i.skin),
      };
    },
  ],
  ["__scopeId", "data-v-a5180d9c"],
]);
wx.createComponent(r);
