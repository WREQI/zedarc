require("../../../../app.js");
var t = require("../../../../config/enum/condition.js"),
  e = require("../../../../stores/app/useMode.js"),
  s = require("../../../../common/vendor.js"),
  a = {
    name: "ConditionListTab",
    props: {
      activeStatus: { type: [String, Number], required: !0 },
      showButton: { type: Boolean, default: !1 },
    },
    emits: ["status-change", "create-click"],
    setup: function (a, n) {
      var u = n.emit,
        o = e.useModeStore(),
        r = s.storeToRefs(o).simpleMode;
      return {
        displayedStatusList: [
          {
            status: t.CondStatus.WAIT,
            text: t.CondStatusText[t.CondStatus.WAIT],
          },
          {
            status: t.CondStatus.INVALID,
            text: t.CondStatusText[t.CondStatus.INVALID],
          },
          {
            status: t.CondStatus.COMPLETE,
            text: t.CondStatusText[t.CondStatus.COMPLETE],
          },
        ],
        handleTabClick: function (t) {
          u("status-change", t);
        },
        handleCreateClick: function () {
          u("create-click");
        },
        simpleMode: r,
      };
    },
  },
  n = s._export_sfc(a, [
    [
      "render",
      function (t, e, a, n, u, o) {
        return s.e(
          {
            a: s.f(n.displayedStatusList, function (t, e, u) {
              return {
                a: s.t(t.text),
                b: t.status,
                c: Number(a.activeStatus) === Number(t.status) ? 1 : "",
                d: s.o(function (e) {
                  return n.handleTabClick(t.status);
                }, t.status),
              };
            }),
            b: a.showButton,
          },
          a.showButton
            ? {
                c: s.o(function () {
                  return (
                    n.handleCreateClick &&
                    n.handleCreateClick.apply(n, arguments)
                  );
                }),
              }
            : {},
          { d: s.n(n.simpleMode ? "simple-mode" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-edbd59f7"],
  ]);
wx.createComponent(n);
