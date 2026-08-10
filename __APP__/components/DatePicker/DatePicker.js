require("../../app.js");
var e = require("../../common/vendor.js"),
  n = {
    name: "DatePicker",
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: {
        type: [String, null],
        default: "",
        validator: function (e) {
          return !e || /^[0-9]{8}$/.test(e);
        },
      },
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      confirmTxt: { type: String, default: "确定" },
      disabled: { type: Boolean, default: !1 },
      maskClosable: { type: Boolean, default: !1 },
      zIndex: { type: Number, default: 101 },
    },
    setup: function (n, a) {
      var t = a.emit,
        o = e.ref(!0),
        r = e.ref([0, 0, 0]),
        l = null,
        i = e.getCurrentInstance().proxy,
        u = e.computed(function () {
          for (
            var n = [],
              a = [],
              t = [],
              o = e.dayjs().year() - 100,
              l = e.dayjs().year() + 100;
            o <= l;
            o++
          )
            n.push(String(o));
          for (var i = 1; i <= 12; i++)
            a.push("".concat(String(i)).padStart(2, "0"));
          for (
            var u = e
                .dayjs("".concat(n[r.value[0]], "-").concat(a[r.value[1]]))
                .daysInMonth(),
              d = 1;
            d <= u;
            d++
          )
            t.push("".concat(String(d)).padStart(2, "0"));
          return { yearRange: n, monthRange: a, dayRange: t };
        });
      function d(n) {
        clearTimeout(l),
          (l = setTimeout(function () {
            if (n) {
              var a = u.value.yearRange.indexOf(n.slice(0, 4)),
                t = u.value.monthRange.indexOf(n.slice(4, 6)),
                o = u.value.dayRange.indexOf(n.slice(6));
              if (-1 !== a && -1 !== t && -1 !== o)
                return void (r.value = [a, t, o]);
            }
            var l = String(e.dayjs().year()),
              i = "".concat(e.dayjs().month() + 1).padStart(2, "0"),
              d = "".concat(e.dayjs().date()).padStart(2, "0");
            r.value = [
              u.value.yearRange.indexOf(l),
              u.value.monthRange.indexOf(i),
              u.value.dayRange.indexOf(d),
            ];
          }, 100));
      }
      return (
        e.watch(
          function () {
            return n.value;
          },
          function (e) {
            d(e),
              setTimeout(function () {
                i.$forceUpdate();
              }, 300);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return o.value;
          },
          function (e) {
            e && d(n.value);
          }
        ),
        {
          handleChange: function (e) {
            var n = e.detail.value,
              a = void 0 !== n[0] ? n[0] : r.value[0],
              t = void 0 !== n[1] ? n[1] : r.value[1],
              o = void 0 !== n[2] ? n[2] : r.value[2];
            r.value = [a, t, o];
          },
          dateRange: u,
          selectedIndex: r,
          visible: o,
          handleConfirm: function () {
            var e = [
              u.value.yearRange[r.value[0]],
              u.value.monthRange[r.value[1]],
              u.value.dayRange[r.value[2]],
            ].join("");
            t("change", e);
          },
          noop: function () {},
          handleCancel: function () {
            n.maskClosable && t("close");
          },
          indicatorStyle: "height: 44px;",
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var a = e._export_sfc(n, [
  [
    "render",
    function (n, a, t, o, r, l) {
      return e.e(
        {
          a: e.o(function () {
            return o.noop && o.noop.apply(o, arguments);
          }),
          b: e.f(o.dateRange.yearRange, function (n, a, t) {
            return {
              a: e.t(n),
              b: a,
              c: e.n(a === o.selectedIndex[0] ? "" : "unselected"),
            };
          }),
          c: e.f(o.dateRange.monthRange, function (n, a, t) {
            return {
              a: e.t(n),
              b: a,
              c: e.n(a === o.selectedIndex[1] ? "" : "unselected"),
            };
          }),
          d: e.f(o.dateRange.dayRange, function (n, a, t) {
            return {
              a: e.t(n),
              b: a,
              c: e.n(a === o.selectedIndex[2] ? "" : "unselected"),
            };
          }),
          e: t.disabled ? 1 : "",
          f: o.indicatorStyle,
          g: o.selectedIndex,
          h: e.o(function () {
            return o.handleChange && o.handleChange.apply(o, arguments);
          }),
          i: t.disabled,
        },
        (t.disabled, {}),
        {
          j: e.o(function () {
            return o.noop && o.noop.apply(o, arguments);
          }),
          k: e.o(function () {
            return o.handleCancel && o.handleCancel.apply(o, arguments);
          }),
          l: e.t(t.confirmTxt),
          m: e.o(function () {
            return o.handleConfirm && o.handleConfirm.apply(o, arguments);
          }),
          n: e.o(function (e) {
            return (o.visible = e);
          }),
          o: e.o(o.handleCancel),
          p: e.p({
            value: o.visible,
            "picker-style": !0,
            "mask-closable": t.maskClosable,
            "show-title-border-bottom": !1,
            "confirm-button": !1,
            "hide-close-icon": !0,
            title: t.title,
            subtitle: t.subtitle,
            "z-index": t.zIndex,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-646a8ab1"],
]);
wx.createComponent(a);
