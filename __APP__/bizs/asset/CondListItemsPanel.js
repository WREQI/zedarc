require("../../app.js");
var t = require("../../common/vendor.js"),
  e = require("../../model/trade/conditions/utils.js"),
  n = require("../../config/enum/condition.js"),
  o = require("../../model/debt/debtAutoOrderTime.js"),
  i = t.defineComponent({
    name: "CondListItemsPanel",
    components: {
      CondListItem: function () {
        return "../../pages/trade/components/condition/CondListItem.js";
      },
      Empty: function () {
        return "../../components/Empty/Empty.js";
      },
      Status: function () {
        return "../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      status: { type: Number, required: !0 },
      emptyText: { type: String, required: !0 },
      jumpType: { type: String, default: "push" },
      showButton: { type: Boolean, default: !1 },
      simpleMode: { type: Boolean, default: !1 },
      condFetchStatus: { type: String, default: "done" },
    },
    emits: ["jump-history", "create-cond", "fetch-cond-list"],
    setup: function (i) {
      var s = t.inject("isAssetCondTabActive", { value: !1 });
      return {
        calcHeight: function (t) {
          return e.calcCondItemHeight(t.data);
        },
        timeGuideItemIndex: t.computed(function () {
          var t, e, u;
          return (null == s ? void 0 : s.value) &&
            i.status === n.CondStatus.WAIT &&
            null !==
              (t =
                null == (u = null == (e = i.lists) ? void 0 : e.findIndex)
                  ? void 0
                  : u.call(e, o.shouldShowDebtAutoOrderTimeGuide)) &&
            void 0 !== t
            ? t
            : -1;
        }),
        COND_CURRENT_SCENE: n.COND_CURRENT_SCENE,
      };
    },
  });
Array ||
  (
    t.resolveComponent("CondListItem") +
    t.resolveComponent("Empty") +
    t.resolveComponent("Status")
  )(),
  Math;
var s = t._export_sfc(i, [
  [
    "render",
    function (e, n, o, i, s, u) {
      return t.e(
        { a: "done" === e.condFetchStatus },
        "done" === e.condFetchStatus
          ? t.e(
              { b: e.lists.length > 0 },
              e.lists.length > 0
                ? {
                    c: t.f(e.lists, function (n, o, i) {
                      return {
                        a: n.cond_id,
                        b: "4ea32808-0-" + i,
                        c: t.p({
                          data: n,
                          "jump-type": e.jumpType,
                          "state-type": e.status,
                          "show-button": !e.showButton,
                          scene: e.COND_CURRENT_SCENE.assetIndex,
                          "show-time-guide": e.timeGuideItemIndex === o,
                        }),
                      };
                    }),
                    d: t.o(function (t) {
                      return e.$emit("jump-history");
                    }),
                    e: t.n(e.simpleMode ? "cond-list-simple" : ""),
                  }
                : {
                    f: t.o(function (t) {
                      return e.$emit("jump-history");
                    }),
                    g: t.p({
                      "custom-cls":
                        "condition-tab-empty ^^condition-tab-empty ^^^condition-tab-empty",
                      "bottom-border-radius": e.simpleMode,
                      text: e.emptyText,
                    }),
                  }
            )
          : {
              h: t.o(function (t) {
                return e.$emit("fetch-cond-list");
              }),
              i: t.p({
                "is-simple-mode": e.simpleMode,
                type: e.condFetchStatus,
                "show-btn": !0,
                "error-tips": "数据拉取失败",
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-4ea32808"],
]);
wx.createComponent(s);
