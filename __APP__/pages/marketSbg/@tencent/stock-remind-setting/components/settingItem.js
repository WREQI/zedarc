require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      customInput: function () {
        return "../../../../asyncCom/@tencent/stock-ui/mp/custom-input/index.js";
      },
      switchBtn: function () {
        return "./switchBtn.js";
      },
      bubble: function () {
        return "./bubble.js";
      },
      tagList: function () {
        return "./tagList.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      label: { type: String, default: "" },
      value: { type: String, default: "" },
      theme: { type: String, default: "" },
      unit: { type: String, default: "" },
      tag: { type: String, default: "" },
      bubbleText: { type: String, default: "" },
      bubbleColor: { type: String, default: "" },
      placeholder: { type: String, default: "" },
      fontColor: { type: String, default: "" },
      showBubble: { type: Boolean, default: !1 },
      chooseOn: { type: Boolean, default: !1 },
      zdfTagList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      priceAcc: { type: Number, default: 2 },
      focusIsUp: { type: Boolean, default: !1 },
      focusPrice: { type: Boolean, default: !1 },
      showKeyboard: { type: Boolean, default: !1 },
      zxj: { type: String, default: "" },
      isDebt: { type: Boolean, default: !1 },
      type: { type: Number, default: 1 },
      active: { type: Boolean, default: !1 },
      deleteActive: { type: Boolean, default: !1 },
    },
    setup: function (t, n) {
      var o = n.emit,
        u = null,
        l = null,
        r = e.ref(!1);
      e.watch(
        function () {
          return t.showKeyboard && t.active;
        },
        function (e) {
          e
            ? (l && (clearTimeout(l), (l = null)), (r.value = !1))
            : ((r.value = !0),
              (l = setTimeout(function () {
                r.value = !1;
              }, 300)));
        }
      );
      var a = e.computed(function () {
          return t.showKeyboard && t.active;
        }),
        c = e.computed(function () {
          return !(!t.fontColor || !t.value || a.value || r.value);
        }),
        i = e.computed(function () {
          var n =
            ((e.StockBridge.ENV === e.EnvTypeEnum.MP
              ? (
                  (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
                  e.wx$1.getSystemInfoSync()
                ).screenWidth
              : window.innerWidth) /
              375) *
            9;
          return { right: "".concat(t.value.length * n + 2, "px") };
        }),
        s = e.computed(function () {
          return t.showKeyboard && !t.isDebt && [1, 2, 3, 4].includes(t.type);
        }),
        d = e.ref(null);
      return (
        e.onBeforeUnmount(function () {
          u && (clearTimeout(u), (u = null)),
            l && (clearTimeout(l), (l = null));
        }),
        {
          customInput: d,
          tagClick: function (e) {
            o("tagClick", e);
          },
          showTagList: s,
          showWarnIcon: c,
          warnIconStyle: i,
          handleTouchStart: function () {
            u = setTimeout(function () {
              o("longpress");
            }, 500);
          },
          handleTouchEnd: function () {
            u && (clearTimeout(u), (u = null));
          },
          handleTouchMove: function () {
            u && (clearTimeout(u), (u = null));
          },
          handleLongPress: function () {
            o("longpress");
          },
          handleDeleteClick: function () {
            o("delete");
          },
          handleWarnIconClick: function () {
            var e;
            null == (e = d.value) || e.focus();
          },
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("tagList") +
    e.resolveComponent("custom-input") +
    e.resolveComponent("bubble") +
    e.resolveComponent("switch-btn")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, u, l, r) {
      return e.e(
        { a: o.deleteActive },
        o.deleteActive
          ? {
              b: e.o(function () {
                return (
                  u.handleDeleteClick && u.handleDeleteClick.apply(u, arguments)
                );
              }, 2542),
            }
          : {},
        { c: e.t(o.label), d: o.tag },
        o.tag ? { e: e.t(o.tag) } : {},
        { f: u.showTagList },
        u.showTagList
          ? {
              g: e.o(u.tagClick, 2543),
              h: e.p({
                zxj: parseFloat(o.zxj),
                "is-up": o.focusIsUp,
                "show-price": o.focusPrice,
                "zdf-tag-list": o.zdfTagList,
                "price-acc": o.priceAcc,
              }),
            }
          : {},
        {
          i: e.sr("customInput", "fca527dc-0"),
          j: e.o(function (e) {
            return t.$emit("input", e);
          }, 2544),
          k: e.o(function (e) {
            return t.$emit("minus", e);
          }, 2545),
          l: e.o(function (e) {
            return t.$emit("plus", e);
          }, 2546),
          m: e.o(function (e) {
            return t.$emit("focus", e);
          }, 2547),
          n: e.o(function (e) {
            return t.$emit("blur", e);
          }, 2548),
          o: e.o(function (e) {
            return t.$emit("save", e);
          }, 2549),
          p: e.p({
            integer: !1,
            "max-length": 9,
            "text-align": "right",
            "key-board-theme": "custom",
            "extra-key": ".",
            "confirm-type": "done",
            "simple-mode": !0,
            stepper: !0,
            value: o.value,
            theme: o.theme,
            placeholder: o.placeholder,
            "font-color": o.fontColor,
          }),
          q: u.showWarnIcon,
        },
        u.showWarnIcon
          ? {
              r: e.s(u.warnIconStyle),
              s: e.o(function () {
                return (
                  u.handleWarnIconClick &&
                  u.handleWarnIconClick.apply(u, arguments)
                );
              }, 2550),
            }
          : {},
        { t: o.showBubble },
        o.showBubble
          ? {
              v: e.p({
                text: o.bubbleText,
                value: o.value,
                "background-color": o.bubbleColor,
              }),
            }
          : {},
        { w: o.unit },
        o.unit ? { x: e.t(o.unit) } : {},
        {
          y: e.n(o.chooseOn ? "" : "close"),
          z: e.o(function (e) {
            return t.$emit("toggleChoose");
          }, 2551),
          A: e.p({ "choose-on": !!o.value && o.chooseOn }),
          B: e.n(o.theme),
          C: e.n(o.showKeyboard && o.active ? "edit-mode" : ""),
          D: e.n(o.isDebt ? "is-debet" : ""),
          E: e.o(function () {
            return u.handleLongPress && u.handleLongPress.apply(u, arguments);
          }, 2552),
          F: e.o(function () {
            return u.handleTouchStart && u.handleTouchStart.apply(u, arguments);
          }, 2553),
          G: e.o(function () {
            return u.handleTouchEnd && u.handleTouchEnd.apply(u, arguments);
          }, 2554),
          H: e.o(function () {
            return u.handleTouchMove && u.handleTouchMove.apply(u, arguments);
          }, 2555),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fca527dc"],
]);
wx.createComponent(n);
