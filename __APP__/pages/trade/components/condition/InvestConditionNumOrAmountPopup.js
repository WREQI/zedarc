require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../../../stores/app/useMode.js"),
  t = [
    {
      title: "按金额",
      desc: "委托数量=设置金额/委托价格，不考虑佣金费用不足一手时向下取整",
      val: "0",
    },
    { title: "按数量", desc: "直接委托对应股数，只能设置整手的倍数", val: "1" },
  ],
  o = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { type: String, default: "0" },
      list: {
        type: Array,
        default: function () {
          return t;
        },
      },
    },
    setup: function (t) {
      var o = e.getCurrentInstance().proxy,
        a = e.ref("0"),
        r = n.useModeStore(),
        l = e.storeToRefs(r).simpleMode;
      return (
        e.watch(
          function () {
            return t.selectedVal;
          },
          function (e) {
            a.value = String(e);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return t.value;
          },
          function (e) {
            e && (a.value = String(t.selectedVal));
          }
        ),
        {
          selectedIndex: a,
          simpleMode: l,
          handleCancel: function () {
            o.$emit("close");
          },
          handleConfirm: function () {
            o.$emit("change", a.value);
          },
          onChange: function (e) {
            var n = e.detail.value,
              o = t.list.find(function (e) {
                return e.val === n;
              });
            a.value = (null == o ? void 0 : o.val) || a.value;
          },
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var a = e._export_sfc(o, [
  [
    "render",
    function (n, t, o, a, r, l) {
      return {
        a: e.f(o.list, function (n, t, r) {
          return {
            a: n.val,
            b: n.val === a.selectedIndex,
            c: e.t(n.title),
            d: e.t(n.desc),
            e: t,
            f: t !== o.list.length - 1 ? 1 : "",
          };
        }),
        b: a.simpleMode ? "#e63535" : "#3077ec",
        c: e.o(function () {
          return a.onChange && a.onChange.apply(a, arguments);
        }),
        d: e.o(function () {
          return a.handleConfirm && a.handleConfirm.apply(a, arguments);
        }),
        e: e.o(a.handleCancel),
        f: e.o(a.handleCancel),
        g: e.p({
          value: o.value,
          title: "委托数量",
          "show-title-border-bottom": !1,
          "confirm-button": !1,
          "picker-style": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-211a1cad"],
]);
wx.createComponent(a);
