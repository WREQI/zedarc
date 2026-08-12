require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var e = require("./index.js"),
  i = require("../../../utils/index.js"),
  n = require("../../vendor.js"),
  o = {
    components: {
      Popup: function () {
        return "../Popup/index.js";
      },
    },
    props: {
      type: { type: String, default: "dialog" },
      visible: Boolean,
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      titleBorder: { type: Boolean, default: !1 },
      message: { type: String, default: "" },
      messageType: { type: String, default: "text" },
      showClose: { type: Boolean, default: !1 },
      showCancelButton: { type: Boolean, default: !1 },
      showConfirmButton: { type: Boolean, default: !0 },
      confirmButtonText: { type: String, default: "我知道了" },
      confirmButtonActive: { type: Boolean, default: !0 },
      cancelButtonText: { type: String, default: "取消" },
      beforeClose: Function,
      maskClosable: { type: Boolean, default: !1 },
      customClass: { type: String, default: "" },
      customStyle: { type: String, default: "" },
      messageAlign: { type: String, default: "center" },
    },
    data: function () {
      var i = {};
      for (var n in e.defaultOptions) i["i_".concat(n)] = e.defaultOptions[n];
      return t(t({}, i), {}, { loading: { confirm: !1, cancel: !1 } });
    },
    created: function () {
      var t = this;
      (this._dataWatchers = []),
        Object.keys(e.defaultOptions).forEach(function (e) {
          t._dataWatchers.push(
            t.$watch(
              e,
              function (i) {
                t["i_".concat(e)] = i;
              },
              { immediate: !0 }
            )
          );
        });
    },
    unmounted: function () {
      this._dataWatchers.forEach(function (t) {
        t();
      }),
        this.handleHidden();
    },
    methods: {
      show: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.i_visible && this.handleHidden(),
          (this.i_title = t.title),
          (this.i_message = t.message),
          (this.i_messageType = t.messageType),
          (this.i_showCancelButton = t.showCancelButton || !1),
          (this.i_showConfirmButton = t.showConfirmButton || !0),
          (this.i_confirmButtonText = t.confirmButtonText || "我知道了"),
          (this.i_cancelButtonText = t.cancelButtonText || "取消"),
          (this.callback = t.callback || null),
          (this.i_beforeClose = t.beforeClose || null),
          (this.i_customClass = t.customClass || ""),
          (this.i_customStyle = t.customStyle || ""),
          (this.i_messageAlign = t.messageAlign || ""),
          (this.i_showClose = t.showClose || !1),
          (this.onHidden = t.onHidden || null),
          (this.i_visible = !0);
      },
      isShow: function () {
        return this.i_visible;
      },
      hideOnly: function () {
        this.i_visible = !1;
      },
      handleHidden: function () {
        this.onHidden && this.onHidden();
      },
      handleCancel: function () {
        this.handleAction("cancel");
      },
      handleConfirm: function () {
        this.handleAction("confirm");
      },
      handleAction: function (t, e) {
        var n,
          o,
          s,
          l = this;
        if (!0 !== this.loading[t]) {
          var a = this.i_beforeClose;
          if (a) {
            if (((this.loading[t] = !0), a)) {
              var r = this.$parent;
              ["ApplyWrap", "GlobalWrap"].includes(
                null == (n = null == r ? void 0 : r.$options) ? void 0 : n.name
              ) &&
                (r =
                  i.getIsMpPluginComponent() &&
                  (null == (o = null == this ? void 0 : this.$parent)
                    ? void 0
                    : o.$parent)
                    ? null == (s = null == this ? void 0 : this.$parent)
                      ? void 0
                      : s.$parent
                    : this.$root),
                this.i_beforeClose.bind(r)(t, function (i) {
                  !1 !== i && l.onClose(t, e), (l.loading[t] = !1);
                });
            }
          } else this.onClose(t, e);
        }
      },
      onClickOverlay: function () {
        this.onClose("overlay");
      },
      onClickClose: function () {
        this.handleAction("cancel", { from: "close" });
      },
      onClose: function (t, e) {
        this.$emit(t);
        var i = this.callback;
        i && i(t, this, e),
          (this.i_visible = !1),
          this.$emit("close", t),
          this.handleHidden();
      },
    },
  };
Array || n.resolveComponent("Popup")();
var s = n._export_sfc(o, [
  [
    "render",
    function (t, e, i, o, s, l) {
      return n.e(
        { a: t.i_showClose },
        t.i_showClose
          ? {
              b: n.o(function () {
                return l.onClickClose && l.onClickClose.apply(l, arguments);
              }),
            }
          : {},
        { c: t.i_title || t.$slots.title },
        t.i_title || t.$slots.title
          ? n.e(
              { d: n.t(t.i_title), e: i.subtitle },
              i.subtitle ? { f: i.subtitle } : {},
              { g: n.n(i.titleBorder ? "border--bottom" : "") }
            )
          : {},
        { h: "text" == t.i_messageType },
        "text" == t.i_messageType ? { i: n.t(t.i_message) } : {},
        { j: "html" == t.i_messageType },
        "html" == t.i_messageType ? { k: t.i_message } : {},
        {
          l: n.n("mp-dialog__message--".concat(t.i_messageAlign)),
          m: t.i_showCancelButton,
        },
        t.i_showCancelButton
          ? {
              n: n.t(t.i_cancelButtonText),
              o: s.loading.cancel,
              p: n.o(function () {
                return l.handleCancel && l.handleCancel.apply(l, arguments);
              }),
            }
          : {},
        { q: t.i_showConfirmButton },
        t.i_showConfirmButton
          ? {
              r: n.t(t.i_confirmButtonText),
              s: s.loading.confirm,
              t: t.i_confirmButtonActive ? 1 : "",
              v: n.o(function () {
                return l.handleConfirm && l.handleConfirm.apply(l, arguments);
              }),
            }
          : {},
        {
          w: n.o(l.onClickOverlay),
          x: n.p({
            show: t.i_visible,
            "custom-class": [
              "mp-dialog",
              "alert" === i.type ? "mp-alert-dialog" : "",
              t.i_customClass,
            ].join(" "),
            "custom-style": i.customStyle,
            "mask-closable": i.maskClosable,
            "layer-z-index": 102,
            name: "mp-scale",
          }),
        }
      );
    },
  ],
]);
wx.createComponent(s);
