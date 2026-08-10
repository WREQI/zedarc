var e = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  n = require("../../../stores/apply/useProfile.js"),
  o = require("../../../stores/app/useMode.js"),
  r = {
    name: "ProfileSelect",
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
      Tabbar: function () {
        return "../../../common/components/Tabbar/index.js";
      },
      ProfileSelectItem: function () {
        return "./ProfileSelectItem.js";
      },
    },
    props: {
      value: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      selectKey: { type: String, required: !0, default: "edu" },
      keys: {
        type: Array,
        default: function () {
          return [];
        },
        required: !0,
      },
      title: {
        type: String,
        default: function () {
          return "请选择";
        },
      },
    },
    setup: function (r, a) {
      var u = a.emit,
        i = t.getCurrentInstance().proxy,
        l = t.storeToRefs(o.useModeStore()).simpleMode,
        c = t.ref(""),
        s = t.ref(""),
        f = n.useProfileStore(),
        p = t.storeToRefs(f),
        d = p.formList,
        m = p.formData,
        v = f.updateData,
        y = t.computed(function () {
          return (
            (
              d.value.filter(function (e) {
                return r.keys.includes(e.key);
              }) || []
            ).filter(function (e) {
              return !e.disabled;
            }) || []
          );
        });
      (c.value = r.selectKey), t.provide("profileShowData", y);
      var b = t.computed(function () {
          return y.value.map(function (e) {
            return {
              value: null == e ? void 0 : e.key,
              label: e.content || e.label,
            };
          });
        }),
        h = t.computed(function () {
          var e;
          return null == (e = b.value)
            ? void 0
            : e.findIndex(function (e) {
                return e.value === c.value;
              });
        });
      function k(e) {
        e || u("close", !1);
      }
      return {
        showData: y,
        formData: m,
        formList: d,
        activeTab: c,
        simpleMode: l,
        handleZXGAppSwipeActionChange: function (e) {
          i.$sdk.handleJSTouchEventFirst(e).catch(t.noop);
        },
        onChange: function (e) {
          var t = e.detail.current;
          b.value[t] && (c.value = b.value[t].value);
        },
        tabBarData: b,
        currentTabIndex: h,
        swiperHeight: s,
        changeItem: function (n, o) {
          var r = n.id,
            a = n.key,
            u = y.value.findIndex(function (e) {
              return e.key === a;
            }),
            i = y.value[u];
          if (i.feIds[0] !== r) {
            i.feIds[0] = r;
            var l = e({}, i.key, i.feIds[0]);
            t.isEmpty(o) || Object.assign(l, o), v({ data: l });
          }
          var s = y.value[u + 1];
          s ? (c.value = null == s ? void 0 : s.key) : k();
        },
        onClose: k,
        onBeforeClose: function (e) {
          e && e();
        },
      };
    },
  };
Array ||
  (
    t.resolveComponent("Tabbar") +
    t.resolveComponent("ProfileSelectItem") +
    t.resolveComponent("mp-action-sheet")
  )();
var a = t._export_sfc(r, [
  [
    "render",
    function (e, n, o, r, a, u) {
      return {
        a: t.o(function (e) {
          return (r.activeTab = e);
        }),
        b: t.p({
          value: r.activeTab,
          border: !1,
          "simple-mode": r.simpleMode,
          data: r.tabBarData,
        }),
        c: t.f(r.showData, function (e, n, o) {
          return {
            a: t.o(r.changeItem, e.key),
            b: "201a3877-2-" + o + ",201a3877-0",
            c: t.p({
              "select-key": e.key,
              "form-data": r.formData,
              "form-list": r.formList,
            }),
            d: e.key,
          };
        }),
        d: r.currentTabIndex,
        e: t.o(function () {
          return r.onChange && r.onChange.apply(r, arguments);
        }),
        f: t.o(function (e) {
          return r.handleZXGAppSwipeActionChange(!0);
        }),
        g: t.o(function (e) {
          return r.handleZXGAppSwipeActionChange(!1);
        }),
        h: t.o(r.onClose),
        i: t.p({
          "picker-style": !0,
          "mask-closable": !0,
          "before-close": r.onBeforeClose,
          value: o.value,
          title: o.title,
          "confirm-txt": " ",
          "show-title-border-bottom": !1,
        }),
      };
    },
  ],
]);
wx.createComponent(a);
