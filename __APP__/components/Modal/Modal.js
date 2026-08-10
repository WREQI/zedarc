var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  e = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  l = require("../../common/vendor.js"),
  u = {
    visible: !1,
    title: "",
    content: "",
    customCancel: !1,
    customConfirm: !1,
    confirmButtonText: "我知道了",
    cancelButtonText: "取消",
    showConfirmButton: !0,
    showCancelButton: !1,
    showClose: !1,
    maskClosable: !1,
  },
  s = {
    props: {
      visible: { type: Boolean, default: !1 },
      title: { type: String, default: "提示" },
      customContent: { type: Boolean, default: !1 },
      content: { type: String },
      customConfirm: { type: Boolean, default: !1 },
      showConfirmButton: { type: Boolean, default: !0 },
      confirmButtonText: { type: String, default: "我知道了" },
      onConfirm: { type: String, default: function () {} },
      customCancel: { type: Boolean, default: !1 },
      showCancelButton: { type: Boolean, default: !0 },
      cancelButtonText: { type: String, default: "取消" },
      onCancel: { type: String, default: function () {} },
    },
    data: function () {
      var n,
        l = {};
      for (var s in u) l["i_".concat(s)] = u[s];
      return (
        (n = (function (n, e) {
          for (var o in e || (e = {})) r.call(e, o) && a(n, o, e[o]);
          if (i) {
            var l,
              u = t(i(e));
            try {
              for (u.s(); !(l = u.n()).done; ) {
                o = l.value;
                c.call(e, o) && a(n, o, e[o]);
              }
            } catch (t) {
              u.e(t);
            } finally {
              u.f();
            }
          }
          return n;
        })({}, l)),
        e(n, o({ loading: { confirm: !1, cancel: !1 } }))
      );
    },
    created: function () {
      var t = this;
      (this._dataWatchers = []),
        Object.keys(u).forEach(function (n) {
          t._dataWatchers.push(
            t.$watch(
              n,
              function (e) {
                t["i_".concat(n)] = e;
              },
              { immediate: !0 }
            )
          );
        });
    },
    destroyed: function () {
      this._dataWatchers.forEach(function (t) {
        t();
      });
    },
    methods: {
      show: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this.i_title = t.title),
          (this.i_content = t.content),
          (this.i_showCancelButton = t.showCancelButton || !1),
          (this.i_showConfirmButton = t.showConfirmButton || !0),
          (this.i_confirmButtonText = t.confirmButtonText || "我知道了"),
          (this.i_cancelButtonText = t.cancelButtonText || "取消"),
          (this.i_onConfirm = t.onConfirm),
          (this.i_onCancel = t.onCancel),
          (this.i_visible = !0);
      },
      confirm: function () {
        var t;
        null == (t = this.onConfirm || this.i_onConfirm) || t(),
          (this.i_visible = !1);
      },
      cancel: function () {
        var t;
        null == (t = this.onCancel || this.i_onCancel) || t(),
          (this.i_visible = !1);
      },
      isShow: function () {
        return this.i_visible;
      },
    },
  },
  f = l._export_sfc(s, [
    [
      "render",
      function (t, n, e, o, i, r) {
        return l.e({ a: e.title }, e.title ? { b: l.t(t.i_title) } : {}, {
          c: l.t(t.i_content),
          d: l.t(t.i_cancelButtonText),
          e: l.o(function () {
            return r.cancel && r.cancel.apply(r, arguments);
          }, 409),
          f: l.t(t.i_confirmButtonText),
          g: l.o(function () {
            return r.confirm && r.confirm.apply(r, arguments);
          }, 410),
          h: t.i_visible,
        });
      },
    ],
    ["__scopeId", "data-v-f0345352"],
  ]);
wx.createComponent(f);
