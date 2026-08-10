var e = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  n = require("../../../../stores/app/useMode.js");
require("../../../../service/broker.js");
var r = require("../../../../config/enum/transfer.js"),
  o = require("../../../../config/broker/11100/index.js"),
  a = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { type: String, default: "0-0" },
    },
    setup: function (a) {
      var c = t.getCurrentInstance().proxy,
        s = n.useModeStore(),
        i = t.storeToRefs(s).simpleMode,
        l = t.ref(0),
        u = t.ref(0);
      function d(t) {
        if (t) {
          var n = t.split("-"),
            r = e(n, 2),
            o = r[0],
            a = r[1];
          (u.value = +o), (l.value = +a);
        }
      }
      return (
        t.watch(
          function () {
            return a.selectedVal;
          },
          function (e) {
            d(e);
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return a.value;
          },
          function () {
            d(a.selectedVal);
          },
          { immediate: !0 }
        ),
        {
          simpleMode: i,
          classifyList: r.FUNDS_RECORDS_CLASSIFY,
          statusList: o.brokerConfig.transfer.fundsRecordsStatus || [],
          handleCancel: function () {
            c.$emit("close");
          },
          handleConfirm: function () {
            c.$emit("change", "".concat(u.value, "-").concat(l.value));
          },
          handleSelect: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = arguments.length > 1 ? arguments[1] : void 0;
            "classify" === e ? (u.value = t) : "status" === e && (l.value = t);
          },
          curSelectedClassifyIndex: u,
          curSelectedStatusIndex: l,
        }
      );
    },
  };
Array || t.resolveComponent("action-sheet")();
var c = t._export_sfc(a, [
  [
    "render",
    function (e, n, r, o, a, c) {
      return {
        a: t.f(o.classifyList, function (e, n, r) {
          return {
            a: t.t(e.text),
            b: n,
            c: t.n(n === o.curSelectedClassifyIndex ? "selected" : ""),
            d: t.o(function (e) {
              return o.handleSelect("classify", n);
            }, n),
          };
        }),
        b: t.f(o.statusList, function (e, n, r) {
          return {
            a: t.t(e.text),
            b: n,
            c: t.n(n === o.curSelectedStatusIndex ? "selected" : ""),
            d: t.o(function (e) {
              return o.handleSelect("status", n);
            }, n),
          };
        }),
        c: t.o(function () {
          return o.handleCancel && o.handleCancel.apply(o, arguments);
        }),
        d: t.o(function () {
          return o.handleConfirm && o.handleConfirm.apply(o, arguments);
        }),
        e: o.simpleMode ? 1 : "",
        f: t.o(o.handleCancel),
        g: t.o(o.handleCancel),
        h: t.p({
          value: r.value,
          title: "选择筛选项",
          "show-title-border-bottom": !1,
          "confirm-button": !1,
          "hide-close-icon": !0,
          "picker-style": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-9fafe07d"],
]);
wx.createComponent(c);
