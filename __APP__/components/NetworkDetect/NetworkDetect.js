var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("./useNetworkDetect.js"),
  i = require("./index.js"),
  o = require("./constants.js"),
  s = {
    name: "NetworkDetect",
    components: {
      DetectLoading: function () {
        return "./DetectLoading.js";
      },
      DetectResult: function () {
        return "./DetectResult.js";
      },
    },
    props: {
      visible: Boolean,
      showClose: { type: Boolean, default: !0 },
      closeIcon: { type: Boolean, default: !0 },
      mask: { type: Boolean, default: !0 },
      theme: { type: String, default: o.NETWORK_DETECT_THEME.EMBEDDED },
      navbar: { type: Boolean, default: !1 },
      minHeight: { type: Number, default: 0 },
    },
    setup: function () {
      return { uiType: t.storeToRefs(n.useNetworkDetect()).uiType };
    },
    data: function () {
      var t = {};
      for (var n in i.defaultOptions) t["i_".concat(n)] = i.defaultOptions[n];
      return e(
        e({}, t),
        {},
        {
          NETWORK_DETECT_UI_TYPE: o.NETWORK_DETECT_UI_TYPE,
          NETWORK_DETECT_THEME: o.NETWORK_DETECT_THEME,
        }
      );
    },
    created: function () {
      var e = this;
      (this._dataWatchers = []),
        Object.keys(i.defaultOptions).forEach(function (t) {
          e._dataWatchers.push(
            e.$watch(
              t,
              function (n) {
                e["i_".concat(t)] = n;
              },
              { immediate: !0 }
            )
          );
        });
    },
    unmounted: function () {
      this._dataWatchers.forEach(function (e) {
        e();
      }),
        this.hideUI(),
        this.onHidden && this.onHidden();
    },
    methods: {
      show: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this.callback = e.callback || null),
          (this.i_showClose = e.showClose || !1),
          (this.onHidden = e.onHidden || null),
          (this.i_visible = !0);
      },
      hideUI: function () {
        (0, n.useNetworkDetect().hideNetworkUI)();
      },
      isShow: function () {
        return this.i_visible;
      },
      handleCancel: function () {
        this.handleAction("cancel"), this.hideUI();
      },
      handleConfirm: function () {
        this.handleAction("confirm");
      },
      handleAction: function (e, t) {
        this.onClose(e, t);
      },
      onClickOverlay: function () {
        this.onClose("overlay");
      },
      onClickClose: function () {
        this.handleAction("cancel", { from: "close" });
      },
      onClose: function (e, t) {
        this.$emit(e);
        var n = this.callback;
        n && n(e, this, t), (this.i_visible = !1), this.$emit("close", e);
      },
    },
  };
Array ||
  (t.resolveComponent("DetectLoading") + t.resolveComponent("DetectResult"))();
var a = t._export_sfc(s, [
  [
    "render",
    function (e, n, i, o, s, a) {
      return t.e(
        { a: o.uiType === s.NETWORK_DETECT_UI_TYPE.LOADING },
        o.uiType === s.NETWORK_DETECT_UI_TYPE.LOADING
          ? { b: t.sr("detect-loading", "803c677c-0") }
          : o.uiType === s.NETWORK_DETECT_UI_TYPE.RESULT
          ? {
              d: t.sr("detect-result", "803c677c-1"),
              e: t.o(a.handleCancel),
              f: t.p({
                "show-mask": i.mask,
                "show-close-icon": i.showClose,
                "embedded-mode": i.theme === s.NETWORK_DETECT_THEME.EMBEDDED,
                navbar: i.navbar,
                "min-height": i.minHeight,
              }),
            }
          : {},
        { c: o.uiType === s.NETWORK_DETECT_UI_TYPE.RESULT, g: e.i_visible }
      );
    },
  ],
]);
wx.createComponent(a);
