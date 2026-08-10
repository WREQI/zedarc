require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  t = require("../../../model/trade/useConditionRecords.js"),
  r = require("../../../stores/app/useMode.js"),
  i = require("../../../model/trade/useConditionEntry.js"),
  a = require("../../../config/enum/condition.js"),
  l = require("../../../model/debt/debtAutoOrderTime.js"),
  d = {
    name: "ConditionList",
    components: {
      Tabbar: function () {
        return "../../../common/components/Tabbar/index.js";
      },
      CondListItem: function () {
        return "../components/condition/CondListItem.js";
      },
      ConditionStrategy: function () {
        return "../components/condition/ConditionStrategy.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    mixins: [require("../../../mixin/platforms/index.js").pluginMixins],
    setup: function () {
      var d,
        u = o.getCurrentInstance().proxy,
        s = o.ref(0),
        c = o.ref(0),
        p = t.useConditionRecords(),
        m = p.getRecords,
        C = p.conditionRecords,
        v = o.ref(!0),
        b = o.ref(!0),
        f = i.useConditionEntry(),
        T = f.isShowCondStrategy,
        g = f.clickCreateCond,
        h = f.createCondByType,
        S = o.ref(a.ConditionTabs.Running),
        y = o.computed(function () {
          var e = C.totalNum[0] ? "(".concat(C.totalNum[0], ")") : "";
          return [
            {
              value: a.ConditionTabs.Running,
              label: "运行中".concat(e),
              emptyTxt: "运行中",
            },
            {
              value: a.ConditionTabs.Invalid,
              label: "已失效",
              emptyTxt: "已失效",
            },
            {
              value: a.ConditionTabs.Triggered,
              label: "触发记录",
              emptyTxt: "已触发",
            },
          ];
        }),
        x = o.computed(function () {
          var e = y.value.find(function (e) {
            return e.value === S.value;
          });
          return e
            ? "没有".concat(e.emptyTxt, "的条件单")
            : "没有相关状态条件单";
        }),
        R = o.computed(function () {
          return "".concat(S.value);
        }),
        w = o.computed(function () {
          var e, n, o;
          return S.value !== a.ConditionTabs.Running
            ? -1
            : null !==
                (e =
                  null ==
                  (o =
                    null == (n = C.lists) ? void 0 : n[a.ConditionTabs.Running])
                    ? void 0
                    : o.findIndex(l.shouldShowDebtAutoOrderTimeGuide)) &&
              void 0 !== e
            ? e
            : -1;
        }),
        E = r.useModeStore(),
        I = o.storeToRefs(E).simpleMode;
      return {
        isFirstEnter: v,
        tabs: y,
        selectedTab: S,
        selectedTabStr: R,
        emptyText: x,
        change: function (e) {
          (S.value = +e || a.ConditionTabs.Running),
            (s.value = c.value),
            u.$nextTick(function () {
              s.value = 0;
            }),
            m(S.value, !0),
            u.$stat.click("assetall.cond.tab_".concat(e));
        },
        onScrolltolower: function () {
          !C.fetching[S.value] && C.hasData[S.value] && m(S.value, !1);
        },
        getRecords: m,
        conditionRecords: C,
        getStateType: function (e) {
          return +e + 1;
        },
        simpleMode: I,
        handleShow:
          ((d = n(
            e().mark(function n() {
              var t;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (v.value &&
                            ((v.value = !1),
                            +(t = u.$route.query.status) ===
                              a.CondStatus.WAIT &&
                              (S.value = a.ConditionTabs.Running),
                            +t === a.CondStatus.COMPLETE &&
                              (S.value = a.ConditionTabs.Triggered),
                            +t === a.CondStatus.INVALID &&
                              (S.value = a.ConditionTabs.Invalid)),
                          !b.value)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return (e.prev = 2), (e.next = 5), m(S.value, !0);
                      case 5:
                        e.next = 10;
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(2)),
                          o.index.showToast({
                            title: e.t0.retmsg,
                            icon: "none",
                          });
                      case 10:
                        b.value = !0;
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[2, 7]]
              );
            })
          )),
          function () {
            return d.apply(this, arguments);
          }),
        isShowCondStrategy: T,
        goToCreateCond: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.orderType;
          h({ orderType: n });
        },
        handleCreateCond: function () {
          u.$stat.click(
            "trade.condition.condition_index_create_cond_btn_click"
          ),
            g();
        },
        scrollTop: s,
        handleScroll: function (e) {
          c.value = e.detail.scrollTop;
        },
        handleCondDetailClick: function () {
          [a.ConditionTabs.Invalid, a.ConditionTabs.Triggered].includes(
            S.value
          ) && (b.value = !1);
        },
        COND_CURRENT_SCENE: a.COND_CURRENT_SCENE,
        timeGuideItemIndex: w,
      };
    },
    onShow: function () {
      this.handleShow();
    },
  };
Array ||
  (
    o.resolveComponent("Tabbar") +
    o.resolveComponent("CondListItem") +
    o.resolveComponent("Empty") +
    o.resolveComponent("ConditionStrategy") +
    o.resolveComponent("MpDialog") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/Empty/Empty.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var u = o._export_sfc(d, [
  [
    "render",
    function (e, n, t, r, i, a) {
      return o.e(
        {
          a: e.rootFontSize,
          b: o.o(r.change),
          c: o.p({
            value: r.selectedTabStr,
            "show-slider": !0,
            data: r.tabs,
            border: !1,
          }),
          d: o.o(function () {
            return r.handleCreateCond && r.handleCreateCond.apply(r, arguments);
          }),
          e: o.n(r.simpleMode ? "" : "border--bottom"),
          f: r.conditionRecords.lists[r.selectedTab].length,
        },
        r.conditionRecords.lists[r.selectedTab].length
          ? {
              g: o.f(
                r.conditionRecords.lists[r.selectedTab],
                function (e, n, t) {
                  return {
                    a: n,
                    b: o.o(r.handleCondDetailClick, n),
                    c: "10f03ca0-2-" + t + ",10f03ca0-0",
                    d: o.p({
                      data: e,
                      "state-type": r.getStateType(r.selectedTab),
                      scene: r.COND_CURRENT_SCENE.condIndex,
                      "show-time-guide": r.timeGuideItemIndex === n,
                    }),
                  };
                }
              ),
              h: r.scrollTop,
              i: o.o(function () {
                return r.handleScroll && r.handleScroll.apply(r, arguments);
              }),
              j: o.o(function () {
                return (
                  r.onScrolltolower && r.onScrolltolower.apply(r, arguments)
                );
              }),
            }
          : { k: o.p({ text: r.emptyText }) },
        {
          l: o.o(function (e) {
            return (r.isShowCondStrategy = e);
          }),
          m: o.o(function (e) {
            return (r.isShowCondStrategy = !1);
          }),
          n: o.o(r.goToCreateCond),
          o: o.o(function (e) {
            return (r.isShowCondStrategy = !1);
          }),
          p: o.p({ value: r.isShowCondStrategy, scene: "conditionIndex" }),
          q: o.p({ id: "mp-dialog" }),
          r: o.n(r.simpleMode ? "records-container__simple-mode" : ""),
          s: o.sr("#global-wrap", "10f03ca0-0"),
          t: o.p({
            id: "global-wrap",
            filePath: "/trade/condition/index",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(u);
