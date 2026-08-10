var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = {
    components: {
      CustomPicker: function () {
        return "../../../components/CustomPicker/CustomPicker.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: {
        type: Array,
        default: function () {
          return ["09", "35"];
        },
      },
      title: { type: String, default: "选择时间" },
      cancelText: { type: String, default: "取消" },
      confirmText: { type: String, default: "确认" },
      disabled: { type: Boolean, default: !1 },
    },
    emits: ["close", "confirm", "changeVisible"],
    setup: function (n, r) {
      var a = r.emit,
        c = t.ref(!1),
        i = t.ref([]),
        o = t.computed(function () {
          return (function () {
            var e = [];
            return (
              [
                { start: 9, startMin: 35, end: 11, endMin: 20 },
                { start: 13, startMin: 5, end: 15, endMin: 20 },
              ].forEach(function (t) {
                for (var n = t.start; n <= t.end; n++) {
                  for (
                    var r = String(n).padStart(2, "0"),
                      a = [],
                      c = n === t.start ? t.startMin : 0,
                      i = n === t.end ? t.endMin : 59,
                      o = c;
                    o <= i;
                    o++
                  ) {
                    var l = String(o).padStart(2, "0");
                    a.push({ value: l });
                  }
                  e.push({ value: r, children: a });
                }
              }),
              e
            );
          })();
        });
      function l() {
        (c.value = !1), a("close");
      }
      return (
        t.watch(
          function () {
            return n.value;
          },
          function (t) {
            !!t !== c.value &&
              ((c.value = !!t), t && (i.value = e(n.selectedVal)));
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return c.value;
          },
          function (e) {
            a("changeVisible", !!e);
          },
          { immediate: !0 }
        ),
        {
          timePickerData: o,
          isShow: c,
          currentSelectedVal: i,
          onSheetClose: l,
          onPickerClose: function () {
            l();
          },
          onPickerConfirm: function (e) {
            var t = e.selectedVal,
              n = e.data,
              r = "".concat(t[0], ":").concat(t[1]);
            a("confirm", { selectedVal: r, data: n }), l();
          },
        }
      );
    },
  };
Array || t.resolveComponent("custom-picker")();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, n, r, a, c, i) {
      return {
        a: t.o(a.onPickerClose),
        b: t.o(a.onPickerConfirm),
        c: t.p({
          value: !0,
          title: r.title,
          data: a.timePickerData,
          "selected-val": a.currentSelectedVal,
          "cancel-text": r.cancelText,
          "confirm-text": r.confirmText,
          disabled: r.disabled,
          "hide-close-icon": !1,
          "hide-cancel-btn": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-44b97e2b"],
]);
wx.createComponent(r);
