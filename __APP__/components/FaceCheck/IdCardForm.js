var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  n = require("../../utils/useKeyboardHeight.js"),
  o = require("../../utils/getPlatform.js"),
  a = {
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
    },
    setup: function () {
      var a = r.getCurrentInstance().proxy,
        i = r.ref(!1),
        c = r.reactive({ name: "", idcard: "" });
      function u(e) {
        i.value = e;
      }
      function l() {
        u(!1), s.clearFormData();
      }
      var d,
        s = r.inject("forgetMobile"),
        m = r.computed(function () {
          return c.name && c.idcard;
        }),
        h = n.useKeyboardHeight({
          elementSelector: ".st-action-sheet-panel",
          getElementCtx: function () {
            return a.selectComponent("#idcardSheet");
          },
        }),
        p = h.keyboardStyle,
        f = h.getKeyboardHeight,
        y = h.recoverKeyboardHeight;
      return {
        ismini: o.getPlatform().isMiniProgram,
        keyboardStyle: p,
        getKeyboardHeight: f,
        recoverKeyboardHeight: y,
        nextBtnEnable: m,
        setFormData: function (e) {
          Object.assign(c, e);
        },
        handleCancel: l,
        handleNext:
          ((d = t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        s.setFormData(c), (e.next = 3), s.handleFaceCheck()
                      );
                    case 3:
                      l();
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return d.apply(this, arguments);
          }),
        setFormStatus: u,
        formData: c,
        isShowForm: i,
      };
    },
  };
Array || r.resolveComponent("ActionSheet")();
var i = r._export_sfc(a, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return {
        a: r.o(function () {
          return o.handleCancel && o.handleCancel.apply(o, arguments);
        }),
        b: !o.ismini,
        c: r.o(function () {
          return o.getKeyboardHeight && o.getKeyboardHeight.apply(o, arguments);
        }),
        d: r.o(function () {
          return (
            o.recoverKeyboardHeight &&
            o.recoverKeyboardHeight.apply(o, arguments)
          );
        }),
        e: o.formData.name,
        f: r.o(function (e) {
          return (o.formData.name = e.detail.value);
        }),
        g: !o.ismini,
        h: r.o(function () {
          return o.getKeyboardHeight && o.getKeyboardHeight.apply(o, arguments);
        }),
        i: r.o(function () {
          return (
            o.recoverKeyboardHeight &&
            o.recoverKeyboardHeight.apply(o, arguments)
          );
        }),
        j: o.formData.idcard,
        k: r.o(function (e) {
          return (o.formData.idcard = e.detail.value);
        }),
        l: !o.nextBtnEnable,
        m: r.o(function () {
          return o.handleNext && o.handleNext.apply(o, arguments);
        }),
        n: r.o(o.handleCancel),
        o: r.o(o.handleCancel),
        p: r.o(function (e) {
          return (o.isShowForm = e);
        }),
        q: r.p({
          id: "idcardSheet",
          value: o.isShowForm,
          "custom-popup-style": o.keyboardStyle,
          title: null,
          "confirm-txt": null,
          "picker-style": !0,
          "close-button": !0,
          "show-title-border-bottom": !1,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-7b77ed55"],
]);
wx.createComponent(i);
