var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = require("../../../stores/app/useMode.js");
require("../../../service/broker.js");
var o = require("../../../stores/user/useUserinfo.js"),
  u = require("../../../utils/getPlatform.js"),
  i = require("../../../config/broker/11100/index.js"),
  a = o.useUserinfoStore(),
  c = n.storeToRefs(a).userinfo,
  s = a.getUserInfo,
  l = {
    components: {
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { type: Number, default: 0 },
    },
    setup: function (o) {
      var a = u.getPlatform().isOEM,
        l = n.getCurrentInstance().proxy,
        d = n.ref(0),
        f = r.useModeStore(),
        p = n.storeToRefs(f).simpleMode,
        m = n.computed(function () {
          var e;
          return (
            !a &&
            "1" ===
              (null == (e = null == c ? void 0 : c.value)
                ? void 0
                : e.fee_list_control)
          );
        });
      return (
        n.onMounted(
          t(
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0), (e.t0 = n.isEmpty(c.value)), !e.t0)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 5), s();
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        (e.prev = 7), (e.t1 = e.catch(0));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          )
        ),
        n.watch(
          function () {
            return o.selectedVal;
          },
          function (e) {
            d.value = +e;
          },
          { immediate: !0 }
        ),
        n.watch(
          function () {
            return o.value;
          },
          function () {
            d.value = +o.selectedVal;
          },
          { immediate: !0 }
        ),
        {
          simpleMode: p,
          list: i.brokerConfig.transfer.transferClassify || [],
          curSelectedIndex: d,
          handleCancel: function () {
            l.$emit("close");
          },
          handleConfirm: function () {
            l.$emit("change", d.value);
          },
          handleSelect: function (e) {
            d.value = e;
          },
          isDedecutionNewUser: m,
          toDeduction: function () {
            l.$router.push({ name: "TransferDeduction" }),
              l.$emit("close"),
              l.$stat.click("trade.transfer.to_deduction_click");
          },
        }
      );
    },
  };
Array || n.resolveComponent("action-sheet")();
var d = n._export_sfc(l, [
  [
    "render",
    function (e, t, r, o, u, i) {
      return n.e(
        {
          a: n.f(o.list, function (e, t, r) {
            return {
              a: n.t(e.text),
              b: t,
              c: n.n(Number(e.value) === o.curSelectedIndex ? "selected" : ""),
              d: n.o(function (e) {
                return o.handleSelect(t);
              }, t),
            };
          }),
          b: n.o(function () {
            return o.handleCancel && o.handleCancel.apply(o, arguments);
          }),
          c: n.o(function () {
            return o.handleConfirm && o.handleConfirm.apply(o, arguments);
          }),
          d: o.isDedecutionNewUser,
        },
        o.isDedecutionNewUser
          ? {
              e: n.o(function () {
                return o.toDeduction && o.toDeduction.apply(o, arguments);
              }),
            }
          : {},
        {
          f: o.simpleMode ? 1 : "",
          g: n.o(o.handleCancel),
          h: n.o(o.handleCancel),
          i: n.p({
            value: r.value,
            title: "选择类型",
            "show-title-border-bottom": !1,
            "confirm-button": !1,
            "hide-close-icon": !0,
            "picker-style": !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-31ea0800"],
]);
wx.createComponent(d);
