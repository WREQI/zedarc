require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../utils/getPlatform.js"),
  n = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      title: { type: String, default: "" },
      value: { type: Boolean, default: !1 },
      selectedVal: { type: [String, Number], default: "" },
      selectRange: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (n) {
      var a = e.getCurrentInstance().proxy,
        o = e.ref([0]),
        r = t.getPlatform().isMiniProgram,
        l = null;
      function u(e) {
        var t = !1;
        e &&
          n.selectRange.forEach(function (n, a) {
            n.value === e && ((o.value = [a]), (t = !0));
          }),
          t || (o.value = [0]);
      }
      function c(e) {
        l && clearTimeout(l),
          r
            ? (l = setTimeout(function () {
                u(e);
              }, 100))
            : u(e);
      }
      return (
        e.watch(
          function () {
            return n.selectedVal;
          },
          function (e) {
            c(e);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return n.value;
          },
          function (e) {
            e &&
              (c(n.selectedVal),
              setTimeout(function () {
                a.$forceUpdate();
              }, 300));
          }
        ),
        {
          indicatorStyle: "height: 44px;",
          selectedIndex: o,
          handleCancel: function () {
            a.$emit("close");
          },
          handleConfirm: function () {
            a.$emit("change", n.selectRange[o.value[0]]);
          },
          handleChange: function (e) {
            var t = e.detail.value,
              n = void 0 !== t[0] ? t[0] : o.value[0];
            o.value = [n];
          },
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var a = e._export_sfc(n, [
  [
    "render",
    function (t, n, a, o, r, l) {
      return e.e(
        { a: a.value },
        a.value
          ? {
              b: e.f(a.selectRange, function (t, n, a) {
                return {
                  a: e.t(t.text),
                  b: t.value,
                  c: e.n(n !== o.selectedIndex[0] ? "unselected" : ""),
                };
              }),
              c: o.indicatorStyle,
              d: o.selectedIndex,
              e: e.o(function () {
                return o.handleChange && o.handleChange.apply(o, arguments);
              }),
              f: e.o(function () {
                return o.handleConfirm && o.handleConfirm.apply(o, arguments);
              }),
              g: e.o(o.handleCancel),
              h: e.o(o.handleCancel),
              i: e.p({
                value: !0,
                title: a.title,
                "show-title-border-bottom": !1,
                "confirm-button": !1,
                "picker-style": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f30f4722"],
]);
wx.createComponent(a);
