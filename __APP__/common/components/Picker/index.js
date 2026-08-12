require("../../../app.js");
var e = require("../../vendor.js"),
  t = {
    name: "StPicker",
    props: {
      value: { type: Boolean, default: !1 },
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      title: { type: String },
      cancelTxt: { type: String, default: "取消" },
      confirmTxt: { type: String, default: "确定" },
      alias: {
        type: Object,
        default: function () {
          return {};
        },
      },
      selectedIndex: {
        type: Array,
        default: function () {
          return [];
        },
      },
      zIndex: { type: Number, default: 100 },
    },
    components: {
      Popup: function () {
        return "../Popup/index.js";
      },
    },
    computed: {
      valueKey: function () {
        return this.alias.value;
      },
      textKey: function () {
        return this.alias.text;
      },
    },
    data: function () {
      return { pickedIndex: this.selectedIndex };
    },
    methods: {
      onPickerSelected: function (e) {
        var t = e.detail.value;
        this.pickedIndex = t;
      },
      confirm: function () {
        this.$emit("select", this.pickedIndex), this.hide();
      },
      cancel: function () {
        this.hide();
      },
      show: function () {
        this.$emit("input", !0);
      },
      hide: function () {
        this.$emit("input", !1);
      },
    },
  };
Array || e.resolveComponent("popup")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, i, r, c, o) {
      return {
        a: e.o(function () {
          return o.cancel && o.cancel.apply(o, arguments);
        }),
        b: e.t(i.confirmTxt),
        c: e.o(function () {
          return o.confirm && o.confirm.apply(o, arguments);
        }),
        d: e.t(i.title),
        e: e.f(i.list, function (t, n, i) {
          return { a: e.t(t[o.textKey]), b: n };
        }),
        f: c.pickedIndex,
        g: e.o(function () {
          return o.onPickerSelected && o.onPickerSelected.apply(o, arguments);
        }),
        h: e.p({
          show: i.value,
          center: !1,
          mask: !0,
          "z-index": i.zIndex,
          position: "bottom",
          "mask-closable": !0,
        }),
      };
    },
  ],
]);
wx.createComponent(n);
