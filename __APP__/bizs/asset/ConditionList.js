var t = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var e = require("../../common/vendor.js"),
  n = require("../../model/trade/useConditionEntry.js"),
  o = require("../../stores/app/useMode.js"),
  s = require("../../model/trade/conditions/utils.js"),
  u = require("../../model/trade/conditions/useCondTag.js"),
  a = require("../../config/enum/condition.js"),
  i = {
    options: { styleIsolation: "shared" },
    components: {
      CondListItem: function () {
        return "../../pages/trade/components/condition/CondListItem.js";
      },
      ConditionListTab: function () {
        return "../../pages/trade/components/condition/ConditionListTab.js";
      },
      CondListItemsPanel: function () {
        return "./CondListItemsPanel.js";
      },
      CustomSwiper: function () {
        return "../../components/CustomSwiper/CustomSwiper.js";
      },
    },
    props: {
      jumpType: { type: String, default: "push" },
      showButton: { type: Boolean, default: !1 },
    },
    setup: function () {
      var i = e.getCurrentInstance().proxy,
        d = e.inject("noTriggerConditionList"),
        r = e.inject("condStatusType"),
        c = e.inject("setCondStatusType"),
        l = e.inject("condFetchStatus"),
        C = e.inject("fetchCondList"),
        p = o.useModeStore(),
        m = e.storeToRefs(p).simpleMode,
        S = n.useConditionEntry().ASSET_TAB_MAX_SHOW,
        v = e.ref(0),
        h = e.computed(function () {
          var t;
          return (
            (null == (t = null == d ? void 0 : d.value)
              ? void 0
              : t[a.CondStatus.WAIT]) || []
          ).slice(0, S);
        }),
        T = e.computed(function () {
          var t;
          return (
            (null == (t = null == d ? void 0 : d.value)
              ? void 0
              : t[a.CondStatus.COMPLETE]) || []
          ).slice(0, S);
        }),
        f = e.computed(function () {
          var t;
          return (
            (null == (t = null == d ? void 0 : d.value)
              ? void 0
              : t[a.CondStatus.INVALID]) || []
          ).slice(0, S);
        }),
        I = e.computed(function () {
          var t, e, n;
          return [
            {
              status: a.CondStatus.WAIT,
              lists: h.value,
              emptyText: "没有待运行的条件单",
              fetchStatus:
                null == (t = l.value) ? void 0 : t[a.CondStatus.WAIT],
            },
            {
              status: a.CondStatus.INVALID,
              lists: f.value,
              emptyText: "没有已失效的条件单",
              fetchStatus:
                null == (e = l.value) ? void 0 : e[a.CondStatus.INVALID],
            },
            {
              status: a.CondStatus.COMPLETE,
              lists: T.value,
              emptyText: "没有已触发的条件单",
              fetchStatus:
                null == (n = l.value) ? void 0 : n[a.CondStatus.COMPLETE],
            },
          ];
        }),
        L = u.useCondTag(),
        y = L.calcTags,
        g = L.condTagMaps,
        j = e.throttle(y, 1e3, { trailing: !1 });
      return (
        e.provide("condTagMaps", g),
        e.watch(
          function () {
            var t;
            return null == (t = null == d ? void 0 : d.value)
              ? void 0
              : t[a.CondStatus.WAIT];
          },
          function (t) {
            t && t.length && r.value === a.CondStatus.WAIT && j(t);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return r.value;
          },
          function () {
            C();
          }
        ),
        {
          condListConfigs: I,
          currentSwiperIndex: v,
          simpleMode: m,
          condFetchStatus: l,
          jumpCondHistory: function () {
            var e;
            i.$stat.click("trade.condlist.more");
            var n = {
              status: ((e = {}),
              t(e, a.CondStatus.WAIT, a.CondStatus.WAIT),
              t(e, a.CondStatus.INVALID, a.CondStatus.INVALID),
              t(e, a.CondStatus.COMPLETE, a.CondStatus.COMPLETE),
              e)[r.value],
            };
            i.$router.push({ name: "ConditionList", query: n });
          },
          handleCreateCond: function () {
            i.$emit("createCond");
          },
          handleStatusChange: function (e) {
            var n,
              o =
                (t((n = {}), a.CondStatus.WAIT, 0),
                t(n, a.CondStatus.INVALID, 1),
                t(n, a.CondStatus.COMPLETE, 2),
                n);
            (v.value = o[e] || 0), c(e);
          },
          handleFetchCondList: function () {
            i.$emit("fetchCondList");
          },
          calcHeight: function (t) {
            return s.calcCondItemHeight(t.data);
          },
          condStatusType: r,
          COND_CURRENT_SCENE: a.COND_CURRENT_SCENE,
          CondStatus: a.CondStatus,
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("ConditionListTab") +
    e.resolveComponent("CondListItemsPanel") +
    e.resolveComponent("CustomSwiper")
  )(),
  Math;
var d = e._export_sfc(i, [
  [
    "render",
    function (t, n, o, s, u, a) {
      return {
        a: e.o(s.handleStatusChange),
        b: e.o(s.handleCreateCond),
        c: e.p({
          "active-status": s.condStatusType,
          "show-button": o.showButton,
        }),
        d: e.w(
          function (t, n, u) {
            var a = t.item;
            return {
              a: "6451c8b3-2-" + u + ",6451c8b3-1",
              b: e.p({
                lists: a.lists,
                status: a.status,
                "empty-text": a.emptyText,
                "jump-type": o.jumpType,
                "show-button": o.showButton,
                "simple-mode": s.simpleMode,
                "cond-fetch-status": a.fetchStatus,
              }),
              c: u,
              d: n,
            };
          },
          { name: "d", path: "d", vueId: "6451c8b3-1" }
        ),
        e: e.o(s.jumpCondHistory),
        f: e.o(s.handleCreateCond),
        g: e.o(s.handleFetchCondList),
        h: e.p({
          items: s.condListConfigs,
          current: s.currentSwiperIndex,
          duration: 300,
        }),
      };
    },
  ],
]);
wx.createComponent(d);
