require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  i = require("../../../stores/user/useUserinfo.js"),
  n = require("../../../stores/app/useMode.js"),
  r = require("../../../model/trade/utils.js"),
  l = require("../../../config/enum.js"),
  s = require("../../../components/PopupSelect/usePopupSelect.js"),
  u = {
    components: {
      PopupDisplay: function () {
        return "../../../components/PopupSelect/Display.js";
      },
      PopupSelect: function () {
        return "../../../components/PopupSelect/PopupSelect.js";
      },
    },
    props: {
      splitMode: { type: Boolean, default: !1 },
      action: { type: String, false: !0 },
    },
    setup: function (u, p) {
      var c = p.emit,
        a = o.storeToRefs(i.useUserinfoStore()).userinfo,
        d = o.storeToRefs(n.useModeStore()).simpleMode,
        T = o.inject("trade").stock,
        S = s.usePopupSelect({
          list: l.GGT_ORDER_GROUP_LIST,
          direction: { verticle: "down", horizontal: "right" },
        }),
        f = S.list,
        m = S.show,
        y = S.direction,
        E = S.positionStyle,
        h = S.selectedKey,
        P = S.selectedText,
        _ = S.handleDisplayClick,
        v = S.handleFilterItemClick,
        O = S.hideSelectPopup,
        R = S.setSelectedKey;
      return (
        o.watch(
          [
            function () {
              return u.action;
            },
            function () {
              return u.splitMode;
            },
          ],
          function (o) {
            var i = t(o, 2),
              n = i[0],
              s = i[1],
              u = e(l.GGT_ORDER_GROUP_LIST);
            if (r.isBuyAction(n) && s) {
              var p = u.findIndex(function (e) {
                return e.value === l.ORDER_TYPES.OLO;
              });
              u.splice(p, 1);
            }
            (f.value = u),
              u.find(function (e) {
                return e.value === h.value;
              }) || R(u[0].value);
          },
          { immediate: !0 }
        ),
        o.watch(
          function () {
            return T.value.market_state;
          },
          function (e) {
            [
              l.MARKET_STATE.MORNING_OPENED,
              l.MARKET_STATE.SIESTA,
              l.MARKET_STATE.AFTERNOON_OPENED,
              l.MARKET_STATE.NOT_OPEN,
              l.MARKET_STATE.CLOSED,
            ].includes(e)
              ? R(l.ORDER_TYPES.ELO)
              : R(l.ORDER_TYPES.ALO);
          },
          { immediate: !0 }
        ),
        o.watch(
          function () {
            return h.value;
          },
          function (e) {
            c("select", e);
          },
          { immediate: !0 }
        ),
        {
          userinfo: a,
          simpleMode: d,
          handleClick: function (e) {
            _(e);
          },
          handleOrderTypeSelect: function (e) {
            (m.value = !1), R(e.value);
          },
          orderTypePopupShow: m,
          orderTypePopupList: f,
          direction: y,
          positionStyle: E,
          selectedKey: h,
          selectedText: P,
          handleDisplayClick: _,
          handleFilterItemClick: v,
          hideSelectPopup: O,
          setSelectedKey: R,
        }
      );
    },
    methods: {
      handExplain: function () {
        this.$emit("explain");
      },
    },
  };
Array ||
  (o.resolveComponent("PopupDisplay") + o.resolveComponent("PopupSelect"))(),
  Math;
var p = o._export_sfc(u, [
  [
    "render",
    function (e, t, i, n, r, l) {
      return {
        a: o.o(function () {
          return l.handExplain && l.handExplain.apply(l, arguments);
        }),
        b: o.o(n.handleClick),
        c: o.p({ text: n.selectedText, "show-icon": !0 }),
        d: o.o(n.handleOrderTypeSelect),
        e: o.o(function (e) {
          return (n.orderTypePopupShow = !1);
        }),
        f: o.p({
          visible: n.orderTypePopupShow,
          list: n.orderTypePopupList,
          direction: n.direction,
          "position-style": n.positionStyle,
          "selected-key": n.selectedKey,
        }),
        g: o.n(n.simpleMode ? "simple" : "classic"),
      };
    },
  ],
  ["__scopeId", "data-v-6e2f2adf"],
]);
wx.createComponent(p);
